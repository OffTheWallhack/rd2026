// Renders the downloadable PDFs and their preview images into na-stiahnutie/.
// Needs a local server on :8765 at the repo root and the fonts in tools/cv/f/ (see tools/cv/render.js).
const { chromium } = require('playwright');
const FILES = ['checklist-automatizacia', 'bezpecne-s-ai'];
(async () => {
  const b = await chromium.launch({ executablePath: '/opt/pw-browsers/chromium' });
  for (const f of FILES) {
    const p = await b.newPage({ viewport: { width: 794, height: 1123 } });
    await p.goto('http://localhost:8765/tools/downloads/' + f + '.html');
    await p.evaluate(() => document.fonts.ready); await p.waitForTimeout(600);
    await p.pdf({ path: 'na-stiahnutie/' + f + '.pdf', format: 'A4', printBackground: true, preferCSSPageSize: true });
    await p.screenshot({ path: "na-stiahnutie/" + f + ".png", clip: { x: 0, y: 0, width: 794, height: 1123 } }); // then resized to 480px .webp
    await p.close();
  }
  await b.close();
})();
