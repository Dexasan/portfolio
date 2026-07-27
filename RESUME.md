# SANDESH CHAPAGAIN

**Backend & Infrastructure Engineer — real-time media and distributed systems**

sendmailtodex@gmail.com · (+39) 344 594 6149 · Rome, Italy · Open to relocation

[iamdex.xyz](https://iamdex.xyz) · [github.com/Dexasan](https://github.com/Dexasan)

---

## Profile

Backend and infrastructure engineer working on real-time media. Founder and sole engineer of **Ditch**,
a browser-based streaming studio in production — it composes, encodes and goes live to YouTube, Twitch,
TikTok and Kick from a single tab. I also build small, inspectable systems tools in the open.
Second-year Engineering Sciences at Tor Vergata, looking for infrastructure and product engineering
roles.

---

## Selected Work

### [Ditch](https://ditchlive.app) — Browser-Based Live Streaming Studio
**Founder & Sole Engineer · Startcup Lazio 2026 · Live in production** — Jan 2026 – Present

- **Studio in the browser:** canvas compositor with scenes, layers and a live preview, holding 30fps
  even with the tab backgrounded — no install, no hardware encoder.
- **Encode once, push everywhere:** WebCodecs H.264/Opus encoding streamed to a custom relay that fans
  out to four platforms through ffmpeg; one destination failing never drops the others.
- **Platform:** Fastify API, Socket.io realtime layer, Supabase Postgres with RLS — a TypeScript
  monorepo of four services on Vercel and Railway.
- **Reliability:** bounded upload buffer with ffmpeg backpressure, single-flight auto-reconnect, and
  local JWT verification that kept traffic serving through an auth outage.

---

## Open Source

- **[PulseForge](https://github.com/Dexasan/PulseForge)** — durable job orchestration with retries, idempotency and dead letters. *TypeScript*
- **[SignalScope](https://github.com/Dexasan/SignalScope)** — WebRTC observability: quality scoring and anomaly diagnosis. *TypeScript*
- **[DriftSafe](https://github.com/Dexasan/DriftSafe)** — static risk analysis for PostgreSQL migrations, SARIF output for CI. *Python*
- **[CanaryKit](https://github.com/Dexasan/CanaryKit)** — feature flags with deterministic bucketing and explainable decisions. *TypeScript*
- **[LocalLens](https://github.com/Dexasan/LocalLens)** — citation-first local retrieval, hybrid ranking, no cloud calls. *TypeScript*
- **[VerityLedger](https://github.com/Dexasan/VerityLedger)** — double-entry ledger: integer money, hash-chained audit log. *Python*
- **[ArchScale](https://arch-scale-lac.vercel.app)** — capacity planning for throughput, storage, topology and cost. *TypeScript*
- **[Roadrash](https://roadrash-rho.vercel.app)** — pseudo-3D browser racer on Canvas 2D, no game engine. *TypeScript*

---

## Experience

**Network Support Intern** · Intrasoft Networking Solutions, Nepal — Jun – Nov 2024
Diagnosed client network faults, monitored with Wireshark and Nagios, configured routers and switches.

**Marketing & Growth Manager** · Pathik Gyan Niketan, Nepal — Jul 2023 – Jun 2024
Digital presence across three platforms; Meta and Google Ads campaigns with ROI tracking.

**Co-creator & Growth Lead** · BarcaBuzz — Aug 2022 – Jun 2023
Grew a football community to 100K+ followers organically on a tracked, A/B tested content pipeline.

---

## Education

**B.Sc. Engineering Sciences** · Università degli Studi di Roma Tor Vergata — Dec 2024 – Present
Year 2 of 3 · Mathematics, Physics, Electronics, Computing, Control Systems

---

## Technical Skills

| | |
|---|---|
| **Languages** | TypeScript · JavaScript · Python · SQL · Go and C (foundational) |
| **Real-time** | WebRTC · WebCodecs · RTMP · ffmpeg · Canvas API · Web Workers · WebSockets |
| **Backend** | Node.js · Fastify · Socket.io · PostgreSQL · Supabase (Auth, RLS) · REST · JWT |
| **Frontend** | Next.js (App Router) · React · Zustand · Tailwind CSS |
| **Infra** | Docker · Railway · Vercel · Turborepo · GitHub Actions · Git · Linux |
| **Spoken** | Nepali (native) · English (C2) · Hindi (C2) · Italian (B1) |
