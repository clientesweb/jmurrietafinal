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
  title: "Rifle Murrieta J1 | Rifles PCP de Alta Precisión",
  description:
    "Rifle PCP J1 de alta precisión disponible en calibres 5.50, 6.35 y 7.62. Incluye cargador y supresor. Fabricado artesanalmente en Argentina.",
  openGraph: {
    title: "Rifle Murrieta J1 | Rifles PCP de Alta Precisión",
    description:
      "Rifle PCP J1 de alta precisión disponible en calibres 5.50, 6.35 y 7.62. Incluye cargador y supresor. Fabricado artesanalmente en Argentina.",
    images: [{ url: "/images/rifle-j1-main.jpeg" }],
  },
}

export default function RifleMurrietaJ1Page() {
  const productData = {
    id: "rifle-murrieta-j1",
    name: "Rifle Murrieta J1",
    shortDescription: "Rifle PCP de alta precisión con tecnología avanzada",
    description:
      "El Rifle Murrieta J1 representa la excelencia en rifles PCP fabricados en Argentina. Diseñado para tiradores exigentes que buscan precisión y confiabilidad. Cada rifle es fabricado artesanalmente con los mejores materiales disponibles, garantizando un rendimiento excepcional en cada disparo.",
    basePrice: 632500,
    originalPrice: 695750,
    variants: [
      {
        id: "j1-cal-550",
        caliber: "5.50",
        price: 632500,
        originalPrice: 695750,
        stock: 8,
        description: "Calibre 5.50 - Ideal para tiro deportivo y control de plagas",
      },
      {
        id: "j1-cal-635",
        caliber: "6.35",
        price: 687500,
        originalPrice: 756250,
        stock: 5,
        description: "Calibre 6.35 - Perfecto equilibrio entre potencia y precisión",
      },
      {
        id: "j1-cal-762",
        caliber: "7.62",
        price: 797500,
        originalPrice: 877250,
        stock: 3,
        description: "Calibre 7.62 - Máxima potencia para caza mayor",
      },
    ],
    images: [
      "/images/rifle-j1-main.jpeg",
      "/images/rifle-j1-side.jpeg",
      "/images/rifle-j1-detail.jpeg",
      "/images/rifle-j1-scope.jpeg",
    ],
    features: [
      "Sistema PCP de alta presión (300 BAR)",
      "Cañón de acero inoxidable de precisión",
      "Culata ergonómica de madera seleccionada",
      "Gatillo ajustable de dos etapas",
      "Manómetro integrado",
      "Supresor de sonido incluido",
      "Cargador rotativo incluido",
      "Riel Picatinny para accesorios",
      "Acabado premium resistente a la corrosión",
      "Garantía de 2 años",
    ],
    specifications: {
      Sistema: "PCP (Pre-Charged Pneumatic)",
      "Presión de trabajo": "300 BAR",
      "Longitud total": "1050 mm",
      Peso: "3.2 kg",
      "Longitud del cañón": "600 mm",
      "Capacidad del tanque": "480 cc",
      "Disparos por carga": "80-120 (según calibre)",
      "Velocidad inicial": "280-320 m/s (según calibre)",
      Precisión: "Sub-MOA a 50 metros",
      "Material del cañón": "Acero inoxidable",
    },
    slug: "rifle-murrieta-j1",
    category: "rifles",
    rating: 4.8,
    reviewCount: 24,
  }

  const relatedProducts = [
    {
      id: "rifle-murrieta-bullpup",
      name: "Rifle Murrieta Bullpup",
      slug: "rifle-murrieta-bullpup",
      price: 709500,
      image: "/images/rifle-bullpup-main.jpeg",
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
      id: "funda-cuero",
      name: "Funda de Cuero Engrasado",
      slug: "funda-cuero",
      price: 220000,
      image: "/images/accesorios/funda-cuero.jpeg",
      category: "accesorios",
    },
    {
      id: "inflador-pcp",
      name: "Inflador PCP AIRVAM B-300",
      slug: "inflador-pcp",
      price: 230000,
      image: "/images/accesorios/inflador-pcp.jpeg",
      category: "accesorios",
    },
  ]

  const productReviews = [
    {
      id: 1,
      name: "Carlos Martínez",
      location: "Córdoba, Argentina",
      rating: 5,
      text: "Excelente rifle, la precisión es impresionante. He logrado grupos de menos de 2 cm a 50 metros. La construcción es sólida y el acabado es de primera calidad.",
      date: "15/03/2023",
    },
    {
      id: 2,
      name: "Miguel Fernández",
      location: "Mendoza, Argentina",
      rating: 5,
      text: "Muy satisfecho con mi compra. El rifle llegó perfectamente embalado y la atención al cliente fue excepcional. Lo recomiendo sin dudas.",
      date: "20/02/2023",
    },
    {
      id: 3,
      name: "Ana Rodríguez",
      location: "Rosario, Argentina",
      rating: 4,
      text: "Buen rifle, aunque el precio es un poco elevado. La calidad justifica la inversión. El supresor funciona muy bien.",
      date: "10/03/2023",
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
                <Badge variant="premium" className="mb-2">
                  Premium
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
                  Rifle completo con culata de madera
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
