import { Crown, Settings, Wallet, Megaphone, FlaskConical } from 'lucide-react'

export default function Tim() {
  const team = [
    {
      name: 'Muhammad Hafizh Arkan Ritonga',
      role: 'CEO', fullRole: 'Chief Executive Officer',
      desc: 'Pemimpin utama, pemegang arah strategis, dan penanggung jawab keberlanjutan bisnis secara umum.',
      color: 'var(--orange)', bg: 'rgba(232,97,42,0.08)',
      icon: <Crown size={22} strokeWidth={1.5}/>,
      initial: 'MH', photo: '/team/hafizh.jpeg',
    },
    {
      name: 'Muhammad Riskan Rajabi',
      role: 'COO', fullRole: 'Chief Operating Officer',
      desc: 'Bertanggung jawab atas seluruh proses produksi fisik di lapangan, pengadaan bahan baku, dan manajemen rantai pasok.',
      color: 'var(--teal)', bg: 'rgba(42,123,111,0.08)',
      icon: <Settings size={22} strokeWidth={1.5}/>,
      initial: 'MR', photo: '/team/riskan.jpeg',
    },
    {
      name: 'Isnaini Ramadhani',
      role: 'CFO', fullRole: 'Chief Financial Officer',
      desc: 'Pengatur sirkulasi keuangan, penyusun anggaran harian, laporan laba rugi, dan kelayakan finansial usaha.',
      color: 'var(--purple)', bg: 'rgba(107,78,138,0.08)',
      icon: <Wallet size={22} strokeWidth={1.5}/>,
      initial: 'IR', photo: '/team/isnaini.jpeg',
    },
    {
      name: 'A. Najwa Azzikra Nasution',
      role: 'CMO', fullRole: 'Chief Marketing Officer',
      desc: 'Bertanggung jawab penuh atas strategi pemasaran, konten media sosial, promosi, dan penjualan B2B maupun B2C.',
      color: '#E85A4F', bg: 'rgba(232,90,79,0.08)',
      icon: <Megaphone size={22} strokeWidth={1.5}/>,
      initial: 'NA', photo: '/team/najwa.jpeg',
    },
    {
      name: 'Meilani Sabrina',
      role: 'CTO', fullRole: 'Chief Technology Officer',
      desc: 'Bertanggung jawab atas inovasi produk, penelitian formula bahan, quality control, dan standardisasi produk.',
      color: 'var(--yellow)', bg: 'rgba(245,200,66,0.12)',
      icon: <FlaskConical size={22} strokeWidth={1.5}/>,
      initial: 'MS', photo: '/team/meilani.jpeg',
    },
  ]

  return (
    <section id="tim" style={{ background: 'white', padding: '100px 0' }}>
      <div className="container">

        {/* Header */}
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
              display: 'grid', gridTemplateColumns: 'auto 1fr',
              alignItems: 'center', gap: '32px',
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

            {/* CEO Photo */}
            <div style={{
              width: 100, height: 100,
              borderRadius: '24px', overflow: 'hidden',
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
                  e.target.parentNode.innerHTML = '<span style="color:white;font-weight:800;font-size:1.8rem;font-family:serif">MH</span>'
                }}
              />
            </div>

            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '8px' }}>
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
                lineHeight: 1.7, margin: 0, maxWidth: '560px',
              }}>
                Pemimpin utama, pemegang arah strategis, dan penanggung jawab keberlanjutan bisnis secara umum.
              </p>
            </div>
          </div>
        </div>

        {/* Team Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gap: '20px',
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
                padding: '28px 20px', textAlign: 'center',
                boxShadow: 'var(--shadow-soft)', transition: 'var(--transition)',
                cursor: 'default', position: 'relative', overflow: 'hidden',
                borderTop: `4px solid ${member.color}`,
              }}
            >
              <div style={{
                position: 'absolute', bottom: -20, right: -20,
                width: 80, height: 80,
                background: member.bg, borderRadius: '50%', pointerEvents: 'none',
              }}/>

              {/* Photo */}
              <div style={{
                width: 84, height: 84,
                borderRadius: '20px', overflow: 'hidden',
                margin: '0 auto 16px',
                border: `3px solid ${member.color}`,
                boxShadow: `0 6px 20px ${member.color}44`,
                background: `linear-gradient(135deg, ${member.color}, ${member.color}88)`,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                flexShrink: 0,
              }}>
                <img
                  src={member.photo}
                  alt={member.name}
                  style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                  onError={e => {
                    e.target.style.display = 'none'
                    e.target.parentNode.innerHTML = `<span style="color:white;font-weight:800;font-size:1.2rem;font-family:serif">${member.initial}</span>`
                  }}
                />
              </div>

              {/* Role Badge */}
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
                fontFamily: 'var(--font-heading)', fontSize: '0.95rem',
                marginBottom: '6px', color: 'var(--dark)', lineHeight: 1.3,
              }}>{member.name}</h4>

              <p style={{
                color: member.color, fontSize: '0.75rem',
                fontWeight: 600, marginBottom: '10px',
              }}>{member.fullRole}</p>

              <p style={{
                color: 'var(--gray)', fontSize: '0.8rem',
                lineHeight: 1.6, margin: 0, position: 'relative',
              }}>{member.desc}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}