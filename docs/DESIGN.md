# Design

Grammar and bans: `~/work/capp/spine/docs/DESIGN-SYSTEM.md`. Machine-readable values:
`~/work/capp/spine/docs/tokens.json` under `surfaces.postphenom`. This file is what is specific to
this site.

## The site is an institute's site

Since 2 Oct 2026 the site is set like the Center for Applied Rationality's (rationality.org):
a conventional research-institute site, not an editorial document. Param's verdict on the
serif-and-small-capitals version of the same day was that it still read as generated. The
grammar now:

1. **Header** (`components/Header.tsx`) — the lockup on the left (the unit, `CAPP` in heavy
   sans, the full name set small in two uppercase lines), six tabs in 17px sans, the open one
   in `--accent`, then a call to action behind a 2px accent rule. White, sticky, one soft
   shadow. Below `1120px` the call to action drops; below `920px` the tabs fold into a
   `<details>` menu that works without script and closes on navigation.
2. **Home** — a full-width hero image from the Center's own work (Terra Cognita's map) with a
   translucent white band carrying the tagline in two lines; then alternating white and grey
   bands: About beside the latest journal entries · Research with the Cohort Study card and a
   screenshot · Instruments with one featured card and a list · the record so far (three stat
   cards and where the work is published) · the call for accounts with a button.
3. **Inner pages** — a grey sub-navigation bar of in-page anchors, a bold page title, then
   bands. Each band opens with a large light heading (`.display`).
4. **Cards** (`.card`) — white, 3px radius, a soft shadow that deepens on hover. A card earns
   its box by holding a thing the reader can open: a study, a report, an instrument, an entry.
   Plain prose is never boxed.
5. **Journal** — a lead card and two side cards for the newest three, an archive list below;
   each entry is an article page with a crumb, title, date and dek.
6. **Footer** — the Center's one-line description and rights on the left, the address and the
   altcha credit in the middle, links on the right.

All images in `public/images/` are screenshots of the Center's own instruments and of Cohort
Study, taken with headless Chromium at 2x and cropped to the visual. No stock imagery.

## Tokens

`site/app/globals.css` is the source of truth. One light theme; there is no dark mode, as on
the institutions this site is modelled on. The CAPP mirror is updated alongside any change.

| Token           | Value     | Use                                                    |
| --------------- | --------- | ------------------------------------------------------ |
| `--white`       | `#FFFFFF` | page ground, cards                                     |
| `--band`        | `#F4F4F2` | alternate bands, the sub-navigation                    |
| `--ink`         | `#1E2436` | headings, the lockup                                   |
| `--text`        | `#3A4050` | body                                                   |
| `--muted`       | `#5D6270` | labels, tabs at rest, meta                             |
| `--rule`        | `#E2E3DF` | hairlines inside cards and lists                       |
| `--accent`      | `#B23A22` | links, the open tab, buttons. The vermillion of the mark's point |
| `--accent-deep` | `#8C2D1A` | hover on links and buttons                             |
| `--vermillion`  | `--accent` | the point of the inline marks; they read it by this name, so it must stay defined |

Shadows are `--shadow` and `--shadow-up`, mixed from `--ink`.

## Type

**Public Sans** for everything, through `next/font`, self-hosted at build. Weights: 300 for
the large section headings and lead paragraphs, 400 body, 500 to 600 card titles and labels,
700 page titles and the hero line, 800 the `CAPP` of the lockup. Labels that act as buttons or
card footers are 12 to 13px uppercase at `0.08em`. Spectral, Spectral SC and Homemade Apple
are no longer loaded; the figures pages keep their own fonts.

## Measure and rhythm

Container `1140px` with a `24px` gutter (`20px` below `680px`). Reading columns `680px`.
Header `76px` (`64px` on phones). Bands `72px` top and bottom (`52px` on phones). Body 17px at
1.65; leads 20px light. Grids are two columns at most, one below `680px`.

## Motion

Hover only: links change colour, cards deepen their shadow, card footers turn accent. 200ms
on `cubic-bezier(0.16, 1, 0.3, 1)`. Nothing animates on load or on scroll.

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
purpose. Only the point ever takes colour; the rings never do. It appears at 38px in the header
lockup and as the favicon.

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
| Header           | —          |       |
| Home             | —          |       |
| Inner page       | —          |       |
| Journal          | —          |       |
| Footer           | —          |       |

## Accessibility floor

Focus is `2px solid var(--ink)` at `4px` offset on every link, button and the menu toggle.
Body text and `--muted` both hold 4.5:1 on `--white` and `--band`; `--accent` holds 4.5:1 on
both. The open tab carries `aria-current="page"`. Each band is labelled by its heading. Every
image has alt text describing what the instrument shows.
