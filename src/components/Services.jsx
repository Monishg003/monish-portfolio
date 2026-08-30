import { services } from '../data.js'

export default function Services() {
  return (
    <section className="services-section">
      <span className="section-title">What I can do?</span>
      <span className="section-subtitle">
        I may not be perfect but surely I&apos;m of some use :)
      </span>

      <div className="section-body" id="services">
        {services.map((service) => (
          <div className="service-card" key={service.title}>
            <i className={service.icon} />
            <span className="service-title">{service.title}</span>
          </div>
        ))}
      </div>
    </section>
  )
}
