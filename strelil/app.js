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
  const ui = { sheet: null, sel: null, role: false, sound: ls('strelil_sound') !== '0', lastFx: 0, lastChat: 0, lastLog: 0, multi: [], firstState: true, logOpen: false, play: null, resp: null, pickSel: null };

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
      const delay = p.bot ? (h && h.pid === pid ? 1500 : (S.stage === 'play' && S.turnPid === pid && !h ? 2100 : 1500)) : 900;
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
    { const meP = E.P(S, me.id);
      if (ui.play) {
        if (!meP || meP.hand.indexOf(ui.play.card) < 0 || S.turnPid !== me.id || S.q.length || S.phase !== 'play') ui.play = null;
        else { const o = E.cardOptions(S, me.id, ui.play.card); ui.play.o = o; if (ui.play.target && (!o.ok || !o.targets || o.targets.indexOf(ui.play.target) < 0)) ui.play.target = null; if (ui.play.extra != null && meP.hand.indexOf(ui.play.extra) < 0) ui.play.extra = null; }
      }
      const hh = S.q && S.q[0];
      if (!hh || hh.pid !== me.id) { ui.resp = null; ui.pickSel = null; }
      else { if (ui.resp != null && (!meP || meP.hand.indexOf(ui.resp) < 0)) ui.resp = null; if (ui.pickSel != null && (!hh.cards || hh.cards.indexOf(ui.pickSel) < 0)) ui.pickSel = null; }
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
      '<div class="btnrow2"><button class="btn" id="gal">🃏 Karty a postavy</button><button class="btn" id="rules">📜 Ako sa hrá</button></div>' +
      '<p class="foot muted">Hra beží cez link, nič sa neinštaluje. Boty doplnia miesta, ak vás je menej.</p>' +
      '</div>';
  }
  function bindHome() {
    $('#create').onclick = createRoom;
    $('#join').onclick = () => { const n = $('#nm').value.trim(); if (!n) { toast('Napíš svoje meno.'); return; } setName(n); enterRoom($('#code').value); };
    $('#code').addEventListener('keydown', e => { if (e.key === 'Enter') $('#join').click(); });
    $('#rules').onclick = () => openSheet({ kind: 'rules' });
    $('#gal').onclick = () => openGallery('karty');
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
    let h = '<div class="lobby"><div class="topbar"><button class="btn ghost sm" id="home">←</button><div class="logo sm">si/<em>strelil</em></div><span><button class="btn ghost sm" id="gal">🃏</button><button class="btn ghost sm" id="rules">📜</button></span></div>';
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
    $('#home').onclick = leaveRoom; $('#share').onclick = shareLink; $('#rules').onclick = () => openSheet({ kind: 'rules' }); $('#gal').onclick = () => openGallery('karty');
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
    h += '<div class="rolecard r-' + p.role + '"><div class="muted">Tvoja tajná rola</div><div class="rc-ic">' + r.ic + '</div><div class="rc-n">' + esc(r.n) + '</div><div class="rc-o">' + esc(r.o) + '</div><p>' + esc(r.d) + '</p></div>';
    if (!p.char) {
      h += '<h3>Vyber si postavu</h3><div class="charpick">';
      p.charOpts.forEach(c => { const ch = E.CHARS[c]; h += '<button class="charopt' + (ui.charSel === c ? ' sel' : '') + '" data-char="' + c + '"><div class="co-ic">' + ch.ic + '</div><div class="co-n">' + esc(ch.n) + '</div><div class="co-o">' + esc(ch.o) + '</div><div class="co-hp">' + hearts(ch.hp + (p.role === 'serif' ? 1 : 0), ch.hp + (p.role === 'serif' ? 1 : 0)) + '</div><div class="co-d">' + esc(ch.d) + '</div></button>'; });
      h += '</div><button class="btn big red" id="chargo" ' + (ui.charSel && p.charOpts.indexOf(ui.charSel) >= 0 ? '' : 'disabled') + '>' + (ui.charSel && p.charOpts.indexOf(ui.charSel) >= 0 ? '✔ Hrať za: ' + esc(E.CHARS[ui.charSel].n) : 'Ťukni na postavu') + '</button>';
    } else h += '<p class="center-t">Vybral si <b>' + esc(E.CHARS[p.char].n) + '</b>. Čaká sa na ostatných…</p>';
    const waiting = S.players.filter(q => !q.char).map(q => q.name);
    if (waiting.length) h += '<p class="center-t muted">Ešte vyberajú: ' + esc(waiting.join(', ')) + '</p>';
    return h + '</div>';
  }
  function bindChars() {
    document.querySelectorAll('[data-char]').forEach(b => b.onclick = () => { ui.charSel = b.getAttribute('data-char'); render(); });
    const go = $('#chargo'); if (go) go.onclick = () => { const c = ui.charSel; ui.charSel = null; if (c) act({ a: 'char', char: c }); };
  }

  function hearts(hp, max) { let s = ''; for (let i = 0; i < max; i++) s += i < hp ? '<i class="hf">♥</i>' : '<i class="he">♥</i>'; return '<span class="hearts">' + s + '</span>'; }
  function miniCard(cid, opts) {
    const c = S.cards[cid], d = E.CARDS[c.t];
    return '<span class="chip k-' + d.c + '" ' + (opts || '') + '>' + d.ic + ' ' + esc(d.n) + (d.r ? ' <small>' + d.r + '</small>' : '') + '</span>';
  }
  function cardHTML(cid, cls, attrs) {
    const c = S.cards[cid], d = E.CARDS[c.t];
    const red = c.s === 'h' || c.s === 'd';
    return '<button class="card k-' + d.c + ' ' + (cls || '') + '" ' + (attrs || '') + '><span class="c-rk' + (red ? ' red' : '') + '">' + (E.RANK_N[c.r] || c.r) + E.SUIT_IC[c.s] + '</span>' + (d.r ? '<span class="c-range">⌖' + d.r + '</span>' : '') + '<span class="c-ic">' + d.ic + '</span><span class="c-nm">' + esc(d.n) + '</span><span class="c-ds">' + esc(d.s) + '</span>' + (d.o ? '<span class="c-or">' + esc(d.o) + '</span>' : '') + '</button>';
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
    const targeting = ui.play && ui.play.o.ok && ui.play.o.targets ? ui.play.o.targets : null;
    let out = '<div class="game' + (myTurn ? ' myturn' : '') + '">';
    // horná lišta
    const ev = S.event && (S.opts.events || S.event === 'poludnie') ? E.EVENTS[S.event] : null;
    out += '<div class="gbar"><button class="btn ghost sm" id="menu">☰</button><div class="gb-mid"><span class="gb-code">' + esc(code) + '</span> · kolo ' + S.round + '</div>' +
      (ev ? '<button class="evchip" id="evchip">' + ev.ic + ' ' + esc(ev.n) + '</button>' : '<span></span>') + '<span class="gb-r"><button class="btn ghost sm" id="galbtn">🃏</button><button class="btn ghost sm" id="logbtn">📜</button></span></div>';
    // súperi
    out += '<div class="seats n' + others.length + '">';
    others.forEach(p => {
      const dist = meP && meP.alive && p.alive ? E.distance(S, meP, p) : null;
      const inRange = targeting && targeting.indexOf(p.id) >= 0;
      const roleKnown = p.role === 'serif' || !p.alive || S.phase === 'over';
      const cls = ['seat', S.turnPid === p.id ? 'turn' : '', !p.alive ? (p.ghost && p.ghostTurns > 0 ? 'ghost' : 'dead') : '', inRange ? 'tgt' : '', inRange && ui.play.target === p.id ? 'chosen' : '', targeting && !inRange ? 'dim' : '', h && h.pid === p.id ? 'acting' : ''].join(' ');
      const ch = p.char ? E.CHARS[p.char] : null;
      out += '<button class="' + cls + '" data-seat="' + esc(p.id) + '">' +
        '<div class="s-top"><span class="s-av">' + (ch ? ch.ic : '🤠') + '</span><span class="s-nm">' + esc(p.name) + '</span><span class="dot" data-online="' + esc(p.id) + '"></span></div>' +
        (ch ? '<div class="s-char">' + esc(ch.n) + ' <i>' + esc(ch.o) + '</i></div>' : '') + '<div class="s-role">' + (roleKnown ? roleBadge(p.role) : '<span class="role r-unk">❓ rola</span>') + '</div>' +
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
        '<div class="me-l"><button class="me-char" id="mychar"><span class="s-av">' + (ch ? ch.ic : '') + '</span><span><b>' + esc(meP.name) + '</b><small>' + (ch ? esc(ch.n) + ' · <i>' + esc(ch.o) + '</i>' : '') + '</small></span></button>' +
        '<button class="me-role r-' + meP.role + (ui.role ? ' open' : '') + '" id="myrole">' + (ui.role || meP.role === 'serif' || !meP.alive ? r.ic + ' ' + esc(r.n) : '🔒 rola') + '</button></div>' +
        '<div class="me-r">' + (meP.alive ? hearts(meP.hp, meP.maxHp) : (meP.ghost && meP.ghostTurns > 0 ? '<span class="ghosttxt">👻 si duch · ' + meP.ghostTurns + ' ťahy</span>' : '<span class="ghosttxt">☠️ vypadol si</span>')) +
        '<div class="me-meta">' + (S.opts.gold ? '<span>🪙 ' + meP.gold + '</span>' : '') + '<span>⌖ dosah ' + E.range(S, meP) + '</span></div></div>' +
        '<div class="me-tbl">' + meP.table.map(c => miniCard(c, 'data-info="' + c + '"')).join('') + meP.items.map(it => '<span class="chip k-i" data-item="' + it + '">' + E.ITEMS[it].ic + ' ' + esc(E.ITEMS[it].n) + '</span>').join('') + '</div>' +
        '</div>';
      // výzva (odpoveď / výber)
      out += ui.play ? playPanelHTML(meP) : promptHTML(meP, h);
      // ruka
      const sel = ui.multi;
      const respond = h && h.pid === me.id && (h.k === 'shot' || h.k === 'prepad' || h.k === 'suboj') ? E.responseCards(S, meP, h) : null;
      out += '<div class="hand" id="hand">' + (meP.hand.length ? '' : '<div class="muted emptyhand">Prázdna ruka</div>') + meP.hand.map(c => {
        let cls = '';
        if (respond) cls = (respond.indexOf(c) >= 0 ? 'can' : 'off') + (ui.resp === c ? ' sel' : '');
        else if (h && h.pid === me.id && h.k === 'odhod') cls = sel.indexOf(c) >= 0 ? 'picked' : '';
        else if (ui.sheet && ui.sheet.kind === 'ability') cls = (ui.sheet.cards || []).indexOf(c) >= 0 ? 'picked' : '';
        else if (myTurn) cls = (E.cardOptions(S, me.id, c).ok ? 'can' : 'off') + (ui.play && ui.play.card === c ? ' sel' : '');
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
      body = respHint('Ťukni na Vedľa! v ruke a potvrď (alebo ju potiahni hore). Inak zober zásah.') + '<div class="btnrow">' + respBtn() + '<button class="btn' + (ui.resp != null ? '' : ' red') + '" id="pass">Zobrať zásah (−' + (h.dmg || 1) + ')</button></div>';
    } else if (h.k === 'prepad') {
      t = '🏹 Prepad od ' + nmP(h.src) + '!'; body = respHint('Ťukni na Výstrel v ruke a potvrď, alebo stratíš život.') + '<div class="btnrow">' + respBtn() + '<button class="btn' + (ui.resp != null ? '' : ' red') + '" id="pass">Stratiť život</button></div>';
    } else if (h.k === 'suboj') {
      t = '🤺 Súboj s ' + nmP(h.other) + '!'; body = respHint('Ťukni na Výstrel v ruke a potvrď, alebo súboj prehráš.') + '<div class="btnrow">' + respBtn() + '<button class="btn' + (ui.resp != null ? '' : ' red') + '" id="pass">Vzdať súboj (−1)</button></div>';
    } else if (h.k === 'jarmok') {
      t = '🛒 Jarmok — vyber si jednu kartu'; body = '<div class="choice">' + h.cards.map(c => cardHTML(c, 'can' + (ui.pickSel === c ? ' sel' : ''), 'data-pick="' + c + '"')).join('') + '</div>' + pickBtn('Vziať ');
    } else if (h.k === 'odhod') {
      t = '🗑️ Máš veľa kariet — odhoď ' + h.n; body = '<p class="muted">Ťukni na ' + h.n + ' ' + (h.n === 1 ? 'kartu' : 'karty') + ' v ruke. Vybraté: ' + ui.multi.length + '/' + h.n + '</p><button class="btn red" id="discardgo" ' + (ui.multi.length === h.n ? '' : 'disabled') + '>Odhodiť</button>';
    } else if (h.k === 'kit') {
      t = '🦊 Vyber kartu, ktorú VRÁTIŠ na balíček'; body = '<div class="choice">' + h.cards.map(c => cardHTML(c, 'can' + (ui.pickSel === c ? ' sel' : ''), 'data-pick="' + c + '"')).join('') + '</div>' + pickBtn('Vrátiť ');
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

  const cname = cid => E.CARDS[S.cards[cid].t].n;
  function respHint(t) { return '<p class="muted">' + esc(t) + '</p>'; }
  function respBtn() { return ui.resp != null ? '<button class="btn red" id="respgo">✔ Použiť ' + esc(cname(ui.resp)) + '</button>' : ''; }
  function pickBtn(verb) { return '<button class="btn red" id="pickgo" ' + (ui.pickSel != null ? '' : 'disabled') + '>' + (ui.pickSel != null ? '✔ ' + verb + esc(cname(ui.pickSel)) : 'Najprv ťukni na kartu') + '</button>'; }

  // panel pri hraní karty: výber → (cieľ / karta / odhodenie) → potvrdenie
  function playReady(pl) {
    const o = pl.o;
    if (!o.ok) return false;
    if (o.extra && pl.extra == null) return false;
    if (o.targets && !pl.target) return false;
    if (o.tcard && pl.tcard === undefined) return false;
    return true;
  }
  function playPanelHTML(meP) {
    const pl = ui.play, o = pl.o, c = S.cards[pl.card], d = E.CARDS[c.t];
    const shown = o.as ? E.CARDS[o.as] : d;
    let h = '<div class="prompt playp"><div class="pp-head">' + cardHTML(pl.card, 'mini', 'tabindex="-1"') + '<div><div class="pr-t">' + d.ic + ' ' + esc(d.n) + (o.as ? ' <small>(ako ' + esc(E.CARDS[o.as].n) + ')</small>' : '') + '</div><p class="muted">' + esc(shown.d) + '</p></div></div>';
    if (!o.ok) return h + '<p class="warn">' + esc(o.why) + '</p><button class="btn" id="playcancel">Zrušiť</button></div>';
    let n = 1;
    if (o.extra) {
      h += '<p class="step' + (pl.extra != null ? ' done' : '') + '">' + (n++) + '. ' + (pl.extra != null ? '✔ Odhodíš ' + esc(cname(pl.extra)) : 'Vyber ďalšiu kartu na odhodenie:') + '</p><div class="choice sm">' + meP.hand.filter(x => x !== pl.card).map(x => cardHTML(x, pl.extra === x ? 'sel' : '', 'data-ex="' + x + '"')).join('') + '</div>';
    }
    if (o.targets) {
      h += '<p class="step' + (pl.target ? ' done' : '') + '">' + (n++) + '. ' + (pl.target ? '✔ Cieľ: ' + esc(E.P(S, pl.target).name) : 'Vyber cieľ — ťukni na hráča hore, alebo naňho kartu potiahni:') + '</p><div class="btnrow">' +
        o.targets.map(id => { const q = E.P(S, id); return '<button class="btn sm' + (pl.target === id ? ' red' : '') + '" data-t="' + esc(id) + '">' + esc(q.name) + ' <small>↔' + E.distance(S, meP, q) + ' ♥' + q.hp + '</small></button>'; }).join('') + '</div>';
      if (o.tcard && pl.target) {
        const q = E.P(S, pl.target);
        h += '<p class="step' + (pl.tcard !== undefined ? ' done' : '') + '">' + (n++) + '. Ktorú kartu?</p><div class="btnrow">' + (q.hand.length ? '<button class="btn sm' + (pl.tcard === 'hand' ? ' red' : '') + '" data-tc="hand">🂠 Náhodnú z ruky (' + q.hand.length + ')</button>' : '') + q.table.map(tc => '<button class="btn sm' + (pl.tcard === tc ? ' red' : '') + '" data-tc="' + tc + '">' + E.CARDS[S.cards[tc].t].ic + ' ' + esc(cname(tc)) + '</button>').join('') + '</div>';
      }
    }
    const ready = playReady(pl);
    h += '<div class="btnrow pp-go"><button class="btn red big2" id="playgo" ' + (ready ? '' : 'disabled') + '>' + (ready ? '✔ Potvrdiť: ' + esc(shown.n) + (pl.target ? ' → ' + esc(E.P(S, pl.target).name) : '') : 'Potvrdiť') + '</button><button class="btn" id="playcancel">Zrušiť</button></div>';
    return h + '</div>';
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
    on('#galbtn', () => openGallery('karty'));
    on('#evchip', () => { const ev = E.EVENTS[S.event]; openSheet({ kind: 'info', title: ev.ic + ' ' + ev.n, orig: ev.o, text: ev.d }); });
    on('#endturn', () => armed('#endturn', 'Naozaj ukončiť ťah?', () => act({ a: 'end' }), () => { const mp = E.P(S, me.id); return mp && mp.hand.some(c => E.cardOptions(S, me.id, c).ok); }));
    on('#shop', () => openSheet({ kind: 'shop' }));
    on('#abil', () => openSheet({ kind: 'ability', cards: [] }));
    on('#chat', () => openSheet({ kind: 'chat' }));
    on('#rematch', () => act({ a: 'rematch' }));
    on('#ovhome', leaveRoom);
    on('#ovlog', () => openSheet({ kind: 'log' }));
    on('#myrole', () => { ui.role = !ui.role; render(); });
    on('#mychar', () => openSheet({ kind: 'player', pid: me.id }));
    on('#pass', () => armed('#pass', 'Naozaj? Máš sa čím brániť', () => { ui.resp = null; act({ a: 'respond', pass: true }); }, () => { const mp = E.P(S, me.id); const h = S.q[0]; return mp && h && E.responseCards(S, mp, h).length > 0; }));
    on('#respgo', () => { const c = ui.resp; ui.resp = null; if (c != null) act({ a: 'respond', card: c }); });
    on('#pickgo', () => { const c = ui.pickSel; ui.pickSel = null; if (c != null) act({ a: 'pick', card: c }); });
    on('#playgo', () => doPlay());
    on('#playcancel', () => { ui.play = null; render(); });
    document.querySelectorAll('.playp [data-t]').forEach(b => b.onclick = () => chooseTarget(b.getAttribute('data-t')));
    document.querySelectorAll('.playp [data-tc]').forEach(b => b.onclick = () => { const v = b.getAttribute('data-tc'); ui.play.tcard = v === 'hand' ? 'hand' : +v; render(); });
    document.querySelectorAll('.playp [data-ex]').forEach(b => b.onclick = () => { ui.play.extra = +b.getAttribute('data-ex'); render(); });
    on('#discardgo', () => { const h = S.q[0]; if (h && ui.multi.length === h.n) act({ a: 'pick', cards: ui.multi.slice() }).then(() => { ui.multi = []; }); });
    document.querySelectorAll('[data-pick]').forEach(b => b.onclick = () => { const c = +b.getAttribute('data-pick'); ui.pickSel = ui.pickSel === c ? null : c; render(); });
    document.querySelectorAll('[data-from]').forEach(b => b.onclick = () => act({ a: 'pick', from: b.getAttribute('data-from') }));
    document.querySelectorAll('[data-info]').forEach(b => b.onclick = e => { e.stopPropagation(); cardInfo(+b.getAttribute('data-info')); });
    document.querySelectorAll('[data-item]').forEach(b => b.onclick = e => { e.stopPropagation(); const it = E.ITEMS[b.getAttribute('data-item')]; openSheet({ kind: 'info', title: it.ic + ' ' + it.n, text: it.d }); });
    document.querySelectorAll('.seat').forEach(b => b.onclick = () => seatClick(b.getAttribute('data-seat')));
    document.querySelectorAll('.hand [data-card]').forEach(b => b.onclick = () => handClick(+b.getAttribute('data-card')));
    document.querySelectorAll('.disc .card').forEach(b => b.onclick = () => { const t = S.discard[S.discard.length - 1]; if (t != null) cardInfo(t); });
    refreshOnline();
  }

  // dvojité potvrdenie: prvé ťuknutie len „nabije“ tlačidlo
  let armedSel = null, armedTimer = null;
  function armed(sel, txt, fn, needed) {
    if (needed && !needed()) { fn(); return; }
    if (armedSel === sel) { armedSel = null; clearTimeout(armedTimer); fn(); return; }
    armedSel = sel; const b = $(sel); if (b) { b.dataset.orig = b.textContent; b.textContent = txt; b.classList.add('armed'); }
    clearTimeout(armedTimer); armedTimer = setTimeout(() => { armedSel = null; const bb = $(sel); if (bb && bb.dataset.orig) { bb.textContent = bb.dataset.orig; bb.classList.remove('armed'); } }, 3000);
  }
  function seatClick(pid) {
    if (ui.play && ui.play.o.ok && ui.play.o.targets && ui.play.o.targets.indexOf(pid) >= 0) { chooseTarget(pid); return; }
    if (ui.sheet && ui.sheet.kind === 'ability' && ui.sheet.targets && ui.sheet.targets.indexOf(pid) >= 0) { ui.sheet.target = pid; renderSheet(); return; }
    openSheet({ kind: 'player', pid });
  }

  function handClick(cid) {
    const meP = E.P(S, me.id); const h = S.q[0];
    if (h && h.pid === me.id) {
      if (h.k === 'shot' || h.k === 'prepad' || h.k === 'suboj') {
        if (E.responseCards(S, meP, h).indexOf(cid) >= 0) { ui.resp = ui.resp === cid ? null : cid; render(); } else cardInfo(cid);
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
    if (ui.play && ui.play.card === cid) { ui.play = null; render(); return; }
    if (S.turnPid !== me.id || S.stage !== 'play' || S.q.length || S.phase !== 'play') { cardInfo(cid); return; }
    openPlay(cid);
  }

  function cardInfo(cid) { zoomCard(cid); return; const c = S.cards[cid], d = E.CARDS[c.t]; openSheet({ kind: 'info', title: d.ic + ' ' + d.n, orig: d.o, text: d.d + (d.r ? ' (dosah ' + d.r + ')' : ''), card: cid }); }

  function openPlay(cid, target) {
    const o = E.cardOptions(S, me.id, cid);
    ui.play = { card: cid, o, target: null, tcard: undefined, extra: null };
    if (target && o.ok && o.targets && o.targets.indexOf(target) >= 0) ui.play.target = target;
    render();
  }
  function chooseTarget(pid) {
    const pl = ui.play; if (!pl) return;
    pl.target = pl.target === pid ? null : pid; pl.tcard = undefined;
    render();
  }
  async function doPlay() {
    const pl = ui.play; if (!pl || !playReady(pl)) return;
    const a = { a: 'play', card: pl.card };
    if (pl.target) a.target = pl.target;
    if (pl.tcard !== undefined) a.tcard = pl.tcard;
    if (pl.extra != null) a.extra = pl.extra;
    ui.play = null;
    await act(a);
  }

  // ---------- veľké karty: detail (podržanie) a kartotéka ----------
  const KIND_TXT = { b: 'Hnedá — zahráš a odhodíš', m: 'Modrá — leží pred tebou', w: 'Zbraň — leží pred tebou' };
  function deckCount(k) { return (E.DECK_BASE[k] || 0) + (E.DECK_EXTRA[k] || 0); }
  function bigCardDef(k, cid) {
    const d = E.CARDS[k]; const c = cid != null && S ? S.cards[cid] : null;
    const red = c && (c.s === 'h' || c.s === 'd');
    return '<div class="bc bc-' + d.c + '">' +
      '<div class="bc-band">' + esc(KIND_TXT[d.c]) + '</div>' +
      (c ? '<div class="bc-rk' + (red ? ' red' : '') + '">' + (E.RANK_N[c.r] || c.r) + E.SUIT_IC[c.s] + '</div>' : '') +
      (d.r ? '<div class="bc-range">⌖ ' + d.r + '</div>' : '') +
      '<div class="bc-ic">' + d.ic + '</div><div class="bc-nm">' + esc(d.n) + '</div>' + (d.o ? '<div class="bc-or">' + esc(d.o) + '</div>' : '') +
      '<div class="bc-hr"></div><div class="bc-d">' + esc(d.d) + '</div>' +
      '<div class="bc-ft">' + (d.x ? '<span class="pill">nová karta</span> ' : '') + 'v balíčku ' + deckCount(k) + '×' + (c ? ' · Ťah! ' + (E.RANK_N[c.r] || c.r) + E.SUIT_IC[c.s] : '') + '</div></div>';
  }
  function bigChar(k, extraHp) {
    const d = E.CHARS[k]; const hp = d.hp + (extraHp || 0);
    return '<div class="bc bc-ch"><div class="bc-band">Postava' + (d.x ? ' · nová' : '') + '</div><div class="bc-ic">' + d.ic + '</div><div class="bc-nm">' + esc(d.n) + '</div><div class="bc-or">' + esc(d.o) + '</div><div class="bc-hp">' + hearts(hp, hp) + '</div><div class="bc-hr"></div><div class="bc-d">' + esc(d.d) + '</div></div>';
  }
  function bigRole(k) {
    const d = E.ROLES[k]; const cnt = { serif: '1', pomocnik: '0–2', bandita: '2–3', odpadlik: '1' }[k];
    return '<div class="bc bc-role r-' + k + '"><div class="bc-band">Tajná rola</div><div class="bc-ic">' + d.ic + '</div><div class="bc-nm">' + esc(d.n) + '</div><div class="bc-or">' + esc(d.o) + '</div><div class="bc-hr"></div><div class="bc-d">' + esc(d.d) + '</div><div class="bc-ft">v hre: ' + cnt + '× · pri 4 hráčoch: ' + (k === 'serif' || k === 'odpadlik' ? '1×' : k === 'bandita' ? '2×' : 'nie je') + '</div></div>';
  }
  function bigEvent(k) { const d = E.EVENTS[k]; return '<div class="bc bc-ev"><div class="bc-band">Udalosť kola</div><div class="bc-ic">' + d.ic + '</div><div class="bc-nm">' + esc(d.n) + '</div>' + (d.o ? '<div class="bc-or">' + esc(d.o) + '</div>' : '') + '<div class="bc-hr"></div><div class="bc-d">' + esc(d.d) + '</div></div>'; }
  function bigItem(k) { const d = E.ITEMS[k]; return '<div class="bc bc-it"><div class="bc-band">Obchod · 🪙 ' + d.cost + (d.once ? ' · jednorazové' : '') + '</div><div class="bc-ic">' + d.ic + '</div><div class="bc-nm">' + esc(d.n) + '</div><div class="bc-hr"></div><div class="bc-d">' + esc(d.d) + '</div></div>'; }

  function zoom(html) {
    let z = $('#zoom');
    if (!z) { z = document.createElement('div'); z.id = 'zoom'; z.className = 'zoom'; document.body.appendChild(z); z.addEventListener('click', () => { z.classList.remove('on'); setTimeout(() => { z.hidden = true; }, 180); }); }
    z.innerHTML = '<div class="zoom-in">' + html + '<div class="zoom-hint">ťukni kamkoľvek pre zavretie</div></div>';
    z.hidden = false; requestAnimationFrame(() => z.classList.add('on'));
  }
  function zoomCard(cid) { zoom(bigCardDef(S.cards[cid].t, cid)); }

  const GAL_TABS = [['karty', '🃏 Karty'], ['postavy', '🤠 Postavy'], ['role', '⭐ Role'], ['udalosti', '🕛 Udalosti'], ['obchod', '⛏️ Obchod']];
  function galleryItems(tab) {
    if (tab === 'karty') return Object.keys(E.CARDS).sort((a, b) => (E.CARDS[a].x || 0) - (E.CARDS[b].x || 0)).map(k => bigCardDef(k));
    if (tab === 'postavy') return Object.keys(E.CHARS).map(k => bigChar(k));
    if (tab === 'role') return Object.keys(E.ROLES).map(k => bigRole(k));
    if (tab === 'udalosti') return Object.keys(E.EVENTS).map(k => bigEvent(k));
    return Object.keys(E.ITEMS).map(k => bigItem(k));
  }
  function openGallery(tab) {
    tab = tab || 'karty';
    let g = $('#gallery');
    if (!g) { g = document.createElement('div'); g.id = 'gallery'; g.className = 'gallery'; document.body.appendChild(g); }
    const items = galleryItems(tab);
    g.innerHTML = '<div class="gal-top"><div class="gal-tabs">' + GAL_TABS.map(t => '<button class="gtab' + (t[0] === tab ? ' on' : '') + '" data-gtab="' + t[0] + '">' + t[1] + '</button>').join('') + '</div><button class="btn ghost sm gal-x" id="galx">✕</button></div>' +
      '<div class="gal-track" id="galtrack">' + items.map(h => '<div class="gal-slide">' + h + '</div>').join('') + '</div>' +
      '<div class="gal-nav"><button class="btn sm" id="galprev">‹</button><span id="galcount">1 / ' + items.length + '</span><button class="btn sm" id="galnext">›</button></div>' +
      '<div class="gal-hint">Listuj prstom do strán · v zátvorke a kurzívou je pôvodný názov z BANG!</div>';
    g.hidden = false;
    const tr = $('#galtrack');
    const upd = () => { const w = tr.firstChild ? tr.firstChild.getBoundingClientRect().width + 14 : 1; const i = Math.round(tr.scrollLeft / w); $('#galcount').textContent = (i + 1) + ' / ' + items.length; };
    tr.addEventListener('scroll', () => requestAnimationFrame(upd), { passive: true });
    const go = dir => { const w = tr.firstChild.getBoundingClientRect().width + 14; tr.scrollBy({ left: dir * w, behavior: 'smooth' }); };
    $('#galprev').onclick = () => go(-1); $('#galnext').onclick = () => go(1);
    $('#galx').onclick = () => { g.hidden = true; };
    g.querySelectorAll('[data-gtab]').forEach(b => b.onclick = () => openGallery(b.getAttribute('data-gtab')));
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
    else if (sh.kind === 'info') h = (sh.card != null ? '<div class="info-big">' + cardHTML(sh.card, 'big', 'tabindex="-1"') + '</div>' : '') + '<h3>' + esc(sh.title) + '</h3>' + (sh.orig ? '<p class="orig">V BANG!: <b>' + esc(sh.orig) + '</b></p>' : '') + '<p>' + esc(sh.text) + '</p>' + (sh.card != null ? '<p class="muted">' + esc(E.cardLabel(S, sh.card)) + '</p>' : '') + '<button class="btn ghost" id="sclose">Zavrieť</button>';
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
        (ch ? '<p><b>' + esc(ch.n) + '</b> <span class="orig">(BANG!: ' + esc(ch.o) + ')</span> (' + ch.hp + ' ♥) — ' + esc(ch.d) + '</p>' : '') +
        (p.table.length ? '<p class="muted">Pred sebou:</p><ul class="infol">' + p.table.map(c => { const d = E.CARDS[S.cards[c].t]; return '<li>' + d.ic + ' <b>' + esc(d.n) + '</b> <span class="orig">(' + esc(d.o) + ')</span> — ' + esc(d.d) + '</li>'; }).join('') + '</ul>' : '') +
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
      h = '<h3>Menu</h3><div class="col"><button class="btn" id="m-share">📨 Pozvať / zdieľať link</button><button class="btn" id="m-gal">🃏 Karty a postavy</button><button class="btn" id="m-rules">📜 Pravidlá</button><button class="btn" id="m-sound">' + (ui.sound ? '🔊 Zvuk zapnutý' : '🔇 Zvuk vypnutý') + '</button><button class="btn ghost" id="m-leave">🚪 Odísť do menu</button><button class="btn ghost" id="sclose">Zavrieť</button></div>';
    }
    el.innerHTML = '<div class="sh-in">' + h + '</div>';
    el.hidden = false;
    el.classList.remove('peek');
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
    on('#m-gal', () => { closeSheet(); openGallery('karty'); });
    on('#m-sound', () => { ui.sound = !ui.sound; ls('strelil_sound', ui.sound ? '1' : '0'); renderSheet(); });
    on('#m-leave', () => { if (confirm('Naozaj odísť? Kým sa nevrátiš, hrá za teba autopilot.')) leaveRoom(); });
  }
  $('#sheet').addEventListener('click', e => { if (e.target.id === 'sheet') closeSheet(); });

  function rulesHTML() {
    const cards = Object.keys(E.CARDS).map(k => { const c = E.CARDS[k]; return '<li>' + c.ic + ' <b>' + esc(c.n) + '</b> <span class="orig">(' + esc(c.o) + ')</span>' + (c.x ? ' <span class="pill">nové</span>' : '') + ' — ' + esc(c.d) + '</li>'; }).join('');
    const chars = Object.keys(E.CHARS).map(k => { const c = E.CHARS[k]; return '<li>' + c.ic + ' <b>' + esc(c.n) + '</b> <span class="orig">(' + esc(c.o) + ')</span> (' + c.hp + '♥)' + (c.x ? ' <span class="pill">nová</span>' : '') + ' — ' + esc(c.d) + '</li>'; }).join('');
    const evs = Object.keys(E.EVENTS).map(k => { const c = E.EVENTS[k]; return '<li>' + c.ic + ' <b>' + esc(c.n) + '</b>' + (c.o ? ' <span class="orig">(' + esc(c.o) + ')</span>' : '') + ' — ' + esc(c.d) + '</li>'; }).join('');
    const its = Object.keys(E.ITEMS).map(k => { const c = E.ITEMS[k]; return '<li>' + c.ic + ' <b>' + esc(c.n) + '</b> (🪙' + c.cost + ') — ' + esc(c.d) + '</li>'; }).join('');
    return '<h3>📜 Ako sa hrá</h3>' +
      '<p class="muted">V zátvorke je vždy pôvodný názov z BANG!, nech sa vyznáte.</p>' +
      '<p><b>Role (tajné):</b> ⭐ Šerif (Sheriff) je známy všetkým a chce zlikvidovať banditov aj odpadlíka. 🦹 Banditi (Outlaws) chcú zastreliť šerifa. 🐍 Odpadlík (Renegade) chce ostať posledný. 🔰 Pomocník (Deputy, od 5 hráčov) chráni šerifa. Pri 4 hráčoch: šerif, odpadlík a 2 banditi.</p>' +
      '<p><b>Tvoj ťah:</b> 1) potiahneš 2 karty, 2) hráš koľko kariet chceš (Výstrel len 1× za ťah), 3) na konci môžeš mať v ruke najviac toľko kariet, koľko máš životov.</p>' +
      '<p><b>Vzdialenosť</b> je počet miest k hráčovi (kratšou cestou okolo stola). Výstrelom trafíš len hráča v dosahu svojej zbrane (bez zbrane dosah 1).</p>' +
      '<p><b>Ťah!</b> = otočí sa vrchná karta balíčka a rozhoduje jej znak (srdce, pika…).</p>' +
      '<p><b>Odmeny:</b> kto zastrelí banditu, ťahá 3 karty. Šerif, ktorý zastrelí pomocníka, stratí všetky karty. Pivo ťa zachráni pred smrťou automaticky.</p>' +
      '<p><b>Online:</b> kto vypadne z internetu, za toho po 45 s hrá autopilot, kým sa nevráti. Boty riadi prvý pripojený hráč.</p>' +
      '<details><summary>🃏 Karty</summary><ul class="infol">' + cards + '</ul></details>' +
      '<details><summary>🤠 Postavy</summary><ul class="infol">' + chars + '</ul></details>' +
      '<details><summary>🕛 Udalosti (Pravé poludnie)</summary><ul class="infol">' + evs + '</ul></details>' +
      '<details><summary>⛏️ Obchod (Zlatá horúčka)</summary><ul class="infol">' + its + '</ul></details>' +
      '<details><summary>🎮 Ovládanie</summary><p>Ťukni na kartu → vyber cieľ → <b>Potvrdiť</b>. Alebo kartu potiahni prstom hore priamo na hráča (karty bez cieľa stačí potiahnuť hore na stôl). Keď podržíš prst na karte, ukáže sa jej detail.</p></details>' +
      '<details><summary>👻 Duchovia</summary><p>Kto padne, vráti sa na 2 svoje ťahy ako duch: ťahá 2 karty a môže hrať karty na hocikoho (vzdialenosť 1), ale nedá sa trafiť ani liečiť. Víťazstvo sa počíta len zo živých.</p></details>' +
      '<p class="muted">si/strelil je fanúšikovská hra inšpirovaná klasickými westernovými kartovými hrami so skrytými rolami. Pôvodné názvy z BANG! (dV Giochi) sú uvedené len pre orientáciu, grafika je vlastná.</p>' +
      '<button class="btn ghost" id="sclose">Zavrieť</button>';
  }

  // ---------- podržanie prsta = detail karty, potiahnutie = zahranie ----------
  const LP_MS = 450;
  let press = null, suppressClick = false;
  function cardIdOf(el) {
    const a = ['data-card', 'data-pick', 'data-ex', 'data-info', 'data-abc'];
    for (const k of a) if (el.hasAttribute(k)) return +el.getAttribute(k);
    if (el.closest('.disc')) return S && S.discard.length ? S.discard[S.discard.length - 1] : null;
    if (el.closest('.pp-head') && ui.play) return ui.play.card;
    return null;
  }
  function dragKind(cid) {
    // čo sa stane, keď kartu z ruky potiahneš: 'play' / 'respond' / null
    if (!S || S.phase !== 'play') return null;
    const meP = E.P(S, me.id); if (!meP || meP.hand.indexOf(cid) < 0) return null;
    const h = S.q[0];
    if (h && h.pid === me.id && (h.k === 'shot' || h.k === 'prepad' || h.k === 'suboj')) return E.responseCards(S, meP, h).indexOf(cid) >= 0 ? 'respond' : null;
    if (!h && S.turnPid === me.id && S.stage === 'play') return E.cardOptions(S, me.id, cid).ok ? 'play' : null;
    return null;
  }
  document.addEventListener('pointerdown', e => {
    if (e.button && e.button !== 0) return;
    if (!S) return;
    const el = e.target.closest('[data-card],[data-pick],[data-ex],[data-info],[data-abc],.disc .card,.pp-head .card');
    if (!el) {
      const st = e.target.closest('.seat,.me-char');
      const pid = st ? (st.getAttribute('data-seat') || me.id) : null; const pp = pid ? E.P(S, pid) : null;
      if (pp && pp.char) { press = { el: st, cid: null, charOf: pp.char, extraHp: pp.role === 'serif' ? 1 : 0, x: e.clientX, y: e.clientY, id: e.pointerId, inHand: false, drag: null, lp: false }; press.timer = setTimeout(() => { if (!press) return; press.lp = true; suppressClick = true; buzz(15); zoom(bigChar(press.charOf, press.extraHp)); }, LP_MS); }
      return;
    }
    const cid = cardIdOf(el); if (cid == null || !S.cards[cid]) return;
    const inHand = !!el.closest('#hand');
    press = { el, cid, x: e.clientX, y: e.clientY, id: e.pointerId, inHand, drag: null, lp: false };
    press.timer = setTimeout(() => {
      if (!press || press.drag) return;
      press.lp = true; suppressClick = true; buzz(15);
      if (press.charOf) zoom(bigChar(press.charOf, press.extraHp)); else zoomCard(press.cid);
    }, LP_MS);
  });
  document.addEventListener('pointermove', e => {
    if (!press || e.pointerId !== press.id) return;
    const dx = e.clientX - press.x, dy = e.clientY - press.y;
    if (!press.drag) {
      if (Math.abs(dx) > 9 || Math.abs(dy) > 9) clearTimeout(press.timer);
      if (press.lp || !press.inHand) return;
      if (dy < -12 && Math.abs(dy) > Math.abs(dx)) {
        const kind = dragKind(press.cid);
        if (!kind) { press = null; return; }
        startDrag(kind);
      } else if (Math.abs(dx) > 12) { press = null; return; } // vodorovne = posúvanie ruky
    }
    if (press && press.drag) { e.preventDefault(); moveDrag(e.clientX, e.clientY); }
  }, { passive: false });
  function endPress(e) {
    if (!press || (e && e.pointerId !== press.id)) return;
    clearTimeout(press.timer);
    if (press.drag) { finishDrag(e.clientX, e.clientY); suppressClick = true; }
    press = null;
    setTimeout(() => { suppressClick = false; }, 60);
  }
  document.addEventListener('pointerup', endPress);
  document.addEventListener('pointercancel', e => { if (press && press.drag) { cancelDrag(); } if (press) clearTimeout(press.timer); press = null; });
  document.addEventListener('click', e => { if (suppressClick) { e.stopPropagation(); e.preventDefault(); suppressClick = false; } }, true);
  document.addEventListener('contextmenu', e => { if (e.target.closest('.card,.chip,.seat')) e.preventDefault(); });

  function startDrag(kind) {
    const r = press.el.getBoundingClientRect();
    const g = press.el.cloneNode(true); g.classList.add('dragghost'); g.removeAttribute('data-card');
    g.style.width = r.width + 'px'; g.style.height = r.height + 'px';
    document.body.appendChild(g);
    press.drag = { kind, g, ox: press.x - r.left, oy: press.y - r.top, over: null };
    press.el.classList.add('dragging');
    try { press.el.setPointerCapture(press.id); } catch (e) {}
    const o = kind === 'play' ? E.cardOptions(S, me.id, press.cid) : null;
    press.drag.targets = o && o.targets ? o.targets : null;
    document.body.classList.add('dragmode');
    document.querySelectorAll('.seat').forEach(s => { const id = s.getAttribute('data-seat'); if (press.drag.targets) s.classList.toggle(press.drag.targets.indexOf(id) >= 0 ? 'tgt' : 'dim', true); });
    if (!press.drag.targets) $('#app').classList.add('dropall');
    buzz(10);
    moveDrag(press.x, press.y);
  }
  function moveDrag(x, y) {
    const d = press.drag; d.g.style.transform = 'translate(' + (x - d.ox) + 'px,' + (y - d.oy) + 'px) rotate(-4deg)';
    let over = null;
    if (d.targets) { const el = document.elementFromPoint(x, y); const s = el && el.closest('.seat'); if (s && d.targets.indexOf(s.getAttribute('data-seat')) >= 0) over = s.getAttribute('data-seat'); }
    if (over !== d.over) { document.querySelectorAll('.seat.dropover').forEach(s => s.classList.remove('dropover')); if (over) { const s = seatEl(over); s && s.classList.add('dropover'); } d.over = over; }
  }
  function cleanupDrag() {
    if (press && press.drag) { press.drag.g.remove(); press.el.classList.remove('dragging'); }
    document.body.classList.remove('dragmode'); $('#app').classList.remove('dropall');
    document.querySelectorAll('.seat').forEach(s => s.classList.remove('dropover'));
  }
  function cancelDrag() { cleanupDrag(); render(); }
  function finishDrag(x, y) {
    const d = press.drag, cid = press.cid;
    cleanupDrag();
    const hand = $('#hand'); const handTop = hand ? hand.getBoundingClientRect().top : innerHeight;
    if (d.kind === 'respond') { if (y < handTop - 10) { ui.resp = null; act({ a: 'respond', card: cid }); } else render(); return; }
    if (d.targets) {
      if (!d.over) { render(); return; }
      openPlay(cid, d.over);
      if (playReady(ui.play)) doPlay(); // pustenie na hráča = potvrdenie
      return;
    }
    if (y < handTop - 10) { openPlay(cid); if (playReady(ui.play)) doPlay(); }
    else render();
  }

  // ---------- zákaz zoomovania ----------
  ['gesturestart', 'gesturechange', 'gestureend'].forEach(t => document.addEventListener(t, e => e.preventDefault(), { passive: false }));
  document.addEventListener('touchmove', e => { if (e.touches && e.touches.length > 1) e.preventDefault(); if (e.scale !== undefined && e.scale !== 1) e.preventDefault(); }, { passive: false });
  document.addEventListener('dblclick', e => e.preventDefault(), { passive: false });
  let lastTouchEnd = 0;
  document.addEventListener('touchend', e => { const now = Date.now(); if (now - lastTouchEnd < 320 && !e.target.closest('input,textarea')) { e.preventDefault(); e.target.click && e.target.closest('button') && e.target.closest('button').click(); } lastTouchEnd = now; }, { passive: false });
  window.addEventListener('wheel', e => { if (e.ctrlKey) e.preventDefault(); }, { passive: false });
  window.addEventListener('keydown', e => { if ((e.ctrlKey || e.metaKey) && ['+', '-', '=', '0'].indexOf(e.key) >= 0) e.preventDefault(); });

  // ---------- štart ----------
  window.addEventListener('hashchange', () => { const c = location.hash.slice(1); if (c && c.toUpperCase() !== code) enterRoom(c); });
  const startCode = location.hash.slice(1);
  if (startCode && /^[A-Za-z]{4}$/.test(startCode)) {
    if (!me.name) { render(); const ci = $('#code'); if (ci) ci.value = startCode.toUpperCase(); toast('Napíš meno a ťukni Pripojiť.'); }
    else enterRoom(startCode);
  } else render();
  if ('serviceWorker' in navigator) { /* bez offline cache — hra potrebuje internet */ }
})();
