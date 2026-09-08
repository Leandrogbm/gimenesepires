# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

- `npm run dev` — Vite dev server at `http://localhost:5173`
- `npm run build` — production build to `dist/`
- `npm run preview` — serve the built `dist/` locally
- `npm run lint` — oxlint (config in `.oxlintrc.json`; enforces React rules-of-hooks)

No test suite exists.

## Architecture

Single-page institutional site for the Gimenes & Pires law firm. React 19 + Vite + Tailwind (v3), plain `.jsx`, no router, no state management.

- `src/App.jsx` is the whole page: it stacks the section components (`Hero`, `Sobre`, `Atuacao`, `Diferenciais`, `Contato`) in order inside `<main>`, with `Header` / `Footer` outside. Navigation is anchor links to section `id`s — adding/reordering a section means editing `App.jsx` and the `LINKS` array in `src/components/Header.jsx`.
- `src/data/contato.js` — all contact info (phone, WhatsApp, email, address, socials, OAB numbers) centralized here. **Every value is a placeholder** and must be filled before publishing. Components import `CONTATO` from here; never hardcode contact data in a component.
- `src/components/Signature.jsx` — inline SVG of the two partners' joined signature, the brand's recurring motif. Color is a prop.
- Brand tokens live in `tailwind.config.js`: colors `ink` (navy), `paper` (ivory), `wine` (terracotta accent), `brass` (antique gold); fonts `font-display` (Newsreader) and `font-body` (Inter). Fonts are loaded via `<link>` in `index.html`. Use these tokens, not raw hex. Section eyebrow labels use the `.eyebrow` class (numbered `01 — Sobre`).
- `src/index.css` — Tailwind directives plus a small `@layer base` (smooth scroll, focus-visible outline, `scroll-margin-top` for anchored sections, reduced-motion overrides). Accessibility is deliberate throughout (skip link in `App.jsx`, `aria-*` on the mobile menu) — preserve it.

## Placeholder content to confirm before publishing

Draft text the firm still needs to review: `src/components/Sobre.jsx` (partner bios), `src/components/Atuacao.jsx` (the 4 practice areas), and all of `src/data/contato.js`. No real photos are used — colored initials (NG / NP) stand in for portraits.

## Deploy

`npm run build`, then serve `dist/`. On Vercel/Netlify: build command `npm run build`, output dir `dist`.
