#!/usr/bin/env python3
"""Grand Theft Bratislava v2 - big world builder (Stare Mesto + Petrzalka + Ruzinov + Vrakuna).
Outputs: build/world.json (global), build/t/<i>_<j>.json (576 m tiles), build/far.jpg (overview texture).
World coords: X east, Z south (metres) from the NW corner. Heights: metres above BASE (120 m a.s.l.).
"""
import json, math, re, sys, collections, base64, os, random
import numpy as np
from PIL import Image, ImageDraw
from shapely.geometry import Polygon, LineString, Point, box
from shapely.ops import unary_union
from shapely.strtree import STRtree
from shapely.prepared import prep as sprep

SRC = '/home/claude/dl/cdata/'
LEU = '/home/claude/leumasdam/bratislava-3d/data/'
ESN = '/home/claude/dl/esn/'
OUT = '/home/claude/gtb/build2/'
os.makedirs(OUT + 't', exist_ok=True)
random.seed(7)

# --- projection: identical constants to v1 so old coordinates only shift by (OX, OZ)
O_LON0, O_LON1, O_LAT0, O_LAT1 = 17.0950, 17.1175, 48.1355, 48.1505
PHI = math.radians((O_LAT0 + O_LAT1) / 2)
MX = 111412.84 * math.cos(PHI) - 93.5 * math.cos(3 * PHI)
MY = 111132.954 - 559.822 * math.cos(2 * PHI)
OX, OZ = 1104.0, 576.0
T = 576.0
NTX, NTZ = 18, 12
W, H = NTX * T, NTZ * T
LON0 = O_LON0 - OX / MX
LAT1 = O_LAT1 + OZ / MY
LON1 = LON0 + W / MX
LAT0 = LAT1 - H / MY
BASE = 120.0
FS, CS = 3.0, 12.0            # fine / coarse terrain steps
FN = int(1656 / FS) + 1       # fine grid nodes per side (fine rect = [OX, OX+1656] x [OZ, OZ+1656])
FW = (FN - 1) * FS
CNX, CNZ = int(W / CS) + 1, int(H / CS) + 1
print('world', round(W), round(H), 'lon', round(LON0, 5), round(LON1, 5), 'lat', round(LAT0, 5), round(LAT1, 5), file=sys.stderr)


def X(lon): return (lon - LON0) * MX
def Z(lat): return (LAT1 - lat) * MY
def LON(x): return LON0 + x / MX
def LAT(z): return LAT1 - z / MY
def q(v): return int(round(v * 10))
def load(f): return json.load(open(f))
def inworld(x, z, m=0): return -m <= x <= W + m and -m <= z <= H + m
def any_in(r, m=30): return any(inworld(x, z, m) for x, z in r)


# rich OSM coverage (v2 extract): inside it we trust only the detailed data
RICH = (X(17.0850), Z(48.1520), X(17.1155), Z(48.1330))
def in_rich(x, z): return RICH[0] <= x <= RICH[2] and RICH[1] <= z <= RICH[3]
CENTRE = (X(17.1077), Z(48.1440))

# ================================================================== helpers
COLORS = {
    'white': '#f2efe6', 'ivory': '#efe9d2', 'yellow': '#e8c95a', 'navajowhite': '#f0d9a8', 'bisque': '#f0d2ab',
    'pink': '#e6b4b0', 'green': '#8fb084', 'burlywood': '#d6b07c', 'beige': '#e5dcc0', 'grey': '#9a9a96', 'gray': '#9a9a96',
    'maroon': '#7a3424', 'darkorange': '#c8642a', 'red': '#9c3a26', 'brown': '#7a4a30', 'black': '#2a2a2a', 'coral': '#d97a5a',
    'cadetblue': '#5f8f96', 'darkslategrey': '#3a4a4a', 'darkslategray': '#3a4a4a', 'lightgrey': '#c8c8c4', 'silver': '#b8b8b8',
    'orange': '#d88a3a', 'tan': '#c9a77c', 'darkgrey': '#6a6a6a', 'darkgray': '#6a6a6a', 'blue': '#4a6a9a', 'lightblue': '#a8c4d8',
}


def colour(s):
    if not s: return None
    s = s.strip().lower()
    s = COLORS.get(s, s)
    if re.match(r'^#[0-9a-f]{6}$', s): return s
    if re.match(r'^#[0-9a-f]{3}$', s): return '#' + ''.join(c * 2 for c in s[1:])
    return None


def num(v):
    if v is None: return None
    m = re.match(r'^\s*(-?[0-9]+(?:[.,][0-9]+)?)', str(v))
    return float(m.group(1).replace(',', '.')) if m else None


def ring_from_geom(geom): return [(X(p['lon']), Z(p['lat'])) for p in geom if p]


def simplify(r, tol=0.12):
    if len(r) > 1 and math.hypot(r[0][0] - r[-1][0], r[0][1] - r[-1][1]) < 0.01: r = r[:-1]
    out = []
    for p in r:
        if out and math.hypot(p[0] - out[-1][0], p[1] - out[-1][1]) < tol: continue
        out.append(p)
    changed = True
    while changed and len(out) > 3:
        changed = False
        for k in range(len(out)):
            a, b, c = out[k - 1], out[k], out[(k + 1) % len(out)]
            cr = (b[0] - a[0]) * (c[1] - b[1]) - (b[1] - a[1]) * (c[0] - b[0])
            la = math.hypot(b[0] - a[0], b[1] - a[1]) + math.hypot(c[0] - b[0], c[1] - b[1])
            if abs(cr) < 0.02 * la:
                out.pop(k); changed = True; break
    return out


def area(r):
    s = 0
    for i in range(len(r)):
        x0, y0 = r[i - 1]; x1, y1 = r[i]
        s += x0 * y1 - x1 * y0
    return s / 2


def centroid(r): return (sum(p[0] for p in r) / len(r), sum(p[1] for p in r) / len(r))


def pip(pt, r):
    x, y = pt; c = False
    for i in range(len(r)):
        x0, y0 = r[i - 1]; x1, y1 = r[i]
        if (y0 > y) != (y1 > y) and x < (x1 - x0) * (y - y0) / (y1 - y0) + x0: c = not c
    return c


def join_ways(ways):
    rings, open_ = [], [list(w) for w in ways if len(w) >= 2]
    while open_:
        cur = open_.pop(0); guard = 0
        while math.hypot(cur[0][0] - cur[-1][0], cur[0][1] - cur[-1][1]) > 0.05 and guard < 200:
            guard += 1
            for k, w in enumerate(open_):
                if math.hypot(w[0][0] - cur[-1][0], w[0][1] - cur[-1][1]) < 0.05:
                    cur += w[1:]; open_.pop(k); break
                if math.hypot(w[-1][0] - cur[-1][0], w[-1][1] - cur[-1][1]) < 0.05:
                    cur += w[::-1][1:]; open_.pop(k); break
            else: break
        if len(cur) >= 4: rings.append(cur)
    return rings


def polys_from_element(e):
    if e['type'] == 'way' and 'geometry' in e: return [(ring_from_geom(e['geometry']), [])]
    if e['type'] == 'relation' and 'members' in e:
        outers = join_ways([ring_from_geom(m['geometry']) for m in e['members'] if m.get('role') in ('outer', '') and 'geometry' in m])
        inners = join_ways([ring_from_geom(m['geometry']) for m in e['members'] if m.get('role') == 'inner' and 'geometry' in m])
        return [(o, [i for i in inners if pip(centroid(i), o)]) for o in outers]
    return []


def gj_polys(path, minarea=0):
    out = []
    for f in load(path)['features']:
        g = f['geometry']
        if not g: continue
        polys = [g['coordinates']] if g['type'] == 'Polygon' else g['coordinates'] if g['type'] == 'MultiPolygon' else []
        for p in polys:
            o = [(X(lo), Z(la)) for lo, la in p[0]]
            if len(o) >= 4 and any_in(o) and abs(area(o)) > minarea:
                out.append((o, [[(X(lo), Z(la)) for lo, la in r] for r in p[1:]]))
    return out


def gj_lines(path):
    out = []
    for f in load(path)['features']:
        g = f['geometry']
        if not g: continue
        ls = [g['coordinates']] if g['type'] == 'LineString' else g['coordinates'] if g['type'] == 'MultiLineString' else []
        for c in ls:
            pts = [(X(lo), Z(la)) for lo, la in c]
            if len(pts) >= 2 and any_in(pts, 60): out.append((pts, f['properties'], f.get('id')))
    return out


