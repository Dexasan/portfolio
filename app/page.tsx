import Link from 'next/link';

export const metadata = {
  title: 'Sandesh Chapagain — Infrastructure Engineer',
  description:
    'Second year engineering at Tor Vergata. I spend most of my time building real-time systems and streaming architectures. The current one is Ditch. Went live in January and it is still running.',
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
  const color = isActive ? 'var(--color-signal)' : 'var(--color-amber)';

  return (
    <div className="px-4 py-3 border-b border-border last:border-b-0">
      <div className="flex items-center justify-between mb-2">
        <span className="font-mono text-[9.5px] font-medium tracking-[0.05em] uppercase text-muted">
          {label}
        </span>
        <div className="flex items-center gap-2">
          <span className="font-mono text-[9px] text-dim">{pct}%</span>
          <span className="font-mono text-[8.5px] font-semibold" style={{ color }}>
            {isActive ? '● Active' : '○ WIP'}
          </span>
        </div>
      </div>
      <div
        className="h-[2px] rounded-full overflow-hidden"
        style={{ background: 'var(--color-border)' }}
        aria-hidden="true"
      >
        <div
          className="h-full rounded-full"
          style={{ width: `${pct}%`, background: color }}
        />
      </div>
    </div>
  );
}

const featured = [
  {
    slug: 'ditch',
    name: 'Ditch',
    statusLabel: 'Live',
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
    statusLabel: 'In progress',
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
        <div className="flex-1 flex items-center py-16 px-5 sm:px-8">
          <div className="max-w-[1100px] mx-auto w-full">
            <div className="grid grid-cols-1 lg:grid-cols-[1fr_296px] gap-12 lg:gap-16 items-center">

              {/* Identity */}
              <div>
                <p className="section-label anim-up" style={{ animationDelay: '0.05s' }}>
                  Infrastructure Engineer
                </p>
                <h1
                  className="font-extrabold leading-[1.0] tracking-[-0.04em] text-text anim-up"
                  style={{ fontSize: 'clamp(3rem, 8vw, 5.5rem)', animationDelay: '0.12s' }}
                >
                  Sandesh<br />Chapagain
                </h1>
                <p
                  className="text-[15px] text-muted leading-[1.8] mt-6 max-w-[460px] anim-up"
                  style={{ animationDelay: '0.22s' }}
                >
                  Second year engineering at Tor Vergata. I spend most of my
                  time building real-time systems and streaming architectures.
                  The current one is Ditch. Went live in January and it is
                  still running.
                </p>
                <div
                  className="flex items-center gap-3 mt-8 flex-wrap anim-up"
                  style={{ animationDelay: '0.32s' }}
                >
                  <Link href="/work" className="btn-primary">View work</Link>
                  <Link href="/contact" className="btn-ghost">Get in touch</Link>
                </div>
              </div>

              {/* Build status */}
              <div
                className="border border-border rounded-2xl overflow-hidden anim-up"
                style={{ animationDelay: '0.2s' }}
                aria-label="Build status"
              >
                <div className="flex items-center justify-between px-4 py-3 border-b border-border bg-bg-card">
                  <span className="font-mono text-[10px] font-semibold tracking-[0.08em] uppercase text-muted">
                    Build status
                  </span>
                  <span className="font-mono text-[9px] text-dim">Ditch</span>
                </div>
                <SigRow label="RTMP fanout"       pct={88} status="active" />
                <SigRow label="WebRTC pipeline"   pct={92} status="active" />
                <SigRow label="Canvas compositor" pct={45} status="wip" />
                <SigRow label="Chat aggregator"   pct={22} status="wip" />
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* ── WORK PREVIEW ── */}
      <section className="border-t border-border py-24" aria-label="Selected work">
        <div className="max-w-[1100px] mx-auto px-5 sm:px-8">

          <header className="mb-10">
            <p className="section-label">Selected work</p>
            <h2
              className="font-extrabold leading-tight tracking-[-0.03em] text-text mb-2"
              style={{ fontSize: 'clamp(1.6rem, 3vw, 2.2rem)' }}
            >
              What I&apos;ve shipped.
            </h2>
            <p className="text-[14px] text-muted max-w-[380px] leading-[1.75]">
              Production systems, not exercises. Each one solves a real problem the hard way.
            </p>
          </header>

          <div className="border border-border rounded-xl overflow-hidden mb-10">
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
                  className="font-mono text-[9px] font-semibold tracking-[0.06em] uppercase flex-shrink-0 mt-0.5"
                  style={{ color: p.statusColor }}
                >
                  {p.statusLabel}
                </span>
              </a>
            ))}
          </div>

          <Link href="/work" className="btn-ghost">View all work</Link>

        </div>
      </section>
    </>
  );
}
