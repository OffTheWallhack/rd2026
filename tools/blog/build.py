#!/usr/bin/env python3
"""Builds the blog from blog/posts/*.html.

Each post file starts with a JSON header between <!--meta and -->:
  {"title": "...", "date": "2026-10-07", "slug": "...", "lead": "...", "tags": ["AI", "hry"],
   "sources": [["Forbes", "https://..."], ...]}
followed by the article body as plain HTML (<p>, <h2>, <ul>, <blockquote>).

Optional cover: img/blog/<slug>.webp (1600x900), <slug>-sm.webp (800x450) and
<slug>-og.jpg (1200x630), described by "cover_alt" in the meta.

Writes blog/<slug>/index.html for every post, blog/index.html with the list,
and refreshes the blog entries in sitemap.xml. Run from the repo root:
  python3 tools/blog/build.py
"""
import glob, html, json, os, re, datetime

ROOT = os.path.dirname(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))
BASE = "https://offthewallhack.github.io/rd2026/"
MONTHS = ["januára", "februára", "marca", "apríla", "mája", "júna", "júla", "augusta", "septembra", "októbra", "novembra", "decembra"]

def sk_date(d):
    y, m, dd = map(int, d.split("-"))
    return f"{dd}. {MONTHS[m-1]} {y}"

def read_posts():
    posts = []
    for f in glob.glob(os.path.join(ROOT, "blog", "posts", "*.html")):
        raw = open(f, encoding="utf-8").read()
        m = re.match(r"\s*<!--meta\s*(\{.*?\})\s*-->\s*(.*)", raw, re.S)
        if not m:
            raise SystemExit(f"missing meta header in {f}")
        meta = json.loads(m.group(1)); meta["body"] = m.group(2).strip()
        for k in ("title", "date", "slug", "lead"):
            if not meta.get(k): raise SystemExit(f"{f}: missing {k}")
        datetime.date.fromisoformat(meta["date"])
        posts.append(meta)
    # "time" (HH:MM, optional) orders several posts published on the same day
    posts.sort(key=lambda p: (p["date"], p.get("time", "07:00"), p["slug"]), reverse=True)
    return posts

HEAD = """<!doctype html>
<html lang="sk">
<head>
<meta charset="utf-8">
<script>document.documentElement.classList.add("js")</script>
<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">
<title>{title}</title>
<meta name="description" content="{desc}">
<link rel="canonical" href="{url}">
<meta property="og:title" content="{ogtitle}">
<meta property="og:description" content="{desc}">
<meta property="og:image" content="{ogimg}">
<meta property="og:url" content="{url}">
<meta property="og:type" content="{ogtype}">
<meta property="og:locale" content="sk_SK">
<meta name="twitter:card" content="summary_large_image">
<meta name="theme-color" content="#F5F5F2">
<meta name="author" content="Robert Ďurica">
<meta name="goatcounter" content="">
<link rel="icon" type="image/png" sizes="192x192" href="{rel}img/icons/mark-192.png">
<link rel="icon" type="image/png" sizes="32x32" href="{rel}img/icons/favicon-32.png">
<link rel="apple-touch-icon" href="{rel}img/icons/apple-touch-icon.png">
<link rel="manifest" href="{rel}manifest.webmanifest">
<link rel="alternate" type="application/rss+xml" title="Robert Ďurica – blog" href="{base}blog/feed.xml">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;700&family=JetBrains+Mono:wght@400;500&display=swap" rel="stylesheet">
<link rel="stylesheet" href="{rel}assets/common.css">
<link rel="stylesheet" href="{rel}assets/blog.css">
{ld}
</head>
<body>
<a class="skip" href="#main">Preskočiť na obsah</a>
<div class="progress" aria-hidden="true"></div>
<header class="bar">
  <div class="wrap bar-in">
    <a class="brand" href="{rel}"><span class="dot" aria-hidden="true"></span><span class="bn-l">Robert Ďurica</span></a>
    <div class="bar-r">
      <a class="nav-link" href="{rel}blog/">Blog</a>
      <a class="nav-link" href="{rel}kto-som/">Kto som</a>
      <a class="btn btn-dark btn-sm wa" href="#">Napíš mi</a>
    </div>
  </div>
</header>
<main id="main" class="wrap blog">
"""
LB = """<div class="lb" id="lb" role="dialog" aria-modal="true" aria-label="Obrázok"><span class="lb-count"></span><button class="lb-x" type="button" aria-label="Zavrieť">✕</button><button class="lb-p" type="button" aria-label="Predchádzajúci">‹</button><div class="lb-stage"></div><button class="lb-n" type="button" aria-label="Ďalší">›</button><p class="lb-cap"></p></div>
"""
FOOT = """</main>
<footer class="foot">
  <div class="wrap">
    <p>Služby fakturuje 142 design, s. r. o., Holíčska 3049/5, 851 05 Bratislava · IČO 53389662</p>
    <p><a href="{rel}">Služby</a> · <a href="{rel}ochrana-udajov/">Ochrana údajov</a> · © 2026 Robert Ďurica</p>
  </div>
</footer>
""" + LB + """<script src="{rel}assets/common.js"></script>
</body>
</html>
"""

