"use client"

import { HeaderAnnouncement } from "@/components/header-announcement"
import { HeaderSearch } from "@/components/header-search"
import { HeaderMenu } from "@/components/header-menu"
import { Footer } from "@/components/footer"
import { ChatBubbles } from "@/components/chat-bubbles"
import { Breadcrumb } from "@/components/breadcrumb"
import { PageBanner } from "@/components/page-banner"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/badge"
import { ShoppingCart, Check, Star, Minus, Plus } from "lucide-react"
import { notFound } from "next/navigation"
import { useState } from "react"
import { useCart } from "@/context/cart-context"
import { CartDrawer } from "@/components/cart/cart-drawer"
import { formatPrice } from "@/lib/utils"
import { ReviewsSection } from "@/components/reviews-section"

// Datos simplificados para los productos
const riflesData = {
  "rifle-murrieta-j1": {
    id: "j1",
    name: "Rifle Murrieta J1",
    fullName: "Rifle Murrieta J1",
    description:
      "El Murrieta J1 destaca por su diseño tradicional tipo carabina, ideal para usuarios que prefieren una estructura más larga y estable. Cada detalle ha sido cuidadosamente diseñado para ofrecer una experiencia de tiro incomparable, combinando la robustez con la precisión. Perfecto para tiro de precisión a distancia, este rifle representa la fusión perfecta entre tecnología avanzada y tradición artesanal.",
    shortDescription: "Diseño tradicional ideal para tiro de precisión a distancia",
    price: 89999,
    rating: 4.8,
    reviewCount: 33,
    stock: 15,
    features: [
      "Diseño tradicional tipo carabina",
      "Cañón fabricado con maquinaria CZ con paso de estría 1/20 una en veinte pulgadas",
      "Estructura larga y estable para mayor precisión",
      "Gatillo de dos tiempos ajustable",
      "Paso de estría: 1/20 una en veinte pulgadas",
    ],
    calibers: [
      {
        name: "Calibre 5.5mm",
        price: 0, // Adicional al precio base
        specs: {
          velocity: "950-1050 fps (200 bar)",
          autonomy: "30-35 disparos óptimos (200 bar)",
        },
      },
      {
        name: "Calibre 6.35mm",
        price: 5000, // Adicional al precio base
        specs: {
          velocity: "950-1050 fps (200 bar)",
          autonomy: "25-30 disparos óptimos (200 bar)",
        },
      },
      {
        name: "Calibre 7.62mm",
        price: 10000, // Adicional al precio base
        specs: {
          velocity: "950-1050 fps (200 bar)",
          autonomy: "10-15 disparos óptimos (200 bar)",
        },
      },
    ],
    images: ["/images/rifle-j1.jpg", "/images/rifle-j1-detail-1.jpg", "/images/rifle-j1-detail-2.jpg"],
    category: "rifles",
  },
  "rifle-murrieta-bullpup": {
    id: "bullpup",
    name: "Rifle Murrieta BULLPUP",
    fullName: "Rifle Murrieta BULLPUP",
    description:
      "El Murrieta BULLPUP está diseñado para aquellos que buscan un rifle más compacto y manejable. Su tamaño reducido lo hace ideal para situaciones que requieren mayor movilidad, sin comprometer la potencia ni la precisión del disparo. La combinación de materiales avanzados y tecnología de punta garantiza una precisión excepcional tiro tras tiro, incluso en las condiciones más exigentes.",
    shortDescription: "Diseño compacto para mayor movilidad sin comprometer potencia",
    price: 109999,
    rating: 4.9,
    reviewCount: 27,
    stock: 12,
    features: [
      "Diseño compacto tipo bullpup",
      "Mayor manejabilidad y movilidad",
      "Cañón fabricado con maquinaria CZ con paso de estría 1/20 una en veinte pulgadas",
      "Sistema de recarga rápida",
      "Paso de estría: 1/20 una en veinte pulgadas",
    ],
    calibers: [
      {
        name: "Calibre 5.5mm",
        price: 0, // Adicional al precio base
        specs: {
          velocity: "950-1050 fps (200 bar)",
          autonomy: "30-35 disparos óptimos (200 bar)",
        },
      },
      {
        name: "Calibre 6.35mm",
        price: 5000, // Adicional al precio base
        specs: {
          velocity: "950-1050 fps (200 bar)",
          autonomy: "25-30 disparos óptimos (200 bar)",
        },
      },
      {
        name: "Calibre 7.62mm",
        price: 10000, // Adicional al precio base
        specs: {
          velocity: "950-1050 fps (200 bar)",
          autonomy: "10-15 disparos óptimos (200 bar)",
        },
      },
    ],
    images: ["/images/rifle-bullpup.jpg", "/images/rifle-bullpup-detail-1.jpg", "/images/rifle-bullpup-detail-2.jpg"],
    category: "rifles",
  },
}

