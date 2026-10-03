#!/usr/bin/env python3
"""Copy the hosted instruments from ~/work/capp/instruments into public/instruments/.

Which instruments are hosted is decided by content/site.ts: every built item whose href is
`/instruments/<slug>`. Each `<slug>/index.html` becomes `public/instruments/<slug>.html`, served
at /instruments/<slug> by the rewrite in next.config.ts. Their fonts are the ones already in
public/fonts/ (same files), reached through the /instruments/fonts rewrite. A local
`<script src="vendor/...">` is inlined, because the page is served one level up from its folder.

Run from site/:  python3 scripts/sync-instruments.py
"""

import pathlib
import re
import sys

SITE = pathlib.Path(__file__).resolve().parent.parent
SRC = pathlib.Path.home() / "work/capp/instruments"
OUT = SITE / "public/instruments"

slugs = re.findall(r'href: "/instruments/([a-z0-9-]+)"', (SITE / "content/site.ts").read_text())
if not slugs:
    sys.exit("no /instruments/<slug> hrefs in content/site.ts")

OUT.mkdir(exist_ok=True)
fonts = {p.name for p in (SITE / "public/fonts").glob("*.woff2")}


def inline(match: re.Match, folder: pathlib.Path) -> str:
    body = (folder / match.group(1)).read_text()
    return "<script>\n" + body.replace("</script", "<\\/script") + "\n</script>"


for slug in slugs:
    folder = SRC / slug
    html = (folder / "index.html").read_text()
    html = re.sub(r'<script src="(vendor/[^"]+)"></script>', lambda m: inline(m, folder), html)
    missing = set(re.findall(r"fonts/([\w.-]+\.woff2)", html)) - fonts
    if missing:
        sys.exit(f"{slug}: fonts not in public/fonts: {sorted(missing)}")
    (OUT / f"{slug}.html").write_text(html)
    print(f"{slug:24} -> public/instruments/{slug}.html")

stale = {p.stem for p in OUT.glob("*.html")} - set(slugs)
for s in sorted(stale):
    (OUT / f"{s}.html").unlink()
    print(f"{s:24} removed (no longer in site.ts)")
