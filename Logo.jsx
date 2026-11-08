import { Link } from 'react-router-dom'

export function StarMark({ className = '' }) {
  return (
    <svg className={className} viewBox="0 0 32 32" aria-hidden="true" focusable="false">
      <path
        d="M16 2 L19.2 12.8 L30 16 L19.2 19.2 L16 30 L12.8 19.2 L2 16 L12.8 12.8 Z"
        fill="currentColor"
      />
    </svg>
  )
}

export default function Logo() {
  return (
    <Link to="/" className="logo" aria-label="Astrexia Creatives — home">
      <StarMark className="logo__mark" />
      <span className="logo__text">
        <strong>ASTREXIA</strong>
        <span>CREATIVES</span>
      </span>
    </Link>
  )
}
