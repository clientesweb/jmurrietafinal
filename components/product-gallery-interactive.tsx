"use client"

import { useState, useEffect, useRef } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight, ZoomIn, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useMediaQuery } from "@/hooks/use-media-query"

interface ProductGalleryInteractiveProps {
  images: string[]
  productName: string
}

export function ProductGalleryInteractive({ images, productName }: ProductGalleryInteractiveProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [showLightbox, setShowLightbox] = useState(false)
  const galleryRef = useRef<HTMLDivElement>(null)
  const isDesktop = useMediaQuery("(min-width: 768px)")

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1))
  }

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1))
  }

  const goToSlide = (index: number) => {
    setCurrentIndex(index)
  }

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (showLightbox) {
        if (event.key === "ArrowLeft") {
          event.preventDefault()
          prevSlide()
        } else if (event.key === "ArrowRight") {
          event.preventDefault()
          nextSlide()
        } else if (event.key === "Escape") {
          setShowLightbox(false)
        }
      }
    }

    window.addEventListener("keydown", handleKeyDown)

    return () => {
      window.removeEventListener("keydown", handleKeyDown)
    }
  }, [showLightbox])

  // Handle swipe gestures for mobile
  useEffect(() => {
    if (!galleryRef.current || isDesktop) return

    let touchStartX = 0
    let touchEndX = 0

    const handleTouchStart = (e: TouchEvent) => {
      touchStartX = e.changedTouches[0].screenX
    }

    const handleTouchEnd = (e: TouchEvent) => {
      touchEndX = e.changedTouches[0].screenX
      handleSwipe()
    }

    const handleSwipe = () => {
      // Minimum swipe distance (in px)
      const minSwipeDistance = 50

      if (touchStartX - touchEndX > minSwipeDistance) {
        // Swiped left
        nextSlide()
      } else if (touchEndX - touchStartX > minSwipeDistance) {
        // Swiped right
        prevSlide()
      }
    }

    const element = galleryRef.current
    element.addEventListener("touchstart", handleTouchStart, { passive: true })
    element.addEventListener("touchend", handleTouchEnd, { passive: true })

    return () => {
      element.removeEventListener("touchstart", handleTouchStart)
      element.removeEventListener("touchend", handleTouchEnd)
    }
  }, [isDesktop])

  return (
    <div ref={galleryRef} className="product-gallery">
      {/* Main Image */}
      <div
        className="relative aspect-square overflow-hidden rounded-lg bg-black mb-4 border border-gold/20 cursor-pointer"
        onClick={() => setShowLightbox(true)}
        aria-label={`Ver imagen ampliada de ${productName}`}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault()
            setShowLightbox(true)
          }
        }}
      >
        <Image
          src={images[currentIndex] || "/placeholder.svg"}
          alt={`${productName} - Vista principal`}
          fill
          className="object-contain"
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
          priority
        />
        <div className="absolute bottom-4 right-4 bg-black/50 text-white p-2 rounded-full">
          <ZoomIn className="h-5 w-5" aria-hidden="true" />
        </div>

        {/* Mobile navigation arrows */}
        {!isDesktop && images.length > 1 && (
          <>
            <Button
              variant="outline"
              size="icon"
              className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full bg-black/50 border-white/20 text-white hover:bg-black/70 hover:text-white z-10"
              onClick={(e) => {
                e.stopPropagation()
                prevSlide()
              }}
              aria-label="Imagen anterior"
            >
              <ChevronLeft className="h-5 w-5" aria-hidden="true" />
              <span className="sr-only">Anterior</span>
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-black/50 border-white/20 text-white hover:bg-black/70 hover:text-white z-10"
              onClick={(e) => {
                e.stopPropagation()
                nextSlide()
              }}
              aria-label="Imagen siguiente"
            >
              <ChevronRight className="h-5 w-5" aria-hidden="true" />
              <span className="sr-only">Siguiente</span>
            </Button>
          </>
        )}
      </div>

      {/* Thumbnails - Only show on desktop or if there are multiple images */}
      {(isDesktop || images.length > 1) && (
        <div className="grid grid-cols-4 gap-2 sm:gap-4" role="tablist" aria-label="Miniaturas de productos">
          {images.map((image, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`relative aspect-square rounded-md overflow-hidden border transition-all ${
                index === currentIndex ? "border-gold" : "border-gold/20 hover:border-gold/50"
              }`}
              role="tab"
              aria-selected={index === currentIndex}
              aria-label={`Vista ${index + 1} de ${productName}`}
              tabIndex={index === currentIndex ? 0 : -1}
            >
              <Image
                src={image || "/placeholder.svg"}
                alt={`${productName} - Vista ${index + 1}`}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 25vw, 16vw"
                loading="lazy"
              />
            </button>
          ))}
        </div>
      )}

      {/* Lightbox */}
      {showLightbox && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center"
          onClick={() => setShowLightbox(false)}
          aria-modal="true"
          role="dialog"
          aria-label={`Galería de imágenes ampliada de ${productName}`}
        >
          <div className="relative w-full max-w-4xl aspect-square p-4" onClick={(e) => e.stopPropagation()}>
            <Image
              src={images[currentIndex] || "/placeholder.svg"}
              alt={`${productName} - Vista ampliada`}
              fill
              className="object-contain"
              sizes="100vw"
              priority
            />

            {/* Close button */}
            <Button
              variant="outline"
              size="icon"
              className="absolute top-4 right-4 rounded-full bg-black/50 border-white/20 text-white hover:bg-black/70 hover:text-white z-10"
              onClick={() => setShowLightbox(false)}
              aria-label="Cerrar galería"
            >
              <X className="h-5 w-5" aria-hidden="true" />
              <span className="sr-only">Cerrar</span>
            </Button>

            {/* Navigation Arrows */}
            {images.length > 1 && (
              <>
                <Button
                  variant="outline"
                  size="icon"
                  className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-black/50 border-white/20 text-white hover:bg-black/70 hover:text-white"
                  onClick={(e) => {
                    e.stopPropagation()
                    prevSlide()
                  }}
                  aria-label="Imagen anterior"
                >
                  <ChevronLeft className="h-6 w-6" aria-hidden="true" />
                  <span className="sr-only">Anterior</span>
                </Button>

                <Button
                  variant="outline"
                  size="icon"
                  className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-black/50 border-white/20 text-white hover:bg-black/70 hover:text-white"
                  onClick={(e) => {
                    e.stopPropagation()
                    nextSlide()
                  }}
                  aria-label="Imagen siguiente"
                >
                  <ChevronRight className="h-6 w-6" aria-hidden="true" />
                  <span className="sr-only">Siguiente</span>
                </Button>
              </>
            )}

            {/* Thumbnails in lightbox - Only show if there are multiple images */}
            {images.length > 1 && (
              <div
                className="absolute bottom-4 left-0 right-0 flex justify-center gap-2 px-4 overflow-x-auto py-2"
                role="tablist"
                aria-label="Miniaturas de productos"
              >
                {images.map((_, index) => (
                  <button
                    key={index}
                    onClick={(e) => {
                      e.stopPropagation()
                      goToSlide(index)
                    }}
                    className={`relative w-16 h-16 rounded-md overflow-hidden border transition-all flex-shrink-0 ${
                      index === currentIndex ? "border-gold" : "border-white/20 hover:border-white/50"
                    }`}
                    role="tab"
                    aria-selected={index === currentIndex}
                    aria-label={`Vista ${index + 1} de ${productName}`}
                    tabIndex={index === currentIndex ? 0 : -1}
                  >
                    <Image
                      src={images[index] || "/placeholder.svg"}
                      alt={`Miniatura ${index + 1}`}
                      fill
                      className="object-cover"
                      sizes="64px"
                      loading="lazy"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  )
}
