'use client'

import { useReveal } from '@/hooks/use-reveal'

const WA_HREF = 'https://wa.link/suportelaura'

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
            src="/images/logo-corpo-feliz.png"
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

// ────────────────────────────────────────────────────────────────────
// PROVA — galeria de depoimentos reais (reusa imagens do gallery.tsx)
// ────────────────────────────────────────────────────────────────────
const provaImgs = [
  { src: '/images/depoimentos/depoimento-camila.jpeg', alt: 'Camila Custódio MUSA — saia que ficou larga' },
  { src: '/images/depoimentos/depoimento-vsl-13.jpg', alt: 'Calça que voltou a servir' },
  { src: '/images/depoimentos/depoimento-vsl-10.jpg', alt: 'Fernanda Moreira' },
  { src: '/images/depoimentos/depoimento-vsl-14.jpg', alt: 'Sabrina e Keila' },
  { src: '/images/depoimentos/depoimento-vsl-9.jpg', alt: 'Vitória Barros -7kg' },
  { src: '/images/depoimentos/depoimento-vsl-12.jpg', alt: 'Daisy Nunes' },
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

// ────────────────────────────────────────────────────────────────────
// MECANISMO — 3 ❌ + 1 ✅
// ────────────────────────────────────────────────────────────────────
const dores = [
  {
    titulo: 'Você malha todo dia e acorda mais inchada',
    desc: 'Seu corpo entende o treino intenso como ameaça. Aí ele segura tudo — líquido, gordura — pra se proteger. Quanto mais você força, mais ele retém.',
  },
  {
    titulo: 'Você corta o pão, o arroz, o doce — e continua igual',
    desc: 'Quando você come pouco, o seu corpo entra em modo de alerta. Ele começa a guardar cada caloria que entra como se fosse a última. É por isso que você sofre, passa fome — e o peso não diminui.',
  },
  {
    titulo: 'Você tá sempre cansada, inchada, com vontade de doce',
    desc: 'Isso é o seu hormônio pedindo socorro. Quando ele tá desregulado, o seu corpo acumula gordura na barriga, retém líquido e manda sinal de fome o tempo todo — mesmo você tendo acabado de comer.',
  },
]

export function Mecanismo() {
  const delays = ['', 'reveal-d1', 'reveal-d2']
  return (
    <section
      className="relative overflow-hidden py-20 sm:py-24 lg:py-28"
      style={{ background: 'var(--ink)' }}
    >
      <div className="max-w-[1080px] mx-auto px-5 sm:px-8">
        <div className="reveal mb-12 sm:mb-16">
          <h2
            className="text-white max-w-[820px]"
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(30px,4.5vw,56px)',
              fontWeight: 800,
              lineHeight: 1.05,
              letterSpacing: '-0.025em',
            }}
          >
            Sabe quando você faz tudo certo<br />
            e o peso da balança{' '}
            <span style={{ color: 'var(--o)' }}>não muda?</span>
          </h2>
          <p
            className="reveal-d2 mt-5 max-w-[560px]"
            style={{ fontSize: 17, color: 'rgba(255,255,255,0.55)', lineHeight: 1.7 }}
          >
            Sem o treino certo, nada vai mudar.
          </p>
        </div>

        {/* Dores ❌ */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
          {dores.map((d, i) => (
            <div
              key={i}
              className={`reveal ${delays[i]} rounded-3xl p-6 sm:p-7 transition-all duration-300 hover:-translate-y-1`}
              style={{
                background: 'rgba(255,255,255,0.04)',
                border: '1px solid rgba(255,255,255,0.07)',
              }}
            >
              <div
                className="w-10 h-10 rounded-full flex items-center justify-center mb-5 text-lg font-bold"
                style={{ background: 'rgba(255,255,255,0.08)', color: 'rgba(255,255,255,0.7)' }}
              >
                ✕
              </div>
              <div
                className="mb-3"
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: 18,
                  fontWeight: 700,
                  color: '#fff',
                  lineHeight: 1.25,
                }}
              >
                {d.titulo}
              </div>
              <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.55)', lineHeight: 1.7 }}>
                {d.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Solução ✅ */}
        <div
          className="reveal rounded-3xl p-7 sm:p-10 lg:p-12 relative overflow-hidden"
          style={{
            background: 'linear-gradient(135deg, rgba(245,113,0,0.12) 0%, rgba(28,135,60,0.10) 100%)',
            border: '1px solid rgba(245,113,0,0.25)',
          }}
        >
          <div
            className="w-12 h-12 rounded-full flex items-center justify-center mb-6 text-xl font-bold"
            style={{ background: 'var(--o)', color: '#fff' }}
          >
            ✓
          </div>
          <h3
            className="mb-5 text-white"
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(22px,3vw,32px)',
              fontWeight: 800,
              lineHeight: 1.15,
              letterSpacing: '-0.02em',
              maxWidth: 780,
            }}
          >
            Os Treinos Hormonais funcionam porque{' '}
            <span style={{ color: 'var(--o)' }}>
              respeitam o que o seu corpo precisa em cada semana do mês.
            </span>
          </h3>
          <div
            className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-4"
            style={{ fontSize: 16, color: 'rgba(255,255,255,0.75)', lineHeight: 1.75 }}
          >
            <p>
              Na semana que você tem mais energia, a gente treina mais forte. Na semana
              que o corpo tá pesado e sensível, a gente treina mais leve.
            </p>
            <p>
              Quando você para de brigar com o seu corpo e começa a trabalhar com ele —
              ele para de segurar tudo e começa a soltar.
            </p>
          </div>
          <p
            className="mt-6 pt-6 max-w-[680px]"
            style={{
              borderTop: '1px solid rgba(255,255,255,0.1)',
              fontFamily: 'var(--font-display)',
              fontSize: 18,
              fontWeight: 600,
              color: '#fff',
              lineHeight: 1.5,
            }}
          >
            A barriga seca. O peso começa a cair.{' '}
            <span style={{ color: 'var(--o)' }}>As roupas começam a servir novamente.</span>
          </p>
        </div>
      </div>
    </section>
  )
}

