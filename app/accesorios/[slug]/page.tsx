import { HeaderAnnouncement } from "@/components/header-announcement"
import { HeaderMenu } from "@/components/header-menu"
import { Footer } from "@/components/footer"
import { ChatBubbles } from "@/components/chat-bubbles"
import { CartDrawer } from "@/components/cart/cart-drawer"
import { Breadcrumb } from "@/components/breadcrumb"
import { ProductGalleryInteractive } from "@/components/product-gallery-interactive"
import { RelatedProducts } from "@/components/related-products"
import { notFound } from "next/navigation"
import { SchemaOrg } from "@/components/schema-org"
import { AccesorioAddToCart } from "@/components/accesorios/accesorio-add-to-cart"
import { Badge } from "@/components/badge"
import { Check } from "lucide-react"

// Definir los accesorios disponibles
const accesorios = [
  {
    id: "mira-telescopica",
    name: "Mira Telescópica 3-9 X 40",
    description:
      "Mira de alta precisión para mejorar la puntería a larga distancia. Ideal para tiro deportivo y caza. Cuenta con ajustes de elevación y deriva, así como un retículo iluminado para condiciones de poca luz.",
    price: 85000,
    image: "/images/accesorios/mira-telescopica.jpeg",
    slug: "mira-telescopica",
    features: [
      "Aumento: 3-9x",
      "Diámetro del objetivo: 40mm",
      "Retículo iluminado",
      "Ajustes de elevación y deriva",
      "Resistente al agua y golpes",
      "Compatible con riel de 11mm y 22mm",
    ],
    gallery: ["/images/accesorios/mira-telescopica.jpeg"],
    stock: 8,
    rating: 4.7,
    reviewCount: 15,
    shortDescription: "Mira de alta precisión para mejorar la puntería a larga distancia",
  },
  {
    id: "cargador-rotativo",
    name: "Cargador Rotativo 3D",
    description:
      "Cargador rotativo fabricado con impresión 3D de alta calidad. Disponible para calibres 5.50, 6.35 y 7.62. Permite cargar múltiples proyectiles para disparos consecutivos sin necesidad de recargar manualmente entre disparos.",
    price: 18000,
    image: "/images/accesorios/cargador-rotativo.jpeg",
    slug: "cargador-rotativo",
    features: [
      "Fabricado con impresión 3D de alta calidad",
      "Disponible para calibres 5.50, 6.35 y 7.62",
      "Capacidad: 8-12 proyectiles (según calibre)",
      "Rotación suave y precisa",
      "Fácil carga y uso",
      "Compatible con modelos J1 y Bullpup",
    ],
    gallery: ["/images/accesorios/cargador-rotativo.jpeg"],
    stock: 20,
    rating: 4.8,
    reviewCount: 12,
    shortDescription: "Cargador rotativo para calibres 5.50, 6.35 y 7.62",
  },
  {
    id: "funda-tela",
    name: "Funda de Tela",
    description:
      "Fundas de tela resistente y acolchada para proteger tu rifle durante el transporte y almacenamiento. Disponible para modelos J1 y Bullpup, con bolsillos adicionales para accesorios y cierre de cremallera reforzado.",
    price: 50000,
    image: "/images/accesorios/funda-tela.jpeg",
    slug: "funda-tela",
    features: [
      "Material: Tela cordura resistente al agua",
      "Interior acolchado para mayor protección",
      "Bolsillos adicionales para accesorios",
      "Cierre de cremallera reforzado",
      "Correa ajustable para transporte",
      "Disponible para modelos J1 y Bullpup",
    ],
    gallery: ["/images/accesorios/funda-tela.jpeg"],
    stock: 15,
    rating: 4.5,
    reviewCount: 8,
    shortDescription: "Fundas de tela para modelos J1 y Bullpup",
  },
  {
    id: "funda-cuero",
    name: "Funda de Cuero Engrasado",
    description:
      "Funda premium fabricada en cuero engrasado de alta calidad con el logo de J. Murrieta grabado. Ofrece protección superior y un aspecto elegante y tradicional. Ideal para quienes buscan durabilidad y estilo.",
    price: 220000,
    image: "/images/accesorios/funda-cuero.jpeg",
    slug: "funda-cuero",
    features: [
      "Material: Cuero engrasado de primera calidad",
      "Logo J. Murrieta grabado",
      "Costuras reforzadas",
      "Interior suave para proteger el acabado del rifle",
      "Cierre seguro con hebilla tradicional",
      "Disponible para modelos J1 y Bullpup",
    ],
    gallery: ["/images/accesorios/funda-cuero.jpeg"],
    stock: 5,
    rating: 5.0,
    reviewCount: 7,
    shortDescription: "Funda premium de cuero engrasado con logo J. Murrieta",
  },
  {
    id: "kit-mantenimiento",
    name: "Kit de Mantenimiento",
    description:
      "Kit completo con todo lo necesario para mantener tu rifle en óptimas condiciones. Incluye baqueta, cepillos, aceite, grasa, paños de limpieza y herramientas básicas para el mantenimiento regular de tu rifle PCP.",
    price: 15000,
    image: "/images/accesorios/kit-mantenimiento.jpeg",
    slug: "kit-mantenimiento",
    features: [
      "Baqueta de limpieza con adaptadores",
      "Cepillos para diferentes calibres",
      "Aceite lubricante especial para PCP",
      "Grasa para O-rings",
      "Paños de limpieza de microfibra",
      "Herramientas básicas para mantenimiento",
      "Estuche organizador",
    ],
    gallery: ["/images/accesorios/kit-mantenimiento.jpeg"],
    stock: 12,
    rating: 4.6,
    reviewCount: 10,
    shortDescription: "Todo lo necesario para mantener tu rifle en óptimas condiciones",
  },
  {
    id: "inflador-pcp",
    name: "Inflador PCP AIRVAM B-300",
    description:
      "Bomba de alta presión AIRVAM B-300 para cargar tu rifle PCP. Diseñada para alcanzar hasta 300 BAR con mínimo esfuerzo gracias a su sistema de tres etapas. Incluye filtro de humedad y manómetro de precisión.",
    price: 230000,
    image: "/images/accesorios/inflador-pcp.jpeg",
    slug: "inflador-pcp",
    features: [
      "Presión máxima: 300 BAR",
      "Sistema de tres etapas para reducir esfuerzo",
      "Filtro de humedad incorporado",
      "Manómetro de precisión",
      "Manguera de alta presión con desconexión rápida",
      "Base estable para mayor seguridad durante el uso",
      "Compatible con todos los rifles PCP del mercado",
    ],
    gallery: ["/images/accesorios/inflador-pcp.jpeg"],
    stock: 6,
    rating: 4.9,
    reviewCount: 18,
    shortDescription: "Bomba de alta presión para cargar tu rifle PCP",
  },
  {
    id: "pico-carga",
    name: "Pico de Carga",
    description:
      "Picos de carga con acople rápido o A.V. fabricados en aluminio de alta calidad. Permiten una conexión segura entre la bomba o tanque de aire y tu rifle PCP para una carga eficiente y sin pérdidas de presión.",
    price: 9000,
    image: "/images/accesorios/pico-carga.jpeg",
    slug: "pico-carga",
    features: [
      "Material: Aluminio mecanizado",
      "Disponible con acople rápido o sistema A.V.",
      "O-rings de alta calidad incluidos",
      "Diseño que previene fugas de aire",
      "Compatible con bombas manuales y tanques de buceo",
      "Acabado anodizado para mayor durabilidad",
    ],
    gallery: ["/images/accesorios/pico-carga.jpeg"],
    stock: 25,
    rating: 4.7,
    reviewCount: 9,
    shortDescription: "Picos de carga con acople rápido o A.V.",
  },
  {
    id: "cuna-monotiro",
    name: "Cuña Monotiro",
    description:
      "Cuña monotiro fabricada con impresión 3D de alta calidad para calibres 5.50, 6.35 y 7.62. Permite cargar y disparar un único proyectil a la vez, ideal para tiro de precisión o cuando se busca la máxima exactitud.",
    price: 5000,
    image: "/images/accesorios/cuna-monotiro.jpeg",
    slug: "cuna-monotiro",
    features: [
      "Fabricada con impresión 3D de alta calidad",
      "Disponible para calibres 5.50, 6.35 y 7.62",
      "Diseño preciso para carga exacta del proyectil",
      "Fácil instalación y uso",
      "Compatible con modelos J1 y Bullpup",
      "Ideal para tiro de precisión",
    ],
    gallery: ["/images/accesorios/cuna-monotiro.jpeg"],
    stock: 30,
    rating: 4.5,
    reviewCount: 6,
    shortDescription: "Cuña monotiro para calibres 5.50, 6.35 y 7.62",
  },
]

