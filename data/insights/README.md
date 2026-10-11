# Publishing Insights

Only reviewed, real articles belong in the registry; do not add placeholder entries or invented publication dates.

1. Create a server React component in this directory for the article body. Use semantic `h2`, `h3`, paragraphs, `ul`/`ol` and Next.js `Link` for internal links. The layout supplies the only `h1`, introduction, author, date and CTA. Use `ArticleCallout` and `ArticleTable` from `components/insights/article-layout.tsx` where useful. Keep heading levels sequential; provide descriptive link text and table column labels.
2. Import the component in `index.ts` and add an `Insight` entry to `insights`. Use a unique lowercase hyphenated slug, article title, concise introduction, unique `metadataTitle` and `description`, and the actual ISO 8601 `publishedAt` date (YYYY-MM-DD or a timestamp with timezone). Add `updatedAt` only for a real editorial update. Optional `readingMinutes` should reflect the body length. An optional image needs a public URL/path and descriptive alt text; use an article-specific social image when available.
3. Optional `relatedSlugs` links to real registry entries; unpublished or missing articles are omitted. Author identity and tracked Upwork/email CTAs are handled centrally. Link to relevant existing services and portfolio sections when they help the reader.
   Optional `authorBio` adds a verified author summary. Optional `cta` (`heading`, `href`, `linkText`) replaces the general article CTA with a restrained internal service link; use an existing tracking event only when its meaning matches the action.
4. Run `npm run lint` and `npm run build`. Review the rendered article on mobile and desktop, headings, links, tables, canonical/social metadata and JSON-LD before publishing.

The registry automatically feeds `/insights`, `/insights/[slug]`, metadata, Article and breadcrumb JSON-LD, and the sitemap. Unknown slugs return 404. Adding an entry publishes it at the next build; keep unfinished drafts outside the registry. Dates are never generated from the build time.
