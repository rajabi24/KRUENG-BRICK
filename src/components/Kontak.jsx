import { useState } from 'react'
import { MessageCircle, Mail, MapPin, ChevronDown } from 'lucide-react'

export default function Kontak() {
  const [copied, setCopied] = useState(false)
  const [openFaq, setOpenFaq] = useState(null)

  const copyEmail = () => {
    navigator.clipboard.writeText('rajabiriskan@gmail.com')
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const contacts = [
    {
      icon: <MessageCircle size={28} strokeWidth={1.5}/>,
      title: 'WhatsApp',
      value: '+62 823-8446-9964',
      desc: 'Respon cepat di jam kerja',
      color: '#25D366', bg: 'rgba(37,211,102,0.08)',
      action: () => window.open('https://wa.me/6282384469964', '_blank'),
      label: 'Chat Sekarang',
    },
    {
      icon: <Mail size={28} strokeWidth={1.5}/>,
      title: 'Email',
      value: 'rajabiriskan@gmail.com',
      desc: 'Untuk penawaran & kemitraan',
      color: 'var(--orange)', bg: 'rgba(232,97,42,0.08)',
      action: copyEmail,
      label: copied ? 'Tersalin!' : 'Salin Email',
    },
    {
      icon: <MapPin size={28} strokeWidth={1.5}/>,
      title: 'Lokasi',
      value: 'Banda Aceh, Aceh',
      desc: 'Universitas Syiah Kuala',
      color: 'var(--teal)', bg: 'rgba(42,123,111,0.08)',
      action: () => window.open('https://maps.google.com/?q=Universitas+Syiah+Kuala+Banda+Aceh', '_blank'),
      label: 'Lihat Maps',
    },
  ]

  const faqs = [
    {
      q: 'Apakah produk sudah bisa dipesan?',
      a: 'Saat ini kami masih dalam tahap pengembangan dan uji kualitas. Hubungi kami untuk informasi ketersediaan terkini.',
    },
    {
      q: 'Berapa minimum order untuk B2B?',
      a: 'Untuk kemitraan B2B, minimum order adalah 1.000 bata per batch. Hubungi kami untuk negosiasi harga spesial.',
    },
    {
      q: 'Apakah produk memenuhi standar SNI?',
      a: 'Produk kami dirancang sesuai standar SNI 15-2094-2000 dan sedang dalam proses sertifikasi resmi.',
    },
    {
      q: 'Bagaimana cara bermitra dengan Krueng Brick?',
      a: 'Silakan hubungi kami via WhatsApp atau email untuk diskusi lebih lanjut mengenai peluang kemitraan.',
    },
  ]

  return (
    <>
      <section id="kontak" style={{ background: 'var(--cream)', padding: '100px 0' }}>
        <div className="container">

          <div style={{ textAlign: 'center', marginBottom: '64px' }}>
            <span className="section-tag" style={{ background: 'var(--teal)' }}>Hubungi Kami</span>
            <h2 className="section-title">
              Mari <span style={{ color: 'var(--teal)' }}>Terhubung</span>
            </h2>
            <p className="section-subtitle" style={{ margin: '0 auto', textAlign: 'center' }}>
              Punya pertanyaan, ingin bermitra, atau tertarik memesan produk?
              Tim kami siap membantu Anda.
            </p>
          </div>

          {/* Contact Cards */}
          <div style={{
            display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '24px', marginBottom: '80px',
          }}>
            {contacts.map((c, i) => (
              <div key={i}
                onMouseEnter={e => {
                  e.currentTarget.style.transform = 'translateY(-8px)'
                  e.currentTarget.style.boxShadow = 'var(--shadow-medium)'
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.transform = 'translateY(0)'
                  e.currentTarget.style.boxShadow = 'var(--shadow-soft)'
                }}
                style={{
                  background: 'white', borderRadius: '24px', padding: '36px 28px',
                  boxShadow: 'var(--shadow-soft)', transition: 'var(--transition)',
                  textAlign: 'center', borderTop: `4px solid ${c.color}`,
                }}>
                <div style={{
                  width: 64, height: 64, background: c.bg, borderRadius: '18px',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  margin: '0 auto 20px', color: c.color,
                }}>{c.icon}</div>

                <h4 style={{
                  fontFamily: 'var(--font-heading)', fontSize: '1.2rem',
                  marginBottom: '8px', color: 'var(--dark)',
                }}>{c.title}</h4>
                <p style={{ fontWeight: 700, fontSize: '0.95rem', color: c.color, marginBottom: '6px' }}>
                  {c.value}
                </p>
                <p style={{ color: 'var(--gray)', fontSize: '0.82rem', marginBottom: '24px' }}>{c.desc}</p>

                <button onClick={c.action}
                  onMouseEnter={e => {
                    e.currentTarget.style.background = c.color
                    e.currentTarget.style.color = 'white'
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.background = c.bg
                    e.currentTarget.style.color = c.color
                  }}
                  style={{
                    background: c.bg, color: c.color,
                    border: `2px solid ${c.color}`,
                    padding: '10px 24px', borderRadius: '100px',
                    fontWeight: 700, fontSize: '0.88rem',
                    fontFamily: 'var(--font-body)', cursor: 'pointer',
                    transition: 'var(--transition)', width: '100%',
                  }}>{c.label}</button>
              </div>
            ))}
          </div>

          {/* FAQ */}
          <div style={{
            background: 'white', borderRadius: '28px',
            padding: '48px', boxShadow: 'var(--shadow-soft)',
          }}>
            <h3 style={{
              fontFamily: 'var(--font-heading)', fontSize: '1.8rem',
              textAlign: 'center', marginBottom: '40px',
            }}>Pertanyaan <span style={{ color: 'var(--orange)' }}>Umum</span></h3>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {faqs.map((faq, i) => (
                <div key={i} style={{
                  borderRadius: '16px', overflow: 'hidden',
                  border: '1px solid rgba(0,0,0,0.06)',
                }}>
                  <button onClick={() => setOpenFaq(openFaq === i ? null : i)} style={{
                    width: '100%', padding: '20px 24px',
                    background: openFaq === i ? 'var(--orange)' : 'var(--cream)',
                    border: 'none', cursor: 'pointer',
                    display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                    fontFamily: 'var(--font-body)', transition: 'var(--transition)',
                  }}>
                    <span style={{
                      fontWeight: 700, fontSize: '0.95rem',
                      color: openFaq === i ? 'white' : 'var(--dark)', textAlign: 'left',
                    }}>{faq.q}</span>
                    <div style={{
                      color: openFaq === i ? 'white' : 'var(--orange)',
                      marginLeft: '16px', flexShrink: 0,
                      transition: 'var(--transition)',
                      transform: openFaq === i ? 'rotate(180deg)' : 'rotate(0)',
                    }}>
                      <ChevronDown size={20} strokeWidth={2}/>
                    </div>
                  </button>

                  <div style={{
                    maxHeight: openFaq === i ? '200px' : '0',
                    overflow: 'hidden',
                    transition: 'max-height 0.4s cubic-bezier(0.4,0,0.2,1)',
                  }}>
                    <p style={{
                      padding: '20px 24px', color: 'var(--gray)',
                      fontSize: '0.9rem', lineHeight: 1.8,
                      margin: 0, background: 'white',
                    }}>{faq.a}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* Footer */}
      <footer style={{ background: 'var(--dark)', padding: '60px 0 32px', color: 'white' }}>
        <div className="container">
          <div style={{
            display: 'grid', gridTemplateColumns: '2fr 1fr 1fr',
            gap: '48px', marginBottom: '48px',
          }}>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '16px' }}>
                <div style={{
                  width: 40, height: 40,
                  background: 'linear-gradient(135deg, var(--orange), var(--teal))',
                  borderRadius: '10px', display: 'flex',
                  alignItems: 'center', justifyContent: 'center',
                  color: 'white', fontWeight: 800, fontSize: '16px',
                  fontFamily: 'var(--font-heading)',
                }}>K</div>
                <span style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: '1.2rem' }}>
                  Krueng<span style={{ color: 'var(--orange)' }}>Brick</span>
                </span>
              </div>
              <p style={{
                color: 'rgba(255,255,255,0.6)', fontSize: '0.9rem',
                lineHeight: 1.8, maxWidth: '300px', marginBottom: '20px',
              }}>
                Mengubah lumpur banjir menjadi batu bata ramah lingkungan.
                Solusi waste-to-product untuk Aceh yang lebih berkelanjutan.
              </p>
              <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
                {['Circular Economy', 'Green Construction'].map((tag, i) => (
                  <span key={i} style={{
                    background: 'rgba(255,255,255,0.08)',
                    color: 'rgba(255,255,255,0.7)',
                    padding: '4px 12px', borderRadius: '100px',
                    fontSize: '0.75rem', fontWeight: 600,
                  }}>{tag}</span>
                ))}
              </div>
            </div>

            <div>
              <h5 style={{
                fontWeight: 700, fontSize: '0.85rem',
                letterSpacing: '1.5px', textTransform: 'uppercase',
                color: 'rgba(255,255,255,0.4)', marginBottom: '20px',
              }}>Navigasi</h5>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                {[
                  { label: 'Beranda', id: 'hero' },
                  { label: 'Tentang Produk', id: 'produk' },
                  { label: 'Proses Produksi', id: 'proses' },
                  { label: 'Analisis SWOT', id: 'swot' },
                  { label: 'Target Pasar', id: 'pasar' },
                  { label: 'Tim Kami', id: 'tim' },
                ].map((link, i) => (
                  <button key={i}
                    onClick={() => {
                      const el = document.getElementById(link.id)
                      if (el) el.scrollIntoView({ behavior: 'smooth' })
                    }}
                    style={{
                      background: 'none', border: 'none', cursor: 'pointer',
                      color: 'rgba(255,255,255,0.6)', fontSize: '0.9rem',
                      fontFamily: 'var(--font-body)', textAlign: 'left', padding: 0,
                      transition: 'var(--transition)',
                    }}
                    onMouseEnter={e => e.currentTarget.style.color = 'var(--orange)'}
                    onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.6)'}
                  >{link.label}</button>
                ))}
              </div>
            </div>

            <div>
              <h5 style={{
                fontWeight: 700, fontSize: '0.85rem',
                letterSpacing: '1.5px', textTransform: 'uppercase',
                color: 'rgba(255,255,255,0.4)', marginBottom: '20px',
              }}>Kontak</h5>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                {[
                  { icon: <MessageCircle size={16}/>, label: 'WhatsApp', value: '+62 823-8446-9964' },
                  { icon: <Mail size={16}/>, label: 'Email', value: 'rajabiriskan@gmail.com' },
                  { icon: <MapPin size={16}/>, label: 'Lokasi', value: 'Banda Aceh, Aceh' },
                ].map((c, i) => (
                  <div key={i} style={{ display: 'flex', gap: '10px', alignItems: 'flex-start' }}>
                    <div style={{ color: 'rgba(255,255,255,0.4)', marginTop: '1px', flexShrink: 0 }}>{c.icon}</div>
                    <div>
                      <div style={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.75rem', marginBottom: '2px' }}>{c.label}</div>
                      <div style={{ color: 'rgba(255,255,255,0.8)', fontSize: '0.85rem' }}>{c.value}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div style={{ height: '1px', background: 'rgba(255,255,255,0.08)', marginBottom: '28px' }}/>

          <div style={{
            display: 'flex', justifyContent: 'space-between',
            alignItems: 'center', flexWrap: 'wrap', gap: '12px',
          }}>
            <p style={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.82rem', margin: 0 }}>
              © 2025 Krueng Brick. Hilirisasi Limbah untuk Aceh Berkelanjutan.
            </p>
            <p style={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.82rem', margin: 0 }}>
              Dibuat dengan semangat untuk lingkungan & ekonomi lokal Aceh
            </p>
          </div>
        </div>
      </footer>
    </>
  )
}