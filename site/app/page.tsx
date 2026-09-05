import { site } from "@/content/site";
import { Mark } from "@/components/Mark";
import { Reveal } from "@/components/Reveal";

export default function Page() {
  return (
    <>
      <nav className="nav" aria-label="Primary">
        <div className="wrap">
          <a className="brand" href="#top"><Mark kind="glyph" /><span>{site.short}</span></a>
          <ul>
            {site.nav.map((n) => <li key={n.href}><a href={n.href}>{n.label}</a></li>)}
          </ul>
        </div>
      </nav>

      <main id="top">
        <header className="mast">
          <div className="wrap">
            <div className="eyebrow mono">{site.name} · est. {site.founded}</div>
            <div className="grid">
              <div>
                <h1 className="anno">
                  <span className="post">post</span>
                  <Mark kind="caret" className="caret" />
                  phenomenology
                </h1>
                <p className="dek">{site.tagline}</p>
              </div>
              <Mark kind="mark" className="mark" />
            </div>
          </div>
        </header>

        <section className="section" id="question">
          <div className="wrap">
            <div className="head">
              <div className="mono">{site.question.kicker}</div>
              <div>
                <h2 className="lede">{site.question.lede}</h2>
                <div className="body">{site.question.body.map((p, i) => <p key={i}>{p}</p>)}</div>
              </div>
            </div>
            <Reveal>
              <div className="aside">
                <div className="mono">{site.question.trades.kicker}</div>
                <ul className="trades">
                  {site.question.trades.items.map(([a, b]) => <li key={a}><b>{a}</b><span>{b}</span></li>)}
                </ul>
              </div>
            </Reveal>
            <Reveal>
              <div className="aside">
                <div className="mono">{site.question.example.kicker}</div>
                <p className="example">{site.question.example.text}</p>
              </div>
            </Reveal>
          </div>
        </section>

        <section className="section" id="method">
          <div className="wrap">
            <div className="head">
              <div className="mono">{site.method.kicker}</div>
              <div>
                <h2 className="lede">{site.method.lede}</h2>
                <div className="body">{site.method.body.map((p, i) => <p key={i}>{p}</p>)}</div>
              </div>
            </div>
            <Reveal>
              <ol className="steps">
                {site.method.steps.map((s) => <li key={s.name}><b>{s.name}</b><span>{s.text}</span></li>)}
              </ol>
            </Reveal>
          </div>
        </section>

        <section className="section" id="programme">
          <div className="wrap">
            <div className="head">
              <div className="mono">{site.programme.kicker}</div>
              <div>
                <h2 className="lede">{site.programme.lede}</h2>
                <Reveal>
                  <ul className="levels">
                    {site.programme.levels.map((l) => <li key={l.name}><b>{l.name}</b><span>{l.text}</span></li>)}
                  </ul>
                </Reveal>
              </div>
            </div>
          </div>
        </section>

        <section className="section" id="contribute">
          <div className="wrap">
            <div className="head">
              <div className="mono">{site.contribute.kicker}</div>
              <div>
                <h2 className="lede">{site.contribute.lede}</h2>
                <div className="body"><p>{site.contribute.body}</p></div>
                <a className="cta" href={`mailto:${site.contact}?subject=${encodeURIComponent("My account")}`}>
                  {site.contribute.cta}
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="section" id="papers">
          <div className="wrap">
            <div className="head">
              <div className="mono">{site.papers.kicker}</div>
              <div>
                <ul className="papers">
                  {site.papers.items.map((p) => <li key={p.n}><span className="n">{p.n}</span><span className="t">{p.title}</span><span className="s">{p.status}</span></li>)}
                </ul>
                <div className="aside" style={{ gridTemplateColumns: "1fr" }}>
                  <div className="mono">{site.aboutName.kicker}</div>
                  <p className="name-note">{site.aboutName.text}</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer>
        <div className="wrap">
          <Mark kind="mark" className="seal" />
          <div className="line"><b>{site.name}</b><br />{site.domain} · <a href={`mailto:${site.contact}`}>{site.contact}</a></div>
          <div className="hand">drawn, not computed</div>
        </div>
      </footer>
    </>
  );
}
