'use client'

import { useReveal } from '@/hooks/use-reveal'
import { WA_HREF } from './contato'

// ────────────────────────────────────────────────────────────────────
// HERO — sem vídeo
// ────────────────────────────────────────────────────────────────────
export function HeroLight() {
  useReveal()

  return (
    <section
      className="relative overflow-hidden"
      style={{ background: 'var(--gd)' }}
      aria-label="Seção principal"
    >
      {/* Blobs decorativos */}
      <svg
        className="blob-float1 absolute pointer-events-none will-change-transform"
        style={{ top: '-20%', right: '-15%', width: 'min(700px,90vw)', height: 'min(700px,90vw)' }}
        viewBox="0 0 400 400"
      >
        <path d="M60,20 C120,-20 220,10 280,60 C340,110 380,180 360,260 C340,340 260,390 180,380 C100,370 20,320 10,240 C0,160 0,60 60,20Z" fill="rgba(245,113,0,0.18)" />
      </svg>
      <svg
        className="blob-float2 absolute pointer-events-none will-change-transform"
        style={{ bottom: '-10%', left: '-10%', width: 'min(500px,70vw)', height: 'min(500px,70vw)' }}
        viewBox="0 0 300 300"
      >
        <path d="M40,10 C90,-15 170,5 210,50 C250,95 270,160 240,210 C210,260 140,280 80,260 C20,240 -10,170 5,110 C20,50 -10,35 40,10Z" fill="rgba(28,135,60,0.25)" />
      </svg>
      <svg
        className="blob-float3 absolute pointer-events-none will-change-transform"
        style={{ top: '20%', left: '30%', width: 'min(300px,40vw)', height: 'min(300px,40vw)' }}
        viewBox="0 0 200 200"
      >
        <path d="M30,10 C65,-5 120,5 150,40 C180,75 185,130 160,160 C135,190 80,195 45,175 C10,155 -5,100 5,65 C15,30 -5,25 30,10Z" fill="rgba(245,113,0,0.10)" />
      </svg>

      <div
        className="relative z-10 w-full max-w-[1080px] mx-auto px-5 sm:px-8 flex flex-col items-center text-center"
        style={{
          paddingTop: 'clamp(24px,4vw,48px)',
          paddingBottom: 'clamp(24px,4vw,48px)',
        }}
      >
        {/* Logo */}
        <div className="reveal mb-10 sm:mb-12">
          <img
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Group%20165%20%282%29-RoDBA8TV1oNG9u024AV9Gt19c7dub6.png"
            alt="Comunidade Corpo Feliz"
            className="h-14 sm:h-16 w-auto object-contain"
            style={{ filter: 'brightness(0) invert(1)' }}
            width={220}
            height={64}
            fetchPriority="high"
            decoding="sync"
          />
        </div>

        <h1
          className="reveal reveal-d1 font-display mb-8 max-w-[820px] text-center"
          style={{
            fontSize: 'clamp(40px,6.5vw,80px)',
            fontWeight: 800,
            lineHeight: 0.98,
            letterSpacing: '-0.03em',
            textDecoration: 'none',
          }}
        >
          <span style={{ color: '#fff' }}>Barriga seca.</span>
          <br />
          <span style={{ color: '#fff' }}>Braços finos.</span>
          <br />
          <span style={{ color: '#E07A1E' }}>Eu, você e um pesinho.</span>
        </h1>

        <p
          className="reveal reveal-d2 mb-8 sm:mb-10 text-center"
          style={{
            fontSize: 'clamp(18px,3vw,22px)',
            lineHeight: 1.65,
            color: 'rgba(255,255,255,0.78)',
            maxWidth: 680,
            fontFamily: 'var(--font-body)',
          }}
        >
          Mais de 1.000 mulheres emagreceram treinando 15 minutos em casa —
          sem se matar, sem passar fome, com a Laüra no WhatsApp todos os dias.
        </p>

        <div className="reveal reveal-d3 flex flex-wrap gap-3 justify-center">
          <a
            href={WA_HREF}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Quero falar com a Laüra no WhatsApp"
            className="font-display inline-flex items-center gap-3 font-bold rounded-full transition-all duration-300 hover:-translate-y-1"
            style={{
              fontSize: 'clamp(15px,1.5vw,18px)',
              padding: 'clamp(16px,2vw,22px) clamp(28px,3vw,52px)',
              background: 'var(--o)',
              color: '#000',
              boxShadow: '0 8px 40px rgba(245,113,0,0.35)',
            }}
          >
            Quero falar com a Laüra
            <span className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center text-sm flex-shrink-0">›</span>
          </a>
        </div>

        <div
          className="reveal reveal-d3"
          style={{
            borderRadius: 16,
            overflow: 'hidden',
            maxWidth: 480,
            margin: '32px auto 0',
            width: '100%',
          }}
        >
          <p
            style={{
              textAlign: 'center',
              fontFamily: "'DM Sans', var(--font-body)",
              fontSize: 'clamp(14px,2vw,16px)',
              color: 'rgba(255,255,255,0.75)',
              marginTop: 14,
              fontStyle: 'italic',
              padding: '0 16px',
            }}
          >
            Essa sou eu antes e agora. Eu quero te ajudar a ter uma transformação igual eu tive.
          </p>
          <img
            src="/images/hero-laura.jpg"
            alt="Laüra Rosa — antes e agora"
            style={{
              width: '100%',
              height: 'auto',
              objectFit: 'cover',
              display: 'block',
              marginTop: 14,
            }}
            loading="lazy"
            decoding="async"
          />
        </div>
      </div>
    </section>
  )
}
