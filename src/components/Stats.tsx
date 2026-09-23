import { useEffect, useRef, useState } from 'react'

const STATS = [
  { value: 12, suffix: '+', label: 'Years of Secret Spices' },
  { value: 50, suffix: 'k+', label: 'Hot Orders Delivered' },
  { value: 35, suffix: '+', label: 'Clay-Pot & Tandoori Recipes' },
  { value: 99, suffix: '%', label: 'Five-Star Taste Reviews' },
]

function CountUp({ target, suffix }: { target: number; suffix: string }) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLSpanElement>(null)
  const started = useRef(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !started.current) {
        started.current = true
        const duration = 1400
        const steps = 50
        const inc = target / steps
        let current = 0
        const timer = setInterval(() => {
          current = Math.min(current + inc, target)
          setCount(Math.round(current))
          if (current >= target) clearInterval(timer)
        }, duration / steps)
      }
    }, { threshold: 0.5 })
    observer.observe(el)
    return () => observer.disconnect()
  }, [target])

  return (
    <span ref={ref}>
      {count}{suffix}
    </span>
  )
}

export default function Stats() {
  return (
    <section style={{
      background: '#FFFFFF',
      borderTop: '1px solid rgba(140, 47, 27, 0.12)',
      borderBottom: '1px solid rgba(140, 47, 27, 0.12)',
      padding: '44px clamp(24px, 6vw, 100px)',
    }}>
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'auto 1fr',
        alignItems: 'center',
        gap: '32px 60px',
        maxWidth: 1240,
        margin: '0 auto',
      }}>
        <div style={{ borderRight: '1px solid rgba(140, 47, 27, 0.15)', paddingRight: 48 }}>
          <div style={{
            fontFamily: "'Baloo 2', sans-serif",
            fontSize: '13px',
            fontWeight: 800,
            letterSpacing: '0.15em',
            textTransform: 'uppercase',
            color: '#8C2F1B',
            lineHeight: 1.5,
          }}>
            Trusted<br />By Generations<br />In Faisalabad
          </div>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
          gap: '16px 40px',
        }}>
          {STATS.map(s => (
            <div key={s.label}>
              <div style={{
                fontFamily: "'Baloo 2', sans-serif",
                fontSize: 'clamp(36px, 5vw, 52px)',
                fontWeight: 900,
                lineHeight: 1,
                color: '#5C1D10',
              }}>
                <CountUp target={s.value} suffix={s.suffix} />
              </div>
              <div style={{
                fontFamily: "'Mukta', sans-serif",
                fontSize: '13px',
                color: '#8C2F1B',
                marginTop: 4,
                fontWeight: 600,
              }}>
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
