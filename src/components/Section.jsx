// A labelled band of the page: small title on the left, content on the right.
// screenOnly leaves the section out of the printed CV.
export default function Section({ title, screenOnly = false, children }) {
  const id = `section-${title.toLowerCase().replace(/\W+/g, "-")}`;
  return (
    <section className={screenOnly ? "section screen-only" : "section"} aria-labelledby={id}>
      <h2 id={id} className="section-title">{title}</h2>
      <div className="section-body">{children}</div>
    </section>
  );
}