// ────────────────────────────────────────────────────────────────────
// ENTREGA — 8 cards
// ────────────────────────────────────────────────────────────────────
const entregaItems = [
  {
    titulo: 'Avaliação física de entrada',
    desc: 'Antes de qualquer treino, a gente entende o seu histórico, seu nível e seus objetivos. Você começa pelo seu caminho — não pelo de todo mundo.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" width="100%" height="100%">
        <path d="M9 5H7a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2" />
        <rect x="9" y="3" width="6" height="4" rx="2" />
        <line x1="9" y1="12" x2="15" y2="12" />
        <line x1="9" y1="16" x2="13" y2="16" />
      </svg>
    ),
  },
  {
    titulo: 'Treinos organizados por fase do ciclo',
    desc: 'Cada semana do mês, o seu corpo tem uma capacidade diferente. Os treinos respeitam isso. Menos esforço contra o corpo, mais resultado.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" width="100%" height="100%">
        <path d="M23 4v6h-6" /><path d="M1 20v-6h6" /><path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10" /><path d="M20.49 15a9 9 0 0 1-14.85 3.36L1 14" />
      </svg>
    ),
  },
  {
    titulo: 'Treinos de 15–30 minutos em casa',
    desc: 'Sem academia. Sem equipamento caro. Sem precisar reorganizar a sua rotina do zero.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" width="100%" height="100%">
        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
        <polyline points="9 22 9 12 15 12 15 22" />
      </svg>
    ),
  },
  {
    titulo: 'Treinos Mega Curtos de 3 e 5 minutos',
    desc: 'Pra quando o dia vira loucura e você não quer perder a constância.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" width="100%" height="100%">
        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
  {
    titulo: 'Cardápios sem restrição',
    desc: 'Sem contar caloria. Sem passar fome. Sem culpa.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" width="100%" height="100%">
        <circle cx="12" cy="12" r="10" /><path d="M8 12a4 4 0 0 1 4-4 4 4 0 0 1 4 4" /><line x1="12" y1="8" x2="12" y2="17" />
      </svg>
    ),
  },
  {
    titulo: 'Desafios mensais',
    desc: 'Estímulos novos todo mês pra o corpo não estagnar e o resultado continuar vindo.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" width="100%" height="100%">
        <circle cx="12" cy="12" r="10" /><circle cx="12" cy="12" r="6" /><circle cx="12" cy="12" r="2" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
  {
    titulo: 'Eu no WhatsApp todo dia',
    desc: 'Não uma equipe respondendo por ela. Ela. Todos os dias — inclusive fim de semana.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" width="100%" height="100%">
        <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
      </svg>
    ),
  },
  {
    titulo: 'Comunidade das Musas',
    desc: '+1.000 mulheres que entendem exatamente o que você está vivendo.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" width="100%" height="100%">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
  },
]

