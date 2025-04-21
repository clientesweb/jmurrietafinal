import { ImageResponse } from "next/og"

// Route segment config
export const runtime = "edge"

// Image metadata
export const alt = "J. Murrieta - Rifles PCP de Precisión"
export const size = {
  width: 1200,
  height: 630,
}

export const contentType = "image/png"

// Image generation
export default async function Image() {
  // Usamos fuentes del sistema en lugar de cargar fuentes externas
  return new ImageResponse(
    <div
      style={{
        background: "linear-gradient(to bottom, #1a1a1a, #2a2a2a)",
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: 80,
        position: "relative",
      }}
    >
      {/* Logo */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginBottom: 40,
        }}
      >
        <div
          style={{
            fontSize: 120,
            fontFamily: "serif",
            fontWeight: 700,
            color: "#D4AF37",
            textAlign: "center",
            marginBottom: 20,
          }}
        >
          JM
        </div>
      </div>

      {/* Title */}
      <div
        style={{
          fontSize: 60,
          fontFamily: "serif",
          fontWeight: 700,
          color: "white",
          textAlign: "center",
          marginBottom: 20,
        }}
      >
        J. MURRIETA
      </div>

      {/* Subtitle */}
      <div
        style={{
          fontSize: 32,
          fontFamily: "serif",
          color: "#D4AF37",
          textAlign: "center",
        }}
      >
        RIFLES PCP DE PRECISIÓN
      </div>

      {/* Border */}
      <div
        style={{
          position: "absolute",
          top: 20,
          left: 20,
          right: 20,
          bottom: 20,
          border: "2px solid #D4AF37",
          borderRadius: 10,
          opacity: 0.5,
        }}
      />
    </div>,
    // ImageResponse options
    {
      ...size,
    },
  )
}
