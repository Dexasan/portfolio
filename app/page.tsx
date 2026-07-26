import Link from "next/link";
import InterestGraphic from "@/components/InterestGraphic";
import { caseStudies } from "@/lib/projects";

const selected = caseStudies.slice(0, 4);

const skillGroups = [
  {
    index: "01",
    title: "Interfaces",
    description:
      "Responsive product interfaces where complex system state stays understandable.",
    skills: ["React", "Next.js", "TypeScript", "Canvas 2D", "Web APIs"],
  },
  {
    index: "02",
    title: "Real-time media",
    description:
      "Live browser experiences that move video, audio, events, and control state reliably.",
    skills: ["WebRTC", "WebCodecs", "Socket.io", "WebSockets", "ffmpeg"],
  },
  {
    index: "03",
    title: "Backend & data",
    description:
      "Service boundaries, APIs, persistence, and transaction rules built to survive failure.",
    skills: ["Fastify", "Node.js", "Python", "SQLite", "Supabase"],
  },
  {
    index: "04",
    title: "Engineering practice",
    description:
      "Making assumptions explicit through models, tests, documentation, and deployment.",
    skills: ["System design", "API design", "Testing", "Git", "Vercel & Railway"],
  },
];

export default function HomePage() {
  return (
    <>
      <section className="hero shell">
        <div className="hero-meta reveal reveal-1">
          <p>Engineering Sciences student</p>
          <p>Rome, Italy</p>
          <p>UTC +02</p>
        </div>
        <div className="hero-stage">
          <div className="hero-copy">
            <p className="eyebrow reveal reveal-1">Student · Builder · Interested in systems</p>
            <h1 className="reveal reveal-2">
              I&apos;m learning by building things that have to work <em>in real time.</em>
            </h1>
          </div>
          <InterestGraphic />
        </div>
        <div className="hero-intro reveal reveal-3">
          <p>
            I&apos;m Sandesh Chapagain, an Engineering Sciences student in
            Rome interested in real-time systems, browser media, backend
            infrastructure, and ambitious software. I learn by tracing the
            complete path from interface to network to runtime.
          </p>
          <div className="hero-actions">
            <Link className="button button-dark" href="/work">Explore selected projects</Link>
            <a className="button button-line" href="mailto:sendmailtodex@gmail.com">Start a conversation</a>
          </div>
        </div>
      </section>

      <section className="skills-section">
        <div className="skills-orb skills-orb-one" aria-hidden="true" />
        <div className="skills-orb skills-orb-two" aria-hidden="true" />
        <div className="shell skills-layout">
          <header className="skills-heading">
            <p className="eyebrow">Skills &amp; tools</p>
            <h2>I build across the whole path.</h2>
            <p>
              From the interface a person touches to the services, media paths,
              and data rules underneath it.
            </p>
          </header>
          <div className="skills-list">
            {skillGroups.map((group) => (
              <article className="skill-row" key={group.title}>
                <span className="skill-index">{group.index}</span>
                <div className="skill-copy">
                  <h3>{group.title}</h3>
                  <p>{group.description}</p>
                </div>
                <div className="skill-tags" aria-label={`${group.title} skills`}>
                  {group.skills.map((skill) => <span key={skill}>{skill}</span>)}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="selected-work">
        <div className="project-atmosphere project-atmosphere-one" aria-hidden="true" />
        <div className="project-atmosphere project-atmosphere-two" aria-hidden="true" />
        <header className="projects-heading shell">
          <div>
            <p className="eyebrow">Selected projects</p>
            <h2>Things I built because I wanted them to exist.</h2>
          </div>
          <p>
            Personal, academic, and product work. No mock screenshots—just what
            each project does, why it matters, and what it took to build.
          </p>
        </header>

        <div className="project-shelf-meta shell">
          <span>01 / 04</span>
          <span>Scroll to explore</span>
          <span className="project-shelf-line"><i /></span>
        </div>

        <div className="project-list" aria-label="Selected projects">
          {selected.map((project) => (
            <article className="project-card" key={project.slug}>
              <header className="project-card-head">
                <div>
                  <p>{project.kicker}</p>
                  <h3>
                    {project.title}
                    <small>{project.year}</small>
                  </h3>
                </div>
                <span className="project-stage">{project.stage}</span>
              </header>
              <p className="project-description">{project.summary}</p>
              <p className="project-explanation">{project.solution}</p>
              <div className="project-tech-list" aria-label={`${project.title} technologies`}>
                {project.stack.slice(0, 6).map((technology) => (
                  <span key={technology}>{technology}</span>
                ))}
              </div>
              <footer className="project-card-links">
                <Link href={`/work/${project.slug}`}>Read case study <span aria-hidden="true">-&gt;</span></Link>
                {project.links[0] && (
                  <a
                    href={project.links[0].href}
                    target={project.links[0].href.startsWith("http") ? "_blank" : undefined}
                    rel={project.links[0].href.startsWith("http") ? "noreferrer" : undefined}
                  >
                    {project.links[0].label} <span aria-hidden="true">-&gt;</span>
                  </a>
                )}
              </footer>
            </article>
          ))}
        </div>

        <div className="projects-all shell">
          <Link href="/work">View the complete project archive <span aria-hidden="true">-&gt;</span></Link>
        </div>
      </section>

      <section className="about-strip shell section-block">
        <p className="eyebrow">How I learn and build</p>
        <blockquote>
          Start with the failure boundary. Make the model visible.
          <em> Add complexity only when the system earns it.</em>
        </blockquote>
        <div className="principles-grid">
          <article>
            <span>01</span>
            <h3>Trace the whole path</h3>
            <p>I like work that crosses boundaries: UI to state, state to network, network to infrastructure.</p>
          </article>
          <article>
            <span>02</span>
            <h3>Prefer evidence</h3>
            <p>Metrics, source code, failure modes, and tests are more useful than confident adjectives.</p>
          </article>
          <article>
            <span>03</span>
            <h3>Design the explanation</h3>
            <p>A technically correct system still fails if its interface hides the decisions a person needs to make.</p>
          </article>
        </div>
        <Link className="button button-line" href="/about">More about me</Link>
      </section>
    </>
  );
}
