# si/počúval – návod

Rádio je na **durica.si/pocuval**. Stanice bežia stále (ako skutočné rádio): kto sa naladí,
začuje to, čo práve hrá. Medzi skladbami a nad nimi hovoria tvoje hlášky a hudba sa pri nich stíši.

## Kam dať súbory

```
pocuval/stanice/
  event-car-fm/
    stanica.json        ← názov, frekvencia, farba, slogan
    hudba/              ← sem skladby a DJ sety (mp3)
    hlasky/             ← sem tvoje hlášky
  drop-ups-fm/ …
  fm-2000s/ …
  techno-fm/ …
```

Stanica bez skladieb ukazuje „ČOSKORO“. Hneď ako tam dáš aspoň jednu skladbu, ožije.

## Hudba

- Formát **mp3**. Meno súboru: `01 Interpret - Názov.mp3` (číslo určuje poradie).
- **Jeden súbor max 95 MB** (GitHub viac neprijme). DJ set na hodinu vo 128 kbps má ~58 MB, takže sa zmestí.
- Najjednoduchšie: nechaj to upraviť skriptom (vyrovná hlasitosť, zmenší veľkosť):

```
python3 tools/priprav_radio.py moje-sety/ pocuval/stanice/drop-ups-fm/hudba/
```

## Hlášky (tvoj hlas)

Nahraj na telefón (m4a/mp3/wav), potom prever skriptom (ticho na kraji preč, hlasitosť, mono):

```
python3 tools/priprav_radio.py hlasky-z-telefonu/ pocuval/stanice/drop-ups-fm/hlasky/ --hlas
```

Podľa **mena súboru** rádio vie, kedy ktorú hlášku pustiť:

| Meno súboru | Kedy hrá |
|---|---|
| `ident-1.mp3`, `ident-2.mp3`, `uvod-…`, `stanica-…` | keď sa niekto naladí na stanicu („Si na Drop Ups FM…“) |
| `skladba-01.mp3`, `skladba-02.mp3` | hlásenie k 1., 2. skladbe (podľa poradia) |
| rovnaký názov ako skladba (`01 Drop Ups - Live set.mp3` → `01 Drop Ups - Live set.m4a`) | hlásenie práve k tej skladbe |
| `medzi-1.mp3`, čokoľvek iné | prekecy medzi skladbami, náhodne |

Chceš pod hlášku text, čo sa ukáže na displeji? Daj vedľa súbor s rovnakým menom a `.txt`
(napr. `ident-1.txt` s vetou „Si na Drop Ups FM, 94,4“).

## stanica.json

```json
{
  "name": "Drop Ups FM",
  "freq": 94.4,
  "color": "#c84bff",
  "slogan": "Drum & bass z podzemia",
  "dj": "Tvoj DJ"
}
```

Frekvencia musí byť medzi 87,5 a 108. Daj stanice od seba aspoň 2 MHz, inak sa budú pri ladení miešať.

## Zverejnenie

Pridaj súbory do repa (commit + push na `main`). Zoznam skladieb a dĺžky (`pocuval/program.json`)
sa prepíše **sám** cez GitHub Action „Rádio“. Ručne:

```
python3 tools/build_radio.py          # prepíše program.json
python3 tools/build_radio.py --check  # len skontroluje
```

## Pozor na autorské práva

Stránka je verejná. Cudzie komerčné skladby (aj v DJ sete) môžu byť problém.
Bezpečné je: tvoja vlastná hudba, hudba kamošov so súhlasom, alebo royalty-free / Creative Commons.
