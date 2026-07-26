import type { Metadata, Viewport } from "next";
import { JetBrains_Mono, Manrope, Newsreader } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

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
  title: {
    default: "Sandesh Chapagain — Product Engineer",
    template: "%s — Sandesh Chapagain",
  },
  description:
    "Product engineer in Rome building real-time systems, browser media tools, and technically ambitious products.",
  applicationName: "Sandesh Chapagain",
  authors: [{ name: "Sandesh Chapagain", url: "https://github.com/Dexasan" }],
  creator: "Sandesh Chapagain",
  keywords: [
    "Sandesh Chapagain",
    "product engineer",
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
    title: "Sandesh Chapagain — Product Engineer",
    description:
      "I build the difficult middle between browser interfaces and real-time infrastructure.",
    siteName: "Sandesh Chapagain",
    images: [{ url: "/og.png", width: 1730, height: 909, alt: "Sandesh Chapagain portfolio" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sandesh Chapagain — Product Engineer",
    description:
      "Real-time systems, browser media, and technically ambitious products.",
    images: ["/og.png"],
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#f3efe5",
  colorScheme: "light",
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Sandesh Chapagain",
  url: siteUrl,
  email: "mailto:sendmailtodex@gmail.com",
  sameAs: ["https://github.com/Dexasan"],
  jobTitle: "Product Engineer",
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
      </body>
    </html>
  );
}
