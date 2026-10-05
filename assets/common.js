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
    waHref: function (extra, base) {
      var txt = base ? base[RD.lang] : WA_TEXT[RD.lang];
      return "https://wa.me/" + WA + "?text=" + encodeURIComponent(txt + (extra || ""));
    },
    onLang: function (fn) { listeners.push(fn); fn(RD.lang); },
    setLang: setLang
  };

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
    document.querySelectorAll(".lang [data-l]").forEach(function (s) { s.classList.toggle("on", s.dataset.l === l); });
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
  var langBtn = document.querySelector(".lang");
  if (langBtn) langBtn.addEventListener("click", function () { setLang(RD.lang === "sk" ? "en" : "sk"); });

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
    var SEL = ".rm .th, .sk-media .m, .rl-media .m, .off .m, .pol, .sheet-mini";
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
      var fc = fig.querySelector("figcaption"); cap.textContent = fc ? fc.textContent : (m.alt || "");
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
  RD.field = function (cv, opt) {
    var ctx = cv && cv.getContext("2d"); if (!ctx) return;
    var W, H, dpr, cell = 16, t0 = performance.now(), running = true, last = 0;
    var A = .6, B = .2, ringP = 0, zb = null, ob = null, zf = null, of = null, cols = 0, rows = 0, cw = 8, ch = 12;
    var fcv = opt.front, fctx = fcv && fcv.getContext("2d");
    var CH = " .·:-=+*";
    function size() {
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      W = cv.clientWidth; H = cv.clientHeight;
      cv.width = W * dpr; cv.height = H * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      cell = W < 600 ? 14 : 16;
      cw = W < 600 ? 7 : 9; ch = W < 600 ? 11 : 14;
      cols = Math.ceil(W / cw); rows = Math.ceil(H / ch);
      zb = new Float32Array(cols * rows); ob = new Int8Array(cols * rows);
      zf = new Float32Array(cols * rows); of = new Int8Array(cols * rows);
      if (fctx) { fcv.width = W * dpr; fcv.height = H * dpr; fctx.setTransform(dpr, 0, 0, dpr, 0, 0); }
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
      for (var th = 0; th < 6.283; th += .07) {
        var ct = Math.cos(th), st = Math.sin(th);
        for (var ph = 0; ph < 6.283; ph += .025) {
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
      function paint(cx2, buf, alpha) {
        cx2.font = "500 " + (ch - 1) + "px 'JetBrains Mono', ui-monospace, monospace";
        cx2.textAlign = "center"; cx2.textBaseline = "middle";
        for (var r = 0; r < rows; r++) for (var c = 0; c < cols; c++) {
          var v = buf[r * cols + c]; if (v < 0) continue;
          cx2.fillStyle = v >= 11 ? opt.hot + Math.round(alpha * 255).toString(16).padStart(2, "0") : opt.ink + (alpha * (.25 + v / 11 * .75)).toFixed(3) + ")";
          cx2.fillText(LUM[v], c * cw + cw / 2, r * ch + ch / 2);
        }
      }
      paint(ctx, ob, tor.alpha);
      if (fctx) { fctx.clearRect(0, 0, W, H); paint(fctx, of, Math.min(1, tor.alpha * 1.1)); }
    }
    function draw(now) {
      if (running && !still) requestAnimationFrame(draw);
      if (!still && now - last < 33) return;
      var dt = Math.min((now - last) / 1000, .1); last = now;
      var t = (now - t0) / 1000;
      ctx.clearRect(0, 0, W, H);
      ctx.textAlign = "center"; ctx.textBaseline = "middle";
      if (opt.strength > 0) {
        ctx.font = "500 " + (cell - 3) + "px 'JetBrains Mono', ui-monospace, monospace";
        var cx = W * .5 + mx * 120, cy = H * .5 + my * 90;
        for (var y = cell / 2; y < H; y += cell) {
          for (var x = cell / 2; x < W; x += cell) {
            var dx = x - cx, dy = y - cy, d = Math.sqrt(dx * dx + dy * dy);
            var v = Math.sin(d / 40 - t * 1.6) * .5 + .5;
            v *= .5 + .5 * Math.sin(x * .04 - y * .03 + t * .6);
            var inten = opt.strength;
            var idx = Math.floor(v * inten * (CH.length - 1) + .15);
            if (idx <= 0) continue;
            ctx.fillStyle = opt.ink + (.06 + v * .16 * inten).toFixed(3) + ")";
            ctx.fillText(CH[idx], x, y);
          }
        }
      }
      if (opt.torus) torus(t, dt);
    }
    size(); requestAnimationFrame(draw);
    window.addEventListener("resize", function () { size(); if (still) requestAnimationFrame(draw); });
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
