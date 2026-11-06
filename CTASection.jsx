import { motion } from 'framer-motion'
import Button from './Button.jsx'
import Reveal from './Reveal.jsx'

export default function CTASection() {
  return (
    <section className="section" aria-labelledby="cta-title">
      <div className="container">
        <Reveal>
          <div className="cta-card">
            <motion.span
              className="cta-orb"
              aria-hidden="true"
              animate={{ y: [0, -16, 0] }}
              transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
            />
            <h2 id="cta-title">READY TO MAKE YOUR BRAND UNMISSABLE?</h2>
            <p>Let&apos;s create something meaningful together. Your next digital chapter starts here.</p>
            <Button to="/contact" variant="light">
              START A PROJECT
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
