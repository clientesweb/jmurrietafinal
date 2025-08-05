import { HeaderAnnouncement } from "@/components/header-announcement"
import { HeaderMenu } from "@/components/header-menu"
import { Footer } from "@/components/footer"
import { ChatBubbles } from "@/components/chat-bubbles"
import { CartDrawer } from "@/components/cart/cart-drawer"
import { Breadcrumb } from "@/components/breadcrumb"
import { ProductGalleryInteractive } from "@/components/product-gallery-interactive"
import { ProductVariantSelector } from "@/components/product-variant-selector"
import { RelatedProducts } from "@/components/related-products"
import { ProductReviews } from "@/components/product-reviews"
import { SchemaOrg } from "@/components/schema-org"
import { Badge } from "@/components/badge"
import { Check } from "lucide-react"

export const metadata = {
  title: "Rifle Murrieta Bullpup | Rifles PCP Compactos",
  description:
    "Rifle PCP Bullpup de diseño compacto disponible en calibres 5.50, 6.35 y 7.62. Incluye cargador y supresor. Máxima maniobrabilidad.",
  openGraph: {
    title: "Rifle Murrieta Bullpup | Rifles PCP Compactos",
    description:
      "Rifle PCP Bullpup de diseño compacto disponible en calibres 5.50, 6.35 y 7.62. Incluye cargador y supresor. Máxima maniobrabilidad.",
    images: [{ url: "/images/rifle-bullpup-main.jpeg" }],
  },
}

