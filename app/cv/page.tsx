import Image from 'next/image';
import { Source_Serif_4, Source_Sans_3, IBM_Plex_Mono } from 'next/font/google';
import styles from './page.module.css';
import PrintButton from './PrintButton';

const serif = Source_Serif_4({
  variable: '--cv-serif',
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  style: ['normal', 'italic'],
  display: 'swap',
});

const sans = Source_Sans_3({
  variable: '--cv-sans',
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  display: 'swap',
});

const mono = IBM_Plex_Mono({
  variable: '--cv-mono',
  subsets: ['latin'],
  weight: ['400', '500'],
  display: 'swap',
});

export const metadata = {
  title: 'CV — Sandesh Chapagain',
  robots: 'noindex',
};

function Section({ label }: { label: string }) {
  return <p className={styles.section}>{label}</p>;
}

function Head({ title, org, date, href }: { title: string; org?: string; date: string; href?: string }) {
  return (
    <div className={styles.head}>
      <span className={styles.date}>{date}</span>
      <span className={styles.title}>
        {href ? (
          <a className={styles.link} href={href} target="_blank" rel="noopener noreferrer">
            {title}
          </a>
        ) : (
          title
        )}
        {org && <span className={styles.at}> {org}</span>}
      </span>
    </div>
  );
}

const REPOS: { name: string; href: string; desc: string; stack: string }[] = [
  {
    name: 'PulseForge',
    href: 'https://github.com/Dexasan/PulseForge',
    desc: 'durable job orchestration with retries, idempotency and dead letters.',
    stack: 'TypeScript',
  },
  {
    name: 'SignalScope',
    href: 'https://github.com/Dexasan/SignalScope',
    desc: 'WebRTC observability: quality scoring and anomaly diagnosis.',
    stack: 'TypeScript',
  },
  {
    name: 'DriftSafe',
    href: 'https://github.com/Dexasan/DriftSafe',
    desc: 'static risk analysis for PostgreSQL migrations, SARIF output for CI.',
    stack: 'Python',
  },
  {
    name: 'CanaryKit',
    href: 'https://github.com/Dexasan/CanaryKit',
    desc: 'feature flags with deterministic bucketing and explainable decisions.',
    stack: 'TypeScript',
  },
  {
    name: 'LocalLens',
    href: 'https://github.com/Dexasan/LocalLens',
    desc: 'citation-first local retrieval, hybrid ranking, no cloud calls.',
    stack: 'TypeScript',
  },
  {
    name: 'VerityLedger',
    href: 'https://github.com/Dexasan/VerityLedger',
    desc: 'double-entry ledger: integer money, hash-chained audit log.',
    stack: 'Python',
  },
  {
    name: 'ArchScale',
    href: 'https://arch-scale-lac.vercel.app',
    desc: 'capacity planning for throughput, storage, topology and cost.',
    stack: 'TypeScript',
  },
  {
    name: 'Roadrash',
    href: 'https://roadrash-rho.vercel.app',
    desc: 'pseudo-3D browser racer on Canvas 2D, no game engine.',
    stack: 'TypeScript',
  },
];

const SKILLS: [string, string][] = [
  ['Languages', 'TypeScript · JavaScript · Python · SQL · Go and C (foundational)'],
  ['Real-time', 'WebRTC · WebCodecs · RTMP · ffmpeg · Canvas API · Web Workers · WebSockets'],
  ['Backend', 'Node.js · Fastify · Socket.io · PostgreSQL · Supabase (Auth, RLS) · REST · JWT'],
  ['Frontend', 'Next.js (App Router) · React · Zustand · Tailwind CSS'],
  ['Infra', 'Docker · Railway · Vercel · Turborepo · GitHub Actions · Git · Linux'],
  ['Spoken', 'Nepali (native) · English (C2) · Hindi (C2) · Italian (B1)'],
];

