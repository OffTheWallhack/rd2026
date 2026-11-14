/* si/vsadzal — štatistika tiketov a dnešné tipy (len na čítanie, za PINom).
   Dáta: Supabase, len cez funkcie vsadzal_* — každá chce PIN, tabuľky sú inak zamknuté.
   PIN sa na serveri overuje voči hashu, po 5 zlých pokusoch sa stránka zamkne na hodinu. */
(function () {
  'use strict';

  var URL_ = 'https://znsrokpaoczljisaoulu.supabase.co';
  var KEY = 'sb_publishable_9bRi6q6rnTTr5_Rszk5IiQ_MBBoti45';

  var STAV = { navrh: 'Tip', caka: 'Čaká', vyhral: 'Vyhral', prehral: 'Prehral', vrateny: 'Vrátený', cashout: 'Cash out', neznamy: 'Nevieme' };
  var UROVEN = { ultra: 'Ultra safe', safe: 'Safe', risky: 'Risky', vlastny: 'Vlastný' };
  var UZAVRETE = { vyhral: 1, prehral: 1, vrateny: 1, cashout: 1 };

  var S = { pin: null, tikety: [], tab: 'prehlad', graf: 'zisk' };
  var app = document.getElementById('app');

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
    var dnesne = tipyDna(dnes()).length;
    var tabs = [['prehlad', 'Prehľad'], ['tipy', 'Dnešné tipy']];
    var y = window.scrollY;
    app.innerHTML =
      '<header class="top"><div class="logo">si/<b>vsadzal</b></div><div class="acts">' +
        '<button class="ibtn pri" data-a="zdielat">Zdieľať tipy</button></div></header>' +
      '<main id="main">' + (S.tab === 'tipy' ? vTipy() : vPrehlad()) + '</main>' +
      '<nav class="nav nav2">' + tabs.map(function (t) {
        return '<button data-tab="' + t[0] + '" class="' + (S.tab === t[0] ? 'on' : '') + '">' + ICO[t[0]] +
          '<span>' + t[1] + (t[0] === 'tipy' && dnesne ? '<span class="badge live">' + dnesne + '</span>' : '') + '</span></button>';
      }).join('') + '</nav>';
    window.scrollTo(0, y);
  }

  function vPrehlad() {
    if (!S.tikety.length) return '<div class="empty">Zatiaľ tu nie sú žiadne tikety.</div>';
    var s = statistiky(S.tikety);
    var h = '<div class="hero"><div class="lab">Čistý zisk</div>' +
      '<div class="big num ' + trieda(s.zisk) + '">' + eur(s.zisk, true) + '</div>' +
      '<div class="sub">' + s.pocet + ' vyhodnotených tiketov · návratnosť ' + (s.roi == null ? '—' : (s.roi > 0 ? '+' : '') + Math.round(s.roi * 100) + ' %') + '</div></div>';
    h += '<div class="kpis kpis3">' +
      kpi('Staked', eur(s.vlozene)) +
      kpi('Výhry / prehry', '<span class="pos">' + s.vyhral + '</span> / <span class="neg">' + s.prehral + '</span>') +
      kpi('Úspešnosť', pct(s.uspesnost)) +
      kpi('Priemerný kurz', kurzTxt(s.priemKurz)) +
      kpi('Najlepší tiket', najlepsi()) + kpi('Séria', seria()) + '</div>';

    h += '<h2>Ako sa vyvíja zisk</h2><div class="card">' + graf() + '</div>';

    h += '<div class="split"><div><h2>Podľa typu tiketu</h2><div class="tw"><table><thead><tr><th>Typ</th><th class="r">Tikety</th><th class="r">Úspešnosť</th><th class="r">Staked</th><th class="r">Zisk</th></tr></thead><tbody>';
    ['ultra', 'safe', 'risky', 'vlastny'].forEach(function (u) {
      var z = S.tikety.filter(function (t) { return t.uroven === u; });
      if (!z.length) return;
      var st = statistiky(z);
      if (!st.pocet) return;
      h += '<tr><td>' + lv(u) + '</td><td class="r num">' + st.pocet + '</td><td class="r num">' + pct(st.uspesnost) + '</td><td class="r num">' + eur(st.vlozene) + '</td><td class="r num ' + trieda(st.zisk) + '">' + eur(st.zisk, true) + '</td></tr>';
    });
    h += '</tbody></table></div></div>';

    var sporty = {};
    S.tikety.forEach(function (t) {
      t.zapasy.forEach(function (z) {
        var k = z.sport || 'Iné';
        sporty[k] = sporty[k] || { v: 0, p: 0 };
        if (z.stav === 'vyhral') sporty[k].v++; else if (z.stav === 'prehral') sporty[k].p++;
      });
    });
    h += '<div><h2>Úspešnosť zápasov podľa športu</h2><div class="tw"><table><thead><tr><th>Šport</th><th class="r">Trafené</th><th class="r">Netrafené</th><th class="r">Úspešnosť</th></tr></thead><tbody>';
    Object.keys(sporty).sort().forEach(function (k) {
      var x = sporty[k], u = x.v + x.p ? x.v / (x.v + x.p) : null;
      if (u == null) return;
      h += '<tr><td class="t1">' + esc(k) + '</td><td class="r num pos">' + x.v + '</td><td class="r num neg">' + x.p + '</td><td class="r num">' + pct(u) +
        '<div class="bar"><i style="width:' + Math.round(u * 100) + '%"></i></div></td></tr>';
    });
    h += '</tbody></table></div></div></div>';

    var dni = {};
    S.tikety.forEach(function (t) { if (UZAVRETE[t.stav]) (dni[t.datum] = dni[t.datum] || []).push(t); });
    h += '<h2>Po dňoch</h2><div class="tw"><table><thead><tr><th>Deň</th><th class="r">Tikety</th><th class="r">Výhra / prehra</th><th class="r">Staked</th><th class="r">Zisk</th></tr></thead><tbody>';
    Object.keys(dni).sort().reverse().forEach(function (d) {
      var st = statistiky(dni[d]);
      h += '<tr><td class="t1">' + datum(d) + '</td><td class="r num">' + dni[d].length + '</td><td class="r num"><span class="pos">' + st.vyhral + '</span> / <span class="neg">' + st.prehral + '</span></td>' +
        '<td class="r num">' + eur(st.vlozene) + '</td><td class="r num ' + trieda(st.zisk) + '">' + eur(st.zisk, true) + '</td></tr>';
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

  // tipy = tikety, ktoré som tipoval ja (nie vlastné)
  function tipyDna(d) {
    var poradie = { ultra: 1, safe: 2, risky: 3 };
    return S.tikety.filter(function (t) { return t.datum === d && t.uroven !== 'vlastny'; })
      .sort(function (a, b) { return (poradie[a.uroven] || 9) - (poradie[b.uroven] || 9); });
  }
  function vTipy() {
    var d = dnes(), z = tipyDna(d);
    var h = '<div class="intro"><h1>Dnešné tipy</h1><p class="mut">' + datum(d) + ' · ' + (z.length ? z.length + ' ' + (z.length === 1 ? 'tiket' : z.length < 5 ? 'tikety' : 'tiketov') : 'zatiaľ nič') + '</p></div>';
    h += z.length ? '<div class="slips">' + z.map(function (t) { return slip(t, true); }).join('') + '</div>'
      : '<div class="empty">Na dnes ešte nie sú tipy. Pribudnú, keď ich vymyslíme.</div>';
    var dni = [];
    zoradene().reverse().forEach(function (t) { if (t.datum < d && t.uroven !== 'vlastny' && dni.indexOf(t.datum) < 0) dni.push(t.datum); });
    dni.slice(0, 3).forEach(function (den) {
      h += '<h2>Predošlé tipy <small>' + datum(den) + '</small></h2><div class="slips hotove">' + tipyDna(den).map(function (t) { return slip(t, false); }).join('') + '</div>';
    });
    return h;
  }
  function slip(t, dnesny) {
    var otvoreny = !UZAVRETE[t.stav];
    var live = dnesny && otvoreny;
    var stavTxt = live ? 'Dá sa tipnúť' : (STAV[t.stav] || t.stav);
    var h = '<article class="slip' + (live ? ' live' : '') + '"><div class="hd"><div><div class="ttl">' + esc(t.nazov || 'Tiket') + '</div><div class="dt">' +
      t.zapasy.length + ' ' + (t.zapasy.length === 1 ? 'zápas' : t.zapasy.length < 5 ? 'zápasy' : 'zápasov') + '</div></div>' +
      '<div style="display:flex;gap:6px;align-items:center">' + lv(t.uroven) + '<span class="chip st-' + (live ? 'live' : esc(t.stav)) + '">' + esc(stavTxt) + '</span></div></div><div class="legs">';
    t.zapasy.forEach(function (z) {
      h += '<div class="leg"><div><div class="m">' + esc(z.zapas) + '</div><div class="d">' + esc([z.liga, z.cas ? casTxt(z.cas) : '', z.trh].filter(Boolean).join(' · ')) + '</div></div>' +
        '<div style="text-align:right"><div class="k">' + esc(z.tip || '—') + (z.kurz ? ' <span class="mut" style="font-weight:400;font-size:13px">@' + kurzTxt(z.kurz) + '</span>' : '') + '</div>' +
        (z.stav !== 'caka' ? '<span class="chip st-' + esc(z.stav) + '">' + esc(STAV[z.stav]) + (z.vysledok ? ' ' + esc(z.vysledok) : '') + '</span>' : '') + '</div>' +
        (z.preco && dnesny ? '<div class="why">' + esc(z.preco) + '</div>' : '') + '</div>';
    });
    h += '</div><div class="perf"><i></i></div><div class="ft ft2">' +
      '<div><div class="lab">Celkový kurz</div><div class="v">' + kurzTxt(t.kurz) + '</div></div>' +
      '<div><div class="lab">Za 10 € by bolo</div><div class="v ' + (t.stav === 'vyhral' ? 'pos' : t.stav === 'prehral' ? 'neg' : '') + '">' + (t.kurz ? eur(10 * t.kurz) : '—') + '</div></div></div></article>';
    return h;
  }
  function casTxt(c) { var d = new Date(c); return isNaN(d) ? '' : d.toLocaleTimeString('sk-SK', { hour: '2-digit', minute: '2-digit', timeZone: 'Europe/Bratislava' }); }

  // ——— kliky ———
  app.addEventListener('click', function (e) {
    var tab = e.target.closest('[data-tab]');
    if (tab) { S.tab = tab.getAttribute('data-tab'); render(); window.scrollTo(0, 0); return; }
    var b = e.target.closest('[data-a="zdielat"]');
    if (b) {
      var url = 'https://durica.si/vsadzal/dnes/';
      if (navigator.share) navigator.share({ title: 'Tipy na dnes', text: 'Dnešné tipy na zápasy 👇', url: url }).catch(function () {});
      else if (navigator.clipboard) navigator.clipboard.writeText(url).then(function () { toast('Odkaz skopírovaný'); });
    }
  });
  var rt; window.addEventListener('resize', function () { clearTimeout(rt); rt = setTimeout(function () { if (S.pin && S.tab === 'prehlad') render(); }, 200); });
  // dáta sa obnovia, keď sa človek vráti na stránku
  document.addEventListener('visibilitychange', function () { if (!document.hidden && S.pin) nacitaj().then(render).catch(function () {}); });

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
