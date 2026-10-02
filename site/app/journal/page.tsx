import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/content/site";
import { PageHead } from "@/components/PageHead";

const j = site.journal;
export const metadata: Metadata = { title: j.title };

export default function Journal() {
  const [lead, ...rest] = j.entries;
  const side = rest.slice(0, 2);
  const archive = rest.slice(2);
  return (
    <>
      <PageHead title={j.title} />
      <section className="band first" aria-labelledby="recent-title">
        <div className="container">
          <h2 className="display" id="recent-title">{j.recent}</h2>
          <div className="recent">
            <Link className="card post post-lead" href={`/journal/${lead.slug}`}>
              <div className="card-body">
                <h3 className="post-title">{lead.title}</h3>
              </div>
              <span className="card-foot left">{j.more}</span>
            </Link>
            <div className="recent-side">
              {side.map((e) => (
                <Link className="card post" key={e.slug} href={`/journal/${e.slug}`}>
                  <div className="card-body">
                    <h3 className="post-title small">{e.title}</h3>
                  </div>
                  <span className="card-foot left">{j.more}</span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
      {archive.length > 0 && (
        <section className="band grey" aria-labelledby="archive-title">
          <div className="container">
            <h2 className="display" id="archive-title">{j.archive}</h2>
            <div className="card list-card">
              {archive.map((e) => (
                <Link className="list-row" key={e.slug} href={`/journal/${e.slug}`}>
                  <span className="list-title">{e.title}</span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
