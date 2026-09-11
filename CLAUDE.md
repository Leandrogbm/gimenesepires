# CLAUDE.md

Guidance for Claude Code working in this repo.

## Commands

- `npm run dev` — Vite dev server (`http://localhost:5173`, next free port if taken)
- `npm run build` — production build to `dist/`
- `npm run preview` — serve the built `dist/`
- `npm run lint` — oxlint (`.oxlintrc.json`; enforces React rules-of-hooks)

No test suite.

## Architecture

Multi-page conversion site for **Gimenes e Pires — Sociedade de Advogados** (São José do Rio Preto, SP). React 19 + Vite + Tailwind v3, plain `.jsx`, no state lib, no router **library** — but real hash-based routing, hand-rolled in `App.jsx` (`ROTAS` map path → component, `useRota()` hook on `hashchange`). Hash routing (not `BrowserRouter`) is deliberate: GitHub Pages serves static files with no server-side rewrite, so a direct link/refresh to a `/path` would 404 — a `#/path` hash never reaches the server.

- Firm-wide (not one practice area); every page funnels to WhatsApp. Routes: `/` → `pages/Home.jsx` (`Hero` + `Confianca`), `/atuacao` → `Servicos`, `/advogados` → `Sobre`, `/duvidas` → `FAQ`, `/contato` → `Contato`. `Header`/`Footer` render on every route, outside `<main>`. Nav = real page links (`LINKS` in `Header.jsx`, `{ path, label }`), highlighted via `rota` prop (`aria-current="page"` + `text-accent`) — not anchor scrolling. The skip link (`#conteudo`) is a bare hash without a leading `/`; `useRota()` ignores any hash that isn't `/...`, so it behaves as a normal same-page anchor instead of triggering navigation. Reorder/add a page = add to `ROTAS` in `App.jsx` + `LINKS` in `Header.jsx`. Section-level `id`s (`atuacao`, `sobre`, etc.) are leftover from the single-page version and no longer do anything — harmless, not worth stripping.
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

`Sobre.jsx` (bios of the 4 sócios), `FAQ.jsx` (answers), `TODO` fields in `src/data/contato.js` (email, LinkedIn, `oabMarco`/`oabGiovana`). No photos — colored initials stand in for portraits. `Servicos.jsx` lists the 8 real practice areas (from the firm's actual case load, not invented), each with a small hand-drawn line icon (`IconBase` + one `<Icon*>` per area) instead of a photo — keep new areas in that same minimal-primitives style (line/rect/circle), no icon library.

## Deploy — GitHub Pages

- Repo: `github.com/Leandrogbm/gimenesepires`, branch `master`.
- `.github/workflows/deploy.yml` builds and deploys to Pages on every push to `master` (and manual `workflow_dispatch`). No Vercel/Netlify.
- Custom domain **gimenesepires.com.br** — `public/CNAME` holds it (copied into `dist/` by Vite). Pages "custom domain" is also set via API.
- DNS is at **registro.br** (nameservers `a.auto.dns.br` / `b.auto.dns.br` — moved off Hostinger). Zone must have: 4× `A @` → `185.199.108/109/110/111.153`, `CNAME www` → `leandrogbm.github.io`.
- HTTPS: once DNS resolves, GitHub issues the Let's Encrypt cert automatically; then enable "Enforce HTTPS".
- No email/MX configured on the domain (registro.br default is null MX). Adding mail later is independent of the A/CNAME records.

## Analytics

Google Analytics 4 is wired in `index.html` (`G-5N2GLDRFHW`), guarded to only load when `location.hostname === "gimenesepires.com.br"` (never fires on localhost/preview). Since routing is client-side hash (`#/path`), GA's automatic pageview is disabled (`send_page_view: false`) — `App.jsx`'s route-change effect fires `gtag('event', 'page_view', ...)` manually per route, and also sets `document.title` per `TITULOS`. Dashboard: analytics.google.com, under the firm's Google account — that's the "private page" for metrics; no custom auth/dashboard was built into the site itself. GA4 doesn't expose raw visitor IP or identity (by design/privacy law) — only aggregated pageviews, engagement time, and coarse geo.
