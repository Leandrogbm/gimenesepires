# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

- `npm run dev` — Vite dev server at `http://localhost:5173`
- `npm run build` — production build to `dist/`
- `npm run preview` — serve the built `dist/` locally
- `npm run lint` — oxlint (config in `.oxlintrc.json`; enforces React rules-of-hooks)

No test suite exists.

## Architecture

Single-page institutional site for Gimenes e Pires — Sociedade de Advogados (São José do Rio Preto, SP). React 19 + Vite + Tailwind (v3), plain `.jsx`, no router, no state management.

- `src/App.jsx` is the whole page: it stacks the section components (`Hero`, `Sobre`, `Atuacao`, `Diferenciais`, `Contato`) in order inside `<main>`, with `Header` / `Footer` outside. Navigation is anchor links to section `id`s — adding/reordering a section means editing `App.jsx` and the `LINKS` array in `src/components/Header.jsx`.
- `src/data/contato.js` — all contact info centralized here. Phones, WhatsApp, address, hours, Google rating and Instagram are real (from the Google Business Profile); email, LinkedIn and OAB numbers are still `TODO`. `google.mapaEmbed` / `google.url` are keyless Google Maps URLs built from an address string. Components import `CONTATO`; never hardcode contact data in a component.
- `src/components/Logo.jsx` — thin wrappers over the official brand assets in `public/brand/` (`logo.png`/`logo@2x.png` = full horizontal lockup; `icone.svg` = column/stars mark only). `Wordmark` (header) and `LogoMark` (`invert` prop for dark sections, since the artwork is black). Source pack: `../gimenes_pires_identidade_visual/`. Favicons are `public/favicon.ico` + `favicon-192/512.png` + `apple-touch-icon.png`.
- `src/components/GoogleReviews.jsx` — social-proof strip (rating + review count) linking to the Google listing; `tone="paper"` variant for dark sections.
- Brand tokens live in `tailwind.config.js`: colors `ink` (near-black), `paper` (light grey background), `wine` (deep bronze accent), `brass` (light gold, for dark sections); fonts `font-display` (Newsreader), `font-body` (Inter), loaded via `<link>` in `index.html`. Use these tokens, not raw hex. Section eyebrow labels use the `.eyebrow` class (numbered `01 — Sobre`).
- `src/index.css` — Tailwind directives plus a small `@layer base` (smooth scroll, focus-visible outline, `scroll-margin-top` for anchored sections, reduced-motion overrides). Accessibility is deliberate throughout (skip link in `App.jsx`, `aria-*` on the mobile menu) — preserve it.

## Placeholder content to confirm before publishing

Draft text the firm still needs to review: `src/components/Sobre.jsx` (partner bios), `src/components/Atuacao.jsx` (the 4 practice areas), and the `TODO` fields in `src/data/contato.js` (email, LinkedIn, OAB numbers). No real photos are used — colored initials (NG / NP) stand in for portraits. `src/components/Logo.jsx` is an SVG recreation of the logo; swap in the original vector if available.

## Deploy

`npm run build`, then serve `dist/`. On Vercel/Netlify: build command `npm run build`, output dir `dist`.
