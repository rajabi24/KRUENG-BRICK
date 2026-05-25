import { useState } from 'react'
import { TrendingUp, AlertTriangle, Rocket, ShieldAlert } from 'lucide-react'

export default function Swot() {
  const [activeQuadrant, setActiveQuadrant] = useState(null)

  const swotData = [
    {
      key: 'S', label: 'Strengths', sublabel: 'Kekuatan',
      icon: <TrendingUp size={24} strokeWidth={1.5}/>,
      color: 'var(--teal)', bg: 'rgba(42,123,111,0.08)', bgActive: 'var(--teal)',
      items: [
        'Inovasi produk ramah lingkungan berbasis limbah banjir & abu sekam padi',
        'Penambahan semen 15% meningkatkan kekuatan dan daya tahan bata',
        'Bahan baku lokal melimpah di Aceh mendukung keberlanjutan produksi',
        'Biaya produksi relatif rendah karena memanfaatkan limbah',
        'Harga jual kompetitif dibanding batu bata konvensional',
      ],
    },
    {
      key: 'W', label: 'Weaknesses', sublabel: 'Kelemahan',
      icon: <AlertTriangle size={24} strokeWidth={1.5}/>,
      color: 'var(--orange)', bg: 'rgba(232,97,42,0.08)', bgActive: 'var(--orange)',
      items: [
        'Produk masih baru, butuh promosi & edukasi ke masyarakat',
        'Kapasitas produksi awal masih terbatas dengan alat sederhana',
        'Pengeringan bata masih bergantung pada kondisi cuaca',
        'Belum memiliki sertifikasi standar mutu resmi',
      ],
    },
    {
      key: 'O', label: 'Opportunities', sublabel: 'Peluang',
      icon: <Rocket size={24} strokeWidth={1.5}/>,
      color: 'var(--purple)', bg: 'rgba(107,78,138,0.08)', bgActive: 'var(--purple)',
      items: [
        'Tren material bangunan ramah lingkungan terus meningkat',
        'Dukungan program pemerintah untuk pengelolaan limbah berkelanjutan',
        'Pasar konstruksi Indonesia terus berkembang pesat',
        'Potensi diversifikasi ke paving block, batako, dan material lain',
        'Nilai unik produk lokal khas Aceh berbasis limbah banjir',
      ],
    },
    {
      key: 'T', label: 'Threats', sublabel: 'Ancaman',
      icon: <ShieldAlert size={24} strokeWidth={1.5}/>,
      color: '#E85A4F', bg: 'rgba(232,90,79,0.08)', bgActive: '#E85A4F',
      items: [
        'Persaingan dengan produsen batu bata konvensional yang sudah mapan',
        'Fluktuasi harga semen dapat mempengaruhi biaya produksi',
        'Produk wajib memenuhi standar kekuatan SNI untuk diterima pasar',
        'Curah hujan ekstrem dapat menghambat proses pengeringan',
      ],
    },
  ]

  return (
    <section id="swot" style={{ background: 'white', padding: '100px 0' }}>
      <div className="container">

        <div style={{ textAlign: 'center', marginBottom: '64px' }}>
          <span className="section-tag" style={{ background: 'var(--purple)' }}>Analisis Bisnis</span>
          <h2 className="section-title">
            Analisis <span style={{ color: 'var(--purple)' }}>SWOT</span>
          </h2>
          <p className="section-subtitle" style={{ margin: '0 auto', textAlign: 'center' }}>
            Pemetaan menyeluruh kekuatan, kelemahan, peluang, dan ancaman
            dalam pengembangan Krueng Brick di pasar konstruksi Indonesia.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', marginBottom: '48px' }}>
          {swotData.map((item, i) => (
            <div key={i} onClick={() => setActiveQuadrant(activeQuadrant === i ? null : i)} style={{
              borderRadius: '24px', padding: '32px', cursor: 'pointer',
              transition: 'var(--transition)',
              background: activeQuadrant === i ? item.bgActive : item.bg,
              boxShadow: activeQuadrant === i ? `0 16px 48px ${item.color}33` : 'var(--shadow-soft)',
              transform: activeQuadrant === i ? 'scale(1.02)' : 'scale(1)',
              border: `2px solid ${activeQuadrant === i ? 'transparent' : item.color + '22'}`,
            }}>
              <div style={{
                display: 'flex', alignItems: 'center',
                justifyContent: 'space-between',
                marginBottom: activeQuadrant === i ? '24px' : '0',
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                  <div style={{
                    width: 52, height: 52,
                    background: activeQuadrant === i ? 'rgba(255,255,255,0.2)' : 'white',
                    borderRadius: '14px',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    color: activeQuadrant === i ? 'white' : item.color,
                    boxShadow: 'var(--shadow-soft)',
                  }}>{item.icon}</div>
                  <div>
                    <div style={{
                      fontSize: '0.72rem', fontWeight: 700,
                      letterSpacing: '2px', textTransform: 'uppercase',
                      color: activeQuadrant === i ? 'rgba(255,255,255,0.7)' : item.color,
                      marginBottom: '2px',
                    }}>{item.sublabel}</div>
                    <h3 style={{
                      fontFamily: 'var(--font-heading)', fontSize: '1.4rem',
                      color: activeQuadrant === i ? 'white' : 'var(--dark)',
                    }}>{item.label}</h3>
                  </div>
                </div>
                <div style={{
                  fontFamily: 'var(--font-heading)', fontSize: '4rem', fontWeight: 800,
                  color: activeQuadrant === i ? 'rgba(255,255,255,0.15)' : item.color + '22',
                  lineHeight: 1, userSelect: 'none',
                }}>{item.key}</div>
              </div>

              <div style={{
                maxHeight: activeQuadrant === i ? '400px' : '0',
                overflow: 'hidden',
                transition: 'max-height 0.4s cubic-bezier(0.4,0,0.2,1)',
              }}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', paddingTop: '4px' }}>
                  {item.items.map((point, j) => (
                    <div key={j} style={{
                      display: 'flex', alignItems: 'flex-start', gap: '12px',
                      padding: '12px 16px',
                      background: 'rgba(255,255,255,0.15)',
                      borderRadius: '12px',
                    }}>
                      <div style={{
                        width: 6, height: 6, background: 'rgba(255,255,255,0.8)',
                        borderRadius: '50%', marginTop: '7px', flexShrink: 0,
                      }}/>
                      <p style={{
                        color: 'rgba(255,255,255,0.9)', fontSize: '0.88rem',
                        lineHeight: 1.6, margin: 0,
                      }}>{point}</p>
                    </div>
                  ))}
                </div>
              </div>

              {activeQuadrant !== i && (
                <div style={{
                  marginTop: '16px', fontSize: '0.78rem',
                  color: item.color, fontWeight: 600, opacity: 0.7,
                }}>Klik untuk lihat detail</div>
              )}
            </div>
          ))}
        </div>

        <div style={{
          background: 'var(--cream)', borderRadius: '24px', padding: '32px 40px',
          display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)',
          gap: '24px', textAlign: 'center',
        }}>
          {swotData.map((item, i) => (
            <div key={i}>
              <div style={{
                fontFamily: 'var(--font-heading)', fontSize: '2.5rem', fontWeight: 800,
                color: item.color, lineHeight: 1, marginBottom: '4px',
              }}>{item.items.length}</div>
              <div style={{ fontWeight: 700, fontSize: '0.85rem', color: item.color, marginBottom: '2px' }}>
                {item.label}
              </div>
              <div style={{ color: 'var(--gray)', fontSize: '0.78rem' }}>{item.sublabel} teridentifikasi</div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}