import { about, awards, education, links, person, projects, skills } from "../data/profile";
import { prettyUrl } from "../lib/prettyUrl";
import Experience from "./Experience";
import Hero from "./Hero";
import Section from "./Section";
import "./Cv.css";

export default function Cv() {
  return (
    <div className="page">
      <a className="skip-link" href="#main">Skip to content</a>
      <Hero />

      <main id="main">
        <Section title="About">
          {about.map((paragraph) => <p key={paragraph.slice(0, 20)} className="about-text">{paragraph}</p>)}
        </Section>

        <Section title="Experience">
          <Experience />
        </Section>

        <Section title="Recognition">
          <ul className="entries">
            {awards.map((award) => (
              <li key={award.title}>
                <p className="entry-title">{award.title}</p>
                <p className="entry-meta">{award.by} &middot; {award.date}</p>
                <p>{award.text}</p>
              </li>
            ))}
          </ul>
        </Section>

        <Section title="Skills">
          <dl className="skills">
            {skills.map((skill) => (
              <div key={skill.group} className="skill-row">
                <dt>{skill.group}</dt>
                <dd>{skill.items.join(" · ")}</dd>
              </div>
            ))}
          </dl>
        </Section>

        <Section title="Projects">
          <ul className="entries">
            {projects.map((project) => (
              <li key={project.name}>
                <p className="entry-title">
                  {project.href
                    ? <a href={project.href} target="_blank" rel="noopener noreferrer">{project.name}</a>
                    : project.name}
                </p>
                <p className="entry-meta">{project.year}</p>
                <p>{project.text}</p>
              </li>
            ))}
          </ul>
        </Section>

        <Section title="Education">
          <p className="entry-title">{education.degree}</p>
          <p>{education.school}</p>
          <p className="entry-meta">{education.period} &middot; {education.place}</p>
        </Section>

        {/* On paper the contact details are already printed under the intro. */}
        <Section title="Contact" screenOnly>
          <p>{person.pitch}</p>
          <a className="contact-email" href={`mailto:${person.email}`}>{person.email}</a>
          <ul className="contact-links">
            {links.map((link) => (
              <li key={link.label}>
                <a href={link.href} target="_blank" rel="noopener noreferrer">{prettyUrl(link.href)}</a>
              </li>
            ))}
          </ul>
        </Section>
      </main>

      <footer className="site-footer">&copy; {new Date().getFullYear()} {person.name}</footer>
    </div>
  );
}
