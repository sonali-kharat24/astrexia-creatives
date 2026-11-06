import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import Button from '../components/Button.jsx'
import Icon from '../components/Icons.jsx'
import { LogoMark } from '../components/Logo.jsx'
import Reveal from '../components/Reveal.jsx'
import SectionHeading from '../components/SectionHeading.jsx'
import CTASection from '../components/CTASection.jsx'
import ContactForm from '../components/ContactForm.jsx'
import ContactInfo from '../components/ContactInfo.jsx'
import ProjectCard from '../components/ProjectCard.jsx'
import { usePageMeta } from '../hooks.js'
import { homeServiceCards, whyItems, processSteps, featuredProjects } from '../data.js'

const ease = [0.22, 1, 0.36, 1]
const HEADLINE = ['WE TURN', 'IDEAS INTO', 'DIGITAL', 'EXPERIENCES.']

function Hero() {
  return (
    <section className="hero" aria-labelledby="hero-title">
      <div className="hero-bg" aria-hidden="true">
        <span className="blob blob-1" />
        <span className="blob blob-2" />
        <span className="grid-lines" />
      </div>

      <div className="container hero-inner">
        <div className="hero-copy">
          <motion.span
            className="eyebrow"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease }}
          >
            Digital Marketing &amp; Creative Agency
          </motion.span>

          <h1 id="hero-title" className="hero-title">
            {HEADLINE.map((line, i) => (
              <span className="line-mask" key={line}>
                <motion.span
                  className={`line${i === 2 ? ' accent' : ''}`}
                  initial={{ y: '110%' }}
                  animate={{ y: 0 }}
                  transition={{ duration: 0.9, delay: 0.15 + i * 0.12, ease }}
                >
                  {line}
                </motion.span>
              </span>
            ))}
          </h1>

          <motion.p
            className="hero-lead"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7, ease }}
          >
            We combine creativity, technology and strategic thinking to help brands stand out, connect with
            their audience and grow in the digital world.
          </motion.p>

          <motion.div
            className="btn-row"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.85, ease }}
          >
            <Button to="/services">Explore Our Services</Button>
            <Button to="/contact" variant="ghost" icon="arrowUpRight">
              Let&apos;s Work Together
            </Button>
          </motion.div>
        </div>

        <motion.div
          className="hero-art"
          aria-hidden="true"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.3, ease }}
        >
          <motion.span className="ring ring-1" animate={{ rotate: 360 }} transition={{ duration: 60, repeat: Infinity, ease: 'linear' }} />
          <motion.span className="ring ring-2" animate={{ rotate: -360 }} transition={{ duration: 80, repeat: Infinity, ease: 'linear' }} />
          <motion.span className="orb orb-1" animate={{ y: [0, -22, 0] }} transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }} />
          <motion.span className="orb orb-2" animate={{ y: [0, 18, 0] }} transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut' }} />
          <motion.div className="glass core" animate={{ y: [0, -12, 0] }} transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}>
            <LogoMark size={84} />
            <span>Think Creative.</span>
            <span className="grad">Grow Digital.</span>
          </motion.div>
          <motion.div className="glass chip chip-a" animate={{ y: [0, 10, 0] }} transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}>
            <Icon name="sparkle" size={18} /> Branding
          </motion.div>
          <motion.div className="glass chip chip-b" animate={{ y: [0, -10, 0] }} transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}>
            <Icon name="code" size={18} /> Web
          </motion.div>
          <motion.div className="glass chip chip-c" animate={{ y: [0, 12, 0] }} transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}>
            <Icon name="play" size={18} /> Reels
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

function Intro() {
  return (
    <section className="section section-light" aria-labelledby="intro-title">
      <div className="container split">
        <div>
          <SectionHeading eyebrow="Who we are" id="intro-title" title="CREATIVITY MEETS STRATEGY." />
          <Reveal delay={0.1}>
            <p className="lead">
              Astrexia Creatives is a digital marketing and creative agency. We help businesses build a
              strong digital presence through creative design, strategic marketing and modern website
              experiences.
            </p>
            <p>
              From identity and social content to websites and video, we shape every touchpoint so your
              brand looks sharp, speaks clearly and is easy to remember.
            </p>
            <div className="btn-row">
              <Button to="/about" variant="dark">
                About Astrexia
              </Button>
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.1} className="intro-visual">
          <div className="composition" aria-hidden="true">
            <motion.div className="comp-card comp-a" whileHover={{ rotate: -2, y: -6 }}>
              <Icon name="pen" size={30} />
              <strong>Design</strong>
              <span className="comp-lines"><i /><i /><i /></span>
            </motion.div>
            <motion.div className="comp-card comp-b" whileHover={{ rotate: 2, y: -6 }}>
              <Icon name="compass" size={30} />
              <strong>Strategy</strong>
              <span className="comp-lines"><i /><i /></span>
            </motion.div>
            <motion.div className="comp-card comp-c" animate={{ y: [0, -10, 0] }} transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}>
              <LogoMark size={56} />
            </motion.div>
            <span className="comp-ring" />
          </div>
        </Reveal>
      </div>
    </section>
  )
}