export default function CVPage() {
  return (
    <div className={`${serif.variable} ${sans.variable} ${mono.variable} ${styles.root}`}>
      <PrintButton />

      <main className={styles.doc}>
        <Image
          className={styles.photo}
          src="/sandesh.jpg"
          alt="Sandesh Chapagain"
          width={480}
          height={600}
          priority
        />
        <h1 className={styles.name}>SANDESH CHAPAGAIN</h1>
        <p className={styles.tagline}>
          Backend &amp; Infrastructure Engineer &nbsp;·&nbsp; Real-time media and distributed systems
        </p>
        <p className={styles.contact}>
          <a href="mailto:sendmailtodex@gmail.com">sendmailtodex@gmail.com</a>
          <span className={styles.sep}>·</span>
          <a href="tel:+393445946149">(+39) 344 594 6149</a>
          <span className={styles.sep}>·</span>Rome, Italy
          <span className={styles.sep}>·</span>Open to relocation
        </p>
        <p className={`${styles.contact} ${styles.contactLinks}`}>
          <a className={styles.link} href="https://iamdex.xyz">iamdex.xyz</a>
          <span className={styles.sep}>·</span>
          <a className={styles.link} href="https://github.com/Dexasan">github.com/Dexasan</a>
        </p>
        <div className={styles.ruleTop} />

        <Section label="Profile" />
        <p>
          Backend and infrastructure engineer working on real-time media. Founder and sole engineer of{' '}
          <strong>Ditch</strong>, a browser-based streaming studio in production that composes, encodes
          and goes live to YouTube, Twitch, TikTok and Kick from a single tab. I also build small,
          inspectable systems tools in the open. Second-year Engineering Sciences at Tor Vergata,
          looking for infrastructure and product engineering roles.
        </p>

        <Section label="Selected Work" />
        <div className={styles.entry}>
          <Head
            title="Ditch"
            org="— Browser-Based Live Streaming Studio"
            date="Jan 2026 – Present"
            href="https://ditchlive.app"
          />
          <p className={styles.org}>Founder &amp; Sole Engineer · Startcup Lazio 2026 · Live in production</p>
          <ul className={styles.list}>
            <li>
              <strong>Studio in the browser:</strong> canvas compositor with scenes, layers and a live
              preview, holding 30fps even with the tab backgrounded — no install, no hardware encoder.
            </li>
            <li>
              <strong>Encode once, push everywhere:</strong> WebCodecs H.264/Opus encoding streamed to a
              custom relay that fans out to four platforms through ffmpeg; one destination failing never
              drops the others.
            </li>
            <li>
              <strong>Platform:</strong> Fastify API, Socket.io realtime layer, Supabase Postgres with
              RLS — a TypeScript monorepo of four services on Vercel and Railway.
            </li>
            <li>
              <strong>Reliability:</strong> bounded upload buffer with ffmpeg backpressure, single-flight
              auto-reconnect, and local JWT verification that kept traffic serving through an auth outage.
            </li>
          </ul>
        </div>

        <Section label="Open Source" />
        <ul className={styles.list}>
          {REPOS.map(({ name, href, desc, stack }) => (
            <li key={name}>
              <strong>
                <a className={styles.link} href={href} target="_blank" rel="noopener noreferrer">
                  {name}
                </a>
              </strong>{' '}
              — {desc} <span className={styles.stack}>{stack}</span>
            </li>
          ))}
        </ul>

        <Section label="Experience" />

        <div className={styles.job}>
          <Head
            title="Network Support Intern"
            org="· Intrasoft Networking Solutions, Nepal"
            date="Jun – Nov 2024"
          />
          <p>
            Diagnosed client network faults, monitored with Wireshark and Nagios, configured routers and
            switches.
          </p>
        </div>

        <div className={styles.job}>
          <Head
            title="Marketing & Growth Manager"
            org="· Pathik Gyan Niketan, Nepal"
            date="Jul 2023 – Jun 2024"
          />
          <p>Digital presence across three platforms; Meta and Google Ads campaigns with ROI tracking.</p>
        </div>

        <div className={styles.job}>
          <Head title="Co-creator & Growth Lead" org="· BarcaBuzz" date="Aug 2022 – Jun 2023" />
          <p>
            Grew a football community to 100K+ followers organically on a tracked, A/B tested content
            pipeline.
          </p>
        </div>

        <Section label="Education" />
        <Head
          title="B.Sc. Engineering Sciences"
          org="· Università di Roma Tor Vergata"
          date="Dec 2024 – Present"
        />
        <p className={styles.org}>Year 2 of 3 · Mathematics, Physics, Electronics, Computing, Control Systems</p>

        <Section label="Technical Skills" />
        {SKILLS.map(([key, value]) => (
          <div key={key} className={styles.row}>
            <span className={styles.key}>{key}</span>
            <span>{value}</span>
          </div>
        ))}
      </main>
    </div>
  );
}
