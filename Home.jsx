import { Link } from 'react-router-dom'
import { motion, useReducedMotion } from 'framer-motion'
import { ArrowRight, ArrowUpRight } from 'lucide-react'
import PageTransition from '../components/PageTransition.jsx'
import Reveal from '../components/Reveal.jsx'
import Button from '../components/Button.jsx'
import SectionHeading from '../components/SectionHeading.jsx'
import CTASection from '../components/CTASection.jsx'
import PortfolioCard from '../components/PortfolioCard.jsx'
import { iconMap } from '../components/icons.js'
import useSEO from '../hooks/useSEO.js'
import { featuredServices, services } from '../data/services.js'
import { homeProjects } from '../data/portfolio.js'
import { whyFeatures, processSteps, introTags } from '../data/content.js'
import { siteConfig, isPlaceholder, contactLinks } from '../config/site.js'

const heroLines = [
  [{ text: 'WE' }, { text: 'TURN' }, { text: 'IDEAS' }],
  [{ text: 'INTO' }, { text: 'DIGITAL', accent: true }],
  [{ text: 'EXPERIENCES.' }],
]

function Hero() {
  const reduce = useReducedMotion()
  let wordIndex = 0

  return (
    <section className="hero">
      <div className="hero__bg" aria-hidden="true">
        <span className="orb orb--1" />
        <span className="orb orb--2" />
        <span className="orb orb--3" />
        <span className="hero__grid" />
        <svg className="hero__ring" viewBox="0 0 400 400" fill="none">
          <circle cx="200" cy="200" r="190" stroke="currentColor" strokeWidth="1" strokeDasharray="2 10" />
          <circle cx="200" cy="200" r="140" stroke="currentColor" strokeWidth="1" />
          <circle cx="200" cy="200" r="90" stroke="currentColor" strokeWidth="1" strokeDasharray="6 8" />
          <circle cx="200" cy="10" r="6" fill="currentColor" />
          <circle cx="340" cy="200" r="4" fill="currentColor" />
        </svg>
        <span className="hero__ghost">ASTREXIA</span>
      </div>

      <div className="container hero__inner">
        <motion.p
          className="eyebrow"
          initial={reduce ? false : { opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
        >
          Digital Marketing &amp; Creative Agency
        </motion.p>

        <h1 className="hero__title" aria-label="We turn ideas into digital experiences.">
          {heroLines.map((line, li) => (
            <span className="hero__line" key={li} aria-hidden="true">
              {line.map((word) => {
                const delay = 0.25 + wordIndex++ * 0.09
                return (
                  <span className="hero__mask" key={word.text}>
                    <motion.span
                      className={`hero__word${word.accent ? ' accent' : ''}`}
                      initial={reduce ? false : { y: '110%' }}
                      animate={{ y: 0 }}
                      transition={{ duration: 0.9, delay, ease: [0.22, 1, 0.36, 1] }}
                    >
                      {word.text}
                    </motion.span>
                  </span>
                )
              })}
            </span>
          ))}
        </h1>

        <motion.p
          className="hero__desc"
          initial={reduce ? false : { opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
        >
          We combine creativity, technology and strategic thinking to help brands stand out, connect
          with their audience and grow in the digital world.
        </motion.p>

        <motion.div
          className="hero__actions"
          initial={reduce ? false : { opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.05 }}
        >
          <Button to="/services">Explore Our Services</Button>
          <Button to="/contact" variant="ghost">
            Let&rsquo;s Work Together
          </Button>
        </motion.div>
      </div>

      <div className="container hero__meta" aria-hidden="true">
        <span className="hero__scroll">
          <i /> Scroll
        </span>
        <span className="hero__tag">{siteConfig.tagline}</span>
      </div>
    </section>
  )
}

function Intro() {
  return (
    <section className="section section--light intro" aria-labelledby="intro-title">
      <div className="container intro__grid">
        <div className="intro__copy">
          <Reveal>
            <p className="eyebrow eyebrow--dark">Who we are</p>
            <h2 id="intro-title" className="h-section">
              CREATIVITY MEETS <em className="accent">STRATEGY.</em>
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="lead">
              Astrexia Creatives is a modern digital creative agency. We help businesses build a
              strong digital presence through creative design, strategic marketing and modern
              website experiences.
            </p>
            <p className="body-text">
              Every project begins with a simple belief: striking design only matters when it
              serves a clear purpose. So we pair imaginative thinking with practical planning to
              create brands that look remarkable and work hard online.
            </p>
            <Button to="/about" variant="dark">
              About Astrexia
            </Button>
          </Reveal>
        </div>

        <Reveal className="intro__visual" delay={0.15}>
          <div className="intro__composition" aria-hidden="true">
            <span className="shape shape--1" />
            <span className="shape shape--2" />
            <span className="shape shape--3" />
            <div className="intro__glass">
              <span>Think Creative.</span>
              <strong>Grow Digital.</strong>
            </div>
            {introTags.map((tag, i) => (
              <span key={tag} className={`intro__tag intro__tag--${i + 1}`}>
                {tag}
              </span>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}

function ServicesPreview() {
  return (
    <section className="section section--dark" aria-labelledby="services-title">
      <div className="container">
        <div className="section__head">
          <SectionHeading
            eyebrow="What we do"
            title={
              <span id="services-title">
                SERVICES BUILT FOR <em className="accent">DIGITAL GROWTH</em>
              </span>
            }
          />
          <Reveal delay={0.1}>
            <Button to="/services" variant="ghost">
              All Services
            </Button>
          </Reveal>
        </div>

        <div className="svc-grid">
          {featuredServices.map((service, i) => {
            const Icon = iconMap[service.icon]
            return (
              <Reveal key={service.slug} delay={(i % 3) * 0.08}>
                <motion.article className="svc-card" whileHover={{ y: -8 }} transition={{ duration: 0.3 }}>
                  <span className="svc-card__num">{String(i + 1).padStart(2, '0')}</span>
                  <span className="svc-card__icon">{Icon && <Icon size={26} strokeWidth={1.5} />}</span>
                  <h3 className="svc-card__title">{service.homeTitle || service.title}</h3>
                  <p className="svc-card__text">{service.short}</p>
                  <Link to={`/services#${service.slug}`} className="svc-card__link">
                    Learn More <ArrowRight size={16} />
                  </Link>
                </motion.article>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}

function Why() {
  return (
    <section className="section section--blush" aria-labelledby="why-title">
      <div className="container">
        <SectionHeading
          eyebrow="Why choose Astrexia?"
          title={
            <span id="why-title">
              A PARTNER THAT <em className="accent">THINKS</em> BEFORE IT DESIGNS
            </span>
          }
          text="Four principles guide every brief, from the first conversation to the final delivery."
        />
        <div className="why-grid">
          {whyFeatures.map((feature, i) => {
            const Icon = iconMap[feature.icon]
            return (
              <Reveal key={feature.title} delay={i * 0.08}>
                <motion.div className="why-card" whileHover={{ y: -6 }} transition={{ duration: 0.3 }}>
                  <span className="why-card__index">{String(i + 1).padStart(2, '0')}</span>
                  <span className="why-card__icon">{Icon && <Icon size={28} strokeWidth={1.4} />}</span>
                  <h3>{feature.title}</h3>
                  <p>{feature.text}</p>
                </motion.div>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}

function Process() {
  return (
    <section className="section section--dark2" aria-labelledby="process-title">
      <div className="container">
        <SectionHeading
          eyebrow="Our process"
          title={
            <span id="process-title">
              FROM FIRST IDEA TO <em className="accent">REAL GROWTH</em>
            </span>
          }
          align="center"
        />
        <ol className="process">
          {processSteps.map((step, i) => (
            <Reveal as="li" key={step.number} className="process__step" delay={i * 0.1}>
              <span className="process__node" aria-hidden="true" />
              <span className="process__num">{step.number}</span>
              <h3>{step.title}</h3>
              <p>{step.text}</p>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  )
}

function SelectedWork() {
  return (
    <section className="section section--light" aria-labelledby="work-title">
      <div className="container">
        <div className="section__head">
          <SectionHeading
            eyebrow="Selected work"
            title={
              <span id="work-title">
                CONCEPTS THAT SHOW OUR <em className="accent">APPROACH</em>
              </span>
            }
            text="A preview of fictional demonstration projects. Every piece below is a concept created to show our style, not work for a real client."
          />
          <Reveal delay={0.1}>
            <Button to="/portfolio" variant="dark">
              View All Projects
            </Button>
          </Reveal>
        </div>
        <div className="work-grid work-grid--home">
          {homeProjects.map((project, i) => (
            <Reveal key={project.id} delay={(i % 2) * 0.1}>
              <PortfolioCard project={project} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

function ContactPreview() {
  const { email, whatsapp } = siteConfig.contact
  const emailLink = contactLinks.email(email)
  const whatsappLink = contactLinks.whatsapp(whatsapp)

  return (
    <section className="section section--dark cpv" aria-labelledby="cpv-title">
      <div className="container cpv__grid">
        <Reveal>
          <p className="eyebrow">Get in touch</p>
          <h2 id="cpv-title" className="h-section">
            TELL US ABOUT YOUR <em className="accent">PROJECT</em>
          </h2>
          <p className="lead lead--dark">
            Have an idea, a brand to build or a website to rebuild? Choose what you need help with
            and we will take it from there on the Contact page.
          </p>
          <Button to="/contact">Contact Us</Button>
        </Reveal>

        <Reveal delay={0.12}>
          <div className="cpv__panel">
            <p className="cpv__label">I&rsquo;m interested in&hellip;</p>
            <div className="chip-row">
              {services.map((service) => (
                <Link key={service.slug} to={`/contact?service=${service.slug}`} className="chip">
                  {service.title}
                </Link>
              ))}
            </div>
            <div className="cpv__contacts">
              <p>
                <span>Email</span>
                {emailLink ? <a href={emailLink}>{email}</a> : <em className="placeholder">{email}</em>}
              </p>
              <p>
                <span>WhatsApp</span>
                {whatsappLink ? (
                  <a href={whatsappLink}>{whatsapp}</a>
                ) : (
                  <em className="placeholder">{whatsapp}</em>
                )}
              </p>
              {isPlaceholder(email) && (
                <small>Contact details are placeholders. Update them in src/config/site.js.</small>
              )}
            </div>
            <Link to="/contact" className="cpv__more">
              Open the enquiry form <ArrowUpRight size={18} />
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

export default function Home() {
  useSEO(
    'Astrexia Creatives | Digital Marketing & Creative Agency',
    'Astrexia Creatives helps brands stand out and grow online through creative design, strategic digital marketing and modern website experiences. Think Creative. Grow Digital.',
  )

  return (
    <PageTransition>
      <Hero />
      <Intro />
      <ServicesPreview />
      <Why />
      <Process />
      <SelectedWork />
      <CTASection />
      <ContactPreview />
    </PageTransition>
  )
}
