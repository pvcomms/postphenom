import type { Metadata } from "next";
import { site } from "@/content/site";
import { PageHead } from "@/components/PageHead";
import { Section } from "@/components/Section";
import { Rows } from "@/components/Rows";

const a = site.about;
export const metadata: Metadata = { title: a.title, description: a.lede };

export default function About() {
  const q = a.question;
  return (
    <main className="wrap">
      <PageHead title={a.title} lede={a.lede} />

      <Section id="question" label={q.label}>
        <p className="opening">{q.opening}</p>
        {q.body.map((p, i) => <p key={i}>{p}</p>)}
        <div className="notes-row">
          <div className="note">
            <span className="caps note-label">{q.trades.title}</span>
            <ul className="trades">
              {q.trades.items.map(([x, y]) => <li key={x}>{x} <em>{y}</em></li>)}
            </ul>
          </div>
          <div className="note">
            <span className="caps note-label">{q.example.title}</span>
            <p className="note-text">{q.example.text}</p>
          </div>
        </div>
      </Section>

      <Section id="principles" label={a.principles.label}>
        <Rows items={a.principles.items} />
      </Section>

      <Section id="programme" label={a.programme.label}>
        <p className="opening">{a.programme.opening}</p>
        <dl className="levels">
          {a.programme.levels.map((l) => (
            <div key={l.name}><dt>{l.name}</dt><dd>{l.text}</dd></div>
          ))}
        </dl>
      </Section>

      <Section id="name" label={a.aboutName.label}>
        <p>{a.aboutName.text}</p>
      </Section>
    </main>
  );
}
