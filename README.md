# Gimenes e Pires — Sociedade de Advogados · site institucional

Site institucional para gimenesepires.com.br, construído em torno da
identidade das duas sócias-fundadoras (Nathalia Gimenes e Nicole Pires) e
da logomarca do escritório (coluna clássica sob arco, com estrelas).
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

- **`src/data/contato.js`** — telefones, WhatsApp, endereço, horário,
  avaliações do Google e Instagram já preenchidos com dados reais do Perfil
  da Empresa no Google. Ainda `TODO`: e-mail, LinkedIn e os números da OAB
  das duas sócias.
- **`src/components/Atuacao.jsx`** — as 4 áreas de atuação foram um
  ponto de partida (Tributário/Simples Nacional, Civil, Empresarial,
  Contencioso) com base no que eu sabia do trabalho do escritório. Confirma
  se é isso mesmo que vocês querem destacar, e ajusta os textos.
- **`src/components/Sobre.jsx`** — os textos sobre a Nathalia e a Nicole são
  rascunho. Vale revisar com elas antes de publicar.
- Não usei foto de ninguém — as "iniciais" (NG / NP) em blocos coloridos
  substituem retrato por enquanto. Se vocês tiverem fotos profissionais,
  vale trocar por elas (fica ainda mais forte).
- O mapa do Google é um embed sem chave de API. Funciona, mas se quiser
  um pin exato, gere o iframe pelo próprio Google Maps.

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

- Cores: quase-preto `#1B1B18` (cor da logo), marfim `#F4F0E7`, bronze `#7C5A2E`,
  ouro claro `#B08E56`.
- Tipografia: Newsreader (títulos, com itálico) + Inter (corpo/UI).
- Layout editorial: seções numeradas (01–04), fios finos, bronze como
  acento único, seções escuras em quase-preto.
- Marca oficial em `public/brand/` (logo horizontal + ícone da coluna).
  Arte original preta — em fundo escuro, `LogoMark` usa `invert`.

## Deploy rápido

**Vercel / Netlify:** conecta o repositório Git, comando de build
`npm run build`, diretório de saída `dist`.

**Hospedagem tradicional (cPanel etc.):** roda `npm run build` localmente e
sobe o conteúdo da pasta `dist/` para o domínio.
