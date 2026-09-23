import React from 'react'

export default function Footer() {
  const handleOrderClick = (e: React.MouseEvent) => {
    e.preventDefault()
    window.open('https://wa.me/923291807782?text=Hi%20Desi%20Bite!%20I%20want%20to%20order%20nashta.', '_blank')
  }

  const scrollToMenu = (e: React.MouseEvent) => {
    e.preventDefault()
    const m = document.getElementById('menu')
    if (m) m.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <footer id="contact" style={{
      background: '#1A110B',
      borderTop: '1px solid rgba(232, 166, 61, 0.15)',
      padding: 'clamp(48px, 6vw, 80px) clamp(24px, 6vw, 100px) 32px',
    }}>
      <div style={{ maxWidth: 1280, margin: '0 auto' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
          gap: 48,
          marginBottom: 60,
        }}>
          {/* Brand Info */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 18 }}>
              <div style={{
                width: 36,
                height: 36,
                borderRadius: 8,
                background: 'linear-gradient(135deg, #8C2F1B 0%, #5C1D10 100%)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
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
                fontSize: 20,
                letterSpacing: '0.04em',
                textTransform: 'uppercase',
                color: '#FFFFFF',
              }}>
                Desi Bite
              </span>
            </div>
            <p style={{
              fontFamily: "'Mukta', sans-serif",
              fontSize: 14,
              color: '#FAF0D5',
              opacity: 0.8,
              lineHeight: 1.7,
              margin: '0 0 16px',
            }}>
              Homemade halwa puri, aloo paratha &amp; desi nashta — ordered online, made fresh.
            </p>
            <div style={{
              fontFamily: "'Baloo 2', sans-serif",
              fontSize: 13,
              color: '#E8A63D',
              fontWeight: 700,
            }}>
              🇵🇰 Faisalabad, Pakistan
            </div>
          </div>

          {/* Contact Details */}
          <div>
            <div style={{
              fontFamily: "'Baloo 2', sans-serif",
              fontSize: '16px',
              fontWeight: 800,
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              color: '#E8A63D',
              marginBottom: 16,
            }}>
              Contact &amp; Orders
            </div>
            <p style={{ fontFamily: "'Mukta', sans-serif", fontSize: '14px', color: '#FAF0D5', opacity: 0.85, lineHeight: 1.8, margin: 0 }}>
              📞 WhatsApp: <a href="https://wa.me/923291807782" target="_blank" rel="noreferrer" style={{ color: '#F4CE7F', textDecoration: 'underline' }}>+92 329 1807782</a><br />
              📍 Location: Faisalabad
            </p>
            <div style={{ marginTop: 14 }}>
              <button
                onClick={handleOrderClick}
                style={{
                  fontFamily: "'Baloo 2', sans-serif",
                  fontSize: '12px',
                  fontWeight: 800,
                  textTransform: 'uppercase',
                  color: '#FFFFFF',
                  background: '#25D366',
                  padding: '8px 16px',
                  borderRadius: '20px',
                  border: 'none',
                  cursor: 'pointer',
                }}
              >
                Chat on WhatsApp →
              </button>
            </div>
          </div>

          {/* Timings */}
          <div>
            <div style={{
              fontFamily: "'Baloo 2', sans-serif",
              fontSize: '16px',
              fontWeight: 800,
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              color: '#E8A63D',
              marginBottom: 16,
            }}>
              Nashta Timings
            </div>
            <p style={{ fontFamily: "'Mukta', sans-serif", fontSize: '14px', color: '#FAF0D5', opacity: 0.85, lineHeight: 1.8, margin: 0 }}>
              🌅 Morning Nashta: <strong>7:00 AM – 11:00 AM</strong><br />
              🗓 Everyday (All 7 Days)
            </p>
            <div style={{ marginTop: 14 }}>
              <a
                href="#menu"
                onClick={scrollToMenu}
                style={{
                  fontFamily: "'Mukta', sans-serif",
                  fontSize: '13px',
                  color: '#F4CE7F',
                  textDecoration: 'underline',
                  cursor: 'pointer',
                }}
              >
                View Nashta Menu →
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div style={{
          borderTop: '1px solid rgba(255, 255, 255, 0.1)',
          paddingTop: 24,
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: 16,
        }}>
          <p style={{
            fontFamily: "'Mukta', sans-serif",
            fontSize: 13,
            color: '#FAF0D5',
            opacity: 0.7,
            margin: 0,
          }}>
            Desi Bite — made with ❤️ for the mohalla.
          </p>
          <div style={{ display: 'flex', gap: 20 }}>
            {['Fresh Every Day', 'Handmade Puris', 'Ghar Ka Zaiqa'].map(item => (
              <span
                key={item}
                style={{
                  fontFamily: "'Mukta', sans-serif",
                  fontSize: 12,
                  color: '#FAF0D5',
                  opacity: 0.6,
                }}
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
