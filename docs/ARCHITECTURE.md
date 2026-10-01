# Architecture

> The map. Read this instead of crawling the repo.

## In one paragraph

A six-page Next.js site whose entire copy lives in one TypeScript object. `content/site.ts`
holds the name, the tabs (`nav`), each page's copy under its own key (`home`, `about`,
`research`, `instruments`, `journal`, `contributors`) and the journal entries; each route in
`app/` renders its key through a small set of shared components. There is no CMS, no database
and no API. Changing what the site says is editing one file.

## The tree

```
postphenom/
  site/                    the app. THE DEPLOY ROOT — vercel runs from here
    app/
      layout.tsx           fonts via next/font, metadata, Gate + Header + Footer round every page
      page.tsx             home: the title page, then work · now · journal · call
      about/ research/ instruments/ contributors/   one page.tsx each
      journal/page.tsx     the index; journal/[slug]/page.tsx renders one entry, statically
      globals.css          all styling. plain CSS custom properties, no Tailwind
      sitemap.ts           built from site.nav and site.journal.entries
      icon.svg             favicon, written by brand/generate-marks.py
    components/
      Header.tsx, Nav.tsx  the bar and its tabs (Nav is the one client component: active tab)
      Footer.tsx           the colophon
      PageHead.tsx         an inner page's title block
      Section.tsx          rule, small-capitals label column, body
      Rows.tsx             every list: meta, entry, link, between hairlines
      Contact.tsx          the altcha-guarded address
      Gate.tsx             the proof-of-work curtain
      Mark.tsx, marks.ts   the hand-drawn marks. MARK + GLYPH generated, the rest frozen
    content/
      site.ts              ALL COPY. the content layer
    public/                llms.txt, robots.txt
      figures.html         the six figures — standalone HTML, moved from paramv.com as-is
      figures/legend.html  Reading the Figures
      position.html        What You Study
      fonts/               Newsreader + Plex Mono .woff2 for those three pages only
  next.config.ts           rewrites /figures, /figures/legend, /position to those files
  brand/                   identity exploration. static HTML + SVG
    generate-marks.py      draws the unit into site/ — seeded, reproducible
    identity-round-{1..4}.html
    mark-{a,b,c,d,e}-*.svg
```

## Content flow

```
content/site.ts ──▶ app/<route>/page.tsx ──▶ PageHead + Section + Rows
       │
       ├──▶ Header/Nav (site.nav), Footer
       └──▶ layout.tsx metadata, sitemap.ts
```

A new journal entry is an object at the top of `site.journal.entries`; its page, the index,
the home section and the sitemap pick it up. A new section on a page is an entry under that
page's key and a `<Section>` in the route. A new tab is an item in `site.nav` and a route.

## Styling

`app/globals.css`, plain CSS custom properties. Light is defined on bare `:root`; dark
redefines only the five colours that change, under both the `prefers-color-scheme` query
(guarded as `:root:not([data-theme="light"])`) and `:root[data-theme="dark"]` so an explicit
choice wins either way.

Measure: `1120px` wrap, `32px` gutter, `200px` label column, `640px` paragraph measure,
`18px` body at `1.65`. Motion: one curve, `cubic-bezier(0.16, 1, 0.3, 1)`, 200ms for hover;
title blocks settle once on load; nothing on scroll. `docs/DESIGN.md` has the rest.

## Invariants

All copy in `content/site.ts`. Tokens on bare `:root` with dark as an override. No analytics,
no third-party scripts, no CDN. The hand-drawn marks keep their irregularity.

## Known sharp edges

**`site/` is the deploy root.** `vercel --prod` from the repo root ships nothing. The Vercel
link is `site/.vercel/project.json`; `project.json.oldteam` beside it is migration history.

**No Tailwind here**, unlike niwa and the other Next.js repos. Reaching for a utility class
out of habit produces a class that does nothing.

**The repo had no remote until 2026-09-19** and no root README. Both fixed; the absence is
recorded because it meant the site existed in exactly one place on one disk.
