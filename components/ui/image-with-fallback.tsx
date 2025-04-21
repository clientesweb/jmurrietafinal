"use client"

import { useState } from "react"
import Image, { type ImageProps } from "next/image"

interface ImageWithFallbackProps extends ImageProps {
  fallbackSrc: string
}

export function ImageWithFallback({ src, fallbackSrc, alt, ...rest }: ImageWithFallbackProps) {
  const [imgSrc, setImgSrc] = useState<string>(src as string)
  const [isLoading, setIsLoading] = useState(true)
  const [hasError, setHasError] = useState(false)

  return (
    <div className="relative w-full h-full">
      <Image
        {...rest}
        src={imgSrc || "/placeholder.svg"}
        alt={alt}
        onLoadingComplete={() => setIsLoading(false)}
        onLoad={() => setIsLoading(false)}
        onError={() => {
          setImgSrc(fallbackSrc)
          setHasError(true)
          setIsLoading(false)
        }}
        priority={rest.priority || true} // Priorizar la carga de imágenes
      />

      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center bg-zinc-800/40 backdrop-blur-sm">
          <div className="w-8 h-8 border-2 border-gold/30 border-t-gold rounded-full animate-spin"></div>
        </div>
      )}
    </div>
  )
}
