import Link from 'next/link';
import LiveTimecode from '@/components/LiveTimecode';

export const metadata = {
  title: 'Sandesh Chapagain — Infrastructure Engineer',
  description:
    'Started university in December. Spent the months since building Ditch — a live-streaming platform — alone, from scratch. It runs in production. Year one.',
};

function SigRow({
  label,
  pct,
  status,
}: {
  label: string;
  pct: number;
  status: 'active' | 'wip';
}) {
  const isActive = status === 'active';
  const fillColor = isActive ? 'var(--color-signal)' : 'var(--color-amber)';

  return (
    <div className="px-3 py-3 border-b border-border last:border-b-0">
      <div className="flex items-center justify-between gap-3 mb-2.5">
        <span className="font-mono text-[9.5px] font-semibold tracking-[0.07em] uppercase text-text">
          {label}
        </span>
        <div className="flex items-center gap-2.5">
          <span className="font-mono text-[9px]" style={{ color: 'var(--color-dim)' }}>
            {pct}%
          </span>
          <span
            className="font-mono text-[9px] font-bold"
            style={{ color: fillColor }}
          >
            {isActive ? '● ACTIVE' : '○ WIP'}
          </span>
        </div>
      </div>

      {/* Track */}
      <div
        style={{
          height: '3px',
          background: 'rgba(255,255,255,0.07)',
          position: 'relative',
          overflow: 'hidden',
        }}
        aria-hidden="true"
      >
        {/* Fill */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            right: `${100 - pct}%`,
            background: fillColor,
            boxShadow: `0 0 10px ${fillColor}`,
          }}
        />
      </div>
    </div>
  );
}

const featured = [
  {
    slug: 'ditch',
    name: 'Ditch',
    statusLabel: '●REC',
    statusColor: 'var(--color-accent)',
    href: 'https://ditch-web-drab.vercel.app',
    external: true,
    description:
      'Cross-platform live streaming architecture. One RTMP ingest fans out simultaneously to Twitch, YouTube, TikTok, and Kick.',
    tags: ['Node.js', 'RTMP', 'ffmpeg', 'WebRTC', 'Supabase'],
  },
  {
    slug: 'ditch-studio',
    name: 'Ditch Studio',
    statusLabel: '○ WIP',
    statusColor: 'var(--color-amber)',
    href: '/work/ditch-studio',
    external: false,
    description:
      'Browser-native OBS alternative. Canvas compositor, scene switching, WebRTC capture, audio mixing. Zero install.',
    tags: ['Canvas API', 'WebRTC', 'Next.js', 'Web Audio'],
  },
];

