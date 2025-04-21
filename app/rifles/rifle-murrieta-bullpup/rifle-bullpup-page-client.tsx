"use client"

import { useState } from "react"
import { HeaderAnnouncement } from "@/components/header-announcement"
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
import { useCart } from "@/context/cart-context"
import { CartDrawer } from "@/components/cart/cart-drawer"
import { ReviewsSection } from "@/components/reviews-section"
import { ProductGalleryInteractive } from "@/components/product-gallery-interactive"

export default function RifleBullpupPageClient({ product, relatedProducts }) {
  // Función para formatear precios en pesos argentinos
  const formatCurrency = (price: number) => {
    return new Intl.NumberFormat("es-AR", {
      style: "currency",
      currency: "ARS",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(price)
  }

  // Estado para la cantidad y el calibre seleccionado
  const [quantity, setQuantity] = useState(1)
  const [selectedCaliberIndex, setSelectedCaliberIndex] = useState(0)

  // Usar el contexto del carrito
  const { addItem } = useCart()

  // Manejar cambio de cantidad
  const handleQuantityChange = (newQuantity: number) => {
    if (newQuantity >= 1 && newQuantity <= (product?.stock || 10)) {
      setQuantity(newQuantity)
    }
  }

  // Manejar agregar al carrito
  const handleAddToCart = () => {
    if (!product || !product.calibers || product.calibers.length === 0) return

    const selectedCaliber = product.calibers[selectedCaliberIndex]
    const totalPrice = selectedCaliber.price

    addItem({
      id: product.id,
      name: product.name,
      price: totalPrice,
      quantity: quantity,
      image: product.images?.[0] || "/placeholder.svg",
      caliber: selectedCaliber.name,
      slug: "rifle-murrieta-bullpup",
      category: product.category,
    })
  }

  // Datos de ejemplo para las reseñas del producto
  const productReviews = [
    {
      id: 1,
      name: "Laura Gómez",
      location: "Buenos Aires, Argentina",
      rating: 5,
      text: "El modelo BULLPUP es una obra maestra. Compacto pero potente, con una precisión excepcional. La atención al detalle en cada componente demuestra el compromiso de J. Murrieta con la calidad.",
      date: "02/04/2023",
    },
    {
      id: 2,
      name: "Roberto Sánchez",
      location: "Córdoba, Argentina",
      rating: 5,
      text: "Increíblemente manejable y preciso. El diseño bullpup hace que sea muy cómodo de usar incluso en espacios reducidos. Estoy muy satisfecho con mi compra.",
      date: "15/03/2023",
    },
    {
      id: 3,
      name: "Javier López",
      location: "San Juan, Argentina",
      rating: 5,
      text: "Mi experiencia con el BULLPUP ha sido excepcional. El asesoramiento personalizado me ayudó a elegir el modelo perfecto para mis necesidades. La calidad es insuperable.",
      date: "05/04/2023",
    },
  ]

  // Si no hay producto, mostrar un mensaje de carga
  if (!product) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-zinc-900">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-gold/30 border-t-gold rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-white">Cargando información del producto...</p>
        </div>
      </div>
    )
  }

  // Asegurarse de que calibers existe y tiene elementos
  const calibers = product.calibers || []
  const selectedCaliber =
    calibers.length > 0
      ? calibers[selectedCaliberIndex]
      : {
          name: "Calibre no disponible",
          price: 0,
          inflatedPrice: 0,
          specs: { velocity: "N/A", autonomy: "N/A" },
        }

  return (
    <>
      <HeaderAnnouncement />
      <HeaderMenu />
      <CartDrawer />

      <main>
        <PageBanner
          title="Rifle Murrieta"
          subtitle="BULLPUP"
          description={product.shortDescription || ""}
          imageSrc="/images/banner-rifle-workshop.jpeg"
          imageAlt={`Rifle ${product.name}`}
        />

        <div className="py-8 bg-zinc-900">
          <div className="container mx-auto px-4">
            <Breadcrumb
              items={[
                { label: "Inicio", href: "/" },
                { label: "Rifles", href: "/rifles" },
                { label: product.name, href: `/rifles/rifle-murrieta-bullpup` },
              ]}
            />

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 mb-12 md:mb-16">
              {/* Galería de imágenes interactiva */}
              <ProductGalleryInteractive images={product.images || []} productName={product.name} />

              {/* Información del producto */}
              <div className="space-y-6">
                <div>
                  <Badge variant="premium" className="mb-2">
                    Premium
                  </Badge>
                  <h1 className="text-3xl font-bold text-white">
                    Rifle Murrieta <span className="text-gold">BULLPUP</span>
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
                          i < Math.floor(4.9) ? "text-yellow-400 fill-yellow-400" : "text-gray-400"
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-sm text-white/60">4.9 (27 reseñas)</span>
                </div>

                <div className="border-t border-b border-gold/20 py-4">
                  <div>
                    <div className="text-3xl font-bold text-gold">{formatCurrency(selectedCaliber.price)}</div>
                    <div className="text-sm text-white/60 line-through">
                      {formatCurrency(selectedCaliber.inflatedPrice)}
                    </div>
                    <div className="text-sm text-green-500 font-medium">10% de descuento</div>
                  </div>
                  <div className="text-sm text-white/60 mt-1">
                    En stock (<span className="text-gold">12</span> disponibles)
                  </div>
                </div>

                {/* Selector de calibre */}
                <div className="space-y-4">
                  <h3 className="text-lg font-medium text-white">
                    Seleccionar <span className="text-gold">Calibre</span>
                  </h3>
                  <div className="space-y-3">
                    {calibers.map((caliber, index) => (
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
                                {formatCurrency(caliber.price)}
                                <div className="text-sm text-white/60 line-through">
                                  {formatCurrency(caliber.inflatedPrice)}
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="text-sm text-white/60 space-y-1">
                            <p>
                              Velocidad: <span className="text-gold">{caliber.specs?.velocity || "N/A"}</span>
                            </p>
                            <p>
                              Autonomía: <span className="text-gold">{caliber.specs?.autonomy || "N/A"}</span>
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
                      disabled={quantity >= (product.stock || 10)}
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
                  <span className="text-gold">Especificaciones Técnicas</span>
                </h3>
                <div className="prose prose-sm max-w-none text-white/70">
                  <ul className="space-y-1">
                    <li>
                      <strong>Peso:</strong> 3 - 3.5 kg
                    </li>
                    <li>
                      <strong>Potencia:</strong> 950-1050 fps (200 bar) / 700-750 fps (100 bar)
                    </li>
                    <li>
                      <strong>Precisión:</strong> Agrupación de 30 disparos en un diámetro de 35mm a 35 metros
                    </li>
                  </ul>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-bold text-white mb-4">
                  Características <span className="text-gold">Destacadas</span>
                </h3>
                <ul className="space-y-3">
                  {(product.features || []).map((feature, index) => (
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
            {relatedProducts && relatedProducts.length > 0 && (
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-white mb-6">Productos relacionados</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {relatedProducts.map((relatedProduct) => (
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
                          unoptimized
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
                        <p className="font-bold text-lg text-gold mb-3">{formatCurrency(relatedProduct.price)}</p>
                        <Button asChild variant="outline" className="w-full border-gold/30 text-gold hover:bg-gold/10">
                          <Link href={`/${relatedProduct.category}/${relatedProduct.slug}`}>Ver detalles</Link>
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </main>

      <Footer />
      <ChatBubbles />
    </>
  )
}
