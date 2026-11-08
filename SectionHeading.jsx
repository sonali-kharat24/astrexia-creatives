import Reveal from './Reveal.jsx'

/** Consistent section heading: eyebrow, large title, optional text. */
export default function SectionHeading({ eyebrow, title, text, align = 'left', as: Tag = 'h2' }) {
  return (
    <Reveal className={`sh sh--${align}`}>
      {eyebrow && <p className="eyebrow">{eyebrow}</p>}
      <Tag className="sh__title">{title}</Tag>
      {text && <p className="sh__text">{text}</p>}
    </Reveal>
  )
}
