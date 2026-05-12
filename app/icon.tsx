import { ImageResponse } from 'next/og'

export const size = { width: 32, height: 32 }
export const contentType = 'image/png'

export default function Icon() {
  return new ImageResponse(
    <div
      style={{
        background: '#0e0e0c',
        width: '100%',
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <span
        style={{
          fontFamily: 'monospace',
          fontSize: 22,
          fontWeight: 800,
          color: '#e8212e',
          lineHeight: 1,
        }}
      >
        D
      </span>
    </div>,
    { ...size }
  )
}
