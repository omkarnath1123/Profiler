import { glance, highlights, links, person } from "../data/profile";
import { prettyUrl } from "../lib/prettyUrl";

export default function Hero() {
  return (
    <header className="hero">
      <nav className="topbar" aria-label="Profiles">
        <span className="monogram" aria-hidden="true">{person.initials}</span>
        <ul className="topbar-links">
          {links.map((link) => (
            <li key={link.label}>
              <a href={link.href} target="_blank" rel="noopener noreferrer">{link.label}</a>
            </li>
          ))}
        </ul>
      </nav>

      <div className="hero-grid">
        <div>
          {person.status && <p className="status">{person.status}</p>}
          <h1>{person.name}</h1>
          <p className="headline">{person.headline} <span className="focus">{person.focus}</span></p>
          <p className="lede">{person.tagline}</p>
          <p className="current">Currently {person.title}</p>
          <div className="actions">
            <a className="button button-primary" href={`mailto:${person.email}`}>Email me</a>
            <button className="button" type="button" onClick={() => window.print()}>Print / save as PDF</button>
          </div>
          {/* The buttons and top bar are hidden on paper, so print the contact details as text. */}
          <p className="print-only">{[person.email, ...links.map((link) => prettyUrl(link.href))].join("  ·  ")}</p>
        </div>

        <dl className="glance" aria-label="At a glance">
          {glance.map((row) => (
            <div key={row.label} className="glance-row">
              <dt>{row.label}</dt>
              <dd>{row.value}</dd>
            </div>
          ))}
        </dl>
      </div>

      <ul className="highlights tinted" aria-label="Highlights">
        {highlights.map((item) => (
          <li key={item.label}>
            <strong>{item.value}</strong>
            <span>{item.label}</span>
          </li>
        ))}
      </ul>
    </header>
  );
}
