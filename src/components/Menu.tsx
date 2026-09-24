import { useState } from 'react'

function StaggeredSmoke() {
  return (
    <span className="relative inline-flex items-center justify-center w-6 h-6 shrink-0 overflow-visible" title="Steaming Fresh">
      {/* 3 Staggered Smoke Wisps */}
      <svg
        className="absolute -top-3.5 left-1/2 -translate-x-1/2 overflow-visible pointer-events-none"
        width="18"
        height="18"
        viewBox="0 0 18 18"
        fill="none"
      >
        <path
          d="M 4 16 Q 1 10, 4 6 Q 7 2, 4 0"
          stroke="#8C2F1B"
          strokeWidth="1.8"
          strokeLinecap="round"
          className="smoke-wisp-1"
        />
        <path
          d="M 9 16 Q 12 10, 9 6 Q 6 1, 9 0"
          stroke="#E8A63D"
          strokeWidth="2"
          strokeLinecap="round"
          className="smoke-wisp-2"
        />
        <path
          d="M 14 16 Q 11 10, 14 6 Q 17 2, 14 0"
          stroke="#8C2F1B"
          strokeWidth="1.8"
          strokeLinecap="round"
          className="smoke-wisp-3"
        />
      </svg>

      {/* Tea Cup Icon */}
      <svg
        width="15"
        height="15"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#8C2F1B"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="relative z-10 shrink-0"
      >
        <path d="M17 8h1a4 4 0 1 1 0 8h-1" />
        <path d="M3 8h14v7a5 5 0 0 1-5 5H8a5 5 0 0 1-5-5V8z" />
        <line x1="2" y1="21" x2="18" y2="21" />
      </svg>
    </span>
  )
}

export interface MenuItem {
  id: string
  name: string
  nameUrdu: string
  category: 'puri' | 'parathas' | 'eggs' | 'chai'
  price: number
  desc: string
  tag?: string
}

export interface CartItem {
  item: MenuItem
  qty: number
}

export const MENU_ITEMS: MenuItem[] = [
  // 1. Puri
  {
    id: 'puri-chanay-halwa',
    name: 'Puri with Chanay / Halwa',
    nameUrdu: '۱ پوری + چنے + حلوہ',
    category: 'puri',
    price: 80,
    desc: '1 fresh hot puri served with spiced chickpeas (chana) and sweet suji halwa.',
    tag: 'NASHTA SPECIAL',
  },

  // 2. Parathas
  {
    id: 'sada-paratha',
    name: 'Sada Paratha',
    nameUrdu: 'سادہ پراٹھا',
    category: 'parathas',
    price: 80,
    desc: 'Freshly rolled flaky layered tawa paratha made with love at home.',
  },
  {
    id: 'aloo-paratha',
    name: 'Aloo Wala Paratha',
    nameUrdu: 'آلو والا پراٹھا',
    category: 'parathas',
    price: 100,
    desc: 'Fresh tawa paratha stuffed with spiced potato filling.',
    tag: 'POPULAR',
  },
  {
    id: 'anda-paratha',
    name: 'Anda Paratha',
    nameUrdu: 'انڈا پراٹھا',
    category: 'parathas',
    price: 150,
    desc: 'Layered paratha with spiced egg folding for breakfast.',
    tag: 'BESTSELLER',
  },
  {
    id: 'cheeni-paratha',
    name: 'Cheeni Paratha',
    nameUrdu: 'چینی پراٹھا',
    category: 'parathas',
    price: 120,
    desc: 'Traditional sweet layered paratha caramelized with melting sugar.',
    tag: 'SWEET',
  },
  {
    id: 'chicken-cheese-paratha',
    name: 'Chicken Cheese Paratha',
    nameUrdu: 'چکن چیز پراٹھا',
    category: 'parathas',
    price: 350,
    desc: 'Loaded with shredded spiced chicken and melted mozzarella cheese.',
    tag: 'SPECIAL',
  },
  {
    id: 'chocolate-paratha',
    name: 'Chocolate Paratha',
    nameUrdu: 'چاکلیٹ پراٹھا',
    category: 'parathas',
    price: 250,
    desc: 'Crispy layered paratha filled with rich chocolate spread.',
    tag: 'DESSERT',
  },

  // 3. Eggs
  {
    id: 'plain-half-fry-egg',
    name: 'Plain / Half Fry Egg',
    nameUrdu: 'پلین / ہاف فرائی انڈا',
    category: 'eggs',
    price: 50,
    desc: 'Fresh farm egg fried sunny side up or plain.',
  },
  {
    id: 'omelette',
    name: 'Omelette',
    nameUrdu: 'آملیٹ',
    category: 'eggs',
    price: 100,
    desc: 'Whisked with onions, green chilies, tomatoes, and herbs.',
    tag: 'FRESH',
  },
  {
    id: 'meetha-anda',
    name: 'Meetha Anda',
    nameUrdu: 'میٹھا انڈا',
    category: 'eggs',
    price: 70,
    desc: 'Traditional sweet egg scramble prepared with sugar.',
  },
  {
    id: 'cheese-omelette',
    name: 'Cheese Omelette',
    nameUrdu: 'چیز آملیٹ',
    category: 'eggs',
    price: 200,
    desc: 'Fluffy farm omelette stuffed with melted cheese.',
    tag: 'CHEESY',
  },

  // 4. Chai / Tea
  {
    id: 'karak-chai',
    name: 'Chai / Tea (Karak Doodh Patti)',
    nameUrdu: 'کڑک چائے',
    category: 'chai',
    price: 100,
    desc: 'Freshly brewed traditional Pakistani karak doodh patti chai simmered with cardamom and pure milk.',
    tag: 'HOT & FRESH',
  },
]

