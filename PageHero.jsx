import { motion, useReducedMotion } from 'framer-motion'

/** Cherry Noir hero used at the top of the inner pages. */
export default function PageHero({ eyebrow, title, text, ghost }) {
  const reduce = useReducedMotion()
  const item = (delay) => ({
    initial: reduce ? false : { opacity: 0, y: 28 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] },
  })

  return (
    <section className="page-hero">
      <div className="page-hero__bg" aria-hidden="true">
        <span className="orb orb--1" />
        <span className="orb orb--3" />
        <span className="page-hero__ghost">{ghost}</span>
      </div>
      <div className="container page-hero__inner">
        <motion.p className="eyebrow" {...item(0.1)}>
          {eyebrow}
        </motion.p>
        <motion.h1 className="page-hero__title" {...item(0.2)}>
          {title}
        </motion.h1>
        {text && (
          <motion.p className="page-hero__text" {...item(0.35)}>
            {text}
          </motion.p>
        )}
      </div>
    </section>
  )
}
