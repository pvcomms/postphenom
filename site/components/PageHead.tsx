
type Sub = { title: string; href: string };

// An inner page's title, with an optional bar of links to its sections under the header.
export function PageHead({ title, sub }: { title: string; sub?: readonly Sub[] }) {
  return (
    <>
      {sub && (
        <nav className="subnav" aria-label={`${title}: sections`}>
          <ul className="container">
            {sub.map((s) => <li key={s.href}><a href={s.href}>{s.title}</a></li>)}
          </ul>
        </nav>
      )}
      <div className="container page-head">
        <h1 className="page-title">{title}</h1>
      </div>
    </>
  );
}
