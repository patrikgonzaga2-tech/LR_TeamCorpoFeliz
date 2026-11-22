'use client'

// ────────────────────────────────────────────────────────────────────
// FOOTER
// ────────────────────────────────────────────────────────────────────
export function FooterLight() {
  return (
    <footer className="py-8 text-center" style={{ background: 'var(--gd)' }}>
      <div className="max-w-[1080px] mx-auto px-5 sm:px-8 flex flex-col items-center gap-4">
        <img
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Group%20165%20%282%29-RoDBA8TV1oNG9u024AV9Gt19c7dub6.png"
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