// Productos relacionados
const relatedProducts = [
  {
    id: "j1",
    name: "Rifle Murrieta J1",
    slug: "rifle-murrieta-j1",
    price: 89999,
    image: "/images/rifle-j1.jpg",
    category: "rifles",
  },
  {
    id: "bullpup",
    name: "Rifle Murrieta BULLPUP",
    slug: "rifle-murrieta-bullpup",
    price: 109999,
    image: "/images/rifle-bullpup.jpg",
    category: "rifles",
  },
  {
    id: "mira",
    name: "Mira Telescópica",
    slug: "mira-telescopica",
    price: 45000,
    image: "/placeholder.svg?height=400&width=400",
    category: "accesorios",
  },
  {
    id: "funda",
    name: "Funda de Transporte",
    slug: "funda-transporte",
    price: 25000,
    image: "/placeholder.svg?height=400&width=400",
    category: "accesorios",
  },
]

export default function ProductPage({ params }: { params: { slug: string } }) {
  // Estado para la cantidad y el calibre seleccionado
  const [quantity, setQuantity] = useState(1)
  const [selectedCaliberIndex, setSelectedCaliberIndex] = useState(0)

  // Usar el contexto del carrito
  const { addItem } = useCart()

  // Verificar si el slug existe en los productos
  const product = riflesData[params.slug as keyof typeof riflesData]

  if (!product) {
    notFound()
  }

  // Filtrar productos relacionados para no mostrar el producto actual
  const filteredRelatedProducts = relatedProducts
    .filter((relatedProduct) => relatedProduct.slug !== params.slug)
    .slice(0, 3)

  // Manejar cambio de cantidad
  const handleQuantityChange = (newQuantity: number) => {
    if (newQuantity >= 1 && newQuantity <= product.stock) {
      setQuantity(newQuantity)
    }
  }

  // Manejar agregar al carrito
  const handleAddToCart = () => {
    const selectedCaliber = product.calibers[selectedCaliberIndex]

    addItem({
      id: product.id,
      name: product.name,
      price: product.price + selectedCaliber.price,
      quantity: quantity,
      image: product.images[0],
      caliber: selectedCaliber.name,
      slug: params.slug,
      category: product.category,
    })
  }

  // Agregar los datos de reseñas dentro de la función ProductPage
  // Datos de ejemplo para las reseñas del producto
  const productReviews = [
    {
      id: 1,
      name: "Carlos Martínez",
      location: "Córdoba, Argentina",
      rating: 5,
      text: "Increíble calidad y precisión. Este rifle supera todas mis expectativas. El servicio al cliente es excepcional, siempre dispuestos a ayudar con cualquier consulta.",
      date: "15/03/2023",
    },
    {
      id: 2,
      name: "Miguel Fernández",
      location: "Mendoza, Argentina",
      rating: 4,
      text: "Excelente relación calidad-precio. El rifle es robusto y confiable. Solo le quito una estrella porque el tiempo de entrega fue un poco más largo de lo esperado, pero valió la pena la espera.",
      date: "20/02/2023",
    },
    {
      id: 3,
      name: "Ana Rodríguez",
      location: "Rosario, Argentina",
      rating: 5,
      text: "La precisión es impresionante. Muy satisfecha con mi compra y con la atención recibida. Definitivamente recomendaría este producto.",
      date: "10/03/2023",
    },
  ]

  return (
    <>
      <HeaderAnnouncement />
      <HeaderSearch />
      <HeaderMenu />
      <CartDrawer />

      <main>
        <PageBanner
          title={product.id === "j1" ? "Rifle Murrieta" : "Rifle Murrieta"}
          subtitle={product.id === "j1" ? "J1" : "BULLPUP"}
          description={product.shortDescription}
          imageSrc="/images/banner-rifle-workshop.jpeg"
          imageAlt={`Rifle ${product.name}`}
        />

        <div className="py-8 bg-zinc-900">
          <div className="container mx-auto px-4">
            <Breadcrumb
              items={[
                { label: "Inicio", href: "/" },
                { label: "Rifles", href: "/rifles" },
                { label: product.name, href: `/rifles/${params.slug}` },
              ]}
            />

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 mb-12 md:mb-16">
              {/* Galería de imágenes */}
              <div>
                <div className="relative aspect-square overflow-hidden rounded-lg bg-black mb-4 border border-gold/20">
                  <Image
                    src={product.images[0] || "/placeholder.svg"}
                    alt={product.name}
                    fill
                    className="object-contain"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
                <div className="grid grid-cols-3 gap-4">
                  {product.images.map((image, index) => (
                    <div
                      key={index}
                      className="relative aspect-square rounded-md overflow-hidden border border-gold/20"
                    >
                      <Image
                        src={image || "/placeholder.svg"}
                        alt={`${product.name} - Vista ${index + 1}`}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 33vw, 16vw"
                      />
                    </div>
                  ))}
                </div>
              </div>

              {/* Información del producto */}
              <div className="space-y-6">
                <div>
                  <Badge variant="premium" className="mb-2">
                    Premium
                  </Badge>
                  <h1 className="text-3xl font-bold text-white">
                    {product.id === "j1" ? (
                      <>
                        Rifle Murrieta <span className="text-gold">J1</span>
                      </>
                    ) : (
                      <>
                        Rifle Murrieta <span className="text-gold">BULLPUP</span>
                      </>
                    )}
                  </h1>
                  <p className="text-lg text-white/70 mt-1">{product.shortDescription}</p>
                </div>

                {/* Valoraciones */}
                <div className="flex items-center gap-2">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`h-4 w-4 ${
                          i < Math.floor(product.rating) ? "text-yellow-400 fill-yellow-400" : "text-gray-400"
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-sm text-white/60">
                    {product.rating.toFixed(1)} ({product.reviewCount} reseñas)
                  </span>
                </div>

                <div className="border-t border-b border-gold/20 py-4">
                  <div className="text-3xl font-bold text-gold">
                    {formatPrice(product.price + product.calibers[selectedCaliberIndex].price)}
                  </div>
                  <div className="text-sm text-white/60 mt-1">
                    En stock (<span className="text-gold">{product.stock}</span> disponibles)
                  </div>
                </div>

                {/* Selector de calibre */}
                <div className="space-y-4">
                  <h3 className="text-lg font-medium text-white">
                    Seleccionar <span className="text-gold">Calibre</span>
                  </h3>
                  <div className="space-y-3">
                    {product.calibers.map((caliber, index) => (
                      <div
                        key={index}
                        className={`relative flex items-start border rounded-lg p-4 transition-all cursor-pointer ${
                          index === selectedCaliberIndex
                            ? "border-gold bg-gold/5"
                            : "border-white/20 hover:border-gold/50"
                        }`}
                        onClick={() => setSelectedCaliberIndex(index)}
                      >
                        <div className="ml-2 space-y-2 w-full">
                          <div className="flex justify-between items-start">
                            <label className="font-medium text-white">{caliber.name}</label>
                            <div className="text-right">
                              <div className="font-semibold text-white">
                                {formatPrice(product.price + caliber.price)}
                                {caliber.price > 0 && (
                                  <span className="text-sm text-white/60 ml-1">(+{formatPrice(caliber.price)})</span>
                                )}
                              </div>
                            </div>
                          </div>
                          <div className="text-sm text-white/60 space-y-1">
                            <p>
                              Velocidad: <span className="text-gold">{caliber.specs.velocity}</span>
                            </p>
                            <p>
                              Autonomía: <span className="text-gold">{caliber.specs.autonomy}</span>
                            </p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Selector de cantidad */}
                <div className="space-y-2">
                  <h3 className="text-lg font-medium text-white">Cantidad</h3>
                  <div className="flex items-center">
                    <Button
                      variant="outline"
                      size="icon"
                      className="rounded-r-none border-gold/30 text-gold"
                      onClick={() => handleQuantityChange(quantity - 1)}
                      disabled={quantity <= 1}
                    >
                      <Minus className="h-4 w-4" />
                    </Button>
                    <div className="w-16 h-10 flex items-center justify-center border-y border-gold/30 text-white">
                      {quantity}
                    </div>
                    <Button
                      variant="outline"
                      size="icon"
                      className="rounded-l-none border-gold/30 text-gold"
                      onClick={() => handleQuantityChange(quantity + 1)}
                      disabled={quantity >= product.stock}
                    >
                      <Plus className="h-4 w-4" />
                    </Button>
                  </div>
                </div>

                <Button
                  size="lg"
                  className="w-full text-lg py-6 bg-gold hover:bg-gold/90 text-black"
                  onClick={handleAddToCart}
                >
                  <ShoppingCart className="mr-2 h-5 w-5" /> AGREGAR AL CARRITO
                </Button>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-12 mb-12 md:mb-16">
              <div className="lg:col-span-2">
                <h3 className="text-xl font-bold text-white mb-4">Descripción</h3>
                <div className="prose prose-sm max-w-none text-white/70">
                  <p>{product.description}</p>
                </div>

                <h3 className="text-xl font-bold text-white mt-8 mb-4">
                  <span className="text-gold">Rendimiento Superior</span>
                </h3>
                <div className="prose prose-sm max-w-none text-white/70">
                  <p>
                    Diseñado para ofrecer una precisión excepcional en cada disparo, nuestro sistema de calibración
                    avanzado garantiza una trayectoria consistente y predecible, incluso en condiciones adversas.
                  </p>
                </div>

                <h3 className="text-xl font-bold text-white mt-8 mb-4">
                  <span className="text-gold">Materiales Premium</span>
                </h3>
                <div className="prose prose-sm max-w-none text-white/70">
                  <p>
                    Fabricado con los mejores materiales disponibles, cada componente es seleccionado cuidadosamente
                    para garantizar durabilidad, resistencia y un rendimiento óptimo a lo largo del tiempo.
                  </p>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-bold text-white mb-4">
                  Características <span className="text-gold">Destacadas</span>
                </h3>
                <ul className="space-y-3">
                  {product.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-gold flex-shrink-0 mt-0.5" />
                      <span className="text-white/70">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Reseñas del producto */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-white mb-6">Opiniones de clientes</h2>
              <ReviewsSection reviews={productReviews} compact={true} title="" subtitle="" />
            </div>

            {/* Productos relacionados */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-white mb-6">Productos relacionados</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredRelatedProducts.map((relatedProduct) => (
                  <div
                    key={relatedProduct.id}
                    className="group bg-black border border-gold/10 hover:border-gold/30 transition-all duration-300"
                  >
                    <div className="relative aspect-square overflow-hidden">
                      <Image
                        src={relatedProduct.image || "/placeholder.svg"}
                        alt={relatedProduct.name}
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      />
                    </div>
                    <div className="p-4">
                      <h3 className="font-medium text-white line-clamp-2 mb-1">
                        <Link
                          href={`/${relatedProduct.category}/${relatedProduct.slug}`}
                          className="hover:text-gold transition-colors"
                        >
                          {relatedProduct.name}
                        </Link>
                      </h3>
                      <p className="font-bold text-lg text-gold mb-3">{formatPrice(relatedProduct.price)}</p>
                      <Button asChild variant="outline" className="w-full border-gold/30 text-gold hover:bg-gold/10">
                        <Link href={`/${relatedProduct.category}/${relatedProduct.slug}`}>Ver detalles</Link>
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
      <ChatBubbles />
    </>
  )
}
