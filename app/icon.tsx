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
          background: "#a7bfe8",
          color: "#171c22",
          fontSize: 54,
          fontFamily: "serif",
          fontWeight: 400,
        }}
      >
        s
      </div>
    ),
    size,
  );
}
