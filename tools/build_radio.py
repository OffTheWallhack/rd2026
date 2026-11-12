#!/usr/bin/env python3
"""Generátor rádia si/počúval: prečíta priečinky v pocuval/stanice/ a zapíše pocuval/program.json.

Spustenie:
  python3 tools/build_radio.py          # prepíše pocuval/program.json (len ak sa niečo zmenilo)
  python3 tools/build_radio.py --check  # nič nepíše, skončí chybou ak je program.json zastaraný

Jedna stanica = jeden priečinok pocuval/stanice/<id>/ s:
  stanica.json   názov, frekvencia, farba, slogan (pozri pocuval/NAVOD.md)
  hudba/         skladby alebo DJ sety (mp3, m4a, ogg)
  hlasky/        hlásky DJ-a (mp3, m4a, ogg, wav)
Dĺžky skladieb zistí ffprobe (na GitHub Actions je k dispozícii).
"""
import json, re, subprocess, sys, shutil
from pathlib import Path
from urllib.parse import quote

ROOT = Path(__file__).resolve().parent.parent
BASE = ROOT / 'pocuval'
OUT = BASE / 'program.json'
CHECK = '--check' in sys.argv
AUDIO = {'.mp3', '.m4a', '.ogg', '.wav', '.aac', '.opus', '.flac'}
MAX_MB = 95
warns = []


def dur(p):
    if not shutil.which('ffprobe'):
        return 0
    try:
        out = subprocess.run(['ffprobe', '-v', 'error', '-show_entries', 'format=duration', '-of', 'default=nw=1:nk=1', str(p)],
                             capture_output=True, text=True, timeout=60).stdout.strip()
        return round(float(out), 1)
    except Exception:
        return 0


def url(p):
    return '/'.join(quote(x) for x in p.relative_to(BASE).parts)


def natural(s):
    return [int(t) if t.isdigit() else t.lower() for t in re.split(r'(\d+)', s)]


def clean(stem):
    return re.sub(r'^\s*\d+\s*[\.\-_)]*\s*', '', stem).replace('_', ' ').strip() or stem


def split_title(stem):
    c = clean(stem)
    if ' - ' in c:
        a, t = c.split(' - ', 1)
        return a.strip(), t.strip()
    return '', c


def text_of(p):
    t = p.with_suffix('.txt')
    if t.exists():
        return t.read_text(encoding='utf8').strip()[:240] or None
    return None


def files(d):
    if not d.is_dir():
        return []
    fs = [f for f in d.iterdir() if f.is_file() and f.suffix.lower() in AUDIO]
    for f in fs:
        if f.stat().st_size > MAX_MB * 1024 * 1024:
            warns.append(f'{f.relative_to(ROOT)} má {f.stat().st_size // 1048576} MB, GitHub nepustí súbory nad 100 MB. Zmenši ho (tools/priprav_radio.py).')
    return sorted(fs, key=lambda f: natural(f.name))


stations = []
for sd in sorted(p for p in (BASE / 'stanice').iterdir() if p.is_dir()):
    meta = {}
    mf = sd / 'stanica.json'
    if mf.exists():
        meta = json.loads(mf.read_text(encoding='utf8'))
    name = meta.get('name') or sd.name.replace('-', ' ').title()
    tracks = []
    for f in files(sd / 'hudba'):
        a, t = split_title(f.stem)
        tracks.append({'file': url(f), 'title': t, 'artist': a, 'dur': dur(f), 'announce': None, 'text': None, '_stem': f.stem.lower()})
    idents, between = [], []
    for f in files(sd / 'hlasky'):
        stem = f.stem.lower()
        item = {'file': url(f), 'text': text_of(f)}
        m = re.match(r'^(?:skladba|track|pesnicka)[\s._-]*0*(\d+)', stem)
        match = None
        if m and 1 <= int(m.group(1)) <= len(tracks):
            match = tracks[int(m.group(1)) - 1]
        else:
            for t in tracks:
                if t['_stem'] == stem:
                    match = t
        if match is not None:
            match['announce'] = item['file']
            match['text'] = item['text']
        elif re.match(r'^(ident|uvod|úvod|stanica)', stem):
            idents.append(item)
        else:
            between.append(item)
    for t in tracks:
        del t['_stem']
    total = sum(t['dur'] for t in tracks)
    if tracks and any(t['dur'] <= 0 for t in tracks):
        warns.append(f'{sd.name}: nepodarilo sa zistiť dĺžku niektorej skladby (chýba ffprobe?). Rádio pobeží bez „živého“ času.')
    stations.append({
        'id': sd.name, 'name': name, 'short': meta.get('short') or name.split()[0][:5].upper(),
        'freq': float(meta.get('freq', 88 + len(stations) * 4)), 'color': meta.get('color', '#ffb23d'),
        'slogan': meta.get('slogan', ''), 'dj': meta.get('dj', ''), 'order': meta.get('order', 99),
        'total': round(total, 1), 'tracks': tracks, 'idents': idents, 'between': between,
    })
stations.sort(key=lambda s: (s['order'], s['freq']))
for s in stations:
    del s['order']

prog = {'version': 1, 'stations': stations}
new = json.dumps(prog, ensure_ascii=False, indent=1) + '\n'
old = OUT.read_text(encoding='utf8') if OUT.exists() else ''
for w in warns:
    print('POZOR:', w)
if old != new:
    if CHECK:
        print('pocuval/program.json je zastaraný. Spusti: python3 tools/build_radio.py')
        sys.exit(1)
    OUT.write_text(new, encoding='utf8')
    print('Zapísané: pocuval/program.json')
else:
    print('Všetko sedí.')
for s in stations:
    print(f"  {s['freq']:5.1f}  {s['name']:<14} skladby {len(s['tracks'])}  hlásky {len(s['idents'])}+{len(s['between'])}  {s['total'] / 60:.0f} min")
