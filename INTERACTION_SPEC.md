# INTERACTION_SPEC.md — motion, read out of the Framer file

Every value below was read from the Framer nodes (`appearEffect`, `textEffect`, `hoverEffect`, `tickerEffect`), not invented.

| Interaction | Framer spec | Astro implementation |
|---|---|---|
| Section reveal | `appearEffect`, trigger `onInView`, threshold 0.15, replay false, enter `opacity 0 → 1`, `y 36 → 0`, spring 0.9s bounce 0.18, stagger 0.08s | `[data-reveal]` + IntersectionObserver (threshold 0.15, unobserve after), CSS transition 0.9s `cubic-bezier(0.22,1,0.36,1)`, per-item `--reveal-delay` for the stagger |
| Heading text effect | `textEffect`, trigger `onInView`, threshold 0.2, tokenization `word`, `opacity 0`, `y 22px`, `blur 5px`, spring 0.9s bounce 0.18, delay 0.05s | `Words.astro` splits on spaces; each word is an inline-block span with `transition-delay: i × 0.05s` |
| Hero / page-load entry | `appearEffect` trigger `onMount`, tween `[0.22,1,0.36,1]`, title row 0.8s `y 24`, hero image 1.2s `scale 1.06` | Same curve and durations; hero image is eager-loaded and opens from `scale(1.06)` |
| Image hover | `hoverEffect` `scale 1.03`, tween `[0.22,1,0.36,1]`, 0.6s | `[data-frame][data-hover]:hover img` |
| Type band | `tickerEffect` velocity 36, hover modifier 40% | CSS marquee, 38s linear loop, paused on hover |
| Navbar | Navbar component has Desktop / Tablet / Phone / Phone Open plus hidden variants (hide on scroll down) | Fixed header, transform to `-100%` when scrolling down past 180px, drawer opens with a `grid-template-rows 0fr → 1fr` transition, 0.4s, same easing |
| FAQ accordion | FAQ Accordion component, one question open at a time | Native `<details name="faq">` — one open at a time, works without JS, `+` rotates 45° |
| Work index filters | Filter chips: All + the six series | Buttons toggle `hidden` on frames; All restores |
| Contact form | Form container with Submit Button variants Default / Pending / Success / Error | Real `<form>`; the button steps through Sending… → Thank you, and the note points at `studio@oriel.photo` (the Framer form has no destination set either) |
| Reduced motion | — | `prefers-reduced-motion` disables all of the above and shows everything at rest |
