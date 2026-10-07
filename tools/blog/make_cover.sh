#!/usr/bin/env bash
# Renders a cover drawn on a 1600x900 <canvas> page into the three blog images:
#   img/blog/<slug>.webp, <slug>-sm.webp, <slug>-og.jpg
# Usage (from the repo root): tools/blog/make_cover.sh tools/blog/covers/<slug>.html <slug>
set -euo pipefail
src="$(realpath "$1")"; slug="$2"
pw="${TMPDIR:-/tmp}/rd-cover-pw"
[ -d "$pw/node_modules/playwright-core" ] || npm i --silent --prefix "$pw" playwright-core >/dev/null
png="$pw/$slug.png"
NODE_PATH="$pw/node_modules" node -e '
const { chromium } = require("playwright-core");
(async () => {
  const b = await chromium.launch({ executablePath: "/opt/pw-browsers/chromium" });
  const p = await b.newPage({ viewport: { width: 1600, height: 900 } });
  await p.goto("file://" + process.argv[1]); await p.waitForTimeout(400);
  await p.screenshot({ path: process.argv[2] }); await b.close();
})();' "$src" "$png"
mkdir -p img/blog
python3 - "$png" "$slug" <<'PY'
import sys
from PIL import Image
png, slug = sys.argv[1:]
im = Image.open(png).convert("RGB")
im.save(f"img/blog/{slug}.webp", "WEBP", quality=80, method=6)
im.resize((800, 450), Image.LANCZOS).save(f"img/blog/{slug}-sm.webp", "WEBP", quality=78, method=6)
w, h = im.size; ch = int(w * 630 / 1200); t = (h - ch) // 2
im.crop((0, t, w, t + ch)).resize((1200, 630), Image.LANCZOS).save(f"img/blog/{slug}-og.jpg", "JPEG", quality=84, optimize=True)
PY
echo "cover: img/blog/$slug.webp"
