import { ImageResponse } from "next/og";

export const size = { width: 64, height: 64 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          position: "relative",
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          overflow: "hidden",
          border: "3px solid #4bd4ce",
          borderRadius: "50%",
          background: "linear-gradient(145deg, #15306b, #050816 72%)",
          color: "#f8fbff",
          fontSize: 31,
          fontWeight: 900,
          letterSpacing: "-3px",
        }}
      >
        <div
          style={{
            position: "absolute",
            width: 48,
            height: 22,
            border: "2px solid rgba(126,232,227,.65)",
            borderRadius: "50%",
            transform: "rotate(-28deg)",
          }}
        />
        <div
          style={{
            position: "absolute",
            top: 12,
            right: 8,
            width: 7,
            height: 7,
            borderRadius: "50%",
            background: "#ffffff",
            boxShadow: "0 0 8px #4bd4ce",
          }}
        />
        <span style={{ position: "relative", marginLeft: -2 }}>S</span>
      </div>
    ),
    size,
  );
}
