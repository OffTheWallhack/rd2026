/* si/strelil — UI a online synchronizácia (Supabase RPC cez fetch, bez SDK) */
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
  const ui = { sheet: null, sel: null, role: false, sound: ls('strelil_sound') !== '0', lastFx: 0, lastChat: 0, lastLog: 0, multi: [], firstState: true, logOpen: false };

  const $ = s => document.querySelector(s);
  const esc = s => String(s == null ? '' : s).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
  const clone = o => JSON.parse(JSON.stringify(o));

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
      if (!r.ok) { if (r.err === 'no_room') { toast('Miestnosť ' + code + ' neexistuje alebo už vypršala.'); leaveRoom(); return; } }
      else {
        SEEN = r.seen || {}; skew = r.now - Date.now() / 1000;
        if (r.state && r.version > VER) { S = r.state; VER = r.version; onState(); }
        else refreshOnline();
        drive();
      }
    } catch (e) { netBad++; if (netBad === 3) toast('Slabé pripojenie… skúšam znova.'); }
    tickTimer = setTimeout(tick, document.hidden ? 4000 : 900);
  }
  document.addEventListener('visibilitychange', () => { if (!document.hidden && code) tick(); });

  // vykoná akciu: zoberie aktuálny stav, aplikuje, zapíše (s kontrolou verzie)
  async function act(action, asPid, opt) {
    opt = opt || {};
    if (busy) return false;
    busy = true;
    try {
      for (let attempt = 0; attempt < (opt.bot ? 1 : 4); attempt++) {
        const base = clone(S);
        try { E.apply(base, asPid || me.id, action); }
        catch (e) { if (!opt.bot) toast(e.game ? e.message : 'Chyba: ' + e.message); if (!e.game) console.error(e); return false; }
        let r;
        try { r = await rpc('strelil_put', { p_code: code, p_expected: VER, p_state: base }); }
        catch (e) { toast('Nepodarilo sa odoslať. Skontroluj internet.'); return false; }
        if (r.ok) { S = base; VER = r.version; onState(); return true; }
        if (r.err === 'conflict') {
          const f = await rpc('strelil_sync', { p_code: code, p_pid: me.id, p_since: 0 });
          if (f.ok && f.state) { S = f.state; VER = f.version; SEEN = f.seen || SEEN; onState(); }
          if (opt.bot) return false;
          continue;
        }
        toast('Miestnosť už neexistuje.'); return false;
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
      const delay = p.bot ? (h && h.pid === pid ? 650 : 950) : 400;
      driveTimer = setTimeout(async () => {
        driveTimer = null;
        if (!S || busy || E.waitingFor(S).indexOf(pid) < 0) return;
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
      if (kind === 'shot' || kind === 'boom') {
        const len = kind === 'boom' ? 0.9 : 0.25;
        const b = AC.createBuffer(1, AC.sampleRate * len, AC.sampleRate); const d = b.getChannelData(0);
        for (let i = 0; i < d.length; i++) d[i] = (Math.random() * 2 - 1) * Math.pow(1 - i / d.length, kind === 'boom' ? 2 : 4);
        const src = AC.createBufferSource(); src.buffer = b;
        const f = AC.createBiquadFilter(); f.type = 'lowpass'; f.frequency.value = kind === 'boom' ? 600 : 2400;
        src.connect(f); f.connect(g); g.gain.setValueAtTime(kind === 'boom' ? 0.9 : 0.5, t); src.start(t);
        return;
      }
      const o = AC.createOscillator(); o.connect(g);
      const seq = { card: [[520, 0.05]], hit: [[140, 0.15], [90, 0.15]], turn: [[660, 0.09], [880, 0.12]], dodge: [[900, 0.05], [1300, 0.07]], win: [[523, 0.12], [659, 0.12], [784, 0.12], [1046, 0.3]], death: [[300, 0.2], [200, 0.2], [120, 0.4]], event: [[392, 0.15], [523, 0.25]] }[kind] || [[440, 0.05]];
      o.type = kind === 'hit' || kind === 'death' ? 'sawtooth' : 'triangle';
      let tt = t; seq.forEach(([f, d]) => { o.frequency.setValueAtTime(f, tt); tt += d; });
      g.gain.setValueAtTime(0.12, t); g.gain.exponentialRampToValueAtTime(0.001, tt + 0.05);
      o.start(t); o.stop(tt + 0.06);
    } catch (e) {}
  }
  const buzz = ms => { try { navigator.vibrate && navigator.vibrate(ms); } catch (e) {} };

  // ---------- toasty a efekty ----------
  function toast(msg, kind) {
    const el = document.createElement('div'); el.className = 'toast ' + (kind || ''); el.textContent = msg;
    $('#toasts').appendChild(el);
    setTimeout(() => el.classList.add('out'), 2600); setTimeout(() => el.remove(), 3100);
    while ($('#toasts').children.length > 3) $('#toasts').firstChild.remove();
  }
  function seatEl(pid) { return document.querySelector('[data-seat="' + pid + '"]'); }
  function floatAt(pid, text, cls) {
    const el = seatEl(pid); if (!el) return;
    const r = el.getBoundingClientRect();
    const f = document.createElement('div'); f.className = 'float ' + (cls || ''); f.textContent = text;
    f.style.left = (r.left + r.width / 2) + 'px'; f.style.top = (r.top + r.height / 3) + 'px';
    $('#fxlayer').appendChild(f); setTimeout(() => f.remove(), 1400);
  }
  function flashSeat(pid, cls) { const el = seatEl(pid); if (!el) return; el.classList.remove(cls); void el.offsetWidth; el.classList.add(cls); setTimeout(() => el.classList.remove(cls), 900); }
  function bigCard(t, sub) {
    const c = E.CARDS[t]; if (!c) return;
    const f = document.createElement('div'); f.className = 'bigplay';
    f.innerHTML = '<div class="card big k-' + c.c + '"><div class="c-ic">' + c.ic + '</div><div class="c-nm">' + esc(c.n) + '</div></div><div class="bp-sub">' + esc(sub) + '</div>';
    $('#fxlayer').appendChild(f); setTimeout(() => f.remove(), 1500);
  }

  function playFx(list) {
    const fresh = list.filter(f => f.i > ui.lastFx);
    if (!fresh.length) return;
    ui.lastFx = fresh[fresh.length - 1].i;
    if (ui.firstState) return;
    fresh.slice(-6).forEach((f, k) => setTimeout(() => {
      const name = id => { const p = E.P(S, id); return p ? p.name : ''; };
      if (f.t === 'play') {
        const tgt = f.target ? ' → ' + name(f.target) : '';
        if (f.pid !== me.id) bigCard(f.as || f.card, name(f.pid) + tgt);
        if (['vystrel', 'gulomet', 'past', 'odstrelovac'].indexOf(f.as || f.card) >= 0) { snd('shot'); if (f.target) flashSeat(f.target, 'aimed'); }
        else snd('card');
        if (f.target === me.id) buzz([60, 40, 60]);
      }
      if (f.t === 'hit') { flashSeat(f.pid, 'shake'); floatAt(f.pid, '−' + f.n, 'neg'); snd('hit'); if (f.pid === me.id) buzz(200); }
      if (f.t === 'dodge') { floatAt(f.pid, 'vedľa!', 'pos'); snd('dodge'); }
      if (f.t === 'block') { floatAt(f.pid, '🦺', 'pos'); }
      if (f.t === 'boom') { snd('boom'); flashSeat(f.pid, 'shake'); floatAt(f.pid, '💥', 'neg'); buzz([100, 50, 300]); }
      if (f.t === 'death') { snd('death'); floatAt(f.pid, '☠️', 'neg'); }
      if (f.t === 'check') { toast('🎴 Ťah! ' + name(f.pid) + ': ' + f.cards.map(c => E.cardLabel(S, c)).join(' / ') + (f.ok ? ' ✔' : ' ✘')); }
      if (f.t === 'event') { snd('event'); const ev = E.EVENTS[f.e]; showEventBanner(ev); }
      if (f.t === 'win') snd('win');
    }, k * 380));
  }
  function showEventBanner(ev) {
    const f = document.createElement('div'); f.className = 'eventbanner';
    f.innerHTML = '<div class="eb-ic">' + ev.ic + '</div><div class="eb-t">' + esc(ev.n) + '</div><div class="eb-d">' + esc(ev.d) + '</div>';
    $('#fxlayer').appendChild(f); setTimeout(() => f.remove(), 3600);
  }
  function chatFx() {
    const fresh = (S.chat || []).filter(c => c.i > ui.lastChat);
    if (!fresh.length) return;
    ui.lastChat = fresh[fresh.length - 1].i;
    if (ui.firstState) return;
    fresh.forEach(c => {
      const el = seatEl(c.pid);
      const p = E.P(S, c.pid);
      if (el && c.pid !== me.id) {
        const b = document.createElement('div'); b.className = 'bubble'; b.textContent = c.m;
        const r = el.getBoundingClientRect(); b.style.left = (r.left + r.width / 2) + 'px'; b.style.top = (r.top + 4) + 'px';
        $('#fxlayer').appendChild(b); setTimeout(() => b.remove(), 3500);
      } else if (c.pid !== me.id && p) toast(p.name + ': ' + c.m);
    });
  }

  // ---------- zmena stavu ----------
  let wasMyTurn = false;
  function onState() {
    if (!S) return;
    const w = E.waitingFor(S);
    const mine = w.indexOf(me.id) >= 0 && S.phase === 'play';
    if (mine && !wasMyTurn && !ui.firstState) { snd('turn'); buzz(80); }
    wasMyTurn = mine;
    // zavri okno, ak už nedáva zmysel
    if (ui.sheet && ui.sheet.kind === 'play') {
      const meP = E.P(S, me.id);
      if (!meP || meP.hand.indexOf(ui.sheet.card) < 0 || S.turnPid !== me.id || S.q.length) closeSheet();
    }
    if (ui.sheet && (ui.sheet.kind === 'shop' || ui.sheet.kind === 'ability' || ui.sheet.kind === 'player' || ui.sheet.kind === 'log')) renderSheet();
    // vyčisti výber pri odhadzovaní, ak už neplatí
    const h = S.q && S.q[0];
    if (!h || h.pid !== me.id) ui.multi = [];
    render();
    playFx(S.fx || []);
    chatFx();
    ui.firstState = false;
    drive();
  }
  function refreshOnline() {
    document.querySelectorAll('[data-online]').forEach(el => { el.classList.toggle('on', online(el.getAttribute('data-online'))); });
  }

  // ---------- miestnosti ----------
  function randCode() { const A = 'ABCDEFGHJKLMNPRSTUVWXYZ'; let c = ''; for (let i = 0; i < 4; i++) c += A[Math.floor(Math.random() * A.length)]; return c; }
  async function createRoom() {
    const name = ($('#nm') && $('#nm').value.trim()) || me.name;
    if (!name) { toast('Napíš svoje meno.'); $('#nm') && $('#nm').focus(); return; }
    setName(name);
    for (let i = 0; i < 5; i++) {
      const c = randCode();
      const st = E.newRoom(c, me.id, name, Math.floor(Math.random() * 2e9));
      try {
        const r = await rpc('strelil_create', { p_code: c, p_state: st });
        if (r.ok) { enterRoom(c); return; }
      } catch (e) { toast('Nepodarilo sa založiť miestnosť. Skontroluj internet.'); return; }
    }
    toast('Skús to ešte raz.');
  }
  function setName(n) { me.name = n.slice(0, 16); ls('strelil_name', me.name); }
  function enterRoom(c) {
    c = String(c || '').toUpperCase().replace(/[^A-Z]/g, '').slice(0, 4);
    if (c.length !== 4) { toast('Kód má 4 písmená.'); return; }
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
    const text = 'Poď si zastrieľať 🤠 si/strelil, miestnosť ' + code + ': ' + link;
    if (navigator.share) navigator.share({ title: 'si/strelil', text, url: link }).catch(() => {});
    else { try { navigator.clipboard.writeText(link); toast('Link skopírovaný.'); } catch (e) { prompt('Skopíruj link:', link); } }
  }

  // ---------- RENDER ----------
  function render() {
    const app = $('#app');
    document.body.classList.toggle('ingame', !!(code && S && (S.phase === 'play' || S.phase === 'over' || S.phase === 'chars')));
    if (!code) { app.innerHTML = homeHTML(); bindHome(); return; }
    if (!S) { app.innerHTML = '<div class="center"><div class="logo">si/<em>strelil</em></div><p class="muted">Pripájam sa do miestnosti ' + esc(code) + '…</p></div>'; return; }
    if (S.phase === 'lobby') { app.innerHTML = lobbyHTML(); bindLobby(); maybeAutoJoin(); return; }
    if (S.phase === 'chars') { app.innerHTML = charsHTML(); bindChars(); return; }
    app.innerHTML = gameHTML(); bindGame();
  }

  function homeHTML() {
    return '<div class="home">' +
      '<div class="poster"><div class="star">★</div><div class="logo">si/<em>strelil</em></div><div class="tag">Westernová kartová hra so skrytými rolami</div><div class="tag2">Šerif · Banditi · Odpadlík · 4–7 hráčov</div></div>' +
      '<label class="field"><span>Tvoje meno</span><input id="nm" maxlength="16" autocomplete="nickname" placeholder="napr. Robo" value="' + esc(me.name) + '"></label>' +
      '<button class="btn big red" id="create">Založiť miestnosť</button>' +
      '<div class="or">alebo</div>' +
      '<div class="joinrow"><input id="code" maxlength="4" placeholder="KÓD" autocapitalize="characters" autocomplete="off"><button class="btn" id="join">Pripojiť</button></div>' +
      '<button class="btn ghost" id="rules">📜 Ako sa hrá</button>' +
      '<p class="foot muted">Hra beží cez link, nič sa neinštaluje. Boty doplnia miesta, ak vás je menej.</p>' +
      '</div>';
  }
  function bindHome() {
    $('#create').onclick = createRoom;
    $('#join').onclick = () => { const n = $('#nm').value.trim(); if (!n) { toast('Napíš svoje meno.'); return; } setName(n); enterRoom($('#code').value); };
    $('#code').addEventListener('keydown', e => { if (e.key === 'Enter') $('#join').click(); });
    $('#rules').onclick = () => openSheet({ kind: 'rules' });
  }

  const OPT_INFO = {
    events: ['🕛 Pravé poludnie', 'Každé kolo nová udalosť (smäd, krvavý mesiac, piesočná búrka…). Na konci príde Pravé poludnie.'],
    gold: ['⛏️ Zlatá horúčka', 'Zlato za každý ťah, odhodené karty aj zabitie. V obchode kupuješ vylepšenia.'],
    ghosts: ['👻 Duchovia', 'Kto padne, vráti sa ako duch na 2 ťahy a môže ešte škodiť.'],
    extra: ['🃏 Nové karty', 'Päsť, Úskok, Odstreľovač, Whisky, Bitka, Úkryt.'],
    chars: ['🤠 Nové postavy', 'Hostinský Jožo, Doc Hrom, Bezohľadný Bill, Hrobár Greg, Chucho Kaktus, Tichá Molly.'],
  };
  function lobbyHTML() {
    const host = S.host === me.id;
    const inRoom = !!E.P(S, me.id);
    const n = S.players.length;
    let h = '<div class="lobby"><div class="topbar"><button class="btn ghost sm" id="home">←</button><div class="logo sm">si/<em>strelil</em></div><button class="btn ghost sm" id="rules">📜</button></div>';
    h += '<div class="codebox"><div class="muted">Kód miestnosti</div><div class="code">' + esc(code) + '</div><button class="btn red" id="share">📨 Pozvať partiu</button></div>';
    if (!inRoom) {
      h += '<label class="field"><span>Tvoje meno</span><input id="nm" maxlength="16" value="' + esc(me.name) + '"></label><button class="btn big" id="joinme">Sadnúť si ku stolu</button>';
    }
    h += '<h3>Pri stole (' + n + '/7)</h3><ul class="plist">';
    S.players.forEach(p => {
      h += '<li><span class="dot" data-online="' + esc(p.id) + '"></span><b>' + esc(p.name) + '</b>' + (p.bot ? ' <span class="pill">bot</span>' : '') + (p.id === S.host ? ' <span class="pill gold">zakladateľ</span>' : '') + (p.id === me.id ? ' <span class="pill">ty</span>' : '') +
        (host && p.id !== me.id ? '<button class="x" data-kick="' + esc(p.id) + '" aria-label="Vyhodiť">✕</button>' : '') + '</li>';
    });
    h += '</ul>';
    if (host) h += '<button class="btn" id="addbot" ' + (n >= 7 ? 'disabled' : '') + '>🤖 Pridať bota</button>';
    h += '<h3>Rozšírenia</h3><div class="opts">';
    Object.keys(OPT_INFO).forEach(k => {
      h += '<label class="opt' + (host ? '' : ' ro') + '"><input type="checkbox" data-opt="' + k + '" ' + (S.opts[k] ? 'checked' : '') + (host ? '' : ' disabled') + '><span><b>' + OPT_INFO[k][0] + '</b><small>' + esc(OPT_INFO[k][1]) + '</small></span></label>';
    });
    h += '</div>';
    if (host) h += '<button class="btn big red" id="start" ' + (n < 4 ? 'disabled' : '') + '>' + (n < 4 ? 'Treba aspoň 4 (pridaj boty)' : '🔫 Rozdať karty') + '</button>';
    else h += '<p class="muted center-t">Čaká sa, kým zakladateľ spustí hru…</p>';
    h += '</div>';
    return h;
  }
  function bindLobby() {
    $('#home').onclick = leaveRoom; $('#share').onclick = shareLink; $('#rules').onclick = () => openSheet({ kind: 'rules' });
    if ($('#joinme')) $('#joinme').onclick = async () => { const n = $('#nm').value.trim(); if (!n) { toast('Napíš meno.'); return; } setName(n); await act({ a: 'join', name: n }); };
    if ($('#addbot')) $('#addbot').onclick = () => act({ a: 'bot' });
    if ($('#start')) $('#start').onclick = () => act({ a: 'start' });
    document.querySelectorAll('[data-kick]').forEach(b => b.onclick = () => act({ a: 'kick', id: b.getAttribute('data-kick') }));
    document.querySelectorAll('[data-opt]').forEach(c => c.onchange = () => { const o = {}; o[c.getAttribute('data-opt')] = c.checked; act({ a: 'opts', opts: o }); });
    refreshOnline();
  }

  function roleBadge(role) { const r = E.ROLES[role]; return '<span class="role r-' + role + '">' + r.ic + ' ' + esc(r.n) + '</span>'; }
  function charsHTML() {
    const p = E.P(S, me.id);
    let h = '<div class="lobby"><div class="topbar"><div></div><div class="logo sm">si/<em>strelil</em></div><div></div></div>';
    if (!p) return h + '<p class="center-t muted">Hra už beží. Pozeráš ako divák.</p></div>';
    const r = E.ROLES[p.role];
    h += '<div class="rolecard r-' + p.role + '"><div class="muted">Tvoja tajná rola</div><div class="rc-ic">' + r.ic + '</div><div class="rc-n">' + esc(r.n) + '</div><p>' + esc(r.d) + '</p></div>';
    if (!p.char) {
      h += '<h3>Vyber si postavu</h3><div class="charpick">';
      p.charOpts.forEach(c => { const ch = E.CHARS[c]; h += '<button class="charopt" data-char="' + c + '"><div class="co-ic">' + ch.ic + '</div><div class="co-n">' + esc(ch.n) + '</div><div class="co-hp">' + hearts(ch.hp + (p.role === 'serif' ? 1 : 0), ch.hp + (p.role === 'serif' ? 1 : 0)) + '</div><div class="co-d">' + esc(ch.d) + '</div></button>'; });
      h += '</div>';
    } else h += '<p class="center-t">Vybral si <b>' + esc(E.CHARS[p.char].n) + '</b>. Čaká sa na ostatných…</p>';
    const waiting = S.players.filter(q => !q.char).map(q => q.name);
    if (waiting.length) h += '<p class="center-t muted">Ešte vyberajú: ' + esc(waiting.join(', ')) + '</p>';
    return h + '</div>';
  }
  function bindChars() { document.querySelectorAll('[data-char]').forEach(b => b.onclick = () => act({ a: 'char', char: b.getAttribute('data-char') })); }

  function hearts(hp, max) { let s = ''; for (let i = 0; i < max; i++) s += i < hp ? '<i class="hf">♥</i>' : '<i class="he">♥</i>'; return '<span class="hearts">' + s + '</span>'; }
  function miniCard(cid, opts) {
    const c = S.cards[cid], d = E.CARDS[c.t];
    return '<span class="chip k-' + d.c + '" ' + (opts || '') + '>' + d.ic + ' ' + esc(d.n) + (d.r ? ' <small>' + d.r + '</small>' : '') + '</span>';
  }
  function cardHTML(cid, cls, attrs) {
    const c = S.cards[cid], d = E.CARDS[c.t];
    const red = c.s === 'h' || c.s === 'd';
    return '<button class="card k-' + d.c + ' ' + (cls || '') + '" ' + (attrs || '') + '><span class="c-rk' + (red ? ' red' : '') + '">' + (E.RANK_N[c.r] || c.r) + E.SUIT_IC[c.s] + '</span>' + (d.r ? '<span class="c-range">⌖' + d.r + '</span>' : '') + '<span class="c-ic">' + d.ic + '</span><span class="c-nm">' + esc(d.n) + '</span></button>';
  }

  function statusText() {
    if (S.phase === 'over') return 'Koniec hry';
    const h = S.q[0];
    const nmP = id => { const p = E.P(S, id); return p ? (id === me.id ? 'ty' : p.name) : '?'; };
    if (h) {
      const who = nmP(h.pid);
      const auto = (E.P(S, h.pid) || {}).bot ? '' : (offlineLong(h.pid) && h.pid !== me.id ? ' (autopilot)' : '');
      const map = { shot: (h.pid === me.id ? 'Strieľajú na teba!' : who + ' sa bráni výstrelu') , prepad: who + ' odráža prepad', suboj: 'Súboj: na rade ' + who, jarmok: 'Jarmok: vyberá ' + who, odhod: who + ' odhadzuje', kit: who + ' vyberá karty', palo: who + ' ťahá', pedro: who + ' ťahá' };
      return (map[h.k] || '…') + auto;
    }
    const t = E.P(S, S.turnPid);
    if (!t) return '';
    return S.turnPid === me.id ? 'Si na ťahu' : 'Na ťahu: ' + t.name + (t.bot ? ' 🤖' : (offlineLong(t.id) ? ' (autopilot)' : ''));
  }

  function gameHTML() {
    const meP = E.P(S, me.id);
    const ordered = S.players.slice().sort((a, b) => a.seat - b.seat);
    const myIdx = meP ? ordered.findIndex(p => p.id === me.id) : -1;
    const others = myIdx < 0 ? ordered : ordered.slice(myIdx + 1).concat(ordered.slice(0, myIdx));
    const h = S.q[0];
    const myTurn = meP && S.turnPid === me.id && S.stage === 'play' && !h && S.phase === 'play';
    const targeting = ui.sheet && ui.sheet.kind === 'play' && ui.sheet.targets;
    let out = '<div class="game' + (myTurn ? ' myturn' : '') + '">';
    // horná lišta
    const ev = S.event && (S.opts.events || S.event === 'poludnie') ? E.EVENTS[S.event] : null;
    out += '<div class="gbar"><button class="btn ghost sm" id="menu">☰</button><div class="gb-mid"><span class="gb-code">' + esc(code) + '</span> · kolo ' + S.round + '</div>' +
      (ev ? '<button class="evchip" id="evchip">' + ev.ic + ' ' + esc(ev.n) + '</button>' : '<span></span>') + '<button class="btn ghost sm" id="logbtn">📜</button></div>';
    // súperi
    out += '<div class="seats n' + others.length + '">';
    others.forEach(p => {
      const dist = meP && meP.alive && p.alive ? E.distance(S, meP, p) : null;
      const inRange = targeting && ui.sheet.targets.indexOf(p.id) >= 0;
      const roleKnown = p.role === 'serif' || !p.alive || S.phase === 'over';
      const cls = ['seat', S.turnPid === p.id ? 'turn' : '', !p.alive ? (p.ghost && p.ghostTurns > 0 ? 'ghost' : 'dead') : '', inRange ? 'tgt' : '', targeting && !inRange ? 'dim' : '', h && h.pid === p.id ? 'acting' : ''].join(' ');
      const ch = p.char ? E.CHARS[p.char] : null;
      out += '<button class="' + cls + '" data-seat="' + esc(p.id) + '">' +
        '<div class="s-top"><span class="s-av">' + (ch ? ch.ic : '🤠') + '</span><span class="s-nm">' + esc(p.name) + '</span><span class="dot" data-online="' + esc(p.id) + '"></span></div>' +
        '<div class="s-role">' + (roleKnown ? roleBadge(p.role) : '<span class="role r-unk">❓ ' + (ch ? esc(ch.n) : '') + '</span>') + '</div>' +
        '<div class="s-hp">' + (p.alive ? hearts(p.hp, p.maxHp) : (p.ghost && p.ghostTurns > 0 ? '<span class="ghosttxt">👻 duch · ' + p.ghostTurns + '</span>' : '<span class="ghosttxt">☠️ mŕtvy</span>')) + '</div>' +
        '<div class="s-meta"><span title="karty v ruke">🂠 ' + p.hand.length + '</span>' + (dist ? '<span title="vzdialenosť">↔ ' + dist + '</span>' : '') + (S.opts.gold ? '<span title="zlato">🪙 ' + p.gold + '</span>' : '') + '</div>' +
        '<div class="s-tbl">' + p.table.map(c => miniCard(c)).join('') + p.items.map(it => '<span class="chip k-i">' + E.ITEMS[it].ic + ' ' + esc(E.ITEMS[it].n) + '</span>').join('') + '</div>' +
        (S.turnPid === p.id ? '<div class="s-turn">NA ŤAHU</div>' : '') +
        '</button>';
    });
    out += '</div>';
    // stred
    const top = S.discard[S.discard.length - 1];
    out += '<div class="mid"><div class="pile"><div class="deckback">🂠<small>' + S.deck.length + '</small></div>' + (top != null ? '<div class="disc">' + cardHTML(top, 'tiny', 'tabindex="-1"') + '</div>' : '<div class="disc empty"></div>') + '</div>' +
      '<div class="status' + (h && h.pid === me.id ? ' alert' : '') + '">' + esc(statusText()) + '</div></div>';
    // ja
    if (meP) {
      const ch = meP.char ? E.CHARS[meP.char] : null;
      const r = E.ROLES[meP.role];
      out += '<div class="me' + (S.turnPid === me.id ? ' turn' : '') + (!meP.alive ? ' deadme' : '') + '" data-seat="' + esc(me.id) + '">' +
        '<div class="me-l"><button class="me-char" id="mychar"><span class="s-av">' + (ch ? ch.ic : '') + '</span><span><b>' + esc(meP.name) + '</b><small>' + (ch ? esc(ch.n) : '') + '</small></span></button>' +
        '<button class="me-role r-' + meP.role + (ui.role ? ' open' : '') + '" id="myrole">' + (ui.role || meP.role === 'serif' || !meP.alive ? r.ic + ' ' + esc(r.n) : '🔒 rola') + '</button></div>' +
        '<div class="me-r">' + (meP.alive ? hearts(meP.hp, meP.maxHp) : (meP.ghost && meP.ghostTurns > 0 ? '<span class="ghosttxt">👻 si duch · ' + meP.ghostTurns + ' ťahy</span>' : '<span class="ghosttxt">☠️ vypadol si</span>')) +
        '<div class="me-meta">' + (S.opts.gold ? '<span>🪙 ' + meP.gold + '</span>' : '') + '<span>⌖ dosah ' + E.range(S, meP) + '</span></div></div>' +
        '<div class="me-tbl">' + meP.table.map(c => miniCard(c, 'data-info="' + c + '"')).join('') + meP.items.map(it => '<span class="chip k-i" data-item="' + it + '">' + E.ITEMS[it].ic + ' ' + esc(E.ITEMS[it].n) + '</span>').join('') + '</div>' +
        '</div>';
      // výzva (odpoveď / výber)
      out += promptHTML(meP, h);
      // ruka
      const sel = ui.multi;
      const respond = h && h.pid === me.id && (h.k === 'shot' || h.k === 'prepad' || h.k === 'suboj') ? E.responseCards(S, meP, h) : null;
      out += '<div class="hand">' + (meP.hand.length ? '' : '<div class="muted emptyhand">Prázdna ruka</div>') + meP.hand.map(c => {
        let cls = '';
        if (respond) cls = respond.indexOf(c) >= 0 ? 'can' : 'off';
        else if (h && h.pid === me.id && h.k === 'odhod') cls = sel.indexOf(c) >= 0 ? 'picked' : '';
        else if (ui.sheet && ui.sheet.kind === 'ability') cls = (ui.sheet.cards || []).indexOf(c) >= 0 ? 'picked' : '';
        else if (myTurn) cls = E.cardOptions(S, me.id, c).ok ? 'can' : 'off';
        return cardHTML(c, cls, 'data-card="' + c + '"');
      }).join('') + '</div>';
      // akcie
      const abil = meP.char && ['sid', 'doc', 'chucho'].indexOf(meP.char) >= 0 && E.ab(S, meP, meP.char);
      out += '<div class="actions">' +
        (S.opts.gold ? '<button class="btn sm" id="shop">🏪 Obchod</button>' : '') +
        (abil ? '<button class="btn sm" id="abil">✨ Schopnosť</button>' : '') +
        '<button class="btn sm" id="chat">💬</button>' +
        '<button class="btn red" id="endturn" ' + (myTurn ? '' : 'disabled') + '>Ukončiť ťah</button></div>';
    } else {
      out += '<p class="center-t muted">Pozeráš ako divák.</p>';
    }
    if (S.phase === 'over') out += overHTML();
    out += '</div>';
    return out;
  }

  function promptHTML(meP, h) {
    if (!h || h.pid !== me.id || S.phase !== 'play') return '';
    const nmP = id => { const p = E.P(S, id); return p ? p.name : '?'; };
    let t = '', body = '';
    if (h.k === 'shot') {
      const via = { vystrel: 'Výstrel', gulomet: 'Guľomet', past: 'Päsť', odstrelovac: 'Odstreľovač', doc: 'Hromová rana' }[h.via] || 'Výstrel';
      t = '💥 ' + nmP(h.src) + ' na teba páli (' + via + ')' + (h.need - h.got > 1 ? ' — treba ešte ' + (h.need - h.got) + '× Vedľa!' : '') + (h.dmg > 1 ? ' · zásah = −' + h.dmg : '');
      body = '<p class="muted">Ťukni na kartu Vedľa! v ruke, alebo zober zásah.</p><button class="btn red" id="pass">Zobrať zásah (−' + (h.dmg || 1) + ')</button>';
    } else if (h.k === 'prepad') {
      t = '🏹 Prepad od ' + nmP(h.src) + '!'; body = '<p class="muted">Odhoď Výstrel, alebo stratíš život.</p><button class="btn red" id="pass">Stratiť život</button>';
    } else if (h.k === 'suboj') {
      t = '🤺 Súboj s ' + nmP(h.other) + '!'; body = '<p class="muted">Odhoď Výstrel, alebo súboj prehráš.</p><button class="btn red" id="pass">Vzdať súboj (−1)</button>';
    } else if (h.k === 'jarmok') {
      t = '🛒 Jarmok — vyber si jednu kartu'; body = '<div class="choice">' + h.cards.map(c => cardHTML(c, 'can', 'data-pick="' + c + '"')).join('') + '</div>';
    } else if (h.k === 'odhod') {
      t = '🗑️ Máš veľa kariet — odhoď ' + h.n; body = '<p class="muted">Ťukni na ' + h.n + ' ' + (h.n === 1 ? 'kartu' : 'karty') + ' v ruke. Vybraté: ' + ui.multi.length + '/' + h.n + '</p><button class="btn red" id="discardgo" ' + (ui.multi.length === h.n ? '' : 'disabled') + '>Odhodiť</button>';
    } else if (h.k === 'kit') {
      t = '🦊 Vyber kartu, ktorú VRÁTIŠ na balíček'; body = '<div class="choice">' + h.cards.map(c => cardHTML(c, 'can', 'data-pick="' + c + '"')).join('') + '</div>';
    } else if (h.k === 'palo') {
      t = '🃏 Odkiaľ potiahneš prvú kartu?';
      body = '<div class="btnrow"><button class="btn" data-from="deck">Z balíčka</button>' + S.players.filter(q => q.alive && q.id !== me.id && q.hand.length).map(q => '<button class="btn" data-from="' + esc(q.id) + '">Od ' + esc(q.name) + ' (' + q.hand.length + ')</button>').join('') + '</div>';
    } else if (h.k === 'pedro') {
      const top = S.discard[S.discard.length - 1];
      t = '🌮 Prvú kartu z kôpky' + (top != null ? ' (' + E.CARDS[S.cards[top].t].n + ')' : '') + ', alebo z balíčka?';
      body = '<div class="btnrow"><button class="btn" data-from="discard">Z kôpky</button><button class="btn" data-from="deck">Z balíčka</button></div>';
    }
    return '<div class="prompt">' + '<div class="pr-t">' + esc(t) + '</div>' + body + '</div>';
  }

  function overHTML() {
    const ws = E.winners(S);
    const title = { serif: '⭐ Vyhral zákon!', bandita: '🦹 Vyhrali banditi!', odpadlik: '🐍 Vyhral odpadlík!' }[S.winner] || 'Koniec';
    const iWon = ws.indexOf(me.id) >= 0;
    let h = '<div class="over"><div class="ov-box"><div class="ov-t">' + title + '</div><div class="ov-sub">' + (E.P(S, me.id) ? (iWon ? '🏆 Vyhral si!' : 'Tentoraz nie…') : '') + '</div><ul class="ov-list">';
    S.players.slice().sort((a, b) => a.seat - b.seat).forEach(p => {
      h += '<li class="' + (ws.indexOf(p.id) >= 0 ? 'win' : '') + '">' + roleBadge(p.role) + ' <b>' + esc(p.name) + '</b> <small>' + esc(p.char ? E.CHARS[p.char].n : '') + (p.alive ? '' : ' ☠️') + '</small></li>';
    });
    h += '</ul>' + (S.host === me.id ? '<button class="btn big red" id="rematch">🔁 Odveta</button>' : '<p class="muted">Odvetu spúšťa zakladateľ.</p>') + '<button class="btn ghost" id="ovlog">📜 Priebeh hry</button><button class="btn ghost" id="ovhome">Domov</button></div></div>';
    return h;
  }

  function bindGame() {
    const on = (id, f) => { const el = $(id); if (el) el.onclick = f; };
    on('#menu', () => openSheet({ kind: 'menu' }));
    on('#logbtn', () => openSheet({ kind: 'log' }));
    on('#evchip', () => { const ev = E.EVENTS[S.event]; openSheet({ kind: 'info', title: ev.ic + ' ' + ev.n, text: ev.d }); });
    on('#endturn', () => act({ a: 'end' }));
    on('#shop', () => openSheet({ kind: 'shop' }));
    on('#abil', () => openSheet({ kind: 'ability', cards: [] }));
    on('#chat', () => openSheet({ kind: 'chat' }));
    on('#rematch', () => act({ a: 'rematch' }));
    on('#ovhome', leaveRoom);
    on('#ovlog', () => openSheet({ kind: 'log' }));
    on('#myrole', () => { ui.role = !ui.role; render(); });
    on('#mychar', () => openSheet({ kind: 'player', pid: me.id }));
    on('#pass', () => act({ a: 'respond', pass: true }));
    on('#discardgo', () => { const h = S.q[0]; if (h && ui.multi.length === h.n) act({ a: 'pick', cards: ui.multi.slice() }).then(() => { ui.multi = []; }); });
    document.querySelectorAll('[data-pick]').forEach(b => b.onclick = () => act({ a: 'pick', card: +b.getAttribute('data-pick') }));
    document.querySelectorAll('[data-from]').forEach(b => b.onclick = () => act({ a: 'pick', from: b.getAttribute('data-from') }));
    document.querySelectorAll('[data-info]').forEach(b => b.onclick = e => { e.stopPropagation(); cardInfo(+b.getAttribute('data-info')); });
    document.querySelectorAll('[data-item]').forEach(b => b.onclick = e => { e.stopPropagation(); const it = E.ITEMS[b.getAttribute('data-item')]; openSheet({ kind: 'info', title: it.ic + ' ' + it.n, text: it.d }); });
    document.querySelectorAll('.seat').forEach(b => b.onclick = () => seatClick(b.getAttribute('data-seat')));
    document.querySelectorAll('.hand [data-card]').forEach(b => b.onclick = () => handClick(+b.getAttribute('data-card')));
    refreshOnline();
  }

  function seatClick(pid) {
    if (ui.sheet && ui.sheet.kind === 'play' && ui.sheet.targets && ui.sheet.targets.indexOf(pid) >= 0) { chooseTarget(pid); return; }
    if (ui.sheet && ui.sheet.kind === 'ability' && ui.sheet.targets && ui.sheet.targets.indexOf(pid) >= 0) { ui.sheet.target = pid; renderSheet(); return; }
    openSheet({ kind: 'player', pid });
  }

  function handClick(cid) {
    const meP = E.P(S, me.id); const h = S.q[0];
    if (h && h.pid === me.id) {
      if (h.k === 'shot' || h.k === 'prepad' || h.k === 'suboj') {
        if (E.responseCards(S, meP, h).indexOf(cid) >= 0) act({ a: 'respond', card: cid }); else cardInfo(cid);
        return;
      }
      if (h.k === 'odhod') {
        const i = ui.multi.indexOf(cid);
        if (i >= 0) ui.multi.splice(i, 1); else if (ui.multi.length < h.n) ui.multi.push(cid);
        render(); return;
      }
      cardInfo(cid); return;
    }
    if (ui.sheet && ui.sheet.kind === 'ability') {
      const a = ui.sheet.cards; const i = a.indexOf(cid);
      if (i >= 0) a.splice(i, 1); else if (a.length < 2) a.push(cid);
      render(); renderSheet(); return;
    }
    if (ui.sheet && ui.sheet.kind === 'play' && ui.sheet.needExtra && cid !== ui.sheet.card) { ui.sheet.extra = cid; renderSheet(); render(); return; }
    openPlay(cid);
  }

  function cardInfo(cid) { const c = S.cards[cid], d = E.CARDS[c.t]; openSheet({ kind: 'info', title: d.ic + ' ' + d.n, text: d.d + (d.r ? ' (dosah ' + d.r + ')' : ''), card: cid }); }

  function openPlay(cid) {
    const o = E.cardOptions(S, me.id, cid);
    openSheet({ kind: 'play', card: cid, o, targets: o.ok && o.targets ? o.targets : null, needExtra: !!(o.ok && o.extra), target: null, extra: null });
    render();
  }
  function chooseTarget(pid) {
    const sh = ui.sheet; sh.target = pid;
    if (sh.o.tcard) { renderSheet(); return; }
    if (sh.needExtra && sh.extra == null) { renderSheet(); return; }
    doPlay();
  }
  async function doPlay(tcard) {
    const sh = ui.sheet; if (!sh) return;
    const a = { a: 'play', card: sh.card };
    if (sh.target) a.target = sh.target;
    if (tcard !== undefined) a.tcard = tcard;
    if (sh.extra != null) a.extra = sh.extra;
    closeSheet();
    await act(a);
  }

  // ---------- spodné okno ----------
  function openSheet(o) { ui.sheet = o; renderSheet(); }
  function closeSheet() { const wasPlay = ui.sheet && (ui.sheet.kind === 'play' || ui.sheet.kind === 'ability'); ui.sheet = null; const el = $('#sheet'); el.hidden = true; el.innerHTML = ''; if (wasPlay && S && code) render(); }
  function renderSheet() {
    const sh = ui.sheet; const el = $('#sheet');
    if (!sh) { el.hidden = true; return; }
    let h = '';
    const meP = S ? E.P(S, me.id) : null;
    if (sh.kind === 'rules') h = rulesHTML();
    else if (sh.kind === 'info') h = '<h3>' + esc(sh.title) + '</h3><p>' + esc(sh.text) + '</p>' + (sh.card != null ? '<p class="muted">' + esc(E.cardLabel(S, sh.card)) + '</p>' : '');
    else if (sh.kind === 'play') {
      const c = S.cards[sh.card], d = E.CARDS[c.t];
      h = '<div class="pl-head">' + cardHTML(sh.card, 'can', '') + '<div><h3>' + d.ic + ' ' + esc(d.n) + (sh.o.as ? ' <small>(ako ' + esc(E.CARDS[sh.o.as].n) + ')</small>' : '') + '</h3><p>' + esc(sh.o.as ? E.CARDS[sh.o.as].d : d.d) + '</p></div></div>';
      if (!sh.o.ok) h += '<p class="warn">' + esc(sh.o.why) + '</p>';
      else {
        if (sh.needExtra) h += '<p class="step' + (sh.extra != null ? ' done' : '') + '">' + (sh.extra != null ? '✔ Odhodíš: ' + esc(E.CARDS[S.cards[sh.extra].t].n) : '① Vyber ďalšiu kartu, ktorú odhodíš:') + '</p><div class="choice sm">' + meP.hand.filter(c => c !== sh.card).map(c => cardHTML(c, sh.extra === c ? 'picked' : '', 'data-ex="' + c + '"')).join('') + '</div>';
        if (sh.targets) {
          h += '<p class="step">' + (sh.target ? '✔ Cieľ: ' + esc(E.P(S, sh.target).name) : (sh.needExtra ? '② ' : '') + 'Vyber cieľ (ťukni na hráča hore alebo tu):') + '</p><div class="btnrow">' +
            sh.targets.map(id => { const q = E.P(S, id); return '<button class="btn' + (sh.target === id ? ' red' : '') + '" data-t="' + esc(id) + '">' + esc(q.name) + ' <small>↔' + E.distance(S, meP, q) + ' ♥' + q.hp + '</small></button>'; }).join('') + '</div>';
          if (sh.target && sh.o.tcard) {
            const q = E.P(S, sh.target);
            h += '<p class="step">Ktorú kartu?</p><div class="btnrow">' + (q.hand.length ? '<button class="btn" data-tc="hand">🂠 Náhodnú z ruky (' + q.hand.length + ')</button>' : '') + q.table.map(tc => '<button class="btn" data-tc="' + tc + '">' + E.CARDS[S.cards[tc].t].ic + ' ' + esc(E.CARDS[S.cards[tc].t].n) + '</button>').join('') + '</div>';
          }
        } else h += '<button class="btn big red" id="playgo" ' + (sh.needExtra && sh.extra == null ? 'disabled' : '') + '>Zahrať</button>';
      }
      h += '<button class="btn ghost" id="sclose">Zrušiť</button>';
    }
    else if (sh.kind === 'player') {
      const p = E.P(S, sh.pid); if (!p) { closeSheet(); return; }
      const ch = p.char ? E.CHARS[p.char] : null;
      const known = p.id === me.id || p.role === 'serif' || !p.alive || S.phase === 'over';
      h = '<h3>' + (ch ? ch.ic + ' ' : '') + esc(p.name) + (p.bot ? ' <span class="pill">bot</span>' : '') + '</h3>' + (known && p.role ? '<p>' + roleBadge(p.role) + '</p>' : '') +
        (ch ? '<p><b>' + esc(ch.n) + '</b> (' + ch.hp + ' ♥) — ' + esc(ch.d) + '</p>' : '') +
        (p.table.length ? '<p class="muted">Pred sebou:</p><ul class="infol">' + p.table.map(c => { const d = E.CARDS[S.cards[c].t]; return '<li>' + d.ic + ' <b>' + esc(d.n) + '</b> — ' + esc(d.d) + '</li>'; }).join('') + '</ul>' : '') +
        (p.items.length ? '<p class="muted">Vylepšenia:</p><ul class="infol">' + p.items.map(it => '<li>' + E.ITEMS[it].ic + ' <b>' + esc(E.ITEMS[it].n) + '</b> — ' + esc(E.ITEMS[it].d) + '</li>').join('') + '</ul>' : '') +
        (meP && meP.alive && p.alive && p.id !== me.id ? '<p class="muted">Vzdialenosť od teba: ' + E.distance(S, meP, p) + ' · tvoj dosah: ' + E.range(S, meP) + '</p>' : '') +
        '<button class="btn ghost" id="sclose">Zavrieť</button>';
    }
    else if (sh.kind === 'shop') {
      const can = meP && S.turnPid === me.id && S.stage === 'play' && !S.q.length && meP.alive;
      h = '<h3>🏪 Obchod</h3><p class="muted">Máš 🪙 ' + (meP ? meP.gold : 0) + '. Nakupuješ len vo svojom ťahu. Zlato: +1 každý ťah, +1 za odhodenú kartu na konci ťahu (max 2), +2 za zabitie.</p><div class="shop">' +
        S.shop.map(id => { const it = E.ITEMS[id]; const pr = E.price(S, id); const own = !it.once && meP && meP.items.indexOf(id) >= 0; return '<div class="item"><div class="it-ic">' + it.ic + '</div><div class="it-b"><b>' + esc(it.n) + '</b><small>' + esc(it.d) + (it.once ? ' (jednorazové)' : '') + '</small></div><button class="btn sm' + (can && !own && meP.gold >= pr ? ' red' : '') + '" data-buy="' + id + '" ' + (can && !own && meP.gold >= pr ? '' : 'disabled') + '>' + (own ? 'máš' : '🪙 ' + pr) + '</button></div>'; }).join('') + '</div>' +
        '<button class="btn ghost" id="sclose">Zavrieť</button>';
    }
    else if (sh.kind === 'ability') {
      const k = meP.char; const ch = E.CHARS[k];
      h = '<h3>' + ch.ic + ' ' + esc(ch.n) + '</h3><p>' + esc(ch.d) + '</p>';
      if (k === 'chucho') h += '<button class="btn big red" id="abgo">−1 život → +2 karty</button>';
      else {
        h += '<p class="step">Vyber 2 karty na odhodenie: ' + sh.cards.length + '/2</p><div class="choice sm">' + meP.hand.map(c => cardHTML(c, sh.cards.indexOf(c) >= 0 ? 'picked' : '', 'data-abc="' + c + '"')).join('') + '</div>';
        if (k === 'doc') {
          const tg = S.players.filter(q => q.alive && q.id !== me.id && E.distance(S, meP, q) <= E.range(S, meP)).map(q => q.id);
          sh.targets = tg;
          h += '<p class="step">Cieľ:</p><div class="btnrow">' + tg.map(id => '<button class="btn' + (sh.target === id ? ' red' : '') + '" data-at="' + esc(id) + '">' + esc(E.P(S, id).name) + '</button>').join('') + (tg.length ? '' : '<span class="muted">Nikto v dosahu.</span>') + '</div>';
        }
        h += '<button class="btn big red" id="abgo" ' + (sh.cards.length === 2 && (k !== 'doc' || sh.target) ? '' : 'disabled') + '>' + (k === 'sid' ? 'Odhodiť 2 → +1 život' : 'Hromová rana!') + '</button>';
      }
      h += '<button class="btn ghost" id="sclose">Zrušiť</button>';
    }
    else if (sh.kind === 'chat') {
      const quick = ['🤠', '🔥', '😂', '😡', '👏', '💀', '🍺', 'Nestrieľaj na mňa!', 'Spojme sa!', 'Pomsta!', 'To bolo blbé…', 'GG'];
      h = '<h3>💬 Rýchla správa</h3><div class="btnrow">' + quick.map(q => '<button class="btn" data-say="' + esc(q) + '">' + esc(q) + '</button>').join('') + '</div>' +
        '<div class="joinrow"><input id="saytxt" maxlength="60" placeholder="vlastná správa"><button class="btn" id="saygo">Poslať</button></div><button class="btn ghost" id="sclose">Zavrieť</button>';
    }
    else if (sh.kind === 'log') {
      const items = S.log.map(l => ({ i: l.i, html: '<li class="lg-' + l.k + '">' + esc(l.m) + '</li>' })).concat((S.chat || []).map(c => ({ i: c.i, html: '<li class="lg-chat">💬 <b>' + esc((E.P(S, c.pid) || {}).name || '?') + ':</b> ' + esc(c.m) + '</li>' })));
      items.sort((a, b) => b.i - a.i);
      h = '<h3>📜 Priebeh</h3><ul class="log">' + items.map(x => x.html).join('') + '</ul><button class="btn ghost" id="sclose">Zavrieť</button>';
    }
    else if (sh.kind === 'menu') {
      h = '<h3>Menu</h3><div class="col"><button class="btn" id="m-share">📨 Pozvať / zdieľať link</button><button class="btn" id="m-rules">📜 Pravidlá</button><button class="btn" id="m-sound">' + (ui.sound ? '🔊 Zvuk zapnutý' : '🔇 Zvuk vypnutý') + '</button><button class="btn ghost" id="m-leave">🚪 Odísť do menu</button><button class="btn ghost" id="sclose">Zavrieť</button></div>';
    }
    el.innerHTML = '<div class="sh-in">' + h + '</div>';
    el.hidden = false;
    el.classList.toggle('peek', sh.kind === 'play' && !!sh.targets && sh.o.ok);
    const on = (id, f) => { const b = el.querySelector(id); if (b) b.onclick = f; };
    on('#sclose', closeSheet);
    on('#playgo', () => doPlay());
    el.querySelectorAll('[data-t]').forEach(b => b.onclick = () => chooseTarget(b.getAttribute('data-t')));
    el.querySelectorAll('[data-tc]').forEach(b => b.onclick = () => { const v = b.getAttribute('data-tc'); if (sh.needExtra && sh.extra == null) { toast('Najprv vyber kartu na odhodenie.'); return; } doPlay(v === 'hand' ? 'hand' : +v); });
    el.querySelectorAll('[data-ex]').forEach(b => b.onclick = () => { sh.extra = +b.getAttribute('data-ex'); if (sh.targets && sh.target && !sh.o.tcard) doPlay(); else renderSheet(); });
    el.querySelectorAll('[data-abc]').forEach(b => b.onclick = () => { const c = +b.getAttribute('data-abc'); const i = sh.cards.indexOf(c); if (i >= 0) sh.cards.splice(i, 1); else if (sh.cards.length < 2) sh.cards.push(c); renderSheet(); });
    el.querySelectorAll('[data-buy]').forEach(b => b.onclick = () => act({ a: 'buy', item: b.getAttribute('data-buy') }));
    el.querySelectorAll('[data-at]').forEach(b => b.onclick = () => { sh.target = b.getAttribute('data-at'); renderSheet(); });
    on('#abgo', async () => { const k = meP.char; const a = { a: 'ability', kind: k, cards: sh.cards.slice(), target: sh.target }; closeSheet(); await act(a); });
    el.querySelectorAll('[data-say]').forEach(b => b.onclick = () => { act({ a: 'say', text: b.getAttribute('data-say') }); closeSheet(); });
    on('#saygo', () => { const v = el.querySelector('#saytxt').value.trim(); if (v) { act({ a: 'say', text: v }); closeSheet(); } });
    on('#m-share', shareLink);
    on('#m-rules', () => openSheet({ kind: 'rules' }));
    on('#m-sound', () => { ui.sound = !ui.sound; ls('strelil_sound', ui.sound ? '1' : '0'); renderSheet(); });
    on('#m-leave', () => { if (confirm('Naozaj odísť? Kým sa nevrátiš, hrá za teba autopilot.')) leaveRoom(); });
  }
  $('#sheet').addEventListener('click', e => { if (e.target.id === 'sheet') closeSheet(); });

  function rulesHTML() {
    const cards = Object.keys(E.CARDS).map(k => { const c = E.CARDS[k]; return '<li>' + c.ic + ' <b>' + esc(c.n) + '</b>' + (c.x ? ' <span class="pill">nové</span>' : '') + ' — ' + esc(c.d) + '</li>'; }).join('');
    const chars = Object.keys(E.CHARS).map(k => { const c = E.CHARS[k]; return '<li>' + c.ic + ' <b>' + esc(c.n) + '</b> (' + c.hp + '♥)' + (c.x ? ' <span class="pill">nová</span>' : '') + ' — ' + esc(c.d) + '</li>'; }).join('');
    const evs = Object.keys(E.EVENTS).map(k => { const c = E.EVENTS[k]; return '<li>' + c.ic + ' <b>' + esc(c.n) + '</b> — ' + esc(c.d) + '</li>'; }).join('');
    const its = Object.keys(E.ITEMS).map(k => { const c = E.ITEMS[k]; return '<li>' + c.ic + ' <b>' + esc(c.n) + '</b> (🪙' + c.cost + ') — ' + esc(c.d) + '</li>'; }).join('');
    return '<h3>📜 Ako sa hrá</h3>' +
      '<p><b>Role (tajné):</b> ⭐ Šerif je známy všetkým a chce zlikvidovať banditov aj odpadlíka. 🦹 Banditi chcú zastreliť šerifa. 🐍 Odpadlík chce ostať posledný. 🔰 Pomocník (od 5 hráčov) chráni šerifa. Pri 4 hráčoch: šerif, odpadlík a 2 banditi.</p>' +
      '<p><b>Tvoj ťah:</b> 1) potiahneš 2 karty, 2) hráš koľko kariet chceš (Výstrel len 1× za ťah), 3) na konci môžeš mať v ruke najviac toľko kariet, koľko máš životov.</p>' +
      '<p><b>Vzdialenosť</b> je počet miest k hráčovi (kratšou cestou okolo stola). Výstrelom trafíš len hráča v dosahu svojej zbrane (bez zbrane dosah 1).</p>' +
      '<p><b>Ťah!</b> = otočí sa vrchná karta balíčka a rozhoduje jej znak (srdce, pika…).</p>' +
      '<p><b>Odmeny:</b> kto zastrelí banditu, ťahá 3 karty. Šerif, ktorý zastrelí pomocníka, stratí všetky karty. Pivo ťa zachráni pred smrťou automaticky.</p>' +
      '<p><b>Online:</b> kto vypadne z internetu, za toho po 45 s hrá autopilot, kým sa nevráti. Boty riadi prvý pripojený hráč.</p>' +
      '<details><summary>🃏 Karty</summary><ul class="infol">' + cards + '</ul></details>' +
      '<details><summary>🤠 Postavy</summary><ul class="infol">' + chars + '</ul></details>' +
      '<details><summary>🕛 Udalosti (Pravé poludnie)</summary><ul class="infol">' + evs + '</ul></details>' +
      '<details><summary>⛏️ Obchod (Zlatá horúčka)</summary><ul class="infol">' + its + '</ul></details>' +
      '<details><summary>👻 Duchovia</summary><p>Kto padne, vráti sa na 2 svoje ťahy ako duch: ťahá 2 karty a môže hrať karty na hocikoho (vzdialenosť 1), ale nedá sa trafiť ani liečiť. Víťazstvo sa počíta len zo živých.</p></details>' +
      '<p class="muted">si/strelil je fanúšikovská hra inšpirovaná klasickými westernovými kartovými hrami so skrytými rolami. Postavy, názvy aj grafika sú vlastné.</p>' +
      '<button class="btn ghost" id="sclose">Zavrieť</button>';
  }

  // ---------- štart ----------
  window.addEventListener('hashchange', () => { const c = location.hash.slice(1); if (c && c.toUpperCase() !== code) enterRoom(c); });
  const startCode = location.hash.slice(1);
  if (startCode && /^[A-Za-z]{4}$/.test(startCode)) {
    if (!me.name) { render(); const ci = $('#code'); if (ci) ci.value = startCode.toUpperCase(); toast('Napíš meno a ťukni Pripojiť.'); }
    else enterRoom(startCode);
  } else render();
  if ('serviceWorker' in navigator) { /* bez offline cache — hra potrebuje internet */ }
})();
