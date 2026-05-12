import styles from './page.module.css';
import PrintButton from './PrintButton';

export const metadata = {
  title: 'CV — Sandesh Chapagain',
  robots: 'noindex',
};

function Section({ label }: { label: string }) {
  return (
    <div className={styles.section}>
      <span className={styles.sectionLabel}>{label}</span>
      <span className={styles.sectionRule} />
    </div>
  );
}

function Entry({
  title,
  org,
  date,
  bullets,
  tags,
}: {
  title: string;
  org: string;
  date: string;
  bullets: string[];
  tags?: string[];
}) {
  return (
    <div className={styles.entry}>
      <div className={styles.entryHeader}>
        <span className={styles.entryTitle}>{title}</span>
        <span className={styles.entryDate}>{date}</span>
      </div>
      <p className={styles.entryOrg}>{org}</p>
      <ul className={styles.bullets}>
        {bullets.map((b, i) => (
          <li key={i} className={styles.bullet}>{b}</li>
        ))}
      </ul>
      {tags && (
        <div className={styles.tags}>
          {tags.map((t) => (
            <span key={t} className={styles.tag}>{t}</span>
          ))}
        </div>
      )}
    </div>
  );
}

export default function CVPage() {
  return (
    <div className={styles.root}>
      <PrintButton />

      <main className={styles.doc}>

        {/* ── HEADER ── */}
        <h1 className={styles.name}>SANDESH CHAPAGAIN</h1>
        <p className={styles.tagline}>Backend Engineer · Rome, Italy</p>
        <div className={styles.contact}>
          <a href="mailto:sendmailtodex@gmail.com">sendmailtodex@gmail.com</a>
          <span className={styles.contactSep}>·</span>
          <a href="tel:+393445946149">(+39) 344 594 6149</a>
          <span className={styles.contactSep}>·</span>
          <a href="https://github.com/Dexasan" target="_blank" rel="noopener noreferrer">
            github.com/Dexasan
          </a>
          <span className={styles.contactSep}>·</span>
          <span>Open to relocation</span>
        </div>
        <div className={styles.divider} />

        {/* ── PROFILE ── */}
        <Section label="Profile" />
        <p className={styles.profile}>
          Co-founder and sole engineer of Ditch — a production live-streaming platform with
          a custom RTMP relay engine, WebRTC participant pipelines, canvas compositor, and
          real-time multi-platform broadcast. Built the complete technical stack from scratch
          while enrolled in Engineering Sciences at Tor Vergata. Accepted into Startcup
          Lazio 2026. Looking for early-stage infrastructure and product engineering roles.
        </p>

        {/* ── PROJECTS ── */}
        <Section label="Projects" />

        <Entry
          title="Ditch — Cross-Platform Live-Streaming Platform"
          org="Co-founder & Sole Engineer · Startcup Lazio 2026 · Tor Vergata"
          date="Jan 2025 – Present"
          bullets={[
            'Custom RTMP relay engine in Node.js: one browser ingest fans out simultaneously to YouTube, Twitch, Kick, and TikTok Live via ffmpeg tee muxer (onfail=ignore keeps surviving destinations running if one drops). Stream encoded once, pushed everywhere.',
            'Canvas compositor at stable 30fps with tab backgrounded — Web Worker frame timer (Workers bypass browser throttling) + Breakout Box API (MediaStreamTrackProcessor / MediaStreamTrackGenerator) + VideoFrame compositing. Layout adapts dynamically: solo, side-by-side, split-row, 2×2 grid.',
            'Real-time server: Socket.io handling unified chat aggregation from all connected platforms, participant signaling, and live session state broadcast to all viewers.',
            'Backend: Fastify REST API, Supabase Postgres (6 tables, custom triggers, RLS policies), participant state machine (waiting → approved → live → removed), server-side RTMP credential management.',
            'Monorepo: Turborepo + pnpm, 4 apps (web, api, realtime, relay), 2 shared packages (types, db). Frontend on Vercel, API / realtime / relay on Railway.',
          ]}
          tags={['Next.js', 'TypeScript', 'Fastify', 'Socket.io', 'WebRTC', 'Agora SDK', 'ffmpeg', 'Canvas API', 'Web Workers', 'Supabase', 'Railway', 'Turborepo']}
        />

        <Entry
          title="RTMP Stream Tools — Internal CLI Toolkit"
          org="Built during Ditch relay development"
          date="2025"
          bullets={[
            'rtmp-probe: wraps ffprobe to inspect codec, bitrate, resolution, and FPS of any live RTMP stream.',
            'loopback-broadcaster: pushes a synthetic test stream (color bars + timecode overlay, or a video file) to any RTMP endpoint via ffmpeg — full relay pipeline testing without a live browser session.',
            'stream-health: pings RTMP destinations on an interval, logging reconnect events. Used daily during backend development.',
          ]}
          tags={['Node.js', 'TypeScript', 'ffmpeg', 'Node Media Server', 'Commander.js']}
        />

        <Entry
          title="WebRTC from Scratch"
          org="Peer-to-peer video calling without SDK dependencies"
          date="2024 – 25"
          bullets={[
            'Implemented ICE negotiation, STUN/TURN, and SDP offer/answer exchange in vanilla JS with a Node.js signaling server — no Agora, no Twilio.',
            'Key finding: most WebRTC connection failures trace to STUN misconfiguration. Directly informed Ditch\'s WebRTC architecture and reduced participant join failures in production.',
          ]}
          tags={['JavaScript', 'WebRTC', 'Node.js', 'STUN/TURN', 'WebSockets']}
        />

        <Entry
          title="BarcaBuzz — Football Content Community"
          org="Co-creator & Growth Lead"
          date="Aug 2022 – Jun 2023"
          bullets={[
            'Grew to 100K+ followers organically in under 10 months, zero paid spend.',
            'Built a structured content pipeline: per-post tracking, A/B testing across format variables (hook, caption length, thumbnail, posting time), engagement feedback loops fed directly back into content decisions.',
            'Key insight: save rate predicts long-tail reach better than immediate engagement. Optimizing for the right metric changes what you build.',
          ]}
          tags={['Content Systems', 'Analytics', 'Audience Growth']}
        />

        {/* ── WORK EXPERIENCE ── */}
        <Section label="Work Experience" />

        <Entry
          title="Network Support Intern"
          org="Intrasoft Networking Solutions · Lalitpur, Nepal"
          date="Jun 2024 – Nov 2024"
          bullets={[
            'Diagnosed and resolved network connectivity issues across client systems; monitored performance using Wireshark and Nagios; configured routers, switches, VoIP phones across multiple sites.',
          ]}
        />

        <Entry
          title="Marketing & Growth Manager"
          org="Pathik Gyan Niketan · Kathmandu, Nepal"
          date="Jul 2023 – Jun 2024"
          bullets={[
            'Managed digital presence across Facebook, Instagram, and TikTok; ran Meta Ads and Google Ads campaigns with ROI tracking via Google Analytics.',
          ]}
        />

        {/* ── EDUCATION ── */}
        <Section label="Education" />

        <Entry
          title="Bachelor in Engineering Sciences (Year 1 of 3)"
          org="Università degli Studi di Roma Tor Vergata · Rome, Italy"
          date="Dec 2024 – Present"
          bullets={['Mathematics · Physics · Electronics · Computing · Control Systems · Mechanics']}
        />

        <Entry
          title="Fundamentals of Digital Marketing"
          org="Google Skillshop · Remote"
          date="Jan – Feb 2023"
          bullets={[]}
        />

        <Entry
          title="School Leaving Certificate"
          org="Valmiki Shiksha Sadan · Bharatpur, Nepal"
          date="Aug 2020 – Jul 2022"
          bullets={[]}
        />

        {/* ── SKILLS ── */}
        <Section label="Technical Skills" />

        <div className={styles.skillsTable}>
          {[
            { k: 'LANGUAGES',  v: 'JavaScript (ES6+) · TypeScript · HTML5 · CSS3 · Python (foundational) · Golang (foundational)' },
            { k: 'REAL-TIME',  v: 'WebRTC · RTMP · ffmpeg · Agora Web SDK · Node Media Server · WebSockets' },
            { k: 'FRAMEWORKS', v: 'Next.js · React · Node.js · Fastify · Tailwind CSS · Express' },
            { k: 'INFRA',      v: 'Docker · Supabase · Railway · Vercel · Git · WSL2/Ubuntu · Turborepo' },
            { k: 'NETWORKING', v: 'TCP/IP · Wireshark · Nagios · Windows Server · Active Directory' },
            { k: 'ANALYTICS',  v: 'Google Analytics · Meta Ads Manager · Google Ads' },
          ].map(({ k, v }, i, arr) => (
            <div
              key={k}
              className={`${styles.skillRow} ${i === arr.length - 1 ? styles.skillRowLast : ''}`}
            >
              <span className={styles.skillKey}>{k}</span>
              <span className={styles.skillVal}>{v}</span>
            </div>
          ))}
        </div>

        {/* ── LANGUAGES ── */}
        <Section label="Languages" />
        <p className={styles.langLine}>
          Nepali (Native) &nbsp;·&nbsp; English (C2) &nbsp;·&nbsp; Hindi (C2) &nbsp;·&nbsp; Italian (B1)
        </p>

      </main>
    </div>
  );
}
