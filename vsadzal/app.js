/* si/vsadzal — súkromná štatistika stávkových tiketov.
   Dáta: Supabase, len cez funkcie vsadzal_* — každá chce PIN, tabuľky sú inak zamknuté.
   PIN sa na serveri overuje voči hashu, po 5 zlých pokusoch sa stránka zamkne na hodinu. */
(function () {
  'use strict';

  var URL_ = 'https://znsrokpaoczljisaoulu.supabase.co';
  var KEY = 'sb_publishable_9bRi6q6rnTTr5_Rszk5IiQ_MBBoti45';

  var STAV = { navrh: 'Návrh', caka: 'Čaká', vyhral: 'Vyhral', prehral: 'Prehral', vrateny: 'Vrátený', cashout: 'Cash out', neznamy: 'Nevieme' };
  var UROVEN = { ultra: 'Ultra safe', safe: 'Safe', risky: 'Risky', vlastny: 'Vlastný' };
  var UZAVRETE = { vyhral: 1, prehral: 1, vrateny: 1, cashout: 1 };
  var CYKLUS = { caka: 'vyhral', vyhral: 'prehral', prehral: 'vrateny', vrateny: 'neznamy', neznamy: 'caka' };

  var S = { pin: null, tikety: [], tab: 'prehlad', graf: 'zisk', fSport: '', fStav: '', otvorene: {} };
  var app = document.getElementById('app');
  var sheet = document.getElementById('sheet');

  // ——— pomôcky ———
  function esc(s) { return String(s == null ? '' : s).replace(/[&<>"']/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]; }); }
  function num(v) { if (v == null || v === '') return null; var n = parseFloat(String(v).replace(',', '.').replace(/\s/g, '')); return isFinite(n) ? n : null; }
  function eur(n, znam) {
    n = n || 0;
    var s = Math.abs(n).toLocaleString('sk-SK', { minimumFractionDigits: 2, maximumFractionDigits: 2 }) + ' €';
    if (znam) return (n > 0.004 ? '+' : n < -0.004 ? '−' : '') + s;
    return (n < -0.004 ? '−' : '') + s;
  }
  function kurzTxt(k) { return k == null ? '—' : Number(k).toLocaleString('sk-SK', { minimumFractionDigits: 2, maximumFractionDigits: 2 }); }
  function pct(x) { return x == null ? '—' : Math.round(x * 100) + ' %'; }
  function trieda(n) { return n > 0.004 ? 'pos' : n < -0.004 ? 'neg' : 'zero'; }
  var DNI = ['ne', 'po', 'ut', 'st', 'št', 'pi', 'so'];
  function datum(d, kratko) {
    if (!d) return '';
    var p = String(d).slice(0, 10).split('-');
    var dt = new Date(+p[0], +p[1] - 1, +p[2]);
    return (kratko ? '' : DNI[dt.getDay()] + ' ') + (+p[2]) + '. ' + (+p[1]) + '.';
  }
  function dnes() { var d = new Date(); return d.getFullYear() + '-' + String(d.getMonth() + 1).padStart(2, '0') + '-' + String(d.getDate()).padStart(2, '0'); }
  function chip(st) { return '<span class="chip st-' + esc(st) + '">' + esc(STAV[st] || st) + '</span>'; }
  function lv(u) { return '<span class="lv lv-' + esc(u) + '">' + esc(UROVEN[u] || u) + '</span>'; }
  function zisk(t) { return UZAVRETE[t.stav] ? (+t.vyhra || 0) - (+t.vklad || 0) : 0; }
  function toast(msg) {
    var el = document.getElementById('toast');
    el.textContent = msg; el.hidden = false;
    clearTimeout(toast.t); toast.t = setTimeout(function () { el.hidden = true; }, 2600);
  }
  function store(k, v) {
    try {
      if (v === undefined) return localStorage.getItem(k) || sessionStorage.getItem(k);
      localStorage.removeItem(k); sessionStorage.removeItem(k);
      if (v !== null) (v[1] ? localStorage : sessionStorage).setItem(k, v[0]);
    } catch (e) { return null; }
  }
  var ICO = {
    prehlad: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><path d="M3 20h18"/><path d="M5 16l4-5 4 3 6-8"/></svg>',
    tipy: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><path d="M4 6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v3a2 2 0 0 0 0 4v3a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-3a2 2 0 0 0 0-4z"/><path d="M14 4v14" stroke-dasharray="2 2.5"/></svg>',
    tikety: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round"><path d="M4 6h16M4 12h16M4 18h16"/></svg>',
    zapasy: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="M12 7l4 3-1.5 4.5h-5L8 10z"/></svg>',
    plus: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round"><path d="M12 5v14M5 12h14"/></svg>',
    menu: '<svg viewBox="0 0 24 24" fill="currentColor"><circle cx="5" cy="12" r="2"/><circle cx="12" cy="12" r="2"/><circle cx="19" cy="12" r="2"/></svg>'
  };

  // ——— server ———
  function rpc(name, body) {
    var ctrl = new AbortController();
    var tm = setTimeout(function () { ctrl.abort(); }, 15000);
    return fetch(URL_ + '/rest/v1/rpc/' + name, {
      method: 'POST',
      headers: { apikey: KEY, Authorization: 'Bearer ' + KEY, 'Content-Type': 'application/json', Accept: 'application/json' },
      body: JSON.stringify(body || {}), signal: ctrl.signal, cache: 'no-store'
    }).then(function (r) {
      if (r.ok) return r.json();
      return r.json().catch(function () { return {}; }).then(function (j) {
        var e = new Error(j.message || ('http_' + r.status)); e.status = r.status; throw e;
      });
    }).finally(function () { clearTimeout(tm); });
  }
  function chybaText(c, e) {
    if (c === 'zly') return 'Zlý PIN.';
    if (c === 'zamknute') return 'Po 5 zlých pokusoch je to zamknuté na hodinu.';
    if (c === 'nenastavene') return 'PIN ešte nie je nastavený v databáze.';
    if (c === 'format') return 'PIN musí mať 4 až 8 číslic.';
    if (e && (e.status === 404 || /function|schema cache/i.test(e.message || ''))) return 'Databáza ešte nie je pripravená.';
    return 'Nepodarilo sa spojiť so serverom.';
  }
  function nacitaj() {
    return rpc('vsadzal_data', { p_pin: S.pin }).then(function (j) {
      if (!j || !j.ok) { var e = new Error((j && j.chyba) || 'chyba'); e.kod = j && j.chyba; throw e; }
      S.tikety = (j.tikety || []).map(function (t) { t.zapasy = t.zapasy || []; return t; });
    });
  }
  function uloz(t) {
    return rpc('vsadzal_ulozit', { p_pin: S.pin, p_tiket: t }).then(function (j) {
      if (!j || !j.ok) { var e = new Error(j && j.chyba); e.kod = j && j.chyba; throw e; }
      return nacitaj();
    });
  }

  // ——— PIN ———
  function pinScreen(msg) {
    var dlzka = +(store('vsadzal_dlzka') || 4);
    var kod = '';
    app.innerHTML =
      '<div class="pin">' +
        '<div class="logo">si/<b>vsadzal</b></div><p>Zadaj PIN</p>' +
        '<div class="dots" id="dots"></div>' +
        '<div class="pinmsg" id="pmsg">' + esc(msg || '') + '</div>' +
        '<div class="keys">' +
          [1, 2, 3, 4, 5, 6, 7, 8, 9].map(function (n) { return '<button data-k="' + n + '">' + n + '</button>'; }).join('') +
          '<button class="ghost" data-k="del">Zmaž</button><button data-k="0">0</button><button class="ghost" data-k="ok">OK</button>' +
        '</div>' +
        '<label class="remember"><input type="checkbox" id="rem" checked> Pamätať si ma na tomto zariadení</label>' +
      '</div>';
    var dots = document.getElementById('dots');
    function kresli(err) {
      var n = Math.max(dlzka, kod.length), h = '';
      for (var i = 0; i < n; i++) h += '<i class="' + (i < kod.length ? 'on' : '') + '"></i>';
      dots.innerHTML = h; dots.classList.toggle('err', !!err);
    }
    function odosli() {
      if (kod.length < 4) return;
      var skusany = kod;
      document.getElementById('pmsg').textContent = 'Overujem…';
      S.pin = skusany;
      nacitaj().then(function () {
        store('vsadzal_pin', [skusany, document.getElementById('rem').checked]);
        try { localStorage.setItem('vsadzal_dlzka', String(skusany.length)); } catch (e) {}
        render();
      }).catch(function (e) {
        S.pin = null; kod = ''; kresli(true);
        document.getElementById('pmsg').textContent = chybaText(e.kod, e);
      });
    }
    app.querySelector('.keys').addEventListener('click', function (ev) {
      var b = ev.target.closest('button'); if (!b) return;
      var k = b.getAttribute('data-k');
      if (k === 'del') kod = kod.slice(0, -1);
      else if (k === 'ok') return odosli();
      else if (kod.length < 8) kod += k;
      document.getElementById('pmsg').textContent = '';
      kresli();
      if (kod.length === dlzka && k !== 'del') setTimeout(odosli, 120);
    });
    document.onkeydown = function (ev) {
      if (!document.getElementById('dots')) return;
      if (/^[0-9]$/.test(ev.key) && kod.length < 8) { kod += ev.key; kresli(); if (kod.length === dlzka) setTimeout(odosli, 120); }
      else if (ev.key === 'Backspace') { kod = kod.slice(0, -1); kresli(); }
      else if (ev.key === 'Enter') odosli();
    };
    kresli();
  }
  function zamkni() { store('vsadzal_pin', null); S.pin = null; S.tikety = []; pinScreen(); }

  // ——— štatistiky ———
  function statistiky(zoznam) {
    var s = { vlozene: 0, vyplatene: 0, vyhral: 0, prehral: 0, ine: 0, caka: 0, vHre: 0, moznaVyhra: 0, kurzSum: 0, kurzN: 0, pocet: 0 };
    zoznam.forEach(function (t) {
      if (t.stav === 'caka') { s.caka++; s.vHre += +t.vklad || 0; s.moznaVyhra += (+t.vklad || 0) * (+t.kurz || 0); }
      if (!UZAVRETE[t.stav]) return;
      s.pocet++;
      s.vlozene += +t.vklad || 0; s.vyplatene += +t.vyhra || 0;
      if (t.stav === 'vyhral') s.vyhral++; else if (t.stav === 'prehral') s.prehral++; else s.ine++;
      if (t.kurz) { s.kurzSum += +t.kurz; s.kurzN++; }
    });
    s.zisk = s.vyplatene - s.vlozene;
    s.uspesnost = s.vyhral + s.prehral ? s.vyhral / (s.vyhral + s.prehral) : null;
    s.roi = s.vlozene ? s.zisk / s.vlozene : null;
    s.priemKurz = s.kurzN ? s.kurzSum / s.kurzN : null;
    return s;
  }
  function zoradene() {
    return S.tikety.slice().sort(function (a, b) { return (a.datum + a.vytvorene) < (b.datum + b.vytvorene) ? -1 : 1; });
  }

  // ——— graf ———
  function graf() {
    var body = zoradene().filter(function (t) { return UZAVRETE[t.stav]; });
    if (!body.length) return '<div class="empty">Graf sa ukáže po prvom vyhodnotenom tikete.</div>';
    var W = Math.max(280, Math.min(1036, (app.clientWidth || 360) - 62)), H = 230, L = 52, R = 10, T = 14, B = 26;
    var z = [0], v = [0], p = [0], sz = 0, sv = 0, sp = 0;
    body.forEach(function (t) { sv += +t.vklad || 0; sp += +t.vyhra || 0; sz = sp - sv; z.push(sz); v.push(sv); p.push(sp); });
    var serie = S.graf === 'zisk' ? [z] : [v, p];
    var all = [].concat.apply([], serie);
    var mn = Math.min.apply(null, all.concat(0)), mx = Math.max.apply(null, all.concat(0));
    if (mx - mn < 1) { mx += 1; mn -= S.graf === 'zisk' ? 1 : 0; }
    var pad = (mx - mn) * 0.1; mx += pad; if (mn < 0 || S.graf === 'zisk') mn -= pad;
    var n = z.length - 1;
    function X(i) { return L + (W - L - R) * (n ? i / n : 0.5); }
    function Y(val) { return T + (H - T - B) * (1 - (val - mn) / (mx - mn)); }
    var h = '<svg class="chart" viewBox="0 0 ' + W + ' ' + H + '" preserveAspectRatio="none" role="img" aria-label="Vývoj peňazí">';
    // mriežka
    var krok = mriezka(mx - mn);
    for (var g = Math.ceil(mn / krok) * krok; g <= mx; g += krok) {
      h += '<line x1="' + L + '" x2="' + (W - R) + '" y1="' + Y(g) + '" y2="' + Y(g) + '" stroke="' + (Math.abs(g) < 1e-9 ? '#3a4a40' : '#1a231e') + '" stroke-width="1"' + (Math.abs(g) < 1e-9 ? '' : ' stroke-dasharray="3 4"') + '/>';
      h += '<text x="' + (L - 8) + '" y="' + (Y(g) + 4) + '" text-anchor="end">' + Math.round(g) + ' €</text>';
    }
    // dátumy pod osou (len pri zmene dňa)
    var posledny = '', poslX = -99;
    body.forEach(function (t, i) {
      if (t.datum === posledny) return; posledny = t.datum;
      if (X(i + 1) - poslX < 46) return; poslX = X(i + 1);
      var p = String(t.datum).split('-');
      h += '<text x="' + X(i + 1) + '" y="' + (H - 6) + '" text-anchor="middle">' + (+p[2]) + '.' + (+p[1]) + '.</text>';
    });
    function ciara(arr, farba, plocha) {
      var d = arr.map(function (val, i) { return (i ? 'L' : 'M') + X(i).toFixed(1) + ' ' + Y(val).toFixed(1); }).join(' ');
      var out = '';
      if (plocha) {
        var id = 'g' + Math.random().toString(36).slice(2, 7);
        out += '<defs><linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + farba + '" stop-opacity=".28"/><stop offset="1" stop-color="' + farba + '" stop-opacity="0"/></linearGradient></defs>';
        out += '<path d="' + d + ' L' + X(arr.length - 1) + ' ' + Y(Math.max(mn, 0)) + ' L' + X(0) + ' ' + Y(Math.max(mn, 0)) + 'Z" fill="url(#' + id + ')"/>';
      }
      out += '<path d="' + d + '" fill="none" stroke="' + farba + '" stroke-width="2.4" stroke-linejoin="round" stroke-linecap="round" vector-effect="non-scaling-stroke"/>';
      arr.forEach(function (val, i) {
        if (!i) return;
        var t = body[i - 1];
        out += '<circle cx="' + X(i) + '" cy="' + Y(val) + '" r="3.6" fill="' + (S.graf === 'zisk' ? (t.stav === 'vyhral' ? '#b8ff3c' : t.stav === 'prehral' ? '#ff5d5d' : '#8fa3ff') : farba) + '" stroke="#0b0f0d" stroke-width="1.5"><title>' + esc(datum(t.datum) + ' · ' + (t.nazov || 'Tiket') + ' · ' + eur(val)) + '</title></circle>';
      });
      return out;
    }
    if (S.graf === 'zisk') h += ciara(z, sz >= 0 ? '#b8ff3c' : '#ff5d5d', true);
    else { h += ciara(v, '#82918a', false); h += ciara(p, '#b8ff3c', true); }
    h += '</svg>';
    h += S.graf === 'zisk'
      ? '<div class="legend"><span><i style="background:#b8ff3c"></i>vyhratý tiket</span><span><i style="background:#ff5d5d"></i>prehratý tiket</span><span>čiara = celkový zisk po každom tikete</span></div>'
      : '<div class="legend"><span><i style="background:#82918a"></i>spolu vložené</span><span><i style="background:#b8ff3c"></i>spolu vyplatené</span></div>';
    return h;
  }
  function mriezka(rozsah) {
    var kroky = [1, 2, 5, 10, 20, 25, 50, 100, 200, 500, 1000];
    for (var i = 0; i < kroky.length; i++) if (rozsah / kroky[i] <= 5) return kroky[i];
    return 2000;
  }

  // ——— obrazovky ———
  function render() {
    if (!S.pin) return pinScreen();
    var cakaju = S.tikety.filter(function (t) { return t.stav === 'caka' || t.stav === 'navrh'; }).length;
    var tabs = [['prehlad', 'Prehľad'], ['tipy', 'Tipy'], ['tikety', 'Tikety'], ['zapasy', 'Zápasy']];
    var y = window.scrollY;
    app.innerHTML =
      '<header class="top"><div class="logo">si/<b>vsadzal</b></div><div class="acts">' +
        '<button class="ibtn pri" data-a="novy">' + ICO.plus + 'Tiket</button>' +
        '<button class="ibtn" data-a="menu" aria-label="Menu">' + ICO.menu + '</button></div></header>' +
      '<main id="main">' + ({ prehlad: vPrehlad, tipy: vTipy, tikety: vTikety, zapasy: vZapasy }[S.tab])() + '</main>' +
      '<nav class="nav">' + tabs.map(function (t) {
        return '<button data-tab="' + t[0] + '" class="' + (S.tab === t[0] ? 'on' : '') + '">' + ICO[t[0]] +
          '<span>' + t[1] + (t[0] === 'tipy' && cakaju ? '<span class="badge">' + cakaju + '</span>' : '') + '</span></button>';
      }).join('') + '</nav>';
    window.scrollTo(0, y);
  }

  function vPrehlad() {
    if (!S.tikety.length) return '<div class="empty">Zatiaľ tu nie sú žiadne tikety. Pridaj prvý cez „+ Tiket“.</div>';
    var s = statistiky(S.tikety);
    var h = '<div class="hero"><div class="lab">Celkový zisk</div>' +
      '<div class="big num ' + trieda(s.zisk) + '">' + eur(s.zisk, true) + '</div>' +
      '<div class="sub">' + s.pocet + ' vyhodnotených tiketov · návratnosť ' + (s.roi == null ? '—' : (s.roi > 0 ? '+' : '') + Math.round(s.roi * 100) + ' %') + '</div></div>';
    h += '<div class="kpis">' +
      kpi('Vložené', eur(s.vlozene)) + kpi('Vyplatené', eur(s.vyplatene)) +
      kpi('Úspešnosť', pct(s.uspesnost), s.vyhral + ' z ' + (s.vyhral + s.prehral)) +
      kpi('Priemerný kurz', kurzTxt(s.priemKurz)) +
      kpi('V hre teraz', eur(s.vHre)) +
      kpi('Možná výhra', eur(s.moznaVyhra), s.caka ? s.caka + '×' : '') +
      kpi('Najlepší tiket', najlepsi(), '') + kpi('Séria', seria()) + '</div>';
    h += '<h2>Ako sa vyvíjajú peniaze <span class="seg"><button data-graf="zisk" class="' + (S.graf === 'zisk' ? 'on' : '') + '">Zisk</button><button data-graf="toky" class="' + (S.graf === 'toky' ? 'on' : '') + '">Vklady a výhry</button></span></h2>';
    h += '<div class="card">' + graf() + '</div>';

    // podľa úrovne
    h += '<div class="split"><div><h2>Podľa typu tiketu</h2><div class="tw"><table><thead><tr><th>Typ</th><th class="r">Tikety</th><th class="r">Úspešnosť</th><th class="r">Vložené</th><th class="r">Zisk</th></tr></thead><tbody>';
    ['ultra', 'safe', 'risky', 'vlastny'].forEach(function (u) {
      var z = S.tikety.filter(function (t) { return t.uroven === u; });
      if (!z.length) return;
      var st = statistiky(z);
      h += '<tr><td>' + lv(u) + '</td><td class="r num">' + st.pocet + (st.caka ? ' <span class="mut">+' + st.caka + '</span>' : '') + '</td><td class="r num">' + pct(st.uspesnost) + '</td><td class="r num">' + eur(st.vlozene) + '</td><td class="r num ' + trieda(st.zisk) + '">' + eur(st.zisk, true) + '</td></tr>';
    });
    h += '</tbody></table></div></div>';

    // podľa športu (jednotlivé zápasy)
    var sporty = {};
    S.tikety.forEach(function (t) {
      t.zapasy.forEach(function (z) {
        var k = z.sport || 'Iné';
        sporty[k] = sporty[k] || { v: 0, p: 0, c: 0 };
        if (z.stav === 'vyhral') sporty[k].v++; else if (z.stav === 'prehral') sporty[k].p++; else if (z.stav === 'caka') sporty[k].c++;
      });
    });
    h += '<div><h2>Úspešnosť zápasov podľa športu</h2><div class="tw"><table><thead><tr><th>Šport</th><th class="r">Trafené</th><th class="r">Netrafené</th><th class="r">Úspešnosť</th></tr></thead><tbody>';
    Object.keys(sporty).sort().forEach(function (k) {
      var x = sporty[k], u = x.v + x.p ? x.v / (x.v + x.p) : null;
      h += '<tr><td class="t1">' + esc(k) + '</td><td class="r num pos">' + x.v + '</td><td class="r num neg">' + x.p + '</td><td class="r num">' + pct(u) +
        (u != null ? '<div class="bar"><i style="width:' + Math.round(u * 100) + '%"></i></div>' : '') + '</td></tr>';
    });
    h += '</tbody></table></div></div></div>';

    // po dňoch
    var dni = {};
    S.tikety.forEach(function (t) { (dni[t.datum] = dni[t.datum] || []).push(t); });
    h += '<h2>Po dňoch</h2><div class="tw"><table><thead><tr><th>Deň</th><th class="r">Tikety</th><th class="r">Vyhral / prehral</th><th class="r">Vložené</th><th class="r">Vyplatené</th><th class="r">Zisk</th></tr></thead><tbody>';
    Object.keys(dni).sort().reverse().forEach(function (d) {
      var st = statistiky(dni[d]);
      h += '<tr><td class="t1">' + datum(d) + '</td><td class="r num">' + dni[d].length + '</td><td class="r num"><span class="pos">' + st.vyhral + '</span> / <span class="neg">' + st.prehral + '</span>' + (st.caka ? ' <span class="mut">· ' + st.caka + ' čaká</span>' : '') +
        '</td><td class="r num">' + eur(st.vlozene) + '</td><td class="r num">' + eur(st.vyplatene) + '</td><td class="r num ' + trieda(st.zisk) + '">' + eur(st.zisk, true) + '</td></tr>';
    });
    h += '</tbody></table></div>';
    return h;
  }
  function kpi(lab, val, sub) { return '<div class="kpi"><div class="lab">' + lab + '</div><div class="val num">' + val + (sub ? ' <small>' + esc(sub) + '</small>' : '') + '</div></div>'; }
  function najlepsi() {
    var b = null;
    S.tikety.forEach(function (t) { if (t.stav === 'vyhral' && (!b || zisk(t) > zisk(b))) b = t; });
    return b ? '<span class="pos">' + eur(zisk(b), true) + '</span>' : '—';
  }
  function seria() {
    var z = zoradene().filter(function (t) { return t.stav === 'vyhral' || t.stav === 'prehral'; });
    if (!z.length) return '—';
    var posl = z[z.length - 1].stav, n = 0;
    for (var i = z.length - 1; i >= 0 && z[i].stav === posl; i--) n++;
    return '<span class="' + (posl === 'vyhral' ? 'pos' : 'neg') + '">' + n + '× ' + (posl === 'vyhral' ? 'výhra' : 'prehra') + '</span>';
  }

  function vTipy() {
    var z = zoradene().reverse().filter(function (t) { return t.stav === 'caka' || t.stav === 'navrh'; });
    var h = '<h2>Aktuálne tipy <small>' + z.length + ' ' + (z.length === 1 ? 'tiket' : z.length > 1 && z.length < 5 ? 'tikety' : 'tiketov') + '</small></h2>';
    if (!z.length) return h + '<div class="empty">Teraz nič nečaká. Nové tipy sa sem pridajú, keď ich vymyslíme.</div>';
    h += '<div class="slips">' + z.map(slip).join('') + '</div>';
    var hotove = zoradene().reverse().filter(function (t) { return UZAVRETE[t.stav]; }).slice(0, 4);
    if (hotove.length) h += '<h2>Naposledy vyhodnotené</h2><div class="slips">' + hotove.map(slip).join('') + '</div>';
    return h;
  }
  function slip(t) {
    var moznaVyhra = (+t.vklad || 0) * (+t.kurz || 0);
    var h = '<article class="slip"><div class="hd"><div><div class="ttl">' + esc(t.nazov || 'Tiket') + '</div><div class="dt">' + datum(t.datum) + ' · ' + t.zapasy.length + ' ' + (t.zapasy.length === 1 ? 'zápas' : t.zapasy.length < 5 ? 'zápasy' : 'zápasov') + '</div></div>' +
      '<div style="display:flex;gap:6px;align-items:center">' + lv(t.uroven) + chip(t.stav) + '</div></div><div class="legs">';
    t.zapasy.forEach(function (z, i) {
      h += '<div class="leg"><div><div class="m">' + esc(z.zapas) + '</div><div class="d">' + esc([z.liga, z.cas ? casTxt(z.cas) : '', z.trh].filter(Boolean).join(' · ')) + '</div></div>' +
        '<div style="text-align:right"><div class="k">' + esc(z.tip || '—') + (z.kurz ? ' <span class="mut" style="font-weight:400;font-size:13px">@' + kurzTxt(z.kurz) + '</span>' : '') + '</div>' +
        '<button class="chip st-' + esc(z.stav) + '" data-a="cyklus" data-id="' + esc(t.id) + '" data-i="' + i + '" title="Ťukni pre zmenu stavu">' + esc(STAV[z.stav]) + (z.vysledok ? ' ' + esc(z.vysledok) : '') + '</button></div>' +
        (z.preco ? '<div class="why">' + esc(z.preco) + '</div>' : '') + '</div>';
    });
    h += '</div><div class="perf"><i></i></div><div class="ft">' +
      '<div><div class="lab">Vklad</div><div class="v">' + eur(t.vklad) + '</div></div>' +
      '<div><div class="lab">Kurz</div><div class="v">' + kurzTxt(t.kurz) + '</div></div>' +
      '<div><div class="lab">' + (UZAVRETE[t.stav] ? 'Výhra' : 'Možná výhra') + '</div><div class="v ' + (t.stav === 'vyhral' ? 'pos' : t.stav === 'prehral' ? 'neg' : '') + '">' + eur(UZAVRETE[t.stav] ? t.vyhra : moznaVyhra) + '</div></div></div>';
    if (t.poznamka) h += '<div class="note">' + esc(t.poznamka) + '</div>';
    h += '<div class="bt">' + (UZAVRETE[t.stav] ? '' :
      '<button class="btn win" data-a="vyhral" data-id="' + esc(t.id) + '">Vyhral</button><button class="btn loss" data-a="prehral" data-id="' + esc(t.id) + '">Prehral</button>') +
      '<button class="btn" data-a="upravit" data-id="' + esc(t.id) + '">Upraviť</button></div></article>';
    return h;
  }
  function casTxt(c) { var d = new Date(c); return isNaN(d) ? '' : d.toLocaleTimeString('sk-SK', { hour: '2-digit', minute: '2-digit' }); }

  function vTikety() {
    var z = zoradene().reverse();
    if (!z.length) return '<div class="empty">Zatiaľ žiadne tikety.</div>';
    var h = '<h2>Všetky tikety <small>' + z.length + '</small></h2><div class="tw"><table><thead><tr><th>Dátum</th><th>Tiket</th><th>Typ</th><th class="r">Vklad</th><th class="r">Kurz</th><th class="r">Výhra</th><th class="r">Zisk</th><th>Stav</th></tr></thead><tbody>';
    z.forEach(function (t) {
      var zs = zisk(t);
      h += '<tr class="click" data-a="rozbal" data-id="' + esc(t.id) + '"><td class="num">' + datum(t.datum) + '</td><td class="wrap"><div class="t1">' + esc(t.nazov || 'Tiket') + '</div><div class="t2">' + esc(t.zapasy.map(function (x) { return x.zapas; }).join(' · ')) + '</div></td><td>' + lv(t.uroven) + '</td>' +
        '<td class="r num">' + eur(t.vklad) + '</td><td class="r num">' + kurzTxt(t.kurz) + '</td><td class="r num">' + (UZAVRETE[t.stav] ? eur(t.vyhra) : '—') + '</td>' +
        '<td class="r num ' + trieda(zs) + '">' + (UZAVRETE[t.stav] ? eur(zs, true) : '—') + '</td><td>' + chip(t.stav) + '</td></tr>';
      if (S.otvorene[t.id]) {
        h += '<tr class="sub"><td colspan="8"><div class="slips" style="margin-top:8px">' + slip(t) + '</div></td></tr>';
      }
    });
    return h + '</tbody></table></div>';
  }

  function vZapasy() {
    var riadky = [];
    zoradene().reverse().forEach(function (t) { t.zapasy.forEach(function (z, i) { riadky.push({ t: t, z: z, i: i }); }); });
    var sporty = {}; riadky.forEach(function (r) { sporty[r.z.sport || 'Iné'] = 1; });
    var f = riadky.filter(function (r) { return (!S.fSport || (r.z.sport || 'Iné') === S.fSport) && (!S.fStav || r.z.stav === S.fStav); });
    var v = f.filter(function (r) { return r.z.stav === 'vyhral'; }).length, p = f.filter(function (r) { return r.z.stav === 'prehral'; }).length;
    var h = '<h2>Všetky zápasy <small>' + f.length + ' · trafené ' + v + ' z ' + (v + p) + (v + p ? ' (' + pct(v / (v + p)) + ')' : '') + '</small></h2>';
    h += '<div class="filters">' + [''].concat(Object.keys(sporty).sort()).map(function (s) { return '<button data-fsport="' + esc(s) + '" class="' + (S.fSport === s ? 'on' : '') + '">' + esc(s || 'Všetky športy') + '</button>'; }).join('') + '</div>';
    h += '<div class="filters">' + ['', 'vyhral', 'prehral', 'caka', 'neznamy'].map(function (s) { return '<button data-fstav="' + s + '" class="' + (S.fStav === s ? 'on' : '') + '">' + (s ? STAV[s] : 'Všetky stavy') + '</button>'; }).join('') + '</div>';
    if (!f.length) return h + '<div class="empty">Nič nezodpovedá filtru.</div>';
    h += '<div class="tw"><table><thead><tr><th>Dátum</th><th>Zápas</th><th>Liga</th><th>Trh</th><th>Tip</th><th class="r">Kurz</th><th>Výsledok</th><th>Stav</th><th>Tiket</th></tr></thead><tbody>';
    f.forEach(function (r) {
      h += '<tr><td class="num">' + datum(r.t.datum) + '</td><td class="t1">' + esc(r.z.zapas) + '</td><td><div>' + esc(r.z.liga || '') + '</div><div class="t2">' + esc(r.z.sport || '') + '</div></td><td>' + esc(r.z.trh || '') + '</td>' +
        '<td class="num t1">' + esc(r.z.tip || '') + '</td><td class="r num">' + kurzTxt(r.z.kurz) + '</td><td class="num">' + esc(r.z.vysledok || '') + '</td>' +
        '<td><button class="chip st-' + esc(r.z.stav) + '" data-a="cyklus" data-id="' + esc(r.t.id) + '" data-i="' + r.i + '">' + esc(STAV[r.z.stav]) + '</button></td><td>' + lv(r.t.uroven) + '</td></tr>';
    });
    return h + '</tbody></table></div>';
  }

  // ——— formulár tiketu ———
  function otvorSheet(html) { sheet.innerHTML = '<div class="box">' + html + '</div>'; sheet.hidden = false; }
  function zavriSheet() { sheet.hidden = true; sheet.innerHTML = ''; }
  sheet.addEventListener('click', function (e) { if (e.target === sheet) zavriSheet(); });

  function prazdnyZapas() { return { sport: 'Futbal', liga: '', zapas: '', trh: 'Výsledok zápasu', tip: '', kurz: '', vysledok: '', stav: 'caka', preco: '' }; }
  function editor(t) {
    t = t ? JSON.parse(JSON.stringify(t)) : { datum: dnes(), nazov: '', uroven: 'vlastny', stav: 'caka', vklad: '', kurz: '', vyhra: '', poznamka: '', zapasy: [prazdnyZapas()] };
    function opt(map, val) { return Object.keys(map).map(function (k) { return '<option value="' + k + '"' + (k === val ? ' selected' : '') + '>' + map[k] + '</option>'; }).join(''); }
    function kresli() {
      var zs = {}; Object.keys(STAV).forEach(function (k) { if (k !== 'navrh' && k !== 'cashout') zs[k] = STAV[k]; });
      var ts = {}; ['navrh', 'caka', 'vyhral', 'prehral', 'vrateny', 'cashout'].forEach(function (k) { ts[k] = STAV[k]; });
      otvorSheet(
        '<h3>' + (t.id ? 'Upraviť tiket' : 'Nový tiket') + '<button class="ibtn" data-x="zavriet">Zavrieť</button></h3>' +
        '<div class="grid">' +
          '<label class="f full">Názov<input data-f="nazov" value="' + esc(t.nazov || '') + '" placeholder="napr. Liga národov – safe"></label>' +
          '<label class="f">Dátum<input type="date" data-f="datum" value="' + esc(t.datum || dnes()) + '"></label>' +
          '<label class="f">Typ<select data-f="uroven">' + opt(UROVEN, t.uroven) + '</select></label>' +
          '<label class="f">Stav<select data-f="stav">' + opt(ts, t.stav) + '</select></label>' +
          '<label class="f">Vklad (€)<input inputmode="decimal" data-f="vklad" value="' + esc(t.vklad == null ? '' : t.vklad) + '"></label>' +
          '<label class="f">Kurz tiketu<input inputmode="decimal" data-f="kurz" value="' + esc(t.kurz == null ? '' : t.kurz) + '" placeholder="dopočíta sa"></label>' +
          '<label class="f">Výhra (€)<input inputmode="decimal" data-f="vyhra" value="' + esc(t.vyhra ? t.vyhra : '') + '" placeholder="pri výhre sa dopočíta"></label>' +
          '<label class="f full">Poznámka<textarea data-f="poznamka">' + esc(t.poznamka || '') + '</textarea></label>' +
        '</div>' +
        t.zapasy.map(function (z, i) {
          return '<div class="legbox"><div class="lh">Zápas ' + (i + 1) + '<button data-x="zmazZapas" data-i="' + i + '">Odstrániť</button></div><div class="grid">' +
            '<label class="f full">Zápas<input data-z="zapas" data-i="' + i + '" value="' + esc(z.zapas || '') + '" placeholder="Domáci – Hostia"></label>' +
            '<label class="f">Šport<input data-z="sport" data-i="' + i + '" value="' + esc(z.sport || '') + '" list="vs-sporty"></label>' +
            '<label class="f">Liga<input data-z="liga" data-i="' + i + '" value="' + esc(z.liga || '') + '"></label>' +
            '<label class="f">Trh<input data-z="trh" data-i="' + i + '" value="' + esc(z.trh || '') + '" list="vs-trhy"></label>' +
            '<label class="f">Tip<input data-z="tip" data-i="' + i + '" value="' + esc(z.tip || '') + '" placeholder="1, X2, Lakers…"></label>' +
            '<label class="f">Kurz<input inputmode="decimal" data-z="kurz" data-i="' + i + '" value="' + esc(z.kurz == null ? '' : z.kurz) + '"></label>' +
            '<label class="f">Výsledok<input data-z="vysledok" data-i="' + i + '" value="' + esc(z.vysledok || '') + '" placeholder="2:1"></label>' +
            '<label class="f">Stav<select data-z="stav" data-i="' + i + '">' + opt(zs, z.stav) + '</select></label>' +
            '<label class="f full">Prečo<input data-z="preco" data-i="' + i + '" value="' + esc(z.preco || '') + '"></label>' +
          '</div></div>';
        }).join('') +
        '<datalist id="vs-sporty"><option value="Futbal"><option value="Basketbal"><option value="Hokej"><option value="CS2"><option value="Tenis"></datalist>' +
        '<datalist id="vs-trhy"><option value="Výsledok zápasu"><option value="Dvojtip"><option value="Víťaz zápasu (vrátane predĺženia)"><option value="Počet gólov"><option value="Handicap"></datalist>' +
        '<div class="row"><button class="btn" data-x="pridajZapas">+ Pridať zápas</button></div>' +
        '<div class="row">' + (t.id ? '<button class="btn danger" data-x="zmazat">Zmazať</button>' : '') + '<button class="btn win" data-x="ulozit">Uložiť</button></div>'
      );
    }
    function precitaj() {
      sheet.querySelectorAll('[data-f]').forEach(function (e) { t[e.getAttribute('data-f')] = e.value; });
      sheet.querySelectorAll('[data-z]').forEach(function (e) { t.zapasy[+e.getAttribute('data-i')][e.getAttribute('data-z')] = e.value; });
    }
    kresli();
    sheet.onclick = function (e) {
      var b = e.target.closest('[data-x]'); if (!b) return;
      var x = b.getAttribute('data-x');
      if (x === 'zavriet') return zavriSheet();
      precitaj();
      if (x === 'pridajZapas') { t.zapasy.push(prazdnyZapas()); kresli(); sheet.querySelector('.box').scrollTop = 1e6; }
      else if (x === 'zmazZapas') { t.zapasy.splice(+b.getAttribute('data-i'), 1); kresli(); }
      else if (x === 'zmazat') {
        if (!confirm('Naozaj zmazať tento tiket?')) return;
        rpc('vsadzal_zmazat', { p_pin: S.pin, p_id: t.id }).then(nacitaj).then(function () { zavriSheet(); render(); toast('Tiket zmazaný'); }).catch(chyba);
      } else if (x === 'ulozit') {
        t.zapasy = t.zapasy.filter(function (z) { return (z.zapas || '').trim(); });
        t.zapasy.forEach(function (z) { z.kurz = num(z.kurz); });
        t.vklad = num(t.vklad) || 0; t.kurz = num(t.kurz); t.vyhra = num(t.vyhra);
        if (t.kurz == null && t.zapasy.length && t.zapasy.every(function (z) { return z.kurz; })) {
          t.kurz = Math.round(t.zapasy.reduce(function (a, z) { return a * z.kurz; }, 1) * 1000) / 1000;
        }
        if (t.stav === 'vyhral' && !t.vyhra && t.kurz) t.vyhra = Math.round(t.vklad * t.kurz * 100) / 100;
        if (t.stav === 'vrateny' && !t.vyhra) t.vyhra = t.vklad;
        if (t.stav === 'prehral') t.vyhra = 0;
        b.disabled = true; b.textContent = 'Ukladám…';
        uloz(t).then(function () { zavriSheet(); render(); toast('Uložené'); }).catch(function (er) { b.disabled = false; b.textContent = 'Uložiť'; chyba(er); });
      }
    };
  }
  function chyba(e) {
    if (e && (e.kod === 'zly' || e.kod === 'zamknute')) { zavriSheet(); store('vsadzal_pin', null); S.pin = null; return pinScreen(chybaText(e.kod)); }
    toast(chybaText(e && e.kod, e));
  }

  function najdi(id) { for (var i = 0; i < S.tikety.length; i++) if (S.tikety[i].id === id) return S.tikety[i]; return null; }

  function vyhodnot(t, stav) {
    if (stav === 'prehral') {
      if (!confirm('Označiť „' + (t.nazov || 'tiket') + '“ ako prehratý?')) return;
      var k = JSON.parse(JSON.stringify(t)); k.stav = 'prehral'; k.vyhra = 0;
      k.zapasy.forEach(function (z) { if (z.stav === 'caka') z.stav = 'neznamy'; });
      return uloz(k).then(function () { render(); toast('Zapísané ako prehra'); }).catch(chyba);
    }
    var navrh = t.kurz ? Math.round(t.vklad * t.kurz * 100) / 100 : '';
    otvorSheet('<h3>Koľko si vyhral?<button class="ibtn" data-x="zavriet">Zavrieť</button></h3>' +
      '<p class="mut" style="margin:-6px 0 12px">Napíš sumu, ktorú ti Fortuna naozaj vyplatila.</p>' +
      '<label class="f">Výhra (€)<input inputmode="decimal" id="vs-vyhra" value="' + esc(navrh) + '"></label>' +
      '<div class="row"><button class="btn win" data-x="ok">Uložiť výhru</button></div>');
    sheet.onclick = function (e) {
      var b = e.target.closest('[data-x]'); if (!b) return;
      if (b.getAttribute('data-x') === 'zavriet') return zavriSheet();
      var v = num(document.getElementById('vs-vyhra').value);
      if (v == null) return toast('Zadaj sumu');
      var k = JSON.parse(JSON.stringify(t)); k.stav = 'vyhral'; k.vyhra = v;
      if (!k.kurz && k.vklad) k.kurz = Math.round(v / k.vklad * 1000) / 1000;
      k.zapasy.forEach(function (z) { if (z.stav === 'caka') z.stav = 'vyhral'; });
      b.disabled = true;
      uloz(k).then(function () { zavriSheet(); render(); toast('Výhra zapísaná 🎉'); }).catch(chyba);
    };
  }

  function menu() {
    otvorSheet('<h3>Menu<button class="ibtn" data-x="zavriet">Zavrieť</button></h3><div class="menu">' +
      '<button class="btn" data-x="obnov">Obnoviť dáta</button>' +
      '<button class="btn" data-x="pin">Zmeniť PIN</button>' +
      '<button class="btn danger" data-x="zamkni">Zamknúť a zabudnúť PIN na tomto zariadení</button></div>');
    sheet.onclick = function (e) {
      var b = e.target.closest('[data-x]'); if (!b) return;
      var x = b.getAttribute('data-x');
      if (x === 'zavriet') zavriSheet();
      else if (x === 'obnov') nacitaj().then(function () { zavriSheet(); render(); toast('Obnovené'); }).catch(chyba);
      else if (x === 'zamkni') { zavriSheet(); zamkni(); }
      else if (x === 'pin') zmenPin();
    };
  }
  function zmenPin() {
    otvorSheet('<h3>Zmeniť PIN<button class="ibtn" data-x="zavriet">Zavrieť</button></h3><div class="grid">' +
      '<label class="f full">Nový PIN (4–8 číslic)<input type="password" inputmode="numeric" id="vs-p1" autocomplete="new-password"></label>' +
      '<label class="f full">Ešte raz<input type="password" inputmode="numeric" id="vs-p2" autocomplete="new-password"></label></div>' +
      '<div class="row"><button class="btn win" data-x="ok">Zmeniť</button></div>');
    sheet.onclick = function (e) {
      var b = e.target.closest('[data-x]'); if (!b) return;
      if (b.getAttribute('data-x') === 'zavriet') return zavriSheet();
      var p1 = document.getElementById('vs-p1').value, p2 = document.getElementById('vs-p2').value;
      if (!/^[0-9]{4,8}$/.test(p1)) return toast('PIN musí mať 4 až 8 číslic');
      if (p1 !== p2) return toast('PIN-y sa nezhodujú');
      rpc('vsadzal_zmenit_pin', { p_pin: S.pin, p_novy: p1 }).then(function (j) {
        if (!j || !j.ok) { var er = new Error(); er.kod = j && j.chyba; throw er; }
        var pamata = false; try { pamata = !!localStorage.getItem('vsadzal_pin'); } catch (x) {}
        S.pin = p1; store('vsadzal_pin', [p1, pamata]);
        try { localStorage.setItem('vsadzal_dlzka', String(p1.length)); } catch (x) {}
        zavriSheet(); toast('PIN zmenený');
      }).catch(chyba);
    };
  }

  // ——— kliky ———
  app.addEventListener('click', function (e) {
    var tab = e.target.closest('[data-tab]');
    if (tab) { S.tab = tab.getAttribute('data-tab'); render(); window.scrollTo(0, 0); return; }
    var g = e.target.closest('[data-graf]');
    if (g) { S.graf = g.getAttribute('data-graf'); render(); return; }
    var fs = e.target.closest('[data-fsport]');
    if (fs) { S.fSport = fs.getAttribute('data-fsport'); render(); return; }
    var ft = e.target.closest('[data-fstav]');
    if (ft) { S.fStav = ft.getAttribute('data-fstav'); render(); return; }
    var b = e.target.closest('[data-a]'); if (!b) return;
    var a = b.getAttribute('data-a'), t = najdi(b.getAttribute('data-id'));
    if (a === 'novy') editor(null);
    else if (a === 'menu') menu();
    else if (a === 'rozbal') { S.otvorene[t.id] = !S.otvorene[t.id]; render(); }
    else if (a === 'upravit') editor(t);
    else if (a === 'vyhral' || a === 'prehral') vyhodnot(t, a);
    else if (a === 'cyklus') {
      e.stopPropagation();
      var k = JSON.parse(JSON.stringify(t)), i = +b.getAttribute('data-i');
      k.zapasy[i].stav = CYKLUS[k.zapasy[i].stav] || 'caka';
      b.textContent = STAV[k.zapasy[i].stav]; b.className = 'chip st-' + k.zapasy[i].stav;
      uloz(k).then(render).catch(chyba);
    }
  });
  var rt; window.addEventListener('resize', function () { clearTimeout(rt); rt = setTimeout(function () { if (S.pin && S.tab === 'prehlad') render(); }, 200); });

  // ——— štart ———
  var ulozeny = store('vsadzal_pin');
  if (ulozeny) {
    S.pin = ulozeny;
    nacitaj().then(render).catch(function (e) {
      if (e.kod === 'zly' || e.kod === 'zamknute') store('vsadzal_pin', null);
      S.pin = null; pinScreen(chybaText(e.kod, e));
    });
  } else pinScreen();
})();
