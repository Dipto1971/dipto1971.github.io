# dipto1971.github.io

Personal portfolio of Mahir Faysal Haque Dipto - Full Stack Engineer.
Next.js 14 (App Router) + TypeScript + Tailwind CSS, statically exported and
deployed to GitHub Pages by `.github/workflows/nextjs.yml`.

## Development

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # static export into ./out
```

## Structure

```
app/
  layout.tsx        Root layout: fonts, metadata, JSON-LD, header/footer shell
  template.tsx      Per-route fade transition (client-side tab switching)
  page.tsx          Overview: hero, facts, about, skills
  experience/       Professional experience
  projects/         Selected projects
  research/         Publications
  education/        Education and background
  sitemap.ts        /sitemap.xml
  robots.ts         /robots.txt
components/
  layout/           Site header (tabs), footer, theme provider/toggle, transition
  sections/         Data-driven content blocks
  ui/               Page header, section, tag list, link list primitives
data/                Content source of truth (profile, about, experience, ...)
lib/nav.ts           Tab definitions, shared by the header and sitemap
```

Content lives in `data/` - edit those files to update the site; components take
no hard-coded copy.

## Notes

- `next.config.js` sets `output: "export"` and `trailingSlash: true`; the Pages
  workflow uploads `./out`.
- Images are unoptimized because the static export has no image server.
- Theme is light/dark via `next-themes` with a `class` strategy; colours are CSS
  variables in `app/globals.css` exposed as Tailwind tokens.
