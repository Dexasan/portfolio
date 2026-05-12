'use client';

import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import type { Project, Badge } from '@/lib/projects';

const statusMap: Record<Badge, { label: string; color: string }> = {
  live:  { label: '●REC',   color: 'var(--color-accent)' },
  wip:   { label: '○ WIP',  color: 'var(--color-amber)'  },
  dim:   { label: '· DONE', color: 'var(--color-dim)'    },
  blue:  { label: '◆ COMP', color: 'var(--color-signal)' },
};

export default function WorkGrid({ projects }: { projects: Project[] }) {
  const [active, setActive] = useState(0);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);
  const project = projects[active];
  const status  = statusMap[project.badge];

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const i = Number((entry.target as HTMLElement).dataset.index);
            setActive(i);
          }
        });
      },
      { threshold: 0.55, rootMargin: '-10% 0px -30% 0px' }
    );
    itemRefs.current.forEach((el) => el && obs.observe(el));
    return () => obs.disconnect();
  }, [projects.length]);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-[1fr_1fr] items-start border border-border">

      {/* ── LEFT: sticky detail panel ── */}
      <div className="hidden lg:flex flex-col sticky top-24 border-r border-border p-10 min-h-[480px]">
        <div
          key={active}
          style={{ animation: 'channel-in 0.22s cubic-bezier(0.16,1,0.3,1) both' }}
          className="flex flex-col h-full"
        >
          <div className="flex items-center gap-3 mb-8">
            <span className="font-mono text-[9px] font-bold tracking-[0.12em] uppercase text-muted">
              SRC-{String(active + 1).padStart(2, '0')}
            </span>
            <span className="bc-sep" />
            <span
              className="font-mono text-[9px] font-bold tracking-[0.1em] uppercase"
              style={{ color: status.color }}
            >
              {status.label}
            </span>
          </div>

          <h2
            className="font-extrabold tracking-[-0.04em] text-text leading-[0.93] mb-6"
            style={{ fontSize: 'clamp(2rem, 3.5vw, 2.8rem)' }}
          >
            {project.name}
          </h2>

          <p className="text-[13.5px] text-muted leading-[1.75] mb-6 max-w-[360px] flex-1">
            {project.description}
          </p>

          <div className="flex flex-wrap gap-1.5 mb-8">
            {project.tags.map((t) => (
              <span key={t} className="src-tag">{t}</span>
            ))}
          </div>

          {project.externalHref ? (
            <a
              href={project.externalHref}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary self-start"
            >
              [ OPEN PROJECT ]
            </a>
          ) : (
            <Link href={`/work/${project.slug}`} className="btn-ghost self-start">
              [ VIEW DETAILS ]
            </Link>
          )}
        </div>
      </div>

      {/* ── RIGHT: scrollable channel list ── */}
      <div>
        {projects.map((p, i) => {
          const s = statusMap[p.badge];
          const isActive = i === active;

          return (
            <div
              key={p.slug}
              ref={(el) => { itemRefs.current[i] = el; }}
              data-index={i}
              onClick={() => setActive(i)}
              className="border-b border-border last:border-b-0 cursor-pointer select-none"
              style={{
                background: isActive ? 'var(--color-bg-raised)' : 'transparent',
                transition: 'background 0.15s ease',
              }}
            >
              {/* Row header — always visible */}
              <div className="flex items-center justify-between gap-4 px-7 py-5">
                <div className="flex items-center gap-5 min-w-0">
                  <span className="font-mono text-[10px] font-semibold tracking-[0.06em] text-dim flex-shrink-0">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <span
                    className="font-bold tracking-[-0.02em] truncate transition-colors duration-150"
                    style={{
                      fontSize: '14px',
                      color: isActive ? 'var(--color-text)' : 'var(--color-muted)',
                    }}
                  >
                    {p.name}
                  </span>
                </div>
                <span
                  className="font-mono text-[9px] font-bold tracking-[0.08em] uppercase flex-shrink-0 transition-colors duration-150"
                  style={{ color: isActive ? s.color : 'var(--color-dim)' }}
                >
                  {s.label}
                </span>
              </div>

              {/* Mobile expanded detail */}
              {isActive && (
                <div
                  className="lg:hidden px-7 pb-6"
                  style={{ animation: 'channel-in 0.22s cubic-bezier(0.16,1,0.3,1) both' }}
                >
                  <p className="text-[12.5px] text-muted leading-[1.72] mb-3 max-w-[480px]">
                    {p.description}
                  </p>
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {p.tags.map((t) => (
                      <span key={t} className="src-tag">{t}</span>
                    ))}
                  </div>
                  {p.externalHref ? (
                    <a
                      href={p.externalHref}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-primary"
                    >
                      [ OPEN PROJECT ]
                    </a>
                  ) : (
                    <Link href={`/work/${p.slug}`} className="btn-ghost">
                      [ VIEW DETAILS ]
                    </Link>
                  )}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
