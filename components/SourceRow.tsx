'use client';

import Link from 'next/link';

type Badge = 'live' | 'wip' | 'dim' | 'blue';

interface SourceRowProps {
  slug: string;
  index: number;
  name: string;
  badge: Badge;
  description: string;
  tags: string[];
}

export default function SourceRow({ slug, index, name, badge, description, tags }: SourceRowProps) {
  return (
    <Link href={`/work/${slug}`} className="src-item group">
      <span className="src-num">{String(index).padStart(2, '0')}</span>

      <div>
        <p className="src-name">{name}</p>
        <p className="src-desc">{description}</p>
        <div className="src-tags">
          {tags.map((tag) => (
            <span key={tag} className="src-tag">{tag}</span>
          ))}
        </div>
      </div>

      <div className="flex flex-col items-end gap-2.5 pt-0.5 min-w-[72px]">
        {badge === 'live' && (
          <span className="sig-active">
            <span
              className="w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0"
              style={{ animation: 'live-pulse 1.5s ease-in-out infinite' }}
              aria-hidden="true"
            />
            LIVE
          </span>
        )}
        {badge === 'wip' && (
          <span className="sig-wip">WIP</span>
        )}
        {badge !== 'live' && badge !== 'wip' && (
          <span className="bc-label">DONE</span>
        )}
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
    </Link>
  );
}
