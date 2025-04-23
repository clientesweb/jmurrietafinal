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

// Añadir metadatos específicos para la página de accesorios
export const metadata = {
  title: "Accesorios para Rifles PCP",
  description:
    "Complementa tu rifle PCP con nuestra selección de accesorios de alta calidad. Miras, cargadores, fundas y más para mejorar tu experiencia.",
  openGraph: {
    title: "Accesorios para Rifles PCP",
    description:
      "Complementa tu rifle PCP con nuestra selección de accesorios de alta calidad. Miras, cargadores, fundas y más para mejorar tu experiencia.",
  },
}

export default function AccesoriosPage() {
  const accesorios = [
    {
      id: "mira-telescopica",
      name: "Mira Telescópica 3-9 X 40",
      description: "Mira de alta precisión para mejorar la puntería a larga distancia",
      price: "$45.000",
      image: "/images/accesorios/mira-telescopica.jpeg",
      slug: "mira-telescopica",
    },
    {
      id: "cargador-rotativo",
      name: "Cargador Rotativo 3D",
      description: "Cargador rotativo para calibres 5.50, 6.35 y 7.62",
      price: "$12.000",
      image: "/images/accesorios/cargador-rotativo.jpeg",
      slug: "cargador-rotativo",
    },
    {
      id: "funda-tela",
      name: "Funda de Tela",
      description: "Fundas de tela para modelos J1 y Bullpup",
      price: "$18.000",
      image: "/images/accesorios/funda-tela.jpeg",
      slug: "funda-tela",
    },
    {
      id: "funda-cuero",
      name: "Funda de Cuero Engrasado",
      description: "Funda premium de cuero engrasado con logo J. Murrieta",
      price: "$35.000",
      image: "/images/accesorios/funda-cuero.jpeg",
      slug: "funda-cuero",
    },
    {
      id: "kit-limpieza",
      name: "Kit de Mantenimiento",
      description: "Todo lo necesario para mantener tu rifle en óptimas condiciones",
      price: "$15.000",
      image: "/images/accesorios/kit-mantenimiento.jpeg",
      slug: "kit-mantenimiento",
    },
    {
      id: "inflador-pcp",
      name: "Inflador PCP AIRVAM B-300",
      description: "Bomba de alta presión para cargar tu rifle PCP",
      price: "$65.000",
      image: "/images/accesorios/inflador-pcp.jpeg",
      slug: "inflador-pcp",
    },
    {
      id: "pico-carga",
      name: "Pico de Carga",
      description: "Picos de carga con acople rápido o A.V.",
      price: "$8.000",
      image: "/images/accesorios/pico-carga.jpeg",
      slug: "pico-carga",
    },
    {
      id: "cuna-monotiro",
      name: "Cuña Monotiro",
      description: "Cuña monotiro para calibres 5.50, 6.35 y 7.62",
      price: "$6.500",
      image: "/images/accesorios/cuna-monotiro.jpeg",
      slug: "cuna-monotiro",
    },
  ]

  return (
    <>
      <HeaderAnnouncement />
      <HeaderMenu />
      <CartDrawer />

      <main>
        <PageBanner
          title="Accesorios"
          description="Complementa tu rifle PCP con nuestra selección de accesorios de alta calidad."
          imageSrc="/images/banner-rifle-case.jpeg"
          imageAlt="Accesorios para rifles J. Murrieta"
        />

        <section className="py-16 bg-zinc-900">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {accesorios.map((accesorio) => (
                <div
                  key={accesorio.id}
                  className="bg-black border border-gold/10 hover:border-gold/30 transition-all duration-300 overflow-hidden"
                >
                  <div className="relative aspect-square">
                    <Image
                      src={accesorio.image || "/placeholder.svg"}
                      alt={accesorio.name}
                      fill
                      className="object-cover transition-transform duration-500 hover:scale-105"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-white mb-2">{accesorio.name}</h3>
                    <p className="text-white/70 mb-4">{accesorio.description}</p>
                    <p className="text-xl font-bold text-gold mb-6">Consultar disponibilidad</p>
                    <Button asChild className="w-full bg-gold hover:bg-gold/90 text-black">
                      <Link href={`/accesorios/${accesorio.slug}`} className="flex items-center justify-center gap-2">
                        VER DETALLES <ArrowRight className="h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <ChatBubbles />
    </>
  )
}
