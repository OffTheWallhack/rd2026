/* si/zaplatil — nahraj účet, znudený miliardár swipne doprava a zaplatí ho.
   Dáta: Supabase (funkcie zaplatil_*), bez SDK, cez fetch. Fotky: bucket "zaplatil".
   Platba: appka peniaze nedrží. Otvorí platobný odkaz payme.sk (banková appka) alebo ukáže údaje. */
(function () {
  'use strict';

  var URL_ = 'https://znsrokpaoczljisaoulu.supabase.co';
  var KEY = 'sb_publishable_9bRi6q6rnTTr5_Rszk5IiQ_MBBoti45';
  var SITE = 'https://durica.si/zaplatil/';

  var KATEGORIE = [
    ['byvanie', 'Bývanie'], ['energie', 'Energie'], ['jedlo', 'Jedlo'], ['auto', 'Auto'],
    ['telefon', 'Telefón a net'], ['zdravie', 'Zdravie'], ['skola', 'Škola'], ['zabava', 'Zábava'], ['ine', 'Iné']
  ];
  var KAT = {};
  KATEGORIE.forEach(function (k) { KAT[k[0]] = k[1]; });

  // Ukážkové účty: ukážu sa len vtedy, keď v databáze nečaká ani jeden skutočný. Nedajú sa zaplatiť.
  var DEMO = [
    { id: 'demo-0001', demo: true, nazov: 'Elektrina za október', suma: 84.5, kategoria: 'energie', pribeh: 'Kúrim od septembra, lebo mačke je zima.', meno: 'Feli a spol.', prijemca: 'Dodávateľ energie' },
    { id: 'demo-0002', demo: true, nazov: 'Nájom, lebo je zase november', suma: 620, kategoria: 'byvanie', pribeh: 'Prenajímateľ má jachtu. Ja mám tento účet.', meno: 'Podnájomník', prijemca: 'Pán domáci' },
    { id: 'demo-0003', demo: true, nazov: 'Veterinár', suma: 137, kategoria: 'zdravie', pribeh: 'Pes zjedol ponožku. Druhú z páru.', meno: 'Denny', prijemca: 'Veterinárna ambulancia' }
  ];

  // ——— drobné pomôcky ———
  function $(s, r) { return (r || document).querySelector(s); }
  function el(tag, attrs, kids) {
    var e = document.createElement(tag), k;
    if (attrs) for (k in attrs) {
      if (attrs[k] == null || attrs[k] === false) continue;
      if (k === 'class') e.className = attrs[k];
      else if (k === 'text') e.textContent = attrs[k];
      else e.setAttribute(k, attrs[k] === true ? '' : attrs[k]);
    }
    (kids || []).forEach(function (c) { if (c) e.appendChild(typeof c === 'string' ? document.createTextNode(c) : c); });
    return e;
  }
  function ls(k, v) {
    try {
      if (v === undefined) { var raw = localStorage.getItem(k); return raw ? JSON.parse(raw) : null; }
      localStorage.setItem(k, JSON.stringify(v));
    } catch (e) {}
    return null;
  }
  function nahodne(n) {
    var abc = 'abcdefghijklmnopqrstuvwxyz0123456789', a = new Uint8Array(n), s = '', i;
    crypto.getRandomValues(a);
    for (i = 0; i < n; i++) s += abc[a[i] % 36];
    return s;
  }
  var fmtEur = new Intl.NumberFormat('sk-SK', { style: 'currency', currency: 'EUR' });
  function eur(n) { return fmtEur.format(Number(n) || 0); }
  function sklonuj(n, jeden, dva, vela) { return n === 1 ? jeden : (n >= 2 && n <= 4 ? dva : vela); }
  function pred(ts) {
    var s = Math.max(0, (Date.now() - new Date(ts).getTime()) / 1000);
    if (s < 90) return 'práve teraz';
    if (s < 3600) return 'pred ' + Math.round(s / 60) + ' min';
    if (s < 86400) return 'pred ' + Math.round(s / 3600) + ' h';
    var d = Math.round(s / 86400);
    return 'pred ' + d + ' ' + sklonuj(d, 'dňom', 'dňami', 'dňami');
  }
  function bezDiakritiky(s) { return String(s || '').normalize('NFD').replace(/[̀-ͯ]/g, '').replace(/[^\x20-\x7e]/g, ''); }
  function ibanCisty(s) { return String(s || '').replace(/\s/g, '').toUpperCase(); }
  function ibanPekny(s) { return ibanCisty(s).replace(/(.{4})/g, '$1 ').trim(); }
  function ibanOk(s) {
    s = ibanCisty(s);
    if (!/^[A-Z]{2}\d{2}[A-Z0-9]{11,30}$/.test(s)) return false;
    if (s.slice(0, 2) === 'SK' && s.length !== 24) return false;
    var r = s.slice(4) + s.slice(0, 4), m = 0, i, j, v;
    for (i = 0; i < r.length; i++) {
      v = r[i] >= 'A' ? String(r.charCodeAt(i) - 55) : r[i];
      for (j = 0; j < v.length; j++) m = (m * 10 + Number(v[j])) % 97;
    }
    return m === 1;
  }
  function cisloUctu(id) { return ('0000' + (parseInt(String(id).replace(/[^0-9a-f]/g, '').slice(0, 6) || '1', 16) % 10000)).slice(-4); }
  function fotoUrl(path) { return URL_ + '/storage/v1/object/public/zaplatil/' + path; }

  function rpc(name, body) {
    var ctrl = new AbortController();
    var t = setTimeout(function () { ctrl.abort(); }, 12000);
    return fetch(URL_ + '/rest/v1/rpc/' + name, {
      method: 'POST',
      headers: { apikey: KEY, Authorization: 'Bearer ' + KEY, 'Content-Type': 'application/json', Accept: 'application/json' },
      body: JSON.stringify(body || {}), signal: ctrl.signal, cache: 'no-store'
    }).then(function (r) {
      if (r.ok) return r.json();
      return r.json().catch(function () { return {}; }).then(function (j) { throw new Error(j.message || ('http_' + r.status)); });
    }).finally(function () { clearTimeout(t); });
  }

  // platobný odkaz podľa štandardu payme.sk (Slovenská banková asociácia)
  function paymeLink(u) {
    var p = new URLSearchParams();
    p.set('V', '1');
    p.set('IBAN', u.iban);
    p.set('AM', Number(u.suma).toFixed(2));
    p.set('CC', 'EUR');
    if (u.vs) p.set('PI', '/VS' + u.vs + '/SS/KS');
    p.set('MSG', bezDiakritiky(u.nazov).slice(0, 60));
    p.set('CN', bezDiakritiky(u.prijemca).slice(0, 70));
    return 'https://payme.sk/?' + p.toString();
  }
  function kresliQR(canvas, text) {
    var q = window.qrcode(0, 'M');
    q.addData(text); q.make();
    var n = q.getModuleCount(), okraj = 3, s = 4, r, c;
    canvas.width = canvas.height = (n + okraj * 2) * s;
    var g = canvas.getContext('2d');
    g.fillStyle = '#fff'; g.fillRect(0, 0, canvas.width, canvas.height);
    g.fillStyle = '#111';
    for (r = 0; r < n; r++) for (c = 0; c < n; c++) if (q.isDark(r, c)) g.fillRect((c + okraj) * s, (r + okraj) * s, s, s);
  }

  // ——— stav ———
  var ucty = [], deck = [], nacitane = false, chybaNacitania = false;
  var moje = ls('zaplatil_moje') || [];                 // [{id, kluc}]
  var preskocene = new Set(ls('zaplatil_preskocene') || []);
  var zaplateneMnou = ls('zaplatil_zaplatene') || [];    // [{id, suma}]
  var videne = new Set(ls('zaplatil_videne') || []);
  var vid = ls('zaplatil_vid');
  if (!vid) { vid = nahodne(16); ls('zaplatil_vid', vid); }
  var odkazId = (location.hash.match(/^#u-([0-9a-f-]{36})$/) || [])[1] || null;
  var mojeData = [], slava = [];
  var instalacia = null;

  function jeMoj(id) { return moje.some(function (m) { return m.id === id; }); }
  function klucPre(id) { var m = moje.filter(function (x) { return x.id === id; })[0]; return m ? m.kluc : ''; }

  // ——— toast, oslava, hárok ———
  var toastT = null;
  function toast(text) {
    var t = $('#toast');
    t.textContent = text; t.hidden = false;
    clearTimeout(toastT);
    toastT = setTimeout(function () { t.hidden = true; }, 3600);
  }
  function oslava() {
    var o = $('#oslava'), i, b;
    o.textContent = '';
    for (i = 0; i < 28; i++) {
      b = document.createElement('i');
      b.style.left = (Math.random() * 100) + '%';
      b.style.animationDuration = (1.6 + Math.random() * 1.6) + 's';
      b.style.animationDelay = (Math.random() * 0.5) + 's';
      b.style.transform = 'rotate(' + (Math.random() * 360) + 'deg)';
      o.appendChild(b);
    }
    setTimeout(function () { o.textContent = ''; }, 4200);
  }

  var harokZavri = null, predtymFokus = null;
  function otvorHarok(deti, priZavreti) {
    var h = $('#harok');
    h.textContent = '';
    deti.forEach(function (d) { if (d) h.appendChild(d); });
    predtymFokus = document.activeElement;
    harokZavri = priZavreti || null;
    $('#zaves').hidden = false;
    h.scrollTop = 0;
    h.focus();
  }
  function zavriHarok(ticho) {
    if ($('#zaves').hidden) return;
    $('#zaves').hidden = true;
    var f = harokZavri; harokZavri = null;
    if (predtymFokus && predtymFokus.focus) { try { predtymFokus.focus(); } catch (e) {} }
    if (f && !ticho) f();
  }
  function potvrd(nadpis, text, ano) {
    return new Promise(function (res) {
      var b1 = el('button', { type: 'button', class: 'tl-hlavne', text: ano });
      var b2 = el('button', { type: 'button', class: 'tl-druhe', text: 'Nechať tak' });
      b1.onclick = function () { zavriHarok(true); res(true); };
      b2.onclick = function () { zavriHarok(true); res(false); };
      otvorHarok([el('h2', { id: 'harok-nadpis', text: nadpis }), el('p', { text: text }), b1, b2], function () { res(false); });
    });
  }
  function kopiruj(text, co) {
    var ok = function () { toast(co + ' je skopírované'); };
    var zle = function () { toast('Nepodarilo sa skopírovať. Označ si to ručne.'); };
    try { navigator.clipboard.writeText(text).then(ok, zle); } catch (e) { zle(); }
  }

  // ——— karta účtu ———
  function ciarovyKod(id) {
    var h = String(id).replace(/[^0-9a-f]/g, '') + '5a3c9e17b2d4', x = 0, casti = [], i, w;
    for (i = 0; i < 44; i++) {
      w = 1 + (parseInt(h[i % h.length], 16) % 4);
      casti.push((i % 2 ? 'transparent ' : '#1a1c1e ') + x + 'px ' + (x + w) + 'px');
      x += w;
    }
    return 'repeating-linear-gradient(90deg,' + casti.join(',') + ')';
  }
  function karta(u, i) {
    var k = el('article', { class: 'karta k' + i, 'data-id': u.id, 'aria-label': 'Účet: ' + u.nazov + ', ' + eur(u.suma) });
    var kat = KAT[u.kategoria] || 'Iné';
    var vpravo = u.demo ? kat : kat + ' · ' + pred(u.created_at);
    var deti = [
      el('div', { class: 'uc-hlava' }, [
        el('span', { text: (jeMoj(u.id) ? 'Tvoj účet č. ' : 'Účet č. ') + cisloUctu(u.id) }),
        el('span', { text: vpravo })
      ])
    ];
    if (u.foto) {
      var f = el('button', { type: 'button', class: 'uc-foto', 'aria-label': 'Zväčšiť fotku účtu' }, [
        el('img', { src: fotoUrl(u.foto), alt: '', loading: i ? 'lazy' : 'eager', draggable: 'false' })
      ]);
      deti.push(f);
    }
    deti.push(el('h2', { class: 'uc-nazov', text: u.nazov }));
    if (u.pribeh) deti.push(el('p', { class: 'uc-pribeh', text: u.pribeh }));
    if (!u.foto) deti.push(el('div', { class: 'uc-vypln' }, [u.demo ? el('span', { class: 'uc-ukazka', text: 'Ukážka' }) : null]));
    deti.push(el('hr', { class: 'uc-ciara' }));
    deti.push(el('dl', { class: 'uc-riadky' }, [
      el('div', { class: 'uc-riadok' }, [el('dt', { text: 'Príjemca' }), el('dd', { text: u.prijemca })]),
      el('div', { class: 'uc-riadok' }, [el('dt', { text: 'Nahral' }), el('dd', { text: u.meno || 'Anonym' })])
    ]));
    deti.push(el('hr', { class: 'uc-ciara' }));
    deti.push(el('div', { class: 'uc-spolu' }, [el('span', { text: 'SPOLU' }), el('b', { text: eur(u.suma) })]));
    var kod = el('div', { class: 'uc-kod' });
    kod.style.background = ciarovyKod(u.id);
    deti.push(kod);
    k.appendChild(el('div', { class: 'papier' + (u.foto ? '' : ' bez-foto') }, deti));
    if (i === 0) {
      k.appendChild(el('span', { class: 'peciatka ano', text: 'Zaplatím' }));
      k.appendChild(el('span', { class: 'peciatka nie', text: 'Nuda' }));
    }
    return k;
  }

  function postavDeck() {
    var d = ucty.filter(function (u) { return !preskocene.has(u.id); });
    if (odkazId) {
      var i = -1;
      d.forEach(function (u, j) { if (u.id === odkazId) i = j; });
      if (i > 0) d.unshift(d.splice(i, 1)[0]);
    }
    if (nacitane && !chybaNacitania && ucty.length === 0) d = DEMO.slice();
    deck = d;
  }

  function kresliStat(stat) {
    var s = $('#stat');
    if (chybaNacitania) { s.textContent = 'Bez spojenia'; return; }
    if (!stat) return;
    var c = stat.caka || 0, z = stat.zaplatene || 0;
    s.textContent = c + ' ' + sklonuj(c, 'účet čaká', 'účty čakajú', 'účtov čaká') +
      ' · zaplatené ' + z + (z ? ' (' + eur(stat.suma) + ')' : '');
  }

  function kresliDeck() {
    var box = $('#deck');
    box.textContent = '';
    var mame = deck.length > 0;
    $('#btn-nie').disabled = !mame;
    $('#btn-ano').disabled = !mame;
    $('#btn-nahlas').disabled = !mame || !!deck[0].demo;
    if (!mame) { box.appendChild(prazdno()); return; }
    for (var i = Math.min(2, deck.length - 1); i >= 0; i--) box.appendChild(karta(deck[i], i));
    pripojTah(box.querySelector('.k0'), deck[0]);
  }

  function prazdno() {
    var deti;
    if (!nacitane) {
      deti = [el('h2', { text: 'Hľadám účty…' })];
    } else if (chybaNacitania) {
      var znova = el('button', { type: 'button', class: 'tl-druhe', text: 'Skúsiť znova' });
      znova.onclick = nacitaj;
      deti = [el('h2', { text: 'Účty sa nenačítali' }), el('p', { text: 'Skontroluj internet a skús to ešte raz.' }), znova];
    } else {
      var a = el('button', { type: 'button', class: 'tl-druhe', text: 'Pozrieť preskočené znova' });
      a.onclick = function () { preskocene.clear(); ls('zaplatil_preskocene', []); postavDeck(); kresliDeck(); };
      var b = el('button', { type: 'button', class: 'tl-hlavne', text: 'Nahrať vlastný účet' });
      b.onclick = function () { ukaz('nahrat'); };
      deti = [el('h2', { text: 'To je všetko' }), el('p', { text: 'Všetky účty si už videl. Miliardári sa nudia ďalej.' }), b, a];
    }
    return el('div', { class: 'prazdno' }, deti);
  }

  // ——— swipe ———
  function poloz(k, dx, dy) {
    k.style.transform = 'translate(' + dx + 'px,' + (dy * 0.3) + 'px) rotate(' + (dx / 18) + 'deg)';
    var a = k.querySelector('.peciatka.ano'), n = k.querySelector('.peciatka.nie');
    if (a) a.style.opacity = Math.max(0, Math.min(1, dx / 90));
    if (n) n.style.opacity = Math.max(0, Math.min(1, -dx / 90));
  }
  function pripojTah(k, u) {
    var sx = 0, sy = 0, dx = 0, dy = 0, t0 = 0, ide = false, naFoto = false;
    k.addEventListener('pointerdown', function (e) {
      if (e.button) return;
      ide = true; sx = e.clientX; sy = e.clientY; dx = dy = 0; t0 = performance.now();
      naFoto = !!(e.target.closest && e.target.closest('.uc-foto'));
      try { k.setPointerCapture(e.pointerId); } catch (x) {}
      k.classList.add('tah');
    });
    k.addEventListener('pointermove', function (e) {
      if (!ide) return;
      dx = e.clientX - sx; dy = e.clientY - sy;
      poloz(k, dx, dy);
    });
    function koniec(e) {
      if (!ide) return;
      ide = false;
      k.classList.remove('tah');
      var v = dx / Math.max(1, performance.now() - t0);
      if (e.type === 'pointercancel') { poloz(k, 0, 0); return; }
      if (Math.abs(dx) < 8 && Math.abs(dy) < 8) {
        poloz(k, 0, 0);
        if (u.foto && naFoto) zvacsi(u);
        return;
      }
      if (dx > 90 || (v > 0.6 && dx > 30)) rozhodni('ano');
      else if (dx < -90 || (v < -0.6 && dx < -30)) rozhodni('nie');
      else poloz(k, 0, 0);
    }
    k.addEventListener('pointerup', koniec);
    k.addEventListener('pointercancel', koniec);
    // klávesnica: Enter na fotke ju zväčší
    var f = k.querySelector('.uc-foto');
    if (f) f.addEventListener('keydown', function (e) { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); zvacsi(u); } });
  }

  var zaneprazdneny = false;
  function rozhodni(co) {
    if (zaneprazdneny || !deck.length) return;
    var u = deck[0], k = $('#deck .k0');
    if (!k) return;
    if (co === 'ano' && u.demo) {
      poloz(k, 0, 0);
      toast('Toto je len ukážka. Skutočné účty pribudnú, keď ich niekto nahrá.');
      return;
    }
    zaneprazdneny = true;
    var smer = co === 'ano' ? 1 : -1;
    poloz(k, smer * (window.innerWidth + 200), 40);
    setTimeout(function () {
      zaneprazdneny = false;
      if (co === 'nie') {
        if (!u.demo) { preskocene.add(u.id); ls('zaplatil_preskocene', Array.from(preskocene).slice(-500)); }
        deck.shift();
        kresliDeck();
      } else {
        otvorPlatbu(u);
      }
    }, 240);
  }

  function zvacsi(u) {
    $('#lupa-img').src = fotoUrl(u.foto);
    $('#lupa').hidden = false;
    $('#lupa-zavri').focus();
  }

  // ——— platba ———
  function udaj(nazov, hodnota, kopia) {
    var b = el('button', { type: 'button', text: 'Kopírovať' });
    b.onclick = function () { kopiruj(kopia || hodnota, nazov); };
    return el('div', { class: 'udaj' }, [el('dt', { text: nazov }), el('dd', { text: hodnota }), b]);
  }
  function otvorPlatbu(u) {
    var link = paymeLink(u);
    var qr = el('canvas', { 'aria-label': 'QR kód s platobným odkazom' });
    try { kresliQR(qr, link); } catch (e) { qr = null; }
    var meno = el('input', { type: 'text', id: 'p-meno', maxlength: '30', placeholder: 'Anonymný miliardár', autocomplete: 'nickname' });
    meno.value = ls('zaplatil_meno') || '';
    var odkaz = el('input', { type: 'text', id: 'p-odkaz', maxlength: '140', placeholder: 'Nemáš za čo.', autocomplete: 'off' });
    var hotovo = el('button', { type: 'button', class: 'tl-hlavne', text: 'Zaplatil som' });
    var nie = el('button', { type: 'button', class: 'tl-druhe', text: 'Nakoniec nie' });
    var banka = el('a', { class: 'tl-tmave', href: link, target: '_blank', rel: 'noopener', text: 'Otvoriť v bankovej appke' });
    var riadky = [udaj('Príjemca', u.prijemca), udaj('IBAN', ibanPekny(u.iban), u.iban), udaj('Suma', eur(u.suma), Number(u.suma).toFixed(2))];
    if (u.vs) riadky.push(udaj('Variabilný symbol', u.vs));

    nie.onclick = function () { zavriHarok(); };
    hotovo.onclick = function () {
      hotovo.disabled = true; hotovo.textContent = 'Zapisujem…';
      var m = meno.value.trim();
      ls('zaplatil_meno', m);
      rpc('zaplatil_zaplat', { p_id: u.id, p_meno: m, p_odkaz: odkaz.value.trim() }).then(function () {
        zaplateneMnou.push({ id: u.id, suma: Number(u.suma) });
        ls('zaplatil_zaplatene', zaplateneMnou);
        odstranZDecku(u.id);
        zavriHarok(true);
        kresliDeck();
        oslava();
        toast('Zaplatené. Niekomu si práve zlepšil mesiac.');
        nacitaj(true);
      }).catch(function (e) {
        if (String(e.message).indexOf('uz_nie_je') >= 0) {
          odstranZDecku(u.id);
          zavriHarok(true); kresliDeck();
          toast('Tento účet už medzitým niekto zaplatil.');
        } else {
          hotovo.disabled = false; hotovo.textContent = 'Zaplatil som';
          toast('Nepodarilo sa to zapísať. Skús to ešte raz.');
        }
      });
    };

    otvorHarok([
      el('h2', { id: 'harok-nadpis', text: 'Platíš: ' + u.nazov }),
      el('p', { text: eur(u.suma) + ' pre ' + u.prijemca.replace(/\.+$/, '') + '. Peniaze idú z tvojej banky rovno príjemcovi.' }),
      banka,
      qr ? el('div', { class: 'qr' }, [qr, el('p', { text: 'Si na počítači? Naskenuj kód mobilom a otvorí sa ti banka s vyplnenou platbou.' })]) : null,
      el('dl', { class: 'udaje' }, riadky),
      el('p', { class: 'drobne', text: 'Appka platbu nevidí ani neoveruje. Skontroluj si, komu a koľko posielaš.' }),
      el('hr', { class: 'oddelovac' }),
      el('div', { class: 'pole' }, [el('label', { class: 'menovka', for: 'p-meno' }, ['Tvoje meno ', el('i', { text: 'nepovinné' })]), meno]),
      el('div', { class: 'pole' }, [el('label', { class: 'menovka', for: 'p-odkaz' }, ['Odkaz pre majiteľa účtu ', el('i', { text: 'nepovinné' })]), odkaz]),
      hotovo, nie
    ], function () { kresliDeck(); });
  }
  function odstranZDecku(id) {
    deck = deck.filter(function (x) { return x.id !== id; });
    ucty = ucty.filter(function (x) { return x.id !== id; });
  }

  // ——— načítanie ———
  function nacitaj(ticho) {
    if (!ticho) { nacitane = false; chybaNacitania = false; kresliDeck(); }
    return rpc('zaplatil_zoznam').then(function (d) {
      nacitane = true; chybaNacitania = false;
      ucty = d.ucty || []; slava = d.slava || [];
      kresliStat(d.stat);
      if (!ticho) { postavDeck(); kresliDeck(); }
      kresliSlavu();
      if (odkazId && !ticho) skontrolujOdkaz();
    }).catch(function () {
      if (ticho) return;
      nacitane = true; chybaNacitania = true;
      deck = []; kresliStat(); kresliDeck();
    });
  }
  function skontrolujOdkaz() {
    if (ucty.some(function (u) { return u.id === odkazId; })) return;
    rpc('zaplatil_moje', { p_ids: [odkazId] }).then(function (r) {
      var u = r && r[0];
      if (!u) toast('Tento účet už neexistuje.');
      else if (u.stav === 'zaplateny') toast('Tento účet už niekto zaplatil.');
      else if (u.stav === 'caka') { ucty.unshift(u); preskocene.delete(u.id); postavDeck(); kresliDeck(); }
    }).catch(function () {});
  }

  // ——— moje účty ———
  function nacitajMoje() {
    if (!moje.length) { mojeData = []; kresliMoje(); return Promise.resolve(); }
    return rpc('zaplatil_moje', { p_ids: moje.map(function (m) { return m.id; }) }).then(function (r) {
      mojeData = r || [];
      var zive = new Set(mojeData.map(function (u) { return u.id; }));
      moje = moje.filter(function (m) { return zive.has(m.id); });
      ls('zaplatil_moje', moje);
      var nove = mojeData.filter(function (u) { return u.stav === 'zaplateny' && !videne.has(u.id); });
      if (nove.length) {
        nove.forEach(function (u) { videne.add(u.id); });
        ls('zaplatil_videne', Array.from(videne));
        $('#moje-bodka').hidden = !$('#v-moje').hidden;
        oslava();
        toast('Niekto ti zaplatil účet: ' + nove[0].nazov);
      }
      kresliMoje();
    }).catch(function () { kresliMoje(true); });
  }
  function kresliMoje(chyba) {
    var z = $('#moje-zoznam');
    z.textContent = '';
    if (chyba) { z.appendChild(el('p', { class: 'nic', text: 'Tvoje účty sa nepodarilo načítať. Skontroluj internet.' })); return; }
    if (!mojeData.length) {
      z.appendChild(el('p', { class: 'nic', text: 'Zatiaľ si nenahral žiadny účet. Účty si appka pamätá len v tomto zariadení.' }));
    }
    mojeData.forEach(function (u) {
      var stavText = u.stav === 'zaplateny' ? 'Zaplatené' : (u.stav === 'skryty' ? 'Skryté po nahláseniach' : 'Čaká na miliardára');
      var akcie = [];
      if (u.stav === 'caka') {
        var zd = el('button', { type: 'button', text: 'Zdieľať' });
        zd.onclick = function () { zdielaj(u); };
        akcie.push(zd);
      }
      if (u.stav === 'zaplateny') {
        var vr = el('button', { type: 'button', text: 'Peniaze neprišli, vrátiť späť' });
        vr.onclick = function () {
          potvrd('Vrátiť účet medzi čakajúce?', 'Urob to, len ak platba naozaj neprišla. Účet sa znova ukáže ostatným.', 'Vrátiť späť').then(function (ok) {
            if (!ok) return;
            rpc('zaplatil_vrat', { p_id: u.id, p_kluc: klucPre(u.id) }).then(function () { toast('Účet znova čaká.'); nacitajMoje(); nacitaj(true); })
              .catch(function () { toast('Nepodarilo sa to. Skús znova.'); });
          });
        };
        akcie.push(vr);
      }
      var zm = el('button', { type: 'button', text: 'Zmazať' });
      zm.onclick = function () {
        potvrd('Zmazať účet?', '„' + u.nazov + '“ zmizne z appky natrvalo.', 'Zmazať').then(function (ok) {
          if (!ok) return;
          rpc('zaplatil_zmaz', { p_id: u.id, p_kluc: klucPre(u.id) }).then(function () {
            moje = moje.filter(function (m) { return m.id !== u.id; });
            ls('zaplatil_moje', moje);
            odstranZDecku(u.id); kresliDeck();
            toast('Účet je zmazaný.'); nacitajMoje(); nacitaj(true);
          }).catch(function () { toast('Nepodarilo sa to zmazať. Skús znova.'); });
        });
      };
      akcie.push(zm);
      var deti = [
        el('div', { class: 'polozka-hore' }, [el('b', { text: u.nazov }), el('span', { text: eur(u.suma) })]),
        el('span', { class: 'stav ' + u.stav, text: stavText })
      ];
      if (u.stav === 'zaplateny') {
        deti.push(el('p', { text: 'Zaplatil: ' + (u.zaplatil_meno || 'Anonymný miliardár') + (u.zaplatil_odkaz ? ' — „' + u.zaplatil_odkaz + '“' : '') }));
      }
      deti.push(el('div', { class: 'polozka-akcie' }, akcie));
      z.appendChild(el('div', { class: 'polozka' }, deti));
    });
    var n = zaplateneMnou.length, s = zaplateneMnou.reduce(function (a, x) { return a + (x.suma || 0); }, 0);
    $('#stedrost').textContent = n
      ? 'Zaplatil si ' + n + ' ' + sklonuj(n, 'účet', 'účty', 'účtov') + ' za ' + eur(s) + '. Skoro miliardár.'
      : 'Zatiaľ si nezaplatil nič. Swipni doprava na účet, ktorý ťa chytí za srdce.';
  }
  function kresliSlavu() {
    var z = $('#slava');
    z.textContent = '';
    if (!slava.length) { z.appendChild(el('p', { class: 'nic', text: 'Zatiaľ nikto. Prvý miliardár sa ešte len nudí.' })); return; }
    slava.forEach(function (s) {
      var deti = [el('div', { class: 'polozka-hore' }, [el('b', { text: s.nazov }), el('span', { text: eur(s.suma) })]),
        el('p', { text: 'Zaplatil: ' + (s.kto || 'Anonymný miliardár') + ' · ' + pred(s.kedy) })];
      if (s.odkaz) deti.push(el('p', { text: '„' + s.odkaz + '“' }));
      z.appendChild(el('div', { class: 'polozka' }, deti));
    });
  }

  function zdielaj(u) {
    var url = SITE + '#u-' + u.id;
    var text = 'Zaplať mi účet: ' + u.nazov + ' (' + eur(u.suma) + ')';
    if (navigator.share) {
      navigator.share({ title: 'si/zaplatil', text: text, url: url }).catch(function () {});
    } else {
      kopiruj(url, 'Odkaz');
    }
  }

  // ——— nahrávanie účtu ———
  var foto = null; // { base: canvas, pruhy: [[x,y,w,h] v 0..1] }
  var kategoria = 'ine';
  var poslednyNahraty = null;

  function kresliKategorie() {
    var box = $('#kat');
    KATEGORIE.forEach(function (k) {
      var b = el('button', { type: 'button', class: 'cip', role: 'radio', 'aria-checked': k[0] === kategoria ? 'true' : 'false', 'data-kat': k[0], text: k[1] });
      b.onclick = function () {
        kategoria = k[0];
        Array.prototype.forEach.call(box.children, function (c) { c.setAttribute('aria-checked', c === b ? 'true' : 'false'); });
      };
      box.appendChild(b);
    });
  }

  function nacitajFoto(file) {
    if (!file) return;
    var url = URL.createObjectURL(file), img = new Image();
    img.onload = function () {
      var max = 1400, m = Math.min(1, max / Math.max(img.naturalWidth, img.naturalHeight));
      var c = document.createElement('canvas');
      c.width = Math.max(1, Math.round(img.naturalWidth * m));
      c.height = Math.max(1, Math.round(img.naturalHeight * m));
      c.getContext('2d').drawImage(img, 0, 0, c.width, c.height);
      URL.revokeObjectURL(url);
      foto = { base: c, pruhy: [] };
      $('#foto-vyber').hidden = true;
      $('#foto-editor').hidden = false;
      kresliFoto();
    };
    img.onerror = function () { URL.revokeObjectURL(url); toast('Túto fotku neviem otvoriť. Skús inú.'); };
    img.src = url;
  }
  function kresliFoto(rozrobeny) {
    if (!foto) return;
    var cv = $('#foto-canvas'), sirka = Math.min($('#foto-zona').clientWidth || 320, 428), vyska = sirka * foto.base.height / foto.base.width;
    if (vyska > 380) { sirka = sirka * 380 / vyska; vyska = 380; }
    var dpr = Math.min(2, window.devicePixelRatio || 1);
    cv.style.width = Math.round(sirka) + 'px'; cv.style.height = Math.round(vyska) + 'px';
    cv.width = Math.round(sirka * dpr); cv.height = Math.round(vyska * dpr);
    var g = cv.getContext('2d');
    g.drawImage(foto.base, 0, 0, cv.width, cv.height);
    g.fillStyle = '#000';
    foto.pruhy.concat(rozrobeny ? [rozrobeny] : []).forEach(function (p) { g.fillRect(p[0] * cv.width, p[1] * cv.height, p[2] * cv.width, p[3] * cv.height); });
  }
  function pripojZakryvanie() {
    var cv = $('#foto-canvas'), zac = null;
    function bod(e) { var r = cv.getBoundingClientRect(); return [Math.max(0, Math.min(1, (e.clientX - r.left) / r.width)), Math.max(0, Math.min(1, (e.clientY - r.top) / r.height))]; }
    function pruh(a, b) { return [Math.min(a[0], b[0]), Math.min(a[1], b[1]), Math.abs(a[0] - b[0]), Math.abs(a[1] - b[1])]; }
    cv.addEventListener('pointerdown', function (e) { if (!foto) return; zac = bod(e); try { cv.setPointerCapture(e.pointerId); } catch (x) {} e.preventDefault(); });
    cv.addEventListener('pointermove', function (e) { if (zac) kresliFoto(pruh(zac, bod(e))); });
    function koniec(e) {
      if (!zac) return;
      var p = pruh(zac, bod(e)); zac = null;
      if (e.type === 'pointerup' && p[2] > 0.015 && p[3] > 0.008) foto.pruhy.push(p);
      kresliFoto();
    }
    cv.addEventListener('pointerup', koniec);
    cv.addEventListener('pointercancel', koniec);
    $('#foto-spat').onclick = function () { if (foto && foto.pruhy.length) { foto.pruhy.pop(); kresliFoto(); } else toast('Nič nie je zakryté.'); };
    $('#foto-prec').onclick = zrusFoto;
  }
  function zrusFoto() {
    foto = null;
    $('#f-foto').value = '';
    $('#foto-editor').hidden = true;
    $('#foto-vyber').hidden = false;
  }
  function naBlob(canvas, q) { return new Promise(function (res) { canvas.toBlob(res, 'image/jpeg', q); }); }
  function fotoBlob() {
    // zlož fotku so zakrytými miestami a stlač ju pod limit úložiska (450 kB)
    var c = document.createElement('canvas');
    c.width = foto.base.width; c.height = foto.base.height;
    var g = c.getContext('2d');
    g.drawImage(foto.base, 0, 0);
    g.fillStyle = '#000';
    foto.pruhy.forEach(function (p) { g.fillRect(p[0] * c.width, p[1] * c.height, p[2] * c.width, p[3] * c.height); });
    var q = 0.78, kol = 0;
    function skus() {
      return naBlob(c, q).then(function (b) {
        if (!b) throw new Error('foto');
        if (b.size <= 430000 || kol > 9) { if (b.size > 445000) throw new Error('foto'); return b; }
        kol++;
        if (q > 0.5) q -= 0.1;
        else {
          var m = document.createElement('canvas');
          m.width = Math.round(c.width * 0.8); m.height = Math.round(c.height * 0.8);
          m.getContext('2d').drawImage(c, 0, 0, m.width, m.height);
          c = m;
        }
        return skus();
      });
    }
    return skus();
  }
  function nahrajFoto(blob) {
    var meno = 'u/' + nahodne(20) + '.jpg';
    return fetch(URL_ + '/storage/v1/object/zaplatil/' + meno, {
      method: 'POST',
      headers: { apikey: KEY, Authorization: 'Bearer ' + KEY, 'Content-Type': 'image/jpeg', 'cache-control': 'max-age=31536000' },
      body: blob
    }).then(function (r) { if (!r.ok) throw new Error('foto'); return meno; }, function () { throw new Error('foto'); });
  }

  function chybaForm(text, pole) {
    var c = $('#form-chyba');
    c.textContent = text; c.hidden = !text;
    if (text && pole) { pole.focus(); }
    if (text) c.scrollIntoView({ block: 'nearest' });
  }
  function odosli(e) {
    e.preventDefault();
    var nazov = $('#f-nazov').value.trim(), sumaRaw = $('#f-suma').value.replace(/\s|€/g, '').replace(',', '.');
    var suma = /^\d+(\.\d{1,2})?$/.test(sumaRaw) ? parseFloat(sumaRaw) : NaN;
    var prijemca = $('#f-prijemca').value.trim(), iban = ibanCisty($('#f-iban').value), vs = $('#f-vs').value.replace(/\D/g, '');
    if (nazov.length < 2) return chybaForm('Napíš, čo je to za účet.', $('#f-nazov'));
    if (!(suma >= 1 && suma <= 100000)) return chybaForm('Zadaj sumu od 1 do 100 000 €, napríklad 84,50.', $('#f-suma'));
    if (prijemca.length < 2) return chybaForm('Doplň názov príjemcu platby.', $('#f-prijemca'));
    if (!ibanOk(iban)) return chybaForm('Tento IBAN nesedí. Skontroluj ho podľa účtu, číslo po čísle.', $('#f-iban'));
    if (!$('#f-suhlas').checked) return chybaForm('Zaškrtni, že rozumieš, že účet bude verejný.', $('#f-suhlas'));
    chybaForm('');
    var btn = $('#btn-odoslat');
    btn.disabled = true; btn.textContent = 'Nahrávam…';
    var kluc = nahodne(32);
    var krok = foto ? fotoBlob().then(nahrajFoto) : Promise.resolve(null);
    krok.then(function (fotoCesta) {
      return rpc('zaplatil_pridaj', {
        p: { nazov: nazov, suma: suma.toFixed(2), kategoria: kategoria, pribeh: $('#f-pribeh').value.trim(), meno: $('#f-meno').value.trim(), prijemca: prijemca, iban: iban, vs: vs, foto: fotoCesta || '' },
        p_kluc: kluc
      });
    }).then(function (out) {
      moje.unshift({ id: out.id, kluc: kluc });
      ls('zaplatil_moje', moje);
      poslednyNahraty = { id: out.id, nazov: nazov, suma: suma };
      $('#form').reset(); zrusFoto();
      $('#form').hidden = true; $('#hotovo').hidden = false;
      $('#v-nahrat').scrollTop = 0;
      oslava();
      nacitaj();
    }).catch(function (err) {
      var m = String(err && err.message);
      if (m.indexOf('foto') >= 0) chybaForm('Fotku sa nepodarilo nahrať. Skús to znova, alebo ju odstráň a nahraj účet bez nej.');
      else if (m.indexOf('prilis_vela') >= 0) chybaForm('Práve je tu nával nových účtov. Skús to o hodinu.');
      else if (m.indexOf('plno') >= 0) chybaForm('Čaká tu už priveľa účtov. Skús to neskôr.');
      else chybaForm('Nepodarilo sa to uložiť. Skontroluj internet a skús to znova.');
    }).finally(function () { btn.disabled = false; btn.textContent = 'Nahrať účet'; });
  }

  // ——— prepínanie častí ———
  function ukaz(co) {
    ['platit', 'nahrat', 'moje'].forEach(function (v) {
      $('#v-' + v).hidden = v !== co;
      $('#tab-' + v).setAttribute('aria-selected', v === co ? 'true' : 'false');
    });
    if (co === 'moje') { $('#moje-bodka').hidden = true; nacitajMoje(); }
    if (co === 'nahrat' && foto) kresliFoto();
  }

  function otvorInfo() {
    var deti = [
      el('h2', { id: 'harok-nadpis', text: 'Ako to funguje' }),
      el('ol', null, [
        el('li', { text: 'Nahráš účet: čo to je, koľko stojí a kam má platba prísť.' }),
        el('li', { text: 'Ostatní ho uvidia v kôpke. Doľava je nuda, doprava znamená zaplatím.' }),
        el('li', { text: 'Kto swipne doprava, zaplatí cez vlastnú banku priamo príjemcovi a potvrdí to.' })
      ]),
      el('p', { text: 'Appka peniaze nedrží, platby neoveruje a nič nesľubuje. Miliardárom môže byť ktokoľvek, aj ty. Pri platení si vždy skontroluj príjemcu.' }),
      el('p', { text: 'Účet, ktorý sem nepatrí, nahlás. Po troch nahláseniach sa skryje.' })
    ];
    if (instalacia) {
      var ib = el('button', { type: 'button', class: 'tl-hlavne', text: 'Nainštalovať appku' });
      ib.onclick = function () { instalacia.prompt(); instalacia = null; zavriHarok(true); };
      deti.push(ib);
    } else if (!window.matchMedia('(display-mode: standalone)').matches && !navigator.standalone) {
      deti.push(el('p', { text: 'Chceš ju mať ako appku? V iPhone ťukni na Zdieľať a potom Pridať na plochu. V Androide v ponuke prehliadača zvoľ Nainštalovať.' }));
    }
    var zav = el('button', { type: 'button', class: 'tl-druhe', text: 'Rozumiem' });
    zav.onclick = function () { zavriHarok(true); };
    deti.push(zav);
    deti.push(el('p', { class: 'drobne' }, [
      'Nápad z reelu od @lindsay_kayy. Spravil Robert Ďurica. ',
      el('a', { href: '/ochrana-udajov/', text: 'Ochrana údajov' }), ' · ',
      el('a', { href: '/', text: 'durica.si' })
    ]));
    otvorHarok(deti);
  }

  function nahlas() {
    var u = deck[0];
    if (!u || u.demo) return;
    potvrd('Nahlásiť tento účet?', 'Nahlás účet, ktorý vyzerá ako podvod, je urážlivý alebo ukazuje cudzie osobné údaje. Tebe sa už neukáže.', 'Nahlásiť').then(function (ok) {
      if (!ok) return;
      rpc('zaplatil_nahlas', { p_id: u.id, p_kto: vid }).catch(function () {});
      preskocene.add(u.id); ls('zaplatil_preskocene', Array.from(preskocene).slice(-500));
      deck.shift(); kresliDeck();
      toast('Ďakujem, účet je nahlásený.');
    });
  }

  // ——— štart ———
  function start() {
    kresliKategorie();
    pripojZakryvanie();
    kresliDeck();

    Array.prototype.forEach.call(document.querySelectorAll('.prepinac button'), function (b) {
      b.addEventListener('click', function () { ukaz(b.getAttribute('data-view')); });
    });
    $('#btn-nie').onclick = function () { rozhodni('nie'); };
    $('#btn-ano').onclick = function () { rozhodni('ano'); };
    $('#btn-nahlas').onclick = nahlas;
    $('#btn-info').onclick = otvorInfo;
    $('#form').addEventListener('submit', odosli);
    $('#f-foto').addEventListener('change', function (e) { nacitajFoto(e.target.files && e.target.files[0]); });
    $('#f-iban').addEventListener('blur', function (e) { if (e.target.value.trim()) e.target.value = ibanPekny(e.target.value); });
    $('#btn-zdielat').onclick = function () { if (poslednyNahraty) zdielaj(poslednyNahraty); };
    $('#btn-dalsi').onclick = function () { $('#hotovo').hidden = true; $('#form').hidden = false; };
    $('#zaves').addEventListener('click', function (e) { if (e.target === e.currentTarget) zavriHarok(); });
    $('#lupa').addEventListener('click', function () { $('#lupa').hidden = true; });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') { if (!$('#lupa').hidden) $('#lupa').hidden = true; else zavriHarok(); return; }
      if (!$('#zaves').hidden || $('#v-platit').hidden || /INPUT|TEXTAREA/.test(e.target.tagName)) return;
      if (e.key === 'ArrowLeft') rozhodni('nie');
      if (e.key === 'ArrowRight') rozhodni('ano');
    });
    window.addEventListener('resize', function () { if (foto && !$('#v-nahrat').hidden) kresliFoto(); });
    window.addEventListener('beforeinstallprompt', function (e) { e.preventDefault(); instalacia = e; });
    document.addEventListener('visibilitychange', function () { if (!document.hidden && nacitane && moje.length) nacitajMoje(); });

    nacitaj().then(function () { if (moje.length) nacitajMoje(); else kresliMoje(); });

    if ('serviceWorker' in navigator && location.protocol === 'https:') {
      navigator.serviceWorker.register('sw.js').catch(function () {});
    }
  }
  start();
})();
