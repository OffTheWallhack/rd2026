/* RD.wave: a glowing dune drawn out of characters, dots and squares.
   One bright ridge runs across the canvas; the light is strongest on the crest, scatters softly upward and falls off fast below it.
   Drawn with the glyph atlases from common.js, so thousands of cells per frame stay cheap on phones. */
(function () {
  var RD = window.RD; if (!RD) return;
  var still = RD.still;
  RD.wave = function (cv, opt) {
    var ctx = cv && cv.getContext("2d"); if (!ctx) return;
    opt = opt || {};
    var pal = opt.colors || ["#3A1606", "#FF6A1F", "#FFD5A6"];   // dark · mid · hot
    var RAMP = opt.chars || "·.:-=+*#%■";   // squares only at the very crest
    var N = 22, W = 0, H = 0, dpr = 1, cw = 9, ch = 14, cols = 0, rows = 0, small = false, step = 50;
    var t0 = performance.now(), last = 0, running = true, seed = opt.seed || 1, speed = opt.speed == null ? 1 : opt.speed;
    var y0 = opt.y == null ? .58 : opt.y, amp = opt.amp == null ? 1 : opt.amp, glow = opt.glow == null ? 1 : opt.glow, tilt = opt.tilt == null ? -.12 : opt.tilt;
    var noise = null, atl = [], pr = RD.pointer ? RD.pointer : function () { return { x: 0, y: 0 }; };
    function hex(h) { h = h.replace("#", ""); return [parseInt(h.slice(0, 2), 16), parseInt(h.slice(2, 4), 16), parseInt(h.slice(4, 6), 16)]; }
    var P = pal.map(hex);
    function mix(v) {
      // 0 → dark, .55 → mid, 1 → hot
      var a, b, k;
      if (v < .55) { a = P[0]; b = P[1]; k = v / .55; } else { a = P[1]; b = P[2]; k = (v - .55) / .45; }
      return "rgb(" + Math.round(a[0] + (b[0] - a[0]) * k) + "," + Math.round(a[1] + (b[1] - a[1]) * k) + "," + Math.round(a[2] + (b[2] - a[2]) * k) + ")";
    }
    function size() {
      W = cv.clientWidth; H = cv.clientHeight; small = W < 600;
      dpr = Math.min(window.devicePixelRatio || 1, small ? 1.5 : 2);
      cv.width = W * dpr; cv.height = H * dpr; ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      cw = small ? 8 : 8; ch = small ? 12 : 12; step = small ? 70 : 50;
      cols = Math.ceil(W / cw) + 1; rows = Math.ceil(H / ch) + 1;
      noise = new Float32Array(cols * rows);
      var s = seed * 7919;
      for (var i = 0; i < noise.length; i++) { s = (s * 16807) % 2147483647; noise[i] = (s / 2147483647); }
      atl = [];
      for (var k = 0; k < N; k++) atl.push(RD.glyphs(RAMP, ch - 1, 600, mix(Math.pow(k / (N - 1), 1.25)), dpr));
    }
    function ridge(u, t, ph) {
      // u 0..1 across the width; a long swell, a shorter one riding on it, and a slow drift
      return y0 + tilt * (u - .5) + amp * (.17 * Math.sin(u * 2.4 + ph + t * .22) + .06 * Math.sin(u * 6.3 - t * .31 + ph * 2) + .025 * Math.sin(u * 13 + t * .5));
    }
    function draw(now) {
      if (running && !still) requestAnimationFrame(draw);
      if (!W) return;
      if (!still && now - last < step) return;
      last = now;
      var t = (now - t0) / 1000 * speed, p = pr();
      ctx.clearRect(0, 0, W, H);
      var ry = new Float32Array(cols), ry2 = new Float32Array(cols);
      for (var c = 0; c < cols; c++) { var u = c / cols; ry[c] = ridge(u, t, 0) * H + p.y * 10; ry2[c] = ridge(u, t * .8, 2.1) * H + H * .14; }
      for (var r = 0; r < rows; r++) {
        var y = r * ch + ch / 2;
        for (var c = 0; c < cols; c++) {
          var d = (y - ry[c]) / H, v;
          if (d < 0) v = Math.exp(-(d * d) / .06) * .82 + Math.exp(-(d * d) / .4) * .12;   // light scattering above the crest, wide and soft
          else v = Math.exp(-(d * d) / .004) + Math.exp(-(d * d) / .09) * .2;               // faster falloff into the dark side
          var d2 = (y - ry2[c]) / H, v2 = d2 < 0 ? Math.exp(-(d2 * d2) / .05) * .4 : Math.exp(-(d2 * d2) / .0025) * .5;
          if (v2 > v) v = v2;
          v *= glow * (.9 + .12 * noise[r * cols + c]);
          if (v < .035) continue;
          if (v > 1) v = 1;
          var k = Math.floor(v * (N - 1)), g = Math.floor(Math.pow(v, 2.4) * (RAMP.length - 1) + noise[r * cols + c] * 1.1);
          if (g >= RAMP.length) g = RAMP.length - 1;
          ctx.globalAlpha = .2 + v * .8;
          atl[k].put(ctx, g, c * cw + cw / 2, y);
        }
      }
      ctx.globalAlpha = 1;
    }
    RD.watchSize(cv, function () { size(); if (still) requestAnimationFrame(draw); });
    requestAnimationFrame(draw);
    if ("IntersectionObserver" in window && !still) {
      new IntersectionObserver(function (es) {
        var vis = es[0].isIntersecting;
        if (vis && !running) { running = true; requestAnimationFrame(draw); }
        running = vis;
      }).observe(cv);
    }
  };
})();
