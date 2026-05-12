export type Badge = 'live' | 'wip' | 'dim' | 'blue';

export interface Project {
  slug: string;
  name: string;
  badge: Badge;
  description: string;
  tags: string[];
  externalHref?: string;
}

export const projects: Project[] = [
  {
    slug: 'ditch',
    name: 'Ditch',
    badge: 'live',
    externalHref: 'https://ditch-web-drab.vercel.app',
    description:
      'Cross-platform live streaming architecture. One RTMP ingest fans out simultaneously to Twitch, YouTube, TikTok, and Kick. Browser studio, end-to-end participant system, unified chat aggregated across all platforms.',
    tags: ['Node.js', 'RTMP', 'ffmpeg', 'WebRTC', 'Supabase', 'Turborepo'],
  },
  {
    slug: 'ditch-studio',
    name: 'Ditch Studio',
    badge: 'wip',
    description:
      'Browser-native OBS alternative. Canvas compositor, scene switching, WebRTC capture, audio mixing. Background-tab safe via Web Worker and Breakout Box API. Zero install required.',
    tags: ['Canvas API', 'WebRTC', 'Next.js', 'Agora SDK', 'Web Audio'],
  },
  {
    slug: 'startcup-lazio',
    name: 'Startcup Lazio 2026',
    badge: 'blue',
    description:
      "Full competition entry for Italy's leading university startup competition, submitted via Tor Vergata. Executive summary, 12-slide pitch deck, Business Model Canvas, business plan with market sizing and financial projections.",
    tags: ['Business Plan', 'Pitch Deck', 'Market Analysis'],
  },
  {
    slug: 'barcabuzz',
    name: 'BarcaBuzz',
    badge: 'dim',
    description:
      'Analytics and content-growth infrastructure behind a football community. 100K+ followers, zero paid spend, approximately 12 months from zero. Per-post tracking, A/B testing, engagement feedback loops.',
    tags: ['Growth Systems', 'Analytics', 'Content Pipeline'],
  },
  {
    slug: 'rtmp-stream-tools',
    name: 'RTMP Stream Tools',
    badge: 'dim',
    description:
      'Internal CLI toolkit for testing and debugging RTMP pipelines: sim, validate, monitor, probe. Built to cut iteration time during relay development. Not published; lives inside the Ditch monorepo.',
    tags: ['Node.js', 'TypeScript', 'ffmpeg', 'CLI'],
  },
  {
    slug: 'webrtc-from-scratch',
    name: 'WebRTC from Scratch',
    badge: 'dim',
    description:
      'Peer-to-peer browser video calling with no SDK. Implemented ICE negotiation, STUN/TURN, and SDP offer/answer exchange in vanilla JS with a Node.js signaling server. Key finding directly informed Ditch\'s WebRTC architecture.',
    tags: ['JavaScript', 'WebRTC', 'Node.js', 'STUN/TURN', 'WebSockets'],
  },
];

export const jobs: Project[] = [
  {
    slug: 'intrasoft-networking',
    name: 'Network Support Intern',
    badge: 'dim',
    description:
      'Intrasoft Networking Solutions · Nepal · Jun – Nov 2024. Diagnosed connectivity issues across client systems, monitored with Wireshark and Nagios, configured routers, switches, and VoIP across multiple sites.',
    tags: ['TCP/IP', 'Wireshark', 'Nagios', 'Windows Server', 'Active Directory', 'VoIP'],
  },
  {
    slug: 'pathik-gyan-marketing',
    name: 'Marketing & Growth Manager',
    badge: 'dim',
    description:
      'Pathik Gyan Niketan · Nepal · Jul 2023 – Jun 2024. Managed Facebook, Instagram, and TikTok. Ran Meta Ads and Google Ads campaigns with ROI tracking via Google Analytics.',
    tags: ['Meta Ads', 'Google Ads', 'Google Analytics', 'Content', 'Social Media'],
  },
];
