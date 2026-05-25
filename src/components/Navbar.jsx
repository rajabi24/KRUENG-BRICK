import { useState, useEffect } from 'react'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { label: 'Beranda', href: 'hero' },
    { label: 'Produk', href: 'produk' },
    { label: 'Proses', href: 'proses' },
    { label: 'SWOT', href: 'swot' },
    { label: 'Pasar', href: 'pasar' },
    { label: 'Tim', href: 'tim' },
    { label: 'Kontak', href: 'kontak' },
  ]

  const scrollTo = (id) => {
    const el = document.getElementById(id)
    if (el) {
      const offset = 80
      const top = el.getBoundingClientRect().top + window.scrollY - offset
      window.scrollTo({ top, behavior: 'smooth' })
    }
    setMenuOpen(false)
  }

  return (
    <nav style={{
      position: 'fixed',
      top: 0, left: 0, right: 0,
      zIndex: 1000,
      padding: scrolled ? '12px 40px' : '20px 40px',
      background: scrolled ? 'rgba(245, 240, 232, 0.95)' : 'transparent',
      backdropFilter: scrolled ? 'blur(12px)' : 'none',
      boxShadow: scrolled ? '0 2px 20px rgba(0,0,0,0.08)' : 'none',
      transition: 'all 0.4s cubic-bezier(0.4,0,0.2,1)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
    }}>

      {/* Logo */}
      <button
        onClick={() => scrollTo('hero')}
        style={{
          background: 'none', border: 'none', cursor: 'pointer',
          display: 'flex', alignItems: 'center', gap: '10px', padding: 0,
        }}
      >
        <div style={{
          width: 40, height: 40,
          background: 'linear-gradient(135deg, var(--orange), var(--teal))',
          borderRadius: '10px',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          color: 'white', fontWeight: 800, fontSize: '16px',
          fontFamily: 'var(--font-heading)',
        }}>K</div>
        <span style={{
          fontFamily: 'var(--font-heading)',
          fontWeight: 700, fontSize: '1.2rem',
          color: 'var(--dark)',
        }}>Krueng<span style={{ color: 'var(--orange)' }}>Brick</span></span>
      </button>

      {/* Desktop Links */}
      <div style={{ display: 'flex', gap: '32px', alignItems: 'center' }}>
        {navLinks.slice(0, -1).map(link => (
          <button
            key={link.href}
            onClick={() => scrollTo(link.href)}
            style={{
              background: 'none', border: 'none', cursor: 'pointer',
              color: 'var(--dark)',
              fontWeight: 500, fontSize: '0.9rem',
              fontFamily: 'var(--font-body)',
              transition: 'var(--transition)',
              padding: '4px 0',
            }}
            onMouseEnter={e => e.currentTarget.style.color = 'var(--orange)'}
            onMouseLeave={e => e.currentTarget.style.color = 'var(--dark)'}
          >{link.label}</button>
        ))}

        {/* CTA Button */}
        <button
          onClick={() => scrollTo('kontak')}
          onMouseEnter={e => {
            e.currentTarget.style.background = 'var(--teal)'
            e.currentTarget.style.boxShadow = '0 4px 16px rgba(42,123,111,0.3)'
          }}
          onMouseLeave={e => {
            e.currentTarget.style.background = 'var(--orange)'
            e.currentTarget.style.boxShadow = '0 4px 16px rgba(232,97,42,0.3)'
          }}
          style={{
            background: 'var(--orange)',
            color: 'white', padding: '10px 24px',
            borderRadius: '100px', border: 'none',
            fontWeight: 600, fontSize: '0.9rem',
            fontFamily: 'var(--font-body)',
            cursor: 'pointer',
            transition: 'var(--transition)',
            boxShadow: '0 4px 16px rgba(232,97,42,0.3)',
          }}
        >Hubungi Kami</button>
      </div>

      {/* Hamburger */}
      <button
        onClick={() => setMenuOpen(!menuOpen)}
        style={{
          display: 'none',
          background: 'none', border: 'none',
          cursor: 'pointer', flexDirection: 'column', gap: '5px',
          padding: '4px',
        }}
        className="hamburger"
      >
        {[0, 1, 2].map(i => (
          <span key={i} style={{
            display: 'block', width: '24px', height: '2px',
            background: 'var(--dark)', borderRadius: '2px',
            transition: 'var(--transition)',
          }}/>
        ))}
      </button>

      {/* Mobile Menu */}
      {menuOpen && (
        <div style={{
          position: 'absolute', top: '100%', left: 0, right: 0,
          background: 'rgba(245,240,232,0.98)',
          backdropFilter: 'blur(12px)',
          padding: '20px 40px',
          display: 'flex', flexDirection: 'column', gap: '16px',
          boxShadow: '0 8px 32px rgba(0,0,0,0.1)',
        }}>
          {navLinks.map(link => (
            <button
              key={link.href}
              onClick={() => scrollTo(link.href)}
              style={{
                background: 'none', border: 'none', cursor: 'pointer',
                color: 'var(--dark)', fontWeight: 500, fontSize: '1rem',
                fontFamily: 'var(--font-body)',
                textAlign: 'left', padding: '4px 0',
              }}
            >{link.label}</button>
          ))}
        </div>
      )}
    </nav>
  )
}