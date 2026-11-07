import { iconMap } from './icons.js'

/** Abstract, brand-coloured illustration for a service. Purely decorative. */
export default function ServiceVisual({ service, index }) {
  const Icon = iconMap[service.icon]
  return (
    <div className={`svis svis--${index % 4}`} aria-hidden="true">
      <span className="svis__ring svis__ring--1" />
      <span className="svis__ring svis__ring--2" />
      <span className="svis__ring svis__ring--3" />
      <div className="svis__core">{Icon && <Icon size={54} strokeWidth={1.25} />}</div>
      {service.chips.map((chip, i) => (
        <span key={chip} className={`svis__chip svis__chip--${i + 1}`}>
          {chip}
        </span>
      ))}
      <span className="svis__num">{service.number}</span>
    </div>
  )
}