// Función para obtener accesorios relacionados
function getRelatedProducts(currentSlug: string) {
  return accesorios.filter((accesorio) => accesorio.slug !== currentSlug).slice(0, 4)
}

// Función para generar metadatos dinámicos
export function generateMetadata({ params }: { params: { slug: string } }) {
  const accesorio = accesorios.find((acc) => acc.slug === params.slug)

  if (!accesorio) {
    return {
      title: "Accesorio no encontrado",
      description: "El accesorio que buscas no está disponible.",
    }
  }

  return {
    title: `${accesorio.name} | Accesorios J. Murrieta`,
    description: accesorio.description.substring(0, 160),
    openGraph: {
      title: `${accesorio.name} | Accesorios J. Murrieta`,
      description: accesorio.description.substring(0, 160),
      images: [{ url: accesorio.image }],
    },
  }
}

export default function AccesorioDetailPage({ params }: { params: { slug: string } }) {
  const accesorio = accesorios.find((acc) => acc.slug === params.slug)

  if (!accesorio) {
    notFound()
  }

  const relatedProducts = getRelatedProducts(params.slug).map((acc) => ({
    id: acc.id,
    name: acc.name,
    slug: acc.slug,
    price: acc.price,
    image: acc.image,
    category: "accesorios",
  }))

  // Datos de ejemplo para las reseñas del producto
  const productReviews = [
    {
      id: 1,
      name: "Carlos Martínez",
      location: "Córdoba, Argentina",
      rating: 5,
      text: "Excelente calidad y acabado. Este accesorio complementa perfectamente mi rifle J1. El servicio al cliente es excepcional.",
      date: "15/03/2023",
    },
    {
      id: 2,
      name: "Miguel Fernández",
      location: "Mendoza, Argentina",
      rating: 4,
      text: "Buena relación calidad-precio. El producto es robusto y funcional. Solo le quito una estrella porque el tiempo de entrega fue un poco más largo de lo esperado.",
      date: "20/02/2023",
    },
    {
      id: 3,
      name: "Ana Rodríguez",
      location: "Rosario, Argentina",
      rating: 5,
      text: "La calidad es impresionante. Muy satisfecha con mi compra y con la atención recibida. Definitivamente recomendaría este producto.",
      date: "10/03/2023",
    },
  ]

  return (
    <>
      <SchemaOrg
        type="Product"
        name={accesorio.name}
        description={accesorio.description}
        image={accesorio.image}
        price={accesorio.price}
        currency="ARS"
      />
      <HeaderAnnouncement />
      <HeaderMenu />
      <CartDrawer />

      <main className="bg-zinc-900 pb-16">
        <div className="container mx-auto px-4 py-8">
          <Breadcrumb
            items={[
              { label: "Inicio", href: "/" },
              { label: "Accesorios", href: "/accesorios" },
              { label: accesorio.name, href: `/accesorios/${accesorio.slug}` },
            ]}
          />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 mt-8">
            <div>
              <ProductGalleryInteractive
                images={accesorio.gallery.map((img) => img || "/placeholder.svg?height=400&width=400")}
                productName={accesorio.name}
              />
            </div>
            <div className="bg-black/30 p-6 border border-gold/10">
              <div>
                <Badge variant="premium" className="mb-2">
                  Premium
                </Badge>
                <h1 className="text-3xl font-bold text-white mb-2">{accesorio.name}</h1>
                <div className="w-16 h-0.5 bg-gold mb-4"></div>
                <p className="text-lg text-white/70">{accesorio.shortDescription}</p>
              </div>

              {/* Valoraciones */}
              <div className="flex items-center gap-2 mt-4">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className={`h-4 w-4 ${
                        i < Math.floor(accesorio.rating) ? "text-yellow-400 fill-yellow-400" : "text-gray-400"
                      }`}
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                    </svg>
                  ))}
                </div>
                <span className="text-sm text-white/60">
                  {accesorio.rating.toFixed(1)} ({accesorio.reviewCount} reseñas)
                </span>
              </div>

              <div className="border-t border-b border-gold/20 py-4 my-6">
                <div className="text-3xl font-bold text-gold">${accesorio.price.toLocaleString()}</div>
                <div className="text-sm text-white/60 mt-1">
                  En stock (<span className="text-gold">{accesorio.stock}</span> disponibles)
                </div>
              </div>

              <div className="mt-8 bg-black/20 p-4 border border-gold/10">
                <h3 className="text-xl font-semibold text-gold mb-4">Características</h3>
                <ul className="space-y-3">
                  {accesorio.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-gold flex-shrink-0 mt-0.5" />
                      <span className="text-white/70">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-8">
                <AccesorioAddToCart accesorio={accesorio} />
              </div>
            </div>
          </div>

          <div className="mt-16">
            <h2 className="text-2xl font-bold text-white mb-6">Descripción del producto</h2>
            <div className="prose prose-invert max-w-none">
              <p className="text-white/70">{accesorio.description}</p>

              <h3 className="text-xl font-bold text-white mt-8 mb-4">
                <span className="text-gold">Calidad Premium</span>
              </h3>
              <p className="text-white/70">
                Todos nuestros accesorios están fabricados con los mejores materiales disponibles, garantizando
                durabilidad y un rendimiento óptimo a lo largo del tiempo.
              </p>

              <h3 className="text-xl font-bold text-white mt-8 mb-4">
                <span className="text-gold">Compatibilidad Garantizada</span>
              </h3>
              <p className="text-white/70">
                Diseñados específicamente para funcionar a la perfección con nuestros rifles J. Murrieta, asegurando una
                integración perfecta y un rendimiento superior.
              </p>
            </div>
          </div>
        </div>

        <RelatedProducts products={relatedProducts} title="Otros accesorios que podrían interesarte" />
      </main>

      <Footer />
      <ChatBubbles />
    </>
  )
}

// Generar rutas estáticas para todos los accesorios
export function generateStaticParams() {
  return accesorios.map((accesorio) => ({
    slug: accesorio.slug,
  }))
}
