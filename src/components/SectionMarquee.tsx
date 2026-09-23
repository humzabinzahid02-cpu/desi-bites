import React from 'react'

interface SectionMarqueeProps {
  items: string[]
  direction?: 'ltr' | 'rtl'
  background?: string
  textSize?: number
  duration?: number
}

export default function SectionMarquee({
  items,
  direction = 'ltr',
  background = '#2B1B12',
  textSize = 90,
  duration = 28,
}: SectionMarqueeProps) {
  const tripled = [...items, ...items, ...items]

  return (
    <div
      style={{
        background,
        overflow: 'hidden',
        lineHeight: 0,
        padding: 0,
        borderTop: '1px solid rgba(232, 166, 61, 0.15)',
        borderBottom: '1px solid rgba(232, 166, 61, 0.15)',
      }}
    >
      <div
        style={{
          display: 'flex',
          width: 'max-content',
          animation: `desiMarquee${direction === 'rtl' ? 'RTL' : 'LTR'}_${duration} ${duration}s linear infinite`,
          lineHeight: 0.8,
        }}
      >
        {tripled.map((item, i) => (
          <span
            key={i}
            style={{
              flexShrink: 0,
              fontFamily: "'Baloo 2', sans-serif",
              fontSize: `clamp(${textSize * 0.4}px, ${textSize * 0.08}vw, ${textSize}px)`,
              fontWeight: 900,
              letterSpacing: '0.04em',
              textTransform: 'uppercase',
              color: 'transparent',
              WebkitTextStroke: '1.5px rgba(232, 166, 61, 0.55)',
              whiteSpace: 'nowrap',
              paddingRight: `clamp(${textSize * 0.3}px, 3vw, ${textSize * 0.5}px)`,
              userSelect: 'none',
              lineHeight: 1,
              display: 'inline-block',
              paddingTop: textSize * 0.18,
              paddingBottom: textSize * 0.18,
            }}
          >
            {item}
            <span
              style={{
                color: '#E8A63D',
                WebkitTextStroke: '0',
                marginLeft: `clamp(16px, 2vw, 32px)`,
                marginRight: `clamp(16px, 2vw, 32px)`,
                fontSize: `${textSize * 0.3}px`,
                opacity: 0.7,
                verticalAlign: 'middle',
              }}
            >
              ◆
            </span>
          </span>
        ))}
      </div>

      <style>{`
        @keyframes desiMarqueeLTR_${duration} {
          from { transform: translateX(-33.333%); }
          to   { transform: translateX(0); }
        }
        @keyframes desiMarqueeRTL_${duration} {
          from { transform: translateX(0); }
          to   { transform: translateX(-33.333%); }
        }
      `}</style>
    </div>
  )
}
