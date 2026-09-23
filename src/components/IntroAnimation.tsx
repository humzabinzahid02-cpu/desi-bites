import { useState, useEffect, useRef } from 'react'

const WORDS = [
  { text: 'بسم اللہ', lang: 'Bismillah', dir: 'rtl' },
  { text: 'خوش آمدید', lang: 'Urdu', dir: 'rtl' },
  { text: 'Hello', lang: 'English', dir: 'ltr' },
  { text: 'Bienvenue', lang: 'French', dir: 'ltr' },
  { text: 'Merhaba', lang: 'Turkish', dir: 'ltr' },
  { text: 'Namaste', lang: 'Hindi', dir: 'ltr' },
  { text: 'Ahlan', lang: 'Arabic', dir: 'ltr' },
  { text: 'Hallo', lang: 'German', dir: 'ltr' },
]

const HOLD = 320
const TRANS = 200
const STEP = HOLD + TRANS

interface Props {
  onDone: () => void
}

type Phase = 'word' | 'brand' | 'docking' | 'exit'

export default function IntroAnimation({ onDone }: Props) {
  const [index, setIndex] = useState(0)
  const [phase, setPhase] = useState<Phase>('word')
  const [wordVisible, setWordVisible] = useState(true)
  const [bgFade, setBgFade] = useState(false)
  const timersRef = useRef<ReturnType<typeof setTimeout>[]>([])

  const clearAllTimers = () => {
    timersRef.current.forEach(clearTimeout)
    timersRef.current = []
  }

  const triggerDocking = () => {
    clearAllTimers()
    setPhase('docking')
    setBgFade(true)
    const t = setTimeout(() => {
      setPhase('exit')
      onDone()
    }, 800)
    timersRef.current.push(t)
  }

  const handleSkip = () => {
    if (phase === 'docking' || phase === 'exit') return
    triggerDocking()
  }

  useEffect(() => {
    WORDS.forEach((_, i) => {
      timersRef.current.push(setTimeout(() => { setIndex(i); setWordVisible(true) }, i * STEP))
      timersRef.current.push(setTimeout(() => setWordVisible(false), i * STEP + HOLD))
    })

    const brandStart = WORDS.length * STEP + 80
    timersRef.current.push(setTimeout(() => { setPhase('brand'); setWordVisible(true) }, brandStart))
    timersRef.current.push(setTimeout(triggerDocking, brandStart + 1100))

    return clearAllTimers
  }, [onDone])

  if (phase === 'exit') return null

  const word = WORDS[index]
  const isDocking = phase === 'docking'

  return (
    <div
      onClick={handleSkip}
      style={{
        position: 'fixed', inset: 0, zIndex: 9999,
        background: bgFade ? 'rgba(251,241,222,0)' : '#FBF1DE',
        pointerEvents: isDocking ? 'none' : 'auto',
        transition: 'background 750ms cubic-bezier(0.16,1,0.3,1)',
        overflow: 'hidden',
        cursor: isDocking ? 'default' : 'pointer',
      }}
    >
      {/* Ambient glow */}
      <div style={{
        position: 'absolute', top: '50%', left: '50%',
        transform: 'translate(-50%,-50%)',
        width: 500, height: 500, borderRadius: '50%',
        background: 'radial-gradient(circle,rgba(140,47,27,0.14) 0%,transparent 68%)',
        pointerEvents: 'none',
        opacity: isDocking ? 0 : 1,
        transition: 'opacity 500ms ease',
      }} />

      {/* Centre accent line */}
      <div style={{
        position: 'absolute', top: '50%', left: 0, right: 0, height: 1,
        background: 'linear-gradient(90deg,transparent,rgba(232,166,61,0.3),transparent)',
        transform: 'translateY(-50%)',
        opacity: isDocking ? 0 : 0.6,
        transition: 'opacity 400ms ease',
        pointerEvents: 'none',
      }} />

      {/* Multilingual words */}
      {phase === 'word' && (
        <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', pointerEvents: 'none', zIndex: 5 }}>
          <div style={{
            display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center',
            animation: wordVisible
              ? 'introIn 200ms cubic-bezier(0.22,1,0.36,1) forwards'
              : 'introOut 200ms ease forwards',
          }}>
            <div dir={word?.dir} style={{
              fontFamily: "'Baloo 2', sans-serif",
              fontSize: 'clamp(72px,15vw,150px)',
              fontWeight: 900, lineHeight: 1, letterSpacing: '-0.01em',
              color: '#5C1D10', textAlign: 'center',
            }}>
              {word?.text}
            </div>
            <div style={{
              fontFamily: "'Mukta', sans-serif",
              fontSize: 12, letterSpacing: '0.3em',
              textTransform: 'uppercase', fontWeight: 700,
              color: '#C9892A', marginTop: 12, textAlign: 'center',
            }}>
              {word?.lang}
            </div>
          </div>
        </div>
      )}

      {/* Brand docking */}
      {(phase === 'brand' || isDocking) && (
        <div style={{
          position: 'absolute', zIndex: 10,
          transformOrigin: isDocking ? 'top left' : 'center center',
          top: isDocking ? 18 : '50%',
          left: isDocking ? 'clamp(24px,5vw,80px)' : '50%',
          transform: isDocking ? 'translate(0,0)' : 'translate(-50%,-50%)',
          transition: 'top 750ms cubic-bezier(0.16,1,0.3,1), left 750ms cubic-bezier(0.16,1,0.3,1), transform 750ms cubic-bezier(0.16,1,0.3,1)',
          display: 'flex',
          flexDirection: isDocking ? 'row' : 'column',
          alignItems: 'center',
          justifyContent: 'center',
          gap: isDocking ? 10 : 16,
        }}>
          {/* Logo mark */}
          <div style={{
            width: isDocking ? 36 : 52,
            height: isDocking ? 36 : 52,
            borderRadius: isDocking ? 8 : 13,
            background: 'linear-gradient(135deg,#8C2F1B 0%,#5C1D10 100%)',
            display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
            boxShadow: isDocking ? 'none' : '0 10px 30px rgba(140,47,27,0.3)',
            transition: 'all 750ms cubic-bezier(0.16,1,0.3,1)',
          }}>
            {/* Desi Bite "D" icon SVG */}
            <svg width={isDocking ? 20 : 28} height={isDocking ? 20 : 28} viewBox="0 0 28 28" fill="none" style={{ transition: 'all 750ms cubic-bezier(0.16,1,0.3,1)' }}>
              <circle cx="14" cy="10" r="6" fill="#F4CE7F"/>
              <ellipse cx="14" cy="20" rx="9" ry="5" fill="#F4CE7F" opacity="0.7"/>
              <circle cx="14" cy="10" r="3" fill="#8C2F1B"/>
            </svg>
          </div>

          {/* Brand name */}
          <div style={{
            fontFamily: "'Baloo 2', sans-serif", fontWeight: 800,
            fontSize: isDocking ? 19 : 'clamp(44px,8vw,92px)',
            letterSpacing: isDocking ? '0.06em' : '0.03em',
            textTransform: 'uppercase', lineHeight: 1, whiteSpace: 'nowrap',
            color: '#5C1D10',
            transition: 'all 750ms cubic-bezier(0.16,1,0.3,1)',
          }}>
            Desi Bite
          </div>

          {/* Tagline — hidden when docking */}
          <div style={{
            fontFamily: "'Mukta', sans-serif", fontSize: 11,
            letterSpacing: '0.35em', textTransform: 'uppercase',
            fontWeight: 600, color: '#8C2F1B',
            opacity: isDocking ? 0 : 1,
            transform: isDocking ? 'translateY(10px) scale(0.9)' : 'translateY(0) scale(1)',
            transition: 'opacity 350ms ease, transform 350ms ease',
            pointerEvents: 'none',
            marginTop: isDocking ? 0 : 6,
            display: isDocking ? 'none' : 'block',
          }}>
            Faisalabad ka Khana
          </div>
        </div>
      )}

      {/* Skip hint */}
      <div style={{
        position: 'absolute', bottom: 36, left: '50%', transform: 'translateX(-50%)',
        fontFamily: "'Mukta', sans-serif", fontSize: 12, letterSpacing: '0.2em',
        textTransform: 'uppercase', color: '#8C2F1B', opacity: isDocking ? 0 : 0.45,
        transition: 'opacity 400ms', pointerEvents: 'none',
      }}>
        Tap to skip
      </div>
    </div>
  )
}
