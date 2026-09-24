// Everything editable on the landing page lives here.
export const site = {
  name: "The Center for Applied Postphenomenology",
  short: "postphenom",
  domain: "postphenom.com",
  url: "https://postphenom.com",
  contact: "hello@postphenom.com",
  founded: "2026",
  tagline: "Examining how the algorithm mediates, and exacerbates, the polycrisis.",
  description:
    "An independent research center collecting first-person accounts of life before and after the screen, to study how technologically mediated life has changed language, perception, society and what it means to be human.",

  nav: [
    { label: "Question", href: "#question" },
    { label: "Method", href: "#method" },
    { label: "Programme", href: "#programme" },
    { label: "Contribute", href: "#contribute" },
    { label: "Papers", href: "#papers" },
  ],

  question: {
    kicker: "The question",
    lede:
      "Technology no longer sits between us and the world. It is the way the world arrives.",
    body: [
      "Maps turned distance into minutes. Feeds turned attention into currency. Recommendation turned taste into a setting. Each time the means of receiving, making and passing on information changes, the language we use for the world changes with it, then the perception underneath the language, then what we take to be normal, possible and real.",
      "For every generation until this one, the physical world came first. It is where people learned what to want, how to read a room, which signals meant reward and which meant risk. A generation has now grown up the other way round: online first, through a pandemic, inside platforms whose rules were written to maximise engagement and whose incentives reward the most reactive part of us. They learned the norms of that world and carried them back into the physical one.",
      "The center studies that reversal, and what it has cost.",
    ],
    trades: {
      kicker: "What was traded",
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
      kicker: "A small example",
      text:
        "Nobody says how far away a place is any more. They say how many minutes. The map did that. The unit of the world changed without anyone deciding it should, and the way we picture a city changed with the unit.",
    },
  },

  method: {
    kicker: "Method",
    lede: "First-person accounts, collected as data.",
    body: [
      "The center collects lived experience from people across generations, countries and screen-times: what life was like before the screen, and what changed. How they move through a room, a city, a relationship, a decision. What they hope for. What they no longer notice.",
      "Accounts are gathered under a fixed protocol so they can be compared, and published in full so they can be checked. Anecdote becomes evidence when it is collected the same way every time and kept where anyone can read it.",
    ],
    steps: [
      { name: "Collect", text: "Structured first-person accounts, before and after, under one protocol." },
      { name: "Compare", text: "Across generations, geographies and levels of mediation." },
      { name: "Hypothesise", text: "Where the accounts agree, name the mechanism. Where they don't, say so." },
      { name: "Publish", text: "Working papers and the underlying accounts, openly and in full." },
    ],
  },

  programme: {
    kicker: "Programme",
    lede: "Interventions at three scales, and institutions for the fourth.",
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

  contribute: {
    kicker: "Contribute",
    lede: "Your account is the data.",
    body:
      "If you remember life before the screen, or if you don't, we want the account. The first cohort is being assembled now. Write to us and we will send the protocol.",
    cta: "Send your account",
  },

  papers: {
    kicker: "Working papers",
    items: [
      { n: "01", title: "On the vocabulary of mediated distance", status: "in preparation" },
      { n: "02", title: "Digital-first: norms learned online, applied offline", status: "forthcoming" },
    ],
  },

  aboutName: {
    kicker: "On the name",
    text:
      "Postphenomenology is an existing school in philosophy of technology. It studies how technologies shape the relation between people and the world. The applied part is ours: taking that lens out of the seminar and into first-person data, and back out again as interventions.",
  },
} as const;
