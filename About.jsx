import PageHero from '../components/PageHero.jsx'
import Reveal from '../components/Reveal.jsx'
import SectionHeading from '../components/SectionHeading.jsx'
import CTASection from '../components/CTASection.jsx'
import Icon from '../components/Icons.jsx'
import { LogoMark } from '../components/Logo.jsx'
import { motion } from 'framer-motion'
import { usePageMeta } from '../hooks.js'
import { about } from '../data.js'

export default function About() {
  usePageMeta(
    'About Us | Astrexia Creatives',
    'Learn about Astrexia Creatives: our story, vision, mission and approach to creative design, strategic marketing and modern websites.',
  )
  return (
    <>
      <PageHero eyebrow="About Us" title="DESIGN WITH INTENT. GROW WITH PURPOSE.">
        <p>A creative and digital marketing agency built on one belief: great design should work as hard as great strategy.</p>
      </PageHero>

      <section className="section section-light" aria-labelledby="story-title">
        <div className="container editorial">
          <div className="ed-side">
            <SectionHeading eyebrow="01 · Our Story" id="story-title" title="OUR STORY." />
            <Reveal delay={0.1}>
              <motion.div className="ed-mark" animate={{ y: [0, -10, 0] }} transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}>
                <LogoMark size={96} />
              </motion.div>
            </Reveal>
          </div>
          <div className="ed-main">
            <Reveal><blockquote className="pull-quote">&ldquo;{about.quote}&rdquo;</blockquote></Reveal>
            {about.story.map((p, i) => (
              <Reveal key={i} delay={0.05 * i}><p className={i === 0 ? 'lead' : ''}>{p}</p></Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-dark" aria-label="Vision and mission">
        <div className="container two-col">
          <Reveal>
            <div className="vm-card">
              <span className="eyebrow">02 · Our Vision</span>
              <h2 className="section-title sm">OUR VISION.</h2>
              <p className="lead">{about.vision}</p>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="vm-card">
              <span className="eyebrow">03 · Our Mission</span>
              <h2 className="section-title sm">OUR MISSION.</h2>
              <p className="lead">{about.mission}</p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section section-light" aria-labelledby="approach-title">
        <div className="container">
          <SectionHeading eyebrow="04 · Our Approach" id="approach-title" title="OUR APPROACH." lead="Four principles guide every project we take on." />
          <div className="cards-4">
            {about.approach.map((a, i) => (
              <Reveal key={a.title} delay={i * 0.08}>
                <motion.div className="approach-card" whileHover={{ y: -8 }}>
                  <span className="ap-num">0{i + 1}</span>
                  <h3>{a.title}</h3>
                  <p>{a.text}</p>
                </motion.div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-blush" aria-labelledby="whyus-title">
        <div className="container two-col">
          <div>
            <SectionHeading eyebrow="05 · Why us" id="whyus-title" title="WHY ASTREXIA CREATIVES?" />
          </div>
          <div className="check-list" role="list">
            {about.why.map((w, i) => (
              <Reveal key={w} delay={i * 0.06} role="listitem">
                <div className="cl-item">
                  <span className="check"><Icon name="check" size={18} /></span>
                  {w}
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  )
}
