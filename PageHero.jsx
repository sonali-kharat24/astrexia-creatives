import { motion } from 'framer-motion'

const ease = [0.22, 1, 0.36, 1]

export default function PageHero({ eyebrow, title, children }) {
  return (
    <section className="page-hero">
      <div className="hero-bg" aria-hidden="true">
        <span className="blob blob-1" />
        <span className="blob blob-2" />
        <span className="grid-lines" />
      </div>
      <div className="container page-hero-inner">
        <motion.span
          className="eyebrow"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease }}
        >
          {eyebrow}
        </motion.span>
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease }}
        >
          {title}
        </motion.h1>
        {children ? (
          <motion.div
            className="page-hero-lead"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease }}
          >
            {children}
          </motion.div>
        ) : null}
      </div>
    </section>
  )
}