export default function HomePage() {
  return (
    <>
      {/* ── HERO ── */}
      <section
        className="flex flex-col pt-16"
        style={{ minHeight: '100dvh' }}
        aria-label="Introduction"
      >
        {/* Broadcast status bar */}
        <div className="bc-bar">
          <div className="flex items-center gap-2">
            <span className="live-dot" aria-hidden="true" />
            <span className="font-mono text-[10px] font-bold tracking-[0.08em] uppercase text-accent">
              REC
            </span>
            <span className="bc-sep mx-2" aria-hidden="true" />
            <span className="bc-label hidden sm:inline">SRC-01 · SANDESH CHAPAGAIN</span>
          </div>
          <LiveTimecode />
          <div className="hidden sm:flex items-center gap-2">
            <span className="bc-label">ROME · IT</span>
            <span className="bc-sep mx-1" aria-hidden="true" />
            <span className="font-mono text-[10px] font-semibold tracking-[0.08em] uppercase text-signal">
              OPEN
            </span>
          </div>
        </div>

        {/* Hero body */}
        <div className="flex-1 flex items-center py-12 px-5 sm:px-8">
          <div className="max-w-[1100px] mx-auto w-full">
            <div className="grid grid-cols-1 lg:grid-cols-[1fr_292px] gap-12 lg:gap-16 items-start">

              {/* Identity */}
              <div>
                <p className="bc-label mb-5 anim-up" style={{ animationDelay: '0.05s' }}>
                  INFRASTRUCTURE ENGINEER
                </p>
                <h1
                  className="font-extrabold leading-[0.93] tracking-[-0.04em] text-text anim-up"
                  style={{ fontSize: 'clamp(3rem, 9vw, 6.5rem)', animationDelay: '0.15s' }}
                >
                  SANDESH<br />CHAPAGAIN
                </h1>
                <p
                  className="text-[15px] text-muted leading-[1.78] mt-6 max-w-[460px] anim-up"
                  style={{ animationDelay: '0.28s' }}
                >
                  Started university in December. Spent the months since
                  building Ditch — a live-streaming platform, relay engine and
                  all — alone, from scratch. It runs in production. Year one.
                </p>
                <div
                  className="flex items-center gap-3 mt-10 flex-wrap anim-up"
                  style={{ animationDelay: '0.42s' }}
                >
                  <Link href="/work" className="btn-primary">[ VIEW WORK ]</Link>
                  <Link href="/contact" className="btn-ghost">[ GET IN TOUCH ]</Link>
                </div>
              </div>

              {/* System status readout */}
              <div
                className="border border-border-hi anim-up"
                style={{ animationDelay: '0.32s', borderRadius: 0 }}
                aria-label="System status"
              >
                <div className="flex items-center justify-between px-3 py-2 border-b border-border-hi bg-bg-raised">
                  <span className="font-mono text-[9px] font-bold tracking-[0.1em] uppercase text-muted">
                    System Status
                  </span>
                  <span className="font-mono text-[9px]" style={{ color: 'var(--color-dim)' }}>
                    CH-01
                  </span>
                </div>
                <SigRow label="RTMP FANOUT" pct={88} status="active" />
                <SigRow label="WEBRTC PIPELINE" pct={92} status="active" />
                <SigRow label="CANVAS COMPOSITOR" pct={45} status="wip" />
                <SigRow label="CHAT AGGREGATOR" pct={22} status="wip" />
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* ── WORK PREVIEW ── */}
      <section className="border-t border-border py-20 sm:py-[88px]" aria-label="Selected work">
        <div className="max-w-[1100px] mx-auto px-5 sm:px-8">

          <header className="mb-10">
            <p className="section-label">Selected work</p>
            <h2
              className="font-extrabold leading-[1.08] tracking-[-0.03em] text-text mb-2"
              style={{ fontSize: 'clamp(1.6rem, 3vw, 2.4rem)' }}
            >
              What I&apos;ve shipped.
            </h2>
            <p className="text-[13px] text-muted max-w-[400px] leading-[1.7]">
              Production systems, not exercises. Each one solves a real problem the hard way.
            </p>
          </header>

          {/* Featured project rows */}
          <div className="border border-border mb-10">
            {featured.map((p, i) => (
              <a
                key={p.slug}
                href={p.href}
                {...(p.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                className="featured-row group flex items-start justify-between gap-6 px-7 py-6 border-b border-border last:border-b-0"
              >
                <div className="flex items-start gap-5 min-w-0">
                  <span className="font-mono text-[10px] font-semibold tracking-[0.06em] text-dim flex-shrink-0 mt-0.5">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <div className="min-w-0">
                    <p
                      className="font-bold tracking-[-0.02em] text-muted group-hover:text-text mb-1.5"
                      style={{ fontSize: '15px', transition: 'color 0.15s ease' }}
                    >
                      {p.name}
                    </p>
                    <p className="text-[12.5px] text-muted leading-[1.7] max-w-[440px]">
                      {p.description}
                    </p>
                    <div className="flex flex-wrap gap-1.5 mt-2.5">
                      {p.tags.map((t) => (
                        <span key={t} className="src-tag">{t}</span>
                      ))}
                    </div>
                  </div>
                </div>
                <span
                  className="font-mono text-[9px] font-bold tracking-[0.1em] uppercase flex-shrink-0 mt-0.5"
                  style={{ color: p.statusColor }}
                >
                  {p.statusLabel}
                </span>
              </a>
            ))}
          </div>

          <Link href="/work" className="btn-ghost">[ ALL WORK ]</Link>

        </div>
      </section>
    </>
  );
}
