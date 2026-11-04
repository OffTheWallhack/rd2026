/* Rob Lounge – minihry, trh, rebríček a graf profilu.
   Načítava sa pred hlavným skriptom v index.html a používa jeho globály
   (S, fmt, addBal, rec, save, toast, price, makeItem, pickItems, itemHTML, ...)
   až v čase volania, preto môže byť samostatný súbor. */
(function () {
'use strict';

/* ---------- pomocné ---------- */
const rnd = () => { try { const a = new Uint32Array(1); crypto.getRandomValues(a); return a[0] / 4294967296; } catch (e) { return Math.random(); } };
const ri = n => Math.floor(rnd() * n);
const pick = a => a[ri(a.length)];
const CR = n => fmt(n) + ' CR';
const lsGet = (k, d) => { try { return localStorage.getItem(k) ?? d; } catch (e) { return d; } };
const lsSet = (k, v) => { try { localStorage.setItem(k, v); } catch (e) {} };
const shuffle = a => { for (let i = a.length - 1; i > 0; i--) { const j = ri(i + 1); [a[i], a[j]] = [a[j], a[i]]; } return a; };

/* trvalý stav hier (ukladá sa spolu so S) */
function D() { return S.rlg || (S.rlg = { pend: [], hist: [], mkt: { list: [] }, sell: [], wd: '', gd: { d: '', cr: 0 }, lbw: { k: '', base: 0 } }); }

/* ---------- čistá logika (testovateľná) ---------- */
const cval = c => c.r === 0 ? 11 : Math.min(10, c.r + 1);
function hv(cs) { let t = 0, a = 0; for (const c of cs) { t += cval(c); if (c.r === 0) a++; } while (t > 21 && a) { t -= 10; a--; } return { t, soft: a > 0 }; }
const isBJ = cs => cs.length === 2 && hv(cs).t === 21;
function bjResult(h, dealer) {
  const v = hv(h.c).t, dv = hv(dealer).t, dBJ = isBJ(dealer), nat = isBJ(h.c) && !h.sp;
  if (v > 21) return ['bust', 0];
  if (nat && !dBJ) return ['bj', h.bet * 2.5];
  if (dBJ) return nat ? ['push', h.bet] : ['lose', 0];
  if (dv > 21 || v > dv) return ['win', h.bet * 2];
  return v === dv ? ['push', h.bet] : ['lose', 0];
}

const PL_S = { low: { b: 1.15, o: 0.6 }, med: { b: 2.7, o: 0.9 }, high: { b: 4.4, o: 1.0 } };
function plkTable(rows, risk) {
  const { b, o } = PL_S[risk], raw = [], p = [];
  let c = 1;
  for (let k = 0; k <= rows; k++) {
    p.push(c / Math.pow(2, rows)); c = c * (rows - k) / (k + 1);
    const d = Math.abs(k - rows / 2) / (rows / 2);
    raw.push(Math.max(0, Math.exp(b * Math.pow(d, 1.5)) - o));
  }
  const ev = raw.reduce((a, x, k) => a + x * p[k], 0), sc = 0.97 / ev;
  return raw.map(x => Math.round(x * sc * 100) / 100);
}
const crashPoint = () => { const u = rnd(); return Math.max(1, Math.min(1000, Math.floor(0.97 / (1 - u) * 100) / 100)); };

const SCR_SYM = [1, 2, 3, 5, 10, 25, 100], SCR_DW = [30, 22, 15, 12, 9, 6, 3];
const SCR_PRIZE = [[0, .5945], [1, .2], [2, .11], [3, .05], [5, .03], [10, .012], [25, .003], [100, .0005]];
function scrRoll() { let x = rnd(); for (const [v, p] of SCR_PRIZE) { if (x < p) return v; x -= p; } return 0; }
function scrGrid(win) {
  const cnt = {}, out = [], add = v => { cnt[v] = (cnt[v] || 0) + 1; out.push(v); };
  if (win) for (let i = 0; i < 3; i++) add(win);
  while (out.length < 9) {
    const w = SCR_SYM.map((s, k) => (s === win || (cnt[s] || 0) >= 2) ? 0 : SCR_DW[k]);
    let tot = 0; w.forEach(x => tot += x);
    let x = rnd() * tot, k = 0; for (; k < w.length; k++) { x -= w[k]; if (x < 0) break; }
    add(SCR_SYM[Math.min(k, w.length - 1)]);
  }
  return shuffle(out);
}
const hiloP = r => ({ hi: (12 - r) / 13, lo: r / 13 });

function mulberry(a) { return () => { a |= 0; a = a + 0x6D2B79F5 | 0; let t = Math.imul(a ^ a >>> 15, 1 | a); t = t + Math.imul(t ^ t >>> 7, 61 | t) ^ t; return ((t ^ t >>> 14) >>> 0) / 4294967296; }; }
function gauss(r) { let u = 0; while (!u) u = r(); const v = r(); return Math.sqrt(-2 * Math.log(u)) * Math.cos(2 * Math.PI * v); }

/* ---------- nevybavené výplaty (kolá, ktoré sa dokončia aj po obnovení stránky) ---------- */
function pendAdd(k, bet, pay, extra) { const p = Object.assign({ id: uid(), k, bet, pay }, extra || {}); D().pend.push(p); save(); return p.id; }
function pendGet(id) { return D().pend.find(x => x.id === id); }
function pendSet(id, pay) { const p = pendGet(id); if (p) { p.pay = r2(pay); save(); } }
function pendBet(id, add) { const p = pendGet(id); if (p) { p.bet = r2(p.bet + add); save(); } }
function pendDone(id) {
  const d = D(), i = d.pend.findIndex(x => x.id === id);
  if (i < 0) return 0;
  const p = d.pend.splice(i, 1)[0];
  if (p.items && p.items.length) S.inv.unshift(...p.items);
  if (p.free) { if (p.pay > 0) { addBal(p.pay); claimExtra(p.pay); } }
  else { if (!p.skin && p.pay > 0) addBal(p.pay); rec(p.k, p.bet, p.pay); }
  save();
  return p.pay;
}
function take(bet) {
  if (!(bet >= 0.1)) { toast('Minimálna stávka je 0,10 CR'); return false; }
  if (bet > S.bal + 1e-9) { toast('Nemáš dosť kreditov'); return false; }
  addBal(-bet); return true;
}

/* ---------- stávkový box ---------- */
const lastBet = {};
function betBox(id, def) {
  const v = lastBet[id] != null ? lastBet[id] : def;
  return `<div class="gbet"><input id="${id}" inputmode="decimal" value="${v}" aria-label="Stávka v kreditoch"><button class="btn sm" data-q="${id}:half">½</button><button class="btn sm" data-q="${id}:dbl">2×</button><button class="btn sm" data-q="${id}:max">Max</button>${[1, 5, 25].map(x => `<button class="btn sm ghost" data-q="${id}:${x}">${x}</button>`).join('')}</div>`;
}
const getBet = id => { const b = amt($('#' + id)); lastBet[id] = b; return b; };

/* ---------- moduly ---------- */
const M = {};
const GAMES = [['bj', 'Blackjack'], ['hilo', 'Hi-Lo'], ['cf', 'Coinflip'], ['scr', 'Losy'], ['plk', 'Plinko'], ['crash', 'Crash'], ['wheel', 'Koleso'], ['guess', 'Uhádni skin'], ['hl', 'Cena skinu'], ['mkt', 'Trh'], ['lb', 'Rebríček']];
let cur = lsGet('rl_game', 'bj');
const body = () => $('#gbody');
const win = (net) => net > 0.004 ? 'win' : net < -0.004 ? 'lose' : '';

function render() {
  const v = $('#v-games');
  if (!M[cur]) cur = 'bj';
  if (!$('#gnav')) v.innerHTML = `<div class="gnav chips" id="gnav">${GAMES.map(([k, n]) => `<button class="chip" data-a="nav.${k}" data-k="${k}">${n}</button>`).join('')}</div><div id="gbody"></div>`;
  document.querySelectorAll('#gnav .chip').forEach(c => c.classList.toggle('on', c.dataset.k === cur));
  M[cur].render();
}
function go(k) { if (!M[k]) return; cur = k; lsSet('rl_game', k); render(); }

document.addEventListener('click', e => {
  const q = e.target.closest('[data-q]');
  if (q && q.closest('#v-games')) {
    const [id, cmd] = q.dataset.q.split(':'), i = $('#' + id); if (!i) return;
    const v = amt(i);
    i.value = cmd === 'half' ? Math.max(0.1, v / 2).toFixed(2) : cmd === 'dbl' ? (v * 2).toFixed(2) : cmd === 'max' ? (Math.floor(S.bal * 100) / 100).toFixed(2) : (+cmd).toFixed(2);
    lastBet[id] = i.value; return;
  }
  const a = e.target.closest('[data-a]');
  if (!a || !a.closest('#v-games') || a.disabled) return;
  const [m, fn] = a.dataset.a.split('.');
  if (m === 'nav') return go(fn);
  try { M[m][fn](a.dataset.v, a); } catch (err) { console.error(err); toast('Chyba hry: ' + (err.message || err)); }
});
document.addEventListener('input', e => { if (e.target.closest && e.target.closest('.gbet')) lastBet[e.target.id] = e.target.value; });

/* ===== karty ===== */
const SUITS = ['♠', '♥', '♦', '♣'], RANKS = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];
const cardHTML = (c, hide) => hide ? '<div class="pc back"></div>' : `<div class="pc${c.s === 1 || c.s === 2 ? ' red' : ''}"><b>${RANKS[c.r]}</b><i>${SUITS[c.s]}</i></div>`;
const rcard = () => ({ r: ri(13), s: ri(4) });

/* ===== BLACKJACK ===== */
const BJ = { ph: 'bet', shoe: [], hands: [], ai: 0, dealer: [], ins: 0, pid: null, msg: '', inv: 0 };
function newShoe() { const s = []; for (let d = 0; d < 6; d++) for (let r = 0; r < 13; r++) for (let k = 0; k < 4; k++) s.push({ r, s: k }); BJ.shoe = shuffle(s); }
const draw = () => { if (BJ.shoe.length < 20) newShoe(); return BJ.shoe.pop(); };
function bjEnd(noDraw) {
  BJ.ph = 'dealer'; render();
  const live = BJ.hands.some(h => hv(h.c).t <= 21);
  const step = () => {
    if (!noDraw && live && hv(BJ.dealer).t < 17) { BJ.dealer.push(draw()); render(); setTimeout(step, 450); }
    else bjSettle();
  };
  setTimeout(step, noDraw ? 250 : 400);
}
function bjSettle() {
  const B = BJ; let tot = 0;
  B.hands.forEach(h => { const [res, pay] = bjResult(h, B.dealer); h.res = res; h.pay = pay; tot += pay; });
  if (B.ins && isBJ(B.dealer)) tot += B.ins * 3;
  tot = r2(tot); pendSet(B.pid, tot); pendDone(B.pid); B.pid = null;
  const net = r2(tot - B.inv);
  B.msg = net > 0.004 ? `Výhra +${CR(net)}` : net < -0.004 ? `Prehra −${CR(-net)}` : 'Remíza';
  B.net = net; B.ph = 'done';
  if (net > 0.004) chime(net >= B.inv * 1.4 ? 3 : 2); else if (net < -0.004) beep(180, .25, .05, 'sawtooth');
  render();
}
function bjAdvance() {
  const i = BJ.hands.findIndex(h => !h.done && hv(h.c).t < 21);
  if (i < 0) { BJ.hands.forEach(h => h.done = true); bjEnd(false); } else { BJ.ai = i; render(); }
}
function bjPeek() {
  const d = BJ.dealer, tenUp = cval(d[0]) === 10 || d[0].r === 0;
  if ((tenUp && isBJ(d)) || isBJ(BJ.hands[0].c)) return bjEnd(true);
  BJ.ph = 'play'; bjAdvance();
}
M.bj = {
  render() {
    const B = BJ, hide = B.ph === 'ins' || B.ph === 'play';
    const dtot = B.dealer.length ? (hide ? (B.dealer[0].r === 0 ? 'A' : cval(B.dealer[0])) : hv(B.dealer).t) : '';
    const h0 = B.hands[B.ai], canDbl = B.ph === 'play' && h0 && h0.c.length === 2 && S.bal >= h0.bet,
      canSpl = B.ph === 'play' && B.hands.length === 1 && h0.c.length === 2 && cval(h0.c[0]) === cval(h0.c[1]) && S.bal >= h0.bet;
    const hands = B.hands.map((h, i) => {
      const v = hv(h.c); const res = h.res ? ({ bj: 'Blackjack 3:2', win: 'Výhra', push: 'Remíza', lose: 'Prehra', bust: 'Bust' })[h.res] : '';
      return `<div class="bjh${B.ph === 'play' && i === B.ai && B.hands.length > 1 ? ' act' : ''}"><div class="cards">${h.c.map(c => cardHTML(c)).join('')}</div><div class="hl"><b>${v.t}${v.soft && v.t < 21 ? ' (soft)' : ''}</b> · ${CR(h.bet)}${res ? ` · <span class="${h.res === 'win' || h.res === 'bj' ? 'win' : h.res === 'push' ? '' : 'lose'}">${res}</span>` : ''}</div></div>`;
    }).join('');
    let ctl;
    if (B.ph === 'bet' || B.ph === 'done') ctl = `${betBox('bj-bet', 1)}<button class="btn gold gmain" data-a="bj.deal">${B.ph === 'done' ? 'Rozdať znova' : 'Rozdať'}</button>`;
    else if (B.ph === 'ins') ctl = `<div class="betrow"><button class="btn gold" data-a="bj.ins" data-v="1" ${S.bal >= B.hands[0].bet / 2 ? '' : 'disabled'}>Poistenie ${CR(r2(B.hands[0].bet / 2))}</button><button class="btn" data-a="bj.ins" data-v="0">Bez poistenia</button></div><p class="sub gsm">Dealer ukazuje eso. Poistenie platí 2:1, ak má dealer blackjack.</p>`;
    else if (B.ph === 'play') ctl = `<div class="betrow gact"><button class="btn gold" data-a="bj.hit">Karta</button><button class="btn" data-a="bj.stand">Stačí</button><button class="btn" data-a="bj.dbl" ${canDbl ? '' : 'disabled'}>Double</button><button class="btn" data-a="bj.split" ${canSpl ? '' : 'disabled'}>Split</button></div>`;
    else ctl = '<p class="sub gsm">Dealer hrá…</p>';
    body().innerHTML = `<div class="panel gpanel"><div class="shead"><h2>Blackjack</h2><span class="lab">6 balíčkov · blackjack 3:2 · dealer stojí na 17</span></div>
      <div class="bjt"><span class="lab">Dealer ${dtot !== '' ? '· ' + dtot : ''}</span><div class="cards">${B.dealer.map((c, i) => cardHTML(c, hide && i === 1)).join('')}</div></div>
      <div class="bjt">${hands || '<div class="empty">Zadaj stávku a rozdaj karty</div>'}</div>
      ${B.msg ? `<p class="gres ${win(B.net)}">${B.msg}</p>` : ''}
      <div class="gctl">${ctl}</div></div>`;
  },
  deal() {
    if (BJ.ph === 'play' || BJ.ph === 'ins' || BJ.ph === 'dealer') return;
    const bet = getBet('bj-bet'); if (!take(bet)) return;
    if (BJ.shoe.length < 80) newShoe();
    BJ.hands = [{ c: [draw(), draw()], bet, sp: false, done: false }]; BJ.dealer = [draw(), draw()];
    BJ.ai = 0; BJ.ins = 0; BJ.msg = ''; BJ.net = 0; BJ.inv = bet;
    BJ.pid = pendAdd('bj', bet, 0);
    beep(420, .06, .04);
    if (BJ.dealer[0].r === 0) { BJ.ph = 'ins'; render(); } else bjPeek();
  },
  ins(v) {
    if (BJ.ph !== 'ins') return;
    if (v === '1') { const x = r2(BJ.hands[0].bet / 2); if (!take(x)) return; BJ.ins = x; BJ.inv = r2(BJ.inv + x); pendBet(BJ.pid, x); }
    bjPeek();
  },
  hit() { if (BJ.ph !== 'play') return; const h = BJ.hands[BJ.ai]; h.c.push(draw()); if (hv(h.c).t >= 21) h.done = true; beep(500, .05, .04); bjAdvance(); },
  stand() { if (BJ.ph !== 'play') return; BJ.hands[BJ.ai].done = true; bjAdvance(); },
  dbl() {
    if (BJ.ph !== 'play') return; const h = BJ.hands[BJ.ai];
    if (h.c.length !== 2 || !take(h.bet)) return;
    pendBet(BJ.pid, h.bet); BJ.inv = r2(BJ.inv + h.bet); h.bet = r2(h.bet * 2); h.c.push(draw()); h.done = true; bjAdvance();
  },
  split() {
    if (BJ.ph !== 'play' || BJ.hands.length !== 1) return; const h = BJ.hands[0];
    if (h.c.length !== 2 || cval(h.c[0]) !== cval(h.c[1]) || !take(h.bet)) return;
    pendBet(BJ.pid, h.bet); BJ.inv = r2(BJ.inv + h.bet);
    const a = { c: [h.c[0], draw()], bet: h.bet, sp: true, done: false }, b = { c: [h.c[1], draw()], bet: h.bet, sp: true, done: false };
    if (h.c[0].r === 0) a.done = b.done = true;
    BJ.hands = [a, b]; BJ.ai = 0; bjAdvance();
  }
};

/* ===== HI-LO ===== */
const HL = { ph: 'bet', cur: null, mult: 1, bet: 0, pid: null, hist: [], msg: '', net: 0 };
M.hilo = {
  render() {
    const H = HL, play = H.ph === 'play', p = play ? hiloP(H.cur.r) : null;
    const f = x => x > 0 ? r2(0.96 / x) : 0;
    let ctl;
    if (!play) ctl = `${betBox('hilo-bet', 1)}<button class="btn gold gmain" data-a="hilo.start">${H.ph === 'done' ? 'Hrať znova' : 'Začať'}</button>`;
    else ctl = `<div class="betrow gact"><button class="btn gold" data-a="hilo.g" data-v="hi" ${p.hi > 0 ? '' : 'disabled'}>Vyššie ${p.hi > 0 ? '×' + f(p.hi).toFixed(2) : ''}</button><button class="btn gold" data-a="hilo.g" data-v="lo" ${p.lo > 0 ? '' : 'disabled'}>Nižšie ${p.lo > 0 ? '×' + f(p.lo).toFixed(2) : ''}</button><button class="btn" data-a="hilo.cash" ${H.mult > 1 ? '' : 'disabled'}>Vybrať ${CR(r2(H.bet * H.mult))}</button></div><p class="sub gsm">Esá sú nízke, kráľ je najvyšší. Rovnaká karta je prehra.</p>`;
    body().innerHTML = `<div class="panel gpanel"><div class="shead"><h2>Hi-Lo</h2><span class="lab">hádaj vyššiu alebo nižšiu kartu · výber kedykoľvek</span></div>
      <div class="hilo"><div class="cards big">${H.cur ? cardHTML(H.cur) : '<div class="pc back"></div>'}</div>
      <div class="hhist">${H.hist.map(c => cardHTML(c)).join('')}</div></div>
      ${play ? `<p class="gmult">Násobiteľ <b>×${H.mult.toFixed(2)}</b></p>` : ''}
      ${H.msg ? `<p class="gres ${win(H.net)}">${H.msg}</p>` : ''}
      <div class="gctl">${ctl}</div></div>`;
  },
  start() {
    if (HL.ph === 'play') return; const bet = getBet('hilo-bet'); if (!take(bet)) return;
    Object.assign(HL, { ph: 'play', cur: rcard(), mult: 1, bet, hist: [], msg: '', net: 0 }); HL.pid = pendAdd('hilo', bet, 0); render();
  },
  g(dir) {
    if (HL.ph !== 'play') return; const p = hiloP(HL.cur.r), pr = dir === 'hi' ? p.hi : p.lo; if (pr <= 0) return;
    const nx = rcard(), ok = dir === 'hi' ? nx.r > HL.cur.r : nx.r < HL.cur.r;
    HL.hist.unshift(HL.cur); HL.hist = HL.hist.slice(0, 8); HL.cur = nx;
    if (ok) { HL.mult = r2(HL.mult * (0.96 / pr)); pendSet(HL.pid, HL.bet * HL.mult); beep(600, .08, .05, 'triangle'); render(); }
    else { pendDone(HL.pid); HL.pid = null; HL.ph = 'done'; HL.net = -HL.bet; HL.msg = `Prehra −${CR(HL.bet)}`; beep(180, .25, .05, 'sawtooth'); render(); }
  },
  cash() {
    if (HL.ph !== 'play' || HL.mult <= 1) return; const pay = r2(HL.bet * HL.mult);
    pendSet(HL.pid, pay); pendDone(HL.pid); HL.pid = null; HL.ph = 'done'; HL.net = r2(pay - HL.bet); HL.msg = `Vybrané ${CR(pay)} (+${CR(HL.net)})`; chime(2); render();
  }
};

/* ===== COINFLIP ===== */
const CF = { mode: 'cr', side: 'ct', busy: false, rot: 0, sel: null, msg: '', net: 0 };
M.cf = {
  render() {
    const it = CF.sel && S.inv.find(x => x.id === CF.sel && !x.v);
    body().innerHTML = `<div class="panel gpanel"><div class="shead"><h2>Coinflip</h2><span class="lab">50 / 50 · kredity ×1,96 · skin proti skinu</span></div>
      <div class="coinwrap"><div class="coin" id="coin" style="transform:rotateY(${CF.rot}deg)"><span class="f ct">CT</span><span class="f t">T</span></div></div>
      <div class="seg gseg"><button data-a="cf.mode" data-v="cr" class="${CF.mode === 'cr' ? 'on' : ''}">Kredity</button><button data-a="cf.mode" data-v="skin" class="${CF.mode === 'skin' ? 'on' : ''}">Skin</button></div>
      <div class="seg gseg"><button data-a="cf.side" data-v="ct" class="${CF.side === 'ct' ? 'on' : ''}">CT</button><button data-a="cf.side" data-v="t" class="${CF.side === 't' ? 'on' : ''}">T</button></div>
      ${CF.msg ? `<p class="gres ${win(CF.net)}">${CF.msg}</p>` : ''}
      <div class="gctl">${CF.mode === 'cr' ? betBox('cf-bet', 1) : `<div class="betrow"><button class="btn" data-a="cf.pick">${it ? 'Zmeniť skin' : 'Vybrať skin'}</button>${it ? `<span class="money">${CR(price(it))}</span>` : ''}</div>${it ? card(it, { cls: 'cfit' }) : '<p class="sub gsm">Súper dá skin podobnej hodnoty. Víťaz si berie oba.</p>'}`}
      <button class="btn gold gmain" data-a="cf.flip" ${CF.busy ? 'disabled' : ''}>Hodiť mincou</button></div></div>`;
  },
  mode(v) { if (CF.busy) return; CF.mode = v; CF.msg = ''; render(); },
  side(v) { if (CF.busy) return; CF.side = v; render(); },
  pick() { if (CF.busy) return; pickItems('Skin do coinflipu', ids => { CF.sel = [...ids][0] || null; render(); }, 1); },
  flip() {
    if (CF.busy) return;
    const out = rnd() < 0.5 ? 'ct' : 't', won = out === CF.side; let pid, msgWin, msgLose;
    if (CF.mode === 'cr') {
      const bet = getBet('cf-bet'); if (!take(bet)) return;
      const pay = won ? r2(bet * 1.96) : 0; pid = pendAdd('cf', bet, pay);
      msgWin = `Padlo ${out.toUpperCase()} · výhra +${CR(r2(pay - bet))}`; msgLose = `Padlo ${out.toUpperCase()} · prehra −${CR(bet)}`; CF.net = won ? r2(pay - bet) : -bet;
    } else {
      const it = CF.sel && S.inv.find(x => x.id === CF.sel && !x.v); if (!it) return toast('Vyber skin');
      const pv = price(it), opp = makeItem(pv * (0.9 + rnd() * 0.2), pv > 60); if (!opp) return toast('Nenašiel sa súper, skús iný skin');
      S.inv = S.inv.filter(x => x.id !== it.id);
      const ov = price(opp);
      pid = pendAdd('cf', pv, won ? r2(pv + ov) : 0, { skin: true, items: won ? [it, opp] : [] });
      const [wn, fp] = ITEMS[opp.i];
      msgWin = `Padlo ${out.toUpperCase()} · získal si ${wn} | ${fp || 'Vanilla'} (${CR(ov)})`; msgLose = `Padlo ${out.toUpperCase()} · skin je preč (${CR(pv)})`; CF.net = won ? ov : -pv; CF.sel = null;
    }
    CF.busy = true; CF.msg = '';
    const c = $('#coin'), base = Math.floor(CF.rot / 360), to = (base + 6) * 360 + (out === 't' ? 180 : 0);
    $('[data-a="cf.flip"]').disabled = true;
    c.style.transition = 'transform 1.7s cubic-bezier(.2,.7,.2,1)'; void c.offsetWidth; c.style.transform = `rotateY(${to}deg)`; CF.rot = to;
    for (let k = 0; k < 6; k++) setTimeout(() => beep(700 + k * 40, .03, .03), k * 250);
    setTimeout(() => { pendDone(pid); CF.busy = false; CF.msg = won ? msgWin : msgLose; if (won) chime(2); else beep(180, .25, .05, 'sawtooth'); if (cur === 'cf') render(); }, 1800);
  }
};

/* ===== STIERACIE LOSY ===== */
const SCR_T = [{ n: 'Bronze', c: 1, col: '#b0773c' }, { n: 'Silver', c: 5, col: '#aab4c0' }, { n: 'Gold', c: 25, col: '#e3a53c' }, { n: 'Diamond', c: 100, col: '#6ee0ff' }];
const SCR = { tier: 0, card: null, msg: '', net: 0 };
function scrReveal() {
  const c = SCR.card; if (!c || c.revealed) return; c.revealed = true;
  const cv = $('#scrcv'); if (cv) cv.classList.add('gone');
  document.querySelectorAll('#scrgrid .sc').forEach(el => { if (c.win && +el.dataset.v === c.win) el.classList.add('hit'); });
  const pay = pendDone(c.pid), net = r2(pay - c.cost); SCR.net = net;
  SCR.msg = pay > 0 ? `Výhra ×${c.win} · +${CR(net)}` : `Bez výhry · −${CR(c.cost)}`;
  if (pay > 0) chime(c.win >= 10 ? 4 : 2); else beep(200, .2, .04, 'sawtooth');
  const m = $('#scrmsg'); if (m) { m.textContent = SCR.msg; m.className = 'gres ' + win(net); }
  const b = $('[data-a="scr.buy"]'); if (b) b.textContent = 'Kúpiť ďalší los';
  const w = $('[data-a="scr.all"]'); if (w) w.hidden = true;
}
function scrSetup() {
  const cv = $('#scrcv'); if (!cv || !SCR.card || SCR.card.revealed) return;
  const r = cv.getBoundingClientRect(), dpr = Math.min(2, devicePixelRatio || 1), T = SCR_T[SCR.card.tier];
  cv.width = Math.max(1, r.width * dpr); cv.height = Math.max(1, r.height * dpr);
  const g = cv.getContext('2d'); g.scale(dpr, dpr);
  const gr = g.createLinearGradient(0, 0, r.width, r.height); gr.addColorStop(0, T.col); gr.addColorStop(.5, '#eef2f7'); gr.addColorStop(1, T.col);
  g.fillStyle = gr; g.fillRect(0, 0, r.width, r.height);
  g.fillStyle = 'rgba(0,0,0,.16)'; g.font = '700 13px sans-serif';
  for (let y = 20; y < r.height; y += 28) for (let x = (Math.round(y / 28) % 2) * 36; x < r.width; x += 72) g.fillText('RASPUJ', x, y);
  let down = false, lx = 0, ly = 0, n = 0;
  const pos = e => { const b = cv.getBoundingClientRect(); return [e.clientX - b.left, e.clientY - b.top]; };
  const stroke = (x, y) => { g.globalCompositeOperation = 'destination-out'; g.lineWidth = 36; g.lineCap = 'round'; g.beginPath(); g.moveTo(lx, ly); g.lineTo(x, y); g.stroke(); lx = x; ly = y; };
  const check = () => {
    try {
      const d = g.getImageData(0, 0, cv.width, cv.height).data; let clear = 0, tot = 0;
      for (let y = 0; y < cv.height; y += 14) for (let x = 0; x < cv.width; x += 14) { tot++; if (d[(y * cv.width + x) * 4 + 3] < 40) clear++; }
      if (clear / tot > 0.55) scrReveal();
    } catch (e) { scrReveal(); }
  };
  cv.onpointerdown = e => { down = true; try { cv.setPointerCapture(e.pointerId); } catch (x) {} [lx, ly] = pos(e); stroke(lx + .1, ly); };
  cv.onpointermove = e => { if (!down) return; const [x, y] = pos(e); stroke(x, y); if (++n % 10 === 0) { check(); beep(900 + (n % 5) * 40, .02, .015, 'triangle'); } };
  cv.onpointerup = cv.onpointercancel = () => { down = false; check(); };
}
M.scr = {
  render() {
    const T = SCR_T[SCR.tier], c = SCR.card;
    body().innerHTML = `<div class="panel gpanel"><div class="shead"><h2>Stieracie losy</h2><span class="lab">3 rovnaké násobiteľné = výhra · návratnosť ≈ 96 %</span></div>
      <div class="chips gtier">${SCR_T.map((t, k) => `<button class="chip${k === SCR.tier ? ' on' : ''}" data-a="scr.tier" data-v="${k}" ${c && !c.revealed ? 'disabled' : ''}>${t.n} · ${t.c} CR</button>`).join('')}</div>
      <div class="scr" style="--tc:${T.col}">${c ? `<div class="scrgrid" id="scrgrid">${c.grid.map(v => `<div class="sc" data-v="${v}"><b>×${v}</b></div>`).join('')}</div>${c.revealed ? '' : '<canvas id="scrcv" class="scrcv" aria-label="Stierací povrch"></canvas>'}` : `<div class="scrgrid ph">${Array(9).fill('<div class="sc"><b>?</b></div>').join('')}</div>`}</div>
      <p id="scrmsg" class="gres ${win(SCR.net)}">${SCR.msg}</p>
      <div class="gctl"><button class="btn gold gmain" data-a="scr.buy">${c ? (c.revealed ? 'Kúpiť ďalší los' : 'Kúpiť ďalší (odkryje tento)') : 'Kúpiť los za ' + CR(T.c)} </button>
      <button class="btn" data-a="scr.all" ${c && !c.revealed ? '' : 'hidden'}>Zotrieť všetko</button></div>
      <details class="gdet"><summary class="lab">Výhry a šance</summary><div class="pay">${SCR_PRIZE.filter(p => p[0]).map(([m, p]) => `<div><b>×${m}</b><span class="lab">${(p * 100).toFixed(p < .01 ? 2 : 1)} %</span></div>`).join('')}</div></details></div>`;
    scrSetup();
  },
  tier(v) { if (SCR.card && !SCR.card.revealed) return; SCR.tier = +v; render(); },
  buy() {
    if (SCR.card && !SCR.card.revealed) scrReveal();
    const T = SCR_T[SCR.tier]; if (!take(T.c)) return;
    const w = scrRoll(), grid = scrGrid(w), pid = pendAdd('scr', T.c, r2(T.c * w));
    SCR.card = { tier: SCR.tier, cost: T.c, win: w, grid, pid, revealed: false }; SCR.msg = ''; SCR.net = 0; beep(500, .06, .04); render();
  },
  all() { scrReveal(); }
};

/* ===== PLINKO ===== */
const PLK = { rows: +lsGet('rl_plk_rows', 12), risk: lsGet('rl_plk_risk', 'med'), balls: [], raf: 0, fl: {}, msg: '', net: 0 };
const PLW = 340, PLH = 380;
function plkGeom() { const r = PLK.rows; return { dx: (PLW - 36) / r, dy: (PLH - 74) / r, cx: PLW / 2, pt: 22 }; }
function plkDraw() {
  const cv = $('#plkcv'); if (!cv) return; const g = cv.getContext('2d'), { dx, dy, cx, pt } = plkGeom(), R = PLK.rows, tb = plkTable(R, PLK.risk);
  g.setTransform(cv.width / PLW, 0, 0, cv.height / PLH, 0, 0); g.clearRect(0, 0, PLW, PLH);
  g.fillStyle = '#c9d2de';
  for (let r = 0; r < R; r++) for (let j = 0; j <= r; j++) { g.beginPath(); g.arc(cx + (j - r / 2) * dx, pt + r * dy, 2.2, 0, 6.3); g.fill(); }
  const by = pt + R * dy + 8, bw = dx - 3, now = performance.now();
  tb.forEach((m, k) => {
    const x = cx + (k - R / 2) * dx, hot = PLK.fl[k] && now - PLK.fl[k] < 500;
    g.fillStyle = m >= 20 ? '#c0392b' : m >= 5 ? '#d4731f' : m >= 1.5 ? '#c79a1d' : m >= 1 ? '#6f7d3a' : '#44566b';
    if (hot) g.fillStyle = '#fff';
    g.beginPath(); g.roundRect ? g.roundRect(x - bw / 2, by + (hot ? 3 : 0), bw, 24, 4) : g.rect(x - bw / 2, by, bw, 24); g.fill();
    const lab = m >= 10 ? String(Math.round(m)) : (Math.round(m * 10) / 10).toString();
    g.fillStyle = hot ? '#111' : '#fff'; g.font = `700 ${R > 12 ? 8 : 10}px monospace`; g.textAlign = 'center'; g.fillText(lab, x, by + 16 + (hot ? 3 : 0));
  });
  g.fillStyle = '#e3a53c';
  PLK.balls.forEach(b => { g.beginPath(); g.arc(b.x, b.y, 6, 0, 6.3); g.fill(); });
}
function plkTick() {
  const { dx, dy, cx, pt } = plkGeom(), now = performance.now(), R = PLK.rows, ROW = 135;
  PLK.balls = PLK.balls.filter(b => {
    const t = (now - b.t0) / ROW, r = Math.min(R, Math.floor(t)), f = Math.min(1, t - r);
    if (t >= R) {
      const k = b.path.reduce((a, x) => a + x, 0); PLK.fl[k] = now;
      const pay = pendDone(b.pid), net = r2(pay - b.bet), m = plkTable(R, PLK.risk)[k];
      PLK.msg = `×${m} · ${net >= 0 ? '+' : '−'}${CR(Math.abs(net))}`; PLK.net = net;
      if (pay > b.bet) chime(m >= 10 ? 4 : 2); else beep(300, .06, .03);
      const mm = $('#plkmsg'); if (mm) { mm.textContent = PLK.msg; mm.className = 'gres ' + win(net); }
      return false;
    }
    const kr = b.path.slice(0, r).reduce((a, x) => a + x, 0), kn = kr + (b.path[r] || 0);
    const e = 1 - Math.pow(1 - f, 2), x0 = cx + (kr - r / 2) * dx, x1 = cx + (kn - (r + 1) / 2) * dx;
    b.x = x0 + (x1 - x0) * e; b.y = pt + r * dy + dy * f - Math.sin(f * Math.PI) * 6;
    return true;
  });
  plkDraw();
  if (PLK.balls.length) PLK.raf = requestAnimationFrame(plkTick); else PLK.raf = 0;
}
M.plk = {
  render() {
    const tb = plkTable(PLK.rows, PLK.risk);
    body().innerHTML = `<div class="panel gpanel"><div class="shead"><h2>Plinko</h2><span class="lab">návratnosť 97 % · najviac ${Math.max(...tb)}×</span></div>
      <canvas id="plkcv" class="plkcv" width="${PLW * 2}" height="${PLH * 2}"></canvas>
      <p id="plkmsg" class="gres ${win(PLK.net)}">${PLK.msg}</p>
      <div class="seg gseg">${['low:Nízke', 'med:Stredné', 'high:Vysoké'].map(s => { const [k, n] = s.split(':'); return `<button data-a="plk.risk" data-v="${k}" class="${PLK.risk === k ? 'on' : ''}">${n}</button>`; }).join('')}</div>
      <div class="seg gseg">${[8, 12, 16].map(n => `<button data-a="plk.rows" data-v="${n}" class="${PLK.rows === n ? 'on' : ''}">${n} radov</button>`).join('')}</div>
      <div class="gctl">${betBox('plk-bet', 1)}<button class="btn gold gmain" data-a="plk.drop">Pustiť guľôčku</button></div></div>`;
    plkDraw(); if (PLK.balls.length && !PLK.raf) PLK.raf = requestAnimationFrame(plkTick);
  },
  risk(v) { if (PLK.balls.length) return toast('Počkaj, kým dopadnú guľôčky'); PLK.risk = v; lsSet('rl_plk_risk', v); render(); },
  rows(v) { if (PLK.balls.length) return toast('Počkaj, kým dopadnú guľôčky'); PLK.rows = +v; lsSet('rl_plk_rows', v); render(); },
  drop() {
    if (PLK.balls.length >= 6) return toast('Naraz najviac 6 guľôčok');
    const bet = getBet('plk-bet'); if (!take(bet)) return;
    const R = PLK.rows, path = Array.from({ length: R }, () => rnd() < .5 ? 1 : 0), k = path.reduce((a, x) => a + x, 0), pay = r2(bet * plkTable(R, PLK.risk)[k]);
    const pid = pendAdd('plk', bet, pay), g = plkGeom();
    PLK.balls.push({ path, pid, bet, t0: performance.now(), x: g.cx, y: g.pt });
    beep(520, .04, .03); if (!PLK.raf) PLK.raf = requestAnimationFrame(plkTick);
  }
};

/* ===== CRASH ===== */
const CRH = { ph: 'bet', at: 1, t0: 0, pid: null, bet: 0, cashed: 0, auto: 0, raf: 0, hist: JSON.parse(lsGet('rl_crash', '[]')), msg: '', net: 0, m: 1 };
const crM = t => Math.exp(0.1 * t);
function crDraw() {
  const cv = $('#crcv'); if (!cv) return; const g = cv.getContext('2d'), W = cv.width, H = cv.height, dpr = W / 340;
  const t = (performance.now() - CRH.t0) / 1000, tm = CRH.ph === 'run' ? t : Math.log(Math.max(1.0001, CRH.at)) / 0.1, mx = Math.max(2, (CRH.ph === 'bet' ? 1 : CRH.m) * 1.25), tx = Math.max(8, tm * 1.1);
  g.clearRect(0, 0, W, H); g.strokeStyle = '#252c37'; g.lineWidth = 1 * dpr;
  for (let i = 1; i < 4; i++) { g.beginPath(); g.moveTo(0, H - H * i / 4); g.lineTo(W, H - H * i / 4); g.stroke(); }
  if (CRH.ph === 'bet') return;
  g.strokeStyle = CRH.ph === 'crashed' ? '#e2645c' : '#59d38a'; g.lineWidth = 3 * dpr; g.beginPath();
  for (let s = 0; s <= tm + 0.001; s += tm / 80 || .1) { const x = s / tx * W, y = H - (crM(s) - 1) / (mx - 1) * (H - 10 * dpr) - 5 * dpr; s === 0 ? g.moveTo(x, y) : g.lineTo(x, y); }
  g.stroke();
}
function crTick() {
  const C = CRH; if (C.ph !== 'run') { C.raf = 0; return; }
  const t = (performance.now() - C.t0) / 1000, m = crM(t); C.m = Math.min(m, C.at);
  if (C.pid && C.auto && m >= C.auto && C.auto <= C.at) crCash(C.auto);
  if (m >= C.at) {
    C.ph = 'crashed'; C.m = C.at; C.hist.unshift(C.at); C.hist = C.hist.slice(0, 15); lsSet('rl_crash', JSON.stringify(C.hist));
    if (C.pid) { pendDone(C.pid); C.pid = null; C.net = -C.bet; C.msg = `Crash na ×${C.at.toFixed(2)} · prehra −${CR(C.bet)}`; beep(160, .3, .06, 'sawtooth'); }
    else C.msg = (C.msg || '') + ` (crash ×${C.at.toFixed(2)})`;
    C.raf = 0; if (cur === 'crash') render(); return;
  }
  const el = $('#crm'); if (el) el.textContent = '×' + C.m.toFixed(2);
  const bt = $('[data-a="crash.cash"]'); if (bt && C.pid) bt.textContent = 'Vybrať ' + CR(r2(C.bet * C.m));
  crDraw(); C.raf = requestAnimationFrame(crTick);
}
function crCash(mult) {
  const C = CRH; if (!C.pid) return; const m = Math.floor(Math.min(mult, C.at) * 100) / 100, pay = r2(C.bet * m);
  pendSet(C.pid, pay); pendDone(C.pid); C.pid = null; C.cashed = m; C.net = r2(pay - C.bet);
  C.msg = `Vybrané na ×${m.toFixed(2)} · +${CR(C.net)}`; chime(m >= 5 ? 4 : 2);
}
M.crash = {
  render() {
    const C = CRH, run = C.ph === 'run';
    body().innerHTML = `<div class="panel gpanel"><div class="shead"><h2>Crash</h2><span class="lab">vyber sa skôr, než to spadne · návratnosť 97 %</span></div>
      <div class="crwrap"><canvas id="crcv" class="crcv" width="680" height="360"></canvas><div class="crm ${C.ph === 'crashed' ? 'lose' : C.cashed && C.ph === 'run' ? 'win' : ''}" id="crm">${C.ph === 'bet' ? '×1.00' : '×' + C.m.toFixed(2)}</div></div>
      <div class="hist rh">${C.hist.map(x => `<span class="${x >= 2 ? 'win' : 'lose'}">${x.toFixed(2)}×</span>`).join('') || '<span class="lab">Zatiaľ žiadne kolá</span>'}</div>
      ${C.msg ? `<p class="gres ${win(C.net)}">${C.msg}</p>` : ''}
      <div class="gctl">${run ? `<button class="btn gold gmain" data-a="crash.cash" ${C.pid ? '' : 'disabled'}>${C.pid ? 'Vybrať ' + CR(r2(C.bet * C.m)) : 'Vybrané'}</button>` : `${betBox('cr-bet', 1)}<div class="betrow"><label class="lab" for="cr-auto">Auto výber pri ×</label><input id="cr-auto" class="field" inputmode="decimal" placeholder="napr. 2.00" value="${C.autoTxt || ''}" style="width:110px"></div><button class="btn gold gmain" data-a="crash.start">Štart</button>`}</div></div>`;
    crDraw(); if (run && !C.raf) C.raf = requestAnimationFrame(crTick);
  },
  start() {
    const C = CRH; if (C.ph === 'run') return; const bet = getBet('cr-bet'); if (!take(bet)) return;
    const a = parseFloat(String(($('#cr-auto') || {}).value || '').replace(',', '.')); C.autoTxt = ($('#cr-auto') || {}).value || '';
    Object.assign(C, { ph: 'run', at: crashPoint(), t0: performance.now(), bet, cashed: 0, auto: isFinite(a) && a > 1 ? a : 0, msg: '', net: 0, m: 1 });
    C.pid = pendAdd('crash', bet, 0); beep(440, .08, .05); render();
  },
  cash() { const C = CRH; if (C.ph !== 'run' || !C.pid) return; crCash(crM((performance.now() - C.t0) / 1000)); render(); }
};

/* ===== KOLESO ŠŤASTIA ===== */
const WH = { mode: 'free', rot: 0, busy: false, msg: '', net: 0 };
const WH_FREE = [2, 5, 2, 10, 2, 20, 5, 2, 25, 5, 2, 50], WH_PAID = [0, .5, 1, 0, 2, .5, 0, 1.5, 0, .5, 3, 2.5];
const whCols = ['#2a3a52', '#3a2a52', '#2a5240', '#52412a', '#523a2a', '#2a4f52'];
function whDraw() {
  const cv = $('#whcv'); if (!cv) return; const g = cv.getContext('2d'), v = WH.mode === 'free' ? WH_FREE : WH_PAID, R = 140;
  g.setTransform(cv.width / 280, 0, 0, cv.height / 280, 0, 0); g.clearRect(0, 0, 280, 280);
  v.forEach((x, k) => {
    const a0 = (k * 30 - 105) * Math.PI / 180, a1 = (k * 30 - 75) * Math.PI / 180;
    g.beginPath(); g.moveTo(140, 140); g.arc(140, 140, R - 2, a0, a1); g.closePath();
    g.fillStyle = x >= (WH.mode === 'free' ? 20 : 2.5) ? '#a8731c' : x === 0 ? '#1b2129' : whCols[k % whCols.length]; g.fill(); g.strokeStyle = '#0d1117'; g.lineWidth = 2; g.stroke();
    g.save(); g.translate(140, 140); g.rotate(k * 30 * Math.PI / 180); g.fillStyle = '#fff'; g.font = '700 17px monospace'; g.textAlign = 'center';
    g.fillText(WH.mode === 'free' ? x : '×' + x, 0, -R + 30); g.restore();
  });
  g.beginPath(); g.arc(140, 140, 16, 0, 6.3); g.fillStyle = '#e3a53c'; g.fill();
}
M.wheel = {
  render() {
    const used = D().wd === today(), free = WH.mode === 'free';
    body().innerHTML = `<div class="panel gpanel"><div class="shead"><h2>Koleso šťastia</h2><span class="lab">denný free spin · alebo spin za stávku</span></div>
      <div class="seg gseg"><button data-a="wheel.mode" data-v="free" class="${free ? 'on' : ''}">Denný free spin</button><button data-a="wheel.mode" data-v="paid" class="${free ? '' : 'on'}">Za stávku</button></div>
      <div class="whwrap"><i class="whptr"></i><canvas id="whcv" class="whcv" width="560" height="560" style="transform:rotate(${WH.rot}deg)"></canvas></div>
      ${WH.msg ? `<p class="gres ${win(WH.net)}">${WH.msg}</p>` : ''}
      <div class="gctl">${free ? `<button class="btn gold gmain" data-a="wheel.spin" ${used || WH.busy ? 'disabled' : ''}>${used ? 'Dnes už si točil/a, prídi zajtra' : 'Zatočiť zadarmo'}</button><p class="sub gsm">Výhra 2 až 50 CR denne navyše k dennému bonusu.</p>` : `${betBox('wh-bet', 1)}<button class="btn gold gmain" data-a="wheel.spin" ${WH.busy ? 'disabled' : ''}>Zatočiť</button><p class="sub gsm">Násobiteľ stávky 0× až 3×, návratnosť ≈ 96 %.</p>`}</div></div>`;
    whDraw();
  },
  mode(v) { if (WH.busy) return; WH.mode = v; WH.msg = ''; render(); },
  spin() {
    if (WH.busy) return; const free = WH.mode === 'free', v = free ? WH_FREE : WH_PAID; let pid, bet = 0, label;
    const idx = ri(12);
    if (free) { if (D().wd === today()) return; D().wd = today(); pid = pendAdd('wheel', 0, v[idx], { free: true }); label = `Výhra ${v[idx]} CR`; WH.net = v[idx]; }
    else { bet = getBet('wh-bet'); if (!take(bet)) return; const pay = r2(bet * v[idx]); pid = pendAdd('wheel', bet, pay); WH.net = r2(pay - bet); label = `×${v[idx]} · ${WH.net >= 0 ? '+' : '−'}${CR(Math.abs(WH.net))}`; }
    WH.busy = true; WH.msg = '';
    const c = $('#whcv'), to = Math.ceil((WH.rot + 1800) / 360) * 360 - idx * 30 + (rnd() * 16 - 8);
    $('[data-a="wheel.spin"]').disabled = true;
    c.style.transition = 'transform 4.4s cubic-bezier(.12,.62,.12,1)'; void c.offsetWidth; c.style.transform = `rotate(${to}deg)`; WH.rot = to;
    for (let k = 0; k < 18; k++) setTimeout(() => beep(500 + (k % 4) * 60, .02, .025, 'triangle'), k * k * 13 + k * 40);
    setTimeout(() => { pendDone(pid); WH.busy = false; WH.msg = label; if (WH.net > 0) chime(3); else beep(180, .25, .05, 'sawtooth'); if (cur === 'wheel') render(); }, 4600);
  }
};

/* ===== UHÁDNI SKIN ===== */
const GS = { q: null, t0: 0, streak: 0, ans: null, msg: '', gain: 0 };
const GS_CAP = 20;
function gsNew() {
  const all = []; for (let i = 0; i < ITEMS.length; i++) if (ITEMS[i][1]) all.push(i);
  const a = pick(all), nm = i => ITEMS[i][0] + ' | ' + ITEMS[i][1], opts = [a], used = new Set([nm(a)]);
  const same = all.filter(i => ITEMS[i][0] === ITEMS[a][0] && !used.has(nm(i)));
  for (let k = 0; k < 3; k++) {
    const src = (k < 2 && same.length > 3) ? same : all; let j, tries = 0;
    do { j = pick(src); tries++; } while (used.has(nm(j)) && tries < 50);
    used.add(nm(j)); opts.push(j);
  }
  GS.q = { a, opts: shuffle(opts) }; GS.t0 = Date.now(); GS.ans = null; GS.msg = ''; GS.gain = 0;
}
M.guess = {
  render() {
    if (!GS.q) gsNew();
    const q = GS.q, left = Math.max(0, GS_CAP - (D().gd.d === today() ? D().gd.cr : 0));
    body().innerHTML = `<div class="panel gpanel"><div class="shead"><h2>Uhádni skin</h2><span class="lab">dnes ešte ${CR(left)} z ${GS_CAP} · séria ${GS.streak}</span></div>
      <div class="gsimg"><i id="gsi" style="${spriteStyle(q.a)};filter:blur(${GS.ans != null ? 0 : 16}px)"></i></div>
      <div class="gsopts">${q.opts.map(i => `<button class="btn gso${GS.ans != null ? (i === q.a ? ' ok' : i === GS.ans ? ' bad' : '') : ''}" data-a="guess.ans" data-v="${i}" ${GS.ans != null ? 'disabled' : ''}>${esc(ITEMS[i][0])} | ${esc(ITEMS[i][1])}</button>`).join('')}</div>
      ${GS.msg ? `<p class="gres ${GS.gain > 0 ? 'win' : 'lose'}">${GS.msg}</p>` : '<p class="sub gsm">Obrázok sa postupne zaostruje. Čím skôr uhádneš, tým viac kreditov.</p>'}
      ${GS.ans != null ? '<div class="gctl"><button class="btn gold gmain" data-a="guess.next">Ďalší skin</button></div>' : ''}</div>`;
    if (GS.ans == null) { const el = $('#gsi'); if (el) { void el.offsetWidth; el.style.transition = 'filter 9s linear'; el.style.filter = 'blur(0px)'; } }
  },
  ans(v) {
    if (GS.ans != null) return; const i = +v, q = GS.q, sec = (Date.now() - GS.t0) / 1000; GS.ans = i;
    if (i === q.a) {
      GS.streak++;
      let r = 1 + Math.max(0, 2 * (1 - sec / 9)) + Math.min(GS.streak - 1, 5) * 0.5;
      const d = D(); if (d.gd.d !== today()) d.gd = { d: today(), cr: 0 };
      r = r2(Math.min(r, GS_CAP - d.gd.cr)); GS.gain = Math.max(0, r);
      if (GS.gain > 0) { addBal(GS.gain); claimExtra(GS.gain); d.gd.cr = r2(d.gd.cr + GS.gain); save(); chime(2); GS.msg = `Správne! +${CR(GS.gain)} (${sec.toFixed(1)} s)`; }
      else GS.msg = 'Správne! Dnešný limit kreditov z tejto hry je vyčerpaný, hraj pre radosť.';
    } else { GS.streak = 0; GS.gain = 0; GS.msg = `Zle, správne bolo ${ITEMS[q.a][0]} | ${ITEMS[q.a][1]}`; beep(180, .25, .05, 'sawtooth'); }
    render();
  },
  next() { gsNew(); render(); }
};

/* ===== CENA SKINU (vyššie / nižšie) ===== */
let POOL = null;
const randSkin = () => { const i = ri(ITEMS.length), [, , , , mn, mx, st] = ITEMS[i]; return { id: uid(), i, f: +(mn + rnd() * (mx - mn)).toFixed(6), s: st && rnd() < .1 ? 1 : 0, t: Date.now() }; };
function pool() { if (POOL) return POOL; POOL = []; for (let k = 0; k < 1500; k++) POOL.push(price(randSkin())); POOL.sort((a, b) => a - b); return POOL; }
function cntAbove(x) { const P = pool(); let lo = 0, hi = P.length; while (lo < hi) { const m = (lo + hi) >> 1; if (P[m] <= x) lo = m + 1; else hi = m; } return P.length - lo; }
function hlProb(pr) { const P = pool(), A = cntAbove(pr * 1.03), B = P.length - cntAbove(pr / 1.03); return { hi: A / (A + B), lo: B / (A + B) }; }
const HP = { ph: 'bet', cur: null, nxt: null, mult: 1, bet: 0, pid: null, msg: '', net: 0, shown: false };
const hpFac = p => p >= 0.04 ? Math.min(25, r2(0.95 / p)) : 0;
M.hl = {
  render() {
    const H = HP, play = H.ph === 'play', pb = play ? hlProb(price(H.cur)) : null;
    const it = (x, hide) => hide ? '<div class="hlc"><div class="it hlq"><b>?</b></div><div class="hlp"><b>?</b></div></div>' : `<div class="hlc">${card(x, { nometa: true })}<div class="hlp"><b class="money">${CR(price(x))}</b></div></div>`;
    let ctl;
    if (!play) ctl = `${betBox('hl-bet', 1)}<button class="btn gold gmain" data-a="hl.start">${H.ph === 'done' ? 'Hrať znova' : 'Začať'}</button>`;
    else { const fh = hpFac(pb.hi), fl = hpFac(pb.lo); ctl = H.shown ? '<p class="sub gsm">…</p>' : `<div class="betrow gact"><button class="btn gold" data-a="hl.g" data-v="hi" ${fh ? '' : 'disabled'}>Drahší ${fh ? '×' + fh.toFixed(2) : ''}</button><button class="btn gold" data-a="hl.g" data-v="lo" ${fl ? '' : 'disabled'}>Lacnejší ${fl ? '×' + fl.toFixed(2) : ''}</button><button class="btn" data-a="hl.cash" ${H.mult > 1 ? '' : 'disabled'}>Vybrať ${CR(r2(H.bet * H.mult))}</button></div>`; }
    body().innerHTML = `<div class="panel gpanel"><div class="shead"><h2>Cena skinu</h2><span class="lab">je ďalší skin drahší alebo lacnejší? · výber kedykoľvek</span></div>
      <div class="hlrow">${H.cur ? it(H.cur) : '<div class="empty">Začni hru</div>'}${H.cur ? '<span class="vs">vs</span>' + it(H.nxt || H.cur, !H.shown) : ''}</div>
      ${play ? `<p class="gmult">Násobiteľ <b>×${H.mult.toFixed(2)}</b></p>` : ''}
      ${H.msg ? `<p class="gres ${win(H.net)}">${H.msg}</p>` : ''}<div class="gctl">${ctl}</div></div>`;
  },
  start() {
    if (HP.ph === 'play') return; const bet = getBet('hl-bet'); if (!take(bet)) return;
    Object.assign(HP, { ph: 'play', cur: randSkin(), nxt: null, mult: 1, bet, msg: '', net: 0, shown: false }); HP.pid = pendAdd('hl', bet, 0); render();
  },
  g(dir) {
    if (HP.ph !== 'play' || HP.shown) return; const cp = price(HP.cur), pb = hlProb(cp), f = hpFac(dir === 'hi' ? pb.hi : pb.lo); if (!f) return;
    let n, tries = 0; do { n = randSkin(); tries++; } while (!(price(n) >= cp * 1.03 || price(n) <= cp / 1.03) && tries < 200);
    HP.nxt = n; HP.shown = true; const ok = dir === 'hi' ? price(n) > cp : price(n) < cp;
    if (ok) { HP.mult = r2(HP.mult * f); pendSet(HP.pid, HP.bet * HP.mult); beep(620, .08, .05, 'triangle'); }
    render();
    setTimeout(() => {
      if (ok) { HP.cur = n; HP.nxt = null; HP.shown = false; }
      else { pendDone(HP.pid); HP.pid = null; HP.ph = 'done'; HP.net = -HP.bet; HP.msg = `Prehra −${CR(HP.bet)}`; HP.shown = true; beep(180, .25, .05, 'sawtooth'); }
      if (cur === 'hl') render();
    }, ok ? 1100 : 300);
  },
  cash() {
    if (HP.ph !== 'play' || HP.mult <= 1 || HP.shown) return; const pay = r2(HP.bet * HP.mult);
    pendSet(HP.pid, pay); pendDone(HP.pid); HP.pid = null; HP.ph = 'done'; HP.net = r2(pay - HP.bet); HP.msg = `Vybrané ${CR(pay)} (+${CR(HP.net)})`; chime(2); render();
  }
};

/* ===== TRH S BOTMI ===== */
const BOTN = () => BOTDEF.map(b => b[0]);
const MK = { sort: 'ask', q: '' };
function mkEnsure() {
  const m = D().mkt, now = Date.now(); m.list = m.list.filter(l => l.exp > now);
  let tries = 0;
  while (m.list.length < 24 && tries++ < 80) {
    const tgt = Math.exp(Math.log(0.2) + rnd() * (Math.log(500) - Math.log(0.2))), it = makeItem(tgt, tgt > 60); if (!it) continue;
    m.list.push({ id: uid(), it, ask: r2(price(it) * (0.88 + rnd() * 0.5)), exp: now + (20 + ri(100)) * 60000, by: pick(BOTN()) });
  }
}
const p5 = ratio => ratio <= .85 ? .7 : ratio <= 1 ? .45 : ratio <= 1.15 ? .2 : ratio <= 1.3 ? .07 : .01;
function simSales() {
  const d = D(), now = Date.now(); let n = 0;
  d.sell = d.sell.filter(l => {
    const steps = Math.min(288, Math.floor((now - l.last) / 300000)); if (steps < 1) return true;
    const ratio = l.ask / price(l.it);
    for (let s = 0; s < steps; s++) if (rnd() < p5(ratio)) {
      const net = r2(l.ask * .95); addBal(net); recSold(1, net); n++;
      const [w, p] = ITEMS[l.it.i]; toast(`Predané botovi: ${w} | ${p || 'Vanilla'} za ${CR(net)}`); return false;
    }
    l.last += steps * 300000; return true;
  });
  if (n) save(); return n;
}
function listModal(it) {
  const fair = price(it), [w, p] = ITEMS[it.i]; let pct = 100;
  const upd = () => {
    const ask = r2(fair * pct / 100), ch = p5(pct / 100);
    $('#lmask').textContent = CR(ask); $('#lmnet').textContent = CR(r2(ask * .95)); $('#lmpct').textContent = pct + ' %';
    $('#lmsp').textContent = ch >= .45 ? 'rýchlo (minúty)' : ch >= .2 ? 'do hodiny' : ch >= .07 ? 'hodiny až deň' : 'veľmi pomaly';
  };
  $('#modal').innerHTML = `<div class="modal"><div class="profile"><div class="mhead"><h2 style="font-size:20px">Vystaviť na trh</h2><button class="btn sm ghost" id="lmx">Zavrieť</button></div>
    <div class="lmit">${card(it, { cls: 'cfit' })}</div>
    <div class="stats"><div class="stat"><span class="lab">Férová cena</span><b>${fair.toFixed(2)} CR</b></div><div class="stat"><span class="lab">Tvoja cena</span><b id="lmask"></b></div><div class="stat"><span class="lab">Dostaneš (−5 %)</span><b id="lmnet"></b></div><div class="stat"><span class="lab">Predá sa</span><b id="lmsp" style="font-size:13px"></b></div></div>
    <label class="lab" for="lmr">Cena v % férovej: <b id="lmpct"></b></label><input id="lmr" type="range" min="70" max="150" step="1" value="100" style="width:100%">
    <div class="betrow" style="justify-content:flex-end"><button class="btn gold" id="lmok">Vystaviť</button></div></div></div>`;
  $('#lmx').onclick = () => $('#modal').innerHTML = '';
  $('#lmr').oninput = e => { pct = +e.target.value; upd(); };
  $('#lmok').onclick = () => {
    if (!S.inv.some(x => x.id === it.id)) { $('#modal').innerHTML = ''; return; }
    S.inv = S.inv.filter(x => x.id !== it.id); D().sell.push({ id: uid(), it, ask: r2(fair * pct / 100), last: Date.now() }); save();
    $('#modal').innerHTML = ''; toast(`Vystavené za ${CR(r2(fair * pct / 100))}`); if (cur === 'mkt') render();
  };
  upd();
}
M.mkt = {
  render() {
    simSales(); mkEnsure();
    const d = D(), q = MK.q.toLowerCase();
    let L = d.mkt.list.filter(l => !q || (ITEMS[l.it.i][0] + ' ' + ITEMS[l.it.i][1]).toLowerCase().includes(q));
    const dl = l => l.ask / price(l.it) - 1;
    L = [...L].sort(MK.sort === 'ask' ? (a, b) => a.ask - b.ask : MK.sort === 'high' ? (a, b) => b.ask - a.ask : (a, b) => dl(a) - dl(b));
    const mine = d.sell.map(l => { const ratio = l.ask / price(l.it), ch = p5(ratio); return `<div class="mrow">${itemHTML(l.it, 'rows')}<div class="mact"><span class="lab">${CR(l.ask)}</span><span class="lab">${ch >= .45 ? 'rýchlo' : ch >= .2 ? 'do hodiny' : ch >= .07 ? 'pomaly' : 'veľmi pomaly'}</span><button class="btn sm" data-a="mkt.cancel" data-v="${l.id}">Zrušiť</button></div></div>`; }).join('');
    body().innerHTML = `<div class="panel gpanel"><div class="shead"><h2>Trh</h2><span class="lab">nakupuj od botov · predávaj botom · poplatok 5 %</span></div>
      <div class="betrow"><button class="btn gold" data-a="mkt.sell">Vystaviť skin na predaj</button></div>
      ${mine ? `<span class="lab" style="display:block;margin:12px 0 6px">Tvoje ponuky</span><div class="mlist">${mine}</div>` : ''}
      <span class="lab" style="display:block;margin:14px 0 6px">Ponuky botov</span>
      <div class="toolbar"><input id="mkq" type="search" placeholder="Hľadať skin…" value="${esc(MK.q)}" aria-label="Hľadať skin"><select id="mks" aria-label="Zoradiť ponuky"><option value="ask"${MK.sort === 'ask' ? ' selected' : ''}>Najlacnejšie</option><option value="high"${MK.sort === 'high' ? ' selected' : ''}>Najdrahšie</option><option value="deal"${MK.sort === 'deal' ? ' selected' : ''}>Najlepšia zľava</option></select></div>
      <div class="mlist">${L.map(l => { const x = dl(l); return `<div class="mrow">${itemHTML(l.it, 'rows')}<div class="mact"><b class="${x <= 0 ? 'win' : 'lose'}">${x <= 0 ? '' : '+'}${Math.round(x * 100)} %</b><span class="lab">${CR(l.ask)}</span><button class="btn sm gold" data-a="mkt.buy" data-v="${l.id}" ${l.ask <= S.bal ? '' : 'disabled'}>Kúpiť</button></div></div>`; }).join('') || '<div class="empty">Nič nenájdené</div>'}</div></div>`;
    $('#mkq').oninput = e => { MK.q = e.target.value; const p = e.target.selectionStart; M.mkt.render(); const i = $('#mkq'); i.focus(); try { i.setSelectionRange(p, p); } catch (x) {} };
    $('#mks').onchange = e => { MK.sort = e.target.value; render(); };
  },
  buy(id) {
    const m = D().mkt, i = m.list.findIndex(l => l.id === id); if (i < 0) return toast('Ponuka už nie je');
    const l = m.list[i]; if (l.ask > S.bal) return toast('Nemáš dosť kreditov');
    addBal(-l.ask); m.list.splice(i, 1); S.inv.unshift(Object.assign({}, l.it, { id: uid(), t: Date.now() })); save();
    const [w, p] = ITEMS[l.it.i]; toast(`Kúpené: ${w} | ${p || 'Vanilla'} za ${CR(l.ask)}`); beep(660, .08, .04, 'triangle'); render();
  },
  sell() { pickItems('Vystaviť na trh', ids => { const it = S.inv.find(x => x.id === [...ids][0]); if (it) listModal(it); }, 1); },
  cancel(id) { const d = D(), i = d.sell.findIndex(l => l.id === id); if (i < 0) return; const l = d.sell.splice(i, 1)[0]; S.inv.unshift(l.it); save(); toast('Skin sa vrátil do inventára'); render(); }
};

/* ===== REBRÍČEK PROTI BOTOM ===== */
const BOTBASE = { whale: 2500, sniper: 500, reg: 220, scrub: 60 };
const LB = { board: 'wealth' };
function netWorth() { return r2(S.bal + S.inv.reduce((a, x) => a + price(x), 0) + D().sell.reduce((a, l) => a + l.ask, 0)); }
function botWealth(def, day) { const [n, t] = def; return Math.round(BOTBASE[t] * Math.exp(gauss(mulberry(hash(n))) * 0.55) * (0.85 + mulberry(hash(n + '|' + day))() * 0.3)); }
function botWeek(def, wk, frac) { const [n, t] = def, w = botWealth(def, wk); return Math.round(w * 0.22 * gauss(mulberry(hash(n + '|w|' + wk))) * Math.max(0.15, frac)); }
M.lb = {
  render() {
    const d = D(), wk = wkKey(), nw = netWorth(); if (d.lbw.k !== wk) d.lbw = { k: wk, base: nw };
    const now = new Date(), frac = ((now.getDay() + 6) % 7 + now.getHours() / 24) / 7;
    const wealth = LB.board === 'wealth';
    const rows = BOTDEF.map(b => ({ n: b[0], v: wealth ? botWealth(b, today()) : botWeek(b, wk, frac) }));
    rows.push({ n: 'Ty', v: wealth ? nw : r2(nw - d.lbw.base), me: true });
    rows.sort((a, b) => b.v - a.v);
    const my = rows.findIndex(r => r.me), top = rows.slice(0, 10);
    if (my >= 10) top.push(rows[my]);
    body().innerHTML = `<div class="panel gpanel"><div class="shead"><h2>Rebríček</h2><span class="lab">porovnanie so simulovanými hráčmi (botmi)</span></div>
      <div class="seg gseg"><button data-a="lb.board" data-v="wealth" class="${wealth ? 'on' : ''}">Majetok</button><button data-a="lb.board" data-v="week" class="${wealth ? '' : 'on'}">Zisk týždňa</button></div>
      <p class="sub gsm">Tvoj ${wealth ? 'majetok = kredity + skiny + vystavené skiny' : 'zisk = zmena majetku od pondelka'}. Si na ${my + 1}. mieste z ${rows.length}.</p>
      <div class="lbl">${top.map(r => { const rk = rows.indexOf(r) + 1; return `<div class="lbr${r.me ? ' mine' : ''}"><span class="rk">${rk <= 3 ? ['🥇', '🥈', '🥉'][rk - 1] : rk + '.'}</span>${av(r.n)}<b>${esc(dn(r.n))}</b><span class="money ${wealth ? '' : win(r.v)}">${wealth ? CR(r.v) : (r.v >= 0 ? '+' : '−') + CR(Math.abs(r.v))}</span></div>`; }).join('')}</div></div>`;
  },
  board(v) { LB.board = v; render(); }
};

/* ===== GRAF PROFILU ===== */
function snap() {
  try {
    const d = D(), h = d.hist, now = Date.now(), l = h[h.length - 1];
    if (l && now - l[0] < 20000) return;
    if (l && now - l[0] < 180000 && Math.abs(S.bal - l[1]) < 0.005) return;
    h.push([now, r2(S.bal), netWorth()]);
    if (h.length > 500) { const keep = []; h.forEach((p, i) => { if (i >= 250 || i % 2 === 0) keep.push(p); }); d.hist = keep; }
  } catch (e) {}
}
let grange = 'all';
function graphHTML(range) {
  range = range || grange; const h = D().hist, now = Date.now(), lim = range === '24h' ? 864e5 : range === '7d' ? 6048e5 : Infinity;
  let pts = h.filter(p => now - p[0] <= lim); const chips = `<div class="chips gr">${[['24h', '24 h'], ['7d', '7 dní'], ['all', 'Všetko']].map(([k, n]) => `<button class="chip${range === k ? ' on' : ''}" data-grange="${k}">${n}</button>`).join('')}</div>`;
  if (pts.length < 2) return `<div id="rlg-chart" class="gchart"><span class="lab">Vývoj kreditov</span>${chips}<div class="empty">Graf sa vyplní, keď budeš hrať.</div></div>`;
  const W = 340, H = 130, pl = 6, pr = 6, pt = 8, pb = 16, t0 = pts[0][0], t1 = pts[pts.length - 1][0] || t0 + 1;
  const all = pts.flatMap(p => [p[1], p[2]]), mn = Math.min(...all), mx = Math.max(...all), sp = mx - mn || 1;
  const X = t => pl + (t - t0) / ((t1 - t0) || 1) * (W - pl - pr), Y = v => pt + (1 - (v - mn) / sp) * (H - pt - pb);
  const line = i => pts.map((p, k) => (k ? 'L' : 'M') + X(p[0]).toFixed(1) + ' ' + Y(p[i]).toFixed(1)).join('');
  const best = pts.reduce((a, p) => p[1] > a[1] ? p : a), dt = t => new Date(t).toLocaleDateString('sk-SK', { day: 'numeric', month: 'numeric' });
  return `<div id="rlg-chart" class="gchart"><span class="lab">Vývoj kreditov</span>${chips}
    <svg viewBox="0 0 ${W} ${H}" role="img" aria-label="Graf zostatku a majetku"><path d="${line(2)}" fill="none" stroke="#5b8def" stroke-width="2" stroke-linejoin="round"/><path d="${line(1)}" fill="none" stroke="#e3a53c" stroke-width="2.4" stroke-linejoin="round"/>
    <text x="${pl}" y="${H - 3}" fill="#7c8796" font-size="9" font-family="monospace">${dt(t0)}</text><text x="${W - pr}" y="${H - 3}" fill="#7c8796" font-size="9" font-family="monospace" text-anchor="end">${dt(t1)}</text>
    <text x="${W - pr}" y="${pt + 8}" fill="#7c8796" font-size="9" font-family="monospace" text-anchor="end">${fmt(mx)}</text><text x="${W - pr}" y="${H - pb - 2}" fill="#7c8796" font-size="9" font-family="monospace" text-anchor="end">${fmt(mn)}</text></svg>
    <div class="glegend"><span><i style="background:#e3a53c"></i>Zostatok ${fmt(S.bal)}</span><span><i style="background:#5b8def"></i>Majetok ${fmt(pts[pts.length - 1][2])}</span><span class="lab">max ${fmt(best[1])} (${dt(best[0])})</span></div></div>`;
}
document.addEventListener('click', e => {
  const b = e.target.closest('[data-grange]'); if (!b) return; grange = b.dataset.grange;
  const c = $('#rlg-chart'); if (c) c.outerHTML = graphHTML(grange);
});

/* ---------- init ---------- */
function init() {
  D(); const d = D();
  if (d.pend.length) { const n = d.pend.length; [...d.pend].forEach(p => pendDone(p.id)); toast(`Dokončené nedohrané kolá: ${n}`); }
  simSales(); snap();
  setInterval(() => { if (!$('#v-games').hidden && cur === 'mkt') { const n = simSales(); const m = D().mkt, now = Date.now(); if (n || m.list.some(l => l.exp <= now)) M.mkt.render(); } }, 20000);
}

window.RLG = { render, init, snap, graphHTML, leave() {}, core: { hv, isBJ, bjResult, plkTable, crashPoint, scrRoll, scrGrid, hiloP, SCR_PRIZE, p5, botWealth } };
})();