export function Entrega() {
  const delays = ['', 'reveal-d1', 'reveal-d2', 'reveal-d3', '', 'reveal-d1', 'reveal-d2', 'reveal-d3']
  return (
    <section className="py-20 sm:py-24 lg:py-28" style={{ background: 'var(--pale)' }}>
      <div className="max-w-[1080px] mx-auto px-5 sm:px-8">
        <div className="reveal mb-12 sm:mb-14 max-w-[820px]">
          <h2
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(28px,4.5vw,52px)',
              fontWeight: 800,
              lineHeight: 1.05,
              letterSpacing: '-0.025em',
            }}
          >
            Treino e alimentação personalizada<br />
            pro seu corpo.{' '}
            <span style={{ color: 'var(--gd)' }}>Comigo do seu lado.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {entregaItems.map((item, i) => (
            <div
              key={i}
              className={`reveal ${delays[i]} rounded-[20px] p-6 sm:p-7 transition-all duration-300 hover:-translate-y-1 flex flex-col`}
              style={{
                background: '#fff',
                border: '1px solid rgba(0,0,0,0.06)',
                boxShadow: '0 4px 20px rgba(0,0,0,0.04)',
              }}
            >
              <div
                className="w-11 h-11 rounded-xl flex items-center justify-center mb-5 p-2.5 text-white flex-shrink-0"
                style={{ background: i % 2 === 0 ? 'var(--o)' : 'var(--g)' }}
              >
                {item.icon}
              </div>
              <div
                className="mb-2.5"
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: 16,
                  fontWeight: 700,
                  color: 'var(--ink)',
                  lineHeight: 1.3,
                }}
              >
                {item.titulo}
              </div>
              <p style={{ fontSize: 13.5, color: 'var(--sub)', lineHeight: 1.65 }}>
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ────────────────────────────────────────────────────────────────────
// COMPARAÇÃO — tabela 4 colunas
// ────────────────────────────────────────────────────────────────────
const compRows: Array<{ feature: string; cf: boolean | string; academia: boolean | string; personal: boolean | string; app: boolean | string }> = [
  { feature: 'Treino feito pro corpo feminino', cf: true, academia: false, personal: 'dep', app: false },
  { feature: 'Respeita o ciclo hormonal', cf: true, academia: false, personal: false, app: false },
  { feature: 'Avaliação física de entrada', cf: true, academia: false, personal: true, app: false },
  { feature: 'Acompanhamento diário real', cf: true, academia: false, personal: true, app: false },
  { feature: 'Treinos de 3 min pra rotina real', cf: true, academia: false, personal: false, app: false },
  { feature: 'Nutrição integrada', cf: true, academia: false, personal: 'sep', app: false },
  { feature: 'Comunidade ativa', cf: true, academia: false, personal: false, app: false },
]

function CompSym({ val }: { val: boolean | string }) {
  if (val === true) return <span className="text-lg font-bold" style={{ color: 'var(--g)' }}>✓</span>
  if (val === false) return <span className="text-lg" style={{ color: '#ddd' }}>✕</span>
  return <span className="text-xs font-bold" style={{ color: 'var(--o)' }}>{val === 'dep' ? 'Depende' : 'Separado'}</span>
}

export function Comparacao() {
  return (
    <section className="py-20 sm:py-24 lg:py-28" style={{ background: 'var(--pale)' }}>
      <div className="max-w-[1080px] mx-auto px-5 sm:px-8">
        <h2
          className="reveal text-center mb-12 sm:mb-14"
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(28px,4.5vw,56px)',
            fontWeight: 800,
            lineHeight: 1.05,
            letterSpacing: '-0.025em',
          }}
        >
          Quer resultado de verdade?<br />
          <span style={{ color: 'var(--o)' }}>Veja a diferença.</span>
        </h2>

        <div className="reveal overflow-x-auto rounded-3xl" style={{ boxShadow: '0 4px 48px rgba(0,0,0,0.08)' }}>
          <table className="w-full min-w-[640px] border-collapse bg-white">
            <thead>
              <tr>
                <th
                  className="p-4 text-left text-xs font-bold tracking-widest uppercase border-b-2"
                  style={{ borderColor: '#f0f0f0', color: 'var(--mute)' }}
                >
                  Recurso
                </th>
                <th
                  className="p-4 text-center text-sm font-black"
                  style={{ background: 'var(--gd)', color: '#fff' }}
                >
                  Corpo Feliz
                </th>
                {['Academia', 'Personal', 'App genérico'].map((h) => (
                  <th
                    key={h}
                    className="p-4 text-center text-xs font-bold tracking-wider uppercase border-b-2"
                    style={{ borderColor: '#f0f0f0', color: 'var(--mute)' }}
                  >
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {compRows.map((row, i) => (
                <tr key={i} className="hover:bg-gray-50">
                  <td
                    className="p-3.5 text-left text-sm font-semibold border-b"
                    style={{ borderColor: '#f5f5f5', color: 'var(--ink)' }}
                  >
                    {row.feature}
                  </td>
                  <td
                    className="p-3.5 text-center border-b"
                    style={{ borderColor: '#f5f5f5', background: 'rgba(0,72,17,0.04)' }}
                  >
                    <CompSym val={row.cf} />
                  </td>
                  <td className="p-3.5 text-center border-b" style={{ borderColor: '#f5f5f5' }}>
                    <CompSym val={row.academia} />
                  </td>
                  <td className="p-3.5 text-center border-b" style={{ borderColor: '#f5f5f5' }}>
                    <CompSym val={row.personal} />
                  </td>
                  <td className="p-3.5 text-center border-b" style={{ borderColor: '#f5f5f5' }}>
                    <CompSym val={row.app} />
                  </td>
                </tr>
              ))}
              <tr className="hover:bg-gray-50">
                <td className="p-3.5 text-left text-sm font-semibold" style={{ color: 'var(--ink)' }}>
                  Investimento mensal
                </td>
                <td
                  className="p-3.5 text-center font-black text-lg"
                  style={{ background: 'rgba(0,72,17,0.04)', color: 'var(--gd)' }}
                >
                  $
                </td>
                <td className="p-3.5 text-center font-black text-lg" style={{ color: 'var(--ink)' }}>
                  $$$
                </td>
                <td className="p-3.5 text-center font-black text-lg" style={{ color: 'var(--ink)' }}>
                  $$$$
                </td>
                <td className="p-3.5 text-center font-black text-lg" style={{ color: 'var(--ink)' }}>
                  $$
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="reveal text-center mt-12">
          <a
            href={WA_HREF}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 font-bold rounded-full transition-all duration-300 hover:-translate-y-1"
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(15px,1.5vw,18px)',
              padding: 'clamp(16px,2vw,22px) clamp(28px,3vw,52px)',
              background: 'var(--o)',
              color: '#000',
              boxShadow: '0 8px 40px rgba(245,113,0,0.35)',
            }}
          >
            Quero fazer parte da Comunidade
            <span className="w-7 h-7 rounded-full bg-black/10 flex items-center justify-center text-sm flex-shrink-0">›</span>
          </a>
        </div>
      </div>
    </section>
  )
}

