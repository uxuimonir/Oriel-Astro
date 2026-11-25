# IMPLEMENTATION_PLAN.md

## Stack

Astro 5 (static output) · TypeScript · Tailwind CSS 4 (`@tailwindcss/vite`) · `@astrojs/sitemap` · `lucide-astro` · no React, no animation library.

## Architecture

```
src/
  data/content.ts        all copy, image hashes, CMS records (single source)
  layouts/Base.astro     head, SEO/OG, fonts, skip link, Nav, Footer, motion observer
  components/            Nav, Footer, Hero, Statement, SelectedWork, ProjectCard,
                         CommissionsBand, AboutBand, JournalBand, JournalRow,
                         CinematicBand, VoicesBand, RatesBand, FaqBand,
                         ContactBand, ContactForm, Ticker, Frame, Words, Reveal,
                         SectionHead, Button
  pages/                 index, work/index, work/[slug], journal/index,
                         journal/[slug], studio, contact, 404
public/photos/           62 original Framer photographs
```

CMS collections become typed arrays in `content.ts`; `/work/[slug]` and `/journal/[slug]` are generated with `getStaticPaths`, exactly as Framer generates its detail pages from the collections.

## Steps taken

1. Audited the Framer project through MCP: routes, sections, copy, CMS fields, fonts, colour tokens, type scale, motion specs, SEO strings.
2. Ported design tokens into `global.css` (`@theme` plus the exact type scale at Framer's own breakpoints: 0 / 390 / 810 / 1200).
3. Pulled all 62 photographs out of the Framer asset store and stored them locally.
4. Built the components, then the eight routes.
5. Re-created the motion with CSS + one IntersectionObserver.
6. SEO: per-page title/description/canonical/OG + sitemap + robots; `/404` is noindex.
7. QA with Playwright at 1200 / 810 / 390: no broken images, no horizontal overflow, page heights within a few percent of the Framer originals.

## Commands

```
npm install
npm run dev      # local
npm run build    # static site in dist/
npm run preview
```

Deploy `dist/` anywhere static (Vercel, Netlify, Cloudflare Pages, S3).

## Known, deliberate differences

- The contact form posts nowhere, because the Framer form has no destination configured either. Point it at a form endpoint when one exists.
- Framer's `/work` header says "44 frames"; the CMS holds 42 (7 × 6). The original wording is kept rather than invented over.
