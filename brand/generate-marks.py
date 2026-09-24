#!/usr/bin/env python3
"""
Draws the postphenom marks and writes them into the site.

  MARK   the unit: two brush-drawn rings, the horizon and the self, round one vermillion
         point, the unit of attention. 240 box, spatter and all. Masthead and footer seal.
  GLYPH  the same three shapes with the spatter dropped and the strokes thickened, for the
         22px nav. The favicon is a bolder cut of the same on a paper tile.

Outputs
  site/components/marks.ts   MARK and GLYPH replaced. CARET, UNDERLINE, LOOP and RULE are
                             kept verbatim: frozen hand-drawn paths with no generator.
  site/app/icon.svg          favicon, colours fixed (no CSS variables in a file favicon)
  brand/mark-e-the-unit.svg  the candidate, for the record

Deterministic: every random choice is seeded, so a re-run reproduces the same wobble.
"""
import math
import random
import re
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
MARKS_TS = ROOT / "site/components/marks.ts"
ICON_SVG = ROOT / "site/app/icon.svg"
CANDIDATE = ROOT / "brand/mark-e-the-unit.svg"

INK = "#1E2436"
PAPER = "#F1F1EE"
VERMILLION = "#B23A22"
LABEL = "Two rings round a red point: the horizon, the self, and the unit of attention"


def f(v):
    return f"{v:.1f}"


def polygon(pts, fill):
    d = "M" + " L".join(f"{f(x)},{f(y)}" for x, y in pts) + " Z"
    return f'<path d="{d}" fill="{fill}"/>'


def ring(cx, cy, r, w, seed, fill, start=104, overlap=14, wobble=1.0, drift=1.3, n=220, pressure=1.0, taper=(0.45, 0.2)):
    """One brush stroke round a circle. Starts thin at `start` degrees, goes once round plus
    `overlap` degrees, drifts outward by `drift` so the tail crosses the head, and tapers off.
    `pressure` scales the width variation along the stroke; `taper` is the head and tail width
    as a fraction of full. Small cuts want less of both, or the stroke reads as lumps."""
    rnd = random.Random(seed)
    freqs = (2, 3, 5, 8)
    amps = tuple(wobble * a for a in (1.6, 1.0, 0.6, 0.35))
    phases = [rnd.uniform(0, math.tau) for _ in freqs]
    press = [rnd.uniform(0, math.tau) for _ in range(2)]
    a0 = math.radians(start)
    span = math.radians(360 + overlap)
    outer, inner = [], []
    for i in range(n + 1):
        u = i / n
        a = a0 + u * span
        rr = r + drift * u + rnd.uniform(-0.2, 0.2) * wobble
        rr += sum(A * math.sin(k * a + p) for A, k, p in zip(amps, freqs, phases))
        ww = w * (1 + pressure * (0.22 * math.sin(2 * a + press[0]) + 0.12 * math.sin(5 * a + press[1])))
        head = min(1.0, u / 0.035)
        tail = min(1.0, (1 - u) / 0.07)
        ww *= (taper[0] + (1 - taper[0]) * head) * (taper[1] + (1 - taper[1]) * tail)
        ca, sa = math.cos(a), math.sin(a)
        outer.append((cx + (rr + ww / 2) * ca, cy + (rr + ww / 2) * sa))
        inner.append((cx + (rr - ww / 2) * ca, cy + (rr - ww / 2) * sa))
    return polygon(outer + inner[::-1], fill)


def blob(cx, cy, r, seed, fill, n=48):
    """The point. A dot put down by hand is never a circle."""
    rnd = random.Random(seed)
    ph = [rnd.uniform(0, math.tau) for _ in range(3)]
    pts = []
    for i in range(n):
        a = i / n * math.tau
        rr = r * (1 + 0.07 * math.sin(3 * a + ph[0]) + 0.05 * math.sin(5 * a + ph[1]) + 0.03 * math.sin(9 * a + ph[2]))
        pts.append((cx + rr * math.cos(a), cy + rr * math.sin(a)))
    return polygon(pts, fill)


def speck(rnd, x, y, fill, lo=0.5, hi=1.6):
    rx = rnd.uniform(lo, hi)
    ry = rx * rnd.uniform(0.65, 1.0)
    rot = rnd.randint(0, 179)
    return f'<ellipse cx="{f(x)}" cy="{f(y)}" rx="{f(rx)}" ry="{f(ry)}" transform="rotate({rot} {f(x)} {f(y)})" fill="{fill}"/>'


def spatter(cx, cy, r, w, count, seed, fill, spread=6.0):
    """Specks thrown off a ring: gaussian distance from the line, never on it."""
    rnd = random.Random(seed)
    out = []
    clear = w / 2 + 0.9
    for _ in range(count):
        a = rnd.uniform(0, math.tau)
        off = rnd.gauss(0, spread)
        if abs(off) < clear:
            off = math.copysign(clear + abs(rnd.gauss(0, 1.2)), off or 1)
        out.append(speck(rnd, cx + (r + off) * math.cos(a), cy + (r + off) * math.sin(a), fill))
    return out


