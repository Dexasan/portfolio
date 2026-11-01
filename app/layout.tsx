import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
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
export const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://iamdex.xyz";
export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Sandesh Chapagain — Independent builder",
    template: "%s — Sandesh Chapagain",
  },
  description:
    "The independent work of Sandesh Chapagain. Engineering Sciences student in Rome, building Yappie, DITCH, and software that brings people together.",
  authors: [{ name: "Sandesh Chapagain", url: "https://github.com/Dexasan" }],
  creator: "Sandesh Chapagain",
  openGraph: {
    type: "website",
    url: "/",
    title: "Sandesh Chapagain — Things that bring us together",
    description:
      "Yappie. DITCH. Independent software with someone on the other side.",
    siteName: "Sandesh Chapagain",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Sandesh Chapagain — Independent builder",
      },
    ],
  },
  twitter: { card: "summary_large_image", images: ["/opengraph-image"] },
  robots: { index: true, follow: true },
};
export const viewport: Viewport = {
  themeColor: "#f1ebdd",
  colorScheme: "light",
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(person) }}
        />
      </body>
    </html>
  );
}
