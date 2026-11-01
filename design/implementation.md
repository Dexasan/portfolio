# Personal portfolio rebuild

2 November 2026

A narrow, portrait-led portfolio built from the agreed direction in this chat. Uses Yappie's charcoal, chalk, vermilion, print texture and contrasting condensed/serif typography. The generated ink portrait uses Sandesh's existing public photo as its identity reference. See portrait-prompt.md.

Home introduces Sandesh and links to work, his Road Rash backstory, master's preparation and his thoughts on private personal computing. Project archive retains all 12 projects and category filters. Yappie and DITCH have individual stories and their existing working visitor features.

Verification:
- Production build and Next.js TypeScript check.
- Phone visual inspection at 390px and 320px; desktop inspection at 1440px.
- Portrait control switches artwork and accessible pressed state.
- Archive engineering filter returns six projects without horizontal overflow.
- Local persistent wall message survives reload.
- Two local browser visitors match, deliver a private message and propagate the leave state.
- Public production chat was not seeded with QA messages.

Build uses Next.js's supported webpack option to avoid the local Turbopack Google-font resolution error in the existing CV. Scoped the existing print selector to the CV root and moved the site URL constant from the Next layout to lib/site.ts so the complete application passes the build.
