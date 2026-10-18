import { about, awards, education, experience, links, person, projects, skills } from "../data/profile";
import avatar from "../images/avatar.png";
import "./Cv.css";

export default function Cv() {
  return (
    <div className="resume-wrapper">
      <aside className="profile section-padding">
        <div className="picture-resume">
          <img src={avatar} alt={person.name} />
        </div>
        <h1>Omkar <br />Nath</h1>
        <p className="cv-role">{person.title}</p>

        <dl className="contact-list">
          <dt>Mail</dt><dd><a href={`mailto:${person.email}`}>{person.email}</a></dd>
          <dt>Home</dt><dd>{person.location}</dd>
          {links.filter((l) => l.label !== "Email").map((l) => (
            <div key={l.label} className="contact-row">
              <dt>{l.label}</dt>
              <dd><a href={l.href} target="_blank" rel="noopener noreferrer">{l.href.replace(/^https:\/\/(www\.)?/, "").replace(/\/$/, "")}</a></dd>
            </div>
          ))}
        </dl>

        <p className="contact-presentation">{person.tagline}</p>

        <h2 className="side-title">Education</h2>
        <p className="education-type">{education.degree}</p>
        <p className="inst-type">{education.school}</p>
        <p className="edu-year">{education.period}</p>

        <h2 className="side-title">Awards</h2>
        {awards.map((a) => (
          <div key={a.title} className="award">
            <p className="education-type">{a.title}</p>
            <p className="inst-type">{a.by} &middot; {a.date}</p>
            <p className="award-text">{a.text}</p>
          </div>
        ))}
      </aside>

      <main className="experience section-padding">
        <h2 className="section-heading">About</h2>
        {about.map((p) => <p key={p.slice(0, 20)} className="about-text">{p}</p>)}

        <h2 className="section-heading">Experience</h2>
        {experience.map((job) => (
          <section key={job.company} className="job">
            <div className="company-wrapper">
              <h3 className="job-company">{job.company}</h3>
              <p className="time">{job.period}</p>
              <p className="time">{job.place}</p>
            </div>
            <div className="job-wrapper">
              <h4 className="job-role">{job.role}</h4>
              <p className="company-description">{job.summary}</p>
              {job.groups.map((g, i) => (
                <div key={g.name || i}>
                  {g.name && <p className="group-name">{g.name}</p>}
                  <ul className="points">{g.points.map((pt) => <li key={pt}>{pt}</li>)}</ul>
                </div>
              ))}
            </div>
          </section>
        ))}

        <h2 className="section-heading">Projects</h2>
        <ul className="projects">
          {projects.map((p) => (
            <li key={p.name}>
              <p className="project-name">
                {p.href ? <a href={p.href} target="_blank" rel="noopener noreferrer">{p.name}</a> : p.name}
                <span className="project-year"> &middot; {p.year}</span>
              </p>
              <p>{p.text}</p>
            </li>
          ))}
        </ul>

        <h2 className="section-heading">Skills</h2>
        <div className="skills">
          {skills.map((s) => (
            <div key={s.group}>
              <h3 className="skill-group">{s.group}</h3>
              <ul className="chips">{s.items.map((it) => <li key={it}>{it}</li>)}</ul>
            </div>
          ))}
        </div>

        <section className="cta" aria-label="Contact">
          <h2 className="section-heading">Get in touch</h2>
          <p>Like what you see? <a href={`mailto:${person.email}`}>{person.email}</a></p>
        </section>

        <p className="print-hint"><button type="button" onClick={() => window.print()}>Print / save as PDF</button></p>
        <footer className="cv-footer">&copy; {person.name} {new Date().getFullYear()}</footer>
      </main>
    </div>
  );
}
