# danielpachon.github.io

My personal portfolio: **[danielpachon.github.io](https://danielpachon.github.io)**

A fast, bilingual (English and Spanish) static site built with [Astro](https://astro.build), animated with [GSAP](https://gsap.com) and [Lenis](https://lenis.darkroom.engineering), and deployed to GitHub Pages with GitHub Actions.

![Portfolio preview](public/og.png)

`public/og.png` is a screenshot of the live hero (1200×630).

## Highlights

- **A career transit map**: Software, Data and Sales are three lines that meet at an interchange (the portrait) and run on to the destination. Experience is a set of strip maps, the stack is stops on a line, and work not built yet is a dashed route. The design system is recorded in `DESIGN.md`.

- **Bilingual routes** (`/` and `/es/`) with `hreflang` alternates, and a first-visit redirect for Spanish-speaking browsers.
- **Motion with intent**: one GSAP intro, once per session, where the lines draw in, bend into a bundle, meet at the portrait and run to the terminus (with SplitText on the name). The strip maps fill with the scroll. Smooth scrolling with Lenis, kept in sync with ScrollTrigger.
- **No framework runtime**: plain Astro components plus one small motion script.
- **Reduced motion respected**: with `prefers-reduced-motion`, there is no intro, no smooth scrolling and no scroll-linked effects.
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
