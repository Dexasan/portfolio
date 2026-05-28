export const metadata = {
  title: 'Contact — Sandesh Chapagain',
  description: 'Get in touch for roles, collaborations, or questions about the infrastructure.',
};

interface Channel {
  type: string;
  value: string;
  href: string;
  status: string;
  external: boolean;
}

const channels: Channel[] = [
  {
    type: 'Email',
    value: 'sendmailtodex@gmail.com',
    href: 'mailto:sendmailtodex@gmail.com',
    status: 'Open',
    external: false,
  },
  {
    type: 'GitHub',
    value: 'github.com/Dexasan',
    href: 'https://github.com/Dexasan',
    status: 'Active',
    external: true,
  },
  {
    type: 'Phone',
    value: '+39 344 594 6149',
    href: 'tel:+393445946149',
    status: 'Available',
    external: false,
  },
];

function ChannelRow({ type, value, href, status, external }: Channel) {
  return (
    <a
      href={href}
      {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
      className="group flex items-center justify-between gap-4 py-4 border-b border-border hover:bg-bg-card transition-colors duration-150"
      style={{ margin: '0 -20px', padding: '16px 20px' }}
    >
      <div className="flex items-center gap-5 min-w-0">
        <span className="font-mono text-[10px] font-bold tracking-[0.1em] uppercase w-14 shrink-0 text-muted group-hover:text-accent transition-colors duration-150">
          {type}
        </span>
        <span className="text-[14px] text-text truncate">{value}</span>
      </div>
      <div className="flex items-center gap-3 shrink-0">
        <span className="font-mono text-[9px] font-semibold tracking-[0.08em] uppercase text-signal hidden sm:inline">
          {status}
        </span>
        <svg
          className="w-3.5 h-3.5 opacity-0 group-hover:opacity-60 transition-opacity duration-200"
          style={{ color: 'var(--color-text)' }}
          viewBox="0 0 16 16"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.6"
          aria-hidden="true"
        >
          <path d="M3 13L13 3M13 3H7M13 3V9" />
        </svg>
      </div>
    </a>
  );
}

export default function ContactPage() {
  return (
    <div className="pt-16" style={{ minHeight: '100dvh' }}>
      <div className="max-w-[680px] mx-auto px-5 sm:px-8 py-20">

        <header className="mb-12">
          <p className="section-label">Contact</p>
          <h1
            className="font-extrabold leading-[1.0] tracking-[-0.04em] text-text"
            style={{ fontSize: 'clamp(2.5rem, 6vw, 4rem)' }}
          >
            Let&apos;s talk.
          </h1>
          <p className="text-[15px] text-muted leading-[1.78] mt-5 max-w-[440px]">
            Whether it&apos;s a role, a collaboration, or a question about the
            relay architecture.
          </p>
        </header>

        <div className="flex flex-col border-t border-border mb-12">
          {channels.map((ch) => (
            <ChannelRow key={ch.type} {...ch} />
          ))}
        </div>

        <div className="border border-border rounded-xl p-5">
          <div className="flex items-center justify-between mb-3">
            <span className="font-mono text-[9px] font-bold tracking-[0.1em] uppercase text-muted">
              Availability
            </span>
            <span
              className="font-mono text-[9px] font-semibold tracking-[0.08em] uppercase"
              style={{ color: 'var(--color-signal)' }}
            >
              Open
            </span>
          </div>
          <p className="text-[13px] text-muted leading-[1.75]">
            Open to early-stage infrastructure and product engineering roles.
            Currently based in Rome — remote or relocation considered.
            Response time: under 24 hours.
          </p>
        </div>

      </div>
    </div>
  );
}
