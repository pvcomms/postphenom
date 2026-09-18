# Agents

Constellation-wide rules: `~/Code/cfap/AGENTS.md`. Read it once, then this. The map is
`docs/ARCHITECTURE.md`.

## Shape

Two directories, one git repo. **`site/` is the app and the deploy root** — the Vercel link
lives at `site/.vercel`, not at the repo root. `brand/` is identity exploration, static HTML
and SVG, built by nothing.

## Stack

Next.js 16 (App Router) · React 19 · TypeScript · pnpm. Plain CSS in `app/globals.css` with
custom properties — **no Tailwind in this repo**, unlike the others. Fonts via `next/font`:
Spectral for body, IBM Plex Mono for meta, Homemade Apple for the hand.

## Commands

```bash
cd site
pnpm dev      # localhost:4748
pnpm build    # next build
vercel --prod --yes    # from site/, not the repo root
```

## Invariants

**Copy lives in `content/site.ts`.** Every word on the page comes from that file. Never
hardcode user-visible text into a component — the whole point is that the site is editable by
writing, not by editing JSX. A new section means a new entry in `site.ts` and a component that
renders it generically.

**Themes are tokens.** The full palette is on bare `:root`; dark redefines only what changes,
under both `@media (prefers-color-scheme: dark)` guarded as `:root:not([data-theme="light"])`
and `:root[data-theme="dark"]`, so an explicit toggle wins in both directions. Never give a
colour its only definition inside a media block.

**No analytics, no third-party scripts, no CDN.** Fonts through `next/font`, self-hosted at
build.

**The marks are hand-drawn.** They are SVG paths with deliberate irregularity. Do not
regularise, re-path or "clean up" a mark; the wobble is the identity.

## Traps

**Deploying from the repo root ships nothing.** `cd site` first.

**`.vercel/project.json.oldteam` exists in `site/`** — a leftover from the team migration. The
live link is `project.json`; the `.oldteam` file is history and is not read by anything.

**Focus styles are `2px solid var(--ink)` at `4px` offset** and are load-bearing on a text-
heavy site. Do not remove them chasing a visual.

## Where the rest is

`docs/ARCHITECTURE.md` — the map. `docs/DESIGN.md` — tokens and Figma pins.
`~/Code/cfap/THESIS.md` — what this institution is for, when a copy decision is contested.
