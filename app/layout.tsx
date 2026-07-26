import type { Metadata } from "next";
import { Manrope, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import UnderwaterBackground from "@/components/UnderwaterBackground";
import TileInteractions from "@/components/TileInteractions";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Sandesh Chapagain — Infrastructure Engineer",
  description:
    "Second year engineering at Tor Vergata. I build real-time infrastructure: RTMP relay engines, WebRTC pipelines, browser-native studio tooling.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${manrope.variable} ${jetbrainsMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-bg text-text">
        <UnderwaterBackground />
        <TileInteractions />
        <div className="relative z-10 flex flex-col min-h-full flex-1">
          <Nav />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
