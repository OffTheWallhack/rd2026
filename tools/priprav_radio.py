#!/usr/bin/env python3
"""Priprav nahrávky pre si/počúval (ffmpeg).

  python3 tools/priprav_radio.py VSTUP VYSTUP            # hudba / DJ set
  python3 tools/priprav_radio.py VSTUP VYSTUP --hlas     # tvoje hlášky z telefónu

Hudba: mp3, vyrovnaná hlasitosť (-14 LUFS). Dlhé sety (nad 20 min) idú na 128 kbps,
aby sa zmestili pod 100 MB (limit GitHubu). Názov súboru = "Interpret - Názov.mp3" z tagov.
Hlášky: mono mp3, bez šumu z basov, bez ticha na začiatku/konci, hlasitosť -16 LUFS.
"""
import argparse, json, re, subprocess, sys
from pathlib import Path

EXT = {'.mp3', '.m4a', '.wav', '.flac', '.ogg', '.aac', '.mp4', '.mov', '.opus', '.webm'}


def run(cmd):
    return subprocess.run(cmd, capture_output=True, text=True)


def probe(p):
    r = run(['ffprobe', '-v', 'error', '-show_entries', 'format=duration:format_tags=artist,title',
             '-of', 'json', str(p)])
    try:
        f = json.loads(r.stdout)['format']
        t = {k.lower(): v for k, v in f.get('tags', {}).items()}
        return float(f.get('duration', 0)), t.get('artist', ''), t.get('title', '')
    except Exception:
        return 0.0, '', ''


def safe(s):
    return re.sub(r'[\\/:*?"<>|]+', '', s).strip()


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument('vstup'); ap.add_argument('vystup')
    ap.add_argument('--hlas', action='store_true', help='spracuj ako hlášky (mono, ticho preč)')
    a = ap.parse_args()
    src, dst = Path(a.vstup), Path(a.vystup)
    if not run(['ffmpeg', '-version']).returncode == 0:
        sys.exit('Chýba ffmpeg. Nainštaluj ho (napr. brew install ffmpeg / apt install ffmpeg).')
    files = sorted(p for p in (src.rglob('*') if src.is_dir() else [src]) if p.suffix.lower() in EXT)
    if not files:
        sys.exit('Vo vstupe nič nenašiel (mp3, m4a, wav, flac…).')
    dst.mkdir(parents=True, exist_ok=True)
    for p in files:
        dur, art, tit = probe(p)
        if a.hlas:
            out = dst / (p.stem + '.mp3')
            af = ('highpass=f=80,'
                  'silenceremove=start_periods=1:start_threshold=-45dB:start_silence=0.1,'
                  'areverse,silenceremove=start_periods=1:start_threshold=-45dB:start_silence=0.1,areverse,'
                  'loudnorm=I=-16:TP=-1.5:LRA=9')
            cmd = ['ffmpeg', '-y', '-v', 'error', '-i', str(p), '-vn', '-ac', '1', '-ar', '44100',
                   '-af', af, '-c:a', 'libmp3lame', '-b:a', '96k', str(out)]
        else:
            name = f'{safe(art)} - {safe(tit)}' if art and tit else p.stem
            out = dst / (name + '.mp3')
            br = '128k' if dur > 20 * 60 else '192k'
            cmd = ['ffmpeg', '-y', '-v', 'error', '-i', str(p), '-vn', '-map_metadata', '0',
                   '-af', 'loudnorm=I=-14:TP=-1.0:LRA=11', '-ar', '44100',
                   '-c:a', 'libmp3lame', '-b:a', br, str(out)]
        print(f'… {p.name}  →  {out.name}')
        r = run(cmd)
        if r.returncode:
            print('  CHYBA:', r.stderr.strip()[:300]); continue
        mb = out.stat().st_size / 1e6
        print(f'  hotovo, {mb:.1f} MB' + ('  ⚠ nad 95 MB, GitHub to neprijme – rozdeľ set na dve časti' if mb > 95 else ''))


if __name__ == '__main__':
    main()
