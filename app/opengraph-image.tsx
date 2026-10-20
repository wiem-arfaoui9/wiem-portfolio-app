import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          background: "linear-gradient(135deg, #05060a 0%, #0a0c1c 60%, #05060a 100%)",
          color: "#f5f5f8",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <div
            style={{
              width: 56,
              height: 56,
              borderRadius: 14,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              background: "linear-gradient(135deg, #7c6cf0, #33e0ff)",
              color: "#05060a",
              fontSize: 22,
              fontWeight: 700,
            }}
          >
            WA
          </div>
          <span style={{ fontSize: 24, color: "#9497ac" }}>ISET Zaghouan · Tunisia</span>
        </div>
        <div style={{ display: "flex", fontSize: 68, fontWeight: 600, marginTop: 40, lineHeight: 1.15 }}>
          Wiem Arfaoui
        </div>
        <div style={{ display: "flex", fontSize: 34, color: "#a89bff", marginTop: 12 }}>
          Full Stack Developer
        </div>
        <div style={{ display: "flex", fontSize: 24, color: "#9497ac", marginTop: 28, maxWidth: 800 }}>
          Spring Boot · Angular · Laravel · Next.js — looking for a PFE internship 2026/2027.
        </div>
      </div>
    ),
    { ...size }
  );
}
