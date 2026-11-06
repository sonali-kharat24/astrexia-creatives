import { motion } from 'framer-motion'

// Scroll-reveal wrapper. Reduced-motion is handled globally by <MotionConfig reducedMotion="user">.
export default function Reveal({ children, delay = 0, y = 28, className, ...rest }) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-70px' }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
      {...rest}
    >
      {children}
    </motion.div>
  )
}
