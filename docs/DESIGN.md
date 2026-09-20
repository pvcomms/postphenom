# Design

Grammar and bans: `~/work/capp/spine/docs/DESIGN-SYSTEM.md`. Machine-readable values:
`~/work/capp/spine/docs/tokens.json` under `surfaces.postphenom`. This file is what is specific to
this site.

## Tokens

`site/app/globals.css` is the source of truth. The CAPP mirror is updated alongside any
change here.

| Token        | Light     | Dark      | Use                         |
| ------------ | --------- | --------- | --------------------------- |
| `--paper`    | `#F1F1EE` | `#12141A` | the ground                  |
| `--paper-2`  | `#E8E9E5` | `#1A1D25` | recessed panels             |
| `--ink`      | `#1E2436` | `#E6E4DC` | body text                   |
| `--graphite` | `#5D6270` | `#9A9EA6` | secondary text, mono labels |
| `--rule`     | `#D3D4CF` | `#2A2E36` | hairlines                   |

Light is defined on bare `:root`. Dark redefines only these five, in both the
`prefers-color-scheme` block (guarded as `:root:not([data-theme="light"])`) and
`:root[data-theme="dark"]`. No colour gets its only definition inside a media block.

## Type

| Face               | Role                                                                 |
| ------------------ | -------------------------------------------------------------------- |
| **Spectral**       | body and headings. 18px, 1.6 leading                                 |
| **IBM Plex Mono**  | the `.mono` class — 11px, `0.14em` tracking, uppercase, `--graphite` |
| **Homemade Apple** | the `.hand` class — the correction, used sparingly                   |

All three through `next/font`, self-hosted at build. The hand face is the identity's whole
gesture, so it appears once or twice per page and never as body copy.

## Measure and rhythm

`1120px` wrap, `28px` gutter, `56px` sticky nav with an 88%-opaque paper background and an
8px backdrop blur. 8px spacing rhythm.

## Motion

One curve: `cubic-bezier(0.16, 1, 0.3, 1)`. 200ms for hover transitions, 260ms for the nav
underline and the 14px scroll reveal (`--reveal-y`). `Reveal.tsx` owns the reveal; nothing
else animates on scroll.

## The marks

`brand/` holds four rounds of exploration and five candidates:

| File                         | Mark                     |
| ---------------------------- | ------------------------ |
| `mark-a-rendered-world.svg`  | the rendered world       |
| `mark-a-favicon.svg`         | favicon cut of the above |
| `mark-b-bracketed-world.svg` | the bracketed world      |
| `mark-c-relation.svg`        | the relation             |
| `mark-d-two-lives.svg`       | two lives                |

The live site renders from `site/components/marks.ts`. The paths are hand-drawn and carry
deliberate irregularity — do not regularise, re-path or optimise the wobble out of them. The
rejected candidates stay in the repo because they are the argument for the chosen one.

## Figma pins

> **Empty on purpose.** No Figma URL exists anywhere in this repo, so nothing is recorded
> here rather than something invented. Paste file and node links as screens are designed; an
> agent implementing one reads the pin plus the tokens above instead of guessing.

| Screen / section | Figma node | Notes |
| ---------------- | ---------- | ----- |
| Nav              | —          |       |
| Question         | —          |       |
| Method           | —          |       |
| Programme        | —          |       |
| Contribute       | —          |       |
| Papers           | —          |       |

## Accessibility floor

Focus is `2px solid var(--ink)` at `4px` offset on every link and button, and it is
load-bearing on a page that is almost entirely text and links. Body text holds 4.5:1 in both
themes. `--graphite` is for secondary text only; never put load-bearing copy in it.
