import { site, parts } from "@/content/site";
import { Mark } from "@/components/Mark";
import { RunningHead } from "@/components/RunningHead";

function PartHead({ id, numeral, title }: { id: string; numeral: string; title: string }) {
  return (
    <header className="part-head">
      <span className="caps numeral">§ {numeral}</span>
      <h2 id={`${id}-title`}>{title}</h2>
    </header>
  );
}

export default function Page() {
  const q = site.question;
  const mailto = `mailto:${site.contact}?subject=${encodeURIComponent(site.contribute.subject)}`;

  return (
    <>
      <RunningHead name={site.name} parts={parts.map(({ id, title }) => ({ id, title }))} />

      <main>
        {/* Title page */}
        <header className="masthead" id="top">
          <Mark kind="mark" className="masthead-mark" />
          <h1 className="wordmark">
            <span className="caps line">{site.masthead.line}</span>
            <span className="correction">
              <span className="hand post">{site.masthead.hand}</span>
              <Mark kind="caret" className="caret" />
              {site.masthead.set}
            </span>
          </h1>
          <hr className="short" />
          <p className="statement">{site.tagline}</p>
          <p className="caps imprint">{site.masthead.imprint}</p>
        </header>

        <nav className="contents" aria-label="Contents">
          <span className="caps contents-label">{site.masthead.contents}</span>
          <ol>
            {parts.map((p) => (
              <li key={p.id}>
                <span className="caps numeral">{p.numeral}</span>
                <a href={`#${p.id}`}>{p.title}</a>
              </li>
            ))}
          </ol>
        </nav>

        {/* I. The question */}
        <section className="part" id={q.id} aria-labelledby={`${q.id}-title`}>
          <div className="text">
            <PartHead id={q.id} numeral={q.numeral} title={q.title} />
            <p className="opening">{q.opening}</p>
            {q.body.map((p, i) => <p key={i}>{p}</p>)}
          </div>
          <aside className="notes">
            <div className="note">
              <span className="caps note-label">{q.trades.title}</span>
              <ul className="trades">
                {q.trades.items.map(([a, b]) => <li key={a}>{a} <em>{b}</em></li>)}
              </ul>
            </div>
            <div className="note">
              <span className="caps note-label">{q.example.title}</span>
              <p className="note-text">{q.example.text}</p>
            </div>
          </aside>
        </section>

        {/* II. Method */}
        <section className="part" id={site.method.id} aria-labelledby={`${site.method.id}-title`}>
          <div className="text">
            <PartHead id={site.method.id} numeral={site.method.numeral} title={site.method.title} />
            <p className="opening">{site.method.opening}</p>
            {site.method.body.map((p, i) => <p key={i}>{p}</p>)}
            <ol className="steps">
              {site.method.steps.map((s) => (
                <li key={s.name}><b>{s.name}</b><span>{s.text}</span></li>
              ))}
            </ol>
          </div>
        </section>

        {/* III. Programme */}
        <section className="part" id={site.programme.id} aria-labelledby={`${site.programme.id}-title`}>
          <div className="text">
            <PartHead id={site.programme.id} numeral={site.programme.numeral} title={site.programme.title} />
            <p className="opening">{site.programme.opening}</p>
            <dl className="levels">
              {site.programme.levels.map((l) => (
                <div key={l.name}><dt>{l.name}</dt><dd>{l.text}</dd></div>
              ))}
            </dl>
          </div>
        </section>

        {/* IV. Call for accounts */}
        <section className="part" id={site.contribute.id} aria-labelledby={`${site.contribute.id}-title`}>
          <div className="text">
            <PartHead id={site.contribute.id} numeral={site.contribute.numeral} title={site.contribute.title} />
            <p className="opening">{site.contribute.opening}</p>
            <p>{site.contribute.body}</p>
            <a className="button" href={mailto}>{site.contribute.cta}</a>
            <p className="address">{site.contact}</p>
          </div>
        </section>

        {/* V. Working papers */}
        <section className="part" id={site.papers.id} aria-labelledby={`${site.papers.id}-title`}>
          <div className="text">
            <PartHead id={site.papers.id} numeral={site.papers.numeral} title={site.papers.title} />
            <table className="register">
              <thead>
                <tr>{site.papers.columns.map((c) => <th key={c} scope="col">{c}</th>)}</tr>
              </thead>
              <tbody>
                {site.papers.items.map((p) => (
                  <tr key={p.n}>
                    <td className="num">{p.n}</td>
                    <td className="title">{p.title}</td>
                    <td className="status">{p.status}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* VI. On the name */}
        <section className="part" id={site.aboutName.id} aria-labelledby={`${site.aboutName.id}-title`}>
          <div className="text">
            <PartHead id={site.aboutName.id} numeral={site.aboutName.numeral} title={site.aboutName.title} />
            <p>{site.aboutName.text}</p>
          </div>
        </section>
      </main>

      <footer className="colophon">
        <hr className="short" />
        <Mark kind="glyph" className="colophon-mark" />
        <p className="caps colophon-name">{site.name}</p>
        <p>{site.domain} · <a href={`mailto:${site.contact}`}>{site.contact}</a></p>
        <p className="caps rights">© {site.founded}</p>
      </footer>
    </>
  );
}
