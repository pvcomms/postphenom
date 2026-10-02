import type { Metadata } from "next";
import { site } from "@/content/site";
import { PageHead } from "@/components/PageHead";

const a = site.about;
export const metadata: Metadata = { title: a.title };

export default function About() {
  const m = a.mission;
  return (
    <>
      <PageHead title={a.title} sub={a.sub} />

      <section className="band first" id={m.id} aria-labelledby={`${m.id}-title`}>
        <div className="container">
          <h2 className="display" id={`${m.id}-title`}>{m.title}</h2>
          <div className="points">
            <div><h3>{m.trades}</h3></div>
            <div><h3>{m.example}</h3></div>
          </div>
        </div>
      </section>

      <section className="band grey" id={a.principles.id} aria-labelledby={`${a.principles.id}-title`}>
        <div className="container">
          <h2 className="display" id={`${a.principles.id}-title`}>{a.principles.title}</h2>
          <div className="points">
            {a.principles.items.map((t) => <div key={t}><h3>{t}</h3></div>)}
          </div>
        </div>
      </section>

      <section className="band" id={a.programme.id} aria-labelledby={`${a.programme.id}-title`}>
        <div className="container">
          <h2 className="display" id={`${a.programme.id}-title`}>{a.programme.title}</h2>
          <div className="points">
            {a.programme.levels.map((t) => <div key={t}><h3>{t}</h3></div>)}
          </div>
        </div>
      </section>

      <section className="band grey" id={a.name.id} aria-labelledby={`${a.name.id}-title`}>
        <div className="container">
          <h2 className="display" id={`${a.name.id}-title`}>{a.name.title}</h2>
        </div>
      </section>
    </>
  );
}