// ────────────────────────────────────────────────────────────────────
// CTA FINAL
// ────────────────────────────────────────────────────────────────────
export function CtaFinal() {
  return (
    <section
      className="py-24 sm:py-28 lg:py-32 relative overflow-hidden text-center"
      style={{ background: 'var(--o)' }}
    >
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none select-none leading-none"
        style={{
          fontFamily: 'var(--font-display)',
          fontSize: 'clamp(120px,20vw,300px)',
          fontWeight: 800,
          color: 'rgba(255,255,255,0.07)',
          whiteSpace: 'nowrap',
          letterSpacing: '-0.06em',
        }}
      >
        VEM
      </div>
      <div className="relative z-10 max-w-[860px] mx-auto px-5 sm:px-8">
        <h2
          className="reveal text-white"
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(40px,6.5vw,80px)',
            fontWeight: 800,
            lineHeight: 0.98,
            letterSpacing: '-0.03em',
            marginBottom: 28,
          }}
        >
          Pronta pra treinar a favor<br />
          <span style={{ color: 'var(--gd)' }}>do seu corpo?</span>
        </h2>
        <p
          className="reveal reveal-d2 mx-auto mb-10"
          style={{
            fontSize: 'clamp(16px,2vw,19px)',
            color: 'rgba(255,255,255,0.88)',
            lineHeight: 1.65,
            maxWidth: 580,
          }}
        >
          A gente conversa primeiro. Pra entender se é o momento certo pra você.
          <br />
          <strong style={{ color: '#fff' }}>Sem pressão. Sem script.</strong>
        </p>
        <div className="reveal reveal-d3 flex flex-wrap gap-3.5 justify-center mb-7">
          <a
            href={WA_HREF}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Conversar com a Laüra no WhatsApp"
            className="inline-flex items-center gap-3 font-bold rounded-full transition-all duration-300 hover:-translate-y-1"
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(15px,1.5vw,18px)',
              padding: 'clamp(16px,2vw,22px) clamp(28px,3vw,52px)',
              background: 'var(--gd)',
              color: 'white',
              boxShadow: '0 8px 32px rgba(0,72,17,0.3)',
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="currentColor"
              aria-hidden="true"
              className="flex-shrink-0"
            >
              <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
            </svg>
            Quero falar com a Laüra
            <span className="w-7 h-7 rounded-full bg-white/20 flex items-center justify-center text-sm flex-shrink-0">›</span>
          </a>
        </div>
        <div
          className="reveal reveal-d4"
          style={{ fontSize: 12, color: 'rgba(255,255,255,0.55)', letterSpacing: '0.04em' }}
        >
          Atendimento direto no WhatsApp · Resposta em até 2h
        </div>
      </div>
    </section>
  )
}

// ────────────────────────────────────────────────────────────────────
// FOOTER
// ────────────────────────────────────────────────────────────────────
export function FooterLight() {
  return (
    <footer className="py-8 text-center" style={{ background: 'var(--gd)' }}>
      <div className="max-w-[1080px] mx-auto px-5 sm:px-8 flex flex-col items-center gap-4">
        <img
          src="/images/logo-corpo-feliz.png"
          alt="Comunidade Corpo Feliz"
          className="h-10 w-auto object-contain opacity-60"
          style={{ filter: 'brightness(0) invert(1)' }}
        />
        <p style={{ fontSize: 12, color: 'rgba(255,255,255,0.3)', lineHeight: 1.8 }}>
          © Corpo Feliz · Laüra Rosa · Todos os direitos reservados<br />
          CNPJ: 53.742.824/0001-01<br />
          Os resultados podem variar de pessoa para pessoa. Consulte seu médico antes de iniciar qualquer programa de exercícios.
        </p>
      </div>
    </footer>
  )
}
