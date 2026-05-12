# Sandesh Chapagain — Portfolio

---

## About

Junior developer and co-founder. I build infrastructure for live media — RTMP relay engines, WebRTC pipelines, browser-native studio tooling.

I co-founded Ditch while in my first year of Engineering Sciences at Università degli Studi di Roma Tor Vergata. I designed and built the full technical stack: monorepo architecture, database schema, REST API, real-time server, WebRTC integration, canvas compositor, RTMP relay, and the studio UI.

Before writing production code I ran the growth systems behind BarcaBuzz, a football community that reached 100K+ followers organically. That taught me that repeatable systems beat individual effort at every scale.

Looking for early-stage infrastructure and product engineering roles.

---

## Contact

- **Email:** sandeshchapagain2060@gmail.com
- **GitHub:** github.com/Dexasan
- **Phone:** +39 344 594 6149

---

## Timeline

| | |
|--|--|
| 2026 – Present | Co-founder & engineer — Ditch |
| May 2026 | Startcup Lazio 2026 competition entry |
| Dec 2024 – Present | Engineering Sciences, B.Sc. — Università degli Studi di Roma Tor Vergata |
| Prior | Growth Systems Lead — BarcaBuzz (100K+ community) |

---

## Stack

TypeScript · Node.js · Next.js 14 · Fastify · Socket.io · WebRTC · Agora SDK · ffmpeg · Canvas API · Web Workers · Supabase · PostgreSQL · Docker · Railway · Vercel · Turborepo

---

## Projects

---

### Ditch
**Status:** Live in production
**Live site:** https://ditch-web-drab.vercel.app

A browser-based live studio that streams to every major platform simultaneously and lets any viewer join the broadcast live from anywhere.

The creator streams from the DITCH tab — no OBS, no hardware encoder. DITCH pushes that stream to Twitch, YouTube, TikTok, and Kick at the same time via RTMP. Any viewer on any of those platforms can enter the creator's channel, grant camera access, and appear live on the broadcast within 60 seconds — visible to audiences across all platforms at once.

**What I built:**

*Backend:* Fastify REST API with Supabase JWT authentication and row-level security. Full session lifecycle (create, go live, end), RTMP destination management with credentials stored server-side only, participant state machine (waiting → approved → live → removed). Supabase Postgres with 6 tables, custom triggers, and RLS policies across the full schema.

*Real-time layer:* Socket.io server handling unified chat aggregation from all connected platforms, participant signaling, and live session state broadcast to all connected viewers. Anonymous connections supported.

*RTMP relay:* Raw WebSocket server — not Socket.io — for zero-overhead binary frame piping. Receives the composite H.264 stream from the browser, passes it through ffmpeg, and fans it out to all RTMP destinations simultaneously using the ffmpeg tee muxer (`onfail=ignore` keeps surviving destinations alive if one drops). Stream encoded once, pushed everywhere.

*Canvas compositor:* Background-tab-safe video compositor running at stable 30fps regardless of tab visibility. Uses an inline Web Worker for the frame timer (Workers are not subject to browser background-tab throttling), the Breakout Box API (`MediaStreamTrackProcessor` / `MediaStreamTrackGenerator`) to read decoded frames directly from the WebRTC pipeline, and `VideoFrame` objects for compositing. Layout adapts dynamically to participant count — solo, side-by-side, split rows, 2×2 grid.

*Browser studio:* Full studio layout with a live composite preview canvas, scene system (each scene owns its own layer configuration), draggable camera overlay, FPS toggle, unified chat, participant queue, and a Go Live control that arms the relay. Built in Next.js 14 App Router with Zustand for studio state.

*Infrastructure:* pnpm monorepo + Turborepo with four apps (`web`, `api`, `realtime`, `relay`) and two shared packages (`types`, `db`). Frontend on Vercel, API + realtime + relay on Railway, database on Supabase.

**Stack:** Next.js 14 · TypeScript · Fastify · Socket.io · WebRTC · Agora SDK · ffmpeg · Canvas API · Web Workers · Supabase · Railway · Vercel · Turborepo

**Metrics:**
- Stream startup latency: 4–6s
- Compositor: stable 30fps with tab backgrounded
- Up to 5 platforms simultaneously
- Viewer → on-screen participant: under 60 seconds

---

### Ditch Studio
**Status:** In progress

The browser-native studio inside Ditch. A full OBS-style production environment that runs entirely in a browser tab — no install, no hardware encoder, no external software.

**Layout:** Fixed top bar with live status and Go Live control, left sidebar (Layers + Scenes panels), 16:9-locked center preview showing the actual composite output, collapsible right panel (chat, participant queue, settings).

**Scene system:** Each scene independently owns camera visibility and camera position/size. Switching scenes instantly applies that scene's configuration to the compositor — the preview updates in real time without interrupting the outbound stream.

**Camera overlay:** Draggable, resizable selection box over the preview. Drag to reposition, drag corner handles to resize. Position is stored per-scene. When in auto-grid mode, the overlay shows where the camera sits in the automatic layout and can be grabbed to go custom immediately.

