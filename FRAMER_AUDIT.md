# FRAMER_AUDIT.md — Oriel

Source of truth: the Framer project **Oriel** (`eb6jMfzMSh5tAH8JSYSl`, branch `main`), read directly through the Framer MCP tools. Published site: https://oriel.framer.photos/

Everything below was read out of the project. Nothing is guessed.

## Fonts

| Role | Family | Weights used |
|---|---|---|
| Sans / display | **Archivo** | 300, 400, 500 |
| Serif accent | **Instrument Serif** | 400, 400 italic |
| Mono / meta | **DM Mono** | 400, 500 |

## Text style presets (exact sizes per breakpoint)

Breakpoints in Framer: `default ≥1200px`, `medium ≥810px`, `small ≥390px`, `extraSmall ≥0`.

| Preset | 1200 | 810 | 390 | 0 | line-height | letter-spacing |
|---|---|---|---|---|---|---|
| Hero | 140 | 96 | 56 | 44 | 0.9em | −0.045em |
| Hero Serif | 148 | 100 | 60 | 46 | 0.9em | −0.02em |
| Display XL | 96 | 72 | 44 | 34 | 0.92em | −0.04em |
| Display L | 68 | 52 | 36 | 36 | 0.95em | −0.035em |
| Display L Serif | 72 | 56 | 40 | 40 | 0.95em | −0.01em |
| Display M | 52 | 40 | 30 | 30 | 1em | −0.03em |
| Lead | 24 | 22 | 20 | 20 | 1.35em | −0.01em |
| Body | 18 | 17 | 16 | 16 | 1.55em | — |
| Small | 15 | 15 | 14 | 14 | 1.5em | — |
| Meta (DM Mono) | 12 | 12 | 11 | 11 | 1.5em | 0.07em |
| Quote (Serif) | 52 | 40 | 30 | 30 | 1.04em | −0.01em |
| Button | 15 | 15 | 14 | 14 | — | — |
| Logo | 18 | 17 | 16 | 16 | 1em | 0.01em |

## Colour tokens

| Token | Light | Dark |
|---|---|---|
| Salt / Page | rgb(241, 238, 231) | rgb(12, 13, 13) |
| Stone / Raised | rgb(230, 226, 216) | rgb(27, 26, 24) |
| Basalt | rgb(18, 19, 18) | — |
| Ash | rgb(94, 96, 91) | — |
| Dusk | rgb(28, 27, 25) | — |
| Night | rgb(13, 14, 14) | — |
| On Dark | rgb(239, 238, 233) | — |
| Ash Night | rgb(156, 157, 151) | — |
| Blue Hour | rgb(51, 70, 211) | rgb(142, 155, 255) |
| Hairline | rgba(18, 19, 18, 0.14) | rgba(237, 235, 229, 0.16) |

Series tints: Tide Tables rgb(221,229,228) · Low Cloud rgb(225,227,229) · Sea Hours rgb(220,228,236) · Salt Line rgb(239,226,214) · After Midnight rgb(16,18,31) · Limewash rgb(243,239,230).

## Components in the Framer file

Navbar (7 variants incl. Phone Open and hidden-on-scroll), Footer (3), Button (14), Plan Card (3), Journal Row (4), Stat (3), Project Caption (2), FAQ Accordion (7), Service Row (3), Project Card (Portrait / Landscape / Feature + hover each), Step Card (unused on live pages), Quote Card (2), Submit Button (5).

## CMS collections

- **Projects** (`U7jrJBhvF`) — 6 items. Fields: Title, Slug, Number, Kind, Meta, Year, Location, Hours, Client, Intro, Body, Aside, Pull quote, Body two, Body three, 7 images (Feature, Establishing, Detail, Wide, Motion, Quiet, Closing) with captions, 4 credit label/value pairs, Next series reference, Code.
- **Journal** (`N0YxnF4Fs`) — 5 items. Fields: Title, Slug, Content (rich text), Category, Date, Read time, Standfirst, Cover, Caption, Portrait cover (boolean), Intro, Signature.

## Layout rhythm

Sections: `120px` top / `160px` bottom padding on desktop, `48px` side padding, content capped at `1536px`. Selected-work rows are spaced `120px` apart; cards sit in a 46% / 1fr, 68%-right, 1fr + 34%, 100% mosaic.

## SEO read from Framer

Every page carries its own title, description and social image; `/404` is `noIndex`. Those exact strings are reused in the Astro build.
