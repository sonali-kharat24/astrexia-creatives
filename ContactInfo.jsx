import Icon from './Icons.jsx'
import Button from './Button.jsx'
import {
  SITE,
  PLACEHOLDERS,
  emailHref,
  whatsappHref,
  instagramHref,
} from '../config.js'

function Row({ icon, label, value, href, placeholder }) {
  const hasValue = Boolean(value)
  const content = hasValue ? value : placeholder
  return (
    <li className="info-row">
      <span className="info-icon">
        <Icon name={icon} size={20} />
      </span>
      <span className="info-text">
        <small>{label}</small>
        {hasValue && href ? (
          <a href={href} target={href.startsWith('mailto:') ? undefined : '_blank'} rel="noopener noreferrer">
            {content}
          </a>
        ) : (
          <span className={hasValue ? '' : 'is-placeholder'}>{content}</span>
        )}
        {!hasValue ? <em className="ph-note">Placeholder · add real details in src/config.js</em> : null}
      </span>
    </li>
  )
}

export default function ContactInfo({ withWhatsApp = false }) {
  return (
    <div className="info-card">
      <h3>Contact details</h3>
      <ul>
        <Row icon="mail" label="Email" value={SITE.email} href={emailHref} placeholder={PLACEHOLDERS.email} />
        <Row icon="whatsapp" label="WhatsApp" value={SITE.whatsapp ? `+${SITE.whatsapp.replace(/\D/g, '')}` : ''} href={whatsappHref} placeholder={PLACEHOLDERS.whatsapp} />
        <Row icon="instagram" label="Instagram" value={SITE.instagram ? SITE.instagram.replace(/^https?:\/\/(www\.)?instagram\.com\//, '@').replace(/\/$/, '') : ''} href={instagramHref} placeholder={PLACEHOLDERS.instagram} />
        <Row icon="pin" label="Location" value={SITE.location} placeholder={PLACEHOLDERS.location} />
      </ul>
      {withWhatsApp ? (
        whatsappHref ? (
          <Button href={whatsappHref} icon="whatsapp" block>
            Chat on WhatsApp
          </Button>
        ) : (
          <div className="wa-pending">
            <Button variant="ghost" icon="whatsapp" block disabled>
              WhatsApp chat, coming soon
            </Button>
            <small>The WhatsApp button activates once a number is set in src/config.js.</small>
          </div>
        )
      ) : null}
    </div>
  )
}
