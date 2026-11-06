import { motion } from 'framer-motion'
import Mockup from './Mockup.jsx'

export default function ProjectCard({ project }) {
  return (
    <motion.article
      layout
      className="project-card"
      initial={{ opacity: 0, scale: 0.96 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.96 }}
      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -8 }}
    >
      <div className="project-visual">
        <Mockup kind={project.kind} variant={project.variant} />
        <span className="concept-badge">CONCEPT PROJECT</span>
      </div>
      <div className="project-body">
        <span className="project-cat">{project.category}</span>
        <h3>{project.title}</h3>
        <p>{project.summary}</p>
        {project.deliverables ? (
          <ul className="project-list">
            {project.deliverables.map((d) => (
              <li key={d}>{d}</li>
            ))}
          </ul>
        ) : null}
      </div>
    </motion.article>
  )
}
