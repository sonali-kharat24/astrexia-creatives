import { useEffect, useState } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import Logo from './Logo.jsx'
import Button from './Button.jsx'
import Icon from './Icons.jsx'
import { navLinks } from '../data.js'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { pathname } = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Close the mobile menu on route change.
  useEffect(() => setOpen(false), [pathname])

  // Lock page scroll + close with Escape while the menu is open.
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    const onKey = (e) => e.key === 'Escape' && setOpen(false)
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKey)
    }
  }, [open])

  return (
    <motion.header
      className={`navbar${scrolled || open ? ' is-scrolled' : ''}`}
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
    >
      <a href="#main" className="skip-link">
        Skip to content
      </a>
      <div className="container nav-inner">
        <Logo />

        <nav className="nav-desktop" aria-label="Main navigation">
          {navLinks.map((l) => (
            <NavLink key={l.to} to={l.to} end={l.to === '/'} className="nav-link">
              {({ isActive }) => (
                <>
                  <span>{l.label}</span>
                  {isActive ? (
                    <motion.span layoutId="nav-underline" className="nav-underline" />
                  ) : null}
                </>
              )}
            </NavLink>
          ))}
        </nav>

        <div className="nav-cta">
          <Button to="/contact" size="sm" icon={null}>
            Let&apos;s Talk
          </Button>
        </div>

        <button
          type="button"
          className="nav-toggle"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((v) => !v)}
        >
          <Icon name={open ? 'close' : 'menu'} size={26} />
        </button>
      </div>

      <AnimatePresence>
        {open ? (
          <motion.nav
            id="mobile-menu"
            className="nav-mobile"
            aria-label="Mobile navigation"
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.3 }}
          >
            <ul>
              {navLinks.map((l, i) => (
                <motion.li
                  key={l.to}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.05 + i * 0.06 }}
                >
                  <NavLink to={l.to} end={l.to === '/'} className="nav-mobile-link">
                    <span className="nm-num">0{i + 1}</span>
                    {l.label}
                  </NavLink>
                </motion.li>
              ))}
            </ul>
            <Button to="/contact" block icon="arrow">
              Let&apos;s Talk
            </Button>
          </motion.nav>
        ) : null}
      </AnimatePresence>
    </motion.header>
  )
}
