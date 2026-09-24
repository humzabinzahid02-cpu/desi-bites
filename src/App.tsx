import { useState } from 'react'
import IntroAnimation from './components/IntroAnimation'
import Nav from './components/Nav'
import Hero from './components/Hero'
import Stats from './components/Stats'
import Ticker from './components/Ticker'
import Menu, { CartItem, MenuItem } from './components/Menu'
import SectionMarquee from './components/SectionMarquee'
import About from './components/About'
import CTA from './components/CTA'
import Footer from './components/Footer'
import WhatsAppFab from './components/WhatsAppFab'

export default function App() {
  const [introDone, setIntroDone] = useState(false)
  const [cart, setCart] = useState<CartItem[]>([])

  const handleUpdateQty = (item: MenuItem, delta: number) => {
    setCart(prev => {
      const existing = prev.find(ci => ci.item.id === item.id)
      if (!existing) {
        if (delta > 0) return [...prev, { item, qty: delta }]
        return prev
      }

      const newQty = existing.qty + delta
      if (newQty <= 0) {
        return prev.filter(ci => ci.item.id !== item.id)
      }

      return prev.map(ci =>
        ci.item.id === item.id ? { ...ci, qty: newQty } : ci
      )
    })
  }

  const totalCartCount = cart.reduce((sum, ci) => sum + ci.qty, 0)

  const scrollToMenu = () => {
    const el = document.getElementById('menu')
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      {/* Multilingual Intro Splash Animation */}
      {!introDone && <IntroAnimation onDone={() => setIntroDone(true)} />}

      {/* Main App Content with smooth fade-in after intro */}
      <div
        style={{
          opacity: introDone ? 1 : 0,
          transition: 'opacity 600ms ease',
          pointerEvents: introDone ? 'auto' : 'none',
          minHeight: '100vh',
          background: '#FBF1DE',
        }}
      >
        <Nav
          cartCount={totalCartCount}
          onOpenCart={scrollToMenu}
        />

        <Hero />

        <Stats />

        <Ticker />

        <Menu
          cart={cart}
          onUpdateQty={handleUpdateQty}
        />

        {/* Dynamic Outlined Section Marquee */}
        <SectionMarquee
          items={[
            'Fresh Halwa Puri',
            'Hand-Stuffed Aloo Paratha',
            'Chicken Cheese Paratha',
            'Fluffy Cheese Omelette',
            'Karak Doodh Patti Chai',
            'Morning Nashta 7 AM – 11 AM',
            'Ghar Ka Zaiqa',
          ]}
          direction="ltr"
          background="#2B1B12"
          textSize={85}
          duration={26}
        />

        <About />

        <CTA onOrderClick={scrollToMenu} />

        <Footer />

        <WhatsAppFab />
      </div>
    </>
  )
}
