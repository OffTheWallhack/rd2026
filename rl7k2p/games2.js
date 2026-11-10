/* Rob Lounge – ďalšie hry (Mines, Dice, Defuse, Penalty, Battle, Aim), prehľad hier,
   hodnosti, denné misie, živé výhry a kolekcia skinov.
   Načítava sa po games.js a používa jeho rozhranie RLG.api + globály hlavného skriptu. */
(function () {
'use strict';
const A = window.RLG && window.RLG.api;
if (!A) return;
const { M, GAMES, take, pendAdd, pendSet, pendDone, betBox, getBet, body, CR, rnd, ri, pick, shuffle, lsGet, lsSet, go, D, mulberry } = A;
const qa = s => [...document.querySelectorAll(s)];
const hs = s => { let h = 2166136261; for (let i = 0; i < s.length; i++) h = Math.imul(h ^ s.charCodeAt(i), 16777619); return h >>> 0; };
const onPage = k => A.cur() === k && !$('#v-games').hidden;
const boom = () => { beep(120, .4, .08, 'sawtooth'); beep(70, .5, .08, 'square'); flash('#eb4b4b'); buzz(80); };
const hit = () => { beep(700, .06, .04, 'triangle'); };

/* trvalý stav tohto modulu (súčasť S.rlg, ukladá sa spolu so S) */
function X() {
  const d = D();
  if (!d.x2) d.x2 = {};
  const x = d.x2;
  x.aim = x.aim || { d: '', cr: 0, best: 0 };
  x.ms = x.ms || { d: '', p: {}, done: [], bonus: 0 };
  x.rk = x.rk || { c: 0 };
  x.disc = x.disc || {};
  x.col = x.col || {};
  return x;
}
function claimGame(cr) { const c = LS().claim; c.g = r2((c.g || 0) + cr); c.gn = (c.gn || 0) + 1; addBal(cr); }

/* ---------- čistá logika (testovateľná) ---------- */
const mnMult = (k, m) => { let x = .97; for (let i = 0; i < k; i++) x *= (25 - i) / (25 - m - i); return r2(x); };
const dcCh = (t, over) => over ? (9999 - 100 * t) / 100 : t;
const dcMult = (t, over) => r2(.97 * 100 / dcCh(t, over));
const DF_D = { easy: { n: 4, b: 1, rows: 10, nm: 'Ľahká' }, norm: { n: 3, b: 1, rows: 8, nm: 'Stredná' }, hard: { n: 2, b: 1, rows: 8, nm: 'Ťažká' }, ins: { n: 3, b: 2, rows: 6, nm: 'Extrém' } };
const dfMult = (d, k) => r2(.97 * Math.pow(DF_D[d].n / (DF_D[d].n - DF_D[d].b), k));
const PN_P = .6, PN_T = [0, 0, 0, .5, 1.4, 5.5];

/* registrácia hier do ponuky */
GAMES.unshift(['home', 'Prehľad']);
GAMES.splice(GAMES.findIndex(g => g[0] === 'wheel') + 1, 0, ['mines', 'Mines'], ['dice', 'Dice'], ['def', 'Defuse'], ['pen', 'Penalty'], ['cb', 'Battle'], ['aim', 'Aim']);
GAMES.push(['col', 'Kolekcia']);

/* ===== MINES ===== */
const MN = { ph: 'bet', m: +lsGet('rl_mn_m', 3) || 3, board: [], open: new Set(), bet: 0, mult: 1, pid: null, msg: '', net: 0, hit: -1 };
M.mines = {
  render() {
    const play = MN.ph === 'play', done = MN.ph === 'done', k = MN.open.size;
    const cells = Array.from({ length: 25 }, (_, i) => {
      const o = MN.open.has(i), mine = MN.board[i]; let cls = 'mt', ic = '';
      if (o) { cls += ' safe'; ic = '💎'; } else if (done && mine) { cls += ' mine' + (i === MN.hit ? ' boom' : ''); ic = '💣'; } else if (done) cls += ' dim';
      return `<button class="${cls}" data-a="mines.tap" data-v="${i}" aria-label="Políčko ${i + 1}" ${play && !o ? '' : 'disabled'}>${ic}</button>`;
    }).join('');
    let ctl;
    if (!play) ctl = `<div class="chips gm">${[1, 3, 5, 8, 12, 18, 24].map(n => `<button class="chip${MN.m === n ? ' on' : ''}" data-a="mines.m" data-v="${n}">${n} 💣</button>`).join('')}</div>${betBox('mn-bet', 1)}<button class="btn gold gmain" data-a="mines.start">${done ? 'Hrať znova' : 'Začať'}</button>`;
    else ctl = `<div class="betrow gact"><button class="btn gold" data-a="mines.cash" ${k ? '' : 'disabled'}>Vybrať ${CR(r2(MN.bet * MN.mult))}</button><button class="btn" data-a="mines.rnd">Náhodné políčko</button></div>`;
    body().innerHTML = `<div class="panel gpanel"><div class="shead"><h2>Mines</h2><span class="lab">5×5 · nájdi diamanty, vyhni sa mínam · výber kedykoľvek</span></div>
      <div class="mngrid">${cells}</div>
      ${play ? `<p class="gmult">Násobiteľ <b>×${MN.mult.toFixed(2)}</b> · ďalší ×${mnMult(k + 1, MN.m).toFixed(2)}</p>` : `<p class="gmult"><span class="lab">${MN.m} ${MN.m === 1 ? 'mína' : MN.m < 5 ? 'míny' : 'mín'} · max ×${mnMult(25 - MN.m, MN.m).toFixed(2)}</span></p>`}
      ${MN.msg ? `<p class="gres ${A.win(MN.net)}">${MN.msg}</p>` : ''}
      <div class="gctl">${ctl}</div></div>`;
  },
  m(v) { if (MN.ph === 'play') return; MN.m = +v; lsSet('rl_mn_m', v); A.render(); },
  start() {
    if (MN.ph === 'play') return; const bet = getBet('mn-bet'); if (!take(bet)) return;
    const b = Array(25).fill(false); shuffle([...Array(25).keys()]).slice(0, MN.m).forEach(i => b[i] = true);
    Object.assign(MN, { ph: 'play', board: b, open: new Set(), bet, mult: 1, msg: '', net: 0, hit: -1 });
    MN.pid = pendAdd('mines', bet, bet); A.render();
  },
  tap(v) {
    if (MN.ph !== 'play') return; const i = +v; if (MN.open.has(i)) return;
    if (MN.board[i]) { MN.hit = i; MN.ph = 'done'; pendSet(MN.pid, 0); pendDone(MN.pid); MN.pid = null; MN.net = -MN.bet; MN.msg = `Mína! −${CR(MN.bet)}`; boom(); }
    else {
      MN.open.add(i); MN.mult = mnMult(MN.open.size, MN.m); pendSet(MN.pid, MN.bet * MN.mult); beep(480 + MN.open.size * 35, .07, .05, 'triangle');
      if (MN.open.size === 25 - MN.m) return M.mines.cash();
    }
    A.render();
  },
  cash() {
    if (MN.ph !== 'play' || !MN.open.size) return; const pay = r2(MN.bet * MN.mult);
    pendSet(MN.pid, pay); pendDone(MN.pid); MN.pid = null; MN.ph = 'done'; MN.net = r2(pay - MN.bet); MN.hit = -1;
    MN.msg = `Vybrané ${CR(pay)} (+${CR(MN.net)})`; chime(MN.mult >= 5 ? 3 : 2); A.render();
  },
  rnd() { const h = [...Array(25).keys()].filter(i => !MN.open.has(i)); if (h.length) M.mines.tap(pick(h)); }
};

/* ===== DICE ===== */
const DC = { t: 50, over: true, hist: [], busy: false, auto: 0, msg: '', net: 0, roll: null };
function dcInfo() {
  const ch = dcCh(DC.t, DC.over), mu = dcMult(DC.t, DC.over), bet = amt($('#dc-bet') || { value: 1 });
  return { ch, mu, pay: r2(bet * mu) };
}
M.dice = {
  render() {
    const { ch, mu, pay } = dcInfo(), lo = DC.over ? DC.t : 0, wd = DC.over ? 100 - DC.t : DC.t;
    body().innerHTML = `<div class="panel gpanel"><div class="shead"><h2>Dice</h2><span class="lab">hoď číslo 0–100 · zvoľ hranicu a smer · výplata podľa šance</span></div>
      <div class="dcnum ${DC.roll == null ? '' : DC.hist[0] && DC.hist[0].won ? 'win' : 'lose'}" id="dc-num">${DC.roll == null ? '—' : DC.roll.toFixed(2)}</div>
      <div class="dcbar"><i class="dcwin" id="dc-win" style="left:${lo}%;width:${wd}%"></i>${DC.roll == null ? '' : `<b class="dcmk" style="left:${DC.roll}%"></b>`}</div>
      <input type="range" id="dc-t" min="2" max="98" step="1" value="${DC.t}" aria-label="Hranica">
      <div class="seg gseg"><button data-a="dice.dir" data-v="over" class="${DC.over ? 'on' : ''}">Nad ${DC.t}</button><button data-a="dice.dir" data-v="under" class="${DC.over ? '' : 'on'}">Pod ${DC.t}</button></div>
      <div class="dcst"><div><span class="lab">Šanca</span><b id="dc-ch">${ch.toFixed(2)} %</b></div><div><span class="lab">Násobiteľ</span><b id="dc-mu">×${mu.toFixed(2)}</b></div><div><span class="lab">Výplata</span><b id="dc-pay">${CR(pay)}</b></div></div>
      <div class="dchist">${DC.hist.map(h => `<span class="${h.won ? 'win' : 'lose'}">${h.r.toFixed(1)}</span>`).join('')}</div>
      ${DC.msg ? `<p class="gres ${A.win(DC.net)}">${DC.msg}</p>` : ''}
      <div class="gctl">${betBox('dc-bet', 1)}<div class="betrow gact"><button class="btn gold" data-a="dice.roll" ${DC.busy ? 'disabled' : ''}>Hodiť</button><button class="btn${DC.auto ? ' on' : ''}" data-a="dice.auto">${DC.auto ? `Stop (${DC.auto})` : 'Auto 10×'}</button></div></div></div>`;
  },
  dir(v) { if (DC.busy) return; DC.over = v === 'over'; A.render(); },
  upd() {
    const { ch, mu, pay } = dcInfo(); $('#dc-ch').textContent = ch.toFixed(2) + ' %'; $('#dc-mu').textContent = '×' + mu.toFixed(2); $('#dc-pay').textContent = CR(pay);
    const lo = DC.over ? DC.t : 0, wd = DC.over ? 100 - DC.t : DC.t, w = $('#dc-win'); w.style.left = lo + '%'; w.style.width = wd + '%';
    const b = qa('#v-games .gseg button'); if (b[0]) { b[0].textContent = 'Nad ' + DC.t; b[1].textContent = 'Pod ' + DC.t; }
  },
  roll() {
    if (DC.busy) return; const bet = getBet('dc-bet'); if (!take(bet)) { DC.auto = 0; A.render(); return; }
    const r = ri(10000) / 100, won = DC.over ? r > DC.t : r < DC.t, mu = dcMult(DC.t, DC.over), pay = won ? r2(bet * mu) : 0;
    const pid = pendAdd('dice', bet, pay); DC.busy = true; DC.msg = ''; const bt = $('[data-a="dice.roll"]'); if (bt) bt.disabled = true;
    let n = 0; const iv = setInterval(() => {
      const el = $('#dc-num'); if (el && onPage('dice')) el.textContent = (rnd() * 100).toFixed(2); beep(900 + n * 40, .02, .02);
      if (++n >= 8) { clearInterval(iv); fin(); }
    }, 55);
    const fin = () => {
      pendDone(pid); DC.busy = false; DC.roll = r; DC.hist.unshift({ r, won }); DC.hist = DC.hist.slice(0, 14);
      DC.net = won ? r2(pay - bet) : -bet; DC.msg = won ? `+${CR(DC.net)} (×${mu.toFixed(2)})` : `Prehra −${CR(bet)}`;
      won ? chime(mu >= 5 ? 3 : 1) : beep(180, .2, .05, 'sawtooth');
      if (onPage('dice')) A.render();
      if (DC.auto > 0) { DC.auto--; if (DC.auto > 0 && onPage('dice')) setTimeout(() => { if (DC.auto > 0 && onPage('dice')) M.dice.roll(); }, 260); else DC.auto = 0; if (onPage('dice')) A.render(); }
    };
  },
  auto() { if (DC.auto) { DC.auto = 0; A.render(); return; } if (DC.busy) return; DC.auto = 10; M.dice.roll(); }
};
document.addEventListener('input', e => {
  const t = e.target; if (!t || !t.closest || !t.closest('#v-games')) return;
  if (t.id === 'dc-t') { DC.t = +t.value; M.dice.upd(); }
  else if (t.id === 'dc-bet' && onPage('dice')) M.dice.upd();
});
document.addEventListener('click', e => { if (e.target.closest && e.target.closest('[data-q^="dc-bet"]') && onPage('dice')) setTimeout(M.dice.upd, 0); });

/* ===== DEFUSE (tower) ===== */
const DF = { ph: 'bet', d: lsGet('rl_df_d', 'norm'), row: 0, bombs: [], cut: [], bet: 0, pid: null, msg: '', net: 0, boom: -1 };
if (!DF_D[DF.d]) DF.d = 'norm';
const WCOL = ['#ff5a5a', '#4f9dff', '#ffd24a', '#7dff8a'];
M.def = {
  render() {
    const d = DF_D[DF.d], play = DF.ph === 'play', done = DF.ph === 'done'; let rows = '';
    for (let r = d.rows - 1; r >= 0; r--) {
      const cur = play && r === DF.row, past = DF.cut[r] !== undefined;
      rows += `<div class="dfrow${cur ? ' cur' : ''}${past ? ' past' : ''}"><span class="dfm">×${dfMult(DF.d, r + 1).toFixed(2)}</span><div class="dfw">${Array.from({ length: d.n }, (_, w) => {
        const bomb = DF.bombs[r] && DF.bombs[r].includes(w), cutit = DF.cut[r] === w; let cls = 'wire', ic = '';
        if (cutit) { cls += ' cut'; ic = '✂'; } else if (done && bomb) { cls += ' bomb' + (DF.boom === r ? ' boom' : ''); ic = '💥'; }
        return `<button class="${cls}" style="--wc:${WCOL[w]}" data-a="def.cut" data-v="${w}" aria-label="Drôt ${w + 1}" ${cur ? '' : 'disabled'}>${ic}</button>`;
      }).join('')}</div></div>`;
    }
    let ctl;
    if (!play) ctl = `<div class="chips gm">${Object.entries(DF_D).map(([k, v]) => `<button class="chip${DF.d === k ? ' on' : ''}" data-a="def.d" data-v="${k}">${v.nm}</button>`).join('')}</div><p class="sub gsm">${d.n} drôty v rade, ${d.b === 1 ? '1 je nastražený' : d.b + ' sú nastražené'} · ${d.rows} radov · max ×${dfMult(DF.d, d.rows).toFixed(2)}</p>${betBox('df-bet', 1)}<button class="btn gold gmain" data-a="def.start">${done ? 'Hrať znova' : 'Nastaviť bombu'}</button>`;
    else ctl = `<button class="btn gold gmain" data-a="def.cash" ${DF.row ? '' : 'disabled'}>Vybrať ${CR(r2(DF.bet * (DF.row ? dfMult(DF.d, DF.row) : 1)))}</button>`;
    body().innerHTML = `<div class="panel gpanel"><div class="shead"><h2>Defuse</h2><span class="lab">prestrihni bezpečný drôt v každom rade · výber kedykoľvek</span></div>
      <div class="c4"><span>C4</span><b>${play ? '0:' + String(40 - DF.row * 3).padStart(2, '0') : '0:40'}</b></div>
      <div class="dflad">${rows}</div>
      ${play && DF.row ? `<p class="gmult">Násobiteľ <b>×${dfMult(DF.d, DF.row).toFixed(2)}</b></p>` : ''}
      ${DF.msg ? `<p class="gres ${A.win(DF.net)}">${DF.msg}</p>` : ''}
      <div class="gctl">${ctl}</div></div>`;
  },
  d(v) { if (DF.ph === 'play') return; DF.d = v; lsSet('rl_df_d', v); A.render(); },
  start() {
    if (DF.ph === 'play') return; const bet = getBet('df-bet'); if (!take(bet)) return; const d = DF_D[DF.d];
    DF.bombs = Array.from({ length: d.rows }, () => shuffle([...Array(d.n).keys()]).slice(0, d.b));
    Object.assign(DF, { ph: 'play', row: 0, cut: [], bet, msg: '', net: 0, boom: -1 }); DF.pid = pendAdd('def', bet, bet); A.render();
  },
  cut(v) {
    if (DF.ph !== 'play') return; const w = +v, r = DF.row, d = DF_D[DF.d];
    if (DF.bombs[r].includes(w)) { DF.cut[r] = undefined; DF.boom = r; DF.ph = 'done'; pendSet(DF.pid, 0); pendDone(DF.pid); DF.pid = null; DF.net = -DF.bet; DF.msg = `BOOM! −${CR(DF.bet)}`; boom(); A.render(); return; }
    DF.cut[r] = w; DF.row++; pendSet(DF.pid, DF.bet * dfMult(DF.d, DF.row)); beep(520 + DF.row * 50, .06, .05, 'triangle'); hit();
    if (DF.row >= d.rows) return M.def.cash(true);
    A.render();
  },
  cash(top) {
    if (DF.ph !== 'play' || !DF.row) return; const pay = r2(DF.bet * dfMult(DF.d, DF.row));
    pendSet(DF.pid, pay); pendDone(DF.pid); DF.pid = null; DF.ph = 'done'; DF.net = r2(pay - DF.bet);
    DF.msg = (top ? 'Bomba zneškodnená! ' : 'Vybrané ') + `${CR(pay)} (+${CR(DF.net)})`; chime(DF.row >= 6 ? 4 : 2); A.render();
  }
};

/* ===== PENALTY ===== */
const PN = { ph: 'bet', k: 0, out: [], g: 0, bet: 0, pid: null, busy: false, msg: '', net: 0, log: [] };
const PZX = [18, 50, 82], PZY = [27, 55];
M.pen = {
  render() {
    const play = PN.ph === 'play', done = PN.ph === 'done';
    const zones = play ? Array.from({ length: 6 }, (_, z) => `<button class="pnz" style="left:${PZX[z % 3]}%;top:${PZY[Math.floor(z / 3)]}%" data-a="pen.shoot" data-v="${z}" aria-label="Strela ${z + 1}" ${PN.busy ? 'disabled' : ''}></button>`).join('') : '';
    const dots = Array.from({ length: 5 }, (_, i) => `<i class="${PN.log[i] === undefined ? (play && i === PN.k ? 'now' : '') : PN.log[i] ? 'g' : 'm'}">${PN.log[i] === undefined ? '' : PN.log[i] ? '⚽' : '✖'}</i>`).join('');
    let ctl;
    if (!play) ctl = `${betBox('pn-bet', 1)}<button class="btn gold gmain" data-a="pen.start">${done ? 'Hrať znova' : 'Rozstrel · 5 kopov'}</button>`;
    else ctl = `<p class="sub gsm" style="text-align:center">Ťukni do bránky, kam chceš kopnúť. Kop ${Math.min(PN.k + 1, 5)} / 5.</p>`;
    body().innerHTML = `<div class="panel gpanel"><div class="shead"><h2>Penalty</h2><span class="lab">5 kopov · šanca gólu ${Math.round(PN_P * 100)} % · výplata podľa počtu gólov</span></div>
      <div class="pnscene" id="pnscene"><div class="pngoal"></div>${zones}<div class="pnkeeper" id="pnk" style="left:50%;top:50%">🧤</div><div class="pnball" id="pnb" style="left:50%;top:88%">⚽</div><div class="pnmsg" id="pnm"></div></div>
      <div class="pndots">${dots}</div>
      <div class="pnpay">${[3, 4, 5].map(g => `<span class="${PN.g === g && play ? 'on' : ''}">${g} góly <b>×${PN_T[g]}</b></span>`).join('')}</div>
      ${PN.msg ? `<p class="gres ${A.win(PN.net)}">${PN.msg}</p>` : ''}
      <div class="gctl">${ctl}</div></div>`;
  },
  start() {
    if (PN.ph === 'play') return; const bet = getBet('pn-bet'); if (!take(bet)) return;
    const out = Array.from({ length: 5 }, () => rnd() < PN_P), g = out.filter(Boolean).length;
    Object.assign(PN, { ph: 'play', k: 0, out, g: 0, bet, msg: '', net: 0, log: [], busy: false });
    PN.pid = pendAdd('pen', bet, r2(bet * PN_T[g])); A.render();
  },
  shoot(v) {
    if (PN.ph !== 'play' || PN.busy) return; const z = +v, goal = PN.out[PN.k], col = z % 3, row = Math.floor(z / 3);
    PN.busy = true; const tx = PZX[col], ty = PZY[row]; let kx, ky;
    if (goal) { kx = PZX[pick([0, 1, 2].filter(c => c !== col))]; ky = pick([40, 52]); } else { kx = tx; ky = ty; }
    const b = $('#pnb'), k = $('#pnk'); qa('.pnz').forEach(x => x.disabled = true);
    if (b) { b.style.left = tx + '%'; b.style.top = ty + '%'; b.classList.add('fly'); }
    if (k) { k.style.left = kx + '%'; k.style.top = ky + '%'; k.style.transform = `translate(-50%,-50%) rotate(${(kx - 50) * .7}deg)`; }
    beep(260, .12, .05, 'triangle');
    setTimeout(() => {
      const m = $('#pnm'); if (m) { m.textContent = goal ? 'GÓL!' : 'Chytené!'; m.className = 'pnmsg show ' + (goal ? 'g' : 'm'); }
      goal ? (chime(2), buzz(30)) : beep(170, .25, .05, 'sawtooth');
    }, 520);
    setTimeout(() => {
      PN.log.push(goal); if (goal) PN.g++; PN.k++; PN.busy = false;
      if (PN.k >= 5) {
        const pay = r2(PN.bet * PN_T[PN.g]); pendSet(PN.pid, pay); pendDone(PN.pid); PN.pid = null; PN.ph = 'done'; PN.net = r2(pay - PN.bet);
        PN.msg = pay > 0 ? `${PN.g} gólov z 5 · ${PN.net >= 0 ? '+' : '−'}${CR(Math.abs(PN.net))} (×${PN_T[PN.g]})` : `${PN.g} gólov z 5 · −${CR(PN.bet)}`; if (PN.net > PN.bet * 2) chime(4);
      }
      if (onPage('pen')) A.render();
    }, 1250);
  }
};

/* ===== CASE BATTLE ===== */
const CB = { ci: -1, rounds: 1, busy: false, res: null, shown: 0, msg: '', net: 0 };
const cbSorted = () => CASES.map((c, k) => ({ c, k })).sort((a, b) => a.c.p - b.c.p);
M.cb = {
  render() {
    if (CB.ci < 0) CB.ci = typeof openCase === 'number' ? openCase : CASES.length - 1;
    const c = CASES[CB.ci], cost = r2(caseCost(c) * CB.rounds), R = CB.res;
    const side = (arr, nm) => `<div class="cbside"><b class="cbn">${esc(nm)}</b>${arr.slice(0, CB.shown).map(x => itemHTML(x, 'rows', {})).join('') || '<div class="empty">…</div>'}<span class="cbt">${fmt(arr.slice(0, CB.shown).reduce((a, x) => a + price(x), 0))} CR</span></div>`;
    body().innerHTML = `<div class="panel gpanel"><div class="shead"><h2>Case Battle</h2><span class="lab">otvor case proti botovi · víťaz berie všetky skiny</span></div>
      <div class="cbpick">${caseArt(c, 'sm')}<div><select id="cb-case" aria-label="Case" ${CB.busy ? 'disabled' : ''}>${cbSorted().map(({ c: cc, k }) => `<option value="${k}" ${k === CB.ci ? 'selected' : ''}>${esc(cc.n)} · ${fmt(caseCost(cc))} CR</option>`).join('')}</select>
        <div class="chips gm" style="margin-top:6px">${[1, 2, 3].map(n => `<button class="chip${CB.rounds === n ? ' on' : ''}" data-a="cb.r" data-v="${n}" ${CB.busy ? 'disabled' : ''}>${n}× kolo</button>`).join('')}</div></div></div>
      ${R ? `<div class="cbvs">${side(R.me, 'Ty')}<span class="vs">VS</span>${side(R.bot, R.name)}</div>` : '<p class="sub gsm" style="text-align:center;margin-top:10px">Obaja otvoríte rovnaký počet casov. Kto má vyššiu celkovú hodnotu, vyhráva oba sety. Pri remíze si každý nechá svoje.</p>'}
      ${CB.msg ? `<p class="gres ${A.win(CB.net)}">${CB.msg}</p>` : ''}
      <div class="gctl"><button class="btn gold gmain" data-a="cb.go" ${CB.busy ? 'disabled' : ''}>Bojovať · ${fmt(cost)} CR</button></div></div>`;
  },
  r(v) { if (CB.busy) return; CB.rounds = +v; A.render(); },
  go() {
    if (CB.busy) return; const c = CASES[CB.ci], cost = r2(caseCost(c) * CB.rounds); if (!take(cost)) return;
    const me = Array.from({ length: CB.rounds }, () => rollCase(c)), bot = Array.from({ length: CB.rounds }, () => rollCase(c));
    const mv = me.reduce((a, x) => a + price(x), 0), bv = bot.reduce((a, x) => a + price(x), 0), won = mv > bv + 1e-9, tie = Math.abs(mv - bv) < 1e-9;
    const items = won ? [...me, ...bot] : tie ? me : [], pay = won ? r2(mv + bv) : tie ? r2(mv) : 0, name = BOTDEF[ri(BOTDEF.length)][0];
    const pid = pendAdd('cb', cost, pay, { skin: true, items });
    CB.busy = true; CB.res = { me, bot, name }; CB.shown = 0; CB.msg = ''; A.render();
    const step = () => {
      CB.shown++; beep(400 + CB.shown * 90, .08, .05, 'triangle');
      if (onPage('cb')) A.render();
      if (CB.shown < CB.rounds) setTimeout(step, 950);
      else setTimeout(() => {
        pendDone(pid); CB.busy = false; CB.net = r2(pay - cost);
        CB.msg = won ? `Vyhral si! Získavaš ${items.length} skinov za ${CR(pay)}` : tie ? `Remíza · nechávaš si svoje skiny (${CR(pay)})` : `${name} vyhral · prišiel si o ${CR(cost)}`;
        won ? chime(mv + bv > cost * 4 ? 4 : 2) : tie ? chime(1) : beep(170, .25, .05, 'sawtooth'); if (onPage('cb')) A.render();
      }, 1000);
    };
    setTimeout(step, 600);
  }
};
document.addEventListener('change', e => { const t = e.target; if (t && t.id === 'cb-case') { CB.ci = +t.value; CB.res = null; CB.msg = ''; A.render(); } });

/* ===== AIM TRAINER (zarábanie kreditov zručnosťou) ===== */
const AIM = { run: false, t0: 0, hits: 0, miss: 0, tm: 0, iv: 0, msg: '' }, AIM_CAP = 10, AIM_PER = .05, AIM_S = 30;
const aimLeft = () => { const a = X().aim, t = today(); if (a.d !== t) { a.d = t; a.cr = 0; } return r2(AIM_CAP - a.cr); };
M.aim = {
  render() {
    const a = X().aim, left = aimLeft();
    body().innerHTML = `<div class="panel gpanel"><div class="shead"><h2>Aim</h2><span class="lab">${AIM_S} s · trafuj terče · ${AIM_PER * 100} centov za zásah · bez stávky</span></div>
      <div class="aimhud"><span>Čas <b id="aim-t">${AIM.run ? AIM_S : AIM_S}</b></span><span>Zásahy <b id="aim-h">${AIM.hits}</b></span><span>Netrafené <b id="aim-m">${AIM.miss}</b></span></div>
      <div class="aimf" id="aimf">${AIM.run ? '' : '<div class="aimidle">Ťukni na Štart</div>'}</div>
      ${AIM.msg ? `<p class="gres win">${AIM.msg}</p>` : ''}
      <p class="sub gsm" style="text-align:center">Dnešný limit: ${left > 0 ? `ešte <b class="money">${CR(left)}</b> z ${CR(AIM_CAP)}` : 'vyčerpaný, vráť sa zajtra'} · rekord ${a.best || 0} zásahov</p>
      <div class="gctl"><button class="btn gold gmain" data-a="aim.go" ${AIM.run ? 'disabled' : ''}>${AIM.run ? 'Beží…' : 'Štart'}</button></div></div>`;
  },
  go() {
    if (AIM.run) return; Object.assign(AIM, { run: true, t0: Date.now(), hits: 0, miss: 0, msg: '' }); A.render();
    const f = $('#aimf'); f.innerHTML = '';
    const spawn = () => {
      if (!AIM.run) return; const f = $('#aimf'); if (!f || !onPage('aim')) return stop(true);
      const sz = Math.max(36, 58 - AIM.hits * .5), life = Math.max(620, 1100 - AIM.hits * 9), W = f.clientWidth, H = f.clientHeight;
      const t = document.createElement('button'); t.className = 'aimt'; t.setAttribute('aria-label', 'Terč');
      t.style.cssText = `width:${sz}px;height:${sz}px;left:${sz / 2 + rnd() * (W - sz)}px;top:${sz / 2 + rnd() * (H - sz)}px`;
      let dead = false; const kill = ok => {
        if (dead) return; dead = true; clearTimeout(tm); t.remove();
        if (ok) { AIM.hits++; hit(); } else AIM.miss++;
        const h = $('#aim-h'), m = $('#aim-m'); if (h) h.textContent = AIM.hits; if (m) m.textContent = AIM.miss; setTimeout(spawn, 90);
      };
      t.addEventListener('pointerdown', e => { e.preventDefault(); kill(true); });
      const tm = setTimeout(() => kill(false), life); f.appendChild(t);
    };
    const stop = abort => {
      clearInterval(AIM.iv); AIM.run = false; const f = $('#aimf'); if (f) f.innerHTML = '';
      if (abort) { AIM.msg = ''; if (onPage('aim')) A.render(); return; }
      const a = X().aim, left = aimLeft(), cr = Math.min(left, r2(AIM.hits * AIM_PER)); if (AIM.hits > (a.best || 0)) a.best = AIM.hits;
      if (cr > 0) { a.cr = r2(a.cr + cr); claimGame(cr); chime(cr >= 1.5 ? 3 : 2); }
      AIM.msg = `${AIM.hits} zásahov z ${AIM.hits + AIM.miss} · ${cr > 0 ? '+' + CR(cr) : left <= 0 ? 'denný limit vyčerpaný' : 'bez odmeny'}`; save(); renderMe(); if (onPage('aim')) A.render();
    };
    AIM.iv = setInterval(() => {
      const s = Math.max(0, AIM_S - Math.floor((Date.now() - AIM.t0) / 1000)), e = $('#aim-t'); if (e) e.textContent = s;
      if (!onPage('aim')) return stop(true); if (s <= 0) stop(false);
    }, 200);
    spawn();
  }
};

/* ===== HODNOSTI ===== */
const RANKS = ['Silver I', 'Silver II', 'Silver III', 'Silver IV', 'Silver Elite', 'Silver Elite Master', 'Gold Nova I', 'Gold Nova II', 'Gold Nova III', 'Gold Nova Master', 'Master Guardian I', 'Master Guardian II', 'Master Guardian Elite', 'Distinguished Master Guardian', 'Legendary Eagle', 'Legendary Eagle Master', 'Supreme Master First Class', 'The Global Elite'];
const RK_T = [0, 40, 120, 300, 600, 1000, 1700, 2700, 4200, 6300, 9200, 13500, 19500, 28000, 40000, 57000, 80000, 115000];
const RK_COL = ['#aab4c0', '#aab4c0', '#aab4c0', '#aab4c0', '#c9d2dc', '#e0e7ee', '#e3a53c', '#e3a53c', '#e3a53c', '#f0bf5e', '#5b8def', '#5b8def', '#7aa2ff', '#a07bff', '#d58bff', '#eb4b4b', '#ff6b5e', '#ffd24a'];
const rkReward = i => 3 + 2 * i;
const wagered = () => Object.values(LS().g).reduce((a, g) => a + (g.in || 0), 0);
function rankInfo() {
  const w = wagered(); let i = 0; while (i < RK_T.length - 1 && w >= RK_T[i + 1]) i++;
  const nx = RK_T[i + 1], pr = nx ? (w - RK_T[i]) / (nx - RK_T[i]) : 1;
  return { i, w, nx, pr, name: RANKS[i], col: RK_COL[i] };
}
const rkPending = () => { const i = rankInfo().i, c = X().rk.c; let s = 0; for (let k = c + 1; k <= i; k++) s += rkReward(k); return s; };
function rankHTML() {
  const r = rankInfo(), pend = rkPending();
  return `<div class="rkcard" id="rk-card" style="--rc:${r.col}"><div class="rkb">${r.i + 1}</div><div class="rkt"><span class="lab">Hodnosť · vsadené ${f0(r.w)} CR</span><b>${r.name}</b>
    <div class="rkbar"><i style="width:${Math.round(r.pr * 100)}%"></i></div><span class="lab">${r.nx ? `do ${RANKS[r.i + 1]}: ešte ${f0(r.nx - r.w)} CR` : 'najvyššia hodnosť'}</span></div>
    ${pend > 0 ? `<button class="btn gold sm" data-rk="claim">+${f0(pend)} CR</button>` : ''}</div>`;
}
document.addEventListener('click', e => {
  const b = e.target.closest && e.target.closest('[data-rk]'); if (!b) return;
  const p = rkPending(); if (p <= 0) return; claimGame(p); X().rk.c = rankInfo().i; save(); renderMe(); chime(3); toast(`Odmena za hodnosť +${fmt(p)} CR`);
  qa('#rk-card').forEach(c => c.outerHTML = rankHTML());
});

/* ===== DENNÉ MISIE ===== */
const MS_POOL = [
  ['r10', 'Zahraj 10 kôl v hrách', 'r', null, 10, 3], ['r25', 'Zahraj 25 kôl v hrách', 'r', null, 25, 6], ['w5', 'Vyhraj 5 kôl', 'w', null, 5, 3], ['w12', 'Vyhraj 12 kôl', 'w', null, 12, 6],
  ['v50', 'Vsaď spolu 50 CR', 'v', null, 50, 4], ['v200', 'Vsaď spolu 200 CR', 'v', null, 200, 8],
  ['mines', 'Zahraj 5 kôl Mines', 'r', 'mines', 5, 2], ['dice', 'Zahraj 8 kôl Dice', 'r', 'dice', 8, 2], ['def', 'Zahraj 4 kolá Defuse', 'r', 'def', 4, 2],
  ['pen', 'Zahraj 3 Penalty rozstrely', 'r', 'pen', 3, 2], ['plk', 'Zahraj 8 kôl Plinko', 'r', 'plk', 8, 2], ['crash', 'Zahraj 5 kôl Crash', 'r', 'crash', 5, 2],
  ['bj', 'Zahraj 5 rúk Blackjacku', 'r', 'bj', 5, 2], ['hilo', 'Zahraj 5 kôl Hi-Lo', 'r', 'hilo', 5, 2], ['roul', 'Zahraj 5 spinov rulety', 'r', 'roul', 5, 2],
  ['slot', 'Zahraj 15 spinov slotov', 'r', 'slot', 15, 2], ['case', 'Otvor 5 casov', 'r', 'case', 5, 3], ['cb', 'Zahraj 2 Case Battle', 'r', 'cb', 2, 4], ['cbw', 'Vyhraj Case Battle', 'w', 'cb', 1, 5]
];
function msToday() {
  const x = X().ms, t = today();
  if (x.d !== t) {
    const r = mulberry(hs(t + 'ms')), pool = shuffle2(MS_POOL.map(m => m[0]), r);
    // maximálne jedna misia na hru / typ
    const out = [], used = new Set();
    for (const id of pool) { const m = MS_POOL.find(q => q[0] === id), cat = m[3] || m[2]; if (used.has(cat)) continue; used.add(cat); out.push(id); if (out.length === 3) break; }
    X().ms = { d: t, ids: out, p: {}, done: [], bonus: 0 };
  }
  return X().ms;
}
function shuffle2(a, r) { for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(r() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; }
function onRec(k, inn, out, n) {
  if (!n) return; const ms = msToday(); let changed = false;
  ms.ids.forEach(id => {
    if (ms.done.includes(id)) return; const m = MS_POOL.find(q => q[0] === id); if (m[3] && m[3] !== k) return;
    let add = 0; if (m[2] === 'r' && inn >= 1) add = n; else if (m[2] === 'w' && inn >= 1 && out - inn > .004) add = 1; else if (m[2] === 'v') add = inn;
    if (!add) return; ms.p[id] = r2((ms.p[id] || 0) + add); changed = true;
    if (ms.p[id] >= m[4]) {
      ms.done.push(id); claimGame(m[5]); toast(`Misia splnená: ${m[1]} · +${m[5]} CR`); chime(2);
      if (ms.done.length === ms.ids.length && !ms.bonus) { ms.bonus = 5; claimGame(5); setTimeout(() => toast('Všetky denné misie hotové · bonus +5 CR'), 2700); }
    }
  });
  if (changed) { save(); renderMe(); }
}
function missionsHTML() {
  const ms = msToday();
  return `<div class="panel gms"><div class="shead"><h2>Denné misie</h2><span class="lab">${ms.done.length} / ${ms.ids.length}${ms.bonus ? ' · bonus +5 CR vybraný' : ' · za všetky 3 bonus +5 CR'}</span></div>
   ${ms.ids.map(id => { const m = MS_POOL.find(q => q[0] === id), p = Math.min(m[4], ms.p[id] || 0), d = ms.done.includes(id);
     return `<div class="msn${d ? ' done' : ''}"><div><b>${m[1]}</b><div class="rkbar"><i style="width:${Math.round(p / m[4] * 100)}%"></i></div></div><span class="money">${d ? '✓' : '+' + m[5] + ' CR'}</span><span class="lab">${f0(p)} / ${m[4]}</span></div>`; }).join('')}
   <span class="lab">Počítajú sa kolá so stávkou aspoň 1 CR · nové misie každý deň</span></div>`;
}

/* ===== ŽIVÉ VÝHRY (boti) ===== */
const FEED_G = [['Crash', 'crash'], ['Mines', 'mines'], ['Plinko', 'plk'], ['Dice', 'dice'], ['Blackjack', 'bj'], ['Defuse', 'def'], ['Ruleta', 'roul'], ['Sloty', 'slot'], ['Penalty', 'pen'], ['Koleso', 'wheel'], ['Hi-Lo', 'hilo']];
function feedLines(n) {
  const slot = Math.floor(Date.now() / 9000), names = BOTDEF.map(b => b[0]), out = [];
  for (let s = slot; s > slot - n; s--) {
    const r = mulberry(s * 7919 + 13), nm = names[Math.floor(r() * names.length)], g = FEED_G[Math.floor(r() * FEED_G.length)];
    const bet = Math.max(.5, Math.round(Math.exp(r() * 4.2 - .3) * 10) / 10), x = Math.round((1.3 + -Math.log(1 - r() * .97) * 2.4) * 100) / 100;
    out.push({ nm, g: g[0], x, win: r2(bet * x) });
  }
  return out;
}
const feedHTML = () => feedLines(6).map(l => `<div class="fd"><span class="fdn">${esc(l.nm)}</span><span class="lab">${l.g} ×${l.x.toFixed(2)}</span><b class="win">+${fmt(l.win)}</b></div>`).join('');
let feedT = 0;

/* ===== PREHĽAD ===== */
const META = {
  bj: ['Blackjack', '🃏', 'Split, double, poistka'], hilo: ['Hi-Lo', '⬆️', 'Vyššia či nižšia karta'], cf: ['Coinflip', '🪙', 'Kredity alebo skin'], scr: ['Stieracie losy', '🎟️', 'Až 100× výhra'],
  plk: ['Plinko', '🔻', 'Voľ riziko a riadky'], crash: ['Crash', '📈', 'Vyber pred pádom'], wheel: ['Koleso šťastia', '🎡', 'Denný free spin'],
  mines: ['Mines', '💎', '5×5, vyhni sa mínam'], dice: ['Dice', '🎲', 'Nad alebo pod'], def: ['Defuse', '✂️', 'Strihaj správny drôt'], pen: ['Penalty', '⚽', '5 kopov na bránku'],
  cb: ['Case Battle', '📦', 'Casy proti botovi'], aim: ['Aim', '🎯', 'Zarábaj kredity mierením'], guess: ['Uhádni skin', '🔍', 'Poznáš skiny?'], hl: ['Cena skinu', '⚖️', 'Vyššia alebo nižšia cena'],
  mkt: ['Trh', '🏪', 'Predaj a kupuj od botov'], lb: ['Rebríček', '🏆', 'Porovnaj sa s botmi'], col: ['Kolekcia', '📚', 'Objav všetky skiny']
};
const STATKEY = { bj: 'bj', hilo: 'hilo', cf: 'cf', scr: 'scr', plk: 'plk', crash: 'crash', wheel: 'wheel', mines: 'mines', dice: 'dice', def: 'def', pen: 'pen', cb: 'cb', hl: 'hl' };
M.home = {
  render() {
    const G = LS().g, last = RL2.last && M[RL2.last] && RL2.last !== 'home' && META[RL2.last];
    body().innerHTML = `<div class="ghome">${rankHTML()}
      ${last ? `<button class="btn gold gmain" data-a="home.go" data-v="${RL2.last}">Pokračovať: ${META[RL2.last][0]}</button>` : ''}
      ${missionsHTML()}
      <div class="panel gfeed"><span class="lab">Živé výhry hráčov</span><div id="gfeed">${feedHTML()}</div></div>
      <div class="shead" style="margin-top:4px"><h2>Všetky hry</h2></div>
      <div class="gtiles">${Object.entries(META).map(([k, [n, ic, d]]) => { const g = STATKEY[k] && G[STATKEY[k]], net = g ? g.out - g.in : null;
        return `<button class="gtile" data-a="home.go" data-v="${k}"><span class="gti">${ic}</span><b>${n}</b><span class="lab">${d}</span>${g && g.n ? `<span class="gtn ${net >= 0 ? 'win' : 'lose'}">${sg(net)}</span>` : ''}</button>`; }).join('')}</div></div>`;
    clearInterval(feedT); feedT = setInterval(() => { const f = $('#gfeed'); if (f && onPage('home')) f.innerHTML = feedHTML(); else clearInterval(feedT); }, 9000);
  },
  go(v) { lsSet('rl_last', v); RL2.last = v; go(v); }
};

/* ===== KOLEKCIA ===== */
const COL_CR = 10, COL_CR_ALL = 25;
function scanDisc() { try { const d = X().disc; for (const x of S.inv) if (!d[x.i]) d[x.i] = 1; } catch (e) {} }
const colCnt = c => { const d = X().disc, main = c.c.filter(i => d[i]).length, rare = c.r.filter(i => d[i]).length; return { main, rare, mt: c.c.length, rt: c.r.length }; };
const COL = { open: -1 };
M.col = {
  render() {
    scanDisc(); const d = X().disc, cl = X().col, all = new Set(); CASES.forEach(c => { c.c.forEach(i => all.add(i)); c.r.forEach(i => all.add(i)); });
    const have = [...all].filter(i => d[i]).length;
    const rows = CASES.map((c, k) => ({ c, k, n: colCnt(c) })).sort((a, b) => (b.n.main / b.n.mt) - (a.n.main / a.n.mt) || b.k - a.k);
    body().innerHTML = `<div class="panel gpanel"><div class="shead"><h2>Kolekcia</h2><span class="lab">objavené skiny ${have} / ${all.size} · odmena za kompletný case</span></div>
      <div class="rkbar big"><i style="width:${Math.round(have / all.size * 100)}%"></i></div>
      <p class="sub gsm">Počíta sa tvoj inventár (aj trezor) a všetko, čo ti odteraz padne.</p>
      <div class="collist">${rows.map(({ c, k, n }) => {
        const full = n.main === n.mt, fullAll = full && n.rare === n.rt && n.rt > 0, op = COL.open === k;
        const b1 = full && !cl[k + 'a'] ? `<button class="btn gold sm" data-a="col.claim" data-v="${k}:a">+${COL_CR} CR</button>` : '';
        const b2 = fullAll && !cl[k + 'b'] ? `<button class="btn gold sm" data-a="col.claim" data-v="${k}:b">★ +${COL_CR_ALL} CR</button>` : '';
        return `<div class="colrow${op ? ' open' : ''}"><button class="colh" data-a="col.tg" data-v="${k}"><b>${esc(c.n)}</b><span class="lab">${n.main}/${n.mt}${n.rt ? ` · ★ ${n.rare}/${n.rt}` : ''}</span><div class="rkbar"><i style="width:${Math.round(n.main / n.mt * 100)}%"></i></div></button>${b1}${b2}
          ${op ? `<div class="colgrid">${[...c.c, ...c.r].map(i => { const f = d[i], r = ITEMS[i][2]; return `<div class="ct${f ? '' : ' lock'}" style="--rc:${RCOL[r]}" title="${f ? esc(ITEMS[i][0] + ' | ' + (ITEMS[i][1] || 'Vanilla')) : '???'}"><i style="${spriteStyle(i)}"></i><span>${f ? esc(ITEMS[i][1] || 'Vanilla') : '???'}</span></div>`; }).join('')}</div>` : ''}</div>`;
      }).join('')}</div></div>`;
  },
  tg(v) { COL.open = COL.open === +v ? -1 : +v; A.render(); },
  claim(v) {
    const [k, t] = v.split(':'), cl = X().col, key = k + t; if (cl[key]) return; const cr = t === 'a' ? COL_CR : COL_CR_ALL;
    cl[key] = 1; claimGame(cr); save(); renderMe(); chime(3); toast(`Kolekcia dokončená +${cr} CR`); A.render();
  }
};

/* ---------- init ---------- */
const RL2 = { last: lsGet('rl_game', '') };
const baseInit = window.RLG.init, baseSnap = window.RLG.snap;
window.RLG.init = function () {
  baseInit();
  if (!window.rec.__x2) { const r0 = window.rec; const nr = function (k, i, o, n) { const v = r0.apply(this, arguments); try { onRec(k, i, o, n === undefined ? 1 : n); } catch (e) { console.error(e); } return v; }; nr.__x2 = 1; window.rec = nr; }
  scanDisc(); msToday();
  if (RL2.last && M[RL2.last] && RL2.last !== 'home') lsSet('rl_last', RL2.last);
  RL2.last = lsGet('rl_last', ''); go('home');
};
window.RLG.snap = function () { baseSnap(); scanDisc(); };
document.addEventListener('click', e => { const a = e.target.closest && e.target.closest('#gnav [data-k]'); if (a && a.dataset.k !== 'home') { lsSet('rl_last', a.dataset.k); RL2.last = a.dataset.k; } });
window.RLG2 = { rankHTML, rankInfo, core: { mnMult, dcCh, dcMult, dfMult, DF_D, PN_P, PN_T, RK_T, RANKS, MS_POOL, wagered } };
})();
