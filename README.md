# Robert Ďurica

Osobná stránka (statické HTML, GitHub Pages, cesta `/rd2026/`).

## Analytika (GoatCounter)

Kód zatiaľ nie je. Keď ho budeš mať, vlož ho na **jedno miesto**: v `assets/common.js` hore do premennej `GOATCOUNTER`.

```js
var GOATCOUNTER = "https://tvoj-web.goatcounter.com/count";
```

Prázdny reťazec nič nenačíta a nič neposiela. Meta tagy `<meta name="goatcounter">` na stránkach nechaj prázdne, netreba ich vypĺňať po jednom.

Blog sa skladá príkazom `python3 tools/blog/build.py`. Zdroje sú v `blog/posts/`. Priečinky `tools/` a `blog/posts/` ostávajú v gite, na stránku sa nedostanú (`_config.yml`).