**Layers panel:** Camera layer with permission-gated enable (permission dialog only fires when the user explicitly turns the camera on, not on page load). Screen capture layer appears when screensharing is active. Layer visibility toggled per-scene.

**Stack:** Next.js · TypeScript · Canvas API · OffscreenCanvas · Web Workers · Breakout Box API · Agora SDK · Zustand

---

### Startcup Lazio 2026
**Status:** Submitted May 2026

Full entry for Italy's leading university startup competition, submitted through Università degli Studi di Roma Tor Vergata.

Produced the complete business submission package for Ditch: executive summary, 12-slide pitch deck with speaker script, Business Model Canvas, and full business plan covering market sizing, competitive landscape, revenue model, go-to-market, and financial projections.

**Market:** Live streaming is a $1.49B market growing at 24% annually, projected to reach $6.8B by 2030. Beachhead: mid-tier creators (1K–100K followers) with multi-platform audiences — estimated 200K–500K globally. 1% conversion at Pro tier = €1M+ ARR before any brand revenue.

**Revenue model:**

| Tier | Price | Platforms | Participants |
|------|-------|-----------|--------------|
| Starter | €15/mo | 2 | 2 |
| Pro | €39/mo | 5 | 6 |
| Studio | €99/mo | Unlimited | 12 |

DITCH Ads (Day 30+): brand video scheduled into a sponsored participant slot — baked into the composite stream, simultaneous across all platforms, unskippable. Target CPM €12–18 (3–4× effective reach vs. single-platform). 60/40 revenue split (creator/DITCH).

**Competitive position:** Ditch controls the composite stream origin. The composed frame — with participants already baked in — is built before it reaches any platform. No platform can replicate cross-platform simultaneous participant broadcast from inside its own ecosystem.

---

### BarcaBuzz
**Status:** Complete

Built the analytics and content-growth infrastructure behind a football community that reached 100K+ followers organically — no paid acquisition.

Designed and operated a structured content pipeline with per-post performance tracking, systematic A/B testing across format variables (hook structure, caption length, thumbnail style, posting time), and engagement feedback loops that fed directly back into content decisions.

Key insight: save rate is a better predictor of long-tail reach than immediate engagement. Optimizing for the right metric changes what you build. The pipeline removed creative decision-making from production — the system determined what to make next.

**Outcome:** 100K+ followers, zero paid spend, approximately 12 months from zero.

---

### RTMP Stream Tools
**Status:** Complete

Internal CLI toolkit for testing and debugging RTMP pipelines, built to speed up relay development iteration.

- `sim` — pushes a synthetic test stream (color-bar pattern with timecode overlay, or a video file) to any RTMP endpoint via ffmpeg. Used to test relay behavior without a live browser session.
- `validate` — parses ffmpeg output configurations and checks H.264 encoding flags, keyframe interval, and GOP size against known platform-specific failure modes.
- `monitor` — live terminal dashboard of Node Media Server session state: active sessions, input bitrate, output destinations, reconnection events.
- `probe` — ffprobe wrapper; inspects codec, bitrate, resolution, and frame rate of a live RTMP stream.

**Stack:** Node.js · TypeScript · ffmpeg · Node Media Server · Commander.js

---

### Learning Projects
**Status:** Ongoing

University coursework (Engineering Sciences, Tor Vergata) and self-directed systems programming. Calculus, linear algebra, algorithms and data structures, C systems programming (process management, file I/O, memory management, BSD sockets).

TypeScript projects that fed directly into production: a typed event emitter (generic event maps, no `any`), a promise concurrency queue (cap N parallel promises — used in the relay to limit simultaneous RTMP connection attempts), and a WebSocket reconnect wrapper with exponential backoff and jitter that became the basis for relay auto-reconnect.

---

---

# Build Plan

## Tech Stack

| Layer | Choice |
|-------|--------|
| Framework | Next.js 15 (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS v4 |
| Animation | Framer Motion |
| Content | MDX for case studies |
| Deployment | Vercel |
| Package manager | pnpm |

---

## Phase 1 — Scaffold

- [ ] `pnpm create next-app@latest portfolio --typescript --tailwind --app --turbopack`
- [ ] Routes: `/` · `/work` · `/work/[slug]` · `/about` · `/contact`
- [ ] Shared layout: nav + footer
- [ ] Push to GitHub → connect Vercel

---

## Phase 2 — Content

- [ ] `lib/projects.ts` — typed project metadata (slug, title, status, stack, excerpt, metrics)
- [ ] `content/projects/` — one MDX file per case study
- [ ] `generateStaticParams` on `work/[slug]`
- [ ] `generateMetadata` on every page
- [ ] All pages rendering real copy

---

## Phase 3 — Design

*To be defined with /impeccable*

---

## Phase 4 — Polish & Launch

- [ ] Lighthouse audit
- [ ] Mobile QA
- [ ] `robots.txt`, `sitemap.xml`, Vercel Analytics
- [ ] CV PDF in `/public`
- [ ] Custom domain
