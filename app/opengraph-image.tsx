import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";
export const alt =
  "Sandesh Chapagain — Apps, live media, and independent experiments";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export default async function OpenGraph() {
  const font = await readFile(
    join(process.cwd(), "public/fonts/BarlowCondensed-Bold.ttf"),
  );
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          background: "#111110",
          color: "#f1ebdd",
          padding: "42px 55px",
          fontFamily: "Barlow",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            borderBottom: "1px solid #454238",
            paddingBottom: 22,
            fontSize: 23,
          }}
        >
          <span style={{ color: "#ff775d" }}>✳ sandesh.exe</span>
          <span>INDEPENDENT BUILDER / ROME</span>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            fontSize: 150,
            letterSpacing: -3,
            lineHeight: 0.88,
            marginTop: 40,
          }}
        >
          <span>SANDESH</span>
          <span>
            CHAPAGAIN<span style={{ color: "#ff775d" }}>.</span>
          </span>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginTop: "auto",
            paddingTop: 22,
            borderTop: "1px solid #454238",
            fontSize: 25,
          }}
        >
          <span>YAPPIE / DITCH / SELECTED WORK</span>
          <span style={{ color: "#ff775d" }}>iamdex.xyz ↗</span>
        </div>
      </div>
    ),
    { ...size, fonts: [{ name: "Barlow", data: font, weight: 700 }] },
  );
}
