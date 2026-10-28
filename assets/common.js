// shared by both pages: language switch, WhatsApp links, reveal, lightbox, videos, progress bar, ASCII field
(function () {
  var WA = ["541", "109", "908", "421"].reverse().join("");
  var WA_TEXT = { sk: "Ahoj Robo, potreboval by som pomôcť s: ", en: "Hi Robo, I could use help with: " };
  var still = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var html = document.documentElement;
  var TITLE = { sk: document.title, en: html.getAttribute("data-title-en") || document.title };
  var listeners = [];

  var RD = window.RD = {
    lang: "sk",
    still: still,
    // the accent as the page's CSS defines it (black on light pages, light on dark ones), so canvases match the page
    accent: function (fallback) {
      var v = getComputedStyle(document.documentElement).getPropertyValue("--pulse").trim();
      return v || fallback || "#161616";
    },
    waHref: function (extra, base) {
      var txt = base ? base[RD.lang] : WA_TEXT[RD.lang];
      return "https://wa.me/" + WA + "?text=" + encodeURIComponent(txt + (extra || ""));
    },
    onLang: function (fn) { listeners.push(fn); fn(RD.lang); },
    setLang: setLang
  };

  // header: the same three links on every page (their own row on phones), and language plus
  // AI/SI tucked under one "customize" button
  var ROOT = ((document.currentScript && document.currentScript.src) || "").replace(/assets\/common\.js.*$/, "") || "./";
  (function () {
    var barIn = document.querySelector(".bar-in"), barR = document.querySelector(".bar-r"); if (!barIn || !barR) return;
    var here = location.pathname.replace(/index\.html$/, ""), rootPath = new URL(ROOT, location.href).pathname;
    var onHome = here === rootPath;
    barR.querySelectorAll(".nav-link").forEach(function (a) { a.remove(); });
    var nav = document.createElement("nav"); nav.className = "bar-nav"; nav.setAttribute("aria-label", "Menu");
    var ICON = {
      svc: "<path d='M4 11.5 12 4l8 7.5V20h-5.5v-5h-5v5H4z'/>",
      blog: "<rect x='4' y='3.5' width='16' height='17' rx='2'/><path d='M8 8h8M8 12h8M8 16h5'/>",
      dl: "<path d='M12 4v11m-4.5-4.5L12 15l4.5-4.5'/><path d='M4.5 17v2.5h15V17'/>",
      me: "<circle cx='12' cy='8.5' r='3.8'/><path d='M4.5 20c.8-3.8 3.8-6 7.5-6s6.7 2.2 7.5 6'/>"
    };
    var LINKS = [[onHome ? "#sluzby" : ROOT, "Služby", "Services", rootPath, "svc"],
     [ROOT + "blog/", "Blog", "Blog", rootPath + "blog/", "blog"],
     [ROOT + "na-stiahnutie/", "Na stiahnutie", "Downloads", rootPath + "na-stiahnutie/", "dl"],
     [ROOT + "kto-som/", "Kto som", "About me", rootPath + "kto-som/", "me"]];
    var tabs = document.createElement("nav"); tabs.className = "tabbar"; tabs.setAttribute("aria-label", "Menu");
    LINKS.forEach(function (l) {
      var cur = here === l[3] || (l[3] !== rootPath && here.indexOf(l[3]) === 0);
      var a = document.createElement("a"); a.className = "nav-link"; a.href = l[0]; a.textContent = l[1]; a.setAttribute("data-en", l[2]);
      if (cur) a.setAttribute("aria-current", "page");
      if (l[4] === "dl") {
        // on a computer, hovering "downloads" shows the files right away
        var wrap = document.createElement("span"); wrap.className = "nav-dd"; wrap.appendChild(a);
        wrap.insertAdjacentHTML("beforeend", "<span class='dd'>" +
          "<a href='" + ROOT + "stiahni/ai-prirucka.pdf' download='AI-prirucka-Robert-Durica.pdf'><b data-en='AI handbook'>AI príručka</b><span data-en='AI in plain words, 17 pages'>AI po ľudsky, 17 strán</span></a>" +
          "<a href='" + ROOT + "na-stiahnutie/checklist-automatizacia.pdf' download><b>Checklist</b><span data-en='What to automate in a company'>Čo vo firme zautomatizovať</span></a>" +
          "<a href='" + ROOT + "na-stiahnutie/bezpecne-s-ai.pdf' download><b data-en='Safe with AI'>Bezpečne s AI</b><span data-en='10 rules for your team'>10 pravidiel pre tím</span></a>" +
          "<a href='" + ROOT + "na-stiahnutie/'><b data-en='All files →'>Všetky súbory →</b><span data-en='incl. my CV'>aj moje CV</span></a></span>");
        nav.appendChild(wrap);
      } else nav.appendChild(a);
      var t = document.createElement("a"); t.href = l[0]; if (cur) t.setAttribute("aria-current", "page");
      t.innerHTML = "<svg viewBox='0 0 24 24' aria-hidden='true' fill='none' stroke='currentColor' stroke-width='1.8' stroke-linecap='round' stroke-linejoin='round'>" + ICON[l[4]] + "</svg><span></span>";
      var lab = t.querySelector("span"); lab.textContent = l[4] === "dl" ? "Stiahnuť" : l[1]; lab.setAttribute("data-en", l[4] === "dl" ? "Downloads" : l[2]);
      tabs.appendChild(t);
    });
    barIn.insertBefore(nav, barR);
    document.body.appendChild(tabs);
    html.classList.add("has-tabbar");
    // language: two flags straight in the header (the active one is faded, the other one lights up)
    var lang = barR.querySelector(".lang");
    if (lang) {
      var fl = document.createElement("div"); fl.className = "lang flags"; fl.setAttribute("role", "group"); fl.setAttribute("aria-label", "Jazyk / Language");
      fl.innerHTML = "<button type='button' data-l='sk' aria-label='Slovensky' title='Slovensky'><svg viewBox='0 0 36 24' aria-hidden='true'><rect width='36' height='24' fill='#fff'/><rect y='8' width='36' height='8' fill='#0B4EA2'/><rect y='16' width='36' height='8' fill='#EE1C25'/><path d='M7.5 5.2h8v7.1c0 3.1-2.4 4.6-4 5.4-1.6-.8-4-2.3-4-5.4z' fill='#EE1C25' stroke='#fff' stroke-width='1.1'/><path d='M11.5 7v8M9.1 9.2h4.8M9.6 11.3h3.8' stroke='#fff' stroke-width='1.1' fill='none'/><path d='M8.9 13.6c.8-1 1.7-1.5 2.6-1.5s1.8.5 2.6 1.5c-.5 1.3-1.5 2.2-2.6 2.8-1.1-.6-2.1-1.5-2.6-2.8z' fill='#0B4EA2'/></svg></button>" +
        "<button type='button' data-l='en' aria-label='English' title='English'><svg viewBox='0 0 36 24' aria-hidden='true'><rect width='36' height='24' fill='#012169'/><path d='M0 0l36 24M36 0L0 24' stroke='#fff' stroke-width='4.2'/><path d='M0 0l36 24M36 0L0 24' stroke='#C8102E' stroke-width='1.6'/><path d='M18 0v24M0 12h36' stroke='#fff' stroke-width='7'/><path d='M18 0v24M0 12h36' stroke='#C8102E' stroke-width='4'/></svg></button>";
      lang.replaceWith(fl);
    }
  })();

  // Slovak typography: a one-letter word (a, i, k, o, s, u, v, z) never stays alone at the end of a line
  var ONE = /(^|[\s(„])([aikosuvzAIKOSUVZ]) (?=\S)/g;
  function glue(root) {
    var w = document.createTreeWalker(root || document.body, NodeFilter.SHOW_TEXT), n, list = [];
    while ((n = w.nextNode())) { var p = n.parentNode; if (p && !/^(SCRIPT|STYLE|TEXTAREA|CODE|PRE)$/.test(p.nodeName) && ONE.test(n.data)) list.push(n); ONE.lastIndex = 0; }
    list.forEach(function (t) { t.data = t.data.replace(ONE, "$1$2\u00A0"); });
  }
  RD.glue = glue; glue(document.body);
  document.querySelectorAll("[data-en]").forEach(function (el) { el.setAttribute("data-en", el.getAttribute("data-en").replace(/(^|[\s(“])(a|I|A) (?=\S)/g, "$1$2\u00A0")); });
  if ("MutationObserver" in window) {
    var gq = false;
    new MutationObserver(function (ms) { if (gq) return; if (ms.every(function (m) { var t = m.target; return t.nodeType === 1 && t.closest && t.closest("[aria-hidden='true'], .lb, canvas"); })) return; gq = true; requestAnimationFrame(function () { gq = false; glue(document.body); }); }).observe(document.body, { childList: true, subtree: true });
  }

  var tr = document.querySelectorAll("[data-en]");
  var trAria = document.querySelectorAll("[data-en-aria]");
  var trAlt = document.querySelectorAll("[data-en-alt]");
  tr.forEach(function (el) { el.dataset.sk = el.innerHTML; });
  trAria.forEach(function (el) { el.dataset.skAria = el.getAttribute("aria-label"); });
  trAlt.forEach(function (el) { el.dataset.skAlt = el.getAttribute("alt"); });

  function setLang(l) {
    RD.lang = l;
    tr.forEach(function (el) { el.innerHTML = l === "en" ? el.dataset.en : el.dataset.sk; });
    trAria.forEach(function (el) { el.setAttribute("aria-label", l === "en" ? el.dataset.enAria : el.dataset.skAria); });
    trAlt.forEach(function (el) { el.setAttribute("alt", l === "en" ? el.dataset.enAlt : el.dataset.skAlt); });
    html.lang = l;
    document.title = TITLE[l];
    document.querySelectorAll(".lang [data-l]").forEach(function (s) { s.classList.toggle("on", s.dataset.l === l); s.setAttribute("aria-pressed", s.dataset.l === l ? "true" : "false"); });
    document.querySelectorAll("a.wa").forEach(function (a) { a.href = RD.waHref(a.getAttribute("data-wa-" + l) || ""); a.target = "_blank"; a.rel = "noopener"; });
    listeners.forEach(function (fn) { fn(l); });
    try { localStorage.setItem("lang", l); } catch (e) {}
  }

  var start = "sk";
  try {
    var saved = localStorage.getItem("lang");
    if (saved === "sk" || saved === "en") start = saved;
    else if (!/^(sk|cs)/i.test(navigator.language || "")) start = "en";
  } catch (e) {}
  setLang(start);
  document.querySelectorAll(".lang [data-l]").forEach(function (b) { b.addEventListener("click", function () { setLang(b.dataset.l); }); });

  // AI / SI switch: the US government now says "super intelligence" (SI) instead of AI, so the
  // whole site can too. Text is rewritten in place and put back when switched off.
  (function () {
    var bar = document.querySelector(".bar-r"); if (!bar) return;
    if (!document.querySelector(".cust-si")) { try { localStorage.removeItem("aisi"); } catch (e) {} return; } // switch removed from the header
    var on = false, touched = [], mo = null;
    var RULES = [
      [/\bAI\b/g, "SI"],
      [/\b([Uu])mel(?:á|ej|ú|ou) inteligenci/g, function (m, u) { return (u === "U" ? "S" : "s") + "uper\u00ADinteligenci"; }],
      [/\b([Aa])rtificial intelligence/g, function (m, a) { return (a === "A" ? "S" : "s") + "uper intelligence"; }]
    ];
    var SKIP = { SCRIPT: 1, STYLE: 1, TEXTAREA: 1, NOSCRIPT: 1 };
    function fix(n) {
      var p = n.parentNode; if (!p || SKIP[p.nodeName] || (p.closest && p.closest("[data-nosi]"))) return;
      var t = n.data, u = t;
      RULES.forEach(function (r) { u = u.replace(r[0], r[1]); });
      if (u !== t) { touched.push([n, t, u]); n.data = u; }
    }
    function walk(root) {
      if (root.nodeType === 3) return fix(root);
      if (root.nodeType !== 1 || SKIP[root.nodeName]) return;
      var w = document.createTreeWalker(root, NodeFilter.SHOW_TEXT), n, list = [];
      while ((n = w.nextNode())) list.push(n);
      list.forEach(fix);
    }
    function set(v, user) {
      on = v;
      btn.setAttribute("aria-pressed", v ? "true" : "false");
      btn.querySelectorAll("[data-m]").forEach(function (s) { s.classList.toggle("on", (s.dataset.m === "si") === v); });
      html.classList.toggle("si", v);
      if (v) {
        walk(html);
        if (!mo && "MutationObserver" in window) {
          mo = new MutationObserver(function (ms) {
            if (!on) return;
            ms.forEach(function (m) { if (m.type === "characterData") fix(m.target); else m.addedNodes.forEach(walk); });
          });
          mo.observe(html, { childList: true, subtree: true, characterData: true });
        }
      } else {
        touched.forEach(function (x) { if (x[0].isConnected && x[0].data === x[2]) x[0].data = x[1]; });
        touched = [];
      }
      try { localStorage.setItem("aisi", v ? "si" : "ai"); } catch (e) {}
      if (user && v) toast();
    }
    function toast() {
      var old = document.querySelector(".aisi-toast"); if (old) old.remove();
      var d = document.createElement("div"); d.className = "aisi-toast"; d.setAttribute("role", "status"); d.setAttribute("data-nosi", "");
      d.textContent = RD.lang === "en"
        ? "SI mode on. The US now officially says “super intelligence” instead of AI, so why not here too 😏"
        : "SI mód zapnutý. V USA už AI oficiálne volajú „super intelligence“, tak prečo nie aj tu 😏";
      document.body.appendChild(d);
      setTimeout(function () { d.classList.add("out"); setTimeout(function () { d.remove(); }, 400); }, 5200);
    }
    var btn = document.createElement("button");
    btn.type = "button"; btn.className = "aisi"; btn.setAttribute("data-nosi", "");
    btn.setAttribute("aria-label", "Prepnúť AI / SI");
    btn.innerHTML = "<span data-m='ai' class='on'>AI</span> / <span data-m='si'>SI</span>";
    var slot = document.querySelector(".cust-si");
    if (slot) slot.appendChild(btn); else bar.insertBefore(btn, bar.querySelector(".btn") || null);
    btn.addEventListener("click", function () { set(!on, true); });
    var start = false;
    try { start = localStorage.getItem("aisi") === "si"; } catch (e) {}
    if (start) set(true, false);
  })();

  // reveal on scroll
  var rv = document.querySelectorAll(".rv");
  if ("IntersectionObserver" in window) {
    var io = new IntersectionObserver(function (es) {
      es.forEach(function (e) { if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); } });
    }, { rootMargin: "0px 0px -8% 0px" });
    rv.forEach(function (el) { io.observe(el); });
  } else { rv.forEach(function (el) { el.classList.add("in"); }); }
  document.querySelectorAll(".stg").forEach(function (g) { [].forEach.call(g.children, function (c, i) { c.style.setProperty("--i", i); }); });

  // progress bar + header shadow
  var prog = document.querySelector(".progress"), bar = document.querySelector(".bar");
  function onScroll() {
    var h = document.documentElement.scrollHeight - window.innerHeight;
    if (prog) prog.style.transform = "scaleX(" + (h > 0 ? window.scrollY / h : 0).toFixed(4) + ")";
    if (bar) bar.classList.toggle("scrolled", window.scrollY > 10);
  }
  window.addEventListener("scroll", onScroll, { passive: true }); onScroll();

  // lightbox: tap a thumbnail to see it full screen, swipe or use arrows
  (function () {
    var lb = document.getElementById("lb"); if (!lb) return;
    var stage = lb.querySelector(".lb-stage"), cap = lb.querySelector(".lb-cap"), cnt = lb.querySelector(".lb-count");
    var group = [], idx = 0, lastFocus = null;
    var SEL = ".rm .th, .sk-media .m, .rl-media .m, .off .m, .pol, .sheet-mini, .post-shots figure";
    function media(fig) { return fig.querySelector("img, video"); }
    function show(i) {
      idx = (i + group.length) % group.length;
      var fig = group[idx], m = media(fig); stage.innerHTML = "";
      if (!m) return;
      var el;
      if (m.tagName === "VIDEO") {
        el = document.createElement("video"); el.muted = true; el.loop = true; el.playsInline = true; el.controls = true; el.autoplay = true;
        el.setAttribute("playsinline", ""); el.poster = m.poster;
        var src = m.querySelector("source"); el.src = src ? src.src : m.currentSrc;
      } else { el = document.createElement("img"); el.src = m.currentSrc || m.src; el.alt = m.alt; }
      stage.appendChild(el);
      var fc = fig.querySelector("figcaption"); cap.textContent = fc ? (fc.innerText || fc.textContent).replace(/\s*\n+\s*/g, " · ") : (m.alt || "");
      cnt.textContent = group.length > 1 ? (idx + 1) + " / " + group.length : "";
      lb.querySelector(".lb-p").style.display = lb.querySelector(".lb-n").style.display = group.length > 1 ? "" : "none";
    }
    function open(fig) {
      var parent = fig.parentNode;
      group = [].slice.call(parent.children).filter(function (c) { return c.matches && c.matches(SEL) && media(c); });
      lastFocus = document.activeElement;
      lb.classList.add("open"); document.documentElement.style.overflow = "hidden";
      show(group.indexOf(fig)); lb.querySelector(".lb-x").focus();
    }
    function close() { lb.classList.remove("open"); stage.innerHTML = ""; document.documentElement.style.overflow = ""; if (lastFocus) lastFocus.focus(); }
    document.addEventListener("click", function (e) {
      var fig = e.target.closest && e.target.closest(SEL);
      if (fig && !e.target.closest("a") && media(fig)) { e.preventDefault(); open(fig); }
    });
    lb.querySelector(".lb-x").addEventListener("click", close);
    lb.querySelector(".lb-p").addEventListener("click", function () { show(idx - 1); });
    lb.querySelector(".lb-n").addEventListener("click", function () { show(idx + 1); });
    lb.addEventListener("click", function (e) { if (e.target === lb) close(); });
    document.addEventListener("keydown", function (e) {
      if (!lb.classList.contains("open")) return;
      if (e.key === "Escape") close(); else if (e.key === "ArrowLeft") show(idx - 1); else if (e.key === "ArrowRight") show(idx + 1);
    });
    var x0 = null;
    lb.addEventListener("touchstart", function (e) { x0 = e.touches[0].clientX; }, { passive: true });
    lb.addEventListener("touchend", function (e) { if (x0 === null) return; var dx = e.changedTouches[0].clientX - x0; if (Math.abs(dx) > 50) show(idx + (dx < 0 ? 1 : -1)); x0 = null; });
  })();

  // videos: play only while visible, never with reduced motion
  var vids = document.querySelectorAll("main video");
  if (!still && "IntersectionObserver" in window) {
    var vio = new IntersectionObserver(function (es) {
      es.forEach(function (e) {
        var v = e.target;
        if (e.isIntersecting) { v.preload = "auto"; var pr = v.play(); if (pr && pr.catch) pr.catch(function () {}); }
        else v.pause();
      });
    }, { threshold: .35 });
    vids.forEach(function (v) { vio.observe(v); });
  } else {
    vids.forEach(function (v) { v.controls = true; });
  }

  // ASCII engine: breathing wave field + big rotating ASCII torus (inspired by the classic donut.c)
  var mx = 0, my = 0, lastY = window.scrollY, spin = 0;
  window.addEventListener("pointermove", function (e) { mx = e.clientX / window.innerWidth - .5; my = e.clientY / window.innerHeight - .5; }, { passive: true });
  window.addEventListener("scroll", function () { var y = window.scrollY; spin += Math.min(Math.abs(y - lastY), 80) * .004; lastY = y; }, { passive: true });
  RD.pointer = function () { return { x: mx, y: my }; };
  var LUM = ".,-~:;=!*#$@";
  // glyph atlas: every character is drawn once per font + colour, then only copied with drawImage.
  // Copying a small bitmap is far cheaper than fillText for thousands of characters per frame (that was the stutter on phones).
  var atlases = {};
  if (document.fonts && document.fonts.ready) document.fonts.ready.then(function () { atlases = {}; });
  RD.glyphs = function (chars, px, weight, color, dpr) {
    var key = chars + "|" + px + "|" + weight + "|" + color + "|" + dpr, a = atlases[key];
    if (a) return a;
    var w = Math.ceil(px * .75) + 2, h = Math.ceil(px * 1.3) + 2, sw = Math.ceil(w * dpr), sh = Math.ceil(h * dpr);
    var c = document.createElement("canvas"); c.width = sw * chars.length; c.height = sh;
    var x = c.getContext("2d"); x.scale(dpr, dpr);
    x.font = weight + " " + px + "px 'JetBrains Mono', ui-monospace, monospace"; x.textAlign = "center"; x.textBaseline = "middle"; x.fillStyle = color;
    for (var i = 0; i < chars.length; i++) x.fillText(chars[i], (i * sw + sw / 2) / dpr, h / 2);
    a = atlases[key] = { put: function (ctx, k, cx, cy) { ctx.drawImage(c, k * sw, 0, sw, sh, cx - w / 2, cy - h / 2, w, h); } };
    return a;
  };
  // canvases only re-measure when their own box really changes (not when the phone's address bar slides in and out)
  RD.watchSize = function (el, fn) {
    var lw = -1, lh = -1;
    function chk() { var w = el.clientWidth, h = el.clientHeight; if (w !== lw || Math.abs(h - lh) > 1) { lw = w; lh = h; fn(); } }
    if ("ResizeObserver" in window) new ResizeObserver(chk).observe(el); else window.addEventListener("resize", chk);
    chk();
  };
  RD.field = function (cv, opt) {
    var ctx = cv && cv.getContext("2d"); if (!ctx) return;
    var W, H, dpr, cell = 16, t0 = performance.now(), running = true, last = 0, small = false, step = 33;
    var A = .6, B = .2, ringP = 0, zb = null, ob = null, zf = null, of = null, cols = 0, rows = 0, cw = 8, ch = 12;
    var fcv = opt.front, fctx = fcv && fcv.getContext("2d");
    var CH = " .·:-=+*";
    function size() {
      W = cv.clientWidth; H = cv.clientHeight; small = W < 600;
      dpr = Math.min(window.devicePixelRatio || 1, small ? 1.5 : 2);
      step = opt.torus ? (small ? 40 : 33) : (small ? 80 : 50);   // the faint background wave moves slowly, it does not need 30 fps
      cv.width = W * dpr; cv.height = H * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      cell = small ? 15 : 16;
      cw = small ? 7 : 9; ch = small ? 11 : 14;
      cols = Math.ceil(W / cw); rows = Math.ceil(H / ch);
      zb = new Float32Array(cols * rows); ob = new Int8Array(cols * rows);
      zf = new Float32Array(cols * rows); of = new Int8Array(cols * rows);
      if (fctx) { fcv.width = W * dpr; fcv.height = H * dpr; fctx.setTransform(dpr, 0, 0, dpr, 0, 0); }
    }
    function paint(cx2, buf, alpha) {
      var ink = RD.glyphs(LUM, ch - 1, 500, opt.ink + "1)", dpr), hot = RD.glyphs(LUM, ch - 1, 500, opt.hot, dpr);
      for (var r = 0; r < rows; r++) for (var c = 0; c < cols; c++) {
        var v = buf[r * cols + c]; if (v < 0) continue;
        if (v >= 11) { cx2.globalAlpha = alpha; hot.put(cx2, v, c * cw + cw / 2, r * ch + ch / 2); }
        else { cx2.globalAlpha = alpha * (.25 + v / 11 * .75); ink.put(cx2, v, c * cw + cw / 2, r * ch + ch / 2); }
      }
      cx2.globalAlpha = 1;
    }
    function torus(t, dt) {
      var tor = opt.torus, wide = W >= 896;
      var cx = W * (wide ? tor.x : tor.mx), cy = H * (wide ? tor.y : tor.my);
      var sz = Math.min(W, H) * (wide ? tor.size : tor.msize);
      var breathe = 1 + Math.sin(t * .9) * .06;
      var R1 = tor.ring ? .55 + Math.sin(t * .6) * .06 : 1 + Math.sin(t * .6) * .15, R2 = 2.1, K2 = 6;
      var K1 = sz * K2 * breathe / (R1 + R2) / 2;
      if (tor.ring) { ringP += still ? 0 : dt * (1 + spin * 4); A = -.4 + Math.sin(ringP * .45) * .1 - my * .2; B = Math.sin(ringP * .3) * .22 + mx * .3; }
      else if (!still) { A += dt * (.55 + spin) + my * dt * .8; B += dt * (.3 + spin * .6) + mx * dt * .8; }
      spin *= .92;
      zb.fill(0); ob.fill(-1); zf.fill(0); of.fill(-1);
      var cA = Math.cos(A), sA = Math.sin(A), cB = Math.cos(B), sB = Math.sin(B);
      // on phones the character cells are coarse, so fewer sample points cover them just as well
      var dth = small ? .09 : .07, dph = small ? .034 : .025;
      for (var th = 0; th < 6.283; th += dth) {
        var ct = Math.cos(th), st = Math.sin(th);
        for (var ph = 0; ph < 6.283; ph += dph) {
          var cp = Math.cos(ph), sp = Math.sin(ph);
          var ox = R2 + R1 * ct, oy = R1 * st;
          var x = ox * (cB * cp + sA * sB * sp) - oy * cA * sB;
          var y = ox * (sB * cp - sA * cB * sp) + oy * cA * cB;
          var z = K2 + cA * ox * sp + oy * sA;
          var ooz = 1 / z;
          var col = Math.floor((cx + K1 * ooz * x) / cw), row = Math.floor((cy - K1 * ooz * y) / ch);
          if (col < 0 || col >= cols || row < 0 || row >= rows) continue;
          var L = cp * ct * sB - cA * ct * sp - sA * st + cB * (cA * st - ct * sA * sp);
          var i = row * cols + col, lv = L > 0 ? Math.min(11, Math.floor(L * 8)) : 0;
          if (fctx && z < K2 - .15) { if (ooz > zf[i]) { zf[i] = ooz; of[i] = lv; } }
          else if (ooz > zb[i]) { zb[i] = ooz; ob[i] = lv; }
        }
      }
      paint(ctx, ob, tor.alpha);
      if (fctx) { fctx.clearRect(0, 0, W, H); paint(fctx, of, Math.min(1, tor.alpha * 1.1)); }
    }
    function draw(now) {
      if (running && !still) requestAnimationFrame(draw);
      if (!W) return;
      if (!still && now - last < step) return;
      var dt = Math.min((now - last) / 1000, .1); last = now;
      var t = (now - t0) / 1000;
      ctx.clearRect(0, 0, W, H);
      if (opt.strength > 0) {
        var gl = RD.glyphs(CH, cell - 3, 500, opt.ink + "1)", dpr);
        var cx = W * .5 + mx * 120, cy = H * .5 + my * 90, inten = opt.strength;
        for (var y = cell / 2; y < H; y += cell) {
          for (var x = cell / 2; x < W; x += cell) {
            var dx = x - cx, dy = y - cy, d = Math.sqrt(dx * dx + dy * dy);
            var v = Math.sin(d / 40 - t * 1.6) * .5 + .5;
            v *= .5 + .5 * Math.sin(x * .04 - y * .03 + t * .6);
            var idx = Math.floor(v * inten * (CH.length - 1) + .15);
            if (idx <= 0) continue;
            ctx.globalAlpha = .06 + v * .16 * inten;
            gl.put(ctx, idx, x, y);
          }
        }
        ctx.globalAlpha = 1;
      }
      if (opt.torus) torus(t, dt);
    }
    RD.watchSize(cv, function () { size(); if (still) requestAnimationFrame(draw); });
    requestAnimationFrame(draw);
    if ("IntersectionObserver" in window && !still) {
      new IntersectionObserver(function (es) {
        var vis = es[0].isIntersecting;
        if (vis && !running) { running = true; requestAnimationFrame(draw); }
        running = vis;
      }).observe(cv);
    }
  };

  // analytics: privacy-friendly GoatCounter, no cookies. Off until the site code is filled in
  // <meta name="goatcounter" content="https://CODE.goatcounter.com/count"> on each page.
  var gc = document.querySelector('meta[name="goatcounter"]'), gcUrl = gc && gc.content;
  if (gcUrl) {
    var sc = document.createElement("script"); sc.async = true; sc.src = "https://gc.zgo.at/count.js";
    sc.setAttribute("data-goatcounter", gcUrl); document.head.appendChild(sc);
    document.addEventListener("click", function (e) {
      var a = e.target.closest && e.target.closest("a"); if (!a || !window.goatcounter || !window.goatcounter.count) return;
      var h = a.getAttribute("href") || "", ev = null;
      if (a.id === "callWa" || a.id === "callMail") ev = "call-request";
      else if (/wa\.me/.test(a.href)) ev = "whatsapp";
      else if (/^mailto:/.test(h)) ev = "email";
      else if (/\.pdf$/.test(h)) ev = "cv-download";
      if (ev) window.goatcounter.count({ path: ev, title: ev, event: true });
    });
  }

  // page transition: give the shared photo its name only on the element that's on screen
  RD.vtPick = function (els) {
    var vh = window.innerHeight, picked = null;
    els.forEach(function (el) {
      if (!el) return;
      el.style.viewTransitionName = "";
      var r = el.getBoundingClientRect();
      if (!picked && r.bottom > 0 && r.top < vh) picked = el;
    });
    if (picked) picked.style.viewTransitionName = "robo";
  };
})();
