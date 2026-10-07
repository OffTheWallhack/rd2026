#!/usr/bin/env python3
"""Builds the blog from blog/posts/*.html.

Each post file starts with a JSON header between <!--meta and -->:
  {"title": "...", "date": "2026-10-07", "slug": "...", "lead": "...", "tags": ["AI", "hry"],
   "sources": [["Forbes", "https://..."], ...]}
followed by the article body as plain HTML (<p>, <h2>, <ul>, <blockquote>).

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
    posts.sort(key=lambda p: (p["date"], p["slug"]), reverse=True)
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
<meta property="og:image" content="{base}img/og.jpg">
<meta property="og:url" content="{url}">
<meta property="og:type" content="{ogtype}">
<meta property="og:locale" content="sk_SK">
<meta name="twitter:card" content="summary_large_image">
<meta name="theme-color" content="#F5F5F2">
<meta name="author" content="Robert Ďurica">
<meta name="goatcounter" content="">
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
FOOT = """</main>
<footer class="foot">
  <div class="wrap">
    <p>Služby fakturuje 142 design, s. r. o., Holíčska 3049/5, 851 05 Bratislava · IČO 53389662</p>
    <p><a href="{rel}">Služby</a> · <a href="{rel}ochrana-udajov/">Ochrana údajov</a> · © 2026 Robert Ďurica</p>
  </div>
</footer>
<script src="{rel}assets/common.js"></script>
</body>
</html>
"""

def esc(s): return html.escape(s, quote=True)

def tags_html(p):
    return "".join(f'<span class="chip">{esc(t)}</span>' for t in p.get("tags", []))

def build_post(p, newer, older):
    url = f"{BASE}blog/{p['slug']}/"
    ld = {"@context": "https://schema.org", "@type": "BlogPosting", "headline": p["title"], "description": p["lead"],
          "datePublished": p["date"], "dateModified": p["date"], "inLanguage": "sk", "url": url,
          "author": {"@type": "Person", "name": "Robert Ďurica", "url": BASE + "kto-som/"},
          "publisher": {"@type": "Person", "name": "Robert Ďurica"}, "image": BASE + "img/og.jpg"}
    head = HEAD.format(title=esc(p["title"]) + " | Robert Ďurica", desc=esc(p["lead"]), url=url, ogtitle=esc(p["title"]),
                       base=BASE, ogtype="article", rel="../../",
                       ld='<script type="application/ld+json">' + json.dumps(ld, ensure_ascii=False) + "</script>")
    src = ""
    if p.get("sources"):
        src = '<aside class="sources"><p class="label">Zdroje</p><ul>' + "".join(
            f'<li><a href="{esc(u)}" target="_blank" rel="noopener">{esc(n)}</a></li>' for n, u in p["sources"]) + "</ul></aside>"
    nav = '<nav class="post-nav">'
    nav += f'<a href="../{older["slug"]}/"><span class="label">Starší</span>{esc(older["title"])}</a>' if older else "<span></span>"
    nav += f'<a class="nx" href="../{newer["slug"]}/"><span class="label">Novší</span>{esc(newer["title"])}</a>' if newer else "<span></span>"
    nav += "</nav>"
    body = f"""  <article class="post">
    <p class="label"><a href="../">Blog</a> · <time datetime="{p['date']}">{sk_date(p['date'])}</time></p>
    <h1>{esc(p['title'])}</h1>
    <p class="lead">{esc(p['lead'])}</p>
    <p class="tags">{tags_html(p)}</p>
    <div class="prose">
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
    out = os.path.join(ROOT, "blog", p["slug"]); os.makedirs(out, exist_ok=True)
    open(os.path.join(out, "index.html"), "w", encoding="utf-8").write(head + body + FOOT.format(rel="../../"))

def build_index(posts):
    url = BASE + "blog/"
    ld = {"@context": "https://schema.org", "@type": "Blog", "name": "Robert Ďurica – blog", "url": url, "inLanguage": "sk",
          "blogPost": [{"@type": "BlogPosting", "headline": p["title"], "datePublished": p["date"], "url": f"{url}{p['slug']}/"} for p in posts[:20]]}
    head = HEAD.format(title="Blog – AI každý deň | Robert Ďurica", desc="Každý deň jeden krátky článok o AI, automatizácii a tom, čo sa práve deje. Po ľudsky, bez odborných slov.",
                       url=url, ogtitle="Blog – AI každý deň", base=BASE, ogtype="blog", rel="../",
                       ld='<script type="application/ld+json">' + json.dumps(ld, ensure_ascii=False) + "</script>")
    items = "".join(f"""      <li><a href="{p['slug']}/"><time datetime="{p['date']}">{sk_date(p['date'])}</time><h2>{esc(p['title'])}</h2><p>{esc(p['lead'])}</p><span class="tags">{tags_html(p)}</span></a></li>
""" for p in posts)
    body = f"""  <header class="blog-head">
    <p class="label"><span class="dot" aria-hidden="true"></span> Blog · každý deň</p>
    <h1>AI každý deň.</h1>
    <p class="lead">Jeden krátky článok denne o tom, čo sa v AI práve deje, a čo to znamená pre teba. Po ľudsky, bez odborných slov.</p>
  </header>
  <ul class="post-list">
{items}  </ul>
"""
    open(os.path.join(ROOT, "blog", "index.html"), "w", encoding="utf-8").write(head + body + FOOT.format(rel="../"))

def build_feed(posts):
    items = "".join(f"""  <item><title>{esc(p['title'])}</title><link>{BASE}blog/{p['slug']}/</link><guid>{BASE}blog/{p['slug']}/</guid><pubDate>{datetime.date.fromisoformat(p['date']).strftime('%a, %d %b %Y')} 07:00:00 +0200</pubDate><description>{esc(p['lead'])}</description></item>
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
    """Keeps the 'latest article' card on the services page in sync."""
    p = os.path.join(ROOT, "index.html"); s = open(p, encoding="utf-8").read()
    if not posts or "<!--latest-post-->" not in s: return
    q = posts[0]
    card = f"""<!--latest-post--><a class="latest-post" href="blog/{q['slug']}/"><span class="label"><span class="dot" aria-hidden="true"></span> Článok dňa · {sk_date(q['date'])}</span><b>{esc(q['title'])}</b><span class="lp-lead">{esc(q['lead'])}</span><span class="lp-go">Čítať →</span></a><!--/latest-post-->"""
    s = re.sub(r"<!--latest-post-->.*?<!--/latest-post-->", card, s, flags=re.S)
    open(p, "w", encoding="utf-8").write(s)

if __name__ == "__main__":
    posts = read_posts()
    slugs = [p["slug"] for p in posts]
    if len(set(slugs)) != len(slugs): raise SystemExit("duplicate slug")
    for i, p in enumerate(posts):
        build_post(p, posts[i-1] if i > 0 else None, posts[i+1] if i + 1 < len(posts) else None)
    build_index(posts); build_feed(posts); build_sitemap(posts); latest_teaser(posts)
    print(f"built {len(posts)} posts")
