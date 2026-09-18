# Architecture

> The map. Read this instead of crawling the repo.

## In one paragraph

A single-page Next.js site whose entire copy lives in one TypeScript object. `content/site.ts`
holds the name, tagline, navigation, and every section's kicker, lede and body paragraphs;
`app/page.tsx` renders them through a small set of presentational components. There is no CMS,
no database and no API. Changing what the site says is editing one file.

## The tree

```
postphenom/
  site/                    the app. THE DEPLOY ROOT — vercel runs from here
    app/
      page.tsx             the single page; renders sections from content/site.ts
      layout.tsx           fonts via next/font, metadata
      globals.css          all styling. plain CSS custom properties, no Tailwind
      sitemap.ts
      icon.svg
    components/
      Mark.tsx             renders the hand-drawn identity mark
      marks.ts             the mark path data
      Reveal.tsx           scroll reveal wrapper — 14px rise, one shared curve
    content/
      site.ts              ALL COPY. the content layer
    public/                llms.txt, robots.txt
  brand/                   identity exploration. static HTML + SVG, built by nothing
    identity-round-{1..4}.html
    mark-{a,b,c,d}-*.svg
```

## Content flow

```
content/site.ts  ──▶  app/page.tsx  ──▶  <section> per entry
       │                    │
       │                    └──▶ Reveal.tsx (scroll reveal)
       └──▶ layout.tsx metadata, sitemap.ts
```

Sections are data. A new one is an entry in `site.ts` plus a `nav` item — not a new component,
unless it needs a genuinely new shape.

## Styling

`app/globals.css`, plain CSS custom properties. Light is defined on bare `:root`; dark
redefines only the five colours that change, under both the `prefers-color-scheme` query
(guarded as `:root:not([data-theme="light"])`) and `:root[data-theme="dark"]` so an explicit
choice wins either way.

Measure: `1120px` wrap, `28px` gutter, `18px` body at `1.6`. Motion: one curve,
`cubic-bezier(0.16, 1, 0.3, 1)`, 200ms for hover and 260ms for reveals.

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
