interface CTAProps {
  onOrderClick?: () => void
}

export default function CTA({ onOrderClick }: CTAProps) {
  const handleOrder = () => {
    if (onOrderClick) {
      onOrderClick()
    } else {
      const m = document.getElementById('menu')
      if (m) m.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const handleWhatsApp = () => {
    window.open('https://wa.me/923291807782?text=Hi%20Desi%20Bite!%20I%20would%20like%20to%20order%20nashta.', '_blank')
  }

  return (
    <section
      id="contact-cta"
      className="relative w-full bg-[#2B1B12] text-white py-24 sm:py-32 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      {/* Ambient background glows */}
      <div className="absolute top-0 right-0 w-96 sm:w-[550px] h-96 sm:h-[550px] bg-radial from-[#8C2F1B]/35 to-transparent rounded-full blur-3xl pointer-events-none -translate-y-1/2 translate-x-1/3" />
      <div className="absolute bottom-0 left-0 w-80 sm:w-[450px] h-80 sm:h-[450px] bg-radial from-[#E8A63D]/20 to-transparent rounded-full blur-3xl pointer-events-none translate-y-1/2 -translate-x-1/4" />

      {/* Subtle traditional grid lines */}
      <div
        className="absolute inset-0 opacity-5 pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(to right, #FFFFFF 1px, transparent 1px), linear-gradient(to bottom, #FFFFFF 1px, transparent 1px)',
          backgroundSize: '64px 64px',
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto">
        
        {/* Main Grid Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          
          {/* Left: Main Copy & Callout (7 cols) */}
          <div className="lg:col-span-7 flex flex-col">
            
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2 font-['Mukta'] text-xs tracking-[0.3em] uppercase font-bold text-[#E8A63D] mb-4">
              <span className="w-2 h-2 rounded-full bg-[#E8A63D] animate-pulse" />
              HOT MORNING NASHTA • FAISALABAD
            </div>

            {/* Headline */}
            <h2 className="font-['Baloo_2'] font-black text-4xl sm:text-6xl lg:text-7xl text-white uppercase tracking-tight leading-[0.92] mb-6">
              WARM PURIS &amp;<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#E8A63D] via-[#F4CE7F] to-[#E8A63D]">
                FRESH PARATHAS
              </span>
            </h2>

            {/* Subtitle */}
            <p className="font-['Mukta'] text-base sm:text-lg text-[#FAF0D5]/75 max-w-xl leading-relaxed mb-8">
              Fresh halwa puri, stuffed parathas and desi chai — made the way baji makes it at home. Browse the menu, build your order, and send it straight to us on WhatsApp.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                type="button"
                onClick={handleWhatsApp}
                className="group inline-flex items-center justify-center font-['Baloo_2'] font-extrabold text-sm sm:text-base tracking-[0.08em] uppercase text-[#2B1B12] bg-[#25D366] hover:bg-[#20BD5A] hover:text-white px-8 sm:px-10 py-3.5 sm:py-4 rounded-full border-2 border-[#25D366] shadow-[0_8px_25px_rgba(37,211,102,0.3)] transition-all duration-300 cursor-pointer"
              >
                <span>ORDER ON WHATSAPP</span>
              </button>

              <button
                type="button"
                onClick={handleOrder}
                className="group inline-flex items-center gap-2.5 font-['Baloo_2'] font-bold text-sm sm:text-base tracking-wider uppercase text-white hover:text-[#E8A63D] px-6 py-3.5 rounded-full transition-colors cursor-pointer bg-transparent border border-white/20 hover:border-[#E8A63D]"
              >
                <span>BUILD ORDER CHIT</span>
                <span className="transition-transform group-hover:translate-x-1">→</span>
              </button>
            </div>

          </div>

          {/* Right: Fast Contact / HQ Cards (5 cols) */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            
            {/* Card 1: WhatsApp Quick Order */}
            <div className="bg-[#3D1E15]/60 backdrop-blur-md rounded-2xl p-5 border border-white/10 flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-[#25D366]/20 text-[#25D366] flex items-center justify-center shrink-0">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
              </div>
              <div>
                <span className="font-['Mukta'] text-[10px] tracking-widest uppercase text-[#FAF0D5]/60 font-bold block">
                  Direct WhatsApp Order
                </span>
                <h4 className="font-['Baloo_2'] font-bold text-base text-white uppercase mt-0.5 mb-1">
                  +92 329 1807782
                </h4>
                <p className="font-['Mukta'] text-xs text-[#FAF0D5]/70 m-0">
                  Instant order confirmation &amp; delivery time
                </p>
              </div>
            </div>

            {/* Card 2: Kitchen Hours */}
            <div className="bg-[#3D1E15]/60 backdrop-blur-md rounded-2xl p-5 border border-white/10 flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-[#E8A63D]/15 text-[#E8A63D] flex items-center justify-center shrink-0">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10"/>
                  <polyline points="12 6 12 12 16 14"/>
                </svg>
              </div>
              <div>
                <span className="font-['Mukta'] text-[10px] tracking-widest uppercase text-[#FAF0D5]/60 font-bold block">
                  Morning Nashta Timings
                </span>
                <h4 className="font-['Baloo_2'] font-bold text-base text-white uppercase mt-0.5 mb-1">
                  7:00 AM – 11:00 AM
                </h4>
                <p className="font-['Mukta'] text-xs text-[#FAF0D5]/70 m-0">
                  Everyday • Fresh hot puris on order
                </p>
              </div>
            </div>

            {/* Card 3: Location */}
            <div className="bg-[#3D1E15]/60 backdrop-blur-md rounded-2xl p-5 border border-white/10 flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-[#E8A63D]/15 text-[#E8A63D] flex items-center justify-center shrink-0">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                  <circle cx="12" cy="10" r="3"/>
                </svg>
              </div>
              <div className="flex-1">
                <span className="font-['Mukta'] text-[10px] tracking-widest uppercase text-[#FAF0D5]/60 font-bold block">
                  Kitchen Location
                </span>
                <h4 className="font-['Baloo_2'] font-bold text-base text-white uppercase mt-0.5 mb-1">
                  Faisalabad, Pakistan
                </h4>
                <p className="font-['Mukta'] text-xs text-[#FAF0D5]/70 m-0">
                  Serving warm breakfast to the entire mohalla
                </p>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  )
}
