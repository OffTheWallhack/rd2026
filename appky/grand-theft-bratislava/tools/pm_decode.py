#!/usr/bin/env python3
"""Decode buildings.pmtiles (z16) -> merged building polygons (lon/lat) with h/min/k. Cached as JSON."""
import json, gzip, math, sys, collections
from pmtiles.reader import Reader, MmapSource, all_tiles
import mapbox_vector_tile as mvt
from shapely.geometry import shape, Polygon, MultiPolygon
from shapely.ops import unary_union
from shapely import affinity

LON0, LON1, LAT0, LAT1 = 17.070, 17.240, 48.080, 48.165
f = open('/home/claude/leumasdam/bratislava-3d/data/buildings.pmtiles', 'rb')
r = Reader(MmapSource(f))
def tile_bounds(z, x, y):
    n = 2 ** z
    lon_w = x / n * 360 - 180; lon_e = (x + 1) / n * 360 - 180
    lat = lambda yy: math.degrees(math.atan(math.sinh(math.pi * (1 - 2 * yy / n))))
    return lon_w, lat(y + 1), lon_e, lat(y)
groups = collections.defaultdict(list)
nt = 0
for (z, x, y), data in all_tiles(r.get_bytes):
    if z != 16: continue
    w, s, e, n = tile_bounds(z, x, y)
    if e < LON0 or w > LON1 or n < LAT0 or s > LAT1: continue
    nt += 1
    d = mvt.decode(gzip.decompress(data) if data[:2] == b'\x1f\x8b' else data)
    lay = d.get('building')
    if not lay: continue
    ext = lay.get('extent', 4096)
    N = 2 ** z
    def tolonlat(px, py):
        # mapbox_vector_tile decodes with y flipped (origin bottom-left) by default
        fx = (x + px / ext) / N
        fy = (y + 1 - py / ext) / N
        lon = fx * 360 - 180
        lat = math.degrees(math.atan(math.sinh(math.pi * (1 - 2 * fy))))
        return lon, lat
    for ft in lay['features']:
        g = ft['geometry']; p = ft['properties']
        polys = [g['coordinates']] if g['type'] == 'Polygon' else g['coordinates'] if g['type'] == 'MultiPolygon' else []
        for pc in polys:
            rings = [[tolonlat(a, b) for a, b in ring] for ring in pc]
            if len(rings[0]) < 4: continue
            try:
                pg = Polygon(rings[0], rings[1:])
                if not pg.is_valid: pg = pg.buffer(0)
                if pg.is_empty: continue
                groups[(round(float(p.get('h', 9)), 1), round(float(p.get('min', 0)), 1), int(p.get('k', 0)))].append(pg)
            except Exception as ex:
                pass
print('tiles', nt, 'groups', len(groups), 'pieces', sum(len(v) for v in groups.values()), file=sys.stderr)
out = []
for (h, mn, k), ps in groups.items():
    u = unary_union(ps)
    gs = [u] if u.geom_type == 'Polygon' else list(u.geoms) if hasattr(u, 'geoms') else []
    for pg in gs:
        if pg.geom_type != 'Polygon' or pg.is_empty: continue
        c = pg.representative_point()
        if not (LON0 <= c.x <= LON1 and LAT0 <= c.y <= LAT1): continue
        out.append({'h': h, 'm': mn, 'k': k, 'o': [[round(a, 7), round(b, 7)] for a, b in pg.exterior.coords[:-1]],
                    'i': [[[round(a, 7), round(b, 7)] for a, b in rg.coords[:-1]] for rg in pg.interiors]})
json.dump(out, open('/home/claude/gtb/cache/pm_buildings.json', 'w'))
print('buildings', len(out), collections.Counter(b['k'] for b in out), file=sys.stderr)
