import WorkGrid from '@/components/WorkGrid';
import { projects, jobs } from '@/lib/projects';

export const metadata = {
  title: 'Work — Sandesh Chapagain',
  description:
    'Projects, roles, and competitions. From RTMP relay infrastructure to growth systems to network support.',
};

export default function WorkPage() {
  return (
    <div className="pt-16" style={{ minHeight: '100dvh' }}>
      <div className="max-w-[1100px] mx-auto px-5 sm:px-8 py-20">

        <header className="mb-14">
          <p className="section-label">Work</p>
          <h1
            className="font-extrabold leading-[1.0] tracking-[-0.04em] text-text"
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
          <p className="section-label">Experience</p>
          <div className="flex flex-col">
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
