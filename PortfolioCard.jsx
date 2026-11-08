import { Link } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'
import { PortfolioVisual } from './ConceptMockup.jsx'

/**
 * Portfolio tile. With `onOpen` it is a button that opens the preview
 * modal; without it, it links to the Portfolio page.
 */
export default function PortfolioCard({ project, onOpen }) {
  const inner = (
    <>
      <div className="work-card__media">
        <PortfolioVisual project={project} />
        {project.concept && <span className="concept-tag">CONCEPT PROJECT</span>}
        <span className="work-card__overlay" aria-hidden="true">
          <span>
            View concept <ArrowUpRight size={18} />
          </span>
        </span>
      </div>
      <div className="work-card__meta">
        <h3>{project.title}</h3>
        <p>
          {project.type} <span aria-hidden="true">·</span> {project.category}
        </p>
      </div>
    </>
  )

  if (onOpen) {
    return (
      <button
        type="button"
        className="work-card"
        onClick={() => onOpen(project)}
        aria-label={`Preview ${project.title}${project.concept ? ' (concept project)' : ''}`}
      >
        {inner}
      </button>
    )
  }

  return (
    <Link to="/portfolio" className="work-card" aria-label={`${project.title} — view in portfolio`}>
      {inner}
    </Link>
  )
}
