"use client"

import { useState } from "react"
import { HeaderAnnouncement } from "@/components/header-announcement"
import { HeaderSearch } from "@/components/header-search"
import { HeaderMenu } from "@/components/header-menu"
import { Footer } from "@/components/footer"
import { ChatBubbles } from "@/components/chat-bubbles"
import { CartDrawer } from "@/components/cart/cart-drawer"
import { Breadcrumb } from "@/components/breadcrumb"
import { ProductGallery } from "@/components/product-gallery"
import { ProductQuantitySelector } from "@/components/product-quantity-selector"
import { ProductDescription } from "@/components/product-description"
import { ProductFeatures } from "@/components/product-features"
import { RelatedProducts } from "@/components/related-products"
import { Button } from "@/components/ui/button"
import { ShoppingCart } from "lucide-react"
import { notFound } from "next/navigation"
import { SchemaOrg } from "@/components/schema-org"
import { useCart } from "@/context/cart-context"

// Definir los accesorios disponibles
const accesorios = [
  {
    id: "mira-telescopica",
    name: "Mira Telescópica 3-9 X 40",
    description:
      "Mira de alta precisión para mejorar la puntería a larga distancia. Ideal para tiro deportivo y caza. Cuenta con ajustes de elevación y deriva, así como un retículo iluminado para condiciones de poca luz.",
    price: 45000,
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
  },
  {
    id: "cargador-rotativo",
    name: "Cargador Rotativo 3D",
    description:
      "Cargador rotativo fabricado con impresión 3D de alta calidad. Disponible para calibres 5.50, 6.35 y 7.62. Permite cargar múltiples proyectiles para disparos consecutivos sin necesidad de recargar manualmente entre disparos.",
    price: 12000,
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
  },
  {
    id: "funda-tela",
    name: "Funda de Tela",
    description:
      "Fundas de tela resistente y acolchada para proteger tu rifle durante el transporte y almacenamiento. Disponible para modelos J1 y Bullpup, con bolsillos adicionales para accesorios y cierre de cremallera reforzado.",
    price: 18000,
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
  },
  {
    id: "funda-cuero",
    name: "Funda de Cuero Engrasado",
    description:
      "Funda premium fabricada en cuero engrasado de alta calidad con el logo de J. Murrieta grabado. Ofrece protección superior y un aspecto elegante y tradicional. Ideal para quienes buscan durabilidad y estilo.",
    price: 35000,
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
  },
  {
    id: "inflador-pcp",
    name: "Inflador PCP AIRVAM B-300",
    description:
      "Bomba de alta presión AIRVAM B-300 para cargar tu rifle PCP. Diseñada para alcanzar hasta 300 BAR con mínimo esfuerzo gracias a su sistema de tres etapas. Incluye filtro de humedad y manómetro de precisión.",
    price: 65000,
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
  },
  {
    id: "pico-carga",
    name: "Pico de Carga",
    description:
      "Picos de carga con acople rápido o A.V. fabricados en aluminio de alta calidad. Permiten una conexión segura entre la bomba o tanque de aire y tu rifle PCP para una carga eficiente y sin pérdidas de presión.",
    price: 8000,
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
  },
  {
    id: "cuna-monotiro",
    name: "Cuña Monotiro",
    description:
      "Cuña monotiro fabricada con impresión 3D de alta calidad para calibres 5.50, 6.35 y 7.62. Permite cargar y disparar un único proyectil a la vez, ideal para tiro de precisión o cuando se busca la máxima exactitud.",
    price: 6500,
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
  },
]

// Función para obtener accesorios relacionados
function getRelatedProducts(currentSlug: string) {
  return accesorios.filter((accesorio) => accesorio.slug !== currentSlug).slice(0, 4)
}

export default function AccesorioDetailPageClient({ params }: { params: { slug: string } }) {
  const [quantity, setQuantity] = useState(1)
  const { addItem } = useCart()

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
      <HeaderSearch />
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

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-8">
            <div>
              <ProductGallery
                images={accesorio.gallery.map((img) => ({
                  src: img || "/placeholder.svg?height=400&width=400",
                  alt: accesorio.name,
                }))}
              />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-white mb-4">{accesorio.name}</h1>
              <p className="text-3xl font-bold text-gold mb-6">${accesorio.price.toLocaleString()}</p>

              <ProductDescription description={accesorio.description} />

              <div className="mt-8">
                <ProductFeatures features={accesorio.features} />
              </div>

              <div className="mt-8">
                <ProductQuantitySelector
                  max={10}
                  min={1}
                  onQuantityChange={(newQuantity) => setQuantity(newQuantity)}
                />
                <Button
                  className="w-full mt-4 bg-gold hover:bg-gold/90 text-black"
                  onClick={() => {
                    addItem({
                      id: accesorio.id,
                      name: accesorio.name,
                      price: accesorio.price,
                      quantity: quantity,
                      image: accesorio.image,
                      slug: accesorio.slug,
                      category: "accesorios",
                    })
                  }}
                >
                  <ShoppingCart className="mr-2 h-5 w-5" /> Agregar al carrito
                </Button>
              </div>
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
