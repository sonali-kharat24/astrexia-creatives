import Reveal from './Reveal.jsx'
import Button from './Button.jsx'

/** Cherry Bloom call-to-action band, reused across pages. */
export default function CTASection({
  title = (
    <>
      READY TO MAKE YOUR BRAND <em className="accent">UNMISSABLE?</em>
    </>
  ),
  text = 'Let’s create something meaningful together. Your next digital chapter starts here.',
  label = 'START A PROJECT',
  to = '/contact',
}) {
  return (
    <section className="cta" aria-labelledby="cta-title">
      <div className="cta__bg" aria-hidden="true">
        <span className="cta__orb cta__orb--1" />
        <span className="cta__orb cta__orb--2" />
      </div>
      <div className="container cta__inner">
        <Reveal>
          <h2 id="cta-title" className="cta__title">
            {title}
          </h2>
          <p className="cta__text">{text}</p>
          <Button to={to} variant="light">
            {label}
          </Button>
        </Reveal>
      </div>
    </section>
  )
}
