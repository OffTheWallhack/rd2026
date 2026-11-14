# Grand Theft Bratislava

3D hra v prehliadači podľa skutočnej mapy Bratislavy: Staré Mesto, Petržalka, Ružinov, Nivy, Vrakuňa, Podunajské Biskupice.
Jedna hra – pôvodná verzia zo znakov ASCII a samostatná „3D“ verzia sú zlúčené sem.

## Súbory

- `src/` – čitateľný zdroják. **Upravuje sa tu.** `./build.sh` z neho vyrobí `game.js`.
- `game.js` – zmenšená verzia, ktorú načíta `index.html`.
- `world.json` – celé mesto: terén, cesty, koľaje, mosty, maska pešej zóny.
- `t/<i>_<j>.json` – dlaždice 576 × 576 m (budovy, zeleň, voda, stromy). Načítavajú sa počas hry okolo hráča.
- `far.jpg` – prehľadový obrázok mesta (zem v diaľke a veľká mapa).
- `models.json` – 3D modely áut a ľudí.
- `tools/` – skripty, ktoré z mapových dát vyrobili `world.json`, dlaždice a `far.jpg` (potrebujú stiahnuté zdrojové dáta, v repe nie sú).

## Kde čo v zdrojáku je

- `game.js` – hra: štart, ovládanie, autá, chodci, polícia, misie, kamera, deň a noc.
- `world.js` – svet: terén, postupné načítavanie dlaždíc, budovy a fasády, mosty, značenie ciest, fontány, cestná sieť.
- `hd.js` – vykresľovanie: HDR, vyhladzovanie hrán, žiara, farby.
- `hdglsl.js` – shadery: zem, voda, fasády, strechy, obloha.
- `x3.js` – život Bratislavy: električky, pešia zóna, polepy polície, ŠPZ, taxíky, terasy, Stará radnica, Čumil, pamiatky.
- `venues.js` – miesta podľa skutočnosti: nápisy, terasy, vchody (Prior, Hotel Kyjev, Kácečko, Ost Block). Nové miesta sa pridávajú sem; vzhľad konkrétnych budov (farba, výška, typ fasády) je v `tools/prep2.py` vo funkcii `restyle`.
- `actors.js`, `carmodels.js` – autá, ľudia, umelá inteligencia vodičov.
- `ui.js`, `sound.js`, `util.js` – HUD a mapa, zvuk, pomocné funkcie.

## Skúšanie

`window.__gtb` má pomocné funkcie: `tp(x, z)`, `ll(lon, lat)`, `tod = 22`, `spawn(...)`, `x3()`.

## Dáta

Mapa © prispievatelia OpenStreetMap (ODbL) · Terén DMR 5.0 © ÚGKK SR · 3D modely CC0: Quaternius, Kay Lousberg
