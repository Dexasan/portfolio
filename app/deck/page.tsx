import type { Metadata } from 'next';

const PDF = '/DITCH-Deck.pdf';

export const metadata: Metadata = {
  title: 'Pitch Deck — DITCH',
  description: 'DITCH — the consumer-first live platform. Pitch deck.',
  // Confidential, share-by-link only: keep it out of search engines.
  robots: { index: false, follow: false },
};

export default function DeckPage() {
  return (
    <div className="flex flex-col h-[100dvh] bg-bg">
      {/* Top bar */}
      <header className="flex items-center justify-between gap-4 px-5 sm:px-8 h-14 border-b border-border flex-shrink-0">
        <div className="flex items-center gap-3 min-w-0">
          <a
            href="/work"
            className="text-[13px] font-medium text-muted hover:text-text transition-colors whitespace-nowrap"
          >
            &larr; Portfolio
          </a>
          <span className="bc-sep" />
          <span className="font-mono text-[11px] tracking-[0.06em] uppercase text-muted truncate">
            DITCH &middot; Pitch Deck
          </span>
        </div>
        <div className="flex items-center gap-2 flex-shrink-0">
          <a
            href={PDF}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-ghost text-[12px] px-3 py-1.5"
          >
            Open
          </a>
          <a href={PDF} download className="btn-primary text-[12px] px-3 py-1.5">
            Download
          </a>
        </div>
      </header>

      {/* Embedded deck — native browser PDF viewer (renders inline on desktop).
          The "Open" button above is the fallback for mobile browsers that
          download PDFs in an iframe rather than rendering them. */}
      <iframe
        src={`${PDF}#view=FitH`}
        title="DITCH Pitch Deck"
        className="flex-1 w-full border-0"
        style={{ background: '#0B0B12' }}
      />
    </div>
  );
}
