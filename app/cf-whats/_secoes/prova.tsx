'use client'

import { WA_HREF } from './contato'

// ────────────────────────────────────────────────────────────────────
// PROVA — galeria de depoimentos reais (reusa imagens do gallery.tsx)
// ────────────────────────────────────────────────────────────────────
const provaImgs = [
  { src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_9785.PNG-gJlQ42DOBgVADaFIPk0ffy9Ava356o.jpeg', alt: 'Camila Custódio MUSA — saia que ficou larga' },
  { src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Co%CC%81pia%20de%20Depoimento-VSL-13-zkDyjT9kYA8LAHwkqDoKV5gPcmQqhD.jpg', alt: 'Calça que voltou a servir' },
  { src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Co%CC%81pia%20de%20Depoimento-VSL-10-EjMDxGsWDkEgJ4zzEPKM2t45fifW86.jpg', alt: 'Fernanda Moreira' },
  { src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Co%CC%81pia%20de%20Depoimento-VSL-14-lQF0W9oLkXYCSioRuebx2ePbURW2b3.jpg', alt: 'Sabrina e Keila' },
  { src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Co%CC%81pia%20de%20Depoimento-VSL-9-LyLxLxTKytYniCWnvEl9BAh4Qaggwu.jpg', alt: 'Vitória Barros -7kg' },
  { src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Co%CC%81pia%20de%20Depoimento-VSL-12-u0hA4ydLEJvg5rbadHN8hWrWBgPgAt.jpg', alt: 'Daisy Nunes' },
]

export function Prova() {
  return (
    <section
      className="relative overflow-hidden py-20 sm:py-24 lg:py-28"
      style={{ background: 'var(--pale)' }}
      aria-label="Resultados reais das Musas"
    >
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse 80% 60% at 80% 20%,rgba(245,113,0,0.06) 0%,transparent 70%)' }}
      />
      <div className="max-w-[1080px] mx-auto px-5 sm:px-8 relative">
        <div className="reveal flex flex-col sm:flex-row sm:flex-wrap sm:justify-between sm:items-end gap-6 mb-14 sm:mb-16">
          <div>
            <h2
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(32px,5vw,60px)',
                fontWeight: 800,
                lineHeight: 1.05,
                letterSpacing: '-0.025em',
              }}
            >
              O que muda quando<br />o treino finalmente<br />
              <span style={{ color: 'var(--o)' }}>é o certo.</span>
            </h2>
          </div>
          <p
            className="text-sm sm:text-right max-w-xs sm:max-w-[320px] leading-relaxed"
            style={{ color: 'var(--sub)' }}
          >
            Depoimentos reais — barriga, roupa, ânimo, sono. O detalhe específico que ninguém promete.
          </p>
        </div>

        <div
          style={{ columnGap: 10 }}
          className="[column-count:1] sm:[column-count:2] lg:[column-count:3]"
        >
          {provaImgs.map((img, i) => (
            <div
              key={i}
              className="reveal break-inside-avoid mb-2.5 overflow-hidden rounded-2xl transition-all duration-300 hover:-translate-y-0.5"
              style={{
                boxShadow: '0 4px 20px rgba(0,0,0,0.12)',
                border: '1px solid rgba(0,0,0,0.05)',
              }}
            >
              <img
                src={img.src}
                alt={img.alt}
                loading={i < 2 ? 'eager' : 'lazy'}
                decoding={i < 2 ? 'sync' : 'async'}
                className="block w-full h-auto"
              />
            </div>
          ))}
        </div>

        <div className="reveal text-center mt-12">
          <a
            href={WA_HREF}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 font-bold rounded-full transition-all duration-300 hover:-translate-y-1"
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 16,
              padding: '17px 36px',
              background: 'var(--o)',
              color: '#000',
              boxShadow: '0 8px 40px rgba(245,113,0,0.35)',
            }}
          >
            Quero esses resultados
            <span className="w-7 h-7 rounded-full bg-black/10 flex items-center justify-center text-sm flex-shrink-0">›</span>
          </a>
        </div>
      </div>
    </section>
  )
}
