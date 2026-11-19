/**
 * Every photograph ships as a high-resolution source in `src/assets/photos`
 * and is served through Astro's image pipeline (AVIF/WebP, responsive widths).
 * Content refers to a photograph by its file name only.
 */
const files = import.meta.glob<{ default: ImageMetadata }>(
  "../assets/photos/*.{jpg,jpeg,png,webp}",
  { eager: true }
)

const byName = new Map<string, ImageMetadata>(
  Object.entries(files).map(([path, mod]) => [path.split("/").pop()!, mod.default])
)

export function photo(name: string): ImageMetadata {
  const key = name.replace(/^.*\//, "")
  const found = byName.get(key)
  if (!found) throw new Error(`Unknown photograph: ${name}`)
  return found
}
