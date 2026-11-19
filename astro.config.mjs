import { defineConfig } from "astro/config"
import sitemap from "@astrojs/sitemap"
import tailwindcss from "@tailwindcss/vite"
import pruneUnusedImages from "./integrations/prune-unused-images.mjs"

export default defineConfig({
  site: "https://oriel.photo",
  integrations: [sitemap(), pruneUnusedImages()],
  vite: { plugins: [tailwindcss()] },
  image: { domains: ["framerusercontent.com"] },
})