import { ImageResponse } from "next/og"

// Route segment config
export const runtime = "edge"

// Image metadata
export const size = {
  width: 180,
  height: 180,
}
export const contentType = "image/png"

// Image generation
export default function Icon() {
  return new ImageResponse(
    <div
      style={{
        fontSize: 100,
        background: "#1a1a1a",
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "#D4AF37",
        fontFamily: "serif",
        fontWeight: 700,
        borderRadius: 20,
      }}
    >
      JM
    </div>,
    {
      ...size,
    },
  )
}
