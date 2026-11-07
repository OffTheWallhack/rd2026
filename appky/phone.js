/* robOS: telefón a iPad s mojimi appkami (shell). Spúšťa ho appky/robos.js, ktorý rozhodne, či ide o telefón,
   iPad alebo plochu Win95 (desktop.js). Zoznam appiek je v /apps.json: tu sa žiadna appka nepíše ručne.
   Na webe sa telefón (iPad) vysunie zospodu po ťuknutí na "Moje appky" / záložku "Appky". Appky, ktoré sú
   samostatné weby alebo potrebujú celú obrazovku (away: true), sa na webe otvoria v novej karte.
   Na /appky/ (html data-robos="page") je telefón (iPad) celou stránkou.
   Eventy sú v appky/events.json, takže ich zmena je úprava jedného súboru. */
(function () {
  'use strict';
  var R = window.RobOS;
  if (!R || window.__robosPhone) return; window.__robosPhone = true;
  var BASE = R.BASE, ROOT = R.ROOT, PAGE = R.PAGE, TABLET = R.mode === 'tablet', FILL = PAGE && R.fill;

  /* ---------- settings ---------- */
  var CFG = {
    whatsapp: R.data.contact.whatsapp, mail: R.data.contact.mail, instagram: R.data.contact.instagram, x: R.data.contact.x,
    me: ROOT + 'img/portrait.webp',
    icon: BASE + 'img/robos-192.png',
    wallBase: BASE + 'tapety/'
  };
  var APPS = R.data.apps.filter(function (a) { return a.visibility === 'public' && a.robos !== false; });
  // wallpapers in appky/tapety/ (light: dark clock on a light picture)
  var WALLS = [
    { id: 'fialovy', name: 'Fialový západ' }, { id: 'grafit', name: 'Grafit' }, { id: 'okruh', name: 'Okruh' },
    { id: 'chrom', name: 'Chróm', light: true }, { id: 'halftone', name: 'Halftone' }, { id: 'grafika', name: 'Čiernobiela' },
    { id: 'obloha', name: 'Obloha' }, { id: 'led', name: 'LED' }, { id: 'rave', name: 'Rave' }, { id: 'beton', name: 'Betón', light: true }
  ];
  var TAGC = { 'GOSko': '#39ff88', 'Drop Ups': '#b98cff', 'Red Bull': '#ff6170', 'Festival': '#ffb21a' };
  var reduced = !!(window.matchMedia && matchMedia('(prefers-reduced-motion: reduce)').matches);

  /* ---------- dates ---------- */
  var DAYS = ['nedeľa', 'pondelok', 'utorok', 'streda', 'štvrtok', 'piatok', 'sobota'];
  var DSH = ['Ne', 'Po', 'Ut', 'St', 'Št', 'Pi', 'So'];
  var MGEN = ['januára', 'februára', 'marca', 'apríla', 'mája', 'júna', 'júla', 'augusta', 'septembra', 'októbra', 'novembra', 'decembra'];
  var MSH = ['JAN', 'FEB', 'MAR', 'APR', 'MÁJ', 'JÚN', 'JÚL', 'AUG', 'SEP', 'OKT', 'NOV', 'DEC'];
  function pad(n) { return (n < 10 ? '0' : '') + n; }
  function parse(s) { var p = String(s).split('-').map(Number); return new Date(p[0], (p[1] || 1) - 1, p[2] || 1); }
  function shortDate(d) { return DSH[d.getDay()] + ' ' + d.getDate() + '. ' + (d.getMonth() + 1) + '.'; }

  /* ---------- icons (own designs) ---------- */
  var ICONS = {
    cal: '<svg viewBox="0 0 62 62"><rect width="62" height="62" fill="#17141d"/><rect width="62" height="18" fill="#ffb21a"/><text class="ro-calmon" x="31" y="13.5" text-anchor="middle" font-family="-apple-system,system-ui,sans-serif" font-size="10.5" font-weight="800" letter-spacing="1" fill="#1b1200">OKT</text><text class="ro-calday" x="31" y="49" text-anchor="middle" font-family="-apple-system,system-ui,sans-serif" font-size="28" font-weight="700" fill="#fff">18</text></svg>',
    me: '<img src="' + CFG.me + '" alt="" style="object-position:50% 12%">',
    msg: '<svg viewBox="0 0 62 62"><defs><linearGradient id="roMg" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#5ff07f"/><stop offset="1" stop-color="#1fb84a"/></linearGradient></defs><rect width="62" height="62" fill="url(#roMg)"/><path d="M31 15c-9.4 0-17 6.3-17 14 0 4.4 2.5 8.4 6.4 11-.3 2.4-1.5 4.6-3.4 6.3 3.6 0 6.8-1.4 9-3.5 1.6.4 3.3.6 5 .6 9.4 0 17-6.3 17-14s-7.6-14.4-17-14.4z" fill="#fff"/></svg>',
    mail: '<svg viewBox="0 0 62 62"><defs><linearGradient id="roMl" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#4fb6ff"/><stop offset="1" stop-color="#1f6bff"/></linearGradient></defs><rect width="62" height="62" fill="url(#roMl)"/><rect x="13" y="19" width="36" height="25" rx="4" fill="#fff"/><path d="M14 21l17 13 17-13" fill="none" stroke="#1f6bff" stroke-width="2.6" stroke-linejoin="round"/></svg>',
    ig: '<svg viewBox="0 0 62 62"><rect width="62" height="62" fill="#ffb21a"/><text x="31" y="42" text-anchor="middle" font-family="-apple-system,system-ui,sans-serif" font-size="32" font-weight="800" fill="#1b1200">@</text></svg>',
    x: '<svg viewBox="0 0 62 62"><rect width="62" height="62" fill="#000"/><rect x=".75" y=".75" width="60.5" height="60.5" rx="14" fill="none" stroke="rgba(255,255,255,.18)" stroke-width="1.5"/><text x="31" y="42" text-anchor="middle" font-family="-apple-system,system-ui,sans-serif" font-size="30" font-weight="800" fill="#fff">X</text></svg>',
    web: '<svg viewBox="0 0 62 62"><rect width="62" height="62" fill="#2a2633"/><circle cx="31" cy="31" r="15" fill="none" stroke="#fff" stroke-width="2.6"/><path d="M16 31h30M31 16c-5 4.5-5 25.5 0 30M31 16c5 4.5 5 25.5 0 30" fill="none" stroke="#fff" stroke-width="2.2"/></svg>'
  };
  var CHEV = '<svg class="ro-chev" width="10" height="16" viewBox="0 0 10 16" aria-hidden="true"><path d="M2 2l6 6-6 6" fill="none" stroke="#fff" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/></svg>';

  /* ---------- markup built from apps.json ---------- */
  function esc(s) { return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;'); }
  var PER = TABLET ? 24 : 12;                                    // apps per home page (like iOS pages)
  function appHtml(a) {
    var ic = '<span class="ro-ic"><img src="' + esc(R.url(a.icon)) + '" alt="" loading="lazy"></span>', lb = '<span>' + esc(a.short || a.name) + '</span>';
    if (!a.embed) return '<a class="ro-app" href="' + esc(R.url(a.url)) + '" target="_blank" rel="noopener" aria-label="' + esc(a.name) + '. Otvoriť v novej karte.">' + ic + lb + '</a>';
    return '<button class="ro-app" type="button" data-ro-open="' + esc(a.id) + '" aria-label="' + esc(a.name) + '">' + ic + lb + '</button>';
  }
  var SYS = [
    '<button class="ro-app" type="button" data-ro-open="eventy"><span class="ro-ic" data-ro-icon="cal"></span><span>Eventy</span></button>',
    '<button class="ro-app" type="button" data-ro-open="me"><span class="ro-ic" data-ro-icon="me"></span><span>O mne</span></button>'
  ];
  function pagesHtml(widgets, save) {
    var items = APPS.map(appHtml).concat(SYS), pages = [];
    for (var i = 0; i < items.length; i += PER) pages.push(items.slice(i, i + PER));
    return pages.map(function (pg, n) {
      return '<div class="ro-page">' + (n === 0 ? widgets : '') + '<div class="ro-grid">' + pg.join('') + '</div>' + (n === pages.length - 1 ? save : '') + '</div>';
    }).join('');
  }
  function winsHtml() {
    return APPS.filter(function (a) { return a.embed; }).map(function (a) { return '<section class="ro-win" data-ro-win="' + esc(a.id) + '" aria-label="' + esc(a.name) + '"></section>'; }).join('');
  }

  /* ---------- markup ---------- */
  var html =
  '<div class="ro-scrim"></div>' +
  '<span class="ro-probe" aria-hidden="true"></span>' +
  '<button class="ro-x" type="button" aria-label="Zavrieť telefón"><svg width="18" height="18" viewBox="0 0 24 24" aria-hidden="true"><path d="M6 6l12 12M18 6L6 18" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round"/></svg></button>' +
  '<button class="ro-launch" type="button" aria-label="Otvoriť moje appky"><img src="' + CFG.icon + '" alt="">Moje appky</button>' +
  '<div class="ro-phone peek" aria-label="robOS, moje appky">' +
   '<div class="ro-body">' +
    '<span class="ro-side ro-s1"></span><span class="ro-side ro-s2"></span><span class="ro-side ro-s3"></span><span class="ro-side ro-s4"></span>' +
    '<button class="ro-hide" type="button" aria-label="Schovať telefón"><svg width="18" height="18" viewBox="0 0 24 24" aria-hidden="true"><path d="M6 9l6 6 6-6" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"/></svg></button>' +
    '<div class="ro-screen">' +
     '<div class="ro-island"></div>' +
     '<div class="ro-status">' +
      '<button class="ro-webback" type="button"><svg width="14" height="14" viewBox="0 0 24 24" aria-hidden="true"><path d="M15 5l-7 7 7 7" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"/></svg>Web</button>' +
      '<span class="ro-t" data-ro-time>12:00</span>' +
      '<span class="ro-r" aria-hidden="true">' +
       '<svg width="18" height="12" viewBox="0 0 18 12"><rect x="0" y="8" width="3" height="4" rx="1" fill="#fff"/><rect x="5" y="5.5" width="3" height="6.5" rx="1" fill="#fff"/><rect x="10" y="3" width="3" height="9" rx="1" fill="#fff"/><rect x="15" y="0" width="3" height="12" rx="1" fill="#fff"/></svg>' +
       '<svg width="16" height="12" viewBox="0 0 16 12"><path d="M8 11.5L5.6 8.9a3.4 3.4 0 014.8 0zM3.4 6.7a6.6 6.6 0 019.2 0l-1.4 1.4a4.6 4.6 0 00-6.4 0zM1.2 4.5a9.8 9.8 0 0113.6 0l-1.4 1.4a7.8 7.8 0 00-10.8 0z" fill="#fff"/></svg>' +
       '<svg width="27" height="13" viewBox="0 0 27 13"><rect x=".5" y=".5" width="23" height="12" rx="3.5" fill="none" stroke="#fff" stroke-opacity=".45"/><rect x="2" y="2" width="17" height="9" rx="2" fill="#fff"/><path d="M25 4.5v4c.8-.3 1.3-1.1 1.3-2s-.5-1.7-1.3-2z" fill="#fff" fill-opacity=".45"/></svg>' +
      '</span>' +
     '</div>' +
     '<div class="ro-layer ro-wall"></div>' +

     '<div class="ro-layer ro-home">' +
      '<div class="ro-pager">' + pagesHtml('<div class="ro-widgets">' +
       '<div class="ro-wg ro-wxw" aria-label="Počasie v Bratislave"><span class="ro-k">Bratislava</span><span class="ro-wxi" data-ro-wx-icon></span><span class="ro-big" data-ro-wx-t></span><span class="ro-sm" data-ro-wx-d>Počasie sa načítava</span><span class="ro-sm" data-ro-wx-hl></span></div>' +
       '<button class="ro-wg ro-ev" type="button" data-ro-open="eventy" aria-label="Najbližší event"><img class="ro-pic" alt="" hidden><span class="ro-in"><span class="ro-k">Najbližší event</span><span class="ro-ttl" data-ro-next-t>Načítavam…</span><span class="ro-sm" data-ro-next-m></span></span></button>' +
      '</div>', '<button class="ro-save" type="button" data-ro-sheet="save"><svg width="30" height="30" viewBox="0 0 30 30" aria-hidden="true" style="flex:none"><rect x="8" y="2" width="14" height="26" rx="3.5" fill="none" stroke="#fff" stroke-width="2"/><path d="M15 9v9m-4-4l4 4 4-4" fill="none" stroke="#ffb21a" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/></svg><span>Ulož si robOS na plochu<small>Bude ako appka v tvojom zariadení</small></span>' + CHEV + '</button>') + '</div><div class="ro-pdots"></div>' +
      '<nav class="ro-dock" aria-label="Dock">' +
       '<a class="ro-app" href="' + CFG.whatsapp + '" target="_blank" rel="noopener" aria-label="Správy na WhatsApp"><span class="ro-ic" data-ro-icon="msg"></span><span>Správy</span></a>' +
       '<button class="ro-app" type="button" data-ro-sheet="mail" aria-label="Mail"><span class="ro-ic" data-ro-icon="mail"></span><span>Mail</span></button>' +
       '<a class="ro-app" href="' + CFG.instagram + '" target="_blank" rel="noopener" aria-label="Instagram"><span class="ro-ic" data-ro-icon="ig"></span><span>Instagram</span></a>' +
       '<a class="ro-app" href="' + CFG.x + '" target="_blank" rel="noopener" aria-label="X"><span class="ro-ic" data-ro-icon="x"></span><span>X</span></a>' +
      '</nav>' +
     '</div>' +

     '<div class="ro-layer ro-apps">' +
      winsHtml() +
      '<section class="ro-win" data-ro-win="eventy" aria-label="Eventy"><div class="ro-scroll">' +
       '<h2>Eventy <span class="ro-chip" data-ro-sample hidden>VZOR</span></h2><p class="ro-lead">Čo sa deje okolo mňa: skate, rave, festivaly a event autá.</p>' +
       '<div class="ro-seg" role="tablist" aria-label="Filter eventov"><button type="button" role="tab" class="on" data-ro-when="up" aria-selected="true">Nadchádzajúce</button><button type="button" role="tab" data-ro-when="past" aria-selected="false">Prebehlo</button></div>' +
       '<div class="ro-evlist"></div>' +
      '</div></section>' +
      '<section class="ro-win" data-ro-win="me" aria-label="O mne"><div class="ro-scroll">' +
       '<div class="ro-me"><img src="' + CFG.me + '" alt="Robert Ďurica"><h2>Robert Ďurica</h2><p class="ro-lead">Robím eventy a jazdím s event autami. Popri tom hrám ako DJ a skladám malé appky, ktoré nájdeš tu v telefóne.</p></div>' +
       '<div class="ro-rows">' +
        '<a class="ro-row" href="' + ROOT + '"><span class="ro-ic" data-ro-icon="web"></span><span>Web<small>Všetko o mne a mojej práci</small></span>' + CHEV + '</a>' +
        '<a class="ro-row" href="' + CFG.instagram + '" target="_blank" rel="noopener"><span class="ro-ic" data-ro-icon="ig"></span><span>Instagram<small>@duriica</small></span>' + CHEV + '</a>' +
        '<a class="ro-row" href="' + CFG.whatsapp + '" target="_blank" rel="noopener"><span class="ro-ic" data-ro-icon="msg"></span><span>Správy<small>Napíš mi na WhatsApp</small></span>' + CHEV + '</a>' +
        '<button class="ro-row" type="button" data-ro-sheet="mail"><span class="ro-ic" data-ro-icon="mail"></span><span>Mail<small>' + CFG.mail + '</small></span>' + CHEV + '</button>' +
        (R.fine ? '<button class="ro-row" type="button" data-ro-mode="desktop"><span class="ro-ic" data-ro-icon="web"></span><span>Plocha ako Windows 95<small>Prepnúť na počítačový pohľad</small></span>' + CHEV + '</button>' : '') +
       '</div>' +
      '</div></section>' +
     '</div>' +

     '<div class="ro-layer ro-sheet" data-ro-sheetid="save" aria-hidden="true"><div class="ro-sheetcard" role="dialog" aria-label="Ulož si robOS na plochu">' +
      '<div class="ro-grab"></div><h3>Ulož si robOS na plochu</h3>' +
      (PAGE ? '' : '<a class="ro-cta" href="' + BASE + '" style="margin-top:14px">Najprv otvor robOS na celú obrazovku</a>') +
      '<div class="ro-seg" role="tablist" aria-label="Typ telefónu"><button type="button" role="tab" class="on" data-ro-os="ios" aria-selected="true">iPhone</button><button type="button" role="tab" data-ro-os="and" aria-selected="false">Android</button></div>' +
      '<ol class="ro-steps" data-ro-steps="ios"><li><b>1</b><span>Otvor stránku v Safari.</span></li><li><b>2</b><span>Ťukni na Zdieľať <svg width="16" height="18" viewBox="0 0 16 18" aria-hidden="true"><path d="M8 1v11M4 5l4-4 4 4M2 9v7h12V9" fill="none" stroke="#ffb21a" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg> dole.</span></li><li><b>3</b><span>Vyber „Pridať na plochu“ a potvrď.</span></li></ol>' +
      '<ol class="ro-steps" data-ro-steps="and" hidden><li><b>1</b><span>Otvor stránku v Chrome.</span></li><li><b>2</b><span>Ťukni na tri bodky ⋮ vpravo hore.</span></li><li><b>3</b><span>Vyber „Pridať na plochu“ alebo „Inštalovať“.</span></li></ol>' +
      '<button class="ro-done" type="button" data-ro-close>Hotovo</button>' +
     '</div></div>' +

     '<div class="ro-layer ro-sheet" data-ro-sheetid="mail" aria-hidden="true"><div class="ro-sheetcard" role="dialog" aria-label="Mail">' +
      '<div class="ro-grab"></div><h3>Napíš mi mail</h3>' +
      '<p class="ro-mailaddr">' + CFG.mail + '</p>' +
      '<button class="ro-cta" type="button" data-ro-copy>Skopírovať adresu</button>' +
      '<a class="ro-cta alt" href="mailto:' + CFG.mail + '">Otvoriť v mailovej appke</a>' +
      '<button class="ro-done" type="button" data-ro-close>Zavrieť</button>' +
     '</div></div>' +

     '<div class="ro-layer ro-pick" aria-hidden="true" role="dialog" aria-label="Vyber tapetu"><h3>TAPETA</h3><span class="ro-pname"></span>' +
      '<div class="ro-cards"></div><div class="ro-dots" aria-hidden="true"></div>' +
      '<div class="ro-pickbar"><button type="button" data-ro-pick-close>Zrušiť</button><button type="button" class="ro-use">Použiť</button></div>' +
     '</div>' +

     '<div class="ro-layer ro-lock"><div class="ro-layer ro-wall"></div><div class="ro-lockcol">' +
      '<span class="ro-lockdate" data-ro-date-long></span><span class="ro-locktime" data-ro-time>12:00</span>' +
      '<div class="ro-lockw">' +
       '<div><b data-ro-next-d>Eventy</b><span data-ro-next-t>Načítavam…</span><em data-ro-next-p></em></div>' +
       '<div class="ro-wx off"><b><span data-ro-wx-icon></span>Bratislava</b><span class="ro-wxt" data-ro-wx-t></span></div>' +
      '</div>' +
      '<div class="ro-lockbot"><button class="ro-pill" type="button" data-ro-pick-open><svg width="16" height="16" viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="4" fill="none" stroke="currentColor" stroke-width="2"/><path d="M3 16l5-5 4 4 3-3 6 6" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/></svg>Prispôsobiť</button>' +
      '<button class="ro-unlock" type="button">Potiahni hore</button></div>' +
     '</div></div>' +

     '<div class="ro-layer ro-boot">' + '<span class="ro-mark" aria-hidden="true">' + ['11110','10001','10001','11110','10100','10010','10001'].join('').split('').map(function (c, i) { return '<i' + (c === '1' ? ' class="on" style="transition-delay:' + (i * 28) + 'ms"' : '') + '></i>'; }).join('') + '</span>' + '<span class="ro-word">rob<b>OS</b></span><span class="ro-bar"><i></i></span></div>' +
     '<button class="ro-homebar" type="button" aria-label="Späť na plochu" aria-hidden="true"><i></i></button>' +
     '<div class="ro-toast" role="status">Späť na plochu: ťukni na pásik dole</div>' +
    '</div>' +
   '</div>' +
  '</div>';

  var root = document.createElement('div'); root.id = 'robos'; root.innerHTML = html;
  document.body.appendChild(root);
  var $ = function (s) { return root.querySelector(s); }, $$ = function (s) { return Array.prototype.slice.call(root.querySelectorAll(s)); };
  $$('[data-ro-icon]').forEach(function (el) { el.innerHTML = ICONS[el.getAttribute('data-ro-icon')] || ''; });
  document.documentElement.classList.add(PAGE ? 'ro-page' : 'ro-docked');
  if (FILL) document.documentElement.classList.add('ro-fill');
  if (TABLET) root.classList.add('ro-ipad');

  var phone = $('.ro-phone'), scrim = $('.ro-scrim'), lock = $('.ro-lock'), bootEl = $('.ro-boot'), home = $('.ro-home'),
      homebar = $('.ro-homebar'), toast = $('.ro-toast'), launch = $('.ro-launch'), xBtn = $('.ro-x');

  /* ---------- clock ---------- */
  function tick() {
    var n = new Date();
    $$('[data-ro-time]').forEach(function (e) { e.textContent = n.getHours() + ':' + pad(n.getMinutes()); });
    $$('[data-ro-date-long]').forEach(function (e) { e.textContent = DAYS[n.getDay()] + ' ' + n.getDate() + '. ' + MGEN[n.getMonth()]; });
    $$('[data-ro-date-short]').forEach(function (e) { e.textContent = DSH[n.getDay()].toLowerCase() + ' ' + n.getDate() + '. ' + (n.getMonth() + 1) + '.'; });
    $$('.ro-calday').forEach(function (e) { e.textContent = n.getDate(); });
    $$('.ro-calmon').forEach(function (e) { e.textContent = MSH[n.getMonth()]; });
  }

  /* ---------- events (appky/events.json) ---------- */
  var up = [], past = [];
  function img(src) { return /^https?:/.test(src) ? src : ROOT + src; }
  function renderEvents(which) {
    var list = which === 'past' ? past : up, box = $('.ro-evlist');
    box.textContent = '';
    if (!list.length) { var p = document.createElement('p'); p.className = 'ro-lead'; p.textContent = 'Zatiaľ tu nič nie je.'; box.appendChild(p); return; }
    var today = new Date();
    list.forEach(function (e) {
      var d = parse(e.datum), card = document.createElement('article'); card.className = 'ro-evc';
      if (e.obrazok) { var im = document.createElement('img'); im.src = img(e.obrazok); im.alt = ''; im.loading = 'lazy'; card.appendChild(im); }
      var row = document.createElement('div'); row.className = 'ro-evrow';
      var dt = document.createElement('div'); dt.className = 'ro-dt';
      var b = document.createElement('b'); b.textContent = d.getDate();
      var sm = document.createElement('small'); sm.textContent = MSH[d.getMonth()] + (d.getFullYear() !== today.getFullYear() ? ' ' + String(d.getFullYear()).slice(2) : '');
      dt.appendChild(b); dt.appendChild(sm);
      var tx = document.createElement('div');
      var h = document.createElement('h3'); h.textContent = e.nazov || '';
      var p2 = document.createElement('p'); p2.textContent = [e.popis, e.miesto].filter(Boolean).join(' · ');
      tx.appendChild(h); tx.appendChild(p2);
      if (e.stitok) { var tg = document.createElement('span'); tg.className = 'ro-tag'; tg.textContent = e.stitok; tg.style.background = TAGC[e.stitok] || '#ddd'; tx.appendChild(tg); }
      row.appendChild(dt); row.appendChild(tx); card.appendChild(row); box.appendChild(card);
    });
  }
  function setNext() {
    var nx = up[0];
    $$('[data-ro-next-t]').forEach(function (e) { e.textContent = nx ? nx.nazov : 'Čoskoro'; });
    $$('[data-ro-next-m]').forEach(function (e) { e.textContent = nx ? shortDate(parse(nx.datum)) + ' · ' + (nx.miesto || '') : 'Nové eventy pribudnú'; });
    $$('[data-ro-next-d]').forEach(function (e) { var d = nx && parse(nx.datum); e.textContent = d ? DSH[d.getDay()] + ', ' + d.getDate() + '. ' + MSH[d.getMonth()].toLowerCase() : 'Eventy'; });
    $$('[data-ro-next-p]').forEach(function (e) { e.textContent = nx ? (nx.miesto || '') : ''; });
    var pic = $('.ro-ev .ro-pic');
    if (nx && nx.obrazok) { pic.src = img(nx.obrazok); pic.hidden = false; } else pic.hidden = true;
  }
  fetch(BASE + 'events.json', { cache: 'no-cache' }).then(function (r) { return r.json(); }).then(function (data) {
    var t = new Date(); t.setHours(0, 0, 0, 0);
    var all = (data && data.eventy) || [];
    up = all.filter(function (e) { return parse(e.datum) >= t; }).sort(function (a, b) { return parse(a.datum) - parse(b.datum); });
    past = all.filter(function (e) { return parse(e.datum) < t; }).sort(function (a, b) { return parse(b.datum) - parse(a.datum); });
    $('[data-ro-sample]').hidden = !(data && data.vzor);
    setNext(); renderEvents('up');
  }).catch(function () { setNext(); renderEvents('up'); });
  $$('[data-ro-when]').forEach(function (bt) {
    bt.addEventListener('click', function () {
      $$('[data-ro-when]').forEach(function (o) { o.classList.toggle('on', o === bt); o.setAttribute('aria-selected', String(o === bt)); });
      renderEvents(bt.getAttribute('data-ro-when'));
    });
  });

  /* ---------- placement ---------- */
  var isOpen = false, booted = false;
  function safeBottom() { var pr = $('.ro-probe'); return pr ? (parseFloat(getComputedStyle(pr).paddingBottom) || 0) : 0; }
  function dims() {
    if (!TABLET) return { W: 382, H: 802 };
    return window.innerWidth > window.innerHeight ? { W: 1024, H: 768 } : { W: 768, H: 1024 };
  }
  function place() {
    var d = dims(), W = d.W, H = d.H;
    phone.style.setProperty('--ro-w', W + 'px'); phone.style.setProperty('--ro-h', H + 'px');
    root.classList.toggle('ro-land', window.innerWidth > window.innerHeight);
    if (FILL) { phone.style.transform = ''; return; }                          // opened on a phone or iPad: the device is the whole screen
    if (PAGE) { phone.style.transform = 'translate(-50%,-50%) scale(' + Math.min(1, (window.innerHeight - 40) / H, (window.innerWidth - 40) / W) + ')'; return; }
    // on the website: a framed device slides up from the bottom
    var sm = Math.min(TABLET ? 1 : .88, (window.innerWidth - 28) / W, (window.innerHeight - 56 - 18 - safeBottom()) / H);
    phone.style.transform = 'translateX(-50%) translateY(' + (isOpen ? '0px' : '115%') + ') scale(' + sm + ')';
    xBtn.style.top = Math.max(8, window.innerHeight - 18 - safeBottom() - H * sm - 48) + 'px';          // the close button sits just above the device
    xBtn.style.right = Math.max(8, (window.innerWidth - W * sm) / 2) + 'px';
  }
  function setInert(on) { if (PAGE) return; if (on) phone.setAttribute('inert', ''); else phone.removeAttribute('inert'); }
  function openPhone() {
    isOpen = true; phone.classList.remove('peek'); phone.classList.add('open'); setInert(false);
    if (!PAGE) { scrim.classList.add('on'); xBtn.classList.add('on'); document.documentElement.classList.add('ro-lockscroll'); }
    place(); if (!booted) boot();
  }
  function closePhone() {
    if (PAGE) { location.href = ROOT; return; }
    isOpen = false; phone.classList.add('peek'); phone.classList.remove('open'); setInert(true);
    scrim.classList.remove('on'); xBtn.classList.remove('on'); document.documentElement.classList.remove('ro-lockscroll');
    closeApp(true); closeSheets(); place();
    setTimeout(function () { if (!isOpen) lockScreen(); }, 600);
  }
  setInert(true);
  scrim.addEventListener('click', closePhone);
  $('.ro-hide').addEventListener('click', function (e) { e.stopPropagation(); closePhone(); });
  $('.ro-webback').addEventListener('click', function (e) { e.stopPropagation(); closePhone(); });
  launch.addEventListener('click', openPhone);
  xBtn.addEventListener('click', function (e) { e.stopPropagation(); closePhone(); });
  // any link on the page with data-robos-open opens the phone instead of leaving
  document.addEventListener('click', function (e) { var a = e.target.closest && e.target.closest('[data-robos-open]'); if (a && !PAGE) { e.preventDefault(); openPhone(); } });
  window.addEventListener('resize', place);

  // phones: an "Appky" tab in the site's bottom bar
  function addTab() {
    var tabs = document.querySelector('.tabbar');
    if (!tabs || tabs.querySelector('.ro-tab')) return;
    var a = document.createElement('a'); a.className = 'ro-tab'; a.href = BASE; a.setAttribute('role', 'button');
    a.innerHTML = '<svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="7" y="2.5" width="10" height="19" rx="2.4"/><path d="M10.5 5.6h3"/><circle cx="12" cy="18.4" r=".5" fill="currentColor"/></svg><span>Appky</span>';
    a.querySelector('span').setAttribute('data-en', 'Apps');
    a.addEventListener('click', function (e) { e.preventDefault(); openPhone(); });
    tabs.appendChild(a); tabs.classList.add('ro-tabs');
  }
  if (!PAGE) addTab();

  /* ---------- boot & lock ---------- */
  function boot() {
    booted = true;
    if (reduced) { bootEl.classList.add('gone'); return; }
    requestAnimationFrame(function () { bootEl.classList.add('run'); });
    setTimeout(function () { bootEl.classList.add('gone'); }, 1700);
  }
  function unlock() { lock.style.transform = ''; lock.classList.add('away'); setHomebar(); }
  function lockScreen() { lock.classList.remove('away'); lock.style.transform = ''; lock.style.opacity = ''; setHomebar(); }
  var ly = null, ldy = 0, downBtn = false;
  lock.addEventListener('pointerdown', function (e) {
    if (!isOpen) return;
    downBtn = !!e.target.closest('.ro-unlock'); ly = e.clientY; ldy = 0; lock.classList.add('drag');
    try { lock.setPointerCapture(e.pointerId); } catch (err) {}
  });
  lock.addEventListener('pointermove', function (e) {
    if (ly === null) return;
    ldy = Math.min(0, e.clientY - ly);
    var h = lock.getBoundingClientRect().height || 800;
    lock.style.transform = 'translateY(' + ldy + 'px)'; lock.style.opacity = String(1 - Math.min(.6, -ldy / h));
  });
  function lockEnd() {
    if (ly === null) return;
    ly = null; lock.classList.remove('drag');
    var h = lock.getBoundingClientRect().height || 800;
    if (-ldy > h * .18) unlock(); else { lock.style.transform = ''; lock.style.opacity = ''; }
  }
  lock.addEventListener('pointerup', function () { var tap = Math.abs(ldy) < 6; lockEnd(); if (tap && downBtn) unlock(); downBtn = false; });
  lock.addEventListener('pointercancel', lockEnd);
  $('.ro-unlock').addEventListener('keydown', function (e) { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); unlock(); } });

  /* ---------- apps ---------- */
  var current = null, toastShown = false, frames = {};
  var FRAMES = {}, BYID = {};
  APPS.forEach(function (a) { BYID[a.id] = a; if (a.embed) FRAMES[a.id] = { src: R.url(a.url), title: a.name, allow: a.allow || 'fullscreen' }; });
  function setHomebar() { homebar.setAttribute('aria-hidden', isOpen && lock.classList.contains('away') && current ? 'false' : 'true'); }
  function openApp(id, fromEl) {
    if (current) return;
    var win = root.querySelector('[data-ro-win="' + id + '"]'); if (!win) return;
    var scr = $('.ro-screen').getBoundingClientRect(), r = fromEl.getBoundingClientRect();
    var k = phone.offsetWidth ? phone.getBoundingClientRect().width / phone.offsetWidth : 1;
    win.style.transformOrigin = ((r.left + r.width / 2 - scr.left) / k) + 'px ' + ((r.top + r.height / 2 - scr.top) / k) + 'px';
    if (FRAMES[id] && !frames[id]) {
      var fr = document.createElement('iframe'); fr.className = 'ro-frame'; fr.title = FRAMES[id].title;
      fr.allow = FRAMES[id].allow; fr.src = FRAMES[id].src; win.appendChild(fr); frames[id] = fr;
    }
    current = win;
    requestAnimationFrame(function () { requestAnimationFrame(function () { win.classList.add('open'); home.classList.add('back'); }); });
    setHomebar();
    if (!toastShown) { toastShown = true; toast.classList.add('on'); setTimeout(function () { toast.classList.remove('on'); }, 2600); }
  }
  function closeApp(instant) {
    if (!current) return;
    var win = current; current = null;
    win.classList.remove('open'); home.classList.remove('back');
    var wid = win.getAttribute('data-ro-win');
    if (frames[wid]) { var f = frames[wid]; delete frames[wid]; setTimeout(function () { f.remove(); }, instant ? 0 : 450); }
    setHomebar();
  }
  $$('[data-ro-open]').forEach(function (b) {
    b.addEventListener('click', function (e) {
      e.stopPropagation();
      var id = b.getAttribute('data-ro-open');
      if (!PAGE && BYID[id] && BYID[id].away) { window.open(R.url(BYID[id].url), '_blank', 'noopener'); return; }
      openApp(id, b.querySelector('.ro-ic') || b);
    });
  });
  homebar.addEventListener('click', function () { closeApp(); });

  /* ---------- sheets ---------- */
  function closeSheets() { $$('.ro-sheet').forEach(function (s) { s.classList.remove('on'); s.setAttribute('aria-hidden', 'true'); }); }
  $$('[data-ro-sheet]').forEach(function (b) {
    b.addEventListener('click', function (e) {
      e.stopPropagation(); closeSheets();
      var s = root.querySelector('[data-ro-sheetid="' + b.getAttribute('data-ro-sheet') + '"]');
      s.classList.add('on'); s.setAttribute('aria-hidden', 'false');
    });
  });
  $$('.ro-sheet').forEach(function (s) { s.addEventListener('click', function (e) { if (e.target === s) closeSheets(); }); });
  $$('[data-ro-close]').forEach(function (b) { b.addEventListener('click', closeSheets); });
  $$('[data-ro-os]').forEach(function (bt) {
    bt.addEventListener('click', function () {
      $$('[data-ro-os]').forEach(function (o) { o.classList.toggle('on', o === bt); o.setAttribute('aria-selected', String(o === bt)); });
      $$('[data-ro-steps]').forEach(function (ol) { ol.hidden = ol.getAttribute('data-ro-steps') !== bt.getAttribute('data-ro-os'); });
    });
  });
  if (/android/i.test(navigator.userAgent)) { var andBtn = $('[data-ro-os="and"]'); if (andBtn) andBtn.click(); }
  var copyBtn = $('[data-ro-copy]');
  copyBtn.addEventListener('click', function () {
    function done() { copyBtn.textContent = 'Skopírované'; setTimeout(function () { copyBtn.textContent = 'Skopírovať adresu'; }, 1800); }
    function fallback() { var r = document.createRange(); r.selectNodeContents($('.ro-mailaddr')); var s = getSelection(); s.removeAllRanges(); s.addRange(r); }
    try { navigator.clipboard.writeText(CFG.mail).then(done, fallback); } catch (err) { fallback(); }
  });

  document.addEventListener('keydown', function (e) {
    if (e.key !== 'Escape' || !isOpen) return;
    if (pick.classList.contains('on')) closePick();
    else if (root.querySelector('.ro-sheet.on')) closeSheets();
    else if (current) closeApp();
    else closePhone();
  });

  /* ---------- wallpaper ---------- */
  var screen = $('.ro-screen'), wallIdx = 0;
  try { var saved = localStorage.getItem('robos.wall'); WALLS.forEach(function (w, i) { if (w.id === saved) wallIdx = i; }); } catch (err) {}
  function setWall(i) {
    var w = WALLS[i]; wallIdx = i;
    screen.style.setProperty('--ro-wall', 'url("' + CFG.wallBase + w.id + '.webp")');
    screen.classList.toggle('ro-light', !!w.light);
    try { localStorage.setItem('robos.wall', w.id); } catch (err) {}
  }
  setWall(wallIdx);
  var pick = $('.ro-pick'), cards = $('.ro-cards'), dots = $('.ro-dots'), pname = $('.ro-pname'), pickIdx = 0;
  WALLS.forEach(function (w, i) {
    var c = document.createElement('button'); c.type = 'button'; c.className = 'ro-card' + (w.light ? ' light' : '');
    c.style.backgroundImage = 'url("' + CFG.wallBase + w.id + '-s.webp")'; c.setAttribute('aria-label', 'Tapeta ' + w.name);
    c.innerHTML = '<span class="ro-cd" data-ro-date-long></span><span class="ro-ct" data-ro-time></span>';
    c.addEventListener('click', function () { if (pickIdx === i) usePick(); else c.scrollIntoView({ behavior: reduced ? 'auto' : 'smooth', inline: 'center', block: 'nearest' }); });
    cards.appendChild(c); dots.appendChild(document.createElement('i'));
  });
  var loadedBig = {};
  function markPick(i) {
    pickIdx = i; pname.textContent = WALLS[i].name;
    Array.prototype.forEach.call(dots.children, function (d, k) { d.classList.toggle('on', k === i); });
    // swap the small preview for the full picture once the card is in view
    var w = WALLS[i], c = cards.children[i];
    if (!loadedBig[w.id]) { loadedBig[w.id] = 1; var im = new Image(); im.onload = function () { c.style.backgroundImage = 'url("' + im.src + '")'; }; im.src = CFG.wallBase + w.id + '.webp'; }
  }
  cards.addEventListener('scroll', function () {
    var mid = cards.scrollLeft + cards.clientWidth / 2, best = 0, bd = 1e9;
    Array.prototype.forEach.call(cards.children, function (c, k) { var d = Math.abs(c.offsetLeft + c.offsetWidth / 2 - mid); if (d < bd) { bd = d; best = k; } });
    if (best !== pickIdx) markPick(best);
  }, { passive: true });
  function openPick() {
    tick(); pick.classList.add('on'); pick.setAttribute('aria-hidden', 'false'); markPick(wallIdx);
    requestAnimationFrame(function () { var c = cards.children[wallIdx]; cards.scrollLeft = c.offsetLeft - (cards.clientWidth - c.offsetWidth) / 2; });
  }
  function closePick() { pick.classList.remove('on'); pick.setAttribute('aria-hidden', 'true'); }
  function usePick() { setWall(pickIdx); closePick(); }
  $('[data-ro-pick-open]').addEventListener('pointerdown', function (e) { e.stopPropagation(); });
  $('[data-ro-pick-open]').addEventListener('click', function (e) { e.stopPropagation(); openPick(); });
  $('[data-ro-pick-close]').addEventListener('click', closePick);
  $('.ro-use').addEventListener('click', usePick);

  /* ---------- weather (Open-Meteo, free, no key) ---------- */
  var WX = [
    [[0], 'Jasno', 'sun'], [[1], 'Prevažne jasno', 'sun'], [[2], 'Polojasno', 'part'], [[3], 'Zamračené', 'cloud'],
    [[45, 48], 'Hmla', 'fog'], [[51, 53, 55, 56, 57], 'Mrholenie', 'rain'], [[61, 63, 65, 66, 67, 80, 81, 82], 'Dážď', 'rain'],
    [[71, 73, 75, 77, 85, 86], 'Sneh', 'snow'], [[95, 96, 99], 'Búrka', 'storm']
  ];
  var WXI = {
    sun: '<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="4.5" fill="#ffd34d"/><g stroke="#ffd34d" stroke-width="2" stroke-linecap="round"><path d="M12 2v2.5M12 19.5V22M2 12h2.5M19.5 12H22M4.9 4.9l1.8 1.8M17.3 17.3l1.8 1.8M4.9 19.1l1.8-1.8M17.3 6.7l1.8-1.8"/></g></svg>',
    moon: '<svg viewBox="0 0 24 24"><path d="M20 14.5A8 8 0 019.5 4a8 8 0 1010.5 10.5z" fill="#e8e4f7"/></svg>',
    part: '<svg viewBox="0 0 24 24"><circle cx="9" cy="9" r="4" fill="#ffd34d"/><path d="M8 20h9.5a3.5 3.5 0 000-7 5 5 0 00-9.4 1.5A2.8 2.8 0 008 20z" fill="#fff"/></svg>',
    cloud: '<svg viewBox="0 0 24 24"><path d="M6.5 19h11a4 4 0 000-8 6 6 0 00-11.3 1.8A3.2 3.2 0 006.5 19z" fill="#fff"/></svg>',
    fog: '<svg viewBox="0 0 24 24"><g stroke="#fff" stroke-width="2" stroke-linecap="round"><path d="M4 9h16M3 13h18M5 17h14"/></g></svg>',
    rain: '<svg viewBox="0 0 24 24"><path d="M6.5 15h11a4 4 0 000-8 6 6 0 00-11.3 1.8A3.2 3.2 0 006.5 15z" fill="#fff"/><g stroke="#5ab0ff" stroke-width="2" stroke-linecap="round"><path d="M8 18l-1 3M12 18l-1 3M16 18l-1 3"/></g></svg>',
    snow: '<svg viewBox="0 0 24 24"><path d="M6.5 15h11a4 4 0 000-8 6 6 0 00-11.3 1.8A3.2 3.2 0 006.5 15z" fill="#fff"/><g fill="#cfe8ff"><circle cx="8" cy="19" r="1.3"/><circle cx="12" cy="20.5" r="1.3"/><circle cx="16" cy="19" r="1.3"/></g></svg>',
    storm: '<svg viewBox="0 0 24 24"><path d="M6.5 14h11a4 4 0 000-8 6 6 0 00-11.3 1.8A3.2 3.2 0 006.5 14z" fill="#fff"/><path d="M12 14l-2.5 4.5H12L10.5 22l4-6h-2.5l1.5-2z" fill="#ffd34d"/></svg>'
  };
  function wxInfo(code, day) {
    for (var k = 0; k < WX.length; k++) if (WX[k][0].indexOf(code) >= 0) { var ic = WX[k][2]; if (!day && (ic === 'sun')) ic = 'moon'; return [WX[k][1], ic]; }
    return ['', 'cloud'];
  }
  function loadWeather() {
    fetch('https://api.open-meteo.com/v1/forecast?latitude=48.1486&longitude=17.1077&current=temperature_2m,weather_code,is_day&daily=temperature_2m_max,temperature_2m_min&forecast_days=1&timezone=Europe%2FBratislava')
      .then(function (r) { return r.json(); }).then(function (d) {
        var c = d.current, info = wxInfo(c.weather_code, c.is_day);
        $$('[data-ro-wx-t]').forEach(function (e) { e.textContent = Math.round(c.temperature_2m) + '°'; });
        $('.ro-lockw .ro-wx').classList.remove('off');
        $$('[data-ro-wx-icon]').forEach(function (e) { e.innerHTML = WXI[info[1]]; });
        $$('[data-ro-wx-d]').forEach(function (e) { e.textContent = info[0]; });
        $$('[data-ro-wx-hl]').forEach(function (e) { e.textContent = 'Max ' + Math.round(d.daily.temperature_2m_max[0]) + '° · Min ' + Math.round(d.daily.temperature_2m_min[0]) + '°'; });
      }).catch(function () { $$('[data-ro-wx-d]').forEach(function (e) { e.textContent = 'Počasie teraz nejde'; }); });
  }
  loadWeather(); setInterval(loadWeather, 30 * 60 * 1000);

  /* ---------- pages (dots under the grid) + switch to desktop ---------- */
  var pager = $('.ro-pager'), pdots = $('.ro-pdots'), pageNo = 0;
  Array.prototype.forEach.call(pager.children, function (pg, i) {
    var d = document.createElement('button'); d.type = 'button'; d.setAttribute('aria-label', 'Strana ' + (i + 1));
    d.addEventListener('click', function (e) { e.stopPropagation(); pager.scrollTo({ left: pager.clientWidth * i, behavior: reduced ? 'auto' : 'smooth' }); });
    pdots.appendChild(d);
  });
  function markPage() { var n = Math.round(pager.scrollLeft / (pager.clientWidth || 1)); pageNo = n; Array.prototype.forEach.call(pdots.children, function (d, i) { d.classList.toggle('on', i === n); }); }
  pager.addEventListener('scroll', markPage, { passive: true }); markPage();
  pdots.hidden = pager.children.length < 2;
  $$('[data-ro-mode]').forEach(function (b) { b.addEventListener('click', function () { R.setMode(b.getAttribute('data-ro-mode')); }); });

  /* ---------- start ---------- */
  tick(); setInterval(tick, 15000);
  place();
  if (PAGE) openPhone();
})();
