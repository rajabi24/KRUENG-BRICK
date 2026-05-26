import { useState } from 'react'
import { Users, MapPin, Heart, Home, ShoppingBag, Store, HardHat, Building2, Megaphone, Package } from 'lucide-react'

export default function Pasar() {
  const [activeTab, setActiveTab] = useState('b2c')

  const segments = [
    {
      icon: <Users size={26} strokeWidth={1.5}/>,
      title: 'Demografi', color: 'var(--teal)', bg: 'rgba(42,123,111,0.08)',
      points: [
        'Pelaku usaha properti sederhana',
        'Masyarakat yang mencari bahan bangunan ekonomis',
        'Kontraktor lokal skala kecil-menengah',
      ],
    },
    {
      icon: <MapPin size={26} strokeWidth={1.5}/>,
      title: 'Geografis', color: 'var(--orange)', bg: 'rgba(232,97,42,0.08)',
      points: [
        'Fokus awal: Banda Aceh & sekitarnya',
        'Wilayah terdampak banjir di Aceh',
        'Ekspansi ke seluruh wilayah Aceh',
      ],
    },
    {
      icon: <Heart size={26} strokeWidth={1.5}/>,
      title: 'Psikografis', color: 'var(--purple)', bg: 'rgba(107,78,138,0.08)',
      points: [
        'Peduli terhadap lingkungan & produk daur ulang',
        'Mengutamakan efisiensi biaya pembangunan',
        'Tertarik pada inovasi material berkelanjutan',
      ],
    },
  ]

  const channels = {
    b2c: {
      label: 'B2C', sublabel: 'Business to Consumer',
      color: 'var(--orange)', bg: 'rgba(232,97,42,0.06)',
      icon: <Home size={40} strokeWidth={1.2}/>,
      desc: 'Menargetkan konsumen individu seperti masyarakat umum yang sedang membangun rumah atau melakukan renovasi.',
      items: [
        { icon: <Megaphone size={22} strokeWidth={1.5}/>, title: 'Media Sosial', desc: 'Instagram, TikTok, Facebook untuk promosi visual produk' },
        { icon: <ShoppingBag size={22} strokeWidth={1.5}/>, title: 'Marketplace', desc: 'Tokopedia, Shopee untuk pembelian online mudah' },
        { icon: <Users size={22} strokeWidth={1.5}/>, title: 'Promosi Langsung', desc: 'Door-to-door di lingkungan sekitar lokasi produksi' },
        { icon: <Heart size={22} strokeWidth={1.5}/>, title: 'Word of Mouth', desc: 'Testimoni pelanggan puas sebagai brand ambassador' },
      ],
    },
    b2b: {
      label: 'B2B', sublabel: 'Business to Business',
      color: 'var(--teal)', bg: 'rgba(42,123,111,0.06)',
      icon: <Building2 size={40} strokeWidth={1.2}/>,
      desc: 'Menargetkan toko material bangunan, kontraktor lokal, serta pelaku usaha konstruksi yang membutuhkan pasokan dalam jumlah besar.',
      items: [
        { icon: <Store size={22} strokeWidth={1.5}/>, title: 'Toko Material', desc: 'Kemitraan dengan toko bangunan lokal di Aceh' },
        { icon: <HardHat size={22} strokeWidth={1.5}/>, title: 'Kontraktor Lokal', desc: 'Supply bata untuk proyek pembangunan skala menengah' },
        { icon: <Building2 size={22} strokeWidth={1.5}/>, title: 'Proyek Pemerintah', desc: 'Pembangunan fasilitas umum & infrastruktur daerah' },
        { icon: <Package size={22} strokeWidth={1.5}/>, title: 'Developer Properti', desc: 'Kemitraan jangka panjang untuk perumahan sederhana' },
      ],
    },
  }

  const positioning = [
    { label: 'Ekonomis', value: 90, color: 'var(--teal)' },
    { label: 'Ramah Lingkungan', value: 95, color: 'var(--orange)' },
    { label: 'Lokal & Autentik', value: 100, color: 'var(--purple)' },
    { label: 'Berkelanjutan', value: 88, color: '#E85A4F' },
  ]

  return (
    <section id="pasar" style={{ background: 'var(--cream)', padding: '100px 0' }}>
      <div className="container">

        <div style={{ textAlign: 'center', marginBottom: '64px' }}>
          <span className="section-tag" style={{ background: 'var(--teal)' }}>Aspek Pemasaran</span>
          <h2 className="section-title">
            Target <span style={{ color: 'var(--teal)' }}>Pasar</span>
          </h2>
          <p className="section-subtitle" style={{ margin: '0 auto', textAlign: 'center' }}>
            Strategi pemasaran terintegrasi melalui pendekatan STP untuk menjangkau
            segmen pasar yang tepat di industri konstruksi Aceh.
          </p>
        </div>

        {/* Segmentasi */}
        <div style={{ marginBottom: '80px' }}>
          <h3 style={{
            fontFamily: 'var(--font-heading)', fontSize: '1.6rem',
            textAlign: 'center', marginBottom: '40px',
          }}>Segmentasi Pasar</h3>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '24px' }}>
            {segments.map((seg, i) => (
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
                  background: 'white', borderRadius: '24px', padding: '32px',
                  boxShadow: 'var(--shadow-soft)', transition: 'var(--transition)',
                  cursor: 'default', borderTop: `4px solid ${seg.color}`,
                }}>
                <div style={{
                  width: 52, height: 52, background: seg.bg, borderRadius: '14px',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  color: seg.color, marginBottom: '16px',
                }}>{seg.icon}</div>
                <h4 style={{
                  fontFamily: 'var(--font-heading)', fontSize: '1.2rem',
                  color: seg.color, marginBottom: '16px',
                }}>Segmentasi {seg.title}</h4>
                {seg.points.map((p, j) => (
                  <div key={j} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', marginBottom: '10px' }}>
                    <div style={{
                      width: 8, height: 8, borderRadius: '50%',
                      background: seg.color, marginTop: '6px', flexShrink: 0,
                    }}/>
                    <p style={{ color: 'var(--gray)', fontSize: '0.88rem', lineHeight: 1.6, margin: 0 }}>{p}</p>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>

        {/* B2C B2B */}
        <div style={{ marginBottom: '80px' }}>
          <h3 style={{
            fontFamily: 'var(--font-heading)', fontSize: '1.6rem',
            textAlign: 'center', marginBottom: '32px',
          }}>Saluran Pemasaran</h3>

          <div style={{ display: 'flex', justifyContent: 'center', gap: '12px', marginBottom: '40px' }}>
            {['b2c', 'b2b'].map(tab => (
              <button key={tab} onClick={() => setActiveTab(tab)} style={{
                padding: '12px 36px', borderRadius: '100px', border: 'none',
                cursor: 'pointer', fontWeight: 700, fontSize: '1rem',
                fontFamily: 'var(--font-body)', transition: 'var(--transition)',
                background: activeTab === tab ? channels[tab].color : 'white',
                color: activeTab === tab ? 'white' : 'var(--gray)',
                boxShadow: activeTab === tab ? `0 8px 24px ${channels[tab].color}44` : 'var(--shadow-soft)',
                transform: activeTab === tab ? 'scale(1.05)' : 'scale(1)',
              }}>
                {channels[tab].label}
                <span style={{ fontSize: '0.75rem', fontWeight: 400, marginLeft: '6px', opacity: 0.8 }}>
                  — {channels[tab].sublabel}
                </span>
              </button>
            ))}
          </div>

          <div style={{
            background: 'white', borderRadius: '28px', padding: '40px',
            boxShadow: 'var(--shadow-soft)', borderTop: `4px solid ${channels[activeTab].color}`,
          }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: '48px', alignItems: 'center' }}>
              <div>
                <div style={{ color: channels[activeTab].color, marginBottom: '16px' }}>
                  {channels[activeTab].icon}
                </div>
                <h3 style={{
                  fontFamily: 'var(--font-heading)', fontSize: '1.8rem',
                  color: channels[activeTab].color, marginBottom: '16px',
                }}>{channels[activeTab].label}</h3>
                <p style={{ color: 'var(--gray)', lineHeight: 1.8, fontSize: '0.95rem' }}>
                  {channels[activeTab].desc}
                </p>
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                {channels[activeTab].items.map((item, i) => (
                  <div key={i}
                    onMouseEnter={e => e.currentTarget.style.transform = 'translateY(-4px)'}
                    onMouseLeave={e => e.currentTarget.style.transform = 'translateY(0)'}
                    style={{
                      padding: '20px', background: channels[activeTab].bg,
                      borderRadius: '16px', transition: 'var(--transition)', cursor: 'default',
                    }}>
                    <div style={{ color: channels[activeTab].color, marginBottom: '8px' }}>{item.icon}</div>
                    <div style={{
                      fontWeight: 700, fontSize: '0.9rem',
                      color: channels[activeTab].color, marginBottom: '6px',
                    }}>{item.title}</div>
                    <p style={{ color: 'var(--gray)', fontSize: '0.82rem', lineHeight: 1.6, margin: 0 }}>{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Positioning — FIXED BAR */}
        <div style={{
          background: 'white', borderRadius: '28px',
          padding: '48px', boxShadow: 'var(--shadow-soft)',
        }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '60px', alignItems: 'center' }}>
            <div>
              <span className="section-tag" style={{ background: 'var(--purple)' }}>Positioning</span>
              <h3 style={{
                fontFamily: 'var(--font-heading)', fontSize: '1.8rem',
                margin: '16px 0 16px', lineHeight: 1.3,
              }}>
                Inovasi Bata <span style={{ color: 'var(--purple)' }}>Ramah Lingkungan</span> Khas Aceh
              </h3>
              <p style={{ color: 'var(--gray)', lineHeight: 1.8, fontSize: '0.95rem' }}>
                KRUENG BRICK diposisikan sebagai solusi konstruksi berkelanjutan yang tidak hanya
                berfungsi sebagai bahan bangunan, tetapi juga sebagai solusi pengelolaan limbah
                banjir dan pemanfaatan sekam padi menjadi produk bernilai ekonomi tinggi.
              </p>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
              {positioning.map((p, i) => (
                <div key={i}>
                  <div style={{
                    display: 'flex', justifyContent: 'space-between', marginBottom: '10px',
                  }}>
                    <span style={{ fontWeight: 600, fontSize: '0.9rem', color: 'var(--dark)' }}>
                      {p.label}
                    </span>
                    <span style={{ fontWeight: 800, color: p.color, fontSize: '0.9rem' }}>
                      {p.value}%
                    </span>
                  </div>
                  {/* FIXED: pakai table-style agar bar pasti muncul */}
                  <div style={{
                    width: '100%',
                    height: '12px',
                    background: 'rgba(0,0,0,0.07)',
                    borderRadius: '100px',
                    position: 'relative',
                    overflow: 'hidden',
                  }}>
                    <div style={{
                      position: 'absolute',
                      top: 0, left: 0,
                      height: '12px',
                      width: `${p.value}%`,
                      background: p.color,
                      borderRadius: '100px',
                    }}/>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}