class SegIndex:
    def __init__(self, ways, cell=30.0):
        self.ways, self.cell = ways, cell
        self.idx = collections.defaultdict(list)
        for wi, pts in enumerate(ways): self.add(wi, pts)

    def add(self, wi, pts):
        c = self.cell
        for k in range(len(pts) - 1):
            ax, az = pts[k]; bx, bz = pts[k + 1]
            for ci in range(int(min(ax, bx) // c), int(max(ax, bx) // c) + 1):
                for cj in range(int(min(az, bz) // c), int(max(az, bz) // c) + 1):
                    self.idx[(ci, cj)].append((wi, k))

    def nearest(self, x, z, tol, skip=-1):
        c = self.cell; best = (tol, -1, -1, 0.0); seen = set()
        for ci in range(int((x - tol) // c), int((x + tol) // c) + 1):
            for cj in range(int((z - tol) // c), int((z + tol) // c) + 1):
                for (wi, k) in self.idx.get((ci, cj), ()):
                    if wi == skip or (wi, k) in seen: continue
                    seen.add((wi, k))
                    ax, az = self.ways[wi][k]; bx, bz = self.ways[wi][k + 1]
                    dx, dz = bx - ax, bz - az; L2 = dx * dx + dz * dz or 1e-9
                    t = max(0.0, min(1.0, ((x - ax) * dx + (z - az) * dz) / L2))
                    d = math.hypot(ax + dx * t - x, az + dz * t - z)
                    if d < best[0]: best = (d, wi, k, t)
        return best


def dup_flags(pts, index, tol):
    """per segment: is it lying on top of some way of the index?"""
    fl = []
    for k in range(len(pts) - 1):
        ax, az = pts[k]; bx, bz = pts[k + 1]
        ok = True
        for t in (0.15, 0.5, 0.85):
            if index.nearest(ax + (bx - ax) * t, az + (bz - az) * t, tol)[1] < 0: ok = False; break
        fl.append(ok)
    return fl


def runs(pts, keep):
    """split a polyline into maximal runs of segments where keep[k] is True"""
    out, cur = [], None
    for k, kp in enumerate(keep):
        if kp:
            if cur is None: cur = [pts[k]]
            cur.append(pts[k + 1])
        elif cur is not None:
            out.append(cur); cur = None
    if cur is not None: out.append(cur)
    return out


def plen(pts): return sum(math.hypot(b[0] - a[0], b[1] - a[1]) for a, b in zip(pts, pts[1:]))


# ================================================================== A. rich core data (v2 OSM extract)
osm = load(SRC + 'data_osm.json')['elements']
nodes = {e['id']: (e['lon'], e['lat']) for e in osm if e['type'] == 'node'}
def way_geom(e): return [(X(nodes[n][0]), Z(nodes[n][1])) for n in e.get('nodes', []) if n in nodes]

# ---- buildings (rich)
bdata = load(SRC + 'data_v2_city_buildings.json')['elements']
parts, outlines = [], []
for e in bdata:
    t = e.get('tags', {})
    for outer, inners in polys_from_element(e):
        if len(outer) < 3 or not any_in(outer): continue
        rec = {'t': t, 'outer': simplify(outer), 'inners': [simplify(i) for i in inners if len(i) >= 4], 'id': e['id']}
        if len(rec['outer']) < 3: continue
        (parts if 'building:part' in t else outlines).append(rec)
part_centroids = [centroid(p['outer']) for p in parts]
kept = []
for o in outlines:
    if o['t'].get('building') is None: continue
    inside = [k for k, c in enumerate(part_centroids) if pip(c, o['outer'])]
    if inside:
        pa = sum(abs(area(parts[k]['outer'])) for k in inside)
        if pa > 0.6 * abs(area(o['outer'])): continue
    kept.append(o)
allb = kept + parts
PITCHED = {'gabled', 'hipped', 'pyramidal', 'mansard', 'gambrel', 'half-hipped', 'side_hipped', 'double_saltbox', 'skillion', 'saltbox', 'cross_gabled', 'tented'}
FLATTYPES = {'garage', 'garages', 'industrial', 'service', 'parking', 'retail', 'warehouse', 'kiosk', 'roof', 'carport', 'transformer_tower', 'construction'}
SHAPECODE = {'flat': 'f', 'dome': 'd', 'round': 'd', 'onion': 'd', 'cone': 'p', 'pyramidal': 'p', 'skillion': 'h'}
buildings = []   # world-metre records: {'o': ring, 'i': [rings], ...attrs}
pylons = []
stats = collections.Counter()


def rich_building(t, outer, inners, bid):
    typ = t.get('building') or t.get('building:part') or 'yes'
    a = abs(area(outer))
    if a < 6: return None
    lv = num(t.get('building:levels')); mnl = num(t.get('building:min_level'))
    hh = num(t.get('height')); mh = num(t.get('min_height'))
    rh = num(t.get('roof:height')); rl = num(t.get('roof:levels'))
    shape = (t.get('roof:shape') or '').lower()
    if typ in ('garage', 'garages', 'carport'): base_h = 3.0
    elif typ in ('house', 'detached', 'semidetached_house'): base_h = 7.5
    elif typ in ('church', 'cathedral', 'chapel'): base_h = 16.0
    elif typ == 'roof': base_h = 4.0
    else: base_h = 12.0 + ((bid * 2654435761) % 1000) / 1000 * 3.0
    if rh is None and rl is not None: rh = rl * 2.8
    if not shape:
        if typ in FLATTYPES or a > 6000: shape = 'flat'
        elif hh is not None and hh > 30: shape = 'flat'
        elif lv is not None and lv >= 8: shape = 'flat'
        else: shape = 'auto'
    pitched = shape in PITCHED or shape in ('auto', 'dome', 'round', 'onion', 'cone')
    if pitched and rh is None: rh = 4.0 if shape == 'auto' else 5.0
    if not pitched: rh = 0.0
    if hh is not None: wall = hh if shape == 'auto' else max(2.5, hh - rh)
    elif lv is not None: wall = lv * 3.2 + 0.6
    else: wall = base_h
    if mh is None and mnl is not None: mh = mnl * 3.2
    if typ == 'roof' and mh is None: mh = max(0, wall - 1.0)
    mh = mh or 0.0
    if wall <= mh + 0.3: wall = mh + 1.0
    kind = 'old'
    if typ in ('garage', 'garages', 'carport', 'industrial', 'service', 'warehouse', 'kiosk', 'transformer_tower'): kind = 'util'
    elif typ in ('church', 'cathedral', 'chapel') or t.get('amenity') == 'place_of_worship': kind = 'church'
    elif typ == 'castle' or t.get('historic') == 'castle' or t.get('castle_type'): kind = 'castle'
    elif (lv or 0) >= 8 or wall > 26 or (typ in ('office', 'commercial', 'hotel') and wall > 18): kind = 'modern'
    elif typ == 'roof': kind = 'roof'
    nm = (t.get('name') or '').lower()
    if hh is not None and hh >= 85 and mh == 0 and a < 300: kind = 'pylon'
    elif ('veža' in nm or t.get('man_made') == 'tower' or typ == 'tower') and not t.get('roof:shape') and a < 250:
        kind = 'church'; shape = 'pyramidal'; rh = max(rh or 0, wall * 0.32); wall = max(4.0, wall - rh)
    if typ == 'ruins' and wall < 1.5: kind = 'ruin'
    rec = {'o': outer, 'i': inners, 'h': round(wall, 1), 'm': round(mh, 1), 'r': round(rh or 0, 1),
           's': SHAPECODE.get(shape, 'h' if pitched else 'f'), 'k': kind}
    c1 = colour(t.get('building:colour')); c2 = colour(t.get('roof:colour'))
    if kind == 'church' and shape == 'pyramidal' and not c2 and rh > 6: c2 = '#5f8f7a'
    if c1: rec['c'] = c1
    if c2: rec['rc'] = c2
    if lv: rec['l'] = int(lv)
    if t.get('name'): rec['n'] = t['name']
    if 'building:part' in t: rec['p'] = 1
    if t.get('historic') == 'city_gate' or 'brána' in nm or 'michalská veža' in nm: rec['g'] = 1
    if kind == 'church' and rec['s'] == 'p' and rec['r'] > 6: rec['t'] = 1
    return rec


for b in allb:
    rec = rich_building(b['t'], b['outer'], b['inners'], b['id'])
    if not rec: continue
    stats[rec['k']] += 1
    if rec['k'] == 'pylon': pylons.append(rec['o'])
    else: buildings.append(rec)
n_rich = len(buildings)
print('rich buildings', n_rich, dict(stats), file=sys.stderr)

# ---- roads / trams / water / pedestrian areas (rich)
misc = load(SRC + 'data_v2_city_misc.json')['elements']
ROADW = {'motorway': 11, 'trunk': 11, 'primary': 12, 'secondary': 10, 'tertiary': 8, 'unclassified': 6, 'residential': 6.5,
         'living_street': 5.5, 'service': 4.0, 'pedestrian': 6.5, 'track': 3.0, 'primary_link': 6, 'secondary_link': 6, 'tertiary_link': 5}
RCLS = {'motorway': 4, 'trunk': 4, 'primary': 4, 'primary_link': 3, 'secondary': 3, 'secondary_link': 2, 'tertiary': 2, 'tertiary_link': 2,
        'unclassified': 1, 'residential': 1, 'living_street': 1, 'service': 0, 'pedestrian': 5, 'track': 0}
roads, trams, waters, parea = [], [], [], []   # metres
for e in misc:
    t = e.get('tags', {})
    if 'geometry' not in e and e['type'] != 'relation': continue
    hw = t.get('highway')
    if t.get('natural') == 'water' or t.get('waterway') == 'riverbank':
        for o, ins in polys_from_element(e):
            if any_in(o): waters.append((o, ins))
        continue
    if t.get('railway') == 'tram' and 'geometry' in e:
        pts = ring_from_geom(e['geometry'])
        if t.get('tunnel') != 'yes': trams.append({'p': pts, 'b': 1 if t.get('bridge') else 0})
        continue
    if not hw or hw not in ROADW or 'geometry' not in e: continue
    if t.get('area') == 'yes':
        for o, ins in polys_from_element(e): parea.append(o)
        continue
    if t.get('tunnel') in ('yes', 'building_passage') or (num(t.get('layer')) or 0) < 0: continue
    pts = ring_from_geom(e['geometry'])
    w = ROADW[hw]; ln = num(t.get('lanes'))
    if ln and hw not in ('service', 'pedestrian'): w = max(w * 0.6, ln * 3.25 + 1.0)
    if t.get('oneway') == 'yes' and not ln and hw in ('residential', 'secondary', 'tertiary', 'unclassified', 'primary'): w = max(4.5, w * 0.62)
    if hw == 'service' and t.get('service') in ('parking_aisle', 'driveway'): w = 4.5
    rec = {'p': pts, 'c': RCLS[hw], 'w': round(w, 1), 'src': 'v2'}
    if t.get('oneway') in ('yes', '1', 'true'): rec['o'] = 1
    if t.get('oneway') == '-1': rec['o'] = 1; rec['p'] = pts[::-1]
    if t.get('bridge') and t.get('bridge') != 'no': rec['b'] = int(num(t.get('layer')) or 1)
    if t.get('name'): rec['n'] = t['name']
    if t.get('surface') in ('sett', 'cobblestone', 'unhewn_cobblestone', 'paving_stones'): rec['s'] = 1
    if hw == 'service' and t.get('service') == 'parking_aisle': rec['pk'] = 1
    if t.get('access') in ('private', 'no') or t.get('motor_vehicle') in ('no', 'private'): rec['nv'] = 1
    roads.append(rec)
n_v2roads = len(roads)

# ---- footways + points (rich)
street = load(SRC + 'data_v2_city_street.json')['elements']
foot, cross, steps = [], [], []
trees, lamps, signals = [], [], []
seen_pts = set()


def addpt(lst, x, z):
    if not inworld(x, z): return
    key = (round(x, 1), round(z, 1), id(lst))
    if key in seen_pts: return
    seen_pts.add(key); lst.append((x, z))


def take_foot(t, pts):
    if not any_in(pts): return
    hw = t.get('highway')
    if hw == 'steps': steps.append(pts)
    elif t.get('footway') == 'crossing': cross.append(pts)
    elif hw in ('footway', 'path', 'pedestrian', 'living_street', 'cycleway', 'bridleway'):
        foot.append({'p': pts, 'sw': 1 if t.get('footway') == 'sidewalk' else 0})


for e in street:
    t = e.get('tags', {})
    if e['type'] == 'node':
        x, z = X(e['lon']), Z(e['lat'])
        if t.get('natural') == 'tree': addpt(trees, x, z)
        elif t.get('highway') == 'street_lamp': addpt(lamps, x, z)
        elif t.get('highway') == 'traffic_signals': addpt(signals, x, z)
    elif 'geometry' in e and t.get('highway'):
        if t.get('tunnel') in ('yes', 'building_passage') or (num(t.get('layer')) or 0) < 0: continue
        take_foot(t, ring_from_geom(e['geometry']))
for e in load(SRC + 'data_v2_city_green.json')['elements']:
    t = e.get('tags', {})
    if e['type'] == 'node' and t.get('natural') == 'tree': addpt(trees, X(e['lon']), Z(e['lat']))
    elif t.get('natural') == 'tree_row' and 'geometry' in e:
        pts = ring_from_geom(e['geometry']); acc = 0
        for (ax, az), (bx, bz) in zip(pts, pts[1:]):
            L = math.hypot(bx - ax, bz - az)
            while acc <= L:
                tt = acc / L if L else 0
                addpt(trees, ax + (bx - ax) * tt, az + (bz - az) * tt); acc += 9.0
            acc -= L
for e in load(SRC + 'osm_nodes.json')['elements']:
    if e.get('tags', {}).get('natural') == 'tree': addpt(trees, X(e['lon']), Z(e['lat']))
greens, walls = [], []
for e in osm:
    t = e.get('tags', {})
    if e['type'] == 'node':
        if t.get('natural') == 'tree': addpt(trees, X(e['lon']), Z(e['lat']))
        elif t.get('highway') == 'street_lamp': addpt(lamps, X(e['lon']), Z(e['lat']))
        continue
    if e['type'] != 'way': continue
    g = way_geom(e)
    if len(g) < 2: continue
    if t.get('highway') in ('footway', 'path', 'pedestrian', 'steps') and t.get('area') != 'yes': take_foot(t, g)
    if t.get('landuse') in ('grass', 'flowerbed', 'forest', 'meadow') or t.get('leisure') in ('park', 'garden') or t.get('natural') in ('wood', 'scrub', 'grassland'):
        if any_in(g) and len(g) >= 4: greens.append((g, []))
    if t.get('barrier') in ('wall', 'retaining_wall', 'city_wall') and any_in(g):
        walls.append({'p': g, 'h': num(t.get('height')) or (1.4 if t.get('barrier') == 'wall' else 2.5), 'k': 'r' if t.get('barrier') == 'retaining_wall' else 'w'})
    if t.get('highway') == 'pedestrian' and t.get('area') == 'yes' and any_in(g): parea.append(g)
for f in ('barriers.json', 'walls.json'):
    for e in load(SRC + f)['elements']:
        t = e.get('tags', {})
        if 'geometry' not in e or t.get('barrier') not in ('wall', 'retaining_wall', 'city_wall'): continue
        g = ring_from_geom(e['geometry'])
        if not any_in(g): continue
        hh = num(t.get('height'))
        if t.get('barrier') == 'city_wall': hh = hh or 7.0
        walls.append({'p': g, 'h': hh or (1.4 if t.get('barrier') == 'wall' else 2.5), 'k': 'c' if t.get('barrier') == 'city_wall' else 'r' if t.get('barrier') == 'retaining_wall' else 'w'})
for e in misc:
    if e.get('tags', {}).get('amenity') == 'fountain':
        for o, ins in polys_from_element(e):
            if any_in(o): parea.append(o)
real_trees = len(trees)

# ---- water + green (all sources)
waters += gj_polys(LEU + 'water.geojson', 150)
for e in load(SRC + 'water_far.json')['elements']:
    for o, ins in polys_from_element(e):
        if any_in(o): waters.append((o, ins))
greens += gj_polys(LEU + 'green.geojson', 20)
greens += gj_polys(LEU + 'land_green.geojson', 20)
print('waters', len(waters), 'greens', len(greens), 'trees', len(trees), file=sys.stderr)


def to_shape(o, ins=()):
    try:
        p = Polygon(o, [i for i in ins if len(i) >= 3])
        if not p.is_valid: p = p.buffer(0)
        return p if not p.is_empty else None
    except Exception:
        return None


WORLD_BOX = box(-40, -40, W + 40, H + 40)
water_u = unary_union([s for s in (to_shape(o, i) for o, i in waters) if s is not None]).intersection(WORLD_BOX)
water_geoms = [g for g in (water_u.geoms if hasattr(water_u, 'geoms') else [water_u]) if g.geom_type == 'Polygon' and g.area > 60]
big_water = [g for g in water_geoms if g.area > 120000]
river_u = unary_union(big_water)
river_prep = sprep(river_u)
water_prep = sprep(water_u)
print('water polys', len(water_geoms), 'big', len(big_water), [round(g.area / 1e6, 2) for g in big_water], file=sys.stderr)

# ================================================================== B. synthesized road network outside the rich area
v2idx = SegIndex([r['p'] for r in roads])
city = gj_lines(LEU + 'city_roads.geojson')
mid = gj_lines(LEU + 'roads.geojson')
esn = gj_lines(ESN + 'ways.geojson')
MIDBOX = (X(17.0774) + 80, Z(48.1615) + 80, X(17.1532) - 80, Z(48.1132) - 80)
def in_mid(x, z): return MIDBOX[0] <= x <= MIDBOX[2] and MIDBOX[1] <= z <= MIDBOX[3]
rails = [pts for pts, p, _ in city if p.get('k') == 'rail'] + [pts for pts, p, _ in mid if p.get('k') == 'rail' and not any(in_mid(x, z) for x, z in pts[:1])]
rails = [r for r in rails if any_in(r)]


def outside_runs(pts, idx_list):
    """keep the parts of pts that are outside the rich rect and not on top of any indexed way"""
    keep = []
    for k in range(len(pts) - 1):
        mx, mz = (pts[k][0] + pts[k + 1][0]) / 2, (pts[k][1] + pts[k + 1][1]) / 2
        keep.append(not in_rich(mx, mz) and inworld(mx, mz, 60))
    for index, tol in idx_list:
        fl = dup_flags(pts, index, tol)
        keep = [a and not b for a, b in zip(keep, fl)]
    return [r for r in runs(pts, keep) if plen(r) > 4.0]


# S1: major roads (class from rank)
S1 = []
for pts, p, _ in city:
    if p.get('k') != 'road': continue
    for r in outside_runs(pts, [(v2idx, 3.5)]):
        S1.append({'p': r, 'r': int(p.get('r') or 0)})
# also majors from the mid file that the city file lacks are identical data -> skip
s1idx = SegIndex([s['p'] for s in S1])
# one-way carriageway detection: an anti-parallel twin of the same rank 5-30 m away
for wi, s in enumerate(S1):
    pts = s['p']
    if s['r'] >= 4: s['o'] = 1; continue
    tot = hit = 0
    for k in range(len(pts) - 1):
        ax, az = pts[k]; bx, bz = pts[k + 1]
        L = math.hypot(bx - ax, bz - az)
        if L < 2: continue
        tot += L
        d, wj, kj, t = s1idx.nearest((ax + bx) / 2, (az + bz) / 2, 30, skip=wi)
        if wj < 0 or d < 5 or S1[wj]['r'] != s['r']: continue
        cx, cz = S1[wj]['p'][kj]; dx, dz = S1[wj]['p'][kj + 1]
        L2 = math.hypot(dx - cx, dz - cz) or 1
        if ((bx - ax) * (dx - cx) + (bz - az) * (dz - cz)) / (L * L2) < -0.8: hit += L
    if tot > 30 and hit / tot > 0.6: s['o'] = 1
print('S1', len(S1), 'oneway', sum(1 for s in S1 if s.get('o')), file=sys.stderr)

mididx = SegIndex([pts for pts, p, _ in mid if p.get('k') == 'road'])
# ESN named ways
E_roads, names_for_s1 = [], collections.defaultdict(collections.Counter)
n_sq = 0
for pts, p, _ in esn:
    name = p.get('name')
    if not name: continue
    closed = math.hypot(pts[0][0] - pts[-1][0], pts[0][1] - pts[-1][1]) < 0.5 and len(pts) >= 4
    if closed and abs(area(pts)) > 300:
        mx, mz = centroid(pts)
        if not in_rich(mx, mz) and inworld(mx, mz):
            parea.append(pts[:-1]); n_sq += 1
        continue
    for r in outside_runs(pts, [(v2idx, 3.5)]):
        fl = dup_flags(r, s1idx, 6.0)
        if sum(fl) >= 0.6 * len(fl):
            for k in range(len(r) - 1):
                d, wj, kj, t = s1idx.nearest((r[k][0] + r[k + 1][0]) / 2, (r[k][1] + r[k + 1][1]) / 2, 6.0)
                if wj >= 0: names_for_s1[wj][name] += math.hypot(r[k + 1][0] - r[k][0], r[k + 1][1] - r[k][1])
            continue
        mx, mz = r[len(r) // 2]
        drivable = True
        if in_mid(mx, mz):
            fm = dup_flags(r, mididx, 4.0)
            drivable = sum(fm) >= 0.5 * len(fm)
        E_roads.append({'p': r, 'n': name, 'drv': drivable})
for wj, cnt in names_for_s1.items(): S1[wj]['n'] = cnt.most_common(1)[0][0]
eidx = SegIndex([e['p'] for e in E_roads])
# S3: unnamed minor streets in the mid area
S3 = []
for pts, p, _ in mid:
    if p.get('k') != 'road' or int(p.get('r') or 0) != 0: continue
    for r in outside_runs(pts, [(v2idx, 3.5), (eidx, 4.0), (s1idx, 5.0)]):
        S3.append({'p': r})
print('ESN', len(E_roads), 'drivable', sum(1 for e in E_roads if e['drv']), 'squares', n_sq, 'S3', len(S3), file=sys.stderr)

synth = []
RW = {4: 9.5, 3: 10.5, 2: 9.0, 1: 7.5}
RC = {4: 4, 3: 4, 2: 3, 1: 2}
for s in S1:
    r = s['r']
    if r <= 0: continue
    rec = {'p': s['p'], 'c': RC[r], 'w': RW[r] if not s.get('o') else {4: 9.5, 3: 8.0, 2: 7.0, 1: 5.5}[r]}
    if s.get('o'): rec['o'] = 1
    if s.get('n'): rec['n'] = s['n']
    synth.append(rec)
for e in E_roads:
    if e['drv']: synth.append({'p': e['p'], 'c': 1, 'w': 6.0, 'n': e['n']})
    else: synth.append({'p': e['p'], 'c': 5, 'w': 4.0, 'n': e['n']})
for s in S3: synth.append({'p': s['p'], 'c': 1, 'w': 5.5})

# ---- snapping: shared junction vertices must be identical
def vkey(p): return (int(round(p[0] * 10)), int(round(p[1] * 10)))
rep = {}
def rep_find(p, tol=1.0):
    cx, cz = int(p[0] // 1.5), int(p[1] // 1.5)
    best, bd = None, tol
    for i in (cx - 1, cx, cx + 1):
        for j in (cz - 1, cz, cz + 1):
            for qq in rep.get((i, j), ()):
                d = math.hypot(qq[0] - p[0], qq[1] - p[1])
                if d < bd: bd, best = d, qq
    return best
def rep_add(p): rep.setdefault((int(p[0] // 1.5), int(p[1] // 1.5)), []).append(p)
for r in roads:
    for p in r['p']:
        if rep_find(p, 0.05) is None: rep_add(p)
for s in synth:
    np_ = []
    for p in s['p']:
        f = rep_find(p)
        if f is None: rep_add(p); f = p
        if not np_ or f != np_[-1]: np_.append(f)
    s['p'] = np_
synth = [s for s in synth if len(s['p']) >= 2 and plen(s['p']) > 3]
allr = roads + synth
for r in allr: r['p'] = list(r['p'])
vcnt = collections.Counter()
for r in allr:
    for p in set(vkey(p) for p in r['p']): vcnt[p] += 1
aidx = SegIndex([r['p'] for r in allr])
ins = collections.defaultdict(list)
n_ins = 0
for wi in range(n_v2roads, len(allr)):
    pts = allr[wi]['p']
    for end in (0, -1):
        p = pts[end]
        if vcnt[vkey(p)] >= 2: continue
        d, wj, kj, t = aidx.nearest(p[0], p[1], 2.5, skip=wi)
        if wj < 0: continue
        a, b = allr[wj]['p'][kj], allr[wj]['p'][kj + 1]
        if t < 0.02: np2 = a
        elif t > 0.98: np2 = b
        else:
            np2 = (a[0] + (b[0] - a[0]) * t, a[1] + (b[1] - a[1]) * t)
            ins[wj].append((kj, t, np2))
        pts[end] = np2; n_ins += 1
for wj, lst in ins.items():
    for kj, t, p in sorted(lst, reverse=True): allr[wj]['p'].insert(kj + 1, p)
print('synth roads', len(synth), 'endpoint snaps', n_ins, file=sys.stderr)

# ---- bridges for synthesized roads (water crossings)
def bridge_name(x):
    lon = LON(x)
    if lon < 17.112: return 'Most SNP'
    if lon < 17.1215: return 'Starý most'
    if lon < 17.134: return 'Most Apollo'
    return 'Prístavný most'


def split_at(pts, s0, s1):
    """cut polyline by arclength interval -> (before, middle, after) (lists may be empty)"""
    cum = [0.0]
    for a, b in zip(pts, pts[1:]): cum.append(cum[-1] + math.hypot(b[0] - a[0], b[1] - a[1]))
    def at(s):
        s = max(0.0, min(cum[-1], s))
        for k in range(len(pts) - 1):
            if cum[k + 1] >= s:
                L = cum[k + 1] - cum[k] or 1e-9; t = (s - cum[k]) / L
                return (pts[k][0] + (pts[k + 1][0] - pts[k][0]) * t, pts[k][1] + (pts[k + 1][1] - pts[k][1]) * t)
        return pts[-1]
    p0, p1 = at(s0), at(s1)
    before = [p for p, c in zip(pts, cum) if c < s0 - 0.3] + [p0]
    middle = [p0] + [p for p, c in zip(pts, cum) if s0 + 0.3 < c < s1 - 0.3] + [p1]
    after = [p1] + [p for p, c in zip(pts, cum) if c > s1 + 0.3]
    return (before if s0 > 0.5 else []), middle, (after if s1 < cum[-1] - 0.5 else [])


out_synth = []
n_br = 0
for s in allr[n_v2roads:]:
    todo = [s]
    while todo:
        cur = todo.pop()
        pts = cur['p']; L = plen(pts)
        # sample water along the way
        samp = []; acc = 0.0
        for a, b in zip(pts, pts[1:]):
            sl = math.hypot(b[0] - a[0], b[1] - a[1]); n = max(1, int(sl / 4))
            for k in range(n): samp.append((acc + sl * k / n, a[0] + (b[0] - a[0]) * k / n, a[1] + (b[1] - a[1]) * k / n))
            acc += sl
        samp.append((L, pts[-1][0], pts[-1][1]))
        wet = [water_prep.contains(Point(x, z)) for _, x, z in samp]
        if cur.get('b') or not any(wet): out_synth.append(cur); continue
        i0 = wet.index(True); i1 = i0
        while i1 + 1 < len(wet) and (wet[i1 + 1] or (i1 + 12 < len(wet) and any(wet[i1 + 1:i1 + 12]))): i1 += 1
        run = samp[i1][0] - samp[i0][0]
        if run < 6:
            # tiny pond touch: ignore, mark as handled by removing wet flag via a marker
            cur['b0'] = 1; out_synth.append(cur); continue
        mid_pt = samp[(i0 + i1) // 2]
        high = river_prep.contains(Point(mid_pt[1], mid_pt[2])) and run > 60 and LON(mid_pt[1]) < 17.142
        app = 85.0 if high else 5.0
        before, middle, after = split_at(pts, samp[i0][0] - app, samp[i1][0] + app)
        br = dict(cur); br['p'] = middle; br['b'] = 1; br['bh'] = (12.0 if cur['c'] >= 4 and cur.get('o') else 9.0) if high else 0
        if high and not br.get('n'): br['n'] = bridge_name(mid_pt[1])
        if not high and not br.get('n'): br['n'] = 'mostík'
        out_synth.append(br); n_br += 1
        if len(before) >= 2: bb = dict(cur); bb['p'] = before; bb['b0'] = 1; out_synth.append(bb)
        if len(after) >= 2: aa = dict(cur); aa['p'] = after; todo.append(aa)
roads = allr[:n_v2roads] + out_synth
# Stary most: tram/pedestrian bridge from the tram line
for t in trams:
    if t['b'] and any(river_prep.contains(Point(x, z)) for x, z in t['p']):
        roads.append({'p': t['p'], 'c': 5, 'w': 10.0, 'b': 1, 'bh': 8.0, 'n': 'Starý most'})
print('bridges (synth)', n_br, 'roads total', len(roads), 'km', round(sum(plen(r['p']) for r in roads) / 1000), file=sys.stderr)

# ================================================================== D. city-wide buildings (pmtiles) outside rich coverage
rich_polys = [s for s in (to_shape(b['o']) for b in buildings) if s is not None]
rtree = STRtree(rich_polys)
far_tags = []
for e in load(SRC + 'data_v2_city_far.json')['elements']:
    if e['type'] == 'way' and 'geometry' in e and e.get('tags', {}).get('building'):
        r = ring_from_geom(e['geometry'])
        if len(r) >= 4 and any_in(r): far_tags.append((centroid(r[:-1]), e['tags']))
pm = load('/home/claude/gtb/cache/pm_buildings.json')
pm_recs = []
for b in pm:
    o = [(X(lo), Z(la)) for lo, la in b['o']]
    c = centroid(o)
    if not inworld(c[0], c[1]): continue
    sp = to_shape(o, [[(X(lo), Z(la)) for lo, la in r] for r in b['i']])
    if sp is None or sp.geom_type != 'Polygon': continue
    rp = sp.representative_point()
    hit = False
    for i in rtree.query(sp):
        rpoly = rich_polys[i]
        if rpoly.contains(rp) or sp.contains(rpoly.representative_point()) or rpoly.intersection(sp).area > 0.3 * min(rpoly.area, sp.area): hit = True; break
    if hit: continue
    sp = sp.simplify(0.25)
    if sp.is_empty or sp.geom_type != 'Polygon' or sp.area < 9: continue
    pm_recs.append({'sp': sp, 'h': b['h'], 'm': b['m'], 'k': b['k'], 'tags': None})
ptree = STRtree([r['sp'] for r in pm_recs])
n_tag = 0
for c, tg in far_tags:
    pt = Point(c)
    for i in ptree.query(pt):
        if pm_recs[i]['sp'].contains(pt): pm_recs[i]['tags'] = tg; n_tag += 1; break
PANEL = ['#e8d9a8', '#d9c7a0', '#c9d6c2', '#b9cfe0', '#e6b98a', '#e9e4d6', '#d8a9a0', '#bcd0c0', '#f0e0b0', '#c7c2d6', '#e2e2e2', '#d4b483', '#e8c07a', '#a9c4c9']
kst = collections.Counter()
for bi, r in enumerate(pm_recs):
    sp = r['sp']; a = sp.area; h = r['h']; k = r['k']; tg = r['tags'] or {}
    o = list(sp.exterior.coords)[:-1]
    if area(o) > 0: pass
    ins_ = [list(i.coords)[:-1] for i in sp.interiors if Polygon(i).area > 4]
    c = (sp.centroid.x, sp.centroid.y)
    dc = math.hypot(c[0] - CENTRE[0], c[1] - CENTRE[1])
    mrr = sp.minimum_rotated_rectangle
    xs, ys = mrr.exterior.coords.xy
    e1 = math.hypot(xs[1] - xs[0], ys[1] - ys[0]); e2 = math.hypot(xs[2] - xs[1], ys[2] - ys[1])
    sw, lw = min(e1, e2), max(e1, e2)
    fill = a / (sw * lw + 1e-6)
    default_h = abs(h - 9.0) < 0.05 and not tg.get('building:levels') and not tg.get('height')
    rnd = ((bi * 2654435761) % 1000) / 1000.0
    typ = tg.get('building', '')
    shape = (tg.get('roof:shape') or '').lower()
    kind = 'block'; rh = 0.0; sc = 'f'
    if k == 2: kind = 'modern'
    elif k == 4: kind = 'util'
    elif k == 5: kind = 'modern' if h > 12 else 'util'
    elif typ in ('church', 'cathedral', 'chapel'): kind = 'church'; rh = 5; sc = 'h'
    else:
        slab = 9 <= sw <= 18 and lw >= 42 and fill > 0.7
        if a < 34 and h <= 9.5:
            kind = 'util'; h = 3.0 if default_h else min(h, 4)
        elif a < 300 and h <= 10.5 and (k in (0, 1)):
            kind = 'house'; h = (5.4 + rnd * 2.2) if default_h else max(4.0, h - 2.0); rh = 2.4 + rnd * 1.2; sc = 'h'
        elif slab and k in (0, 1) and (default_h or h >= 13):
            kind = 'panel'
            if default_h: h = (4 + int(rnd * 5)) * 2.9 + 1.5 if dc > 1500 else 16 + rnd * 6
        elif k in (0, 1) and h >= 13.5:
            if dc < 2400 and h <= 25 and a < 2600: kind = 'old'; rh = 3.6; sc = 'h'
            else: kind = 'panel'
        elif k == 3: kind = 'old'; rh = 3.5 if a < 1500 else 0; sc = 'h' if a < 1500 else 'f'
        elif dc < 2400 and a < 1400 and h >= 8: kind = 'old'; rh = 3.4; sc = 'h'
        else: kind = 'block'
    if shape:
        if shape == 'flat': rh = 0; sc = 'f'
        elif shape in PITCHED and kind not in ('modern',): rh = rh or 3.0; sc = SHAPECODE.get(shape, 'h')
    rec = {'o': o, 'i': ins_, 'h': round(max(2.5, h), 1), 'm': round(r['m'], 1), 'r': round(rh, 1), 's': sc, 'k': kind}
    c1 = colour(tg.get('building:colour')); c2 = colour(tg.get('roof:colour'))
    if c1: rec['c'] = c1
    elif kind == 'panel': rec['c'] = PANEL[int(rnd * 997) % len(PANEL)]
    if c2: rec['rc'] = c2
    if tg.get('name'): rec['n'] = tg['name']
    kst[kind] += 1
    buildings.append(rec)
print('pm buildings', len(pm_recs), 'tagged', n_tag, dict(kst), 'total', len(buildings), file=sys.stderr)

# ================================================================== C. terrain
def dedupe(z):
    a = np.array(z, dtype=float)
    for axis in (0, 1):
        b = a if axis == 0 else a.T
        n = b.shape[0]
        keepi = [0] + [i for i in range(1, n) if not np.allclose(b[i], b[i - 1], atol=1e-6)]
        if len(keepi) < n:
            idx = np.arange(n); starts = keepi + [n]
            cen = [(starts[k] + starts[k + 1] - 1) / 2 for k in range(len(keepi))]
            out = np.empty_like(b)
            for c in range(b.shape[1]): out[:, c] = np.interp(idx, cen, b[keepi, c])
            b = out
        a = b if axis == 0 else b.T
    return a


class Grid:
    def __init__(self, d):
        self.lon0, self.lat0, self.lon1, self.lat1 = d['bbox']
        self.nx, self.ny = d['nx'], d['ny']
        self.z = dedupe(d['z'])
    def inside(self, lon, lat): return self.lon0 <= lon <= self.lon1 and self.lat0 <= lat <= self.lat1
    def edge(self, lon, lat): return min((lon - self.lon0) * MX, (self.lon1 - lon) * MX, (lat - self.lat0) * MY, (self.lat1 - lat) * MY)
    def at(self, lon, lat):
        fx = (lon - self.lon0) / (self.lon1 - self.lon0) * (self.nx - 1)
        fy = (self.lat1 - lat) / (self.lat1 - self.lat0) * (self.ny - 1)
        fx = min(max(fx, 0), self.nx - 1.0001); fy = min(max(fy, 0), self.ny - 1.0001)
        ix, iy = int(fx), int(fy); tx, ty = fx - ix, fy - iy
        z = self.z
        a = z[iy, ix] * (1 - tx) + z[iy, ix + 1] * tx
        b = z[iy + 1, ix] * (1 - tx) + z[iy + 1, ix + 1] * tx
        return a * (1 - ty) + b * ty


grids = [Grid(load(SRC + 'data_dmr256.json')), Grid(load(SRC + 'data_dmr_centre.json')), Grid(load(SRC + 'dmr_far.json'))]
_f = grids[2].z
for _ in range(3):
    _p = np.pad(_f, 1, mode='edge')
    _f = sum(_p[1 + dy:_p.shape[0] - 1 + dy, 1 + dx:_p.shape[1] - 1 + dx] for dy in (-1, 0, 1) for dx in (-1, 0, 1)) / 9
grids[2].z = _f
GF = grids[2]


def terrain(lon, lat):
    val, wsum, rest = 0.0, 0.0, 1.0
    for g in grids:
        if not g.inside(lon, lat): continue
        e = g.edge(lon, lat)
        w = 1.0 if g is grids[-1] else min(1.0, e / (25.0 if g is grids[0] else 70.0))
        w *= rest; val += g.at(lon, lat) * w; wsum += w; rest -= w
        if rest <= 1e-6: break
    return val / wsum if wsum else None


# masks at 3 m / px over the whole world (pixel (i,j) <-> node (3i,3j))
MW, MH = int(W / 3) + 1, int(H / 3) + 1
def mpts(r): return [(x / 3 + 0.5, z / 3 + 0.5) for x, z in r]
wimg = Image.new('L', (MW, MH), 0); wd = ImageDraw.Draw(wimg)
for g in water_geoms:
    wd.polygon(mpts(g.exterior.coords), fill=255)
    for i in g.interiors: wd.polygon(mpts(i.coords), fill=0)
wmask = np.array(wimg) > 0
pimg = Image.new('L', (MW, MH), 0); pd = ImageDraw.Draw(pimg)   # protected from sinking (roads + buildings)
rimg = Image.new('L', (MW, MH), 0); rd = ImageDraw.Draw(rimg)   # road surface
bimg = Image.new('L', (MW, MH), 0); bd = ImageDraw.Draw(bimg)   # buildings
for r in roads:
    if r.get('b'): continue
    pd.line(mpts(r['p']), fill=255, width=int((r['w'] + 30) / 3))
    rd.line(mpts(r['p']), fill=255, width=max(1, int((r['w'] + 5) / 3)))
for b in buildings:
    bd.polygon(mpts(b['o']), fill=255, outline=255)
pmask = np.array(pimg) > 0
rmask = np.array(rimg) > 0
bmask = np.array(bimg) > 0

# ---- fine grid over the old core (identical pipeline to v1)
fine = np.zeros((FN, FN))
for j in range(FN):
    lat = LAT(OZ + j * FS)
    for i in range(FN):
        fine[j, i] = terrain(LON(OX + i * FS), lat)
fi0, fj0 = int(OX / 3), int(OZ / 3)
fwm = wmask[fj0:fj0 + FN, fi0:fi0 + FN]
water_level = float(np.median(fine[fwm]))
sink = fwm & (fine < water_level + 0.8)
fine[sink] = water_level - 3.0
PLAIN = water_level + 3.0
print('water level', round(water_level, 2), 'plain', round(PLAIN, 2), file=sys.stderr)

# flatten streets across their width
def hs_f(x, z):
    fx = min(max((x - OX) / FS, 0), FN - 1.001); fz = min(max((z - OZ) / FS, 0), FN - 1.001)
    i, j = int(fx), int(fz); tx, tz = fx - i, fz - j
    a = fine[j, i] * (1 - tx) + fine[j, i + 1] * tx
    b = fine[j + 1, i] * (1 - tx) + fine[j + 1, i + 1] * tx
    return a * (1 - tz) + b * tz
bestD = np.full(fine.shape, 1e9); bestT = np.zeros(fine.shape)
GXf, GZf = np.meshgrid(OX + np.arange(FN) * FS, OZ + np.arange(FN) * FS)
flines = [(r['p'], r['w']) for r in roads if not r.get('b')] + [(f['p'], 2.6) for f in foot]
for pp, wdt in flines:
    if not any(OX - 20 <= x <= OX + FW + 20 and OZ - 20 <= z <= OZ + FW + 20 for x, z in pp): continue
    samp = []
    for (ax, az), (bx, bz) in zip(pp, pp[1:]):
        L = math.hypot(bx - ax, bz - az); n = max(1, int(L / 1.5))
        for k in range(n): samp.append((ax + (bx - ax) * k / n, az + (bz - az) * k / n))
    samp.append(pp[-1])
    hs = np.array([hs_f(x, z) for x, z in samp])
    if len(hs) > 5: hs = np.convolve(np.pad(hs, 3, mode='edge'), np.ones(7) / 7, mode='valid')
    hw = wdt / 2; R = hw + 4.0
    for (x, z), hc in zip(samp, hs):
        if hc < water_level + 0.3: continue
        i0 = max(0, int((x - OX - R) / FS)); i1 = min(FN - 1, int((x - OX + R) / FS) + 1)
        j0 = max(0, int((z - OZ - R) / FS)); j1 = min(FN - 1, int((z - OZ + R) / FS) + 1)
        if i1 < i0 or j1 < j0: continue
        d = np.hypot(GXf[j0:j1 + 1, i0:i1 + 1] - x, GZf[j0:j1 + 1, i0:i1 + 1] - z) - hw
        bdv = bestD[j0:j1 + 1, i0:i1 + 1]; m = d < bdv
        bdv[m] = d[m]; bestT[j0:j1 + 1, i0:i1 + 1][m] = hc
wgt = np.clip(1 - (bestD - 0.8) / 3.2, 0, 1); wgt[bestD > 1e8] = 0
fine = fine * (1 - wgt) + bestT * wgt

# ---- coarse grid over the whole world
coarse = np.full((CNZ, CNX), PLAIN)
for j in range(CNZ):
    lat = LAT(j * CS)
    if lat < GF.lat0 - 0.001 or lat > GF.lat1 + 0.001: continue
    for i in range(CNX):
        lon = LON(i * CS)
        if not GF.inside(lon, lat): continue
        t = terrain(lon, lat)
        # feather to the plain on the east and south sides of the DMR coverage
        e = min((GF.lon1 - lon) * MX, (lat - GF.lat0) * MY)
        w = max(0.0, min(1.0, e / 320.0)); w = w * w * (3 - 2 * w)
        coarse[j, i] = PLAIN * (1 - w) + t * w
cw = wmask[::4, ::4][:CNZ, :CNX]
cp = pmask[::4, ::4][:CNZ, :CNX]
csink = cw & ~cp & (coarse < water_level + 2.5)
coarse[csink] = water_level - 3.0
# land next to water in the flats must stay above the water plane
coarse[~cw & (coarse < water_level + 1.2)] = water_level + 1.2

def coarse_tri(x, z):
    fx = min(max(x / CS, 0), CNX - 1.001); fz = min(max(z / CS, 0), CNZ - 1.001)
    i, j = int(fx), int(fz); tx, tz = fx - i, fz - j
    a, b, c, d = coarse[j, i], coarse[j, i + 1], coarse[j + 1, i], coarse[j + 1, i + 1]
    if tx + tz <= 1: return a + (b - a) * tx + (c - a) * tz
    return d + (c - d) * (1 - tx) + (b - d) * (1 - tz)

# make the coarse grid agree with the fine one inside the fine rect (so far LOD looks the same) ...
for j in range(CNZ):
    z = j * CS
    if not (OZ + 36 <= z <= OZ + FW - 36): continue
    for i in range(CNX):
        x = i * CS
        if OX + 36 <= x <= OX + FW - 36: coarse[j, i] = fine[int((z - OZ) / FS), int((x - OX) / FS)]
# ... and blend the fine grid into the coarse surface at its border
for j in range(FN):
    for i in range(FN):
        e = min(i, j, FN - 1 - i, FN - 1 - j) * FS
        if e < 36:
            w = e / 36.0
            fine[j, i] = coarse_tri(OX + i * FS, OZ + j * FS) * (1 - w) + fine[j, i] * w

def h_at(x, z):
    if OX <= x <= OX + FW and OZ <= z <= OZ + FW: return hs_f(x, z)
    return coarse_tri(x, z)

def b64i16(a): return base64.b64encode(np.round((a - BASE) * 100).astype('<i2').tobytes()).decode()

# ================================================================== procedural trees (outside the rich area)
def free(x, z):
    i, j = int(x / 3), int(z / 3)
    return 0 <= i < MW and 0 <= j < MH and not bmask[j, i] and not rmask[j, i] and not wmask[j, i]

green_shapes = [s for s in (to_shape(o, i) for o, i in greens) if s is not None and s.area > 15]
ptrees = []
for s in green_shapes:
    a = s.area
    if a < 250: continue
    c = s.representative_point()
    if in_rich(c.x, c.y) and a < 4000: continue
    n = int(min(2500, a / (380 if a < 60000 else 520)))
    if n < 1: continue
    sp_ = sprep(s); x0, z0, x1, z1 = s.bounds; got = 0; tries = 0
    while got < n and tries < n * 6:
        tries += 1
        x = x0 + random.random() * (x1 - x0); z = z0 + random.random() * (z1 - z0)
        if inworld(x, z, -3) and free(x, z) and sp_.contains(Point(x, z)): ptrees.append((x, z)); got += 1
# street trees
for ri, r in enumerate(roads):
    if r.get('src') == 'v2' or r.get('b') or r['c'] not in (1, 2, 3) or (ri * 7919) % 100 > 42: continue
    acc = 6.0; side = 1; pp = r['p']
    for (ax, az), (bx, bz) in zip(pp, pp[1:]):
        L = math.hypot(bx - ax, bz - az)
        if L < 0.5: continue
        while acc < L:
            t = acc / L; off = (r['w'] / 2 + 2.6) * side
            x = ax + (bx - ax) * t - (bz - az) / L * off; z = az + (bz - az) * t + (bx - ax) / L * off
            if inworld(x, z, -3) and free(x, z): ptrees.append((x, z))
            side = -side; acc += 13.0
        acc -= L
print('procedural trees', len(ptrees), 'real', real_trees, file=sys.stderr)
trees += ptrees

# ================================================================== E. tiles
tiles = collections.defaultdict(lambda: {'bld': [], 'green': [], 'water': [], 'parea': [], 'walls': [], 'trees': [], 'lamps': []})
def tkey(x, z): return (min(NTX - 1, max(0, int(x // T))), min(NTZ - 1, max(0, int(z // T))))
def loc(pts, ti, tj): return [[q(x - ti * T), q(z - tj * T)] for x, z in pts]

tall = []
for b in buildings:
    c = centroid(b['o'])
    if not inworld(c[0], c[1]): continue
    ti, tj = tkey(c[0], c[1])
    rec = {k: v for k, v in b.items() if k not in ('o', 'i')}
    rec['o'] = loc(b['o'], ti, tj)
    if b.get('i'): rec['i'] = [loc(r, ti, tj) for r in b['i'] if len(r) >= 3]
    tiles[(ti, tj)]['bld'].append(rec)
    if b['h'] >= 19 and b['m'] < 1 and b['k'] != 'roof' and abs(area(b['o'])) > 120:
        sp = to_shape(b['o'])
        if sp is not None:
            sp = sp.simplify(1.2)
            if sp.geom_type == 'Polygon' and not sp.is_empty:
                t_ = {'o': [[q(x), q(z)] for x, z in list(sp.exterior.coords)[:-1]], 'h': b['h'], 'k': b['k']}
                if b.get('c'): t_['c'] = b['c']
                tall.append(t_)


def clip_to_tiles(shape, name, minarea=4.0, simp=0.3):
    x0, z0, x1, z1 = shape.bounds
    for ti in range(max(0, int(x0 // T)), min(NTX - 1, int(x1 // T)) + 1):
        for tj in range(max(0, int(z0 // T)), min(NTZ - 1, int(z1 // T)) + 1):
            bx = box(ti * T - 1.5, tj * T - 1.5, (ti + 1) * T + 1.5, (tj + 1) * T + 1.5)
            try: g = shape.intersection(bx)
            except Exception: continue
            for pg in (g.geoms if hasattr(g, 'geoms') else [g]):
                if pg.geom_type != 'Polygon' or pg.area < minarea: continue
                pg = pg.simplify(simp)
                if pg.is_empty or pg.geom_type != 'Polygon': continue
                rings = [loc(list(pg.exterior.coords)[:-1], ti, tj)] + [loc(list(i.coords)[:-1], ti, tj) for i in pg.interiors if Polygon(i).area > 6]
                tiles[(ti, tj)][name].append(rings)


green_u = unary_union(green_shapes).intersection(WORLD_BOX)
for g in (green_u.geoms if hasattr(green_u, 'geoms') else [green_u]):
    if g.geom_type == 'Polygon' and g.area > 12: clip_to_tiles(g, 'green', 6.0, 0.5)
for g in water_geoms: clip_to_tiles(g, 'water', 4.0, 0.4)
for o in parea:
    s = to_shape(o)
    if s is not None and s.geom_type == 'Polygon' and s.area > 4: clip_to_tiles(s, 'parea', 2.0, 0.15)
for w in walls:
    c = w['p'][len(w['p']) // 2]
    if not inworld(c[0], c[1]): continue
    ti, tj = tkey(c[0], c[1])
    tiles[(ti, tj)]['walls'].append({'p': loc(w['p'], ti, tj), 'h': w['h'], 'k': w['k']})
for x, z in trees:
    ti, tj = tkey(x, z); tiles[(ti, tj)]['trees'].append([q(x - ti * T), q(z - tj * T)])
for x, z in lamps:
    ti, tj = tkey(x, z); tiles[(ti, tj)]['lamps'].append([q(x - ti * T), q(z - tj * T)])
have = []
tot = 0
for tj in range(NTZ):
    for ti in range(NTX):
        d = tiles.get((ti, tj))
        if not d or not any(d.values()): have.append(0); continue
        if len(d['trees']) > 1400: random.shuffle(d['trees']); d['trees'] = d['trees'][:1400]
        s = json.dumps(d, separators=(',', ':'), ensure_ascii=False)
        open(OUT + 't/%d_%d.json' % (ti, tj), 'w').write(s); tot += len(s); have.append(1)
print('tiles', sum(have), 'bytes', tot, 'max bld', max(len(d['bld']) for d in tiles.values()), 'tall', len(tall), file=sys.stderr)

# ================================================================== far overview texture (4 m / px)
FS_ = 4.0
fimg = Image.new('RGB', (int(W / FS_), int(H / FS_)), '#7d8466'); fd = ImageDraw.Draw(fimg)
fd.rectangle([RICH[0] / FS_, RICH[1] / FS_, RICH[2] / FS_, RICH[3] / FS_], fill='#857f72')
def fp(r): return [(x / FS_, z / FS_) for x, z in r]
for g in (green_u.geoms if hasattr(green_u, 'geoms') else [green_u]):
    if g.geom_type == 'Polygon':
        fd.polygon(fp(g.exterior.coords), fill='#56703c' if g.area < 30000 else '#4b6534')
        for i in g.interiors: fd.polygon(fp(i.coords), fill='#857f72')
for o in parea: fd.polygon(fp(o), fill='#b0a389')
for g in water_geoms:
    fd.polygon(fp(g.exterior.coords), fill='#26323a')
    for i in g.interiors: fd.polygon(fp(i.coords), fill='#857f72')
for r in rails: fd.line(fp(r), fill='#5a534c', width=1)
for r in sorted(roads, key=lambda r: r['c'] if r['c'] < 5 else -1):
    if r.get('b'): continue
    if r['c'] == 5: fd.line(fp(r['p']), fill='#b5a88e', width=1)
    elif r['c'] >= 1: fd.line(fp(r['p']), fill='#a39a8a', width=max(2, int(round((r['w'] + 3.6) / FS_))))
for r in sorted(roads, key=lambda r: r['c']):
    if r.get('b') or r['c'] == 5: continue
    fd.line(fp(r['p']), fill='#615850' if r.get('s') else '#3a3b40', width=max(1, int(round(r['w'] / FS_))))
ROOFC = {'old': '#8f4a35', 'house': '#8a5240', 'panel': '#77736c', 'block': '#726d66', 'modern': '#5d5f63', 'util': '#6c6a66', 'church': '#7d6a5a', 'castle': '#8a5a45', 'roof': '#666', 'ruin': '#777'}
for b in buildings: fd.polygon(fp(b['o']), fill=ROOFC.get(b['k'], '#6c6a66'))
fimg.save(OUT + 'far.jpg', quality=82)
fimg.resize((fimg.width // 3, fimg.height // 3), Image.LANCZOS).save('/home/claude/gtb/shots/far_preview.png')

# ================================================================== world.json
def rq(r, keys=('c', 'w', 'o', 'b', 'bh', 'n', 's', 'pk', 'nv')):
    o = {'p': [[q(x), q(z)] for x, z in r['p']]}
    # drop repeated points
    pp = [o['p'][0]]
    for p in o['p'][1:]:
        if p != pp[-1]: pp.append(p)
    o['p'] = pp
    for k in keys:
        if k in r: o[k] = r[k]
    return o

groads = [rq(r) for r in roads if any_in(r['p'], 80)]
groads = [r for r in groads if len(r['p']) >= 2]
river = []
for g in big_water:
    s = g.simplify(2.5)
    for pg in (s.geoms if hasattr(s, 'geoms') else [s]):
        if pg.geom_type == 'Polygon': river.append([[q(x), q(z)] for x, z in list(pg.exterior.coords)[:-1]])

# ---------------------------------------------------------------- pedestrian zone mask (centre only)
# ground reachable from pedestrian streets/squares without crossing houses or car streets
ZN_ = 1024; ZS_ = 1656.0 / ZN_
def zp(r): return [((x - OX) / ZS_, (z - OZ) / ZS_) for x, z in r]
zblk = Image.new('L', (ZN_, ZN_), 0); zb = ImageDraw.Draw(zblk)
zsrc = Image.new('L', (ZN_, ZN_), 0); zs = ImageDraw.Draw(zsrc)
zasp = Image.new('L', (ZN_, ZN_), 0); za = ImageDraw.Draw(zasp)
for b in buildings:
    if b.get('k') not in ('roof', 'pylon') and any(in_rich(x, z) for x, z in b['o'][:1]): zb.polygon(zp(b['o']), fill=255)
for r in roads:
    if not any(OX - 50 < x < OX + 1706 and OZ - 50 < z < OZ + 1706 for x, z in r['p']): continue
    if 1 <= r['c'] <= 4 and not r.get('nv'):
        zb.line(zp(r['p']), fill=255, width=max(1, int(round((r['w'] + 1) / ZS_))))
        if not r.get('s'): za.line(zp(r['p']), fill=255, width=max(1, int(round(r['w'] / ZS_))))
for g in water_geoms: zb.polygon(zp(list(g.exterior.coords)), fill=255)
for o in parea: zs.polygon(zp(o), fill=255)
for r in roads:
    if r['c'] == 5: zs.line(zp(r['p']), fill=255, width=max(1, int(round(6.5 / ZS_))))
blk = np.array(zblk) > 0; src = (np.array(zsrc) > 0) & ~blk; asp = np.array(zasp) > 0
reach = src.copy()
for _ in range(int(round(27 / ZS_))):
    g = reach.copy()
    g[1:, :] |= reach[:-1, :]; g[:-1, :] |= reach[1:, :]; g[:, 1:] |= reach[:, :-1]; g[:, :-1] |= reach[:, 1:]
    reach = g & ~blk
zone_mask = reach & ~asp
zone = {'x': OX, 'z': OZ, 's': ZS_, 'n': ZN_, 'b': base64.b64encode(np.packbits(zone_mask.astype(np.uint8)).tobytes()).decode()}
print('zone cells', int(zone_mask.sum()))

world = {
    'meta': {'lon0': LON0, 'lat1': LAT1, 'mx': MX, 'my': MY, 'w': W, 'h': H, 'base': BASE, 'water': round(water_level - BASE, 2),
             'tile': T, 'ntx': NTX, 'ntz': NTZ, 'fs': FS, 'fn': FN, 'fx': OX, 'fz': OZ, 'cs': CS, 'cnx': CNX, 'cnz': CNZ, 'ox': OX, 'oz': OZ, 'far': FS_, 'rich': [round(v, 1) for v in RICH],
             'credit': 'Map data (c) OpenStreetMap contributors (ODbL). Terrain DMR 5.0 (c) UGKK SR (open data).'},
    'hf': b64i16(fine), 'hc': b64i16(coarse), 'have': ''.join(str(v) for v in have),
    'road': groads,
    'tram': [{'p': [[q(x), q(z)] for x, z in t['p']], 'b': t['b']} for t in trams if any_in(t['p'])],
    'rail': [[[q(x), q(z)] for x, z in r] for r in rails],
    'foot': [{'p': [[q(x), q(z)] for x, z in f['p']], 'sw': f['sw']} for f in foot],
    'cross': [[[q(x), q(z)] for x, z in c] for c in cross],
    'steps': [[[q(x), q(z)] for x, z in c] for c in steps],
    'signals': [[q(x), q(z)] for x, z in signals],
    'zone': zone, 'river': river, 'pylon': [[[q(x), q(z)] for x, z in p] for p in pylons], 'tall': tall,
}
s = json.dumps(world, separators=(',', ':'), ensure_ascii=False)
open(OUT + 'world.json', 'w').write(s)
print('world.json', len(s), {k: len(json.dumps(v, separators=(',', ':'))) for k, v in world.items() if k != 'meta'}, file=sys.stderr)
