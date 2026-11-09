#!/usr/bin/env python3
"""Generátor robOS: z apps.json spraví karty na /linky, projekty na titulke, sitemap a pixel-art ikony.

Spustenie:
  python3 tools/build_apps.py          # prepíše súbory (len ak sa niečo zmenilo)
  python3 tools/build_apps.py --check  # nič nepíše, skončí chybou ak je niečo zastarané alebo chýba

Nová appka = priečinok + jeden záznam v apps.json + ikona. Viac v appky/PRIDAJ-APPKU.md.
"""
import hashlib, json, re, sys
from datetime import date
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
CHECK = '--check' in sys.argv
errors, changed = [], []


def esc(s):
    return s.replace('&', '&amp;').replace('<', '&lt;').replace('>', '&gt;').replace('"', '&quot;')


def is_ext(url):
    return url.startswith('http://') or url.startswith('https://')


def read(p):
    return (ROOT / p).read_text(encoding='utf8')


def write_if_changed(p, new):
    old = read(p)
    if old != new:
        changed.append(p)
        if not CHECK:
            (ROOT / p).write_text(new, encoding='utf8')


def replace_between(text, name, body, indent):
    """Nahradí obsah medzi <!--apps:name:start--> a <!--apps:name:end-->."""
    a = f'{indent}<!--apps:{name}:start-->\n'
    b = f'{indent}<!--apps:{name}:end-->\n'
    i, j = text.find(a), text.find(b)
    if i < 0 or j < 0:
        errors.append(f'Chýba značka apps:{name} (start/end)')
        return text
    return text[:i + len(a)] + body + text[j:]


data = json.loads(read('apps.json'))
apps = data['apps']

# ---------------------------------------------------------------- kontrola
ids = set()
for a in apps:
    i = a.get('id', '?')
    if i in ids:
        errors.append(f'Duplicitné id: {i}')
    ids.add(i)
    for k in ('name', 'url', 'icon', 'group', 'visibility', 'desc'):
        if k not in a:
            errors.append(f'{i}: chýba pole "{k}"')
    if a.get('group') not in [g['id'] for g in data['groups']]:
        errors.append(f'{i}: neznáma skupina {a.get("group")}')
    if not (ROOT / a.get('icon', '-')).is_file():
        errors.append(f'{i}: chýba ikona {a.get("icon")}')
    if a.get('url') and not is_ext(a['url']):
        if not (ROOT / a['url'] / 'index.html').is_file():
            errors.append(f'{i}: v repe nie je {a["url"]}index.html')
    lk = a.get('linky')
    if lk and not (ROOT / 'linky/img' / lk['banner']).is_file():
        errors.append(f'{i}: chýba banner linky/img/{lk["banner"]}')
    tt = a.get('titulka')
    if tt and not (ROOT / tt['img']).is_file():
        errors.append(f'{i}: chýba obrázok pre titulku {tt["img"]}')

# verejné priečinky, ktoré nie sú v zozname (to je presne chyba, ktorú chceme chytiť)
known = {a['url'].strip('/') for a in apps if not is_ext(a['url'])}
for a in apps:
    for e in (a.get('sitemap') or {}).get('extra', []):
        known.add(e['url'].strip('/'))
for p in sorted((ROOT / 'appky').iterdir()):
    if p.is_dir() and (p / 'index.html').is_file() and f'appky/{p.name}' not in known:
        if 'http-equiv="refresh"' in (p / 'index.html').read_text(encoding='utf-8')[:2000]:
            continue  # starý priečinok, ktorý len presmeruje na novú adresu
        errors.append(f'appky/{p.name}/ má index.html, ale nie je v apps.json (appka sa nikde nezobrazí)')

# ---------------------------------------------------------------- pixel ikony
def pixel_icon(src, dst):
    from PIL import Image
    im = Image.open(ROOT / src).convert('RGB').resize((32, 32), Image.BOX)
    q = im.quantize(colors=28, method=Image.Quantize.MEDIANCUT, dither=Image.Dither.NONE).convert('RGBA')
    px = q.load()
    for (x, y) in [(0, 0), (1, 0), (0, 1), (31, 0), (30, 0), (31, 1), (0, 31), (1, 31), (0, 30), (31, 31), (30, 31), (31, 30)]:
        px[x, y] = (0, 0, 0, 0)
    (ROOT / dst).parent.mkdir(parents=True, exist_ok=True)
    q.save(ROOT / dst, optimize=True)


hash_file = ROOT / 'appky/pix/.hashes.json'
hashes = json.loads(hash_file.read_text()) if hash_file.is_file() else {}
new_hashes = dict(hashes)
for a in apps:
    if a['visibility'] != 'public' or not (ROOT / a['icon']).is_file():
        continue
    h = hashlib.sha1((ROOT / a['icon']).read_bytes()).hexdigest()[:12]
    out = f'appky/pix/{a["id"]}.png'
    if hashes.get(a['id']) != h or not (ROOT / out).is_file():
        changed.append(out)
        if not CHECK:
            pixel_icon(a['icon'], out)
    new_hashes[a['id']] = h
