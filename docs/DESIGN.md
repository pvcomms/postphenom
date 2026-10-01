# Design

Grammar and bans: `~/work/capp/spine/docs/DESIGN-SYSTEM.md`. Machine-readable values:
`~/work/capp/spine/docs/tokens.json` under `surfaces.postphenom`. This file is what is specific to
this site.

## The site is six pages

Since 2 Oct 2026 the site is a small institutional site with tabs, modelled on the shape of
laurenleek.eu (a bar with the name on the left and tabs on the right, sectioned pages, a
columned footer) and set in this identity's type and rules. In order:

1. **The bar** (`components/Header.tsx`, `Nav.tsx`) — the glyph and the name in small capitals
   on the left, five tabs on the right: About · Research · Instruments · Journal ·
   Contributors. The open tab is underlined in `--ink`. Sticky on desktop, solid paper, one
   hairline; never blurred. Below `820px` the tabs drop under the name and wrap; below `640px`
   the bar is no longer sticky.
2. **Home** — the title page (the unit, the name in two lines with the correction, a short
   rule, the statement, a sentence on what the Center does, the imprint), then four sections:
   what the Center does · now · from the journal · call for accounts.
3. **Inner pages** — a title block (h1 and one sentence), then sections. A section is an
   `--ink` rule across the wrap, a small-capitals label in a `200px` left column, and the body
   on the right (`components/Section.tsx`).
4. **Rows** (`components/Rows.tsx`) — every list on the site: a small-capitals meta column,
   the entry, a small-capitals link at the right, separated by `--rule` hairlines. Rows with
   no meta or no link drop that column.
5. **Journal** — an index of dated rows and one page per entry at `/journal/<slug>`, set as an
   article: date, title, italic dek, an `--ink` rule, the body with its first line in small
   capitals.
6. **Colophon** — an `--ink` rule, the name and address, the pages, elsewhere; then the glyph,
   the year and the altcha credit.

What must not come back from before 25 Sep: blurred sticky product nav, mono uppercase
kickers, the 112px hero wordmark, the four-column steps grid, the arrow-icon button, scroll
reveals, and handwriting anywhere but the correction. Cards with shadows and pill tabs from
the reference site were not adopted either. The institution's voice is set type, rules, small
capitals and numerals.

## Tokens

`site/app/globals.css` is the source of truth. The CAPP mirror is updated alongside any
change here.

| Token        | Light     | Dark      | Use                         |
| ------------ | --------- | --------- | --------------------------- |
| `--paper`    | `#F1F1EE` | `#12141A` | the ground                  |
| `--paper-2`  | `#E8E9E5` | `#1A1D25` | recessed panels             |
| `--ink`      | `#1E2436` | `#E6E4DC` | body text                   |
| `--graphite` | `#5D6270` | `#9A9EA6` | secondary text, labels      |
| `--rule`     | `#D3D4CF` | `#2A2E36` | hairlines                   |
| `--vermillion` | `#B23A22` | `#E25A3E` | the one accent: the point in the mark, nothing else |

Light is defined on bare `:root`. Dark redefines only these six, in both the
`prefers-color-scheme` block (guarded as `:root:not([data-theme="light"])`) and
`:root[data-theme="dark"]`. No colour gets its only definition inside a media block.

## Type

| Face               | Role                                                                 |
| ------------------ | -------------------------------------------------------------------- |
| **Spectral**       | body and headings. 18px, 1.65 leading, old-style figures             |
| **Spectral SC**    | the `.caps` class — 13px, `0.1em` tracking. Labels, numerals, the tabs, row links, the button, table heads. Typed as prose: the face sets lowercase as small capitals, so no `text-transform` |
| **Homemade Apple** | the `.hand` class — the correction, once, in the title page          |

All three through `next/font`, self-hosted at build. IBM Plex Mono was dropped on 25 Sep: a
mono label is the first thing that reads as a product page. The hand face is the identity's
whole gesture and appears exactly once.

## Measure and rhythm

Wrap `1120px` with a `32px` gutter (`20px` below `640px`). Section label column `200px`,
`48px` off the body. Paragraphs hold a `640px` measure inside the body; rows run the full
body width with a `160px` meta column and a `96px` link column. Bar `64px`. Body 18px at 1.65
(17px below `640px`). Sections open `28px` under their rule and close `72px` above the next.
Below `900px` the label column folds above its section. 8px spacing rhythm.

## Motion

One curve: `cubic-bezier(0.16, 1, 0.3, 1)`. The home title page and each page's title block
settle once on load (staggered fade-up; on home the correction arrives last). Links move their
underline from `--rule` to `--ink` on hover, tabs from `--graphite` to `--ink`; hovering a row
underlines its title and its link. Nothing animates on scroll. All of it is inside
`prefers-reduced-motion: no-preference`.

## The marks

`brand/` holds four rounds of exploration and six candidates. The live one is the unit:

| File                         | Mark                     |
| ---------------------------- | ------------------------ |
| `mark-a-rendered-world.svg`  | the rendered world       |
| `mark-a-favicon.svg`         | favicon cut of the above |
| `mark-b-bracketed-world.svg` | the bracketed world      |
| `mark-c-relation.svg`        | the relation             |
| `mark-d-two-lives.svg`       | two lives                |
| `mark-e-the-unit.svg`        | **the unit** (live since 24 Sep 2026) |

The unit is two brush-drawn rings round one vermillion point: the horizon a platform draws,
the self shaped inside it, the unit of attention being sold. The inner ring sits off-centre on
purpose. Only the point ever takes colour; the rings never do. It appears at 88px on the home title
page and as the glyph in the bar and the colophon.

`brand/generate-marks.py` draws `MARK` and `GLYPH` into `site/components/marks.ts` and the
favicon into `site/app/icon.svg`, seeded, so a re-run reproduces the same wobble. The wordmark
pieces in the same file (`CARET`, `UNDERLINE`, `LOOP`, `RULE`) are frozen hand-drawn paths with
no generator; the script keeps them verbatim. The paths carry deliberate irregularity — do not
regularise, re-path or optimise the wobble out of them, and never redraw the mark clean: as a
geometric target it is generic. The rejected candidates stay in the repo because they are the
argument for the chosen one.

## Figma pins

> **Empty on purpose.** No Figma URL exists anywhere in this repo, so nothing is recorded
> here rather than something invented. Paste file and node links as screens are designed; an
> agent implementing one reads the pin plus the tokens above instead of guessing.

| Screen / section | Figma node | Notes |
| ---------------- | ---------- | ----- |
| Title page       | —          |       |
| Contents         | —          |       |
| Parts            | —          |       |
| Register         | —          |       |
| Colophon         | —          |       |

## Accessibility floor

Focus is `2px solid var(--ink)` at `4px` offset on every link and button, and it is
load-bearing on a page that is almost entirely text and links. Body text holds 4.5:1 in both
themes. `--graphite` is for labels and secondary text only; the trades, steps and programme
descriptions are set in `--ink`. The open tab carries `aria-current="page"`.
Each section is labelled by its small-capitals heading.
