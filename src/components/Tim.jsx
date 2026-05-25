import { Crown, Settings, Wallet, Megaphone, FlaskConical, MessageCircle, Mail } from 'lucide-react'

export default function Tim() {
  const team = [
    {
      name: 'Muhammad Hafizh Arkan Ritonga',
      role: 'CEO', fullRole: 'Chief Executive Officer',
      desc: 'Pemimpin utama, pemegang arah strategis, dan penanggung jawab keberlanjutan bisnis secara umum.',
      color: 'var(--orange)', bg: 'rgba(232,97,42,0.08)',
      icon: <Crown size={22} strokeWidth={1.5}/>, initial: 'MH',
    },
    {
      name: 'Muhammad Riskan Rajabi',
      role: 'COO', fullRole: 'Chief Operating Officer',
      desc: 'Bertanggung jawab atas seluruh proses produksi fisik di lapangan, pengadaan bahan baku, dan manajemen rantai pasok.',
      color: 'var(--teal)', bg: 'rgba(42,123,111,0.08)',
      icon: <Settings size={22} strokeWidth={1.5}/>, initial: 'MR',
    },
    {
      name: 'Isnaini Ramadhani',
      role: 'CFO', fullRole: 'Chief Financial Officer',
      desc: 'Pengatur sirkulasi keuangan, penyusun anggaran harian, laporan laba rugi, dan kelayakan finansial usaha.',
      color: 'var(--purple)', bg: 'rgba(107,78,138,0.08)',
      icon: <Wallet size={22} strokeWidth={1.5}/>, initial: 'IR',
    },
    {
      name: 'A. Najwa Azzikra Nasution',
      role: 'CMO', fullRole: 'Chief Marketing Officer',
      desc: 'Bertanggung jawab penuh atas strategi pemasaran, konten media sosial, promosi, dan penjualan B2B maupun B2C.',
      color: '#E85A4F', bg: 'rgba(232,90,79,0.08)',
      icon: <Megaphone size={22} strokeWidth={1.5}/>, initial: 'NA',
    },
    {
      name: 'Meilani Sabrina',
      role: 'CTO', fullRole: 'Chief Technology Officer',
      desc: 'Bertanggung jawab atas inovasi produk, penelitian formula bahan, quality control, dan standardisasi produk.',
      color: 'var(--yellow)', bg: 'rgba(245,200,66,0.12)',
      icon: <FlaskConical size={22} strokeWidth={1.5}/>, initial: 'MS',
    },
  ]

  return (
    <section id="tim" style={{ background: 'white', padding: '100px 0' }}>
      <div className="container">

        <div style={{ textAlign: 'center', marginBottom: '64px' }}>
          <span className="section-tag" style={{ background: 'var(--orange)' }}>Tim Kami</span>
          <h2 className="section-title">
            Orang-Orang di Balik <span style={{ color: 'var(--orange)' }}>Krueng Brick</span>
          </h2>
          <p className="section-subtitle" style={{ margin: '0 auto', textAlign: 'center' }}>
            Lima individu dengan keahlian berbeda yang bersatu membangun
            solusi konstruksi berkelanjutan untuk Aceh.
          </p>
        </div>

        {/* CEO Featured */}
        <div style={{ marginBottom: '32px' }}>
          <div
            onMouseEnter={e => {
              e.currentTarget.style.transform = 'translateY(-6px)'
              e.currentTarget.style.boxShadow = 'var(--shadow-strong)'
            }}
            onMouseLeave={e => {
              e.currentTarget.style.transform = 'translateY(0)'
              e.currentTarget.style.boxShadow = 'var(--shadow-soft)'
            }}
            style={{
              background: 'var(--cream)', borderRadius: '28px',
              padding: '40px 48px',
              display: 'grid', gridTemplateColumns: 'auto 1fr auto',
              alignItems: 'center', gap: '32px',
              boxShadow: 'var(--shadow-soft)', transition: 'var(--transition)',
              cursor: 'default', borderLeft: '6px solid var(--orange)',
              position: 'relative', overflow: 'hidden',
            }}>
            <div style={{
              position: 'absolute', right: -40, top: -40,
              width: 160, height: 160,
              background: 'rgba(232,97,42,0.08)', borderRadius: '50%', pointerEvents: 'none',
            }}/>

            <div style={{
              width: 80, height: 80,
              background: 'linear-gradient(135deg, var(--orange), rgba(232,97,42,0.6))',
              borderRadius: '22px', display: 'flex',
              alignItems: 'center', justifyContent: 'center',
              fontSize: '1.3rem', fontWeight: 800,
              color: 'white', fontFamily: 'var(--font-heading)',
              flexShrink: 0, boxShadow: '0 8px 24px rgba(232,97,42,0.4)',
            }}>MH</div>

            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '6px' }}>
                <div style={{ color: 'var(--orange)' }}><Crown size={18} strokeWidth={1.5}/></div>
                <span style={{
                  background: 'var(--orange)', color: 'white',
                  fontSize: '0.72rem', fontWeight: 800,
                  letterSpacing: '1.5px', textTransform: 'uppercase',
                  padding: '4px 12px', borderRadius: '100px',
                }}>CEO</span>
                <span style={{ color: 'var(--orange)', fontSize: '0.82rem', fontWeight: 600 }}>
                  Chief Executive Officer
                </span>
              </div>
              <h3 style={{
                fontFamily: 'var(--font-heading)', fontSize: '1.5rem',
                marginBottom: '8px', color: 'var(--dark)',
              }}>Muhammad Hafizh Arkan Ritonga</h3>
              <p style={{
                color: 'var(--gray)', fontSize: '0.9rem',
                lineHeight: 1.7, margin: 0, maxWidth: '500px',
              }}>
                Pemimpin utama, pemegang arah strategis, dan penanggung jawab keberlanjutan bisnis secara umum.
              </p>
            </div>

            <div style={{
              padding: '20px 24px', background: 'rgba(232,97,42,0.08)',
              borderRadius: '16px', textAlign: 'center', flexShrink: 0,
            }}>
              <div style={{ display: 'flex', justifyContent: 'center', color: 'var(--orange)', marginBottom: '8px' }}>
                <Crown size={32} strokeWidth={1.2}/>
              </div>
              <div style={{
                fontWeight: 800, fontSize: '0.8rem',
                color: 'var(--orange)', textTransform: 'uppercase', letterSpacing: '1px',
              }}>Founder</div>
            </div>
          </div>
        </div>

        {/* Team Grid */}
        <div style={{
          display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)',
          gap: '20px', marginBottom: '64px',
        }}>
          {team.slice(1).map((member, i) => (
            <div key={i}
              onMouseEnter={e => {
                e.currentTarget.style.transform = 'translateY(-8px)'
                e.currentTarget.style.boxShadow = '0 16px 48px rgba(0,0,0,0.12)'
              }}
              onMouseLeave={e => {
                e.currentTarget.style.transform = 'translateY(0)'
                e.currentTarget.style.boxShadow = 'var(--shadow-soft)'
              }}
              style={{
                background: 'var(--cream)', borderRadius: '24px',
                padding: '32px 24px', textAlign: 'center',
                boxShadow: 'var(--shadow-soft)', transition: 'var(--transition)',
                cursor: 'default', position: 'relative', overflow: 'hidden',
                borderTop: `4px solid ${member.color}`,
              }}>
              <div style={{
                position: 'absolute', bottom: -20, right: -20,
                width: 80, height: 80,
                background: member.bg, borderRadius: '50%', pointerEvents: 'none',
              }}/>

              <div style={{
                width: 68, height: 68,
                background: `linear-gradient(135deg, ${member.color}, ${member.color}88)`,
                borderRadius: '18px',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: '1.1rem', fontWeight: 800,
                color: 'white', fontFamily: 'var(--font-heading)',
                margin: '0 auto 16px',
                boxShadow: `0 6px 20px ${member.color}44`,
              }}>{member.initial}</div>

              <div style={{
                display: 'inline-flex', alignItems: 'center', gap: '6px',
                background: member.bg, padding: '4px 12px',
                borderRadius: '100px', marginBottom: '10px',
                color: member.color,
              }}>
                {member.icon}
                <span style={{
                  fontWeight: 800, fontSize: '0.72rem',
                  letterSpacing: '1px', textTransform: 'uppercase',
                }}>{member.role}</span>
              </div>

              <h4 style={{
                fontFamily: 'var(--font-heading)', fontSize: '1rem',
                marginBottom: '8px', color: 'var(--dark)', lineHeight: 1.3,
              }}>{member.name}</h4>

              <p style={{
                color: member.color, fontSize: '0.78rem',
                fontWeight: 600, marginBottom: '12px',
              }}>{member.fullRole}</p>

              <p style={{
                color: 'var(--gray)', fontSize: '0.82rem',
                lineHeight: 1.6, margin: 0, position: 'relative',
              }}>{member.desc}</p>
            </div>
          ))}
        </div>

        {/* Contact Banner */}
        <div style={{
          background: 'linear-gradient(135deg, var(--teal), var(--teal-light))',
          borderRadius: '28px', padding: '48px',
          display: 'grid', gridTemplateColumns: '1fr auto',
          alignItems: 'center', gap: '40px',
          position: 'relative', overflow: 'hidden',
        }}>
          <div style={{
            position: 'absolute', right: -20, top: -20,
            width: 200, height: 200,
            background: 'rgba(255,255,255,0.06)', borderRadius: '50%', pointerEvents: 'none',
          }}/>
          <div style={{
            position: 'absolute', right: 60, bottom: -40,
            width: 120, height: 120,
            background: 'rgba(255,255,255,0.06)', borderRadius: '50%', pointerEvents: 'none',
          }}/>

          <div>
            <h3 style={{
              fontFamily: 'var(--font-heading)', fontSize: '1.8rem',
              color: 'white', marginBottom: '8px',
            }}>Tertarik Berkolaborasi?</h3>
            <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '1rem', lineHeight: 1.7, margin: 0 }}>
              Hubungi tim kami untuk informasi lebih lanjut seputar produk,
              kemitraan, atau peluang bisnis bersama Krueng Brick.
            </p>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', flexShrink: 0 }}>
            <a href="https://wa.me/6282384469964" target="_blank" rel="noopener noreferrer"
              onMouseEnter={e => e.currentTarget.style.transform = 'translateY(-3px)'}
              onMouseLeave={e => e.currentTarget.style.transform = 'translateY(0)'}
              style={{
                display: 'flex', alignItems: 'center', gap: '10px',
                background: '#25D366', color: 'white',
                padding: '14px 24px', borderRadius: '100px',
                textDecoration: 'none', fontWeight: 700, fontSize: '0.95rem',
                boxShadow: '0 8px 24px rgba(37,211,102,0.4)',
                transition: 'var(--transition)',
              }}>
              <MessageCircle size={18} strokeWidth={2}/>
              WhatsApp Kami
            </a>
            <a href="mailto:rajabiriskan@gmail.com"
              onMouseEnter={e => e.currentTarget.style.transform = 'translateY(-3px)'}
              onMouseLeave={e => e.currentTarget.style.transform = 'translateY(0)'}
              style={{
                display: 'flex', alignItems: 'center', gap: '10px',
                background: 'rgba(255,255,255,0.15)', color: 'white',
                padding: '14px 24px', borderRadius: '100px',
                textDecoration: 'none', fontWeight: 600, fontSize: '0.95rem',
                backdropFilter: 'blur(8px)',
                border: '1px solid rgba(255,255,255,0.2)',
                transition: 'var(--transition)',
              }}>
              <Mail size={18} strokeWidth={2}/>
              Email Kami
            </a>
          </div>
        </div>

      </div>
    </section>
  )
}