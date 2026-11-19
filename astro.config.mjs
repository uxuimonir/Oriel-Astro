import { defineConfig } from "astro/config"
import sitemap from "@astrojs/sitemap"
import tailwindcss from "@tailwindcss/vite"
import pruneUnusedImages from "./integrations/prune-unused-images.mjs"

import sentry from "@sentry/astro";
import spotlightjs from "@spotlightjs/astro";

export default defineConfig({
  site: "https://oriel.photo",
  integrations: [sitemap(), pruneUnusedImages(), sentry(), spotlightjs()],
  vite: { plugins: [tailwindcss()] },
  image: { domains: ["framerusercontent.com"] },
})