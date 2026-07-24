# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

- `npm run dev` — start the Next.js dev server
- `npm run build` — production build
- `npm run start` — run the production build
- `npm run lint` — run ESLint (`next/core-web-vitals` config, with `@next/next/no-img-element` disabled — plain `<img>` tags are allowed)

There is no test suite configured in this project.

## Architecture

This is a Next.js 14 App Router project (JavaScript, not TypeScript) for a food-sharing site called "NextLevel Food." It's an early-stage project scaffolded from a Udemy course, so most routes are still placeholder pages.

- **Routing**: File-based routing under `app/`. Current routes:
  - `/` — landing page with links to the other sections
  - `/meals` — meal listing (placeholder)
  - `/meals/[mealId]` — dynamic meal detail route; note `params` is a Promise and must be awaited (Next.js 14 async params convention): `const { mealId } = await params;`
  - `/meals/share` — form for sharing a new meal (placeholder)
  - `/community` — community page (placeholder)
- **Layout**: `app/layout.js` defines the root HTML shell, page metadata, and a shared decorative SVG header background used across all pages.
- **Path alias**: `@/*` maps to the project root (configured in `jsconfig.json`).
- **Static assets**: `assets/` holds source images (used at build time), `public/images/` holds images served directly. Keep this distinction when adding new images.
