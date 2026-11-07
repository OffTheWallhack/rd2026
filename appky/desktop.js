/* robOS plocha: počítačový pohľad ako Windows 95 (hold, nie kópia: vlastné logo, vlastné názvy).
   Spúšťa ho appky/robos.js na počítači s myšou. Zoznam appiek je v /apps.json, tu sa žiadna appka nepíše ručne.
   Na webe (titulka, blog...) je v rohu tlačidlo "robOS"; na /appky/ je plocha celou stránkou.
   Všetky triedy začínajú rd-, aby sa nebili so štýlmi webu. Štýly sú v appky/desktop.css. */
(function () {
  'use strict';
  var R = window.RobOS;
  if (!R || window.__robosDesk) return; window.__robosDesk = true;
  var BASE = R.BASE, ROOT = R.ROOT, PAGE = R.PAGE, DATA = R.data, C = DATA.contact;
  var APPS = DATA.apps.filter(function (a) { return a.visibility === 'public' && a.robos !== false; });
  var html = document.documentElement;
  var reduced = !!(window.matchMedia && matchMedia('(prefers-reduced-motion: reduce)').matches);
  var DAYS = ['nedeľa', 'pondelok', 'utorok', 'streda', 'štvrtok', 'piatok', 'sobota'];
  var DSH = ['Ne', 'Po', 'Ut', 'St', 'Št', 'Pi', 'So'];
  var MGEN = ['januára', 'februára', 'marca', 'apríla', 'mája', 'júna', 'júla', 'augusta', 'septembra', 'októbra', 'novembra', 'decembra'];
  var COLORS = [['Tyrkysová', '#008080'], ['Námornícka', '#000080'], ['Šedá', '#808080'], ['Bordová', '#800040'], ['Čierna', '#000000']];

  function esc(s) { return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;'); }
  function el(tag, cls, inner) { var e = document.createElement(tag); if (cls) e.className = cls; if (inner != null) e.innerHTML = inner; return e; }
  function pix(name) { return BASE + 'pix/' + name + '.png'; }
  function pad(n) { return (n < 10 ? '0' : '') + n; }
  function parse(s) { var p = String(s).split('-').map(Number); return new Date(p[0], (p[1] || 1) - 1, p[2] || 1); }
  function tryLS(k, v) { try { if (v === undefined) return localStorage.getItem(k); localStorage.setItem(k, v); } catch (e) {} return null; }

  /* ---------- logo (5x7 bodky, rovnaké ako pri štarte telefónu) ---------- */
  var LOGO = (function () {
    var g = ['11110', '10001', '10001', '11110', '10100', '10010', '10001'], r = '';
    g.forEach(function (row, y) { row.split('').forEach(function (c, x) { if (c === '1') r += '<rect x="' + x * 2 + '" y="' + y * 2 + '" width="2" height="2"/>'; }); });
    return '<svg class="rd-logo" width="10" height="14" viewBox="0 0 10 14" shape-rendering="crispEdges" aria-hidden="true">' + r + '</svg>';
  })();
  var GLYPH = {
    min: '<svg width="8" height="8" viewBox="0 0 8 8" shape-rendering="crispEdges"><rect x="0" y="6" width="6" height="2"/></svg>',
    max: '<svg width="9" height="9" viewBox="0 0 9 9" shape-rendering="crispEdges"><path d="M0 0h9v9H0zM1 2h7v6H1z" fill-rule="evenodd"/></svg>',
    res: '<svg width="9" height="9" viewBox="0 0 9 9" shape-rendering="crispEdges"><path d="M2 0h7v6H7v-4H2zM0 3h7v6H0zM1 5v3h5V5z" fill-rule="evenodd"/></svg>',
    x: '<svg width="8" height="7" viewBox="0 0 8 7" shape-rendering="crispEdges"><path d="M0 0h2v1h1v1h2V1h1V0h2v1H7v1H6v1H5v1h1v1h1v1h1v1H6V6H5V5H3v1H2v1H0V6h1V5h1V4h1V3H2V2H1V1H0z"/></svg>'
  };

  /* ---------- koreň ---------- */
  var root = el('div', 'rd'); root.id = 'rodesk'; if (!PAGE) root.hidden = true;
  root.innerHTML =
    '<div class="rd-screen">' +
      '<div class="rd-icons" role="list" aria-label="Plocha"></div>' +
      '<button class="rd-icon rd-trash" type="button" data-sys="trash" title="Kôš"><img alt="" src="' + pix('sys-bin') + '"><span>Kôš</span></button>' +
      '<div class="rd-wins"></div>' +
      '<div class="rd-bar">' +
        '<button class="rd-start" type="button" aria-haspopup="true" aria-expanded="false">' + LOGO + '<b>Štart</b></button>' +
        '<span class="rd-sep"></span>' +
        '<div class="rd-tasks"></div>' +
        '<div class="rd-tray"><span class="rd-wx" hidden></span><span class="rd-clock">--:--</span></div>' +
      '</div>' +
      '<div class="rd-pop"></div>' +
      '<div class="rd-shield"></div>' +
    '</div>' +
    '<div class="rd-boot" hidden><div class="rd-bootc">' + LOGO.replace('width="10" height="14"', 'width="40" height="56"') +
      '<div class="rd-bootw">rob<b>OS</b> <small>95</small></div><div class="rd-bootp"><i></i></div><div class="rd-bootm">Spúšťam robOS…</div></div></div>' +
    '<div class="rd-bye" hidden><p>Teraz môžeš bezpečne<br>vypnúť počítač.</p></div>';
  document.body.appendChild(root);
  var $ = function (s) { return root.querySelector(s); };
  var screenEl = $('.rd-screen'), iconsEl = $('.rd-icons'), winsEl = $('.rd-wins'), tasksEl = $('.rd-tasks'), popEl = $('.rd-pop'),
      shield = $('.rd-shield'), startBtn = $('.rd-start'), clockEl = $('.rd-clock'), wxEl = $('.rd-wx');
  html.classList.add(PAGE ? 'rd-page' : 'rd-docked');

  function applyColor() {
    var c = tryLS('robos.deskcolor') || '#008080';
    screenEl.style.setProperty('--rd-desk', c);
  }
  applyColor();

  /* ---------- hodiny a počasie ---------- */
  function tick() {
    var n = new Date();
    clockEl.textContent = pad(n.getHours()) + ':' + pad(n.getMinutes());
    clockEl.title = DAYS[n.getDay()] + ' ' + n.getDate() + '. ' + MGEN[n.getMonth()] + ' ' + n.getFullYear();
  }
  tick(); setInterval(tick, 15000);
  var WXI = {
    sun: '<svg width="14" height="14" viewBox="0 0 14 14" shape-rendering="crispEdges"><rect x="4" y="4" width="6" height="6" fill="#ffe000" stroke="#000" stroke-width="1"/><path d="M6 0h2v2H6zM6 12h2v2H6zM0 6h2v2H0zM12 6h2v2h-2z" fill="#000"/></svg>',
    cloud: '<svg width="14" height="14" viewBox="0 0 14 14" shape-rendering="crispEdges"><path d="M3 10h8V8h1V6h-2V4H7v1H5v2H3z" fill="#fff" stroke="#000"/></svg>',
    rain: '<svg width="14" height="14" viewBox="0 0 14 14" shape-rendering="crispEdges"><path d="M3 8h8V6h1V4h-2V2H7v1H5v2H3z" fill="#fff" stroke="#000"/><path d="M4 10h1v2H4zM7 10h1v2H7zM10 10h1v2h-1z" fill="#0000ff"/></svg>'
  };
  function loadWeather() {
    fetch('https://api.open-meteo.com/v1/forecast?latitude=48.1486&longitude=17.1077&current=temperature_2m,weather_code&timezone=Europe%2FBratislava')
      .then(function (r) { return r.json(); }).then(function (d) {
        var c = d.current.weather_code, k = c === 0 || c === 1 ? 'sun' : (c >= 51 && c <= 99 ? 'rain' : 'cloud');
        wxEl.innerHTML = WXI[k] + '<span>' + Math.round(d.current.temperature_2m) + '°</span>'; wxEl.hidden = false; wxEl.title = 'Bratislava';
      }).catch(function () {});
  }
  loadWeather(); setInterval(loadWeather, 30 * 60 * 1000);

  /* ---------- menu (použité aj v štart menu) ---------- */
  var menus = [];                                  // otvorené menu, od koreňa
  function closeMenus(from) {
    while (menus.length > (from || 0)) { var m = menus.pop(); if (m.el.parentNode) m.el.parentNode.removeChild(m.el); }
    if (!menus.length) { startBtn.classList.remove('on'); startBtn.setAttribute('aria-expanded', 'false'); Array.prototype.forEach.call(root.querySelectorAll('.rd-mopen'), function (b) { b.classList.remove('rd-mopen'); }); }
  }
  function menuIcon(it) {
    if (it.swatch) return '<span class="rd-mic rd-sw" style="background:' + it.swatch + '"></span>';
    if (it.icon) return '<img class="rd-mic" src="' + esc(it.icon) + '" alt="">';
    return '<span class="rd-mic"></span>';
  }
  function buildMenu(items, depth, cls) {
    var box = el('div', 'rd-menu' + (cls ? ' ' + cls : '')); box.setAttribute('role', 'menu');
    items.forEach(function (it) {
      if (it === '-') { box.appendChild(el('div', 'rd-msep')); return; }
      var row = el('button', 'rd-mi', menuIcon(it) + '<span class="rd-ml">' + esc(it.label) + '</span>' + (it.sub ? '<span class="rd-marr"></span>' : (it.hint ? '<span class="rd-mh">' + esc(it.hint) + '</span>' : '')));
      row.type = 'button'; row.setAttribute('role', 'menuitem');
      if (it.disabled) row.disabled = true;
      row.addEventListener('mouseenter', function () {
        closeMenus(depth + 1);
        Array.prototype.forEach.call(box.querySelectorAll('.rd-mopen'), function (b) { b.classList.remove('rd-mopen'); });
        if (it.sub && !it.disabled) { row.classList.add('rd-mopen'); openMenu(it.sub, row.getBoundingClientRect(), depth + 1, 'right'); }
      });
      row.addEventListener('click', function (e) {
        e.stopPropagation();
        if (it.sub) { closeMenus(depth + 1); row.classList.add('rd-mopen'); openMenu(it.sub, row.getBoundingClientRect(), depth + 1, 'right'); return; }
        closeMenus(); if (it.run) it.run();
      });
      box.appendChild(row);
    });
    return box;
  }
  function openMenu(items, rect, depth, dir, cls) {
    closeMenus(depth);
    var box = buildMenu(items, depth, cls); popEl.appendChild(box);
    var vw = window.innerWidth, vh = window.innerHeight - 34, w = box.offsetWidth, h = box.offsetHeight, x, y;
    if (dir === 'right') { x = rect.right - 3; y = rect.top - 3; if (x + w > vw) x = rect.left - w + 3; }
    else if (dir === 'up') { x = rect.left; y = rect.top - h; }
    else { x = rect.left; y = rect.bottom - 1; }
    if (dir === 'point') { x = rect.left; y = rect.top; if (x + w > vw) x -= w; if (y + h > vh) y -= h; }
    if (y + h > vh && dir !== 'up' && dir !== 'point') y = Math.max(2, vh - h);
    if (x + w > vw) x = Math.max(2, vw - w);
    box.style.left = Math.round(x) + 'px'; box.style.top = Math.round(Math.max(2, y)) + 'px';
    menus.push({ el: box, depth: depth });
    return box;
  }
  document.addEventListener('pointerdown', function (e) {
    if (!menus.length || root.hidden) return;
    if (e.target.closest && (e.target.closest('.rd-menu') || e.target.closest('.rd-start') || e.target.closest('.rd-mbtn'))) return;
    closeMenus();
  }, true);
  window.addEventListener('blur', function () { closeMenus(); setTimeout(syncFrameFocus, 0); });
  document.addEventListener('keydown', function (e) {
    if (root.hidden) return;
    if (e.key === 'Escape') { if (menus.length) { closeMenus(); } else if (dialogs.length) { closeDialog(dialogs[dialogs.length - 1]); } }
  });

  /* ---------- okná ---------- */
  var wins = [], zTop = 10, active = null;
  function deskSize() { return { w: window.innerWidth, h: window.innerHeight - 34 }; }
  function winById(id) { for (var i = 0; i < wins.length; i++) if (wins[i].id === id) return wins[i]; return null; }
  function setActive(w) {
    wins.forEach(function (x) { x.el.classList.toggle('active', x === w); x.task.classList.toggle('on', x === w && !x.el.classList.contains('min')); });
    if (w) w.el.style.zIndex = ++zTop;
    active = w;
  }
  function restore(w) { w.el.classList.remove('min'); setActive(w); }
  function minimize(w) {
    w.el.classList.add('min'); w.task.classList.remove('on');
    var next = null; wins.forEach(function (x) { if (!x.el.classList.contains('min') && (!next || +x.el.style.zIndex > +next.el.style.zIndex)) next = x; });
    setActive(next);
  }
  function toggleMax(w) { if (w.fixed) return; w.el.classList.toggle('max'); var m = w.el.classList.contains('max'); w.bmax.innerHTML = m ? GLYPH.res : GLYPH.max; w.bmax.setAttribute('aria-label', m ? 'Obnoviť' : 'Zväčšiť'); setActive(w); }
  function closeWin(w) {
    if (w.onclose) w.onclose();
    w.el.remove(); w.task.remove(); wins.splice(wins.indexOf(w), 1);
    if (active === w) { active = null; var top = null; wins.forEach(function (x) { if (!x.el.classList.contains('min') && (!top || +x.el.style.zIndex > +top.el.style.zIndex)) top = x; }); setActive(top); }
  }
  function syncFrameFocus() {
    var ae = document.activeElement;
    if (ae && ae.tagName === 'IFRAME') for (var i = 0; i < wins.length; i++) if (wins[i].frame === ae) { if (!wins[i].el.classList.contains('active')) setActive(wins[i]); break; }
  }

  function dragStart(e, w, mode, dir) {
    if (e.button !== 0 || w.el.classList.contains('max')) return;
    e.preventDefault(); setActive(w); closeMenus();
    var r = w.el.getBoundingClientRect(), sx = e.clientX, sy = e.clientY, D = deskSize();
    shield.style.display = 'block'; shield.style.cursor = mode === 'move' ? 'default' : getComputedStyle(e.currentTarget).cursor;
    function move(ev) {
      var dx = ev.clientX - sx, dy = ev.clientY - sy, x = r.left, y = r.top, W = r.width, H = r.height;
      if (mode === 'move') { x = Math.min(D.w - 80, Math.max(-W + 120, r.left + dx)); y = Math.min(D.h - 24, Math.max(0, r.top + dy)); }
      else {
        var minW = w.minW || 260, minH = w.minH || 160;
        if (dir.indexOf('e') >= 0) W = Math.max(minW, r.width + dx);
        if (dir.indexOf('s') >= 0) H = Math.max(minH, r.height + dy);
        if (dir.indexOf('w') >= 0) { W = Math.max(minW, r.width - dx); x = r.left + r.width - W; }
        if (dir.indexOf('n') >= 0) { H = Math.max(minH, r.height - dy); y = Math.max(0, r.top + r.height - H); H = r.top + r.height - y; }
      }
      w.el.style.left = Math.round(x) + 'px'; w.el.style.top = Math.round(y) + 'px'; w.el.style.width = Math.round(W) + 'px'; w.el.style.height = Math.round(H) + 'px';
    }
    function up() { shield.style.display = 'none'; document.removeEventListener('pointermove', move); document.removeEventListener('pointerup', up); }
    document.addEventListener('pointermove', move); document.addEventListener('pointerup', up);
  }

  var cascade = 0;
  // o: id, title, icon (url), w, h, body (node), menu [{label, items}], status (text), onclose, fixed (bez zmeny veľkosti), frame (iframe)
  function createWin(o) {
    var ex = o.id && winById(o.id);
    if (ex) { restore(ex); return ex; }
    var D = deskSize(), W = Math.min(o.w || 640, D.w - 24), H = Math.min(o.h || 440, D.h - 16);
    var x = Math.max(8, Math.min(D.w - W - 8, 150 + (cascade % 7) * 30)), y = Math.max(4, Math.min(D.h - H - 4, 28 + (cascade % 7) * 28));
    cascade++;
    var w = { id: o.id, fixed: !!o.fixed, frame: o.frame || null, onclose: o.onclose, minW: o.minW, minH: o.minH };
    var e = el('div', 'rd-win' + (o.fixed ? ' fixed' : '')); e.setAttribute('role', 'dialog'); e.setAttribute('aria-label', o.title);
    e.style.cssText = 'left:' + x + 'px;top:' + y + 'px;width:' + W + 'px;height:' + H + 'px;';
    e.innerHTML = '<div class="rd-title"><img class="rd-ti" alt="" src="' + esc(o.icon) + '"><span class="rd-tt">' + esc(o.title) + '</span><span class="rd-tb"></span></div>';
    var tb = e.querySelector('.rd-tb'), title = e.querySelector('.rd-title');
    function tbtn(cls, glyph, label, fn) { var b = el('button', 'rd-b ' + cls, glyph); b.type = 'button'; b.setAttribute('aria-label', label); b.addEventListener('pointerdown', function (ev) { ev.stopPropagation(); }); b.addEventListener('click', function (ev) { ev.stopPropagation(); fn(); }); tb.appendChild(b); return b; }
    if (!o.fixed) { tbtn('rd-bmin', GLYPH.min, 'Minimalizovať', function () { minimize(w); }); w.bmax = tbtn('rd-bmax', GLYPH.max, 'Zväčšiť', function () { toggleMax(w); }); tb.appendChild(el('span', 'rd-tgap')); }
    tbtn('rd-bx', GLYPH.x, 'Zavrieť', function () { closeWin(w); });
    if (o.menu) {
      var mb = el('div', 'rd-mbar');
      o.menu.forEach(function (m) {
        var b = el('button', 'rd-mbtn', '<u>' + esc(m.label.charAt(0)) + '</u>' + esc(m.label.slice(1))); b.type = 'button';
        b.addEventListener('click', function (ev) { ev.stopPropagation(); if (b.classList.contains('rd-mopen')) { closeMenus(); return; } closeMenus(); b.classList.add('rd-mopen'); openMenu(m.items, b.getBoundingClientRect(), 0, 'down'); });
        b.addEventListener('mouseenter', function () { if (menus.length && !b.classList.contains('rd-mopen')) { closeMenus(); b.classList.add('rd-mopen'); openMenu(m.items, b.getBoundingClientRect(), 0, 'down'); } });
        mb.appendChild(b);
      });
      e.appendChild(mb);
    }
    var body = el('div', 'rd-wbody' + (o.frame ? ' rd-isframe' : '')); body.appendChild(o.body); e.appendChild(body);
    if (o.status != null) { var st = el('div', 'rd-wstat'); st.appendChild(el('span', 'rd-sf', esc(o.status))); e.appendChild(st); }
    if (!o.fixed) ['n', 's', 'e', 'w', 'ne', 'nw', 'se', 'sw'].forEach(function (d) { var h = el('i', 'rd-rz rd-rz-' + d); h.addEventListener('pointerdown', function (ev) { dragStart(ev, w, 'size', d); }); e.appendChild(h); });
    title.addEventListener('pointerdown', function (ev) { dragStart(ev, w, 'move'); });
    if (!o.fixed) title.addEventListener('dblclick', function () { toggleMax(w); });
    e.addEventListener('pointerdown', function () { if (active !== w) setActive(w); });
    var task = el('button', 'rd-task', '<img alt="" src="' + esc(o.icon) + '"><span>' + esc(o.title) + '</span>'); task.type = 'button';
    task.addEventListener('click', function () { if (e.classList.contains('min')) restore(w); else if (active === w) minimize(w); else setActive(w); });
    tasksEl.appendChild(task);
    w.el = e; w.task = task; w.body = body; wins.push(w); winsEl.appendChild(e); setActive(w);
    return w;
  }

  /* ---------- dialóg ---------- */
  var dialogs = [];
  function closeDialog(d) { var i = dialogs.indexOf(d); if (i >= 0) dialogs.splice(i, 1); d.back.remove(); }
  // o: title, icon (url), text (html), buttons [{label, primary, run}], input {value, placeholder, list}
  function dialog(o) {
    var back = el('div', 'rd-modal'), box = el('div', 'rd-win rd-dlg active fixed');
    box.setAttribute('role', 'alertdialog'); box.setAttribute('aria-label', o.title);
    box.innerHTML = '<div class="rd-title"><span class="rd-tt">' + esc(o.title) + '</span><span class="rd-tb"></span></div>' +
      '<div class="rd-wbody rd-dbody"><div class="rd-dmain">' + (o.icon ? '<img class="rd-dic" alt="" src="' + esc(o.icon) + '">' : '') + '<div class="rd-dtx">' + o.text + '</div></div></div>';
    var d = { back: back, box: box }, input = null;
    if (o.input) {
      input = el('input', 'rd-input'); input.type = 'text'; input.value = o.input.value || ''; input.setAttribute('aria-label', o.title); input.autocomplete = 'off'; input.spellcheck = false;
      box.querySelector('.rd-dtx').appendChild(input);
    }
    var bx = el('div', 'rd-dbtns');
    (o.buttons || [{ label: 'OK', primary: true }]).forEach(function (b) {
      var bt = el('button', 'rd-btn' + (b.primary ? ' def' : ''), esc(b.label)); bt.type = 'button';
      bt.addEventListener('click', function () { closeDialog(d); if (b.run) b.run(input ? input.value : null); });
      bx.appendChild(bt);
    });
    box.querySelector('.rd-dbody').appendChild(bx);
    var x = box.querySelector('.rd-tb'), cl = el('button', 'rd-b rd-bx', GLYPH.x); cl.type = 'button'; cl.setAttribute('aria-label', 'Zavrieť'); cl.addEventListener('click', function () { closeDialog(d); }); x.appendChild(cl);
    back.appendChild(box); screenEl.appendChild(back); dialogs.push(d);
    var def = bx.querySelector('.def') || bx.firstChild; (input || def).focus();
    if (input) { input.select(); input.addEventListener('keydown', function (e) { if (e.key === 'Enter') { var b = bx.querySelector('.def'); if (b) b.click(); } }); }
    return d;
  }

  /* ---------- otvorenie appky ---------- */
  function frameWin(o) {
    var f = document.createElement('iframe'); f.className = 'rd-frame'; f.title = o.title; f.src = o.src; f.allow = o.allow || 'fullscreen';
    f.addEventListener('load', function () { try { f.contentWindow.addEventListener('focus', function () { var w = winById(o.id); if (w) setActive(w); }); f.contentWindow.addEventListener('pointerdown', function () { var w = winById(o.id); if (w && active !== w) setActive(w); }, true); } catch (e) {} });
    var menu = [
      { label: 'Súbor', items: [{ label: 'Otvoriť v novej karte', icon: pix('sys-run'), run: function () { window.open(o.src, '_blank', 'noopener'); } }, { label: 'Načítať znova', run: function () { f.src = o.src; } }, '-', { label: 'Zavrieť', run: function () { var w = winById(o.id); if (w) closeWin(w); } }] },
      { label: 'Zobraziť', items: [{ label: 'Na celú obrazovku', run: function () { try { f.requestFullscreen(); } catch (e) {} } }, { label: 'Zväčšiť okno', run: function () { var w = winById(o.id); if (w && !w.el.classList.contains('max')) toggleMax(w); } }] },
      { label: 'Pomoc', items: [{ label: 'O programe…', run: function () { dialog({ title: 'O programe ' + o.title, icon: o.icon, text: '<b>' + esc(o.title) + '</b><br>' + esc(o.desc || '') + '<br><br><small>' + esc(o.src.replace(ROOT, '/')) + '</small>' }); } }] }
    ];
    var w = createWin({ id: o.id, title: o.title, icon: o.icon, w: o.w, h: o.h, body: f, frame: f, menu: menu, status: 'Hotovo', minW: 300, minH: 220 });
    w.frame = f; return w;
  }
  function openApp(a) {
    if (!a.embed) { window.open(R.url(a.url), '_blank', 'noopener'); return; }
    var sz = a.win || [900, 620];
    frameWin({ id: 'app:' + a.id, title: a.name, icon: pix(a.id), src: R.url(a.url), allow: a.allow, w: sz[0], h: sz[1], desc: a.desc && a.desc.sk });
  }

  /* ---------- systémové okná ---------- */
  function linkBtn(label, href, extra) { return '<a class="rd-btn rd-lb" href="' + esc(href) + '" target="_blank" rel="noopener">' + esc(label) + '</a>'; }
  function openAbout() {
    var b = el('div', 'rd-doc rd-about');
    b.innerHTML = '<div class="rd-abtop"><img class="rd-photo" alt="Robert Ďurica" src="' + ROOT + 'img/portrait.webp"><div><h2>Robert Ďurica</h2><p>Robím eventy a jazdím s event autami. Popri tom hrám ako DJ a skladám malé appky, ktoré nájdeš tu na ploche.</p></div></div>' +
      '<dl class="rd-dl"><dt>Systém</dt><dd>robOS 95 (nie je z Windowsu, len sa tak tvári)</dd><dt>Miesto</dt><dd>Bratislava</dd><dt>Appiek</dt><dd>' + APPS.length + ' (zoznam je v apps.json)</dd><dt>Pamäť</dt><dd>dosť na ďalší nápad</dd></dl>' +
      '<div class="rd-btnrow">' + linkBtn('Môj web', ROOT) + linkBtn('Instagram', C.instagram) + linkBtn('WhatsApp', C.whatsapp) + '<a class="rd-btn rd-lb" href="mailto:' + esc(C.mail) + '">Mail</a></div>';
    createWin({ id: 'sys:pc', title: 'Môj počítač', icon: pix('sys-computer'), w: 520, h: 400, body: b, status: 'robOS 95', minW: 380, minH: 300 });
  }
  function openContact() {
    var b = el('div', 'rd-doc rd-note');
    b.innerHTML = '<p>Napíš mi, ak chceš appku, nápad na event alebo len pozdraviť.</p>' +
      '<p><b>Mail</b><br>' + esc(C.mail) + '<br><button class="rd-btn rd-copy" type="button">Skopírovať adresu</button> <a class="rd-btn rd-lb" href="mailto:' + esc(C.mail) + '">Otvoriť poštu</a></p>' +
      '<p><b>WhatsApp</b> (najrýchlejšie)<br>' + linkBtn('Napísať', C.whatsapp) + '</p>' +
      '<p><b>Instagram</b><br>' + linkBtn('@duriica', C.instagram) + '</p>' +
      '<p><b>X</b><br>' + linkBtn('@moat_wanted', C.x) + '</p>';
    var cp = b.querySelector('.rd-copy');
    cp.addEventListener('click', function () { function ok() { cp.textContent = 'Skopírované'; setTimeout(function () { cp.textContent = 'Skopírovať adresu'; }, 1600); } try { navigator.clipboard.writeText(C.mail).then(ok, function () {}); } catch (e) {} });
    createWin({ id: 'sys:mail', title: 'Kontakt – Poznámkový blok', icon: pix('sys-notepad'), w: 460, h: 400, body: b, status: 'Riadok 1', minW: 340, minH: 260 });
  }
  var evCache = null;
  function openEvents() {
    var b = el('div', 'rd-doc rd-ev');
    b.innerHTML = '<div class="rd-tabs" role="tablist"><button type="button" class="on" data-w="up" role="tab">Nadchádzajúce</button><button type="button" data-w="past" role="tab">Prebehlo</button></div><div class="rd-list"><div class="rd-lhead"><span>Dátum</span><span>Event</span><span>Miesto</span></div><div class="rd-lrows"></div></div>';
    var rows = b.querySelector('.rd-lrows'), which = 'up';
    function draw() {
      rows.textContent = '';
      if (!evCache) { rows.appendChild(el('div', 'rd-lempty', 'Načítavam…')); return; }
      var list = evCache[which];
      if (!list.length) { rows.appendChild(el('div', 'rd-lempty', 'Zatiaľ tu nič nie je.')); return; }
      list.forEach(function (e) { var d = parse(e.datum); rows.appendChild(el('div', 'rd-lrow', '<span>' + DSH[d.getDay()] + ' ' + d.getDate() + '. ' + (d.getMonth() + 1) + '.' + (d.getFullYear() !== new Date().getFullYear() ? ' ' + d.getFullYear() : '') + '</span><span>' + esc(e.nazov || '') + (e.popis ? ' <small>– ' + esc(e.popis) + '</small>' : '') + '</span><span>' + esc(e.miesto || '') + '</span>')); });
    }
    Array.prototype.forEach.call(b.querySelectorAll('.rd-tabs button'), function (t) { t.addEventListener('click', function () { which = t.getAttribute('data-w'); Array.prototype.forEach.call(b.querySelectorAll('.rd-tabs button'), function (o) { o.classList.toggle('on', o === t); }); draw(); }); });
    draw();
    var win = createWin({ id: 'sys:ev', title: 'Eventy – Kalendár', icon: pix('sys-calendar'), w: 620, h: 400, body: b, status: 'Čo sa deje okolo mňa', minW: 420, minH: 240 });
    if (!evCache) fetch(BASE + 'events.json', { cache: 'no-cache' }).then(function (r) { return r.json(); }).then(function (data) {
      var t = new Date(); t.setHours(0, 0, 0, 0); var all = (data && data.eventy) || [];
      evCache = { up: all.filter(function (e) { return parse(e.datum) >= t; }).sort(function (a, c) { return parse(a.datum) - parse(c.datum); }), past: all.filter(function (e) { return parse(e.datum) < t; }).sort(function (a, c) { return parse(c.datum) - parse(a.datum); }) };
      draw();
    }).catch(function () { evCache = { up: [], past: [] }; draw(); });
    return win;
  }
  var JUNK = ['plán-na-víkend-FINAL-2.docx', 'nápad-z-3-ráno.txt', 'appka-čo-mala-byť-hotová-v-piatok.html', 'zálohy-zálohy-zálohy (kópia).zip', 'skutočne-posledná-verzia.psd'];
  function openTrash() {
    var b = el('div', 'rd-doc rd-trashw');
    b.innerHTML = '<div class="rd-list"><div class="rd-lhead"><span>Názov</span><span>Veľkosť</span></div><div class="rd-lrows">' + JUNK.map(function (n, i) { return '<div class="rd-lrow"><span><img alt="" src="' + pix('sys-doc') + '"> ' + esc(n) + '</span><span>' + (3 + i * 17) + ' kB</span></div>'; }).join('') + '</div></div>';
    createWin({ id: 'sys:trash', title: 'Kôš', icon: pix('sys-bin'), w: 520, h: 330, body: b, status: JUNK.length + ' objektov', minW: 360, minH: 220,
      menu: [{ label: 'Súbor', items: [{ label: 'Vyprázdniť kôš', run: function () { dialog({ title: 'Vyprázdniť kôš', icon: pix('sys-bin'), text: 'Naozaj nenávratne odstrániť týchto ' + JUNK.length + ' súborov?', buttons: [{ label: 'Áno', run: function () { dialog({ title: 'Vyprázdniť kôš', icon: pix('sys-bin'), text: 'Nejde to. Z tých nápadov sa ešte niečo môže zísť.' }); } }, { label: 'Nie', primary: true }] }); } }, '-', { label: 'Zavrieť', run: function () { var w = winById('sys:trash'); if (w) closeWin(w); } }] }] });
  }
  function openFolder(id, title, src, icon, w, h) { frameWin({ id: id, title: title, icon: icon, src: src, w: w, h: h, desc: title }); }

  /* ---------- Spustiť, vypnúť ---------- */
  function runDialog() {
    var names = APPS.map(function (a) { return a.id + ' ' + a.name; }).join(', ');
    dialog({ title: 'Spustiť', icon: pix('sys-run'), text: 'Napíš názov appky (napríklad <i>mixoval</i> alebo <i>drift</i>) a robOS ju otvorí.<br><br>', input: { value: '' },
      buttons: [{ label: 'OK', primary: true, run: function (v) {
        var q = String(v || '').trim().toLowerCase().replace(/^si\//, ''); if (!q) return;
        var hit = APPS.filter(function (a) { return a.id === q || a.name.toLowerCase().replace(/^si\//, '') === q || (a.short || '').toLowerCase().replace(/^si\//, '') === q; })[0] ||
          APPS.filter(function (a) { return a.name.toLowerCase().indexOf(q) >= 0 || a.id.indexOf(q) >= 0; })[0];
        if (hit) openApp(hit);
        else if (q === 'kontakt' || q === 'mail') openContact();
        else if (q === 'eventy') openEvents();
        else if (q === 'format c:' || q === 'format') dialog({ title: 'robOS', icon: pix('sys-power'), text: 'Pekný pokus. Disk C tu nie je a ja nič neformátujem.' });
        else dialog({ title: 'Spustiť', icon: pix('sys-run'), text: 'robOS nenašiel „' + esc(v) + '“. Skontroluj názov a skús to znova.' });
      } }, { label: 'Zrušiť' }] });
  }
  function shutdownAsk() {
    dialog({ title: 'Vypnúť robOS', icon: pix('sys-power'), text: PAGE ? 'Naozaj chceš zavrieť robOS a vrátiť sa na môj web?' : 'Naozaj chceš zavrieť robOS a vrátiť sa na stránku?',
      buttons: [{ label: 'Áno', primary: true, run: shutdown }, { label: 'Nie' }] });
  }
  function shutdown() {
    var bye = $('.rd-bye'); bye.hidden = false;
    setTimeout(function () {
      if (PAGE) { location.href = ROOT; return; }
      closeDesk(); bye.hidden = true;
    }, reduced ? 200 : 1700);
  }

  /* ---------- ikony na ploche ---------- */
  var sel = null;
  function selectIcon(b) { if (sel) sel.classList.remove('sel'); sel = b; if (b) b.classList.add('sel'); }
  function iconBtn(label, img, title, run) {
    var b = el('button', 'rd-icon', '<img alt="" src="' + esc(img) + '"><span>' + esc(label) + '</span>'); b.type = 'button'; b.setAttribute('role', 'listitem'); if (title) b.title = title;
    b.addEventListener('click', function (e) { e.stopPropagation(); selectIcon(b); });
    b.addEventListener('dblclick', function (e) { e.stopPropagation(); run(); });
    b.addEventListener('keydown', function (e) { if (e.key === 'Enter') { e.preventDefault(); run(); } });
    return b;
  }
  function buildIcons() {
    iconsEl.textContent = '';
    var sys = [
      ['Môj počítač', 'sys-computer', 'O mne a kontakty', openAbout],
      ['Blog', 'sys-news', 'Články o tom, ako appky vznikajú', function () { openFolder('sys:blog', 'Blog', ROOT + 'blog/', pix('sys-news'), 940, 660); }],
      ['Na stiahnutie', 'sys-doc', 'Ťaháky a príručky zadarmo', function () { openFolder('sys:dl', 'Na stiahnutie', ROOT + 'na-stiahnutie/', pix('sys-doc'), 860, 640); }],
      ['Eventy', 'sys-calendar', 'Čo sa deje okolo mňa', openEvents],
      ['Kontakt', 'sys-notepad', 'Napíš mi', openContact]
    ];
    sys.forEach(function (s) { iconsEl.appendChild(iconBtn(s[0], pix(s[1]), s[2], s[3])); });
    APPS.forEach(function (a) { iconsEl.appendChild(iconBtn(a.short || a.name, pix(a.id), a.desc && a.desc.sk, function () { openApp(a); })); });
  }
  buildIcons();
  $('.rd-trash').addEventListener('click', function (e) { e.stopPropagation(); selectIcon(this); });
  $('.rd-trash').addEventListener('dblclick', function (e) { e.stopPropagation(); openTrash(); });
  $('.rd-trash').addEventListener('keydown', function (e) { if (e.key === 'Enter') openTrash(); });
  screenEl.addEventListener('pointerdown', function (e) { if (e.target === screenEl || e.target === iconsEl) selectIcon(null); });

  /* ---------- plocha: pravé tlačidlo ---------- */
  function colorItems() { return COLORS.map(function (c) { return { label: c[0], swatch: c[1], run: function () { tryLS('robos.deskcolor', c[1]); applyColor(); } }; }); }
  screenEl.addEventListener('contextmenu', function (e) {
    if (e.target.closest('.rd-win, .rd-bar, .rd-menu, .rd-modal')) return;
    e.preventDefault(); closeMenus();
    openMenu([{ label: 'Obnoviť', run: function () { buildIcons(); } }, { label: 'Usporiadať ikony', run: function () { buildIcons(); } }, '-', { label: 'Pozadie plochy', sub: colorItems() }, '-', { label: 'Vlastnosti', icon: pix('sys-display'), run: function () { dialog({ title: 'Vlastnosti: Obrazovka', icon: pix('sys-display'), text: 'Rozlíšenie: ' + window.innerWidth + ' × ' + window.innerHeight + '<br>Farby: dosť<br>Pozadie: vyber v ponuke Štart → Nastavenia' }); } }], { left: e.clientX, top: e.clientY }, 0, 'point');
  });

  /* ---------- štart menu ---------- */
  function appItems(gid) { return APPS.filter(function (a) { return a.group === gid; }).map(function (a) { return { label: a.name, icon: pix(a.id), run: function () { openApp(a); } }; }); }
  function startItems() {
    var progs = DATA.groups.map(function (g) { var it = appItems(g.id); return it.length ? { label: g.name, icon: pix('sys-folder'), sub: it } : null; }).filter(Boolean);
    return [
      { label: 'Programy', icon: pix('sys-folder'), sub: progs },
      { label: 'Dokumenty', icon: pix('sys-doc'), sub: [
        { label: 'Blog', icon: pix('sys-news'), run: function () { openFolder('sys:blog', 'Blog', ROOT + 'blog/', pix('sys-news'), 940, 660); } },
        { label: 'Na stiahnutie', icon: pix('sys-doc'), run: function () { openFolder('sys:dl', 'Na stiahnutie', ROOT + 'na-stiahnutie/', pix('sys-doc'), 860, 640); } },
        { label: 'Životopis (PDF)', icon: pix('sys-doc'), run: function () { window.open(ROOT + 'cv-robert-durica-sk.pdf', '_blank', 'noopener'); } }] },
      { label: 'Nastavenia', icon: pix('sys-display'), sub: [
        { label: 'Pozadie plochy', icon: pix('sys-display'), sub: colorItems() },
        { label: 'Zobraziť ako telefón', run: function () { R.setMode('phone'); } },
        { label: 'Zobraziť ako iPad', run: function () { R.setMode('tablet'); } }] },
      { label: 'Eventy', icon: pix('sys-calendar'), run: openEvents },
      { label: 'Kontakt', icon: pix('sys-notepad'), run: openContact },
      { label: 'Spustiť…', icon: pix('sys-run'), run: runDialog },
      '-',
      { label: 'Vypnúť…', icon: pix('sys-power'), run: shutdownAsk }
    ];
  }
  startBtn.addEventListener('click', function (e) {
    e.stopPropagation();
    if (startBtn.classList.contains('on')) { closeMenus(); return; }
    closeMenus(); startBtn.classList.add('on'); startBtn.setAttribute('aria-expanded', 'true');
    var box = openMenu(startItems(), startBtn.getBoundingClientRect(), 0, 'up', 'rd-startmenu');
    box.insertBefore(el('div', 'rd-banner', '<span>rob<b>OS</b> 95</span>'), box.firstChild);
  });

  /* ---------- štart, vstup a zatvorenie na webe ---------- */
  var booted = false, launch = null;
  function boot(done) {
    var b = $('.rd-boot');
    if (reduced || tryLS('robos.booted') === '1' || window.sessionStorage && sessionStorage.getItem('robos.booted')) { done(); return; }
    try { sessionStorage.setItem('robos.booted', '1'); } catch (e) {}
    b.hidden = false; b.classList.remove('run'); void b.offsetWidth; b.classList.add('run');
    setTimeout(function () { b.classList.add('gone'); setTimeout(function () { b.hidden = true; b.classList.remove('gone', 'run'); }, 450); done(); }, 1900);
  }
  function openDesk() {
    if (!root.hidden) return;
    root.hidden = false; html.classList.add('rd-lock');
    if (!booted) { booted = true; boot(function () {}); }
    if (launch) launch.hidden = true;
  }
  function closeDesk() { closeMenus(); root.hidden = true; html.classList.remove('rd-lock'); if (launch) launch.hidden = false; }
  if (!PAGE) {
    launch = el('button', 'rd-launch', LOGO + '<span>robOS</span>'); launch.type = 'button'; launch.setAttribute('aria-label', 'Otvoriť robOS, moje appky na ploche');
    launch.addEventListener('click', openDesk); document.body.appendChild(launch);
    document.addEventListener('click', function (e) { var a = e.target.closest && e.target.closest('[data-robos-open]'); if (a) { e.preventDefault(); openDesk(); } });
  } else { booted = true; boot(function () {}); }
  window.addEventListener('resize', function () { wins.forEach(function (w) { if (w.el.classList.contains('max')) return; var D = deskSize(), r = w.el.getBoundingClientRect(); if (r.right > D.w) w.el.style.left = Math.max(0, D.w - r.width) + 'px'; if (r.bottom > D.h) w.el.style.top = Math.max(0, D.h - r.height) + 'px'; }); });
  R.desktop = { open: openDesk, close: closeDesk, openApp: function (id) { var a = R.byId[id]; if (a) openApp(a); } };
})();
