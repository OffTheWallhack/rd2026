/* durica.si/linky — ASCII vlny (3 vrstvy + zelený kruh pod prstom), ochrana pred kopírovaním a zoomom, hodiny, štatistiky kliknutí */
(function () {
  'use strict';

  var CW = 3.6, RH = 6.6, H = 53;           // šírka znaku, výška riadku (px), počet riadkov
  var hero = document.getElementById('hero');
  var asc = document.getElementById('asc');
  var pre = [null, document.getElementById('l1'), document.getElementById('l2'), document.getElementById('l3'), document.getElementById('l4')];
  var bar = document.getElementById('bar');
  var clock = document.getElementById('clock');
  var reduced = false;
  try { reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches; } catch (e) {}

  /* ---------- vlnová simulácia ---------- */
  var W = 110;
  var layers = [
    { top: 13, bot: 31, D: 8,  k: 1, flat: '.', low: '.', amp0: 1.0, amp1: 2.8, f: 0.8,  sp: 0.7,  ph: 0.0, gain: 0.6 },
    { top: 23, bot: 42, D: 9,  k: 2, flat: '-', low: '_', amp0: 1.2, amp1: 3.6, f: 1.0,  sp: 1.0,  ph: 2.1, gain: 0.85 },
    { top: 34, bot: 52, D: 10, k: 3, flat: '=', low: '_', amp0: 1.4, amp1: 4.2, f: 1.25, sp: 1.35, ph: 4.2, gain: 1.0 }
  ];
  var ptr = { on: false, down: false, x: 0, y: 0, vx: 0, vy: 0, t: 0, t0: 0 };
  var tilt = { gx: 0, gy: 0, tx: 0, ty: 0, gyro: 0 };
  var energy = 0, sy = 0, lastSy = 0, lastSyT = 0;

  function alloc() {
    var w = Math.max(60, Math.ceil(hero.clientWidth / CW) + 2);
    if (w === W && layers[0].u) return;
    W = w;
    layers.forEach(function (L) { L.u = new Float32Array(W * L.D); L.v = new Float32Array(W * L.D); });
    asc.style.width = (W * CW) + 'px';
  }

  function shiftOf(z) { return Math.round(tilt.gx * 14 * (1 - z)); }
  function baseOf(L, z) { return L.top + (L.bot - L.top) * Math.pow(z, 1.2) + tilt.gy * 3 * (1 - z); }
  function toSim(L, col, row) {
    var z = Math.pow(Math.max(0, Math.min(1, (row - L.top) / (L.bot - L.top))), 1 / 1.2);
    return [col - shiftOf(z), z * (L.D - 1)];
  }
  function splash(L, sx, sd, amp, rad) {
    var D = L.D, u = L.u, r2 = rad * rad;
    for (var d = Math.max(0, Math.floor(sd - rad * 1.6)); d <= Math.min(D - 1, Math.ceil(sd + rad * 1.6)); d++) {
      for (var x = Math.max(0, Math.floor(sx - rad * 3.4)); x <= Math.min(W - 1, Math.ceil(sx + rad * 3.4)); x++) {
        var dx = (x - sx) / 3.4, dd = (d - sd) * 1.2;
        var g = Math.exp(-(dx * dx + dd * dd) / r2);
        if (g > 0.02) u[d * W + x] += amp * g;
      }
    }
  }
  function splashAll(col, row, amp, rad) {
    layers.forEach(function (L) {
      var out = row < L.top ? L.top - row : (row > L.bot ? row - L.bot : 0);
      var g = Math.exp(-out / 7) * L.gain;
      if (g < 0.05) return;
      var s = toSim(L, col, row);
      splash(L, s[0], s[1], amp * g, rad);
    });
  }

  function step(t) {
    var p = ptr;
    if (performance.now() - tilt.gyro > 1500) {            // bez gyra: náklon podľa myši
      tilt.tx = p.on ? (p.x / W - 0.5) * 2 * 0.7 : 0;
      tilt.ty = p.on ? (p.y / H - 0.5) * 2 * 0.5 : 0;
    }
    tilt.gx += (tilt.tx - tilt.gx) * 0.12;
    tilt.gy += (tilt.ty - tilt.gy) * 0.12;

    if (p.on) {
      var spd = Math.hypot(p.vx, p.vy);
      if (p.down) splashAll(p.x, p.y, -0.5, 3.2);
      else if (spd > 1.2) splashAll(p.x, p.y, Math.min(spd * 0.02, 1.0), 2.8);
      energy = Math.min(1.6, energy + Math.min(spd * 0.003, 0.08));
      p.vx *= 0.7; p.vy *= 0.7;
    }
    energy *= 0.95;

    var c2 = reduced ? 0.1 : 0.2;
    layers.forEach(function (L) {
      var D = L.D, u = L.u, v = L.v;
      for (var s = 0; s < 2; s++) {
        for (var d = 0; d < D; d++) {
          for (var x = 0; x < W; x++) {
            var i = d * W + x, c = u[i];
            var l = x > 0 ? u[i - 1] : c, r = x < W - 1 ? u[i + 1] : c;
            var a = d > 0 ? u[i - W] : c, b = d < D - 1 ? u[i + W] : c;
            var tgt = tilt.gx * (x - W / 2) * 0.03;
            v[i] = (v[i] + c2 * (l + r + a + b - 4 * c) - 0.004 * (c - tgt)) * 0.988;
          }
        }
        for (var j = 0; j < W * D; j++) { var n = u[j] + v[j]; u[j] = n > 2.2 ? 2.2 : (n < -2.2 ? -2.2 : n); }
      }
    });

    var tm = reduced ? t * 0.25 : t;
    var amb = 0.8 + energy * 0.9;
    var cells = new Array(W * H).fill(' ');
    var lvl = new Uint8Array(W * H);

    layers.forEach(function (L) {
      var D = L.D, u = L.u;
      for (var d = 0; d < D; d++) {
        var z = d / (D - 1);
        var base = baseOf(L, z);
        var amp = L.amp0 + (L.amp1 - L.amp0) * z;
        var sh = shiftOf(z);
        var fill = 1 + Math.round(z);
        var prevY = null;
        for (var x = 0; x < W; x++) {
          var hgt = u[d * W + x] + amb * (
            0.5 * Math.sin(x * 0.085 * L.f + tm * 1.05 * L.sp + d * 0.1 + L.ph + tilt.gx * 2.2) +
            0.35 * Math.sin(x * 0.036 * L.f - tm * 0.7 * L.sp + d * 0.22 + 1.7 + L.ph) +
            0.3 * Math.sin(d * 0.55 - tm * 1.4 * L.sp + x * 0.012 + L.ph));
          var yy = Math.round(base - hgt * amp);
          var cx = x + sh;
          if (cx < 0 || cx >= W) { prevY = yy; continue; }
          for (var y = Math.max(0, yy + 1); y < H; y++) { cells[y * W + cx] = ' '; lvl[y * W + cx] = 0; }
          if (yy < 0 || yy >= H) { prevY = yy; continue; }
          var ch = hgt < -0.6 ? L.low : L.flat;
          if (prevY !== null) {
            var dy = yy - prevY;
            if (dy < 0) ch = '/'; else if (dy > 0) ch = '\\';
            var lo = Math.min(yy, prevY), hi = Math.max(yy, prevY);
            for (var q = lo + 1; q < hi; q++) { if (q >= 0 && q < H) { cells[q * W + cx] = '|'; lvl[q * W + cx] = L.k; } }
          }
          cells[yy * W + cx] = ch; lvl[yy * W + cx] = L.k;
          for (var f = 1; f <= fill; f++) {
            var fy = yy + f;
            if (fy < H && ((cx + (fy << 1)) % 3) === 0) { cells[fy * W + cx] = '.'; lvl[fy * W + cx] = L.k; }
          }
          prevY = yy;
        }
      }
    });

    if (p.on) {                                             // zelený kruh pod prstom
      var R2 = 36 * 36;
      for (var yy2 = 0; yy2 < H; yy2++) {
        var ddy = (yy2 - p.y) * RH;
        if (ddy * ddy > R2) continue;
        for (var xx = 0; xx < W; xx++) {
          var ddx = (xx - p.x) * CW, ii = yy2 * W + xx;
          if (lvl[ii] && ddx * ddx + ddy * ddy < R2) lvl[ii] = 4;
        }
      }
    }

    for (var k = 1; k <= 4; k++) {
      var rows = [];
      for (var ry = 0; ry < H; ry++) {
        var str = '';
        for (var rx = 0; rx < W; rx++) { var ci = ry * W + rx; str += lvl[ci] === k ? cells[ci] : ' '; }
        rows.push(str);
      }
      pre[k].textContent = rows.join('\n');
    }
  }

  /* ---------- vstupy ---------- */
  function heroPos(e) {
    var r = hero.getBoundingClientRect();
    return [((e.clientX - r.left) / r.width) * W, ((e.clientY - r.top) / r.height) * H];
  }
  var asked = false;
  hero.addEventListener('pointermove', function (e) {
    var c = heroPos(e), now = performance.now();
    if (ptr.on) {
      var dtm = Math.max(8, now - ptr.t);
      ptr.vx = ((c[0] - ptr.x) / dtm) * 1000 * 0.2 + ptr.vx * 0.5;
      ptr.vy = ((c[1] - ptr.y) / dtm) * 1000 * 0.2 + ptr.vy * 0.5;
    }
    ptr.x = c[0]; ptr.y = c[1]; ptr.on = true; ptr.t = now;
  });
  hero.addEventListener('pointerdown', function (e) {
    var c = heroPos(e);
    ptr.x = c[0]; ptr.y = c[1]; ptr.on = true; ptr.down = true; ptr.t = ptr.t0 = performance.now();
    try {
      if (!asked && typeof DeviceOrientationEvent !== 'undefined' && typeof DeviceOrientationEvent.requestPermission === 'function') {
        asked = true; DeviceOrientationEvent.requestPermission().catch(function () {});
      }
    } catch (err) {}
  });
  hero.addEventListener('pointerup', function (e) {
    var c = heroPos(e);
    ptr.down = false;
    splashAll(c[0], c[1], performance.now() - ptr.t0 > 250 ? 4.5 : 3, 3.6);
    energy = Math.min(1.6, energy + 0.5);
  });
  function leave() { ptr.on = false; ptr.down = false; ptr.vx = 0; ptr.vy = 0; }
  hero.addEventListener('pointerleave', leave);
  hero.addEventListener('pointercancel', leave);

  window.addEventListener('deviceorientation', function (e) {
    if (e.gamma == null) return;
    tilt.tx = Math.max(-1, Math.min(1, e.gamma / 32));
    tilt.ty = Math.max(-1, Math.min(1, ((e.beta || 0) - 50) / 36));
    tilt.gyro = performance.now();
  }, true);

  window.addEventListener('scroll', function () {
    var st = window.pageYOffset || document.documentElement.scrollTop || 0, now = performance.now();
    var sp = Math.abs(st - lastSy) / Math.max(1, now - lastSyT) * 1000;
    energy = Math.min(1.6, energy + Math.min(sp * 0.0006, 0.25));
    lastSy = st; lastSyT = now; sy = st;
    bar.classList.toggle('on', st > 40);
  }, { passive: true });

  /* ---------- slučka ---------- */
  var visible = true, last = 0;
  if ('IntersectionObserver' in window) {
    new IntersectionObserver(function (en) { visible = en[0].isIntersecting; }).observe(hero);
  }
  function loop(ts) {
    requestAnimationFrame(loop);
    if (!visible || document.hidden || ts - last < 30) return;
    last = ts;
    asc.style.transform = 'translateY(' + Math.round(Math.min(sy, 620) * 0.3) + 'px)';
    step(ts / 1000);
  }
  alloc();
  step(0);
  requestAnimationFrame(loop);
  window.addEventListener('resize', alloc);

  /* ---------- statické ASCII v kartách ---------- */
  function scene(w, rows, items, smoke) {
    var g = [], r, x;
    for (r = 0; r < rows; r++) { g.push([]); for (x = 0; x < w; x++) g[r].push(' '); }
    var ground = rows - 1;
    for (x = 0; x < w; x++) g[ground][x] = '=';
    items.forEach(function (it) {
      var spr = it[1], y0 = ground - spr.length;
      spr.forEach(function (ln, i) {
        for (var j = 0; j < ln.length; j++) {
          var gx = it[0] + j, gy = y0 + i;
          if (ln[j] !== ' ' && gx >= 0 && gx < w && gy >= 0) g[gy][gx] = ln[j];
        }
      });
    });
    (smoke || []).forEach(function (s) { if (g[s[1]]) g[s[1]][s[0]] = '~'; });
    return g.map(function (a) { return a.join(''); }).join('\n');
  }
  var T = ['  ^  ', ' /|\\ ', '/_|_\\', '  |  '];
  var Hs = ['  /\\  ', ' /  \\ ', '/____\\', '|[]  |', '|__[]|'];
  var HB = ['   _____   ', '  /     \\  ', ' /_______\\ ', ' |  [ ]  | ', ' |_______| '];
  var TW = ['  |> ', '|^|^|', '| _ |', '|[ ]|', '|___|'];
  var village = document.getElementById('village');
  if (village) village.textContent = scene(46, 12, [[0, T], [4, Hs], [11, T], [15, HB], [26, T], [31, TW], [38, T]], [[18, 5], [19, 3], [20, 1]]);
  var acid = document.getElementById('acid');
  if (acid) {
    var wv = [], wr, wx, WW = 62;
    for (wr = 0; wr < 6; wr++) { wv.push([]); for (wx = 0; wx < WW; wx++) wv[wr].push(' '); }
    for (wx = 0; wx < WW; wx++) {
      if ((wx % 16) < 8) wv[1][wx] = '-'; else wv[3][wx] = '-';
      if ((wx % 8) === 0 && wx > 0) wv[2][wx] = '|';
      wv[0][wx] = Math.sin(wx * 0.4) > 0.55 ? '.' : ' ';
      wv[4][wx] = Math.sin(wx * 0.4 + 2) > 0.55 ? '.' : ' ';
    }
    '(o)   (o)   (o)   (o)'.split('').forEach(function (c, i) { if (30 + i < WW) wv[5][30 + i] = c; });
    acid.textContent = wv.map(function (a) { return a.join(''); }).join('\n');
  }

  /* ---------- hodiny ---------- */
  function tick() {
    try { clock.textContent = new Date().toLocaleTimeString('sk-SK', { hour: '2-digit', minute: '2-digit', timeZone: 'Europe/Bratislava' }); } catch (e) {}
  }
  tick(); setInterval(tick, 20000);

  /* ---------- ochrana: kopírovanie, označovanie, ťahanie, priblíženie ---------- */
  var stop = function (e) { e.preventDefault(); };
  ['copy', 'cut', 'contextmenu', 'dragstart', 'selectstart', 'dblclick'].forEach(function (n) { document.addEventListener(n, stop); });
  ['gesturestart', 'gesturechange', 'gestureend'].forEach(function (n) { document.addEventListener(n, stop, { passive: false }); });
  document.addEventListener('touchmove', function (e) { if (e.touches && e.touches.length > 1) e.preventDefault(); }, { passive: false });
  document.addEventListener('wheel', function (e) { if (e.ctrlKey) e.preventDefault(); }, { passive: false });
  var lastTouch = 0;
  document.addEventListener('touchend', function (e) {          // dvojité ťuknutie = žiadny zoom
    var n = Date.now();
    if (n - lastTouch < 300 && !(e.target.closest && e.target.closest('a'))) e.preventDefault();
    lastTouch = n;
  }, { passive: false });

  /* ---------- štatistika kliknutí (GoatCounter, bez cookies) ---------- */
  document.addEventListener('click', function (e) {
    var a = e.target.closest && e.target.closest('a[data-gc]');
    if (!a || !window.goatcounter || !window.goatcounter.count) return;
    var n = 'linky-' + a.getAttribute('data-gc');
    window.goatcounter.count({ path: n, title: n, event: true });
  });
})();
