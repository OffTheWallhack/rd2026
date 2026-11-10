/* extras.js: loaded by common.js on every page of the main site.
   1) Search (Ctrl/Cmd+K, "/" or the magnifier in the header) over pages, projects and articles.
   2) Build log on the home page: the latest public changes, straight from GitHub.
   3) Articles: reading time, share, copy link and "listen" (the browser reads the article aloud).
   Everything is optional: if a fetch fails or an element is missing, that part simply does not show. */
(function () {
  'use strict';
  if (window.__rdExtras) return; window.__rdExtras = true;
  var RD = window.RD || { lang: 'sk', onLang: function (f) { f('sk'); } };
  var ROOT = (window.__rdRoot || './');
  var doc = document;
  function T(sk, en) { return RD.lang === 'en' ? en : sk; }
  function esc(s) { return String(s).replace(/[&<>"]/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]; }); }
  function norm(s) { return String(s).toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, ''); }
  function getJSON(url) { return fetch(url, { cache: 'no-cache' }).then(function (r) { if (!r.ok) throw 0; return r.json(); }); }

  /* ---------- shared data (fetched once, only when needed) ---------- */
  var dataP = null;
  function loadData() {
    if (dataP) return dataP;
    var apps = getJSON(ROOT + 'apps.json').then(function (d) {
      return (d.apps || []).filter(function (a) { return a.visibility === 'public'; });
    }).catch(function () { return []; });
    var posts = fetch(ROOT + 'blog/feed.xml').then(function (r) { if (!r.ok) throw 0; return r.text(); }).then(function (x) {
      var d = new DOMParser().parseFromString(x, 'text/xml'), out = [];
      d.querySelectorAll('item').forEach(function (it) {
        var g = function (n) { var e = it.querySelector(n); return e ? e.textContent : ''; };
        out.push({ title: g('title'), url: g('link').replace(/^https?:\/\/durica\.si\//, ROOT), desc: g('description') });
      });
      return out;
    }).catch(function () { return []; });
    dataP = Promise.all([apps, posts]).then(function (r) { return { apps: r[0], posts: r[1] }; });
    return dataP;
  }
  function appHref(a) { return /^https?:/.test(a.url) ? a.url : ROOT + a.url; }

  /* ---------- 1) search ---------- */
  var PAGES = [
    ['', 'Domov', 'Home', 'titulka uvod start'],
    ['blog/', 'Blog – všetky články', 'Blog – all articles', 'clanky articles'],
    ['kto-som/', 'Kto som', 'About me', 'o mne zivotopis cv robert durica'],
    ['na-stiahnutie/', 'Na stiahnutie zadarmo', 'Free downloads', 'pdf tahaky prirucka checklist cv'],
    ['linky/', 'Linky – všetko na jednom mieste', 'Links – everything in one place', 'linktree odkazy'],
    ['appky/', 'robOS – všetky appky a hry', 'robOS – all apps and games', 'telefon apps hry games'],
    ['#spolu', 'Poďme spolu – ako ti viem pomôcť', 'Let’s do it together', 'pomoc spolupraca ukazem naucim'],
    ['#kontakt', 'Kontakt – WhatsApp a e-mail', 'Contact – WhatsApp and e-mail', 'napis mi telefon mail'],
    ['ochrana-udajov/', 'Ochrana údajov', 'Privacy', 'gdpr cookies']
  ];
  var dlg, inp, list, items = [], sel = 0, all = null;
  function buildIndex(d) {
    var en = RD.lang === 'en', out = [];
    PAGES.forEach(function (p) {
      var href = p[0].charAt(0) === '#' ? (doc.querySelector(p[0]) ? p[0] : ROOT + p[0]) : ROOT + p[0];
      out.push({ g: 0, t: en ? p[2] : p[1], s: '', href: href, k: norm(p[1] + ' ' + p[2] + ' ' + p[3]) });
    });
    d.apps.forEach(function (a) {
      var ds = (a.desc && (en ? a.desc.en : a.desc.sk)) || '';
      out.push({ g: 1, t: a.name, s: ds, href: appHref(a), ext: true, icon: ROOT + a.icon, k: norm(a.name + ' ' + (a.short || '') + ' ' + ((a.desc && a.desc.sk) || '') + ' ' + ((a.desc && a.desc.en) || '') + ' ' + a.group) });
    });
    d.posts.forEach(function (p) { out.push({ g: 2, t: p.title, s: p.desc, href: p.url, k: norm(p.title + ' ' + p.desc) }); });
    return out;
  }
  function render() {
    var q = norm(inp.value.trim()), words = q.split(/\s+/).filter(Boolean), G = [T('Stránky', 'Pages'), T('Projekty', 'Projects'), T('Články', 'Articles')];
    var res = (all || []).filter(function (it) { return words.every(function (w) { return it.k.indexOf(w) >= 0; }); });
    if (!q) res = res.filter(function (it, i) { return it.g === 0 ? i < 6 : true; });
    // title matches first inside each group
    if (q) res.sort(function (a, b) { return a.g - b.g || (norm(b.t).indexOf(words[0]) >= 0) - (norm(a.t).indexOf(words[0]) >= 0); });
    var cap = q ? 30 : 60, html = '', last = -1; items = res.slice(0, cap);
    items.forEach(function (it, i) {
      if (it.g !== last) { html += '<li class="sx-g" role="presentation">' + G[it.g] + '</li>'; last = it.g; }
      html += '<li role="option" id="sx-o' + i + '" data-i="' + i + '"' + (i === sel ? ' aria-selected="true"' : '') + '>' +
        (it.icon ? '<img src="' + esc(it.icon) + '" alt="" width="28" height="28" loading="lazy">' : '<i aria-hidden="true">' + (it.g === 2 ? '¶' : '→') + '</i>') +
        '<span><b>' + esc(it.t) + '</b>' + (it.s ? '<small>' + esc(it.s) + '</small>' : '') + '</span></li>';
    });
    if (!items.length) html = '<li class="sx-none" role="presentation">' + (all ? T('Nič som nenašiel. Skús iné slovo, alebo mi napíš.', 'Nothing found. Try another word, or message me.') : T('Načítavam…', 'Loading…')) + '</li>';
    list.innerHTML = html;
    inp.setAttribute('aria-activedescendant', items.length ? 'sx-o' + sel : '');
    var cur = list.querySelector('[aria-selected="true"]'); if (cur && cur.scrollIntoView) cur.scrollIntoView({ block: 'nearest' });
  }
  function go(i) { var it = items[i]; if (!it) return; closeSearch(); location.href = it.href; }
  function closeSearch() { if (dlg && dlg.open) dlg.close(); }
  function openSearch() {
    if (!dlg) {
      dlg = doc.createElement('dialog'); dlg.className = 'sx'; dlg.setAttribute('aria-label', 'Hľadať');
      dlg.innerHTML = '<div class="sx-in"><div class="sx-top"><svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" aria-hidden="true"><circle cx="11" cy="11" r="6.5"/><path d="m16 16 4.5 4.5"/></svg>' +
        '<input type="search" autocomplete="off" autocapitalize="off" spellcheck="false" enterkeyhint="go" role="combobox" aria-expanded="true" aria-controls="sx-list" aria-autocomplete="list">' +
        '<button type="button" class="sx-x" aria-label="Zavrieť">Esc</button></div><ul id="sx-list" role="listbox"></ul>' +
        '<p class="sx-foot"><span><kbd>↑</kbd><kbd>↓</kbd> <span class="sx-f1"></span></span><span><kbd>↵</kbd> <span class="sx-f2"></span></span></p></div>';
      doc.body.appendChild(dlg);
      inp = dlg.querySelector('input'); list = dlg.querySelector('ul');
      inp.addEventListener('input', function () { sel = 0; render(); });
      inp.addEventListener('keydown', function (e) {
        if (e.key === 'ArrowDown') { e.preventDefault(); sel = Math.min(items.length - 1, sel + 1); render(); }
        else if (e.key === 'ArrowUp') { e.preventDefault(); sel = Math.max(0, sel - 1); render(); }
        else if (e.key === 'Enter') { e.preventDefault(); go(sel); }
      });
      list.addEventListener('click', function (e) { var li = e.target.closest('li[data-i]'); if (li) go(+li.getAttribute('data-i')); });
      dlg.addEventListener('click', function (e) { if (e.target === dlg) closeSearch(); });
      dlg.querySelector('.sx-x').addEventListener('click', closeSearch);
    }
    if (dlg.open) return;
    inp.placeholder = T('Hľadaj článok, hru alebo appku…', 'Search an article, game or app…');
    dlg.querySelector('.sx-f1').textContent = T('výber', 'select'); dlg.querySelector('.sx-f2').textContent = T('otvoriť', 'open');
    inp.value = ''; sel = 0; all = all && all.lang === RD.lang ? all : null; render();
    if (dlg.showModal) dlg.showModal(); else dlg.setAttribute('open', '');
    inp.focus();
    loadData().then(function (d) { all = buildIndex(d); all.lang = RD.lang; render(); });
  }
  doc.addEventListener('keydown', function (e) {
    var k = (e.key || '').toLowerCase();
    if ((e.metaKey || e.ctrlKey) && !e.altKey && !e.shiftKey && k === 'k') { e.preventDefault(); openSearch(); return; }
    if (k === '/' && !e.metaKey && !e.ctrlKey && !e.altKey) {
      var t = e.target, tag = t && t.tagName;
      if (tag === 'INPUT' || tag === 'TEXTAREA' || tag === 'SELECT' || (t && t.isContentEditable)) return;
      e.preventDefault(); openSearch();
    }
  });
  (function addButton() {
    var barR = doc.querySelector('.bar .bar-r'); if (!barR) return;
    var b = doc.createElement('button'); b.type = 'button'; b.className = 'sx-btn';
    b.innerHTML = '<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" aria-hidden="true"><circle cx="11" cy="11" r="6.5"/><path d="m16 16 4.5 4.5"/></svg>';
    RD.onLang(function () { b.setAttribute('aria-label', T('Hľadať', 'Search')); b.title = T('Hľadať (Ctrl+K)', 'Search (Ctrl+K)'); });
    b.addEventListener('click', openSearch);
    var before = barR.querySelector('.lang') || barR.querySelector('.btn') || null;
    barR.insertBefore(b, before);
  })();
  window.RD && (window.RD.search = openSearch);

  /* ---------- 2) build log (home page only) ---------- */
  (function buildLog() {
    var host = doc.querySelector('#projekty .built'); if (!host || !window.fetch) return;
    var SKIP = /dĺžky videí|daily matches|small updates|prepísané z apps|^merge /i;
    var EXTRA = { linky: 'linky/', robos: 'appky/', blog: 'blog/', titulka: '', homepage: '', web: '' };
    function ago(d) {
      var m = Math.max(1, Math.round((Date.now() - d) / 60000)), en = RD.lang === 'en';
      if (m < 60) return en ? m + ' min ago' : 'pred ' + m + ' min';
      var h = Math.round(m / 60); if (h < 24) return en ? h + ' h ago' : 'pred ' + h + ' h';
      var dd = Math.round(h / 24); if (dd === 1) return en ? 'yesterday' : 'včera';
      if (dd < 31) return en ? dd + ' days ago' : 'pred ' + dd + ' dňami';
      return new Date(d).toLocaleDateString(en ? 'en-GB' : 'sk-SK', { day: 'numeric', month: 'short' });
    }
    function key(s) { return norm(s).replace(/^si[\/ ]/, '').replace(/[^a-z0-9]/g, ''); }
    Promise.all([loadData(), getJSON('https://api.github.com/repos/OffTheWallhack/rd2026/commits?per_page=60')]).then(function (r) {
      var d = r[0], commits = r[1], map = {};
      d.apps.forEach(function (a) {
        [a.name, a.short, a.id, (a.titulka && a.titulka.name)].forEach(function (n) { if (n) map[key(n)] = { name: a.name, href: appHref(a) }; });
      });
      Object.keys(EXTRA).forEach(function (k) { map[k] = { name: k === 'robos' ? 'robOS' : k.charAt(0).toUpperCase() + k.slice(1), href: ROOT + EXTRA[k] }; });
      var keys = Object.keys(map).sort(function (a, b) { return b.length - a.length; }), seen = {}, rows = [];
      commits.forEach(function (c) {
        var msg = ((c.commit && c.commit.message) || '').split('\n')[0], i = msg.indexOf(':');
        if (i < 2 || SKIP.test(msg)) return;
        var pk = key(msg.slice(0, i)), hit = null;
        for (var j = 0; j < keys.length; j++) if (keys[j].length > 2 && pk.indexOf(keys[j]) === 0) { hit = map[keys[j]]; break; }
        if (!hit || seen[hit.name]) return; seen[hit.name] = 1;
        var text = msg.slice(i + 1).replace(/\s*\(#\d+\)\s*$/, '').trim(); if (text.length > 120) text = text.slice(0, 117).replace(/\s+\S*$/, '') + '…';
        rows.push({ p: hit, text: text.charAt(0).toUpperCase() + text.slice(1), date: +new Date(c.commit.author.date) });
      });
      if (rows.length < 3) return;
      rows = rows.slice(0, 5);
      var box = doc.createElement('div'); box.className = 'blog-log rv'; box.id = 'dennik';
      function paint() {
        box.innerHTML = '<p class="label"><span class="dot" aria-hidden="true"></span>' + T('Denník stavby · naživo z GitHubu', 'Build log · live from GitHub') + '</p>' +
          '<ol>' + rows.map(function (x) {
            return '<li><a href="' + esc(x.p.href) + '"><time>' + ago(x.date) + '</time><span><b>' + esc(x.p.name) + '</b> ' + esc(x.text) + '</span></a></li>';
          }).join('') + '</ol>' +
          '<p class="bl-sum">' + T(d.apps.length + ' projektov · ' + d.posts.length + ' článkov · všetko postavené s AI', d.apps.length + ' projects · ' + d.posts.length + ' articles · all built with AI') + '</p>';
      }
      paint(); RD.onLang(paint);
      var tools = host.querySelector('.sk-tools'); host.insertBefore(box, tools || null);
      requestAnimationFrame(function () { setTimeout(function () { var r = box.getBoundingClientRect(); if (r.top < innerHeight) box.classList.add('in'); else if ('IntersectionObserver' in window) { var io = new IntersectionObserver(function (es) { if (es[0].isIntersecting) { box.classList.add('in'); io.disconnect(); } }, { rootMargin: '0px 0px -8% 0px' }); io.observe(box); } else box.classList.add('in'); }, 60); });
    }).catch(function () {});
  })();

  /* ---------- 3) articles ---------- */
  (function article() {
    var post = doc.querySelector('article.post'), prose = post && post.querySelector('.prose'); if (!prose) return;
    var label = post.querySelector('.label'), tags = post.querySelector('.tags');
    var words = (prose.textContent || '').trim().split(/\s+/).length, mins = Math.max(1, Math.round(words / 200));
    if (label) { var rt = doc.createElement('span'); rt.className = 'rt'; label.appendChild(rt); RD.onLang(function () { rt.textContent = ' · ' + mins + T(' min čítania', ' min read'); }); }

    var bar = doc.createElement('div'); bar.className = 'post-tools';
    var url = (doc.querySelector('link[rel=canonical]') || {}).href || location.href, title = (post.querySelector('h1') || {}).textContent || doc.title;
    function btn(cls, icon) { var b = doc.createElement('button'); b.type = 'button'; b.className = 'pt ' + cls; b.innerHTML = '<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">' + icon + '</svg><span></span>'; bar.appendChild(b); return b; }
    var bListen = btn('pt-listen', '<path d="M4 10v4h3l4 3.5v-11L7 10z"/><path d="M15 9.5a3.5 3.5 0 0 1 0 5M17.5 7a7 7 0 0 1 0 10"/>');
    var bShare = btn('pt-share', '<path d="M12 15V4m-3.5 3.5L12 4l3.5 3.5"/><path d="M5 12v7h14v-7"/>');
    var bCopy = btn('pt-copy', '<rect x="8" y="8" width="11" height="11" rx="2"/><path d="M5 15V6a1 1 0 0 1 1-1h9"/>');
    bListen.hidden = true; if (!navigator.share) bShare.hidden = true;
    var speaking = false, copied = false;
    function labels() {
      bListen.lastChild.textContent = speaking ? T('Zastaviť', 'Stop') : T('Vypočuť článok', 'Listen');
      bShare.lastChild.textContent = T('Zdieľať', 'Share');
      bCopy.lastChild.textContent = copied ? T('Skopírované ✓', 'Copied ✓') : T('Kopírovať odkaz', 'Copy link');
    }
    RD.onLang(labels);
    bShare.addEventListener('click', function () { navigator.share({ title: title, url: url }).catch(function () {}); });
    bCopy.addEventListener('click', function () {
      var done = function () { copied = true; labels(); setTimeout(function () { copied = false; labels(); }, 2200); };
      if (navigator.clipboard && navigator.clipboard.writeText) navigator.clipboard.writeText(url).then(done, function () {});
      else { var ta = doc.createElement('textarea'); ta.value = url; ta.style.cssText = 'position:fixed;opacity:0'; doc.body.appendChild(ta); ta.select(); try { doc.execCommand('copy'); done(); } catch (e) {} ta.remove(); }
    });
    (tags || label || prose).insertAdjacentElement(tags || label ? 'afterend' : 'beforebegin', bar);

    // listen: the browser's own voice reads paragraph by paragraph (only offered when a Slovak voice exists)
    var synth = window.speechSynthesis; if (!synth || !window.SpeechSynthesisUtterance) return;
    var voice = null, parts = [], idx = 0;
    function pickVoice() {
      var vs = synth.getVoices() || [];
      voice = vs.filter(function (v) { return /^sk/i.test(v.lang); })[0] || null;
      bListen.hidden = !voice;
    }
    pickVoice(); if (synth.addEventListener) synth.addEventListener('voiceschanged', pickVoice);
    function mark(el) { var o = prose.querySelector('.tts-on'); if (o) o.classList.remove('tts-on'); if (el) { el.classList.add('tts-on'); var r = el.getBoundingClientRect(); if (r.top < 80 || r.bottom > innerHeight - 120) el.scrollIntoView({ block: 'center', behavior: 'smooth' }); } }
    function stop() { speaking = false; synth.cancel(); mark(null); labels(); }
    function next() {
      if (!speaking) return;
      if (idx >= parts.length) { stop(); return; }
      var el = parts[idx++], text = (el.innerText || el.textContent || '').trim(); if (!text) { next(); return; }
      var u = new SpeechSynthesisUtterance(text); u.voice = voice; u.lang = voice.lang; u.rate = 1;
      u.onend = function () { if (speaking) next(); }; u.onerror = function () { if (speaking) stop(); };
      mark(el); synth.speak(u);
    }
    bListen.addEventListener('click', function () {
      if (speaking) { stop(); return; }
      parts = [].slice.call(prose.querySelectorAll('p, h2, h3, li, blockquote')).filter(function (el) { return !el.closest('.twitter-tweet') && !(el.tagName === 'P' && el.closest('li, blockquote')); });
      // start from the first paragraph that is still on screen, so "listen" continues where you are reading
      idx = 0; for (var i = 0; i < parts.length; i++) { if (parts[i].getBoundingClientRect().bottom > 90) { idx = i; break; } }
      if (window.scrollY < 200) idx = 0;
      synth.cancel(); speaking = true; labels(); next();
    });
    window.addEventListener('pagehide', function () { synth.cancel(); });
  })();

  try { console.log('%cAhoj 👋 Hrabeš sa v kóde? Celý web je verejný: github.com/OffTheWallhack/rd2026. Postavené s AI, bez frameworku.', 'font:600 13px system-ui;color:#1FAF6F'); } catch (e) {}
})();
