# Gimenes & Pires Advogadas — site institucional

Site institucional para gimenesepires.com.br, construído em torno da
identidade das duas sócias-fundadoras (Nathalia Gimenes e Nicole Pires).
Stack: React + Vite + Tailwind CSS.

## Rodar localmente

```bash
npm install
npm run dev
```

Abre em `http://localhost:5173`.

## Gerar build de produção

```bash
npm run build
npm run preview   # para conferir o build localmente
```

Os arquivos finais ficam em `dist/` — é isso que sobe pro servidor/hospedagem
(Vercel, Netlify, cPanel, etc.).

## ⚠️ Antes de publicar — o que é placeholder

Nada de dados de contato reais foi inventado. Preencha antes de publicar:

- **`src/data/contato.js`** — telefone, WhatsApp, e-mail, endereço, redes
  sociais e números da OAB das duas sócias. Está tudo marcado com `TODO`.
- **`src/components/Atuacao.jsx`** — as 4 áreas de atuação foram um
  ponto de partida (Tributário/Simples Nacional, Civil, Empresarial,
  Contencioso) com base no que eu sabia do trabalho do escritório. Confirma
  se é isso mesmo que vocês querem destacar, e ajusta os textos.
- **`src/components/Sobre.jsx`** — os textos sobre a Nathalia e a Nicole são
  rascunho. Vale revisar com elas antes de publicar.
- Não usei foto de ninguém — as "iniciais" (NG / NP) em blocos coloridos
  substituem retrato por enquanto. Se vocês tiverem fotos profissionais,
  vale trocar por elas (fica ainda mais forte).

## Estrutura

```
src/
  components/     seções da página (Header, Hero, Sobre, Atuacao, ...)
  data/contato.js dados de contato centralizados
  index.css       estilos globais + fontes
  App.jsx         monta as seções na ordem
tailwind.config.js  paleta e tipografia da marca
```

## Identidade visual

- Cores: tinta `#1E2A22`, papel `#F5EFE3`, vinho `#6E1B34`, latão `#A9824F`.
- Tipografia: Fraunces (títulos, com itálico) + Work Sans (corpo/UI).
- Conceito: a "assinatura" das duas sócias como elemento gráfico central —
  simboliza que cada caso passa pelas duas, de fato.

## Deploy rápido

**Vercel / Netlify:** conecta o repositório Git, comando de build
`npm run build`, diretório de saída `dist`.

**Hospedagem tradicional (cPanel etc.):** roda `npm run build` localmente e
sobe o conteúdo da pasta `dist/` para o domínio.
