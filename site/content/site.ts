// Everything editable on the site lives here. Components render whatever is in it.
// Six pages, one key each (home, about, research, instruments, journal, contributors). The header
// tabs are `nav`; journal entries are `journal.entries`, newest first. Adding an entry is adding an
// object to an array. The site is headings, links and buttons only: the prose was cut on 2 Oct 2026
// (docs/DECISIONS.md), and git has it.
const substackUrl = "https://postphenom.substack.com";

export const site = {
  name: "The Center for Applied Postphenomenology",
  short: "CAPP",
  domain: "postphenom.com",
  url: "https://postphenom.com",
  // The address is never written into the page. `contact` is the anti-harvest form shown as text;
  // `contactPayload` is the mailto AES-encrypted by altcha, opened by a proof-of-work in the reader's
  // browser. Regenerate with: npx altcha-lib obfuscate "mailto:<address>?subject=<subject>"
  contact: "postphenom (at) proton dot me",
  contactPayload:
    "eyJwYXJhbWV0ZXJzIjp7ImFsZ29yaXRobSI6IlBCS0RGMi9TSEEtMjU2IiwiY29zdCI6NTAwMCwia2V5TGVuZ3RoIjozMiwia2V5UHJlZml4IjoiOGM1MDYzNDQ5N2YwNWEzNzFlZGNhMzU5MTI2NDFmNjciLCJub25jZSI6IjRiNTZhY2FjZGU5Mzc2NWNiMzNjYWRiZmE1Y2FlZDVkIiwic2FsdCI6IjVmMjY0OWRkMTA1YmRkNjllOGQyYmE3YjBlODlmMGFjIn0sImNpcGhlciI6eyJpdiI6ImQ5ZWY0NWNhMjJhNGI4NmE0ZWYwMTUzNCIsImRhdGEiOiJkMGM1MThlNGZlNmE1NzA3MDQ0YmRiZWM4MGQ0YmYwZTA0YmI1OTdiNWQ4N2ZhNmE2MTEzZmZmZTg1YzNmYTBmYTIzOGZhODk0MGI1NWZmM2I4OWM1MmYzMzA5MDEwZGU2MjRkMzFjNjgyZDhhNDQ2YTQzYmIyODJlYzIxMmEwOCJ9fQ==",
  founded: "2026",
  tagline: "Examining how the algorithm mediates, and exacerbates, the polycrisis.",
  description:
    "An independent research center collecting first-person accounts of life before and after the screen, to study how technologically mediated life has changed language, perception, society and what it means to be human.",
  // Shown only in link previews (Open Graph), not on any page.
  ogImage: "/images/hero-terra-cognita.jpg",

  // The logo lockup: the mark, the short name, and the full name set small in two lines.
  lockup: { lines: ["Center for Applied", "Postphenomenology"] },

  nav: [
    { title: "Home", href: "/" },
    { title: "About", href: "/about" },
    { title: "Research", href: "/research" },
    { title: "Instruments", href: "/instruments" },
    { title: "Journal", href: "/journal" },
    { title: "Contributors", href: "/contributors" },
    { title: "Substack", href: substackUrl },
  ],
  substack: {
    title: "Substack",
    url: substackUrl,
    feed: `${substackUrl}/feed`,
    latest: "Latest posts",
    all: "Read the Substack",
  },
  cta: { title: "Send an account", href: "/contributors#contribute" },
  menu: "Menu",

  home: {
    about: { title: "About", link: { title: "Read about the Center", href: "/about" } },
    journal: { title: "Journal", all: { title: "All journal entries", href: "/journal" } },
    research: {
      title: "Research",
      card: { title: "Cohort Study", link: { title: "See the panel", href: "https://cohortstudy.co" } },
      after: { title: "Contribute to Cohort Study", href: "https://cohortstudy.co/contribute" },
    },
    instruments: { title: "Instruments", all: { title: "All instruments", href: "/instruments" } },
    record: {
      title: "The record so far",
      where: {
        title: "Where the work is published",
        items: [
          { title: "postphenom.com", href: "/research" },
          { title: "cohortstudy.co", href: "https://cohortstudy.co" },
          { title: "github.com/pvcomms", href: "https://github.com/pvcomms" },
        ],
      },
    },
    call: { title: "Call for accounts", cta: "Send your account" },
  },

  about: {
    title: "About",
    sub: [
      { title: "Mission", href: "#mission" },
      { title: "How the Center works", href: "#principles" },
      { title: "Applied Interventions", href: "#programme" },
      { title: "What is Applied Post Phenomenology", href: "#name" },
    ],
    mission: {
      id: "mission",
      title: "Mission",
      trades: "What was traded",
      example: "A small example",
    },
    principles: {
      id: "principles",
      title: "How the Center works",
      items: ["Local by default", "The tool never decides", "Published in full", "Negative results count"],
    },
    programme: {
      id: "programme",
      title: "Applied Interventions",
      levels: ["Personal", "Institutional", "Societal", "After scarcity"],
    },
    name: { id: "name", title: "What is Applied Post Phenomenology" },
  },

  research: {
    title: "Research",
    sub: [
      { title: "Method", href: "#method" },
      { title: "Cohort Study", href: "#cohort" },
      { title: "Working papers", href: "#papers" },
      { title: "Technical reports", href: "#reports" },
    ],
    method: { id: "method", title: "Method", steps: ["Collect", "Compare", "Hypothesise", "Publish"] },
    cohort: { id: "cohort", title: "Cohort Study", link: { title: "Open Cohort Study", href: "https://cohortstudy.co" } },
    papers: {
      id: "papers",
      title: "Working papers",
      items: [
        "On the vocabulary of mediated distance",
        "Digital-first: norms learned online, applied offline",
        "The canyon method",
        "Thinking cap, no zap",
      ],
    },
    reports: {
      id: "reports",
      title: "Technical reports",
      link: "Read on GitHub",
      items: [
        { title: "Auditing my own evals", repo: "pvcomms/auditing-my-own-evals" },
        { title: "CMCHP", repo: "pvcomms/cmchp" },
        { title: "Tool selection under load", repo: "pvcomms/tool-selection-under-load" },
        { title: "Error bars", repo: "pvcomms/error-bars" },
        { title: "BONP", repo: "pvcomms/bonp" },
        { title: "MCP fleet", repo: "pvcomms/mcp-fleet" },
      ],
    },
  },

  instruments: {
    title: "Instruments",
    sub: [
      { title: "Built", href: "#built" },
      { title: "The figures", href: "#figures" },
      { title: "Named, not yet built", href: "#named" },
      { title: "House rules", href: "#rules" },
    ],
    built: {
      id: "built",
      title: "Built",
      items: [
        { slug: "half-second", title: "The Half-Second", href: "/instruments/half-second", link: "Open" },
        { slug: "familiar-voice", title: "The Familiar Voice", href: "/instruments/familiar-voice", link: "Open" },
        { slug: "stop-flowing", title: "Stop Flowing", href: "/instruments/stop-flowing", link: "Open" },
        { slug: "terra-cognita", title: "Terra Cognita", href: "https://terra-cognita.vercel.app", link: "Open" },
        { slug: "chronology", title: "Chronology", href: "/instruments/chronology", link: "Open" },
        { slug: "venn", title: "Venn", href: "https://interactive-venn-template.vercel.app", link: "Open" },
        { slug: "catalogue", title: "Catalogue", href: "/instruments/catalogue", link: "Open" },
        { slug: "bearing", title: "Bearing", href: "/instruments/bearing", link: "Open" },
        { slug: "distribution", title: "Distribution", href: "/instruments/distribution", link: "Open" },
        { slug: "flow", title: "Flow", href: "/instruments/flow", link: "Open" },
        { slug: "course", title: "Course", href: "/instruments/course", link: "Open" },
        { slug: "alarm", title: "Alarm", href: "/instruments/alarm", link: "Open" },
        { slug: "way", title: "Way", href: "/instruments/way", link: "Open" },
        { slug: "margin", title: "Margin", href: "/instruments/margin", link: "Open" },
        { slug: "provenance", title: "Provenance", href: "/instruments/provenance", link: "Open" },
        { slug: "oblique", title: "Oblique", href: "/instruments/oblique", link: "Open" },
        { slug: "dialogue", title: "Dialogue", href: "/instruments/dialogue", link: "Open" },
        { slug: "mask", title: "Mask", href: "/instruments/mask", link: "Open" },
        { slug: "tack", title: "Tack", href: "/instruments/tack", link: "Open" },
        { slug: "sieve", title: "The Sieve", href: "/instruments/sieve", link: "Open" },
        { slug: "wish", title: "Wish", href: "/instruments/wish", link: "Open" },
        { slug: "break", title: "Break", href: "/instruments/break", link: "Open" },
        { slug: "overview", title: "Overview", href: "/instruments/overview", link: "Open" },
        { slug: "fence", title: "Fence", href: "/instruments/fence", link: "Open" },
        { slug: "muster", title: "Muster", href: "/instruments/muster", link: "Open" },
        { slug: "botec", title: "Botec", href: "/instruments/botec", link: "Open" },
        { slug: "act", title: "Act", href: "/instruments/act", link: "Open" },
        { slug: "crowd", title: "Crowd", href: "/instruments/crowd", link: "Open" },
        { slug: "canon", title: "Canon", href: "/instruments/canon", link: "Open" },
        { slug: "panel", title: "Panel", href: "/instruments/panel", link: "Open" },
        { slug: "slice", title: "Slice", href: "/instruments/slice", link: "Open" },
        { slug: "toll", title: "Toll", href: "/instruments/toll", link: "Open" },
        { slug: "unison", title: "Unison", href: "/instruments/unison", link: "Open" },
        { slug: "spine", title: "Spine", href: "/instruments/spine", link: "Open" },
        { slug: "circuits", title: "Circuits", href: "/instruments/circuits", link: "Open" },
        { slug: "real-ideal", title: "Real, Ideal", href: "/instruments/real-ideal", link: "Open" },
        { slug: "attention", title: "Attention", href: "/instruments/attention", link: "Open" },
        { slug: "normal", title: "Normal", href: "/instruments/normal", link: "Open" },
      ],
    },
    figures: {
      id: "figures",
      title: "The figures",
      items: [
        { title: "Figures", href: "/figures" },
        { title: "Reading the Figures", href: "/figures/legend" },
        { title: "What You Study", href: "/position" },
      ],
    },
    named: {
      id: "named",
      title: "Named, not yet built",
      items: ["Inner-world inhabitation map"],
    },
    rules: {
      id: "rules",
      title: "House rules",
      items: ["One file", "Offline", "Local", "Specimen"],
    },
  },

  journal: {
    title: "Journal",
    recent: "Recent",
    archive: "Archive",
    more: "Read more",
    back: "Journal",
    entries: [
      { slug: "the-figures-move-to-the-center", iso: "2026-09-30", title: "The figures move to the Center" },
      { slug: "cohort-study-opens", iso: "2026-09-30", title: "Cohort Study opens" },
      { slug: "a-proof-of-work-at-the-door", iso: "2026-09-29", title: "A proof of work at the door" },
      { slug: "the-unit", iso: "2026-09-24", title: "The unit" },
      { slug: "the-center-is-founded", iso: "2026-09-05", title: "The Center is founded" },
    ],
  },

  contributors: {
    title: "Contributors",
    sub: [
      { title: "The cohort", href: "#cohort" },
      { title: "How to contribute", href: "#contribute" },
    ],
    cohort: { id: "cohort", title: "The cohort" },
    ways: {
      id: "contribute",
      title: "How to contribute",
      items: [
        { title: "An account" },
        { title: "A row", link: { title: "Contribute to Cohort Study", href: "https://cohortstudy.co/contribute" } },
        { title: "An instrument" },
        { title: "A correction" },
      ],
      cta: "Write to the Center",
    },
  },

  footer: { write: "Write to the Center" },

  // Not By AI badge, the "written by human" variant, linked as its guidelines ask. The file is the
  // original and must not be altered or shrunk below 42px tall.
  badge: {
    href: "https://notbyai.fyi/",
    src: "/images/written-by-human-not-by-ai-white.svg",
    alt: "Written by Human, Not by AI",
  },

  // The proof-of-work that opens the page and guards the address. altcha, vendored in public/vendor/altcha.
  proof: {
    kicker: "postphenom.com · proof of work",
    credit: "Proof of work by",
    name: "altcha",
    url: "https://altcha.org",
    // A fixed challenge: keyPrefix "00" is found after ~256 PBKDF2 rounds. Fresh nonce and salt per site.
    challenge:
      '{"parameters":{"algorithm":"PBKDF2/SHA-256","cost":5000,"keyLength":32,"keyPrefix":"00","nonce":"b0ffc7ad3d19b929cd3821b7b2c19d90","salt":"e8e8a9f3c09c8741b7f3c72834a678d2"}}',
    hint: "Reveal the address",
  },

  // Shown for any address that is not a page.
  notFound: {
    title: "No such page",
    link: { title: "Return to the front page", href: "/" },
  },
} as const;
