---
title: The Substack on the homepage and in the tabs
status: building
created: 2026-10-02
---

# 003 — The Substack on the homepage and in the tabs

## Why

The Center writes on a Substack, and the site gave no way to get there and no sign of what was
newest. A reader who wants the writing had to know the address.

This reads a feed and ranks nothing: the posts are listed newest first, as Substack publishes
them, with no selection by the site.

## What changes

- Before: no Substack anywhere. After: a "Substack" tab in the top row, a "Latest posts" section
  on the homepage with the five newest titles as links, and a "Read the Substack" link.
- Network: this is the one thing the site fetches from another host. Host:
  `postphenom.substack.com`, path `/feed`. The server fetches it at build and at most hourly;
  the reader's browser never contacts it until a link is clicked.

## Where

| File                     | Change                                                       |
| ------------------------ | ------------------------------------------------------------ |
| `site/content/site.ts`   | `substack` block and the "Substack" nav item                 |
| `site/lib/substack.ts`   | new. reads and parses the feed                               |
| `site/app/page.tsx`      | the "Latest posts" band; revalidates hourly                  |
| `site/components/Nav.tsx`| a tab whose address leaves the site is a plain link          |
| `site/app/sitemap.ts`    | internal pages only                                          |

## Out of scope

No client-side fetch, no embed, no Substack script or subscribe widget. No excerpts or dates: the
site is headings and links. No change to the CSP.

## Acceptance checks

```bash
curl -s https://postphenom.com/ | grep -c "Latest posts"                          # 2 (page and its data)
curl -s https://postphenom.com/ | grep -o 'href="https://postphenom.substack.com"' | sort -u   # one line
curl -s https://postphenom.com/sitemap.xml | grep -c substack                      # 0
curl -sI https://postphenom.com/ | grep -i content-security-policy | grep -c "connect-src 'self'"  # 1
```

- [ ] Once the Substack has a post, it appears under "Latest posts" within an hour of publishing,
      as a link to that post

## Notes

The parser was exercised on a sample feed: entities decoded, off-site and `javascript:` links
dropped, a failed fetch gives an empty list. The live feed has no posts yet, so a real post has not
been seen to appear. Stays `building` until it has.
