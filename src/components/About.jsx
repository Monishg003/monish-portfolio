import AppButton from './AppButton.jsx'
import AboutVisual from './AboutVisual.jsx'
import { about, education, profile } from '../data.js'

export default function About() {
  return (
    <section className="about-me-section">
      <span className="section-title" id="about">
        About Me
      </span>
      <span className="section-subtitle">Get to know me :)</span>

      <div className="about-section-body">
        <AboutVisual />

        <div className="about-details">
          <span className="intro-label">Who am I?</span>
          <span className="intro-heading">{about.heading}</span>
          <span className="intro-details">{about.description}</span>

          <div className="divider" />

          <span className="tech-label">Technologies I have worked with:</span>
          <div className="tech-stack">
            {about.tech.map((tech) => (
              <span className="tech-item-wrap" key={tech}>
                <i className="fa-solid fa-play play-icon" />
                <span className="tech-item">{tech}</span>
              </span>
            ))}
          </div>

          <div className="divider" />

          <div className="personal-row">
            <div>
              <span className="personal-label">Name: </span>
              <span className="personal-value">{profile.fullName}</span>
            </div>
            <div>
              <span className="personal-label">Email: </span>
              <span className="personal-value">{profile.email}</span>
            </div>
          </div>

          <div style={{ height: 15 }} />

          <div className="personal-row">
            <div>
              <span className="personal-label">Experience: </span>
              <span className="personal-value">{profile.experience}</span>
            </div>
            <div>
              <span className="personal-label">From: </span>
              <span className="personal-value">{profile.address}</span>
            </div>
          </div>

          <div style={{ height: 25 }} />

          <div className="work-row">
            <AppButton label="RESUME" href={profile.resume} />
            <span className="work-item">{education.school}</span>
            <span className="work-item">{education.degree}</span>
          </div>
        </div>
      </div>
    </section>
  )
}
