# Agents

Constellation-wide rules: `~/Code/spine/AGENTS.md`. Read it once, then this. The map is
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
`~/Code/spine/THESIS.md` — what this institution is for, when a copy decision is contested.

---

<!-- BEGIN:capp -->

## Constellation rules

This repo is part of the Center for Applied Post-Phenomenology constellation. These rules hold
here and in every sibling repo. This block is generated — edit `spine/KERNEL.md`, not this copy.

**Read this much, then stop.** This file, then `docs/ARCHITECTURE.md` for the map, then the one
feature spec you were given at `docs/features/NNN-slug.md`. Do not crawl the repo to get
oriented — the architecture doc exists so you do not have to. Do not open a fifth document
without a reason you could state. Token discipline is a product requirement here, not a
preference: a tool about attention that wastes yours is a joke.

**Local by default.** Personal data stays on the machine that made it. No telemetry, no
analytics, no error reporting to a third party, no fonts or scripts from a CDN, no usage pings.
If a feature needs the network it says so in its spec and names the host.

**Flat files are the database.** Markdown with YAML frontmatter for what a human writes, JSON
for what a program writes. No hosted database, no ORM, no migration framework.

**The tool never decides.** Nothing ranks a person's options for them, scores them against a
norm, or recommends. Instruments surface; people judge. If a spec asks for a recommendation
engine, it is out of scope — say so rather than building it.

**No dependency without a written reason** in `docs/DECISIONS.md`. Prefer the standard library.
Prefer thirty lines you can read.

**Three similar lines beat a premature abstraction.** Extract on the third repetition.

**Never invent a fact about the system.** If you need to know what deploys where or whether
something is live, check it. This whole structure exists because hand-written claims drifted
from reality while still reading as authoritative.

**Features** are `docs/features/NNN-slug.md` with frontmatter `status:` of `draft` / `next` /
`building` / `shipped` / `parked`. Acceptance checks are commands with expected output, never
adjectives. Mark `shipped` only when you ran them and they passed — and report the output. A
feature you could not finish stays `building` with a note on what blocked it. Never silently
narrow scope.

**Style.** Plain declarative prose, no emoji, no "comprehensive" or "seamlessly", no summary
paragraph restating what was just said. Code matches its neighbours. Commit subjects say what
changed and why it mattered.

**Before you finish**, run the repo's tests and typecheck, and say plainly what passed, what
failed, and what you did not do.

<!-- END:capp -->
