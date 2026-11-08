import { motion, useReducedMotion } from 'framer-motion'

/** Fades and lifts its children into view once, when scrolled to. */
export default function Reveal({ as = 'div', delay = 0, y = 32, className, children, ...rest }) {
  const reduce = useReducedMotion()
  const Component = motion[as] || motion.div

  return (
    <Component
      className={className}
      initial={reduce ? false : { opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
      {...rest}
    >
      {children}
    </Component>
  )
}