if new_hashes != hashes and not CHECK:
    hash_file.parent.mkdir(parents=True, exist_ok=True)
    hash_file.write_text(json.dumps(new_hashes, indent=1, sort_keys=True) + '\n')

# ---------------------------------------------------------------- linky
ARROW = '<svg class="arr ga" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M7 17L17 7M9 7h8v8"/></svg>'
IMG_H = {176: 352, 150: 300, 104: 208}


def linky_card(a):
    lk = a['linky']
    ext = is_ext(a['url'])
    href = a['url'] if ext else '../' + a['url']
    target = ' target="_blank" rel="noopener"' if ext else ''
    cls = f'lk game g{lk["h"]}' + (' dark' if lk.get('dark') else '') + (' fx-pulse' if lk.get('pulse') else '')
    shade = '<i class="shade side"></i>' if lk['shade'] == 'side' else f'<i class="shade" style="background:{lk["shade"]}"></i>'
    kick = f'      <span class="k">{esc(lk["kicker"])}</span>\n' if lk.get('kicker') else ''
    gt = 'gt' if lk.get('kicker') else 'gt s'
    return (f'    <a class="{cls}" href="{esc(href)}"{target} data-gc="{lk["gc"]}">\n'
            f'      <img src="img/{lk["banner"]}" alt="" width="880" height="{IMG_H[lk["h"]]}" draggable="false">\n'
            f'      {shade}\n{kick}'
            f'      <span class="{gt}"><b>{esc(lk["title"])}</b><em>{esc(lk["line"])}</em></span>\n'
            f'      {ARROW}\n    </a>\n')


ROBOS_LINK = ('    <a class="all" href="../appky/" data-gc="robos"><span>Všetky appky v robOS</span>'
              '<svg class="arr" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#161616" stroke-width="2" '
              'stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M7 17L17 7M9 7h8v8"/></svg></a>\n')

linky = read('linky/index.html')
for sec in data['linkySections']:
    cards = sorted([a for a in apps if a['visibility'] == 'public' and (a.get('linky') or {}).get('section') == sec['id']],
                   key=lambda a: a['linky']['order'])
    if not cards:
        body = ''
    else:
        body = (f'    <div class="sec"><span>{sec["title"]}</span><i></i><span class="s2">{esc(sec["note"])}</span></div>\n\n'
                + '\n'.join(linky_card(a) for a in cards))
        if sec.get('robosLink'):
            body += '\n' + ROBOS_LINK
    linky = replace_between(linky, sec['id'], body, '    ')
write_if_changed('linky/index.html', linky)

# ---------------------------------------------------------------- titulka
def bcard(a):
    t = a['titulka']
    ext = is_ext(a['url'])
    target = ' target="_blank" rel="noopener"' if ext else ''
    name = t.get('name', a['name'])
    return (f'        <a class="bcard" href="{esc(a["url"])}"{target}><img src="{t["img"]}" width="{t["w"]}" height="{t["h"]}" '
            f'loading="lazy" alt="{esc(t["alt"])}"><span><b>{esc(name)}</b><small data-en="{esc(t["en"])}">{esc(t["sk"])}</small></span></a>\n')


tit = sorted([a for a in apps if a['visibility'] == 'public' and a.get('titulka')], key=lambda a: a['titulka']['order'])
home = replace_between(read('index.html'), 'titulka', ''.join(bcard(a) for a in tit), '        ')
write_if_changed('index.html', home)

# ---------------------------------------------------------------- sitemap
sm = read('sitemap.xml')
old_mod = dict(re.findall(r'<loc>https://durica\.si/([^<]*)</loc><lastmod>([^<]*)</lastmod>', sm))
today = date.today().isoformat()
lines = []
for a in apps:
    s = a.get('sitemap')
    if a['visibility'] != 'public' or not s or is_ext(a['url']):
        continue
    entries = [(a['url'], s.get('priority', 0.5))] + [(e['url'], e['priority']) for e in s.get('extra', [])]
    for url, pr in entries:
        lines.append(f'  <url><loc>https://durica.si/{url}</loc><lastmod>{old_mod.get(url, today)}</lastmod><priority>{pr}</priority></url>\n')
i, j = sm.find('  <!--apps:start-->\n'), sm.find('  <!--apps:end-->\n')
if i < 0 or j < 0:
    errors.append('sitemap.xml: chýbajú značky apps:start / apps:end')
else:
    a_ = '  <!--apps:start-->\n'
    sm = sm[:i + len(a_)] + ''.join(lines) + sm[j:]
    write_if_changed('sitemap.xml', sm)

# ---------------------------------------------------------------- výsledok
if errors:
    print('CHYBY:')
    for e in errors:
        print('  -', e)
if changed:
    print(('Zastarané (treba spustiť build): ' if CHECK else 'Zmenené: ') + ', '.join(changed))
if not errors and not changed:
    print('Všetko sedí.')
sys.exit(1 if errors or (CHECK and changed) else 0)