const CATEGORIES = [
  { id: 'all', label: 'All Items' },
  { id: 'puri', label: 'Puri & Chanay' },
  { id: 'parathas', label: 'Parathas' },
  { id: 'eggs', label: 'Eggs & Omelettes' },
  { id: 'chai', label: 'Chai / Tea' },
]

interface MenuProps {
  cart: CartItem[]
  onUpdateQty: (item: MenuItem, delta: number) => void
}

export default function Menu({ cart, onUpdateQty }: MenuProps) {
  const [activeCategory, setActiveCategory] = useState<string>('all')
  const [customerName, setCustomerName] = useState('')
  const [customerPhone, setCustomerPhone] = useState('')
  const [customerAddress, setCustomerAddress] = useState('')
  const [orderSent, setOrderSent] = useState(false)

  const filteredItems = activeCategory === 'all'
    ? MENU_ITEMS
    : MENU_ITEMS.filter(item => item.category === activeCategory)

  const getItemQty = (id: string) => {
    const found = cart.find(ci => ci.item.id === id)
    return found ? found.qty : 0
  }

  const subtotal = cart.reduce((sum, ci) => sum + ci.item.price * ci.qty, 0)
  const grandTotal = subtotal

  const handleSendWhatsApp = () => {
    if (cart.length === 0) return

    const lines: string[] = []
    lines.push('*Baji Nazia Ka Home Kitchen*')
    lines.push('*Daily Fresh & Homemade Menu Order*')
    lines.push('')

    let total = 0
    cart.forEach(ci => {
      total += ci.qty * ci.item.price
      lines.push(`• ${ci.item.name} (${ci.item.nameUrdu}) x${ci.qty} - Rs. ${ci.qty * ci.item.price}`)
    })

    lines.push('')
    lines.push(`*Total Amount: Rs. ${total}*`)
    lines.push('')

    const name = customerName.trim()
    const phone = customerPhone.trim()
    const address = customerAddress.trim()

    if (name) lines.push(`Name: ${name}`)
    if (phone) lines.push(`Phone: ${phone}`)
    if (address) lines.push(`Delivery Address: ${address}`)

    const message = encodeURIComponent(lines.join('\n'))
    // Official WhatsApp Number: 03098027782
    window.open(`https://wa.me/923098027782?text=${message}`, '_blank')
    setOrderSent(true)
    setTimeout(() => setOrderSent(false), 5000)
  }

  return (
    <section id="menu" className="relative w-full bg-[#FAF0D5] py-12 sm:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-12">
          <div className="inline-flex items-center gap-2 font-['Mukta'] text-[11px] sm:text-xs tracking-[0.25em] uppercase font-bold text-[#8C2F1B] bg-white/80 px-3.5 py-1.5 rounded-full border border-[#8C2F1B]/15 shadow-xs mb-3">
            <span className="w-2 h-2 rounded-full bg-[#E8A63D]" />
            BAJI NAZIA KA HOME KITCHEN • DAILY FRESH
          </div>
          <h2 className="font-['Baloo_2'] font-black text-3xl sm:text-5xl lg:text-6xl text-[#5C1D10] uppercase tracking-tight leading-[1] mb-3">
            ناشتہ مینو • <span className="animate-shimmer">Nashta Menu</span>
          </h2>
          <p className="font-['Mukta'] text-sm sm:text-base text-[#2B1B12]/80 leading-relaxed max-w-xl mx-auto">
            100% Ghar Ka Khana • Halal &amp; Delicious. Tap <span className="font-bold text-[#8C2F1B]">+</span> on any item to build your order chit.
          </p>

          {/* Pre-order banner notice from menu poster */}
          <div className="mt-4 inline-block bg-white/95 border border-[#E8A63D]/40 rounded-xl px-4 py-2 text-xs sm:text-sm text-[#8C2F1B] font-['Mukta'] font-semibold shadow-xs">
            ✨ <span className="font-['Noto_Nastaliq_Urdu',serif] font-bold text-sm sm:text-base ml-1">پیشگی آرڈر پر خصوصی پکوان دستیاب ہیں</span> • Special dishes available upon pre-order
          </div>
        </div>

        {/* Category Pills Bar */}
        <div className="flex items-center justify-start sm:justify-center gap-2 sm:gap-3 overflow-x-auto pb-3 mb-8 no-scrollbar">
          {CATEGORIES.map(cat => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`font-['Baloo_2'] text-xs sm:text-sm font-bold uppercase tracking-wider px-4 sm:px-5 py-2 sm:py-2.5 rounded-full whitespace-nowrap transition-all duration-200 cursor-pointer ${
                activeCategory === cat.id
                  ? 'bg-gradient-to-r from-[#8C2F1B] to-[#5C1D10] text-white shadow-md shadow-[#8C2F1B]/20 scale-105'
                  : 'bg-white/80 text-[#5C1D10] hover:bg-white border border-[#8C2F1B]/15 hover:border-[#8C2F1B]/30'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* 2-Column Responsive Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-start">
          
          {/* Menu Cards Grid */}
          <div key={activeCategory} className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
            {filteredItems.map((item, idx) => {
              const qty = getItemQty(item.id)
              return (
                <div
                  key={item.id}
                  style={{
                    animation: `menuCardFadeIn 320ms cubic-bezier(0.16, 1, 0.3, 1) ${Math.min(idx * 35, 280)}ms backwards`,
                  }}
                  className={`group bg-white rounded-2xl p-4 sm:p-5 border shadow-[0_4px_16px_rgba(92,29,16,0.04)] hover:shadow-[0_12px_28px_rgba(92,29,16,0.12)] hover:-translate-y-0.5 transition-all duration-300 flex flex-col justify-between ${
                    item.category === 'chai'
                      ? 'border-[#E8A63D]/60 ring-2 ring-[#E8A63D]/25 bg-gradient-to-br from-white via-white to-[#FBF1DE]/60'
                      : 'border-[#8C2F1B]/10 hover:border-[#8C2F1B]/30'
                  }`}
                >
                  <div>
                    {/* Top Row: Tag & Staggered Smoke Animation */}
                    <div className="flex items-center justify-between gap-2 mb-2 min-h-[26px]">
                      <span className="font-['Mukta'] text-[11px] font-bold tracking-wider text-[#8C2F1B]/70 uppercase flex items-center gap-1.5">
                        {item.category === 'chai' && <StaggeredSmoke />}
                        Ghar Ka Khana
                      </span>
                      {item.tag && (
                        <span className="inline-flex items-center gap-1 font-['Baloo_2'] text-[10px] font-extrabold uppercase px-2.5 py-0.5 rounded-full bg-[#E8A63D]/20 text-[#8C2F1B] border border-[#E8A63D]/40">
                          {item.tag}
                        </span>
                      )}
                    </div>

                    {/* Title & Urdu */}
                    <div className="flex items-baseline justify-between gap-2">
                      <h3 className="font-['Baloo_2'] font-bold text-lg sm:text-xl text-[#5C1D10] group-hover:text-[#8C2F1B] transition-colors leading-snug flex items-center gap-2">
                        <span>{item.name}</span>
                        {item.category === 'chai' && (
                          <span className="text-[10px] bg-[#8C2F1B] text-white px-2 py-0.5 rounded-full font-['Baloo_2'] font-extrabold tracking-wider uppercase shadow-xs">
                            TEA
                          </span>
                        )}
                      </h3>
                    </div>
                    <div dir="rtl" className="font-['Noto_Nastaliq_Urdu',serif] text-base sm:text-lg font-bold text-[#8C2F1B] mb-2 leading-relaxed">
                      {item.nameUrdu}
                    </div>

                    {/* Description */}
                    <p className="font-['Mukta'] text-xs sm:text-sm text-[#2B1B12]/75 leading-relaxed mb-4">
                      {item.desc}
                    </p>
                  </div>

                  {/* Bottom Row: Price & Add Controls */}
                  <div className="pt-3 border-t border-[#8C2F1B]/10 flex items-center justify-between">
                    <div>
                      <span className="font-['Mukta'] text-[11px] text-[#8C2F1B] font-bold block">RATE</span>
                      <span className="font-['Baloo_2'] font-black text-xl sm:text-2xl text-[#5C1D10]">
                        Rs. {item.price}
                      </span>
                    </div>

                    {/* Add / Quantity buttons */}
                    {qty === 0 ? (
                      <button
                        onClick={() => onUpdateQty(item, 1)}
                        className="inline-flex items-center gap-1.5 font-['Baloo_2'] font-bold text-xs sm:text-sm uppercase tracking-wider text-white bg-gradient-to-r from-[#8C2F1B] to-[#5C1D10] hover:from-[#5C1D10] hover:to-[#8C2F1B] px-4 sm:px-5 py-2 rounded-full shadow-xs cursor-pointer transition-all active:scale-95"
                      >
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                          <line x1="12" y1="5" x2="12" y2="19"/>
                          <line x1="5" y1="12" x2="19" y2="12"/>
                        </svg>
                        <span>ADD</span>
                      </button>
                    ) : (
                      <div className="flex items-center gap-2 bg-[#FBF1DE] rounded-full p-1 border border-[#8C2F1B]/20">
                        <button
                          onClick={() => onUpdateQty(item, -1)}
                          className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-white text-[#8C2F1B] font-black text-sm flex items-center justify-center hover:bg-[#8C2F1B] hover:text-white transition-colors cursor-pointer shadow-xs"
                          aria-label="Decrease quantity"
                        >
                          -
                        </button>
                        <span className="font-['Baloo_2'] font-black text-base sm:text-lg text-[#5C1D10] px-1.5">
                          {qty}
                        </span>
                        <button
                          onClick={() => onUpdateQty(item, 1)}
                          className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-[#8C2F1B] text-white font-black text-base flex items-center justify-center hover:bg-[#5C1D10] transition-colors cursor-pointer shadow-xs"
                          aria-label="Increase quantity"
                        >
                          +
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              )
            })}
          </div>

          {/* Sticky Order Chit (Receipt) */}
          <div className="lg:col-span-4 lg:sticky lg:top-24 w-full" id="order">
            <div className="bg-[#FFFFFF] rounded-2xl border-2 border-dashed border-[#8C2F1B]/25 p-5 sm:p-6 shadow-xl relative overflow-hidden">
              
              {/* Receipt Header */}
              <div className="text-center pb-3 border-b border-[#8C2F1B]/15">
                <div className="font-['Courier_Prime'] text-xs font-bold uppercase tracking-widest text-[#8C2F1B]">
                  ═════════════════════════
                </div>
                <h3 className="font-['Baloo_2'] font-black text-xl sm:text-2xl text-[#5C1D10] uppercase tracking-wider mt-1">
                  Order Chit
                </h3>
                <p className="font-['Courier_Prime'] text-[11px] text-[#2B1B12]/70 uppercase tracking-wider">
                  Baji Nazia • WhatsApp: 03098027782
                </p>
                <div className="font-['Courier_Prime'] text-xs font-bold uppercase tracking-widest text-[#8C2F1B]">
                  ═════════════════════════
                </div>
              </div>

              {/* Items List */}
              <div className="py-3 min-h-[120px] max-h-[240px] overflow-y-auto">
                {cart.length === 0 ? (
                  <div className="h-full flex flex-col items-center justify-center text-center py-6 text-[#8C2F1B]/60 font-['Mukta']">
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="mb-2 opacity-50">
                      <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/>
                      <line x1="3" y1="6" x2="21" y2="6"/>
                      <path d="M16 10a4 4 0 0 1-8 0"/>
                    </svg>
                    <p className="text-sm font-bold">Your order is empty.</p>
                    <p className="text-xs">Add items from the menu above</p>
                  </div>
                ) : (
                  <div className="space-y-2.5 font-['Courier_Prime'] text-xs">
                    {cart.map(ci => (
                      <div key={ci.item.id} className="flex items-center justify-between gap-2 border-b border-gray-100 pb-2">
                        <div className="flex-1">
                          <div className="font-bold text-[#2B1B12]">
                            {ci.item.name} x{ci.qty}
                          </div>
                          <div className="text-[10px] text-[#8C2F1B]">
                            @ Rs. {ci.item.price} each
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="font-bold text-[#5C1D10]">
                            Rs. {ci.item.price * ci.qty}
                          </span>
                          <button
                            onClick={() => onUpdateQty(ci.item, -ci.qty)}
                            className="text-red-500 hover:text-red-700 font-bold px-1 cursor-pointer text-sm"
                            title="Remove"
                          >
                            ×
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Bill Totals */}
              <div className="pt-2 border-t border-[#8C2F1B]/15 space-y-1 font-['Courier_Prime'] text-xs">
                <div className="flex justify-between text-base font-bold text-[#5C1D10] pt-1">
                  <span>TOTAL:</span>
                  <span>Rs. {grandTotal}</span>
                </div>
              </div>

              {/* Customer Delivery Input Fields */}
              <div className="mt-3.5 space-y-2 font-['Mukta']">
                <input
                  type="text"
                  placeholder="Your Name (optional)"
                  value={customerName}
                  onChange={e => setCustomerName(e.target.value)}
                  className="w-full text-xs px-3 py-2 rounded-lg bg-[#FAF0D5]/50 border border-[#8C2F1B]/20 focus:outline-none focus:border-[#8C2F1B]"
                />
                <input
                  type="tel"
                  placeholder="Phone Number (optional)"
                  value={customerPhone}
                  onChange={e => setCustomerPhone(e.target.value)}
                  className="w-full text-xs px-3 py-2 rounded-lg bg-[#FAF0D5]/50 border border-[#8C2F1B]/20 focus:outline-none focus:border-[#8C2F1B]"
                />
                <input
                  type="text"
                  placeholder="Delivery Address in Faisalabad"
                  value={customerAddress}
                  onChange={e => setCustomerAddress(e.target.value)}
                  className="w-full text-xs px-3 py-2 rounded-lg bg-[#FAF0D5]/50 border border-[#8C2F1B]/20 focus:outline-none focus:border-[#8C2F1B]"
                />
              </div>

              {/* WhatsApp Action Button */}
              <button
                disabled={cart.length === 0}
                onClick={handleSendWhatsApp}
                className={`w-full mt-3.5 py-3 px-4 rounded-xl font-['Baloo_2'] font-bold text-sm uppercase tracking-wider flex items-center justify-center gap-2 transition-all cursor-pointer ${
                  cart.length === 0
                    ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                    : 'bg-[#25D366] hover:bg-[#20BD5A] text-white shadow-lg shadow-[#25D366]/30 active:scale-98'
                }`}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                <span>SEND ORDER ON WHATSAPP</span>
              </button>
              <div className="text-[11px] text-center text-[#2B1B12]/60 mt-2 font-['Mukta']">
                Order directly on WhatsApp: 03098027782
              </div>

              {orderSent && (
                <div className="mt-2.5 p-2 bg-emerald-100 text-emerald-800 text-center rounded-lg text-xs font-['Mukta'] font-bold">
                  ✓ Order opened in WhatsApp! Send message to confirm.
                </div>
              )}
            </div>
          </div>

        </div>

      </div>
    </section>
  )
}
