# SEO Implementation Notes

## Page Titles & Meta Descriptions

Each page has a unique title and meta description optimized for party decor / balloon rental search terms:

| Page | Title Focus | Keywords |
|------|-------------|----------|
| index.html | Balloon Decor & Party Rentals, Westchester County | balloon arch rental, balloon decor Ardsley NY, party rentals Westchester |
| shop.html | Shop Party Decor Rentals | balloon arch rental, backdrop rental NY, light up numbers, props |
| packages.html | Event Decor Packages | balloon arch packages, birthday/wedding/baby shower decor |
| quotation.html | Request a Quote | party decor quote, event rental quote Westchester |
| product.html | Dynamic per product (updated via Vue) | set from product name + description |
| cloudinary-structure.html | noindex — internal tool | — |

## Open Graph & Twitter Cards

All indexable pages include:
- `og:type`, `og:url`, `og:title`, `og:description`, `og:image`, `og:site_name`
- `twitter:card` (summary_large_image), `twitter:title`, `twitter:description`, `twitter:image`

The `og:image` defaults to `https://partytheme.lk/images/logo_result.webp`. On `product.html`, Vue updates `og:image` dynamically to the actual product image once loaded.

## Schema.org Structured Data (index.html)

Two JSON-LD blocks are embedded:

1. **LocalBusiness** — company name, address (Ardsley, NY), service area (Westchester County), offer catalog (balloon arch, garland, backdrop, centerpiece, event packages).
2. **FAQPage** — four Q&A pairs covering service area, event types, booking process, and eco-friendly balloons.

## Canonical URLs

Each indexable page has `<link rel="canonical" href="https://partytheme.lk/[page].html">`.

## Heading Hierarchy

- index.html: H1 (sr-only, SEO-facing) → H2 (section headings) → H3 (sub-headings)
- Other pages follow Bootstrap card `h5` patterns; H1 is the page-level title where present.

## Image Optimization

- All product images use dynamic `:alt` bindings with product name + "— party decor rental"
- Static images use descriptive alt text
- Below-fold images use `loading="lazy"`
- Cloudinary delivery URLs are already optimized (CDN, format negotiation)

## Internal Linking

Footer navigation on all pages links to: Home, About (index.html#about), Shop, Packages, Quotation.

## Sitemap & robots.txt

- `sitemap.xml` — lists all 5 indexable pages with priority and changefreq
- `robots.txt` — allows all crawlers, disallows `/cloudinary-structure.html` and `/docs/`, points to sitemap

## Dynamic SEO (product.html)

`_js/pages/product.js` calls `updatePageMeta()` after fetching product data, updating:
- `document.title`
- `meta[name="description"]`
- `meta[property="og:title"]`
- `meta[property="og:description"]`
- `meta[property="og:image"]`

## Future SEO Tasks

- Add real contact email and phone number to footer and LocalBusiness schema
- Implement BreadcrumbList schema on shop and product pages
- Add Review/AggregateRating schema once real reviews are collected
- Consider adding a dedicated `/blog` or `/services` page with location-specific content
- Monitor Core Web Vitals via Google Search Console after deployment
