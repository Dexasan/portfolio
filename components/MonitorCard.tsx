'use client';

import Link from 'next/link';

type Badge = 'live' | 'wip' | 'dim' | 'blue';

interface Props {
  slug: string;
  index: number;
  name: string;
  badge: Badge;
  description: string;
  tags: string[];
  externalHref?: string;
}

const statusMap: Record<Badge, { label: string; color: string }> = {
  live:  { label: 'Live',        color: 'var(--color-accent)' },
  wip:   { label: 'In progress', color: 'var(--color-amber)'  },
  dim:   { label: 'Complete',    color: 'var(--color-dim)'    },
  blue:  { label: 'Complete',    color: 'var(--color-signal)' },
};

export default function MonitorCard({ slug, index, name, badge, description, tags, externalHref }: Props) {
  const status = statusMap[badge];

  const inner = (
    <div className="monitor-card" style={{ height: '100%' }}>
      <div className="monitor-top">
        <span className="font-mono text-[9px] font-semibold tracking-[0.06em] uppercase text-dim">
          {String(index).padStart(2, '0')}
        </span>
        <span
          className="font-mono text-[9px] font-semibold tracking-[0.06em] uppercase"
          style={{ color: status.color }}
        >
          {status.label}
        </span>
      </div>

      <div className="monitor-screen">
        <div className="monitor-burnin">{name}</div>
      </div>

      <div className="monitor-info">
        <p className="monitor-name">{name}</p>
        <p className="monitor-desc">{description}</p>
        <div className="src-tags" style={{ marginTop: 'auto', paddingTop: '8px' }}>
          {tags.map((t) => (
            <span key={t} className="src-tag">{t}</span>
          ))}
        </div>
      </div>
    </div>
  );

  if (externalHref) {
    return (
      <a href={externalHref} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: 'inherit', display: 'block', height: '100%' }}>
        {inner}
      </a>
    );
  }

  return (
    <Link href={`/work/${slug}`} style={{ textDecoration: 'none', color: 'inherit', display: 'block', height: '100%' }}>
      {inner}
    </Link>
  );
}
