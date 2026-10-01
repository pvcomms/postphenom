// Everything editable on the site lives here. Components render whatever is in it.
// The site is six pages. `nav` is the header tabs; each page's copy is the object of the same
// name (home, about, research, instruments, journal, contributors); journal entries are
// `journal.entries`, newest first. Adding an entry is adding an object to that array.
export const site = {
  name: "The Center for Applied Postphenomenology",
  short: "postphenom",
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

  // The header tabs. The wordmark is the link home.
  nav: [
    { title: "About", href: "/about" },
    { title: "Research", href: "/research" },
    { title: "Instruments", href: "/instruments" },
    { title: "Journal", href: "/journal" },
    { title: "Contributors", href: "/contributors" },
  ],

  // The name is set in two lines: the first in small capitals, the second as the correction —
  // "phenomenology" typeset, "post" written in above it.
  masthead: {
    line: "The Center for Applied",
    hand: "post",
    set: "phenomenology",
    imprint: "An independent research center · founded 2026",
  },

  home: {
    statement: "Technology no longer sits between us and the world. It is the way the world arrives.",
    sub:
      "The Center collects first-person accounts of life before and after the screen, builds instruments that let a reader test a claim about perception on themselves, and publishes what it finds in full.",
    work: {
      label: "What the Center does",
      items: [
        {
          meta: "Accounts",
          text: "First-person accounts of life before and after the screen, collected under one protocol so they can be compared and published in full so they can be checked.",
          href: "/research",
          link: "Method",
        },
        {
          meta: "Instruments",
          text: "Single-file tools that each make a claim about perception. They open offline, ask for no account, and read nothing but what is on the reader's own disk.",
          href: "/instruments",
          link: "Catalogue",
        },
        {
          meta: "Papers",
          text: "Working papers and technical reports, published with the code and the runs, including the ones that retract an earlier result.",
          href: "/research#papers",
          link: "Register",
        },
      ],
    },
    now: {
      label: "Now",
      items: [
        {
          meta: "30 Sep 2026",
          title: "Cohort Study",
          href: "https://cohortstudy.co",
          text: "A standing panel of Gen Z interior life. Two instruments, one index, every row published.",
          link: "Open",
        },
        {
          meta: "30 Sep 2026",
          title: "Three new instruments",
          href: "/instruments",
          text: "The Half-Second, The Familiar Voice and Stop Flowing: the feed and the body, ease mistaken for truth, and positions that drift.",
          link: "Catalogue",
        },
        {
          meta: "30 Sep 2026",
          title: "The figures",
          href: "/figures",
          text: "Six interactive figures, their legend and a position paper, moved to the Center from the founder's own site.",
          link: "Open",
        },
      ],
    },
    journal: { label: "From the journal", all: "All entries" },
    call: {
      label: "Call for accounts",
      opening: "Your account is the data.",
      body:
        "If you remember life before the screen, or if you don't, we want the account. The first cohort is being assembled now. Write to us and we will send the protocol.",
      cta: "Send your account",
    },
  },

  about: {
    title: "About",
    lede: "Examining how the algorithm mediates, and exacerbates, the polycrisis.",
    question: {
      label: "The question",
      opening:
        "Technology no longer sits between us and the world. It is the way the world arrives.",
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
      label: "How the Center works",
      items: [
        {
          meta: "Local by default",
          text: "Nothing on this site or in any instrument phones home. No analytics, no third-party scripts, no fonts from a CDN. A person's data stays on the machine that made it.",
        },
        {
          meta: "The tool never decides",
          text: "Nothing here ranks a person's options, scores them against a norm, or recommends. Instruments surface; people judge.",
        },
        {
          meta: "Published in full",
          text: "Accounts, rows and runs are published whole, so that a reader who distrusts the Center can check it.",
        },
        {
          meta: "Negative results count",
          text: "A benchmark that failed to separate the models is published because it failed. A figure with no dated run behind it does not go in a paper.",
        },
      ],
    },
    programme: {
      label: "Programme",
      opening: "Interventions at three scales, and institutions for the fourth.",
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
    aboutName: {
      label: "On the name",
      text:
        "Postphenomenology is an existing school in philosophy of technology. It studies how technologies shape the relation between people and the world. The applied part is ours: taking that lens out of the seminar and into first-person data, and back out again as interventions.",
    },
  },

  research: {
    title: "Research",
    lede: "First-person accounts collected as data, a standing panel of one generation, and papers published with the runs behind them.",
    method: {
      label: "Method",
      opening: "First-person accounts, collected as data.",
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
      label: "Cohort Study",
      title: "A standing panel of Gen Z interior life",
      href: "https://cohortstudy.co",
      link: "Open Cohort Study",
      body: [
        "Cohort Study opened on 30 September 2026 at cohortstudy.co. It is a panel, not a survey: the same people, the same questions, and every row published as it arrives.",
        "CS-001, Moments, takes one row per lived moment: what took attention or asked for a decision, what was felt first, what the body did, how fast it went, how long it held, what decided it, and the verdict afterwards. CS-002, the Barometer, asks eighteen items every month across activation, capture, mediation, norms drift and atomisation, and builds a five-score index per wave. Finding 00 pre-registers every test and scores it live on the contributed rows.",
      ],
    },
    papers: {
      id: "papers",
      label: "Working papers",
      columns: ["No.", "Title", "Status"],
      items: [
        { n: "01", title: "On the vocabulary of mediated distance", status: "in preparation" },
        { n: "02", title: "Digital-first: norms learned online, applied offline", status: "forthcoming" },
        { n: "03", title: "The canyon method", status: "draft, design only" },
        { n: "04", title: "Thinking cap, no zap", status: "draft, literature study" },
      ],
    },
    reports: {
      label: "Technical reports",
      intro:
        "Published in full on GitHub, with code and runs. Two of them audit or retract the Center's own earlier results. That is the standard here.",
      items: [
        {
          title: "Auditing my own evals",
          href: "https://github.com/pvcomms/auditing-my-own-evals",
          text: "Fourteen lessons on eval statistics, pointed at the author's own published benchmarks. Most claims did not survive.",
          link: "Source",
        },
        {
          title: "CMCHP",
          href: "https://github.com/pvcomms/cmchp",
          text: "A wire format for handing agent state between models, and the retraction of its original benchmark, which scored 100% by construction.",
          link: "Source",
        },
        {
          title: "Tool selection under load",
          href: "https://github.com/pvcomms/tool-selection-under-load",
          text: "How tool-selection accuracy degrades as the menu grows. Seven models, 665 trials, 34 tools, and the audit showing most of the leaderboard is noise.",
          link: "Source",
        },
        {
          title: "Error bars",
          href: "https://github.com/pvcomms/error-bars",
          text: "A statistical audit for small-n LLM benchmarks: Wilson intervals, exact McNemar, rank-stability bootstrap. No dependencies.",
          link: "Source",
        },
        {
          title: "BONP",
          href: "https://github.com/pvcomms/bonp",
          text: "A signed-envelope protocol for biometric claims. Version 1.1 fixes a canonicalisation defect that made every 1.0 signature forgeable.",
          link: "Source",
        },
        {
          title: "MCP fleet",
          href: "https://github.com/pvcomms/mcp-fleet",
          text: "Four servers that independently converged on three patterns: single-flight credential refresh, dry-run by default, and audit tools that return ranked next actions.",
          link: "Source",
        },
      ],
    },
  },

  instruments: {
    title: "Instruments",
    lede: "The instruments are the argument. Each one makes a claim about perception and lets the reader test it on themselves.",
    rules: {
      label: "House rules",
      items: [
        "A single HTML file where it can be. No build step, no server, no account.",
        "It opens offline, and it will still open in ten years.",
        "Data stays on the reader's disk. An instrument that reads a life never sends it anywhere.",
        "It ships with synthetic specimen data, so a stranger can open it and understand it before supplying their own life.",
      ],
    },
    figures: {
      label: "The figures",
      items: [
        {
          title: "Figures",
          href: "/figures",
          text: "Six interactive figures: what coexists, the distribution of taste, the influence graph, precedence, directionally correct, and the arbitration.",
          link: "Open",
        },
        {
          title: "Reading the Figures",
          href: "/figures/legend",
          text: "What each figure claims, what every animation means, and an audit of which claims are grounded.",
          link: "Open",
        },
        {
          title: "What You Study",
          href: "/position",
          text: "The thesis, the fields it maps to in words other people already use, and a manifesto.",
          link: "Open",
        },
      ],
    },
    built: {
      label: "Built",
      items: [
        {
          meta: "Chronology",
          text: "A life has structure, conjuncture and event layers, and ordinary self-narration collapses them into one.",
          href: "https://github.com/pvcomms/chronology",
          link: "Source",
        },
        {
          meta: "Terra Cognita",
          text: "Interiority is cartographable, and drawing the map changes the territory.",
          href: "https://terra-cognita.vercel.app",
          link: "Open",
        },
        {
          meta: "The Half-Second",
          text: "The screen does not persuade you. It moves you, and you write the story afterwards.",
          href: "https://github.com/pvcomms/half-second",
          link: "Source",
        },
        {
          meta: "The Familiar Voice",
          text: "Truth and being understood are both felt as ease. A machine can supply the ease without the truth or the care.",
          href: "https://github.com/pvcomms/familiar-voice",
          link: "Source",
        },
        {
          meta: "Stop Flowing",
          text: "A position you drifted into feels like one you hold. Only moving the crowd tells them apart, and a held belief is one you would say in every room.",
          href: "https://github.com/pvcomms/stop-flowing",
          link: "Source",
        },
        {
          meta: "Venn",
          text: "Identity claims are intersections, not points.",
          href: "https://interactive-venn-template.vercel.app",
          link: "Open",
        },
      ],
      note: "Some instruments read a person's own record and are never distributed. They are not listed.",
    },
    named: {
      label: "Named, not yet built",
      items: [
        { meta: "Real self, ideal self", text: "The gap as a navigable surface rather than a deficit to close." },
        { meta: "Attention curation", text: "Attention as something you compose, not something that is captured from you." },
        { meta: "Life is normal", text: "The normal distribution as a model of a life. Most of it is the middle, and the middle is not failure." },
      ],
    },
  },

  journal: {
    title: "Journal",
    lede: "Dated notes from the Center: what was built, what changed, and why.",
    back: "All entries",
    entries: [
      {
        slug: "the-figures-move-to-the-center",
        date: "30 Sep 2026",
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
        date: "30 Sep 2026",
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
        date: "29 Sep 2026",
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
        date: "24 Sep 2026",
        iso: "2026-09-24",
        title: "The unit",
        dek: "On the mark.",
        body: [
          "The mark is two rings drawn by hand round one vermillion point. The outer ring is the horizon a platform draws: the edge of what can be seen from inside it. The inner ring, off-centre on purpose, is the self shaped inside that horizon. The point is the unit of attention, which is the thing being sold.",
          "It is drawn, not computed. Three earlier rounds of geometric marks were rejected for a reason that is also the Center's: a computed line under the words drawn, not computed would have been the argument failing in its own letterhead. Vermillion is the identity's only accent, and only the point carries it.",
        ],
      },
      {
        slug: "the-center-is-founded",
        date: "5 Sep 2026",
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
    lede: "The Center is small: one founder, the people who contribute accounts and rows, and anyone who builds an instrument under the house rules.",
    people: {
      label: "People",
      items: [
        {
          meta: "Founder",
          title: "Param Vaswani",
          href: "https://paramv.com",
          text: "Builds the instruments, keeps the record they are built from, and writes the papers.",
          link: "paramv.com",
        },
      ],
    },
    cohort: {
      label: "The cohort",
      body: [
        "Most of the Center's contributors send an account or a row, and they are not named here. A Cohort Study row carries no name. It is linked to a contributor's other rows by a random panel id that lives in their own browser and nowhere else.",
      ],
    },
    ways: {
      label: "How to contribute",
      items: [
        {
          meta: "An account",
          text: "If you remember life before the screen, or if you don't, the Center wants the account. Write, and the protocol is sent by return.",
        },
        {
          meta: "A row",
          text: "Cohort Study takes contributions directly: a moment, or a month's Barometer.",
          href: "https://cohortstudy.co/contribute",
          link: "Contribute",
        },
        {
          meta: "An instrument",
          text: "An instrument earns its place by making a claim about perception. Single file, opens offline, data stays on the reader's disk, ships with specimen data. Send the claim first.",
        },
        {
          meta: "A correction",
          text: "Every claim on this site and in every paper is meant to be checkable. If one is wrong, say so. It will be fixed, and the correction dated.",
        },
      ],
    },
    cta: "Write to the Center",
  },

  footer: {
    center: "The Center",
    pages: "Pages",
    elsewhere: "Elsewhere",
    links: [
      { title: "Figures", href: "/figures" },
      { title: "Cohort Study", href: "https://cohortstudy.co" },
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

export type Row = {
  meta?: string;
  title?: string;
  text?: string;
  href?: string;
  link?: string;
};
