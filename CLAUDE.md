# CLAUDE.md

Guidance for Claude Code working in this repo.

## Commands

- `npm run dev` — Vite dev server (`http://localhost:5173`, next free port if taken)
- `npm run build` — production build to `dist/`
- `npm run preview` — serve the built `dist/`
- `npm run lint` — oxlint (`.oxlintrc.json`; enforces React rules-of-hooks)

No test suite.

## Architecture

Single-page conversion landing page for **Gimenes e Pires — Sociedade de Advogados** (São José do Rio Preto, SP). React 19 + Vite + Tailwind v3, plain `.jsx`, no router, no state lib.

- Firm-wide (not one practice area); every section funnels to WhatsApp. `src/App.jsx` stacks `Hero`, `Servicos`, `Sobre`, `Confianca`, `FAQ`, `Contato` in `<main>`; `Header`/`Footer` outside. Nav = anchor links to stable section ids (`#atuacao` `#sobre` `#diferenciais` `#faq` `#contato`). Reorder = edit `App.jsx` + `LINKS` in `Header.jsx`.
- `src/components/WhatsButton.jsx` — the single WhatsApp CTA, reused everywhere. `mensagem` prefills contextual text; `variant` = `solid` / `onDark` (identical now — gold fill, dark text, square, hover inverts to white) / `link` (gold underline). Number from `CONTATO.whatsapp`.
- `FAQ.jsx` — native `<details>/<summary>`, no JS; `+` marker rotates via `group-open:rotate-45`.
- `src/data/contato.js` — all contact info centralized. Phones, WhatsApp, address, hours, Google rating, Instagram are real (Google Business Profile); `email` and `linkedin` still `TODO`. `google.mapaEmbed`/`google.url` are keyless Maps URLs from an address string. Import `CONTATO`; never hardcode contact data.
- `src/components/Logo.jsx` — wrappers over `public/brand/` assets (`logo.png`/`logo@2x.png` = horizontal lockup; `icone.svg` = mark only). Artwork is black, so both `Wordmark` and `LogoMark` render **inverted by default** (whole site is dark). Source pack: `../gimenes_pires_identidade_visual/`.
- `src/components/GoogleReviews.jsx` — social-proof strip; `tone="paper"` kept only for call-site compat.

## Design system — dark-only, gold accent

The site has **no light theme**. Tokens in `tailwind.config.js` (oklch, not hex — use the tokens):

| token | role |
|---|---|
| `bg` `oklch(15.9% 0 0)` | page background — near-black |
| `fg` `oklch(95.5% 0.008 90)` | text — warm white |
| `muted` `oklch(72% 0.012 80)` | secondary text / paragraphs |
| `card` `oklch(21.5% 0 0)` | card + highlighted-section surface |
| `accent` `oklch(75% 0.11 85)` | **gold — brand signature, sparing use only** |
| `accent-ink` `oklch(15.9% 0 0)` | dark text on gold |
| `line` `oklch(75% 0.11 85 / 0.22)` | borders — translucent gold |

- Gold is used **only** on: CTAs, icons, italic emphasis inside headings (`<em>`), eyebrow labels, translucent borders. Never as a large fill.
- Fonts (`<link>` in `index.html`): `font-display` = Libre Baskerville (serif, headings + card titles + short highlight numbers; italic `<em>` in `text-accent` for emphasis), `font-body` = IBM Plex Sans (nav, body, buttons, labels). Headings keep `font-light` (Libre Baskerville renders ~400).
- Buttons: square (`rounded-none`), uppercase, `tracking-[0.14em]`, `text-xs font-semibold`; primary hover lifts (`-translate-y-0.5`) and inverts to `fg`.
- Cards: `bg-card`, `border-line`, `rounded-sm` (0.25rem), no heavy shadow. Check icon = full circle, `size-8`, `border-line`, icon in `text-accent`.
- `.eyebrow` class = numbered section label (`02 — POR QUE A G&P`), uppercase gold, wide tracking. `.hairline` = `border-t border-line`.
- `src/index.css` — Tailwind directives + small `@layer base` (smooth scroll, gold `:focus-visible` outline, gold `::selection`, `scroll-margin-top`, reduced-motion). Accessibility is deliberate (skip link in `App.jsx`, `aria-*` on mobile menu) — preserve it.

## Placeholder content to confirm before publishing

`Sobre.jsx` (bios), `Servicos.jsx` (service cards), `FAQ.jsx` (answers), `TODO` fields in `src/data/contato.js` (email, LinkedIn). No photos — colored initials (NG / NP) stand in for portraits.

## Deploy — GitHub Pages

- Repo: `github.com/Leandrogbm/gimenesepires`, branch `master`.
- `.github/workflows/deploy.yml` builds and deploys to Pages on every push to `master` (and manual `workflow_dispatch`). No Vercel/Netlify.
- Custom domain **gimenesepires.com.br** — `public/CNAME` holds it (copied into `dist/` by Vite). Pages "custom domain" is also set via API.
- DNS is at **registro.br** (nameservers `a.auto.dns.br` / `b.auto.dns.br` — moved off Hostinger). Zone must have: 4× `A @` → `185.199.108/109/110/111.153`, `CNAME www` → `leandrogbm.github.io`.
- HTTPS: once DNS resolves, GitHub issues the Let's Encrypt cert automatically; then enable "Enforce HTTPS".
- No email/MX configured on the domain (registro.br default is null MX). Adding mail later is independent of the A/CNAME records.
