// Everything editable on the site lives here. Components render whatever is in it.
// Six pages, one key each (home, about, research, instruments, journal, contributors). The header
// tabs are `nav`; journal entries are `journal.entries`, newest first. Images live in
// public/images and are referenced by path. Adding an entry is adding an object to an array.
export const site = {
  name: "The Center for Applied Postphenomenology",
  short: "CAPP",
  domain: "postphenom.com",
  url: "https://postphenom.com",
  // The address is never written into the page. `contact` is the anti-harvest form shown as text;
  // `contactPayload` is the mailto AES-encrypted by altcha, opened by a proof-of-work in the reader's
  // browser. Regenerate with: npx altcha-lib obfuscate "mailto:<address>?subject=<subject>"
  contact: "hello (at) postphenom dot com",
  contactPayload:
    "eyJwYXJhbWV0ZXJzIjp7ImFsZ29yaXRobSI6IlBCS0RGMi9TSEEtMjU2IiwiY29zdCI6NTAwMCwia2V5TGVuZ3RoIjozMiwia2V5UHJlZml4IjoiM2UxODQ2ZDQyM2JlZjdiNzUzNTJlYTQ2ZmNhNmFlZTUiLCJub25jZSI6ImUzZjRlZjc5OTI0MWQxOTU0OGNhMzM3MjZhZTBhMDAyIiwic2FsdCI6ImQ1MmRkMzJiMzdhOGU1MzcyYjVlNmM2NzYzZTA0NGVjIn0sImNpcGhlciI6eyJpdiI6IjUxYTMyZWRhNTAwYzljMTU5YzU4YzY3YSIsImRhdGEiOiI5ODFlZmUwYjFiMzg5MDU3M2FhMTU2MDBhYTk3NDhlODVmNTMxMjVkMGUyMjJjZjFjYzAxZGMwNjRiN2UyYTIyMGZiOTFjNTI0NWQzMzk0ZDI3OTI2NmRjMTdjYTM1ZWVmZmJkMTVhYmRhMzhmZThiZTM4M2Y0MTBkY2I2OTk1MSJ9fQ==",
  founded: "2026",
  tagline: "Examining how the algorithm mediates, and exacerbates, the polycrisis.",
  description:
    "An independent research center collecting first-person accounts of life before and after the screen, to study how technologically mediated life has changed language, perception, society and what it means to be human.",

  // The logo lockup: the mark, the short name, and the full name set small in two lines.
  lockup: { lines: ["Center for Applied", "Postphenomenology"] },

  nav: [
    { title: "Home", href: "/" },
    { title: "About", href: "/about" },
    { title: "Research", href: "/research" },
    { title: "Instruments", href: "/instruments" },
    { title: "Journal", href: "/journal" },
    { title: "Contributors", href: "/contributors" },
  ],
  cta: { title: "Send an account", href: "/contributors#contribute" },
  menu: "Menu",

  home: {
    hero: {
      lines: ["Examining how the algorithm mediates,", "and exacerbates, the polycrisis."],
      image: "/images/hero-terra-cognita.jpg",
      alt: "A life drawn as a contoured landmass, from the Center's instrument Terra Cognita. Districts are labelled Family, Belonging, Work, Money, Body and Taste.",
    },
    about: {
      title: "About",
      text:
        "The Center for Applied Postphenomenology is an independent research center. It studies how technologically mediated life has changed language, perception, society and what it means to be human. It collects first-person accounts of life before and after the screen, builds instruments that let a person test a claim about perception on themselves, and publishes what it finds in full.",
      link: { title: "Read about the Center", href: "/about" },
    },
    journal: { title: "Journal", all: { title: "All journal entries", href: "/journal" } },
    research: {
      title: "Research",
      lead:
        "The Center's method is first-person accounts, collected under one protocol so they can be compared and published in full so they can be checked. Its first standing study is Cohort Study, a panel of Gen Z interior life: one row for each lived moment, the same eighteen questions every month, and every row published as it arrives.",
      card: {
        title: "Cohort Study",
        subtitle: "A standing panel of Gen Z interior life",
        heading: "Opened 30 September 2026",
        detail: "Two instruments, one index, every row published",
        link: { title: "See the panel", href: "https://cohortstudy.co" },
      },
      image: {
        src: "/images/cohort-study.jpg",
        alt: "The Cohort Study home page: Gen Z, measured from the inside.",
      },
      after: { title: "Contribute to Cohort Study", href: "https://cohortstudy.co/contribute" },
    },
    instruments: {
      title: "Instruments",
      lead:
        "An instrument here makes one claim about perception and lets a person test it on themselves. Each is a single file that opens offline, asks for no account and sends nothing anywhere.",
      feature: "half-second",
      all: { title: "All instruments", href: "/instruments" },
    },
    record: {
      title: "The record so far",
      text: [
        "Everything the Center publishes comes with what it was built from: the code, the runs and the rows.",
        "Two of its technical reports audit or retract its own earlier results. That is the standard, not the exception.",
      ],
      stats: [
        { label: "Instruments published", value: "6", unit: "open source", note: "Offline, no account, nothing sent" },
        { label: "Technical reports", value: "6", unit: "with code", note: "Runs and data included" },
        { label: "Working papers", value: "4", unit: "in progress", note: "Two in preparation, two in draft" },
      ],
      where: {
        title: "Where the work is published",
        items: [
          { title: "postphenom.com", href: "/research", text: "Papers, instruments and the journal" },
          { title: "cohortstudy.co", href: "https://cohortstudy.co", text: "The panel and every row in it" },
          { title: "github.com/pvcomms", href: "https://github.com/pvcomms", text: "Source for every instrument and report" },
        ],
      },
    },
    call: {
      title: "Call for accounts",
      text:
        "If you remember life before the screen, or if you don't, the Center wants your account. The first cohort is being assembled now. Write, and the protocol is sent by return.",
      cta: "Send your account",
    },
  },

  about: {
    title: "About",
    sub: [
      { title: "Mission", href: "#mission" },
      { title: "How the Center works", href: "#principles" },
      { title: "Programme", href: "#programme" },
      { title: "On the name", href: "#name" },
    ],
    mission: {
      id: "mission",
      title: "Mission",
      lead: "Technology no longer sits between us and the world. It is the way the world arrives.",
      body: [
        "Maps turned distance into minutes. Feeds turned attention into currency. Recommendation turned taste into a setting. Each time the means of receiving, making and passing on information changes, the language we use for the world changes with it, then the perception underneath the language, then what we take to be normal, possible and real.",
        "For every generation until this one, the physical world came first. It is where people learned what to want, how to read a room, which signals meant reward and which meant risk. A generation has now grown up the other way round: online first, through a pandemic, inside platforms whose rules were written to maximise engagement and whose incentives reward the most reactive part of us. They learned the norms of that world and carried them back into the physical one.",
        "The Center studies that reversal, and what it has cost.",
      ],
      trades: {
        title: "What was traded",
        items: [
          ["Convenience", "for privacy"],
          ["Discovery", "for taste"],
          ["Retrieval", "for recall"],
          ["Reach", "for attention"],
          ["Proximity", "for presence"],
          ["A shared context", "for a thousand private ones"],
        ],
      },
      example: {
        title: "A small example",
        text:
          "Nobody says how far away a place is any more. They say how many minutes. The map did that. The unit of the world changed without anyone deciding it should, and the way we picture a city changed with the unit.",
      },
    },
    principles: {
      id: "principles",
      title: "How the Center works",
      items: [
        {
          title: "Local by default",
          text: "Nothing on this site or in any instrument phones home. No analytics, no third-party scripts, no fonts from a CDN. A person's data stays on the machine that made it.",
        },
        {
          title: "The tool never decides",
          text: "Nothing here ranks a person's options, scores them against a norm or recommends. Instruments surface; people judge.",
        },
        {
          title: "Published in full",
          text: "Accounts, rows and runs are published whole, so that a reader who distrusts the Center can check it.",
        },
        {
          title: "Negative results count",
          text: "A result that did not hold is published because it did not hold. A figure with no dated run behind it does not go in a paper.",
        },
      ],
    },
    programme: {
      id: "programme",
      title: "Programme",
      lead: "Interventions at three scales, and institutions for the fourth.",
      levels: [
        {
          name: "Personal",
          text: "What an individual can do about attention, taste, memory and presence inside a mediated life, and what the evidence says works.",
        },
        {
          name: "Institutional",
          text: "How schools, employers, newsrooms and clinics should change when their members arrive already shaped by the feed.",
        },
        {
          name: "Societal",
          text: "Norms, contracts and law for a public whose common context is no longer common.",
        },
        {
          name: "After scarcity",
          text: "New institutions for a post-abundance, post-economic society, in which the constraint is no longer what we can make but what we can attend to.",
        },
      ],
    },
    name: {
      id: "name",
      title: "On the name",
      text:
        "Postphenomenology is an existing school in philosophy of technology. It studies how technologies shape the relation between people and the world. The applied part is ours: taking that lens out of the seminar and into first-person data, and back out again as interventions.",
    },
  },

  research: {
    title: "Research",
    sub: [
      { title: "Method", href: "#method" },
      { title: "Cohort Study", href: "#cohort" },
      { title: "Working papers", href: "#papers" },
      { title: "Technical reports", href: "#reports" },
    ],
    method: {
      id: "method",
      title: "Method",
      lead: "First-person accounts, collected as data.",
      body: [
        "The Center collects lived experience from people across generations, countries and screen-times: what life was like before the screen, and what changed. How they move through a room, a city, a relationship, a decision. What they hope for. What they no longer notice.",
        "Accounts are gathered under a fixed protocol so they can be compared, and published in full so they can be checked. Anecdote becomes evidence when it is collected the same way every time and kept where anyone can read it.",
      ],
      steps: [
        { name: "Collect", text: "Structured first-person accounts, before and after, under one protocol." },
        { name: "Compare", text: "Across generations, geographies and levels of mediation." },
        { name: "Hypothesise", text: "Where the accounts agree, name the mechanism. Where they don't, say so." },
        { name: "Publish", text: "Working papers and the underlying accounts, openly and in full." },
      ],
    },
    cohort: {
      id: "cohort",
      title: "Cohort Study",
      body: [
        "Cohort Study opened on 30 September 2026. It is a panel, not a survey: the same people, the same questions, and every row published as it arrives.",
        "CS-001, Moments, takes one row per lived moment: what took attention or asked for a decision, what was felt first, what the body did, how fast it went, how long it held, what decided it, and the verdict afterwards. CS-002, the Barometer, asks eighteen items every month across activation, capture, mediation, norms drift and atomisation, and builds a five-score index for each wave. Finding 00 pre-registers every test and scores it live on the contributed rows.",
      ],
      link: { title: "Open Cohort Study", href: "https://cohortstudy.co" },
      image: { src: "/images/cohort-study.jpg", alt: "The Cohort Study home page: Gen Z, measured from the inside." },
    },
    papers: {
      id: "papers",
      title: "Working papers",
      columns: ["No.", "Title", "Status"],
      items: [
        { n: "01", title: "On the vocabulary of mediated distance", status: "In preparation" },
        { n: "02", title: "Digital-first: norms learned online, applied offline", status: "Forthcoming" },
        { n: "03", title: "The canyon method", status: "Draft, design only" },
        { n: "04", title: "Thinking cap, no zap", status: "Draft, literature study" },
      ],
    },
    reports: {
      id: "reports",
      title: "Technical reports",
      intro:
        "Published in full on GitHub, with code and runs. Two of them audit or retract the Center's own earlier results.",
      link: "Read on GitHub",
      items: [
        {
          title: "Auditing my own evals",
          repo: "pvcomms/auditing-my-own-evals",
          text: "Fourteen lessons on eval statistics, pointed at the author's own published benchmarks. Most claims did not survive.",
        },
        {
          title: "CMCHP",
          repo: "pvcomms/cmchp",
          text: "A wire format for handing agent state between models, and the retraction of its original benchmark, which scored 100% by construction.",
        },
        {
          title: "Tool selection under load",
          repo: "pvcomms/tool-selection-under-load",
          text: "How tool-selection accuracy degrades as the menu grows. Seven models, 665 trials, 34 tools, and the audit showing most of the leaderboard is noise.",
        },
        {
          title: "Error bars",
          repo: "pvcomms/error-bars",
          text: "A statistical audit for small-n LLM benchmarks: Wilson intervals, exact McNemar, rank-stability bootstrap. No dependencies.",
        },
        {
          title: "BONP",
          repo: "pvcomms/bonp",
          text: "A signed-envelope protocol for biometric claims. Version 1.1 fixes a canonicalisation defect that made every 1.0 signature forgeable.",
        },
        {
          title: "MCP fleet",
          repo: "pvcomms/mcp-fleet",
          text: "Four servers that independently converged on three patterns: single-flight credential refresh, dry-run by default, and audit tools that return ranked next actions.",
        },
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
      lead:
        "Each instrument makes one claim about perception and lets a person test it on themselves. Every one ships with a synthetic specimen, so a stranger can understand it before supplying their own life.",
      items: [
        {
          slug: "half-second",
          title: "The Half-Second",
          kind: "Affect and the feed",
          claim: "The screen does not persuade you. It moves you, and you write the story afterwards.",
          href: "https://github.com/pvcomms/half-second",
          link: "Source",
          image: "/images/half-second.jpg",
          alt: "The Half-Second: a synthetic feed beside a synthetic body and its readings.",
        },
        {
          slug: "familiar-voice",
          title: "The Familiar Voice",
          kind: "Repetition and warmth",
          claim: "Truth and being understood are both felt as ease. A machine can supply the ease without the truth or the care.",
          href: "https://github.com/pvcomms/familiar-voice",
          link: "Source",
          image: "/images/familiar-voice.jpg",
          alt: "The Familiar Voice: a chart of how true statements felt, seen before against new.",
        },
        {
          slug: "stop-flowing",
          title: "Stop Flowing",
          kind: "Positions and the crowd",
          claim: "A position you drifted into feels like one you hold. Only moving the crowd tells them apart.",
          href: "https://github.com/pvcomms/stop-flowing",
          link: "Source",
          image: "/images/stop-flowing.jpg",
          alt: "Stop Flowing: a specimen run marking which positions held, carried or wobbled.",
        },
        {
          slug: "terra-cognita",
          title: "Terra Cognita",
          kind: "Inner-life cartography",
          claim: "Interiority is cartographable, and drawing the map changes the territory.",
          href: "https://terra-cognita.vercel.app",
          link: "Open",
          image: "/images/terra-cognita.jpg",
          alt: "Terra Cognita: a synthetic life drawn as a contoured landmass.",
        },
        {
          slug: "chronology",
          title: "Chronology",
          kind: "A number line of a life",
          claim: "A life has structure, conjuncture and event layers, and ordinary self-narration collapses them into one.",
          href: "https://github.com/pvcomms/chronology",
          link: "Source",
          image: "/images/chronology.jpg",
          alt: "Chronology: a synthetic life on one age axis, with its conditions drawn above.",
        },
        {
          slug: "venn",
          title: "Venn",
          kind: "Identity as intersection",
          claim: "Identity claims are intersections, not points.",
          href: "https://interactive-venn-template.vercel.app",
          link: "Open",
          image: "/images/venn.jpg",
          alt: "Venn: five overlapping domains with one highlighted.",
        },
      ],
      note: "Some instruments read a person's own record and are never distributed. They are not listed.",
    },
    figures: {
      id: "figures",
      title: "The figures",
      items: [
        {
          title: "Figures",
          href: "/figures",
          text: "Six interactive figures: what coexists, the distribution of taste, the influence graph, precedence, directionally correct, and the arbitration.",
        },
        {
          title: "Reading the Figures",
          href: "/figures/legend",
          text: "What each figure claims, what every animation means, and an audit of which claims are grounded.",
        },
        {
          title: "What You Study",
          href: "/position",
          text: "The thesis, the fields it maps to in words other people already use, and a manifesto.",
        },
      ],
    },
    named: {
      id: "named",
      title: "Named, not yet built",
      items: [
        { title: "Real self, ideal self", text: "The gap as a navigable surface rather than a deficit to close." },
        { title: "Attention curation", text: "Attention as something you compose, not something that is captured from you." },
        { title: "Life is normal", text: "The normal distribution as a model of a life. Most of it is the middle, and the middle is not failure." },
      ],
    },
    rules: {
      id: "rules",
      title: "House rules",
      items: [
        { name: "One file", text: "A single HTML file where it can be. No build step, no server, no account." },
        { name: "Offline", text: "It opens offline, and it will still open in ten years." },
        { name: "Local", text: "Data stays on the reader's disk. An instrument that reads a life never sends it anywhere." },
        { name: "Specimen", text: "It ships with synthetic data, so a stranger can understand it before supplying their own life." },
      ],
    },
  },

  journal: {
    title: "Journal",
    recent: "Recent",
    archive: "Archive",
    more: "Read more",
    back: "Journal",
    entries: [
      {
        slug: "the-figures-move-to-the-center",
        date: "30 September 2026",
        iso: "2026-09-30",
        title: "The figures move to the Center",
        dek: "Six figures, their legend and a position paper, now at postphenom.com.",
        body: [
          "The six interactive figures, Reading the Figures and What You Study were built on the founder's personal site. They now live here, at /figures, /figures/legend and /position, as they were: their own dark theme, their own code, untouched.",
          "The reason is the line the Center draws. The instruments belong to the institution; the personal site keeps the person. A figure that argues something about perception is the Center's output, whoever drew it.",
        ],
      },
      {
        slug: "cohort-study-opens",
        date: "30 September 2026",
        iso: "2026-09-30",
        title: "Cohort Study opens",
        dek: "A standing panel of Gen Z interior life, every row published.",
        body: [
          "Cohort Study is live at cohortstudy.co. It is a standing panel, not a survey: two instruments, one index, and every contributed row published as it arrives.",
          "CS-001, Moments, takes one row per lived moment: what took attention or asked for a decision, what was felt first, what the body did, how fast it went, how long it held, what decided it, and the verdict afterwards. CS-002, the Barometer, asks the same eighteen items every month across activation, capture, mediation, norms drift and atomisation, and the Cohort Index is five scores per wave.",
          "Finding 00 pre-registers every test and scores it live on the rows as they arrive. Comparable projects measure what a generation thinks. This one measures what it feels first, and how alone it is.",
        ],
      },
      {
        slug: "a-proof-of-work-at-the-door",
        date: "29 September 2026",
        iso: "2026-09-29",
        title: "A proof of work at the door",
        dek: "Why the page opens with a small computation, and where the address went.",
        body: [
          "Since 29 September the site opens with a small proof of work. A PBKDF2 challenge runs in the reader's browser for a fraction of a second, once per tab, and the page appears. Nothing is clicked and nothing is sent anywhere. If the widget fails, the page opens anyway after eight seconds.",
          "The point is who pays. A reader pays a fraction of a second of processor time. A scraper that wants ten thousand pages pays ten thousand times that. The same mechanism guards the Center's address, which is stored encrypted in the page and decrypted in the reader's browser when they ask for it. The address is no longer in the source anywhere.",
          "The widget is altcha, vendored into the site under its MIT licence, so the rule that nothing here loads from a third party still holds.",
        ],
      },
      {
        slug: "the-unit",
        date: "24 September 2026",
        iso: "2026-09-24",
        title: "The unit",
        dek: "On the mark.",
        body: [
          "The mark is two rings drawn by hand round one vermillion point. The outer ring is the horizon a platform draws: the edge of what can be seen from inside it. The inner ring, off-centre on purpose, is the self shaped inside that horizon. The point is the unit of attention, which is the thing being sold.",
          "It is drawn, not computed. Three earlier rounds of geometric marks were rejected because a computed line under the words drawn, not computed would have been the argument failing in its own letterhead. Vermillion is the identity's only accent, and only the point carries it.",
        ],
      },
      {
        slug: "the-center-is-founded",
        date: "5 September 2026",
        iso: "2026-09-05",
        title: "The Center is founded",
        dek: "An independent research center for the mediated life.",
        body: [
          "The Center for Applied Postphenomenology was founded on 5 September 2026 as an independent research center. Its subject is the reversal of the last decade: a generation that learned the world online first and carried those norms back into the physical one, and what that has cost in language, perception and the sense of what is normal.",
          "Its method is first-person accounts collected under one protocol and published in full, instruments that let a reader test a claim about perception on themselves, and working papers with the runs behind them. Postphenomenology is an existing school in philosophy of technology. The applied part is ours.",
        ],
      },
    ],
  },

  contributors: {
    title: "Contributors",
    sub: [
      { title: "People", href: "#people" },
      { title: "The cohort", href: "#cohort" },
      { title: "How to contribute", href: "#contribute" },
    ],
    people: {
      id: "people",
      title: "People",
      items: [
        {
          name: "Param Vaswani",
          role: "Founder",
          text: "Param Vaswani founded the Center in September 2026. He builds its instruments, keeps the record they are built from, and writes its papers.",
          link: { title: "paramv.com", href: "https://paramv.com" },
        },
      ],
    },
    cohort: {
      id: "cohort",
      title: "The cohort",
      text:
        "Most of the Center's contributors send an account or a row, and they are not named here. A Cohort Study row carries no name. It is linked to a contributor's other rows by a random panel id that lives in their own browser and nowhere else.",
    },
    ways: {
      id: "contribute",
      title: "How to contribute",
      items: [
        {
          title: "An account",
          text: "If you remember life before the screen, or if you don't, the Center wants the account. Write, and the protocol is sent by return.",
        },
        {
          title: "A row",
          text: "Cohort Study takes contributions directly: a moment, or a month's Barometer.",
          link: { title: "Contribute to Cohort Study", href: "https://cohortstudy.co/contribute" },
        },
        {
          title: "An instrument",
          text: "An instrument earns its place by making a claim about perception. Single file, opens offline, data stays on the reader's disk, ships with specimen data. Send the claim first.",
        },
        {
          title: "A correction",
          text: "Every claim on this site and in every paper is meant to be checkable. If one is wrong, say so. It will be fixed, and the correction dated.",
        },
      ],
      cta: "Write to the Center",
    },
  },

  footer: {
    statement: "The Center for Applied Postphenomenology is an independent research center, founded in 2026.",
    rights: "All rights reserved.",
    write: "Write to the Center",
    links: [
      { title: "Send an account", href: "/contributors#contribute" },
      { title: "Cohort Study", href: "https://cohortstudy.co" },
      { title: "The figures", href: "/figures" },
      { title: "Source on GitHub", href: "https://github.com/pvcomms" },
    ],
  },

  // The proof-of-work that opens the page and guards the address. altcha, vendored in public/vendor/altcha.
  proof: {
    kicker: "postphenom.com · proof of work",
    note: "A small computation runs in your browser before the page opens. Nothing to click, nothing sent anywhere. Scrapers pay for the page in processor time instead.",
    credit: "Proof of work by",
    name: "altcha",
    url: "https://altcha.org",
    // A fixed challenge: keyPrefix "00" is found after ~256 PBKDF2 rounds. Fresh nonce and salt per site.
    challenge:
      '{"parameters":{"algorithm":"PBKDF2/SHA-256","cost":5000,"keyLength":32,"keyPrefix":"00","nonce":"b0ffc7ad3d19b929cd3821b7b2c19d90","salt":"e8e8a9f3c09c8741b7f3c72834a678d2"}}',
    hint: "Reveal the address",
  },
} as const;
