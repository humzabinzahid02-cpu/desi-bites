export default function About() {
  const FEATURES = [
    {
      title: 'Fresh Mornings',
      urdu: 'تازہ صبح، گرم ناشتہ',
      desc: 'Puri and halwa made fresh daily, never from the day before.',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="5"/>
          <line x1="12" y1="1" x2="12" y2="3"/>
          <line x1="12" y1="21" x2="12" y2="23"/>
          <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/>
          <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>
          <line x1="1" y1="12" x2="3" y2="12"/>
          <line x1="21" y1="12" x2="23" y2="12"/>
          <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/>
          <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
        </svg>
      ),
    },
    {
      title: 'Hand-Stuffed Parathas',
      urdu: 'ہاتھ کے بنے پراٹھے',
      desc: 'Aloo, anda and more, stuffed and rolled to order every morning.',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10"/>
          <path d="M8 12a4 4 0 0 1 8 0"/>
        </svg>
      ),
    },
    {
      title: 'Easy WhatsApp Ordering',
      urdu: 'آسان واٹس ایپ آرڈر',
      desc: 'Build your order here, send it on WhatsApp, done.',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/>
        </svg>
      ),
    },
    {
      title: 'Ghar Ka Zaiqa',
      urdu: 'گھر کا اصلی ذائقہ',
      desc: 'Same recipes baji has always cooked for her own family.',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
          <polyline points="9 22 9 12 15 12 15 22"/>
        </svg>
      ),
    },
  ]

  return (
    <section id="about" className="relative w-full bg-[#FFFFFF] py-24 px-4 sm:px-6 lg:px-8 border-t border-[#8C2F1B]/10">
      <div className="max-w-7xl mx-auto">
        
        {/* Top Story Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
          
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 font-['Mukta'] text-xs tracking-[0.3em] uppercase font-bold text-[#8C2F1B] mb-3">
              <span className="w-2 h-2 rounded-full bg-[#E8A63D]" />
              ABOUT THE KITCHEN
            </div>
            <h2 className="font-['Baloo_2'] font-black text-3xl sm:text-5xl text-[#5C1D10] uppercase tracking-tight leading-[1] mb-6">
              Desi Bite has been cooking for the mohalla for years.
            </h2>
            <p className="font-['Mukta'] text-base sm:text-lg text-[#2B1B12]/85 leading-relaxed mb-4">
              What started as breakfast for the family became breakfast for the whole street. Every puri is rolled by hand, every paratha is stuffed fresh, and the chai is always on the boil.
            </p>
            <p className="font-['Mukta'] text-base text-[#2B1B12]/75 leading-relaxed mb-6">
              This page brings that same kitchen online — pick what you want, build your chit, and we'll get it steaming hot and ready for your morning table.
            </p>
          </div>

          <div className="lg:col-span-5">
            {/* Visual Promise Card */}
            <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-[#2B1B12] via-[#3D1E15] to-[#5C1D10] p-8 text-white shadow-2xl border border-[#E8A63D]/30">
              <div className="absolute top-0 right-0 w-64 h-64 bg-[#E8A63D]/15 rounded-full blur-3xl pointer-events-none" />
              
              <span className="font-['Baloo_2'] text-xs tracking-widest uppercase font-bold text-[#E8A63D] block mb-2">
                Pure Home Recipe
              </span>
              <h3 className="font-['Baloo_2'] font-extrabold text-2xl text-white uppercase tracking-tight mb-3 leading-tight">
                Made the way Baji makes it at home
              </h3>
              <p className="font-['Mukta'] text-sm text-[#FAF0D5]/80 leading-relaxed mb-6">
                Golden crispy puris fried on order, spiced chickpeas slow-simmered in rich gravy, and piping hot doodh patti chai.
              </p>

              <div className="grid grid-cols-2 gap-4 pt-4 border-t border-white/10">
                <div>
                  <span className="font-['Baloo_2'] text-2xl font-black text-[#E8A63D] block">
                    7:00 AM
                  </span>
                  <span className="font-['Mukta'] text-xs text-white/70 uppercase tracking-wider font-semibold">
                    First Deg Opens
                  </span>
                </div>
                <div>
                  <span className="font-['Baloo_2'] text-2xl font-black text-[#E8A63D] block">
                    100%
                  </span>
                  <span className="font-['Mukta'] text-xs text-white/70 uppercase tracking-wider font-semibold">
                    Fresh Every Day
                  </span>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* 4 Feature Cards matching the live site */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {FEATURES.map(f => (
            <div
              key={f.title}
              className="bg-[#FAF0D5]/40 rounded-2xl p-6 border border-[#8C2F1B]/12 hover:border-[#8C2F1B]/30 hover:bg-[#FAF0D5]/70 transition-all duration-200"
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#8C2F1B] to-[#5C1D10] text-[#F4CE7F] flex items-center justify-center mb-4 shadow-sm shadow-[#8C2F1B]/20">
                {f.icon}
              </div>
              <h4 className="font-['Baloo_2'] font-bold text-lg text-[#5C1D10] uppercase mb-1">
                {f.title}
              </h4>
              <div dir="rtl" className="font-['Noto_Nastaliq_Urdu',serif] text-xs font-semibold text-[#8C2F1B] mb-2">
                {f.urdu}
              </div>
              <p className="font-['Mukta'] text-xs sm:text-sm text-[#2B1B12]/75 leading-relaxed m-0">
                {f.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
