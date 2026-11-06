import { useMemo, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import PageHero from '../components/PageHero.jsx'
import ProjectCard from '../components/ProjectCard.jsx'
import CTASection from '../components/CTASection.jsx'
import { usePageMeta } from '../hooks.js'
import { projects, portfolioCategories } from '../data.js'

export default function Portfolio() {
  usePageMeta(
    'Portfolio | Astrexia Creatives',
    'Explore Astrexia Creatives concept projects across branding, graphic design, social media, website development and marketing.',
  )
  const [active, setActive] = useState('All')

  const visible = useMemo(
    () => (active === 'All' ? projects : projects.filter((p) => p.category === active)),
    [active],
  )

  return (
    <>
      <PageHero eyebrow="Portfolio" title="SELECTED WORK.">
        <p>
          A showcase of our creative direction. <strong>Every project here is a fictional CONCEPT PROJECT</strong>{' '}
          made to demonstrate our style. They are not real client work.
        </p>
      </PageHero>

      <section className="section section-light" aria-label="Portfolio projects">
        <div className="container">
          <div className="filters" role="group" aria-label="Filter projects by category">
            {portfolioCategories.map((c) => (
              <button
                key={c}
                type="button"
                className={`filter${active === c ? ' is-active' : ''}`}
                aria-pressed={active === c}
                onClick={() => setActive(c)}
              >
                {active === c ? <motion.span layoutId="filter-pill" className="filter-pill" /> : null}
                <span>{c}</span>
              </button>
            ))}
          </div>

          <p className="filter-count" role="status" aria-live="polite">
            Showing {visible.length} concept {visible.length === 1 ? 'project' : 'projects'}
            {active !== 'All' ? ` in ${active}` : ''}
          </p>

          <motion.div layout className="project-grid">
            <AnimatePresence mode="popLayout">
              {visible.map((p) => (
                <ProjectCard key={p.id} project={p} />
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      <CTASection />
    </>
  )
}
