import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import Button from './Button.jsx'
import { serviceOptions } from '../data.js'
import { SITE, emailHref } from '../config.js'

const empty = { name: '', email: '', phone: '', company: '', service: '', details: '', website: '' }

function validate(v) {
  const e = {}
  if (v.name.trim().length < 2) e.name = 'Please enter your full name.'
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v.email.trim())) e.email = 'Please enter a valid email address.'
  if (v.phone.trim() && !/^[+()\d\s.-]{7,20}$/.test(v.phone.trim())) e.phone = 'Please enter a valid phone number.'
  if (!v.service) e.service = 'Please choose a service.'
  if (v.details.trim().length < 10) e.details = 'Please tell us a little about your project (at least 10 characters).'
  return e
}

function Field({ id, label, error, required, children }) {
  return (
    <div className={`field${error ? ' has-error' : ''}`}>
      <label htmlFor={id}>
        {label}
        {required ? <span aria-hidden="true"> *</span> : <span className="opt"> (optional)</span>}
      </label>
      {children}
      {error ? (
        <p className="field-error" id={`${id}-error`} role="alert">
          {error}
        </p>
      ) : null}
    </div>
  )
}

export default function ContactForm() {
  const [values, setValues] = useState(empty)
  const [errors, setErrors] = useState({})
  // idle | sending | sent | failed | unconfigured
  const [status, setStatus] = useState('idle')

  const set = (k) => (e) => {
    const val = e.target.value
    setValues((s) => ({ ...s, [k]: val }))
    if (errors[k]) setErrors((s) => ({ ...s, [k]: undefined }))
  }

  const aria = (k) => ({ 'aria-invalid': errors[k] ? 'true' : 'false', 'aria-describedby': errors[k] ? `${k}-error` : undefined })

  async function onSubmit(ev) {
    ev.preventDefault()
    if (values.website) return // honeypot: bots fill this hidden field
    const found = validate(values)
    setErrors(found)
    if (Object.keys(found).length) {
      const first = Object.keys(found)[0]
      document.getElementById(first)?.focus()
      return
    }

    // No endpoint configured → never pretend the enquiry was sent.
    if (!SITE.formEndpoint) {
      setStatus('unconfigured')
      return
    }

    setStatus('sending')
    try {
      const { website, ...payload } = values
      const res = await fetch(SITE.formEndpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({ ...payload, source: 'astrexia-creatives-website' }),
      })
      if (!res.ok) throw new Error(`HTTP ${res.status}`)
      setStatus('sent')
      setValues(empty)
    } catch {
      setStatus('failed')
    }
  }

  const mailtoDraft = emailHref
    ? `${emailHref}?subject=${encodeURIComponent('Project enquiry from ' + values.name)}&body=${encodeURIComponent(
        `Name: ${values.name}\nCompany: ${values.company}\nPhone: ${values.phone}\nService: ${values.service}\n\n${values.details}`,
      )}`
    : ''

  if (status === 'sent') {
    return (
      <div className="form-card" role="status">
        <div className="form-notice ok">
          <h3>Thank you, your enquiry was submitted.</h3>
          <p>We will review the details and get back to you.</p>
          <Button variant="ghost" icon={null} onClick={() => setStatus('idle')}>
            Send another enquiry
          </Button>
        </div>
      </div>
    )
  }

  return (
    <form className="form-card" onSubmit={onSubmit} noValidate aria-label="Project enquiry form">
      <h3>Start a project</h3>
      <p className="form-intro">Tell us about your idea. Fields marked * are required.</p>

      <div className="form-grid">
        <Field id="name" label="Full Name" required error={errors.name}>
          <input id="name" name="name" type="text" autoComplete="name" value={values.name} onChange={set('name')} {...aria('name')} />
        </Field>
        <Field id="email" label="Email Address" required error={errors.email}>
          <input id="email" name="email" type="email" autoComplete="email" value={values.email} onChange={set('email')} {...aria('email')} />
        </Field>
        <Field id="phone" label="Phone Number" error={errors.phone}>
          <input id="phone" name="phone" type="tel" autoComplete="tel" inputMode="tel" value={values.phone} onChange={set('phone')} {...aria('phone')} />
        </Field>
        <Field id="company" label="Company Name">
          <input id="company" name="company" type="text" autoComplete="organization" value={values.company} onChange={set('company')} />
        </Field>
        <div className="span-2">
          <Field id="service" label="Service Interested In" required error={errors.service}>
            <select id="service" name="service" value={values.service} onChange={set('service')} {...aria('service')}>
              <option value="">Select a service…</option>
              {serviceOptions.map((o) => (
                <option key={o} value={o}>
                  {o}
                </option>
              ))}
            </select>
          </Field>
        </div>
        <div className="span-2">
          <Field id="details" label="Project Details" required error={errors.details}>
            <textarea id="details" name="details" rows={5} value={values.details} onChange={set('details')} {...aria('details')} />
          </Field>
        </div>
        {/* Honeypot field, hidden from people */}
        <div className="hp" aria-hidden="true">
          <label htmlFor="website">Leave this empty</label>
          <input id="website" name="website" type="text" tabIndex={-1} autoComplete="off" value={values.website} onChange={set('website')} />
        </div>
      </div>

      <AnimatePresence mode="wait">
        {status === 'unconfigured' ? (
          <motion.div key="u" className="form-notice warn" role="status" initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}>
            <strong>Your details look good, but this form isn&apos;t connected yet.</strong>
            <p>
              Nothing has been sent. The site owner needs to add a form endpoint (see the README). Until then
              {mailtoDraft ? (
                <>
                  , you can{' '}
                  <a href={mailtoDraft}>send this enquiry by email instead</a>.
                </>
              ) : (
                <> please contact us using the details shown on this page.</>
              )}
            </p>
          </motion.div>
        ) : null}
        {status === 'failed' ? (
          <motion.div key="f" className="form-notice err" role="alert" initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}>
            <strong>Sorry, we couldn&apos;t submit your enquiry.</strong>
            <p>Please check your connection and try again{mailtoDraft ? <>, or <a href={mailtoDraft}>email us directly</a></> : null}.</p>
          </motion.div>
        ) : null}
      </AnimatePresence>

      <Button type="submit" block icon="arrow" disabled={status === 'sending'}>
        {status === 'sending' ? 'Sending…' : 'Submit Enquiry'}
      </Button>
    </form>
  )
}
