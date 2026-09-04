import { ImageResponse } from "next/og";

// The card people see when the site is shared in iMessage, Slack, LinkedIn.
export const alt = "Sid Chowdhury";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpengraphImage() {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        padding: "80px",
        background:
          "linear-gradient(135deg, #070713 0%, #1a1033 45%, #2a0f2e 100%)",
      }}
    >
      <div
        style={{
          display: "flex",
          fontSize: 26,
          letterSpacing: 6,
          textTransform: "uppercase",
          color: "#a78bfa",
        }}
      >
        sidchowdhury.me
      </div>

      <div
        style={{
          display: "flex",
          marginTop: 18,
          fontSize: 92,
          fontWeight: 700,
          letterSpacing: -2,
          color: "#ffffff",
        }}
      >
        Sid Chowdhury
      </div>

      <div
        style={{
          display: "flex",
          marginTop: 24,
          fontSize: 34,
          lineHeight: 1.35,
          color: "#c4b5fd",
          maxWidth: 900,
        }}
      >
        A portfolio you browse like an iPad. Ventures, taste, a boat that keeps
        breaking.
      </div>

      <div
        style={{
          display: "flex",
          marginTop: 44,
          fontSize: 26,
          color: "#8b8b9e",
        }}
      >
        USC Iovine and Young Academy + Marshall
      </div>
    </div>,
    size,
  );
}
