import { Wind, Zap, BadgeDollarSign, Users } from 'lucide-react'

export default function Produk() {
  const keunggulan = [
    {
      icon: <Wind size={28} color="var(--teal)" strokeWidth={1.5}/>,
      title: 'Ramah Lingkungan',
      desc: 'Tanpa proses pembakaran suhu tinggi, emisi karbon jauh lebih rendah dibanding batu bata konvensional.',
      color: 'var(--teal)', bg: 'rgba(42,123,111,0.08)',
    },
    {
      icon: <Zap size={28} color="var(--orange)" strokeWidth={1.5}/>,
      title: 'Kuat & Tahan Lama',
      desc: 'Komposisi abu sekam padi sebagai pozzolan alami memperkuat struktur bata hingga memenuhi standar SNI 15-2094-2000.',
      color: 'var(--orange)', bg: 'rgba(232,97,42,0.08)',
    },
    {
      icon: <BadgeDollarSign size={28} color="var(--purple)" strokeWidth={1.5}/>,
      title: 'Harga Kompetitif',
      desc: 'Bahan baku dari limbah lokal yang melimpah membuat biaya produksi lebih hemat dan harga jual lebih terjangkau.',
      color: 'var(--purple)', bg: 'rgba(107,78,138,0.08)',
    },
    {
      icon: <Users size={28} color="var(--yellow)" strokeWidth={1.5}/>,
      title: 'Berdayakan Lokal',
      desc: 'Membuka lapangan kerja bagi masyarakat terdampak banjir di Aceh sebagai pelaku UMKM hijau.',
      color: 'var(--yellow)', bg: 'rgba(245,200,66,0.12)',
    },
  ]

  return (
    <section id="produk" style={{ background: 'white', padding: '100px 0' }}>
      <div className="container">

        <div style={{ textAlign: 'center', marginBottom: '64px' }}>
          <span className="section-tag">Tentang Produk</span>
          <h2 className="section-title" style={{ margin: '0 auto 16px' }}>
            Apa Itu <span style={{ color: 'var(--orange)' }}>Krueng Brick?</span>
          </h2>
          <p className="section-subtitle" style={{ margin: '0 auto', textAlign: 'center' }}>
            Inovasi batu bata berbahan dasar lumpur banjir, abu sekam padi, dan semen
            yang hadir sebagai solusi konstruksi berkelanjutan khas Aceh.
          </p>
        </div>

        <div className="produk-grid" style={{
          display: 'grid', gridTemplateColumns: '1fr 1fr',
          gap: '60px', alignItems: 'center', marginBottom: '80px',
        }}>
          <div style={{ position: 'relative' }}>
            <div style={{
              background: 'var(--cream)', borderRadius: '32px',
              padding: '40px 36px', position: 'relative', overflow: 'hidden',
            }}>
              <div style={{
                position: 'absolute', top: -40, right: -40,
                width: 160, height: 160,
                background: 'rgba(232,97,42,0.1)', borderRadius: '50%',
              }}/>
              <div style={{
                position: 'absolute', bottom: -30, left: -30,
                width: 120, height: 120,
                background: 'rgba(42,123,111,0.1)', borderRadius: '50%',
              }}/>

              <h3 style={{
                fontFamily: 'var(--font-heading)',
                fontSize: '1.3rem', marginBottom: '28px', position: 'relative',
              }}>Komposisi Bahan Baku</h3>

              {[
                { label: 'Lumpur Banjir', pct: 70, color: 'var(--teal)' },
                { label: 'Abu Sekam Padi', pct: 15, color: 'var(--orange)' },
                { label: 'Semen Portland', pct: 15, color: 'var(--purple)' },
              ].map((item, i) => (
                <div key={i} style={{ marginBottom: '20px', position: 'relative' }}>
                  <div style={{
                    display: 'flex', justifyContent: 'space-between',
                    marginBottom: '8px', alignItems: 'center',
                  }}>
                    <span style={{ fontWeight: 600, fontSize: '0.9rem' }}>{item.label}</span>
                    <span style={{
                      fontWeight: 800, fontSize: '1rem', color: item.color,
                      fontFamily: 'var(--font-heading)',
                    }}>{item.pct}%</span>
                  </div>
                  <div style={{
                    height: '10px', background: 'rgba(0,0,0,0.06)',
                    borderRadius: '100px', overflow: 'hidden',
                  }}>
                    <div style={{
                      height: '100%', width: `${item.pct}%`,
                      background: item.color, borderRadius: '100px',
                    }}/>
                  </div>
                </div>
              ))}

              <div style={{
                marginTop: '28px', padding: '14px 18px',
                background: 'white', borderRadius: '14px',
                display: 'flex', alignItems: 'center', gap: '12px',
                boxShadow: 'var(--shadow-soft)',
              }}>
                <div style={{
                  width: 44, height: 44,
                  background: 'linear-gradient(135deg, var(--orange), var(--yellow))',
                  borderRadius: '12px',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  flexShrink: 0,
                }}>
                  <Zap size={22} color="white" strokeWidth={2}/>
                </div>
                <div>
                  <div style={{ fontWeight: 700, fontSize: '0.9rem' }}>1.000 bata / produksi</div>
                  <div style={{ color: 'var(--gray)', fontSize: '0.78rem' }}>
                    320 kg lumpur · 48 kg sekam · 48 kg semen · 5 pekerja
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div>
            <span className="section-tag" style={{ background: 'var(--teal)' }}>Krueng = Sungai</span>
            <h2 style={{
              fontFamily: 'var(--font-heading)',
              fontSize: 'clamp(1.6rem, 3vw, 2.5rem)',
              lineHeight: 1.2, margin: '16px 0 20px',
            }}>
              Dari Limbah <br/>
              <span style={{ color: 'var(--teal)' }}>Jadi Nilai</span>
            </h2>
            <p style={{ color: 'var(--gray)', lineHeight: 1.8, fontSize: '0.95rem', marginBottom: '16px' }}>
              Nama <strong>Krueng</strong> diambil dari Bahasa Aceh yang berarti
              <em> sungai</em> — menegaskan identitas lokal sekaligus menggambarkan
              asal bahan baku utamanya dari lumpur banjir Sungai Aceh.
            </p>
            <p style={{ color: 'var(--gray)', lineHeight: 1.8, fontSize: '0.95rem', marginBottom: '28px' }}>
              Berdasarkan data BPBD Kota Banda Aceh, lebih dari <strong>60% wilayah kecamatan</strong> berpotensi
              terdampak banjir setiap tahunnya. Krueng Brick hadir mengubah beban itu menjadi
              peluang ekonomi nyata bagi masyarakat.
            </p>

            <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
              {[
                { num: 'SDG 9', label: 'Industri Berkelanjutan', color: 'var(--orange)' },
                { num: 'SDG 11', label: 'Kota Tangguh', color: 'var(--teal)' },
                { num: 'SDG 12', label: 'Konsumsi Bertanggung Jawab', color: 'var(--purple)' },
              ].map((s, i) => (
                <div key={i} style={{
                  padding: '6px 14px', borderRadius: '100px',
                  border: `2px solid ${s.color}`,
                  display: 'flex', alignItems: 'center', gap: '8px',
                }}>
                  <span style={{
                    background: s.color, color: 'white',
                    fontSize: '0.65rem', fontWeight: 800,
                    padding: '2px 8px', borderRadius: '100px',
                  }}>{s.num}</span>
                  <span style={{ fontSize: '0.75rem', fontWeight: 600, color: s.color }}>{s.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <h3 style={{
          fontFamily: 'var(--font-heading)', fontSize: '1.6rem',
          textAlign: 'center', marginBottom: '32px',
        }}>Keunggulan Produk</h3>

        <div className="keunggulan-grid" style={{
          display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '20px',
        }}>
          {keunggulan.map((item, i) => (
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
                padding: '28px 20px', background: item.bg,
                borderRadius: '20px', border: `1px solid ${item.color}22`,
                transition: 'var(--transition)', boxShadow: 'var(--shadow-soft)',
                cursor: 'default',
              }}>
              <div style={{
                width: 52, height: 52, background: 'white',
                borderRadius: '14px', display: 'flex',
                alignItems: 'center', justifyContent: 'center',
                boxShadow: 'var(--shadow-soft)', marginBottom: '14px',
              }}>{item.icon}</div>
              <h4 style={{ fontWeight: 700, fontSize: '0.95rem', marginBottom: '8px', color: item.color }}>{item.title}</h4>
              <p style={{ color: 'var(--gray)', fontSize: '0.82rem', lineHeight: 1.7 }}>{item.desc}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}