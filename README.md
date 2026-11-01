# Sandesh Chapagain — Portfolio

A dark, computer-inspired portfolio at [iamdex.xyz](https://iamdex.xyz), built with Next.js 16, React 19, and TypeScript. The visual system follows Yappie: charcoal, warm chalk, vermilion, original ink artwork, and locally hosted fonts.

## Development

Install with `pnpm install`, then use `pnpm dev`. Build with `pnpm build`.

The homepage computer switches between Yappie, DITCH, and a code view. Yappie’s section pairs real website visitors in anonymous text conversations. DITCH’s section is a persistent public chat wall. Public updates refresh every five seconds; matching and private messages refresh every three seconds.

The service is a separate Sites-hosted Cloudflare Worker and D1 database, isolated from Yappie’s production app. `NEXT_PUBLIC_LIVE_API_URL` can override the default endpoint for development. For local two-visitor checks, use localhost and 127.0.0.1 as separate browser origins with the local service on port 8788.

`lib/collection.ts` holds the twelve-project archive; `lib/project-notes.ts` holds detail-page copy. The résumé (`/cv`) and pitch deck (`/deck`) remain available.

## Publishing

The GitHub/Vercel integration publishes the production branch to the custom domain. The live service is deployed separately through the Sites workflow. Its authored checkout is at `C:\Users\sande\Documents\Codex\2026-11-01\portfolio-live`; its public endpoint is the default in `lib/live-client.ts`. No credentials are bundled in the frontend.

Font licenses are in `public/fonts/`. See DESIGN.md for the current visual direction.
