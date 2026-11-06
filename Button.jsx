import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import Icon from './Icons.jsx'

export default function Button({
  to,
  href,
  children,
  variant = 'primary',
  icon = 'arrow',
  size,
  block = false,
  type = 'button',
  disabled = false,
  onClick,
  ...rest
}) {
  const cls = `btn btn-${variant}${size === 'sm' ? ' btn-sm' : ''}`
  const inner = (
    <>
      <span>{children}</span>
      {icon ? <Icon name={icon} size={18} /> : null}
    </>
  )

  let el
  if (to) {
    el = (
      <Link to={to} className={cls} {...rest}>
        {inner}
      </Link>
    )
  } else if (href) {
    const external = /^https?:/i.test(href)
    el = (
      <a
        href={href}
        className={cls}
        {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
        {...rest}
      >
        {inner}
      </a>
    )
  } else {
    el = (
      <button type={type} className={cls} onClick={onClick} disabled={disabled} {...rest}>
        {inner}
      </button>
    )
  }

  return (
    <motion.span
      className={`btn-motion${block ? ' block' : ''}`}
      whileHover={disabled ? undefined : { y: -3 }}
      whileTap={disabled ? undefined : { scale: 0.97 }}
      transition={{ type: 'spring', stiffness: 400, damping: 22 }}
    >
      {el}
    </motion.span>
  )
}
