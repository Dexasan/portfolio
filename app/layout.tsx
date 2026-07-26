import type { Metadata, Viewport } from "next";
import { JetBrains_Mono, Manrope, Newsreader } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import MotionController from "@/components/MotionController";
import TileInteractions from "@/components/TileInteractions";

const manrope = Manrope({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

const newsreader = Newsreader({
  variable: "--font-serif",
  subsets: ["latin"],
  display: "swap",
  style: ["normal", "italic"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  display: "swap",
});

export const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  "https://portfolio-delta-beige-85.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Sandesh Chapagain",
  description:
    "Engineering Sciences student in Rome interested in real-time systems, browser media, backend infrastructure, and ambitious software.",
  applicationName: "Sandesh Chapagain",
  authors: [{ name: "Sandesh Chapagain", url: "https://github.com/Dexasan" }],
  creator: "Sandesh Chapagain",
  keywords: [
    "Sandesh Chapagain",
    "engineering student",
    "real-time systems",
    "WebRTC",
    "WebCodecs",
    "RTMP",
    "TypeScript",
    "Next.js",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: "/",
    title: "Sandesh Chapagain — Engineering Student",
    description:
      "Engineering Sciences student interested in real-time systems, browser media, and backend infrastructure.",
    siteName: "Sandesh Chapagain",
    images: [{ url: "/portfolio-world.png", width: 1717, height: 916, alt: "Sandesh Chapagain portfolio world" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sandesh Chapagain — Engineering Student",
    description:
      "Real-time systems, browser media, backend infrastructure, and ambitious software.",
    images: ["/portfolio-world.png"],
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#050816",
  colorScheme: "dark light",
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Sandesh Chapagain",
  url: siteUrl,
  email: "mailto:sendmailtodex@gmail.com",
  sameAs: ["https://github.com/Dexasan"],
  jobTitle: "Engineering Sciences Student",
  knowsAbout: [
    "Real-time systems",
    "Browser media",
    "WebRTC",
    "RTMP",
    "TypeScript",
    "Node.js",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${manrope.variable} ${newsreader.variable} ${jetbrainsMono.variable}`}
    >
      <body>
        <a className="skip-link" href="#main-content">Skip to content</a>
        <Nav />
        <main id="main-content">{children}</main>
        <Footer />
        <MotionController />
        <TileInteractions />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
      </body>
    </html>
  );
}
