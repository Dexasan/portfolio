import Link from "next/link";
import TransmissionField from "@/components/TransmissionField";
import { caseStudies } from "@/lib/projects";

const selected = caseStudies.slice(0, 4);

const skillGroups = [
  {
    title: "Interfaces",
    note: "Making complex systems feel simple to use.",
    skills: ["React", "Next.js", "TypeScript", "Canvas 2D", "Web APIs"],
  },
  {
    title: "Live media",
    note: "Moving video, audio, and state through the browser.",
    skills: ["WebRTC", "WebCodecs", "Socket.io", "WebSockets", "ffmpeg"],
  },
  {
    title: "Backend & data",
    note: "Services and rules that hold up when things fail.",
    skills: ["Fastify", "Node.js", "Python", "SQLite", "Supabase"],
  },
  {
    title: "Engineering",
    note: "Turning assumptions into models, tests, and deployable work.",
    skills: ["System design", "API design", "Testing", "Git", "Vercel", "Railway"],
  },
];

export default function HomePage() {
  return (
    <div className="portfolio-home">
      <TransmissionField />
      <section className="world-hero" id="top">
        <div className="world-sheen" aria-hidden="true" />
        <div className="world-constellation constellation-one" aria-hidden="true"><i /><i /><i /><i /></div>
        <div className="world-constellation constellation-two" aria-hidden="true"><i /><i /><i /></div>
        <div className="shell world-copy">
          <p className="world-greeting reveal reveal-1">Hi there! I&apos;m—</p>
          <h1 className="reveal reveal-2">Sandesh<br /><span>Chapagain.</span></h1>
          <p className="world-role reveal reveal-3">
            Engineering Sciences student building playful interfaces,
            real-time media, and reliable systems.
          </p>
          <div className="world-actions reveal reveal-4">
            <a href="#projects">Dive into projects</a>
            <a href="mailto:sendmailtodex@gmail.com">Say hello</a>
          </div>
        </div>
        <a className="dive-cue" href="#about">
          <span>Scroll to dive</span>
          <i aria-hidden="true">↓</i>
        </a>
      </section>

      <section className="ocean-about" id="about">
        <div className="ocean-ridge ridge-top" aria-hidden="true" />
        <div className="jelly-field" aria-hidden="true">
          <span className="moon-jelly jelly-one"><i /><i /><i /><i /></span>
          <span className="moon-jelly jelly-two"><i /><i /><i /><i /></span>
          <span className="moon-jelly jelly-three"><i /><i /><i /><i /></span>
        </div>
        <div className="shell about-current">
          <p className="world-kicker">01 / About me</p>
          <div className="about-current-copy">
            <h2>I like software you can <em>feel</em> working.</h2>
            <div>
              <p>
                I&apos;m Sandesh, from Chitwan, Nepal, and now an international
                Engineering Sciences student in Rome. I learn by following a
                system end to end—from the interface, through state and
                networks, down to the runtime underneath.
              </p>
              <p>
                Most of that curiosity is going into Ditch: a browser-native
                live studio for composing a show, bringing viewers on screen,
                and sending one broadcast to multiple platforms.
              </p>
              <Link href="/about">More of my story <span aria-hidden="true">→</span></Link>
            </div>
          </div>
        </div>
      </section>

      <section className="ocean-skills" id="skills">
        <div className="fish-school" aria-hidden="true">
          <i /><i /><i /><i /><i />
        </div>
        <div className="shell">
          <header className="ocean-section-heading">
            <p className="world-kicker">02 / Skills &amp; tools</p>
            <h2>The parts of the ocean<br />I know how to navigate.</h2>
          </header>
          <div className="current-list">
            {skillGroups.map((group, index) => (
              <article className="current-row" key={group.title}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <div>
                  <h3>{group.title}</h3>
                  <p>{group.note}</p>
                </div>
                <div className="current-tags">
                  {group.skills.map((skill) => <i key={skill}>{skill}</i>)}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="ocean-projects" id="projects">
        <div className="project-ridge" aria-hidden="true" />
        <div className="shell ocean-section-heading projects-intro">
          <div>
            <p className="world-kicker">03 / Projects</p>
            <h2>Things I built<br />out of curiosity.</h2>
          </div>
          <p>
            Personal experiments and serious systems, described by what they
            actually do. Scroll sideways to explore.
          </p>
        </div>

        <div className="ocean-project-track" aria-label="Selected projects">
          {selected.map((project) => (
            <article className="ocean-project-card" key={project.slug}>
              <header>
                <div>
                  <h3>{project.title} <small>{project.year}</small></h3>
                  <p>{project.kicker}</p>
                </div>
                <span>{project.stage}</span>
              </header>
              <p className="ocean-project-summary">{project.summary}</p>
              <p className="ocean-project-detail">{project.solution}</p>
              <div className="ocean-tech">
                {project.stack.slice(0, 7).map((item) => <span key={item}>{item}</span>)}
              </div>
              <footer>
                {project.links[0] && (
                  <a
                    href={project.links[0].href}
                    target={project.links[0].href.startsWith("http") ? "_blank" : undefined}
                    rel={project.links[0].href.startsWith("http") ? "noreferrer" : undefined}
                  >
                    {project.links[0].label} <span aria-hidden="true">↗</span>
                  </a>
                )}
              </footer>
            </article>
          ))}
        </div>

        <div className="shell project-archive-link">
          <Link href="/work">
            <span>Open the full</span>
            <strong>project archive</strong>
            <span className="archive-arrow" aria-hidden="true">↗</span>
          </Link>
        </div>
      </section>
    </div>
  );
}
