import PageHero from '../components/PageHero.jsx'
import Reveal from '../components/Reveal.jsx'
import Button from '../components/Button.jsx'
import Icon from '../components/Icons.jsx'
import Mockup from '../components/Mockup.jsx'
import CTASection from '../components/CTASection.jsx'
import { usePageMeta } from '../hooks.js'
import { services } from '../data.js'

export default function Services() {
  usePageMeta(
    'Services | Astrexia Creatives',
    'Digital marketing, social media management, graphic design, branding, website development, UI/UX design, creative content and video editing from Astrexia Creatives.',
  )
  return (
    <>
      <PageHero eyebrow="Our Services" title="EIGHT WAYS WE HELP YOUR BRAND GROW.">
        <p>Creative design, strategic marketing and modern web experiences, all under one roof.</p>
        <nav className="chip-nav" aria-label="Jump to a service">
          {services.map((s) => (
            <a key={s.id} href={`#${s.id}`}>{s.title}</a>
          ))}
        </nav>
      </PageHero>

      {services.map((s, i) => {
        const dark = i % 2 === 1
        return (
          <section
            key={s.id}
            id={s.id}
            className={`section service-detail ${dark ? 'section-dark' : 'section-light'}`}
            aria-labelledby={`${s.id}-title`}
          >
            <div className={`container sd-grid${i % 2 ? ' flip' : ''}`}>
              <Reveal className="sd-visual">
                <Mockup kind={s.visual} variant={s.variant} />
              </Reveal>

              <div className="sd-copy">
                <Reveal>
                  <span className="sd-badge">
                    <Icon name={s.icon} size={22} />
                    <b>0{i + 1}</b>
                  </span>
                  <h2 id={`${s.id}-title`} className="section-title sm">{s.title}</h2>
                  <p className="lead">{s.description}</p>
                </Reveal>

                <div className="sd-lists">
                  <Reveal delay={0.05}>
                    <h3>What we offer</h3>
                    <ul className="dot-list">
                      {s.offers.map((o) => <li key={o}>{o}</li>)}
                    </ul>
                  </Reveal>
                  <Reveal delay={0.1}>
                    <h3>Benefits for your business</h3>
                    <ul className="dot-list">
                      {s.benefits.map((b) => <li key={b}>{b}</li>)}
                    </ul>
                  </Reveal>
                </div>

                <Reveal delay={0.12}>
                  <Button to="/contact" variant={dark ? 'primary' : 'dark'}>
                    Enquire about {s.title}
                  </Button>
                </Reveal>
              </div>
            </div>
          </section>
        )
      })}

      <CTASection />
    </>
  )
}
