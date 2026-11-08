import { useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { Mail, MessageCircle, AtSign, MapPin } from 'lucide-react'
import PageTransition from '../components/PageTransition.jsx'
import PageHero from '../components/PageHero.jsx'
import Reveal from '../components/Reveal.jsx'
import Button from '../components/Button.jsx'
import useSEO from '../hooks/useSEO.js'
import { services } from '../data/services.js'
import { siteConfig, isPlaceholder, contactLinks } from '../config/site.js'
import { submitEnquiry } from '../lib/submitEnquiry.js'

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/
const PHONE_PATTERN = /^\+?[\d\s\-().]{7,20}$/

const emptyForm = {
  name: '',
  email: '',
  phone: '',
  company: '',
  service: '',
  details: '',
  website: '', // honeypot: must stay empty
}

function validate(values) {
  const errors = {}
  if (!values.name.trim()) errors.name = 'Please enter your full name.'
  else if (values.name.trim().length < 2) errors.name = 'Your name looks too short.'

  if (!values.email.trim()) errors.email = 'Please enter your email address.'
  else if (!EMAIL_PATTERN.test(values.email.trim()))
    errors.email = 'Please enter a valid email address, for example name@example.com.'

  if (values.phone.trim() && !PHONE_PATTERN.test(values.phone.trim()))
    errors.phone = 'Please enter a valid phone number, or leave this field empty.'

  if (!values.service) errors.service = 'Please choose a service.'

  if (!values.details.trim()) errors.details = 'Please tell us a little about your project.'
  else if (values.details.trim().length < 20)
    errors.details = 'Please add a few more details (at least 20 characters).'

  return errors
}

function Field({ id, label, required, error, hint, children }) {
  return (
    <div className={`field${error ? ' field--error' : ''}`}>
      <label htmlFor={id} className="field__label">
        {label} {required ? <span aria-hidden="true">*</span> : <small>(optional)</small>}
      </label>
      {children}
      {hint && !error && (
        <p id={`${id}-hint`} className="field__hint">
          {hint}
        </p>
      )}
      {error && (
        <p id={`${id}-error`} className="field__error" role="alert">
          {error}
        </p>
      )}
    </div>
  )
}

const statusMessages = {
  unconfigured: {
    tone: 'info',
    title: 'Your details are valid, but nothing has been sent.',
    text: 'Form submission has not been connected yet, so this enquiry was not delivered. Please contact us using the details on this page instead.',
  },
  sent: {
    tone: 'success',
    title: 'Enquiry sent.',
    text: 'Thank you. We have received your message and will be in touch.',
  },
  error: {
    tone: 'error',
    title: 'Your enquiry could not be sent.',
    text: 'Something went wrong while sending. Nothing was delivered. Please try again, or use the contact details on this page.',
  },
}

function EnquiryForm() {
  const [params] = useSearchParams()
  const preset = services.find((s) => s.slug === params.get('service'))

  const [values, setValues] = useState({ ...emptyForm, service: preset ? preset.title : '' })
  const [errors, setErrors] = useState({})
  const [touched, setTouched] = useState({})
  const [status, setStatus] = useState('idle') // idle | submitting | unconfigured | sent | error

  const update = (name, value) => {
    const next = { ...values, [name]: value }
    setValues(next)
    if (touched[name]) setErrors(validate(next))
    if (status !== 'idle' && status !== 'submitting') setStatus('idle')
  }

  const blur = (name) => {
    setTouched((t) => ({ ...t, [name]: true }))
    setErrors(validate(values))
  }

  const bind = (name) => ({
    id: name,
    name,
    value: values[name],
    onChange: (event) => update(name, event.target.value),
    onBlur: () => blur(name),
    'aria-invalid': Boolean(errors[name] && touched[name]),
    'aria-describedby': errors[name] && touched[name] ? `${name}-error` : undefined,
  })

  const shown = (name) => (touched[name] ? errors[name] : undefined)

  const handleSubmit = async (event) => {
    event.preventDefault()
    const found = validate(values)
    setErrors(found)
    setTouched({ name: true, email: true, phone: true, service: true, details: true })
    if (Object.keys(found).length > 0) {
      setStatus('idle')
      const first = Object.keys(found)[0]
      document.getElementById(first)?.focus()
      return
    }
    if (values.website) return // honeypot filled: ignore silently

    setStatus('submitting')
    try {
      const { website, ...payload } = values
      const result = await submitEnquiry(payload)
      setStatus(result.status)
      if (result.status === 'sent') {
        setValues({ ...emptyForm })
        setTouched({})
        setErrors({})
      }
    } catch {
      setStatus('error')
    }
  }

  const message = statusMessages[status]

  return (
    <form className="form" onSubmit={handleSubmit} noValidate>
      <div className="form__row">
        <Field id="name" label="Full Name" required error={shown('name')}>
          <input className="field__input" type="text" autoComplete="name" {...bind('name')} />
        </Field>
        <Field id="email" label="Email Address" required error={shown('email')}>
          <input className="field__input" type="email" autoComplete="email" {...bind('email')} />
        </Field>
      </div>

      <div className="form__row">
        <Field id="phone" label="Phone Number" error={shown('phone')}>
          <input className="field__input" type="tel" autoComplete="tel" {...bind('phone')} />
        </Field>
        <Field id="company" label="Company Name">
          <input className="field__input" type="text" autoComplete="organization" {...bind('company')} />
        </Field>
      </div>

      <Field id="service" label="Service Interested In" required error={shown('service')}>
        <select className="field__input field__select" {...bind('service')}>
          <option value="">Select a service…</option>
          {services.map((service) => (
            <option key={service.slug} value={service.title}>
              {service.title}
            </option>
          ))}
        </select>
      </Field>

      <Field
        id="details"
        label="Project Details"
        required
        error={shown('details')}
        hint="Tell us about your goals, timeline and anything else that helps."
      >
        <textarea className="field__input field__textarea" rows={6} {...bind('details')} />
      </Field>

      {/* Honeypot field for basic spam protection. Hidden from people. */}
      <div className="sr-only" aria-hidden="true">
        <label htmlFor="website">Leave this field empty</label>
        <input
          id="website"
          name="website"
          type="text"
          tabIndex={-1}
          autoComplete="off"
          value={values.website}
          onChange={(event) => setValues({ ...values, website: event.target.value })}
        />
      </div>

      <div className="form__footer">
        <Button type="submit" disabled={status === 'submitting'}>
          {status === 'submitting' ? 'Sending…' : 'Send Enquiry'}
        </Button>
        <p className="form__note">Fields marked * are required.</p>
      </div>

      <div className="form__status-wrap" role="status" aria-live="polite">
        {message && (
          <div className={`form__status form__status--${message.tone}`}>
            <strong>{message.title}</strong>
            <p>{message.text}</p>
          </div>
        )}
      </div>
    </form>
  )
}

function InfoCard({ icon: Icon, label, value, href }) {
  const placeholder = isPlaceholder(value)
  return (
    <div className="info-card">
      <span className="info-card__icon">
        <Icon size={20} strokeWidth={1.6} />
      </span>
      <div>
        <p className="info-card__label">{label}</p>
        {href ? (
          <a href={href} className="info-card__value">
            {value}
          </a>
        ) : (
          <p className={`info-card__value${placeholder ? ' placeholder' : ''}`}>{value}</p>
        )}
      </div>
    </div>
  )
}

export default function Contact() {
  useSEO(
    'Contact Us | Astrexia Creatives',
    'Get in touch with Astrexia Creatives to discuss your digital marketing, branding, design or website project.',
  )

  const { email, whatsapp, instagram, location } = siteConfig.contact

  return (
    <PageTransition>
      <PageHero
        eyebrow="Contact us"
        ghost="HELLO"
        title={
          <>
            LET&rsquo;S START YOUR NEXT <em className="accent">PROJECT.</em>
          </>
        }
        text="Share a few details about what you have in mind. The more you tell us, the better we can help."
      />

      <section className="section section--light contact" aria-label="Contact form and details">
        <div className="container contact__grid">
          <Reveal className="contact__form-wrap">
            <h2 className="contact__heading">Send us an enquiry</h2>
            <EnquiryForm />
          </Reveal>

          <Reveal delay={0.1} className="contact__aside">
            <h2 className="contact__heading">Contact details</h2>
            <div className="info-list">
              <InfoCard icon={Mail} label="Email" value={email} href={contactLinks.email(email)} />
              <InfoCard
                icon={MessageCircle}
                label="WhatsApp"
                value={whatsapp}
                href={contactLinks.whatsapp(whatsapp)}
              />
              <InfoCard
                icon={AtSign}
                label="Instagram"
                value={instagram}
                href={contactLinks.instagram(instagram)}
              />
              <InfoCard icon={MapPin} label="Location" value={location} />
            </div>
            <p className="contact__note">
              Items shown in a dashed style are placeholders. Replace them in{' '}
              <code>src/config/site.js</code>.
            </p>
            <div className="contact__cta">
              <p>Prefer to see our style first?</p>
              <Button to="/portfolio" variant="dark">
                View Concept Projects
              </Button>
            </div>
          </Reveal>
        </div>
      </section>
    </PageTransition>
  )
}
