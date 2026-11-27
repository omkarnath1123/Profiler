import { experience } from "../data/profile";

export default function Experience() {
  return experience.map((job) => (
    <article key={job.company} className="job">
      <header className="job-head">
        <div>
          <h3 className="job-company">{job.company}</h3>
          <p className="job-role">{job.role}</p>
        </div>
        <p className="job-meta">{job.period}<br />{job.place}</p>
      </header>
      <p className="job-summary">{job.summary}</p>
      {job.groups.map((group, index) => (
        <div key={group.name || index} className="job-group">
          {group.name && <h4 className="group-name">{group.name}</h4>}
          <ul className="points">{group.points.map((point) => <li key={point}>{point}</li>)}</ul>
        </div>
      ))}
    </article>
  ));
}
