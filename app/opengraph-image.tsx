import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";
export const alt = "Sandesh Chapagain | apps, art & computers";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export default async function OpenGraph() {
    const font = await readFile(join(process.cwd(), "public/fonts/BarlowCondensed-Bold.ttf"));
    const portrait = await readFile(join(process.cwd(), "public/art/sandesh-ink.png"));
    return new ImageResponse(<div style={{ width: "100%", height: "100%", display: "flex", background: "#111110", color: "#f1ebdd", alignItems: "center", padding: "45px 65px", fontFamily: "Barlow" }}><div style={{ display: "flex", flexDirection: "column", width: 690 }}><span style={{ fontSize: 30, color: "#ff775d", marginBottom: 25 }}>hey, i'm</span><span style={{ fontSize: 120, lineHeight: .92 }}>SANDESH</span><span style={{ fontSize: 120, lineHeight: .92 }}>CHAPAGAIN</span><span style={{ fontSize: 31, marginTop: 30 }}>apps, art & computers.</span><span style={{ fontSize: 25, color: "#ff775d", marginTop: 30 }}>iamdex.xyz</span></div><img src={`data:image/png;base64,${portrait.toString("base64")}`} alt="" width={400} height={400}/></div>, { ...size, fonts: [{ name: "Barlow", data: font, weight: 700 }] });
}
