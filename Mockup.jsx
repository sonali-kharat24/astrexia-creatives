// Code-drawn demonstration visuals. Only brand colours are used (see styles.css).
// kind: branding | graphic | social | website | ui | video | marketing
// variant: 0 | 1 | 2 (changes palette/layout)

function Branding({ v }) {
  return (
    <div className="mk mk-branding">
      <div className="mk-card mk-card-main">
        <svg viewBox="0 0 64 64" width="44" height="44" aria-hidden="true">
          <path d="M32 10 L52 54 H42 L32 31 L22 54 H12 Z" fill="currentColor" />
        </svg>
        <span>{v === 2 ? 'A·C' : 'ASTRA'}</span>
      </div>
      <div className="mk-card mk-card-back">
        <i /><i /><i />
      </div>
      <div className="mk-swatches">
        <b style={{ background: '#171014' }} />
        <b style={{ background: '#8D294E' }} />
        <b style={{ background: '#D76A91' }} />
        <b style={{ background: '#F9EAF0' }} />
      </div>
    </div>
  )
}

function Graphic({ v }) {
  return (
    <div className={`mk mk-graphic v${v}`}>
      <div className="mk-poster">
        <span className="mk-circle" />
        <span className="mk-bar" />
        <strong>{v === 2 ? 'Aa' : 'ART'}</strong>
        <em />
        <em className="short" />
      </div>
      <div className="mk-poster mk-poster-2">
        <span className="mk-circle" />
        <em />
      </div>
    </div>
  )
}

function Social({ v }) {
  return (
    <div className={`mk mk-social v${v}`}>
      <div className="mk-grid">
        {Array.from({ length: 9 }).map((_, i) => (
          <span key={i} className={`mk-tile t${(i + v) % 4}`} />
        ))}
      </div>
      <div className="mk-phone-bar"><i /><i /><i /></div>
    </div>
  )
}

function Website({ v }) {
  return (
    <div className={`mk mk-website v${v}`}>
      <div className="mk-browser">
        <div className="mk-dots"><i /><i /><i /></div>
        <div className="mk-page">
          <span className="mk-nav" />
          <strong />
          <strong className="short" />
          <span className="mk-pill" />
          <div className="mk-cols"><i /><i /><i /></div>
        </div>
      </div>
    </div>
  )
}

function UI({ v }) {
  return (
    <div className={`mk mk-ui v${v}`}>
      {[0, 1, 2].map((i) => (
        <div key={i} className={`mk-screen s${i}`}>
          <span className="mk-notch" />
          <strong />
          <i /><i />
          <span className="mk-pill" />
        </div>
      ))}
    </div>
  )
}

function Video() {
  return (
    <div className="mk mk-video">
      <div className="mk-reel">
        <span className="mk-play" />
        <div className="mk-timeline"><i /><i /><i /></div>
      </div>
      <div className="mk-reel mk-reel-2" />
    </div>
  )
}

function Marketing({ v }) {
  return (
    <div className={`mk mk-marketing v${v}`}>
      <div className="mk-chart">
        <i style={{ height: '30%' }} />
        <i style={{ height: '48%' }} />
        <i style={{ height: '40%' }} />
        <i style={{ height: '68%' }} />
        <i style={{ height: '86%' }} />
      </div>
      <div className="mk-funnel"><span /><span /><span /></div>
    </div>
  )
}

export default function Mockup({ kind = 'branding', variant = 0 }) {
  const map = { branding: Branding, graphic: Graphic, social: Social, website: Website, ui: UI, video: Video, marketing: Marketing }
  const C = map[kind] || Branding
  return (
    <div className={`mockup tone-${variant}`} aria-hidden="true">
      <C v={variant} />
    </div>
  )
}
