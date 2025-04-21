"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight, Quote, Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import { AvatarInitials } from "@/components/ui/avatar-initials"

// Tipos para las reseñas
export interface Review {
  id: number
  name: string
  location: string
  rating: number
  text: string
  image?: string
  date: string
}

interface ReviewsSectionProps {
  title?: string
  subtitle?: string
  reviews: Review[]
  compact?: boolean
  className?: string
}

export function ReviewsSection({
  title = "Lo que dicen nuestros clientes",
  subtitle = "Descubre las experiencias de quienes ya han elegido la calidad y precisión de J. Murrieta.",
  reviews,
  compact = false,
  className = "",
}: ReviewsSectionProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [activeTab, setActiveTab] = useState("all")

  const visibleReviews =
    activeTab === "all" ? reviews : reviews.filter((review) => review.rating === Number.parseInt(activeTab))

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === visibleReviews.length - 1 ? 0 : prevIndex + 1))
  }

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? visibleReviews.length - 1 : prevIndex - 1))
  }

  const goToSlide = (index: number) => {
    setCurrentIndex(index)
  }

  // Renderizar estrellas según la calificación
  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star key={i} className={`h-4 w-4 ${i < rating ? "text-gold fill-gold" : "text-gray-400"}`} strokeWidth={1.5} />
    ))
  }

  return (
    <section className={`py-10 md:py-16 bg-black ${className}`}>
      <div className="container mx-auto px-4">
        {!compact && (
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-3 md:mb-4">
              {title.split(" ").map((word, i, arr) =>
                i === arr.length - 1 ? (
                  <span key={i} className="text-gold">
                    {word}
                  </span>
                ) : (
                  `${word} `
                ),
              )}
            </h2>
            <div className="w-24 h-0.5 bg-gold mx-auto mb-4 md:mb-8"></div>
            <p className="text-white/80 max-w-2xl mx-auto text-sm md:text-base">{subtitle}</p>
          </div>
        )}

        {!compact && (
          <div className="flex justify-center mb-8 md:mb-12 overflow-x-auto pb-2 md:pb-0">
            <div className="flex flex-wrap gap-2">
              <Button
                variant={activeTab === "all" ? "default" : "outline"}
                onClick={() => {
                  setActiveTab("all")
                  setCurrentIndex(0)
                }}
                className={
                  activeTab === "all"
                    ? "bg-gold hover:bg-gold/90 text-black font-cinzel rounded-none text-xs md:text-sm whitespace-nowrap"
                    : "text-gold border-gold/30 hover:border-gold hover:bg-gold/10 hover:text-gold rounded-none text-xs md:text-sm whitespace-nowrap"
                }
              >
                Todas las reseñas
              </Button>
              {[5, 4, 3, 2, 1].map((rating) => (
                <Button
                  key={rating}
                  variant={activeTab === rating.toString() ? "default" : "outline"}
                  onClick={() => {
                    setActiveTab(rating.toString())
                    setCurrentIndex(0)
                  }}
                  className={
                    activeTab === rating.toString()
                      ? "bg-gold hover:bg-gold/90 text-black font-cinzel rounded-none text-xs md:text-sm whitespace-nowrap"
                      : "text-gold border-gold/30 hover:border-gold hover:bg-gold/10 hover:text-gold rounded-none text-xs md:text-sm whitespace-nowrap"
                  }
                >
                  {rating} {rating === 1 ? "Estrella" : "Estrellas"}
                </Button>
              ))}
            </div>
          </div>
        )}

        {/* Carrusel de reseñas */}
        <div className="relative max-w-4xl mx-auto">
          {visibleReviews.length > 0 ? (
            <>
              <div className={`relative bg-zinc-900 border border-gold/20 p-4 md:p-8 ${compact ? "" : "lg:p-12"}`}>
                <div className="absolute -top-4 md:-top-6 -left-4 md:-left-6 text-gold">
                  <Quote className="h-8 w-8 md:h-12 md:w-12 rotate-180" strokeWidth={1} />
                </div>

                {visibleReviews.map((review, index) => (
                  <div
                    key={review.id}
                    className={`transition-opacity duration-500 ${
                      index === currentIndex ? "opacity-100" : "opacity-0 absolute inset-0"
                    }`}
                  >
                    <div className="flex flex-col md:flex-row items-center md:items-start gap-4 md:gap-6 p-2 md:p-4">
                      <div className="flex-shrink-0">
                        <AvatarInitials
                          name={review.name}
                          image={review.image}
                          size={compact ? "md" : "lg"}
                          className="border-2 border-gold"
                        />
                      </div>
                      <div className="flex-grow text-center md:text-left">
                        <div className="flex justify-center md:justify-start mb-2">{renderStars(review.rating)}</div>
                        <p className="text-white/80 text-sm md:text-lg italic mb-4 md:mb-6">{review.text}</p>
                        <div>
                          <h4 className="text-white font-bold text-base md:text-lg">{review.name}</h4>
                          <p className="text-gold text-xs md:text-sm">{review.location}</p>
                          <p className="text-white/60 text-xs mt-1">{review.date}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}

                <div className="absolute -bottom-4 md:-bottom-6 -right-4 md:-right-6 text-gold">
                  <Quote className="h-8 w-8 md:h-12 md:w-12" strokeWidth={1} />
                </div>
              </div>

              {/* Controles de navegación */}
              <div className="flex justify-between mt-6 md:mt-8">
                <Button
                  onClick={prevSlide}
                  variant="outline"
                  className="rounded-full w-10 h-10 md:w-12 md:h-12 p-0 text-gold border-gold/30 hover:border-gold hover:bg-gold/10"
                >
                  <ChevronLeft className="h-5 w-5 md:h-6 md:w-6" />
                  <span className="sr-only">Anterior</span>
                </Button>

                <div className="flex items-center gap-2">
                  {visibleReviews.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => goToSlide(index)}
                      className={`w-2 h-2 md:w-3 md:h-3 rounded-full transition-colors ${
                        index === currentIndex ? "bg-gold" : "bg-gold/30"
                      }`}
                      aria-label={`Ir a reseña ${index + 1}`}
                    />
                  ))}
                </div>

                <Button
                  onClick={nextSlide}
                  variant="outline"
                  className="rounded-full w-10 h-10 md:w-12 md:h-12 p-0 text-gold border-gold/30 hover:border-gold hover:bg-gold/10"
                >
                  <ChevronRight className="h-5 w-5 md:h-6 md:w-6" />
                  <span className="sr-only">Siguiente</span>
                </Button>
              </div>
            </>
          ) : (
            <div className="text-center py-8 md:py-12 text-white/60">
              No hay reseñas disponibles con esta calificación.
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
