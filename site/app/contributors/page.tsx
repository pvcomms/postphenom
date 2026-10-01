import type { Metadata } from "next";
import { site } from "@/content/site";
import { PageHead } from "@/components/PageHead";
import { A } from "@/components/A";
import { Contact } from "@/components/Contact";

const c = site.contributors;
export const metadata: Metadata = { title: c.title, description: c.cohort.text };

export default function Contributors() {
  const { people, cohort, ways } = c;
  return (
    <>
      <PageHead title={c.title} sub={c.sub} />

      <section className="band first" id={people.id} aria-labelledby={`${people.id}-title`}>
        <div className="container">
          <h2 className="display" id={`${people.id}-title`}>{people.title}</h2>
          <div className="grid-2">
            {people.items.map((p) => (
              <div className="card" key={p.name}>
                <div className="card-head">
                  <h3 className="card-title">{p.name}</h3>
                  <p className="card-sub">{p.role}</p>
                </div>
                <div className="card-body"><p>{p.text}</p></div>
                <A href={p.link.href} className="card-foot left">{p.link.title}</A>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="band grey" id={cohort.id} aria-labelledby={`${cohort.id}-title`}>
        <div className="container">
          <div className="column">
            <h2 className="display" id={`${cohort.id}-title`}>{cohort.title}</h2>
            <p>{cohort.text}</p>
          </div>
        </div>
      </section>

      <section className="band" id={ways.id} aria-labelledby={`${ways.id}-title`}>
        <div className="container">
          <h2 className="display" id={`${ways.id}-title`}>{ways.title}</h2>
          <div className="points">
            {ways.items.map((w) => (
              <div key={w.title}>
                <h3>{w.title}</h3>
                <p>{w.text}</p>
                {"link" in w && w.link && <p><A href={w.link.href} className="link-strong">{w.link.title}</A></p>}
              </div>
            ))}
          </div>
          <div className="cta"><Contact>{ways.cta}</Contact></div>
          <p className="address">{site.contact}</p>
        </div>
      </section>
    </>
  );
}
