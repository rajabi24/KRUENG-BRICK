import { Crown, Settings, Wallet, Megaphone, FlaskConical } from 'lucide-react'

export default function Tim() {
  const team = [
    {
      name: 'Muhammad Hafizh Arkan Ritonga',
      role: 'CEO', fullRole: 'Chief Executive Officer',
      desc: 'Pemimpin utama, pemegang arah strategis, dan penanggung jawab keberlanjutan bisnis secara umum.',
      color: 'var(--orange)', bg: 'rgba(232,97,42,0.08)',
      icon: <Crown size={22} strokeWidth={1.5}/>,
      initial: 'MH', photo: '/team/hafizh.jpg',
    },
    {
      name: 'Muhammad Riskan Rajabi',
      role: 'COO', fullRole: 'Chief Operating Officer',
      desc: 'Bertanggung jawab atas seluruh proses produksi fisik di lapangan, pengadaan bahan baku, dan manajemen rantai pasok.',
      color: 'var(--teal)', bg: 'rgba(42,123,111,0.08)',
      icon: <Settings size={22} strokeWidth={1.5}/>,
      initial: 'MR', photo: '/team/riskan.jpg',
    },
    {
      name: 'Isnaini Ramadhani',
      role: 'CFO', fullRole: 'Chief Financial Officer',
      desc: 'Pengatur sirkulasi keuangan, penyusun anggaran harian, laporan laba rugi, dan kelayakan finansial usaha.',
      color: 'var(--purple)', bg: 'rgba(107,78,138,0.08)',
      icon: <Wallet size={22} strokeWidth={1.5}/>,
      initial: 'IR', photo: '/team/isnaini.jpg',
    },
    {
      name: 'A. Najwa Azzikra Nasution',
      role: 'CMO', fullRole: 'Chief Marketing Officer',
      desc: 'Bertanggung jawab penuh atas strategi pemasaran, konten media sosial, promosi, dan penjualan B2B maupun B2C.',
      color: '#E85A4F', bg: 'rgba(232,90,79,0.08)',
      icon: <Megaphone size={22} strokeWidth={1.5}/>,
      initial: 'NA', photo: '/team/najwa.jpg',
    },
    {
      name: 'Meilani Sabrina',
      role: 'CTO', fullRole: 'Chief Technology Officer',
      desc: 'Bertanggung jawab atas inovasi produk, penelitian formula bahan, quality control, dan standardisasi produk.',
      color: 'var(--yellow)', bg: 'rgba(245,200,66,0.12)',
      icon: <FlaskConical size={22} strokeWidth={1.5}/>,
      initial: 'MS', photo: '/team/meilani.jpg',
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
        <div style={{ marginBottom: '24px' }}>
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
              background: 'var(--cream)', borderRadius: '24px',
              padding: '36px 40px',
              boxShadow: 'var(--shadow-soft)', transition: 'var(--transition)',
              cursor: 'default', borderLeft: '6px solid var(--orange)',
              position: 'relative', overflow: 'hidden',
            }}
          >
            <div style={{
              position: 'absolute', right: -40, top: -40,
              width: 200, height: 200,
              background: 'rgba(232,97,42,0.06)',
              borderRadius: '50%', pointerEvents: 'none',
            }}/>

            <div className="tim-ceo" style={{
              display: 'grid',
              gridTemplateColumns: 'auto 1fr',
              alignItems: 'center',
              gap: '28px',
            }}>
              {/* CEO Photo */}
              <div className="tim-ceo-photo" style={{
                width: 90, height: 90,
                borderRadius: '20px', overflow: 'hidden',
                flexShrink: 0,
                border: '3px solid var(--orange)',
                boxShadow: '0 8px 24px rgba(232,97,42,0.3)',
                background: 'linear-gradient(135deg, var(--orange), rgba(232,97,42,0.6))',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
              }}>
                <img
                  src="/team/hafizh.jpg"
                  alt="Muhammad Hafizh Arkan Ritonga"
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  onError={e => {
                    e.target.style.display = 'none'
                    e.target.parentNode.innerHTML = '<span style="color:white;font-weight:800;font-size:1.6rem;font-family:serif">MH</span>'
                  }}
                />
              </div>

              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '8px', flexWrap: 'wrap' }}>
                  <div style={{ color: 'var(--orange)' }}><Crown size={18} strokeWidth={1.5}/></div>
                  <span style={{
                    background: 'var(--orange)', color: 'white',
                    fontSize: '0.7rem', fontWeight: 800,
                    letterSpacing: '1.5px', textTransform: 'uppercase',
                    padding: '4px 12px', borderRadius: '100px',
                  }}>CEO</span>
                  <span style={{ color: 'var(--orange)', fontSize: '0.8rem', fontWeight: 600 }}>
                    Chief Executive Officer
                  </span>
                </div>
                <h3 style={{
                  fontFamily: 'var(--font-heading)', fontSize: 'clamp(1.1rem, 2vw, 1.5rem)',
                  marginBottom: '8px', color: 'var(--dark)',
                }}>Muhammad Hafizh Arkan Ritonga</h3>
                <p style={{
                  color: 'var(--gray)', fontSize: '0.88rem',
                  lineHeight: 1.7, margin: 0,
                }}>
                  Pemimpin utama, pemegang arah strategis, dan penanggung jawab keberlanjutan bisnis secara umum.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Team Grid */}
        <div className="tim-grid" style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gap: '16px',
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
                background: 'var(--cream)', borderRadius: '20px',
                padding: '24px 16px', textAlign: 'center',
                boxShadow: 'var(--shadow-soft)', transition: 'var(--transition)',
                cursor: 'default', position: 'relative', overflow: 'hidden',
                borderTop: `4px solid ${member.color}`,
              }}
            >
              <div style={{
                position: 'absolute', bottom: -20, right: -20,
                width: 70, height: 70,
                background: member.bg, borderRadius: '50%', pointerEvents: 'none',
              }}/>

              <div style={{
                width: 76, height: 76,
                borderRadius: '18px', overflow: 'hidden',
                margin: '0 auto 14px',
                border: `3px solid ${member.color}`,
                boxShadow: `0 6px 20px ${member.color}44`,
                background: `linear-gradient(135deg, ${member.color}, ${member.color}88)`,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
              }}>
                <img
                  src={member.photo}
                  alt={member.name}
                  style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                  onError={e => {
                    e.target.style.display = 'none'
                    e.target.parentNode.innerHTML = `<span style="color:white;font-weight:800;font-size:1.1rem;font-family:serif">${member.initial}</span>`
                  }}
                />
              </div>

              <div style={{
                display: 'inline-flex', alignItems: 'center', gap: '5px',
                background: member.bg, padding: '3px 10px',
                borderRadius: '100px', marginBottom: '8px',
                color: member.color,
              }}>
                {member.icon}
                <span style={{
                  fontWeight: 800, fontSize: '0.68rem',
                  letterSpacing: '1px', textTransform: 'uppercase',
                }}>{member.role}</span>
              </div>

              <h4 style={{
                fontFamily: 'var(--font-heading)', fontSize: '0.9rem',
                marginBottom: '4px', color: 'var(--dark)', lineHeight: 1.3,
              }}>{member.name}</h4>

              <p style={{
                color: member.color, fontSize: '0.72rem',
                fontWeight: 600, marginBottom: '8px',
              }}>{member.fullRole}</p>

              <p style={{
                color: 'var(--gray)', fontSize: '0.78rem',
                lineHeight: 1.6, margin: 0, position: 'relative',
              }}>{member.desc}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}