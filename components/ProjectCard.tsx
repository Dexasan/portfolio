'use client';

import Link from 'next/link';

type Badge = 'live' | 'wip' | 'dim' | 'blue';

const badgeLabels: Record<Badge, string> = {
  live: 'Live',
  wip:  'In Progress',
  dim:  'Complete',
  blue: 'Competition',
};

interface ProjectCardProps {
  slug: string;
  name: string;
  badge: Badge;
  description: string;
  tags: string[];
}

export default function ProjectCard({ slug, name, badge, description, tags }: ProjectCardProps) {
  function handleMouseMove(e: React.MouseEvent<HTMLAnchorElement>) {
    const rect = e.currentTarget.getBoundingClientRect();
    e.currentTarget.style.setProperty('--mx', `${((e.clientX - rect.left) / rect.width) * 100}%`);
    e.currentTarget.style.setProperty('--my', `${((e.clientY - rect.top) / rect.height) * 100}%`);
  }

  return (
    <Link
      href={`/work/${slug}`}
      className="pcard group"
      onMouseMove={handleMouseMove}
    >
      <div className="flex items-start justify-between gap-3">
        <h3 className="text-lg font-extrabold tracking-[-0.025em] text-text">{name}</h3>
        <span className={`badge badge-${badge}`}>{badgeLabels[badge]}</span>
      </div>

      <p className="text-[13px] leading-[1.72] text-muted flex-1">{description}</p>

      <div className="flex flex-wrap gap-1.5">
        {tags.map((tag) => (
          <span
            key={tag}
            className="font-mono text-[11px] font-medium px-2 py-1 border border-border rounded-[5px] text-muted bg-white/[0.02] group-hover:border-border-hi group-hover:text-text transition-colors duration-200"
          >
            {tag}
          </span>
        ))}
      </div>

      <span className="inline-flex items-center gap-1.5 text-[13px] font-bold text-accent mt-1 transition-[gap] duration-200 group-hover:gap-2.5">
        View case study
        <svg width="13" height="13" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
          <path d="M3 8h10M8 3l5 5-5 5" />
        </svg>
      </span>
    </Link>
  );
}
