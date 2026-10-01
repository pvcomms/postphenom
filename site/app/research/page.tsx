import type { Metadata } from "next";
import { site } from "@/content/site";
import { PageHead } from "@/components/PageHead";

const r = site.research;
export const metadata: Metadata = { title: r.title, description: r.method.lead };

export default function Research() {
  const { method: m, cohort: c, papers: p, reports: rep } = r;
  return (
    <>
      <PageHead title={r.title} sub={r.sub} />

      <section className="band first" id={m.id} aria-labelledby={`${m.id}-title`}>
        <div className="container">
          <div className="column">
            <h2 className="display" id={`${m.id}-title`}>{m.title}</h2>
            <p className="lead">{m.lead}</p>
            {m.body.map((t, i) => <p key={i}>{t}</p>)}
          </div>
          <ol className="steps">
            {m.steps.map((s) => (
              <li key={s.name}><span className="step-name">{s.name}</span><span className="step-text">{s.text}</span></li>
            ))}
          </ol>
        </div>
      </section>

      <section className="band grey" id={c.id} aria-labelledby={`${c.id}-title`}>
        <div className="container split">
          <div>
            <h2 className="display" id={`${c.id}-title`}>{c.title}</h2>
            {c.body.map((t, i) => <p key={i}>{t}</p>)}
            <p className="after-left"><a href={c.link.href} className="button">{c.link.title}</a></p>
          </div>
          <a className="card card-image" href={c.link.href}>
            <img src={c.image.src} alt={c.image.alt} width={1200} height={900} loading="lazy" />
          </a>
        </div>
      </section>

      <section className="band" id={p.id} aria-labelledby={`${p.id}-title`}>
        <div className="container">
          <h2 className="display" id={`${p.id}-title`}>{p.title}</h2>
          <div className="card table-card">
            <table className="register">
              <thead>
                <tr>{p.columns.map((col) => <th key={col} scope="col">{col}</th>)}</tr>
              </thead>
              <tbody>
                {p.items.map((it) => (
                  <tr key={it.n}>
                    <td className="num">{it.n}</td>
                    <td className="title">{it.title}</td>
                    <td className="status">{it.status}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="band grey" id={rep.id} aria-labelledby={`${rep.id}-title`}>
        <div className="container">
          <div className="column">
            <h2 className="display" id={`${rep.id}-title`}>{rep.title}</h2>
            <p className="lead">{rep.intro}</p>
          </div>
          <div className="grid-2">
            {rep.items.map((it) => (
              <a className="card" key={it.repo} href={`https://github.com/${it.repo}`}>
                <div className="card-head">
                  <h3 className="card-title">{it.title}</h3>
                  <p className="card-sub">{it.repo}</p>
                </div>
                <div className="card-body"><p>{it.text}</p></div>
                <span className="card-foot">{rep.link}</span>
              </a>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
