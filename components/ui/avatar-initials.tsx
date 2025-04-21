"use client"

import { useState } from "react"
import Image from "next/image"

interface AvatarInitialsProps {
  name: string
  image?: string
  size?: "sm" | "md" | "lg"
  className?: string
}

export function AvatarInitials({ name, image, size = "md", className = "" }: AvatarInitialsProps) {
  const [imageError, setImageError] = useState(false)

  // Obtener las iniciales del nombre
  const getInitials = (name: string) => {
    const parts = name.split(" ")
    if (parts.length === 1) return parts[0].charAt(0).toUpperCase()
    return (parts[0].charAt(0) + parts[parts.length - 1].charAt(0)).toUpperCase()
  }

  // Generar un color basado en el nombre
  const getColorFromName = (name: string) => {
    const colors = [
      "bg-red-500",
      "bg-blue-500",
      "bg-green-500",
      "bg-yellow-500",
      "bg-purple-500",
      "bg-pink-500",
      "bg-indigo-500",
      "bg-teal-500",
    ]

    let hash = 0
    for (let i = 0; i < name.length; i++) {
      hash = name.charCodeAt(i) + ((hash << 5) - hash)
    }

    return colors[Math.abs(hash) % colors.length]
  }

  // Tamaños
  const sizeClasses = {
    sm: "w-8 h-8 text-xs",
    md: "w-12 h-12 text-sm",
    lg: "w-16 h-16 text-base",
  }

  // Si hay imagen y no hay error, mostrar la imagen
  if (image && !imageError) {
    return (
      <div className={`relative rounded-full overflow-hidden ${sizeClasses[size]} ${className}`}>
        <Image
          src={image || "/placeholder.svg"}
          alt={name}
          fill
          className="object-cover"
          onError={() => setImageError(true)}
          sizes={`(max-width: 768px) ${size === "sm" ? "32px" : size === "md" ? "48px" : "64px"}, ${size === "sm" ? "32px" : size === "md" ? "48px" : "64px"}`}
        />
      </div>
    )
  }

  // Si no hay imagen o hubo error, mostrar iniciales
  return (
    <div
      className={`flex items-center justify-center rounded-full ${getColorFromName(name)} text-white font-medium ${sizeClasses[size]} ${className}`}
    >
      {getInitials(name)}
    </div>
  )
}
