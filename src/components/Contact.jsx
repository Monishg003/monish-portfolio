import { contacts } from '../data.js'

export default function Contact() {
  return (
    <section className="contact-section">
      <span className="section-title">Get in Touch</span>
      <span className="section-subtitle">Let&apos;s build something together :)</span>

      <div className="contact-body" id="contact">
        {contacts.map((contact) => (
          <a
            className="contact-card"
            key={contact.title}
            href={contact.action}
            target="_blank"
            rel="noreferrer"
          >
            <i className={`${contact.icon} c-icon`} />
            <span className="c-title">{contact.title}</span>
            <span className="c-description">{contact.description}</span>
          </a>
        ))}
      </div>
    </section>
  )
}
