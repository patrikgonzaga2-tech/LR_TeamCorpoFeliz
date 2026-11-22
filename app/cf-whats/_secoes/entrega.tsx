'use client'

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
