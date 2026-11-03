/* si/mixoval · Pult
   Dva decky → EQ → filter → fader → crossfader → master → limiter → výstup (a nahrávanie).
   Každé ovládanie má svoje id (napr. "a.hi", "xf") a všetky zmeny idú cez setCtl(). Vďaka tomu sa dá neskôr
   tie isté zmeny posielať ostatným ľuďom v spoločnej izbe (window.MixPult.onChange). */
(function () {
  'use strict';

  var $ = function (s, r) { return (r || document).querySelector(s); };
  var $$ = function (s, r) { return Array.prototype.slice.call((r || document).querySelectorAll(s)); };
  var clamp = function (x, a, b) { return Math.min(b, Math.max(a, x)); };
  var fmtT = function (s) {
    if (!isFinite(s) || s < 0) s = 0;
    var m = Math.floor(s / 60), r = s - m * 60;
    return m + ':' + (r < 10 ? '0' : '') + r.toFixed(1);
  };
  var tt;
  function toast(m) {
    var t = $('#toast'); t.textContent = m; t.classList.add('on');
    clearTimeout(tt); tt = setTimeout(function () { t.classList.remove('on'); }, 2800);
  }
  var yieldUI = function () { return new Promise(function (r) { setTimeout(r, 30); }); };

  // ------------------------------------------------------------------ zvukový reťazec
  var ctx = null, mixBus, master, limiter, anL, anR, wake = null;
  var RGB = { a: [255, 176, 46], b: [52, 209, 255] };
  var RANGES = [0.08, 0.16, 0.5];

  function ensureCtx() {
    if (!ctx) {
      var AC = window.AudioContext || window.webkitAudioContext;
      if (!AC) { toast('Tento prehliadač nepodporuje Web Audio.'); throw new Error('no audio'); }
      ctx = new AC({ latencyHint: 'interactive' });
      mixBus = ctx.createGain();
      master = ctx.createGain();
      limiter = ctx.createDynamicsCompressor();
      limiter.threshold.value = -2; limiter.knee.value = 0; limiter.ratio.value = 20;
      limiter.attack.value = 0.003; limiter.release.value = 0.12;
      mixBus.connect(master); master.connect(limiter); limiter.connect(ctx.destination);
      var sp = ctx.createChannelSplitter(2);
      anL = ctx.createAnalyser(); anR = ctx.createAnalyser(); anL.fftSize = anR.fftSize = 512;
      limiter.connect(sp); sp.connect(anL, 0); sp.connect(anR, 1);
      decks.forEach(function (d) { d.attach(); });
      Object.keys(ctl).forEach(function (id) { ctl[id].apply(ctl[id].v); });
    }
    if (ctx.state === 'suspended') ctx.resume();
  }
  document.addEventListener('visibilitychange', function () {
    if (ctx && !document.hidden && ctx.state !== 'running') ctx.resume();
    if (!document.hidden && wake === 'want') keepAwake();
  });
  function keepAwake() {
    wake = 'want';
    try { if (navigator.wakeLock) navigator.wakeLock.request('screen').catch(function () {}); } catch (e) {}
  }

  // ------------------------------------------------------------------ ovládacie prvky (id → hodnota 0..1)
  var ctl = {};
  var api = { onChange: null };
  function defCtl(id, def, apply, always) { ctl[id] = { id: id, v: def, def: def, apply: apply, always: !!always, els: [] }; }
  function setCtl(id, v, src) {
    var c = ctl[id]; if (!c) return;
    if (src === 'ui' && /\.tempo$/.test(id)) decks[id.charAt(0) === 'a' ? 0 : 1].sync = false;
    c.v = clamp(v, 0, 1);
    if (ctx || c.always) c.apply(c.v);
    c.els.forEach(function (e) { e.render(c.v); });
    if (src === 'ui' && api.onChange) api.onChange(id, c.v);
  }
  var eqDb = function (v) { return v < 0.02 ? -60 : v < 0.5 ? (v - 0.5) * 52 : (v - 0.5) * 12; };

  // ------------------------------------------------------------------ analýza skladby
  function calcTrim(buf) {
    var d = buf.getChannelData(0), s = 0, n = 0;
    for (var i = 0; i < d.length; i += 7) { s += d[i] * d[i]; n++; }
    var rms = Math.sqrt(s / Math.max(1, n));
    if (!(rms > 0.0005)) return 1;
    return clamp(0.16 / rms, 0.35, 2.5);
  }

  // obálka vĺn: 100 bodov za sekundu, výška + „svetlosť“ (podiel výšok) pre farbu
  function makePeaks(buf) {
    var sr = buf.sampleRate, hop = Math.max(1, Math.floor(sr / 100)), n = Math.ceil(buf.length / hop);
    var amp = new Float32Array(n), br = new Uint8Array(n);
    var c0 = buf.getChannelData(0), c1 = buf.numberOfChannels > 1 ? buf.getChannelData(1) : c0;
    var a = 1 - Math.exp(-2 * Math.PI * 1500 / sr), lp = 0;
    for (var k = 0; k < n; k++) {
      var base = k * hop, end = Math.min(buf.length, base + hop), mx = 0, hf = 0, tot = 0;
      for (var i = base; i < end; i++) {
        var x = (c0[i] + c1[i]) * 0.5; lp += a * (x - lp);
        var ax = x < 0 ? -x : x; if (ax > mx) mx = ax;
        var h = x - lp; hf += h < 0 ? -h : h; tot += ax;
      }
      amp[k] = mx; br[k] = tot > 1e-6 ? Math.min(255, (hf / tot) * 255 * 1.4) : 0;
    }
    return { amp: amp, br: br, n: n };
  }

  // BPM + mriežka úderov: obálka basov a výšok → autokorelácia → jemné doladenie hrebeňom
  function analyze(buf) {
    var sr = buf.sampleRate, dur = buf.duration;
    var t0 = Math.min(20, dur * 0.15), t1 = Math.min(dur, t0 + 100);
    if (t1 - t0 < 20) { t0 = 0; t1 = dur; }
    if (t1 - t0 < 6) return null;
    var i0 = Math.floor(t0 * sr), i1 = Math.floor(t1 * sr), ER = 500, hop = Math.max(1, Math.round(sr / ER)), ERr = sr / hop;
    var m = Math.floor((i1 - i0) / hop);
    var c0 = buf.getChannelData(0), c1 = buf.numberOfChannels > 1 ? buf.getChannelData(1) : c0;
    var lowE = new Float32Array(m), hiE = new Float32Array(m);
    var aL = 1 - Math.exp(-2 * Math.PI * 160 / sr), aH = 1 - Math.exp(-2 * Math.PI * 2500 / sr);
    var y1 = 0, y2 = 0, z = 0;
    for (var k = 0; k < m; k++) {
      var base = i0 + k * hop, sl = 0, sh = 0;
      for (var j = 0; j < hop; j++) {
        var x = (c0[base + j] + c1[base + j]) * 0.5;
        y1 += aL * (x - y1); y2 += aL * (y1 - y2); sl += y2 * y2;
        z += aH * (x - z); var h = x - z; sh += h * h;
      }
      lowE[k] = Math.sqrt(sl / hop); hiE[k] = Math.sqrt(sh / hop);
    }
    function flux(e) {
      var o = new Float32Array(m), mx = 0, i, s = new Float32Array(m);
      for (i = 1; i < m - 1; i++) s[i] = (e[i - 1] + e[i] + e[i + 1]) / 3;
      for (i = 2; i < m; i++) { var d = s[i] - s[i - 1]; o[i] = d > 0 ? d : 0; if (o[i] > mx) mx = o[i]; }
      if (mx > 0) for (i = 0; i < m; i++) o[i] /= mx;
      return o;
    }
    var oL = flux(lowE), oH = flux(hiE), on = new Float32Array(m), mxo = 0, i;
    for (i = 0; i < m; i++) { on[i] = oL[i] + 0.6 * oH[i]; if (on[i] > mxo) mxo = on[i]; }
    if (!(mxo > 0)) return null;

    // hrubý odhad: autokorelácia pre 75 až 178 BPM
    var Lmin = Math.floor(ERr * 60 / 178), Lmax = Math.ceil(ERr * 60 / 75);
    var ac = function (L) {
      var s = 0, n = m - L; if (n < 10) return 0;
      for (var q = 0; q < n; q++) s += on[q] * on[q + L];
      return s / n;
    };
    var best = 0, bestL = 0;
    for (var L = Lmin; L <= Lmax; L++) {
      var sc = ac(L) + 0.5 * ac(2 * L) + 0.25 * ac(4 * L);
      if (sc > best) { best = sc; bestL = L; }
    }
    if (!bestL) return null;
    var bpm0 = ERr * 60 / bestL;

    // jemné doladenie: hrebeň v okolí odhadu, hľadá aj fázu
    function interp(t) { // t v súradniciach obálky
      var q = Math.floor(t); if (q < 0 || q >= m - 1) return 0;
      var f = t - q; return on[q] * (1 - f) + on[q + 1] * f;
    }
    function comb(bpm) {
      var Te = ERr * 60 / bpm, bestS = -1, bestP = 0, step = Math.max(1, Math.floor(Te / 120));
      for (var p = 0; p < Te; p += step) {
        var s = 0;
        for (var t = p; t < m - 1; t += Te) s += interp(t);
        if (s > bestS) { bestS = s; bestP = p; }
      }
      var cnt = Math.floor((m - bestP) / Te);
      return { s: bestS / Math.max(1, cnt), p: bestP };
    }
    var bb = bpm0, br = comb(bpm0), cand;
    for (var d = -bpm0 * 0.016; d <= bpm0 * 0.016; d += 0.01) {
      cand = comb(bpm0 + d);
      if (cand.s > br.s) { br = cand; bb = bpm0 + d; }
    }
    var rounded = Math.round(bb);
    if (Math.abs(bb - rounded) < 0.06) {
      var rr = comb(rounded);
      if (rr.s >= br.s * 0.97) { bb = rounded; br = rr; }
    }
    return { bpm: Math.round(bb * 100) / 100, grid: t0 + br.p / ERr };
  }

  // ------------------------------------------------------------------ deck
  function Deck(id, idx) {
    this.id = id; this.idx = idx; this.buf = null; this.name = ''; this.status = '';
    this.bpm = 0; this.grid = 0; this.trim = 1; this.peaks = null;
    this.playing = false; this.startPos = 0; this.startCtx = 0;
    this.tempo = 0; this.bend = 0; this.range = 0.08; this.cue = 0; this.cuePrev = false;
    this.loop = null; this.sync = false; this.src = null; this.token = 0; this.seekT = 0;
    this.cache = {}; this.ov = null; this.lvl = 0;
  }
  Deck.prototype.other = function () { return decks[1 - this.idx]; };
  Object.defineProperty(Deck.prototype, 'rate', { get: function () { return (1 + this.tempo) * (1 + this.bend); } });

  Deck.prototype.attach = function () {
    var c = ctx, mk = function (t) { var f = c.createBiquadFilter(); f.type = t; return f; };
    this.trimN = c.createGain(); this.trimN.gain.value = this.trim;
    this.lo = mk('lowshelf'); this.lo.frequency.value = 250;
    this.mid = mk('peaking'); this.mid.frequency.value = 1000; this.mid.Q.value = 0.8;
    this.hi = mk('highshelf'); this.hi.frequency.value = 3500;
    this.flt = mk('lowpass'); this.flt.frequency.value = 22000; this.flt.Q.value = 1.1; this.fltType = 'lowpass';
    this.fad = c.createGain(); this.xf = c.createGain();
    this.an = c.createAnalyser(); this.an.fftSize = 512; this.anBuf = new Float32Array(512);
    this.trimN.connect(this.lo); this.lo.connect(this.mid); this.mid.connect(this.hi); this.hi.connect(this.flt);
    this.flt.connect(this.fad); this.fad.connect(this.an); this.fad.connect(this.xf); this.xf.connect(mixBus);
  };

  Deck.prototype.setFilter = function (v) {
    var f = this.flt, t = ctx.currentTime, type, freq;
    if (Math.abs(v - 0.5) < 0.03) { type = 'lowpass'; freq = 22000; }
    else if (v < 0.5) { type = 'lowpass'; freq = 22000 * Math.pow(180 / 22000, (0.47 - v) / 0.47); }
    else { type = 'highpass'; freq = 20 * Math.pow(6000 / 20, (v - 0.53) / 0.47); }
    if (type !== this.fltType) { f.type = type; this.fltType = type; f.frequency.cancelScheduledValues(t); f.frequency.setValueAtTime(freq, t); }
    else f.frequency.setTargetAtTime(freq, t, 0.012);
  };

  Deck.prototype.pos = function () {
    if (!this.buf) return 0;
    var p = this.startPos;
    if (this.playing) {
      p += (ctx.currentTime - this.startCtx) * this.rate;
      var L = this.loop;
      if (L && p >= L.e) p = L.s + ((p - L.s) % (L.e - L.s));
    }
    return clamp(p, 0, this.buf.duration);
  };
  Deck.prototype.rebase = function () {
    if (this.playing) { this.startPos = this.pos(); this.startCtx = ctx.currentTime; }
  };
  Deck.prototype._start = function () {
    var s = ctx.createBufferSource(), self = this;
    s.buffer = this.buf; s.playbackRate.value = this.rate;
    if (this.loop) { s.loop = true; s.loopStart = this.loop.s; s.loopEnd = this.loop.e; }
    s.connect(this.trimN);
    var tok = ++this.token;
    s.onended = function () {
      if (tok !== self.token) return;
      self.playing = false; self.startPos = self.buf.duration; self.src = null;
    };
    this.startCtx = ctx.currentTime;
    s.start(0, this.startPos);
    this.src = s; this.playing = true;
  };
  Deck.prototype._stopSrc = function () {
    this.token++;
    if (this.src) { try { this.src.stop(); } catch (e) {} try { this.src.disconnect(); } catch (e2) {} this.src = null; }
  };
  Deck.prototype.alignPos = function (p, o) {
    var Tb = 60 / this.bpm, To = 60 / o.bpm;
    var op = (o.pos() - o.grid) / To; op -= Math.floor(op);
    var r = (this.bpm * (1 + this.tempo)) / (o.bpm * (1 + o.tempo));
    var target = r >= 1.5 ? (op * 2) - Math.floor(op * 2) : op;
    var my = (p - this.grid) / Tb; my -= Math.floor(my);
    var d = my - target; d -= Math.round(d);
    return clamp(p - d * Tb, 0, this.buf.duration);
  };
  Deck.prototype.play = function () {
    if (!this.buf || this.playing) return;
    ensureCtx(); keepAwake();
    var p = this.startPos; if (p >= this.buf.duration - 0.05) p = 0;
    var o = this.other();
    if (this.sync && o.playing && o.bpm && this.bpm) p = this.alignPos(p, o);
    this.startPos = p; this._start();
  };
  Deck.prototype.pause = function () {
    if (!this.playing) return;
    this.startPos = this.pos(); this._stopSrc(); this.playing = false;
  };
  Deck.prototype.playPress = function () {
    if (!this.buf) { toast('Najprv načítaj skladbu (dole v zozname).'); return; }
    if (this.cuePrev) { this.cuePrev = false; return; } // CUE podržané + PLAY = ostane hrať
    if (this.playing) this.pause(); else this.play();
  };
  Deck.prototype.seek = function (t) {
    if (!this.buf) return;
    t = clamp(t, 0, this.buf.duration);
    if (this.playing) { this._stopSrc(); this.startPos = t; this._start(); } else this.startPos = t;
  };
  Deck.prototype.cueDown = function () {
    if (!this.buf) return;
    if (this.playing) { this.pause(); this.startPos = this.cue; return; }
    ensureCtx();
    if (Math.abs(this.startPos - this.cue) > 0.04) this.cue = this.startPos;
    this.cuePrev = true; this._start();
  };
  Deck.prototype.cueUp = function () {
    if (this.cuePrev) { this.cuePrev = false; this.pause(); this.startPos = this.cue; }
  };
  Deck.prototype.setBend = function (b) {
    this.rebase(); this.bend = b;
    if (this.src) this.src.playbackRate.value = this.rate;
  };
  Deck.prototype.onTempoCtl = function (v) {
    this.rebase(); this.tempo = (v - 0.5) * 2 * this.range;
    if (this.src) this.src.playbackRate.value = this.rate;
    var o = this.other();
    if (o.sync && !this.sync) o.followTempo();
  };
  Deck.prototype.tempoNorm = function (t) { return 0.5 + t / (2 * this.range); };
  Deck.prototype.followTempo = function () {
    var o = this.other();
    if (!o.bpm || !this.bpm) return false;
    var target = o.bpm * (1 + o.tempo), best = null, f;
    [1, 2, 0.5].forEach(function (k) {
      var t = (target * k) / this.bpm - 1;
      if (best === null || Math.abs(t) < Math.abs(best)) best = t;
    }, this);
    f = best;
    while (Math.abs(f) > this.range && this.range < 0.5) {
      this.range = RANGES[RANGES.indexOf(this.range) + 1] || 0.5;
    }
    f = clamp(f, -this.range, this.range);
    setCtl(this.id + '.tempo', this.tempoNorm(f), 'sys');
    return true;
  };
  Deck.prototype.toggleSync = function () {
    if (!this.buf) return;
    var o = this.other();
    if (this.sync) { this.sync = false; return; }
    if (!o.bpm || !this.bpm) { toast('Na sync treba poznať tempo oboch skladieb (BPM).'); return; }
    this.sync = true;
    this.followTempo();
    if (this.playing && o.playing) this.seek(this.alignPos(this.pos(), o));
  };
  Deck.prototype.loopToggle = function (n) {
    if (!this.buf) return;
    if (this.loop && this.loop.n === n) { this.loopOff(); return; }
    if (!this.bpm) { toast('Slučky potrebujú poznať BPM.'); return; }
    var Tb = 60 / this.bpm, p = this.pos();
    var k = Math.floor((p - this.grid) / Tb + 1e-6), s = this.grid + k * Tb, e = s + n * Tb;
    if (s < 0) { s += Tb; e += Tb; }
    if (e > this.buf.duration) return;
    this.rebase(); this.loop = { s: s, e: e, n: n };
    if (this.src) { this.src.loopStart = s; this.src.loopEnd = e; this.src.loop = true; }
  };
  Deck.prototype.loopOff = function () {
    if (!this.loop) return;
    this.rebase(); this.loop = null;
    if (this.src) this.src.loop = false;
  };
  Deck.prototype.setBpm = function (b) {
    if (!(b >= 40 && b <= 220)) return;
    var ph = this.bpm ? (this.pos() - this.grid) / (60 / this.bpm) : 0;
    this.bpm = Math.round(b * 100) / 100;
    this.loopOff();
    if (this.sync) this.followTempo();
    var o = this.other(); if (o.sync) o.followTempo();
    return ph;
  };

  Deck.prototype.stopHard = function () {
    this._stopSrc(); this.playing = false; this.cuePrev = false;
  };
  Deck.prototype.setTrack = async function (buf, name) {
    this.stopHard();
    this.buf = buf; this.name = name; this.startPos = 0; this.cue = 0; this.loop = null; this.sync = false; this.bend = 0;
    this.bpm = 0; this.grid = 0; this.ov = null;
    this.range = 0.08;
    setCtl(this.id + '.tempo', 0.5, 'sys');
    this.trim = calcTrim(buf); if (this.trimN) this.trimN.gain.value = this.trim;
    this.peaks = makePeaks(buf);
    this.status = 'Analyzujem tempo…'; await yieldUI();
    var r = null;
    try { r = analyze(buf); } catch (e) { r = null; }
    if (r) { this.bpm = r.bpm; this.grid = r.grid; this.cue = Math.max(0, r.grid - Math.floor(r.grid / (60 / r.bpm)) * (60 / r.bpm)); this.startPos = this.cue; }
    else toast('Tempo sa nepodarilo určiť. Zadaj BPM ručne.');
    this.status = '';
    var o = this.other(); if (o.sync) o.followTempo();
  };

  // ---- kreslenie
  function sizeCanvas(c) {
    var dpr = Math.min(2, window.devicePixelRatio || 1), r = c.getBoundingClientRect();
    var w = Math.max(10, Math.round(r.width * dpr)), h = Math.max(10, Math.round(r.height * dpr));
    if (c.width !== w || c.height !== h) { c.width = w; c.height = h; return true; }
    return false;
  }
  var shades = {};
  function shade(id, b) {
    var q = Math.round(b / 32), key = id + q;
    if (!shades[key]) {
      var base = RGB[id], k = q / 8 * 0.85;
      shades[key] = 'rgb(' + Math.round(base[0] + (255 - base[0]) * k) + ',' + Math.round(base[1] + (255 - base[1]) * k) + ',' + Math.round(base[2] + (255 - base[2]) * k) + ')';
    }
    return shades[key];
  }
  var ZOOM_S = 6;
  Deck.prototype.drawZoom = function (t) {
    var c = this.el.zoom; sizeCanvas(c);
    var g = c.getContext('2d'), w = c.width, h = c.height, mid = h / 2;
    g.clearRect(0, 0, w, h);
    g.fillStyle = '#0a0c0d'; g.fillRect(0, 0, w, h);
    if (!this.peaks) return;
    var pk = this.peaks, half = ZOOM_S / 2, cx = w / 2;
    var L = this.loop;
    if (L) {
      var xs = cx + (L.s - t) / half * cx, xe = cx + (L.e - t) / half * cx;
      g.fillStyle = 'rgba(' + RGB[this.id].join(',') + ',.18)';
      g.fillRect(xs, 0, xe - xs, h);
    }
    var step = Math.max(2, Math.round(w / 240));
    for (var x = 0; x < w; x += step) {
      var tm = t + (x - cx) / cx * half, i = Math.floor(tm * 100);
      if (i < 0 || i >= pk.n) continue;
      var a = Math.min(1, Math.pow(pk.amp[i] * this.trim, 0.75)), bh = a * h * 0.46 + 1;
      g.fillStyle = shade(this.id, pk.br[i]);
      g.globalAlpha = x < cx ? 0.5 : 1;
      g.fillRect(x, mid - bh, step - 1, bh * 2);
    }
    g.globalAlpha = 1;
    if (this.bpm) {
      var Tb = 60 / this.bpm, k0 = Math.ceil((t - half - this.grid) / Tb), k1 = Math.floor((t + half - this.grid) / Tb);
      for (var k = k0; k <= k1; k++) {
        var bx = cx + (this.grid + k * Tb - t) / half * cx, strong = (((k % 4) + 4) % 4) === 0;
        g.fillStyle = strong ? 'rgba(255,255,255,.75)' : 'rgba(255,255,255,.28)';
        g.fillRect(Math.round(bx), strong ? 0 : h * 0.62, strong ? 2 : 1, strong ? h : h * 0.38);
      }
    }
    {
      var cxp = cx + (this.cue - t) / half * cx;
      if (cxp >= 0 && cxp <= w) { g.fillStyle = '#ff8a2b'; g.fillRect(cxp - 1, 0, 3, h * 0.28); }
    }
    g.fillStyle = '#fff'; g.fillRect(cx - 1, 0, 2, h);
  };
  Deck.prototype.drawOv = function (t) {
    var c = this.el.ov, resized = sizeCanvas(c), w = c.width, h = c.height, g = c.getContext('2d');
    if (!this.ov || resized || this.ov.w !== w || this.ov.h !== h) {
      var oc = document.createElement('canvas'); oc.width = w; oc.height = h;
      var og = oc.getContext('2d'); og.fillStyle = '#0a0c0d'; og.fillRect(0, 0, w, h);
      if (this.peaks) {
        var pk = this.peaks, n = pk.n;
        for (var x = 0; x < w; x++) {
          var i0 = Math.floor(x / w * n), i1 = Math.max(i0 + 1, Math.floor((x + 1) / w * n)), mx = 0, bsum = 0;
          for (var i = i0; i < i1 && i < n; i++) { if (pk.amp[i] > mx) mx = pk.amp[i]; bsum += pk.br[i]; }
          var a = Math.min(1, Math.pow(mx * this.trim, 0.7)), bh = Math.max(1, a * h * 0.92);
          og.fillStyle = shade(this.id, bsum / Math.max(1, i1 - i0));
          og.fillRect(x, (h - bh) / 2, 1, bh);
        }
      }
      this.ov = { c: oc, w: w, h: h };
    }
    g.drawImage(this.ov.c, 0, 0);
    if (this.buf) {
      var d = this.buf.duration;
      if (this.loop) { g.fillStyle = 'rgba(255,255,255,.35)'; g.fillRect(this.loop.s / d * w, 0, Math.max(2, (this.loop.e - this.loop.s) / d * w), h); }
      g.fillStyle = '#ff8a2b'; g.fillRect(this.cue / d * w - 1, 0, 3, h);
      g.fillStyle = '#fff'; g.fillRect(t / d * w - 1, 0, 3, h);
    }
  };

  var ICON_TXT = function (el, key, v) { if (el._v !== v) { el.textContent = v; el._v = v; } };
  Deck.prototype.ui = function () {
    var e = this.el, t = this.pos();
    var nm = this.status || this.name || '— prázdny —';
    ICON_TXT(e.name, 'n', nm); e.name.classList.toggle('empty', !this.buf);
    ICON_TXT(e.time, 't', this.buf ? fmtT(t) + ' / -' + fmtT(this.buf.duration - t) : '0:00.0');
    this.drawZoom(t); this.drawOv(t);
    e.play.classList.toggle('on', this.playing && !this.cuePrev);
    e.cue.classList.toggle('held', this.cuePrev);
    e.sync.classList.toggle('on', this.sync);
    e.loops.forEach(function (b) { b.classList.toggle('on', !!(this.loop && this.loop.n === +b.dataset.n)); }, this);
    if (document.activeElement !== e.bpmIn) {
      var bv = this.bpm ? this.bpm.toFixed(1) : '';
      if (e.bpmIn.value !== bv) e.bpmIn.value = bv;
    }
    ICON_TXT(e.eff, 'e', this.bpm ? (this.bpm * this.rate).toFixed(1) + ' BPM' : '');
    ICON_TXT(e.trimv, 'tr', this.buf ? 'trim ' + (20 * Math.log10(this.trim)).toFixed(1) + ' dB' : '');
    var pc = this.tempo * 100;
    ICON_TXT(e.tempoRead, 'tp', (pc >= 0 ? '+' : '') + pc.toFixed(1) + '%');
    ICON_TXT(e.rangeBtn, 'rg', '±' + Math.round(this.range * 100));
    // ukazovateľ úrovne kanála
    var lv = 0;
    if (this.an && this.playing) {
      this.an.getFloatTimeDomainData(this.anBuf);
      var pk = 0; for (var i = 0; i < this.anBuf.length; i++) { var a = this.anBuf[i] < 0 ? -this.anBuf[i] : this.anBuf[i]; if (a > pk) pk = a; }
      lv = pk > 0 ? clamp((20 * Math.log10(pk) + 54) / 54, 0, 1) : 0;
    }
    this.lvl = Math.max(lv, this.lvl - 0.03);
    e.meter.firstChild.style.height = (100 - this.lvl * 100) + '%';
  };

  // ------------------------------------------------------------------ vytvorenie decku v DOM
  function deckHTML(id) {
    var ID = id.toUpperCase();
    return '<section class="deck ' + id + '" data-deck="' + id + '">' +
      '<div class="wfw">' +
        '<div class="dinfo"><span class="dl">' + ID + '</span><span class="tn empty" data-r="name">— prázdny —</span><span class="tm mono" data-r="time">0:00.0</span></div>' +
        '<canvas class="zoom" data-r="zoom"></canvas><canvas class="ov" data-r="ov"></canvas>' +
        '<div class="binfo">' +
          '<label class="bpm"><input type="number" step="0.1" min="40" max="220" inputmode="decimal" placeholder="—" data-r="bpmIn" aria-label="BPM decku ' + ID + '"><small>BPM</small></label>' +
          '<button class="mini" type="button" data-a="half">½</button><button class="mini" type="button" data-a="dbl">×2</button>' +
          '<button class="mini" type="button" data-a="grid" title="Nastaví úder 1 na aktuálne miesto">SET GRID</button>' +
          '<span class="eff mono" data-r="eff"></span><span class="trimv mono" data-r="trimv"></span>' +
        '</div>' +
      '</div>' +
      '<div class="ctrls">' +
        '<div class="trans"><button class="btn cue" type="button" data-a="cue">CUE</button><button class="btn play" type="button" data-a="play" aria-label="Prehrať / pauza"></button><button class="btn sync" type="button" data-a="sync">SYNC</button></div>' +
        '<div class="loops" aria-label="Slučka v úderoch"><button class="btn" type="button" data-a="loop" data-n="1">1</button><button class="btn" type="button" data-a="loop" data-n="2">2</button><button class="btn" type="button" data-a="loop" data-n="4">4</button><button class="btn" type="button" data-a="loop" data-n="8">8</button></div>' +
        '<div class="bends" aria-label="Doladenie tempa (podrž)"><button class="btn" type="button" data-a="bendm" aria-label="Spomaliť (podrž)">« −6%</button><button class="btn" type="button" data-a="bendp" aria-label="Zrýchliť (podrž)">+6% »</button></div>' +
        '<div class="tempo"><div class="hf" data-ctl="' + id + '.tempo" data-def="0.5" data-type="h" aria-label="Tempo"><b></b></div><span class="mono tr" data-r="tempoRead">0.0%</span><button class="mini" type="button" data-a="range" data-r="rangeBtn">±8</button></div>' +
        '<div class="mixrow">' +
          '<div class="knobs">' +
            '<div class="kw"><div class="knob mid" data-ctl="' + id + '.hi" data-def="0.5" data-type="k"><b></b></div><small>HI</small></div>' +
            '<div class="kw"><div class="knob mid" data-ctl="' + id + '.mid" data-def="0.5" data-type="k"><b></b></div><small>MID</small></div>' +
            '<div class="kw"><div class="knob mid" data-ctl="' + id + '.lo" data-def="0.5" data-type="k"><b></b></div><small>LOW</small></div>' +
            '<div class="kw"><div class="knob mid" data-ctl="' + id + '.flt" data-def="0.5" data-type="k"><b></b></div><small>FILTER</small></div>' +
          '</div>' +
          '<div class="chan"><div class="vf" data-ctl="' + id + '.vol" data-def="1" data-type="v" aria-label="Fader kanála"><b></b></div><div class="meter v" data-r="meter"><i></i></div></div>' +
        '</div>' +
      '</div>' +
    '</section>';
  }

  var decks = [new Deck('a', 0), new Deck('b', 1)];
  var decksEl = $('#decks'), xfw = $('#xfw');
  decks.forEach(function (d) {
    var tmp = document.createElement('div'); tmp.innerHTML = deckHTML(d.id);
    var sec = tmp.firstChild; decksEl.insertBefore(sec, xfw);
    d.sec = sec;
    d.el = {
      name: $('[data-r=name]', sec), time: $('[data-r=time]', sec), zoom: $('[data-r=zoom]', sec), ov: $('[data-r=ov]', sec),
      bpmIn: $('[data-r=bpmIn]', sec), eff: $('[data-r=eff]', sec), trimv: $('[data-r=trimv]', sec),
      play: $('[data-a=play]', sec), cue: $('[data-a=cue]', sec), sync: $('[data-a=sync]', sec),
      loops: $$('[data-a=loop]', sec), tempoRead: $('[data-r=tempoRead]', sec), rangeBtn: $('[data-r=rangeBtn]', sec),
      meter: $('[data-r=meter]', sec)
    };
  });

  // definície ovládacích prvkov
  decks.forEach(function (d) {
    var i = d.id, T = function () { return ctx.currentTime; };
    defCtl(i + '.hi', 0.5, function (v) { d.hi.gain.setTargetAtTime(eqDb(v), T(), 0.01); });
    defCtl(i + '.mid', 0.5, function (v) { d.mid.gain.setTargetAtTime(eqDb(v), T(), 0.01); });
    defCtl(i + '.lo', 0.5, function (v) { d.lo.gain.setTargetAtTime(eqDb(v), T(), 0.01); });
    defCtl(i + '.flt', 0.5, function (v) { d.setFilter(v); });
    defCtl(i + '.vol', 1, function (v) { d.fad.gain.setTargetAtTime(v * v, T(), 0.01); });
    defCtl(i + '.tempo', 0.5, function (v) { d.onTempoCtl(v); }, true);
  });
  defCtl('xf', 0.5, function (v) {
    var gA = v <= 0.5 ? 1 : Math.cos((v - 0.5) * Math.PI), gB = v >= 0.5 ? 1 : Math.cos((0.5 - v) * Math.PI), t = ctx.currentTime;
    decks[0].xf.gain.setTargetAtTime(gA, t, 0.008); decks[1].xf.gain.setTargetAtTime(gB, t, 0.008);
  });
  defCtl('m.vol', 0.8, function (v) { master.gain.setTargetAtTime(v, ctx.currentTime, 0.01); });

  // pripojenie prvkov na ovládanie (ťahanie prstom/myšou, dvojklik = východisková hodnota)
  function bindCtl(el) {
    var id = el.dataset.ctl, type = el.dataset.type, c = ctl[id], thumb = el.querySelector('b');
    var render = type === 'k'
      ? function (v) { thumb.style.transform = 'rotate(' + (-135 + 270 * v) + 'deg)'; }
      : function (v) { el.style.setProperty('--p', v); };
    c.els.push({ render: render }); render(c.v);
    var drag = false, moved = false, sx = 0, sy = 0, sv = 0, lastUp = 0;
    function th() { return (type === 'v' ? thumb.offsetHeight : thumb.offsetWidth) || 40; }
    function fromPos(e) {
      var r = el.getBoundingClientRect(), t = th();
      if (type === 'v') return 1 - (e.clientY - r.top - t / 2) / (r.height - t);
      return (e.clientX - r.left - t / 2) / (r.width - t);
    }
    el.addEventListener('pointerdown', function (e) {
      e.preventDefault();
      try { el.setPointerCapture(e.pointerId); } catch (x) {}
      drag = true; moved = false; sx = e.clientX; sy = e.clientY;
      if (type !== 'k' && e.target !== thumb) setCtl(id, fromPos(e), 'ui');
      sv = c.v;
      if (ctx === null) { try { ensureCtx(); } catch (x2) {} }
    });
    el.addEventListener('pointermove', function (e) {
      if (!drag) return;
      var dx = e.clientX - sx, dy = e.clientY - sy;
      if (Math.abs(dx) + Math.abs(dy) > 3) moved = true;
      var v;
      if (type === 'k') v = sv - dy / 170;
      else if (type === 'v') v = sv - dy / (el.clientHeight - th());
      else v = sv + dx / (el.clientWidth - th());
      setCtl(id, v, 'ui');
    });
    function end() {
      if (!drag) return; drag = false;
      var now = performance.now();
      if (!moved) { if (now - lastUp < 320) { setCtl(id, c.def, 'ui'); lastUp = 0; return; } lastUp = now; }
    }
    el.addEventListener('pointerup', end); el.addEventListener('pointercancel', function () { drag = false; });
  }
  $$('[data-ctl]').forEach(bindCtl);

  // ------------------------------------------------------------------ tlačidlá decku
  var held = null;
  decksEl.addEventListener('pointerdown', function (e) {
    var b = e.target.closest('[data-a]'); if (!b) return;
    var sec = b.closest('.deck'); if (!sec) return;
    var d = decks[sec.dataset.deck === 'a' ? 0 : 1], a = b.dataset.a;
    if (a === 'cue') { e.preventDefault(); try { ensureCtx(); } catch (x) {} d.cueDown(); held = function () { d.cueUp(); }; }
    else if (a === 'bendm') { e.preventDefault(); d.setBend(-0.06); held = function () { d.setBend(0); }; }
    else if (a === 'bendp') { e.preventDefault(); d.setBend(0.06); held = function () { d.setBend(0); }; }
    else if (a === 'play') { e.preventDefault(); try { ensureCtx(); } catch (x) {} d.playPress(); }
    else if (a === 'sync') { e.preventDefault(); d.toggleSync(); }
    else if (a === 'loop') { e.preventDefault(); d.loopToggle(+b.dataset.n); }
    else if (a === 'half') { e.preventDefault(); if (d.bpm) d.setBpm(d.bpm / 2); }
    else if (a === 'dbl') { e.preventDefault(); if (d.bpm) d.setBpm(d.bpm * 2); }
    else if (a === 'grid') { e.preventDefault(); if (!d.buf) return; d.grid = d.pos(); toast('Mriežka: tu je teraz prvý úder.'); }
    else if (a === 'range') {
      e.preventDefault();
      var cur = d.tempo; d.range = RANGES[(RANGES.indexOf(d.range) + 1) % RANGES.length];
      cur = clamp(cur, -d.range, d.range);
      setCtl(d.id + '.tempo', d.tempoNorm(cur), 'sys');
    }
  });
  function release() { if (held) { var h = held; held = null; h(); } }
  window.addEventListener('pointerup', release); window.addEventListener('pointercancel', release);

  decks.forEach(function (d) {
    d.el.bpmIn.addEventListener('change', function () {
      var v = parseFloat(d.el.bpmIn.value.replace(',', '.'));
      if (v >= 40 && v <= 220) d.setBpm(v); else d.el.bpmIn.value = d.bpm ? d.bpm.toFixed(1) : '';
    });
    d.el.bpmIn.addEventListener('keydown', function (e) { if (e.key === 'Enter') d.el.bpmIn.blur(); });
    // prehliadač vlny: ťahanie = posun, ťuk na prehľad = skok
    var z = d.el.zoom, zs = null;
    z.addEventListener('pointerdown', function (e) {
      if (!d.buf) return; try { z.setPointerCapture(e.pointerId); } catch (x) {}
      zs = { x: e.clientX, t: d.pos(), w: z.getBoundingClientRect().width };
    });
    z.addEventListener('pointermove', function (e) {
      if (!zs) return;
      var now = performance.now(); if (d.playing && now - d.seekT < 60) return; d.seekT = now;
      d.seek(zs.t - (e.clientX - zs.x) / zs.w * ZOOM_S);
    });
    var zend = function () { zs = null; };
    z.addEventListener('pointerup', zend); z.addEventListener('pointercancel', zend);
    var o = d.el.ov;
    function ovSeek(e) { if (!d.buf) return; var r = o.getBoundingClientRect(); d.seek((e.clientX - r.left) / r.width * d.buf.duration); }
    o.addEventListener('pointerdown', function (e) { try { o.setPointerCapture(e.pointerId); } catch (x) {} o._d = true; ovSeek(e); });
    o.addEventListener('pointermove', function (e) { if (o._d) ovSeek(e); });
    o.addEventListener('pointerup', function () { o._d = false; });
  });

  // ------------------------------------------------------------------ knižnica skladieb
  var lib = [], AUDIO_RE = /\.(mp3|wav|wave|aif|aiff|flac|m4a|aac|ogg|oga|opus|mp4)$/i, MAXROWS = 300;
  var cur = [null, null];
  function extOf(n) { var m = n.match(/\.([^.]+)$/); return m ? m[1].toLowerCase() : ''; }
  function addItem(it) {
    var key = it.name + '|' + it.ext + '|' + (it.size || 0);
    if (lib.some(function (x) { return x.key === key; })) return;
    it.key = key; lib.push(it);
  }
  function addFiles(files) {
    var before = lib.length;
    Array.prototype.forEach.call(files, function (f) {
      if (!(f.type && f.type.indexOf('audio/') === 0) && !AUDIO_RE.test(f.name)) return;
      addItem({ name: f.name.replace(/\.[^.]+$/, ''), ext: extOf(f.name), size: f.size, file: f });
    });
    lib.sort(function (a, b) { return a.name.localeCompare(b.name, 'sk', { numeric: true }); });
    renderLib();
    var n = lib.length - before;
    if (n > 0) toast('Pridané skladby: ' + n); else if (files.length) toast('V tom výbere nie je žiadna nová skladba.');
  }
  async function walk(dir, depth) {
    for await (var ent of dir.entries()) {
      var name = ent[0], h = ent[1];
      if (h.kind === 'file') { if (AUDIO_RE.test(name)) addItem({ name: name.replace(/\.[^.]+$/, ''), ext: extOf(name), handle: h }); }
      else if (depth < 8 && name.charAt(0) !== '.' && name !== 'PIONEER') await walk(h, depth + 1);
    }
  }
  function renderLib() {
    var q = $('#q').value.trim().toLowerCase(), list = $('#list'), shown = 0, total = 0;
    list.textContent = '';
    var frag = document.createDocumentFragment();
    lib.forEach(function (it, idx) {
      if (q && it.name.toLowerCase().indexOf(q) < 0) return;
      total++; if (shown >= MAXROWS) return; shown++;
      var row = document.createElement('div'); row.className = 'item';
      if (cur[0] === it) row.classList.add('cur-a'); if (cur[1] === it) row.classList.add('cur-b');
      var nm = document.createElement('div'); nm.className = 'nm';
      var b = document.createElement('b'); b.textContent = it.name;
      var s = document.createElement('small'); s.textContent = it.ext.toUpperCase() + (it.size ? ' · ' + (it.size / 1048576).toFixed(1) + ' MB' : '');
      nm.appendChild(b); nm.appendChild(s);
      var ba = document.createElement('button'); ba.type = 'button'; ba.className = 'la'; ba.textContent = 'A'; ba.dataset.i = idx; ba.dataset.d = '0';
      var bb = document.createElement('button'); bb.type = 'button'; bb.className = 'lb'; bb.textContent = 'B'; bb.dataset.i = idx; bb.dataset.d = '1';
      row.appendChild(nm); row.appendChild(ba); row.appendChild(bb); frag.appendChild(row);
    });
    list.appendChild(frag);
    if (total > shown) { var m = document.createElement('div'); m.className = 'more'; m.textContent = 'Zobrazených ' + shown + ' z ' + total + '. Spresni hľadanie.'; list.appendChild(m); }
    $('#empty').hidden = lib.length > 0;
  }
  async function loadInto(di, it) {
    var d = decks[di];
    if (d.playing) { toast('Deck ' + d.id.toUpperCase() + ' práve hrá. Najprv ho zastav.'); return; }
    try { ensureCtx(); } catch (e) { return; }
    d.status = 'Načítavam…'; d.buf = null; d.peaks = null; d.ov = null;
    try {
      var file = it.file || await it.handle.getFile();
      var ab = await file.arrayBuffer();
      var buf = await new Promise(function (res, rej) { var p = ctx.decodeAudioData(ab, res, rej); if (p && p.catch) p.catch(rej); });
      if (buf.duration > 20 * 60) toast('Dlhá skladba (' + Math.round(buf.duration / 60) + ' min) berie veľa pamäte.');
      cur[di] = it;
      await d.setTrack(buf, it.name);
    } catch (e) {
      d.status = ''; d.name = ''; cur[di] = null;
      toast('Túto skladbu sa nepodarilo otvoriť (' + (it.ext || '?').toUpperCase() + '). Skús MP3, WAV, FLAC alebo M4A.');
    }
    renderLib();
  }
  $('#list').addEventListener('click', function (e) {
    var b = e.target.closest('button[data-i]'); if (!b) return;
    loadInto(+b.dataset.d, lib[+b.dataset.i]);
  });
  $('#q').addEventListener('input', renderLib);
  $('#addFiles').addEventListener('click', function () { $('#fileIn').click(); });
  $('#fileIn').addEventListener('change', function (e) { addFiles(e.target.files); e.target.value = ''; });
  $('#dirIn').addEventListener('change', function (e) { addFiles(e.target.files); e.target.value = ''; });
  $('#addDir').addEventListener('click', async function () {
    if (window.showDirectoryPicker) {
      try {
        var dir = await window.showDirectoryPicker({ mode: 'read' }), before = lib.length;
        toast('Prehľadávam priečinok…');
        await walk(dir, 0);
        lib.sort(function (a, b) { return a.name.localeCompare(b.name, 'sk', { numeric: true }); });
        renderLib(); toast('Pridané skladby: ' + (lib.length - before));
      } catch (err) { if (err && err.name !== 'AbortError') toast('Priečinok sa nepodarilo otvoriť.'); }
    } else $('#dirIn').click();
  });
  ['dragenter', 'dragover'].forEach(function (n) { window.addEventListener(n, function (e) { if (e.dataTransfer && Array.prototype.indexOf.call(e.dataTransfer.types || [], 'Files') >= 0) { e.preventDefault(); document.body.classList.add('drag'); } }); });
  window.addEventListener('dragleave', function (e) { if (!e.relatedTarget) document.body.classList.remove('drag'); });
  window.addEventListener('drop', function (e) { e.preventDefault(); document.body.classList.remove('drag'); if (e.dataTransfer && e.dataTransfer.files.length) addFiles(e.dataTransfer.files); });

  // ------------------------------------------------------------------ nahrávanie mixu
  var rec = null, recBlobUrl = null, recT0 = 0;
  async function startRec() {
    try { ensureCtx(); } catch (e) { return; }
    if (!window.MixRec || !MixRec.supported()) { toast('MP3 kodér sa nenačítal. Obnov stránku.'); return; }
    var r = new MixRec(ctx, limiter, parseInt($('#kbps').value, 10));
    try { await r.start(); } catch (e) { toast('Nahrávanie sa nepodarilo spustiť: ' + e.message); return; }
    rec = r; recT0 = performance.now();
    $('#recBtn').classList.add('on'); $('#recTxt').textContent = 'STOP'; $('#kbps').disabled = true; $('#recOut').hidden = true;
    keepAwake();
  }
  async function stopRec() {
    var r = rec; rec = null;
    $('#recBtn').classList.remove('on'); $('#recTxt').textContent = 'REC'; $('#kbps').disabled = false; $('#recInfo').textContent = '';
    var blob = await r.stop();
    if (!blob || !blob.size) { toast('Nahrávka je prázdna.'); return; }
    if (recBlobUrl) URL.revokeObjectURL(recBlobUrl);
    recBlobUrl = URL.createObjectURL(blob);
    var d = new Date(), p = function (n) { return (n < 10 ? '0' : '') + n; };
    var name = 'mixoval-' + d.getFullYear() + '-' + p(d.getMonth() + 1) + '-' + p(d.getDate()) + '-' + p(d.getHours()) + p(d.getMinutes()) + '.mp3';
    var out = $('#recOut'); out.hidden = false; out.textContent = '';
    var a = document.createElement('a'); a.href = recBlobUrl; a.download = name; a.textContent = 'Stiahnuť ' + name + ' (' + (blob.size / 1048576).toFixed(1) + ' MB)';
    var au = document.createElement('audio'); au.controls = true; au.src = recBlobUrl;
    out.appendChild(a); out.appendChild(au);
    a.click();
  }
  $('#recBtn').addEventListener('click', function () { if (rec) stopRec(); else startRec(); });
  window.addEventListener('beforeunload', function (e) { if (rec || decks.some(function (d) { return d.playing; })) { e.preventDefault(); e.returnValue = ''; } });

  // ------------------------------------------------------------------ hlavná slučka
  var mmI = $$('#mm i'), mLv = [0, 0], mBuf = new Float32Array(512);
  function peakOf(an) { an.getFloatTimeDomainData(mBuf); var p = 0; for (var i = 0; i < mBuf.length; i++) { var a = mBuf[i] < 0 ? -mBuf[i] : mBuf[i]; if (a > p) p = a; } return p; }
  function tick() {
    decks.forEach(function (d) { d.ui(); });
    if (anL) {
      [anL, anR].forEach(function (an, c) {
        var p = peakOf(an), db = p > 0 ? 20 * Math.log10(p) : -90, l = clamp((db + 54) / 54, 0, 1);
        mLv[c] = Math.max(l, mLv[c] - 0.03); mmI[c].style.width = (100 - mLv[c] * 100) + '%';
      });
    }
    if (rec) {
      var s = rec.seconds(), m = Math.floor(s / 60), sec = Math.floor(s % 60);
      $('#recInfo').textContent = m + ':' + (sec < 10 ? '0' : '') + sec + ' · ' + (rec.bytes / 1048576).toFixed(1) + ' MB';
    }
    requestAnimationFrame(tick);
  }

  decks.forEach(function (d) { d.ui(); });
  renderLib();
  requestAnimationFrame(tick);

  api.decks = decks; api.setCtl = setCtl; api.ctl = ctl; api.analyze = analyze; api.addFiles = addFiles; api.loadInto = loadInto;
  Object.defineProperty(api, 'ctx', { get: function () { return ctx; } });
  window.MixPult = api;
})();
