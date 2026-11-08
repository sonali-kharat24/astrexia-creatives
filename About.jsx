import { Check } from 'lucide-react'
import PageTransition from '../components/PageTransition.jsx'
import PageHero from '../components/PageHero.jsx'
import Reveal from '../components/Reveal.jsx'
import SectionHeading from '../components/SectionHeading.jsx'
import CTASection from '../components/CTASection.jsx'
import { StarMark } from '../components/Logo.jsx'
import { iconMap } from '../components/icons.js'
import useSEO from '../hooks/useSEO.js'
import { about, whyFeatures } from '../data/content.js'

export default function About() {
  useSEO(
    'About Us | Astrexia Creatives',
    'Learn about Astrexia Creatives, a modern digital marketing and creative agency combining creativity, technology and strategy.',
  )

  return (
    <PageTransition>
      <PageHero
        eyebrow="About us"
        ghost="ABOUT"
        title={
          <>
            WE ARE A CREATIVE AGENCY FOR THE <em className="accent">DIGITAL</em> AGE.
          </>
        }
        text="Astrexia Creatives combines creativity, technology and strategic thinking to help businesses build a strong, memorable digital presence."
      />

      {/* Our Story */}
      <section className="section section--light" aria-labelledby="story-title">
        <div className="container split">
          <Reveal>
            <p className="eyebrow eyebrow--dark">Our story</p>
            <h2 id="story-title" className="h-section">
              WHERE CREATIVITY <em className="accent">MEETS</em> PURPOSE.
            </h2>
          </Reveal>
          <Reveal delay={0.1} className="split__body">
            {about.story.map((paragraph, i) => (
              <p key={i} className={i === 0 ? 'lead' : 'body-text'}>
                {paragraph}
              </p>
            ))}
          </Reveal>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="section section--dark" aria-labelledby="vm-title">
        <div className="container">
          <SectionHeading
            eyebrow="Direction"
            title={
              <span id="vm-title">
                OUR VISION &amp; <em className="accent">MISSION</em>
              </span>
            }
          />
          <div className="vm-grid">
            <Reveal>
              <article className="vm-card">
                <span className="vm-card__label">Our Vision</span>
                <StarMark className="vm-card__mark" />
                <p>{about.vision}</p>
              </article>
            </Reveal>
            <Reveal delay={0.1}>
              <article className="vm-card vm-card--bloom">
                <span className="vm-card__label">Our Mission</span>
                <StarMark className="vm-card__mark" />
                <p>{about.mission}</p>
              </article>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="section section--blush" aria-labelledby="approach-title">
        <div className="container">
          <SectionHeading
            eyebrow="Our approach"
            title={
              <span id="approach-title">
                HOW WE <em className="accent">WORK</em>
              </span>
            }
            text="A simple, collaborative way of working that keeps creative decisions grounded in your goals."
          />
          <ol className="approach-list">
            {about.approach.map((item, i) => (
              <Reveal as="li" key={item.title} className="approach-item" delay={i * 0.07}>
                <span className="approach-item__num">{String(i + 1).padStart(2, '0')}</span>
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </div>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      {/* Why Astrexia Creatives? */}
      <section className="section section--dark2" aria-labelledby="whyabout-title">
        <div className="container split split--top">
          <Reveal>
            <p className="eyebrow">Why Astrexia Creatives?</p>
            <h2 id="whyabout-title" className="h-section">
              CREATIVE FLAIR, <em className="accent">STRATEGIC</em> THINKING.
            </h2>
            <ul className="check-list">
              {about.values.map((value) => (
                <li key={value}>
                  <Check size={18} aria-hidden="true" /> {value}
                </li>
              ))}
            </ul>
          </Reveal>
          <div className="why-mini">
            {whyFeatures.map((feature, i) => {
              const Icon = iconMap[feature.icon]
              return (
                <Reveal key={feature.title} delay={i * 0.08}>
                  <div className="why-mini__card">
                    <span className="why-card__icon">{Icon && <Icon size={24} strokeWidth={1.5} />}</span>
                    <h3>{feature.title}</h3>
                    <p>{feature.text}</p>
                  </div>
                </Reveal>
              )
            })}
          </div>
        </div>
      </section>

      <CTASection
        text="Tell us about your brand and your goals. We would love to hear what you are building."
        label="LET'S TALK"
      />
    </PageTransition>
  )
}
