'use client'

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
