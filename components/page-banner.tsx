import Image from "next/image"

interface PageBannerProps {
  title: string
  subtitle?: string
  description?: string
  imageSrc: string
  imageAlt: string
}

export function PageBanner({ title, subtitle, description, imageSrc, imageAlt }: PageBannerProps) {
  return (
    <section className="relative">
      <div className="relative w-full h-[300px] md:h-[400px]">
        <Image
          src={imageSrc || "/placeholder.svg"}
          alt={imageAlt}
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/60 flex items-center">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-2 font-cinzel">
                {title} {subtitle && <span className="text-gold">{subtitle}</span>}
              </h1>
              {description && <p className="text-lg md:text-xl text-white/80 max-w-2xl">{description}</p>}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