def esc(s): return html.escape(s, quote=True)

def cover(p):
    """Returns the cover file names relative to img/blog/, or None."""
    if os.path.exists(os.path.join(ROOT, "img", "blog", p["slug"] + ".webp")):
        return {"big": p["slug"] + ".webp", "sm": p["slug"] + "-sm.webp", "og": p["slug"] + "-og.jpg"}

def tags_html(p):
    return "".join(f'<span class="chip">{esc(t)}</span>' for t in p.get("tags", []))

def build_post(p, newer, older, posts=()):
    url = f"{BASE}blog/{p['slug']}/"
    ld = {"@context": "https://schema.org", "@type": "BlogPosting", "headline": p["title"], "description": p["lead"],
          "datePublished": p["date"], "dateModified": p["date"], "inLanguage": "sk", "url": url,
          "author": {"@type": "Person", "name": "Robert Ďurica", "url": BASE + "kto-som/"},
          "publisher": {"@type": "Person", "name": "Robert Ďurica"}, "image": BASE + "img/og.jpg"}
    cv = cover(p)
    if cv: ld["image"] = BASE + "img/blog/" + cv["og"]
    head = HEAD.format(title=esc(p["title"]) + " | Robert Ďurica", desc=esc(p["lead"]), url=url, ogtitle=esc(p["title"]),
                       base=BASE, ogtype="article", rel="../../", ogimg=BASE + ("img/blog/" + cv["og"] if cv else "img/og.jpg"),
                       ld='<script type="application/ld+json">' + json.dumps(ld, ensure_ascii=False) + "</script>")
    src = ""
    if p.get("sources"):
        src = '<aside class="sources"><p class="label">Zdroje</p><ul>' + "".join(
            f'<li><a href="{esc(u)}" target="_blank" rel="noopener">{esc(n)}</a></li>' for n, u in p["sources"]) + "</ul></aside>"
    others = [q for q in posts if q["slug"] != p["slug"]][:3]
    def card(q):
        cv2 = cover(q)
        img = f'<img src="../../img/blog/{cv2["sm"]}" width="800" height="450" loading="lazy" alt="">' if cv2 else ""
        return f'<a class="mp" href="../{q["slug"]}/"><span><small>{sk_date(q["date"])}</small><b>{esc(q["title"])}</b></span>{img}</a>'
    nav = ('<section class="more-posts" aria-labelledby="mp-h"><h2 id="mp-h"><span class="dot" aria-hidden="true"></span>Ďalšie články</h2><div class="mp-grid">'
           + "".join(card(q) for q in others) + '</div><p class="mp-all"><a class="btn" href="../">Všetky články →</a></p></section>') if others else ""
    cover_fig = (f'<figure class="post-cover"><img src="../../img/blog/{cv["big"]}" width="1600" height="900" alt="{esc(p.get("cover_alt", ""))}" fetchpriority="high"></figure>\n    ' if cv else "")
    nosi = " data-nosi" if p.get("nosi") else ""   # posts about the AI/SI rename keep their wording
    body = f"""  <article class="post"{nosi}>
    <p class="label"><a href="../">Blog</a> · <time datetime="{p['date']}">{sk_date(p['date'])}</time></p>
    <h1>{esc(p['title'])}</h1>
    <p class="lead">{esc(p['lead'])}</p>
    <p class="tags">{tags_html(p)}</p>
    {cover_fig}<div class="prose">
{p['body']}
    </div>
    {src}
    <div class="post-cta">
      <p><b>Chceš si niečo také vyskúšať sám?</b> Na 3-hodinovej session ťa to naučím na tvojich vlastných veciach.</p>
      <a class="btn btn-green" href="../../#hovor">15 min hovor zadarmo</a>
    </div>
    {nav}
  </article>
"""
    if "twitter-tweet" in p["body"]:
        body += '  <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>\n'
    out = os.path.join(ROOT, "blog", p["slug"]); os.makedirs(out, exist_ok=True)
    open(os.path.join(out, "index.html"), "w", encoding="utf-8").write(head + body + FOOT.format(rel="../../"))

