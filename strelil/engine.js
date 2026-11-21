/* si/strelil — herný engine (čistý JS, beží v prehliadači aj v Node).
   Stav hry je jeden JSON objekt. Kto robí ťah, zoberie aktuálny stav,
   zavolá E.apply(stav, hrac, akcia) a výsledok zapíše do databázy. */
(function (root) {
  'use strict';

  // ---------- KARTY ----------
  // c: b = hnedá (zahraj a odhoď), m = modrá (leží na stole), w = zbraň
  const CARDS = {
    vystrel:    { n: 'Výstrel', c: 'b', ic: '💥', d: 'Strel na hráča v dosahu zbrane. Len 1× za ťah.' },
    vedla:      { n: 'Vedľa!', c: 'b', ic: '💨', d: 'Uhneš výstrelu.' },
    pivo:       { n: 'Pivo', c: 'b', ic: '🍺', d: '+1 život. Nefunguje, keď ostanú len 2 hráči.' },
    krcma:      { n: 'Krčma', c: 'b', ic: '🥃', d: 'Všetci živí +1 život.' },
    dostavnik:  { n: 'Dostavník', c: 'b', ic: '🛞', d: 'Ťaháš 2 karty.' },
    vlak:       { n: 'Zlatý vlak', c: 'b', ic: '🚂', d: 'Ťaháš 3 karty.' },
    vreckar:    { n: 'Vreckár', c: 'b', ic: '🫳', d: 'Vezmi 1 kartu hráčovi vo vzdialenosti 1.' },
    sabotaz:    { n: 'Sabotáž', c: 'b', ic: '✂️', d: 'Zahoď 1 kartu ľubovoľnému hráčovi.' },
    suboj:      { n: 'Súboj', c: 'b', ic: '🤺', d: 'Striedavo odhadzujete Výstrely. Kto prvý nemá, stráca život.' },
    gulomet:    { n: 'Guľomet', c: 'b', ic: '🔥', d: 'Výstrel na všetkých ostatných naraz.' },
    prepad:     { n: 'Prepad!', c: 'b', ic: '🏹', d: 'Každý iný odhodí Výstrel, alebo stratí život.' },
    jarmok:     { n: 'Jarmok', c: 'b', ic: '🛒', d: 'Otočia sa karty, každý si jednu vyberie (ty prvý).' },
    sud:        { n: 'Sud', c: 'm', ic: '🛢️', d: 'Keď ťa trafia: Ťah! Srdce = uhol si.' },
    dynamit:    { n: 'Dynamit', c: 'm', ic: '🧨', d: 'Daj pred seba. Na začiatku ťahu Ťah! Pika 2–9 = −3 životy, inak putuje ďalej.' },
    basa:       { n: 'Basa', c: 'm', ic: '⛓️', d: 'Daj inému hráčovi (nie šerifovi). Ťah! Srdce = ujde, inak stojí kolo.' },
    mustang:    { n: 'Mustang', c: 'm', ic: '🐴', d: 'Ostatní ťa vidia o 1 ďalej.' },
    dalekohlad: { n: 'Ďalekohľad', c: 'm', ic: '🔭', d: 'Ostatných vidíš o 1 bližšie.' },
    sedmicka:   { n: 'Sedmička', c: 'w', r: 1, ic: '🔫', d: 'Zbraň s dosahom 1. Výstrelov neobmedzene.' },
    kolt:       { n: 'Kolt', c: 'w', r: 2, ic: '🔫', d: 'Zbraň s dosahom 2.' },
    puska:      { n: 'Puška', c: 'w', r: 3, ic: '🔫', d: 'Zbraň s dosahom 3.' },
    karabina:   { n: 'Karabína', c: 'w', r: 4, ic: '🔫', d: 'Zbraň s dosahom 4.' },
    ostrostrel: { n: 'Ostrostrel', c: 'w', r: 5, ic: '🎯', d: 'Zbraň s dosahom 5.' },
    // rozšírenie „Nové karty“
    past:       { n: 'Päsť', c: 'b', x: 1, ic: '👊', d: 'Výstrel na vzdialenosť 1. Nepočíta sa do limitu.' },
    uskok:      { n: 'Úskok', c: 'b', x: 1, ic: '🌀', d: 'Ako Vedľa! a ešte ťaháš 1 kartu.' },
    odstrelovac:{ n: 'Odstreľovač', c: 'b', x: 1, ic: '🎯', d: 'Odhoď ešte 1 kartu: Výstrel na hocijakú vzdialenosť.' },
    whisky:     { n: 'Whisky', c: 'b', x: 1, ic: '🥃', d: 'Odhoď ešte 1 kartu: +2 životy.' },
    bitka:      { n: 'Bitka', c: 'b', x: 1, ic: '🍾', d: 'Odhoď ešte 1 kartu: každý iný stratí náhodnú kartu.' },
    ukryt:      { n: 'Úkryt', c: 'm', x: 1, ic: '🪨', d: 'Ostatní ťa vidia o 1 ďalej (platí aj s Mustangom).' },
  };
  const DECK_BASE = { vystrel: 25, vedla: 12, pivo: 6, krcma: 1, dostavnik: 2, vlak: 1, vreckar: 4, sabotaz: 4, suboj: 3, gulomet: 1, prepad: 2, jarmok: 2, sud: 2, dynamit: 1, basa: 3, mustang: 2, dalekohlad: 1, sedmicka: 2, kolt: 3, puska: 1, karabina: 1, ostrostrel: 1 };
  const DECK_EXTRA = { past: 2, uskok: 2, odstrelovac: 1, whisky: 1, bitka: 2, ukryt: 1, vystrel: 2, vedla: 1 };

  // ---------- POSTAVY ----------
  const CHARS = {
    tono:   { n: 'Tvrdý Tono', hp: 4, ic: '🪨', d: 'Za každý stratený život si potiahne kartu.' },
    jano:   { n: 'Pomstychtivý Jano', hp: 3, ic: '😤', d: 'Keď ho niekto zraní, vezme mu kartu z ruky.' },
    kata:   { n: 'Žonglérka Kata', hp: 4, ic: '🤹‍♀️', d: 'Výstrel a Vedľa! môže použiť jedno namiesto druhého.' },
    palo:   { n: 'Kartár Paľo', hp: 4, ic: '🃏', d: 'Prvú kartu môže potiahnuť z ruky iného hráča.' },
    lucka:  { n: 'Šťastná Lucka', hp: 4, ic: '🍀', d: 'Pri Ťah! otočí 2 karty a platí lepšia.' },
    fero:   { n: 'Fero Pancier', hp: 4, ic: '🛡️', d: 'Má zabudovaný Sud.' },
    kit:    { n: 'Bystrý Kit', hp: 4, ic: '🦊', d: 'Pri ťahaní pozrie o kartu viac a jednu vráti.' },
    miro:   { n: 'Kopytník Miro', hp: 3, ic: '🐎', d: 'Ostatní ho vidia o 1 ďalej.' },
    rudo:   { n: 'Stopár Rudo', hp: 4, ic: '🧭', d: 'Ostatných vidí o 1 bližšie.' },
    viktor: { n: 'Mrchožrút Viktor', hp: 4, ic: '🦅', d: 'Keď niekto zomrie, zoberie všetky jeho karty.' },
    willy:  { n: 'Rýchly Willy', hp: 4, ic: '⚡', d: 'Môže hrať neobmedzene Výstrelov.' },
    zuzka:  { n: 'Tvrdohlavá Zuzka', hp: 4, ic: '🌵', d: 'Keď nemá v ruke nič, hneď si potiahne kartu.' },
    sid:    { n: 'Doktor Sid', hp: 4, ic: '🩺', d: 'Kedykoľvek odhodí 2 karty = +1 život.' },
    slim:   { n: 'Ťažký Slim', hp: 4, ic: '🐂', d: 'Na jeho Výstrel treba 2× Vedľa!.' },
    pedro:  { n: 'Ostroha Pedro', hp: 4, ic: '🌮', d: 'Prvú kartu môže vziať z kôpky odhodených.' },
    jack:   { n: 'Čierny Jack', hp: 4, ic: '🎩', d: 'Ukáže 2. potiahnutú kartu; ak je červená, ťahá ešte jednu.' },
    // rozšírenie „Nové postavy“
    jozo:   { n: 'Hostinský Jožo', hp: 4, x: 1, ic: '🍻', d: 'Pivo mu dáva +2 životy.' },
    doc:    { n: 'Doc Hrom', hp: 4, x: 1, ic: '⛈️', d: '1× za ťah: odhoď 2 karty = Výstrel, ktorý sa nepočíta do limitu.' },
    bill:   { n: 'Bezohľadný Bill', hp: 4, x: 1, ic: '💀', d: 'Ťahá 1 kartu + 1 za každý chýbajúci život.' },
    greg:   { n: 'Hrobár Greg', hp: 4, x: 1, ic: '⚰️', d: 'Keď niekto zomrie, dostane +2 životy.' },
    chucho: { n: 'Chucho Kaktus', hp: 4, x: 1, ic: '🌶️', d: 'Vo svojom ťahu: −1 život = +2 karty (aj viackrát).' },
    molly:  { n: 'Tichá Molly', hp: 4, x: 1, ic: '🌙', d: 'Keď zahrá kartu mimo svojho ťahu, potiahne si kartu.' },
  };

  const ROLES = {
    serif:    { n: 'Šerif', ic: '⭐', d: 'Zlikviduj všetkých banditov a odpadlíka. Máš +1 život a všetci ťa poznajú.' },
    pomocnik: { n: 'Pomocník', ic: '🔰', d: 'Chráň šerifa. Vyhrávaš s ním.' },
    bandita:  { n: 'Bandita', ic: '🦹', d: 'Zastreľ šerifa. Vyhrávate všetci banditi spolu.' },
    odpadlik: { n: 'Odpadlík', ic: '🐍', d: 'Ostaň posledný na žive — najprv ostatní, nakoniec šerif.' },
  };
  const ROLESETS = {
    4: ['serif', 'odpadlik', 'bandita', 'bandita'],
    5: ['serif', 'odpadlik', 'bandita', 'bandita', 'pomocnik'],
    6: ['serif', 'odpadlik', 'bandita', 'bandita', 'bandita', 'pomocnik'],
    7: ['serif', 'odpadlik', 'bandita', 'bandita', 'bandita', 'pomocnik', 'pomocnik'],
  };

  // ---------- UDALOSTI (rozšírenie „Pravé poludnie“) ----------
  const EVENTS = {
    smad:        { n: 'Smäd', ic: '🏜️', d: 'Všetci ťahajú o 1 kartu menej.' },
    hojnost:     { n: 'Hojnosť', ic: '🌽', d: 'Všetci ťahajú o 1 kartu viac.' },
    kocovina:    { n: 'Kocovina', ic: '🤕', d: 'Postavy strácajú svoje schopnosti.' },
    pozehnanie:  { n: 'Požehnanie', ic: '🙏', d: 'Každý Ťah! je srdce.' },
    prekliatie:  { n: 'Prekliatie', ic: '🕷️', d: 'Každý Ťah! je pika.' },
    bezlimitu:   { n: 'Divoká noc', ic: '🌕', d: 'Výstrelov môžeš hrať koľko chceš.' },
    burka:       { n: 'Piesočná búrka', ic: '🌪️', d: 'Všetky vzdialenosti sú 1.' },
    pivofest:    { n: 'Pivný festival', ic: '🍺', d: 'Pivo dáva +2 životy.' },
    prazdnesudy: { n: 'Deravé sudy', ic: '🕳️', d: 'Sudy nefungujú.' },
    mesiac:      { n: 'Krvavý mesiac', ic: '🩸', d: 'Zásah Výstrelom berie 2 životy.' },
    horucka:     { n: 'Zlatá horúčka', ic: '⛏️', d: 'V obchode je všetko o 1 zlato lacnejšie.', gold: 1 },
    poludnie:    { n: 'Pravé poludnie', ic: '🕛', d: 'Na začiatku svojho ťahu každý stratí 1 život. (Finále)' },
  };

  // ---------- OBCHOD (rozšírenie „Zlatá horúčka“) ----------
  const ITEMS = {
    ostrohy:    { n: 'Ostrohy', cost: 2, ic: '⭐', d: 'Ostatní ťa vidia o 1 ďalej.' },
    vesta:      { n: 'Kožená vesta', cost: 3, ic: '🦺', d: 'Raz za kolo zastaví prvý zásah od hráča.' },
    klobuk:     { n: 'Klobúk', cost: 3, ic: '🤠', d: 'Pri ťahaní dostaneš o 1 kartu viac.' },
    muska:      { n: 'Zlatá muška', cost: 2, ic: '🎯', d: 'Dosah tvojej zbrane +1.' },
    pas:        { n: 'Nábojový pás', cost: 3, ic: '🎖️', d: 'Môžeš zahrať o 1 Výstrel za ťah viac.' },
    podkova:    { n: 'Podkova', cost: 3, ic: '🧲', d: 'Pri Ťah! otočíš 2 karty a platí lepšia.' },
    lekarnicka: { n: 'Lekárnička', cost: 2, once: 1, ic: '🩹', d: 'Hneď +2 životy.' },
    mapa:       { n: 'Mapa pokladu', cost: 2, once: 1, ic: '🗺️', d: 'Hneď si potiahneš 3 karty.' },
    flasa:      { n: 'Fľaša', cost: 1, once: 1, ic: '🍶', d: 'Hneď +1 život.' },
  };

  const SUITS = ['h', 'd', 'c', 's'];
  const SUIT_IC = { h: '♥', d: '♦', c: '♣', s: '♠' };
  const RANK_N = { 11: 'J', 12: 'Q', 13: 'K', 14: 'A' };

  // ---------- pomôcky ----------
  function rnd(s) { // mulberry32, stav v s.seed
    let t = (s.seed = (s.seed + 0x6D2B79F5) | 0);
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  }
  function shuffle(s, a) { for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(rnd(s) * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; }
  function pick(s, a) { return a[Math.floor(rnd(s) * a.length)]; }
  function P(s, id) { return s.players.find(p => p.id === id); }
  function nm(s, id) { const p = P(s, id); return p ? p.name : '?'; }
  function T(s, cid) { return s.cards[cid].t; }
  function cardName(s, cid) { return CARDS[T(s, cid)].n; }
  function cardLabel(s, cid) { const c = s.cards[cid]; return CARDS[c.t].n + ' ' + (RANK_N[c.r] || c.r) + SUIT_IC[c.s]; }
  function fail(msg) { const e = new Error(msg); e.game = true; throw e; }
  function log(s, msg, kind) { s.log.push({ i: ++s.logN, m: msg, k: kind || '' }); if (s.log.length > 90) s.log.splice(0, s.log.length - 90); }
  function fx(s, f) { f.i = ++s.fxN; s.fx.push(f); if (s.fx.length > 12) s.fx.splice(0, s.fx.length - 12); }

  function alive(s) { return s.players.filter(p => p.alive); }           // živí (nie duchovia)
  function inGame(s, p) { return p.alive || (p.ghost && p.ghostTurns > 0); }
  function eventOn(s, id) { return s.event === id && (s.opts.events || id === 'poludnie'); }
  function ab(s, p, id) { return p.char === id && !eventOn(s, 'kocovina') && p.alive; }
  function hasItem(p, id) { return p.items.indexOf(id) >= 0; }
  function tableHas(s, p, t) { return p.table.find(c => T(s, c) === t); }
  function weapon(s, p) { return p.table.find(c => CARDS[T(s, c)].c === 'w'); }

  function drawCard(s) {
    if (!s.deck.length) {
      if (s.discard.length <= 1) return null;
      const top = s.discard.pop();
      s.deck = shuffle(s, s.discard);
      s.discard = [top];
      log(s, '🔄 Balíček sa zamiešal.');
    }
    return s.deck.pop();
  }
  function give(s, p, n) { let k = 0; for (let i = 0; i < n; i++) { const c = drawCard(s); if (c == null) break; p.hand.push(c); k++; } return k; }
  function toDiscard(s, cid) { s.discard.push(cid); }
  function removeFromHand(p, cid) { const i = p.hand.indexOf(cid); if (i < 0) fail('Túto kartu nemáš.'); p.hand.splice(i, 1); }

  // ---------- vzdialenosť a dosah ----------
  function seatsAlive(s) { return s.players.filter(p => p.alive).sort((a, b) => a.seat - b.seat); }
  function distance(s, from, to) {
    if (from.id === to.id) return 0;
    if (!from.alive) return 1; // duch je všade
    if (eventOn(s, 'burka')) return 1;
    const ring = seatsAlive(s);
    const i = ring.findIndex(p => p.id === from.id), j = ring.findIndex(p => p.id === to.id);
    if (i < 0 || j < 0) return 99;
    const n = ring.length, d0 = Math.abs(i - j);
    let d = Math.min(d0, n - d0);
    if (tableHas(s, to, 'mustang')) d++;
    if (tableHas(s, to, 'ukryt')) d++;
    if (ab(s, to, 'miro')) d++;
    if (hasItem(to, 'ostrohy')) d++;
    if (tableHas(s, from, 'dalekohlad')) d--;
    if (ab(s, from, 'rudo')) d--;
    return Math.max(1, d);
  }
  function range(s, p) {
    const w = weapon(s, p);
    return (w ? CARDS[T(s, w)].r : 1) + (hasItem(p, 'muska') ? 1 : 0);
  }
  function bangLimit(s, p) {
    const w = weapon(s, p);
    if ((w && T(s, w) === 'sedmicka') || ab(s, p, 'willy') || eventOn(s, 'bezlimitu')) return 99;
    return 1 + (hasItem(p, 'pas') ? 1 : 0);
  }
  function handLimit(p) { return p.alive ? Math.max(0, p.hp) : 99; }
  function targetable(s, me) { return seatsAlive(s).filter(p => p.id !== me.id); }

  // ---------- Ťah! (kontrola karty) ----------
  function check(s, p, good, why) {
    const lucky = (ab(s, p, 'lucka') || hasItem(p, 'podkova'));
    const n = lucky ? 2 : 1;
    const drawn = [];
    for (let i = 0; i < n; i++) { const c = drawCard(s); if (c == null) break; drawn.push(c); }
    if (!drawn.length) return false;
    const view = c => { const o = Object.assign({}, s.cards[c]); if (eventOn(s, 'pozehnanie')) o.s = 'h'; if (eventOn(s, 'prekliatie')) o.s = 's'; return o; };
    let ok = drawn.some(c => good(view(c)));
    drawn.forEach(c => toDiscard(s, c));
    log(s, '🎴 Ťah! (' + why + ') ' + p.name + ': ' + drawn.map(c => cardLabel(s, c)).join(' / ') + (ok ? ' ✔' : ' ✘'));
    fx(s, { t: 'check', pid: p.id, cards: drawn.slice(), ok, why });
    return ok;
  }

  // ---------- zranenie, liečenie, smrť ----------
  function heal(s, p, n) { const b = p.hp; p.hp = Math.min(p.maxHp, p.hp + n); return p.hp - b; }

  function damage(s, p, n, srcId, how) {
    if (!p.alive || n <= 0) return;
    const src = srcId ? P(s, srcId) : null;
    if (src && src.id !== p.id && hasItem(p, 'vesta') && !p.vestaUsed) {
      p.vestaUsed = true; log(s, '🦺 Vesta zastavila zásah na ' + p.name + '.'); fx(s, { t: 'block', pid: p.id }); return;
    }
    p.hp -= n;
    fx(s, { t: 'hit', pid: p.id, n, how: how || '' });
    log(s, '🩸 ' + p.name + ' −' + n + ' ' + (n === 1 ? 'život' : 'životy') + (src && src.id !== p.id ? ' (od ' + src.name + ')' : '') + '. Ostáva ' + Math.max(0, p.hp) + '.', 'hit');
    // záchrana pred smrťou (automaticky)
    if (p.hp <= 0) saveFromDeath(s, p);
    if (p.hp <= 0) { eliminate(s, p, src); return; }
    if (ab(s, p, 'tono')) { const k = give(s, p, n); if (k) log(s, '🪨 ' + p.name + ' si za bolesť potiahol ' + k + '.'); }
    if (ab(s, p, 'jano') && src && src.id !== p.id && src.hand.length) {
      for (let i = 0; i < n && src.hand.length; i++) { const c = src.hand.splice(Math.floor(rnd(s) * src.hand.length), 1)[0]; p.hand.push(c); }
      log(s, '😤 ' + p.name + ' vzal kartu z ruky ' + src.name + '.');
    }
  }

  function saveFromDeath(s, p) {
    const many = alive(s).length > 2;
    let guard = 0;
    while (p.hp <= 0 && guard++ < 20) {
      const pivo = many ? p.hand.find(c => T(s, c) === 'pivo') : null;
      if (pivo != null) { removeFromHand(p, pivo); toDiscard(s, pivo); p.hp += beerPower(s, p); log(s, '🍺 ' + p.name + ' sa zachránil pivom!', 'save'); continue; }
      const wh = p.hand.find(c => T(s, c) === 'whisky');
      if (wh != null && p.hand.length >= 2) { removeFromHand(p, wh); toDiscard(s, wh); const other = cheapest(s, p.hand); removeFromHand(p, other); toDiscard(s, other); p.hp += 2; log(s, '🥃 ' + p.name + ' sa zachránil whisky!', 'save'); continue; }
      if (ab(s, p, 'sid') && p.hand.length >= 2) { for (let k = 0; k < 2; k++) { const c = cheapest(s, p.hand); removeFromHand(p, c); toDiscard(s, c); } p.hp += 1; log(s, '🩺 ' + p.name + ' sa zaplátal (2 karty).', 'save'); continue; }
      break;
    }
  }
  function beerPower(s, p) { return (ab(s, p, 'jozo') || eventOn(s, 'pivofest')) ? 2 : 1; }

  function eliminate(s, p, killer) {
    p.alive = false; p.hp = 0;
    log(s, '☠️ ' + p.name + ' padol! Bol to ' + ROLES[p.role].n + '.', 'death');
    fx(s, { t: 'death', pid: p.id, role: p.role });
    const cards = p.hand.concat(p.table);
    p.hand = []; p.table = [];
    const vik = s.players.find(q => q.alive && ab(s, q, 'viktor'));
    if (vik) { vik.hand.push(...cards); if (cards.length) log(s, '🦅 ' + vik.name + ' si zobral ' + cards.length + ' kariet.'); }
    else cards.forEach(c => toDiscard(s, c));
    s.players.forEach(q => { if (q.alive && ab(s, q, 'greg')) { const h = heal(s, q, 2); if (h) log(s, '⚰️ ' + q.name + ' +' + h + ' na pohrebe.'); } });
    if (killer && killer.alive && killer.id !== p.id) {
      if (p.role === 'bandita') { give(s, killer, 3); log(s, '💰 ' + killer.name + ' dostal odmenu 3 karty.'); }
      if (p.role === 'pomocnik' && killer.role === 'serif') {
        const all = killer.hand.concat(killer.table); killer.hand = []; killer.table = []; all.forEach(c => toDiscard(s, c));
        log(s, '😬 Šerif zastrelil pomocníka a prišiel o všetky karty.');
      }
      if (s.opts.gold) { killer.gold += 2; }
    }
    if (s.opts.ghosts) { p.ghost = true; p.ghostTurns = 2; log(s, '👻 ' + p.name + ' sa vráti ako duch na 2 ťahy.'); }
    s.q = s.q.filter(h => !(h.pid === p.id && h.k !== 'jarmok'));
    s.q.forEach(h => { if (h.k === 'jarmok') h.order = h.order.filter(id => id !== p.id); });
    if (s.turnPid === p.id) s.stage = 'dead';
    checkWin(s);
  }

  function checkWin(s) {
    if (s.phase !== 'play') return;
    const al = alive(s);
    const sheriff = s.players.find(p => p.role === 'serif');
    let w = null;
    if (!sheriff.alive) {
      w = (al.length === 1 && al[0].role === 'odpadlik') ? 'odpadlik' : 'bandita';
    } else if (!al.some(p => p.role === 'bandita' || p.role === 'odpadlik')) w = 'serif';
    if (w) {
      s.phase = 'over'; s.winner = w; s.q = [];
      const txt = { serif: 'Vyhral zákon! Šerif a pomocníci', bandita: 'Vyhrali banditi', odpadlik: 'Vyhral odpadlík' }[w];
      log(s, '🏆 ' + txt + '!', 'win');
      fx(s, { t: 'win', w });
    }
  }
  function winners(s) {
    if (!s.winner) return [];
    return s.players.filter(p => s.winner === 'serif' ? (p.role === 'serif' || p.role === 'pomocnik') : s.winner === 'bandita' ? p.role === 'bandita' : (p.role === 'odpadlik' && p.alive)).map(p => p.id);
  }

  // ---------- priebeh ťahu ----------
  function nextTurn(s) {
    const order = s.players.slice().sort((a, b) => a.seat - b.seat);
    const cur = order.findIndex(p => p.id === s.turnPid);
    for (let k = 1; k <= order.length; k++) {
      const p = order[(cur + k) % order.length];
      if (inGame(s, p)) {
        if (p.role === 'serif' && p.alive) newRound(s);
        s.turnPid = p.id; s.stage = 'start';
        return;
      }
    }
  }
  function newRound(s) {
    s.round++;
    if (!s.opts.events && s.round === 25) { s.event = 'poludnie'; log(s, '🕛 Hra sa ťahá. Prichádza Pravé poludnie: každý stratí 1 život na začiatku svojho ťahu.', 'event'); fx(s, { t: 'event', e: 'poludnie' }); }
    if (s.opts.events && s.round >= 2) {
      if (s.eventDeck.length) s.event = s.eventDeck.shift();
      if (s.event) { log(s, EVENTS[s.event].ic + ' Udalosť kola: ' + EVENTS[s.event].n + ' — ' + EVENTS[s.event].d, 'event'); fx(s, { t: 'event', e: s.event }); }
    }
  }

  function doStart(s) {
    const p = P(s, s.turnPid);
    p.bangs = 0; p.vestaUsed = false; p.docUsed = false;
    log(s, '▶️ Na ťahu: ' + p.name + (p.ghost && !p.alive ? ' 👻' : ''), 'turn');
    if (!p.alive) { // duch
      p.ghostTurns--;
      give(s, p, 2);
      s.stage = 'play';
      return;
    }
    if (eventOn(s, 'poludnie')) { damage(s, p, 1, null, 'poludnie'); if (!p.alive) return; }
    if (s.opts.gold) p.gold += 1;
    // dynamit
    const dyn = tableHas(s, p, 'dynamit');
    if (dyn != null) {
      const boom = !check(s, p, c => !(c.s === 's' && c.r >= 2 && c.r <= 9), 'dynamit');
      p.table.splice(p.table.indexOf(dyn), 1);
      if (boom) {
        toDiscard(s, dyn); log(s, '💥💥 Dynamit vybuchol ' + p.name + ' do tváre!', 'hit'); fx(s, { t: 'boom', pid: p.id });
        damage(s, p, 3, null, 'dynamit');
        if (!p.alive) return;
      } else {
        const ring = seatsAlive(s); const i = ring.findIndex(q => q.id === p.id);
        let nxt = null;
        for (let k = 1; k < ring.length; k++) { const q = ring[(i + k) % ring.length]; if (!tableHas(s, q, 'dynamit')) { nxt = q; break; } }
        if (nxt && nxt.id !== p.id) { nxt.table.push(dyn); log(s, '🧨 Dynamit putuje k ' + nxt.name + '.'); }
        else p.table.push(dyn);
      }
    }
    // basa
    const ja = tableHas(s, p, 'basa');
    if (ja != null) {
      p.table.splice(p.table.indexOf(ja), 1); toDiscard(s, ja);
      if (check(s, p, c => c.s === 'h', 'basa')) log(s, '🔓 ' + p.name + ' ušiel z basy!');
      else { log(s, '⛓️ ' + p.name + ' sedí v base a stojí kolo.'); s.stage = 'skip'; return; }
    }
    s.stage = 'draw';
  }

  function drawCount(s, p) {
    let n = 2;
    if (eventOn(s, 'smad')) n--;
    if (eventOn(s, 'hojnost')) n++;
    if (hasItem(p, 'klobuk')) n++;
    return Math.max(0, n);
  }

  function doDraw(s) {
    const p = P(s, s.turnPid);
    let n = drawCount(s, p);
    if (ab(s, p, 'bill')) n = Math.max(0, n - 1) + (p.maxHp - p.hp);
    if (n > 0 && ab(s, p, 'kit')) {
      const opts = []; for (let i = 0; i < n + 1; i++) { const c = drawCard(s); if (c != null) opts.push(c); }
      if (opts.length > n) { s.q.push({ k: 'kit', pid: p.id, cards: opts, keep: n }); s.stage = 'play'; return; }
      p.hand.push(...opts); s.stage = 'play'; return;
    }
    if (n > 0 && ab(s, p, 'palo') && targetable(s, p).some(q => q.hand.length)) { s.q.push({ k: 'palo', pid: p.id, n }); s.stage = 'play'; return; }
    if (n > 0 && ab(s, p, 'pedro') && s.discard.length) { s.q.push({ k: 'pedro', pid: p.id, n }); s.stage = 'play'; return; }
    if (n > 0 && ab(s, p, 'jack')) {
      const got = []; for (let i = 0; i < n; i++) { const c = drawCard(s); if (c != null) { got.push(c); p.hand.push(c); } }
      const sec = got[Math.min(1, got.length - 1)];
      if (sec != null) {
        const red = ['h', 'd'].indexOf(s.cards[sec].s) >= 0;
        log(s, '🎩 ' + p.name + ' ukazuje ' + cardLabel(s, sec) + (red ? ' — červená, ťahá ešte jednu!' : '.'));
        if (red) give(s, p, 1);
      }
      s.stage = 'play'; return;
    }
    give(s, p, n);
    s.stage = 'play';
  }

  function settle(s) {
    for (let guard = 0; guard < 400; guard++) {
      if (s.phase !== 'play') return;
      zuzka(s);
      const h = s.q[0];
      if (h) {
        if (autoResolve(s, h)) continue;
        return; // čaká sa na hráča
      }
      if (s.stage === 'start') { doStart(s); continue; }
      if (s.stage === 'draw') { doDraw(s); continue; }
      if (s.stage === 'end') {
        const p = P(s, s.turnPid);
        if (p.hand.length > handLimit(p)) { s.q.push({ k: 'odhod', pid: p.id, n: p.hand.length - handLimit(p) }); s.stage = 'end2'; continue; }
        s.stage = 'end2'; continue;
      }
      if (s.stage === 'end2' || s.stage === 'skip' || s.stage === 'dead') {
        const p = P(s, s.turnPid);
        if (p && !p.alive && p.ghost && p.ghostTurns <= 0 && s.stage !== 'dead') { p.ghost = false; p.hand.forEach(c => toDiscard(s, c)); p.hand = []; log(s, '👻 Duch ' + p.name + ' odišiel na večný odpočinok.'); }
        nextTurn(s); continue;
      }
      return; // stage play – čaká sa na hráča na ťahu
    }
  }
  function zuzka(s) {
    s.players.forEach(p => { if (p.alive && ab(s, p, 'zuzka') && p.hand.length === 0) { if (give(s, p, 1)) log(s, '🌵 ' + p.name + ' si potiahla kartu.'); } });
  }

  // vráti true, ak sa pozícia v rade vyriešila sama (alebo zmizla)
  function autoResolve(s, h) {
    const p = P(s, h.pid);
    if (h.k === 'jarmok') {
      h.order = h.order.filter(id => { const q = P(s, id); return q && q.alive; });
      if (!h.order.length || !h.cards.length) { h.cards.forEach(c => toDiscard(s, c)); s.q.shift(); return true; }
      h.pid = h.order[0];
      if (h.cards.length === 1) { const q = P(s, h.pid); q.hand.push(h.cards[0]); log(s, '🛒 ' + q.name + ' berie posledný: ' + cardName(s, h.cards[0]) + '.'); h.cards = []; s.q.shift(); return true; }
      return false;
    }
    if (!p || (!p.alive && ['shot', 'prepad', 'suboj', 'odhod'].indexOf(h.k) >= 0 && !(h.k === 'odhod' && p.ghost))) { s.q.shift(); return true; }
    if (h.k === 'suboj') { const o = P(s, h.other); if (!o || !o.alive && !o.ghost) { s.q.shift(); return true; } }
    if (h.k === 'shot' && !h.checked) {
      h.checked = true;
      let barrels = 0;
      if (!eventOn(s, 'prazdnesudy')) { if (tableHas(s, p, 'sud') != null) barrels++; if (ab(s, p, 'fero')) barrels++; }
      for (let i = 0; i < barrels && h.got < h.need; i++) {
        if (check(s, p, c => c.s === 'h', 'sud')) { h.got++; log(s, '🛢️ ' + p.name + ' sa schoval za sud.'); }
      }
      if (h.got >= h.need) { log(s, '💨 ' + p.name + ' unikol.'); fx(s, { t: 'dodge', pid: p.id }); s.q.shift(); return true; }
    }
    if (h.k === 'shot' || h.k === 'prepad' || h.k === 'suboj') {
      if (!responseCards(s, p, h).length) { resolvePass(s, h); return true; }
      return false;
    }
    if (h.k === 'odhod') {
      if (p.hand.length <= handLimit(p)) { s.q.shift(); return true; }
      h.n = p.hand.length - handLimit(p);
      return false;
    }
    if (h.k === 'kit' || h.k === 'palo' || h.k === 'pedro' || h.k === 'char') return false;
    s.q.shift(); return true;
  }

  function responseCards(s, p, h) {
    const ok = [];
    const kata = ab(s, p, 'kata');
    p.hand.forEach(c => {
      const t = T(s, c);
      if (h.k === 'shot' && (t === 'vedla' || t === 'uskok' || (kata && t === 'vystrel'))) ok.push(c);
      if ((h.k === 'prepad' || h.k === 'suboj') && (t === 'vystrel' || (kata && t === 'vedla'))) ok.push(c);
    });
    return ok;
  }

  function resolvePass(s, h) {
    const p = P(s, h.pid);
    s.q.shift();
    if (h.k === 'shot') damage(s, p, h.dmg || 1, h.src, h.via);
    else if (h.k === 'prepad') damage(s, p, 1, h.src, 'prepad');
    else if (h.k === 'suboj') { log(s, '🤺 ' + p.name + ' prehral súboj.'); damage(s, p, 1, h.other, 'suboj'); }
  }

  function outOfTurn(s, p) { if (ab(s, p, 'molly') && s.turnPid !== p.id) { if (give(s, p, 1)) log(s, '🌙 Molly si potiahla kartu.'); } }

  // ---------- čo sa dá s kartou urobiť (pre UI aj boty) ----------
  // vráti { ok, why, targets:[pid], tcard:bool, extra:bool, as }
  function cardOptions(s, pid, cid) {
    const p = P(s, pid);
    const no = why => ({ ok: false, why });
    if (s.phase !== 'play') return no('Hra nebeží.');
    if (s.turnPid !== pid || s.stage !== 'play' || s.q.length) return no('Teraz nie si na ťahu.');
    if (p.hand.indexOf(cid) < 0) return no('Túto kartu nemáš.');
    let t = T(s, cid);
    const ghost = !p.alive;
    let as = null;
    if (t === 'vedla' && ab(s, p, 'kata')) { t = 'vystrel'; as = 'vystrel'; }
    const def = CARDS[t];
    const others = targetable(s, p);
    const res = (o) => Object.assign({ ok: true, as, t }, o);
    switch (t) {
      case 'vystrel': {
        if (p.bangs >= bangLimit(s, p)) return no('Výstrel už si v tomto ťahu použil.');
        const r = range(s, p);
        const tg = others.filter(q => distance(s, p, q) <= r).map(q => q.id);
        return tg.length ? res({ targets: tg }) : no('Nikto nie je v dosahu (dosah ' + r + ').');
      }
      case 'past': {
        const tg = others.filter(q => distance(s, p, q) <= 1).map(q => q.id);
        return tg.length ? res({ targets: tg }) : no('Nikto nie je na vzdialenosť 1.');
      }
      case 'odstrelovac':
        if (p.hand.length < 2) return no('Potrebuješ ešte jednu kartu na odhodenie.');
        return others.length ? res({ targets: others.map(q => q.id), extra: true }) : no('Nie je na koho.');
      case 'vedla': case 'uskok': return no('Túto kartu použiješ, keď na teba niekto strieľa.');
      case 'pivo':
        if (ghost) return no('Duch nepije.');
        if (alive(s).length <= 2) return no('Keď ostanú 2 hráči, pivo nefunguje.');
        if (p.hp >= p.maxHp) return no('Máš plné životy.');
        return res({});
      case 'whisky':
        if (ghost) return no('Duch nepije.');
        if (p.hp >= p.maxHp) return no('Máš plné životy.');
        if (p.hand.length < 2) return no('Potrebuješ ešte jednu kartu na odhodenie.');
        return res({ extra: true });
      case 'bitka':
        if (p.hand.length < 2) return no('Potrebuješ ešte jednu kartu na odhodenie.');
        return res({ extra: true });
      case 'jarmok':
        if (ghost) return no('Duch na jarmok nechodí.');
        return res({});
      case 'krcma': case 'dostavnik': case 'vlak': case 'gulomet': case 'prepad':
        return res({});
      case 'vreckar': {
        const tg = others.filter(q => distance(s, p, q) <= 1 && (q.hand.length || q.table.length)).map(q => q.id);
        return tg.length ? res({ targets: tg, tcard: true }) : no('Nikto s kartami nie je na vzdialenosť 1.');
      }
      case 'sabotaz': {
        const tg = others.filter(q => q.hand.length || q.table.length).map(q => q.id);
        return tg.length ? res({ targets: tg, tcard: true }) : no('Nikto nemá karty.');
      }
      case 'suboj':
        return others.length ? res({ targets: others.map(q => q.id) }) : no('Nie je s kým.');
      case 'basa': {
        if (ghost) { /* duch môže zavrieť */ }
        const tg = others.filter(q => q.role !== 'serif' && !tableHas(s, q, 'basa')).map(q => q.id);
        return tg.length ? res({ targets: tg }) : no('Nie je koho zavrieť (šerifa nemožno).');
      }
      default:
        if (ghost) return no('Duch nemôže nič položiť pred seba.');
        if (def.c === 'm') {
          if (tableHas(s, p, t) != null) return no('Takú kartu už pred sebou máš.');
          return res({});
        }
        if (def.c === 'w') return res({});
        return no('Túto kartu nejde zahrať.');
    }
  }

  // ---------- akcie ----------
  function apply(s, pid, a) {
    if (!a || !a.a) fail('Chýba akcia.');
    if (a.a === 'say') { const p = P(s, pid); if (!p) fail('Nie si v hre.'); const txt = String(a.text || '').slice(0, 60); if (!txt.trim()) return s; s.chat.push({ i: ++s.logN, pid, m: txt, at: a.at || 0 }); if (s.chat.length > 20) s.chat.shift(); return s; }
    if (s.phase === 'lobby') return lobbyAct(s, pid, a);
    if (s.phase === 'chars') return charAct(s, pid, a);
    if (s.phase === 'over') { if (a.a === 'rematch') return rematch(s, pid); fail('Hra skončila.'); }
    const p = P(s, pid);
    if (!p) fail('Nie si v hre.');
    const h = s.q[0];
    if (a.a === 'respond' || a.a === 'pick') {
      if (!h || h.pid !== pid) fail('Teraz od teba nikto nič nechce.');
      handleQueue(s, p, h, a);
    } else if (a.a === 'play') {
      if (h) fail('Najprv sa musí vyriešiť: ' + qLabel(s, h));
      playCard(s, p, a);
    } else if (a.a === 'end') {
      if (h || s.turnPid !== pid || s.stage !== 'play') fail('Teraz nemôžeš ukončiť ťah.');
      s.stage = 'end';
    } else if (a.a === 'ability') {
      ability(s, p, a);
    } else if (a.a === 'buy') {
      buy(s, p, a);
    } else fail('Neznáma akcia.');
    s.acts++;
    settle(s);
    return s;
  }

  function qLabel(s, h) {
    const o = { shot: 'výstrel na ' + nm(s, h.pid), prepad: 'prepad (' + nm(s, h.pid) + ')', suboj: 'súboj (' + nm(s, h.pid) + ')', jarmok: 'jarmok (' + nm(s, h.pid) + ')', odhod: 'odhadzovanie (' + nm(s, h.pid) + ')', kit: 'výber kariet', palo: 'ťahanie', pedro: 'ťahanie' };
    return o[h.k] || h.k;
  }

  function playCard(s, p, a) {
    const cid = a.card;
    const o = cardOptions(s, p.id, cid);
    if (!o.ok) fail(o.why);
    const t = o.t;
    let target = null;
    if (o.targets) { target = P(s, a.target); if (!target || o.targets.indexOf(target.id) < 0) fail('Vyber platný cieľ.'); }
    let extra = null;
    if (o.extra) { extra = a.extra; if (extra == null || extra === cid || p.hand.indexOf(extra) < 0) fail('Vyber ešte jednu kartu na odhodenie.'); }
    removeFromHand(p, cid);
    if (extra != null) { removeFromHand(p, extra); toDiscard(s, extra); }
    const def = CARDS[t];
    const label = (o.as ? CARDS[T(s, cid)].n + ' ako ' : '') + def.n;
    fx(s, { t: 'play', pid: p.id, card: T(s, cid), as: o.as, target: target && target.id });
    if (def.c === 'm' || def.c === 'w') {
      if (t === 'basa') { target.table.push(cid); log(s, '⛓️ ' + p.name + ' zavrel ' + target.name + ' do basy.'); noteAggro(s, p, target); return; }
      if (def.c === 'w') { const w = weapon(s, p); if (w != null) { p.table.splice(p.table.indexOf(w), 1); toDiscard(s, w); } }
      p.table.push(cid);
      log(s, def.ic + ' ' + p.name + ' si položil ' + def.n + '.');
      return;
    }
    toDiscard(s, cid);
    const tgtTxt = target ? ' → ' + target.name : '';
    log(s, def.ic + ' ' + p.name + ': ' + label + tgtTxt, 'play');
    switch (t) {
      case 'vystrel':
        p.bangs++;
        noteAggro(s, p, target);
        s.q.push({ k: 'shot', pid: target.id, src: p.id, need: ab(s, p, 'slim') ? 2 : 1, got: 0, dmg: eventOn(s, 'mesiac') ? 2 : 1, via: 'vystrel' });
        break;
      case 'past': case 'odstrelovac':
        noteAggro(s, p, target);
        s.q.push({ k: 'shot', pid: target.id, src: p.id, need: 1, got: 0, dmg: eventOn(s, 'mesiac') ? 2 : 1, via: t });
        break;
      case 'pivo': { const g = heal(s, p, beerPower(s, p)); log(s, '🍺 ' + p.name + ' +' + g + '.'); break; }
      case 'whisky': { const g = heal(s, p, 2); log(s, '🥃 ' + p.name + ' +' + g + '.'); break; }
      case 'krcma': alive(s).forEach(q => heal(s, q, 1)); break;
      case 'dostavnik': give(s, p, 2); break;
      case 'vlak': give(s, p, 3); break;
      case 'vreckar': case 'sabotaz': {
        noteAggro(s, p, target);
        let c = null;
        if (a.tcard === 'hand' || a.tcard == null) { if (!target.hand.length) fail('Nemá nič v ruke.'); c = target.hand.splice(Math.floor(rnd(s) * target.hand.length), 1)[0]; }
        else { const i = target.table.indexOf(a.tcard); if (i < 0) fail('Táto karta pred ním neleží.'); c = target.table.splice(i, 1)[0]; }
        if (t === 'vreckar') { p.hand.push(c); log(s, '🫳 ' + p.name + ' zobral ' + target.name + (a.tcard === 'hand' || a.tcard == null ? ' kartu z ruky.' : ': ' + cardName(s, c) + '.')); }
        else { toDiscard(s, c); log(s, '✂️ ' + target.name + ' prišiel o ' + cardName(s, c) + '.'); }
        break;
      }
      case 'suboj': noteAggro(s, p, target); s.q.push({ k: 'suboj', pid: target.id, other: p.id }); break;
      case 'gulomet': case 'prepad': {
        const ring = seatsAlive(s); const i = Math.max(0, ring.findIndex(q => q.id === p.id));
        for (let k = 1; k <= ring.length; k++) {
          const q = ring[(i + k) % ring.length]; if (q.id === p.id) continue;
          if (t === 'gulomet') s.q.push({ k: 'shot', pid: q.id, src: p.id, need: 1, got: 0, dmg: 1, via: 'gulomet' });
          else s.q.push({ k: 'prepad', pid: q.id, src: p.id });
        }
        break;
      }
      case 'jarmok': {
        const ring = seatsAlive(s); const i = ring.findIndex(q => q.id === p.id);
        const order = [];
        for (let k = 0; k < ring.length; k++) order.push(ring[(i + k) % ring.length].id);
        const cards = []; for (let k = 0; k < order.length; k++) { const c = drawCard(s); if (c != null) cards.push(c); }
        s.q.push({ k: 'jarmok', pid: order[0], order, cards });
        break;
      }
      case 'bitka': {
        targetable(s, p).forEach(q => {
          let c = null;
          if (q.hand.length) c = q.hand.splice(Math.floor(rnd(s) * q.hand.length), 1)[0];
          else if (q.table.length) c = q.table.splice(Math.floor(rnd(s) * q.table.length), 1)[0];
          if (c != null) { toDiscard(s, c); log(s, '🍾 ' + q.name + ' prišiel o ' + cardName(s, c) + '.'); }
        });
        break;
      }
    }
  }

  function noteAggro(s, p, target) {
    if (!target) return;
    s.aggro[p.id] = s.aggro[p.id] || {};
    s.aggro[p.id][target.id] = (s.aggro[p.id][target.id] || 0) + 1;
  }

  function handleQueue(s, p, h, a) {
    if (h.k === 'shot' || h.k === 'prepad' || h.k === 'suboj') {
      if (a.a === 'respond' && a.pass) { resolvePass(s, h); return; }
      const cid = a.card;
      if (responseCards(s, p, h).indexOf(cid) < 0) fail('Touto kartou sa nedá odpovedať.');
      removeFromHand(p, cid); toDiscard(s, cid);
      const t = T(s, cid);
      fx(s, { t: 'play', pid: p.id, card: t });
      if (h.k === 'shot') {
        h.got++;
        log(s, '💨 ' + p.name + ': ' + cardName(s, cid) + (h.got < h.need ? ' (treba ešte jednu)' : ''));
        if (t === 'uskok') give(s, p, 1);
        outOfTurn(s, p);
        if (h.got >= h.need) { s.q.shift(); fx(s, { t: 'dodge', pid: p.id }); }
        return;
      }
      if (h.k === 'prepad') { log(s, '🏹 ' + p.name + ' odhodil ' + cardName(s, cid) + '.'); outOfTurn(s, p); s.q.shift(); return; }
      if (h.k === 'suboj') { log(s, '🤺 ' + p.name + ' strieľa späť!'); outOfTurn(s, p); const o = h.other; h.other = h.pid; h.pid = o; return; }
    }
    if (h.k === 'jarmok') {
      if (a.a !== 'pick' || h.cards.indexOf(a.card) < 0) fail('Vyber jednu z kariet na jarmoku.');
      h.cards.splice(h.cards.indexOf(a.card), 1); p.hand.push(a.card);
      log(s, '🛒 ' + p.name + ' si vybral ' + cardName(s, a.card) + '.');
      h.order.shift();
      if (!h.order.length || !h.cards.length) { h.cards.forEach(c => toDiscard(s, c)); s.q.shift(); }
      else h.pid = h.order[0];
      return;
    }
    if (h.k === 'odhod') {
      const cards = Array.isArray(a.cards) ? a.cards : [];
      if (cards.length !== h.n || new Set(cards).size !== cards.length || cards.some(c => p.hand.indexOf(c) < 0)) fail('Odhoď presne ' + h.n + ' ' + (h.n === 1 ? 'kartu' : 'karty') + '.');
      cards.forEach(c => { removeFromHand(p, c); toDiscard(s, c); });
      log(s, '🗑️ ' + p.name + ' odhodil ' + cards.length + '.');
      if (s.opts.gold) p.gold += Math.min(2, cards.length);
      s.q.shift();
      return;
    }
    if (h.k === 'kit') {
      if (h.cards.indexOf(a.card) < 0) fail('Vyber kartu, ktorú vrátiš.');
      h.cards.splice(h.cards.indexOf(a.card), 1);
      s.deck.push(a.card); p.hand.push(...h.cards);
      log(s, '🦊 ' + p.name + ' si vybral ' + h.cards.length + ' karty z ' + (h.cards.length + 1) + '.');
      s.q.shift(); return;
    }
    if (h.k === 'palo') {
      let n = h.n;
      if (a.from && a.from !== 'deck') {
        const q = P(s, a.from);
        if (!q || !q.alive || q.id === p.id || !q.hand.length) fail('Od tohto hráča nejde ťahať.');
        p.hand.push(q.hand.splice(Math.floor(rnd(s) * q.hand.length), 1)[0]); n--;
        log(s, '🃏 ' + p.name + ' potiahol kartu z ruky ' + q.name + '.');
      }
      give(s, p, n); s.q.shift(); return;
    }
    if (h.k === 'pedro') {
      let n = h.n;
      if (a.from === 'discard' && s.discard.length) { const c = s.discard.pop(); p.hand.push(c); n--; log(s, '🌮 ' + p.name + ' vzal z kôpky ' + cardName(s, c) + '.'); }
      give(s, p, n); s.q.shift(); return;
    }
    fail('Toto teraz nejde.');
  }

  function cheapest(s, hand) {
    const val = { vedla: 9, vystrel: 7, pivo: 8, whisky: 6, vlak: 8, dostavnik: 7, uskok: 9 };
    let best = hand[0], bv = 99;
    hand.forEach(c => { const v = val[T(s, c)] != null ? val[T(s, c)] : 4; if (v < bv) { bv = v; best = c; } });
    return best;
  }

  function ability(s, p, a) {
    const myTurn = s.turnPid === p.id && s.stage === 'play' && !s.q.length;
    if (ab(s, p, 'sid') && a.kind === 'sid') {
      const cards = a.cards || [];
      if (cards.length !== 2 || cards[0] === cards[1] || cards.some(c => p.hand.indexOf(c) < 0)) fail('Vyber 2 karty.');
      if (p.hp >= p.maxHp) fail('Máš plné životy.');
      cards.forEach(c => { removeFromHand(p, c); toDiscard(s, c); }); heal(s, p, 1);
      log(s, '🩺 ' + p.name + ' odhodil 2 karty a +1 život.'); return;
    }
    if (ab(s, p, 'chucho') && a.kind === 'chucho') {
      if (!myTurn) fail('Len vo svojom ťahu.');
      if (p.hp <= 1) fail('Na to máš málo životov.');
      p.hp--; give(s, p, 2); log(s, '🌶️ ' + p.name + ' −1 život za 2 karty.'); fx(s, { t: 'hit', pid: p.id, n: 1 }); return;
    }
    if (ab(s, p, 'doc') && a.kind === 'doc') {
      if (!myTurn) fail('Len vo svojom ťahu.');
      if (p.docUsed) fail('Už si to v tomto ťahu použil.');
      const cards = a.cards || [];
      if (cards.length !== 2 || cards[0] === cards[1] || cards.some(c => p.hand.indexOf(c) < 0)) fail('Vyber 2 karty.');
      const r = range(s, p);
      const target = P(s, a.target);
      if (!target || !target.alive || target.id === p.id || distance(s, p, target) > r) fail('Cieľ nie je v dosahu.');
      cards.forEach(c => { removeFromHand(p, c); toDiscard(s, c); });
      p.docUsed = true; noteAggro(s, p, target);
      log(s, '⛈️ ' + p.name + ' hromovou ranou → ' + target.name, 'play');
      fx(s, { t: 'play', pid: p.id, card: 'vystrel', target: target.id });
      s.q.push({ k: 'shot', pid: target.id, src: p.id, need: 1, got: 0, dmg: eventOn(s, 'mesiac') ? 2 : 1, via: 'doc' });
      return;
    }
    fail('Táto schopnosť teraz nejde.');
  }

  function price(s, id) { return Math.max(1, ITEMS[id].cost - (eventOn(s, 'horucka') ? 1 : 0)); }
  function buy(s, p, a) {
    if (!s.opts.gold) fail('Obchod je vypnutý.');
    if (s.turnPid !== p.id || s.stage !== 'play' || s.q.length) fail('Nakupovať môžeš len vo svojom ťahu.');
    if (!p.alive) fail('Duchovia nenakupujú.');
    const i = s.shop.indexOf(a.item); if (i < 0) fail('Toto v obchode nie je.');
    const id = a.item, it = ITEMS[id];
    if (!it.once && hasItem(p, id)) fail('Toto už máš.');
    const cost = price(s, id);
    if (p.gold < cost) fail('Máš málo zlata (treba ' + cost + ').');
    p.gold -= cost;
    s.shop.splice(i, 1);
    if (it.once) {
      s.shopDeck.push(id);
      if (id === 'lekarnicka') heal(s, p, 2);
      if (id === 'flasa') heal(s, p, 1);
      if (id === 'mapa') give(s, p, 3);
    } else p.items.push(id);
    if (s.shopDeck.length) s.shop.push(s.shopDeck.shift());
    log(s, it.ic + ' ' + p.name + ' kúpil ' + it.n + ' za ' + cost + ' zlata.');
  }

  // ---------- lobby ----------
  const BOT_NAMES = ['Bot Jozef', 'Bot Fanda', 'Bot Mara', 'Bot Ignác', 'Bot Vilma', 'Bot Ondro', 'Bot Hela'];
  function newRoom(code, hostId, hostName, seed) {
    return {
      v: 1, code, phase: 'lobby', host: hostId, seed: (seed || Date.now()) | 0,
      opts: { events: true, gold: true, ghosts: true, extra: true, chars: true },
      players: [mkPlayer(hostId, hostName, false, 0)],
      cards: [], deck: [], discard: [], q: [], log: [], chat: [], fx: [], logN: 0, fxN: 0, acts: 0,
      turnPid: null, stage: null, round: 0, event: null, eventDeck: [], shop: [], shopDeck: [], aggro: {}, winner: null, games: 0,
    };
  }
  function mkPlayer(id, name, bot, seat) {
    return { id, name: String(name || 'Hráč').slice(0, 16), bot: !!bot, seat, role: null, char: null, charOpts: [], hp: 0, maxHp: 0, hand: [], table: [], alive: true, ghost: false, ghostTurns: 0, gold: 0, items: [], bangs: 0, vestaUsed: false, docUsed: false };
  }
  function lobbyAct(s, pid, a) {
    const isHost = pid === s.host;
    if (a.a === 'join') {
      const ex = P(s, pid);
      if (ex) { ex.name = String(a.name || ex.name).slice(0, 16); return s; }
      if (s.players.length >= 7) fail('Miestnosť je plná (max 7).');
      s.players.push(mkPlayer(pid, a.name, false, nextSeat(s))); log(s, '👋 ' + String(a.name || 'Hráč').slice(0, 16) + ' prišiel do saloonu.'); return s;
    }
    if (a.a === 'leave') { s.players = s.players.filter(p => p.id !== pid); if (s.host === pid && s.players.length) s.host = (s.players.find(p => !p.bot) || s.players[0]).id; return s; }
    if (!isHost) fail('Toto môže len zakladateľ miestnosti.');
    if (a.a === 'bot') {
      if (s.players.length >= 7) fail('Miestnosť je plná.');
      const used = s.players.map(p => p.name); const name = BOT_NAMES.find(n => used.indexOf(n) < 0) || 'Bot';
      s.players.push(mkPlayer('bot-' + Math.floor(rnd(s) * 1e9).toString(36), name, true, nextSeat(s))); return s;
    }
    if (a.a === 'kick') { if (a.id === s.host) fail('Seba nevyhodíš.'); s.players = s.players.filter(p => p.id !== a.id); return s; }
    if (a.a === 'opts') { Object.keys(s.opts).forEach(k => { if (a.opts && typeof a.opts[k] === 'boolean') s.opts[k] = a.opts[k]; }); return s; }
    if (a.a === 'start') return startGame(s);
    fail('Neznáma akcia.');
  }
  function nextSeat(s) { return s.players.reduce((m, p) => Math.max(m, p.seat), -1) + 1; }

  function startGame(s) {
    const n = s.players.length;
    if (n < 4 || n > 7) fail('Hra je pre 4 až 7 hráčov (môžeš pridať boty).');
    // náhodné poradie sedenia
    shuffle(s, s.players).forEach((p, i) => { p.seat = i; });
    s.players.sort((a, b) => a.seat - b.seat);
    const roles = shuffle(s, ROLESETS[n].slice());
    const pool = shuffle(s, Object.keys(CHARS).filter(c => s.opts.chars || !CHARS[c].x));
    s.players.forEach((p, i) => {
      Object.assign(p, mkPlayer(p.id, p.name, p.bot, p.seat));
      p.role = roles[i]; p.charOpts = [pool[2 * i], pool[2 * i + 1]];
    });
    // balíček
    const counts = Object.assign({}, DECK_BASE);
    if (s.opts.extra) Object.keys(DECK_EXTRA).forEach(k => { counts[k] = (counts[k] || 0) + DECK_EXTRA[k]; });
    const types = []; Object.keys(counts).forEach(k => { for (let i = 0; i < counts[k]; i++) types.push(k); });
    const suitRank = []; for (let i = 0; i < types.length; i++) suitRank.push({ s: SUITS[i % 4], r: 2 + (Math.floor(i / 4) % 13) });
    shuffle(s, suitRank);
    s.cards = types.map((t, i) => ({ t, s: suitRank[i].s, r: suitRank[i].r }));
    s.deck = shuffle(s, s.cards.map((_, i) => i)); s.discard = [];
    s.q = []; s.aggro = {}; s.winner = null; s.round = 0; s.event = null; s.fx = [];
    // udalosti
    const evs = shuffle(s, Object.keys(EVENTS).filter(e => e !== 'poludnie' && (s.opts.gold || !EVENTS[e].gold)));
    s.eventDeck = evs.slice(0, 7).concat(['poludnie']);
    // obchod
    const sd = []; Object.keys(ITEMS).forEach(k => { const c = ITEMS[k].once ? 3 : 2; for (let i = 0; i < c; i++) sd.push(k); });
    s.shopDeck = shuffle(s, sd); s.shop = s.shopDeck.splice(0, 3);
    s.phase = 'chars';
    s.games++;
    log(s, '🤠 Rozdávajú sa role. Vyberte si postavu!', 'turn');
    s.players.forEach(p => { if (p.bot) pickChar(s, p, pick(s, p.charOpts)); });
    maybeBegin(s);
    return s;
  }
  function charAct(s, pid, a) {
    const p = P(s, pid); if (!p) fail('Nie si v hre.');
    if (a.a !== 'char') fail('Najprv si vyber postavu.');
    if (p.char) fail('Postavu už máš.');
    if (p.charOpts.indexOf(a.char) < 0) fail('Túto postavu nemáš na výber.');
    pickChar(s, p, a.char); maybeBegin(s); return s;
  }
  function pickChar(s, p, c) {
    p.char = c; p.maxHp = CHARS[c].hp + (p.role === 'serif' ? 1 : 0); p.hp = p.maxHp;
  }
  function maybeBegin(s) {
    if (s.players.some(p => !p.char)) return;
    s.phase = 'play';
    s.players.forEach(p => { give(s, p, p.hp); if (s.opts.gold) p.gold = 1; });
    const sh = s.players.find(p => p.role === 'serif');
    log(s, '⭐ Šerifom je ' + sh.name + '. Začína!', 'turn');
    s.turnPid = sh.id; s.stage = 'start'; s.round = 1;
    settle(s);
  }
  function rematch(s, pid) {
    if (pid !== s.host) fail('Odvetu spúšťa zakladateľ.');
    s.phase = 'lobby'; s.turnPid = null; s.stage = null; s.q = []; s.winner = null; s.event = null;
    s.players.forEach(p => Object.assign(p, mkPlayer(p.id, p.name, p.bot, p.seat)));
    s.cards = []; s.deck = []; s.discard = [];
    log(s, '🔁 Nová hra! Zakladateľ môže spustiť.', 'turn');
    return startGame(s);
  }

  // ---------- kto má teraz konať ----------
  function waitingFor(s) {
    if (s.phase === 'chars') return s.players.filter(p => !p.char).map(p => p.id);
    if (s.phase !== 'play') return [];
    if (s.q.length) return [s.q[0].pid];
    return s.turnPid ? [s.turnPid] : [];
  }

  // ---------- BOT ----------
  function enemiesOf(s, me) {
    const others = targetable(s, me);
    const sheriff = s.players.find(p => p.role === 'serif');
    const ag = s.aggro;
    const hitSheriff = id => ag[id] && ag[id][sheriff.id];
    const score = q => {
      if (me.role === 'bandita') return q.role === 'serif' ? 100 : (ag[q.id] && ag[q.id][me.id] ? 20 : 0) + (hitSheriff(q.id) ? -30 : 5);
      if (me.role === 'serif' || me.role === 'pomocnik') { if (q.role === 'serif') return -100; return (hitSheriff(q.id) ? 50 : 0) + (ag[q.id] && ag[q.id][me.id] ? 20 : 0) + 5; }
      // odpadlík
      const al = alive(s).length;
      if (q.role === 'serif') return al <= 2 ? 100 : -50;
      return (hitSheriff(q.id) ? 30 : 10) + (ag[q.id] && ag[q.id][me.id] ? 20 : 0);
    };
    return others.map(q => ({ q, sc: score(q) + rnd(s) * 3 })).filter(x => x.sc > 0).sort((a, b) => b.sc - a.sc).map(x => x.q.id);
  }
  function botBest(s, me, ids) { const en = enemiesOf(s, me); for (const e of en) if (ids.indexOf(e) >= 0) return e; return null; }

  function botAct(s, pid) {
    const p = P(s, pid);
    if (s.phase === 'chars') return { a: 'char', char: p.charOpts[0] };
    if (s.phase !== 'play') return null;
    const h = s.q[0];
    if (h && h.pid === pid) {
      if (h.k === 'shot' || h.k === 'prepad') { const rc = responseCards(s, p, h); return rc.length ? { a: 'respond', card: rc[0] } : { a: 'respond', pass: true }; }
      if (h.k === 'suboj') {
        const rc = responseCards(s, p, h);
        const other = P(s, h.other);
        const friendly = other && ((p.role === 'pomocnik' && other.role === 'serif'));
        return rc.length && !friendly ? { a: 'respond', card: rc[0] } : { a: 'respond', pass: true };
      }
      if (h.k === 'jarmok') {
        const pref = ['vedla', 'pivo', 'vystrel', 'vlak', 'dostavnik', 'sud', 'gulomet', 'uskok', 'mustang'];
        let best = h.cards[0], bi = 99; h.cards.forEach(c => { const i = pref.indexOf(T(s, c)); const v = i < 0 ? 50 : i; if (v < bi) { bi = v; best = c; } });
        return { a: 'pick', card: best };
      }
      if (h.k === 'odhod') {
        const hand = p.hand.slice(); const out = [];
        for (let i = 0; i < h.n; i++) { const c = cheapest(s, hand); out.push(c); hand.splice(hand.indexOf(c), 1); }
        return { a: 'pick', cards: out };
      }
      if (h.k === 'kit') return { a: 'pick', card: cheapest(s, h.cards) };
      if (h.k === 'palo') { const t = botBest(s, p, targetable(s, p).filter(q => q.hand.length).map(q => q.id)); return { a: 'pick', from: t || 'deck' }; }
      if (h.k === 'pedro') { const top = s.discard[s.discard.length - 1]; const good = top != null && ['vedla', 'pivo', 'vystrel', 'vlak'].indexOf(T(s, top)) >= 0; return { a: 'pick', from: good ? 'discard' : 'deck' }; }
      return null;
    }
    if (s.turnPid !== pid || s.stage !== 'play' || h) return null;
    // nákup
    if (s.opts.gold && p.alive) {
      const wish = ['lekarnicka', 'vesta', 'pas', 'muska', 'klobuk', 'podkova', 'ostrohy', 'mapa', 'flasa'];
      for (const it of wish) {
        if (s.shop.indexOf(it) < 0) continue;
        if (!ITEMS[it].once && hasItem(p, it)) continue;
        if ((it === 'lekarnicka' || it === 'flasa') && p.hp >= p.maxHp) continue;
        if (p.gold >= price(s, it) + (it === 'mapa' ? 1 : 0)) return { a: 'buy', item: it };
      }
    }
    // schopnosti
    if (ab(s, p, 'sid') && p.hp < p.maxHp - 1 && p.hand.length > p.hp + 1) { const hand = p.hand.slice(); const a1 = cheapest(s, hand); hand.splice(hand.indexOf(a1), 1); return { a: 'ability', kind: 'sid', cards: [a1, cheapest(s, hand)] }; }
    if (ab(s, p, 'chucho') && p.hp >= 3 && p.hand.length < 3) return { a: 'ability', kind: 'chucho' };
    // karty podľa priority
    const prio = ['sedmicka', 'kolt', 'puska', 'karabina', 'ostrostrel', 'sud', 'mustang', 'ukryt', 'dalekohlad', 'dynamit', 'vlak', 'dostavnik', 'pivo', 'whisky', 'krcma', 'basa', 'vreckar', 'sabotaz', 'suboj', 'gulomet', 'prepad', 'bitka', 'jarmok', 'odstrelovac', 'past', 'vystrel', 'vedla'];
    const hand = p.hand.slice().sort((a, b) => { const ia = prio.indexOf(T(s, a)), ib = prio.indexOf(T(s, b)); return (ia < 0 ? 99 : ia) - (ib < 0 ? 99 : ib); });
    for (const c of hand) {
      const o = cardOptions(s, pid, c);
      if (!o.ok) continue;
      const t = o.t;
      if (CARDS[t].c === 'w') { const w = weapon(s, p); if (w != null && CARDS[T(s, w)].r >= CARDS[t].r && T(s, w) !== 'sedmicka') continue; if (w != null && T(s, w) === t) continue; if (t === 'sedmicka' && w != null && CARDS[T(s, w)].r > 2) continue; }
      if (t === 'dynamit' && p.role === 'serif' && rnd(s) < 0.5) continue;
      if (t === 'krcma' && p.hp >= p.maxHp) continue;
      if (t === 'bitka' && p.hand.length < 3) continue;
      if (t === 'jarmok' && rnd(s) < 0.3) continue;
      if ((t === 'gulomet' || t === 'prepad') && (p.role === 'pomocnik') ) continue;
      if ((t === 'gulomet' || t === 'prepad') && p.role === 'odpadlik' && alive(s).length > 2 && P(s, s.players.find(q => q.role === 'serif').id).hp <= 2) continue;
      let target = null, tcard, extra;
      if (o.targets) { target = botBest(s, p, o.targets); if (!target) continue; }
      if (o.tcard) {
        const tq = P(s, target);
        const good = tq.table.find(x => ['sud', 'mustang', 'ukryt', 'dalekohlad'].indexOf(T(s, x)) >= 0 || CARDS[T(s, x)].c === 'w');
        tcard = good != null ? good : (tq.hand.length ? 'hand' : tq.table[0]);
        if (tcard === 'hand' && !tq.hand.length) continue;
      }
      if (o.extra) { const rest = p.hand.filter(x => x !== c); extra = cheapest(s, rest); }
      return { a: 'play', card: c, target, tcard, extra };
    }
    if (ab(s, p, 'doc') && !p.docUsed && p.hand.length >= 3) {
      const tg = targetable(s, p).filter(q => distance(s, p, q) <= range(s, p)).map(q => q.id);
      const t = botBest(s, p, tg);
      if (t) { const hd = p.hand.slice(); const a1 = cheapest(s, hd); hd.splice(hd.indexOf(a1), 1); return { a: 'ability', kind: 'doc', cards: [a1, cheapest(s, hd)], target: t }; }
    }
    return { a: 'end' };
  }

  // kontrola, že sa nestratila žiadna karta (na testy)
  function audit(s) {
    if (s.phase === 'lobby' || !s.cards.length) return true;
    const seen = new Set(); const add = c => { if (seen.has(c)) throw new Error('duplicitná karta ' + c); seen.add(c); };
    s.deck.forEach(add); s.discard.forEach(add);
    s.players.forEach(p => { p.hand.forEach(add); p.table.forEach(add); });
    s.q.forEach(h => { if (h.cards) h.cards.forEach(add); });
    if (seen.size !== s.cards.length) throw new Error('chýbajú karty: ' + seen.size + '/' + s.cards.length);
    return true;
  }

  const E = { CARDS, CHARS, ROLES, EVENTS, ITEMS, SUIT_IC, RANK_N, newRoom, apply, cardOptions, responseCards, waitingFor, botAct, distance, range, bangLimit, handLimit, price, winners, audit, ab, P, alive, cardLabel, qLabel };
  if (typeof module !== 'undefined' && module.exports) module.exports = E; else root.StrelilEngine = E;
})(typeof window !== 'undefined' ? window : globalThis);
