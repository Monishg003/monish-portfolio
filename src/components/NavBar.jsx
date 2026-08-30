import { useState } from 'react'
import AppButton from './AppButton.jsx'
import { profile } from '../data.js'

export default function NavBar() {
  const [open, setOpen] = useState(false)

  const close = () => setOpen(false)

  return (
    <section className="navbar">
      <div className="brand-wrap">
        <span>{'< '}</span>
        <span className="brand">{profile.firstName}</span>
        <span>{' />'}</span>
      </div>

      <button
        className="menu-toggle"
        type="button"
        aria-label="Toggle navigation"
        onClick={() => setOpen((value) => !value)}
      >
        <i className={open ? 'fa-solid fa-xmark' : 'fa-solid fa-bars'} />
      </button>

      <div className={`labels${open ? ' open' : ''}`}>
        <a className="navbar-label" href="#home" onClick={close}>
          HOME
        </a>
        <a className="navbar-label" href="#about" onClick={close}>
          ABOUT
        </a>
        <a className="navbar-label" href="#experience" onClick={close}>
          EXPERIENCE
        </a>
        <a className="navbar-label" href="#services" onClick={close}>
          SERVICES
        </a>
        <a className="navbar-label" href="#projects" onClick={close}>
          PROJECTS
        </a>
        <a className="navbar-label" href="#contact" onClick={close}>
          CONTACT
        </a>
        <AppButton label="RESUME" href={profile.resume} />
      </div>
    </section>
  )
}
