// A section of a page: a small-capitals label in the left column, the body in the right.
export function Section({ id, label, children }: { id: string; label: string; children: React.ReactNode }) {
  return (
    <section className="section" id={id} aria-labelledby={`${id}-label`}>
      <h2 className="caps section-label" id={`${id}-label`}>{label}</h2>
      <div className="section-body">{children}</div>
    </section>
  );
}
