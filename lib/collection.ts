export type Project = {
  slug: string;
  name: string;
  kind: string;
  description: string;
  stack: string;
  status: string;
  href?: string;
  source?: string;
};
export const projects: Project[] = [
  {
    slug: "yappie",
    name: "Yappie",
    kind: "Mobile / social discovery",
    description:
      "Meet someone new. Keep the conversation going. Matching, posts, DMs, and live interest-based Clubs in one mobile app.",
    stack: "Expo · React Native · Supabase · Cloudflare Realtime",
    status: "Private beta",
    source: "https://github.com/Dexasan/yappie",
  },
  {
    slug: "ditch",
    name: "DITCH",
    kind: "Web / live production",
    description:
      "A browser studio that lets viewers become part of the show, with scene composition and one broadcast sent to multiple platforms.",
    stack: "Next.js · WebRTC · Socket.io · ffmpeg · Supabase",
    status: "Active build",
    href: "https://ditchlive.app",
  },
  {
    slug: "writmail",
    name: "Writmail",
    kind: "Web / creator research",
    description:
      "Find creators through public sources, review the evidence, save prospects, and prepare personal outreach drafts for human review.",
    stack: "React · Cloudflare Workers · D1 · Tavily",
    status: "Built",
    source: "https://github.com/Dexasan/Writmail",
  },
  {
    slug: "roadrash",
    name: "Roadrash",
    kind: "Browser / motorcycle racing",
    description:
      "The game that made me curious about computers, reimagined in Canvas. Racing, rival riders, traffic, and a little friendly combat.",
    stack: "React · TypeScript · Canvas 2D",
    status: "Playable",
    href: "https://roadrash-rho.vercel.app",
    source: "https://github.com/Dexasan/roadrash",
  },
  {
    slug: "archscale",
    name: "ArchScale",
    kind: "Web / capacity planning",
    description:
      "Turn traffic assumptions into explainable estimates for throughput, storage, topology, reliability, and cloud cost.",
    stack: "React · TypeScript · Vite",
    status: "Built",
    href: "https://arch-scale-lac.vercel.app",
    source: "https://github.com/Dexasan/ArchScale",
  },
  {
    slug: "feedbrake",
    name: "FeedBrake",
    kind: "Android / personal focus",
    description:
      "A Kotlin prototype that attempts to leave Shorts, Reels, and immersive video feeds. Detection varies by app; Facebook and X need device validation.",
    stack: "Kotlin · Android Accessibility",
    status: "Local prototype",
  },
  {
    slug: "locallens",
    name: "LocalLens",
    kind: "Tool / local retrieval",
    description:
      "Search local knowledge with hybrid ranking, transparent scores, source citations, and refusal when evidence is missing.",
    stack: "TypeScript · Node.js · Feature hashing",
    status: "Demo",
    source: "https://github.com/Dexasan/LocalLens",
  },
  {
    slug: "pulseforge",
    name: "PulseForge",
    kind: "Tool / job orchestration",
    description:
      "A small in-memory job engine exploring bounded concurrency, retries, duplicate prevention, and live operations telemetry.",
    stack: "TypeScript · Node.js · SSE",
    status: "Demo",
    source: "https://github.com/Dexasan/PulseForge",
  },
  {
    slug: "signalscope",
    name: "SignalScope",
    kind: "Tool / RTC observability",
    description:
      "Turn simulated call telemetry into quality scores and explainable diagnoses for loss, jitter, latency, and bitrate problems.",
    stack: "TypeScript · Canvas · SSE",
    status: "Demo",
    source: "https://github.com/Dexasan/SignalScope",
  },
  {
    slug: "canarykit",
    name: "CanaryKit",
    kind: "Tool / feature delivery",
    description:
      "Targeted feature releases with stable percentage rollouts and an explanation behind every flag decision.",
    stack: "TypeScript · Node.js · SHA-256",
    status: "Demo",
    source: "https://github.com/Dexasan/CanaryKit",
  },
  {
    slug: "verityledger",
    name: "VerityLedger",
    kind: "Tool / accounting",
    description:
      "A compact double-entry ledger with balanced postings, atomic SQLite transactions, and a tamper-evident audit chain.",
    stack: "Python · SQLite · SHA-256",
    status: "Built",
    source: "https://github.com/Dexasan/VerityLedger",
  },
  {
    slug: "driftsafe",
    name: "DriftSafe",
    kind: "CLI / database safety",
    description:
      "Catch risky PostgreSQL migration patterns before deployment, with source locations, remediation guidance, and SARIF output.",
    stack: "Python · PostgreSQL · SARIF",
    status: "Built",
    source: "https://github.com/Dexasan/DriftSafe",
  },
];
