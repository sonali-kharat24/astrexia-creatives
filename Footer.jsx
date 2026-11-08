import { Link } from 'react-router-dom'
import Logo from './Logo.jsx'
import { navLinks } from '../data/content.js'
import { services } from '../data/services.js'
import { siteConfig } from '../config/site.js'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__grid">
          <div className="footer__brand">
            <Logo />
            <p>
              Astrexia Creatives is a digital marketing and creative agency helping businesses build
              a strong digital presence through creative design, strategic marketing and modern
              website experiences.
            </p>
            <p className="footer__tagline">{siteConfig.tagline}</p>
          </div>

          <div className="footer__col">
            <h3>Quick Links</h3>
            <ul>
              {navLinks.map((link) => (
                <li key={link.to}>
                  <Link to={link.to}>{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer__col">
            <h3>Services</h3>
            <ul>
              {services.map((service) => (
                <li key={service.slug}>
                  <Link to={`/services#${service.slug}`}>{service.title}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer__col">
            <h3>Follow</h3>
            <ul className="footer__social">
              {Object.entries(siteConfig.social).map(([name, url]) => (
                <li key={name}>
                  {url ? (
                    <a href={url} target="_blank" rel="noopener noreferrer">
                      {name}
                    </a>
                  ) : (
                    <span className="social-placeholder" title="Add this link in src/config/site.js">
                      {name} <em>(placeholder)</em>
                    </span>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="footer__bottom">
          <p>
            &copy; {year} {siteConfig.name}. All rights reserved.
          </p>
          <p>{siteConfig.tagline}</p>
        </div>
      </div>
    </footer>
  )
}
