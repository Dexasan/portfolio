# Sandesh Chapagain — Portfolio

A case-study-led engineering portfolio built with Next.js 16 and TypeScript.

The site is intentionally selective. Ditch, Roadrash, ArchScale, and
VerityLedger are presented as full case studies because they best demonstrate
systems thinking, product judgment, and implementation depth. Smaller
repositories appear as an engineering notebook rather than being inflated into
equivalent “featured projects.”

## Local development

```bash
pnpm install
pnpm dev
```

## Production checks

```bash
pnpm lint
pnpm build
```

The production deployment is hosted on Vercel. Set `NEXT_PUBLIC_SITE_URL` when
using a custom domain so canonical, Open Graph, robots, and sitemap URLs resolve
to the final host.
