# Design

Grammar and bans: `~/work/capp/spine/docs/DESIGN-SYSTEM.md`. Machine-readable values:
`~/work/capp/spine/docs/tokens.json` under `surfaces.postphenom`. This file is what is specific to
this site.

## The page is a document

Since 25 Sep 2026 the site is set as a printed prospectus, not a landing page. In order:

1. **Title page** — the unit, the name in two lines (small capitals, then the correction), a
   short rule, the statement of purpose, the imprint line.
2. **Contents** — six numbered entries. This is the primary navigation.
3. **Parts I–VI** — each opens with a rule across the column, a `§` numeral and its title.
   The question · Method · Programme · Call for accounts · Working papers · On the name.
4. **Colophon** — glyph, name, address, year.

A **running head** (`components/RunningHead.tsx`) slides in once the title page has scrolled
off: the institution's name on the left, the parts on the right with the one being read
underlined. It is hidden, not merely transparent, while the title page is on screen.

What was removed and must not come back: the sticky blurred product nav, mono uppercase
kickers, the 112px hero wordmark, the four-column steps grid, the arrow-icon button, scroll
reveals, and handwriting anywhere but the correction. Those were the tells of a generated
landing page. The institution's voice is set type, rules, small capitals and numerals.

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
| **Spectral SC**    | the `.caps` class — 13px, `0.1em` tracking. Labels, numerals, the running head, the button, table heads. Typed as prose: the face sets lowercase as small capitals, so no `text-transform` |
| **Homemade Apple** | the `.hand` class — the correction, once, in the title page          |

All three through `next/font`, self-hosted at build. IBM Plex Mono was dropped on 25 Sep: a
mono label is the first thing that reads as a product page. The hand face is the identity's
whole gesture and appears exactly once.

## Measure and rhythm

Text column `620px`, centred. Margin notes (`.notes`) `240px` wide, `40px` off the column,
on the right; the grid has a matching empty column on the left so the text stays centred on
the page. Below `1240px` the notes fall in line under the text, ruled off. Below `640px` the
body drops to 17px and the gutter to 20px. Running head `48px`, solid paper, one hairline.
8px spacing rhythm; parts open `104px` apart.

## Motion

One curve: `cubic-bezier(0.16, 1, 0.3, 1)`. The title page settles once on load (staggered
fade-up, the correction arriving last). The running head slides in over 360ms. Links move
their underline from `--rule` to `--ink` on hover. Nothing animates on scroll. All of it is
inside `prefers-reduced-motion: no-preference`.

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
purpose. Only the point ever takes colour; the rings never do. It appears at 96px on the title
page and as the 30px glyph in the colophon.

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
descriptions are set in `--ink`. The running head's links are unfocusable while it is hidden.
Each part is a `section` labelled by its heading.
