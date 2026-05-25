import { useState } from 'react'
import { Droplets, Sun, FlaskConical, Box, Home, Ruler, Shovel, Scale, Filter, Blend, Hammer, Thermometer } from 'lucide-react'

export default function Proses() {
  const [activeStep, setActiveStep] = useState(0)

  const steps = [
    {
      num: '01', icon: <Droplets size={24} strokeWidth={1.5}/>,
      iconBig: <Droplets size={32} strokeWidth={1.5}/>,
      title: 'Pengumpulan Lumpur', subtitle: 'Sumber Bahan Baku',
      desc: 'Lumpur banjir dikumpulkan dari wilayah terdampak banjir di Banda Aceh dan sekitarnya, khususnya dari aliran Sungai Aceh yang meluap setiap musim hujan.',
      detail: 'Lebih dari 60% wilayah kecamatan di Banda Aceh berpotensi terdampak banjir setiap tahunnya, menghasilkan puluhan ribu meter kubik lumpur per kejadian.',
      color: 'var(--teal)', bg: 'rgba(42,123,111,0.08)',
    },
    {
      num: '02', icon: <Sun size={24} strokeWidth={1.5}/>,
      iconBig: <Sun size={32} strokeWidth={1.5}/>,
      title: 'Pengeringan & Penyaringan', subtitle: 'Pengolahan Awal',
      desc: 'Lumpur dikeringkan di bawah sinar matahari selama 2×24 jam hingga kadar air mendekati ±30%, diukur menggunakan Digital Soil Analyzer Meter.',
      detail: 'Proses pengeringan memastikan adonan tidak terlalu lembek saat dicetak. Jika kadar air masih lebih dari 30%, dilakukan penjemuran tambahan ±3 jam.',
      color: 'var(--orange)', bg: 'rgba(232,97,42,0.08)',
    },
    {
      num: '03', icon: <FlaskConical size={24} strokeWidth={1.5}/>,
      iconBig: <FlaskConical size={32} strokeWidth={1.5}/>,
      title: 'Pencampuran Bahan', subtitle: 'Mixing Komposisi',
      desc: 'Seluruh bahan dicampur dengan komposisi 70% lumpur banjir, 15% abu sekam padi, dan 15% semen Portland menggunakan mesin mixer sederhana.',
      detail: 'Per batch: 320 kg lumpur kering + 48 kg abu sekam padi + 48 kg semen + 30 liter air. Diaduk hingga homogen dan siap cetak.',
      color: 'var(--purple)', bg: 'rgba(107,78,138,0.08)',
    },
    {
      num: '04', icon: <Box size={24} strokeWidth={1.5}/>,
      iconBig: <Box size={32} strokeWidth={1.5}/>,
      title: 'Pencetakan Bata', subtitle: 'Forming',
      desc: 'Adonan dicetak menggunakan cetakan kayu berukuran 190×90×65 mm sesuai standar SNI 15-2094-2000 Modul M-5a oleh 5 pekerja terlatih.',
      detail: 'Setiap satu kali produksi menghasilkan sekitar 1.000 batu bata dengan 2 kali pengulangan (duplo) untuk memastikan konsistensi kualitas.',
      color: 'var(--yellow)', bg: 'rgba(245,200,66,0.12)',
    },
    {
      num: '05', icon: <Home size={24} strokeWidth={1.5}/>,
      iconBig: <Home size={32} strokeWidth={1.5}/>,
      title: 'Pengeringan & Perawatan', subtitle: 'Curing',
      desc: 'Bata yang telah dicetak diletakkan di rak pengering bertutup terpal, dirawat secara berkala untuk meningkatkan kekuatan dan daya tahan produk akhir.',
      detail: 'Proses curing memastikan reaksi pozzolan antara abu sekam padi dan semen berjalan optimal, menghasilkan bata yang kokoh dan tahan lama.',
      color: 'var(--teal)', bg: 'rgba(42,123,111,0.08)',
    },
  ]

  const alat = [
    { icon: <Ruler size={22} strokeWidth={1.5}/>, name: 'Cetakan Kayu', spec: '190×90×65 mm (SNI)' },
    { icon: <Shovel size={22} strokeWidth={1.5}/>, name: 'Sekop & Cangkul', spec: 'Pengumpulan bahan' },
    { icon: <Blend size={22} strokeWidth={1.5}/>, name: 'Ember & Wadah', spec: 'Pencampuran' },
    { icon: <Filter size={22} strokeWidth={1.5}/>, name: 'Ayakan', spec: 'Penyaringan lumpur' },
    { icon: <Scale size={22} strokeWidth={1.5}/>, name: 'Timbangan Digital', spec: 'Presisi komposisi' },
    { icon: <Blend size={22} strokeWidth={1.5}/>, name: 'Mesin Mixer', spec: 'Pengadukan bahan' },
    { icon: <Home size={22} strokeWidth={1.5}/>, name: 'Terpal & Rak', spec: 'Pengeringan bata' },
    { icon: <Thermometer size={22} strokeWidth={1.5}/>, name: 'Soil Analyzer', spec: 'Ukur kadar air' },
  ]

  return (
    <section id="proses" style={{ background: 'var(--cream)', padding: '100px 0' }}>
      <div className="container">

        <div style={{ textAlign: 'center', marginBottom: '64px' }}>
          <span className="section-tag" style={{ background: 'var(--teal)' }}>Proses Produksi</span>
          <h2 className="section-title">
            Dari Lumpur <span style={{ color: 'var(--teal)' }}>Jadi Bata</span>
          </h2>
          <p className="section-subtitle" style={{ margin: '0 auto', textAlign: 'center' }}>
            5 tahap produksi yang telah dirancang secara sistematis untuk menghasilkan
            batu bata berkualitas tinggi dari bahan limbah lokal.
          </p>
        </div>

        <div style={{
          display: 'grid', gridTemplateColumns: '1fr 1.4fr',
          gap: '48px', alignItems: 'start', marginBottom: '80px',
        }}>
          {/* Step List */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {steps.map((step, i) => (
              <div key={i} onClick={() => setActiveStep(i)} style={{
                padding: '20px 24px', borderRadius: '16px', cursor: 'pointer',
                transition: 'var(--transition)',
                background: activeStep === i ? step.color : 'white',
                boxShadow: activeStep === i ? `0 8px 32px ${step.color}33` : 'var(--shadow-soft)',
                transform: activeStep === i ? 'translateX(8px)' : 'translateX(0)',
                display: 'flex', alignItems: 'center', gap: '16px',
                border: activeStep === i ? 'none' : '1px solid rgba(0,0,0,0.05)',
              }}>
                <div style={{
                  width: 44, height: 44, flexShrink: 0,
                  background: activeStep === i ? 'rgba(255,255,255,0.2)' : step.bg,
                  borderRadius: '12px',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  color: activeStep === i ? 'white' : step.color,
                }}>{step.icon}</div>
                <div>
                  <div style={{
                    fontSize: '0.75rem', fontWeight: 700,
                    color: activeStep === i ? 'rgba(255,255,255,0.7)' : step.color,
                    letterSpacing: '1px', textTransform: 'uppercase', marginBottom: '2px',
                  }}>STEP {step.num}</div>
                  <div style={{
                    fontWeight: 700, fontSize: '0.95rem',
                    color: activeStep === i ? 'white' : 'var(--dark)',
                  }}>{step.title}</div>
                </div>
              </div>
            ))}
          </div>

          {/* Step Detail */}
          <div style={{
            background: 'white', borderRadius: '28px', padding: '40px',
            boxShadow: 'var(--shadow-medium)', position: 'sticky',
            top: '100px', overflow: 'hidden',
          }}>
            <div style={{
              position: 'absolute', top: 0, left: 0, right: 0, height: '5px',
              background: steps[activeStep].color,
            }}/>

            <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '24px' }}>
              <div style={{
                width: 64, height: 64,
                background: steps[activeStep].bg, borderRadius: '18px',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                color: steps[activeStep].color,
              }}>{steps[activeStep].iconBig}</div>
              <div>
                <div style={{
                  fontSize: '0.75rem', fontWeight: 700,
                  color: steps[activeStep].color,
                  letterSpacing: '1.5px', textTransform: 'uppercase', marginBottom: '4px',
                }}>STEP {steps[activeStep].num} · {steps[activeStep].subtitle}</div>
                <h3 style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: '1.6rem', color: 'var(--dark)',
                }}>{steps[activeStep].title}</h3>
              </div>
            </div>

            <p style={{ color: 'var(--gray)', lineHeight: 1.8, fontSize: '1rem', marginBottom: '20px' }}>
              {steps[activeStep].desc}
            </p>

            <div style={{
              background: steps[activeStep].bg, borderRadius: '16px',
              padding: '20px', borderLeft: `4px solid ${steps[activeStep].color}`,
            }}>
              <div style={{
                fontSize: '0.75rem', fontWeight: 700,
                color: steps[activeStep].color,
                letterSpacing: '1px', textTransform: 'uppercase', marginBottom: '8px',
              }}>Detail Teknis</div>
              <p style={{ color: 'var(--dark)', lineHeight: 1.7, fontSize: '0.9rem' }}>
                {steps[activeStep].detail}
              </p>
            </div>

            <div style={{ display: 'flex', gap: '8px', marginTop: '32px', justifyContent: 'center' }}>
              {steps.map((_, i) => (
                <div key={i} onClick={() => setActiveStep(i)} style={{
                  width: activeStep === i ? 24 : 8, height: 8,
                  borderRadius: '100px',
                  background: activeStep === i ? steps[activeStep].color : 'rgba(0,0,0,0.12)',
                  transition: 'var(--transition)', cursor: 'pointer',
                }}/>
              ))}
            </div>
          </div>
        </div>

        {/* Peralatan */}
        <h3 style={{
          fontFamily: 'var(--font-heading)', fontSize: '1.6rem',
          textAlign: 'center', marginBottom: '40px',
        }}>Peralatan Produksi</h3>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '16px' }}>
          {alat.map((item, i) => (
            <div key={i}
              onMouseEnter={e => {
                e.currentTarget.style.transform = 'translateY(-6px)'
                e.currentTarget.style.boxShadow = 'var(--shadow-medium)'
              }}
              onMouseLeave={e => {
                e.currentTarget.style.transform = 'translateY(0)'
                e.currentTarget.style.boxShadow = 'var(--shadow-soft)'
              }}
              style={{
                background: 'white', borderRadius: '16px', padding: '20px',
                textAlign: 'center', boxShadow: 'var(--shadow-soft)',
                transition: 'var(--transition)', cursor: 'default',
              }}>
              <div style={{
                width: 48, height: 48, background: 'var(--cream)',
                borderRadius: '12px', display: 'flex',
                alignItems: 'center', justifyContent: 'center',
                margin: '0 auto 10px', color: 'var(--teal)',
              }}>{item.icon}</div>
              <div style={{ fontWeight: 700, fontSize: '0.9rem', marginBottom: '4px' }}>{item.name}</div>
              <div style={{ color: 'var(--gray)', fontSize: '0.78rem' }}>{item.spec}</div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}