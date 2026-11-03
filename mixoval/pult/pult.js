/* si/mixoval · Pult — klubové rozloženie: prehrávač A · mixér · prehrávač B.
   Zvuk: skladba → TRIM → EQ → farebný filter → fader → crossfader → (FX) → master → limiter → výstup / nahrávanie.
   Každé ovládanie má svoje id (napr. "a.hi", "xf") a každá zmena ide cez setCtl(). Vďaka tomu sa dajú tie isté
   zmeny neskôr posielať ostatným ľuďom v spoločnej izbe (window.MixPult.onChange). */
(function () {
  'use strict';

  var $ = function (s, r) { return (r || document).querySelector(s); };
  var $$ = function (s, r) { return Array.prototype.slice.call((r || document).querySelectorAll(s)); };
  var clamp = function (x, a, b) { return Math.min(b, Math.max(a, x)); };
  var tt;
  function toast(m) {
    var t = $('#toast'); t.textContent = m; t.classList.add('on');
    clearTimeout(tt); tt = setTimeout(function () { t.classList.remove('on'); }, 2800);
  }
  var yieldUI = function () { return new Promise(function (r) { setTimeout(r, 30); }); };
  function fmtMS(s) {
    if (!isFinite(s) || s < 0) s = 0;
    var d = Math.floor(s * 10), m = Math.floor(d / 600), sec = Math.floor((d % 600) / 10), te = d % 10;
    return (m < 10 ? '0' : '') + m + ':' + (sec < 10 ? '0' : '') + sec + '.' + te;
  }

  // ------------------------------------------------------------------ zvukový reťazec
  var ctx = null, dryBus, mixBus, master, limiter, anL, anR, wake = null, fx = {};
  var RGB = { a: [255, 176, 46], b: [52, 209, 255] };
  var RANGES = [0.06, 0.10, 0.16, 0.5], RLAB = ['6', '10', '16', 'WIDE'];
  var HOTC = ['#29d36b', '#ff8a1f', '#ff3b5b', '#b266ff'], HOTR = ['41,211,107', '255,138,31', '255,59,91', '178,102,255'];
  var ZOOM_S = 8;

  function impulse(sec) {
    var len = Math.floor(ctx.sampleRate * sec), b = ctx.createBuffer(2, len, ctx.sampleRate);
    for (var ch = 0; ch < 2; ch++) { var d = b.getChannelData(ch); for (var i = 0; i < len; i++) d[i] = (Math.random() * 2 - 1) * Math.pow(1 - i / len, 2.6); }
    return b;
  }
  function buildFx() {
    var c = ctx;
    fx.in = c.createGain();
    fx.delay = c.createDelay(4); fx.delay.delayTime.value = 0.375;
    fx.fb = c.createGain(); fx.fb.gain.value = 0.5;
    fx.lp = c.createBiquadFilter(); fx.lp.type = 'lowpass'; fx.lp.frequency.value = 3200;
    fx.in.connect(fx.delay); fx.delay.connect(fx.lp); fx.lp.connect(fx.fb); fx.fb.connect(fx.delay);
    fx.echoOut = c.createGain(); fx.lp.connect(fx.echoOut);
    fx.conv = c.createConvolver(); fx.conv.buffer = impulse(2.4);
    fx.revOut = c.createGain(); fx.in.connect(fx.conv); fx.conv.connect(fx.revOut);
    fx.wet = c.createGain(); fx.wet.gain.value = 0;
    fx.echoOut.connect(fx.wet); fx.revOut.connect(fx.wet); fx.wet.connect(mixBus);
    fx.msend = c.createGain(); fx.msend.gain.value = 0; dryBus.connect(fx.msend); fx.msend.connect(fx.in);
  }
  function applyFxRouting() {
    var on = ctl['fx.on'].v > 0.5, ch = ctl['fx.ch'].v, t = ctx.currentTime;
    decks.forEach(function (d, i) {
      var want = on && ((ch < 0.25 && i === 0) || (ch >= 0.25 && ch <= 0.75 && i === 1));
      if (d.fxSend) d.fxSend.gain.setTargetAtTime(want ? 1 : 0, t, 0.01);
    });
    fx.msend.gain.setTargetAtTime(on && ch > 0.75 ? 1 : 0, t, 0.01);
  }
  function fxBpm() {
    var ch = ctl['fx.ch'].v, pick = ch < 0.25 ? decks[0] : (ch <= 0.75 ? decks[1] : null);
    var cand = [pick, decks[0].isMaster ? decks[0] : (decks[1].isMaster ? decks[1] : null), decks[0], decks[1]];
    for (var i = 0; i < cand.length; i++) { var d = cand[i]; if (d && d.bpm > 0) return d.bpm * (1 + d.tempo); }
    return 120;
  }
  var FXDIV = [0.25, 0.5, 0.75, 1, 2], FXLAB = ['1/4', '1/2', '3/4', '1', '2'];
  function fxIdx() { return Math.min(4, Math.floor(ctl['fx.time'].v * 5)); }
  function updateFxTime() {
    if (!ctx || !fx.delay) return;
    var sec = clamp(FXDIV[fxIdx()] * 60 / fxBpm(), 0.03, 3.9);
    fx.delay.delayTime.setTargetAtTime(sec, ctx.currentTime, 0.05);
  }

  function ensureCtx() {
    if (!ctx) {
      var AC = window.AudioContext || window.webkitAudioContext;
      if (!AC) { toast('Tento prehliadač nepodporuje Web Audio.'); throw new Error('no audio'); }
      try { if (navigator.audioSession) navigator.audioSession.type = 'playback'; } catch (e0) {}
      ctx = new AC({ latencyHint: 'interactive' });
      dryBus = ctx.createGain(); mixBus = ctx.createGain(); master = ctx.createGain();
      limiter = ctx.createDynamicsCompressor();
      limiter.threshold.value = -2; limiter.knee.value = 0; limiter.ratio.value = 20;
      limiter.attack.value = 0.003; limiter.release.value = 0.12;
      dryBus.connect(mixBus); mixBus.connect(master); master.connect(limiter); limiter.connect(ctx.destination);
      var sp = ctx.createChannelSplitter(2);
      anL = ctx.createAnalyser(); anR = ctx.createAnalyser(); anL.fftSize = anR.fftSize = 512;
      limiter.connect(sp); sp.connect(anL, 0); sp.connect(anR, 1);
      buildFx();
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
  var api = { onChange: null, onLoad: null };
  // zmeny, ktoré prišli od iných ľudí v izbe, sa neposielajú späť (applying = true)
  var applying = false;
  function mark(d) { if (!applying) d.dirty = true; }
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

  // 3-pásmová obálka vlny (100 bodov za sekundu): basy (modrá), stredy (jantárová), výšky (biela)
  function makePeaks(buf) {
    var sr = buf.sampleRate, hop = Math.max(1, Math.floor(sr / 100)), n = Math.ceil(buf.length / hop);
    var lo = new Float32Array(n), mi = new Float32Array(n), hi = new Float32Array(n);
    var c0 = buf.getChannelData(0), c1 = buf.numberOfChannels > 1 ? buf.getChannelData(1) : c0;
    var a1 = 1 - Math.exp(-2 * Math.PI * 200 / sr), a2 = 1 - Math.exp(-2 * Math.PI * 2500 / sr), l1 = 0, l2 = 0;
    for (var k = 0; k < n; k++) {
      var base = k * hop, end = Math.min(buf.length, base + hop), ml = 0, mm = 0, mh = 0;
      for (var i = base; i < end; i++) {
        var x = (c0[i] + c1[i]) * 0.5; l1 += a1 * (x - l1); l2 += a2 * (x - l2);
        var v1 = l1 < 0 ? -l1 : l1, m2 = l2 - l1, v2 = m2 < 0 ? -m2 : m2, h3 = x - l2, v3 = h3 < 0 ? -h3 : h3;
        if (v1 > ml) ml = v1; if (v2 > mm) mm = v2; if (v3 > mh) mh = v3;
      }
      lo[k] = ml; mi[k] = mm; hi[k] = mh;
    }
    function norm(a) {
      var s = []; for (var i = 0; i < a.length; i += 7) s.push(a[i]);
      s.sort(function (x, y) { return x - y; });
      var p = s[Math.floor(s.length * 0.985)] || 0, sc = 255 / Math.max(p, 1e-4), o = new Uint8Array(a.length);
      for (var j = 0; j < a.length; j++) { var v = a[j] * sc; o[j] = v > 255 ? 255 : v; }
      return o;
    }
    return { lo: norm(lo), mi: norm(mi), hi: norm(hi), n: n };
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



  // ------------------------------------------------------------------ prehrávač (deck)
  function Deck(id, idx) {
    this.id = id; this.idx = idx; this.buf = null; this.name = ''; this.status = '';
    this.bpm = 0; this.grid = 0; this.trim = 1; this.pk = null;
    this.playing = false; this.startPos = 0; this.startCtx = 0;
    this.tempo = 0; this.bend = 0; this.range = 0.06; this.cue = 0; this.cuePrev = false;
    this.loop = null; this.lastLoop = null; this.loopInT = null;
    this.sync = false; this.syncAt = 0; this.isMaster = false; this.remain = false;
    this.hot = [null, null, null, null]; this.hotPrev = -1;
    this.src = null; this.token = 0; this.seekT = 0; this.ov = null; this.lvl = 0;
    this.jogAng = 0; this.jogLast = performance.now(); this.jogBendT = 0; this.scanT = null; this.touch = false;
  }
  var SEQ = 0;
  Deck.prototype.other = function () { return decks[1 - this.idx]; };
  Object.defineProperty(Deck.prototype, 'rate', { get: function () { return (1 + this.tempo) * (1 + this.bend); } });

  Deck.prototype.attach = function () {
    var c = ctx, mk = function (t) { var f = c.createBiquadFilter(); f.type = t; return f; };
    this.trimN = c.createGain(); this.trimN.gain.value = this.trim;
    this.trimM = c.createGain();
    this.lo = mk('lowshelf'); this.lo.frequency.value = 250;
    this.mid = mk('peaking'); this.mid.frequency.value = 1000; this.mid.Q.value = 0.8;
    this.hi = mk('highshelf'); this.hi.frequency.value = 3500;
    this.flt = mk('lowpass'); this.flt.frequency.value = 22000; this.flt.Q.value = 1.1; this.fltType = 'lowpass';
    this.fad = c.createGain(); this.xf = c.createGain(); this.fxSend = c.createGain(); this.fxSend.gain.value = 0;
    this.an = c.createAnalyser(); this.an.fftSize = 512; this.anBuf = new Float32Array(512);
    this.trimN.connect(this.trimM); this.trimM.connect(this.lo); this.lo.connect(this.mid); this.mid.connect(this.hi); this.hi.connect(this.flt);
    this.flt.connect(this.fad); this.fad.connect(this.an); this.fad.connect(this.xf);
    this.xf.connect(dryBus); this.xf.connect(this.fxSend); this.fxSend.connect(fx.in);
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
  Deck.prototype.rebase = function () { if (this.playing) { this.startPos = this.pos(); this.startCtx = ctx.currentTime; } };
  Deck.prototype._start = function () {
    var s = ctx.createBufferSource(), self = this;
    s.buffer = this.buf; s.playbackRate.value = this.rate;
    if (this.loop) { s.loop = true; s.loopStart = this.loop.s; s.loopEnd = this.loop.e; }
    s.connect(this.trimN);
    var tok = ++this.token;
    s.onended = function () { if (tok !== self.token) return; self.playing = false; self.startPos = self.buf.duration; self.src = null; };
    this.startCtx = ctx.currentTime;
    s.start(0, this.startPos);
    this.src = s; this.playing = true;
  };
  Deck.prototype._stopSrc = function () {
    this.token++;
    if (this.src) { try { this.src.stop(); } catch (e) {} try { this.src.disconnect(); } catch (e2) {} this.src = null; }
  };
  Deck.prototype.quant = function (t) {
    if (!this.bpm) return t;
    var Tb = 60 / this.bpm;
    return Math.max(0, this.grid + Math.round((t - this.grid) / Tb) * Tb);
  };
  Deck.prototype.alignPos = function (p, o) {
    var Tb = 60 / this.bpm, To = 60 / o.bpm;
    var op = (o.pos() - o.grid) / To; op -= Math.floor(op);
    var r = (this.bpm * (1 + this.tempo)) / (o.bpm * (1 + o.tempo));
    var target = r >= 1.5 ? (op * 2) - Math.floor(op * 2) : op;
    var my = (p - this.grid) / Tb; my -= Math.floor(my);
    var d = my - target; d -= Math.round(d);
    var q = p - d * Tb;
    if (q < 0) q += Math.ceil(-q / Tb) * Tb;
    return clamp(q, 0, this.buf.duration);
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
    if (!this.buf) { toast('Najprv načítaj skladbu (BROWSE).'); return; }
    if (this.cuePrev || this.hotPrev >= 0) { this.cuePrev = false; this.hotPrev = -1; return; }
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
    if (Math.abs(this.startPos - this.cue) > 0.04) this.cue = this.quant(this.startPos);
    this.cuePrev = true; this._start();
  };
  Deck.prototype.cueUp = function () {
    if (this.cuePrev) { this.cuePrev = false; this.pause(); this.startPos = this.cue; }
  };
  // hot cue: prázdny = nastaví, nastavený = skočí (na pauze prehráva, kým držíš); dlhé podržanie = zmaže
  Deck.prototype.hotDown = function (i) {
    if (!this.buf) return;
    var h = this.hot[i];
    if (h == null) { this.hot[i] = clamp(this.quant(this.pos()), 0, this.buf.duration); return; }
    if (this.playing) this.seek(h);
    else { ensureCtx(); this.startPos = h; this.hotPrev = i; this._start(); }
  };
  Deck.prototype.hotUp = function () {
    if (this.hotPrev >= 0) { var h = this.hot[this.hotPrev]; this.hotPrev = -1; this.pause(); this.startPos = h; }
  };
  Deck.prototype.hotDelete = function (i) {
    this.hot[i] = null;
    if (this.hotPrev === i) { this.hotPrev = -1; this.pause(); }
  };
  Deck.prototype.setBend = function (b) {
    this.rebase(); this.bend = b;
    if (this.src) this.src.playbackRate.value = this.rate;
  };
  Deck.prototype.onTempoCtl = function (v) {
    this.rebase(); this.tempo = (0.5 - v) * 2 * this.range; // fader hore = pomalšie, dole = rýchlejšie (ako na hardvéri)
    if (this.src) this.src.playbackRate.value = this.rate;
    var o = this.other();
    if (o.sync && this.leads()) o.followTempo();
  };
  Deck.prototype.tempoNorm = function (t) { return 0.5 - t / (2 * this.range); };
  Deck.prototype.leads = function () {
    var o = this.other();
    if (!this.sync) return true;
    if (o.isMaster && !this.isMaster) return false;
    if (this.isMaster && !o.isMaster) return true;
    return this.syncAt < o.syncAt;
  };
  Deck.prototype.followTempo = function () {
    var o = this.other();
    if (!o.bpm || !this.bpm) return false;
    var target = o.bpm * (1 + o.tempo), best = null;
    [1, 2, 0.5].forEach(function (k) {
      var t = (target * k) / this.bpm - 1;
      if (best === null || Math.abs(t) < Math.abs(best)) best = t;
    }, this);
    var f = best;
    while (Math.abs(f) > this.range && this.range < 0.5) this.range = RANGES[RANGES.indexOf(this.range) + 1] || 0.5;
    f = clamp(f, -this.range, this.range);
    setCtl(this.id + '.tempo', this.tempoNorm(f), 'sys');
    return true;
  };
  Deck.prototype.toggleSync = function () {
    if (!this.buf) return;
    var o = this.other();
    if (this.sync) { this.sync = false; return; }
    if (!o.bpm || !this.bpm) { toast('Na sync treba poznať tempo oboch skladieb (BPM).'); return; }
    this.sync = true; this.syncAt = ++SEQ;
    this.followTempo();
    if (this.playing && o.playing) this.seek(this.alignPos(this.pos(), o));
  };
  Deck.prototype.setMaster = function () {
    var on = !this.isMaster;
    decks.forEach(function (d) { d.isMaster = false; });
    this.isMaster = on;
    var o = this.other(); if (o.sync) o.followTempo();
  };
  Deck.prototype.cycleRange = function () {
    var cur = this.tempo;
    this.range = RANGES[(RANGES.indexOf(this.range) + 1) % RANGES.length];
    setCtl(this.id + '.tempo', this.tempoNorm(clamp(cur, -this.range, this.range)), 'sys');
  };

  // slučky
  Deck.prototype.setLoop = function (s, e, n) {
    if (!this.buf || !(e > s + 0.02) || e > this.buf.duration) return;
    var p0 = this.pos();
    this.rebase(); this.loop = { s: s, e: e, n: n || null }; this.lastLoop = this.loop; this.loopInT = null;
    if (this.playing && p0 >= e) { this.startPos = s + ((p0 - s) % (e - s)); this._stopSrc(); this._start(); }
    else if (this.src) { this.src.loopStart = s; this.src.loopEnd = e; this.src.loop = true; }
  };
  Deck.prototype.loopBeats = function (n) {
    if (!this.buf) return;
    if (this.loop && this.loop.n === n) { this.loopOff(); return; }
    if (!this.bpm) { toast('Slučky potrebujú poznať BPM.'); return; }
    var Tb = 60 / this.bpm, p = this.pos();
    var k = Math.floor((p - this.grid) / Tb + 1e-6), s = this.grid + k * Tb;
    if (s < 0) s += Tb;
    this.setLoop(s, s + n * Tb, n);
  };
  Deck.prototype.loopInPress = function () { if (this.buf) { this.loopInT = this.quant(this.pos()); toast('Slučka: začiatok nastavený.'); } };
  Deck.prototype.loopOutPress = function () {
    if (!this.buf || this.loopInT == null) { toast('Najprv nastav IN/CUE.'); return; }
    var e = this.quant(this.pos());
    if (e > this.loopInT + 0.05) this.setLoop(this.loopInT, e, null);
  };
  Deck.prototype.reloop = function () {
    if (this.loop) this.loopOff();
    else if (this.lastLoop) this.setLoop(this.lastLoop.s, this.lastLoop.e, this.lastLoop.n);
  };
  Deck.prototype.loopMul = function (f) {
    if (!this.loop) return;
    var L = this.loop, len = (L.e - L.s) * f;
    if (len < 0.03) return;
    this.setLoop(L.s, L.s + len, L.n ? L.n * f : null);
  };
  Deck.prototype.loopOff = function () {
    if (!this.loop) return;
    this.rebase(); this.loop = null;
    if (this.src) this.src.loop = false;
  };
  Deck.prototype.setBpm = function (b) {
    if (!(b >= 40 && b <= 220)) return;
    this.bpm = Math.round(b * 100) / 100;
    this.loopOff();
    if (this.sync) this.followTempo();
    var o = this.other(); if (o.sync) o.followTempo();
  };

  // hľadanie (podržané ◀◀ ▶▶) a skladby
  Deck.prototype.scanStart = function (dir) {
    var self = this, k = 0; this.scanStop();
    if (!this.buf) return;
    this.scanDir = dir;
    if (dir > 0 && this.playing) this.setBend(2);
    else this.scanT = setInterval(function () { k++; self.seek(self.pos() + dir * Math.min(0.5 + k * 0.15, 6) * (self.playing ? 0.5 : 1)); }, 70);
  };
  Deck.prototype.scanStop = function () {
    if (this.scanT) { clearInterval(this.scanT); this.scanT = null; }
    if (this.scanDir > 0 && this.bend === 2) this.setBend(0);
    this.scanDir = 0;
  };
  Deck.prototype.trackStep = function (dir) {
    if (dir < 0 && this.buf && this.pos() > 1) { this.seek(0); return; }
    var i = lib.indexOf(cur[this.idx]), j = i + dir;
    if (i < 0 || j < 0 || j >= lib.length) { toast(i < 0 ? 'Otvor zoznam skladieb (BROWSE).' : 'Viac skladieb v zozname nie je.'); return; }
    loadInto(this.idx, lib[j]);
  };

  Deck.prototype.stopHard = function () { this.scanStop(); this._stopSrc(); this.playing = false; this.cuePrev = false; this.hotPrev = -1; };
  Deck.prototype.setTrack = async function (buf, name, known) {
    this.stopHard(); this.shared = null;
    this.buf = buf; this.name = name; this.startPos = 0; this.cue = 0; this.loop = null; this.lastLoop = null; this.loopInT = null;
    this.sync = false; this.bend = 0; this.hot = [null, null, null, null]; this.bpm = 0; this.grid = 0; this.ov = null; this.range = 0.06;
    setCtl(this.id + '.tempo', 0.5, 'sys');
    this.trim = calcTrim(buf); if (this.trimN) this.trimN.gain.value = this.trim;
    this.pk = makePeaks(buf);
    this.status = 'Analyzujem tempo…'; await yieldUI();
    var r = null;
    if (known && known.bpm) r = { bpm: known.bpm, grid: known.grid };
    else { try { r = analyze(buf); } catch (e) { r = null; } }
    if (r) {
      this.bpm = r.bpm; this.grid = r.grid;
      var Tb = 60 / r.bpm; this.cue = Math.max(0, r.grid - Math.floor(r.grid / Tb) * Tb); this.startPos = this.cue;
    } else if (!known) toast('Tempo sa nepodarilo určiť. Zadaj BPM ručne.');
    this.status = '';
    var o = this.other(); if (o.sync) o.followTempo();
    mark(this);
  };
  Deck.prototype.unload = function () {
    var was = applying; applying = true;
    this.stopHard(); this.buf = null; this.pk = null; this.ov = null; this.name = ''; this.status = ''; this.shared = null; this.file = null;
    this.bpm = 0; this.grid = 0; this.loop = null; this.lastLoop = null; this.loopInT = null; this.sync = false;
    this.hot = [null, null, null, null]; this.startPos = 0; this.cue = 0;
    applying = was;
  };

  // ------------------------------------------------------------------ stav decku pre spoločnú izbu
  // snap() = čo práve deck robí (pozícia v čase "now" spoločných hodín), applySnap() = nastav sa podľa toho
  function outLat() { return ctx ? (ctx.outputLatency || 0) + (ctx.baseLatency || 0) : 0; }
  Deck.prototype.snap = function (now) {
    return {
      d: this.idx, tr: this.shared || null, pl: this.playing, pos: this.pos(), at: now, ol: outLat(),
      tempo: this.tempo, bend: this.bend, range: this.range, loop: this.loop, last: this.lastLoop, li: this.loopInT,
      cue: this.cue, hot: this.hot.slice(), sync: this.sync, sa: this.syncAt, ms: this.isMaster, bpm: this.bpm, grid: this.grid
    };
  };
  function sameLoop(a, b) { return (!a && !b) || (a && b && Math.abs(a.s - b.s) < 1e-4 && Math.abs(a.e - b.e) < 1e-4); }
  Deck.prototype.applySnap = function (s, now) {
    var was = applying; applying = true;
    try {
      this.scanStop();
      this.range = s.range; this.bpm = s.bpm; this.grid = s.grid; this.cue = s.cue; this.hot = s.hot.slice();
      this.loopInT = s.li; this.sync = s.sync; this.syncAt = s.sa || 0; this.isMaster = s.ms; this.lastLoop = s.last;
      this.cuePrev = false; this.hotPrev = -1;
      if (this.playing) this.rebase();
      this.tempo = s.tempo; this.bend = s.bend;
      var c = ctl[this.id + '.tempo']; c.v = clamp(this.tempoNorm(s.tempo), 0, 1); c.els.forEach(function (e) { e.render(c.v); });
      if (!this.buf || !ctx) { this.loop = s.loop; this.startPos = s.pos; return; }
      if (s.pl) {
        var rate = this.rate, t = s.pos + ((now - s.at) / 1000 + (outLat() - (s.ol || 0))) * rate, L = s.loop;
        if (L && t >= L.e) t = L.s + ((t - L.s) % (L.e - L.s));
        t = clamp(t, 0, this.buf.duration);
        if (this.playing && this.src && sameLoop(L, this.loop) && Math.abs(this.pos() - t) < 0.025) {
          this.src.playbackRate.value = rate;
        } else {
          this._stopSrc(); this.loop = L; this.startPos = t; this._start();
        }
      } else {
        if (this.playing) { this._stopSrc(); this.playing = false; }
        this.loop = s.loop; this.startPos = s.pos;
      }
    } finally { applying = was; this.dirty = false; }
  };

  // každá zmena stavu decku sa označí, aby ju izba mohla poslať ostatným
  ['play', 'pause', 'seek', 'cueDown', 'cueUp', 'hotDown', 'hotUp', 'hotDelete', 'setBend', 'toggleSync', 'cycleRange',
    'setLoop', 'loopOff', 'setBpm', 'loopInPress', 'onTempoCtl', 'followTempo'].forEach(function (n) {
    var f = Deck.prototype[n];
    Deck.prototype[n] = function () { var r = f.apply(this, arguments); mark(this); return r; };
  });
  var setMaster0 = Deck.prototype.setMaster;
  Deck.prototype.setMaster = function () { var r = setMaster0.apply(this, arguments); decks.forEach(mark); return r; };

  // ------------------------------------------------------------------ kreslenie
  function sizeCanvas(c) {
    var dpr = Math.min(2, window.devicePixelRatio || 1), r = c.getBoundingClientRect();
    var w = Math.max(10, Math.round(r.width * dpr)), h = Math.max(10, Math.round(r.height * dpr));
    if (c.width !== w || c.height !== h) { c.width = w; c.height = h; return true; }
    return false;
  }
  var BL = '#3a74ff', AM = '#f0a93a', WH = '#f4f7ff';
  function band(g, x, mid, lo, mi, hi, mh, w) {
    var hl = Math.pow(lo / 255, 0.85) * mh, hm = Math.pow(mi / 255, 0.85) * mh * 0.8, hh = Math.pow(hi / 255, 0.85) * mh * 0.55;
    g.fillStyle = BL; g.fillRect(x, mid - hl, w, hl * 2 + 1);
    g.fillStyle = AM; g.fillRect(x, mid - hm, w, hm * 2 + 1);
    g.fillStyle = WH; g.fillRect(x, mid - hh, w, hh * 2 + 1);
  }
  function fit(g, str, maxW) {
    if (g.measureText(str).width <= maxW) return str;
    while (str.length > 1 && g.measureText(str + '…').width > maxW) str = str.slice(0, -1);
    return str + '…';
  }
  function tag(g, x, y, w, h, label, on, col) {
    g.fillStyle = on ? col : 'rgba(255,255,255,.07)'; g.fillRect(x, y, w, h);
    g.fillStyle = on ? '#04101f' : '#5d676d'; g.font = '700 20px "Barlow Condensed",sans-serif'; g.textAlign = 'center'; g.textBaseline = 'middle';
    g.fillText(label, x + w / 2, y + h / 2 + 1);
  }
  Deck.prototype.drawLCD = function (t) {
    var c = this.el.lcd; sizeCanvas(c);
    var g = c.getContext('2d'), s = c.width / 940, W = 940, H = c.height / s;
    g.setTransform(s, 0, 0, s, 0, 0);
    var bg = g.createLinearGradient(0, 0, 0, H); bg.addColorStop(0, '#07090d'); bg.addColorStop(1, '#030405');
    g.fillStyle = bg; g.fillRect(0, 0, W, H);
    var col = 'rgb(' + RGB[this.id].join(',') + ')';
    g.textBaseline = 'middle';
    // hlavička
    g.fillStyle = col; g.fillRect(14, 8, 34, 34);
    g.fillStyle = '#05080a'; g.font = '800 28px "Barlow Condensed",sans-serif'; g.textAlign = 'center'; g.fillText(this.id.toUpperCase(), 31, 26);
    g.fillStyle = '#6d777d'; g.font = '600 15px "Barlow Condensed",sans-serif'; g.textAlign = 'left'; g.fillText('TRACK', 58, 12);
    g.fillStyle = this.buf ? '#f1f4f6' : '#59636a'; g.font = '600 27px "Barlow",sans-serif';
    var title = this.status || this.name || 'NO TRACK';
    g.fillText(fit(g, title, 560), 58, 34);
    tag(g, 700, 11, 100, 30, 'SYNC', this.sync, '#3d8bff');
    tag(g, 812, 11, 114, 30, 'MASTER', this.isMaster, '#3d8bff');
    g.fillStyle = 'rgba(255,255,255,.08)'; g.fillRect(14, 50, 912, 2);
    // údaje
    g.textAlign = 'left';
    g.fillStyle = '#6d777d'; g.font = '600 17px "Barlow Condensed",sans-serif';
    g.fillText('BPM', 18, 66); g.fillText(this.remain ? 'TIME  REMAIN' : 'TIME  ELAPSED', 330, 66); g.fillText('TEMPO', 688, 66);
    g.fillStyle = '#f6f8f9'; g.font = '500 56px "IBM Plex Mono",monospace';
    g.fillText(this.bpm ? (this.bpm * (1 + this.tempo)).toFixed(2) : '---.--', 14, 106);
    var tv = this.buf ? (this.remain ? '-' + fmtMS(this.buf.duration - t) : ' ' + fmtMS(t)) : ' 00:00.0';
    g.fillText(tv, 322, 106);
    var pc = this.tempo * 100;
    g.fillStyle = Math.abs(pc) < 0.005 ? '#f6f8f9' : '#ffd37a'; g.font = '500 46px "IBM Plex Mono",monospace';
    g.fillText((pc >= 0 ? '+' : '') + pc.toFixed(2) + '%', 682, 108);
    g.fillStyle = '#6d777d'; g.font = '600 17px "Barlow Condensed",sans-serif'; g.textAlign = 'right';
    g.fillText('±' + RLAB[RANGES.indexOf(this.range)], 926, 66); g.textAlign = 'left';

    var pk = this.pk, dur = this.buf ? this.buf.duration : 0;
    // prehľad celej skladby
    var ox = 14, ow = 912, oy = 134, oh = 44;
    g.fillStyle = '#05070a'; g.fillRect(ox, oy, ow, oh);
    if (pk) {
      var key = c.width + 'x' + c.height;
      if (!this.ov || this.ov.k !== key) {
        var oc = document.createElement('canvas'); oc.width = Math.round(ow * s); oc.height = Math.round(oh * s);
        var og = oc.getContext('2d'), n = pk.n, sw = oc.width, sh = oc.height;
        for (var x = 0; x < sw; x++) {
          var i0 = Math.floor(x / sw * n), i1 = Math.max(i0 + 1, Math.floor((x + 1) / sw * n)), a = 0, b = 0, d = 0;
          for (var i = i0; i < i1 && i < n; i++) { if (pk.lo[i] > a) a = pk.lo[i]; if (pk.mi[i] > b) b = pk.mi[i]; if (pk.hi[i] > d) d = pk.hi[i]; }
          band(og, x, sh / 2, a, b, d, sh * 0.46, 1);
        }
        this.ov = { c: oc, k: key };
      }
      g.drawImage(this.ov.c, ox, oy, ow, oh);
      var px = ox + t / dur * ow;
      g.fillStyle = 'rgba(0,0,0,.5)'; g.fillRect(ox, oy, px - ox, oh);
      if (this.loop) { g.fillStyle = 'rgba(62,224,127,.38)'; g.fillRect(ox + this.loop.s / dur * ow, oy, Math.max(3, (this.loop.e - this.loop.s) / dur * ow), oh); }
      for (var h = 0; h < 4; h++) if (this.hot[h] != null) { g.fillStyle = HOTC[h]; g.fillRect(ox + this.hot[h] / dur * ow - 1.5, oy, 3, oh); }
      g.fillStyle = '#ff8a1f'; g.fillRect(ox + this.cue / dur * ow - 1.5, oy + oh - 10, 3, 10);
      g.fillStyle = '#fff'; g.fillRect(px - 1.5, oy - 2, 3, oh + 4);
    }
    // zväčšená vlna
    var zx = 14, zw = 912, zy = 186, zh = 276, mid = zy + zh / 2, half = ZOOM_S / 2, cx = zx + zw / 2;
    g.fillStyle = '#04060a'; g.fillRect(zx, zy, zw, zh);
    if (pk) {
      if (this.loop) {
        var xs = cx + (this.loop.s - t) / half * (zw / 2), xe = cx + (this.loop.e - t) / half * (zw / 2);
        g.fillStyle = 'rgba(62,224,127,.2)'; g.fillRect(Math.max(zx, xs), zy, Math.min(zx + zw, xe) - Math.max(zx, xs), zh);
      }
      for (var xx = 0; xx < zw; xx += 2) {
        var tm = t + (xx - zw / 2) / (zw / 2) * half, ii = Math.floor(tm * 100);
        if (ii < 0 || ii >= pk.n) continue;
        g.globalAlpha = xx < zw / 2 ? 0.55 : 1;
        band(g, zx + xx, mid, pk.lo[ii], pk.mi[ii], pk.hi[ii], zh * 0.47, 2);
      }
      g.globalAlpha = 1;
      if (this.bpm) {
        var Tb = 60 / this.bpm, k0 = Math.ceil((t - half - this.grid) / Tb), k1 = Math.floor((t + half - this.grid) / Tb);
        for (var k = k0; k <= k1; k++) {
          var bx = cx + (this.grid + k * Tb - t) / half * (zw / 2), strong = (((k % 4) + 4) % 4) === 0;
          g.fillStyle = strong ? 'rgba(255,255,255,.8)' : 'rgba(255,255,255,.3)';
          g.fillRect(Math.round(bx) - 1, strong ? zy : zy + zh - 34, 2, strong ? zh : 34);
        }
      }
      for (var hh2 = 0; hh2 < 4; hh2++) {
        var ht = this.hot[hh2]; if (ht == null) continue;
        var hx = cx + (ht - t) / half * (zw / 2);
        if (hx < zx - 20 || hx > zx + zw + 20) continue;
        g.fillStyle = HOTC[hh2]; g.fillRect(hx - 1.5, zy, 3, zh * 0.8);
        g.fillRect(hx, zy, 30, 28); g.fillStyle = '#0a0a0a'; g.font = '800 22px "Barlow Condensed",sans-serif'; g.textAlign = 'center'; g.fillText('ABCD'.charAt(hh2), hx + 15, zy + 15);
      }
      var cxp = cx + (this.cue - t) / half * (zw / 2);
      if (cxp >= zx && cxp <= zx + zw) { g.fillStyle = '#ff8a1f'; g.beginPath(); g.moveTo(cxp - 10, zy + zh); g.lineTo(cxp + 10, zy + zh); g.lineTo(cxp, zy + zh - 18); g.fill(); }
    } else {
      g.fillStyle = '#4b555c'; g.font = '600 30px "Barlow",sans-serif'; g.textAlign = 'center';
      g.fillText(this.status || 'Ťukni BROWSE a vyber skladbu', cx, mid);
    }
    g.fillStyle = '#fff'; g.fillRect(cx - 1.5, zy, 3, zh);
    // beat pás
    var by = 470;
    g.fillStyle = '#6d777d'; g.font = '600 17px "Barlow Condensed",sans-serif'; g.textAlign = 'left'; g.fillText('BEAT', 18, by + 14);
    var bt = 0, bar = 0;
    if (this.bpm && this.buf) { var q = (t - this.grid) / (60 / this.bpm); bt = ((Math.floor(q) % 4) + 4) % 4; bar = Math.floor(Math.floor(q) / 4) + 1; }
    for (var j = 0; j < 4; j++) {
      g.fillStyle = (this.bpm && j === bt) ? (j === 0 ? '#ff5a3c' : col) : 'rgba(255,255,255,.1)'; g.fillRect(80 + j * 60, by + 2, 52, 24);
    }
    g.fillStyle = '#6d777d'; g.fillText('BAR', 336, by + 14);
    g.fillStyle = '#f1f4f6'; g.font = '500 26px "IBM Plex Mono",monospace'; g.fillText(this.bpm && this.buf ? String(Math.max(1, bar)) : '-', 384, by + 14);
    if (this.loop) { tag(g, 640, by + 1, 130, 26, this.loop.n ? 'LOOP ' + this.loop.n : 'LOOP', true, '#3ee07f'); }
    g.textAlign = 'right'; g.fillStyle = '#6d777d'; g.font = '600 17px "Barlow Condensed",sans-serif';
    g.fillText(this.buf ? 'DURATION ' + fmtMS(dur) : '', 926, by + 14);
  };

  Deck.prototype.drawJog = function (t, dt) {
    var c = this.el.jog; sizeCanvas(c);
    var g = c.getContext('2d'), S = c.width, R = S / 2;
    g.setTransform(1, 0, 0, 1, 0, 0); g.clearRect(0, 0, S, S); g.translate(R, R);
    var col = RGB[this.id].join(',');
    if (this.playing && !this.touch) this.jogAng += this.rate * 3.49 * dt;
    // kovový obrus
    var ring = g.createRadialGradient(0, 0, R * 0.78, 0, 0, R);
    ring.addColorStop(0, '#23262a'); ring.addColorStop(0.25, '#6f777d'); ring.addColorStop(0.5, '#cfd5d9'); ring.addColorStop(0.78, '#7d858b'); ring.addColorStop(1, '#17191c');
    g.fillStyle = ring; g.beginPath(); g.arc(0, 0, R * 0.995, 0, 7); g.fill();
    g.strokeStyle = 'rgba(0,0,0,.65)'; g.lineWidth = Math.max(1, S * 0.006); g.beginPath(); g.arc(0, 0, R * 0.8, 0, 7); g.stroke();
    // plocha
    var pl = g.createRadialGradient(0, 0, 0, 0, 0, R * 0.79);
    pl.addColorStop(0, '#1a1c1f'); pl.addColorStop(0.7, '#0f1012'); pl.addColorStop(1, '#08090a');
    g.fillStyle = pl; g.beginPath(); g.arc(0, 0, R * 0.79, 0, 7); g.fill();
    g.strokeStyle = 'rgba(255,255,255,.05)'; g.lineWidth = 1;
    for (var r = 0.52; r < 0.78; r += 0.045) { g.beginPath(); g.arc(0, 0, R * r, 0, 7); g.stroke(); }
    // postup skladby (LED prstenec)
    var dur = this.buf ? this.buf.duration : 0, fr = dur ? t / dur : 0;
    g.lineWidth = Math.max(2, S * 0.022); g.lineCap = 'butt';
    g.strokeStyle = 'rgba(255,255,255,.1)'; g.beginPath(); g.arc(0, 0, R * 0.735, 0, 7); g.stroke();
    if (dur) { g.strokeStyle = 'rgba(' + col + ',.95)'; g.beginPath(); g.arc(0, 0, R * 0.735, -Math.PI / 2, -Math.PI / 2 + fr * Math.PI * 2); g.stroke(); }
    // otáčajúca sa značka
    g.save(); g.rotate(this.jogAng);
    g.strokeStyle = this.touch ? '#fff' : 'rgba(255,255,255,.85)'; g.lineWidth = Math.max(2, S * 0.014); g.lineCap = 'round';
    g.beginPath(); g.moveTo(0, -R * 0.56); g.lineTo(0, -R * 0.66); g.stroke(); g.restore();
    // stredový displej
    g.fillStyle = '#020304'; g.beginPath(); g.arc(0, 0, R * 0.46, 0, 7); g.fill();
    g.strokeStyle = '#2b3035'; g.lineWidth = Math.max(1.5, S * 0.01); g.stroke();
    var bt = -1;
    if (this.bpm && this.buf) { var q = (t - this.grid) / (60 / this.bpm); bt = ((Math.floor(q) % 4) + 4) % 4; }
    for (var j = 0; j < 4; j++) {
      var a0 = -Math.PI / 2 + j * Math.PI / 2 + 0.12, a1 = a0 + Math.PI / 2 - 0.24;
      g.strokeStyle = (j === bt) ? (j === 0 ? '#ff5a3c' : 'rgb(' + col + ')') : 'rgba(255,255,255,.12)';
      g.lineWidth = Math.max(2, S * 0.025); g.beginPath(); g.arc(0, 0, R * 0.4, a0, a1); g.stroke();
    }
    g.fillStyle = bt >= 0 ? '#f4f6f7' : '#4b555c'; g.textAlign = 'center'; g.textBaseline = 'middle';
    g.font = '700 ' + Math.round(S * 0.2) + 'px "Barlow Condensed",sans-serif'; g.fillText(bt >= 0 ? String(bt + 1) : '–', 0, -S * 0.015);
    g.fillStyle = '#6d777d'; g.font = '600 ' + Math.round(S * 0.056) + 'px "Barlow Condensed",sans-serif';
    g.fillText(this.touch ? 'SCRUB' : (this.playing ? 'PLAY' : 'PAUSE'), 0, S * 0.115);
  };

  var TXT = function (el, v) { if (el._v !== v) { el.textContent = v; el._v = v; } };
  var lastUi = performance.now();
  Deck.prototype.ui = function (now) {
    var e = this.el, t = this.pos(), dt = Math.min(0.1, (now - lastUi) / 1000);
    this.drawLCD(t); this.drawJog(t, dt);
    var self = this;
    e.play.classList.toggle('on', this.playing && !this.cuePrev && this.hotPrev < 0);
    e.cue.classList.toggle('on', this.cuePrev || (!this.playing && Math.abs(this.startPos - this.cue) < 0.04 && !!this.buf));
    e.sync.classList.toggle('on', this.sync);
    e.master.classList.toggle('on', this.isMaster);
    e.timeBtn.classList.toggle('on', this.remain);
    e.loop4.classList.toggle('on', !!(this.loop && this.loop.n === 4));
    e.reloop.classList.toggle('on', !!this.loop);
    e.loopIn.classList.toggle('on', this.loopInT != null && !this.loop);
    e.hot.forEach(function (b, i) { b.classList.toggle('set', self.hot[i] != null); });
    TXT(e.range, 'RANGE ±' + RLAB[RANGES.indexOf(this.range)]);
    if (this.jogBendT && now - this.jogBendT > 110 && this.bend !== 0 && this.jogRing) this.setBend(0);
    // úroveň kanála
    var lv = 0;
    if (this.an && this.playing) {
      this.an.getFloatTimeDomainData(this.anBuf);
      var pk = 0; for (var i = 0; i < this.anBuf.length; i++) { var a = this.anBuf[i] < 0 ? -this.anBuf[i] : this.anBuf[i]; if (a > pk) pk = a; }
      lv = pk > 0 ? clamp((20 * Math.log10(pk) + 54) / 54, 0, 1) : 0;
    }
    this.lvl = Math.max(lv, this.lvl - 0.03);
    e.meter.firstChild.style.height = (100 - this.lvl * 100) + '%';
  };

  // ------------------------------------------------------------------ rozloženie (výkres v jednotkách cqw)
  function P(x, y, w, h) { return 'left:' + x + 'cqw;top:' + y + 'cqw;' + (w != null ? 'width:' + w + 'cqw;' : '') + (h != null ? 'height:' + h + 'cqw;' : ''); }
  function BTN(a, x, y, w, h, label, cls, attr) { return '<button type="button" class="k ' + (cls || '') + '" data-a="' + a + '" ' + (attr || '') + ' style="' + P(x, y, w, h) + '">' + label + '</button>'; }
  function PR(x, y, t, w, cls) { return '<span class="pr ' + (cls || '') + '" style="' + P(x, y, w) + '">' + t + '</span>'; }
  function LN(x, y, w) { return '<i class="ln" style="' + P(x, y, w) + '"></i>'; }
  var IC = {
    sb: '<svg viewBox="0 0 24 16"><path d="M12 2L4 8l8 6zM22 2l-8 6 8 6z"/></svg>',
    sf: '<svg viewBox="0 0 24 16"><path d="M2 2l8 6-8 6zM12 2l8 6-8 6z"/></svg>',
    tp: '<svg viewBox="0 0 24 16"><path d="M4 2h3v12H4zM20 2L9 8l11 6z"/></svg>',
    tn: '<svg viewBox="0 0 24 16"><path d="M17 2h3v12h-3zM4 2l11 6L4 14z"/></svg>',
    play: '<svg class="pl" viewBox="0 0 16 16"><path d="M4 2l10 6-10 6z"/></svg><svg class="pa" viewBox="0 0 16 16"><path d="M3 2h4v12H3zM9 2h4v12H9z"/></svg>'
  };
  function brand(x, y, big) { return '<div class="brand' + (big ? ' big' : '') + '" style="' + P(x, y) + '"><i class="lg"></i><span>durica.si/</span><b>mixoval</b></div>'; }

  function cdjHTML(id) {
    var ID = id.toUpperCase(), h = '';
    h += '<section class="unit cdj ' + id + '" data-deck="' + id + '"><div class="plate"></div>';
    h += brand(4, 3.1);
    h += BTN('browse', 56, 2.4, 22, 6.4, 'BROWSE', 'sm');
    h += '<div class="badge" style="' + P(85, 2.2, 12, 6.8) + '">' + ID + '</div>';
    h += '<div class="lcdw" style="' + P(3, 10.5, 94, 50) + '"><canvas data-r="lcd"></canvas></div>';
    // slučky
    h += BTN('lin', 3, 62.5, 15, 7, 'IN / CUE', 'sm', 'data-r="loopIn"');
    h += BTN('lout', 18.6, 62.5, 15, 7, 'OUT', 'sm');
    h += BTN('reloop', 34.2, 62.5, 18.6, 7, 'RELOOP / EXIT', 'sm g', 'data-r="reloop"');
    h += BTN('loop4', 53.4, 62.5, 14.4, 7, '4 BEAT', 'sm g', 'data-r="loop4"');
    h += BTN('lhalf', 68.4, 62.5, 13.6, 7, '½X', 'sm');
    h += BTN('ldbl', 82.6, 62.5, 14.4, 7, '2X', 'sm');
    // hot cue + čas
    for (var i = 0; i < 4; i++) h += '<button type="button" class="hp" data-a="hot" data-i="' + i + '" style="' + P(3 + i * 17.8, 71, 17, 7) + '--hc:' + HOTC[i] + ';--hcr:' + HOTR[i] + '">' + 'ABCD'.charAt(i) + '</button>';
    h += BTN('time', 75, 71, 22, 7, 'TIME MODE', 'sm bl', 'data-r="timeBtn"');
    // vľavo od jogu
    h += PR(3, 80.2, 'SEARCH', 17, 'c');
    h += BTN('sback', 3, 83, 8.2, 6.4, IC.sb, '', 'aria-label="Hľadať dozadu"') + BTN('sfwd', 11.8, 83, 8.2, 6.4, IC.sf, '', 'aria-label="Hľadať dopredu"');
    h += PR(3, 91, 'TRACK', 17, 'c');
    h += BTN('tprev', 3, 93.8, 8.2, 6.4, IC.tp, '', 'aria-label="Predošlá skladba"') + BTN('tnext', 11.8, 93.8, 8.2, 6.4, IC.tn, '', 'aria-label="Ďalšia skladba"');
    h += BTN('cue', 4.5, 104, 13, 13, 'CUE', 'round cue o', 'aria-label="Cue"');
    h += BTN('play', 4.5, 119.5, 13, 13, IC.play, 'round play g', 'aria-label="Prehrať / pauza"');
    // jog
    h += '<div class="jogw" style="' + P(22, 80.5, 56, 56) + '"><canvas data-r="jog"></canvas></div>';
    // vpravo od jogu
    h += BTN('sync', 79.2, 81, 8.8, 6.6, 'SYNC', 'sm bl');
    h += BTN('master', 88.4, 81, 8.6, 6.6, 'MASTER', 'sm bl');
    h += BTN('range', 79.2, 89, 17.8, 5.6, 'RANGE ±6', 'sm', 'data-r="range"');
    h += PR(79.2, 96.4, 'TEMPO', 17.8, 'c');
    h += '<div class="vf tmp" data-ctl="' + id + '.tempo" data-def="0.5" data-type="v" style="' + P(84.5, 100, 8, 34.6) + '" aria-label="Tempo"><b></b></div>';
    h += PR(94.2, 99, '−', 3) + PR(94.2, 131.2, '+', 3);
    h += LN(3, 61.1, 94);
    h += '</section>';
    return h;
  }
  function knob(id, cx, y, label, def) {
    return '<div class="knob" data-ctl="' + id + '" data-def="' + (def == null ? 0.5 : def) + '" data-type="k" style="' + P(cx - 4.5, y) + '"><span class="tk"></span><i class="cap"><b></b></i></div>' + PR(cx - 8, y + 10.6, label, 16, 'c');
  }
  function seg(id, x, y, w, h, items) {
    return '<div class="seg" data-seg="' + id + '" style="' + P(x, y, w, h) + '">' + items.map(function (it) { return '<button type="button" data-v="' + it[1] + '">' + it[0] + '</button>'; }).join('') + '</div>';
  }
  function mixerHTML() {
    var h = '<section class="unit mixer"><div class="plate"></div>';
    h += '<div class="brand big" style="left:0;top:3cqw;width:100cqw;justify-content:center"><i class="lg"></i><span>durica.si/</span><b>mixoval</b></div>';
    [['a', 18.5], ['b', 81.5]].forEach(function (c) {
      var id = c[0], cx = c[1];
      h += '<div class="chip" style="' + P(cx - 9, 10.4, 18, 3.8) + 'background:var(--' + id + ')">CH ' + id.toUpperCase() + '</div>';
      h += knob(id + '.trim', cx, 16, 'TRIM') + knob(id + '.hi', cx, 29, 'HI') + knob(id + '.mid', cx, 42, 'MID') + knob(id + '.lo', cx, 55, 'LOW') + knob(id + '.flt', cx, 68, 'FILTER');
      h += PR(cx - 10, 81.6, 'ASSIGN', 20, 'c');
      h += seg(id + '.asg', cx - 11, 84.2, 22, 4.6, [['A', 0], ['THRU', 0.5], ['B', 1]]);
      h += '<div class="vf" data-ctl="' + id + '.vol" data-def="1" data-type="v" style="' + P(cx - 8.5, 91.5, 8, 33) + '"><b></b></div>';
      h += '<div class="led" data-r="meter' + id + '" style="' + P(cx + 3.2, 92, 3.2, 32) + '"><i></i></div>';
    });
    // stred: master + FX
    h += knob('m.vol', 50, 16, 'MASTER', 0.8);
    h += '<div class="led" data-r="mL" style="' + P(43.4, 31, 3.2, 38) + '"><i></i></div><div class="led" data-r="mR" style="' + P(53.4, 31, 3.2, 38) + '"><i></i></div>';
    h += PR(41.8, 69.8, 'L', 6.4, 'c') + PR(51.8, 69.8, 'R', 6.4, 'c');
    h += LN(37, 75, 26) + PR(37, 77, 'BEAT FX', 26, 'c');
    h += seg('fx.type', 37.5, 81, 25, 4.6, [['ECHO', 0], ['REVERB', 1]]);
    h += seg('fx.ch', 37.5, 87, 25, 4.6, [['A', 0], ['B', 0.5], ['MST', 1]]);
    h += knob('fx.time', 43.6, 94, 'TIME', 0.6).replace('>TIME<', ' data-r="fxLab">TIME<') + knob('fx.lvl', 56.4, 94, 'LEVEL', 0.5);
    h += '<button type="button" class="k sm bl" data-tog="fx.on" style="' + P(39, 110, 22, 6.4) + '">FX ON</button>';
    h += PR(37, 118.2, 'CROSS FADER', 26, 'c');
    h += seg('xf.curve', 39, 121.2, 22, 4.2, [['MIX', 0], ['CUT', 1]]);
    // crossfader
    h += '<div class="chip" style="' + P(4, 129.5, 9, 6.2) + 'background:var(--a)">A</div><div class="chip" style="' + P(87, 129.5, 9, 6.2) + 'background:var(--b)">B</div>';
    h += '<div class="hf" data-ctl="xf" data-def="0.5" data-type="h" style="' + P(16, 128, 68, 9.2) + '" aria-label="Crossfader"><b></b></div>';
    h += LN(3, 126.8, 94);
    h += '</section>';
    return h;
  }

  var decks = [new Deck('a', 0), new Deck('b', 1)];
  var boothEl = $('#booth');
  boothEl.innerHTML = cdjHTML('a') + mixerHTML() + cdjHTML('b');
  decks.forEach(function (d) {
    var sec = $('.cdj.' + d.id, boothEl); d.sec = sec;
    d.el = {
      lcd: $('[data-r=lcd]', sec), jog: $('[data-r=jog]', sec),
      play: $('[data-a=play]', sec), cue: $('[data-a=cue]', sec), sync: $('[data-a=sync]', sec), master: $('[data-a=master]', sec),
      timeBtn: $('[data-r=timeBtn]', sec), loop4: $('[data-r=loop4]', sec), reloop: $('[data-r=reloop]', sec), loopIn: $('[data-r=loopIn]', sec),
      range: $('[data-r=range]', sec), hot: $$('[data-a=hot]', sec), meter: $('[data-r=meter' + d.id + ']', boothEl)
    };
  });
  var elML = $('[data-r=mL]', boothEl), elMR = $('[data-r=mR]', boothEl), elFxLab = $('[data-r=fxLab]', boothEl);

  // definície ovládacích prvkov
  decks.forEach(function (d, idx) {
    var i = d.id, T = function () { return ctx.currentTime; };
    defCtl(i + '.trim', 0.5, function (v) { d.trimM.gain.setTargetAtTime(Math.pow(10, (v - 0.5) * 24 / 20), T(), 0.01); });
    defCtl(i + '.hi', 0.5, function (v) { d.hi.gain.setTargetAtTime(eqDb(v), T(), 0.01); });
    defCtl(i + '.mid', 0.5, function (v) { d.mid.gain.setTargetAtTime(eqDb(v), T(), 0.01); });
    defCtl(i + '.lo', 0.5, function (v) { d.lo.gain.setTargetAtTime(eqDb(v), T(), 0.01); });
    defCtl(i + '.flt', 0.5, function (v) { d.setFilter(v); });
    defCtl(i + '.vol', 1, function (v) { d.fad.gain.setTargetAtTime(v * v, T(), 0.01); });
    defCtl(i + '.asg', idx === 0 ? 0 : 1, function () { applyXf(); });
    defCtl(i + '.tempo', 0.5, function (v) { d.onTempoCtl(v); }, true);
  });
  function applyXf() {
    var x = ctl.xf.v, cut = ctl['xf.curve'].v > 0.5, t = ctx.currentTime, gA, gB;
    if (cut) { gA = x < 0.96 ? 1 : (1 - x) / 0.04; gB = x > 0.04 ? 1 : x / 0.04; }
    else { gA = x <= 0.5 ? 1 : Math.cos((x - 0.5) * Math.PI); gB = x >= 0.5 ? 1 : Math.cos((0.5 - x) * Math.PI); }
    decks.forEach(function (d) {
      var a = ctl[d.id + '.asg'].v, g = a < 0.25 ? gA : (a > 0.75 ? gB : 1);
      d.xf.gain.setTargetAtTime(g, t, 0.008);
    });
  }
  defCtl('xf', 0.5, applyXf);
  defCtl('xf.curve', 0, applyXf);
  defCtl('m.vol', 0.8, function (v) { master.gain.setTargetAtTime(v, ctx.currentTime, 0.01); });
  defCtl('fx.type', 0, function (v) { var t = ctx.currentTime; fx.echoOut.gain.setTargetAtTime(v < 0.5 ? 1 : 0, t, 0.02); fx.revOut.gain.setTargetAtTime(v < 0.5 ? 0 : 1, t, 0.02); });
  defCtl('fx.ch', 1, function () { applyFxRouting(); updateFxTime(); });
  defCtl('fx.time', 0.6, function () { updateFxTime(); });
  defCtl('fx.lvl', 0.5, function (v) { fx.wet.gain.setTargetAtTime(v * v * 1.3, ctx.currentTime, 0.02); });
  defCtl('fx.on', 0, function () { applyFxRouting(); });

  // ťahanie potenciometrov a faderov (dvojklik = východisková hodnota)
  function bindCtl(el) {
    var id = el.dataset.ctl, type = el.dataset.type, c = ctl[id], thumb = el.querySelector('b');
    var render = type === 'k'
      ? function (v) { thumb.style.transform = 'rotate(' + (-135 + 270 * v) + 'deg)'; }
      : function (v) { el.style.setProperty('--p', v); };
    c.els.push({ render: render }); render(c.v);
    var drag = false, moved = false, sx = 0, sy = 0, sv = 0, lastUp = 0;
    function th() { return (type === 'v' ? thumb.offsetHeight : thumb.offsetWidth) || 20; }
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
  $$('[data-ctl]', boothEl).forEach(bindCtl);
  // prepínače (segmenty) a tlačidlo FX ON
  $$('[data-seg]', boothEl).forEach(function (el) {
    var id = el.dataset.seg, c = ctl[id], bs = $$('button', el);
    var render = function (v) { bs.forEach(function (b) { b.classList.toggle('on', Math.abs(parseFloat(b.dataset.v) - v) < 0.1); }); };
    c.els.push({ render: render }); render(c.v);
    bs.forEach(function (b) { b.addEventListener('pointerdown', function (e) { e.preventDefault(); setCtl(id, parseFloat(b.dataset.v), 'ui'); }); });
  });
  $$('[data-tog]', boothEl).forEach(function (el) {
    var id = el.dataset.tog, c = ctl[id];
    var render = function (v) { el.classList.toggle('on', v > 0.5); };
    c.els.push({ render: render }); render(c.v);
    el.addEventListener('pointerdown', function (e) { e.preventDefault(); try { ensureCtx(); } catch (x) {} setCtl(id, c.v > 0.5 ? 0 : 1, 'ui'); });
  });

  // ------------------------------------------------------------------ tlačidlá prehrávača
  var held = null, hotTimer = null;
  boothEl.addEventListener('pointerdown', function (e) {
    var b = e.target.closest('[data-a]'); if (!b) return;
    var sec = b.closest('.cdj'); if (!sec) return;
    var d = decks[sec.dataset.deck === 'a' ? 0 : 1], a = b.dataset.a;
    e.preventDefault();
    if (a === 'cue') { try { ensureCtx(); } catch (x) {} d.cueDown(); held = function () { d.cueUp(); }; }
    else if (a === 'play') { try { ensureCtx(); } catch (x) {} d.playPress(); }
    else if (a === 'sync') d.toggleSync();
    else if (a === 'master') d.setMaster();
    else if (a === 'range') d.cycleRange();
    else if (a === 'time') d.remain = !d.remain;
    else if (a === 'lin') d.loopInPress();
    else if (a === 'lout') d.loopOutPress();
    else if (a === 'reloop') d.reloop();
    else if (a === 'loop4') d.loopBeats(4);
    else if (a === 'lhalf') d.loopMul(0.5);
    else if (a === 'ldbl') d.loopMul(2);
    else if (a === 'sback') { d.scanStart(-1); held = function () { d.scanStop(); }; }
    else if (a === 'sfwd') { d.scanStart(1); held = function () { d.scanStop(); }; }
    else if (a === 'tprev') d.trackStep(-1);
    else if (a === 'tnext') d.trackStep(1);
    else if (a === 'browse') openSheet(d.idx);
    else if (a === 'hot') {
      var i = +b.dataset.i, wasSet = d.hot[i] != null;
      try { ensureCtx(); } catch (x) {}
      clearTimeout(hotTimer);
      d.hotDown(i);
      if (wasSet) hotTimer = setTimeout(function () { d.hotDelete(i); toast('Hot cue ' + 'ABCD'.charAt(i) + ' zmazaný.'); held = null; }, 750);
      held = function () { clearTimeout(hotTimer); d.hotUp(); };
    }
  });
  function release() { if (held) { var h = held; held = null; h(); } }
  window.addEventListener('pointerup', release); window.addEventListener('pointercancel', release);

  // jog: stred = otáčanie skladby (ako vinyl), vonkajší prstenec = jemné doladenie rýchlosti
  decks.forEach(function (d) {
    var c = d.el.jog, st = null;
    function ang(e) { var r = c.getBoundingClientRect(); return Math.atan2(e.clientY - (r.top + r.height / 2), e.clientX - (r.left + r.width / 2)); }
    c.addEventListener('pointerdown', function (e) {
      e.preventDefault(); if (!d.buf) return;
      try { c.setPointerCapture(e.pointerId); } catch (x) {}
      var r = c.getBoundingClientRect(), rr = Math.hypot(e.clientX - (r.left + r.width / 2), e.clientY - (r.top + r.height / 2)) / (r.width / 2);
      st = { ring: rr > 0.8, a: ang(e), t: performance.now(), v: 0, base: d.pos(), acc: 0, resume: false };
      if (st.ring) { d.jogRing = true; }
      else { d.touch = true; if (d.playing) { st.resume = true; d.pause(); } }
    });
    c.addEventListener('pointermove', function (e) {
      if (!st) return;
      var a = ang(e), da = a - st.a; if (da > Math.PI) da -= 2 * Math.PI; if (da < -Math.PI) da += 2 * Math.PI;
      st.a = a; var now = performance.now(), dtm = Math.max(8, now - st.t); st.t = now;
      if (st.ring) { st.v = st.v * 0.6 + (da / (dtm / 1000)) * 0.4; d.setBend(clamp(st.v * 0.03, -0.14, 0.14)); d.jogBendT = now; d.jogAng += da; }
      else { st.acc += da; d.jogAng += da; d.startPos = clamp(st.base + st.acc / (2 * Math.PI) * 1.8, 0, d.buf.duration); mark(d); }
    });
    function end() {
      if (!st) return;
      if (st.ring) { d.jogRing = false; d.setBend(0); }
      else { d.touch = false; if (st.resume) d.play(); }
      st = null;
    }
    c.addEventListener('pointerup', end); c.addEventListener('pointercancel', end);
    // displej: ťuk/ťahanie v prehľade skladby = skok
    var l = d.el.lcd;
    function lcdSeek(e) {
      if (!d.buf) return;
      var r = l.getBoundingClientRect(), x = (e.clientX - r.left) / r.width * 940, y = (e.clientY - r.top) / r.height * (r.height / r.width * 940);
      if (y > 120 && y < 190) d.seek((x - 14) / 912 * d.buf.duration);
    }
    var ld = false;
    l.addEventListener('pointerdown', function (e) { e.preventDefault(); try { l.setPointerCapture(e.pointerId); } catch (x) {} ld = true; lcdSeek(e); });
    l.addEventListener('pointermove', function (e) { if (ld) lcdSeek(e); });
    l.addEventListener('pointerup', function () { ld = false; });
    // BPM ručne: dvojťuk na údaj BPM
    var tapT = 0;
    l.addEventListener('pointerdown', function (e) {
      var r = l.getBoundingClientRect(), x = (e.clientX - r.left) / r.width * 940, y = (e.clientY - r.top) / r.width * 940;
      if (x < 300 && y > 56 && y < 124) {
        var now = performance.now();
        if (now - tapT < 350 && d.buf) {
          var v = parseFloat((window.prompt('BPM skladby (40 až 220):', d.bpm ? d.bpm.toFixed(2) : '') || '').replace(',', '.'));
          if (v >= 40 && v <= 220) d.setBpm(v);
        }
        tapT = now;
      }
    });
  });

  // ------------------------------------------------------------------ knižnica skladieb
  var lib = [], AUDIO_RE = /\.(mp3|wav|wave|aif|aiff|flac|m4a|aac|ogg|oga|opus|mp4)$/i, MAXROWS = 300;
  var cur = [null, null], target = 0;
  function extOf(n) { var m = n.match(/\.([^.]+)$/); return m ? m[1].toLowerCase() : ''; }
  function addItem(it) {
    var key = it.name + '|' + it.ext + '|' + (it.size || 0);
    if (lib.some(function (x) { return x.key === key; })) return;
    it.key = key; lib.push(it);
  }
  function sortLib() { lib.sort(function (a, b) { return a.name.localeCompare(b.name, 'sk', { numeric: true }); }); }
  function addFiles(files) {
    var before = lib.length;
    Array.prototype.forEach.call(files, function (f) {
      if (!(f.type && f.type.indexOf('audio/') === 0) && !AUDIO_RE.test(f.name)) return;
      addItem({ name: f.name.replace(/\.[^.]+$/, ''), ext: extOf(f.name), size: f.size, file: f });
    });
    sortLib(); renderLib();
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
      var row = document.createElement('button'); row.type = 'button'; row.className = 'item'; row.dataset.i = idx;
      if (cur[0] === it) row.classList.add('cur-a'); if (cur[1] === it) row.classList.add('cur-b');
      var b = document.createElement('b'); b.textContent = it.name;
      var s = document.createElement('small'); s.textContent = it.ext.toUpperCase() + (it.size ? ' · ' + (it.size / 1048576).toFixed(1) + ' MB' : '');
      row.appendChild(b); row.appendChild(s); frag.appendChild(row);
    });
    list.appendChild(frag);
    if (total > shown) { var m = document.createElement('div'); m.className = 'more'; m.textContent = 'Zobrazených ' + shown + ' z ' + total + '. Spresni hľadanie.'; list.appendChild(m); }
    $('#empty').hidden = lib.length > 0;
  }
  // ------------------------------------------------------------------ rekordbox (export zbierky v XML)
  // kľúč = názov súboru bez prípony; uložíme BPM, začiatok prvého úderu a hot cue body (A–D)
  var rb = {};
  function rbKey(n) { return String(n || '').replace(/\.[^.\/]+$/, '').trim().toLowerCase(); }
  function rbLoad() { try { var j = localStorage.getItem('mx.rb'); if (j) rb = JSON.parse(j) || {}; } catch (e) { rb = {}; } }
  function rbSave() { try { localStorage.setItem('mx.rb', JSON.stringify(rb)); return true; } catch (e) { return false; } }
  function rbParse(text) {
    var doc = new DOMParser().parseFromString(text, 'text/xml');
    if (doc.querySelector('parsererror') || !doc.querySelector('DJ_PLAYLISTS')) return -1;
    var out = {}, n = 0, tracks = doc.querySelectorAll('COLLECTION > TRACK');
    Array.prototype.forEach.call(tracks, function (t) {
      var loc = t.getAttribute('Location') || '', base = loc.split('/').pop();
      try { base = decodeURIComponent(base); } catch (e) {}
      var tempo = t.querySelector('TEMPO'), bpm = tempo ? parseFloat(tempo.getAttribute('Bpm')) : parseFloat(t.getAttribute('AverageBpm'));
      if (!(bpm >= 40 && bpm <= 220)) return;
      var grid = tempo ? parseFloat(tempo.getAttribute('Inizio')) : 0;
      var hot = [null, null, null, null];
      Array.prototype.forEach.call(t.querySelectorAll('POSITION_MARK'), function (m) {
        var num = parseInt(m.getAttribute('Num'), 10), st = parseFloat(m.getAttribute('Start'));
        if (num >= 0 && num < 4 && isFinite(st)) hot[num] = Math.round(st * 1000) / 1000;
      });
      var o = { b: bpm, g: isFinite(grid) ? Math.round(grid * 1000) / 1000 : 0, t: parseFloat(t.getAttribute('TotalTime')) || 0 };
      if (hot.some(function (h) { return h != null; })) o.h = hot;
      out[rbKey(base)] = o; n++;
    });
    rb = out; rbSave();
    return n;
  }
  function rbFor(it, dur) {
    var r = rb[rbKey(it.name)];
    if (!r) return null;
    if (r.t && Math.abs(r.t - dur) > 3) return null; // iná skladba s rovnakým názvom
    return r;
  }
  rbLoad();

  function setTarget(i) { target = i; $$('#tgt button').forEach(function (b) { b.classList.toggle('on', +b.dataset.t === i); }); }
  function openSheet(i) { setTarget(i); $('#sheet').hidden = false; renderLib(); }
  function closeSheet() { $('#sheet').hidden = true; }
  async function loadInto(di, it) {
    var d = decks[di];
    if (d.playing) { toast('Deck ' + d.id.toUpperCase() + ' práve hrá. Najprv ho zastav.'); return; }
    try { ensureCtx(); } catch (e) { return; }
    d.status = 'Načítavam…'; d.buf = null; d.pk = null; d.ov = null; d.busy = true;
    try {
      var file = it.file || await it.handle.getFile();
      var ab = await file.arrayBuffer();
      var buf = await new Promise(function (res, rej) { var p = ctx.decodeAudioData(ab, res, rej); if (p && p.catch) p.catch(rej); });
      if (buf.duration > 20 * 60) toast('Dlhá skladba (' + Math.round(buf.duration / 60) + ' min) berie veľa pamäte.');
      cur[di] = it;
      var r = rbFor(it, buf.duration);
      await d.setTrack(buf, it.name, r ? { bpm: r.b, grid: r.g } : null);
      if (r && r.h) { r.h.forEach(function (h, i) { if (h != null && h < buf.duration) d.hot[i] = h; }); mark(d); }
      if (r) toast('rekordbox: BPM ' + r.b.toFixed(2) + (r.h ? ' a hot cue body načítané' : ' načítané') + '.');
      d.file = file;
      if (api.onLoad) api.onLoad(d, file);
    } catch (e) {
      d.status = ''; d.name = ''; cur[di] = null;
      toast('Túto skladbu sa nepodarilo otvoriť (' + (it.ext || '?').toUpperCase() + '). Skús MP3, WAV, FLAC alebo M4A.');
    }
    d.busy = false;
    renderLib();
  }
  $('#list').addEventListener('click', function (e) {
    var b = e.target.closest('button[data-i]'); if (!b) return;
    loadInto(target, lib[+b.dataset.i]); closeSheet();
  });
  $('#tgt').addEventListener('click', function (e) { var b = e.target.closest('button[data-t]'); if (b) setTarget(+b.dataset.t); });
  $('#sheetX').addEventListener('click', closeSheet);
  $('#sheet').addEventListener('pointerdown', function (e) { if (e.target === $('#sheet')) closeSheet(); });
  $('#q').addEventListener('input', renderLib);
  $('#addFiles').addEventListener('click', function () { $('#fileIn').click(); });
  $('#fileIn').addEventListener('change', function (e) { addFiles(e.target.files); e.target.value = ''; });
  $('#dirIn').addEventListener('change', function (e) { addFiles(e.target.files); e.target.value = ''; });
  $('#addRb').addEventListener('click', function () { $('#rbIn').click(); });
  $('#rbIn').addEventListener('change', async function (e) {
    var f = e.target.files[0]; e.target.value = ''; if (!f) return;
    try {
      var n = rbParse(await f.text());
      if (n < 0) toast('To nie je export zbierky z rekordboxu (XML).');
      else if (n === 0) toast('V súbore som nenašla žiadne skladby s tempom.');
      else toast('rekordbox: načítaných ' + n + ' skladieb. Pri ich načítaní do decku sa použije ich BPM a cue body.');
    } catch (err) { toast('Súbor sa nepodarilo prečítať.'); }
  });
  $('#addDir').addEventListener('click', async function () {
    if (window.showDirectoryPicker) {
      try {
        var dir = await window.showDirectoryPicker({ mode: 'read' }), before = lib.length;
        toast('Prehľadávam priečinok…');
        await walk(dir, 0); sortLib(); renderLib(); toast('Pridané skladby: ' + (lib.length - before));
      } catch (err) { if (err && err.name !== 'AbortError') toast('Priečinok sa nepodarilo otvoriť.'); }
    } else $('#dirIn').click();
  });
  ['dragenter', 'dragover'].forEach(function (n) { window.addEventListener(n, function (e) { if (e.dataTransfer && Array.prototype.indexOf.call(e.dataTransfer.types || [], 'Files') >= 0) { e.preventDefault(); document.body.classList.add('drag'); } }); });
  window.addEventListener('dragleave', function (e) { if (!e.relatedTarget) document.body.classList.remove('drag'); });
  window.addEventListener('drop', function (e) { e.preventDefault(); document.body.classList.remove('drag'); if (e.dataTransfer && e.dataTransfer.files.length) { addFiles(e.dataTransfer.files); } });

  // ------------------------------------------------------------------ nahrávanie mixu
  var rec = null, recBlobUrl = null;
  async function startRec() {
    try { ensureCtx(); } catch (e) { return; }
    if (!window.MixRec || !MixRec.supported()) { toast('MP3 kodér sa nenačítal. Obnov stránku.'); return; }
    var r = new MixRec(ctx, limiter, parseInt($('#kbps').value, 10));
    try { await r.start(); } catch (e) { toast('Nahrávanie sa nepodarilo spustiť: ' + e.message); return; }
    rec = r;
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
  var mLv = [0, 0], mBuf = new Float32Array(512), fxT = 0;
  function peakOf(an) { an.getFloatTimeDomainData(mBuf); var p = 0; for (var i = 0; i < mBuf.length; i++) { var a = mBuf[i] < 0 ? -mBuf[i] : mBuf[i]; if (a > p) p = a; } return p; }
  function tick(now) {
    decks.forEach(function (d) { d.ui(now); });
    lastUi = now;
    if (anL) {
      [anL, anR].forEach(function (an, c) {
        var p = peakOf(an), db = p > 0 ? 20 * Math.log10(p) : -90, l = clamp((db + 54) / 54, 0, 1);
        mLv[c] = Math.max(l, mLv[c] - 0.03); (c ? elMR : elML).firstChild.style.height = (100 - mLv[c] * 100) + '%';
      });
      if (now - fxT > 150) { fxT = now; updateFxTime(); }
    }
    TXT(elFxLab, 'TIME ' + FXLAB[fxIdx()]);
    if (rec) {
      var s = rec.seconds(), m = Math.floor(s / 60), sec = Math.floor(s % 60);
      $('#recInfo').textContent = m + ':' + (sec < 10 ? '0' : '') + sec + ' · ' + (rec.bytes / 1048576).toFixed(1) + ' MB';
    }
    requestAnimationFrame(tick);
  }
  renderLib(); setTarget(0);
  requestAnimationFrame(tick);

  api.ensureCtx = function () { try { ensureCtx(); return true; } catch (e) { return false; } };
  api.toast = toast; api.booth = boothEl;
  api.remoteCtl = function (id, v) { var was = applying; applying = true; try { setCtl(id, v, 'remote'); } finally { applying = was; } };
  api.decode = function (ab) { return new Promise(function (res, rej) { var p = ctx.decodeAudioData(ab, res, rej); if (p && p.catch) p.catch(rej); }); };
  api.decks = decks; api.setCtl = setCtl; api.ctl = ctl; api.analyze = analyze; api.addFiles = addFiles; api.loadInto = loadInto; api.lib = lib;
  Object.defineProperty(api, 'ctx', { get: function () { return ctx; } });
  window.MixPult = api;
})();