def pools(cx, cy, r, w, seed, fill, angles=(212, 128, 20), each=6):
    """Where the pen paused: small dense clusters of heavier specks just off the outer ring."""
    rnd = random.Random(seed)
    out = []
    for deg in angles:
        a = math.radians(deg)
        for _ in range(each):
            off = w / 2 + 1.2 + abs(rnd.gauss(0, 2.2))
            da = rnd.gauss(0, 0.05)
            out.append(speck(rnd, cx + (r + off) * math.cos(a + da), cy + (r + off) * math.sin(a + da), fill, 0.7, 2.2))
    return out


def strays(count, seed, fill, outer, inner, dot):
    """A few flecks anywhere on the sheet, kept off the lines and the point."""
    rnd = random.Random(seed)
    (ocx, ocy, orad), (icx, icy, irad), (dx, dy, dr) = outer, inner, dot
    out = []
    while len(out) < count:
        a = rnd.uniform(0, math.tau)
        d = orad * 1.08 * math.sqrt(rnd.uniform(0, 1))
        x, y = ocx + d * math.cos(a), ocy + d * math.sin(a)
        if abs(math.hypot(x - ocx, y - ocy) - orad) < 6:
            continue
        if abs(math.hypot(x - icx, y - icy) - irad) < 5:
            continue
        if math.hypot(x - dx, y - dy) < dr + 6:
            continue
        out.append(speck(rnd, x, y, fill, 0.4, 1.4))
    return out


def the_unit(ink, red):
    """Full mark, 240 box."""
    ocx, ocy, orad, ow = 120, 122, 90, 5.6
    icx, icy, irad, iw = 131, 107, 38, 4.4
    dot = 4.8
    parts = [
        ring(ocx, ocy, orad, ow, 11, ink),
        ring(icx, icy, irad, iw, 23, ink, start=126, overlap=12, wobble=0.45, drift=0.8, n=160),
    ]
    parts += spatter(ocx, ocy, orad, ow, 46, 31, ink, 6.5)
    parts += spatter(icx, icy, irad, iw, 16, 37, ink, 4.5)
    parts += pools(ocx, ocy, orad, ow, 41, ink)
    parts += strays(9, 47, ink, (ocx, ocy, orad), (icx, icy, irad), (icx, icy, dot))
    parts.append(blob(icx, icy, dot, 53, red))
    return "".join(parts)


def the_glyph(ink, red, bold=1.0):
    """Small cut, 100 box: no spatter, thicker strokes, bigger point."""
    ocx, ocy, orad, ow = 50, 51, 40, 7.5 * bold
    icx, icy, irad, iw = 54.7, 44, 17.5, 5.2 * bold
    dot = 5.2 * bold
    return "".join([
        ring(ocx, ocy, orad, ow, 11, ink, overlap=8, wobble=0.5, drift=0.9, n=140, pressure=0.5, taper=(0.7, 0.5)),
        ring(icx, icy, irad, iw, 23, ink, start=126, overlap=6, wobble=0.22, drift=0.5, n=100, pressure=0.5, taper=(0.7, 0.5)),
        blob(icx, icy, dot, 53, red, n=32),
    ])


def svg(inner, box, label=None):
    a11y = f'role="img" aria-label="{label}"' if label else 'aria-hidden="true"'
    return f'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 {box} {box}" {a11y}>{inner}</svg>'


def main():
    mark = svg(the_unit("currentColor", "var(--vermillion)"), 240, LABEL)
    glyph = svg(the_glyph("currentColor", "var(--vermillion)"), 100)

    src = MARKS_TS.read_text()
    for name, value in (("MARK", mark), ("GLYPH", glyph)):
        pattern = re.compile(rf"^export const {name} = '.*';$", re.M)
        assert len(pattern.findall(src)) == 1, f"{name} not found exactly once"
        src = pattern.sub(lambda m, v=value, n=name: f"export const {n} = '{v}';", src)
    MARKS_TS.write_text(src)

    tile = f'<rect width="100" height="100" rx="20" fill="{PAPER}"/>'
    ICON_SVG.write_text(svg(tile + the_glyph(INK, VERMILLION, bold=1.15), 100) + "\n")
    CANDIDATE.write_text(svg(the_unit(INK, VERMILLION), 240, LABEL) + "\n")
    print(f"marks.ts {MARKS_TS.stat().st_size} B · icon.svg {ICON_SVG.stat().st_size} B · candidate {CANDIDATE.stat().st_size} B")


if __name__ == "__main__":
    main()
