# Ako pridať appku do robOS

robOS má **jeden zoznam appiek: `apps.json`** (v koreni repa). Z neho sa samo robí všetko ostatné:

- plocha ako Windows 95 na počítači (ikony, ponuka Štart, okná)
- iPhone na telefóne a iPad na tablete
- karty na `durica.si/linky`
- projekty na titulke
- `sitemap.xml`
- pixel ikony v `appky/pix/`

## Kroky

1. Daj appku do priečinka, napríklad `appky/moja-appka/index.html` (alebo `moja-appka/` v koreni).
2. Do `appky/img/` daj ikonu `moja-appka-192.png` (štvorec 192×192).
3. V `apps.json` skopíruj záznam inej appky a prepíš ho. Najdôležitejšie polia:
   - `id` – krátky názov bez medzier, napr. `moja-appka`
   - `name`, `short` – názov a krátky názov pod ikonou
   - `group` – `hry`, `dj`, `nastroje` alebo `media`
   - `url` – cesta k appke (alebo celá adresa, ak je inde)
   - `icon` – cesta k ikone z kroku 2
   - `desc.sk`, `desc.en` – jedna veta, čo appka robí
   - `win` – veľkosť okna na počítači `[šírka, výška]`
   - `embed: false` – na počítači (plocha Win95) sa appka nedá vložiť do okna, otvorí sa v novej karte
   - na telefóne a iPade sa každá appka otvára v novej karte na celú obrazovku (`embed` ani `away` tam nehrajú rolu)
   - `visibility: "public"` – bez toho sa appka nezobrazí nikde
4. Spusti `python3 tools/build_apps.py` (alebo nechaj na GitHub Action `robOS – prepísať z apps.json`, ktorá to urobí po každom pushi do `apps.json`).
5. Skontroluj `python3 tools/build_apps.py --check`. Ak vypíše „Všetko sedí.“, je hotovo.

Generátor ťa upozorní, ak existuje priečinok v `appky/`, ktorý nie je v `apps.json`.

## Ako sa robOS rozhoduje

`appky/robos.js` pozrie na zariadenie a načíta správny vzhľad:

| Zariadenie | Vzhľad |
|---|---|
| počítač s myšou | plocha Windows 95 (`desktop.js`, `desktop.css`) |
| tablet | iPad (`phone.js`, `robos.css`) |
| telefón (užšie ako 768 px) | iPhone (`phone.js`, `robos.css`) |

Skúšanie: pridaj do adresy `?os=desktop`, `?os=tablet` alebo `?os=phone` (platí len pre tú návštevu). Natrvalo sa vzhľad prepne v samotnom robOS: na počítači v ponuke Štart → Nastavenia.
