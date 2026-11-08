import { StarMark } from './Logo.jsx'

/**
 * Generated design mockups for the CONCEPT projects.
 * Built only from the Astrexia palette. Text scales with the card width.
 */

function Brand({ project }) {
  return (
    <div className={`mk mk--brand mk--v${project.variant}`}>
      <div className="mk__brandmark">
        <StarMark />
        <b>{project.mark}</b>
        <small>{project.sub}</small>
      </div>
      <div className="mk__card mk__card--1">
        <b>{project.mark}</b>
        <i>{project.sub}</i>
        <span />
      </div>
      <div className="mk__card mk__card--2">
        <StarMark />
      </div>
      <div className="mk__swatches">
        <i />
        <i />
        <i />
        <i />
      </div>
    </div>
  )
}

function Poster({ project }) {
  if (project.variant === 1) {
    return (
      <div className="mk mk--label">
        <div className="mk__labelcard">
          <StarMark />
          <b>{project.mark}</b>
          <small>{project.sub}</small>
          <span className="mk__line" />
          <span className="mk__line mk__line--short" />
        </div>
        <div className="mk__sticker mk__sticker--1">
          <StarMark />
        </div>
        <div className="mk__sticker mk__sticker--2" />
      </div>
    )
  }
  return (
    <div className="mk mk--poster">
      <div className="mk__sheet mk__sheet--back">
        <b>{project.mark}</b>
      </div>
      <div className="mk__sheet mk__sheet--front">
        <small>{project.sub}</small>
        <b>{project.mark}</b>
        <span className="mk__line" />
        <span className="mk__line mk__line--short" />
      </div>
    </div>
  )
}

function Social({ project }) {
  if (project.variant === 1) {
    return (
      <div className="mk mk--stories">
        {['NEW', project.mark.toUpperCase(), 'SOON'].map((word, i) => (
          <div key={word} className={`mk__story mk__story--${i + 1}`}>
            <small>{project.sub}</small>
            <b>{word}</b>
            <span className="mk__line mk__line--short" />
          </div>
        ))}
      </div>
    )
  }
  return (
    <div className="mk mk--feed">
      <div className="mk__phone">
        <div className="mk__profile">
          <span className="mk__avatar">
            <StarMark />
          </span>
          <b>{project.mark.toLowerCase()}.{project.sub.toLowerCase()}</b>
        </div>
        <div className="mk__tiles">
          {Array.from({ length: 9 }).map((_, i) => (
            <span key={i} className={`mk__tile mk__tile--${(i % 5) + 1}`}>
              {i === 4 && <b>{project.mark}</b>}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}

function Web({ project }) {
  return (
    <div className={`mk mk--web mk--v${project.variant}`}>
      <div className="mk__browser">
        <div className="mk__chrome">
          <i />
          <i />
          <i />
          <span>concept-site.example</span>
        </div>
        <div className="mk__page">
          <div className="mk__nav">
            <b>{project.mark}</b>
            <span />
            <span />
            <span />
          </div>
          <div className="mk__hero">
            <div className="mk__copy">
              <strong>
                {project.mark} <em>{project.sub}</em>
              </strong>
              <span className="mk__line" />
              <span className="mk__line mk__line--short" />
              <u>Get started</u>
            </div>
            <div className="mk__art" />
          </div>
          <div className="mk__cards">
            <i />
            <i />
            <i />
          </div>
        </div>
      </div>
    </div>
  )
}

function Ad({ project }) {
  if (project.variant === 1) {
    return (
      <div className="mk mk--sale">
        <div className="mk__stripes" />
        <div className="mk__salecard">
          <small>{project.sub} Collection</small>
          <b>{project.mark}</b>
          <u>Shop now</u>
        </div>
        <div className="mk__badge">NEW</div>
      </div>
    )
  }
  return (
    <div className="mk mk--ad">
      <div className="mk__banner">
        <small>{project.sub}</small>
        <b>{project.mark}</b>
        <u>Learn more</u>
        <span className="mk__orb" />
      </div>
      <div className="mk__square">
        <StarMark />
        <b>{project.mark}</b>
      </div>
      <div className="mk__vertical">
        <small>{project.sub}</small>
        <b>{project.mark}</b>
      </div>
    </div>
  )
}

const mockups = { brand: Brand, poster: Poster, social: Social, web: Web, ad: Ad }

export default function ConceptMockup({ project }) {
  const Component = mockups[project.mockup] || Brand
  return <Component project={project} />
}

/** Shows the real image when provided, otherwise the generated mockup. */
export function PortfolioVisual({ project }) {
  if (project.image) {
    return <img className="project-image" src={project.image} alt={`${project.title} — ${project.type}`} loading="lazy" />
  }
  return <ConceptMockup project={project} />
}
