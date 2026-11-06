import { useId } from 'react'
import { Link } from 'react-router-dom'

export function LogoMark({ size = 38, className }) {
  const id = `lm${useId().replace(/:/g, '')}`
  return (
    <svg
      className={className}
      width={size}
      height={size}
      viewBox="0 0 64 64"
      aria-hidden="true"
      focusable="false"
    >
      <defs>
        <linearGradient id={id} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#8D294E" />
          <stop offset="1" stopColor="#D76A91" />
        </linearGradient>
      </defs>
      <rect width="64" height="64" rx="16" fill="#23151D" />
      <rect x=".5" y=".5" width="63" height="63" rx="15.5" fill="none" stroke="#D76A91" strokeOpacity=".35" />
      <path d="M32 12 L50 52 H41 L32 30 L23 52 H14 Z" fill={`url(#${id})`} />
    </svg>
  )
}

export default function Logo({ to = '/' }) {
  return (
    <Link to={to} className="logo" aria-label="Astrexia Creatives home">
      <LogoMark />
      <span className="logo-text">
        <span className="logo-name">ASTREXIA</span>
        <span className="logo-sub">Creatives</span>
      </span>
    </Link>
  )
}
