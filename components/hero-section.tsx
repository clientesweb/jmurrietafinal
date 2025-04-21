"use client"
import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { useMediaQuery } from "@/hooks/use-media-query"
import { ArrowRight } from "lucide-react"

interface HeroSectionProps {
  title: string
  subtitle?: string
  yearText?: string
  description: string
  primaryButtonText: string
  primaryButtonLink: string
  secondaryButtonText: string
  secondaryButtonLink: string
  desktopImage: string
  mobileImage: string
  emblemImage?: string
}

export function HeroSection({
  title,
  subtitle,
  yearText,
  description,
  primaryButtonText,
  primaryButtonLink,
  secondaryButtonText,
  secondaryButtonLink,
  desktopImage,
  mobileImage,
  emblemImage = "/images/emblem.png",
}: HeroSectionProps) {
  const [mounted, setMounted] = useState(false)
  const isMobile = useMediaQuery("(max-width: 768px)")
  const [isImageLoading, setIsImageLoading] = useState(true)

  useEffect(() => {
    setMounted(true)
  }, [])

  // Use the appropriate image based on screen size
  const heroImage = mounted && isMobile ? mobileImage : desktopImage

  return (
    <section className="hero-section relative">
      <div className="relative w-full h-screen max-h-[800px] md:max-h-[700px]">
        <Image
          src={heroImage || "/placeholder.svg"}
          alt="J. Murrieta Rifles PCP"
          fill
          className={`object-cover transition-opacity duration-300 ${isImageLoading ? "opacity-0" : "opacity-100"}`}
          priority
          sizes="100vw"
          onLoadingComplete={() => setIsImageLoading(false)}
        />

        {isImageLoading && (
          <div className="absolute inset-0 bg-zinc-900 flex items-center justify-center">
            <div className="w-12 h-12 border-4 border-gold/30 border-t-gold rounded-full animate-spin"></div>
          </div>
        )}

        <div className="absolute inset-0 bg-black/50">
          <div className="container mx-auto px-6 h-full flex flex-col justify-center">
            <div className="max-w-xl space-y-6">
              {emblemImage && (
                <div className="mb-4">
                  <Image
                    src={emblemImage || "/placeholder.svg"}
                    alt="J. Murrieta Emblem"
                    width={100}
                    height={100}
                    className="h-auto"
                    priority
                  />
                </div>
              )}

              {yearText && <p className="text-gold text-lg md:text-xl font-cinzel">{yearText}</p>}

              <div className="space-y-2">
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white font-cinzel">{title}</h1>
                {subtitle && (
                  <p className="text-4xl md:text-5xl lg:text-6xl font-bold text-gold font-cinzel italic">{subtitle}</p>
                )}
              </div>

              <div className="w-24 h-0.5 bg-gold"></div>

              <p className="text-lg md:text-xl text-white max-w-lg">{description}</p>

              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button
                  asChild
                  size="lg"
                  className="bg-gold hover:bg-gold/90 text-black font-cinzel py-6 px-8 rounded-none"
                >
                  <Link href={primaryButtonLink} className="flex items-center justify-between w-full">
                    {primaryButtonText}
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>

                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="font-cinzel text-gold border-gold hover:bg-gold/10 hover:text-gold py-6 px-8 rounded-none"
                >
                  <Link href={secondaryButtonLink}>{secondaryButtonText}</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
