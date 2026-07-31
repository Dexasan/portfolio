export type ProjectLink = {
  label: string;
  href: string;
};

export type CaseStudy = {
  slug: string;
  index: string;
  title: string;
  kicker: string;
  year: string;
  stage: string;
  summary: string;
  problem: string;
  solution: string;
  role: string;
  stack: string[];
  facts: Array<{ value: string; label: string }>;
  architecture: Array<{ label: string; detail: string }>;
  decisions: Array<{ title: string; body: string }>;
  outcome: string;
  links: ProjectLink[];
  visual: "signal" | "road" | "scale" | "ledger";
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "ditch",
    index: "01",
    title: "Ditch",
    kicker: "Browser media infrastructure",
    year: "2026",
    stage: "Active build",
    summary:
      "A browser-native live studio that composes a program feed, brings viewers on screen, and relays one broadcast to multiple streaming platforms.",
    problem:
      "Independent creators need several disconnected tools to produce a multi-platform live show. Broadcast software handles the program feed, each platform owns a separate audience, and bringing a remote viewer on screen adds another coordination layer.",
    solution:
      "Ditch moves the production surface into the browser. A creator builds scenes, mixes browser media, admits participants, and publishes a single composed feed. Dedicated API, real-time, and relay services handle authorization, session state, chat ingestion, media handoff, and RTMP delivery.",
    role:
      "I designed and built the product and its technical stack: the monorepo, database model, Fastify API, Socket.io event layer, browser compositor, WebRTC integrations, WebCodecs publishing path, and ffmpeg relay.",
    stack: [
      "Next.js",
      "TypeScript",
      "Fastify",
      "Socket.io",
      "WebRTC",
      "WebCodecs",
      "ffmpeg",
      "Supabase",
      "Railway",
    ],
    facts: [
      { value: "4", label: "deployable services" },
      { value: "2", label: "shared packages" },
      { value: "7", label: "database migrations" },
      { value: "185", label: "commits reviewed" },
    ],
    architecture: [
      {
        label: "Studio",
        detail:
          "Next.js production UI, scene state, media sources, canvas composition, and separate interactive and broadcast outputs.",
      },
      {
        label: "Control plane",
        detail:
          "Fastify routes enforce ownership, session lifecycle, participant transitions, relay assignment, and credential boundaries.",
      },
      {
        label: "Real time",
        detail:
          "Socket.io rooms distribute session state and participant queues while Twitch and YouTube ingestors normalize external chat.",
      },
      {
        label: "Media relay",
        detail:
          "A raw WebSocket path applies backpressure, pipes encoded media into ffmpeg, and fans output across RTMP destinations.",
      },
    ],
    decisions: [
      {
        title: "Keep the compositor alive off-screen",
        body:
          "The draw loop is driven by an inline Web Worker because background tabs throttle main-thread timers. Where supported, Breakout Box APIs move decoded VideoFrame objects through the pipeline directly.",
      },
      {
        title: "Encode once, isolate destination failure",
        body:
          "The relay builds an ffmpeg tee output with onfail=ignore per branch. A failed destination does not automatically take the remaining broadcast outputs down with it.",
      },
      {
        title: "Treat media and control as different systems",
        body:
          "Socket.io carries state and participant events. A separate raw WebSocket carries binary media chunks and pauses reads when ffmpeg stdin applies backpressure.",
      },
    ],
    outcome:
      "The result is a functioning vertical slice across browser media, application state, backend authorization, and media infrastructure. The repository is still actively evolving, so this case study focuses on the implemented system rather than speculative growth metrics.",
    links: [
      { label: "Open Ditch", href: "https://ditch-web-drab.vercel.app" },
      { label: "View pitch deck", href: "/deck" },
    ],
    visual: "signal",
  },
  {
    slug: "roadrash",
    index: "02",
    title: "Roadrash",
    kicker: "Canvas game engine",
    year: "2026",
    stage: "Playable",
    summary:
      "A playable browser tribute to the first game I ever played and the experience that made me curious about computers.",
    problem:
      "I wanted the project to carry a personal story without becoming a static nostalgia page. It needed to feel like a game, run well on desktop and mobile, and stand on its own technically.",
    solution:
      "I built a small racing engine directly on Canvas 2D: perspective-projected road segments, curves and elevation, traffic, rival behavior, collisions, combat, health, race position, and two input systems.",
    role:
      "I rewrote the presentation and product story around the existing game experiment, then simplified the dependency surface and kept the renderer deliberately engine-free.",
    stack: ["Next.js", "React", "TypeScript", "Canvas 2D", "Vercel"],
    facts: [
      { value: "0", label: "game engines" },
      { value: "2", label: "input modes" },
      { value: "2,600", label: "track segments" },
      { value: "6", label: "racers" },
    ],
    architecture: [
      {
        label: "Simulation",
        detail:
          "A frame-based update loop advances speed, position, combat state, rivals, traffic, collisions, and race progress.",
      },
      {
        label: "Projection",
        detail:
          "World-space road segments are projected into screen space to create depth, hills, lanes, and curves without WebGL.",
      },
      {
        label: "Rendering",
        detail:
          "Canvas primitives draw the environment, sprites, shadows, HUD, and state transitions with no external game runtime.",
      },
      {
        label: "Input",
        detail:
          "Keyboard state serves desktop play while large, purpose-built touch controls make the same simulation usable on mobile.",
      },
    ],
    decisions: [
      {
        title: "Make the story playable",
        body:
          "The personal connection is the reason the project exists, but the interactive build is the proof. The page leads into the game instead of substituting copy for implementation.",
      },
      {
        title: "Use first principles over a framework",
        body:
          "Canvas 2D keeps the renderer inspectable. Projection, clipping, ordering, physics, and state transitions stay visible in one code path.",
      },
      {
        title: "Design touch as a real input mode",
        body:
          "Mobile controls are not desktop buttons squeezed onto a smaller screen. Their size, placement, and feedback are designed for thumbs and limited viewport space.",
      },
    ],
    outcome:
      "The result is a complete, deployable experience that connects an honest personal origin with a technically substantial artifact. It is intentionally a tribute, not a claim to reproduce the original game.",
    links: [
      { label: "Play the game", href: "https://roadrash-rho.vercel.app" },
      { label: "View source", href: "https://github.com/Dexasan/roadrash" },
    ],
    visual: "road",
  },
  {
    slug: "archscale",
    index: "03",
    title: "ArchScale",
    kicker: "Interactive capacity planning",
    year: "2026",
    stage: "Live",
    summary:
      "A system-design workbench that turns product assumptions into a transparent starting estimate for throughput, topology, storage, and cost.",
    problem:
      "Capacity conversations often jump from vague traffic guesses to a cloud architecture with no visible reasoning in between. That makes the recommendation hard to challenge or refine.",
    solution:
      "ArchScale asks for workload assumptions in product language, recalculates the model immediately, and exposes both the recommendation and the arithmetic behind it.",
    role:
      "I designed the product flow, implemented the typed estimation model, built the responsive React interface, and added model-level tests and shareable scenarios.",
    stack: ["React", "TypeScript", "Vite", "Node test runner", "Vercel"],
    facts: [
      { value: "10", label: "model inputs" },
      { value: "5", label: "risk heuristics" },
      { value: "4", label: "model tests" },
      { value: "0", label: "runtime UI libraries" },
    ],
    architecture: [
      {
        label: "Inputs",
        detail:
          "Traffic, retention, regional, payload, and availability assumptions are represented as a typed workload.",
      },
      {
        label: "Model",
        detail:
          "A pure estimate function derives average and peak load, read/write split, retained data, egress, topology, and baseline cost.",
      },
      {
        label: "Explanation",
        detail:
          "Every recommendation includes its underlying figures and conditional warnings rather than presenting a black-box answer.",
      },
      {
        label: "Sharing",
        detail:
          "Scenarios serialize into the URL so another engineer can reopen and challenge the same assumptions.",
      },
    ],
    decisions: [
      {
        title: "Keep the model pure",
        body:
          "The estimator has no UI dependencies or hidden network calls. That makes its assumptions easy to test, document, and replace as the model matures.",
      },
      {
        title: "Explain uncertainty",
        body:
          "The interface calls the result a planning baseline, not a provider quote. Advanced assumptions and the calculation breakdown remain visible.",
      },
      {
        title: "Respond at input speed",
        body:
          "The recommendation updates from local state with no request cycle, keeping cause and effect obvious while a slider moves.",
      },
    ],
    outcome:
      "ArchScale is a small product, but it demonstrates a useful engineering habit: separate the model from the interface, state assumptions plainly, and make recommendations inspectable.",
    links: [
      { label: "Open ArchScale", href: "https://arch-scale-lac.vercel.app" },
      { label: "View source", href: "https://github.com/Dexasan/ArchScale" },
    ],
    visual: "scale",
  },
  {
    slug: "verityledger",
    index: "04",
    title: "VerityLedger",
    kicker: "Transactional accounting core",
    year: "2026",
    stage: "Complete",
    summary:
      "A compact double-entry ledger that enforces balanced postings in SQLite and links audit events through a tamper-evident hash chain.",
    problem:
      "Money movement needs stronger guarantees than a CRUD table: postings must balance, duplicates must be contained, partial writes must roll back, and later changes need to be detectable.",
    solution:
      "VerityLedger models accounts, transactions, postings, and audit events in SQLite. A posting transaction validates currency and balance invariants before committing, while references form an idempotency boundary.",
    role:
      "I designed the schema and transaction boundary, implemented the ledger API and CLI, and tested balancing, rollback, duplicate references, decimal parsing, and event-chain verification.",
    stack: ["Python", "SQLite", "Transactions", "SHA-256", "unittest"],
    facts: [
      { value: "4", label: "core tables" },
      { value: "5", label: "invariant tests" },
      { value: "1", label: "atomic posting boundary" },
      { value: "SHA-256", label: "event chain" },
    ],
    architecture: [
      {
        label: "Accounts",
        detail:
          "Each account has one currency and participates in postings by stable identifier.",
      },
      {
        label: "Transactions",
        detail:
          "A unique external reference creates the duplicate boundary for a business operation.",
      },
      {
        label: "Postings",
        detail:
          "Two or more entries must share a currency and sum to zero before SQLite commits them.",
      },
      {
        label: "Audit chain",
        detail:
          "Each event hash includes the prior hash, kind, canonical payload, and timestamp so later mutation is detectable.",
      },
    ],
    decisions: [
      {
        title: "Represent money in minor units",
        body:
          "The ledger stores integer minor units and uses Decimal only at the parsing boundary, avoiding floating-point arithmetic in accounting state.",
      },
      {
        title: "Put invariants inside the transaction",
        body:
          "Account existence, currency compatibility, postings, and the audit event share one SQLite transaction. Failure rolls the operation back as a unit.",
      },
      {
        title: "Be precise about tamper evidence",
        body:
          "The hash chain detects changes; it does not make the database immutable. The project documents that distinction instead of overstating its security model.",
      },
    ],
    outcome:
      "The project is intentionally small and in-process. Its value is the clarity of the invariants and failure boundaries, not an inflated claim that it is a production banking platform.",
    links: [
      { label: "View source", href: "https://github.com/Dexasan/VerityLedger" },
    ],
    visual: "ledger",
  },
];

