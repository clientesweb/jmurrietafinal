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

export const metadata = {
  title: "Rifles PCP J. Murrieta",
  description:
    "Descubre nuestra línea completa de rifles PCP de alta precisión. Modelos J1 y Bullpup disponibles en calibres 5.50, 6.35 y 7.62.",
  openGraph: {
    title: "Rifles PCP J. Murrieta",
    description:
      "Descubre nuestra línea completa de rifles PCP de alta precisión. Modelos J1 y Bullpup disponibles en calibres 5.50, 6.35 y 7.62.",
  },
}

export default function RiflesPage() {
  const rifles = [
    {
      id: "rifle-murrieta-j1",
      name: "Rifle Murrieta J1",
      description: "Rifle PCP de alta precisión con tecnología avanzada. Disponible en calibres 5.50, 6.35 y 7.62.",
      basePrice: "Desde $632.500",
      image: "/images/rifle-j1-main.jpeg",
      slug: "rifle-murrieta-j1",
      features: ["Sistema PCP", "Múltiples calibres", "Alta precisión", "Incluye cargador y supresor"],
    },
    {
      id: "rifle-murrieta-bullpup",
      name: "Rifle Murrieta Bullpup",
      description: "Diseño compacto bullpup para máxima maniobrabilidad. Disponible en calibres 5.50, 6.35 y 7.62.",
      basePrice: "Desde $709.500",
      image: "/images/rifle-bullpup-main.jpeg",
      slug: "rifle-murrieta-bullpup",
      features: ["Diseño Bullpup", "Compacto", "Maniobrabilidad superior", "Incluye cargador y supresor"],
    },
  ]

  return (
    <>
      <HeaderAnnouncement />
      <HeaderMenu />
      <CartDrawer />

      <main>
        <PageBanner
          title="Rifles PCP"
          description="Rifles de aire comprimido de alta precisión fabricados artesanalmente en Argentina."
          imageSrc="/images/banner-rifles.jpeg"
          imageAlt="Rifles J. Murrieta"
        />

        <section className="py-16 bg-zinc-900">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {rifles.map((rifle) => (
                <div
                  key={rifle.id}
                  className="bg-black border border-gold/10 hover:border-gold/30 transition-all duration-300 overflow-hidden"
                >
                  <div className="relative aspect-video">
                    <Image
                      src={rifle.image || "/placeholder.svg"}
                      alt={rifle.name}
                      fill
                      className="object-cover transition-transform duration-500 hover:scale-105"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                  </div>
                  <div className="p-8">
                    <h3 className="text-2xl font-bold text-white mb-4">{rifle.name}</h3>
                    <p className="text-white/70 mb-6">{rifle.description}</p>
                    <p className="text-2xl font-bold text-gold mb-6">{rifle.basePrice}</p>
                    <ul className="space-y-2 mb-8">
                      {rifle.features.map((feature, index) => (
                        <li key={index} className="flex items-center text-white/70">
                          <div className="w-2 h-2 bg-gold rounded-full mr-3"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <Button asChild className="w-full bg-gold hover:bg-gold/90 text-black">
                      <Link href={`/rifles/${rifle.slug}`} className="flex items-center justify-center gap-2">
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
