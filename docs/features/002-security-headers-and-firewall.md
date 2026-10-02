---
title: Security headers, a CSP and a firewall
status: shipped
created: 2026-10-02
---

# 002 — Security headers, a CSP and a firewall

## Why

postphenom.com answered with HSTS and no other protective header, `access-control-allow-origin: *`
on every response, a critical advisory against its Next version, and no firewall rules. Any
page could be framed, any inline script it carried would run unchallenged, and a scanner or a
scraper could hit it as fast as the edge would serve.

The tool never decides, and this does not change that: it limits what the site can be made to
do, and what can be made to it.

## What changes

- Before: HSTS only. After: HSTS with `includeSubDomains; preload`, a CSP naming only `'self'`,
  `nosniff`, `DENY` framing, `same-origin` referrers, a closed Permissions-Policy, COOP and CORP.
- Before: CORS `*`. After: pinned to `https://postphenom.com`.
- Before: Next 16.3.4. After: 16.3.8, `pnpm audit` clean.
- Before: the framework's 404. After: one in the site's own chrome.
- New: Vercel's Bot Protection challenges non-browser clients (browsers pass unseen); a first-in-line
  rule exempts `robots.txt`, `sitemap.xml`, `llms.txt` and `security.txt`.
- Before: no firewall. After: probes for paths this site lacks get 403; one IP is limited to
  300 requests a minute (the rule is active; it has not been seen to fire, see Notes).
- New: `/.well-known/security.txt`.

## Where

| File                                | Change                                                      |
| ----------------------------------- | ----------------------------------------------------------- |
| `site/next.config.ts`               | headers, CSP, altcha stylesheet hash                        |
| `site/app/not-found.tsx`            | new. the 404                                                |
| `site/content/site.ts`              | `notFound` copy                                             |
| `site/app/layout.tsx`               | JSON-LD escapes `<`                                         |
| `site/public/.well-known/security.txt` | new                                                      |
| `site/package.json`, lockfile       | next 16.3.4 → 16.3.8                                        |
| Vercel firewall (not in the repo)   | two custom rules, published with `vercel firewall publish`  |

## Out of scope

No nonce-based CSP (it makes every page dynamic). No CSP reporting endpoint (telemetry). No
third-party CAPTCHA or WAF. No change to `robots.txt`, which welcomes the AI crawlers on purpose.
No DNS changes: the zone is at Wix, and CAA, SPF and DMARC records are added there by hand.
No submission to the HSTS preload list.

## Acceptance checks

```bash
cd site && pnpm audit                                         # No known vulnerabilities found
cd site && pnpm build                                         # compiles, 15 static pages
curl -sI https://postphenom.com/ | grep -ci content-security-policy   # 1
curl -sI https://postphenom.com/ | grep -i access-control-allow-origin # https://postphenom.com
curl -sI https://postphenom.com/ | grep -i x-frame-options             # DENY
curl -s -o /dev/null -w "%{http_code}\n" https://postphenom.com/wp-login.php            # 403
curl -s -o /dev/null -w "%{http_code}\n" https://postphenom.com/.well-known/security.txt # 200
vercel firewall overview                                      # two rules, no pending draft
```

- [x] A fresh browser tab on `/`, `/contributors`, `/figures`, `/figures/legend`, `/position` and
      a 404 shows no `Content Security Policy` error in the console
- [x] On `/contributors`, `document.querySelector('altcha-widget[data-obfuscated]').verify()`
      reaches `verified` and the `mailto:` link appears

## Notes

Run on production on 2 Oct 2026, after the deploy and `vercel firewall publish`:

- `pnpm audit`: No known vulnerabilities found. `pnpm build`: compiles, 15 static pages.
- Live headers on `/`, `/figures`, `/about` and a 404: one CSP, CORS pinned to
  `https://postphenom.com`, `X-Frame-Options: DENY`, HSTS, `nosniff`, `same-origin` referrers.
- `/wp-login.php`, `/.env`, `/.git/config`, `/xmlrpc.php`, `/index.php`: 403.
  `/.well-known/security.txt` and `/vendor/altcha/altcha.min.js`: 200.
- `vercel firewall overview`: 2 active rules, no pending draft.
- In a real browser, `/`, `/contributors`, `/figures`, `/figures/legend`, `/position` and a journal
  entry showed no console errors; the gate cleared and the address revealed with no CSP violation.

**Bot Protection, added later the same day.** Real browser: pages load with no checkpoint. Plain
`curl`, `curl` with a browser User-Agent and a spoofed Googlebot header: 429, `x-vercel-mitigated:
challenge`. The four exempt files return 200 to plain `curl`. A real Googlebot and the AI crawlers
were not tested; see DECISIONS.

**Not observed: the 429.** Two bursts of 340 requests from one IP were met by Vercel's automatic
mitigation (`x-vercel-mitigated: challenge`, a `system-action` with no rule id) before the 300-a-minute
rule could count to 300, and the challenge then held that IP for about ten minutes. So the rule
is configured and enabled (`vercel firewall rules inspect "Rate limit per IP"`) but its 429 has not
been seen. Vercel's own mitigation sits in front of it for fast floods; the rule is for slower,
sustained scraping. Do not repeat the burst test from a machine you need to browse from.
