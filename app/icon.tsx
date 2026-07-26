import { ImageResponse } from "next/og";

export const size = { width: 64, height: 64 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#18221d",
          color: "#f1f4f1",
          fontSize: 22,
          fontWeight: 800,
          letterSpacing: "-1px",
        }}
      >
        SC
      </div>
    ),
    size,
  );
}
