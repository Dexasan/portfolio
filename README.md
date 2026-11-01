# Sandesh Chapagain — Portfolio

An illustrated editorial portfolio at [iamdex.xyz](https://iamdex.xyz), built with Next.js 16, React 19, and TypeScript.

The visual direction combines Yappie’s original print artwork with DITCH’s participatory studio: warm paper, charcoal, vermilion, locally hosted display/serif/body fonts, and custom SVG illustration.

## Development

Install with `pnpm install`, then use `pnpm dev`. Build with `pnpm build`.

The homepage features two explicitly labelled local demos. The Yappie exhibit cycles conversation prompts; the DITCH exhibit changes layout and admits a sample guest. Neither captures personal data or connects to a live session.

`lib/collection.ts` holds the twelve-project archive. `lib/project-notes.ts` holds detail-page copy and implementation limits. Project detail routes are statically generated. The About, Contact, résumé (`/cv`), and pitch deck (`/deck`) routes are retained.

## Publishing

The existing GitHub/Vercel integration deploys the production branch to the custom domain. Preserve this setup. Font licenses are included in `public/fonts/`; Yappie and DITCH artwork is reused from the owner’s projects.

See `DESIGN.md` and `PRODUCT.md` for the current presentation and content rules.
