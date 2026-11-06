import { Routes, Route, useLocation, Link } from 'react-router-dom'
import { AnimatePresence, MotionConfig } from 'framer-motion'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import PageTransition from './components/PageTransition.jsx'
import PageHero from './components/PageHero.jsx'
import Button from './components/Button.jsx'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Services from './pages/Services.jsx'
import Portfolio from './pages/Portfolio.jsx'
import Contact from './pages/Contact.jsx'
import { usePageMeta } from './hooks.js'

function NotFound() {
  usePageMeta('Page not found | Astrexia Creatives', 'The page you are looking for could not be found.')
  return (
    <>
      <PageHero eyebrow="404" title="PAGE NOT FOUND.">
        <p>The page you are looking for doesn&apos;t exist or has moved.</p>
        <div className="btn-row">
          <Button to="/">Back to Home</Button>
        </div>
      </PageHero>
      <section className="section">
        <div className="container">
          <p>
            Try the <Link to="/services">services</Link> or <Link to="/portfolio">portfolio</Link> pages.
          </p>
        </div>
      </section>
    </>
  )
}

export default function App() {
  const location = useLocation()
  return (
    // reducedMotion="user" makes Framer Motion respect the OS "reduce motion" setting.
    <MotionConfig reducedMotion="user">
      <Navbar />
      <AnimatePresence mode="wait" initial={false}>
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<PageTransition><Home /></PageTransition>} />
          <Route path="/about" element={<PageTransition><About /></PageTransition>} />
          <Route path="/services" element={<PageTransition><Services /></PageTransition>} />
          <Route path="/portfolio" element={<PageTransition><Portfolio /></PageTransition>} />
          <Route path="/contact" element={<PageTransition><Contact /></PageTransition>} />
          <Route path="*" element={<PageTransition><NotFound /></PageTransition>} />
        </Routes>
      </AnimatePresence>
      <Footer />
    </MotionConfig>
  )
}
