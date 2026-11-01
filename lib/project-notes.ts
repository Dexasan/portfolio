export const notes: Record<
  string,
  { question: string; approach: string; details: string[]; boundary: string }
> = {
  yappie: {
    question: "What happens after hello?",
    approach:
      "Yappie starts with matching, then makes room for an ongoing connection: public posts, persistent messages, and Clubs built around interests. The illustrated charcoal, chalk, and vermilion identity makes those spaces feel like parts of the same app.",
    details: [
      "Authenticated onboarding, profiles, matching, and persistent conversations backed by Supabase.",
      "Feed interactions and interest-based Clubs with membership, room roles, hand raises, and moderation.",
      "A shared Expo/React Native application with a Cloudflare Realtime audio integration.",
    ],
    boundary:
      "Yappie is in private beta. Source code and build artifacts do not establish that every device, audio route, notification, or email flow has been validated.",
  },
  ditch: {
    question: "Why should the audience stay in the audience?",
    approach:
      "DITCH puts a production surface in the browser. Creators compose scenes and manage participants, while separate services handle session state, signaling, and media delivery. A viewer can be invited out of chat and into the show.",
    details: [
      "A Next.js studio with scene state and browser canvas composition.",
      "Fastify and Socket.io services for authenticated controls, session state, and participant coordination.",
      "A WebSocket/ffmpeg relay for sending composed media to multiple RTMP destinations.",
    ],
    boundary:
      "DITCH is an active build. The public visitor wall above is a separate portfolio feature; it does not start a broadcast or capture your camera or microphone.",
  },
  writmail: {
    question: "Can outreach start with better research?",
    approach:
      "Writmail was built around creator discovery for DITCH. Search results carry public evidence, leads are saved privately, and outreach drafts remain editable for human review.",
    details: [
      "Tavily-backed discovery with source filters and user-specific search reuse.",
      "Cloudflare D1 persistence with ownership checks for searches, leads, and drafts.",
      "CSV export, contact provenance, suppression controls, and deterministic evidence-grounded drafts.",
    ],
    boundary:
      "Candidate pages are not verified customers. Writmail prepares drafts; it does not send email or guarantee that a prospect is relevant.",
  },
  roadrash: {
    question: "Could I build a piece of the game that started it?",
    approach:
      "Roadrash is a browser tribute to the motorcycle game that made computers interesting to me. It uses a small Canvas 2D engine rather than a game framework.",
    details: [
      "Projected road segments with curves, elevation, and finite race progress.",
      "Rival riders, traffic, collisions, combat, and health state.",
      "Keyboard and touch input connected to the same simulation.",
    ],
    boundary:
      "An original, non-commercial fan tribute using simple geometric rendering; not a reproduction of the commercial game or its assets.",
  },
  archscale: {
    question: "What do the traffic assumptions actually imply?",
    approach:
      "ArchScale separates a typed estimation model from its React interface. Changing workload assumptions reveals how capacity, storage, and cost estimates move together.",
    details: [
      "Inputs for users, traffic peaks, read/write distribution, retention, and regions.",
      "Explainable application, database, and cache capacity estimates.",
      "Visible assumptions and shareable scenarios.",
    ],
    boundary:
      "An early planning aid. Its estimates are not measured benchmarks or provider quotes.",
  },
  feedbrake: {
    question: "Could my phone help me leave the endless feed?",
    approach:
      "FeedBrake is a local Kotlin prototype that uses Android Accessibility to identify selected short-video surfaces and navigate back, then home if needed.",
    details: [
      "Target-specific rules for YouTube Shorts, Facebook Reels, and X’s immersive video feed.",
      "Pause controls and optional locally stored diagnostics.",
      "Conservative detection intended to preserve ordinary timelines and videos.",
    ],
    boundary:
      "This is a personal prototype, not a verified universal blocker. Facebook and X need physical positive and false-positive validation. The app does not force-stop other apps.",
  },
  locallens: {
    question: "Can a small local search system show its reasoning?",
    approach:
      "LocalLens combines lexical relevance and deterministic feature hashing, exposing scores and source citations instead of hiding the retrieval process.",
    details: [
      "Unicode tokenization, stop-word filtering, and signed feature hashing.",
      "Hybrid lexical and cosine-similarity ranking.",
      "Citations, confidence reporting, and refusal when evidence is absent.",
    ],
    boundary:
      "A retrieval demo with a small supplied corpus. It is not an LLM answer generator, and feature hashing is not a trained semantic model.",
  },
  pulseforge: {
    question: "What should a queue do when things go wrong?",
    approach:
      "PulseForge makes background-job behavior visible: bounded concurrency, deduplication, retries, and dead-letter state in a small Node.js service.",
    details: [
      "Idempotency keys at the enqueue boundary.",
      "Exponential retry backoff with jitter and bounded workers.",
      "Live operational updates over Server-Sent Events.",
    ],
    boundary:
      "The included adapter is in-memory. It does not provide durable recovery across process restarts; persistent storage is a separate production boundary.",
  },
  signalscope: {
    question: "What makes a bad call bad?",
    approach:
      "SignalScope converts transport and media telemetry into a quality score, stateful findings, and suggested remedies.",
    details: [
      "Signals for latency, jitter, packet loss, bitrate, and frame rate.",
      "Incident simulation and an explainable diagnostic engine.",
      "Bounded time-series data and live Canvas/SSE presentation.",
    ],
    boundary:
      "The public demo uses synthetic telemetry. Real call monitoring requires a collector connected to RTCPeerConnection.getStats().",
  },
  canarykit: {
    question: "Can a rollout decision be predictable and explainable?",
    approach:
      "CanaryKit keeps feature-flag evaluation pure and inspectable, with ordered targeting rules and stable percentage assignment.",
    details: [
      "Explicit disabled, targeted, percentage, and fallthrough decisions.",
      "SHA-256 bucketing based on flag and identity keys.",
      "A workbench that exposes the matched rule and decision reason.",
    ],
    boundary:
      "A demonstration service with in-memory audit data. Production flag distribution and persistent auditing require additional infrastructure.",
  },
  verityledger: {
    question: "What must always be true when money moves?",
    approach:
      "VerityLedger concentrates on a few accounting invariants and enforces them within an atomic SQLite transaction.",
    details: [
      "Balanced postings using integer minor units and Decimal input parsing.",
      "Currency checks and unique references for duplicate prevention.",
      "A SHA-256 chain linking audit events.",
    ],
    boundary:
      "A small accounting engine, not a banking platform. The hash chain provides tamper evidence; it does not make the database immutable.",
  },
  driftsafe: {
    question: "Can a risky migration be caught before it runs?",
    approach:
      "DriftSafe scans PostgreSQL migration text for high-cost operational patterns and turns findings into readable remediation guidance.",
    details: [
      "Checks for destructive operations, blocking indexes, table rewrites, and unsafe backfills.",
      "Source-line findings with severity and operational context.",
      "Text, JSON, and SARIF output for code-review workflows.",
    ],
    boundary:
      "A conservative static review assistant, not a complete SQL parser or a substitute for reviewing a migration against a real database.",
  },
};
