'use client';

export default function PrintButton() {
  return (
    <div
      className="no-print"
      style={{
        position: 'fixed',
        top: '16px',
        right: '20px',
        zIndex: 50,
        display: 'flex',
        gap: '8px',
      }}
    >
      <button
        onClick={() => window.print()}
        style={{
          fontFamily: 'var(--font-mono), monospace',
          fontSize: '10px',
          fontWeight: 700,
          letterSpacing: '0.08em',
          textTransform: 'uppercase',
          padding: '7px 14px',
          background: 'transparent',
          color: '#555',
          border: '1px solid #ccc',
          borderRadius: 0,
          cursor: 'pointer',
        }}
      >
        [ PRINT / SAVE PDF ]
      </button>
    </div>
  );
}
