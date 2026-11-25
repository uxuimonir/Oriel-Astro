# PAGE_STRUCTURE.md — every route and section

| Framer route | Astro file | Sections, in order |
|---|---|---|
| `/` | `src/pages/index.astro` | Navbar · Hero · Statement (+ 3 stats) · Selected work (mosaic of 6) · Type band (ticker) · Commissions (4 service rows) · About Band · Journal (5 rows) · Cinematic Band · Voices Band (4 quotes) · Rates Band (3 plans) · FAQ Band (6) · Contact Band · Footer |
| `/work` | `src/pages/work/index.astro` | Header "Every frame, in order." + filter chips (All + 6 series) · Contact sheet (42 frames, labelled Opening / Establishing / Detail / Wide / Motion / Quiet / Closing) · Commissions · Contact Band |
| `/work/:slug` | `src/pages/work/[slug].astro` | Project hero (number, title, intro, body, Year / Location / Hours / Client) · Cover · Sequence (establishing + aside, pull quote, detail + body two/three, wide, quiet + motion) · Credits Band · Closing image · Next series · Contact Band |
| `/journal` | `src/pages/journal/index.astro` | Header + image · Entries (5 rows with standfirst) · Voices Band · Contact Band |
| `/journal/:slug` | `src/pages/journal/[slug].astro` | Article header (category · date · read) · Figure (portrait or landscape cover, as flagged in the CMS) · Body (intro, paragraphs, signature) · More Band · Contact Band |
| `/studio` | `src/pages/studio.astro` | Studio hero (+ 4 facts, image) · About Band · Commissions · Voices · Rates · FAQ · Contact Band |
| `/contact` | `src/pages/contact.astro` | Contact (with form) · Rates Band · FAQ Band · Brief Band (5 things to send) |
| `/404` | `src/pages/404.astro` | "We lost the light." · Selected work · Contact Band |

Shared chrome: `Nav.astro` (hide-on-scroll, mobile drawer) and `Footer.astro` on every page via `src/layouts/Base.astro`.
