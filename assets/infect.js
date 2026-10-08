// Hero "infection": code climbs my body from the soles. Green and very slow up to the knees,
// then orange and red, faster. When it passes the speech bubble the bubble turns into a red call
// to action, and at the head the band over my eyes goes red and angry. Skipped with reduced motion.
(function () {
  var cut = document.querySelector(".hero-cut"), img = cut && cut.querySelector("img"),
      bar = document.querySelector(".eyebar"), bub = document.querySelector(".bubble");
  if (!cut || !img || window.RD && window.RD.still) return;
  var cv = document.createElement("canvas"); cv.className = "infect"; cv.setAttribute("aria-hidden", "true");
  cut.insertBefore(cv, bar); var ctx = cv.getContext("2d");
  var W = 0, H = 0, dpr = 1, ch = 11, cw = 7, cols = 0, rows = 0, grid = null, t0 = null, last = 0, raf = 0, ang = false, alerted = false;
  var CH = "01<>/{}#=+*$@%&;:", WORDS = ["hugging face", "usage", "offline", "401", "leak", "agent", "sandbox", "token", "root", "403", "kill -9", "50 PB"];
  var T1 = 26000, T2 = 7000, DELAY = 2200;            // slow part (feet to knees), fast part (knees to head)
  if (/infect=fast/.test(location.search)) { T1 = 2500; T2 = 1500; DELAY = 300; }   // for testing
  var KNEE = .66, HEAD = .07;                          // fractions of the figure's height, from the top
  function size() {
    dpr = Math.min(window.devicePixelRatio || 1, 2); W = img.clientWidth; H = img.clientHeight; if (!W) return;
    cv.width = W * dpr; cv.height = H * dpr; ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    ch = W < 200 ? 9 : 11; cw = ch * .62; cols = Math.ceil(W / cw); rows = Math.ceil(H / ch);
    grid = new Uint8Array(cols * rows); for (var i = 0; i < grid.length; i++) grid[i] = Math.floor(Math.random() * CH.length);
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
    raf = requestAnimationFrame(draw); if (now - last < 45) return; last = now;
    if (t0 === null) t0 = now; if (!W) { size(); if (!W) return; }
    var f = front(now - t0); ctx.clearRect(0, 0, W, H); ctx.font = "500 " + (ch - 1) + "px 'JetBrains Mono', ui-monospace, monospace"; ctx.textBaseline = "top";
    var r0 = Math.max(0, Math.floor(f * rows));
    for (var r = r0; r < rows; r++) {
      var yn = r / rows, edge = Math.max(0, 1 - (r - r0) / 5);
      for (var c = 0; c < cols; c++) {
        var i = r * cols + c; if (Math.random() < .08) grid[i] = Math.floor(Math.random() * CH.length);
        if (Math.random() > .62 + edge * .3) continue;
        ctx.fillStyle = col(yn, edge > .2 ? .95 : .5 + Math.random() * .35); ctx.fillText(CH[grid[i]], c * cw, r * ch);
      }
    }
    // bubble: when the front passes it
    if (bub && !alerted) { var br = bub.getBoundingClientRect(), cr = cut.getBoundingClientRect(); if (br.top + br.height * .5 > cr.top + f * cr.height) setBubble(); }
    if (f < .2) angry();
    if (f <= HEAD + .005 && now - t0 > DELAY + T1 + T2 + 400) { /* settled: keep it alive at a lower rate */ last = now + 90; }
  }
  window.addEventListener("resize", size);
  if (img.complete) size(); else img.addEventListener("load", size);
  var io = new IntersectionObserver(function (es) { if (es[0].isIntersecting) { if (!raf) raf = requestAnimationFrame(draw); } else { cancelAnimationFrame(raf); raf = 0; } }, { threshold: .1 });
  io.observe(cut);
})();
