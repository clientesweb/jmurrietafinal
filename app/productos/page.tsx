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
import { SchemaOrg } from "@/components/schema-org"

// Añadir metadatos específicos para la página de productos
export const metadata = {
  title: "Productos J. Murrieta - Rifles PCP y Accesorios",
  description:
    "Descubre nuestra línea completa de rifles PCP y accesorios de alta calidad. Fabricación argentina con estándares internacionales.",
  openGraph: {
    title: "Productos J. Murrieta - Rifles PCP y Accesorios",
    description:
      "Descubre nuestra línea completa de rifles PCP y accesorios de alta calidad. Fabricación argentina con estándares internacionales.",
  },
}

export default function ProductosPage() {
  // Datos de rifles
  const rifles = [
    {
      id: "rifle-j1",
      name: "Rifle Murrieta J1",
      description: "Diseño tradicional tipo carabina, ideal para tiro de precisión a distancia",
      price: "$575.000",
      image: "/images/rifle-j1-real-1.jpeg",
      slug: "rifle-murrieta-j1",
      category: "rifles",
    },
    {
      id: "rifle-bullpup",
      name: "Rifle Murrieta BULLPUP",
      description: "Diseño compacto para mayor movilidad sin comprometer potencia",
      price: "$645.000",
      image: "/images/rifle-bullpup-real-1.jpeg",
      slug: "rifle-murrieta-bullpup",
      category: "rifles",
    },
  ]

  // Datos de accesorios
  const accesorios = [
    {
      id: "mira-telescopica",
      name: "Mira Telescópica 3-9 X 40",
      description: "Mira de alta precisión para mejorar la puntería a larga distancia",
      price: "$45.000",
      image: "/images/accesorios/mira-telescopica.jpeg",
      slug: "mira-telescopica",
      category: "accesorios",
    },
    {
      id: "cargador-rotativo",
      name: "Cargador Rotativo 3D",
      description: "Cargador rotativo para calibres 5.50, 6.35 y 7.62",
      price: "$12.000",
      image: "/images/accesorios/cargador-rotativo.jpeg",
      slug: "cargador-rotativo",
      category: "accesorios",
    },
    {
      id: "funda-tela",
      name: "Funda de Tela",
      description: "Fundas de tela para modelos J1 y Bullpup",
      price: "$18.000",
      image: "/images/accesorios/funda-tela.jpeg",
      slug: "funda-tela",
      category: "accesorios",
    },
    {
      id: "funda-cuero",
      name: "Funda de Cuero Engrasado",
      description: "Funda premium de cuero engrasado con logo J. Murrieta",
      price: "$35.000",
      image: "/images/accesorios/funda-cuero.jpeg",
      slug: "funda-cuero",
      category: "accesorios",
    },
  ]

  return (
    <>
      <SchemaOrg
        type="ItemList"
        name="Productos J. Murrieta"
        description="Rifles PCP y accesorios de alta calidad fabricados en Argentina"
      />
      <HeaderAnnouncement />
      <HeaderMenu />
      <CartDrawer />

      <main>
        <PageBanner
          title="Nuestros Productos"
          description="Descubre nuestra línea completa de rifles PCP y accesorios de alta calidad."
          imageSrc="/images/banner-rifle-testing.jpeg"
          imageAlt="Rifles y accesorios J. Murrieta"
        />

        <section className="py-16 bg-zinc-900" id="rifles" aria-labelledby="rifles-heading">
          <div className="container mx-auto px-4">
            <h2 id="rifles-heading" className="text-3xl font-bold text-white mb-8 flex items-center">
              <span className="text-gold mr-2">Rifles</span> PCP
              <span className="w-full h-px bg-gold/30 ml-6"></span>
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
              {rifles.map((rifle) => (
                <div
                  key={rifle.id}
                  className="bg-black border border-gold/10 hover:border-gold/30 transition-all duration-300 overflow-hidden group"
                >
                  <div className="relative aspect-square">
                    <Image
                      src={rifle.image || "/placeholder.svg"}
                      alt={rifle.name}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      priority={rifle.id === "rifle-j1" || rifle.id === "rifle-bullpup"}
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-2xl font-bold text-white mb-2">{rifle.name}</h3>
                    <p className="text-white/70 mb-4">{rifle.description}</p>
                    <p className="text-2xl font-bold text-gold mb-6">{rifle.price}</p>
                    <Button asChild className="w-full bg-gold hover:bg-gold/90 text-black">
                      <Link
                        href={`/${rifle.category}/${rifle.slug}`}
                        className="flex items-center justify-center gap-2"
                        aria-label={`Ver detalles de ${rifle.name}`}
                      >
                        VER DETALLES <ArrowRight className="h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 bg-black" id="accesorios" aria-labelledby="accesorios-heading">
          <div className="container mx-auto px-4">
            <h2 id="accesorios-heading" className="text-3xl font-bold text-white mb-8 flex items-center">
              <span className="text-gold mr-2">Accesorios</span> Premium
              <span className="w-full h-px bg-gold/30 ml-6"></span>
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {accesorios.map((accesorio) => (
                <div
                  key={accesorio.id}
                  className="bg-zinc-900 border border-gold/10 hover:border-gold/30 transition-all duration-300 overflow-hidden group"
                >
                  <div className="relative aspect-square">
                    <Image
                      src={accesorio.image || "/placeholder.svg"}
                      alt={accesorio.name}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-white mb-2">{accesorio.name}</h3>
                    <p className="text-white/70 mb-4 line-clamp-2">{accesorio.description}</p>
                    <p className="text-xl font-bold text-gold mb-6">{accesorio.price}</p>
                    <Button asChild className="w-full bg-gold hover:bg-gold/90 text-black">
                      <Link
                        href={`/${accesorio.category}/${accesorio.slug}`}
                        className="flex items-center justify-center gap-2"
                        aria-label={`Ver detalles de ${accesorio.name}`}
                      >
                        VER DETALLES <ArrowRight className="h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-12 text-center">
              <Button asChild variant="outline" className="border-gold/30 text-gold hover:bg-gold/10">
                <Link href="/accesorios" aria-label="Ver todos los accesorios disponibles">
                  Ver todos los accesorios
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <ChatBubbles />
    </>
  )
}
