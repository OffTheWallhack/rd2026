/* si/strelil — UI a online synchronizácia (Supabase RPC cez fetch, bez SDK)
   Hracia obrazovka v štýle digitálnej kartovej hry: ruka do oblúka, ťahanie kariet
   so šípkou na cieľ, okrúhle portréty hráčov, detaily až po ťuknutí. */
(function () {
  'use strict';
  const E = window.StrelilEngine;
  const BASE = 'https://znsrokpaoczljisaoulu.supabase.co/rest/v1/rpc/';
  const KEY = 'sb_publishable_9bRi6q6rnTTr5_Rszk5IiQ_MBBoti45';
  const URL_SELF = 'https://durica.si/strelil/';

  // ---------- pamäť ----------
  const ls = (k, v) => { try { if (v === undefined) return localStorage.getItem(k); localStorage.setItem(k, v); } catch (e) {} return null; };
  let myId = ls('strelil_id');
  if (!myId) { myId = 'p' + Math.random().toString(36).slice(2, 10) + Date.now().toString(36).slice(-4); ls('strelil_id', myId); }
  const me = { id: myId, name: ls('strelil_name') || '' };

  // ---------- stav ----------
  let S = null, VER = 0, SEEN = {}, skew = 0, code = null;
  let busy = false, driveTimer = null, tickTimer = null, netBad = 0, joining = false;
  const ui = { sheet: null, role: false, sound: ls('strelil_sound') !== '0', lastFx: 0, lastChat: 0, multi: [], firstState: true, play: null, resp: null, pickSel: null, charSel: null };

  // ---------- jazyky (texty sú v lang/*.js) ----------
  const LANG_LIST = [['sk', '🇸🇰', 'Slovenčina'], ['cs', '🇨🇿', 'Čeština'], ['en', '🇬🇧', 'English'], ['hu', '🇭🇺', 'Magyar'], ['pl', '🇵🇱', 'Polski'], ['zh', '🇨🇳', '中文'], ['ja', '🇯🇵', '日本語'], ['tlh', '⚔️', 'tlhIngan Hol']];
  const LS = window.STRELIL_LANG = window.STRELIL_LANG || {};
  function guessLang() {
    const saved = ls('strelil_lang'); if (saved && LANG_LIST.some(l => l[0] === saved)) return saved;
    const nav = ((navigator.languages && navigator.languages[0]) || navigator.language || 'sk').toLowerCase();
    const m = { sk: 'sk', cs: 'cs', cz: 'cs', en: 'en', hu: 'hu', pl: 'pl', zh: 'zh', ja: 'ja' }[nav.slice(0, 2)];
    return m || 'sk';
  }
  let LANG = guessLang();
  const fmt = (str, p) => p ? String(str).replace(/\{(\w+)\}/g, (m, k) => p[k] != null ? p[k] : '') : String(str);
  function t(k, p) { const L = LS[LANG]; let v = L && L.ui && L.ui[k]; if (v == null) v = LS.sk && LS.sk.ui[k]; if (v == null) v = k; return fmt(v, p); }
  // lokalizované kópie dát z enginu (názvy a popisy kariet, postáv, rolí…)
  const D = { CARDS: {}, CHARS: {}, ROLES: {}, EVENTS: {}, ITEMS: {} };
  function buildD() {
    const L = LS[LANG] || {};
    const mk = (src, tr, f) => { const out = {}; Object.keys(src).forEach(k => { const o = Object.assign({}, src[k]); const x = tr && tr[k]; if (x) f(o, x); out[k] = o; }); return out; };
    D.CARDS = mk(E.CARDS, L.cards, (o, x) => { o.n = x[0]; o.s = x[1]; o.d = x[2]; });
    D.CHARS = mk(E.CHARS, L.chars, (o, x) => { o.n = x[0]; o.d = x[1]; });
    D.ROLES = mk(E.ROLES, L.roles, (o, x) => { o.n = x[0]; o.d = x[1]; });
    D.EVENTS = mk(E.EVENTS, L.events, (o, x) => { o.n = x[0]; o.d = x[1]; });
    D.ITEMS = mk(E.ITEMS, L.items, (o, x) => { o.n = x[0]; o.d = x[1]; });
  }
  function loadLang(code, done) {
    if (LS[code] || code === 'sk') { done(); return; }
    const sc = document.createElement('script'); sc.src = 'lang/' + code + '.js?v=1';
    sc.onload = done; sc.onerror = () => { LANG = 'sk'; done(); };
    document.head.appendChild(sc);
  }
  function setLang(code) {
    loadLang(code, () => {
      LANG = LS[code] || code === 'sk' ? code : 'sk'; ls('strelil_lang', LANG);
      document.documentElement.lang = LANG === 'tlh' ? 'tlh' : LANG;
      buildD(); mode = null;
      const g = $('#gallery'); if (g && !g.hidden) g.hidden = true;
      render(); if (ui.sheet) renderSheet();
    });
  }
  function langPicker() { return '<div class="langs">' + LANG_LIST.map(l => '<button class="lang' + (l[0] === LANG ? ' on' : '') + '" data-lang="' + l[0] + '" title="' + esc(l[2]) + '"><span>' + l[1] + '</span><small>' + esc(l[2]) + '</small></button>').join('') + '</div>'; }
  function bindLangs(root) { (root || document).querySelectorAll('[data-lang]').forEach(b => b.onclick = () => { snd('pick'); setLang(b.getAttribute('data-lang')); }); }
  // text záznamu z priebehu hry (nové záznamy sú kľúč + parametre, staré obyčajný text)
  const clTxt = arr => (arr || []).map(c => (D.CARDS[c.t] ? D.CARDS[c.t].n : '?') + ' ' + (E.RANK_N[c.r] || c.r) + E.SUIT_IC[c.s]).join(' / ');
  function logText(l) {
    if (!l) return '';
    if (l.m != null && !l.key) return l.m;
    const P = Object.assign({}, l.p || {});
    if (P.c && D.CARDS[P.c]) { P.ic = P.ic || D.CARDS[P.c].ic; P.c = P.c0 && D.CARDS[P.c0] ? t('l.as', { a: D.CARDS[P.c0].n, b: D.CARDS[P.c].n }) : D.CARDS[P.c].n; }
    if (P.r && D.ROLES[P.r]) P.r = D.ROLES[P.r].n;
    if (P.e && D.EVENTS[P.e]) { P.ei = D.EVENTS[P.e].ic; P.en = D.EVENTS[P.e].n; P.ed = D.EVENTS[P.e].d; }
    if (P.it && D.ITEMS[P.it]) { P.ic = D.ITEMS[P.it].ic; P.it = D.ITEMS[P.it].n; }
    if (P.cl) P.cl = clTxt(P.cl);
    if (P.why && D.CARDS[P.why]) P.why = D.CARDS[P.why].n;
    if (P.ok != null) P.ok = P.ok ? '✔' : '✘';
    return t(l.key, P);
  }
  const errText = e => e.game ? t(e.key || e.message, e.prm) : t('toast.err', { m: e.message });

  const $ = s => document.querySelector(s);
  const esc = s => String(s == null ? '' : s).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
  const clone = o => JSON.parse(JSON.stringify(o));
  const clamp = (v, a, b) => Math.max(a, Math.min(b, v));

  // ---------- sieť ----------
  async function rpc(name, body, timeout) {
    const ctrl = new AbortController();
    const t = setTimeout(() => ctrl.abort(), timeout || 9000);
    try {
      const r = await fetch(BASE + name, {
        method: 'POST',
        headers: { apikey: KEY, Authorization: 'Bearer ' + KEY, 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(body || {}), signal: ctrl.signal, cache: 'no-store',
      });
      if (!r.ok) throw new Error('http_' + r.status);
      return await r.json();
    } finally { clearTimeout(t); }
  }
  const srvNow = () => Date.now() / 1000 + skew;
  function online(pid) { if (pid === me.id) return true; const t = SEEN[pid]; return !!t && srvNow() - t < 15; }
  function offlineLong(pid) { const t = SEEN[pid]; return !t || srvNow() - t > 45; }

  async function tick() {
    clearTimeout(tickTimer);
    if (!code) return;
    try {
      const r = await rpc('strelil_sync', { p_code: code, p_pid: me.id, p_since: VER });
      netBad = 0;
      if (!r.ok) { if (r.err === 'no_room') { toast(t('toast.noRoom', { c: code })); leaveRoom(); return; } }
      else {
        SEEN = r.seen || {}; skew = r.now - Date.now() / 1000;
        if (r.state && r.version > VER) { S = r.state; VER = r.version; onState(); }
        else refreshOnline();
        drive();
      }
    } catch (e) { netBad++; if (netBad === 3) toast(t('toast.weakNet')); }
    tickTimer = setTimeout(tick, document.hidden ? 4000 : 900);
  }
  document.addEventListener('visibilitychange', () => { if (!document.hidden && code) tick(); });

  async function act(action, asPid, opt) {
    opt = opt || {};
    if (busy) return false;
    busy = true;
    try {
      for (let attempt = 0; attempt < (opt.bot ? 1 : 4); attempt++) {
        const base = clone(S);
        try { E.apply(base, asPid || me.id, action); }
        catch (e) { if (!opt.bot) toast(errText(e)); if (!e.game) console.error(e); return false; }
        let r;
        try { r = await rpc('strelil_put', { p_code: code, p_expected: VER, p_state: base }); }
        catch (e) { toast(t('toast.sendFail')); return false; }
        if (r.ok) { S = base; VER = r.version; onState(); return true; }
        if (r.err === 'conflict') {
          const f = await rpc('strelil_sync', { p_code: code, p_pid: me.id, p_since: 0 });
          if (f.ok && f.state) { S = f.state; VER = f.version; SEEN = f.seen || SEEN; onState(); }
          if (opt.bot) return false;
          continue;
        }
        toast(t('toast.roomGone')); return false;
      }
      return false;
    } finally { busy = false; }
  }

  // ---------- boty a autopilot (riadi ich prvý online človek) ----------
  function amDriver() {
    if (!S || !S.players) return false;
    const humans = S.players.filter(p => !p.bot).sort((a, b) => a.seat - b.seat);
    const d = humans.find(p => online(p.id));
    return !!d && d.id === me.id;
  }
  function drive() {
    if (!S || busy || driveTimer || (S.phase !== 'play' && S.phase !== 'chars')) return;
    if (!amDriver()) return;
    const w = E.waitingFor(S);
    for (const pid of w) {
      const p = E.P(S, pid);
      if (!p) continue;
      const auto = p.bot || (pid !== me.id && offlineLong(pid));
      if (!auto) continue;
      const h = S.q[0];
      const delay = p.bot ? (h && h.pid === pid ? 1500 : (S.stage === 'play' && S.turnPid === pid && !h ? 2200 : 1500)) : 900;
      driveTimer = setTimeout(async () => {
        driveTimer = null;
        if (!S || busy || E.waitingFor(S).indexOf(pid) < 0) return;
        if (drag) { drive(); return; } // počas ťahania karty nič nemeníme
        const a = E.botAct(S, pid);
        if (a) await act(a, pid, { bot: true });
        drive();
      }, delay);
      return;
    }
  }

  // ---------- zvuky ----------
  let AC = null;
  function snd(kind) {
    if (!ui.sound) return;
    try {
      AC = AC || new (window.AudioContext || window.webkitAudioContext)();
      const t = AC.currentTime;
      const g = AC.createGain(); g.connect(AC.destination);
      if (kind === 'shot' || kind === 'boom' || kind === 'swoosh') {
        const len = kind === 'boom' ? 0.9 : kind === 'swoosh' ? 0.18 : 0.25;
        const b = AC.createBuffer(1, AC.sampleRate * len, AC.sampleRate); const d = b.getChannelData(0);
        for (let i = 0; i < d.length; i++) d[i] = (Math.random() * 2 - 1) * (kind === 'swoosh' ? Math.sin(Math.PI * i / d.length) * 0.4 : Math.pow(1 - i / d.length, kind === 'boom' ? 2 : 4));
        const src = AC.createBufferSource(); src.buffer = b;
        const f = AC.createBiquadFilter(); f.type = kind === 'swoosh' ? 'bandpass' : 'lowpass'; f.frequency.value = kind === 'boom' ? 600 : kind === 'swoosh' ? 1800 : 2400;
        src.connect(f); f.connect(g); g.gain.setValueAtTime(kind === 'boom' ? 0.9 : 0.5, t); src.start(t);
        return;
      }
      const o = AC.createOscillator(); o.connect(g);
      const seq = { card: [[520, 0.05]], pick: [[700, 0.04]], hit: [[140, 0.15], [90, 0.15]], turn: [[523, 0.1], [659, 0.1], [880, 0.18]], dodge: [[900, 0.05], [1300, 0.07]], win: [[523, 0.12], [659, 0.12], [784, 0.12], [1046, 0.3]], death: [[300, 0.2], [200, 0.2], [120, 0.4]], event: [[392, 0.15], [523, 0.25]] }[kind] || [[440, 0.05]];
      o.type = kind === 'hit' || kind === 'death' ? 'sawtooth' : 'triangle';
      let tt = t; seq.forEach(([f, d]) => { o.frequency.setValueAtTime(f, tt); tt += d; });
      g.gain.setValueAtTime(kind === 'pick' ? 0.05 : 0.12, t); g.gain.exponentialRampToValueAtTime(0.001, tt + 0.05);
      o.start(t); o.stop(tt + 0.06);
    } catch (e) {}
  }
  const buzz = ms => { try { navigator.vibrate && navigator.vibrate(ms); } catch (e) {} };

  // ---------- KARTY (vizuál) ----------
  const ART = {
    vystrel: ['#ffb057', '#a3270f'], vedla: ['#bfe6ff', '#3d77a8'], pivo: ['#ffe08a', '#a8661a'], krcma: ['#f3b67a', '#6b3216'], dostavnik: ['#f7d29a', '#8a5426'], vlak: ['#ffe7a0', '#6b5530'],
    vreckar: ['#d8c8ff', '#4a3488'], sabotaz: ['#ffb0a0', '#7a1e1e'], suboj: ['#ffd08a', '#8a3a10'], gulomet: ['#ff8a5a', '#4a0c06'], prepad: ['#ffc98a', '#7a4214'], jarmok: ['#c8f2b0', '#3a6a2a'],
    sud: ['#e8c49a', '#5a3818'], dynamit: ['#ff7a4a', '#3a0c04'], basa: ['#cfd6dd', '#36404c'], mustang: ['#f6dca8', '#7a5424'], dalekohlad: ['#b8ecff', '#235a80'], ukryt: ['#d8d0c0', '#4a4436'],
    past: ['#ffcf9a', '#8a3a1a'], uskok: ['#c9f0ff', '#2a6a8a'], odstrelovac: ['#ffd9a8', '#5a2a10'], whisky: ['#ffd27a', '#6a3a0a'], bitka: ['#ffc0a0', '#6a2a1a'],
  };
  const WEAPON_ART = ['#e6e2da', '#3a3836'];
  function artOf(k) { const d = E.CARDS[k]; return ART[k] || (d && d.c === 'w' ? WEAPON_ART : ['#f0d8a8', '#6a4a2a']); }
  function hashHue(s) { let h = 0; for (let i = 0; i < s.length; i++) h = (h * 31 + s.charCodeAt(i)) | 0; return Math.abs(h) % 360; }
  function charArt(k) { const h = hashHue(k); return ['hsl(' + h + ',70%,78%)', 'hsl(' + ((h + 30) % 360) + ',45%,28%)']; }

  // univerzálna karta: o = { w, kind, emo, a1, a2, name, orig, text, gem, gemRed, rng, hp, band, cls, attrs, x }
  function shell(o) {
    return '<div class="cc cc-' + (o.kind || 'b') + (o.x ? ' cc-x' : '') + ' ' + (o.cls || '') + '" style="--w:' + (o.w || 92) + 'px;--a1:' + o.a1 + ';--a2:' + o.a2 + '" ' + (o.attrs || '') + '>' +
      '<div class="cc-in">' +
      (o.band ? '<div class="cc-band">' + esc(o.band) + '</div>' : '') +
      '<div class="cc-art"><i class="cc-sun"></i><i class="cc-mesa"></i><span class="cc-emo">' + o.emo + '</span></div>' +
      (o.gem ? '<div class="cc-gem' + (o.gemRed ? ' red' : '') + '">' + o.gem + '</div>' : '') +
      (o.rng ? '<div class="cc-rng" title="' + esc(t('card.range')) + '">' + o.rng + '</div>' : '') +
      (o.hp ? '<div class="cc-hp">' + o.hp + '</div>' : '') +
      '<div class="cc-rib"><span>' + esc(o.name) + '</span></div>' +
      '<div class="cc-txt">' + esc(o.text || '') + '</div>' +
      (o.orig ? '<div class="cc-org">' + esc(o.orig) + '</div>' : '') +
      '</div><i class="cc-shine"></i></div>';
  }
  const kindBand = c => c === 'm' ? t('band.m') : c === 'w' ? t('band.w') : '';
  function cardFace(k, opt) {
    opt = opt || {};
    const d = D.CARDS[k]; const a = artOf(k);
    const c = opt.cid != null && S && S.cards[opt.cid] ? S.cards[opt.cid] : null;
    return shell({ w: opt.w, kind: d.c, emo: d.ic, a1: a[0], a2: a[1], name: d.n, orig: d.o, text: opt.full ? d.d : d.s,
      gem: c ? (E.RANK_N[c.r] || c.r) + '<small>' + E.SUIT_IC[c.s] + '</small>' : '', gemRed: c && (c.s === 'h' || c.s === 'd'),
      rng: d.r || '', band: opt.band === false ? '' : kindBand(d.c), cls: opt.cls, attrs: opt.attrs, x: d.x });
  }
  function cardEl(cid, opt) { return cardFace(S.cards[cid].t, Object.assign({ cid }, opt || {})); }
  function charFace(k, opt) {
    opt = opt || {};
    const d = D.CHARS[k]; const a = charArt(k);
    return shell({ w: opt.w, kind: 'ch', emo: d.ic, a1: a[0], a2: a[1], name: d.n, orig: d.o, text: d.d, hp: (d.hp + (opt.extraHp || 0)), band: t('band.char'), cls: opt.cls, attrs: opt.attrs, x: d.x });
  }
  function roleFace(k, opt) {
    opt = opt || {};
    const d = D.ROLES[k]; const A = { serif: ['#ffe9a8', '#a8761a'], pomocnik: ['#cfe3ff', '#2e5a8a'], bandita: ['#ffb8a8', '#7a1a12'], odpadlik: ['#d4f0c0', '#2e5a22'] }[k];
    return shell({ w: opt.w, kind: 'role', emo: d.ic, a1: A[0], a2: A[1], name: d.n, orig: d.o, text: d.d, band: t('band.role'), cls: opt.cls, attrs: opt.attrs });
  }
  function eventFace(k, opt) { opt = opt || {}; const d = D.EVENTS[k]; return shell({ w: opt.w, kind: 'ev', emo: d.ic, a1: '#ffe2a0', a2: '#8a5a10', name: d.n, orig: d.o, text: d.d, band: t('band.event'), cls: opt.cls, attrs: opt.attrs }); }
  function itemFace(k, opt) { opt = opt || {}; const d = D.ITEMS[k]; return shell({ w: opt.w, kind: 'it', emo: d.ic, a1: '#fff0b0', a2: '#7a5a10', name: d.n, text: d.d + (d.once ? ' ' + t('item.once') : ''), gem: '🪙' + d.cost, band: t('band.shop'), cls: opt.cls, attrs: opt.attrs }); }

  // ---------- toasty a efekty ----------
  function toast(msg, kind) {
    const el = document.createElement('div'); el.className = 'toast ' + (kind || ''); el.textContent = msg;
    $('#toasts').appendChild(el);
    setTimeout(() => el.classList.add('out'), 2600); setTimeout(() => el.remove(), 3100);
    while ($('#toasts').children.length > 3) $('#toasts').firstChild.remove();
  }
  function seatEl(pid) { return document.querySelector('[data-seat="' + pid + '"]'); }
  function centerOf(el) { const r = el.getBoundingClientRect(); return { x: r.left + r.width / 2, y: r.top + r.height / 2, r }; }
  function floatAt(pid, text, cls) {
    const el = seatEl(pid); if (!el) return;
    const c = centerOf(el);
    const f = document.createElement('div'); f.className = 'float ' + (cls || ''); f.textContent = text;
    f.style.left = c.x + 'px'; f.style.top = c.y + 'px';
    $('#fxlayer').appendChild(f); setTimeout(() => f.remove(), 1400);
  }
  function flashSeat(pid, cls) { const el = seatEl(pid); if (!el) return; el.classList.remove(cls); void el.offsetWidth; el.classList.add(cls); setTimeout(() => el.classList.remove(cls), 900); }
  function stageCenter() { const m = $('#mid'); if (m) { const c = centerOf(m); return { x: c.x, y: c.y }; } return { x: innerWidth / 2, y: innerHeight * 0.45 }; }
  // karta vyletí od hráča do stredu stola a zmizne
  function flyCard(fromPid, key, toPid) {
    const fl = $('#fxlayer'); if (!fl || !E.CARDS[key]) return;
    const w = Math.min(150, innerWidth * 0.36);
    const wrap = document.createElement('div'); wrap.className = 'flycard';
    wrap.innerHTML = cardFace(key, { w, full: false });
    fl.appendChild(wrap);
    const src = seatEl(fromPid); const s = src ? centerOf(src) : { x: innerWidth / 2, y: innerHeight };
    const c = stageCenter();
    const h = w * 1.42;
    const tf = (x, y, sc, r) => 'translate(' + (x - w / 2) + 'px,' + (y - h / 2) + 'px) scale(' + sc + ') rotate(' + r + 'deg)';
    const anim = wrap.animate([
      { transform: tf(s.x, s.y, 0.25, -12), opacity: 0 },
      { transform: tf(c.x, c.y, 1.05, 3), opacity: 1, offset: 0.25 },
      { transform: tf(c.x, c.y, 1, 0), opacity: 1, offset: 0.75 },
      { transform: tf(c.x, c.y - 20, 0.9, 0), opacity: 0 },
    ], { duration: 1700, easing: 'cubic-bezier(.2,.8,.2,1)' });
    anim.onfinish = () => wrap.remove();
    if (toPid) setTimeout(() => tracer(c, toPid), 450);
  }
  // červená stopa výstrelu k cieľu
  function tracer(from, toPid) {
    const t = seatEl(toPid); if (!t) return;
    const c = centerOf(t);
    const svg = $('#fxsvg'); if (!svg) return;
    const p = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    const mx = (from.x + c.x) / 2, my = Math.min(from.y, c.y) - 60;
    p.setAttribute('d', 'M' + from.x + ',' + from.y + ' Q' + mx + ',' + my + ' ' + c.x + ',' + c.y);
    p.setAttribute('class', 'tracer');
    svg.appendChild(p);
    const len = p.getTotalLength(); p.style.strokeDasharray = len; p.style.strokeDashoffset = len;
    p.animate([{ strokeDashoffset: len }, { strokeDashoffset: 0, offset: 0.5 }, { strokeDashoffset: -len }], { duration: 700, easing: 'ease-out' }).onfinish = () => p.remove();
  }
  function banner(txt, sub, cls) {
    const f = document.createElement('div'); f.className = 'banner ' + (cls || '');
    f.innerHTML = '<div class="bn-t">' + esc(txt) + '</div>' + (sub ? '<div class="bn-s">' + esc(sub) + '</div>' : '');
    $('#fxlayer').appendChild(f); setTimeout(() => f.remove(), 2200);
  }
  function showEvent(k) {
    const f = document.createElement('div'); f.className = 'evpop';
    f.innerHTML = eventFace(k, { w: Math.min(220, innerWidth * 0.56) });
    $('#fxlayer').appendChild(f); setTimeout(() => f.remove(), 3400);
  }

  function playFx(list) {
    const fresh = list.filter(f => f.i > ui.lastFx);
    if (!fresh.length) return;
    ui.lastFx = fresh[fresh.length - 1].i;
    if (ui.firstState) return;
    fresh.slice(-6).forEach((f, k) => setTimeout(() => {
      const name = id => { const p = E.P(S, id); return p ? p.name : ''; };
      if (f.t === 'play') {
        const key = f.as || f.card;
        const shot = ['vystrel', 'gulomet', 'past', 'odstrelovac'].indexOf(key) >= 0;
        flyCard(f.pid, f.card, shot || f.target ? f.target : null);
        if (shot) { setTimeout(() => snd('shot'), 450); if (f.target) setTimeout(() => flashSeat(f.target, 'aimed'), 500); } else snd('swoosh');
        if (f.target === me.id) buzz([60, 40, 60]);
      }
      if (f.t === 'hit') { flashSeat(f.pid, 'shake'); floatAt(f.pid, '−' + f.n, 'neg'); snd('hit'); if (f.pid === me.id) { buzz(200); flashScreen(); } }
      if (f.t === 'dodge') { floatAt(f.pid, t('fx.dodge'), 'pos'); snd('dodge'); }
      if (f.t === 'block') floatAt(f.pid, '🦺', 'pos');
      if (f.t === 'boom') { snd('boom'); flashSeat(f.pid, 'shake'); floatAt(f.pid, '💥', 'neg'); buzz([100, 50, 300]); }
      if (f.t === 'death') { snd('death'); floatAt(f.pid, '☠️', 'neg'); banner(t('fx.died', { n: name(f.pid) }), t('fx.was', { r: D.ROLES[f.role].n }), 'dark'); }
      if (f.t === 'check') toast(t('fx.check', { n: name(f.pid), cl: clTxt(f.cards.map(c => S.cards[c])), ok: f.ok ? '✔' : '✘' }));
      if (f.t === 'event') { snd('event'); showEvent(f.e); }
      if (f.t === 'win') snd('win');
    }, k * 520));
  }
  function flashScreen() { const f = document.createElement('div'); f.className = 'redflash'; $('#fxlayer').appendChild(f); setTimeout(() => f.remove(), 600); }
  function chatFx() {
    const fresh = (S.chat || []).filter(c => c.i > ui.lastChat);
    if (!fresh.length) return;
    ui.lastChat = fresh[fresh.length - 1].i;
    if (ui.firstState) return;
    fresh.forEach(c => {
      const el = seatEl(c.pid); const p = E.P(S, c.pid);
      if (el && c.pid !== me.id) {
        const b = document.createElement('div'); b.className = 'bubble'; b.textContent = c.m;
        const r = el.getBoundingClientRect(); b.style.left = (r.left + r.width / 2) + 'px'; b.style.top = (r.bottom + 6) + 'px';
        $('#fxlayer').appendChild(b); setTimeout(() => b.remove(), 3500);
      } else if (c.pid !== me.id && p) toast(p.name + ': ' + c.m);
    });
  }

  // ---------- zmena stavu ----------
  let wasMyTurn = false, pendingRender = false;
  function onState() {
    if (!S) return;
    const meP = E.P(S, me.id);
    const myTurnNow = S.phase === 'play' && S.turnPid === me.id && S.stage === 'play';
    if (myTurnNow && !wasMyTurn && !ui.firstState) { snd('turn'); buzz(80); setTimeout(() => banner(t('yourTurn'), '', 'gold'), 250); }
    wasMyTurn = myTurnNow;
    if (ui.play) {
      if (!meP || meP.hand.indexOf(ui.play.card) < 0 || S.turnPid !== me.id || S.q.length || S.phase !== 'play') ui.play = null;
      else { const o = E.cardOptions(S, me.id, ui.play.card); ui.play.o = o; if (ui.play.target && (!o.ok || !o.targets || o.targets.indexOf(ui.play.target) < 0)) ui.play.target = null; if (ui.play.extra != null && meP.hand.indexOf(ui.play.extra) < 0) ui.play.extra = null; }
    }
    const hh = S.q && S.q[0];
    if (!hh || hh.pid !== me.id) { ui.resp = null; ui.pickSel = null; ui.multi = []; }
    else {
      if (ui.resp != null && (!meP || meP.hand.indexOf(ui.resp) < 0)) ui.resp = null;
      if (ui.pickSel != null && (!hh.cards || hh.cards.indexOf(ui.pickSel) < 0)) ui.pickSel = null;
      ui.multi = ui.multi.filter(c => meP && meP.hand.indexOf(c) >= 0);
    }
    if (ui.sheet && ['shop', 'ability', 'player', 'log'].indexOf(ui.sheet.kind) >= 0) renderSheet();
    if (drag) pendingRender = true; else render();
    playFx(S.fx || []);
    chatFx();
    ui.firstState = false;
    drive();
  }
  function refreshOnline() { document.querySelectorAll('[data-online]').forEach(el => el.classList.toggle('on', online(el.getAttribute('data-online')))); }

  // ---------- miestnosti ----------
  function randCode() { const A = 'ABCDEFGHJKLMNPRSTUVWXYZ'; let c = ''; for (let i = 0; i < 4; i++) c += A[Math.floor(Math.random() * A.length)]; return c; }
  async function createRoom() {
    const name = ($('#nm') && $('#nm').value.trim()) || me.name;
    if (!name) { toast(t('toast.name')); $('#nm') && $('#nm').focus(); return; }
    setName(name);
    for (let i = 0; i < 5; i++) {
      const c = randCode();
      const st = E.newRoom(c, me.id, name, Math.floor(Math.random() * 2e9));
      try { const r = await rpc('strelil_create', { p_code: c, p_state: st }); if (r.ok) { enterRoom(c); return; } }
      catch (e) { toast(t('toast.createFail')); return; }
    }
    toast(t('toast.retry'));
  }
  function setName(n) { me.name = n.slice(0, 16); ls('strelil_name', me.name); }
  function enterRoom(c) {
    c = String(c || '').toUpperCase().replace(/[^A-Z]/g, '').slice(0, 4);
    if (c.length !== 4) { toast(t('toast.code4')); return; }
    if (location.hash !== '#' + c) history.replaceState(null, '', '#' + c);
    code = c; S = null; VER = 0; ui.firstState = true; ui.lastFx = 0; ui.lastChat = 0; joining = false;
    render(); tick();
  }
  function leaveRoom() {
    code = null; S = null; VER = 0; clearTimeout(tickTimer); closeSheet();
    history.replaceState(null, '', location.pathname);
    render();
  }
  async function maybeAutoJoin() {
    if (!S || S.phase !== 'lobby' || E.P(S, me.id) || joining || !me.name) return;
    joining = true; await act({ a: 'join', name: me.name }); joining = false;
  }
  function shareLink() {
    const link = URL_SELF + '#' + code;
    const text = t('share.text', { c: code, l: link });
    if (navigator.share) navigator.share({ title: 'si/strelil', text, url: link }).catch(() => {});
    else { try { navigator.clipboard.writeText(link); toast(t('toast.copied')); } catch (e) { prompt(t('prompt.copy'), link); } }
  }

  // ---------- RENDER ----------
  let mode = null;
  function render() {
    const app = $('#app');
    const inGame = !!(code && S && (S.phase === 'play' || S.phase === 'over'));
    document.body.classList.toggle('ingame', inGame || !!(code && S && S.phase === 'chars'));
    if (!code) { mode = 'home'; app.className = 'app'; app.innerHTML = homeHTML(); bindHome(); return; }
    if (!S) { mode = 'wait'; app.className = 'app'; app.innerHTML = '<div class="center"><div class="logo">si/<em>strelil</em></div><p class="muted">' + esc(t('wait.connecting', { c: code })) + '</p></div>'; return; }
    if (S.phase === 'lobby') { mode = 'lobby'; app.className = 'app'; app.innerHTML = lobbyHTML(); bindLobby(); maybeAutoJoin(); return; }
    if (S.phase === 'chars') { mode = 'chars'; app.className = 'app'; app.innerHTML = charsHTML(); bindChars(); return; }
    renderGame();
  }

  function homeHTML() {
    return '<div class="home">' +
      '<div class="poster"><div class="star">★</div><div class="logo">si/<em>strelil</em></div><div class="tag">' + esc(t('home.tag')) + '</div><div class="tag2">' + esc(t('home.tag2')) + '</div>' +
      '<div class="poster-cards">' + cardFace('vystrel', { w: 74, band: false }) + cardFace('vedla', { w: 74, band: false }) + cardFace('dynamit', { w: 74 }) + '</div></div>' +
      '<label class="field"><span>' + esc(t('home.name')) + '</span><input id="nm" maxlength="16" autocomplete="nickname" placeholder="' + esc(t('home.namePh')) + '" value="' + esc(me.name) + '"></label>' +
      '<button class="btn big red" id="create">' + esc(t('home.create')) + '</button>' +
      '<div class="or">' + esc(t('home.or')) + '</div>' +
      '<div class="joinrow"><input id="code" maxlength="4" placeholder="' + esc(t('home.codePh')) + '" autocapitalize="characters" autocomplete="off"><button class="btn" id="join">' + esc(t('home.join')) + '</button></div>' +
      '<div class="btnrow2"><button class="btn" id="gal">' + esc(t('home.gallery')) + '</button><button class="btn" id="rules">' + esc(t('home.rules')) + '</button></div>' +
      '<div class="langbox"><div class="muted">🌐 ' + esc(t('home.lang')) + '</div>' + langPicker() + '</div>' +
      '<p class="foot muted">' + esc(t('home.foot')) + '</p>' +
      '</div>';
  }
  function bindHome() {
    $('#create').onclick = createRoom;
    $('#join').onclick = () => { const n = $('#nm').value.trim(); if (!n) { toast(t('toast.name')); return; } setName(n); enterRoom($('#code').value); };
    $('#code').addEventListener('keydown', e => { if (e.key === 'Enter') $('#join').click(); });
    $('#rules').onclick = () => openSheet({ kind: 'rules' });
    $('#gal').onclick = () => openGallery('karty');
    bindLangs($('#app'));
  }

  const OPT_KEYS = ['events', 'gold', 'ghosts', 'extra', 'chars'];
  function optInfo(k) {
    if (k === 'extra') return [t('opt.extra'), Object.keys(D.CARDS).filter(c => D.CARDS[c].x).map(c => D.CARDS[c].n).join(', ') + '.'];
    if (k === 'chars') return [t('opt.chars'), Object.keys(D.CHARS).filter(c => D.CHARS[c].x).map(c => D.CHARS[c].n).join(', ') + '.'];
    return [t('opt.' + k), t('opt.' + k + '.d')];
  }
  function lobbyHTML() {
    const host = S.host === me.id;
    const inRoom = !!E.P(S, me.id);
    const n = S.players.length;
    let h = '<div class="lobby"><div class="topbar"><button class="btn ghost sm" id="home">←</button><div class="logo sm">si/<em>strelil</em></div><span><button class="btn ghost sm" id="gal">🃏</button><button class="btn ghost sm" id="rules">📜</button></span></div>';
    h += '<div class="codebox"><div class="muted">' + esc(t('lobby.code')) + '</div><div class="code">' + esc(code) + '</div><button class="btn red" id="share">' + esc(t('lobby.invite')) + '</button></div>';
    if (!inRoom) h += '<label class="field"><span>' + esc(t('home.name')) + '</span><input id="nm" maxlength="16" value="' + esc(me.name) + '"></label><button class="btn big" id="joinme">' + esc(t('lobby.sit')) + '</button>';
    h += '<h3>' + esc(t('lobby.atTable', { n })) + '</h3><ul class="plist">';
    S.players.forEach(p => {
      h += '<li><span class="dot" data-online="' + esc(p.id) + '"></span><b>' + esc(p.name) + '</b>' + (p.bot ? ' <span class="pill">' + esc(t('pill.bot')) + '</span>' : '') + (p.id === S.host ? ' <span class="pill gold">' + esc(t('pill.host')) + '</span>' : '') + (p.id === me.id ? ' <span class="pill">' + esc(t('pill.you')) + '</span>' : '') +
        (host && p.id !== me.id ? '<button class="x" data-kick="' + esc(p.id) + '" aria-label="' + esc(t('lobby.kick')) + '">✕</button>' : '') + '</li>';
    });
    h += '</ul>';
    if (host) h += '<button class="btn" id="addbot" ' + (n >= 7 ? 'disabled' : '') + '>' + esc(t('lobby.addBot')) + '</button>';
    h += '<h3>' + esc(t('lobby.expansions')) + '</h3><div class="opts">';
    OPT_KEYS.forEach(k => { const oi = optInfo(k);
      h += '<label class="opt' + (host ? '' : ' ro') + '"><input type="checkbox" data-opt="' + k + '" ' + (S.opts[k] ? 'checked' : '') + (host ? '' : ' disabled') + '><span><b>' + esc(oi[0]) + '</b><small>' + esc(oi[1]) + '</small></span></label>';
    });
    h += '</div>';
    if (host) h += '<button class="btn big red" id="start" ' + (n < 4 ? 'disabled' : '') + '>' + esc(n < 4 ? t('lobby.need4') : t('lobby.deal')) + '</button>';
    else h += '<p class="muted center-t">' + esc(t('lobby.waitHost')) + '</p>';
    return h + '</div>';
  }
  function bindLobby() {
    $('#home').onclick = leaveRoom; $('#share').onclick = shareLink; $('#rules').onclick = () => openSheet({ kind: 'rules' }); $('#gal').onclick = () => openGallery('karty');
    if ($('#joinme')) $('#joinme').onclick = async () => { const n = $('#nm').value.trim(); if (!n) { toast(t('toast.name')); return; } setName(n); await act({ a: 'join', name: n }); };
    if ($('#addbot')) $('#addbot').onclick = () => act({ a: 'bot' });
    if ($('#start')) $('#start').onclick = () => act({ a: 'start' });
    document.querySelectorAll('[data-kick]').forEach(b => b.onclick = () => act({ a: 'kick', id: b.getAttribute('data-kick') }));
    document.querySelectorAll('[data-opt]').forEach(c => c.onchange = () => { const o = {}; o[c.getAttribute('data-opt')] = c.checked; act({ a: 'opts', opts: o }); });
    refreshOnline();
  }

  function charsHTML() {
    const p = E.P(S, me.id);
    let h = '<div class="chars"><div class="topbar"><div></div><div class="logo sm">si/<em>strelil</em></div><button class="btn ghost sm" id="gal">🃏</button></div>';
    if (!p) return h + '<p class="center-t muted">' + esc(t('chars.spectator')) + '</p></div>';
    h += '<div class="ch-role"><div class="muted center-t">' + esc(t('chars.secret')) + '</div><div class="flipin">' + roleFace(p.role, { w: Math.min(170, innerWidth * 0.42) }) + '</div></div>';
    if (!p.char) {
      h += '<h3 class="center-t">' + esc(t('chars.pick')) + '</h3><div class="ch-pick">';
      const w = Math.min(165, (innerWidth - 50) / 2);
      p.charOpts.forEach(c => { h += '<button class="ch-opt' + (ui.charSel === c ? ' sel' : '') + '" data-char="' + c + '">' + charFace(c, { w, extraHp: p.role === 'serif' ? 1 : 0 }) + '</button>'; });
      const ok = ui.charSel && p.charOpts.indexOf(ui.charSel) >= 0;
      h += '</div><button class="btn big red" id="chargo" ' + (ok ? '' : 'disabled') + '>' + esc(ok ? t('chars.playAs', { c: D.CHARS[ui.charSel].n }) : t('chars.tap')) + '</button>';
    } else h += '<p class="center-t">' + t('chars.youAre', { c: '<b>' + esc(D.CHARS[p.char].n) + '</b>' }) + '</p>';
    const waiting = S.players.filter(q => !q.char).map(q => q.name);
    if (waiting.length) h += '<p class="center-t muted">' + esc(t('chars.stillPicking', { n: waiting.join(', ') })) + '</p>';
    return h + '</div>';
  }
  function bindChars() {
    document.querySelectorAll('[data-char]').forEach(b => b.onclick = () => { ui.charSel = b.getAttribute('data-char'); snd('pick'); render(); });
    const go = $('#chargo'); if (go) go.onclick = () => { const c = ui.charSel; ui.charSel = null; if (c) act({ a: 'char', char: c }); };
    const g = $('#gal'); if (g) g.onclick = () => openGallery('postavy');
  }

  // ---------- HRACÍ STÔL ----------
  function renderGame() {
    const app = $('#app');
    if (mode !== 'game' || !$('#table')) {
      mode = 'game';
      app.className = 'app app-game';
      app.innerHTML = '<div class="table" id="table">' +
        '<div class="tbar" id="tbar"></div>' +
        '<div class="opps" id="opps"></div>' +
        '<div class="mid" id="mid"></div>' +
        '<div class="herozone" id="herozone"></div>' +
        '<div class="hand" id="hand"></div>' +
        '</div><svg class="aim" id="aim"><defs><marker id="ah" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="5" markerHeight="5" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 z" fill="#ffd75a"/></marker></defs><path id="aimpath" d=""/><circle id="aimdot" r="0"/></svg>' +
        '<svg class="fxsvg" id="fxsvg"></svg><div id="overwrap"></div>';
      handEls.clear();
    }
    renderBar(); renderOpps(); renderMid(); renderHero(); renderHand(); renderOver();
    refreshOnline();
    requestAnimationFrame(drawStaticAim);
  }

  function renderBar() {
    const ev = S.event && (S.opts.events || S.event === 'poludnie') ? D.EVENTS[S.event] : null;
    $('#tbar').innerHTML = '<button class="ib" id="menu" aria-label="' + esc(t('menu.t')) + '">☰</button><div class="tb-mid"><b>' + esc(code) + '</b> · ' + esc(t('bar.round', { n: S.round })) + '</div>' +
      (ev ? '<button class="evchip" id="evchip">' + ev.ic + ' ' + esc(ev.n) + '</button>' : '<span></span>') +
      '<button class="ib" id="galbtn" aria-label="' + esc(t('a.gallery')) + '">🃏</button><button class="ib" id="logbtn" aria-label="' + esc(t('a.log')) + '">📜</button>';
    $('#menu').onclick = () => openSheet({ kind: 'menu' });
    $('#galbtn').onclick = () => openGallery('karty');
    $('#logbtn').onclick = () => openSheet({ kind: 'log' });
    const ec = $('#evchip'); if (ec) ec.onclick = () => zoom(eventFace(S.event, { w: zoomW() }));
  }

  function targetsNow() {
    if (ui.play && ui.play.o.ok && ui.play.o.targets) return ui.play.o.targets;
    if (drag && drag.targets) return drag.targets;
    return null;
  }
  function portrait(p, size, opts) {
    opts = opts || {};
    const ch = p.char ? D.CHARS[p.char] : null; const a = p.char ? charArt(p.char) : ['#e8d0a0', '#5a3a1a'];
    const tg = opts.targets; const isT = tg && tg.indexOf(p.id) >= 0;
    const roleKnown = p.role === 'serif' || !p.alive || S.phase === 'over' || (p.id === me.id && ui.role);
    const h = S.q[0];
    const cls = ['pt', S.turnPid === p.id ? 'turn' : '', !p.alive ? (p.ghost && p.ghostTurns > 0 ? 'ghost' : 'dead') : '', isT ? 'tgt' : '', tg && !isT && p.id !== me.id ? 'dim' : '', ui.play && ui.play.target === p.id ? 'chosen' : '', h && h.pid === p.id ? 'acting' : '', p.id === me.id ? 'me' : ''].join(' ');
    const meP = E.P(S, me.id);
    const dist = isT && meP && meP.alive ? E.distance(S, meP, p) : null;
    const eq = p.table.map(c => '<i class="eq eq-' + E.CARDS[S.cards[c].t].c + '">' + E.CARDS[S.cards[c].t].ic + '</i>').join('') + p.items.map(it => '<i class="eq eq-i">' + E.ITEMS[it].ic + '</i>').join('');
    return '<button class="' + cls + '" data-seat="' + esc(p.id) + '" style="--ps:' + size + 'px;--a1:' + a[0] + ';--a2:' + a[1] + (opts.pos || '') + '">' +
      '<span class="pt-ring"><span class="pt-art"><span class="pt-emo">' + (ch ? ch.ic : '🤠') + '</span></span></span>' +
      (p.alive ? '<span class="pt-hp">' + p.hp + '</span>' : '<span class="pt-hp dead">' + (p.ghost && p.ghostTurns > 0 ? '👻' : '☠') + '</span>') +
      (p.id !== me.id ? '<span class="pt-cards">' + p.hand.length + '</span>' : '') +
      (roleKnown && p.role ? '<span class="pt-role r-' + p.role + '" title="' + esc(D.ROLES[p.role].n) + '">' + D.ROLES[p.role].ic + '</span>' : '') +
      (S.opts.gold && p.alive && p.id !== me.id ? '<span class="pt-gold">' + p.gold + '</span>' : '') +
      (dist ? '<span class="pt-dist">↔' + dist + '</span>' : '') +
      '<span class="pt-nm"><i class="dot" data-online="' + esc(p.id) + '"></i>' + esc(p.name) + '</span>' +
      (eq ? '<span class="pt-eq">' + eq + '</span>' : '') +
      (S.turnPid === p.id && S.phase === 'play' ? '<span class="pt-turn"></span>' : '') +
      '</button>';
  }

  function renderOpps() {
    const meP = E.P(S, me.id);
    const ordered = S.players.slice().sort((a, b) => a.seat - b.seat);
    const myIdx = meP ? ordered.findIndex(p => p.id === me.id) : -1;
    const others = myIdx < 0 ? ordered : ordered.slice(myIdx + 1).concat(ordered.slice(0, myIdx));
    const n = others.length;
    const W = ($('#opps') && $('#opps').clientWidth) || Math.min(innerWidth, 640);
    const size = n <= 3 ? 74 : n === 4 ? 64 : n === 5 ? 56 : 52;
    const pad = (size + 34) / 2 + 6;
    const tg = targetsNow();
    let h = '';
    others.forEach((p, i) => {
      const t = n === 1 ? 0.5 : i / (n - 1);
      const left = pad + t * (W - 2 * pad);
      const top = n >= 5 ? 4 + (i % 2) * 66 + (1 - Math.sin(Math.PI * (0.12 + t * 0.76))) * 22 : 6 + (1 - Math.sin(Math.PI * (0.12 + t * 0.76))) * (n <= 3 ? 70 : 58);
      h += portrait(p, size, { targets: tg, pos: ';left:' + left.toFixed(1) + 'px;top:' + top.toFixed(1) + 'px' });
    });
    const el = $('#opps'); el.innerHTML = h; el.style.height = (size + (n >= 5 ? 130 : 92 + (n <= 3 ? 40 : 26))) + 'px';
    el.querySelectorAll('.pt').forEach(b => b.onclick = () => { if (suppressClick) return; seatTap(b.getAttribute('data-seat')); });
  }

  function lastLogLine() {
    for (let i = S.log.length - 1; i >= 0; i--) { const l = S.log[i]; if (l.k !== 'turn' || i === S.log.length - 1) return logText(l); }
    return '';
  }
  function statusText() {
    if (S.phase === 'over') return t('st.over');
    const h = S.q[0];
    const nmP = id => { const p = E.P(S, id); return p ? (id === me.id ? t('st.you') : p.name) : '?'; };
    if (h) {
      const who = nmP(h.pid);
      const auto = (E.P(S, h.pid) || {}).bot ? '' : (offlineLong(h.pid) && h.pid !== me.id ? ' ' + t('st.autopilot') : '');
      const k = { shot: 'st.shot', prepad: 'st.prepad', suboj: 'st.suboj', jarmok: 'st.jarmok', odhod: 'st.odhod', kit: 'st.kit', palo: 'st.draw', pedro: 'st.draw' }[h.k];
      return (k ? t(k, { w: who }) : '…') + auto;
    }
    const tp = E.P(S, S.turnPid);
    if (!tp) return '';
    return S.turnPid === me.id ? t('st.yourTurn') : t('st.turn', { n: tp.name }) + (tp.bot ? ' 🤖' : (offlineLong(tp.id) ? ' ' + t('st.autopilot') : ''));
  }

  function renderMid() {
    const meP = E.P(S, me.id); const h = S.q[0];
    const el = $('#mid');
    let html = '';
    if (ui.play && meP) html = stageHTML(meP);
    else if (h && h.pid === me.id && meP && S.phase === 'play') html = promptHTML(meP, h);
    else {
      const top = S.discard[S.discard.length - 1];
      const w = Math.min(84, innerWidth * 0.2);
      html = '<div class="board">' +
        '<div class="deck" style="--w:' + w + 'px"><i></i><i></i><i></i><b>' + S.deck.length + '</b></div>' +
        '<div class="discard" id="discard">' + (top != null ? cardEl(top, { w, cls: 'tilt', band: false }) : '<div class="emptyslot" style="--w:' + w + 'px"></div>') + '</div>' +
        '</div><div class="status' + (S.turnPid === me.id && !h ? ' mine' : '') + '">' + esc(statusText()) + '</div><div class="ticker">' + esc(lastLogLine()) + '</div>';
    }
    el.innerHTML = html;
    bindMid();
  }

  // panel pri hraní karty: veľká karta + kroky + potvrdenie
  const cname = cid => D.CARDS[S.cards[cid].t].n;
  function playReady(pl) {
    const o = pl.o;
    if (!o.ok) return false;
    if (o.extra && pl.extra == null) return false;
    if (o.targets && !pl.target) return false;
    if (o.tcard && pl.tcard === undefined) return false;
    return true;
  }
  function stageHTML(meP) {
    const pl = ui.play, o = pl.o, d = D.CARDS[S.cards[pl.card].t];
    const shown = o.as ? D.CARDS[o.as] : d;
    const w = Math.min(132, innerWidth * 0.33);
    let s = '<div class="stage"><div class="st-card" id="stcard">' + cardEl(pl.card, { w, full: true }) + '</div><div class="st-side">';
    s += '<div class="st-t">' + esc(shown.n) + (o.as ? ' <small>(' + esc(d.n) + ')</small>' : '') + '</div>';
    if (!o.ok) s += '<p class="warn">' + esc(t(o.why, o.wp)) + '</p>';
    else {
      if (o.extra) s += '<div class="st-step' + (pl.extra != null ? ' done' : '') + '">' + esc(pl.extra != null ? t('play.discarding', { c: cname(pl.extra) }) : t('play.pickDiscard')) + '</div><div class="minis">' + meP.hand.filter(x => x !== pl.card).map(x => cardEl(x, { w: 44, cls: pl.extra === x ? 'sel' : '', attrs: 'data-ex="' + x + '"', band: false })).join('') + '</div>';
      if (o.targets) s += '<div class="st-step' + (pl.target ? ' done' : '') + '">' + (pl.target ? t('play.target', { n: '<b>' + esc(E.P(S, pl.target).name) + '</b>' }) : esc(t('play.tapPlayer'))) + '</div>';
      if (o.tcard && pl.target) {
        const q = E.P(S, pl.target);
        s += '<div class="st-step' + (pl.tcard !== undefined ? ' done' : '') + '">' + esc(t('play.whichCard')) + '</div><div class="chips">' + (q.hand.length ? '<button class="chipbtn' + (pl.tcard === 'hand' ? ' on' : '') + '" data-tc="hand">' + esc(t('play.fromHand', { x: q.hand.length })) + '</button>' : '') + q.table.map(tc => '<button class="chipbtn' + (pl.tcard === tc ? ' on' : '') + '" data-tc="' + tc + '">' + D.CARDS[S.cards[tc].t].ic + ' ' + esc(cname(tc)) + '</button>').join('') + '</div>';
      }
    }
    const ready = playReady(pl);
    s += '<div class="st-go"><button class="btn red go" id="playgo" ' + (ready ? '' : 'disabled') + '>' + (ready ? '✔ ' : '') + esc(t('play.go')) + '</button><button class="btn ghost" id="playcancel">' + esc(t('play.back')) + '</button></div>';
    return s + '</div></div>';
  }

  function promptHTML(meP, h) {
    const nmP = id => { const p = E.P(S, id); return p ? p.name : '?'; };
    let tt = '', body = '';
    const respBtn = () => ui.resp != null ? '<button class="btn red go" id="respgo">' + esc(t('resp.use', { c: cname(ui.resp) })) + '</button>' : '';
    if (h.k === 'shot' || h.k === 'prepad' || h.k === 'suboj') {
      const via = h.via === 'doc' ? t('resp.doc') : (D.CARDS[h.via] || D.CARDS.vystrel).n;
      const bangN = D.CARDS.vystrel.n;
      if (h.k === 'shot') tt = esc(t('resp.shot', { n: nmP(h.src) })) + ' <small>(' + esc(via + (h.need - h.got > 1 ? ', ' + t('resp.needMore', { x: h.need - h.got, c: D.CARDS.vedla.n }) : '') + (h.dmg > 1 ? ', ' + t('resp.dmg', { x: h.dmg }) : '')) + ')</small>';
      if (h.k === 'prepad') tt = esc(t('resp.ambush', { n: nmP(h.src) })) + ' <small>' + esc(t('resp.discardBang', { c: bangN })) + '</small>';
      if (h.k === 'suboj') tt = esc(t('resp.duel', { n: nmP(h.other) })) + ' <small>' + esc(t('resp.discardBang', { c: bangN })) + '</small>';
      const has = E.responseCards(S, meP, h).length > 0;
      body = '<p class="hint">' + esc(has ? (ui.resp != null ? t('resp.confirm') : t('resp.hint')) : t('resp.none')) + '</p><div class="st-go">' + respBtn() +
        '<button class="btn ' + (ui.resp != null ? 'ghost' : 'red go') + '" id="pass">' + esc(h.k === 'shot' ? t('resp.take', { x: h.dmg || 1 }) : h.k === 'suboj' ? t('resp.giveUp') : t('resp.loseLife')) + '</button></div>';
    } else if (h.k === 'jarmok' || h.k === 'kit') {
      tt = esc(h.k === 'jarmok' ? t('pick.fair', { c: D.CARDS.jarmok.n }) : t('pick.kit'));
      const w = Math.min(86, (innerWidth - 40) / Math.max(3, h.cards.length));
      body = '<div class="pickrow">' + h.cards.map(c => cardEl(c, { w, cls: 'pk' + (ui.pickSel === c ? ' sel' : ''), attrs: 'data-pick="' + c + '"', band: false })).join('') + '</div><div class="st-go"><button class="btn red go" id="pickgo" ' + (ui.pickSel != null ? '' : 'disabled') + '>' + esc(ui.pickSel != null ? t(h.k === 'jarmok' ? 'pick.take' : 'pick.ret', { c: cname(ui.pickSel) }) : t('pick.tap')) + '</button></div>';
    } else if (h.k === 'odhod') {
      tt = esc(t('disc.t', { x: h.n }));
      body = '<p class="hint">' + esc(t('disc.hint', { a: ui.multi.length, b: h.n })) + '</p><div class="st-go"><button class="btn red go" id="discardgo" ' + (ui.multi.length === h.n ? '' : 'disabled') + '>' + esc(t('disc.go')) + '</button></div>';
    } else if (h.k === 'palo') {
      tt = esc(t('palo.t'));
      body = '<div class="chips"><button class="chipbtn" data-from="deck">' + esc(t('from.deck')) + '</button>' + S.players.filter(q => q.alive && q.id !== me.id && q.hand.length).map(q => '<button class="chipbtn" data-from="' + esc(q.id) + '">' + esc(t('from.player', { n: q.name, x: q.hand.length })) + '</button>').join('') + '</div>';
    } else if (h.k === 'pedro') {
      const top = S.discard[S.discard.length - 1];
      tt = esc(t('pedro.t', { c: top != null ? ' (' + cname(top) + ')' : '' }));
      body = '<div class="chips"><button class="chipbtn" data-from="discard">' + esc(t('from.discard')) + '</button><button class="chipbtn" data-from="deck">' + esc(t('from.deck')) + '</button></div>';
    }
    return '<div class="prompt"><div class="pr-t">' + tt + '</div>' + body + '</div>';
  }

  function bindMid() {
    const on = (id, f) => { const b = $(id); if (b) b.onclick = f; };
    on('#playgo', () => doPlay());
    on('#playcancel', () => { ui.play = null; render(); });
    document.querySelectorAll('#mid [data-tc]').forEach(b => b.onclick = () => { const v = b.getAttribute('data-tc'); ui.play.tcard = v === 'hand' ? 'hand' : +v; render(); });
    document.querySelectorAll('#mid [data-ex]').forEach(b => b.onclick = () => { if (suppressClick) return; ui.play.extra = +b.getAttribute('data-ex'); snd('pick'); render(); });
    on('#respgo', () => { const c = ui.resp; ui.resp = null; if (c != null) act({ a: 'respond', card: c }); });
    on('#pass', () => armed('#pass', esc(t('armed.pass')), () => { ui.resp = null; act({ a: 'respond', pass: true }); }, () => { const mp = E.P(S, me.id); const h = S.q[0]; return mp && h && E.responseCards(S, mp, h).length > 0; }));
    document.querySelectorAll('#mid [data-pick]').forEach(b => b.onclick = () => { if (suppressClick) return; const c = +b.getAttribute('data-pick'); ui.pickSel = ui.pickSel === c ? null : c; snd('pick'); render(); });
    on('#pickgo', () => { const c = ui.pickSel; ui.pickSel = null; if (c != null) act({ a: 'pick', card: c }); });
    on('#discardgo', () => { const h = S.q[0]; if (h && ui.multi.length === h.n) { const cs = ui.multi.slice(); ui.multi = []; act({ a: 'pick', cards: cs }); } });
    document.querySelectorAll('#mid [data-from]').forEach(b => b.onclick = () => act({ a: 'pick', from: b.getAttribute('data-from') }));
    const dc = $('#discard'); if (dc) dc.onclick = () => { if (suppressClick) return; const t = S.discard[S.discard.length - 1]; if (t != null) zoomCard(t); };
  }

  function renderHero() {
    const meP = E.P(S, me.id);
    const el = $('#herozone');
    if (!meP) { el.innerHTML = '<p class="muted center-t">' + esc(t('hero.spectator')) + '</p>'; return; }
    const h = S.q[0];
    const myTurn = S.turnPid === me.id && S.stage === 'play' && !h && S.phase === 'play';
    const anyPlayable = myTurn && meP.hand.some(c => E.cardOptions(S, me.id, c).ok);
    const abil = meP.char && ['sid', 'doc', 'chucho'].indexOf(meP.char) >= 0 && E.ab(S, meP, meP.char);
    let s = '<div class="hz-left">';
    if (S.opts.gold) s += '<button class="rb gold" id="shop" aria-label="' + esc(t('a.shop')) + '"><span>🏪</span><b>' + meP.gold + '</b></button>';
    if (abil) s += '<button class="rb power" id="abil" aria-label="' + esc(t('a.ability')) + '"><span>' + D.CHARS[meP.char].ic + '</span><b>✨</b></button>';
    s += '<button class="rb" id="chat" aria-label="' + esc(t('a.chat')) + '"><span>💬</span></button></div>';
    s += '<div class="hz-mid">' + portrait(meP, 86, {}) +
      '<button class="rolepill r-' + meP.role + (ui.role || meP.role === 'serif' || !meP.alive ? ' open' : '') + '" id="myrole">' + (ui.role || meP.role === 'serif' || !meP.alive ? D.ROLES[meP.role].ic + ' ' + esc(D.ROLES[meP.role].n) : esc(t('hero.role'))) + '</button>' +
      '<span class="rangepill">⌖ ' + E.range(S, meP) + '</span></div>';
    s += '<div class="hz-right"><button class="endbtn' + (myTurn ? (anyPlayable ? ' on' : ' on done') : '') + '" id="endturn" ' + (myTurn ? '' : 'disabled') + '><span>' + (myTurn ? t('hero.end') : (S.phase === 'play' ? esc(t('hero.wait')) : '')) + '</span></button></div>';
    el.innerHTML = s;
    const on = (id, f) => { const b = $(id); if (b) b.onclick = f; };
    on('#shop', () => openSheet({ kind: 'shop' }));
    on('#abil', () => openSheet({ kind: 'ability', cards: [] }));
    on('#chat', () => openSheet({ kind: 'chat' }));
    on('#myrole', () => { ui.role = !ui.role; render(); });
    on('#endturn', () => armed('#endturn', esc(t('armed.end')), () => act({ a: 'end' }), () => anyPlayable));
    el.querySelectorAll('.pt').forEach(b => b.onclick = () => { if (suppressClick) return; seatTap(me.id); });
  }

  // ---------- RUKA (oblúk, ťahanie, šípka) ----------
  const handEls = new Map();
  let geo = { cw: 92, ch: 131 };
  function handState(cid, meP, h) {
    const cls = [];
    if (h && h.pid === me.id && (h.k === 'shot' || h.k === 'prepad' || h.k === 'suboj')) cls.push(E.responseCards(S, meP, h).indexOf(cid) >= 0 ? 'glow' : 'off');
    else if (h && h.pid === me.id && h.k === 'odhod') { if (ui.multi.indexOf(cid) >= 0) cls.push('marked'); }
    else if (S.turnPid === me.id && S.stage === 'play' && !h && S.phase === 'play') cls.push(E.cardOptions(S, me.id, cid).ok ? 'glow' : 'off');
    if (ui.play && ui.play.card === cid) cls.push('lifted');
    if (ui.resp === cid) cls.push('lifted');
    return cls;
  }
  function renderHand() {
    const meP = E.P(S, me.id); const wrap = $('#hand');
    if (!meP) { wrap.innerHTML = ''; handEls.clear(); return; }
    const W = wrap.clientWidth || Math.min(innerWidth, 640);
    geo.cw = W < 380 ? 84 : W < 520 ? 92 : 104; geo.ch = geo.cw * 1.42;
    const h = S.q[0];
    const deckEl = document.querySelector('.deck');
    const wr = wrap.getBoundingClientRect();
    // odstráň karty, ktoré už nemám
    handEls.forEach((el, cid) => { if (meP.hand.indexOf(cid) < 0) { handEls.delete(cid); el.classList.add('leaving'); setTimeout(() => el.remove(), 260); } });
    meP.hand.forEach(cid => {
      let el = handEls.get(cid);
      if (!el) {
        const tmp = document.createElement('div'); tmp.innerHTML = cardEl(cid, { w: geo.cw, attrs: 'data-hc="' + cid + '"' });
        el = tmp.firstChild; el.classList.add('hc');
        // nová karta prilieta z balíčka
        if (!ui.firstState && deckEl) { const d = deckEl.getBoundingClientRect(); el.style.transform = 'translate(' + (d.left - wr.left) + 'px,' + (d.top - wr.top) + 'px) scale(.6) rotate(-20deg)'; el.style.opacity = '0'; }
        wrap.appendChild(el); handEls.set(cid, el);
      } else if (el.style.getPropertyValue('--w') !== geo.cw + 'px') el.style.setProperty('--w', geo.cw + 'px');
      el.className = 'cc cc-' + E.CARDS[S.cards[cid].t].c + (E.CARDS[S.cards[cid].t].x ? ' cc-x' : '') + ' hc ' + handState(cid, meP, h).join(' ');
    });
    wrap.style.height = Math.round(geo.ch * 0.9) + 'px';
    requestAnimationFrame(() => layoutHand());
  }
  function layoutHand() {
    const meP = S && E.P(S, me.id); const wrap = $('#hand'); if (!meP || !wrap) return;
    const W = wrap.clientWidth; const n = meP.hand.length;
    const cw = geo.cw, ch = geo.ch;
    const maxSpan = Math.max(0, W - cw - 44);
    const step = n > 1 ? Math.min(cw * 0.78, maxSpan / (n - 1)) : 0;
    const rotStep = n > 1 ? Math.min(6, 34 / (n - 1)) : 0;
    meP.hand.forEach((cid, i) => {
      const el = handEls.get(cid); if (!el || (drag && drag.cid === cid && drag.free)) return;
      const off = i - (n - 1) / 2;
      let x = W / 2 - cw / 2 + off * step, y = 10 + off * off * (n > 6 ? 1.1 : 2.2), r = off * rotStep, sc = 1;
      if (el.classList.contains('lifted')) { y -= ch * 0.32; r *= 0.3; sc = 1.06; }
      if (el.classList.contains('marked')) y -= 22;
      if (hoverCid === cid && !drag) { y -= ch * 0.28; r = 0; sc = 1.12; }
      if (drag && drag.cid === cid && !drag.free) { y -= ch * 0.25; r = 0; sc = 1.05; }
      el.style.zIndex = (hoverCid === cid || el.classList.contains('lifted')) ? 60 : 10 + i;
      el.style.opacity = '';
      el.style.transform = 'translate(' + x.toFixed(1) + 'px,' + y.toFixed(1) + 'px) rotate(' + r.toFixed(2) + 'deg) scale(' + sc + ')';
    });
  }
  window.addEventListener('resize', () => { if (mode === 'game' && S) render(); });

  let hoverCid = null;
  document.addEventListener('pointerover', e => { if (e.pointerType !== 'mouse') return; const el = e.target.closest('.hc'); const c = el ? +el.getAttribute('data-hc') : null; if (c !== hoverCid) { hoverCid = c; layoutHand(); } });

  // ---------- dotyk: ťuknutie / podržanie / ťahanie ----------
  const LP_MS = 430;
  let press = null, drag = null, suppressClick = false;
  function dragKind(cid) {
    if (!S || S.phase !== 'play') return null;
    const meP = E.P(S, me.id); if (!meP || meP.hand.indexOf(cid) < 0) return null;
    const h = S.q[0];
    if (h && h.pid === me.id && (h.k === 'shot' || h.k === 'prepad' || h.k === 'suboj')) return E.responseCards(S, meP, h).indexOf(cid) >= 0 ? 'respond' : null;
    if (!h && S.turnPid === me.id && S.stage === 'play') return E.cardOptions(S, me.id, cid).ok ? 'play' : null;
    return null;
  }
  function pressTarget(e) {
    const hc = e.target.closest('.hc'); if (hc) return { kind: 'hand', el: hc, cid: +hc.getAttribute('data-hc') };
    const cc = e.target.closest('[data-pick],[data-ex],#discard .cc,#stcard .cc'); if (cc) { const id = cc.getAttribute('data-pick') || cc.getAttribute('data-ex'); const cid = id != null ? +id : (cc.closest('#discard') ? S.discard[S.discard.length - 1] : (ui.play ? ui.play.card : null)); if (cid != null) return { kind: 'card', el: cc, cid }; }
    const pt = e.target.closest('.pt'); if (pt) { const p = E.P(S, pt.getAttribute('data-seat')); if (p && p.char) return { kind: 'char', el: pt, p }; }
    return null;
  }
  document.addEventListener('pointerdown', e => {
    if (!S || mode !== 'game' || (e.button && e.button !== 0)) return;
    const t = pressTarget(e); if (!t) return;
    press = Object.assign(t, { x: e.clientX, y: e.clientY, id: e.pointerId, t0: Date.now(), lp: false });
    press.timer = setTimeout(() => {
      if (!press || drag) return;
      press.lp = true; suppressClick = true; buzz(15);
      if (press.kind === 'char') zoom(charFace(press.p.char, { w: zoomW(), extraHp: press.p.role === 'serif' ? 1 : 0 }) + playerExtra(press.p));
      else zoomCard(press.cid);
    }, LP_MS);
    if (t.kind === 'hand') { e.preventDefault(); try { t.el.setPointerCapture(e.pointerId); } catch (er) {} }
  });
  document.addEventListener('pointermove', e => {
    if (!press || e.pointerId !== press.id) return;
    const dx = e.clientX - press.x, dy = e.clientY - press.y;
    if (!drag) {
      if (Math.hypot(dx, dy) > 8) clearTimeout(press.timer);
      if (press.kind !== 'hand' || press.lp || Math.hypot(dx, dy) < 10) return;
      const kind = dragKind(press.cid);
      if (!kind) return;
      startDrag(kind, e);
    }
    e.preventDefault();
    moveDrag(e.clientX, e.clientY);
  }, { passive: false });
  document.addEventListener('pointerup', e => {
    if (!press || e.pointerId !== press.id) return;
    clearTimeout(press.timer);
    const p = press; press = null;
    if (drag) { finishDrag(e.clientX, e.clientY); suppressClick = true; setTimeout(() => { suppressClick = false; }, 80); return; }
    if (p.lp) { setTimeout(() => { suppressClick = false; }, 80); return; }
    if (p.kind === 'hand' && Date.now() - p.t0 < LP_MS) handTap(p.cid);
  });
  document.addEventListener('pointercancel', () => { if (press) clearTimeout(press.timer); if (drag) cancelDrag(); press = null; });
  document.addEventListener('click', e => { if (suppressClick) { e.stopPropagation(); e.preventDefault(); } }, true);
  document.addEventListener('contextmenu', e => { if (e.target.closest('.cc,.pt')) e.preventDefault(); });

  function startDrag(kind, e) {
    const el = press.el; const wrap = $('#hand');
    const o = kind === 'play' ? E.cardOptions(S, me.id, press.cid) : null;
    drag = { kind, cid: press.cid, el, wrap, targets: o && o.targets ? o.targets : null, free: true, lx: e.clientX, ly: e.clientY, vx: 0, vy: 0, over: null, aiming: false };
    ui.play = null; ui.resp = null;
    hoverCid = null;
    el.classList.add('dragging'); el.style.zIndex = 100;
    document.body.classList.add('dragmode');
    snd('pick'); buzz(10);
    if (drag.targets) renderOpps();
  }
  function moveDrag(x, y) {
    const d = drag; const wr = d.wrap.getBoundingClientRect();
    d.vx = d.vx * 0.6 + (x - d.lx) * 0.4; d.vy = d.vy * 0.6 + (y - d.ly) * 0.4; d.lx = x; d.ly = y;
    const handTop = wr.top;
    const aim = d.targets && y < handTop - 24;
    if (aim !== d.aiming) {
      d.aiming = aim; d.free = !aim;
      d.el.classList.toggle('aiming', aim);
      if (aim) { snd('pick'); layoutHand(); }
    }
    if (aim) {
      // karta ostane zdvihnutá v ruke a ťaháme šípku
      const er = d.el.getBoundingClientRect();
      drawAim(er.left + er.width / 2, er.top + 10, x, y);
      let over = null; const t = document.elementFromPoint(x, y); const pt = t && t.closest('.pt');
      if (pt && d.targets.indexOf(pt.getAttribute('data-seat')) >= 0) over = pt.getAttribute('data-seat');
      if (over !== d.over) { document.querySelectorAll('.pt.hover').forEach(q => q.classList.remove('hover')); if (over) { seatEl(over).classList.add('hover'); buzz(8); } d.over = over; }
      $('#aim').classList.toggle('locked', !!over);
      return;
    }
    hideAim();
    const cw = geo.cw, ch = geo.ch;
    const tx = x - wr.left - cw / 2, ty = y - wr.top - ch * 0.55;
    const rz = clamp(d.vx * 1.4, -18, 18), ry = clamp(d.vx * 2.2, -28, 28), rx = clamp(-d.vy * 1.6, -24, 24);
    const lift = y < handTop - 10 ? 1.12 : 1.04;
    d.el.style.transform = 'translate(' + tx + 'px,' + ty + 'px) rotate(' + rz + 'deg) rotateY(' + ry + 'deg) rotateX(' + rx + 'deg) scale(' + lift + ')';
    d.el.classList.toggle('overboard', y < handTop - 10);
  }
  function drawAim(x1, y1, x2, y2) {
    const svg = $('#aim'); if (!svg) return;
    const mx = (x1 + x2) / 2, my = Math.min(y1, y2) - Math.abs(x2 - x1) * 0.25 - 40;
    $('#aimpath').setAttribute('d', 'M' + x1 + ',' + y1 + ' Q' + mx + ',' + my + ' ' + x2 + ',' + y2);
    $('#aimpath').setAttribute('marker-end', 'url(#ah)');
    $('#aimdot').setAttribute('cx', x2); $('#aimdot').setAttribute('cy', y2); $('#aimdot').setAttribute('r', 16);
    svg.classList.add('on');
  }
  function hideAim() { const svg = $('#aim'); if (svg) { svg.classList.remove('on', 'locked', 'static'); } }
  function drawStaticAim() {
    if (drag) return;
    if (ui.play && ui.play.target) {
      const c = $('#stcard'), t = seatEl(ui.play.target);
      if (c && t) { const a = centerOf(c), b = centerOf(t); drawAim(a.x, a.r.top + 6, b.x, b.y); $('#aim').classList.add('static', 'locked'); return; }
    }
    hideAim();
  }
  function endDragVisual() {
    if (!drag) return;
    drag.el.classList.remove('dragging', 'aiming', 'overboard');
    document.body.classList.remove('dragmode');
    document.querySelectorAll('.pt.hover').forEach(q => q.classList.remove('hover'));
    hideAim();
  }
  function cancelDrag() { endDragVisual(); drag = null; if (pendingRender) { pendingRender = false; } render(); }
  function finishDrag(x, y) {
    const d = drag; endDragVisual();
    const handTop = d.wrap.getBoundingClientRect().top;
    drag = null;
    const above = y < handTop - 10;
    if (d.kind === 'respond') {
      if (above) { animateUse(d.el); act({ a: 'respond', card: d.cid }); }
      render(); return;
    }
    if (d.targets) {
      if (d.over) {
        ui.play = { card: d.cid, o: E.cardOptions(S, me.id, d.cid), target: d.over, tcard: undefined, extra: null };
        if (playReady(ui.play)) { animateUse(d.el); doPlay(); return; }
        render(); return; // ešte treba vybrať kartu / odhodenie
      }
      render(); return;
    }
    if (above) {
      ui.play = { card: d.cid, o: E.cardOptions(S, me.id, d.cid), target: null, tcard: undefined, extra: null };
      if (playReady(ui.play)) { animateUse(d.el); doPlay(); return; }
    }
    render();
  }
  function animateUse(el) {
    const r = el.getBoundingClientRect(); const c = stageCenter();
    const g = el.cloneNode(true); g.className = el.className + ' usefly'; g.removeAttribute('data-hc');
    g.style.left = r.left + 'px'; g.style.top = r.top + 'px'; g.style.transform = 'none';
    document.body.appendChild(g);
    g.animate([{ transform: 'translate(0,0) scale(1)', opacity: 1 }, { transform: 'translate(' + (c.x - r.left - r.width / 2) + 'px,' + (c.y - r.top - r.height / 2) + 'px) scale(1.25)', opacity: 1, offset: 0.55 }, { transform: 'translate(' + (c.x - r.left - r.width / 2) + 'px,' + (c.y - r.top - r.height / 2 - 30) + 'px) scale(1.1)', opacity: 0 }], { duration: 650, easing: 'cubic-bezier(.2,.8,.2,1)' }).onfinish = () => g.remove();
    el.style.opacity = '0';
    snd('swoosh');
  }

  function handTap(cid) {
    const meP = E.P(S, me.id); const h = S.q[0];
    if (!meP) return;
    snd('pick');
    if (h && h.pid === me.id) {
      if (h.k === 'shot' || h.k === 'prepad' || h.k === 'suboj') {
        if (E.responseCards(S, meP, h).indexOf(cid) >= 0) { ui.resp = ui.resp === cid ? null : cid; render(); } else zoomCard(cid);
        return;
      }
      if (h.k === 'odhod') { const i = ui.multi.indexOf(cid); if (i >= 0) ui.multi.splice(i, 1); else if (ui.multi.length < h.n) ui.multi.push(cid); render(); return; }
      zoomCard(cid); return;
    }
    if (ui.play && ui.play.card === cid) { ui.play = null; render(); return; }
    if (S.turnPid !== me.id || S.stage !== 'play' || S.q.length || S.phase !== 'play') { zoomCard(cid); return; }
    ui.play = { card: cid, o: E.cardOptions(S, me.id, cid), target: null, tcard: undefined, extra: null };
    render();
  }
  function seatTap(pid) {
    if (ui.play && ui.play.o.ok && ui.play.o.targets && ui.play.o.targets.indexOf(pid) >= 0) { ui.play.target = ui.play.target === pid ? null : pid; ui.play.tcard = undefined; snd('pick'); render(); return; }
    openSheet({ kind: 'player', pid });
  }
  async function doPlay() {
    const pl = ui.play; if (!pl || !playReady(pl)) return;
    const a = { a: 'play', card: pl.card };
    if (pl.target) a.target = pl.target;
    if (pl.tcard !== undefined) a.tcard = pl.tcard;
    if (pl.extra != null) a.extra = pl.extra;
    ui.play = null;
    const ok = await act(a);
    if (!ok) render();
  }

  // dvojité potvrdenie: prvé ťuknutie len „nabije“ tlačidlo
  let armedSel = null, armedTimer = null;
  function armed(sel, txt, fn, needed) {
    if (needed && !needed()) { fn(); return; }
    if (armedSel === sel) { armedSel = null; clearTimeout(armedTimer); fn(); return; }
    armedSel = sel; const b = $(sel);
    if (b) { const sp = b.querySelector('span') || b; b.dataset.orig = sp.innerHTML; sp.innerHTML = txt; b.classList.add('armed'); }
    clearTimeout(armedTimer); armedTimer = setTimeout(() => { armedSel = null; const bb = $(sel); if (bb && bb.dataset.orig) { (bb.querySelector('span') || bb).innerHTML = bb.dataset.orig; bb.classList.remove('armed'); } }, 3000);
  }

  function renderOver() {
    const w = $('#overwrap'); if (!w) return;
    if (S.phase !== 'over') { w.innerHTML = ''; return; }
    if (w.firstChild) return;
    const ws = E.winners(S);
    const title = S.winner ? t('over.' + S.winner) : t('over.end');
    const iWon = ws.indexOf(me.id) >= 0;
    let h = '<div class="over"><div class="ov-box"><div class="ov-t">' + esc(title) + '</div><div class="ov-sub">' + (E.P(S, me.id) ? esc(iWon ? t('over.won') : t('over.lost')) : '') + '</div><div class="ov-cards">';
    S.players.slice().sort((a, b) => a.seat - b.seat).forEach(p => {
      h += '<div class="ov-p' + (ws.indexOf(p.id) >= 0 ? ' win' : '') + '">' + roleFace(p.role, { w: 70 }) + '<b>' + esc(p.name) + '</b><small>' + esc(p.char ? D.CHARS[p.char].n : '') + (p.alive ? '' : ' ☠️') + '</small></div>';
    });
    h += '</div>' + (S.host === me.id ? '<button class="btn big red" id="rematch">' + esc(t('over.rematch')) + '</button>' : '<p class="muted">' + esc(t('e.rematchHost')) + '</p>') + '<div class="btnrow2"><button class="btn ghost" id="ovlog">' + esc(t('over.log')) + '</button><button class="btn ghost" id="ovhome">' + esc(t('over.home')) + '</button></div></div></div>';
    w.innerHTML = h;
    $('#rematch') && ($('#rematch').onclick = () => { w.innerHTML = ''; act({ a: 'rematch' }); });
    $('#ovhome').onclick = leaveRoom; $('#ovlog').onclick = () => openSheet({ kind: 'log' });
  }

  // ---------- detail (podržanie) a kartotéka ----------
  function zoomW() { return Math.min(280, innerWidth * 0.74, (innerHeight - 140) / 1.42); }
  function zoom(html) {
    let z = $('#zoom');
    if (!z) { z = document.createElement('div'); z.id = 'zoom'; z.className = 'zoom'; document.body.appendChild(z); z.addEventListener('click', () => { z.classList.remove('on'); setTimeout(() => { z.hidden = true; }, 180); }); }
    z.innerHTML = '<div class="zoom-in">' + html + '<div class="zoom-hint">' + esc(t('zoom.hint')) + '</div></div>';
    z.hidden = false; requestAnimationFrame(() => z.classList.add('on'));
  }
  function zoomCard(cid) {
    const k = S.cards[cid].t; const d = D.CARDS[k];
    zoom(cardEl(cid, { w: zoomW(), full: true }) + '<div class="zoom-meta">' + (d.x ? esc(t('zoom.new')) + ' · ' : '') + esc(t('gal.inDeck', { x: (E.DECK_BASE[k] || 0) + (E.DECK_EXTRA[k] || 0) })) + ' · ' + t('zoom.orig', { o: '<i>' + esc(d.o) + '</i>' }) + '</div>');
  }
  function playerExtra(p) {
    const parts = [];
    if (p.table.length) parts.push(esc(t('px.table')) + ' ' + p.table.map(c => D.CARDS[S.cards[c].t].ic + ' ' + esc(D.CARDS[S.cards[c].t].n)).join(', '));
    if (p.items.length) parts.push(esc(t('px.items')) + ' ' + p.items.map(i => D.ITEMS[i].ic + ' ' + esc(D.ITEMS[i].n)).join(', '));
    return parts.length ? '<div class="zoom-meta">' + parts.join('<br>') + '</div>' : '';
  }

  const GAL_TABS = [['karty', 'gal.cards'], ['postavy', 'gal.chars'], ['role', 'gal.roles'], ['udalosti', 'gal.events'], ['obchod', 'gal.shop']];
  function galleryItems(tab, w) {
    if (tab === 'karty') return Object.keys(E.CARDS).sort((a, b) => (E.CARDS[a].x || 0) - (E.CARDS[b].x || 0)).map(k => cardFace(k, { w, full: true }) + '<div class="gal-meta">' + esc(t('gal.inDeck', { x: (E.DECK_BASE[k] || 0) + (E.DECK_EXTRA[k] || 0) })) + (E.CARDS[k].x ? ' · ' + esc(t('pill.new')) : '') + '</div>');
    if (tab === 'postavy') return Object.keys(E.CHARS).map(k => charFace(k, { w }) + '<div class="gal-meta">' + esc(E.CHARS[k].x ? t('gal.newChar') : t('gal.baseChar')) + '</div>');
    if (tab === 'role') return Object.keys(E.ROLES).map(k => roleFace(k, { w }) + '<div class="gal-meta">' + esc(t('gal.at4', { x: ({ serif: '1×', odpadlik: '1×', bandita: '2×', pomocnik: '—' })[k] })) + '</div>');
    if (tab === 'udalosti') return Object.keys(E.EVENTS).map(k => eventFace(k, { w }));
    return Object.keys(E.ITEMS).map(k => itemFace(k, { w }));
  }
  function openGallery(tab) {
    tab = tab || 'karty';
    let g = $('#gallery');
    if (!g) { g = document.createElement('div'); g.id = 'gallery'; g.className = 'gallery'; document.body.appendChild(g); }
    const w = Math.min(270, innerWidth * 0.7, (innerHeight - 200) / 1.42);
    const items = galleryItems(tab, w);
    g.innerHTML = '<div class="gal-top"><div class="gal-tabs">' + GAL_TABS.map(g0 => '<button class="gtab' + (g0[0] === tab ? ' on' : '') + '" data-gtab="' + g0[0] + '">' + esc(t(g0[1])) + '</button>').join('') + '</div><button class="ib gal-x" id="galx">✕</button></div>' +
      '<div class="gal-track" id="galtrack" style="--gw:' + w + 'px">' + items.map(h => '<div class="gal-slide">' + h + '</div>').join('') + '</div>' +
      '<div class="gal-nav"><button class="ib" id="galprev">‹</button><span id="galcount">1 / ' + items.length + '</span><button class="ib" id="galnext">›</button></div>' +
      '<div class="gal-hint">' + esc(t('gal.hint')) + '</div>';
    g.hidden = false;
    const tr = $('#galtrack');
    const slideW = () => (tr.firstChild ? tr.firstChild.getBoundingClientRect().width : 1) + 18;
    const upd = () => {
      const i = Math.round(tr.scrollLeft / slideW()); $('#galcount').textContent = (i + 1) + ' / ' + items.length;
      // 3D natočenie kariet podľa polohy
      const mid = tr.getBoundingClientRect().left + tr.clientWidth / 2;
      tr.querySelectorAll('.gal-slide').forEach(s => { const r = s.getBoundingClientRect(); const off = clamp((r.left + r.width / 2 - mid) / r.width, -1.5, 1.5); s.style.transform = 'rotateY(' + (-off * 28) + 'deg) scale(' + (1 - Math.abs(off) * 0.12) + ')'; s.style.opacity = 1 - Math.abs(off) * 0.35; });
    };
    tr.addEventListener('scroll', () => requestAnimationFrame(upd), { passive: true });
    requestAnimationFrame(upd);
    const go = dir => tr.scrollBy({ left: dir * slideW(), behavior: 'smooth' });
    $('#galprev').onclick = () => go(-1); $('#galnext').onclick = () => go(1);
    $('#galx').onclick = () => { g.hidden = true; };
    g.querySelectorAll('[data-gtab]').forEach(b => b.onclick = () => openGallery(b.getAttribute('data-gtab')));
  }

  // ---------- spodné okno (detaily, obchod, menu…) ----------
  function openSheet(o) { ui.sheet = o; renderSheet(); }
  function closeSheet() { ui.sheet = null; const el = $('#sheet'); el.hidden = true; el.innerHTML = ''; }
  function renderSheet() {
    const sh = ui.sheet; const el = $('#sheet');
    if (!sh) { el.hidden = true; return; }
    let h = '';
    const meP = S ? E.P(S, me.id) : null;
    if (sh.kind === 'rules') h = rulesHTML();
    else if (sh.kind === 'player') {
      const p = E.P(S, sh.pid); if (!p) { closeSheet(); return; }
      const known = p.id === me.id || p.role === 'serif' || !p.alive || S.phase === 'over';
      h = '<h3>' + esc(p.name) + (p.bot ? ' <span class="pill">' + esc(t('pill.bot')) + '</span>' : '') + (known && p.role ? ' <span class="role r-' + p.role + '">' + D.ROLES[p.role].ic + ' ' + esc(D.ROLES[p.role].n) + '</span>' : '') + '</h3>';
      h += '<div class="pl-row">' + (p.char ? charFace(p.char, { w: 118, extraHp: p.role === 'serif' ? 1 : 0 }) : '') + '<div class="pl-info">' +
        (p.alive ? '<p>' + t('pl.hp', { a: '<b>' + p.hp + '</b>', b: p.maxHp }) + '</p>' : '<p>' + esc(p.ghost && p.ghostTurns > 0 ? t('pl.ghost', { x: p.ghostTurns }) : t('pl.dead')) + '</p>') +
        '<p>' + esc(t('pl.hand', { x: p.hand.length })) + '</p>' + (S.opts.gold ? '<p>' + esc(t('pl.gold', { x: p.gold })) + '</p>' : '') +
        (meP && meP.alive && p.alive && p.id !== me.id ? '<p>' + esc(t('pl.dist', { a: E.distance(S, meP, p), b: E.range(S, meP) })) + '</p>' : '') +
        (p.id === me.id ? '<p>' + esc(t('pl.range', { x: E.range(S, p) })) + '</p>' : '') + '</div></div>';
      if (p.table.length || p.items.length) h += '<p class="muted">' + esc(t('pl.front')) + '</p><div class="minis big">' + p.table.map(c => cardEl(c, { w: 70, attrs: 'data-zoom="' + c + '"', band: false })).join('') + p.items.map(it => itemFace(it, { w: 70, attrs: 'data-izoom="' + it + '"' })).join('') + '</div>';
      h += '<button class="btn ghost wide" id="sclose">' + esc(t('close')) + '</button>';
    }
    else if (sh.kind === 'shop') {
      const can = meP && S.turnPid === me.id && S.stage === 'play' && !S.q.length && meP.alive;
      h = '<h3>' + esc(t('shop.t')) + ' <span class="pill gold">🪙 ' + (meP ? meP.gold : 0) + '</span></h3><p class="muted">' + esc(t('shop.info')) + '</p><div class="shop">' +
        S.shop.map(id => { const it = D.ITEMS[id]; const pr = E.price(S, id); const own = !it.once && meP && meP.items.indexOf(id) >= 0; const ok = can && !own && meP.gold >= pr; return '<div class="shop-it">' + itemFace(id, { w: 96 }) + '<button class="btn sm' + (ok ? ' red' : '') + '" data-buy="' + id + '" ' + (ok ? '' : 'disabled') + '>' + esc(own ? t('shop.own') : t('shop.buy', { x: pr })) + '</button></div>'; }).join('') + '</div><button class="btn ghost wide" id="sclose">' + esc(t('close')) + '</button>';
    }
    else if (sh.kind === 'ability') {
      const k = meP.char; const ch = D.CHARS[k];
      h = '<h3>' + ch.ic + ' ' + esc(ch.n) + '</h3><p>' + esc(ch.d) + '</p>';
      if (k === 'chucho') h += '<button class="btn big red" id="abgo">' + esc(t('ab.chucho')) + '</button>';
      else {
        h += '<p class="muted">' + esc(t('ab.pick2', { x: sh.cards.length })) + '</p><div class="minis big">' + meP.hand.map(c => cardEl(c, { w: 62, cls: sh.cards.indexOf(c) >= 0 ? 'sel' : '', attrs: 'data-abc="' + c + '"', band: false })).join('') + '</div>';
        if (k === 'doc') {
          const tg = S.players.filter(q => q.alive && q.id !== me.id && E.distance(S, meP, q) <= E.range(S, meP)).map(q => q.id);
          h += '<p class="muted">' + esc(t('ab.target')) + '</p><div class="chips">' + tg.map(id => '<button class="chipbtn' + (sh.target === id ? ' on' : '') + '" data-at="' + esc(id) + '">' + esc(E.P(S, id).name) + '</button>').join('') + (tg.length ? '' : '<span class="muted">' + esc(t('ab.noneInRange')) + '</span>') + '</div>';
        }
        h += '<button class="btn big red" id="abgo" ' + (sh.cards.length === 2 && (k !== 'doc' || sh.target) ? '' : 'disabled') + '>' + esc(k === 'sid' ? t('ab.sid') : t('ab.doc')) + '</button>';
      }
      h += '<button class="btn ghost wide" id="sclose">' + esc(t('cancel')) + '</button>';
    }
    else if (sh.kind === 'chat') {
      const quick = ['🤠', '🔥', '😂', '😡', '👏', '💀', '🍺', t('chat.q1'), t('chat.q2'), t('chat.q3'), t('chat.q4'), 'GG'];
      h = '<h3>' + esc(t('chat.t')) + '</h3><div class="chips">' + quick.map(q => '<button class="chipbtn" data-say="' + esc(q) + '">' + esc(q) + '</button>').join('') + '</div>' +
        '<div class="joinrow"><input id="saytxt" maxlength="60" placeholder="' + esc(t('chat.ph')) + '"><button class="btn" id="saygo">' + esc(t('chat.send')) + '</button></div><button class="btn ghost wide" id="sclose">' + esc(t('close')) + '</button>';
    }
    else if (sh.kind === 'log') {
      const items = S.log.map(l => ({ i: l.i, html: '<li class="lg-' + l.k + '">' + esc(logText(l)) + '</li>' })).concat((S.chat || []).map(c => ({ i: c.i, html: '<li class="lg-chat">💬 <b>' + esc((E.P(S, c.pid) || {}).name || '?') + ':</b> ' + esc(c.m) + '</li>' })));
      items.sort((a, b) => b.i - a.i);
      h = '<h3>' + esc(t('over.log')) + '</h3><ul class="log">' + items.map(x => x.html).join('') + '</ul><button class="btn ghost wide" id="sclose">' + esc(t('close')) + '</button>';
    }
    else if (sh.kind === 'menu') {
      h = '<h3>' + esc(t('menu.t')) + '</h3><div class="col"><button class="btn" id="m-share">' + esc(t('menu.share')) + '</button><button class="btn" id="m-gal">' + esc(t('home.gallery')) + '</button><button class="btn" id="m-rules">' + esc(t('menu.rules')) + '</button><button class="btn" id="m-sound">' + esc(ui.sound ? t('menu.soundOn') : t('menu.soundOff')) + '</button><div class="langbox"><div class="muted">🌐 ' + esc(t('home.lang')) + '</div>' + langPicker() + '</div><button class="btn ghost" id="m-leave">' + esc(t('menu.leave')) + '</button><button class="btn ghost" id="sclose">' + esc(t('close')) + '</button></div>';
    }
    el.innerHTML = '<div class="sh-in"><div class="grab"></div>' + h + '</div>';
    el.hidden = false;
    const on = (id, f) => { const b = el.querySelector(id); if (b) b.onclick = f; };
    on('#sclose', closeSheet);
    el.querySelectorAll('[data-zoom]').forEach(b => b.onclick = () => zoomCard(+b.getAttribute('data-zoom')));
    el.querySelectorAll('[data-izoom]').forEach(b => b.onclick = () => zoom(itemFace(b.getAttribute('data-izoom'), { w: zoomW() })));
    el.querySelectorAll('[data-buy]').forEach(b => b.onclick = () => act({ a: 'buy', item: b.getAttribute('data-buy') }));
    el.querySelectorAll('[data-abc]').forEach(b => b.onclick = () => { const c = +b.getAttribute('data-abc'); const i = sh.cards.indexOf(c); if (i >= 0) sh.cards.splice(i, 1); else if (sh.cards.length < 2) sh.cards.push(c); renderSheet(); });
    el.querySelectorAll('[data-at]').forEach(b => b.onclick = () => { sh.target = b.getAttribute('data-at'); renderSheet(); });
    on('#abgo', async () => { const k = meP.char; const a = { a: 'ability', kind: k, cards: sh.cards.slice(), target: sh.target }; closeSheet(); await act(a); });
    el.querySelectorAll('[data-say]').forEach(b => b.onclick = () => { act({ a: 'say', text: b.getAttribute('data-say') }); closeSheet(); });
    on('#saygo', () => { const v = el.querySelector('#saytxt').value.trim(); if (v) { act({ a: 'say', text: v }); closeSheet(); } });
    bindLangs(el);
    on('#m-share', shareLink);
    on('#m-gal', () => { closeSheet(); openGallery('karty'); });
    on('#m-rules', () => openSheet({ kind: 'rules' }));
    on('#m-sound', () => { ui.sound = !ui.sound; ls('strelil_sound', ui.sound ? '1' : '0'); renderSheet(); });
    on('#m-leave', () => { if (confirm(t('menu.leaveConfirm'))) leaveRoom(); });
  }
  $('#sheet').addEventListener('click', e => { if (e.target.id === 'sheet') closeSheet(); });

  function rulesHTML() {
    const cards = Object.keys(D.CARDS).map(k => { const c = D.CARDS[k]; return '<li>' + c.ic + ' <b>' + esc(c.n) + '</b> <span class="orig">(' + esc(c.o) + ')</span>' + (c.x ? ' <span class="pill">' + esc(t('pill.new')) + '</span>' : '') + ' — ' + esc(c.d) + '</li>'; }).join('');
    const chars = Object.keys(D.CHARS).map(k => { const c = D.CHARS[k]; return '<li>' + c.ic + ' <b>' + esc(c.n) + '</b> <span class="orig">(' + esc(c.o) + ')</span> (' + c.hp + '♥)' + (c.x ? ' <span class="pill">' + esc(t('pill.new')) + '</span>' : '') + ' — ' + esc(c.d) + '</li>'; }).join('');
    const evs = Object.keys(D.EVENTS).map(k => { const c = D.EVENTS[k]; return '<li>' + c.ic + ' <b>' + esc(c.n) + '</b>' + (c.o ? ' <span class="orig">(' + esc(c.o) + ')</span>' : '') + ' — ' + esc(c.d) + '</li>'; }).join('');
    const its = Object.keys(D.ITEMS).map(k => { const c = D.ITEMS[k]; return '<li>' + c.ic + ' <b>' + esc(c.n) + '</b> (🪙' + c.cost + ') — ' + esc(c.d) + '</li>'; }).join('');
    const para = (k, b) => '<p><b>' + esc(t('rules.' + k + '.t')) + '</b> ' + t('rules.' + k, b) + '</p>';
    return '<h3>' + esc(t('home.rules')) + '</h3>' +
      '<p class="muted">' + esc(t('rules.origNote')) + '</p>' +
      para('roles') + para('turn', { c: esc(D.CARDS.vystrel.n) }) + para('controls', { go: '<b>' + esc(t('play.go')) + '</b>' }) + para('dist') + para('check') + para('rewards') + para('online') +
      '<details><summary>' + esc(t('gal.cards')) + '</summary><ul class="infol">' + cards + '</ul></details>' +
      '<details><summary>' + esc(t('gal.chars')) + '</summary><ul class="infol">' + chars + '</ul></details>' +
      '<details><summary>' + esc(t('gal.events')) + ' (' + esc(t('opt.events').replace(/^\S+\s/, '')) + ')</summary><ul class="infol">' + evs + '</ul></details>' +
      '<details><summary>' + esc(t('gal.shop')) + ' (' + esc(t('opt.gold').replace(/^\S+\s/, '')) + ')</summary><ul class="infol">' + its + '</ul></details>' +
      '<details><summary>' + esc(t('opt.ghosts')) + '</summary><p>' + esc(t('rules.ghosts')) + '</p></details>' +
      '<p class="muted">' + esc(t('rules.disclaimer')) + '</p>' +
      '<button class="btn ghost wide" id="sclose">' + esc(t('close')) + '</button>';
  }

  // ---------- zákaz zoomovania ----------
  ['gesturestart', 'gesturechange', 'gestureend'].forEach(t => document.addEventListener(t, e => e.preventDefault(), { passive: false }));
  document.addEventListener('touchmove', e => { if (e.touches && e.touches.length > 1) e.preventDefault(); if (e.scale !== undefined && e.scale !== 1) e.preventDefault(); }, { passive: false });
  document.addEventListener('dblclick', e => e.preventDefault(), { passive: false });
  let lastTouchEnd = 0;
  document.addEventListener('touchend', e => {
    const now = Date.now();
    if (now - lastTouchEnd < 320 && !e.target.closest('input,textarea,.hc')) { e.preventDefault(); const b = e.target.closest('button'); if (b && !suppressClick) b.click(); }
    lastTouchEnd = now;
  }, { passive: false });
  window.addEventListener('wheel', e => { if (e.ctrlKey) e.preventDefault(); }, { passive: false });
  window.addEventListener('keydown', e => { if ((e.ctrlKey || e.metaKey) && ['+', '-', '=', '0'].indexOf(e.key) >= 0) e.preventDefault(); });

  // ---------- štart ----------
  buildD(); document.documentElement.lang = LANG;
  window.addEventListener('hashchange', () => { const c = location.hash.slice(1); if (c && c.toUpperCase() !== code) enterRoom(c); });
  loadLang(LANG, () => {
    if (!LS[LANG] && LANG !== 'sk') LANG = 'sk';
    buildD(); document.documentElement.lang = LANG;
    const startCode = location.hash.slice(1);
    if (startCode && /^[A-Za-z]{4}$/.test(startCode)) {
      if (!me.name) { render(); const ci = $('#code'); if (ci) ci.value = startCode.toUpperCase(); toast(t('toast.joinHint')); }
      else enterRoom(startCode);
    } else render();
  });
})();
