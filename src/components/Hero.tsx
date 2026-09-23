import { useEffect, useState, useRef } from 'react'
import { FluidMorphBg, DESI_HERO_COLORS } from './FluidMorphBg'

const FLIP_WORDS = ['WITH LOVE', 'FRESH CHAI', 'GHAR KA ZAIQA', 'HOT PURIS', 'DESI LAZZAT']

export default function Hero() {
  const [wordIdx, setWordIdx] = useState(0)
  const [isFlipping, setIsFlipping] = useState(false)
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null)

  useEffect(() => {
    timerRef.current = setInterval(() => {
      setIsFlipping(true)
      setTimeout(() => {
        setWordIdx((prev) => (prev + 1) % FLIP_WORDS.length)
        setIsFlipping(false)
      }, 450)
    }, 3200)

    return () => {
      if (timerRef.current) clearInterval(timerRef.current)
    }
  }, [])

  const currentWord = FLIP_WORDS[wordIdx]

  return (
    <section
      id="home"
      className="relative w-full min-h-screen overflow-hidden bg-[#FBF1DE] flex items-center pt-28 pb-16 lg:pt-28 lg:pb-16"
    >
      {/* Fluid Morphing Dynamic Background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <FluidMorphBg
          className="w-full h-full opacity-100"
          backgroundColor="#FBF1DE"
          duration={6.5}
          colors={DESI_HERO_COLORS}
        />
        {/* Soft top gradient to blend under navbar */}
        <div className="absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-[#FBF1DE] via-[#FBF1DE]/70 to-transparent pointer-events-none" />

        {/* Soft left diffusion so headline typography has crisp, luxury readability */}
        <div className="absolute inset-y-0 left-0 w-full lg:w-[58%] bg-gradient-to-r from-[#FBF1DE] via-[#FBF1DE]/92 to-transparent pointer-events-none" />

        {/* Soft bottom fade */}
        <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-[#FBF1DE] via-[#FBF1DE]/60 to-transparent pointer-events-none" />
      </div>

      {/* Main Responsive Grid Container */}
      <div className="relative z-10 w-full max-w-7xl xl:max-w-[1380px] 2xl:max-w-[1480px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 xl:gap-12 items-center min-h-[calc(100vh-8rem)] py-6 lg:py-12">
          
          {/* ── Left Column: Headline & Subtitle (7 cols) ── */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            
            {/* Eyebrow Badge */}
            <div className="inline-flex items-center gap-2 font-['Mukta'] text-[11px] sm:text-xs tracking-[0.25em] uppercase font-bold text-[#8C2F1B] bg-white/90 backdrop-blur-md px-4 py-1.5 rounded-full border border-[#8C2F1B]/15 shadow-xs w-fit mb-5">
              <span className="w-2.5 h-2.5 rounded-full bg-[#E8A63D] animate-ping" />
              FRESH MORNING NASHTA • 7:00 AM – 11:00 AM
            </div>

            {/* Main Headline: Halwa Puri, Aloo Paratha & Kitchen Full of Love */}
            <div className="font-['Baloo_2'] font-black leading-[0.92] uppercase tracking-tight mb-4">
              <span className="block whitespace-nowrap text-4xl sm:text-6xl md:text-7xl lg:text-[3.75rem] xl:text-[4.75rem] 2xl:text-[5.5rem] text-[#5C1D10]">
                HALWA PURI &amp;
              </span>
              <span className="block whitespace-nowrap text-4xl sm:text-6xl md:text-7xl lg:text-[3.75rem] xl:text-[4.75rem] 2xl:text-[5.5rem] text-[#5C1D10]">
                ALOO PARATHA
              </span>

              {/* Saffron Gold 3D Flip Word Container */}
              <div className="h-[1.12em] overflow-hidden inline-flex items-center text-4xl sm:text-6xl md:text-7xl lg:text-[3.75rem] xl:text-[4.75rem] 2xl:text-[5.5rem] text-[#E8A63D] [perspective:1000px] whitespace-nowrap">
                <div
                  key={wordIdx}
                  className="inline-flex [transform-style:preserve-3d] whitespace-nowrap"
                >
                  {currentWord.split('').map((char, charIdx) => (
                    <span
                      key={`${currentWord}-${charIdx}`}
                      style={{
                        transformOrigin: '50% 50% -18px',
                        animation: isFlipping
                          ? `letterFlipOut 400ms ease ${charIdx * 25}ms forwards`
                          : `letterFlipIn 500ms cubic-bezier(0.16, 1, 0.3, 1) ${charIdx * 35}ms forwards`,
                      }}
                      className="inline-block"
                    >
                      {char}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Professional Cultural Identity Line (Single line, Nastaliq Calligraphy, Gold Accents) */}
            <div className="relative flex items-center gap-3 my-2 max-w-xl">
              <div className="h-[1.5px] w-8 sm:w-12 bg-gradient-to-r from-transparent to-[#E8A63D]" />
              <div
                dir="rtl"
                className="font-['Noto_Nastaliq_Urdu',serif] font-bold text-2xl sm:text-3xl lg:text-[2rem] leading-normal text-[#5C1D10] whitespace-nowrap drop-shadow-xs"
              >
                حلوہ پوری، آلو پراٹھا اور محبت بھرا دیسی ناشتہ
              </div>
              <div className="h-[1.5px] flex-1 max-w-[100px] bg-gradient-to-r from-[#E8A63D] to-transparent" />
            </div>

            {/* Hero Subtitle */}
            <p className="font-['Mukta'] text-base sm:text-lg text-[#2B1B12]/80 max-w-xl leading-relaxed mt-3 mb-8">
              Fresh halwa puri, stuffed parathas, and desi chai — made the way baji makes it at home. Browse the menu, build your order chit, and send it straight to us on WhatsApp.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4">
              <button
                type="button"
                onClick={() => {
                  const m = document.getElementById('menu')
                  if (m) m.scrollIntoView({ behavior: 'smooth' })
                }}
                className="group inline-flex items-center gap-2.5 font-['Baloo_2'] font-bold text-base tracking-wider uppercase text-white bg-gradient-to-r from-[#8C2F1B] to-[#5C1D10] hover:from-[#5C1D10] hover:to-[#8C2F1B] px-8 py-3.5 rounded-full shadow-lg shadow-[#8C2F1B]/25 hover:shadow-xl hover:shadow-[#8C2F1B]/35 transition-all duration-300 cursor-pointer"
              >
                <span>EXPLORE MENU</span>
                <span className="transition-transform group-hover:translate-x-1">→</span>
              </button>

              <button
                type="button"
                onClick={() => {
                  const a = document.getElementById('about')
                  if (a) a.scrollIntoView({ behavior: 'smooth' })
                }}
                className="group flex items-center gap-2.5 font-['Baloo_2'] font-bold text-base uppercase tracking-wider text-[#5C1D10] hover:text-[#8C2F1B] px-6 py-3.5 rounded-full border border-[#8C2F1B]/30 hover:border-[#8C2F1B] transition-colors cursor-pointer bg-white/40 backdrop-blur-sm"
              >
                <div className="w-6 h-6 rounded-full bg-white border border-[#8C2F1B]/20 shadow-xs flex items-center justify-center text-[#8C2F1B] group-hover:bg-[#8C2F1B] group-hover:text-white transition-all text-xs">
                  ↓
                </div>
                <span>Our Heritage</span>
              </button>
            </div>

          </div>

          {/* ── Right Column: Cinematic Video Card (5 cols) ── */}
          <div className="lg:col-span-5 w-full relative flex justify-center lg:justify-end">
            
            {/* Ambient Warm Golden Glow behind Card */}
            <div className="absolute -top-12 -right-8 w-80 sm:w-[450px] h-80 sm:h-[450px] bg-[#E8A63D]/25 rounded-full blur-3xl pointer-events-none -z-10" />
            <div className="absolute -bottom-10 -left-8 w-72 sm:w-96 h-72 sm:h-96 bg-[#8C2F1B]/20 rounded-full blur-3xl pointer-events-none -z-10" />

            {/* Video Frame Card */}
            <div className="relative rounded-[32px] overflow-hidden bg-[#1C100B] border border-[#E8A63D]/40 shadow-[0_30px_70px_rgba(43,27,18,0.35)] w-full max-w-[520px] aspect-[4/3] sm:aspect-[16/11] flex flex-col justify-between">
              
              {/* Actual Video: AutoPlay, Loop, Muted, PlaysInline */}
              <video
                src="/hero-nashta.mp4"
                autoPlay
                loop
                muted
                playsInline
                className="absolute inset-0 w-full h-full object-cover"
              />

              {/* Subtle top & bottom shadow gradient overlays for badge legibility */}
              <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-[#1C100B]/80 via-[#1C100B]/30 to-transparent pointer-events-none z-10" />
              <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#1C100B]/85 via-[#1C100B]/40 to-transparent pointer-events-none z-10" />

              {/* Card top badge */}
              <div className="relative z-20 w-full flex items-center justify-between p-5">
                <span className="font-['Mukta'] text-xs font-bold uppercase tracking-widest text-[#E8A63D] bg-[#1C100B]/75 backdrop-blur-md px-3.5 py-1 rounded-full border border-[#E8A63D]/30 shadow-xs">
                  ★ Fresh Morning Nashta
                </span>
                <span className="font-['Mukta'] text-xs font-semibold text-white/90 bg-[#1C100B]/60 backdrop-blur-xs px-3 py-1 rounded-full">
                  7:00 AM – 11:00 AM
                </span>
              </div>

              {/* Floating Bottom Live Tag */}
              <div className="relative z-20 m-4 bg-[#1C100B]/80 backdrop-blur-md rounded-2xl p-3.5 border border-[#E8A63D]/30 flex items-center justify-between shadow-lg">
                <div className="flex items-center gap-2.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                  <span className="font-['Baloo_2'] text-sm font-bold text-white uppercase tracking-wider">
                    Kitchen Open • Fast WhatsApp Delivery
                  </span>
                </div>
                <span className="font-['Mukta'] text-xs font-bold text-[#E8A63D]">
                  30–45 Mins
                </span>
              </div>

            </div>
          </div>

        </div>
      </div>

      {/* Vertical Fixed Scroll Indicator (on large screens) */}
      <div className="hidden sm:flex absolute right-6 md:right-10 bottom-8 flex-col items-center gap-2 z-10 pointer-events-none">
        <span className="font-['Baloo_2'] text-[11px] tracking-[0.25em] uppercase text-[#8C2F1B]/60 [writing-mode:vertical-rl] font-bold">
          SCROLL
        </span>
        <div className="w-[2px] h-12 bg-gradient-to-b from-[#8C2F1B] to-transparent" />
      </div>

      {/* 3D Flip Fade Text Keyframes */}
      <style>{`
        @keyframes letterFlipIn {
          0% {
            opacity: 0;
            transform: rotateX(-90deg) translateY(24px);
            filter: blur(4px);
          }
          60% {
            opacity: 1;
            filter: blur(0px);
          }
          100% {
            opacity: 1;
            transform: rotateX(0deg) translateY(0px);
            filter: blur(0px);
          }
        }

        @keyframes letterFlipOut {
          0% {
            opacity: 1;
            transform: rotateX(0deg) translateY(0px);
            filter: blur(0px);
          }
          100% {
            opacity: 0;
            transform: rotateX(90deg) translateY(-24px);
            filter: blur(4px);
          }
        }

        @keyframes steamRise {
          0% {
            opacity: 0;
            transform: translateY(10px) scaleX(0.8);
          }
          50% {
            opacity: 0.8;
            transform: translateY(-8px) scaleX(1.1);
          }
          100% {
            opacity: 0;
            transform: translateY(-24px) scaleX(1.3);
          }
        }

        @keyframes thaliBob {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-6px);
          }
        }
      `}</style>
    </section>
  )
}