def build_index(posts):
    url = BASE + "blog/"
    ld = {"@context": "https://schema.org", "@type": "Blog", "name": "Robert Ďurica – blog", "url": url, "inLanguage": "sk",
          "blogPost": [{"@type": "BlogPosting", "headline": p["title"], "datePublished": p["date"], "url": f"{url}{p['slug']}/"} for p in posts[:20]]}
    head = HEAD.format(title="Blog – AI novinky, ktoré ma zaujímajú | Robert Ďurica", desc="Aktuálne novinky zo sveta AI a veci z môjho života. Témy vyberám ja sám. Po ľudsky, bez odborných slov.",
                       url=url, ogtitle="Blog – AI novinky, ktoré ma zaujímajú", base=BASE, ogtype="blog", rel="../", ogimg=BASE + "img/og.jpg",
                       ld='<script type="application/ld+json">' + json.dumps(ld, ensure_ascii=False) + "</script>")
    def thumb(p):
        cv = cover(p)
        return f'<img class="pl-img" src="../img/blog/{cv["sm"]}" width="800" height="450" loading="lazy" alt="">' if cv else ""
    items = "".join(f"""      <li{' data-nosi' if p.get('nosi') else ''}><a href="{p['slug']}/"><span class="pl-txt"><time datetime="{p['date']}">{sk_date(p['date'])}</time><h2>{esc(p['title'])}</h2><p>{esc(p['lead'])}</p><span class="tags">{tags_html(p)}</span></span>{thumb(p)}</a></li>
""" for p in posts)
    body = f"""  <header class="blog-head">
    <p class="label"><span class="dot" aria-hidden="true"></span> Blog · vyberám ja</p>
    <h1>AI novinky, <span class="hl">ktoré ma zaujímajú.</span></h1>
    <p class="lead">Aktuálne novinky zo sveta AI a veci z môjho života. Témy vyberám ja sám, po ľudsky, bez odborných slov.</p>
    <form class="nl-mini" data-nosi onsubmit="event.preventDefault();var e=this.querySelector('input').value.trim();if(e)location.href='mailto:rdurica1995@gmail.com?subject='+encodeURIComponent('Newsletter: prihlásenie')+'&body='+encodeURIComponent('Ahoj Robo, prihlás ma prosím na AI digest.\\nMôj e-mail: '+e);">
      <input type="email" required placeholder="tvoj@email.sk" aria-label="E-mail" autocomplete="email"><button class="btn btn-green" type="submit">Odoberať digest</button>
    </form>
  </header>
  <ul class="post-list">
{items}  </ul>
  <form class="nl" data-nosi onsubmit="event.preventDefault();var e=this.querySelector('input').value.trim();if(e)location.href='mailto:rdurica1995@gmail.com?subject='+encodeURIComponent('Newsletter: prihlásenie')+'&body='+encodeURIComponent('Ahoj Robo, prihlás ma prosím na AI digest.\\nMôj e-mail: '+e);">
    <div class="nl-txt"><p class="label"><span class="dot" aria-hidden="true"></span> Newsletter</p><b>Novinky o AI každý deň. Z môjho pohľadu.</b><span>Overené, žiadne nezmysly, len krátky digest do mailu.</span></div>
    <div class="nl-f"><input type="email" required placeholder="tvoj@email.sk" aria-label="E-mail" autocomplete="email"><button class="btn btn-green" type="submit">Odoberať</button></div>
    <small class="nl-note">Otvorí sa ti mail s hotovou správou, stačí ho odoslať. Odhlásiš sa kedykoľvek. Alebo <a href="feed.xml">RSS</a>.</small>
  </form>
"""
    open(os.path.join(ROOT, "blog", "index.html"), "w", encoding="utf-8").write(head + body + FOOT.format(rel="../"))

