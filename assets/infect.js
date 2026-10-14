// Hero "infection": code climbs my body from the soles. Green and very slow up to the knees,
// then orange and red, faster. When it passes the speech bubble the bubble turns into a red call
// to action, and at the head the band over my eyes goes red and angry. Skipped with reduced motion.
// Speed: characters come from a glyph atlas (RD.glyphs, drawImage instead of fillText), the glow is
// cached and only redrawn when the front moves, and nothing is measured inside the animation loop.
(function () {
  var RD = window.RD, cut = document.querySelector(".hero-cut"), img = cut && cut.querySelector("img"),
      bar = document.querySelector(".eyebar"), bub = document.querySelector(".bubble");
  if (!cut || !img || !RD || RD.still) return;
  var cv = document.createElement("canvas"); cv.className = "infect"; cv.setAttribute("aria-hidden", "true");
  cut.insertBefore(cv, bar); var ctx = cv.getContext("2d");
  var ring = document.querySelector(".hero-ring"), bg = null, bctx = null, BW = 0, BH = 0;
  var glow = document.createElement("canvas"), gctx = glow.getContext("2d"), glowFy = -1;
  if (ring) { bg = document.createElement("canvas"); bg.className = "infect-bg"; bg.setAttribute("aria-hidden", "true"); ring.parentNode.insertBefore(bg, ring.nextSibling); bctx = bg.getContext("2d"); }
  var W = 0, H = 0, dpr = 1, ch = 11, cw = 7, cols = 0, rows = 0, grid = null, spice = null, t0 = null, last = 0, raf = 0, ang = false, alerted = false, settled = false;
  var geo = null;                                       // figure position inside the glow canvas, measured on resize only
  var CH = "01<>/{}#=+*$@%&;:";
  var T1 = 26000, T2 = 7000, DELAY = 2200;            // slow part (feet to knees), fast part (knees to head)
  if (/infect=fast/.test(location.search)) { T1 = 2500; T2 = 1500; DELAY = 300; }   // for testing
  var KNEE = .66, HEAD = .07;                          // fractions of the figure's height, from the top
  var HUES = 10, YEL = "rgb(242,194,48)", RED = "rgb(235,50,60)";
  function rgb(yn) {                                   // body colour by height, snapped to a few steps so the atlas stays small
    if (yn > KNEE) return [31, 191, 98];
    if (yn > KNEE - .12) { var k = Math.round((KNEE - yn) / .12 * HUES) / HUES; return [Math.round(31 + 224 * k), Math.round(191 - 41 * k), Math.round(98 - 68 * k)]; }
    return [235, 50, 60];
  }
  function css(c, a) { return a === undefined ? "rgb(" + c + ")" : "rgba(" + c + "," + a + ")"; }
  function reroll(i) { grid[i] = Math.floor(Math.random() * CH.length); var r = Math.random(); spice[i] = r < .045 ? 1 : r < .08 ? 2 : 0; }
  function size() {
    W = img.clientWidth; H = img.clientHeight; if (!W) return;
    dpr = Math.min(window.devicePixelRatio || 1, W < 600 ? 1.5 : 2);
    cv.width = W * dpr; cv.height = H * dpr; ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    ch = W < 200 ? 12 : 15; cw = ch * .62; cols = Math.ceil(W / cw); rows = Math.ceil(H / ch);
    grid = new Uint8Array(cols * rows); spice = new Uint8Array(cols * rows); for (var i = 0; i < grid.length; i++) reroll(i);
    if (bg) {
      BW = bg.clientWidth; BH = bg.clientHeight; bg.width = BW * dpr; bg.height = BH * dpr; bctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      glow.width = bg.width; glow.height = bg.height; gctx.setTransform(dpr, 0, 0, dpr, 0, 0); glowFy = -1;
      var cr = cut.getBoundingClientRect(), br = bg.getBoundingClientRect(), sr = ring.parentNode.getBoundingClientRect();
      geo = { ox: cr.left - br.left, oy: cr.top - br.top, w: cr.width, h: cr.height, sl: sr.left - br.left + 2, sr: sr.right - br.left - 2 };
      if (bub) { var bb = bub.getBoundingClientRect(); geo.bub = (bb.top + bb.height * .5 - cr.top) / cr.height; }
    }
  }
  // soft aura that hugs the figure: it fades out to the sides and stops just under the feet, so it never ends in a hard edge
  function aura(t) {
    var g = geo, cxm = g.ox + g.w / 2, rx = g.w * .78, cyE = g.oy + g.h * .5, ry = g.h * .56;
    return function (y) {
      var k = 1 - Math.pow((y - cyE) / ry, 2); if (k <= 0) return 0;
      var feet = g.oy + g.h, below = y > feet ? Math.max(0, 1 - (y - feet) / 26) : 1;
      return Math.sqrt(k) * rx * (below > 0 ? 1 : 0) * Math.min(1, below * 1.4);
    };
  }
  function drawGlow(fy) {
    var g = geo, cxm = g.ox + g.w / 2, half = aura();
    gctx.clearRect(0, 0, BW, BH);
    for (var gy = Math.max(0, Math.floor(fy)); gy < BH; gy += 6) {
      var hw = half(gy + 3); if (hw < 2) continue;
      var feet = g.oy + g.h, fadeBelow = gy > feet ? Math.max(0, 1 - (gy - feet) / 26) : 1;
      var a = .30 * Math.min(1, (gy - fy) / 70 + .25) * fadeBelow; if (a <= .005) continue;
      var c = rgb(Math.min(1, Math.max(0, (gy - g.oy) / g.h))).join(",");
      var lo = cxm - hw, hi = cxm + hw, gr = gctx.createLinearGradient(lo, 0, hi, 0);
      gr.addColorStop(0, css(c, 0)); gr.addColorStop(.3, css(c, a)); gr.addColorStop(.7, css(c, a)); gr.addColorStop(1, css(c, 0));
      gctx.fillStyle = gr; gctx.fillRect(lo, gy, hi - lo, 6);
    }
    glowFy = fy;
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
    raf = requestAnimationFrame(draw);
    if (now - last < (settled ? 110 : 50)) return; last = now;
    if (t0 === null) t0 = now; if (!W) return;
    var f = front(now - t0); ctx.clearRect(0, 0, W, H);
    var r0 = Math.max(0, Math.floor(f * rows)), y0 = r0 * ch;
    // tint the whole body below the front, so it looks swallowed, not just sprinkled
    for (var y = y0; y < H; y += 6) { ctx.fillStyle = css(rgb(y / H).join(","), .34); ctx.fillRect(0, y, W, 6); }
    var px = ch - 1, yel = RD.glyphs(CH, px, 700, YEL, dpr), red = RD.glyphs(CH, px, 700, RED, dpr);
    for (var r = r0; r < rows; r++) {
      var yn = r / rows, edge = Math.max(0, 1 - (r - r0) / 7), body = RD.glyphs(CH, px, 700, css(rgb(yn).join(",")), dpr), green = yn > KNEE;
      for (var c = 0; c < cols; c++) {
        var i = r * cols + c; if (Math.random() < .1) reroll(i);
        if (Math.random() > .8 + edge * .2) continue;
        ctx.globalAlpha = edge > .15 ? 1 : .72 + Math.random() * .28;
        // the green part now and then throws a yellow or red character, like a warning light
        (green && spice[i] ? (spice[i] === 1 ? yel : red) : body).put(ctx, grid[i], c * cw + cw / 2, r * ch + ch / 2);
      }
    }
    ctx.globalAlpha = 1;
    // aura around the figure: cached glow plus large faint code, below the same front line
    if (bctx && BW && geo) {
      var g = geo, fy = g.oy + f * g.h, half = aura(), cxm = g.ox + g.w / 2;
      if (Math.abs(fy - glowFy) > 1.5) drawGlow(fy);
      bctx.clearRect(0, 0, BW, BH); bctx.drawImage(glow, 0, 0, BW, BH);
      for (var gy2 = Math.max(0, Math.floor(fy / 17) * 17); gy2 < BH; gy2 += 17) {
        var h2 = half(gy2 + 8); if (h2 < 4) continue;
        var cc = rgb(Math.min(1, Math.max(0, (gy2 - g.oy) / g.h))).join(","), atl = RD.glyphs(CH, 14, 700, css(cc), dpr), gg = gy2 > g.oy + g.h * .66;
        for (var gx = Math.max(cxm - h2, g.sl); gx < Math.min(cxm + h2, g.sr - 6); gx += 10) {
          var inside = gx > g.ox - 4 && gx < g.ox + g.w + 4, d = Math.abs(gx - cxm) / h2; if (inside && Math.random() < .5) continue;
          if (Math.random() > .5 - d * .38) continue;
          bctx.globalAlpha = .22 + Math.random() * .38 * (1 - d);
          var sp = gg ? Math.random() : 1;
          (sp < .04 ? RD.glyphs(CH, 14, 700, YEL, dpr) : sp < .07 ? RD.glyphs(CH, 14, 700, RED, dpr) : atl).put(bctx, Math.floor(Math.random() * CH.length), gx + 4, gy2 + 8);
        }
      }
      bctx.globalAlpha = 1;
    }
    // bubble: when the front passes it
    if (geo && geo.bub !== undefined && !alerted && geo.bub > f) setBubble();
    if (f < .2) angry();
    if (f <= HEAD + .005 && now - t0 > DELAY + T1 + T2 + 400) settled = true;   // done climbing: keep it alive at a lower rate
  }
  function start() {
    RD.watchSize(img, size);
    if (bg) RD.watchSize(bg, size);
    var io = new IntersectionObserver(function (es) { if (es[0].isIntersecting) { if (!raf) raf = requestAnimationFrame(draw); } else { cancelAnimationFrame(raf); raf = 0; } }, { threshold: .1 });
    io.observe(cut);
  }
  if (img.complete) start(); else img.addEventListener("load", start);
})();
