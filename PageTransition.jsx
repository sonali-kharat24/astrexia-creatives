import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { motion } from 'framer-motion'

// Wraps each page: page enter/exit animation, scroll to top, and #hash scrolling.
export default function PageTransition({ children }) {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    if (hash) {
      const t = setTimeout(() => {
        document.getElementById(hash.slice(1))?.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }, 380)
      return () => clearTimeout(t)
    }
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' })
    return undefined
  }, [pathname, hash])

  return (
    <motion.main
      id="main"
      tabIndex={-1}
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -12 }}
      transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.main>
  )
}
