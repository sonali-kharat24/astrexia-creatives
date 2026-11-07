/**
 * ASTREXIA CREATIVES — SITE CONFIGURATION
 * ------------------------------------------------------------
 * Edit this file to add your real contact details and links.
 * Any value that starts with "[" is treated as a PLACEHOLDER:
 * it is shown on the site as a clearly marked placeholder and is
 * never turned into a clickable link.
 */

export const siteConfig = {
  name: 'Astrexia Creatives',
  tagline: 'Think Creative. Grow Digital.',

  // ---- CONTACT DETAILS (replace the placeholders) -----------------
  contact: {
    email: '[EMAIL PLACEHOLDER — e.g. hello@yourdomain.com]',
    whatsapp: '[WHATSAPP PLACEHOLDER — e.g. +91 00000 00000]',
    instagram: '[INSTAGRAM PLACEHOLDER — e.g. @yourhandle]',
    location: '[LOCATION PLACEHOLDER — city, country]',
  },

  // ---- SOCIAL LINKS (full URLs; leave '' until you have them) -----
  social: {
    Instagram: '',
    LinkedIn: '',
    Facebook: '',
    Behance: '',
  },

  // ---- CONTACT FORM SUBMISSION ------------------------------------
  // Leave empty until a real service is connected (Formspree, Web3Forms,
  // your own API, etc.). While empty, the form validates input but will
  // NOT claim that anything was sent. See README.md.
  formEndpoint: '',
}

export const isPlaceholder = (value) => !value || String(value).trim().startsWith('[')

export const contactLinks = {
  email: (v) => (isPlaceholder(v) ? null : `mailto:${v}`),
  whatsapp: (v) => {
    if (isPlaceholder(v)) return null
    const digits = String(v).replace(/\D/g, '')
    return digits ? `https://wa.me/${digits}` : null
  },
  instagram: (v) => {
    if (isPlaceholder(v)) return null
    return `https://instagram.com/${String(v).replace(/^@/, '').replace(/\/$/, '')}`
  },
}
