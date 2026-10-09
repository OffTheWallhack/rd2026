// Hero "infection": code climbs my body from the soles. Green and very slow up to the knees,
// then orange and red, faster. When it passes the speech bubble the bubble turns into a red call
// to action, and at the head the band over my eyes goes red and angry. Skipped with reduced motion.
(function () {
  var cut = document.querySelector(".hero-cut"), img = cut && cut.querySelector("img"),
      bar = document.querySelector(".eyebar"), bub = document.querySelector(".bubble");
  if (!cut || !img || window.RD && window.RD.still) return;
  // The climb is a long main-thread loop. Phones keep the still portrait.
  if (window.matchMedia("(max-width: 56rem)").matches) return;
  var cv = document.createElement("canvas"); cv.className = "infect"; cv.setAttribute("aria-hidden", "true");
  cut.insertBefore(cv, bar); var ctx = cv.getContext("2d");
  var ring = document.querySelector(".hero-ring"), bg = null, bctx = null, BW = 0, BH = 0;
  if (ring) { bg = document.createElement("canvas"); bg.className = "infect-bg"; bg.setAttribute("aria-hidden", "true"); ring.parentNode.insertBefore(bg, ring.nextSibling); bctx = bg.getContext("2d"); }
  var W = 0, H = 0, dpr = 1, ch = 11, cw = 7, cols = 0, rows = 0, grid = null, t0 = null, last = 0, raf = 0, ang = false, alerted = false;
  var CH = "01<>/{}#=+*$@%&;:", WORDS = ["hugging face", "usage", "offline", "401", "leak", "agent", "sandbox", "token", "root", "403", "kill -9", "50 PB"];
  var T1 = 26000, T2 = 7000, DELAY = 2200;            // slow part (feet to knees), fast part (knees to head)
  if (/infect=fast/.test(location.search)) { T1 = 2500; T2 = 1500; DELAY = 300; }   // for testing
  var KNEE = .66, HEAD = .07;                          // fractions of the figure's height, from the top
  function size() {
    dpr = Math.min(window.devicePixelRatio || 1, 2); W = img.clientWidth; H = img.clientHeight; if (!W) return;
    cv.width = W * dpr; cv.height = H * dpr; ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    ch = W < 200 ? 12 : 15; cw = ch * .62; cols = Math.ceil(W / cw); rows = Math.ceil(H / ch);
    grid = new Uint8Array(cols * rows); for (var i = 0; i < grid.length; i++) grid[i] = Math.floor(Math.random() * CH.length);
    if (bg) { BW = bg.clientWidth; BH = bg.clientHeight; bg.width = BW * dpr; bg.height = BH * dpr; bctx.setTransform(dpr, 0, 0, dpr, 0, 0); }
  }
  function col(yn, a) {
    if (yn > KNEE) return "rgba(31,191,98," + a + ")";
    if (yn > KNEE - .12) { var k = (KNEE - yn) / .12; return "rgba(" + Math.round(31 + 224 * k) + "," + Math.round(191 - 41 * k) + "," + Math.round(98 - 68 * k) + "," + a + ")"; }
    return "rgba(235,50,60," + a + ")";
  }
  function front(el) {                                  // 1 = soles, 0 = top of head
    if (el < DELAY) return 1.02;
    var e = el - DELAY;
    if (e < T1) { var p = e / T1; return 1.02 - (1.02 - KNEE) * (p * p * .35 + p * .65); }
    var q = Math.min(1, (e - T1) / T2); return KNEE - (KNEE - HEAD) * (q * q * (3 - 2 * q));
  }
  function setBubble() {
    if (!bub || alerted) return; alerted = true; bub.classList.add("alert");
    var s = bub.querySelector("span"), b = bub.querySelector("b");
    s.setAttribute("data-en", "Read about the threat of AI agents"); s.dataset.sk = "Prečítaj si o hrozbách AI agentov";
    b.setAttribute("data-en", "Right now →"); b.dataset.sk = "Teraz hneď →";
    var en = document.documentElement.lang === "en"; s.textContent = en ? s.getAttribute("data-en") : s.dataset.sk; b.textContent = en ? b.getAttribute("data-en") : b.dataset.sk;
    bub.setAttribute("data-go", "blog/ai-svet-za-tyzden/#agenti"); bub.removeAttribute("aria-controls");
  }
  function angry() {
    if (!bar || ang) return; ang = true; bar.classList.add("angry"); window.__angryEyes = true;
  }
  function draw(now) {
    if (document.hidden) { raf = 0; return; }
    raf = requestAnimationFrame(draw); if (now - last < 45) return; last = now;
    if (t0 === null) t0 = now; if (!W) { size(); if (!W) return; }
    var f = front(now - t0); ctx.clearRect(0, 0, W, H); ctx.font = "700 " + (ch - 1) + "px 'JetBrains Mono', ui-monospace, monospace"; ctx.textBaseline = "top";
    var r0 = Math.max(0, Math.floor(f * rows)), y0 = r0 * ch;
    // tint the whole body below the front, so it looks swallowed, not just sprinkled
    for (var y = y0; y < H; y += 6) { var tn = y / H; ctx.fillStyle = col(tn, .34); ctx.fillRect(0, y, W, 6); }
    for (var r = r0; r < rows; r++) {
      var yn = r / rows, edge = Math.max(0, 1 - (r - r0) / 7);
      for (var c = 0; c < cols; c++) {
        var i = r * cols + c; if (Math.random() < .1) grid[i] = Math.floor(Math.random() * CH.length);
        if (Math.random() > .8 + edge * .2) continue;
        ctx.fillStyle = col(yn, edge > .15 ? 1 : .72 + Math.random() * .28); ctx.fillText(CH[grid[i]], c * cw, r * ch);
      }
    }
    // aura around the figure: glow plus large faint code, below the same front line
    if (bctx && BW) {
      var cr0 = cut.getBoundingClientRect(), br0 = bg.getBoundingClientRect(), ox = cr0.left - br0.left, oy = cr0.top - br0.top, fy = oy + f * cr0.height;
      bctx.clearRect(0, 0, BW, BH);
      var sr = ring.parentNode.getBoundingClientRect(), sl = sr.left - br0.left + 2, shr = sr.right - br0.left - 2;
      var cxm = ox + cr0.width / 2, rx = cr0.width * 1.55, ry = cr0.height * .62;
      for (var gy = Math.max(0, fy); gy < BH; gy += 10) {
        var tn2 = Math.min(1, Math.max(0, (gy - oy) / cr0.height)), fade = Math.min(1, (gy - fy) / 70 + .25), k = Math.max(0, 1 - Math.pow((gy - (oy + cr0.height * .62)) / ry, 2));
        var half = rx * Math.sqrt(k); if (half < 2) continue;
        var lo = Math.max(cxm - half, sl), hi = Math.min(cxm + half, shr); if (hi - lo < 4) continue;
        var g = bctx.createLinearGradient(lo, 0, hi, 0), cc = col(tn2, .30 * fade), c0 = col(tn2, 0);
        g.addColorStop(0, c0); g.addColorStop(.22, cc); g.addColorStop(.78, cc); g.addColorStop(1, c0); bctx.fillStyle = g; bctx.fillRect(lo, gy, hi - lo, 10);
      }
      bctx.font = "700 14px 'JetBrains Mono', ui-monospace, monospace"; bctx.textBaseline = "top";
      for (var gy2 = Math.max(0, Math.floor(fy / 17) * 17); gy2 < BH; gy2 += 17) {
        var tn3 = Math.min(1, Math.max(0, (gy2 - oy) / cr0.height)), k2 = Math.max(0, 1 - Math.pow((gy2 - (oy + cr0.height * .62)) / ry, 2)), half2 = rx * Math.sqrt(k2); if (half2 < 4) continue;
        for (var gx = Math.max(cxm - half2, sl); gx < Math.min(cxm + half2, shr - 6); gx += 10) {
          var inside = gx > ox - 4 && gx < ox + cr0.width + 4, d = Math.abs(gx - cxm) / half2; if (inside && Math.random() < .5) continue;
          if (Math.random() > .5 - d * .38) continue;
          bctx.fillStyle = col(tn3, .22 + Math.random() * .38 * (1 - d)); bctx.fillText(CH[Math.floor(Math.random() * CH.length)], gx, gy2);
        }
      }
    }
    // bubble: when the front passes it
    if (bub && !alerted) { var br = bub.getBoundingClientRect(), cr = cut.getBoundingClientRect(); if (br.top + br.height * .5 > cr.top + f * cr.height) setBubble(); }
    if (f < .2) angry();
    if (f <= HEAD + .005 && now - t0 > DELAY + T1 + T2 + 400) { /* settled: keep it alive at a lower rate */ last = now + 90; }
  }
  window.addEventListener("resize", size);
  if (img.complete) size(); else img.addEventListener("load", size);
  var seen = false;
  var io = new IntersectionObserver(function (es) {
    seen = es[0].isIntersecting;
    if (seen && !document.hidden) { if (!raf) raf = requestAnimationFrame(draw); }
    else { cancelAnimationFrame(raf); raf = 0; }
  }, { threshold: .1 });
  io.observe(cut);
  document.addEventListener("visibilitychange", function () {
    if (document.hidden || !seen) { cancelAnimationFrame(raf); raf = 0; }
    else if (!raf) raf = requestAnimationFrame(draw);
  });
})();
