import PageHero from '../components/PageHero.jsx'
import Reveal from '../components/Reveal.jsx'
import ContactForm from '../components/ContactForm.jsx'
import ContactInfo from '../components/ContactInfo.jsx'
import { usePageMeta } from '../hooks.js'

export default function Contact() {
  usePageMeta(
    'Contact Us | Astrexia Creatives',
    'Start a project with Astrexia Creatives. Send an enquiry about branding, marketing, design, websites or video.',
  )
  return (
    <>
      <PageHero eyebrow="Contact Us" title="LET'S BUILD SOMETHING UNMISSABLE.">
        <p>Tell us about your project and we&apos;ll take it from there.</p>
      </PageHero>

      <section className="section section-light" aria-label="Contact">
        <div className="container contact-grid">
          <Reveal><ContactForm /></Reveal>
          <Reveal delay={0.1}><ContactInfo withWhatsApp /></Reveal>
        </div>
      </section>
    </>
  )
}
