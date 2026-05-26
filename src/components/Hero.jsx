import { useEffect, useRef } from 'react'
import { Leaf, Shield, Coins, ArrowRight, ChevronDown } from 'lucide-react'

export default function Hero() {
  const floatRef = useRef([])

  useEffect(() => {
    const shapes = floatRef.current
    shapes.forEach((el, i) => {
      if (!el) return
      let y = 0, dir = 1, speed = 0.3 + i * 0.15
      const animate = () => {
        y += speed * dir
        if (y > 18 || y < 0) dir *= -1
        el.style.transform = `translateY(${y}px) rotate(${y * 1.5}deg)`
        requestAnimationFrame(animate)
      }
      animate()
    })
  }, [])

  const stats = [
    { value: '70%', label: 'Lumpur Banjir' },
    { value: '15%', label: 'Abu Sekam Padi' },
    { value: '15%', label: 'Semen Portland' },
  ]

  return (
    <section id="hero" style={{
      minHeight: '100vh',
      background: `radial-gradient(ellipse at 70% 50%, rgba(232,97,42,0.08) 0%, transparent 60%),
                   radial-gradient(ellipse at 20% 80%, rgba(42,123,111,0.08) 0%, transparent 50%),
                   var(--cream)`,
      display: 'flex', alignItems: 'center',
      position: 'relative', overflow: 'hidden',
      paddingTop: '80px',
    }}>

      {/* Floating Shapes */}
      {[
        { w:80, h:80, bg:'var(--orange)', br:'50%', top:'15%', right:'8%', opacity:0.7 },
        { w:120, h:120, bg:'var(--teal)', br:'24px', top:'25%', right:'18%', opacity:0.5 },
        { w:60, h:60, bg:'var(--yellow)', br:'50%', top:'60%', right:'6%', opacity:0.8 },
        { w:50, h:50, bg:'var(--purple)', br:'12px', top:'70%', right:'22%', opacity:0.4 },
        { w:90, h:90, bg:'var(--orange-light)', br:'50% 20% 50% 20%', top:'10%', left:'3%', opacity:0.3 },
      ].map((s, i) => (
        <div key={i} ref={el => floatRef.current[i] = el} style={{
          position: 'absolute',
          width: s.w, height: s.h,
          background: s.bg, borderRadius: s.br,
          top: s.top, right: s.right, left: s.left,
          opacity: s.opacity, pointerEvents: 'none',
        }}/>
      ))}

      <div className="container" style={{
        display: 'grid', gridTemplateColumns: '1fr 1fr',
        gap: '60px', alignItems: 'center',
      }}>
        {/* Left */}
        <div>
          <div className="section-tag" style={{ marginBottom: '20px' }}>
            <Leaf size={12} style={{ display: 'inline', marginRight: '6px', verticalAlign: 'middle' }}/>
            Inovasi Circular Economy Aceh
          </div>

          <h1 style={{
            fontFamily: 'var(--font-heading)',
            fontSize: 'clamp(2.8rem, 5vw, 4.2rem)',
            lineHeight: 1.1, marginBottom: '24px', color: 'var(--dark)',
          }}>
            Lumpur Banjir <br/>
            <span style={{
              background: 'linear-gradient(135deg, var(--orange), var(--yellow))',
              WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
            }}>Jadi Bata</span> <br/>
            Berkualitas
          </h1>

          <p style={{
            fontSize: '1.1rem', color: 'var(--gray)',
            lineHeight: 1.8, marginBottom: '40px', maxWidth: '480px',
          }}>
            KRUENG BRICK mengubah limbah lumpur banjir dan abu sekam padi menjadi
            batu bata ramah lingkungan — solusi <em>waste-to-product</em> untuk Aceh yang lebih berkelanjutan.
          </p>

          <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', marginBottom: '56px' }}>
            <a href="#produk"
              onMouseEnter={e => e.currentTarget.style.transform = 'translateY(-3px)'}
              onMouseLeave={e => e.currentTarget.style.transform = 'translateY(0)'}
              style={{
                background: 'var(--orange)', color: 'white',
                padding: '16px 32px', borderRadius: '100px',
                textDecoration: 'none', fontWeight: 700, fontSize: '1rem',
                boxShadow: '0 8px 24px rgba(232,97,42,0.35)',
                transition: 'var(--transition)', display: 'inline-flex',
                alignItems: 'center', gap: '8px',
              }}>
              Lihat Produk <ArrowRight size={18}/>
            </a>
            <a href="#proses"
              onMouseEnter={e => { e.currentTarget.style.background = 'var(--teal)'; e.currentTarget.style.color = 'white' }}
              onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = 'var(--teal)' }}
              style={{
                background: 'transparent', color: 'var(--teal)',
                padding: '16px 32px', borderRadius: '100px',
                textDecoration: 'none', fontWeight: 600, fontSize: '1rem',
                border: '2px solid var(--teal)', transition: 'var(--transition)',
                display: 'inline-flex', alignItems: 'center', gap: '8px',
              }}>
              <ChevronDown size={18}/> Cara Kerja
            </a>
          </div>

          <div style={{ display: 'flex', gap: '32px' }}>
            {stats.map((s, i) => (
              <div key={i}>
                <div style={{
                  fontSize: '1.8rem', fontWeight: 800,
                  fontFamily: 'var(--font-heading)',
                  color: i === 0 ? 'var(--orange)' : i === 1 ? 'var(--teal)' : 'var(--purple)',
                }}>{s.value}</div>
                <div style={{ fontSize: '0.8rem', color: 'var(--gray)', fontWeight: 500 }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Card */}
        <div style={{ position: 'relative', display: 'flex', justifyContent: 'center' }}>
          <div style={{
            width: '100%', maxWidth: '460px',
            background: 'white', borderRadius: '32px',
            padding: '40px', boxShadow: 'var(--shadow-strong)',
            position: 'relative', overflow: 'hidden',
          }}>
            <div style={{
              position: 'absolute', top: 0, left: 0, right: 0, height: '6px',
              background: 'linear-gradient(90deg, var(--orange), var(--yellow), var(--teal))',
            }}/>

            <div style={{ textAlign: 'center', marginBottom: '32px' }}>
              <div style={{
  width: 80, height: 80,
  borderRadius: '20px', margin: '0 auto 16px',
  overflow: 'hidden',
  display: 'flex', alignItems: 'center', justifyContent: 'center',
  boxShadow: '0 8px 24px rgba(232,97,42,0.3)',
}}>
  <img
    src="/logo-krueng.png"
    alt="Krueng Brick"
    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
    onError={e => {
      e.target.style.display = 'none'
      e.target.parentNode.innerHTML = '<span style="color:white;font-weight:800;font-size:2rem;font-family:serif">K</span>'
    }}
  />
</div>
              <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.4rem', marginBottom: '8px' }}>KRUENG BRICK</h3>
              <p style={{ color: 'var(--gray)', fontSize: '0.9rem' }}>Batu Bata Ramah Lingkungan</p>
            </div>

            {[
              { icon: <Leaf size={20} color="var(--teal)"/>, label: 'Lumpur Banjir', desc: 'Bahan utama dari Sungai Aceh', color: 'var(--teal)' },
              { icon: <Leaf size={20} color="var(--yellow)"/>, label: 'Abu Sekam Padi', desc: 'Pozzolan alami dari PT SBA', color: 'var(--yellow)' },
              { icon: <Shield size={20} color="var(--orange)"/>, label: 'Semen Portland', desc: 'Perekat dari kawasan Lhoknga', color: 'var(--orange)' },
            ].map((item, i) => (
              <div key={i} style={{
                display: 'flex', alignItems: 'center', gap: '16px',
                padding: '14px 16px', background: 'var(--cream)',
                borderRadius: '12px', marginBottom: i < 2 ? '12px' : 0,
                borderLeft: `4px solid ${item.color}`,
              }}>
                {item.icon}
                <div>
                  <div style={{ fontWeight: 700, fontSize: '0.9rem' }}>{item.label}</div>
                  <div style={{ color: 'var(--gray)', fontSize: '0.8rem' }}>{item.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}