import { ImageResponse } from "next/og";

// Browser tab icon. Monogram on the same violet the site runs on.
export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "linear-gradient(135deg, #7c3aed 0%, #db2777 100%)",
        color: "#ffffff",
        fontSize: 17,
        fontWeight: 700,
        letterSpacing: -0.5,
        borderRadius: 7,
      }}
    >
      SC
    </div>,
    size,
  );
}
