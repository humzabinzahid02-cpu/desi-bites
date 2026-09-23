import { useState, useEffect } from 'react'

const LINKS = ['Menu', 'About', 'Deals', 'Contact']

interface NavProps {
  cartCount?: number
  onOpenCart?: () => void
}

export default function Nav({ cartCount = 0, onOpenCart }: NavProps) {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleLinkClick = (link: string, e: React.MouseEvent) => {
    e.preventDefault()
    setOpen(false)
    const el = document.getElementById(link.toLowerCase())
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  const handleOrderClick = () => {
    setOpen(false)
    if (onOpenCart) {
      onOpenCart()
    } else {
      const m = document.getElementById('menu')
      if (m) m.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <nav style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      zIndex: 100,
      padding: '0 clamp(24px, 5vw, 80px)',
      height: 72,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      background: scrolled ? 'rgba(251, 241, 222, 0.88)' : 'rgba(251, 241, 222, 0.65)',
      backdropFilter: 'blur(20px) saturate(180%)',
      WebkitBackdropFilter: 'blur(20px) saturate(180%)',
      borderBottom: '1px solid rgba(140, 47, 27, 0.12)',
      boxShadow: scrolled
        ? '0 10px 30px -4px rgba(92, 29, 16, 0.08), inset 0 1px 1px 0 rgba(255, 255, 255, 0.9)'
        : '0 4px 20px -2px rgba(92, 29, 16, 0.04), inset 0 1px 1px 0 rgba(255, 255, 255, 0.8)',
      transition: 'background 350ms ease, box-shadow 350ms ease, border-color 350ms ease',
    }}>
      {/* Specular Liquid Glass Top Gleam */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        height: '1px',
        background: 'linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.95) 20%, rgba(255,255,255,0.95) 80%, transparent 100%)',
        pointerEvents: 'none',
      }} />

      {/* Saffron Gold Bottom Refraction Line */}
      <div style={{
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        height: '1px',
        background: 'linear-gradient(90deg, rgba(232,166,61,0.1) 0%, rgba(232,166,61,0.5) 50%, rgba(232,166,61,0.1) 100%)',
        pointerEvents: 'none',
      }} />

      {/* Logo — exact match for docked intro state */}
      <a
        href="#"
        onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }) }}
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: 10,
          background: 'transparent',
          border: 'none',
          cursor: 'pointer',
          padding: 0,
          textDecoration: 'none',
        }}
      >
        <div style={{
          width: 36,
          height: 36,
          borderRadius: 8,
          background: 'linear-gradient(135deg, #8C2F1B 0%, #5C1D10 100%)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexShrink: 0,
          boxShadow: '0 2px 8px rgba(140, 47, 27, 0.3)',
        }}>
          <svg width="20" height="20" viewBox="0 0 28 28" fill="none">
            <circle cx="14" cy="10" r="6" fill="#F4CE7F"/>
            <ellipse cx="14" cy="20" rx="9" ry="5" fill="#F4CE7F" opacity="0.7"/>
            <circle cx="14" cy="10" r="3" fill="#8C2F1B"/>
          </svg>
        </div>
        <span style={{
          fontFamily: "'Baloo 2', sans-serif",
          fontWeight: 800,
          fontSize: 19,
          letterSpacing: '0.06em',
          textTransform: 'uppercase',
          color: '#5C1D10',
          lineHeight: 1,
        }}>
          Desi Bite
        </span>
      </a>

      {/* Desktop links */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        gap: 32,
      }} className="nav-links">
        {LINKS.map(link => (
          <a
            key={link}
            href={`#${link.toLowerCase()}`}
            onClick={(e) => handleLinkClick(link, e)}
            style={{
              fontFamily: "'Baloo 2', sans-serif",
              fontSize: '15px',
              fontWeight: 700,
              letterSpacing: '0.05em',
              textTransform: 'uppercase',
              color: '#5C1D10',
              textDecoration: 'none',
              transition: 'color 180ms ease',
              cursor: 'pointer',
            }}
            onMouseEnter={e => (e.currentTarget.style.color = '#E8A63D')}
            onMouseLeave={e => (e.currentTarget.style.color = '#5C1D10')}
          >
            {link}
          </a>
        ))}

        {/* Order Now CTA button with cart badge */}
        <button
          onClick={handleOrderClick}
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: 8,
            fontFamily: "'Baloo 2', sans-serif",
            fontSize: '14px',
            fontWeight: 800,
            letterSpacing: '0.06em',
            textTransform: 'uppercase',
            color: '#FFFFFF',
            background: 'linear-gradient(135deg, #8C2F1B 0%, #5C1D10 100%)',
            border: 'none',
            borderRadius: 30,
            padding: '10px 22px',
            cursor: 'pointer',
            boxShadow: '0 4px 14px rgba(140, 47, 27, 0.35)',
            transition: 'transform 180ms ease, box-shadow 180ms ease',
          }}
          onMouseEnter={e => {
            e.currentTarget.style.transform = 'translateY(-1px)'
            e.currentTarget.style.boxShadow = '0 6px 20px rgba(140, 47, 27, 0.45)'
          }}
          onMouseLeave={e => {
            e.currentTarget.style.transform = 'translateY(0)'
            e.currentTarget.style.boxShadow = '0 4px 14px rgba(140, 47, 27, 0.35)'
          }}
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="9" cy="21" r="1"/>
            <circle cx="20" cy="21" r="1"/>
            <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/>
          </svg>
          <span>ORDER NOW</span>
          {cartCount > 0 && (
            <span style={{
              background: '#E8A63D',
              color: '#2B1B12',
              fontSize: '11px',
              fontWeight: 900,
              borderRadius: '50%',
              width: 20,
              height: 20,
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
              {cartCount}
            </span>
          )}
        </button>
      </div>

      {/* Mobile hamburger */}
      <button
        onClick={() => setOpen(!open)}
        style={{
          display: 'none',
          background: 'none',
          border: 'none',
          cursor: 'pointer',
          padding: 8,
          color: '#5C1D10',
        }}
        className="hamburger"
        aria-label="Toggle menu"
      >
        <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          {open ? (
            <>
              <line x1="18" y1="6" x2="6" y2="18"/>
              <line x1="6" y1="6" x2="18" y2="18"/>
            </>
          ) : (
            <>
              <line x1="3" y1="7" x2="21" y2="7"/>
              <line x1="3" y1="12" x2="21" y2="12"/>
              <line x1="3" y1="17" x2="21" y2="17"/>
            </>
          )}
        </svg>
      </button>

      {/* Mobile menu */}
      {open && (
        <div style={{
          position: 'absolute',
          top: 72,
          left: 0,
          right: 0,
          background: 'rgba(251, 241, 222, 0.96)',
          backdropFilter: 'blur(20px) saturate(180%)',
          WebkitBackdropFilter: 'blur(20px) saturate(180%)',
          borderBottom: '1px solid rgba(140, 47, 27, 0.15)',
          boxShadow: '0 20px 40px rgba(92, 29, 16, 0.1)',
          padding: '24px clamp(24px, 5vw, 80px)',
          display: 'flex',
          flexDirection: 'column',
          gap: 16,
          animation: 'fadeUp 200ms ease',
        }}>
          {LINKS.map(link => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              onClick={(e) => handleLinkClick(link, e)}
              style={{
                fontFamily: "'Baloo 2', sans-serif",
                fontSize: '18px',
                fontWeight: 700,
                letterSpacing: '0.04em',
                textTransform: 'uppercase',
                color: '#5C1D10',
                textDecoration: 'none',
                cursor: 'pointer',
              }}
            >
              {link}
            </a>
          ))}
          <button
            onClick={handleOrderClick}
            style={{
              fontFamily: "'Baloo 2', sans-serif",
              fontSize: '16px',
              fontWeight: 800,
              letterSpacing: '0.06em',
              textTransform: 'uppercase',
              color: '#FFFFFF',
              background: 'linear-gradient(135deg, #8C2F1B 0%, #5C1D10 100%)',
              border: 'none',
              borderRadius: 30,
              padding: '12px 24px',
              cursor: 'pointer',
              marginTop: 8,
              textAlign: 'center',
            }}
          >
            ORDER NOW {cartCount > 0 ? `(${cartCount})` : ''}
          </button>
        </div>
      )}

      <style>{`
        @media (max-width: 800px) {
          .nav-links { display: none !important; }
          .hamburger { display: flex !important; }
        }
      `}</style>
    </nav>
  )
}
