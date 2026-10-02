import type { Metadata } from "next";
import { site } from "@/content/site";
import { PageHead } from "@/components/PageHead";

const r = site.research;
export const metadata: Metadata = { title: r.title };

export default function Research() {
  const { method: m, cohort: c, papers: p, reports: rep } = r;
  return (
    <>
      <PageHead title={r.title} sub={r.sub} />

      <section className="band first" id={m.id} aria-labelledby={`${m.id}-title`}>
        <div className="container">
          <h2 className="display" id={`${m.id}-title`}>{m.title}</h2>
          <ol className="steps">
            {m.steps.map((s) => <li key={s}><span className="step-name">{s}</span></li>)}
          </ol>
        </div>
      </section>

      <section className="band grey" id={c.id} aria-labelledby={`${c.id}-title`}>
        <div className="container">
          <h2 className="display" id={`${c.id}-title`}>{c.title}</h2>
          <p className="after-left"><a href={c.link.href} className="button">{c.link.title}</a></p>
        </div>
      </section>

      <section className="band" id={p.id} aria-labelledby={`${p.id}-title`}>
        <div className="container">
          <h2 className="display" id={`${p.id}-title`}>{p.title}</h2>
          <div className="points">
            {p.items.map((t) => <div key={t}><h3>{t}</h3></div>)}
          </div>
        </div>
      </section>

      <section className="band grey" id={rep.id} aria-labelledby={`${rep.id}-title`}>
        <div className="container">
          <h2 className="display" id={`${rep.id}-title`}>{rep.title}</h2>
          <div className="grid-2">
            {rep.items.map((it) => (
              <a className="card" key={it.repo} href={`https://github.com/${it.repo}`}>
                <div className="card-head">
                  <h3 className="card-title">{it.title}</h3>
                </div>
                <span className="card-foot">{rep.link}</span>
              </a>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
