// The title block of a page: the title and, under it, one sentence.
export function PageHead({ title, lede }: { title: string; lede?: string }) {
  return (
    <header className="page-head">
      <h1>{title}</h1>
      {lede && <p className="lede">{lede}</p>}
    </header>
  );
}