export default function RifleMurrietaBullpupPage() {
  const productData = {
    id: "rifle-murrieta-bullpup",
    name: "Rifle Murrieta Bullpup",
    shortDescription: "Diseño compacto bullpup para máxima maniobrabilidad",
    description:
      "El Rifle Murrieta Bullpup combina la potencia y precisión de un rifle PCP con un diseño compacto revolucionario. Su configuración bullpup permite mantener la longitud del cañón mientras reduce significativamente la longitud total del arma, ofreciendo una maniobrabilidad excepcional sin comprometer el rendimiento.",
    basePrice: 709500,
    originalPrice: 780450,
    variants: [
      {
        id: "bullpup-cal-550",
        caliber: "5.50",
        price: 709500,
        originalPrice: 780450,
        stock: 6,
        description: "Calibre 5.50 - Compacto y preciso para tiro deportivo",
      },
      {
        id: "bullpup-cal-635",
        caliber: "6.35",
        price: 768900,
        originalPrice: 845790,
        stock: 4,
        description: "Calibre 6.35 - Equilibrio perfecto entre potencia y maniobrabilidad",
      },
      {
        id: "bullpup-cal-762",
        caliber: "7.62",
        price: 878900,
        originalPrice: 966790,
        stock: 2,
        description: "Calibre 7.62 - Máxima potencia en formato compacto",
      },
    ],
    images: [
      "/images/rifle-bullpup-main.jpeg",
      "/images/rifle-bullpup-side.jpeg",
      "/images/rifle-bullpup-detail.jpeg",
      "/images/rifle-bullpup-scope.jpeg",
    ],
    features: [
      "Diseño bullpup compacto",
      "Sistema PCP de alta presión (300 BAR)",
      "Cañón de acero inoxidable de precisión",
      "Culata sintética ergonómica",
      "Gatillo ajustable de dos etapas",
      "Manómetro integrado de fácil lectura",
      "Supresor de sonido incluido",
      "Cargador rotativo incluido",
      "Múltiples rieles Picatinny",
      "Garantía de 2 años",
    ],
    specifications: {
      Sistema: "PCP (Pre-Charged Pneumatic)",
      "Presión de trabajo": "300 BAR",
      "Longitud total": "750 mm",
      Peso: "3.0 kg",
      "Longitud del cañón": "500 mm",
      "Capacidad del tanque": "480 cc",
      "Disparos por carga": "70-110 (según calibre)",
      "Velocidad inicial": "270-310 m/s (según calibre)",
      Precisión: "Sub-MOA a 50 metros",
      "Material del cañón": "Acero inoxidable",
    },
    slug: "rifle-murrieta-bullpup",
    category: "rifles",
    rating: 4.9,
    reviewCount: 18,
  }

  const relatedProducts = [
    {
      id: "rifle-murrieta-j1",
      name: "Rifle Murrieta J1",
      slug: "rifle-murrieta-j1",
      price: 632500,
      image: "/images/rifle-j1-main.jpeg",
      category: "rifles",
    },
    {
      id: "mira-telescopica",
      name: "Mira Telescópica 3-9 X 40",
      slug: "mira-telescopica",
      price: 150000,
      image: "/images/accesorios/mira-telescopica.jpeg",
      category: "accesorios",
    },
    {
      id: "funda-tela",
      name: "Funda de Tela",
      slug: "funda-tela",
      price: 50000,
      image: "/images/accesorios/funda-tela.jpeg",
      category: "accesorios",
    },
    {
      id: "kit-mantenimiento",
      name: "Kit de Mantenimiento",
      slug: "kit-mantenimiento",
      price: 15000,
      image: "/images/accesorios/kit-mantenimiento.jpeg",
      category: "accesorios",
    },
  ]

  const productReviews = [
    {
      id: 1,
      name: "Roberto Silva",
      location: "Buenos Aires, Argentina",
      rating: 5,
      text: "El diseño bullpup es increíble. Muy fácil de maniobrar en espacios reducidos sin perder precisión. Excelente construcción.",
      date: "22/03/2023",
    },
    {
      id: 2,
      name: "Laura González",
      location: "Santa Fe, Argentina",
      rating: 5,
      text: "Perfecto para mi estatura. El rifle es compacto pero potente. La atención al cliente de J. Murrieta es excepcional.",
      date: "18/02/2023",
    },
    {
      id: 3,
      name: "Diego Morales",
      location: "Tucumán, Argentina",
      rating: 4,
      text: "Muy buen rifle, aunque tuve que acostumbrarme al diseño bullpup. Una vez que te adaptas, es fantástico.",
      date: "05/03/2023",
    },
  ]

  return (
    <>
      <SchemaOrg
        type="Product"
        name={productData.name}
        description={productData.description}
        image={productData.images[0]}
        price={productData.basePrice}
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
              { label: "Rifles", href: "/rifles" },
              { label: productData.name, href: `/rifles/${productData.slug}` },
            ]}
          />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 mt-8">
            <div>
              <ProductGalleryInteractive images={productData.images} productName={productData.name} />
            </div>
            <div className="bg-black/30 p-6 border border-gold/10">
              <div>
                <Badge variant="new" className="mb-2">
                  Nuevo
                </Badge>
                <h1 className="text-3xl font-bold text-white mb-2">{productData.name}</h1>
                <div className="w-16 h-0.5 bg-gold mb-4"></div>
                <p className="text-lg text-white/70">{productData.shortDescription}</p>
              </div>

              <div className="flex items-center gap-2 mt-4">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className={`h-4 w-4 ${
                        i < Math.floor(productData.rating) ? "text-yellow-400 fill-yellow-400" : "text-gray-400"
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
                  {productData.rating.toFixed(1)} ({productData.reviewCount} reseñas)
                </span>
              </div>

              <div className="mt-8 bg-black/20 p-4 border border-gold/10">
                <h3 className="text-xl font-semibold text-gold mb-4">Características Principales</h3>
                <ul className="space-y-3">
                  {productData.features.slice(0, 6).map((feature, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-gold flex-shrink-0 mt-0.5" />
                      <span className="text-white/70">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-8">
                <ProductVariantSelector product={productData} />
              </div>
            </div>
          </div>

          <div className="mt-16">
            <h2 className="text-2xl font-bold text-white mb-6">Descripción del producto</h2>
            <div className="prose prose-invert max-w-none">
              <p className="text-white/70 mb-6">{productData.description}</p>

              <h3 className="text-xl font-bold text-white mt-8 mb-4">
                <span className="text-gold">Ventajas del Diseño Bullpup</span>
              </h3>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center text-white/70">
                  <Check className="h-5 w-5 text-gold mr-2" />
                  Longitud total reducida manteniendo la longitud del cañón
                </li>
                <li className="flex items-center text-white/70">
                  <Check className="h-5 w-5 text-gold mr-2" />
                  Mejor balance y maniobrabilidad
                </li>
                <li className="flex items-center text-white/70">
                  <Check className="h-5 w-5 text-gold mr-2" />
                  Ideal para espacios reducidos
                </li>
                <li className="flex items-center text-white/70">
                  <Check className="h-5 w-5 text-gold mr-2" />
                  Centro de gravedad optimizado
                </li>
              </ul>

              <h3 className="text-xl font-bold text-white mt-8 mb-4">
                <span className="text-gold">Especificaciones Técnicas</span>
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {Object.entries(productData.specifications).map(([key, value]) => (
                  <div key={key} className="flex justify-between py-2 border-b border-gold/10">
                    <span className="text-white/70">{key}:</span>
                    <span className="text-white font-medium">{value}</span>
                  </div>
                ))}
              </div>

              <h3 className="text-xl font-bold text-white mt-8 mb-4">
                <span className="text-gold">Incluye</span>
              </h3>
              <ul className="space-y-2">
                <li className="flex items-center text-white/70">
                  <Check className="h-5 w-5 text-gold mr-2" />
                  Rifle completo con culata sintética
                </li>
                <li className="flex items-center text-white/70">
                  <Check className="h-5 w-5 text-gold mr-2" />
                  Cargador rotativo
                </li>
                <li className="flex items-center text-white/70">
                  <Check className="h-5 w-5 text-gold mr-2" />
                  Supresor de sonido
                </li>
                <li className="flex items-center text-white/70">
                  <Check className="h-5 w-5 text-gold mr-2" />
                  Manual de usuario
                </li>
                <li className="flex items-center text-white/70">
                  <Check className="h-5 w-5 text-gold mr-2" />
                  Garantía de 2 años
                </li>
              </ul>
            </div>
          </div>

          <ProductReviews reviews={productReviews} />
        </div>

        <RelatedProducts products={relatedProducts} title="Productos relacionados" />
      </main>

      <Footer />
      <ChatBubbles />
    </>
  )
}
