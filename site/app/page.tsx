import Link from "next/link";
import { site } from "@/content/site";
import { Mark } from "@/components/Mark";
import { Section } from "@/components/Section";
import { Rows } from "@/components/Rows";
import { Contact } from "@/components/Contact";

export default function Page() {
  const h = site.home;
  const latest = site.journal.entries.slice(0, 3).map((e) => ({
    meta: e.date,
    title: e.title,
    text: e.dek,
    href: `/journal/${e.slug}`,
  }));

  return (
    <main className="wrap">
      <header className="masthead" id="top">
        <Mark kind="mark" className="masthead-mark" />
        <p className="wordmark" aria-label={site.name}>
          <span className="caps line">{site.masthead.line}</span>
          <span className="correction">
            <span className="hand post">{site.masthead.hand}</span>
            <Mark kind="caret" className="caret" />
            {site.masthead.set}
          </span>
        </p>
        <hr className="short" />
        <h1 className="statement">{h.statement}</h1>
        <p className="sub">{h.sub}</p>
        <p className="caps imprint">{site.masthead.imprint}</p>
      </header>

      <Section id="work" label={h.work.label}>
        <Rows items={h.work.items} />
      </Section>

      <Section id="now" label={h.now.label}>
        <Rows items={h.now.items} />
      </Section>

      <Section id="journal" label={h.journal.label}>
        <Rows items={latest} />
        <p className="after"><Link href="/journal" className="caps go">{h.journal.all}</Link></p>
      </Section>

      <Section id="call" label={h.call.label}>
        <p className="opening">{h.call.opening}</p>
        <p>{h.call.body}</p>
        <div className="cta"><Contact>{h.call.cta}</Contact></div>
        <p className="address">{site.contact}</p>
      </Section>
    </main>
  );
}
