import WorkGrid from '@/components/WorkGrid';
import { projects, jobs } from '@/lib/projects';

export const metadata = {
  title: 'Work — Sandesh Chapagain',
  description:
    'Projects, roles, and competitions. From RTMP relay infrastructure to growth systems to network support.',
};

const liveCount = projects.filter((p) => p.badge === 'live').length;
const wipCount  = projects.filter((p) => p.badge === 'wip').length;

export default function WorkPage() {
  return (
    <div className="pt-16" style={{ minHeight: '100dvh' }}>

      {/* Broadcast status bar */}
      <div className="bc-bar">
        <div className="flex items-center gap-2">
          <span className="bc-label">CH-02</span>
          <span className="bc-sep mx-2" aria-hidden="true" />
          <span className="bc-label">WORK LOG</span>
        </div>
        <span className="font-mono text-[10px] tracking-[0.06em] text-muted hidden sm:inline">
          {projects.length} ENTRIES · {liveCount} LIVE · {wipCount} WIP
        </span>
        <span className="bc-label">ROME · IT</span>
      </div>

      <div className="max-w-[1100px] mx-auto px-5 sm:px-8 py-16">

        <header className="mb-14">
          <p className="bc-label mb-4">Work Log</p>
          <h1
            className="font-extrabold leading-[0.93] tracking-[-0.04em] text-text"
            style={{ fontSize: 'clamp(2.5rem, 6vw, 4.5rem)' }}
          >
            What I&apos;ve<br />worked on.
          </h1>
          <p className="text-[15px] text-muted leading-[1.78] mt-5 max-w-[480px]">
            Projects, roles, and competitions — from RTMP infrastructure to growth systems to network support.
          </p>
        </header>

        <WorkGrid projects={projects} />

        {/* Work Experience */}
        <div className="mt-20">
          <p className="bc-label mb-0">Work Experience</p>
          <div className="flex flex-col mt-1">
            {jobs.map(({ slug, name, description, tags }) => (
              <div
                key={slug}
                className="border-t border-border py-5 grid grid-cols-1 sm:grid-cols-[1fr_auto] gap-3 items-start"
              >
                <div>
                  <p className="text-[13px] font-bold text-text leading-tight mb-1">{name}</p>
                  <p className="text-[12px] text-muted leading-[1.7] max-w-[560px]">{description}</p>
                </div>
                <div className="src-tags sm:justify-end">
                  {tags.map((t) => (
                    <span key={t} className="src-tag">{t}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
