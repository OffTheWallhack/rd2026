# Grand Theft Bratislava 3D

Verzia hry Grand Theft Bratislava v normálnej 3D grafike (namiesto znakov ASCII).
Mapa: Staré Mesto (rovnaké dáta ako pôvodná hra pred veľkou mapou).

## Súbory

- `game.src.js` – čitateľný zdroják. **Upravuje sa tento súbor.**
- `game.js` – zmenšená verzia, ktorú načíta `index.html`. Vyrobí ju `./build.sh`.
- `world.json` – mapa (OpenStreetMap + terén DMR 5.0), `models.json` – 3D modely áut a ľudí.

## Kde čo v zdrojáku je

Väčšina `game.src.js` je knižnica Three.js a pôvodná hra (krátke mená premenných).
Na konci je blok **„GTB 3D: život Bratislavy“** (`var X3 = …`) s čitateľnými menami:

- električky (trate z mapy, zvonenie, brzdenie pred autami a ľuďmi)
- pešia zóna (mapa zóny, značky, výsuvné stĺpiky, pokuty, zásobovanie 6:00–9:00)
- polepy polície, mestská polícia, taxíky, slovenské ŠPZ
- terasy kaviarní, fontány, veža Starej radnice, Rolandova fontána, Čumil
- 16 pamiatok na objavenie (ukladá sa v prehliadači)

Grafika (svetlo, tiene, obloha, voda, fasády) je v triede sveta `dn` a vo funkcii `Dy`.

## Skúšanie

`window.__gtb` má pomocné funkcie: `tp(x, z)`, `tod = 22`, `spawn(...)`, `x3()`, `x3info()`.