def build_feed(posts):
    items = "".join(f"""  <item><title>{esc(p['title'])}</title><link>{BASE}blog/{p['slug']}/</link><guid>{BASE}blog/{p['slug']}/</guid><pubDate>{datetime.date.fromisoformat(p['date']).strftime('%a, %d %b %Y')} {p.get('time', '07:00')}:00 +0200</pubDate><description>{esc(p['lead'])}</description></item>
""" for p in posts[:30])
    open(os.path.join(ROOT, "blog", "feed.xml"), "w", encoding="utf-8").write(f"""<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0"><channel>
  <title>Robert Ďurica – blog</title><link>{BASE}blog/</link><description>AI každý deň, po ľudsky.</description><language>sk</language>
{items}</channel></rss>
""")

def build_sitemap(posts):
    p = os.path.join(ROOT, "sitemap.xml"); s = open(p, encoding="utf-8").read()
    s = re.sub(r"\s*<url><loc>[^<]*/blog/[^<]*</loc>.*?</url>", "", s)
    add = f"\n  <url><loc>{BASE}blog/</loc><lastmod>{posts[0]['date'] if posts else ''}</lastmod><priority>0.7</priority></url>"
    add += "".join(f"\n  <url><loc>{BASE}blog/{q['slug']}/</loc><lastmod>{q['date']}</lastmod><priority>0.6</priority></url>" for q in posts)
    s = s.replace("\n</urlset>", add + "\n</urlset>")
    open(p, "w", encoding="utf-8").write(s)

def latest_teaser(posts):
    """Keeps the 'from the blog' block on the services page in sync: the newest 3 posts."""
    p = os.path.join(ROOT, "index.html"); s = open(p, encoding="utf-8").read()
    if not posts or "<!--latest-post-->" not in s: return
    cards = ""
    for n, q in enumerate(posts[:3]):
        cv = cover(q)
        img = f'<img class="lp-img" src="img/blog/{cv["sm"]}" width="800" height="450" loading="lazy" alt="">' if cv else ""
        tag = "Článok dňa" if n == 0 else sk_date(q["date"])
        cards += f"""<a class="latest-post{' first' if n == 0 else ''}"{' data-nosi' if q.get('nosi') else ''} href="blog/{q['slug']}/"><span class="lp-txt"><span class="label"><span class="dot" aria-hidden="true"></span> {tag}</span><b>{esc(q['title'])}</b><span class="lp-lead">{esc(q['lead'])}</span></span>{img}</a>"""
    block = f"""<!--latest-post--><div class="lp-grid">{cards}</div><p class="lp-all"><a class="btn" href="blog/">Všetky články →</a></p><!--/latest-post-->"""
    s = re.sub(r"<!--latest-post-->.*?<!--/latest-post-->", block, s, flags=re.S)
    open(p, "w", encoding="utf-8").write(s)

if __name__ == "__main__":
    posts = read_posts()
    slugs = [p["slug"] for p in posts]
    if len(set(slugs)) != len(slugs): raise SystemExit("duplicate slug")
    for i, p in enumerate(posts):
        build_post(p, posts[i-1] if i > 0 else None, posts[i+1] if i + 1 < len(posts) else None, posts)
    build_index(posts); build_feed(posts); build_sitemap(posts); latest_teaser(posts)
    print(f"built {len(posts)} posts")
