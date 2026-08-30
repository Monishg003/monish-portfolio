import { useEffect, useState } from 'react'
import { profile, socials } from '../data.js'
import HeroVisual from './HeroVisual.jsx'

export default function Hero() {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((current) => (current + 1) % profile.roles.length)
    }, 2600)
    return () => clearInterval(timer)
  }, [])

  return (
    <section className="info-section" id="home">
      <div className="info">
        <div className="welcome">
          <span className="welcome-text">WELCOME TO MY PORTFOLIO</span>
          <span className="wave" aria-hidden="true">
            👋
          </span>
        </div>
        <h1 className="display-name">
          {profile.firstName} <span>{profile.lastName}</span>
        </h1>
        <span className="subtitle">
          <i className="fa-solid fa-play play-icon" />
          <span className="dynamic-subtitles">{profile.roles[index]}</span>
        </span>
        <div className="socials">
          {socials.map((social) => (
            <a
              key={social.label}
              className="social-icon"
              href={social.url}
              target="_blank"
              rel="noreferrer"
              aria-label={social.label}
            >
              <i className={social.icon} />
            </a>
          ))}
        </div>
      </div>
      <HeroVisual />
    </section>
  )
}
