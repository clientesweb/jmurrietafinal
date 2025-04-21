import { HeaderAnnouncement } from "@/components/header-announcement"
import { HeaderMenu } from "@/components/header-menu"
import { Footer } from "@/components/footer"
import { ChatBubbles } from "@/components/chat-bubbles"
import { CartDrawer } from "@/components/cart/cart-drawer"
import { PageBanner } from "@/components/page-banner"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { ImageWithFallback } from "@/components/ui/image-with-fallback"

// Añadir metadatos específicos para la página de rifles
export const metadata = {
  title: "Rifles PCP de Precisión",
  description:
    "Descubre nuestra línea de rifles PCP de alta precisión. Modelos J1 y Bullpup fabricados artesanalmente en Argentina con tecnología de vanguardia. Disponibles en diferentes calibres y opciones de culata.",
  openGraph: {
    title: "Rifles PCP de Precisión",
    description:
      "Descubre nuestra línea de rifles PCP de alta precisión. Modelos J1 y Bullpup fabricados artesanalmente en Argentina con tecnología de vanguardia. Disponibles en diferentes calibres y opciones de culata.",
  },
}

export default function RiflesPage() {
  // Función para formatear precios en pesos argentinos
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("es-AR", {
      style: "currency",
      currency: "ARS",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(price)
  }

  // Precios finales de los rifles J1 (los precios reales)
  const j1FinalPrices = {
    "5.5": 575000,
    "6.35": 625000,
    "7.62": 725000,
  }

  // Precios finales de los rifles Bullpup (los precios reales)
  const bullpupFinalPrices = {
    "5.5": 645000,
    "6.35": 699000,
    "7.62": 799000,
  }

  // Calcular precios inflados (aproximadamente 10% más)
  const j1InflatedPrices = {
    "5.5": Math.round(j1FinalPrices["5.5"] * 1.1),
    "6.35": Math.round(j1FinalPrices["6.35"] * 1.1),
    "7.62": Math.round(j1FinalPrices["7.62"] * 1.1),
  }

  const bullpupInflatedPrices = {
    "5.5": Math.round(bullpupFinalPrices["5.5"] * 1.1),
    "6.35": Math.round(bullpupFinalPrices["6.35"] * 1.1),
    "7.62": Math.round(bullpupFinalPrices["7.62"] * 1.1),
  }

  const rifles = [
    {
      id: "j1-5.5",
      name: "Rifle Murrieta J1 Cal. 5,5",
      description: "Con cargador y supresor. Diseño tradicional ideal para tiro de precisión a distancia.",
      price: formatPrice(j1FinalPrices["5.5"]),
      originalPrice: formatPrice(j1InflatedPrices["5.5"]),
      image: "/images/rifle-j1-real-2.jpeg",
      slug: "rifle-murrieta-j1",
    },
    {
      id: "j1-6.35",
      name: "Rifle Murrieta J1 Cal. 6,35",
      description: "Con cargador y supresor. Mayor potencia para distancias medias y largas.",
      price: formatPrice(j1FinalPrices["6.35"]),
      originalPrice: formatPrice(j1InflatedPrices["6.35"]),
      image: "/images/rifle-j1-real-1.jpeg",
      slug: "rifle-murrieta-j1",
    },
    {
      id: "j1-7.62",
      name: "Rifle Murrieta J1 Cal. 7,62",
      description: "Con cargador y supresor. Máxima potencia para caza mayor y tiro a larga distancia.",
      price: formatPrice(j1FinalPrices["7.62"]),
      originalPrice: formatPrice(j1InflatedPrices["7.62"]),
      image: "/images/rifle-j1-real-3.jpeg",
      slug: "rifle-murrieta-j1",
    },
    {
      id: "bullpup-5.5",
      name: "Rifle Murrieta BULLPUP Cal. 5,5",
      description: "Con cargador y supresor. Diseño compacto para mayor movilidad sin comprometer potencia.",
      price: formatPrice(bullpupFinalPrices["5.5"]),
      originalPrice: formatPrice(bullpupInflatedPrices["5.5"]),
      image: "/images/rifle-bullpup-real-2.jpeg",
      slug: "rifle-murrieta-bullpup",
    },
    {
      id: "bullpup-6.35",
      name: "Rifle Murrieta BULLPUP Cal. 6,35",
      description: "Con cargador y supresor. Equilibrio perfecto entre potencia y maniobrabilidad.",
      price: formatPrice(bullpupFinalPrices["6.35"]),
      originalPrice: formatPrice(bullpupInflatedPrices["6.35"]),
      image: "/images/rifle-bullpup-real-1.jpeg",
      slug: "rifle-murrieta-bullpup",
    },
    {
      id: "bullpup-7.62",
      name: "Rifle Murrieta BULLPUP Cal. 7,62",
      description: "Con cargador y supresor. Máxima potencia en un diseño compacto y ergonómico.",
      price: formatPrice(bullpupFinalPrices["7.62"]),
      originalPrice: formatPrice(bullpupInflatedPrices["7.62"]),
      image: "/images/rifle-bullpup-real-3.jpeg",
      slug: "rifle-murrieta-bullpup",
    },
  ]

  return (
    <>
      <HeaderAnnouncement />
      <HeaderMenu />
      <CartDrawer />

      <main>
        <PageBanner
          title="Rifles"
          subtitle="PCP"
          description="Descubre nuestra colección de rifles de aire comprimido PCP, fabricados con la más alta tecnología y materiales premium."
          imageSrc="/images/banner-rifle-workshop.jpeg"
          imageAlt="Rifle J. Murrieta en taller"
        />

        <section className="py-12 bg-zinc-900 border-b border-gold/20" aria-labelledby="ofertas-heading">
          <div className="container mx-auto px-4">
            <div className="relative overflow-hidden rounded-lg border border-gold/30">
              <div className="bg-black">
                <div className="relative h-[300px] sm:h-[400px]">
                  <ImageWithFallback
                    src="/images/promobanner.jpg"
                    fallbackSrc="/placeholder.svg?height=400&width=1200"
                    alt="Rifle J. Murrieta PCP en oferta"
                    fill
                    className="object-cover object-center opacity-80"
                    unoptimized
                  />
                  <div className="absolute inset-0 flex items-center">
                    <div className="container mx-auto px-4 md:px-8">
                      <div className="max-w-xl">
                        <h2 id="ofertas-heading" className="text-3xl md:text-4xl font-bold text-white mb-4">
                          10% OFF en todos los <span className="text-gold">Rifles PCP</span>
                        </h2>
                        <p className="text-white/80 mb-6">
                          Por tiempo limitado, aprovecha esta oportunidad única para adquirir nuestros rifles de alta
                          precisión con un descuento exclusivo.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-zinc-900">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center text-white mb-8">
              Modelo <span className="text-gold">J1</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
              {rifles.slice(0, 3).map((rifle) => (
                <div
                  key={rifle.id}
                  className="group bg-black border border-gold/10 hover:border-gold/30 transition-all duration-300 overflow-hidden"
                >
                  <div className="relative aspect-square">
                    <Image
                      src={rifle.image || "/placeholder.svg"}
                      alt={rifle.name}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      unoptimized
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-white mb-2">{rifle.name}</h3>
                    <p className="text-white/70 mb-4 text-sm">{rifle.description}</p>
                    <div className="mb-6">
                      <p className="text-2xl font-bold text-gold">{rifle.price}</p>
                      <p className="text-sm text-white/60 line-through">{rifle.originalPrice}</p>
                      <p className="text-sm text-green-500 font-medium">10% de descuento</p>
                    </div>
                    <div className="flex flex-col sm:flex-row gap-4">
                      <Button asChild className="flex-1 bg-gold hover:bg-gold/90 text-black">
                        <Link href={`/rifles/${rifle.slug}`} className="flex items-center justify-center gap-2">
                          VER DETALLES <ArrowRight className="h-4 w-4" />
                        </Link>
                      </Button>
                      <Button asChild variant="outline" className="flex-1 border-gold/30 text-gold hover:bg-gold/10">
                        <Link href={`/rifles/${rifle.slug}`}>COMPRAR</Link>
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <h2 className="text-3xl font-bold text-center text-white mt-16 mb-8">
              Modelo <span className="text-gold">BULLPUP</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {rifles.slice(3).map((rifle) => (
                <div
                  key={rifle.id}
                  className="group bg-black border border-gold/10 hover:border-gold/30 transition-all duration-300 overflow-hidden"
                >
                  <div className="relative aspect-square">
                    <Image
                      src={rifle.image || "/placeholder.svg"}
                      alt={rifle.name}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      unoptimized
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-white mb-2">{rifle.name}</h3>
                    <p className="text-white/70 mb-4 text-sm">{rifle.description}</p>
                    <div className="mb-6">
                      <p className="text-2xl font-bold text-gold">{rifle.price}</p>
                      <p className="text-sm text-white/60 line-through">{rifle.originalPrice}</p>
                      <p className="text-sm text-green-500 font-medium">10% de descuento</p>
                    </div>
                    <div className="flex flex-col sm:flex-row gap-4">
                      <Button asChild className="flex-1 bg-gold hover:bg-gold/90 text-black">
                        <Link href={`/rifles/${rifle.slug}`} className="flex items-center justify-center gap-2">
                          VER DETALLES <ArrowRight className="h-4 w-4" />
                        </Link>
                      </Button>
                      <Button asChild variant="outline" className="flex-1 border-gold/30 text-gold hover:bg-gold/10">
                        <Link href={`/rifles/${rifle.slug}`}>COMPRAR</Link>
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-8 bg-black">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center text-white mb-4">
              Opciones de <span className="text-gold">Personalización</span>
            </h2>
            <div className="w-24 h-0.5 bg-gold mx-auto mb-8"></div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-zinc-900/50 p-6 border border-gold/20">
                <h3 className="text-xl font-bold text-gold mb-4">Opciones de Color del Armazón</h3>
                <ul className="space-y-2 text-white/80">
                  <li className="flex items-start gap-2">
                    <span className="text-gold">•</span> Negro con detalles dorados/bronce
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-gold">•</span> Marrón y negro con detalles dorados/bronce
                  </li>
                </ul>
              </div>

              <div className="bg-zinc-900/50 p-6 border border-gold/20">
                <h3 className="text-xl font-bold text-gold mb-4">Diseño de las Culatas</h3>
                <p className="text-white/80 mb-4">
                  Las culatas están fabricadas con madera de alta calidad y tienen las siguientes opciones de
                  tonalidades:
                </p>
                <ul className="space-y-2 text-white/80">
                  <li className="flex items-start gap-2">
                    <span className="text-gold">•</span> Tonalidad clara
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-gold">•</span> Tonalidad media
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-gold">•</span> Tonalidad oscura
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-gold">•</span> Madera negra texturada (estilo moderno)
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <ChatBubbles />
    </>
  )
}
