import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { X } from 'lucide-react'
import { PortfolioVisual } from './ConceptMockup.jsx'
import Button from './Button.jsx'

export default function ProjectModal({ project, onClose }) {
  const closeRef = useRef(null)

  useEffect(() => {
    closeRef.current?.focus()
    const previous = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    const onKey = (event) => event.key === 'Escape' && onClose()
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = previous
      window.removeEventListener('keydown', onKey)
    }
  }, [onClose])

  return (
    <motion.div
      className="modal"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.25 }}
      onClick={onClose}
    >
      <motion.div
        className="modal__panel"
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
        initial={{ opacity: 0, y: 30, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 20, scale: 0.98 }}
        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
        onClick={(event) => event.stopPropagation()}
      >
        <button
          ref={closeRef}
          type="button"
          className="modal__close"
          onClick={onClose}
          aria-label="Close preview"
        >
          <X size={22} />
        </button>

        <div className="modal__media">
          <PortfolioVisual project={project} />
        </div>

        <div className="modal__body">
          {project.concept && <span className="concept-tag concept-tag--inline">CONCEPT PROJECT</span>}
          <p className="eyebrow">
            {project.category} · {project.type}
          </p>
          <h3 id="modal-title">{project.title}</h3>
          <p>{project.summary}</p>

          <h4>Concept includes</h4>
          <ul className="modal__list">
            {project.deliverables.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>

          {project.concept && (
            <p className="modal__note">
              This is a fictional demonstration project created to show our design approach. It is
              not client work.
            </p>
          )}

          <Button to="/contact">Start a Project</Button>
        </div>
      </motion.div>
    </motion.div>
  )
}
