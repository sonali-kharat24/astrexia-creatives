import { useCallback, useMemo, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import PageTransition from '../components/PageTransition.jsx'
import PageHero from '../components/PageHero.jsx'
import PortfolioCard from '../components/PortfolioCard.jsx'
import ProjectModal from '../components/ProjectModal.jsx'
import CTASection from '../components/CTASection.jsx'
import useSEO from '../hooks/useSEO.js'
import { projects, portfolioCategories } from '../data/portfolio.js'

export default function Portfolio() {
  useSEO(
    'Portfolio | Astrexia Creatives',
    'Explore concept projects in branding, graphic design, social media, website development and marketing from Astrexia Creatives.',
  )

  const [filter, setFilter] = useState('All')
  const [active, setActive] = useState(null)

  const visible = useMemo(
    () => (filter === 'All' ? projects : projects.filter((p) => p.category === filter)),
    [filter],
  )
  const closeModal = useCallback(() => setActive(null), [])

  return (
    <PageTransition>
      <PageHero
        eyebrow="Portfolio"
        ghost="WORK"
        title={
          <>
            CONCEPTS THAT SHOW HOW WE <em className="accent">THINK.</em>
          </>
        }
        text="A showcase of fictional demonstration projects across branding, design, social media, websites and marketing."
      />

      <section className="section section--dark portfolio" aria-label="Portfolio projects">
        <div className="container">
          <p className="portfolio__notice">
            <strong>Every project here is a CONCEPT PROJECT.</strong> These are fictional
            demonstrations created to show our style. They are not real client work.
          </p>

          <div className="filters" role="group" aria-label="Filter projects by category">
            {portfolioCategories.map((category) => (
              <button
                key={category}
                type="button"
                className={`filter-btn${filter === category ? ' is-active' : ''}`}
                aria-pressed={filter === category}
                onClick={() => setFilter(category)}
              >
                {category}
              </button>
            ))}
          </div>

          <p className="portfolio__count" aria-live="polite">
            Showing {visible.length} concept {visible.length === 1 ? 'project' : 'projects'}
          </p>

          <motion.div layout className="work-grid">
            <AnimatePresence mode="popLayout">
              {visible.map((project) => (
                <motion.div
                  layout
                  key={project.id}
                  initial={{ opacity: 0, scale: 0.94 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.94 }}
                  transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                >
                  <PortfolioCard project={project} onOpen={setActive} />
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      <AnimatePresence>
        {active && <ProjectModal key={active.id} project={active} onClose={closeModal} />}
      </AnimatePresence>

      <CTASection
        text="Have a project in mind? Let's turn your idea into something real."
        label="START A PROJECT"
      />
    </PageTransition>
  )
}
