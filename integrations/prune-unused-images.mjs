import { readdir, readFile, rm, stat } from "node:fs/promises"
import { join, relative } from "node:path"

const TEXT = /\.(html|css|js|xml|json|txt|webmanifest)$/i
const IMAGE = /\.(jpe?g|png|webp|avif|gif|svg)$/i

async function walk(dir) {
  const out = []
  for (const entry of await readdir(dir, { withFileTypes: true })) {
    const full = join(dir, entry.name)
    if (entry.isDirectory()) out.push(...(await walk(full)))
    else out.push(full)
  }
  return out
}

/**
 * Astro emits every eagerly imported source image into `_astro`, even when the
 * page only ever renders the optimised variants. This drops the originals that
 * nothing in the built output links to, which keeps the deploy small.
 */
export default function pruneUnusedImages() {
  return {
    name: "oriel:prune-unused-images",
    hooks: {
      "astro:build:done": async ({ dir, logger }) => {
        const root = dir.pathname
        const files = await walk(root)
        let haystack = ""
        for (const file of files) {
          if (TEXT.test(file)) haystack += await readFile(file, "utf8")
        }
        let removed = 0
        let bytes = 0
        for (const file of files) {
          if (!IMAGE.test(file)) continue
          if (!relative(root, file).startsWith("_astro")) continue
          const name = file.split("/").pop()
          if (haystack.includes(name)) continue
          bytes += (await stat(file)).size
          await rm(file)
          removed++
        }
        if (removed) logger.info(`pruned ${removed} unused image files (${(bytes / 1e6).toFixed(1)} MB)`)
      },
    },
  }
}
