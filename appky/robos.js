/* robOS: vstup. Pridaj na stránku <link rel="stylesheet" href="appky/robos.css"> a <script src="appky/robos.js" defer>.
   Tento súbor sám rozhodne, čo sa zobrazí, a načíta zoznam appiek z /apps.json:
     počítač (myš, široká obrazovka)  ->  plocha ako Windows 95   (appky/desktop.js)
     iPad a tablet                    ->  iPad                     (appky/phone.js, režim tablet)
     telefón                          ->  iPhone                   (appky/phone.js, režim phone)
   Na skúšku sa dá vynútiť v adrese: ?os=desktop | tablet | phone. Prepínače v samotnom robOS to uložia natrvalo. */
(function () {
  'use strict';
  if (window.RobOS) return;
  if (window.top !== window.self) return;              // stránka je vnútri okna robOS (iframe): nespúšťaj robOS znova
  var script = document.currentScript || document.querySelector('script[src*="robos.js"]');
  var BASE = new URL('.', script.src).href;           // .../appky/
  var ROOT = new URL('../', BASE).href;                // koreň webu
  var html = document.documentElement;
  var PAGE = html.getAttribute('data-robos') === 'page';
  function mq(q) { return !!(window.matchMedia && matchMedia(q).matches); }
  var FINE = mq('(hover: hover) and (pointer: fine)');
  function auto() { return window.innerWidth < 768 ? 'phone' : (FINE ? 'desktop' : 'tablet'); }
  function valid(m) { return m === 'desktop' || m === 'tablet' || m === 'phone' ? m : null; }

  var forced = null;
  try { forced = valid(new URLSearchParams(location.search).get('os')); } catch (e) {}
  var saved = null;
  try { saved = valid(localStorage.getItem('robos.mode')); } catch (e) {}
  var mode = forced || saved || auto();

  var R = window.RobOS = {
    BASE: BASE, ROOT: ROOT, PAGE: PAGE, mode: mode, fine: FINE,
    fill: mq('(hover: none), (max-width: 1100px)'),      // zariadenie vyplní celú obrazovku (telefón, iPad), nie rámček
    data: null, byId: {},
    url: function (u) { return /^https?:/.test(u) ? u : ROOT + u; },
    setMode: function (m) {
      try { if (valid(m)) localStorage.setItem('robos.mode', m); else localStorage.removeItem('robos.mode'); } catch (e) {}
      location.reload();
    }
  };

  function loadJs(src) { var s = document.createElement('script'); s.src = src; s.defer = true; document.head.appendChild(s); }
  function loadCss(href, cb) {
    var l = document.createElement('link'); l.rel = 'stylesheet'; l.href = href;
    if (cb) { l.onload = cb; l.onerror = cb; }
    document.head.appendChild(l);
  }
  function hasCss(name) { return !!document.querySelector('link[rel="stylesheet"][href*="' + name + '"]'); }

  function start() {
    html.classList.add('ro-m-' + mode);
    if (mode === 'desktop') { loadCss(BASE + 'desktop.css', function () { loadJs(BASE + 'desktop.js'); }); return; }
    if (hasCss('robos.css')) loadJs(BASE + 'phone.js');
    else loadCss(BASE + 'robos.css', function () { loadJs(BASE + 'phone.js'); });
  }

  fetch(ROOT + 'apps.json', { cache: 'no-cache' }).then(function (r) { return r.json(); }).then(function (d) {
    R.data = d; d.apps.forEach(function (a) { R.byId[a.id] = a; });
    start();
  }).catch(function () { if (window.console) console.warn('robOS: apps.json sa nepodarilo načítať'); });

  // keď sa okno zmení z počítača na telefón (alebo naopak), načítaj robOS znova v správnom vzhľade
  if (!forced && !saved) {
    var t = null;
    window.addEventListener('resize', function () { clearTimeout(t); t = setTimeout(function () { if (auto() !== mode) location.reload(); }, 500); });
  }
})();
