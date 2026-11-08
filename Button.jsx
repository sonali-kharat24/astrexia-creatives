import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

/**
 * variant: 'bloom' (default) | 'ghost' | 'light' | 'dark'
 * Pass `to` for internal routes, `href` for external links,
 * or neither for a regular <button>.
 */
export default function Button({
  to,
  href,
  variant = 'bloom',
  arrow = true,
  children,
  className = '',
  ...rest
}) {
  const classes = `btn btn--${variant} ${className}`.trim()
  const content = (
    <>
      <span>{children}</span>
      {arrow && <ArrowRight size={18} aria-hidden="true" className="btn__arrow" />}
    </>
  )

  let element
  if (to) {
    element = (
      <Link to={to} className={classes} {...rest}>
        {content}
      </Link>
    )
  } else if (href) {
    element = (
      <a href={href} className={classes} {...rest}>
        {content}
      </a>
    )
  } else {
    element = (
      <button className={classes} {...rest}>
        {content}
      </button>
    )
  }

  return (
    <motion.span className="btn-wrap" whileHover={{ y: -2 }} whileTap={{ scale: 0.97 }}>
      {element}
    </motion.span>
  )
}
