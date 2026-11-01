import { ImageResponse } from "next/og";
export const alt = "Sandesh Chapagain — Independent builder";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export default function OpenGraph() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          background: "#f1ebdd",
          color: "#24231f",
          padding: "45px 55px",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            borderBottom: "2px solid #24231f",
            paddingBottom: 25,
            fontSize: 19,
          }}
        >
          <span>SANDESH CHAPAGAIN</span>
          <span>INDEPENDENT BUILDER / ROME</span>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            fontSize: 85,
            fontWeight: 800,
            letterSpacing: -4,
            lineHeight: 1.02,
            marginTop: 42,
          }}
        >
          <span>I BUILD THINGS</span>
          <span>THAT BRING US</span>
          <span
            style={{
              color: "#c33c25",
              fontFamily: "serif",
              fontStyle: "italic",
              fontWeight: 400,
              fontSize: 112,
            }}
          >
            together.
          </span>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginTop: "auto",
            fontSize: 17,
          }}
        >
          <span>YAPPIE / DITCH / SELECTED WORK</span>
          <span>iamdex.xyz ↗</span>
        </div>
      </div>
    ),
    size,
  );
}
