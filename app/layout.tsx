import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import "./globals.css";
import "./dark.css";
import "./portrait.css";
import "./motion.css";
import "./art-theme.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import PageMotion from "@/components/PageMotion";
import { siteUrl } from "@/lib/site";
const display = localFont({
  src: "../public/fonts/BarlowCondensed-Bold.ttf",
  variable: "--font-display",
  display: "swap",
});
const body = localFont({
  src: "../public/fonts/DMSans-Regular.ttf",
  variable: "--font-sans",
  display: "swap",
});
const serif = localFont({
  src: [
    { path: "../public/fonts/InstrumentSerif-Regular.ttf", style: "normal" },
    { path: "../public/fonts/InstrumentSerif-Italic.ttf", style: "italic" },
  ],
  variable: "--font-serif",
  display: "swap",
});
export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Sandesh Chapagain | minds, machines & connection",
    template: "%s | Sandesh Chapagain",
  },
  description:
    "hey, i'm sandesh. curious about cognitive science, the next generation of computing, and how we connect with each other and our machines.",
  authors: [{ name: "Sandesh Chapagain", url: "https://github.com/Dexasan" }],
  creator: "Sandesh Chapagain",
  openGraph: {
    type: "website",
    url: "/",
    title: "Sandesh Chapagain | minds, machines & connection",
    description:
      "computers got me curious. how we think keeps me there. exploring cognition, computing and connection.",
    siteName: "Sandesh Chapagain",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Sandesh Chapagain | minds, machines & connection",
      },
    ],
  },
  twitter: { card: "summary_large_image", images: ["/opengraph-image"] },
  robots: { index: true, follow: true },
};
export const viewport: Viewport = {
  themeColor: "#171c22",
  colorScheme: "dark",
};
const person = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Sandesh Chapagain",
  url: siteUrl,
  sameAs: ["https://github.com/Dexasan"],
  jobTitle: "Engineering Sciences Student",
};
export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      data-scroll-behavior="smooth"
      lang="en"
      className={`${display.variable} ${body.variable} ${serif.variable}`}
    >
      <body>
        <a className="skip-link" href="#main-content">
          Skip to content
        </a>
        <Nav />
        <main id="main-content">{children}</main>
        <Footer />
        <PageMotion />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(person) }}
        />
      </body>
    </html>
  );
}
