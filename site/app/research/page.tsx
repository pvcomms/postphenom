import type { Metadata } from "next";
import { site } from "@/content/site";
import { PageHead } from "@/components/PageHead";
import { Section } from "@/components/Section";
import { Rows } from "@/components/Rows";

const r = site.research;
export const metadata: Metadata = { title: r.title, description: r.lede };

export default function Research() {
  return (
    <main className="wrap">
      <PageHead title={r.title} lede={r.lede} />

      <Section id="method" label={r.method.label}>
        <p className="opening">{r.method.opening}</p>
        {r.method.body.map((p, i) => <p key={i}>{p}</p>)}
        <ol className="steps">
          {r.method.steps.map((s) => (
            <li key={s.name}><b>{s.name}</b><span>{s.text}</span></li>
          ))}
        </ol>
      </Section>

      <Section id="cohort" label={r.cohort.label}>
        <h3 className="section-title"><a href={r.cohort.href}>{r.cohort.title}</a></h3>
        {r.cohort.body.map((p, i) => <p key={i}>{p}</p>)}
        <p className="after"><a href={r.cohort.href} className="caps go">{r.cohort.link}</a></p>
      </Section>

      <Section id={r.papers.id} label={r.papers.label}>
        <table className="register">
          <thead>
            <tr>{r.papers.columns.map((c) => <th key={c} scope="col">{c}</th>)}</tr>
          </thead>
          <tbody>
            {r.papers.items.map((p) => (
              <tr key={p.n}>
                <td className="num">{p.n}</td>
                <td className="title">{p.title}</td>
                <td className="status">{p.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </Section>

      <Section id="reports" label={r.reports.label}>
        <p>{r.reports.intro}</p>
        <Rows items={r.reports.items} />
      </Section>
    </main>
  );
}
