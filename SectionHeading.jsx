import Reveal from './Reveal.jsx'

export default function SectionHeading({ eyebrow, title, id, lead, center = false }) {
  return (
    <div className={`section-head${center ? ' center' : ''}`}>
      {eyebrow ? (
        <Reveal>
          <span className="eyebrow">{eyebrow}</span>
        </Reveal>
      ) : null}
      <Reveal delay={0.05}>
        <h2 id={id} className="section-title">
          {title}
        </h2>
      </Reveal>
      {lead ? (
        <Reveal delay={0.1}>
          <p className="lead">{lead}</p>
        </Reveal>
      ) : null}
    </div>
  )
}
