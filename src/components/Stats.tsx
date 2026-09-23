import { useEffect, useRef, useState } from 'react'

const STATS = [
  { value: 12, suffix: '+', label: 'Years of Mohalla Recipes' },
  { value: 50, suffix: 'k+', label: 'Hot Nashtas Served' },
  { value: 100, suffix: '%', label: 'Fresh Daily Ingredients' },
  { value: 99, suffix: '%', label: 'Ghar Ka Zaiqa Reviews' },
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
    <section className="bg-white border-t border-b border-[#8C2F1B]/12 py-8 sm:py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-center gap-6 md:gap-12">
        
        {/* Eyebrow Label */}
        <div className="md:border-r border-[#8C2F1B]/15 md:pr-10 shrink-0">
          <div className="font-['Baloo_2'] text-xs sm:text-sm font-extrabold tracking-[0.15em] uppercase text-[#8C2F1B] leading-tight">
            Baji Nazia<br className="hidden md:inline" /> Ka Home Kitchen<br />
            <span className="text-[#2B1B12]/60 font-semibold normal-case text-xs">Faisalabad Mohalla</span>
          </div>
        </div>

        {/* Stats Grid - 2 cols on mobile, 4 on desktop */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 flex-1">
          {STATS.map(s => (
            <div key={s.label}>
              <div className="font-['Baloo_2'] text-3xl sm:text-4xl lg:text-5xl font-black text-[#5C1D10] leading-none">
                <CountUp target={s.value} suffix={s.suffix} />
              </div>
              <div className="font-['Mukta'] text-xs sm:text-sm text-[#8C2F1B] mt-1 font-semibold">
                {s.label}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
