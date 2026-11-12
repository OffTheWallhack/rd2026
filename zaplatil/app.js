/* si/zaplatil — nahraj účet, znudený miliardár swipne doprava a zaplatí ho.
   Dáta: Supabase (funkcie zaplatil_*), bez SDK, cez fetch. Súbory: bucket "zaplatil".
   Peniaze appka nedrží: platca platí cez svoju banku, nahrá doklad, majiteľ účtu potvrdí.
   Profil = tajný kľúč v zariadení (localStorage), na serveri je len jeho hash. */
(function () {
  'use strict';

  var URL_ = 'https://znsrokpaoczljisaoulu.supabase.co';
  var KEY = 'sb_publishable_9bRi6q6rnTTr5_Rszk5IiQ_MBBoti45';
  var SITE = 'https://durica.si/zaplatil/';
  var BASE = new URL('./', location.href).href;
  var KURZ = 24.5;               // orientačný kurz EUR → CZK, rovnaký ako v databáze
  var MAX_SUBOR = 3000000;
  var KAT_KLUCE = ['byvanie', 'energie', 'jedlo', 'auto', 'telefon', 'zdravie', 'skola', 'zabava', 'ine'];
  var KAT_FARBY = {
    byvanie: ['#ff8a5c', '#ff2d78'], energie: ['#ffd23f', '#ff6a00'], jedlo: ['#4ee59a', '#00a6a6'],
    auto: ['#4fb6ff', '#4b3bff'], telefon: ['#c06bff', '#ff4fc3'], zdravie: ['#ff6b8b', '#ff9f5a'],
    skola: ['#5ce1ff', '#2f6bff'], zabava: ['#ff4fc3', '#6b4bff'], ine: ['#8f9bb3', '#4a5368']
  };

  // ——— jazyk ———
  var lang = ls('zaplatil_lang') || (/^cs\b|^cz\b/i.test(navigator.language || '') ? 'cz' : 'sk');
  function t(k, v) {
    var s = ZT[lang][k];
    if (s == null) s = ZT.sk[k];
    if (s == null) return k;
    if (v && typeof s === 'string') s = s.replace(/\{(\w+)\}/g, function (_, x) { return v[x] != null ? v[x] : ''; });
    return s;
  }
  function kat(k) { return (ZT.kategorie[lang] || ZT.kategorie.sk)[k] || ZT.kategorie.sk.ine; }

  // ——— drobné pomôcky ———
  function $(s, r) { return (r || document).querySelector(s); }
  function el(tag, attrs, kids) {
    var e = document.createElement(tag), k;
    if (attrs) for (k in attrs) {
      if (attrs[k] == null || attrs[k] === false) continue;
      if (k === 'class') e.className = attrs[k];
      else if (k === 'text') e.textContent = attrs[k];
      else if (k === 'style') e.style.cssText = attrs[k];
      else if (k.slice(0, 2) === 'on') e.addEventListener(k.slice(2), attrs[k]);
      else e.setAttribute(k, attrs[k] === true ? '' : attrs[k]);
    }
    (kids || []).forEach(function (c) { if (c != null && c !== false) e.appendChild(typeof c === 'string' ? document.createTextNode(c) : c); });
    return e;
  }
  function ls(k, v) {
    try {
      if (v === undefined) { var raw = localStorage.getItem(k); return raw ? JSON.parse(raw) : null; }
      if (v === null) localStorage.removeItem(k); else localStorage.setItem(k, JSON.stringify(v));
    } catch (e) {}
    return null;
  }
  function nahodne(n) {
    var abc = 'abcdefghijklmnopqrstuvwxyz0123456789', a = new Uint8Array(n), s = '', i;
    crypto.getRandomValues(a);
    for (i = 0; i < n; i++) s += abc[a[i] % 36];
    return s;
  }
  function locale() { return lang === 'cz' ? 'cs-CZ' : 'sk-SK'; }
  function pen(s, mena) {
    s = Number(s) || 0;
    var cele = mena === 'CZK' && Math.round(s) === s;
    return new Intl.NumberFormat(locale(), { style: 'currency', currency: mena || 'EUR', currencyDisplay: 'narrowSymbol', minimumFractionDigits: cele ? 0 : 2, maximumFractionDigits: cele ? 0 : 2 }).format(s);
  }
  function priblizne(s, mena) {
    if (lang === 'cz' && mena === 'EUR') return '≈ ' + pen(Math.round(s * KURZ), 'CZK');
    if (lang === 'sk' && mena === 'CZK') return '≈ ' + pen(Math.round(s / KURZ * 100) / 100, 'EUR');
    return '';
  }
  function domaca(eur) { return lang === 'cz' ? pen(Math.round(eur * KURZ), 'CZK') : pen(eur, 'EUR'); }
  function sklonuj(n, a, b, c) { return n === 1 ? a : (n >= 2 && n <= 4 ? b : c); }
  function pred(ts) {
    var s = Math.max(0, (Date.now() - new Date(ts).getTime()) / 1000);
    if (s < 90) return t('pred_teraz');
    if (s < 3600) return t('pred_min', { n: Math.round(s / 60) });
    if (s < 86400) return t('pred_h', { n: Math.round(s / 3600) });
    return t('pred_d', { n: Math.round(s / 86400) });
  }
  function bezDiakritiky(s) { return String(s || '').normalize('NFD').replace(/[̀-ͯ]/g, '').replace(/[^\x20-\x7e]/g, ''); }
  function cisloUctu(id) { return ('0000' + (parseInt(String(id).replace(/[^0-9a-f]/g, '').slice(0, 6) || '1', 16) % 10000)).slice(-4); }
  function subUrl(path) { return URL_ + '/storage/v1/object/public/zaplatil/' + path; }
  function inicialy(m) { return String(m || '?').trim().split(/\s+/).slice(0, 2).map(function (x) { return x[0]; }).join('').toUpperCase(); }
  function hashFarba(s) { var h = 0, i; s = String(s || ''); for (i = 0; i < s.length; i++) h = (h * 31 + s.charCodeAt(i)) | 0; return Math.abs(h) % 360; }

  // ——— IBAN a čísla účtov (SK aj CZ) ———
  function ibanCisty(s) { return String(s || '').replace(/\s/g, '').toUpperCase(); }
  function ibanPekny(s) { return ibanCisty(s).replace(/(.{4})/g, '$1 ').trim(); }
  function mod97(str) {
    var m = 0, i, j, v;
    for (i = 0; i < str.length; i++) {
      v = str[i] >= 'A' ? String(str.charCodeAt(i) - 55) : str[i];
      for (j = 0; j < v.length; j++) m = (m * 10 + Number(v[j])) % 97;
    }
    return m;
  }
  function ibanOk(s) {
    s = ibanCisty(s);
    if (!/^[A-Z]{2}\d{2}[A-Z0-9]{11,30}$/.test(s)) return false;
    if ((s.slice(0, 2) === 'SK' || s.slice(0, 2) === 'CZ') && s.length !== 24) return false;
    return mod97(s.slice(4) + s.slice(0, 4)) === 1;
  }
  function pad(s, n) { s = String(s || ''); while (s.length < n) s = '0' + s; return s; }
  // "19-123457/0800" → IBAN. Krajinu berieme podľa meny (koruny = CZ, eurá = SK).
  function naIban(vstup, mena) {
    var s = String(vstup || '').replace(/\s/g, '');
    if (/^[A-Za-z]{2}/.test(s)) return ibanCisty(s);
    var m = s.match(/^(?:(\d{1,6})-)?(\d{2,10})\/(\d{4})$/);
    if (!m) return ibanCisty(s);
    var kraj = mena === 'CZK' ? 'CZ' : 'SK';
    var bban = m[3] + pad(m[1], 6) + pad(m[2], 10);
    var kontrola = 98 - mod97(bban + kraj + '00');
    return kraj + pad(kontrola, 2) + bban;
  }
  function naDomace(iban) {
    iban = ibanCisty(iban);
    if (!/^(CZ|SK)\d{22}$/.test(iban)) return '';
    var banka = iban.slice(4, 8), pre = iban.slice(8, 14).replace(/^0+/, ''), cis = iban.slice(14).replace(/^0+/, '');
    return (pre ? pre + '-' : '') + cis + '/' + banka;
  }

  // ——— tituly ———
  function titulIndex(eur) {
    var T = ZT.tituly, i, idx = 0;
    if (!(eur > 0)) return 0;
    for (i = 1; i < T.length; i++) if (eur + 1e-9 >= T[i][0]) idx = i;
    return Math.max(1, idx);
  }
  function titul(eur) { var r = ZT.tituly[titulIndex(eur)]; return lang === 'cz' ? r[2] : r[1]; }

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
      return r.json().catch(function () { return {}; }).then(function (j) { throw new Error(j.message || ('http_' + r.status)); });
    }).finally(function () { clearTimeout(tm); });
  }
  function nahrajSubor(prefix, blob, ext) {
    var meno = prefix + '/' + nahodne(24) + '.' + ext;
    return fetch(URL_ + '/storage/v1/object/zaplatil/' + meno, {
      method: 'POST',
      headers: { apikey: KEY, Authorization: 'Bearer ' + KEY, 'Content-Type': ext === 'pdf' ? 'application/pdf' : 'image/jpeg', 'cache-control': 'max-age=31536000' },
      body: blob
    }).then(function (r) { if (!r.ok) throw new Error('subor'); return meno; }, function () { throw new Error('subor'); });
  }
  function chybaKod(e) { return String((e && e.message) || ''); }

  // ——— platobné reťazce ———
  function paymeLink(u) {
    var p = new URLSearchParams();
    p.set('V', '1'); p.set('IBAN', u.iban); p.set('AM', Number(u.suma).toFixed(2)); p.set('CC', 'EUR');
    if (u.vs) p.set('PI', '/VS' + u.vs + '/SS/KS');
    p.set('MSG', bezDiakritiky(u.nazov).slice(0, 60));
    p.set('CN', bezDiakritiky(u.prijemca).slice(0, 70));
    return 'https://payme.sk/?' + p.toString();
  }
  function spayd(u) {
    var c = function (s) { return bezDiakritiky(s).replace(/\*/g, ' '); };
    return 'SPD*1.0*ACC:' + u.iban + '*AM:' + Number(u.suma).toFixed(2) + '*CC:' + u.mena +
      (u.vs ? '*X-VS:' + u.vs : '') + '*MSG:' + c(u.nazov).slice(0, 60) + '*RN:' + c(u.prijemca).slice(0, 35);
  }
  function qrText(u) { return u.mena === 'CZK' ? spayd(u) : ((window.ZQR && ZQR.bysq(u)) || paymeLink(u)); }
  function kresliQR(canvas, text) {
    var q = window.qrcode(0, 'M');
    q.addData(text); q.make();
    var n = q.getModuleCount(), okraj = 4, s = 6, r, c;
    canvas.width = canvas.height = (n + okraj * 2) * s;
    var g = canvas.getContext('2d');
    g.fillStyle = '#fff'; g.fillRect(0, 0, canvas.width, canvas.height);
    g.fillStyle = '#111';
    for (r = 0; r < n; r++) for (c = 0; c < n; c++) if (q.isDark(r, c)) g.fillRect((c + okraj) * s, (r + okraj) * s, s, s);
  }

  // ——— stav ———
  var kluc = ls('zaplatil_kluc');
  var ja = ls('zaplatil_ja');           // posledný známy profil (na rýchly štart)
  var ucty = [], deck = [], nacitane = false, chybaNacitania = false;
  var stat = null, slava = [], rebricek = [];
  var mojeData = { moje: [], platim: [], oznamy: [] };
  var predoslyStav = {};               // id účtu → stav (na upozornenia)
  var preskocene = new Set(ls('zaplatil_preskocene') || []);
  var vid = ls('zaplatil_vid');
  if (!vid) { vid = nahodne(16); ls('zaplatil_vid', vid); }
  var odkazId = null;
  var instalacia = null;
  var aktivnyTab = 'platit';

  (function hash() {
    var h = location.hash;
    var mk = h.match(/^#k=([a-z0-9]{24,64})$/);
    if (mk) { kluc = mk[1]; ls('zaplatil_kluc', kluc); ja = null; ls('zaplatil_ja', null); history.replaceState(null, '', location.pathname); }
    var mu = h.match(/^#u-([0-9a-f-]{36})$/);
    if (mu) odkazId = mu[1];
  })();

  // ——— toast, oslava, hárky ———
  var toastT = null;
  function toast(text) {
    var tt = $('#toast');
    tt.textContent = text; tt.hidden = false;
    tt.classList.remove('ide'); void tt.offsetWidth; tt.classList.add('ide');
    clearTimeout(toastT);
    toastT = setTimeout(function () { tt.hidden = true; }, 3800);
  }
  function oslava() {
    var o = $('#oslava'), i, b;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    o.textContent = '';
    for (i = 0; i < 34; i++) {
      b = document.createElement('i');
      b.textContent = i % 5 === 0 ? '€' : (i % 7 === 0 ? 'Kč' : '');
      b.style.left = (Math.random() * 100) + '%';
      b.style.animationDuration = (1.8 + Math.random() * 1.6) + 's';
      b.style.animationDelay = (Math.random() * 0.5) + 's';
      b.style.setProperty('--r', (Math.random() * 720 - 360) + 'deg');
      o.appendChild(b);
    }
    setTimeout(function () { o.textContent = ''; }, 4400);
  }

  var harokZavri = null, predtymFokus = null;
  function otvorHarok(deti, priZavreti, trieda) {
    var h = $('#harok');
    h.className = 'harok sklo' + (trieda ? ' ' + trieda : '');
    h.textContent = '';
    h.appendChild(el('div', { class: 'uchytka', 'aria-hidden': 'true' }));
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
  function potvrd(nadpis, text, ano, nebezpecne) {
    return new Promise(function (res) {
      var b1 = el('button', { type: 'button', class: nebezpecne ? 'tl tl-cervene' : 'tl tl-hlavne', text: ano });
      var b2 = el('button', { type: 'button', class: 'tl tl-druhe', text: t('nechat') });
      b1.onclick = function () { zavriHarok(true); res(true); };
      b2.onclick = function () { zavriHarok(true); res(false); };
      otvorHarok([el('h2', { id: 'harok-nadpis', text: nadpis }), el('p', { text: text }), el('div', { class: 'tl-stlpec' }, [b1, b2])], function () { res(false); });
    });
  }
  function kopiruj(text, co) {
    var ok = function () { toast(t('skopirovane', { c: co })); };
    var zle = function () { toast(t('nekopirovane')); };
    try { navigator.clipboard.writeText(text).then(ok, zle); } catch (e) { zle(); }
  }
  function zvacsi(src) {
    $('#lupa-img').src = src;
    $('#lupa').hidden = false;
    $('#lupa-zavri').focus();
  }

  // ——— avatar a odznaky ———
  function avatar(p, trieda) {
    var a = el('span', { class: 'avatar ' + (trieda || ''), 'aria-hidden': 'true' });
    if (p && p.foto) a.appendChild(el('img', { src: subUrl(p.foto), alt: '', loading: 'lazy', draggable: 'false' }));
    else {
      var hh = hashFarba(p && p.meno);
      a.style.background = 'linear-gradient(135deg,hsl(' + hh + ' 90% 66%),hsl(' + ((hh + 50) % 360) + ' 85% 52%))';
      a.textContent = inicialy(p && p.meno);
    }
    return a;
  }
  function odznaky(u) {
    var d = [];
    if (u.qr_overene) d.push(el('span', { class: 'odznak zel', text: '✓ ' + t('odz_qr') }));
    if (u.overeny_prijemca) d.push(el('span', { class: 'odznak mod', text: '✓ ' + t('odz_overeny') }));
    if (u.autor && u.autor.zamietol > 0) d.push(el('span', { class: 'odznak cer', text: '⚠ ' + t('odz_zamietol', { n: u.autor.zamietol }) }));
    return d.length ? el('div', { class: 'odznaky' }, d) : null;
  }
  function stavPill(stav) { return el('span', { class: 'pill st-' + stav, text: t('st_' + stav) }); }

  // ——— statické texty ———
  function prelozStatiku() {
    document.documentElement.lang = lang === 'cz' ? 'cs' : 'sk';
    Array.prototype.forEach.call(document.querySelectorAll('[data-t]'), function (e) { e.textContent = t(e.getAttribute('data-t')); });
    Array.prototype.forEach.call(document.querySelectorAll('[data-tph]'), function (e) { e.setAttribute('placeholder', t(e.getAttribute('data-tph'))); });
    Array.prototype.forEach.call(document.querySelectorAll('[data-tal]'), function (e) { e.setAttribute('aria-label', t(e.getAttribute('data-tal'))); });
    $('#jazyk-sk').setAttribute('aria-pressed', lang === 'sk' ? 'true' : 'false');
    $('#jazyk-cz').setAttribute('aria-pressed', lang === 'cz' ? 'true' : 'false');
    kresliKategorie();
    kresliMenu();
    kresliProfilTlacidlo();
  }
  function nastavJazyk(l) {
    if (l === lang) return;
    lang = l; ls('zaplatil_lang', l);
    prelozStatiku();
    kresliStat(); kresliDeck(); kresliNahrat(); kresliZhody();
    if (chat.id && chat.ucet) { kresliChatHlavu(); kresliAkcie(); kresliSpravy(true); }
  }

  // ——— DEMO účty (len keď je databáza prázdna) ———
  function demo() {
    var sk = lang !== 'cz';
    return [
      { id: 'demo-0001', demo: true, nazov: sk ? 'Elektrina za október' : 'Elektřina za říjen', suma: sk ? 84.5 : 2190, mena: sk ? 'EUR' : 'CZK', kategoria: 'energie', pribeh: sk ? 'Kúrim od septembra, lebo mačke je zima.' : 'Topím od září, protože kočce je zima.', prijemca: sk ? 'Dodávateľ energie' : 'Dodavatel energie', qr_overene: true, autor: { meno: 'Feli', vie: sk ? 'Odchytím myš. Zadarmo.' : 'Chytím myš. Zdarma.' } },
      { id: 'demo-0002', demo: true, nazov: sk ? 'Nájom, lebo je zase november' : 'Nájem, protože je zase listopad', suma: 620, mena: 'EUR', kategoria: 'byvanie', pribeh: sk ? 'Prenajímateľ má jachtu. Ja mám tento účet.' : 'Pronajímatel má jachtu. Já mám tenhle účet.', prijemca: sk ? 'Pán domáci' : 'Pan domácí', autor: { meno: 'Podnájomník', vie: sk ? 'Vynesiem smeti celému vchodu.' : 'Vynesu odpadky celému vchodu.' } },
      { id: 'demo-0003', demo: true, nazov: sk ? 'Veterinár' : 'Veterinář', suma: sk ? 137 : 3400, mena: sk ? 'EUR' : 'CZK', kategoria: 'zdravie', pribeh: sk ? 'Pes zjedol ponožku. Druhú z páru.' : 'Pes sežral ponožku. Druhou z páru.', prijemca: sk ? 'Veterinárna ambulancia' : 'Veterinární ordinace', overeny_prijemca: true, autor: { meno: 'Denny', vie: sk ? 'Prinesiem loptičku. Aj dvakrát.' : 'Přinesu míček. Klidně dvakrát.' } }
    ];
  }

  // ——— KARTA ———
  function karta(u, i) {
    var farby = KAT_FARBY[u.kategoria] || KAT_FARBY.ine;
    var k = el('article', { class: 'karta k' + i, 'data-id': u.id, 'aria-label': u.nazov + ', ' + pen(u.suma, u.mena) });
    var obal = el('div', { class: 'karta-obal', style: '--g1:' + farby[0] + ';--g2:' + farby[1] });
    var vrch;
    if (u.priloha && u.priloha_typ === 'img') {
      vrch = el('button', { type: 'button', class: 'karta-foto', 'aria-label': t('zvacsit') }, [
        el('img', { src: subUrl(u.priloha), alt: '', loading: i ? 'lazy' : 'eager', draggable: 'false' }),
        el('span', { class: 'lupa-tag', text: t('zvacsit') })
      ]);
    } else {
      vrch = el('div', { class: 'karta-vzor' }, [
        el('span', { class: 'vzor-kat', text: kat(u.kategoria) }),
        u.priloha_typ === 'pdf' ? el('span', { class: 'vzor-pdf' }, [el('b', { text: 'PDF' }), t('pdf_faktura')]) : null,
        u.demo ? el('span', { class: 'vzor-ukazka', text: t('ukazka') }) : null
      ]);
    }
    var hlava = el('div', { class: 'karta-hlava' }, [
      el('span', { class: 'chip-sklo', text: t(jeMoj(u) ? 'tvoj_ucet_c' : 'ucet_c', { n: u.demo ? '0' + u.id.slice(-3) : cisloUctu(u.id) }) }),
      el('span', { class: 'chip-sklo', text: kat(u.kategoria) + (u.created_at ? ' · ' + pred(u.created_at) : '') })
    ]);
    var a = u.autor || {};
    var panel = el('div', { class: 'karta-panel sklo' }, [
      el('div', { class: 'autor' }, [
        avatar(a, 'mini'),
        el('div', { class: 'autor-text' }, [
          el('b', { text: a.meno || '—' }),
          a.dostal_pocet ? el('small', { text: t('dostal_x', { n: a.dostal_pocet }) }) : (a.kontakt ? el('small', { text: a.kontakt }) : null)
        ])
      ]),
      el('h2', { class: 'karta-nazov', text: u.nazov }),
      u.pribeh ? el('p', { class: 'karta-pribeh', text: u.pribeh }) : null,
      a.vie ? el('p', { class: 'karta-vie' }, [el('span', { text: t('na_oplatku') }), ' ' + a.vie]) : null,
      odznaky(u),
      el('div', { class: 'karta-spodok' }, [
        el('div', { class: 'karta-suma' }, [
          el('b', { text: pen(u.suma, u.mena) }),
          priblizne(u.suma, u.mena) ? el('small', { text: priblizne(u.suma, u.mena) }) : null
        ]),
        el('div', { class: 'karta-prijemca' }, [el('small', { text: t('prijemca') }), el('span', { text: u.prijemca })])
      ])
    ]);
    obal.appendChild(vrch);
    obal.appendChild(hlava);
    obal.appendChild(panel);
    k.appendChild(obal);
    if (i === 0) {
      k.appendChild(el('span', { class: 'peciatka ano', text: t('zaplatim') }));
      k.appendChild(el('span', { class: 'peciatka nie', text: t('nuda') }));
    }
    return k;
  }
  function jeMoj(u) { return ja && u.autor && u.autor.id === ja.id; }

  function postavDeck() {
    var d = ucty.filter(function (u) { return !preskocene.has(u.id); });
    if (odkazId) {
      var i = -1;
      d.forEach(function (u, j) { if (u.id === odkazId) i = j; });
      if (i > 0) d.unshift(d.splice(i, 1)[0]);
    }
    if (nacitane && !chybaNacitania && ucty.length === 0) d = demo();
    deck = d;
  }

  function kresliStat() {
    var s = $('#stat');
    if (chybaNacitania) { s.textContent = t('bez_spojenia'); return; }
    if (!stat) { s.textContent = t('nacitavam'); return; }
    var c = stat.caka || 0, z = stat.zaplatene || 0;
    var sumy = [];
    if (Number(stat.eur)) sumy.push(pen(stat.eur, 'EUR'));
    if (Number(stat.czk)) sumy.push(pen(stat.czk, 'CZK'));
    s.textContent = t('stat', { c: c, cu: t(c === 1 ? 'stat_cu1' : (c >= 2 && c <= 4 ? 'stat_cu2' : 'stat_cu5')), z: z + (sumy.length ? ' (' + sumy.join(' + ') + ')' : '') });
  }

  function kresliDeck() {
    var box = $('#deck');
    box.textContent = '';
    var mame = deck.length > 0;
    $('#btn-nie').disabled = !mame;
    $('#btn-ano').disabled = !mame;
    $('#btn-nahlas').disabled = !mame || !!deck[0].demo || jeMoj(deck[0]);
    $('#btn-ano span').textContent = mame && deck[0].mena === 'CZK' ? 'Kč' : '€';
    if (!mame) { box.appendChild(prazdno()); return; }
    for (var i = Math.min(2, deck.length - 1); i >= 0; i--) box.appendChild(karta(deck[i], i));
    pripojTah(box.querySelector('.k0'), deck[0]);
  }

  function prazdno() {
    var deti;
    if (!nacitane) deti = [el('div', { class: 'spinner' }), el('h2', { text: t('hladam') })];
    else if (chybaNacitania) {
      deti = [el('h2', { text: t('nenacitane') }), el('p', { text: t('skontroluj_net') }),
        el('button', { type: 'button', class: 'tl tl-druhe', text: t('skusit_znova'), onclick: function () { nacitaj(); } })];
    } else {
      deti = [el('div', { class: 'prazdno-ikona', text: '🥱' }), el('h2', { text: t('to_je_vsetko') }), el('p', { text: t('vsetko_videne') }),
        el('button', { type: 'button', class: 'tl tl-hlavne', text: t('nahrat_vlastny'), onclick: function () { ukaz('nahrat'); } }),
        el('button', { type: 'button', class: 'tl tl-druhe', text: t('preskocene_znova'), onclick: function () { preskocene.clear(); ls('zaplatil_preskocene', []); postavDeck(); kresliDeck(); } })];
    }
    return el('div', { class: 'prazdno sklo' }, deti);
  }

  // ——— swipe ———
  function poloz(k, dx, dy) {
    k.style.transform = 'translate(' + dx + 'px,' + (dy * 0.25) + 'px) rotate(' + (dx / 16) + 'deg)';
    var a = k.querySelector('.peciatka.ano'), n = k.querySelector('.peciatka.nie');
    if (a) a.style.opacity = Math.max(0, Math.min(1, dx / 90));
    if (n) n.style.opacity = Math.max(0, Math.min(1, -dx / 90));
    var box = $('#deck');
    box.style.setProperty('--tah', Math.max(-1, Math.min(1, dx / 140)));
  }
  function pripojTah(k, u) {
    var sx = 0, sy = 0, dx = 0, dy = 0, t0 = 0, ide = false, naFoto = false;
    k.addEventListener('pointerdown', function (e) {
      if (e.button) return;
      ide = true; sx = e.clientX; sy = e.clientY; dx = dy = 0; t0 = performance.now();
      naFoto = !!(e.target.closest && e.target.closest('.karta-foto'));
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
        if (u.priloha && naFoto) zvacsi(subUrl(u.priloha));
        return;
      }
      if (dx > 90 || (v > 0.6 && dx > 30)) rozhodni('ano');
      else if (dx < -90 || (v < -0.6 && dx < -30)) rozhodni('nie');
      else poloz(k, 0, 0);
    }
    k.addEventListener('pointerup', koniec);
    k.addEventListener('pointercancel', koniec);
    var f = k.querySelector('.karta-foto');
    if (f) f.addEventListener('keydown', function (e) { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); zvacsi(subUrl(u.priloha)); } });
  }

  var zaneprazdneny = false;
  function rozhodni(co) {
    if (zaneprazdneny || !deck.length) return;
    var u = deck[0], k = $('#deck .k0');
    if (!k) return;
    if (co === 'ano' && u.demo) { poloz(k, 0, 0); toast(t('len_ukazka')); return; }
    if (co === 'ano' && jeMoj(u)) { poloz(k, 0, 0); return; }
    if (co === 'ano' && !ja) {
      poloz(k, 0, 0);
      otvorProfil({ brana: 'profil_brana', potom: function () { rozhodni('ano'); } });
      return;
    }
    zaneprazdneny = true;
    var smer = co === 'ano' ? 1 : -1;
    poloz(k, smer * (window.innerWidth + 240), 40);
    setTimeout(function () {
      if (co === 'nie') {
        zaneprazdneny = false;
        if (!u.demo) { preskocene.add(u.id); ls('zaplatil_preskocene', Array.from(preskocene).slice(-500)); }
        deck.shift();
        kresliDeck();
        $('#deck').style.setProperty('--tah', 0);
      } else {
        rpc('zaplatil_swipni', { p_kluc: kluc, p_id: u.id }).then(function (d) {
          odstranZDecku(u.id); kresliDeck();
          otvorZhodu(d);
          nacitajMoje(true);
        }).catch(function (e) {
          var m = chybaKod(e);
          if (m.indexOf('uz_nie_je') >= 0) { odstranZDecku(u.id); kresliDeck(); toast(t('uz_nie_je')); }
          else { kresliDeck(); toast(m.indexOf('vela_zamkov') >= 0 ? t('vela_zamkov') : (m.indexOf('cervene') >= 0 ? t('e_cervene') : t('e_vseobecna'))); }
        }).finally(function () { zaneprazdneny = false; $('#deck').style.setProperty('--tah', 0); });
      }
    }, 260);
  }
  function odstranZDecku(id) {
    deck = deck.filter(function (x) { return x.id !== id; });
    ucty = ucty.filter(function (x) { return x.id !== id; });
  }

  // ——— ZHODA ———
  function otvorZhodu(u) {
    var z = $('#zhoda');
    z.textContent = '';
    var a = u.autor || {};
    z.appendChild(el('div', { class: 'zhoda-obsah' }, [
      el('h2', { class: 'zhoda-nadpis', text: t('zhoda') }),
      el('div', { class: 'zhoda-dvojica' }, [avatar(ja, 'velky vlavo'), el('span', { class: 'zhoda-mena', text: u.mena === 'CZK' ? 'Kč' : '€' }), avatar(a, 'velky vpravo')]),
      el('p', { class: 'zhoda-text', text: t('zhoda_text', { m: a.meno }) }),
      el('div', { class: 'zhoda-ucet sklo' }, [el('span', { text: u.nazov }), el('b', { text: pen(u.suma, u.mena) })]),
      el('p', { class: 'zhoda-mala', text: t('zhoda_casovac') }),
      el('div', { class: 'tl-stlpec' }, [
        el('button', { type: 'button', class: 'tl tl-hlavne', text: t('zaplatit_teraz'), onclick: function () { zavriZhodu(); otvorChat(u.id, { platba: true }); } }),
        el('button', { type: 'button', class: 'tl tl-druhe', text: t('napisat', { m: a.meno }), onclick: function () { zavriZhodu(); otvorChat(u.id); } }),
        el('button', { type: 'button', class: 'tl tl-text', text: t('neskor'), onclick: zavriZhodu })
      ])
    ]));
    z.hidden = false;
    oslava();
    setTimeout(function () { var b = z.querySelector('.tl-hlavne'); if (b) b.focus(); }, 50);
  }
  function zavriZhodu() { $('#zhoda').hidden = true; }

  // ——— PLATBA ———
  function udaj(nazov, hodnota, kopia) {
    return el('div', { class: 'udaj' }, [
      el('dt', { text: nazov }), el('dd', { text: hodnota }),
      el('button', { type: 'button', text: t('kopirovat'), onclick: function () { kopiruj(kopia || hodnota, nazov); } })
    ]);
  }
  function otvorPlatbu(u) {
    var qr = el('canvas', { class: 'qr-canvas', 'aria-label': 'QR' });
    try { kresliQR(qr, qrText(u)); } catch (e) { qr = null; }
    var riadky = [udaj(t('prijemca'), u.prijemca), udaj('IBAN', ibanPekny(u.iban), u.iban)];
    var dom = naDomace(u.iban);
    if (dom && (u.mena === 'CZK' || lang === 'cz')) riadky.push(udaj(t('cislo_uctu'), dom));
    riadky.push(udaj(t('suma'), pen(u.suma, u.mena), Number(u.suma).toFixed(2)));
    if (u.vs) riadky.push(udaj(t('vs'), u.vs));

    var deti = [
      el('h2', { id: 'harok-nadpis', text: t('platis', { n: u.nazov }) }),
      el('p', { text: t('platis_text', { s: pen(u.suma, u.mena), p: String(u.prijemca).replace(/\.+$/, '') }) })
    ];
    if (u.mena === 'EUR') deti.push(el('a', { class: 'tl tl-hlavne', href: paymeLink(u), target: '_blank', rel: 'noopener', text: t('otvorit_banku') }));
    if (qr) {
      var ulozit = el('button', { type: 'button', class: 'tl-maly', text: t('qr_ulozit'), onclick: function () { ulozQR(qr, u); } });
      deti.push(el('div', { class: 'qr-box' }, [qr, el('div', null, [el('p', { text: u.mena === 'EUR' ? t('qr_desktop') : t('qr_ulozit_text') }), ulozit])]));
    }
    if (u.priloha) {
      deti.push(u.priloha_typ === 'pdf'
        ? el('a', { class: 'tl tl-druhe', href: subUrl(u.priloha), target: '_blank', rel: 'noopener', text: t('otvorit_fakturu') + ' (PDF)' })
        : el('button', { type: 'button', class: 'tl tl-druhe', text: t('otvorit_fakturu'), onclick: function () { zvacsi(subUrl(u.priloha)); } }));
    }
    deti.push(el('dl', { class: 'udaje' }, riadky));
    deti.push(el('p', { class: 'upozornenie ' + (u.mena === 'EUR' ? 'info' : 'pozor') }, [u.mena === 'EUR' ? t('vop_eur') : t('vop_czk')]));
    if (u.ja_som === 'platca' && u.stav === 'zhoda') {
      deti.push(el('p', { class: 'drobne', text: t('potom_doklad') }));
      deti.push(el('button', { type: 'button', class: 'tl tl-hlavne', text: t('zaplatil_som'), onclick: function () { otvorDoklad(u); } }));
    }
    deti.push(el('button', { type: 'button', class: 'tl tl-text', text: t('spat'), onclick: function () { zavriHarok(); } }));
    otvorHarok(deti);
  }
  function ulozQR(canvas, u) {
    canvas.toBlob(function (b) {
      if (!b) return;
      var meno = 'zaplatil-qr-' + cisloUctu(u.id) + '.png';
      var f = null;
      try { f = new File([b], meno, { type: 'image/png' }); } catch (e) {}
      if (f && navigator.canShare && navigator.canShare({ files: [f] })) {
        navigator.share({ files: [f] }).catch(function () {});
      } else {
        var a = el('a', { href: URL.createObjectURL(b), download: meno });
        document.body.appendChild(a); a.click(); a.remove();
      }
    }, 'image/png');
  }

  // ——— editor fotky (zakrývanie citlivých údajov) ———
  function Editor(canvas) {
    var self = { base: null, pruhy: [] };
    function kresli(rozrobeny) {
      if (!self.base) return;
      var sirka = Math.min((canvas.parentNode && canvas.parentNode.clientWidth) || 320, 430), vyska = sirka * self.base.height / self.base.width;
      if (vyska > 420) { sirka = sirka * 420 / vyska; vyska = 420; }
      var dpr = Math.min(2, window.devicePixelRatio || 1);
      canvas.style.width = Math.round(sirka) + 'px'; canvas.style.height = Math.round(vyska) + 'px';
      canvas.width = Math.round(sirka * dpr); canvas.height = Math.round(vyska * dpr);
      var g = canvas.getContext('2d');
      g.drawImage(self.base, 0, 0, canvas.width, canvas.height);
      g.fillStyle = '#000';
      self.pruhy.concat(rozrobeny ? [rozrobeny] : []).forEach(function (p) { g.fillRect(p[0] * canvas.width, p[1] * canvas.height, p[2] * canvas.width, p[3] * canvas.height); });
    }
    var zac = null;
    function bod(e) { var r = canvas.getBoundingClientRect(); return [Math.max(0, Math.min(1, (e.clientX - r.left) / r.width)), Math.max(0, Math.min(1, (e.clientY - r.top) / r.height))]; }
    function pruh(a, b) { return [Math.min(a[0], b[0]), Math.min(a[1], b[1]), Math.abs(a[0] - b[0]), Math.abs(a[1] - b[1])]; }
    canvas.addEventListener('pointerdown', function (e) { if (!self.base) return; zac = bod(e); try { canvas.setPointerCapture(e.pointerId); } catch (x) {} e.preventDefault(); });
    canvas.addEventListener('pointermove', function (e) { if (zac) kresli(pruh(zac, bod(e))); });
    function koniec(e) {
      if (!zac) return;
      var p = pruh(zac, bod(e)); zac = null;
      if (e.type === 'pointerup' && p[2] > 0.015 && p[3] > 0.008) self.pruhy.push(p);
      kresli();
    }
    canvas.addEventListener('pointerup', koniec);
    canvas.addEventListener('pointercancel', koniec);
    self.nastav = function (c) { self.base = c; self.pruhy = []; kresli(); };
    self.spat = function () { if (self.pruhy.length) { self.pruhy.pop(); kresli(); } };
    self.zrus = function () { self.base = null; self.pruhy = []; };
    self.kresli = kresli;
    self.blob = function () {
      var c = document.createElement('canvas');
      c.width = self.base.width; c.height = self.base.height;
      var g = c.getContext('2d');
      g.drawImage(self.base, 0, 0);
      g.fillStyle = '#000';
      self.pruhy.forEach(function (p) { g.fillRect(p[0] * c.width, p[1] * c.height, p[2] * c.width, p[3] * c.height); });
      return stlac(c, 900000);
    };
    return self;
  }
  function naBlob(canvas, q) { return new Promise(function (res) { canvas.toBlob(res, 'image/jpeg', q); }); }
  function stlac(c, limit) {
    var q = 0.86, kol = 0;
    function skus() {
      return naBlob(c, q).then(function (b) {
        if (!b) throw new Error('subor');
        if (b.size <= limit || kol > 10) return b;
        kol++;
        if (q > 0.6) q -= 0.08;
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
  function nacitajObrazok(file, max) {
    return new Promise(function (res, rej) {
      var url = URL.createObjectURL(file), img = new Image();
      img.onload = function () {
        var m = Math.min(1, (max || 2200) / Math.max(img.naturalWidth, img.naturalHeight));
        var c = document.createElement('canvas');
        c.width = Math.max(1, Math.round(img.naturalWidth * m));
        c.height = Math.max(1, Math.round(img.naturalHeight * m));
        c.getContext('2d').drawImage(img, 0, 0, c.width, c.height);
        URL.revokeObjectURL(url);
        res(c);
      };
      img.onerror = function () { URL.revokeObjectURL(url); rej(new Error('obrazok')); };
      img.src = url;
    });
  }

  // ——— DOKLAD O PLATBE ———
  function otvorDoklad(u) {
    var input = el('input', { type: 'file', accept: 'image/*,application/pdf', class: 'skryty-input', id: 'd-subor' });
    var canvas = el('canvas', { class: 'editor-canvas' });
    var ed = Editor(canvas);
    var pdf = null;
    var nahlad = el('div', { class: 'editor', hidden: true }, [canvas, el('p', { class: 'drobne', text: t('zakry_doklad') }),
      el('button', { type: 'button', class: 'tl-maly', text: t('vratit_zakrytie'), onclick: function () { ed.spat(); } })]);
    var pdfInfo = el('p', { class: 'pdf-meno', hidden: true });
    var chyba = el('p', { class: 'chyba', role: 'alert', hidden: true });
    var poslat = el('button', { type: 'button', class: 'tl tl-hlavne', text: t('doklad_poslat') });
    input.addEventListener('change', function () {
      var f = input.files && input.files[0];
      if (!f) return;
      chyba.hidden = true;
      if (f.size > MAX_SUBOR && f.type === 'application/pdf') { chyba.textContent = t('e_velky'); chyba.hidden = false; return; }
      if (f.type === 'application/pdf') {
        pdf = f; ed.zrus(); nahlad.hidden = true;
        pdfInfo.textContent = 'PDF · ' + f.name; pdfInfo.hidden = false;
      } else {
        pdf = null; pdfInfo.hidden = true;
        nacitajObrazok(f, 1800).then(function (c) { nahlad.hidden = false; ed.nastav(c); }).catch(function () { chyba.textContent = t('e_subor'); chyba.hidden = false; });
      }
    });
    poslat.onclick = function () {
      if (!pdf && !ed.base) { chyba.textContent = t('doklad_chyba'); chyba.hidden = false; return; }
      poslat.disabled = true; poslat.textContent = t('nahravam');
      var krok = pdf ? nahrajSubor('d', pdf, 'pdf') : ed.blob().then(function (b) { return nahrajSubor('d', b, 'jpg'); });
      krok.then(function (cesta) {
        return rpc('zaplatil_poslal', { p_kluc: kluc, p_id: u.id, p_doklad: cesta });
      }).then(function () {
        zavriHarok(true);
        toast(t('caka_potvrdenie', { m: (u.autor || {}).meno }));
        if (chat.id === u.id) obnovChat(true);
        nacitajMoje(true);
      }).catch(function (e) {
        chyba.textContent = chybaKod(e).indexOf('subor') >= 0 ? t('e_subor') : t('e_vseobecna'); chyba.hidden = false;
      }).finally(function () { poslat.disabled = false; poslat.textContent = t('doklad_poslat'); });
    };
    otvorHarok([
      el('h2', { id: 'harok-nadpis', text: t('doklad_h') }),
      el('p', { text: t('doklad_p') }),
      el('div', { class: 'subor-zona' }, [input, el('label', { for: 'd-subor', class: 'subor-vyber' }, [el('b', { text: t('doklad_vyber') })])]),
      nahlad, pdfInfo, chyba, poslat,
      el('button', { type: 'button', class: 'tl tl-text', text: t('spat'), onclick: function () { zavriHarok(); } })
    ]);
  }

  // ——— CHAT ———
  var chat = { id: null, ucet: null, spravy: [], posledne: 0, poll: null, tik: null };
  function otvorChat(id, opts) {
    opts = opts || {};
    chat.id = id; chat.ucet = null; chat.spravy = []; chat.posledne = 0;
    var c = $('#chat');
    $('#chat-spravy').textContent = '';
    $('#chat-akcie').textContent = '';
    $('#chat-hlava').textContent = '';
    c.hidden = false;
    document.body.classList.add('chat-otvoreny');
    obnovChat(false).then(function () {
      if (opts.platba && chat.ucet) otvorPlatbu(chat.ucet);
    });
    clearInterval(chat.poll);
    chat.poll = setInterval(function () { if (!document.hidden) obnovChat(true); }, 3000);
    clearInterval(chat.tik);
    chat.tik = setInterval(tikZamku, 1000);
  }
  function zavriChat() {
    $('#chat').hidden = true;
    document.body.classList.remove('chat-otvoreny');
    clearInterval(chat.poll); clearInterval(chat.tik);
    chat.id = null; chat.ucet = null;
    nacitajMoje(true);
  }
  function obnovChat(ticho) {
    var id = chat.id;
    if (!id) return Promise.resolve();
    return rpc('zaplatil_spravy', { p_kluc: kluc, p_id: id, p_po: chat.posledne }).then(function (d) {
      if (chat.id !== id) return;
      var stary = chat.ucet ? chat.ucet.stav : null;
      chat.ucet = d.ucet;
      var nove = d.spravy || [];
      nove.forEach(function (s) { chat.spravy.push(s); chat.posledne = Math.max(chat.posledne, s.id); });
      if (!ticho || stary !== d.ucet.stav) { kresliChatHlavu(); kresliAkcie(); }
      if (nove.length || !ticho) kresliSpravy(!ticho);
      if (stary && stary !== 'potvrdene' && d.ucet.stav === 'potvrdene') oslava();
    }).catch(function (e) {
      if (!ticho) { toast(t('e_vseobecna')); }
      if (chybaKod(e).indexOf('nejde') >= 0) { zavriChat(); toast(t('uz_nie_je')); }
    });
  }
  function druhy(u) { return u.ja_som === 'majitel' ? (u.platca || {}) : (u.autor || {}); }
  function kresliChatHlavu() {
    var u = chat.ucet; if (!u) return;
    var h = $('#chat-hlava'); h.textContent = '';
    var o = druhy(u);
    var podpis = [];
    if (o.kontakt) podpis.push(el('button', { type: 'button', class: 'kontakt-btn', text: o.kontakt, onclick: function () { kopiruj(o.kontakt, t('kontakt')); } }));
    if (u.ja_som === 'majitel' && o.id) podpis.push(el('small', { class: 'titul-mini', text: titul(Number(o.zaplatil_eur)) }));
    h.appendChild(el('button', { type: 'button', class: 'spat-btn', 'aria-label': t('spat'), onclick: zavriChat }, [el('span', { 'aria-hidden': 'true', text: '‹' })]));
    h.appendChild(avatar(o, 'stredny'));
    h.appendChild(el('div', { class: 'chat-kto' }, [el('b', { text: o.meno || '…' })].concat(podpis)));
    var ucetRiadok = $('#chat-ucet'); ucetRiadok.textContent = '';
    ucetRiadok.appendChild(el('span', { class: 'chat-ucet-nazov', text: u.nazov }));
    ucetRiadok.appendChild(el('b', { text: pen(u.suma, u.mena) }));
    ucetRiadok.appendChild(stavPill(u.stav));
  }
  function zostava(u) { return new Date(u.zamok_do).getTime() - Date.now(); }
  function mmss(ms) { var s = Math.max(0, Math.round(ms / 1000)); return Math.floor(s / 60) + ':' + ('0' + (s % 60)).slice(-2); }
  function tikZamku() {
    var e = $('#zamok-cas');
    if (!e || !chat.ucet) return;
    var z = zostava(chat.ucet);
    e.textContent = z > 0 ? t('zamok', { t: mmss(z) }) : t('zamok_vyprsal');
    e.classList.toggle('vyprsal', z <= 0);
  }
  function kresliAkcie() {
    var u = chat.ucet; if (!u) return;
    var a = $('#chat-akcie'); a.textContent = '';
    var o = druhy(u);
    var tl = function (txt, trieda, fn) { return el('button', { type: 'button', class: 'tl ' + trieda, text: txt, onclick: fn }); };
    if (u.stav === 'zhoda' && u.ja_som === 'platca') {
      a.appendChild(el('p', { class: 'zamok', id: 'zamok-cas' }));
      a.appendChild(el('div', { class: 'tl-rad' }, [
        tl(t('zaplatit'), 'tl-druhe', function () { otvorPlatbu(u); }),
        tl(t('zaplatil_som'), 'tl-hlavne', function () { otvorDoklad(u); })
      ]));
      a.appendChild(tl(t('vzdat'), 'tl-text', function () {
        potvrd(t('vzdat_otazka'), t('vzdat_text'), t('vzdat_ano'), true).then(function (ok) {
          if (!ok) return;
          rpc('zaplatil_vzdat', { p_kluc: kluc, p_id: u.id }).then(function () { zavriChat(); nacitaj(true); }).catch(function () { toast(t('e_vseobecna')); });
        });
      }));
      tikZamku();
    } else if (u.stav === 'zhoda') {
      a.appendChild(el('p', { class: 'info-riadok', text: t('on_plati', { m: o.meno }) }));
      a.appendChild(el('p', { class: 'zamok', id: 'zamok-cas' }));
      tikZamku();
    } else if (u.stav === 'poslane' && u.ja_som === 'majitel') {
      a.appendChild(el('p', { class: 'info-riadok', text: t('potvrd_text', { m: o.meno }) }));
      if (u.doklad) a.appendChild(u.doklad_typ === 'pdf'
        ? el('a', { class: 'tl tl-druhe', href: subUrl(u.doklad), target: '_blank', rel: 'noopener', text: t('pozriet_doklad') + ' (PDF)' })
        : tl(t('pozriet_doklad'), 'tl-druhe', function () { zvacsi(subUrl(u.doklad)); }));
      a.appendChild(el('div', { class: 'tl-rad' }, [
        tl(t('neprislo'), 'tl-cervene', function () {
          potvrd(t('neprislo_otazka'), t('neprislo_text'), t('neprislo_ano'), true).then(function (ok) {
            if (!ok) return;
            rpc('zaplatil_potvrd', { p_kluc: kluc, p_id: u.id, p_ok: false }).then(function () { zavriChat(); nacitaj(true); }).catch(function () { toast(t('e_vseobecna')); });
          });
        }),
        tl(t('prislo'), 'tl-hlavne', function () {
          potvrd(t('prislo_otazka'), t('prislo_text'), t('prislo_ano')).then(function (ok) {
            if (!ok) return;
            rpc('zaplatil_potvrd', { p_kluc: kluc, p_id: u.id, p_ok: true }).then(function () { obnovChat(false); oslava(); nacitaj(true); }).catch(function () { toast(t('e_vseobecna')); });
          });
        })
      ]));
    } else if (u.stav === 'poslane') {
      a.appendChild(el('p', { class: 'info-riadok', text: t('caka_potvrdenie', { m: o.meno }) }));
      if (u.doklad) a.appendChild(u.doklad_typ === 'pdf'
        ? el('a', { class: 'tl tl-text', href: subUrl(u.doklad), target: '_blank', rel: 'noopener', text: t('pozriet_doklad') })
        : tl(t('pozriet_doklad'), 'tl-text', function () { zvacsi(subUrl(u.doklad)); }));
    } else if (u.stav === 'potvrdene') {
      var platca = u.ja_som === 'platca' ? ja : u.platca;
      a.appendChild(el('div', { class: 'peciatka-velka', text: t('potvrdene_peciatka') }));
      if (platca) a.appendChild(el('p', { class: 'info-riadok', text: t('potvrdene_text', { m: platca.meno, t: titul(Number((u.platca || platca).zaplatil_eur)) }) }));
    }
    $('#chat-pisanie').hidden = !(u.stav === 'zhoda' || u.stav === 'poslane' || u.stav === 'potvrdene');
  }
  function kresliSpravy(dole) {
    var box = $('#chat-spravy');
    var bolDole = box.scrollHeight - box.scrollTop - box.clientHeight < 80;
    box.textContent = '';
    chat.spravy.forEach(function (s) {
      if (s.kto === 'system') {
        var kluce = { '@zhoda': 'sys_zhoda', '@poslane': 'sys_poslane', '@potvrdene': 'sys_potvrdene' };
        box.appendChild(el('div', { class: 'spr-sys' }, [el('span', { text: t(kluce[s.text] || 'sys_zhoda') })]));
      } else {
        box.appendChild(el('div', { class: 'spr ' + s.kto }, [el('p', { text: s.text }), el('time', { text: new Date(s.kedy).toLocaleTimeString(locale(), { hour: '2-digit', minute: '2-digit' }) })]));
      }
    });
    if (dole || bolDole) box.scrollTop = box.scrollHeight;
  }
  function posliSpravu(e) {
    e.preventDefault();
    var inp = $('#chat-vstup'), text = inp.value.trim();
    if (!text || !chat.id) return;
    inp.value = '';
    chat.spravy.push({ id: 0, kto: 'ja', text: text, kedy: new Date().toISOString() });
    kresliSpravy(true);
    rpc('zaplatil_napis', { p_kluc: kluc, p_id: chat.id, p_text: text }).then(function () {
      chat.spravy = chat.spravy.filter(function (s) { return s.id !== 0; });
      return obnovChat(true);
    }).catch(function () { toast(t('e_vseobecna')); });
  }

  // ——— PROFIL ———
  function kresliProfilTlacidlo() {
    var b = $('#btn-profil'); b.textContent = '';
    b.appendChild(ja ? avatar(ja, 'mini') : el('span', { class: 'avatar mini prazdny', 'aria-hidden': 'true', text: '+' }));
    b.setAttribute('aria-label', t('profil'));
  }
  function otvorProfil(opts) {
    opts = opts || {};
    var p = ja || {};
    var noveFoto, fotoZmenene = false;
    var fotoBox = el('div', { class: 'profil-foto' }, [avatar(p, 'velky')]);
    var fotoInput = el('input', { type: 'file', accept: 'image/*', id: 'p-foto', class: 'skryty-input' });
    fotoInput.addEventListener('change', function () {
      var f = fotoInput.files && fotoInput.files[0];
      if (!f) return;
      nacitajObrazok(f, 2000).then(function (c) {
        var s = Math.min(c.width, c.height), k = document.createElement('canvas');
        k.width = k.height = 480;
        k.getContext('2d').drawImage(c, (c.width - s) / 2, (c.height - s) / 2, s, s, 0, 0, 480, 480);
        noveFoto = k; fotoZmenene = true;
        fotoBox.textContent = '';
        var img = el('img', { alt: '', src: k.toDataURL('image/jpeg', 0.8) });
        fotoBox.appendChild(el('span', { class: 'avatar velky' }, [img]));
      }).catch(function () { toast(t('e_subor')); });
    });
    var meno = el('input', { type: 'text', id: 'p-meno', maxlength: '30', placeholder: t('meno_ph'), autocomplete: 'nickname', value: p.meno || '' });
    var kontakt = el('input', { type: 'text', id: 'p-kontakt', maxlength: '80', placeholder: t('kontakt_ph'), autocomplete: 'off', value: p.kontakt || '' });
    var verejny = el('input', { type: 'checkbox', id: 'p-verejny' });
    verejny.checked = !!p.kontakt_verejny;
    var vie = el('textarea', { id: 'p-vie', maxlength: '220', rows: '3', placeholder: t('vie_ph') });
    vie.value = p.vie || '';
    var chyba = el('p', { class: 'chyba', role: 'alert', hidden: true });
    var uloz = el('button', { type: 'button', class: 'tl tl-hlavne', text: t('ulozit') });
    uloz.onclick = function () {
      var m = meno.value.trim(), k = kontakt.value.trim();
      if (m.length < 2) { chyba.textContent = t('chyba_meno'); chyba.hidden = false; meno.focus(); return; }
      if (k.length < 3) { chyba.textContent = t('chyba_kontakt'); chyba.hidden = false; kontakt.focus(); return; }
      chyba.hidden = true;
      uloz.disabled = true; uloz.textContent = t('ukladam');
      var novyKluc = kluc || nahodne(40);
      var krok = fotoZmenene && noveFoto ? stlac(noveFoto, 200000).then(function (b) { return nahrajSubor('p', b, 'jpg'); }) : Promise.resolve(null);
      krok.then(function (fotoCesta) {
        var data = { meno: m, kontakt: k, kontakt_verejny: verejny.checked, vie: vie.value.trim() };
        if (fotoCesta) data.foto = fotoCesta;
        return rpc('zaplatil_profil_uloz', { p_kluc: novyKluc, p: data });
      }).then(function (r) {
        kluc = novyKluc; ls('zaplatil_kluc', kluc);
        ja = r; ls('zaplatil_ja', ja);
        kresliProfilTlacidlo(); kresliNahrat(); kresliZhody();
        zavriHarok(true);
        toast(t('ulozene'));
        nacitaj(true); nacitajMoje(true);
        if (opts.potom) opts.potom();
      }).catch(function (e) {
        var c = chybaKod(e);
        chyba.textContent = c.indexOf('subor') >= 0 ? t('e_subor') : (c.indexOf('prilis_vela') >= 0 ? t('e_prilis') : t('e_vseobecna'));
        chyba.hidden = false;
      }).finally(function () { uloz.disabled = false; uloz.textContent = t('ulozit'); });
    };

    var deti = [
      el('h2', { id: 'harok-nadpis', text: t('profil') }),
      el('p', { text: opts.brana ? t(opts.brana) : t('profil_uvod') }),
      el('div', { class: 'profil-hore' }, [fotoBox, fotoInput, el('label', { for: 'p-foto', class: 'tl-maly', text: p.foto ? t('fotka_zmen') : t('fotka_vyber') })]),
      el('div', { class: 'pole' }, [el('label', { class: 'menovka', for: 'p-meno', text: t('meno') }), meno]),
      el('div', { class: 'pole' }, [el('label', { class: 'menovka', for: 'p-kontakt', text: t('kontakt_lbl') }), kontakt]),
      el('label', { class: 'suhlas', for: 'p-verejny' }, [verejny, el('span', { text: t('kontakt_verejny') })]),
      el('div', { class: 'pole' }, [el('label', { class: 'menovka', for: 'p-vie' }, [t('vie'), el('i', { text: t('nepovinne') })]), vie]),
      chyba, uloz
    ];
    if (ja) {
      deti.push(el('hr', { class: 'oddelovac' }));
      deti.push(titulKarta());
      if (ja.cervene > 0) deti.push(el('p', { class: 'upozornenie pozor', text: t('cervene', { n: ja.cervene }) }));
      deti.push(el('button', { type: 'button', class: 'tl tl-druhe', text: t('vsetky_tituly'), onclick: otvorTituly }));
      var odkaz = SITE + '#k=' + kluc;
      deti.push(el('div', { class: 'blok' }, [
        el('b', { text: t('ine_zariadenie') }), el('p', { class: 'drobne', text: t('ine_zariadenie_text') }),
        el('button', { type: 'button', class: 'tl-maly', text: t('kopirovat_odkaz'), onclick: function () { kopiruj(odkaz, t('kopirovat_odkaz')); } })
      ]));
      deti.push(el('button', { type: 'button', class: 'tl tl-text', text: t('odhlasit'), onclick: function () {
        potvrd(t('odhlasit_otazka'), t('odhlasit_text'), t('odhlasit'), true).then(function (ok) {
          if (!ok) return;
          kluc = null; ja = null; ls('zaplatil_kluc', null); ls('zaplatil_ja', null);
          mojeData = { moje: [], platim: [], oznamy: [] };
          kresliProfilTlacidlo(); kresliNahrat(); kresliZhody(); nacitaj(true);
        });
      } }));
    }
    otvorHarok(deti, null, 'harok-profil');
  }
  function titulKarta(p) {
    p = p || ja;
    var eur = Number(p.zaplatil_eur) || 0, i = titulIndex(eur), T = ZT.tituly;
    var dalsi = T[i + 1];
    var prog = dalsi ? Math.max(0.03, Math.min(1, (eur - T[i][0]) / (dalsi[0] - T[i][0]))) : 1;
    var pocet = Number(p.zaplatil_pocet) || 0;
    return el('div', { class: 'titul-karta' }, [
      el('small', { text: t('tvoj_titul') }),
      el('b', { class: 'titul-meno', text: titul(eur) }),
      el('div', { class: 'progres', role: 'progressbar', 'aria-valuemin': '0', 'aria-valuemax': '100', 'aria-valuenow': String(Math.round(prog * 100)) }, [el('i', { style: 'width:' + (prog * 100) + '%' })]),
      el('p', { class: 'drobne', text: dalsi ? t('dalsi_titul', { t: lang === 'cz' ? dalsi[2] : dalsi[1], s: domaca(Math.max(0.01, dalsi[0] - eur)) }) : t('max_titul') }),
      el('p', { class: 'drobne', text: t('zaplatil_x', { n: pocet, u: t(pocet === 1 ? 'ucet1' : (pocet >= 2 && pocet <= 4 ? 'ucet2' : 'ucet5')), s: domaca(eur) }) +
        (p.dostal_pocet ? ' · ' + t('dostal_x', { n: p.dostal_pocet }) : '') })
    ]);
  }
  function otvorTituly() {
    var eur = ja ? Number(ja.zaplatil_eur) || 0 : 0, moj = titulIndex(eur);
    var zoznam = el('ol', { class: 'tituly' });
    ZT.tituly.forEach(function (r, i) {
      zoznam.appendChild(el('li', { class: i < moj ? 'mam' : (i === moj ? 'teraz' : '') }, [
        el('span', { text: lang === 'cz' ? r[2] : r[1] }),
        el('small', { text: i === 0 ? '0' : domaca(r[0]) })
      ]));
    });
    otvorHarok([el('h2', { id: 'harok-nadpis', text: t('vsetky_tituly') }), zoznam,
      el('button', { type: 'button', class: 'tl tl-text', text: t('spat'), onclick: function () { zavriHarok(); } })]);
    setTimeout(function () { var x = zoznam.querySelector('.teraz'); if (x) x.scrollIntoView({ block: 'center' }); }, 60);
  }

  // ——— NAHRAŤ ÚČET ———
  var kategoria = 'ine', mena = lang === 'cz' ? 'CZK' : 'EUR';
  var priloha = null;     // { typ:'img'|'pdf', file?, editor }
  var qrData = null;
  var editorUctu = null;
  var poslednyNahraty = null;

  function kresliKategorie() {
    var box = $('#kat'); if (!box) return;
    box.textContent = '';
    KAT_KLUCE.forEach(function (k) {
      box.appendChild(el('button', { type: 'button', class: 'cip', role: 'radio', 'aria-checked': k === kategoria ? 'true' : 'false', 'data-kat': k, text: kat(k), onclick: function (e) {
        kategoria = k;
        Array.prototype.forEach.call(box.children, function (c) { c.setAttribute('aria-checked', c === e.currentTarget ? 'true' : 'false'); });
      } }));
    });
  }
  function kresliMenu() {
    Array.prototype.forEach.call(document.querySelectorAll('#mena button'), function (b) { b.setAttribute('aria-pressed', b.getAttribute('data-mena') === mena ? 'true' : 'false'); });
    var s = $('#f-suma'); if (s) s.setAttribute('placeholder', mena === 'CZK' ? '2 190' : '84,50');
    var ib = $('#f-iban'); if (ib) ib.setAttribute('placeholder', mena === 'CZK' ? '123456789/0800' : 'SK00 0000 0000 0000 0000 0000');
  }
  function nastavMenu(m) { mena = m; kresliMenu(); }
  function kresliNahrat() {
    var brana = $('#nahrat-brana'), form = $('#form');
    if (!ja) {
      brana.hidden = false; form.hidden = true; $('#hotovo').hidden = true;
      brana.textContent = '';
      brana.appendChild(el('div', { class: 'brana sklo' }, [
        el('div', { class: 'brana-ikona', text: '🧾' }),
        el('h2', { text: t('nahraj') }),
        el('p', { text: t('profil_brana_nahrat') }),
        el('button', { type: 'button', class: 'tl tl-hlavne', text: t('vytvorit_profil'), onclick: function () { otvorProfil({ brana: 'profil_brana_nahrat' }); } })
      ]));
    } else {
      brana.hidden = true;
      if ($('#hotovo').hidden) form.hidden = false;
      var nov = !(Number(ja.zaplatil_pocet) > 0 || Number(ja.dostal_pocet) > 0);
      $('#novacik').hidden = !nov;
    }
  }
  function stavQR(text, trieda) {
    var s = $('#qr-stav');
    s.textContent = text; s.className = 'qr-stav ' + (trieda || ''); s.hidden = !text;
  }
  function nastavPrilohu(file) {
    if (!file) return;
    qrData = null;
    if (file.size > MAX_SUBOR && file.type === 'application/pdf') { stavQR(t('e_velky'), 'zle'); return; }
    $('#priloha-vyber').hidden = true;
    $('#priloha-nahlad').hidden = false;
    stavQR(t('citam_qr'), 'caka');
    if (file.type === 'application/pdf') {
      priloha = { typ: 'pdf', file: file };
      $('#priloha-editor').hidden = true;
      $('#priloha-pdf').hidden = false;
      $('#priloha-pdf-meno').textContent = file.name;
      var nah = $('#priloha-pdf-canvas');
      ZQR.zPdf(file, BASE).then(function (r) {
        if (r.nahlad) {
          var g = nah.getContext('2d'), m = 360 / r.nahlad.width;
          nah.width = 360; nah.height = Math.round(r.nahlad.height * m);
          g.drawImage(r.nahlad, 0, 0, nah.width, nah.height);
        }
        if (r.qr && r.qr.platba) aplikujQR(r.qr.platba);
        else if (r.ibany && r.ibany.length) {
          if (!$('#f-iban').value.trim()) $('#f-iban').value = ibanPekny(r.ibany[0]);
          stavQR(t('qr_iban_z_pdf'), 'info');
        } else stavQR(t('qr_nic'), 'info');
      }).catch(function () { stavQR(t('qr_nic'), 'info'); });
    } else {
      priloha = { typ: 'img' };
      $('#priloha-pdf').hidden = true;
      $('#priloha-editor').hidden = false;
      nacitajObrazok(file, 2400).then(function (c) {
        editorUctu.nastav(c);
        setTimeout(function () {
          var r = null;
          try { r = ZQR.zObrazka(c); } catch (e) {}
          if (r && r.platba) aplikujQR(r.platba);
          else stavQR(t('qr_nic'), 'info');
        }, 30);
      }).catch(function () { zrusPrilohu(); stavQR(t('e_subor'), 'zle'); });
    }
  }
  function aplikujQR(p) {
    qrData = p;
    if (p.mena === 'CZK' || p.mena === 'EUR') nastavMenu(p.mena);
    $('#f-iban').value = ibanPekny(p.iban);
    if (p.suma) $('#f-suma').value = (p.mena === 'CZK' && Math.round(p.suma) === p.suma ? String(p.suma) : Number(p.suma).toFixed(2)).replace('.', ',');
    if (p.vs) $('#f-vs').value = p.vs;
    if (p.prijemca && !$('#f-prijemca').value.trim()) $('#f-prijemca').value = p.prijemca;
    stavQR('✓ ' + t('qr_ok'), 'dobre');
  }
  function zrusPrilohu() {
    priloha = null; qrData = null;
    if (editorUctu) editorUctu.zrus();
    $('#f-priloha').value = '';
    $('#priloha-nahlad').hidden = true;
    $('#priloha-vyber').hidden = false;
    stavQR('');
  }
  function chybaForm(text, pole) {
    var c = $('#form-chyba');
    c.textContent = text; c.hidden = !text;
    if (text && pole) pole.focus();
    if (text) c.scrollIntoView({ block: 'nearest', behavior: 'smooth' });
  }
  function odosli(e) {
    e.preventDefault();
    var nazov = $('#f-nazov').value.trim();
    var sumaRaw = $('#f-suma').value.replace(/[\s €]|Kč/g, '').replace(',', '.');
    var suma = /^\d+(\.\d{1,2})?$/.test(sumaRaw) ? parseFloat(sumaRaw) : NaN;
    var prijemca = $('#f-prijemca').value.trim();
    var iban = naIban($('#f-iban').value, mena);
    var vs = $('#f-vs').value.replace(/\D/g, '');
    var lim = mena === 'CZK' ? [25, 2500000] : [1, 100000];
    if (nazov.length < 2) return chybaForm(t('e_nazov'), $('#f-nazov'));
    if (!(suma >= lim[0] && suma <= lim[1])) return chybaForm(t('e_suma', { od: pen(lim[0], mena), do: pen(lim[1], mena) }), $('#f-suma'));
    if (prijemca.length < 2) return chybaForm(t('e_prijemca'), $('#f-prijemca'));
    if (!ibanOk(iban)) return chybaForm(t('e_iban'), $('#f-iban'));
    var qrOk = false;
    if (qrData) {
      if (qrData.iban && qrData.iban !== iban) return chybaForm(t('e_qr_iban'), $('#f-iban'));
      if (qrData.mena && qrData.mena !== mena) return chybaForm(t('e_qr_mena'));
      if (qrData.suma && Math.abs(qrData.suma - suma) > 0.005) return chybaForm(t('e_qr_suma', { s: pen(qrData.suma, qrData.mena || mena) }), $('#f-suma'));
      qrOk = true;
    }
    if (!$('#f-suhlas').checked) return chybaForm(t('e_suhlas'), $('#f-suhlas'));
    chybaForm('');
    var btn = $('#btn-odoslat');
    btn.disabled = true; btn.textContent = t('nahravam');
    var krok = !priloha ? Promise.resolve(null)
      : priloha.typ === 'pdf' ? nahrajSubor('u', priloha.file, 'pdf')
      : editorUctu.blob().then(function (b) { return nahrajSubor('u', b, 'jpg'); });
    krok.then(function (cesta) {
      return rpc('zaplatil_pridaj', { p_kluc: kluc, p: {
        nazov: nazov, suma: suma.toFixed(2), mena: mena, kategoria: kategoria, pribeh: $('#f-pribeh').value.trim(),
        prijemca: prijemca, iban: iban, vs: vs, priloha: cesta || '', qr_overene: qrOk
      } });
    }).then(function (out) {
      poslednyNahraty = { id: out.id, nazov: nazov, suma: suma, mena: mena };
      $('#form').reset(); zrusPrilohu(); kresliKategorie();
      $('#form').hidden = true; $('#hotovo').hidden = false;
      $('#v-nahrat').scrollTop = 0;
      oslava();
      nacitaj(true); nacitajMoje(true);
    }).catch(function (err) {
      var m = chybaKod(err);
      var mapa = [['subor', 'e_subor'], ['zly_iban', 'e_iban'], ['novacik_jeden', 'e_novacik_jeden'], ['novacik_suma', 'e_novacik_suma'],
        ['vela_otvorenych', 'e_vela'], ['prilis_vela', 'e_prilis'], ['plno', 'e_prilis'], ['cervene', 'e_cervene'], ['zla_suma', 'e_suma']];
      var k = 'e_vseobecna';
      mapa.forEach(function (x) { if (m.indexOf(x[0]) >= 0) k = x[1]; });
      chybaForm(t(k, { od: pen(lim[0], mena), do: pen(lim[1], mena) }));
    }).finally(function () { btn.disabled = false; btn.textContent = t('nahrat_btn'); });
  }
  function zdielaj(u) {
    var url = SITE + '#u-' + u.id;
    var text = t('zdiel_text', { n: u.nazov, s: pen(u.suma, u.mena) });
    if (navigator.share) navigator.share({ title: 'si/zaplatil', text: text, url: url }).catch(function () {});
    else kopiruj(url, 'URL');
  }

  // ——— ZHODY ———
  function polozka(u, rola) {
    var o = rola === 'moje' ? (u.platca || null) : u.autor;
    var neprec = Number(u.neprecitane) || 0;
    var maChat = ['zhoda', 'poslane', 'potvrdene'].indexOf(u.stav) >= 0 && (rola === 'platim' || u.platca);
    var akcie = [];
    if (rola === 'moje' && u.stav === 'caka') akcie.push(el('button', { type: 'button', class: 'tl-maly', text: t('zdielat'), onclick: function (e) { e.stopPropagation(); zdielaj(u); } }));
    var zamknuty = u.stav === 'poslane' || (u.stav === 'zhoda' && u.zamok_do && new Date(u.zamok_do).getTime() > Date.now());
    if (rola === 'moje' && !zamknuty) akcie.push(el('button', { type: 'button', class: 'tl-maly', text: t('zmazat'), onclick: function (e) {
      e.stopPropagation();
      potvrd(t('zmazat_otazka'), t('zmazat_text', { n: u.nazov }), t('zmazat'), true).then(function (ok) {
        if (!ok) return;
        rpc('zaplatil_zmaz', { p_kluc: kluc, p_id: u.id }).then(function () { toast(t('zmazane')); nacitajMoje(true); nacitaj(true); })
          .catch(function () { toast(t('nejde_zmazat')); });
      });
    } }));
    var obsah = [
      o ? avatar(o, 'stredny') : el('span', { class: 'avatar stredny ucet-ikona', 'aria-hidden': 'true', text: '🧾' }),
      el('div', { class: 'polozka-text' }, [
        el('b', { text: u.nazov }),
        el('small', { text: (o && o.meno ? o.meno + ' · ' : '') + pen(u.suma, u.mena) }),
        stavPill(u.stav)
      ]),
      neprec ? el('span', { class: 'bublina', text: String(neprec) }) : null
    ];
    var p = el(maChat ? 'button' : 'div', { type: maChat ? 'button' : null, class: 'polozka sklo' + (maChat ? ' klik' : ''), onclick: maChat ? function () { otvorChat(u.id); } : null }, obsah);
    if (akcie.length) return el('div', { class: 'polozka-obal' }, [p, el('div', { class: 'polozka-akcie' }, akcie)]);
    return p;
  }
  function kresliZhody() {
    var box = $('#zhody-obsah'); if (!box) return;
    box.textContent = '';
    if (!ja) {
      box.appendChild(el('div', { class: 'brana sklo' }, [
        el('div', { class: 'brana-ikona', text: '💸' }),
        el('p', { text: t('bez_profilu_zhody') }),
        el('button', { type: 'button', class: 'tl tl-hlavne', text: t('vytvorit_profil'), onclick: function () { otvorProfil(); } })
      ]));
    } else {
      (mojeData.oznamy || []).forEach(function (o) {
        var kl = o.typ === 'neprislo' ? 'oz_neprislo' : 'oz_prebrate';
        box.appendChild(el('div', { class: 'oznam ' + o.typ }, [t(kl, { n: (o.data || {}).nazov })]));
      });
      box.appendChild(el('div', { class: 'sklo titul-obal' }, [titulKarta(), el('button', { type: 'button', class: 'tl-maly', text: t('vsetky_tituly'), onclick: otvorTituly })]));
      box.appendChild(el('h2', { text: t('platim_h') }));
      if (mojeData.platim.length) mojeData.platim.forEach(function (u) { box.appendChild(polozka(u, 'platim')); });
      else box.appendChild(el('p', { class: 'nic', text: t('nic_platim') }));
      box.appendChild(el('h2', { text: t('moje_h') }));
      if (mojeData.moje.length) mojeData.moje.forEach(function (u) { box.appendChild(polozka(u, 'moje')); });
      else box.appendChild(el('p', { class: 'nic', text: t('nic_moje') }));
    }
    box.appendChild(el('h2', { text: t('rebricek_h') }));
    if (rebricek.length) {
      var ol = el('ol', { class: 'rebricek sklo' });
      rebricek.forEach(function (r, i) {
        ol.appendChild(el('li', null, [el('span', { class: 'poradie', text: String(i + 1) }), avatar(r, 'mini'),
          el('div', { class: 'reb-text' }, [el('b', { text: r.meno }), el('small', { text: titul(Number(r.eur)) })]),
          el('span', { class: 'reb-suma', text: domaca(Number(r.eur)) })]));
      });
      box.appendChild(ol);
    } else box.appendChild(el('p', { class: 'nic', text: t('nic_rebricek') }));
    box.appendChild(el('h2', { text: t('slava_h') }));
    if (slava.length) slava.forEach(function (s) {
      box.appendChild(el('div', { class: 'slava sklo' }, [avatar({ meno: s.kto, foto: s.kto_foto }, 'mini'),
        el('p', null, [t('zaplatil_kto', { k: s.kto || '?', s: pen(s.suma, s.mena), n: s.nazov }), el('small', { text: (s.komu ? '→ ' + s.komu + ' · ' : '') + pred(s.kedy) })])]));
    });
    else box.appendChild(el('p', { class: 'nic', text: t('nic_slava') }));
  }
  function kresliOdznakZhod() {
    var n = 0;
    (mojeData.moje || []).concat(mojeData.platim || []).forEach(function (u) { n += Number(u.neprecitane) || 0; if (u.ja_som === 'majitel' && u.stav === 'poslane') n++; });
    n += (mojeData.oznamy || []).length;
    var b = $('#zhody-bodka');
    b.textContent = n > 9 ? '9+' : String(n);
    b.hidden = n === 0;
  }

  // ——— načítanie ———
  function nacitaj(ticho) {
    if (!ticho) { nacitane = false; chybaNacitania = false; kresliDeck(); }
    return rpc('zaplatil_zoznam', { p_kluc: kluc || null }).then(function (d) {
      nacitane = true; chybaNacitania = false;
      var predtym = deck.map(function (u) { return u.id; }).join();
      ucty = d.ucty || []; slava = d.slava || []; rebricek = d.rebricek || []; stat = d.stat;
      kresliStat();
      var pocetPred = deck.length;
      if (!ticho || !deck.length || (deck[0] && deck[0].demo && ucty.length)) { postavDeck(); kresliDeck(); }
      else {
        // ticho: pridaj nové účty na koniec, zmaž tie, čo už nie sú
        var zive = new Set(ucty.map(function (u) { return u.id; }));
        var videne = new Set(deck.map(function (u) { return u.id; }));
        deck = deck.filter(function (u) { return u.demo || zive.has(u.id); });
        ucty.forEach(function (u) { if (!videne.has(u.id) && !preskocene.has(u.id)) deck.push(u); });
        if (deck.map(function (u) { return u.id; }).join() !== predtym || pocetPred !== deck.length) kresliDeck();
      }
      if (aktivnyTab === 'zhody') kresliZhody();
      if (odkazId && !ticho) skontrolujOdkaz();
    }).catch(function () {
      if (ticho) return;
      nacitane = true; chybaNacitania = true;
      deck = []; kresliStat(); kresliDeck();
    });
  }
  function skontrolujOdkaz() {
    if (!ucty.some(function (u) { return u.id === odkazId; })) toast(t('uz_nie_je'));
    odkazId = null;
  }
  function nacitajMoje(ticho) {
    if (!kluc) { kresliZhody(); kresliOdznakZhod(); return Promise.resolve(); }
    return rpc('zaplatil_moje', { p_kluc: kluc }).then(function (d) {
      if (!d) { // kľúč neplatí (napr. profil zmazaný)
        ja = null; ls('zaplatil_ja', null); kresliProfilTlacidlo(); kresliNahrat(); kresliZhody(); return;
      }
      ja = d.profil; ls('zaplatil_ja', ja);
      upozornenia(d);
      mojeData = { moje: d.moje || [], platim: d.platim || [], oznamy: d.oznamy || [] };
      kresliProfilTlacidlo(); kresliNahrat();
      if (aktivnyTab === 'zhody') kresliZhody();
      kresliOdznakZhod();
    }).catch(function () {});
  }
  function upozornenia(d) {
    var prvy = !Object.keys(predoslyStav).length;
    var nove = {};
    (d.moje || []).forEach(function (u) {
      var b = predoslyStav[u.id];
      if (!prvy && b && b !== u.stav && chat.id !== u.id) {
        if (u.stav === 'poslane') toast(t('t_novy_doklad', { m: (u.platca || {}).meno, n: u.nazov }));
        else if (u.stav === 'zhoda') toast(t('t_zhoda_moj', { n: u.nazov }));
        else if (u.stav === 'potvrdene') oslava();
      }
      nove[u.id] = u.stav;
    });
    (d.platim || []).forEach(function (u) {
      var b = predoslyStav[u.id];
      if (!prvy && b && b !== u.stav && u.stav === 'potvrdene') { nacitaj(true); if (chat.id !== u.id) { oslava(); toast(t('t_potvrdene', { n: u.nazov })); } }
      nove[u.id] = u.stav;
    });
    if (!prvy && (d.oznamy || []).length > (mojeData.oznamy || []).length) {
      var o = d.oznamy[d.oznamy.length - 1];
      toast(t(o.typ === 'neprislo' ? 'oz_neprislo' : 'oz_prebrate', { n: (o.data || {}).nazov }));
    }
    predoslyStav = nove;
  }

  // ——— prepínanie častí ———
  function ukaz(co) {
    aktivnyTab = co;
    ['platit', 'nahrat', 'zhody'].forEach(function (v) {
      $('#v-' + v).hidden = v !== co;
      $('#tab-' + v).setAttribute('aria-selected', v === co ? 'true' : 'false');
    });
    if (co === 'zhody') {
      kresliZhody();
      nacitaj(true);
      nacitajMoje(true).then(function () {
        if ((mojeData.oznamy || []).length) rpc('zaplatil_oznamy_videne', { p_kluc: kluc }).catch(function () {});
      });
    }
    if (co === 'nahrat') { kresliNahrat(); if (editorUctu && editorUctu.base) editorUctu.kresli(); }
  }

  function otvorInfo() {
    var deti = [
      el('h2', { id: 'harok-nadpis', text: t('ako') }),
      el('ol', { class: 'kroky' }, t('info_kroky').map(function (x) { return el('li', { text: x }); })),
      el('h3', { text: t('info_ochrana_h') }),
      el('ul', { class: 'ochrana' }, t('info_ochrana').map(function (x) { return el('li', { text: x }); })),
      el('p', { class: 'upozornenie pozor', text: t('info_pozor') })
    ];
    if (instalacia) {
      deti.push(el('button', { type: 'button', class: 'tl tl-hlavne', text: t('instalovat'), onclick: function () { instalacia.prompt(); instalacia = null; zavriHarok(true); } }));
    } else if (!window.matchMedia('(display-mode: standalone)').matches && !navigator.standalone) {
      deti.push(el('p', { class: 'drobne', text: t('instalovat_ios') }));
    }
    deti.push(el('button', { type: 'button', class: 'tl tl-druhe', text: t('rozumiem'), onclick: function () { zavriHarok(true); } }));
    deti.push(el('p', { class: 'drobne' }, [t('napad') + ' ', el('a', { href: '/ochrana-udajov/', text: t('ochrana_udajov') }), ' · ', el('a', { href: '/', text: 'durica.si' })]));
    otvorHarok(deti);
  }

  function nahlas() {
    var u = deck[0];
    if (!u || u.demo) return;
    potvrd(t('nahlasit_otazka'), t('nahlasit_text'), t('nahlasit'), true).then(function (ok) {
      if (!ok) return;
      rpc('zaplatil_nahlas', { p_id: u.id, p_kto: vid }).catch(function () {});
      preskocene.add(u.id); ls('zaplatil_preskocene', Array.from(preskocene).slice(-500));
      deck.shift(); kresliDeck();
      toast(t('nahlasene'));
    });
  }

  // ——— štart ———
  function start() {
    editorUctu = Editor($('#priloha-canvas'));
    prelozStatiku();
    kresliStat();
    kresliDeck();
    kresliNahrat();

    Array.prototype.forEach.call(document.querySelectorAll('.lista button[data-view]'), function (b) {
      b.addEventListener('click', function () { ukaz(b.getAttribute('data-view')); });
    });
    $('#btn-nie').onclick = function () { rozhodni('nie'); };
    $('#btn-ano').onclick = function () { rozhodni('ano'); };
    $('#btn-nahlas').onclick = nahlas;
    $('#btn-info').onclick = otvorInfo;
    $('#btn-profil').onclick = function () { otvorProfil(); };
    $('#jazyk-sk').onclick = function () { nastavJazyk('sk'); };
    $('#jazyk-cz').onclick = function () { nastavJazyk('cz'); };
    Array.prototype.forEach.call(document.querySelectorAll('#mena button'), function (b) {
      b.addEventListener('click', function () { nastavMenu(b.getAttribute('data-mena')); });
    });
    $('#form').addEventListener('submit', odosli);
    $('#f-priloha').addEventListener('change', function (e) { nastavPrilohu(e.target.files && e.target.files[0]); });
    $('#priloha-spat').onclick = function () { editorUctu.spat(); };
    $('#priloha-prec').onclick = zrusPrilohu;
    $('#priloha-pdf-prec').onclick = zrusPrilohu;
    $('#f-iban').addEventListener('blur', function (e) {
      var v = e.target.value.trim();
      if (v && /^[A-Za-z]{2}/.test(v)) e.target.value = ibanPekny(v);
    });
    $('#btn-zdielat').onclick = function () { if (poslednyNahraty) zdielaj(poslednyNahraty); };
    $('#btn-dalsi').onclick = function () { $('#hotovo').hidden = true; $('#form').hidden = false; };
    $('#zaves').addEventListener('click', function (e) { if (e.target === e.currentTarget) zavriHarok(); });
    $('#lupa').addEventListener('click', function () { $('#lupa').hidden = true; });
    $('#chat-pisanie').addEventListener('submit', posliSpravu);
    document.addEventListener('keydown', function (e) {
      if (e.key !== 'Escape') return;
      if (!$('#lupa').hidden) { $('#lupa').hidden = true; return; }
      if (!$('#zaves').hidden) { zavriHarok(); return; }
      if (!$('#zhoda').hidden) { zavriZhodu(); return; }
      if (!$('#chat').hidden) { zavriChat(); return; }
      if (!$('#v-platit').hidden && deck.length) return;
    });
    document.addEventListener('keydown', function (e) {
      if (!$('#v-platit').hidden && $('#zaves').hidden && $('#chat').hidden && $('#zhoda').hidden && !/INPUT|TEXTAREA/.test((e.target || {}).tagName)) {
        if (e.key === 'ArrowRight') rozhodni('ano');
        if (e.key === 'ArrowLeft') rozhodni('nie');
      }
    });
    window.addEventListener('beforeinstallprompt', function (e) { e.preventDefault(); instalacia = e; });
    window.addEventListener('resize', function () { if (editorUctu && editorUctu.base) editorUctu.kresli(); });

    nacitaj();
    nacitajMoje(true);
    setInterval(function () { if (!document.hidden) { nacitajMoje(true); } }, 20000);
    setInterval(function () { if (!document.hidden) nacitaj(true); }, 60000);
    document.addEventListener('visibilitychange', function () { if (!document.hidden) { nacitajMoje(true); nacitaj(true); } });

    if ('serviceWorker' in navigator && location.protocol === 'https:') navigator.serviceWorker.register('sw.js').catch(function () {});
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', start);
  else start();
})();