export const notebookProjects = [
  {
    name: "DriftSafe",
    type: "Python / PostgreSQL",
    description:
      "Static migration-risk checks with source locations, actionable remediations, CLI exit thresholds, and SARIF output for CI.",
    href: "https://github.com/Dexasan/DriftSafe",
  },
  {
    name: "SignalScope",
    type: "TypeScript / WebRTC",
    description:
      "Turns RTC telemetry into quality scores and explainable findings for loss, latency, jitter, frame rate, and bitrate collapse.",
    href: "https://github.com/Dexasan/SignalScope",
  },
  {
    name: "PulseForge",
    type: "TypeScript / Node.js",
    description:
      "An in-memory job engine exploring concurrency, retry backoff, idempotency keys, dead-letter state, and live SSE telemetry.",
    href: "https://github.com/Dexasan/PulseForge",
  },
  {
    name: "LocalLens",
    type: "TypeScript / Retrieval",
    description:
      "A local search experiment combining lexical relevance, deterministic feature hashing, and citation-first responses.",
    href: "https://github.com/Dexasan/LocalLens",
  },
  {
    name: "CanaryKit",
    type: "TypeScript / Delivery",
    description:
      "Deterministic feature-flag evaluation with stable percentage bucketing, targeting rules, and explainable decisions.",
    href: "https://github.com/Dexasan/CanaryKit",
  },
] as const;

export function getCaseStudy(slug: string) {
  return caseStudies.find((project) => project.slug === slug);
}
