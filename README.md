# danielpachon.github.io

My personal portfolio: **[danielpachon.github.io](https://danielpachon.github.io)**

A fast, bilingual (English and Spanish) static site built with [Astro](https://astro.build) and deployed to GitHub Pages with GitHub Actions.

![Portfolio preview](public/og.png)

## Highlights

- **Bilingual routes** (`/` and `/es/`) with `hreflang` alternates, and a first-visit redirect for Spanish-speaking browsers.
- **Light and dark themes** that follow the system setting and remember the visitor's choice, applied before first paint to avoid a flash.
- **SEO ready**: canonical URLs, Open Graph image, `Person` structured data, sitemap and `robots.txt`.
- **Optimized images** served as responsive WebP through `astro:assets`.
- **Accessible**: semantic sections, skip link, visible focus, keyboard-friendly controls and reduced motion support.
- **Content in one typed file** (`src/i18n/content.ts`), so both languages always stay in sync.

## Development

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # type-checks and builds to dist/
```

Pushing to `main` deploys automatically through `.github/workflows/deploy.yml`.

## License

Code under the MIT license. Personal content, photo and CV © Daniel Pachón.
