# Oriel — natural-light photography template

Oriel is a complete photography portfolio built with **Astro 5** and **Tailwind CSS 4**:
six project series, a journal, a studio page, rates, FAQ and contact — all driven by one
content file, with a motion layer that mirrors the original design (scroll reveals,
word-by-word headlines, exposure-open images, count-up statistics, a ticker and cross-page
view transitions).

- Black by default, with a complete light palette one attribute away.
- Zero client frameworks. ~15 KB of hand-written JavaScript, no React/Vue runtime.
- Every photograph ships as a high-resolution source and is served as responsive WebP
  through Astro's built-in image pipeline.
- Fully static output: deploy to Netlify, Vercel, Cloudflare Pages, GitHub Pages or any
  bucket.
- Respects `prefers-reduced-motion` throughout.

## Requirements

- Node.js 18.20, 20.3, or 22+
- npm (or pnpm / yarn / bun)

## Getting started

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # static output in dist/
npm run preview  # preview the built site
```

Set your production domain in `astro.config.mjs` (`site:`) before building — it is used for
canonical URLs, Open Graph tags and the sitemap.

## Project structure

```
src/
  assets/photos/      High-resolution source photographs (optimised at build time)
  components/         Nav, Footer, bands, cards, Frame, motion primitives
  data/content.ts     Every string, number, image name and link on the site
  layouts/Base.astro  <head>, SEO, fonts, global motion scripts
  lib/images.ts       Maps a photograph's file name to its imported asset
  pages/              Routes: /, /work, /work/[slug], /journal, /journal/[slug],
                      /studio, /contact, 404
  styles/global.css   Design tokens, type scale, layout rhythm, motion
integrations/
  prune-unused-images.mjs   Drops unreferenced originals from the build output
```

## Editing the site

**Text, links and numbers** live in `src/data/content.ts`. Each export maps to a section:
`site`, `hero`, `statement`, `projects`, `work`, `workIndex`, `commissions`, `about`,
`studioHero`, `posts`, `journal`, `cinematic`, `voices`, `rates`, `faq`, `contact`,
`notFound`, `footer`.

**A new project series**: add an object to `projects` with seven images (opening,
establishing, detail, wide, motion, quiet, closing). It appears on the home page, in the
`/work` contact sheets, in the filter chips and gets its own `/work/<slug>` page.

**A new journal entry**: add an object to `posts`. Then choose where it shows:
`journal.featuredSlug` (the large block), `journal.gridSlugs` (the card grid) and
`journal.homeRows` (the rows on the home page).

**Photographs**: drop the file into `src/assets/photos/` and reference it by file name,
e.g. `cover: img("my-photo.jpg")`. `Frame.astro` generates the responsive `srcset`; pass
`sizes` so the browser downloads the right width, and `eager` for anything above the fold.

**Colour and type** are tokens at the top of `src/styles/global.css`. The template ships in
the **black theme** by default: every colour is a CSS variable on `:root`, so the whole site
re-skins from that one block. A full light palette is kept alongside it — add
`data-theme="light"` to the `<html>` tag in `src/layouts/Base.astro` to switch the site over,
or toggle the attribute at runtime for a theme switch. The three fonts load in `Base.astro`.

## Motion

| Effect | Where |
| --- | --- |
| Scroll reveal (opacity + rise) | `[data-reveal]`, `Reveal.astro` |
| Word-by-word rise and unblur | `[data-words]`, `Words.astro` |
| Exposure-open image, hover zoom | `[data-frame]`, `Frame.astro` |
| Count-up statistics | `[data-count]`, `Statement.astro` |
| Scroll parallax | `[data-parallax]` |
| Marquee ticker | `Ticker.astro` |
| Auto-hiding navigation | `Nav.astro` |
| Cross-page fade | `<ClientRouter />` in `Base.astro` |

All of it is cancelled under `prefers-reduced-motion: reduce`.

## Accessibility

Semantic landmarks, a skip link, visible focus, `aria-current` on the active navigation
item, alt text on every photograph, and accordion FAQs built on `<details>`.

## Credits

Photographs are free-licence work by their photographers; Mira Castell and Oriel are
fictional. Fonts: Archivo, Instrument Serif and DM Mono (Google Fonts, SIL Open Font
License). Replace the photographs with your own before launching a real site.
