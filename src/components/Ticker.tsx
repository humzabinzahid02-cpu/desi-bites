const ITEMS = [
  'Puri with Chanay / Halwa',
  'Sada Paratha',
  'Aloo Wala Paratha',
  'Anda Paratha',
  'Cheeni Paratha',
  'Chicken Cheese Paratha',
  'Chocolate Paratha',
  'Cheese Omelette',
  'Meetha Anda',
  'Plain / Half Fry Egg',
  'Chai / Tea (Rs. 100)',
  'Baji Nazia Ka Home Kitchen',
]

export default function Ticker() {
  const doubled = [...ITEMS, ...ITEMS]

  return (
    <div style={{
      background: '#FFFFFF',
      borderTop: '1px solid rgba(140, 47, 27, 0.1)',
      borderBottom: '1px solid rgba(140, 47, 27, 0.1)',
      padding: '14px 0',
      overflow: 'hidden',
      whiteSpace: 'nowrap',
    }}>
      <div className="animate-ticker" style={{ display: 'inline-flex', gap: 0 }}>
        {doubled.map((item, i) => (
          <span key={i} style={{
            fontFamily: "'Baloo 2', sans-serif",
            fontSize: '15px',
            fontWeight: 800,
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
            color: '#5C1D10',
            padding: '0 32px',
          }}>
            {item}
            <span style={{ marginLeft: 32, color: '#E8A63D' }}>◆</span>
          </span>
        ))}
      </div>
    </div>
  )
}
