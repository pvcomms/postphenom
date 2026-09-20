# postphenom.com

The Center for Applied Postphenomenology — an independent research center studying how
technologically mediated life has changed language, perception, society, and what it takes to
be a person.

Live at **[postphenom.com](https://postphenom.com)**.

```bash
cd site && pnpm dev    # localhost:4748
```

## What is here

| Directory | What                                                                    |
| --------- | ----------------------------------------------------------------------- |
| `site/`   | the Next.js landing site. this is what deploys                          |
| `brand/`  | identity exploration — four rounds of HTML, five candidate marks as SVG |

## The content layer

Everything on the page that is words lives in `site/content/site.ts` — the question, the
method, the programme, the calls to contribute, the papers. Editing the site's text means
editing that one file and nothing else. The components render whatever is in it.

This is deliberate and it is the property to preserve: the site is editable without touching
a component, so writing a new section is writing, not engineering.

## The identity

Hand-drawn correction marks over set type — the institution marking its own copy. The
candidates live in `brand/` as SVG (`mark-a-rendered-world`, `mark-b-bracketed-world`,
`mark-c-relation`, `mark-d-two-lives`) with four rounds of exploration as HTML. The site
renders its mark from `site/components/marks.ts`.

## More

`AGENTS.md` for the agent contract. `docs/` for architecture, design pins and the feature
queue. The thesis this institution exists to advance is in `~/Code/spine/THESIS.md`.
