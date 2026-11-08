import { Check } from 'lucide-react'
import PageTransition from '../components/PageTransition.jsx'
import PageHero from '../components/PageHero.jsx'
import Reveal from '../components/Reveal.jsx'
import Button from '../components/Button.jsx'
import ServiceVisual from '../components/ServiceVisual.jsx'
import CTASection from '../components/CTASection.jsx'
import { iconMap } from '../components/icons.js'
import useSEO from '../hooks/useSEO.js'
import { services } from '../data/services.js'

const tones = ['dark', 'light', 'dark2', 'blush']

export default function Services() {
  useSEO(
    'Services | Astrexia Creatives',
    'Digital marketing, social media management, graphic design, branding, website development, UI/UX design, content development and video editing from Astrexia Creatives.',
  )

  return (
    <PageTransition>
      <PageHero
        eyebrow="Our services"
        ghost="SERVICES"
        title={
          <>
            EVERYTHING YOUR BRAND NEEDS TO <em className="accent">GROW</em> DIGITALLY.
          </>
        }
        text="Eight connected services, from strategy and design to websites and video. Use them together or pick exactly what you need."
      />

      <nav className="svc-index" aria-label="Jump to a service">
        <div className="container svc-index__inner">
          {services.map((service) => (
            <a key={service.slug} href={`#${service.slug}`} className="chip chip--sm">
              <span>{service.number}</span> {service.title}
            </a>
          ))}
        </div>
      </nav>

      {services.map((service, i) => {
        const tone = tones[i % tones.length]
        const Icon = iconMap[service.icon]
        const flip = i % 2 === 1
        return (
          <section
            key={service.slug}
            id={service.slug}
            className={`section svc-section section--${tone}${flip ? ' svc-section--flip' : ''}`}
            aria-labelledby={`${service.slug}-title`}
          >
            <div className="container svc-section__grid">
              <Reveal className="svc-section__main">
                <p className="svc-section__number">
                  <span>{service.number}</span>
                  <span className="svc-section__icon">{Icon && <Icon size={22} strokeWidth={1.5} />}</span>
                </p>
                <h2 id={`${service.slug}-title`} className="svc-section__title">
                  {service.title}
                </h2>
                <p className="lead">{service.description}</p>

                <div className="svc-section__lists">
                  <div>
                    <h3>What We Offer</h3>
                    <ul className="check-list">
                      {service.offers.map((offer) => (
                        <li key={offer}>
                          <Check size={16} aria-hidden="true" /> {offer}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h3>Benefits for Businesses</h3>
                    <ul className="benefit-list">
                      {service.benefits.map((benefit) => (
                        <li key={benefit}>{benefit}</li>
                      ))}
                    </ul>
                  </div>
                </div>

                <Button to={`/contact?service=${service.slug}`} variant={tone === 'dark' || tone === 'dark2' ? 'bloom' : 'dark'}>
                  Enquire about {service.title}
                </Button>
              </Reveal>

              <Reveal className="svc-section__visual" delay={0.12}>
                <ServiceVisual service={service} index={i} />
              </Reveal>
            </div>
          </section>
        )
      })}

      <CTASection />
    </PageTransition>
  )
}
