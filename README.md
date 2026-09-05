# teamcorpofeliz.com.br

Site de candidatura da Comunidade Corpo Feliz — Laüra Rosa.

Publicado automaticamente pela Vercel (projeto `lr-cf-pagina-de-vendas-vsl`)
a cada envio na branch `main`.

## Rodar no seu computador

```bash
pnpm install
pnpm dev
```

Abre em http://localhost:3000.

> **Atenção:** este projeto usa **pnpm**, não npm. O outro site da operação
> (`LR_LauraRosaPersonal`) usa npm. Misturar os dois bagunça as dependências.

## Rotas

| Endereço | O que é |
| --- | --- |
| `/` | Redireciona para `/cf-whats`, preservando as UTMs do anúncio |
| `/cf-whats` | **Página principal** — candidatura por WhatsApp, sem preço |
| `/cf-whats/b` | Variação com planos e checkout |
| `/cf-whats/c` | Variação enxuta, com planos |
| `/cf-whats/d` | Versão antiga com VSL (vídeo), ainda acessível por URL direta |

## Onde ficam as coisas que mais mudam

- **Link do WhatsApp da página principal** — constante `WA_HREF`, no topo de
  `app/cf-whats/_sections.tsx`. Alterar ali muda os quatro botões de uma vez.
- **Link do WhatsApp da `/cf-whats/d`** — está em três arquivos:
  `app/cf-whats/d/_rewrite-ctas.tsx`, `components/stack-whats.tsx` e
  `components/aplicacao.tsx`.
- **Rodapé com CNPJ** — dentro de `app/cf-whats/_sections.tsx`. As variações
  b/c/d usam outro rodapé (`components/stack-planos-faq.tsx`).
- **Imagens** — `public/images/`.

## Observações

- `_variantes-inativas/` guarda versões antigas em HTML puro. Não estão no ar.
- O build ignora erros de tipo (`ignoreBuildErrors: true` no `next.config.mjs`).
  Build verde significa "monta", não significa "está certo" — confira sempre no
  navegador antes de publicar.
