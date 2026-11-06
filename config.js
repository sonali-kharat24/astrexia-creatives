// Single place to edit your public details.
// Empty values render as clearly-marked placeholders on the site, and are
// never turned into links, so nothing fake or broken is shown to visitors.
// You can set them here or through environment variables (see .env.example).

const env = import.meta.env

export const SITE = {
  name: 'Astrexia Creatives',
  tagline: 'Think Creative. Grow Digital.',
  url: env.VITE_SITE_URL || 'https://your-domain.com',

  // Contact details
  email: env.VITE_CONTACT_EMAIL || '', // e.g. hello@yourdomain.com
  whatsapp: env.VITE_WHATSAPP_NUMBER || '', // digits with country code, e.g. 919876543210
  instagram: env.VITE_INSTAGRAM_URL || '', // e.g. https://instagram.com/yourhandle
  location: env.VITE_LOCATION || '', // e.g. Pune, India

  // Enquiry form endpoint (Formspree, your own API route, etc.)
  formEndpoint: env.VITE_FORM_ENDPOINT || '',
}

export const PLACEHOLDERS = {
  email: 'hello@yourdomain.com',
  whatsapp: '+00 00000 00000',
  instagram: '@yourhandle',
  location: 'Your city, country',
}

export const emailHref = SITE.email ? `mailto:${SITE.email}` : ''
export const whatsappHref = SITE.whatsapp
  ? `https://wa.me/${SITE.whatsapp.replace(/\D/g, '')}`
  : ''
export const instagramHref = SITE.instagram
