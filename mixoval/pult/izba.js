/* si/mixoval · Izba — spoločný pult pre max. 4 ľudí.
   Neposiela sa zvuk, iba ovládanie: každý počuje mix zo svojho zariadenia.
   - spojenie: Supabase Realtime (broadcast + presence); na test aj medzi kartami (?lokal=1)
   - spoločné hodiny: každý sa zosynchronizuje s hostiteľom (prvý v izbe) ping/pong
   - decky: posiela sa celý stav (pozícia v čase spoločných hodín), novší stav vyhráva
   - skladby: kto načíta skladbu, nahrá ju do dočasného úložiska (zmaže sa po 24 h), ostatní si ju stiahnu
   - kurzory: pozícia sa posiela relatívne k jednotke (prehrávač A, mixér, prehrávač B), takže sedí aj keď má
     každý iné rozloženie (mobil na výšku / počítač) */
(function () {
  'use strict';
  var P = window.MixPult; if (!P) return;
  var SB_URL = 'https://znsrokpaoczljisaoulu.supabase.co', SB_KEY = 'sb_publishable_9bRi6q6rnTTr5_Rszk5IiQ_MBBoti45';
  var SB_JS = 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2.118.0/dist/umd/supabase.js';
  var MAXP = 4, MAX_MB = 50;
  var COLORS = ['#ff4fa3', '#b6ff3b', '#a98bff', '#2ee6b0'], CNAMES = ['ružová', 'limetková', 'fialová', 'mätová'];
  var ALPHA = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789';
  var $ = function (s, r) { return (r || document).querySelector(s); };
  var esc = function (t) { return String(t).replace(/[&<>"]/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]; }); };
  function rid(n, abc) { abc = abc || 'abcdefghijklmnopqrstuvwxyz0123456789'; var s = '', a = new Uint8Array(n); crypto.getRandomValues(a); for (var i = 0; i < n; i++) s += abc.charAt(a[i] % abc.length); return s; }
  function ls(k, v) { try { if (v === undefined) return localStorage.getItem(k); localStorage.setItem(k, v); } catch (e) { return null; } }

  // ------------------------------------------------------------------ kurzory (odomykajú sa za odohraný čas)
  var CURS = [
    { id: 'sipka', n: 'Šípka', min: 0, hx: 3, hy: 2, svg: '<path d="M3 2l16 9-7 2-3 7z" fill="currentColor" stroke="#000" stroke-width="1.6" stroke-linejoin="round"/>' },
    { id: 'kruh', n: 'Kruh', min: 5, hx: 12, hy: 12, svg: '<circle cx="12" cy="12" r="7.5" fill="none" stroke="#000" stroke-width="5"/><circle cx="12" cy="12" r="7.5" fill="none" stroke="currentColor" stroke-width="3"/><circle cx="12" cy="12" r="2" fill="currentColor"/>' },
    { id: 'zameriac', n: 'Zameriavač', min: 15, hx: 12, hy: 12, svg: '<path d="M12 1v8M12 15v8M1 12h8M15 12h8" stroke="#000" stroke-width="5"/><path d="M12 1v8M12 15v8M1 12h8M15 12h8" stroke="currentColor" stroke-width="2.6"/><circle cx="12" cy="12" r="1.8" fill="currentColor"/>' },
    { id: 'hviezda', n: 'Hviezda', min: 30, hx: 12, hy: 12, svg: '<path d="M12 1.5l3.1 6.6 7.2.9-5.3 5 1.4 7.1L12 17.6l-6.4 3.5L7 14l-5.3-5 7.2-.9z" fill="currentColor" stroke="#000" stroke-width="1.6" stroke-linejoin="round"/>' },
    { id: 'platna', n: 'Platňa', min: 60, hx: 12, hy: 12, spin: true, svg: '<circle cx="12" cy="12" r="10.5" fill="#111" stroke="#000" stroke-width="1.5"/><circle cx="12" cy="12" r="7.5" fill="none" stroke="#333" stroke-width=".8"/><circle cx="12" cy="12" r="4.2" fill="currentColor"/><circle cx="12" cy="12" r="1.1" fill="#111"/><path d="M12 3.5a8.5 8.5 0 0 1 6 2.5" stroke="#666" stroke-width="1.2" fill="none"/>' },
    { id: 'sluchadla', n: 'Slúchadlá', min: 120, hx: 12, hy: 12, svg: '<path d="M4 15v-3a8 8 0 0 1 16 0v3" fill="none" stroke="#000" stroke-width="5"/><path d="M4 15v-3a8 8 0 0 1 16 0v3" fill="none" stroke="currentColor" stroke-width="2.6"/><rect x="2" y="13" width="6" height="9" rx="2" fill="currentColor" stroke="#000" stroke-width="1.5"/><rect x="16" y="13" width="6" height="9" rx="2" fill="currentColor" stroke="#000" stroke-width="1.5"/>' },
    { id: 'blesk', n: 'Blesk', min: 240, hx: 12, hy: 12, svg: '<path d="M14 1L4 14h7l-2 9 10-13h-7z" fill="currentColor" stroke="#000" stroke-width="1.6" stroke-linejoin="round"/>' },
    { id: 'koruna', n: 'Koruna', min: 480, hx: 12, hy: 12, svg: '<path d="M2 7l5 5 5-8 5 8 5-5-2 13H4z" fill="currentColor" stroke="#000" stroke-width="1.6" stroke-linejoin="round"/><circle cx="12" cy="4" r="1.6" fill="#000"/>' },
    { id: 'srdce', n: 'Srdce', min: 10, hx: 12, hy: 12, anim: 'pulse', svg: '<path d="M12 21C4 15 2 11 2 7.6A5 5 0 0 1 12 6a5 5 0 0 1 10 1.6C22 11 20 15 12 21z" fill="currentColor" stroke="#000" stroke-width="1.6" stroke-linejoin="round"/>' },
    { id: 'nota', n: 'Nota', min: 20, hx: 12, hy: 12, anim: 'bob', svg: '<path d="M9 18V5l11-2v13" fill="none" stroke="#000" stroke-width="5" stroke-linejoin="round"/><path d="M9 18V5l11-2v13" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linejoin="round"/><ellipse cx="6.5" cy="18" rx="3.5" ry="2.8" fill="currentColor" stroke="#000" stroke-width="1.4"/><ellipse cx="17.5" cy="16" rx="3.5" ry="2.8" fill="currentColor" stroke="#000" stroke-width="1.4"/>' },
    { id: 'ruka', n: 'Ruka', min: 45, hx: 9, hy: 3, svg: '<path d="M8 3c1 0 1.6.7 1.6 1.6V10l.8-.2V8.2c0-.9.7-1.5 1.5-1.5s1.4.6 1.4 1.5v1.6l.7-.1c.4-.8 1.1-1.2 1.8-1 .8.2 1.2.9 1.2 1.7V16c0 3-2.5 5-5.6 5-2.6 0-4.1-1.2-5.2-3L3 13.2c-.5-.9.2-1.9 1.2-1.6L6.4 13V4.6C6.4 3.7 7 3 8 3z" fill="currentColor" stroke="#000" stroke-width="1.5" stroke-linejoin="round"/>' },
    { id: 'oko', n: 'Oko', min: 75, hx: 12, hy: 12, anim: 'blink', svg: '<path d="M1.5 12S6 4.5 12 4.5 22.5 12 22.5 12 18 19.5 12 19.5 1.5 12 1.5 12z" fill="#fff" stroke="#000" stroke-width="1.6"/><circle cx="12" cy="12" r="4.6" fill="currentColor" stroke="#000" stroke-width="1.2"/><circle cx="12" cy="12" r="2" fill="#000"/><circle cx="13.2" cy="10.8" r=".9" fill="#fff"/>' },
    { id: 'ohen', n: 'Oheň', min: 100, hx: 12, hy: 14, anim: 'flick', svg: '<path d="M12 1.5c1 4 6 6 6 12a6 6 0 0 1-12 0c0-2.4 1.2-3.8 2.4-5 .2 1.8 1 2.6 1.8 2.8C10 7.5 11 4.5 12 1.5z" fill="currentColor" stroke="#000" stroke-width="1.6" stroke-linejoin="round"/><path d="M12 12c1.6 1.8 2.8 2.8 2.8 4.4a2.8 2.8 0 0 1-5.6 0c0-1.4 1.2-2.4 2.8-4.4z" fill="#fff" fill-opacity=".85"/>' },
    { id: 'lebka', n: 'Lebka', min: 150, hx: 12, hy: 12, svg: '<path d="M12 2C6.5 2 3.5 5.6 3.5 10c0 2.8 1.2 4.4 2.8 5.4V19h3l.7-1.8.7 1.8h2.6l.7-1.8.7 1.8h3v-3.6c1.6-1 2.8-2.6 2.8-5.4C20.5 5.6 17.5 2 12 2z" fill="currentColor" stroke="#000" stroke-width="1.6" stroke-linejoin="round"/><circle cx="8.6" cy="10.5" r="2.3" fill="#000"/><circle cx="15.4" cy="10.5" r="2.3" fill="#000"/><path d="M12 13.2l-1.2 2.4h2.4z" fill="#000"/>' },
    { id: 'kocka', n: 'Kocka', min: 200, hx: 12, hy: 12, anim: 'wobble', svg: '<rect x="3" y="3" width="18" height="18" rx="4" fill="currentColor" stroke="#000" stroke-width="1.6"/><circle cx="8" cy="8" r="1.8" fill="#000"/><circle cx="16" cy="8" r="1.8" fill="#000"/><circle cx="12" cy="12" r="1.8" fill="#000"/><circle cx="8" cy="16" r="1.8" fill="#000"/><circle cx="16" cy="16" r="1.8" fill="#000"/>' },
    { id: 'rakheta', n: 'Raketa', min: 300, hx: 12, hy: 12, anim: 'bob', svg: '<path d="M12 1.5c4 2.6 5.4 7 4.6 12H7.4C6.6 8.5 8 4.1 12 1.5z" fill="currentColor" stroke="#000" stroke-width="1.6" stroke-linejoin="round"/><circle cx="12" cy="9" r="2" fill="#fff" stroke="#000" stroke-width="1.2"/><path d="M7.4 11.5L3.6 16l.6 3 3.6-2zM16.6 11.5l3.8 4.5-.6 3-3.6-2z" fill="currentColor" stroke="#000" stroke-width="1.4" stroke-linejoin="round"/><path d="M10 14.5h4l-2 7z" fill="#ffb02e" stroke="#000" stroke-width="1.2" stroke-linejoin="round"/>' },
    { id: 'diamant', n: 'Diamant', min: 360, hx: 12, hy: 12, anim: 'shine', svg: '<path d="M6 3h12l4 6-10 13L2 9z" fill="currentColor" stroke="#000" stroke-width="1.6" stroke-linejoin="round"/><path d="M2 9h20M9 3l-2 6 5 13 5-13-2-6" fill="none" stroke="#000" stroke-opacity=".45" stroke-width="1"/>' },
    { id: 'oko2', n: 'Terč', min: 420, hx: 12, hy: 12, anim: 'spin', svg: '<circle cx="12" cy="12" r="10" fill="none" stroke="#000" stroke-width="5"/><circle cx="12" cy="12" r="10" fill="none" stroke="currentColor" stroke-width="2.4" stroke-dasharray="4 3"/><circle cx="12" cy="12" r="5" fill="none" stroke="currentColor" stroke-width="2.2"/><circle cx="12" cy="12" r="1.6" fill="currentColor"/>' },
    { id: 'duch', n: 'Duch', min: 540, hx: 12, hy: 12, anim: 'bob', svg: '<path d="M12 2C7 2 4 5.8 4 10.5V22l2.7-2.2L9.3 22 12 19.8 14.7 22l2.6-2.2L20 22V10.5C20 5.8 17 2 12 2z" fill="currentColor" stroke="#000" stroke-width="1.6" stroke-linejoin="round"/><ellipse cx="9" cy="10" rx="1.7" ry="2.4" fill="#000"/><ellipse cx="15" cy="10" rx="1.7" ry="2.4" fill="#000"/>' },
    { id: 'ufo', n: 'UFO', min: 660, hx: 12, hy: 12, anim: 'wobble', svg: '<path d="M7 11a5 5 0 0 1 10 0z" fill="#bfefff" stroke="#000" stroke-width="1.5"/><ellipse cx="12" cy="13" rx="10" ry="4" fill="currentColor" stroke="#000" stroke-width="1.6"/><circle cx="6.5" cy="13.2" r="1" fill="#fff"/><circle cx="12" cy="14.4" r="1" fill="#fff"/><circle cx="17.5" cy="13.2" r="1" fill="#fff"/>' },
    { id: 'dyha', n: 'Dúha', min: 800, hx: 12, hy: 12, anim: 'rainbow', svg: '<path d="M12 2l2.9 6.2 6.8.8-5 4.7 1.3 6.7-6-3.3-6 3.3 1.3-6.7-5-4.7 6.8-.8z" fill="currentColor" stroke="#000" stroke-width="1.6" stroke-linejoin="round"/><circle cx="12" cy="12" r="3" fill="#fff" fill-opacity=".55"/>' },
    { id: 'planeta', n: 'Planéta', min: 1000, hx: 12, hy: 12, anim: 'spin', svg: '<circle cx="12" cy="12" r="6.2" fill="currentColor" stroke="#000" stroke-width="1.6"/><ellipse cx="12" cy="12" rx="11" ry="3.4" fill="none" stroke="#000" stroke-width="3.6" transform="rotate(-24 12 12)"/><ellipse cx="12" cy="12" rx="11" ry="3.4" fill="none" stroke="#fff" stroke-opacity=".8" stroke-width="1.6" transform="rotate(-24 12 12)"/>' },
    { id: 'legenda', n: 'Legenda', min: 1500, hx: 12, hy: 12, anim: 'rainbow', svg: '<circle cx="12" cy="12" r="10.5" fill="#111" stroke="#000" stroke-width="1.5"/><path d="M12 2.5l2.4 5.2 5.6.6-4.2 3.8 1.2 5.6L12 14.7l-5 3 1.2-5.6L4 8.3l5.6-.6z" fill="currentColor" stroke="#000" stroke-width="1.2" stroke-linejoin="round"/><circle cx="12" cy="12" r="10.5" fill="none" stroke="currentColor" stroke-width="1.2" stroke-dasharray="2 2"/>' }
  ];
  function anim(c) { return c.anim || (c.spin ? 'spin' : ''); }
  function curById(id) { for (var i = 0; i < CURS.length; i++) if (CURS[i].id === id) return CURS[i]; return CURS[0]; }
  function playedMin() { return parseFloat(ls('mx.izba.min') || '0') || 0; }
  function unlocked(c) { return playedMin() >= c.min; }

  // ------------------------------------------------------------------ spojenie
  function loadScript(src) {
    return new Promise(function (res, rej) {
      if (window.supabase && window.supabase.createClient) return res();
      var s = document.createElement('script'); s.src = src; s.async = true; s.onload = res; s.onerror = function () { rej(new Error('script')); };
      document.head.appendChild(s);
    });
  }
  // Supabase Realtime
  function SupaT(code, meta, h) {
    var client = window.supabase.createClient(SB_URL, SB_KEY, {
      auth: { persistSession: false, autoRefreshToken: false, detectSessionInUrl: false },
      realtime: { params: { eventsPerSecond: 40 } }
    });
    var ch = client.channel('mixoval-' + code, { config: { broadcast: { self: false, ack: false }, presence: { key: meta.id } } });
    ch.on('broadcast', { event: 'm' }, function (e) { h.msg(e.payload); });
    ch.on('presence', { event: 'sync' }, function () { h.presence(ch.presenceState()); });
    ch.subscribe(function (st) {
      if (st === 'SUBSCRIBED') { ch.track(meta); h.up(); }
      else if (st === 'CHANNEL_ERROR' || st === 'TIMED_OUT') h.down(st);
    });
    return {
      send: function (p) { ch.send({ type: 'broadcast', event: 'm', payload: p }); },
      track: function (m) { meta = m; ch.track(m); },
      upload: async function (path, file) {
        var st = client.storage.from('mixoval');
        var r = await st.upload(path, file, { contentType: file.type || 'application/octet-stream', upsert: false, cacheControl: '86400' });
        if (r.error) throw r.error;
        return st.getPublicUrl(path).data.publicUrl;
      },
      leave: function () { try { client.removeChannel(ch); } catch (e) {} }
    };
  }
  // Test medzi kartami jedného prehliadača (bez internetu)
  function LocalT(code, meta, h) {
    var bc = new BroadcastChannel('mixoval-' + code), peers = {}, timer;
    function pres() {
      var now = Date.now(), st = {}; st[meta.id] = [meta];
      Object.keys(peers).forEach(function (k) { if (now - peers[k].t < 3500) st[k] = [peers[k].m]; else delete peers[k]; });
      h.presence(st);
    }
    bc.onmessage = function (e) {
      var m = e.data;
      if (m.k === 'pres') { var isNew = !peers[m.m.id]; peers[m.m.id] = { m: m.m, t: Date.now() }; if (isNew) { bc.postMessage({ k: 'pres', m: meta }); pres(); } }
      else if (m.k === 'bye') { delete peers[m.id]; pres(); }
      else if (m.k === 'm') h.msg(m.p);
    };
    timer = setInterval(function () { bc.postMessage({ k: 'pres', m: meta }); pres(); }, 1000);
    setTimeout(function () { bc.postMessage({ k: 'pres', m: meta }); pres(); h.up(); }, 50);
    return {
      send: function (p) { bc.postMessage({ k: 'm', p: p }); },
      track: function (m) { meta = m; bc.postMessage({ k: 'pres', m: meta }); pres(); },
      upload: async function (path, file) { return URL.createObjectURL(file); },
      leave: function () { clearInterval(timer); bc.postMessage({ k: 'bye', id: meta.id }); bc.close(); }
    };
  }

  // ------------------------------------------------------------------ stav izby
  var me = { id: rid(10), n: '', cs: ls('mx.izba.cur') || 'sipka', j: 0 };
  var room = null; // { code, T, players:[], host, ... }
  var offset = 0, pings = [], lastHost = null;
  function newVers() { return [0, 1, 2, 3].map(function () { return { v: 0, by: '' }; }); }
  var deckVer = newVers(), ctlVer = {}, outCtl = {}, pending = [null, null, null, null], loadingId = [null, null, null, null];
  var shareCache = {};
  function clock() { return performance.timeOrigin + performance.now(); }
  function now() { return clock() + offset; }
  function isHost() { return room && room.host === me.id; }
  function newer(a, b) { return a.v > b.v || (a.v === b.v && a.by > b.by); }
  function same(a, b) { return a.v === b.v && a.by === b.by; }
  function colorOf(id) { if (!room) return COLORS[0]; for (var i = 0; i < room.players.length; i++) if (room.players[i].id === id) return COLORS[i % 4]; return '#fff'; }
  function nameOf(id) { if (!room) return '?'; for (var i = 0; i < room.players.length; i++) if (room.players[i].id === id) return room.players[i].n; return 'niekto'; }
  function send(p) { if (room && room.T) { p.f = me.id; room.T.send(p); } }

  function join(code, local) {
    if (room) leave(true);
    if (!P.ensureCtx()) return;
    me.n = ($('#izName').value || '').trim().slice(0, 18) || ('DJ ' + rid(2, '0123456789'));
    ls('mx.name', me.n);
    if (!unlocked(curById(me.cs))) me.cs = 'sipka';
    me.j = Date.now();
    room = { code: code, players: [], host: null, up: false, local: !!local, joinedAt: Date.now() };
    deckVer = newVers(); ctlVer = {}; outCtl = {}; pending = [null, null, null, null]; loadingId = [null, null, null, null];
    P.decks.forEach(function (d) { d.dirty = false; });
    offset = 0; pings = []; lastHost = null;
    var h = { msg: onMsg, presence: onPresence, up: onUp, down: onDown };
    var meta = { id: me.id, n: me.n, cs: me.cs, j: me.j };
    setStatus('Pripájam sa…');
    var go = function () { if (room && room.code === code) room.T = local ? LocalT(code, meta, h) : SupaT(code, meta, h); };
    if (local) go();
    else loadScript(SB_JS).then(go).catch(function () { P.toast('Spojenie sa nepodarilo načítať. Skontroluj internet.'); leave(true); });
    var u = new URL(location.href); u.searchParams.set('izba', code); if (local) u.searchParams.set('lokal', '1'); history.replaceState(null, '', u);
    renderPanel(); renderBtn();
    sheet.hidden = true;
  }
  function leave(silent) {
    if (!room) return;
    try { room.T && room.T.leave(); } catch (e) {}
    room = null;
    P.decks.forEach(function (d) { d.dirty = false; });
    $('#izCurs').textContent = ''; remoteCur = {};
    var u = new URL(location.href); u.searchParams.delete('izba'); u.searchParams.delete('lokal'); history.replaceState(null, '', u);
    if (!silent) P.toast('Odišiel si z izby.');
    renderPanel(); renderBtn();
  }
  function onUp() { room.up = true; setStatus(''); renderPanel(); }
  function onDown(st) { setStatus('Spojenie vypadlo, skúšam znova…'); }

  function onPresence(state) {
    if (!room) return;
    var list = [];
    Object.keys(state).forEach(function (k) { var m = state[k] && state[k][state[k].length - 1]; if (m && m.id) list.push(m); });
    list.sort(function (a, b) { return (a.j - b.j) || (a.id < b.id ? -1 : 1); });
    var mine = list.findIndex(function (p) { return p.id === me.id; });
    if (mine < 0) return; // ešte nás nevidno
    if (mine >= MAXP) { P.toast('Izba je plná (max. ' + MAXP + ' ľudia).'); leave(true); return; }
    var before = room.players.map(function (p) { return p.id; });
    room.players = list.slice(0, MAXP);
    var host = room.players[0].id;
    if (host !== lastHost) {
      lastHost = host; room.host = host;
      if (host === me.id) { offset = 0; pings = []; if (!room.wasHost) { room.wasHost = true; shareMine(); } }
      else { pings = []; pingBurst(); send({ k: 'hello', to: host }); }
    }
    room.players.forEach(function (p) { if (before.indexOf(p.id) < 0 && p.id !== me.id && room.up && before.length) P.toast(p.n + ' prišiel do izby.'); });
    before.forEach(function (id) { if (!room.players.some(function (p) { return p.id === id; })) { var c = remoteCur[id]; if (c) { c.el.remove(); delete remoteCur[id]; } } });
    renderPanel(); renderBtn();
  }

  // spoločné hodiny: ping hostiteľovi, berieme meranie s najkratšou cestou
  function pingBurst() { for (var i = 0; i < 6; i++) setTimeout(ping, i * 250); }
  function ping() { if (room && !isHost() && room.host) send({ k: 'ping', to: room.host, t0: clock() }); }
  setInterval(ping, 10000);

  // ------------------------------------------------------------------ správy
  function onMsg(m) {
    if (!room || !m || m.f === me.id) return;
    if (m.to && m.to !== me.id) return;
    if (m.k === 'ping') { if (isHost()) send({ k: 'pong', to: m.f, t0: m.t0, th: now() }); return; }
    if (m.k === 'pong') {
      var t1 = clock(), rtt = t1 - m.t0; if (rtt < 0 || rtt > 5000) return;
      pings.push({ rtt: rtt, off: m.th + rtt / 2 - t1 }); if (pings.length > 10) pings.shift();
      var best = pings.slice().sort(function (a, b) { return a.rtt - b.rtt; })[0];
      offset = best.off; return;
    }
    if (m.k === 'hello') { if (isHost()) send(fullState(m.f)); return; }
    if (m.k === 'full') { applyFull(m); return; }
    if (m.k === 'b') {
      if (m.cur !== undefined) moveCur(m.f, m.cur);
      (m.c || []).forEach(function (c) { applyCtl(c[0], c[1], { v: c[2], by: m.f }, m.f); });
      (m.d || []).forEach(function (s) { applyDeck(s, m.f); });
    }
  }
  function fullState(to) {
    var c = [];
    Object.keys(P.ctl).forEach(function (id) { if (id !== 'm.vol') { var v = ctlVer[id] || { v: 0, by: '' }; c.push([id, P.ctl[id].v, v.v, v.by]); } });
    var d = P.decks.map(function (dk, i) { var s = dk.snap(now()); s.v = deckVer[i].v; s.by = deckVer[i].by; return s; });
    return { k: 'full', to: to, c: c, d: d };
  }
  function applyFull(m) {
    (m.c || []).forEach(function (c) { ctlVer[c[0]] = { v: c[2], by: c[3] }; P.remoteCtl(c[0], c[1]); });
    (m.d || []).forEach(function (s) {
      var d = P.decks[s.d];
      if (!s.tr && d.buf && d.file) { shareDeck(d); return; } // u hostiteľa je deck prázdny → pošleme svoju skladbu
      deckVer[s.d] = { v: -1, by: '' };
      applyDeck(s, null, true);
    });
  }
  function applyCtl(id, v, ver, from) {
    if (id === 'm.vol' || !P.ctl[id]) return;
    var cur = ctlVer[id] || { v: 0, by: '' };
    if (!newer(ver, cur)) return;
    ctlVer[id] = ver; P.remoteCtl(id, v);
    if (from) flashCtl(id, colorOf(from));
  }
  function applyDeck(s, from, force) {
    var i = s.d, d = P.decks[i], ver = { v: s.v, by: s.by };
    if (!force && !newer(ver, deckVer[i]) && !same(ver, deckVer[i])) return;
    var isNew = !same(ver, deckVer[i]);
    deckVer[i] = ver;
    if (isNew && from) flashUnit(d.sec, colorOf(s.by || from));
    ensureTrack(d, s);
  }
  // skladba v decku: ak ju ešte nemáme, stiahneme ju a potom sa nastavíme podľa najnovšieho stavu
  function ensureTrack(d, s) {
    var i = d.idx;
    if (!s.tr) {
      pending[i] = null;
      if (d.buf || d.shared) d.unload();
      d.applySnap(s, now()); return;
    }
    if (d.buf && d.shared && d.shared.id === s.tr.id) { d.shared = s.tr; d.applySnap(s, now()); return; }
    pending[i] = s;
    if (loadingId[i] === s.tr.id) return;
    if (!s.tr.u) {
      if (d.buf) d.unload();
      d.status = s.tr.err ? 'Skladba „' + s.tr.n + '“ je príliš veľká, hrá len u: ' + s.tr.by : 'Čakám na skladbu od: ' + s.tr.by + '…';
      return;
    }
    download(d, s.tr);
  }
  async function download(d, tr) {
    var i = d.idx; loadingId[i] = tr.id;
    d.unload(); d.busy = true; d.status = 'Sťahujem skladbu od: ' + tr.by + '…';
    try {
      var r = await fetch(tr.u); if (!r.ok) throw new Error('http ' + r.status);
      var ab = await r.arrayBuffer();
      if (loadingId[i] !== tr.id) return;
      var buf = await P.decode(ab);
      if (loadingId[i] !== tr.id) return;
      var p = pending[i] || {};
      await d.setTrack(buf, tr.n, { bpm: p.bpm, grid: p.grid });
      d.shared = tr;
      d.busy = false; loadingId[i] = null;
      if (pending[i] && pending[i].tr && pending[i].tr.id === tr.id) d.applySnap(pending[i], now());
      d.dirty = false;
    } catch (e) {
      d.busy = false; loadingId[i] = null; d.status = 'Skladbu sa nepodarilo stiahnuť.';
    }
  }

  // ------------------------------------------------------------------ zdieľanie vlastných skladieb
  function shareMine() { P.decks.forEach(function (d) { if (d.buf && d.file && !d.shared) shareDeck(d); }); }
  P.onLoad = function (d) { if (room) shareDeck(d); };
  async function shareDeck(d) {
    var f = d.file; if (!f || !room) return;
    var code = room.code, key = code + '|' + f.name + '|' + f.size + '|' + f.lastModified;
    var ext = ((f.name.match(/\.([a-z0-9]{2,5})$/i) || [0, 'mp3'])[1]).toLowerCase();
    var id = rid(12);
    d.shared = { id: id, n: d.name, u: shareCache[key] || null, by: me.n }; d.dirty = true;
    if (d.shared.u) return;
    if (f.size > MAX_MB * 1048576) { d.shared = Object.assign({}, d.shared, { err: 1 }); d.dirty = true; P.toast('Skladba má viac ako ' + MAX_MB + ' MB, ostatným ju neviem poslať.'); return; }
    P.toast('Posielam skladbu ostatným…');
    try {
      var url = await room.T.upload('rooms/' + code + '/' + id + '.' + ext, f);
      shareCache[key] = url;
      if (d.shared && d.shared.id === id) { d.shared = Object.assign({}, d.shared, { u: url }); d.dirty = true; }
    } catch (e) {
      P.toast('Skladbu sa nepodarilo poslať ostatným.');
      if (d.shared && d.shared.id === id) { d.shared = Object.assign({}, d.shared, { err: 1 }); d.dirty = true; }
    }
  }

  // ------------------------------------------------------------------ odosielanie (dávky)
  var curOut = null, curDirty = false, lastCurSend = 0, lastHb = 0;
  P.onChange = function (id, v) {
    if (!room || id === 'm.vol') return;
    ctlVer[id] = { v: now(), by: me.id }; outCtl[id] = v;
  };
  function curInterval() { var n = room ? room.players.length : 1; return [90, 90, 130, 200][Math.min(3, n - 1)] || 200; }
  function flush() {
    if (!room || !room.up) return;
    var t = performance.now(), msg = { k: 'b' }, any = false;
    var ids = Object.keys(outCtl);
    if (ids.length) { msg.c = ids.map(function (id) { return [id, outCtl[id], ctlVer[id].v]; }); outCtl = {}; any = true; }
    var ds = [];
    P.decks.forEach(function (d, i) {
      if (d.busy || loadingId[i]) { return; }
      if (d.dirty) {
        d.dirty = false; deckVer[i] = { v: now(), by: me.id };
        var s = d.snap(now()); s.v = deckVer[i].v; s.by = me.id; ds.push(s);
      }
    });
    if (isHost() && t - lastHb > 2000) {
      lastHb = t;
      P.decks.forEach(function (d, i) {
        if (!d.playing || d.busy || ds.some(function (x) { return x.d === i; })) return;
        var s = d.snap(now()); s.v = deckVer[i].v; s.by = deckVer[i].by; ds.push(s);
      });
    }
    if (ds.length) { msg.d = ds; any = true; }
    if (curDirty && (any || t - lastCurSend > curInterval())) { msg.cur = curOut; curDirty = false; lastCurSend = t; any = true; }
    if (any) send(msg);
  }
  setInterval(flush, 40);

  // odohraný čas → odomykanie kurzorov
  setInterval(function () {
    if (!room || document.hidden) return;
    if (!P.decks.some(function (d) { return d.playing; })) return;
    var before = playedMin(), after = before + 1 / 60;
    ls('mx.izba.min', String(after));
    CURS.forEach(function (c) { if (before < c.min && after >= c.min) { P.toast('Odomkol si kurzor: ' + c.n + '!'); renderPanel(); } });
  }, 1000);

  // ------------------------------------------------------------------ kurzory
  var units = function () { return Array.prototype.slice.call(P.booth.querySelectorAll('.unit')); };
  function track(e) {
    if (!room) return;
    var u = e.target && e.target.closest ? e.target.closest('.unit') : null, i = u ? u.dataset.u : null;
    if (!i) { if (curOut) { curOut = null; curDirty = true; } return; }
    var r = u.getBoundingClientRect();
    curOut = { u: i, x: +((e.clientX - r.left) / r.width).toFixed(4), y: +((e.clientY - r.top) / r.width).toFixed(4), dn: e.buttons ? 1 : 0, t: e.pointerType === 'touch' ? 1 : 0 };
    curDirty = true;
  }
  document.addEventListener('pointermove', track, { passive: true });
  document.addEventListener('pointerdown', track, { passive: true });
  document.addEventListener('pointerup', function (e) { track(e); if (curOut) { curOut.dn = 0; curDirty = true; } }, { passive: true });

  var remoteCur = {};
  function curSVG(cs) { var c = curById(cs); return '<svg viewBox="0 0 24 24" class="an-' + anim(c) + '" style="left:' + (-c.hx / 24 * 100) + '%;top:' + (-c.hy / 24 * 100) + '%">' + c.svg + '</svg>'; }
  function moveCur(id, cur) {
    var c = remoteCur[id];
    var p = room.players.find(function (x) { return x.id === id; }); if (!p) return;
    if (!c) {
      var el = document.createElement('div'); el.className = 'rcur';
      $('#izCurs').appendChild(el);
      c = remoteCur[id] = { el: el, x: 0, y: 0, tx: 0, ty: 0, cur: null, seen: 0, cs: null, fresh: true };
    }
    if (c.cs !== p.cs || c.n !== p.n) {
      c.cs = p.cs; c.n = p.n;
      c.el.innerHTML = curSVG(p.cs) + '<b>' + esc(p.n) + '</b>';
    }
    var col = colorOf(id); c.el.style.color = col; c.el.style.setProperty('--pc', col);
    c.cur = cur; c.seen = performance.now();
  }
  function curFrame() {
    var t = performance.now();
    Object.keys(remoteCur).forEach(function (id) {
      var c = remoteCur[id], cur = c.cur;
      var un = cur ? P.booth.querySelector('[data-u="' + cur.u + '"]') : null;
      if (!un || !un.offsetWidth) { c.el.style.opacity = 0; c.fresh = true; return; }
      var r = un.getBoundingClientRect();
      c.tx = r.left + window.scrollX + cur.x * r.width; c.ty = r.top + window.scrollY + cur.y * r.width;
      if (c.fresh) { c.x = c.tx; c.y = c.ty; c.fresh = false; }
      c.x += (c.tx - c.x) * 0.35; c.y += (c.ty - c.y) * 0.35;
      c.el.style.transform = 'translate(' + c.x.toFixed(1) + 'px,' + c.y.toFixed(1) + 'px)';
      var idle = t - c.seen;
      c.el.style.opacity = cur.t ? (cur.dn || idle < 1500 ? 1 : 0) : (idle < 4000 ? 1 : 0.35);
      c.el.classList.toggle('dn', !!cur.dn);
    });
    requestAnimationFrame(curFrame);
  }
  requestAnimationFrame(curFrame);

  function flashCtl(id, col) {
    var sel = '[data-ctl="' + id + '"],[data-seg="' + id + '"],[data-tog="' + id + '"]';
    Array.prototype.forEach.call(P.booth.querySelectorAll(sel), function (el) { flash(el, col); });
  }
  function flashUnit(el, col) { if (el) flash(el, col); }
  function flash(el, col) {
    el.style.setProperty('--pc', col); el.classList.add('rt');
    clearTimeout(el._rt); el._rt = setTimeout(function () { el.classList.remove('rt'); }, 600);
  }

  // ------------------------------------------------------------------ rozhranie
  var bar = $('.bar'), btn = document.createElement('button');
  btn.type = 'button'; btn.className = 'btn izbtn'; btn.id = 'izBtn';
  bar.insertBefore(btn, $('.rec', bar));
  var curs = document.createElement('div'); curs.id = 'izCurs'; document.body.appendChild(curs);
  var sheet = document.createElement('div'); sheet.className = 'sheet'; sheet.id = 'izSheet'; sheet.hidden = true;
  sheet.innerHTML =
    '<div class="sheetin iz" role="dialog" aria-label="Izba">' +
    '<div class="sh-h"><h2>Izba</h2><button class="x" id="izX" type="button" aria-label="Zavrieť">×</button></div>' +
    '<p class="iz-st" id="izSt" hidden></p>' +
    '<div id="izOut">' +
    '<p class="iz-p">Spoločný pult pre max. 4 ľudí. Každý vidí kurzory ostatných a počuje mix vo svojom zariadení. Skladby, ktoré niekto načíta, si ostatní stiahnu automaticky (zmažú sa po 24 hodinách).</p>' +
    '<label class="iz-l">Tvoje meno<input id="izName" class="q" maxlength="18" autocomplete="off" placeholder="napr. Robo"></label>' +
    '<button class="btn iz-big" id="izNew" type="button">Vytvoriť novú izbu</button>' +
    '<div class="iz-or">alebo sa pripoj kódom</div>' +
    '<div class="iz-row"><input id="izCode" class="q iz-code" maxlength="4" autocomplete="off" autocapitalize="characters" spellcheck="false" placeholder="KÓD"><button class="btn" id="izJoin" type="button">Pripojiť sa</button></div>' +
    '</div>' +
    '<div id="izIn" hidden>' +
    '<div class="iz-codebox"><span>Kód izby</span><b id="izCodeBig"></b><button class="btn" id="izShare" type="button">Poslať odkaz</button></div>' +
    '<div class="iz-h">V izbe</div><div id="izPl" class="iz-pl"></div>' +
    '<div class="iz-h">Tvoj kurzor <small id="izMin"></small></div><div id="izCurPick" class="iz-cp"></div>' +
    '<button class="btn iz-leave" id="izLeave" type="button">Odísť z izby</button>' +
    '</div></div>';
  document.body.appendChild(sheet);
  $('#izName').value = ls('mx.name') || '';

  function setStatus(t) { var e = $('#izSt'); e.textContent = t; e.hidden = !t; }
  function renderBtn() {
    if (!room) { btn.innerHTML = '<span class="izdots"><i></i><i></i></span>IZBA'; btn.classList.remove('in'); return; }
    btn.classList.add('in');
    btn.innerHTML = '<span class="izdots">' + room.players.map(function (p, i) { return '<i style="background:' + COLORS[i] + '"></i>'; }).join('') + '</span>' + room.code;
  }
  function renderPanel() {
    $('#izOut').hidden = !!room; $('#izIn').hidden = !room;
    if (!room) return;
    $('#izCodeBig').textContent = room.code;
    $('#izPl').innerHTML = room.players.length ? room.players.map(function (p, i) {
      return '<div class="iz-p1"><i style="background:' + COLORS[i] + '"></i><b>' + esc(p.n) + '</b>' +
        (p.id === me.id ? '<small>ty</small>' : '') + (i === 0 ? '<small>hostiteľ</small>' : '') + '</div>';
    }).join('') : '<div class="iz-p1"><small>Pripájam…</small></div>';
    var m = playedMin();
    $('#izMin').textContent = 'odohrané v izbách: ' + (m < 60 ? Math.floor(m) + ' min' : (m / 60).toFixed(1) + ' h');
    $('#izCurPick').innerHTML = CURS.map(function (c) {
      var ok = unlocked(c), col = colorOf(me.id);
      return '<button type="button" class="iz-c' + (me.cs === c.id ? ' on' : '') + (ok ? '' : ' lock') + '" data-c="' + c.id + '" style="color:' + col + '"' + (ok ? '' : ' disabled') + '>' +
        '<svg viewBox="0 0 24 24" class="an-' + anim(c) + '">' + c.svg + '</svg><span>' + c.n + '</span>' +
        (ok ? '' : '<small>od ' + (c.min < 60 ? c.min + ' min' : (c.min / 60) + ' h') + '</small>') + '</button>';
    }).join('');
  }
  function open() { renderPanel(); sheet.hidden = false; }
  btn.addEventListener('click', open);
  $('#izX').addEventListener('click', function () { sheet.hidden = true; });
  sheet.addEventListener('pointerdown', function (e) { if (e.target === sheet) sheet.hidden = true; });
  var lokal = new URL(location.href).searchParams.get('lokal') === '1';
  $('#izNew').addEventListener('click', function () { join(rid(4, ALPHA), lokal); });
  $('#izJoin').addEventListener('click', function () {
    var c = ($('#izCode').value || '').toUpperCase().replace(/[^A-Z0-9]/g, '');
    if (c.length !== 4) { P.toast('Kód izby má 4 znaky.'); return; }
    join(c, lokal);
  });
  $('#izCode').addEventListener('keydown', function (e) { if (e.key === 'Enter') $('#izJoin').click(); });
  $('#izLeave').addEventListener('click', function () { leave(); });
  $('#izShare').addEventListener('click', function () {
    var u = new URL(location.href); u.searchParams.delete('lokal'); var link = u.toString();
    var txt = 'Poď mixovať so mnou: ' + link;
    if (navigator.share) navigator.share({ title: 'si/mixoval · izba ' + room.code, text: txt, url: link }).catch(function () {});
    else if (navigator.clipboard) navigator.clipboard.writeText(link).then(function () { P.toast('Odkaz skopírovaný.'); }, function () { P.toast(link); });
    else P.toast(link);
  });
  $('#izCurPick').addEventListener('click', function (e) {
    var b = e.target.closest('[data-c]'); if (!b || b.disabled) return;
    me.cs = b.dataset.c; ls('mx.izba.cur', me.cs);
    if (room && room.T) room.T.track({ id: me.id, n: me.n, cs: me.cs, j: me.j });
    renderPanel();
  });
  window.addEventListener('pagehide', function () { if (room) try { room.T.leave(); } catch (e) {} });

  // odkaz s ?izba=KÓD → otvorí sa okno s pripojením (ťuknutie je potrebné kvôli zvuku na iPhone)
  var q = new URL(location.href).searchParams;
  if (q.has('izba')) {
    var code = (q.get('izba') || '').toUpperCase().replace(/[^A-Z0-9]/g, '');
    if (code.length === 4) $('#izCode').value = code;
    open();
    setTimeout(function () { (code.length === 4 && $('#izName').value ? $('#izJoin') : $('#izName')).focus(); }, 60);
  }
  renderBtn();

  // na testy a ladenie
  P.izba = { get room() { return room; }, get me() { return me; }, now: now, get offset() { return offset; }, join: join, leave: leave, CURS: CURS };
})();
