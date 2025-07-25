"use client"

import { useState, useEffect } from "react"
import Link from "next/link"

// Mensajes para el banner rotativo
const announcements = [
  {
    text: "ENVÍOS A TODO EL PAÍS | ",
    highlight: "",
    link: "/",
  },
  {
    text: "10% DE DESCUENTO EN RIFLES PCP | ",
    highlight: "OFERTA POR TIEMPO LIMITADO",
    link: "/rifles",
  },
  {
    text: "NUEVOS ACCESORIOS DISPONIBLES | ",
    highlight: "DESCÚBRELOS AHORA",
    link: "/accesorios",
  },
  {
    text: "GARANTÍA DE 1 AÑO EN TODOS LOS RIFLES | ",
    highlight: "CALIDAD ASEGURADA",
    link: "/rifles",
  },
]

export function HeaderAnnouncement() {
  const [currentIndex, setCurrentIndex] = useState(0)

  // Cambiar el mensaje cada 5 segundos
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % announcements.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  const announcement = announcements[currentIndex]

  return (
    <div className="bg-black py-2 text-center border-b border-gold/20 relative overflow-hidden">
      {/* Indicadores de posición */}
      <div className="absolute bottom-0 left-0 right-0 flex justify-center gap-1 pb-0.5">
        {announcements.map((_, index) => (
          <span
            key={index}
            className={`inline-block h-0.5 transition-all duration-300 ${
              index === currentIndex ? "w-4 bg-gold" : "w-2 bg-gold/30"
            }`}
          />
        ))}
      </div>

      <p className="text-sm md:text-base text-white m-0">
        <Link href={announcement.link} className="text-white hover:text-gold transition-colors">
          {announcement.text} <span className="text-gold">{announcement.highlight}</span>
        </Link>
      </p>
    </div>
  )
}
