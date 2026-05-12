import Link from 'next/link';

export const metadata = {
  title: 'About — Sandesh Chapagain',
  description:
    'Second-year Engineering Sciences at Tor Vergata. Building real-time systems and streaming architectures. Ditch is the current one, live since January.',
};

const timeline = [
  {
    period: 'Jan 2025 — Now',
    role: 'Founder & Engineer',
    org: 'Ditch',
    detail:
      'Designed and built the complete technical stack alone: RTMP relay engine, WebRTC pipeline, canvas compositor, real-time server, REST API, and browser studio. Monorepo with four apps and two shared packages.',
  },
  {
    period: 'May 2026',
    role: 'Competition Entry',
    org: 'Startcup Lazio 2026',
    detail:
      'Full business submission via Tor Vergata. Executive summary, 12-slide pitch deck with speaker script, Business Model Canvas, market sizing, competitive analysis, revenue model, financial projections.',
  },
  {
    period: 'Dec 2024 — Now',
    role: 'B.Sc Engineering Sciences',
    org: 'Tor Vergata, Rome',
    detail:
      'Calculus, linear algebra, algorithms and data structures, C systems programming (process management, file I/O, memory, BSD sockets). Year 1 of 3.',
  },
  {
    period: 'Jun – Nov 2024',
    role: 'Network Support Intern',
    org: 'Intrasoft Networking Solutions, Nepal',
    detail:
      'Diagnosed and resolved connectivity issues across client systems. Monitored with Wireshark and Nagios, configured routers, switches, and VoIP across multiple sites.',
  },
  {
    period: 'Jul 2023 – Jun 2024',
    role: 'Marketing & Growth Manager',
    org: 'Pathik Gyan Niketan, Nepal',
    detail:
      'Managed digital presence across Facebook, Instagram, and TikTok. Ran Meta Ads and Google Ads campaigns with ROI tracking via Google Analytics. Produced newsletters and website copy.',
  },
  {
    period: 'Aug 2022 – Jun 2023',
    role: 'Growth Systems Lead',
    org: 'BarcaBuzz',
    detail:
      '100K+ followers, zero paid spend, approximately 12 months from zero. Structured content pipeline, per-post tracking, A/B testing across format variables, engagement feedback loops.',
  },
];

const stack = [
  { label: 'LANGUAGE',   items: 'TypeScript · JavaScript · C' },
  { label: 'RUNTIME',    items: 'Node.js · Browser APIs' },
  { label: 'FRAMEWORK',  items: 'Next.js · Fastify · Socket.io' },
  { label: 'REALTIME',   items: 'WebRTC · RTMP · ffmpeg · Agora SDK' },
  { label: 'DATA',       items: 'Supabase · PostgreSQL' },
  { label: 'INFRA',      items: 'Railway · Vercel · Docker · Turborepo' },
  { label: 'NETWORKING', items: 'TCP/IP · Wireshark · Nagios · Windows Server' },
  { label: 'ANALYTICS',  items: 'Google Analytics · Meta Ads · Google Ads' },
];

export default function AboutPage() {
  return (
    <div className="pt-16" style={{ minHeight: '100dvh' }}>

      {/* Broadcast status bar */}
      <div className="bc-bar">
        <div className="flex items-center gap-2">
          <span className="bc-label">CH-00</span>
          <span className="bc-sep mx-2" aria-hidden="true" />
          <span className="bc-label">PROFILE</span>
        </div>
        <span className="bc-label hidden sm:inline">
          ENG. SCIENCES · TOR VERGATA · 2024—
        </span>
        <span
          className="font-mono text-[10px] font-semibold tracking-[0.08em] uppercase text-signal"
        >
          OPEN
        </span>
      </div>

      <div className="max-w-[1100px] mx-auto px-5 sm:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-16 lg:gap-20 items-start">

          {/* ── LEFT: Identity + Bio + CTAs ── */}
          <div>
            <p className="bc-label mb-4">Profile</p>
            <h1
              className="font-extrabold leading-[0.93] tracking-[-0.04em] text-text"
              style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)' }}
            >
              SANDESH<br />CHAPAGAIN
            </h1>
            <p className="font-mono text-[11px] font-semibold tracking-[0.07em] uppercase text-muted mt-4 mb-10">
              Backend Engineer · Rome, Italy
            </p>

            <div className="flex flex-col gap-5 max-w-[520px]">
              <p className="text-[15px] text-muted leading-[1.78]">
                Second-year Engineering Sciences at Tor Vergata. I spend most of
                my time building real-time systems and streaming architectures.
                Ditch is the current one — I started it and built the whole stack
                myself: RTMP relay engine, WebRTC pipeline, canvas compositor,
                real-time server, REST API, browser studio. Live since January.
              </p>
              <p className="text-[15px] text-muted leading-[1.78]">
                Before writing production code I ran growth systems for BarcaBuzz — a
                football community I took from zero to 100K+ followers without paid
                spend. The key insight: save rate predicts long-tail reach better than
                immediate engagement. Optimizing for the right metric changes what you
                build. That principle now drives every architectural decision in Ditch.
              </p>
              <p className="text-[15px] text-muted leading-[1.78]">
                Looking for early-stage infrastructure and product engineering roles
                where the problems are genuinely hard and the systems actually need
                to work.
              </p>
            </div>

            <div className="flex items-center gap-3 mt-10 flex-wrap">
              <Link href="/contact" className="btn-primary">[ GET IN TOUCH ]</Link>
              <a
                href="/SandeshChapagainCV.pdf"
                download
                className="btn-ghost"
              >
                [ DOWNLOAD CV ]
              </a>
              <Link href="/work" className="btn-ghost">[ VIEW WORK ]</Link>
            </div>
          </div>

          {/* ── RIGHT: Timeline + Stack ── */}
          <div>

            {/* Timeline */}
            <p className="bc-label mb-0">Timeline</p>
            <div className="flex flex-col mt-1">
              {timeline.map(({ period, role, org, detail }) => (
                <div
                  key={org}
                  className="border-t border-border pt-4 pb-5"
                >
                  <p className="font-mono text-[9.5px] font-semibold tracking-[0.08em] uppercase text-muted mb-1">
                    {period}
                  </p>
                  <p className="text-[13px] font-bold text-text leading-tight mb-0.5">
                    {role}
                  </p>
                  <p
                    className="font-mono text-[10px] font-semibold tracking-[0.05em] mb-2.5"
                    style={{ color: 'var(--color-accent)' }}
                  >
                    {org}
                  </p>
                  <p className="text-[12px] text-muted leading-[1.7]">{detail}</p>
                </div>
              ))}
            </div>

            {/* Stack */}
            <p className="bc-label mt-8 mb-0">Stack</p>
            <div className="flex flex-col mt-1">
              {stack.map(({ label, items }) => (
                <div
                  key={label}
                  className="grid grid-cols-[88px_1fr] gap-3 border-t border-border py-2.5"
                >
                  <span className="font-mono text-[9px] font-bold tracking-[0.08em] uppercase text-muted pt-px">
                    {label}
                  </span>
                  <span className="font-mono text-[11px] text-muted leading-[1.6]">
                    {items}
                  </span>
                </div>
              ))}
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
