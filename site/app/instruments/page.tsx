import type { Metadata } from "next";
import { site } from "@/content/site";
import { PageHead } from "@/components/PageHead";
import { A } from "@/components/A";

const n = site.instruments;
export const metadata: Metadata = { title: n.title };

export default function Instruments() {
  const { built: b, figures: f, named, rules } = n;
  return (
    <>
      <PageHead title={n.title} sub={n.sub} />

      <section className="band first" id={b.id} aria-labelledby={`${b.id}-title`}>
        <div className="container">
          <h2 className="display" id={`${b.id}-title`}>{b.title}</h2>
          <div className="grid-2">
            {b.items.map((i) => (
              <a className="card" key={i.slug} href={i.href}>
                <div className="card-head">
                  <h3 className="card-title">{i.title}</h3>
                </div>
                <span className="card-foot">{i.link}</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="band grey" id={f.id} aria-labelledby={`${f.id}-title`}>
        <div className="container">
          <h2 className="display" id={`${f.id}-title`}>{f.title}</h2>
          <div className="card list-card">
            {f.items.map((it) => (
              <A href={it.href} className="list-row" key={it.href}>
                <span className="list-title">{it.title}</span>
              </A>
            ))}
          </div>
        </div>
      </section>

      <section className="band" id={named.id} aria-labelledby={`${named.id}-title`}>
        <div className="container">
          <h2 className="display" id={`${named.id}-title`}>{named.title}</h2>
          <div className="points">
            {named.items.map((t) => <div key={t}><h3>{t}</h3></div>)}
          </div>
        </div>
      </section>

      <section className="band grey" id={rules.id} aria-labelledby={`${rules.id}-title`}>
        <div className="container">
          <h2 className="display" id={`${rules.id}-title`}>{rules.title}</h2>
          <ol className="steps">
            {rules.items.map((s) => <li key={s}><span className="step-name">{s}</span></li>)}
          </ol>
        </div>
      </section>
    </>
  );
}
