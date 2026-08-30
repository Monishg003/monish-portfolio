import { experience } from '../data.js'

export default function Experience() {
  return (
    <section className="experience-section">
      <span className="section-title" id="experience">
        Experience
      </span>
      <span className="section-subtitle">Where I have been building :)</span>

      <div className="experience-body">
        {experience.map((job) => (
          <article className="experience-card" key={`${job.company}-${job.period}`}>
            <h3>{job.role}</h3>
            <p className="experience-meta">
              {job.company} · {job.location} · {job.period}
            </p>
            <ul>
              {job.highlights.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  )
}
