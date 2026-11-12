/* si/počúval: rádio.
   - stanice sa berú z program.json (zapisuje ich tools/build_radio.py z priečinkov v stanice/)
   - stanice bežia "živo": čo hrá, vyplýva z hodín, takže po prepnutí tam nájdeš to, čo by práve hralo
   - hlásky DJ-a sa púšťajú cez úvod skladby, hudba sa pri nich pomaly stíši a potom sa vráti
   - ladenie: ťahaj po skle, točí gombíkom alebo ťukaj na tlačidlá; medzi stanicami je šum */
(function () {
  'use strict';
  const $ = id => document.getElementById(id);
  const FM0 = 87.5, FM1 = 108, SPAN = FM1 - FM0;
  const clamp = (v, a, b) => Math.min(b, Math.max(a, v));
  const pad = n => (n < 10 ? '0' : '') + n;
  const pct = f => (f - FM0) / SPAN * 100;
  const esc = s => String(s == null ? '' : s).replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
  const store = {
    get(k, d) { try { const v = localStorage.getItem('pocuval.' + k); return v == null ? d : JSON.parse(v); } catch (e) { return d; } },
    set(k, v) { try { localStorage.setItem('pocuval.' + k, JSON.stringify(v)); } catch (e) { } }
  };
  function hash(s) { let h = 2166136261; for (let i = 0; i < s.length; i++) { h ^= s.charCodeAt(i); h = Math.imul(h, 16777619); } return h >>> 0; }
  function rng(a) { return function () { a |= 0; a = a + 0x6D2B79F5 | 0; let t = Math.imul(a ^ a >>> 15, 1 | a); t = t + Math.imul(t ^ t >>> 7, 61 | t) ^ t; return ((t ^ t >>> 14) >>> 0) / 4294967296; }; }
  const pick = (arr, r) => arr[Math.floor(r() * arr.length) % arr.length];
  function clock(s) {
    s = Math.max(0, Math.floor(s));
    if (s >= 3600) return Math.floor(s / 3600) + ':' + pad(Math.floor(s % 3600 / 60)) + ':' + pad(s % 60);
    return Math.floor(s / 60) + ':' + pad(s % 60);
  }
  function inWords(s) {
    if (s < 60) return 'o chvíľu';
    const m = Math.round(s / 60);
    if (m < 60) return 'o ' + m + ' min';
    return 'o ' + Math.floor(m / 60) + ' h ' + pad(m % 60) + ' min';
  }

  /* ------------------------------------------------ prvky */
  const rig = $('rig'), elFreq = $('freq'), elStn = $('stnName'), elNp = $('npText'), elNx = $('nextTxt'), elProg = $('progBar');
  const elMeter = $('meter'), elClock = $('clock'), lampSt = $('lampStereo'), lampAir = $('lampAir');
  const elDial = $('dial'), elScale = $('scale'), elMarks = $('marks'), elNeedle = $('needle');
  const knobVol = $('knobVol'), knobTune = $('knobTune'), elPresets = $('presets');
  const elBName = $('bName'), elBSlogan = $('bSlogan'), elBDj = $('bDj'), elTlist = $('tlist'), elBHint = $('bHint');

  /* ------------------------------------------------ stav */
  let stations = [], cur = null, on = false;
  let freq = store.get('freq', 89.6), vol = clamp(store.get('vol', .75), 0, 1);
  const A = { ctx: null, decks: [], pre: '' };
  const P = { st: null, deck: 0, idx: 0, loop: 0, talks: [], token: 0, talking: false, voiceTimer: 0, badRun: 0, identTimer: 0, caption: '' };

  /* ------------------------------------------------ zostavenie stanice */
  function prepare(s) {
    s.tracks = s.tracks || []; s.idents = s.idents || []; s.between = s.between || [];
    s.soon = !s.tracks.length;
    s.live = !s.soon && s.tracks.every(t => t.dur > 0);
    s.starts = []; let acc = 0;
    for (const t of s.tracks) { s.starts.push(acc); acc += t.dur || 0; }
    s.total = acc;
    s.phase = s.total ? hash(s.id) % Math.floor(s.total) : 0;
    s.resume = { i: 0, t: 0 };
    return s;
  }
  function where(st) {
    if (!st.tracks.length) return null;
    if (!st.live) return { i: st.resume.i, off: st.resume.t, loop: 0 };
    const now = Date.now() / 1000 + st.phase, loop = Math.floor(now / st.total), pos = now - loop * st.total;
    let i = 0;
    while (i < st.tracks.length - 1 && pos >= st.starts[i + 1]) i++;
    return { i, off: pos - st.starts[i], loop, pos };
  }
  function talksFor(st, i, loop) {
    const tr = st.tracks[i], r = rng(hash(st.id + ':' + loop + ':' + i)), out = [];
    const intro = clamp((tr.dur || 60) * .05, 2, 7);
    if (tr.announce) out.push({ t: intro, url: tr.announce, text: tr.text, kind: 'announce' });
    else if (st.between.length && r() < .55) { const b = pick(st.between, r); out.push({ t: intro, url: b.file, text: b.text, kind: 'between' }); }
    if ((tr.dur || 0) > 720 && st.between.length) {
      let t = intro + 480 + r() * 240;
      while (t < tr.dur - 90) { const b = pick(st.between, r); out.push({ t, url: b.file, text: b.text, kind: 'between' }); t += 480 + r() * 240; }
    }
    return out;
  }

  /* ------------------------------------------------ zvuk */
  function initAudio() {
    if (A.ctx) return;
    const C = window.AudioContext || window.webkitAudioContext;
    const ctx = A.ctx = new C();
    A.vol = ctx.createGain(); A.bus = ctx.createGain(); A.duck = ctx.createGain(); A.stat = ctx.createGain();
    A.an = ctx.createAnalyser(); A.an.fftSize = 256; A.an.smoothingTimeConstant = .8;
    A.duck.connect(A.bus); A.bus.connect(A.vol); A.vol.connect(A.an); A.an.connect(ctx.destination);
    A.bus.gain.value = 0; A.stat.gain.value = 0; A.vol.gain.value = vol * vol;
    const mk = () => { const el = new Audio(); el.preload = 'auto'; el.crossOrigin = 'anonymous'; el.setAttribute('playsinline', ''); return el; };
    A.decks = [mk(), mk()];
    A.decks.forEach(el => { ctx.createMediaElementSource(el).connect(A.duck); el.addEventListener('ended', () => { if (A.decks[P.deck] === el) advance(); }); });
    A.voice = mk(); ctx.createMediaElementSource(A.voice).connect(A.bus);
    const len = ctx.sampleRate * 2, buf = ctx.createBuffer(1, len, ctx.sampleRate), d = buf.getChannelData(0);
    for (let i = 0; i < len; i++) d[i] = Math.random() * 2 - 1;
    const src = ctx.createBufferSource(); src.buffer = buf; src.loop = true;
    const bp = ctx.createBiquadFilter(); bp.type = 'bandpass'; bp.frequency.value = 2400; bp.Q.value = .5;
    src.connect(bp); bp.connect(A.stat); A.stat.connect(A.vol); src.start();
    A.noiseFilter = bp;
  }
  function burst(level, ms) {
    if (!A.ctx) return;
    const t = A.ctx.currentTime;
    A.stat.gain.cancelScheduledValues(t);
    A.stat.gain.setValueAtTime(level, t);
    A.stat.gain.linearRampToValueAtTime(0, t + ms / 1000);
  }
  function setVol(v, quiet) {
    vol = clamp(v, 0, 1);
    if (A.ctx) A.vol.gain.setTargetAtTime(vol * vol, A.ctx.currentTime, .03);
    knobVol.style.setProperty('--a', (-135 + vol * 270) + 'deg');
    knobVol.setAttribute('aria-valuenow', Math.round(vol * 100));
    if (!quiet) store.set('vol', vol);
  }

  /* ------------------------------------------------ prehrávanie stanice */
  function stopMusic() {
    for (const el of A.decks) { try { el.pause(); } catch (e) { } el.removeAttribute('src'); el.dataset.pre = ''; }
    A.pre = '';
  }
  function loadDeck(d, tr, off, tok, play) {
    const el = A.decks[d];
    el.dataset.tok = tok; el.dataset.pre = '';
    el.onerror = () => { if (!el.getAttribute('src') || +el.dataset.tok !== P.token) return; trackBad(); };
    el.src = tr.file; el.preload = 'auto';
    const go = () => {
      if (+el.dataset.tok !== P.token) return;
      try { if (off > .3) el.currentTime = off; } catch (e) { }
      if (play) { const pr = el.play(); if (pr && pr.catch) pr.catch(() => { }); }
    };
    el.addEventListener('loadedmetadata', go, { once: true });
  }
  function startStation(st) {
    stopMusic(); stopVoice();
    P.st = st; P.token++; P.badRun = 0; P.deck = 0;
    if (!st || !st.tracks.length) { updateVfd(true); return; }
    const w = where(st);
    P.idx = w.i; P.loop = w.loop;
    loadDeck(0, st.tracks[P.idx], w.off, P.token, true);
    planTalks(w.off);
    onTrackChange();
  }
  function planTalks(off) {
    P.talks = talksFor(P.st, P.idx, P.loop);
    P.talks.forEach(t => { t.done = off > t.t + 8; });
  }
  function advance() {
    const st = P.st; if (!st || !on || !st.tracks.length) return;
    const n = st.tracks.length; const ni = (P.idx + 1) % n; if (ni === 0) P.loop++;
    const od = 1 - P.deck, el = A.decks[od];
    if (el.dataset.pre === String(ni) && +el.dataset.tok === P.token) {
      try { el.currentTime = 0; } catch (e) { }
      const pr = el.play(); if (pr && pr.catch) pr.catch(() => { });
    } else loadDeck(od, st.tracks[ni], 0, P.token, true);
    try { A.decks[P.deck].pause(); } catch (e) { }
    P.deck = od; P.idx = ni; P.badRun = 0; A.pre = '';
    planTalks(0); onTrackChange();
  }
  function trackBad() {
    const st = P.st; if (!st) return;
    P.badRun++;
    if (P.badRun >= st.tracks.length) { elNp.textContent = 'BEZ SIGNÁLU'; return; }
    setTimeout(() => { if (P.st === st && on) advance(); }, 800);
  }
  function tick() {
    const st = P.st; if (!on || !st || !st.tracks.length) return;
    const el = A.decks[P.deck], tr = st.tracks[P.idx];
    const t = el.currentTime || 0, dur = el.duration && isFinite(el.duration) ? el.duration : (tr.dur || 0);
    if (dur && dur - t < 12 && A.pre !== P.token + ':' + P.idx) {
      A.pre = P.token + ':' + P.idx;
      const ni = (P.idx + 1) % st.tracks.length, od = 1 - P.deck;
      loadDeck(od, st.tracks[ni], 0, P.token, false); A.decks[od].dataset.pre = String(ni);
    }
    if (dur && t >= dur - .06 && !el.paused) advance();
    for (const k of P.talks) if (!k.done && t >= k.t) { k.done = true; if (t - k.t < 8) say(k); }
    if (!st.live) st.resume = { i: P.idx, t };
  }

  /* ------------------------------------------------ hlas DJ-a */
  function say(k) {
    if (!on || P.talking || !k || !k.url) return;
    P.talking = true; P.caption = k.text || '';
    lampAir.classList.add('on');
    const t = A.ctx.currentTime;
    A.duck.gain.cancelScheduledValues(t);
    A.duck.gain.setTargetAtTime(.2, t, .3);
    P.voiceTimer = setTimeout(() => {
      if (!P.talking) return;
      A.voice.onended = endTalk; A.voice.onerror = endTalk;
      A.voice.src = k.url;
      const pr = A.voice.play(); if (pr && pr.catch) pr.catch(endTalk);
    }, 650);
    updateVfd(true);
  }
  function endTalk() {
    if (!P.talking) return;
    P.talking = false; P.caption = '';
    clearTimeout(P.voiceTimer);
    lampAir.classList.remove('on');
    if (A.ctx) { const t = A.ctx.currentTime; A.duck.gain.cancelScheduledValues(t); A.duck.gain.setTargetAtTime(1, t, .55); }
    updateVfd(true);
  }
  function stopVoice() {
    clearTimeout(P.voiceTimer); clearTimeout(P.identTimer);
    if (A.voice) { A.voice.onended = A.voice.onerror = null; try { A.voice.pause(); } catch (e) { } A.voice.removeAttribute('src'); }
    if (P.talking) endTalk();
  }
  function maybeIdent() {
    clearTimeout(P.identTimer);
    P.identTimer = setTimeout(() => {
      if (!on || !cur || cur.soon || P.talking || !cur.idents.length || P.nearLock < .9) return;
      if (Math.random() < .85) { const i = cur.idents[Math.floor(Math.random() * cur.idents.length)]; say({ url: i.file, text: i.text, kind: 'ident' }); }
    }, 1100);
  }

  /* ------------------------------------------------ ladenie */
  P.nearLock = 0;
  function nearest() {
    let best = null, bd = 99;
    for (const s of stations) { const d = Math.abs(freq - s.freq); if (d < bd) { bd = d; best = s; } }
    return { best, bd };
  }
  function applyTuning() {
    const { best, bd } = nearest();
    if (best && best !== cur && bd < (gliding ? .1 : .35)) switchTo(best);
    const dc = cur ? Math.abs(freq - cur.freq) : 9;
    const lock = on && cur && !cur.soon ? clamp(1 - (dc - .12) / .75, 0, 1) : 0;
    P.nearLock = on && cur ? clamp(1 - (dc - .12) / .75, 0, 1) : 0;
    const mg = Math.pow(lock, 1.6);
    if (A.ctx) {
      const t = A.ctx.currentTime;
      A.bus.gain.setTargetAtTime(mg, t, .04);
      const soonHere = on && cur && cur.soon && dc < .3;
      const sl = !on ? 0 : soonHere ? .5 : (1 - mg) * .55;
      if (!A.statBurst) A.stat.gain.setTargetAtTime(sl, t, .04);
      A.noiseFilter.frequency.setTargetAtTime(1400 + (freq - FM0) * 90, t, .05);
    }
    lampSt.classList.toggle('on', on && lock > .95);
    for (const m of elMarks.children) m.classList.toggle('on', Math.abs(freq - +m.dataset.f) < .12);
    for (const b of elPresets.children) b.classList.toggle('on', Math.abs(freq - +b.dataset.f) < .12);
  }
  function setFreq(f) {
    freq = clamp(f, FM0, FM1);
    elNeedle.style.left = pct(freq) + '%';
    elFreq.textContent = freq.toFixed(1);
    knobTune.style.setProperty('--a', (-150 + (freq - FM0) / SPAN * 300) + 'deg');
    elDial.setAttribute('aria-valuenow', freq.toFixed(1));
    applyTuning();
    updateVfd(false);
  }
  let glide = 0, gliding = false;
  function glideTo(f, ms) {
    cancelAnimationFrame(glide); gliding = true;
    const a = freq, b = clamp(f, FM0, FM1), d = Math.abs(b - a); ms = ms || clamp(300 + d * 55, 380, 1300);
    if (d < .01) { gliding = false; setFreq(b); return; }
    const t0 = performance.now();
    (function step(now) {
      const k = clamp((now - t0) / ms, 0, 1), e = k < .5 ? 2 * k * k : 1 - Math.pow(-2 * k + 2, 2) / 2;
      setFreq(a + (b - a) * e);
      if (k < 1) glide = requestAnimationFrame(step); else { gliding = false; store.set('freq', freq); maybeIdent(); }
    })(t0);
  }
  function switchTo(st) {
    if (cur === st) return;
    cur = st; store.set('st', st.id);
    if (on) startStation(st);
    renderBoard();
    updateMedia();
    maybeIdent();
  }
  function seek(dir) {
    if (!on) powerOn();
    const list = stations.filter(s => !s.soon).sort((a, b) => a.freq - b.freq);
    const pool = list.length ? list : stations.slice().sort((a, b) => a.freq - b.freq);
    if (!pool.length) return;
    let tgt;
    if (dir > 0) tgt = pool.find(s => s.freq > freq + .15) || pool[0];
    else tgt = pool.slice().reverse().find(s => s.freq < freq - .15) || pool[pool.length - 1];
    glideTo(tgt.freq);
  }

  /* ------------------------------------------------ zapnutie / vypnutie */
  function powerOn() {
    if (on) return;
    initAudio();
    if (A.ctx.state === 'suspended') A.ctx.resume();
    on = true; rig.dataset.power = 'warm';
    setTimeout(() => { if (on) rig.dataset.power = 'on'; }, 1000);
    const { best } = nearest();
    if (!cur) cur = best || stations[0] || null;
    A.statBurst = true; burst(.5, 650); setTimeout(() => { A.statBurst = false; applyTuning(); }, 700);
    if (cur) { if (Math.abs(freq - cur.freq) > .3) freq = cur.freq; startStation(cur); }
    setFreq(freq);
    renderBoard(); updateMedia(); maybeIdent();
    startLoops();
  }
  function powerOff() {
    if (!on) return;
    on = false; rig.dataset.power = 'off';
    stopMusic(); stopVoice();
    if (A.ctx) { A.statBurst = true; burst(.3, 200); setTimeout(() => { A.statBurst = false; applyTuning(); }, 260); }
    lampSt.classList.remove('on'); lampAir.classList.remove('on');
    applyTuning(); updateVfd(true);
    if ('mediaSession' in navigator) navigator.mediaSession.playbackState = 'paused';
  }
  const toggle = () => (on ? powerOff() : powerOn());

  /* ------------------------------------------------ displej */
  let lastNp = '';
  function setNp(txt) {
    if (txt === lastNp) return;
    lastNp = txt; elNp.textContent = txt; elNp.classList.remove('scroll');
    requestAnimationFrame(() => {
      const w = elNp.scrollWidth, c = elNp.parentElement.clientWidth;
      if (w > c + 2) { elNp.style.setProperty('--shift', -(w - c) + 'px'); elNp.style.setProperty('--dur', clamp(w / 38, 6, 28) + 's'); elNp.classList.add('scroll'); }
    });
  }
  function trackLine(tr) { return tr ? (tr.artist ? tr.artist + ' – ' : '') + tr.title : ''; }
  function updateVfd(force) {
    if (!on) { elStn.textContent = 'SI/POČÚVAL'; setNp('Zapni rádio'); elNx.innerHTML = '&nbsp;'; elProg.style.width = '0'; return; }
    const dc = cur ? Math.abs(freq - cur.freq) : 9;
    if (!cur || dc > .5) { elStn.textContent = '· · · ·'; setNp('Ladím…'); elNx.innerHTML = '&nbsp;'; elProg.style.width = '0'; return; }
    elStn.textContent = cur.name;
    if (cur.soon) { setNp('ČOSKORO · stanica sa pripravuje'); elNx.textContent = cur.slogan || ''; elProg.style.width = '0'; return; }
    const st = cur, tr = st.tracks[P.st === st ? P.idx : 0];
    if (P.talking) setNp('ON AIR · ' + (P.caption || (st.dj ? st.dj : 'DJ')));
    else setNp(trackLine(tr));
    if (P.st === st) {
      const el = A.decks[P.deck], t = el ? el.currentTime || 0 : 0, dur = (el && el.duration && isFinite(el.duration)) ? el.duration : (tr.dur || 0);
      const nxt = st.tracks.length > 1 ? 'NASLEDUJE: ' + trackLine(st.tracks[(P.idx + 1) % st.tracks.length]) : (st.slogan || '');
      elNx.textContent = (dur ? clock(t) + ' / ' + clock(dur) + '  ·  ' : '') + nxt;
      elProg.style.width = dur ? clamp(t / dur * 100, 0, 100) + '%' : '0';
    }
  }

  /* ------------------------------------------------ program (spodná karta) */
  function renderBoard() {
    const st = cur || stations.find(s => !s.soon) || stations[0];
    if (!st) return;
    elBName.textContent = st.name;
    elBSlogan.textContent = st.slogan || '';
    elBDj.textContent = st.dj ? 'DJ · ' + st.dj : '';
    if (st.soon) {
      elTlist.innerHTML = '<li class="empty">Táto stanica sa pripravuje. Hudba a hlásky tu čoskoro pribudnú.</li>';
    } else {
      elTlist.innerHTML = st.tracks.map((t, i) => '<li data-i="' + i + '"><div class="t"><b>' + esc(t.title) + '</b><span>' + esc(t.artist || st.name) + '</span></div><div class="w"></div></li>').join('');
    }
    const nv = st.idents.length + st.between.length + st.tracks.filter(t => t.announce).length;
    elBHint.textContent = nv ? 'DJ hlásky: ' + nv + '. Pustia sa cez úvod skladieb, hudba sa pri nich stíši.' : '';
    updateBoard();
  }
  function updateBoard() {
    const st = cur || stations.find(s => !s.soon) || stations[0];
    if (!st || st.soon) return;
    const w = on && cur ? where(st) : null;
    for (const li of elTlist.children) {
      const i = +li.dataset.i, tr = st.tracks[i], cell = li.lastChild;
      const now = w && ((st.live && i === w.i) || (!st.live && P.st === st && i === P.idx));
      li.classList.toggle('now', !!now);
      if (now) cell.textContent = 'TERAZ';
      else if (w && st.live) cell.textContent = inWords((st.starts[i] - w.pos + st.total) % st.total);
      else cell.textContent = tr.dur ? clock(tr.dur) : '';
    }
  }
  function onTrackChange() { updateVfd(true); updateBoard(); updateMedia(); }

  /* ------------------------------------------------ medialny prehrávač v telefóne */
  function updateMedia() {
    if (!('mediaSession' in navigator) || !cur) return;
    try {
      const tr = P.st === cur && cur.tracks[P.idx];
      navigator.mediaSession.metadata = new MediaMetadata({ title: tr ? trackLine(tr) : cur.name, artist: cur.name + ' · ' + cur.freq.toFixed(1) + ' FM', album: 'si/počúval' });
      navigator.mediaSession.playbackState = on ? 'playing' : 'paused';
      navigator.mediaSession.setActionHandler('previoustrack', () => seek(-1));
      navigator.mediaSession.setActionHandler('nexttrack', () => seek(1));
      navigator.mediaSession.setActionHandler('play', () => powerOn());
      navigator.mediaSession.setActionHandler('pause', () => powerOff());
    } catch (e) { }
  }

  /* ------------------------------------------------ vizuál: LED meter + hodiny */
  const mc = elMeter.getContext('2d'), BARS = 12, SEGS = 7;
  let raf = 0, lastDraw = 0, freqData = null;
  function drawMeter(now) {
    raf = requestAnimationFrame(drawMeter);
    if (now - lastDraw < 33) return; lastDraw = now;
    const W = elMeter.width, H = elMeter.height; mc.clearRect(0, 0, W, H);
    if (!on || !A.an) return;
    if (!freqData) freqData = new Uint8Array(A.an.frequencyBinCount);
    A.an.getByteFrequencyData(freqData);
    const bw = W / BARS, sh = H / SEGS;
    for (let b = 0; b < BARS; b++) {
      const lo = Math.floor(Math.pow(b / BARS, 1.7) * 90) + 1, hi = Math.max(lo + 1, Math.floor(Math.pow((b + 1) / BARS, 1.7) * 90) + 2);
      let s = 0; for (let i = lo; i < hi; i++) s += freqData[i]; const lvl = s / (hi - lo) / 255;
      const n = Math.round(clamp(lvl * 1.25, 0, 1) * SEGS);
      for (let k = 0; k < SEGS; k++) {
        const lit = k < n; mc.fillStyle = lit ? (k >= SEGS - 2 ? '#ff5a3c' : '#ffb23d') : 'rgba(255,178,61,.1)';
        if (lit) { mc.shadowColor = 'rgba(255,150,30,.8)'; mc.shadowBlur = 4; } else mc.shadowBlur = 0;
        mc.fillRect(b * bw + 1, H - (k + 1) * sh + 1, bw - 2, sh - 2);
      }
    }
  }
  let loops = false;
  function startLoops() {
    if (loops) return; loops = true;
    setInterval(tick, 200);
    setInterval(() => { updateVfd(false); updateBoard(); }, 500);
    raf = requestAnimationFrame(drawMeter);
  }
  function clockTick() {
    const d = new Date(); elClock.textContent = pad(d.getHours()) + (d.getSeconds() % 2 ? ' ' : ':') + pad(d.getMinutes());
    elClock.classList.toggle('tick', on);
  }

  /* ------------------------------------------------ číselník: stupnica a značky stanic */
  function buildScale() {
    let h = '';
    for (let f = 88; f <= 108; f += .5) {
      const major = f % 1 === 0, lab = f % 5 === 0 && f > 88 && f < 108;
      h += '<i class="tk' + (major ? ' m' : '') + '" style="left:' + pct(f) + '%"></i>';
      if (lab) h += '<span class="nm" style="left:' + pct(f) + '%">' + f + '</span>';
    }
    elScale.innerHTML = h;
  }
  function buildStations() {
    elMarks.innerHTML = ''; elPresets.innerHTML = '';
    stations.forEach(s => {
      const m = document.createElement('button');
      m.className = 'mark' + (s.soon ? ' soon' : ''); m.dataset.f = s.freq; m.style.left = pct(s.freq) + '%'; m.style.setProperty('--c', s.color);
      m.textContent = s.short; m.title = s.name;
      m.addEventListener('pointerdown', e => e.stopPropagation());
      m.addEventListener('click', e => { e.stopPropagation(); tuneTo(s); });
      elMarks.appendChild(m);
      const b = document.createElement('button');
      b.className = 'pre' + (s.soon ? ' soon' : ''); b.dataset.f = s.freq; b.style.setProperty('--c', s.color);
      b.innerHTML = '<b><span class="n">' + esc(s.name) + '</span><span class="s">' + esc(s.short) + '</span></b><small>' + s.freq.toFixed(1) + '</small>'; b.title = s.name + (s.soon ? ' (čoskoro)' : '');
      b.addEventListener('click', () => tuneTo(s));
      elPresets.appendChild(b);
    });
  }
  function tuneTo(s) { if (!on) powerOn(); glideTo(s.freq); }

  /* ------------------------------------------------ ovládacie prvky */
  function dragAngle(el, onDelta) {
    let last = 0, id = null;
    const ang = e => { const r = el.getBoundingClientRect(); return Math.atan2(e.clientY - (r.top + r.height / 2), e.clientX - (r.left + r.width / 2)) * 180 / Math.PI; };
    el.addEventListener('pointerdown', e => { id = e.pointerId; el.setPointerCapture(id); last = ang(e); e.preventDefault(); });
    el.addEventListener('pointermove', e => {
      if (id !== e.pointerId) return;
      const a = ang(e); let d = a - last; if (d > 180) d -= 360; if (d < -180) d += 360; last = a; onDelta(d);
    });
    const end = e => { if (id === e.pointerId) { id = null; store.set('freq', freq); } };
    el.addEventListener('pointerup', end); el.addEventListener('pointercancel', end);
  }
  dragAngle(knobVol, d => setVol(vol + d / 270));
  dragAngle(knobTune, d => { cancelAnimationFrame(glide); setFreq(freq + d / 300 * SPAN * .5); });
  knobVol.addEventListener('wheel', e => { e.preventDefault(); setVol(vol - Math.sign(e.deltaY) * .04); }, { passive: false });
  knobTune.addEventListener('wheel', e => { e.preventDefault(); cancelAnimationFrame(glide); setFreq(freq - Math.sign(e.deltaY) * .2); }, { passive: false });
  knobVol.addEventListener('keydown', e => { if (e.key === 'ArrowUp' || e.key === 'ArrowRight') { setVol(vol + .05); e.preventDefault(); } if (e.key === 'ArrowDown' || e.key === 'ArrowLeft') { setVol(vol - .05); e.preventDefault(); } });
  knobTune.addEventListener('keydown', e => { if (e.key === 'ArrowUp' || e.key === 'ArrowRight') { cancelAnimationFrame(glide); setFreq(freq + .1); e.preventDefault(); } if (e.key === 'ArrowDown' || e.key === 'ArrowLeft') { cancelAnimationFrame(glide); setFreq(freq - .1); e.preventDefault(); } });

  (function dialDrag() {
    let id = null;
    const fromX = e => { const r = elDial.getBoundingClientRect(); cancelAnimationFrame(glide); setFreq(FM0 + clamp((e.clientX - r.left) / r.width, 0, 1) * SPAN); };
    elDial.addEventListener('pointerdown', e => { if (!on) powerOn(); id = e.pointerId; elDial.setPointerCapture(id); fromX(e); });
    elDial.addEventListener('pointermove', e => { if (id === e.pointerId) fromX(e); });
    const end = e => {
      if (id !== e.pointerId) return; id = null;
      const { best, bd } = nearest();
      if (best && bd < 1.6 && bd > .05) glideTo(best.freq, 420); else { store.set('freq', freq); maybeIdent(); }
    };
    elDial.addEventListener('pointerup', end); elDial.addEventListener('pointercancel', end);
    elDial.addEventListener('keydown', e => { if (e.key === 'ArrowLeft') { seek(-1); e.preventDefault(); } if (e.key === 'ArrowRight') { seek(1); e.preventDefault(); } });
  })();

  $('power').addEventListener('click', toggle);
  $('bigPower').addEventListener('click', powerOn);
  $('prev').addEventListener('click', () => seek(-1));
  $('next').addEventListener('click', () => seek(1));
  document.addEventListener('keydown', e => {
    if (e.target && /^(INPUT|TEXTAREA)$/.test(e.target.tagName)) return;
    if (e.target && (e.target === knobVol || e.target === knobTune || e.target === elDial)) { if (e.key !== ' ') return; }
    if (e.key === ' ' || e.code === 'Space') { e.preventDefault(); toggle(); }
    else if (e.key === 'ArrowRight') seek(1);
    else if (e.key === 'ArrowLeft') seek(-1);
    else if (e.key === 'ArrowUp') { setVol(vol + .05); e.preventDefault(); }
    else if (e.key === 'ArrowDown') { setVol(vol - .05); e.preventDefault(); }
    else if (e.key === 'm' || e.key === 'M') setVol(vol > 0 ? 0 : .75, true);
  });

  /* ------------------------------------------------ štart */
  function init(prog) {
    stations = (prog.stations || []).map(prepare).sort((a, b) => a.freq - b.freq);
    buildScale(); buildStations();
    const last = stations.find(s => s.id === store.get('st', ''));
    const first = last || stations.find(s => !s.soon) || stations[0];
    if (first) freq = first.freq;
    setVol(vol, true); setFreq(freq);
    cur = null; renderBoard();
    clockTick(); setInterval(clockTick, 1000);
    window.__radio = { stations, powerOn, powerOff, seek, glideTo, tuneTo, say, get cur() { return cur; }, get P() { return P; }, get A() { return A; }, get on() { return on; }, where, talksFor, setFreq, get freq() { return freq; } };
  }
  fetch('program.json?v=' + (Date.now() / 60000 | 0)).then(r => r.json()).then(init).catch(() => init({ stations: [] }));
})();
