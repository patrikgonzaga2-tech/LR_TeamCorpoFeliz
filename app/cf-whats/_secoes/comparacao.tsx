'use client'

import { WA_HREF } from './contato'

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
