import { Link } from 'react-router-dom'
import Logo from './Logo.jsx'
import Icon from './Icons.jsx'
import { navLinks, services } from '../data.js'
import { SITE, emailHref, whatsappHref, instagramHref } from '../config.js'

function Social({ href, label, icon }) {
  // Real link when configured, otherwise a clearly disabled placeholder (never a dead link).
  if (href) {
    return (
      <a
        className="social"
        href={href}
        target={href.startsWith('mailto:') ? undefined : '_blank'}
        rel="noopener noreferrer"
        aria-label={label}
      >
        <Icon name={icon} size={20} />
      </a>
    )
  }
  return (
    <span className="social is-pending" role="img" aria-label={`${label} (not added yet)`} title={`${label}: add in src/config.js`}>
      <Icon name={icon} size={20} />
    </span>
  )
}

export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <Logo />
            <p>
              Astrexia Creatives is a digital marketing and creative agency helping businesses build a
              strong digital presence through creative design, strategic marketing and modern website
              experiences.
            </p>
            <div className="socials">
              <Social href={instagramHref} label="Instagram" icon="instagram" />
              <Social href={whatsappHref} label="WhatsApp" icon="whatsapp" />
              <Social href={emailHref} label="Email" icon="mail" />
            </div>
          </div>

          <nav aria-label="Quick links">
            <h3>Quick Links</h3>
            <ul>
              {navLinks.map((l) => (
                <li key={l.to}>
                  <Link to={l.to}>{l.label}</Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Services">
            <h3>Services</h3>
            <ul>
              {services.map((s) => (
                <li key={s.id}>
                  <Link to={`/services#${s.id}`}>{s.title}</Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="footer-bottom">
          <p>
            © {year} {SITE.name}. All rights reserved.
          </p>
          <p className="footer-tagline">{SITE.tagline}</p>
        </div>
      </div>
    </footer>
  )
}