function ServicesSection() {
  return (
    <section className="section section-dark" aria-labelledby="services-title">
      <div className="container">
        <SectionHeading
          eyebrow="What we do"
          id="services-title"
          title="SERVICES BUILT FOR GROWTH."
          lead="Six core disciplines, one connected team."
        />
        <div className="cards-3">
          {homeServiceCards.map((s, i) => (
            <Reveal key={s.id} delay={(i % 3) * 0.08}>
              <motion.div className="service-card" whileHover={{ y: -10 }} transition={{ type: 'spring', stiffness: 300, damping: 20 }}>
                <span className="sc-num">{s.num}</span>
                <span className="sc-icon"><Icon name={s.icon} size={28} /></span>
                <h3>{s.title}</h3>
                <p>{s.summary}</p>
                <Link to={`/services#${s.id}`} className="text-link" aria-label={`Learn more about ${s.title}`}>
                  Learn more <Icon name="arrow" size={16} />
                </Link>
              </motion.div>
            </Reveal>
          ))}
        </div>
        <Reveal>
          <div className="center-row">
            <Button to="/services" variant="ghost">View All Services</Button>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

function Why() {
  return (
    <section className="section section-blush" aria-labelledby="why-title">
      <div className="container">
        <SectionHeading eyebrow="Why us" id="why-title" title="WHY CHOOSE ASTREXIA?" center />
        <div className="cards-4">
          {whyItems.map((w, i) => (
            <Reveal key={w.title} delay={i * 0.08}>
              <motion.div className="why-card" whileHover={{ y: -8 }}>
                <span className="why-icon"><Icon name={w.icon} size={26} /></span>
                <h3>{w.title}</h3>
                <p>{w.text}</p>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

function Process() {
  return (
    <section className="section section-light" aria-labelledby="process-title">
      <div className="container">
        <SectionHeading eyebrow="How we work" id="process-title" title="OUR PROCESS." lead="A clear path from first conversation to lasting growth." />
        <div className="timeline" role="list">
          {processSteps.map((p, i) => (
            <Reveal key={p.num} delay={i * 0.1} className="tl-item-wrap" role="listitem">
              <div className="tl-item">
                <span className="tl-dot"><b>{p.num}</b></span>
                <h3>{p.title}</h3>
                <p>{p.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

function Work() {
  return (
    <section className="section section-dark" aria-labelledby="work-title">
      <div className="container">
        <SectionHeading
          eyebrow="Selected work"
          id="work-title"
          title="SELECTED WORK."
          lead="Demonstration projects that show our approach. Every project below is a fictional CONCEPT PROJECT, created to illustrate our style, not real client work."
        />
        <div className="project-grid">
          {featuredProjects.map((p) => (
            <ProjectCard key={p.id} project={p} />
          ))}
        </div>
        <Reveal>
          <div className="center-row">
            <Button to="/portfolio" variant="ghost">View Full Portfolio</Button>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

function ContactSection() {
  return (
    <section className="section section-light" id="contact" aria-labelledby="contact-title">
      <div className="container">
        <SectionHeading eyebrow="Get in touch" id="contact-title" title="TELL US ABOUT YOUR PROJECT." />
        <div className="contact-grid">
          <Reveal><ContactForm /></Reveal>
          <Reveal delay={0.1}><ContactInfo /></Reveal>
        </div>
      </div>
    </section>
  )
}

export default function Home() {
  usePageMeta(
    'Astrexia Creatives | Think Creative. Grow Digital.',
    'Astrexia Creatives is a digital marketing and creative agency offering branding, social media, graphic design, website development, UI/UX and video editing.',
  )
  return (
    <>
      <Hero />
      <Intro />
      <ServicesSection />
      <Why />
      <Process />
      <Work />
      <CTASection />
      <ContactSection />
    </>
  )
}
