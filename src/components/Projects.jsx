import { projects, profile } from '../data.js'
import AppButton from './AppButton.jsx'

export default function Projects() {
  return (
    <section className="projects-section">
      <span className="section-title">Portfolio</span>
      <span className="section-subtitle">Here are few samples of my work :)</span>

      <div className="section-body-projects" id="projects">
        {projects.map((project) => (
          <article className="banner-card" key={project.title}>
            <i className={project.icon} />
            <span className="service-title">{project.title}</span>
            <span className="project-company">{project.company}</span>
            <span className="service-description">{project.description}</span>
            <div className="project-tags">
              {project.tags.map((tag) => (
                <span key={tag}>{tag}</span>
              ))}
            </div>
          </article>
        ))}
      </div>

      <div style={{ height: 45 }} />
      <AppButton label="See more" href={profile.github} />
    </section>
  )
}
