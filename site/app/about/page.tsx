import type { Metadata } from "next";
import { site } from "@/content/site";
import { PageHead } from "@/components/PageHead";

const a = site.about;
export const metadata: Metadata = { title: a.title, description: a.mission.lead };

export default function About() {
  const m = a.mission;
  return (
    <>
      <PageHead title={a.title} sub={a.sub} />

      <section className="band first" id={m.id} aria-labelledby={`${m.id}-title`}>
        <div className="container">
          <div className="column">
            <h2 className="display" id={`${m.id}-title`}>{m.title}</h2>
            <p className="lead">{m.lead}</p>
            {m.body.map((p, i) => <p key={i}>{p}</p>)}
          </div>
          <div className="pair">
            <div className="card">
              <div className="card-head"><h3 className="card-title">{m.trades.title}</h3></div>
              <table className="trades">
                <tbody>
                  {m.trades.items.map(([x, y]) => <tr key={x}><th scope="row">{x}</th><td>{y}</td></tr>)}
                </tbody>
              </table>
            </div>
            <figure className="quote">
              <figcaption>{m.example.title}</figcaption>
              <blockquote><p>{m.example.text}</p></blockquote>
            </figure>
          </div>
        </div>
      </section>

      <section className="band grey" id={a.principles.id} aria-labelledby={`${a.principles.id}-title`}>
        <div className="container">
          <h2 className="display" id={`${a.principles.id}-title`}>{a.principles.title}</h2>
          <div className="points">
            {a.principles.items.map((p) => (
              <div key={p.title}>
                <h3>{p.title}</h3>
                <p>{p.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="band" id={a.programme.id} aria-labelledby={`${a.programme.id}-title`}>
        <div className="container">
          <div className="column">
            <h2 className="display" id={`${a.programme.id}-title`}>{a.programme.title}</h2>
            <p className="lead">{a.programme.lead}</p>
          </div>
          <dl className="defs">
            {a.programme.levels.map((l) => (
              <div key={l.name}><dt>{l.name}</dt><dd>{l.text}</dd></div>
            ))}
          </dl>
        </div>
      </section>

      <section className="band grey" id={a.name.id} aria-labelledby={`${a.name.id}-title`}>
        <div className="container">
          <div className="column">
            <h2 className="display" id={`${a.name.id}-title`}>{a.name.title}</h2>
            <p>{a.name.text}</p>
          </div>
        </div>
      </section>
    </>
  );
}
