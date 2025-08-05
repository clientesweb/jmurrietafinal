import { HeaderAnnouncement } from "@/components/header-announcement"
import { HeaderMenu } from "@/components/header-menu"
import { HeroSection } from "@/components/hero-section"
import { BlockPurchaseInfo } from "@/components/block-purchase-info"
import { AboutSection } from "@/components/about-section"
import { ReviewsSection } from "@/components/reviews-section"
import { Footer } from "@/components/footer"
import { ChatBubbles } from "@/components/chat-bubbles"
import { CartDrawer } from "@/components/cart/cart-drawer"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight, Clock } from "lucide-react"
import { Badge } from "@/components/badge"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import SchemaOrg from "@/components/schema-org"

// Mejorar los metadatos específicos para la página de inicio
export const metadata = {
  title: "J. Murrieta | Rifles PCP de Precisión",
  description:
    "Descubre la excelencia en rifles de aire comprimido PCP, donde la innovación tecnológica se une con la tradición artesanal argentina. Rifles de alta precisión fabricados con los más altos estándares de calidad.",
  alternates: {
    canonical: "https://jmurrietapcp.com",
  },
}

export default function Home() {
  // Datos para los blogs destacados
  const featuredBlogs = [
    {
      id: 1,
      title: "Guía completa para el mantenimiento de tu rifle PCP",
      excerpt:
        "Descubre los mejores consejos y técnicas para mantener tu rifle PCP en óptimas condiciones y prolongar su vida útil.",
      date: "15 de Abril, 2025",
      image: "/images/blog/j1-cargando.jpeg",
      slug: "guia-mantenimiento-rifle-pcp",
    },
    {
      id: 2,
      title: "Cómo elegir el calibre adecuado para tu rifle",
      excerpt:
        "Analizamos las ventajas y desventajas de cada calibre para ayudarte a tomar la mejor decisión según tus necesidades.",
      date: "28 de Marzo, 2025",
      image: "/images/blog/j1-presentacion.jpeg",
      slug: "como-elegir-calibre-adecuado",
    },
    {
      id: 3,
      title: "Los mejores accesorios para mejorar la precisión",
      excerpt:
        "Conoce los accesorios indispensables que todo tirador debe tener para mejorar significativamente la precisión de sus disparos.",
      date: "10 de Marzo, 2025",
      image: "/images/blog/rifle-scope-detail.jpeg",
      slug: "mejores-accesorios-precision",
    },
  ]

  // Datos para las preguntas frecuentes destacadas
  const featuredFaqs = [
    {
      question: "¿Qué diferencia hay entre el modelo J1 y el BULLPUP?",
      answer:
        "El modelo J1 tiene un diseño tradicional tipo carabina, ideal para tiro de precisión a distancia, con una estructura más larga y estable. El modelo BULLPUP, por su parte, tiene un diseño más compacto que lo hace ideal para situaciones que requieren mayor movilidad, sin comprometer la potencia ni la precisión del disparo.",
    },
    {
      question: "¿Qué calibres están disponibles para los rifles?",
      answer:
        "Nuestros rifles están disponibles en calibres 5.5mm (.22), 6.35mm (.25) y 7.62mm (.30). Cada calibre tiene características específicas en términos de velocidad, autonomía y potencia, adaptándose a diferentes necesidades y preferencias.",
    },
    {
      question: "¿Realizan envíos a todo el país?",
      answer:
        "Sí, realizamos envíos a todo el territorio argentino a través de Correo Argentino y Andreani. Los tiempos de entrega varían según la ubicación, pero generalmente oscilan entre 3-7 días hábiles.",
    },
    {
      question: "¿Qué métodos de pago aceptan?",
      answer:
        "Actualmente aceptamos transferencias bancarias y depósitos. Una vez que realices tu pedido, te proporcionaremos los datos bancarios para que puedas realizar el pago. Estamos trabajando para implementar más métodos de pago en el futuro.",
    },
  ]

  // Datos de ejemplo para las reseñas
  const reviews = [
    {
      id: 1,
      name: "Carlos Martínez",
      location: "Córdoba, Argentina",
      rating: 5,
      text: "Increíble calidad y precisión. Mi rifle J1 supera todas mis expectativas. El servicio al cliente es excepcional, siempre dispuestos a ayudar con cualquier consulta.",
      date: "15/03/2023",
    },
    {
      id: 2,
      name: "Laura Gómez",
      location: "Buenos Aires, Argentina",
      rating: 5,
      text: "El modelo BULLPUP es una obra maestra. Compacto pero potente, con una precisión excepcional. La atención al detalle en cada componente demuestra el compromiso de J. Murrieta con la calidad.",
      date: "02/04/2023",
    },
    {
      id: 3,
      name: "Miguel Fernández",
      location: "Mendoza, Argentina",
      rating: 4,
      text: "Excelente relación calidad-precio. El rifle J1 es robusto y confiable. Solo le quito una estrella porque el tiempo de entrega fue un poco más largo de lo esperado, pero valió la pena la espera.",
      date: "20/02/2023",
    },
    {
      id: 4,
      name: "Ana Rodríguez",
      location: "Rosario, Argentina",
      rating: 5,
      text: "Compré varios accesorios para mi rifle y todos son de excelente calidad. El servicio postventa es impecable, siempre dispuestos a resolver cualquier duda o problema.",
      date: "10/03/2023",
    },
    {
      id: 5,
      name: "Javier López",
      location: "San Juan, Argentina",
      rating: 5,
      text: "Mi experiencia con J. Murrieta ha sido excepcional desde el principio. El asesoramiento personalizado me ayudó a elegir el modelo perfecto para mis necesidades. La calidad del rifle es insuperable.",
      date: "05/04/2023",
    },
  ]

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
    "5.5": 632500,
    "6.35": 687500,
    "7.62": 797500,
  }

  // Precios finales de los rifles Bullpup (los precios reales)
  const bullpupFinalPrices = {
    "5.5": 709500,
    "6.35": 768900,
    "7.62": 878900,
  }

  // Calcular precios inflados (aproximadamente 10% más)
  const j1InflatedPrice = Math.round(j1FinalPrices["5.5"] * 1.1)
  const bullpupInflatedPrice = Math.round(bullpupFinalPrices["5.5"] * 1.1)

  // Datos para Schema.org
  const faqSchemaData = featuredFaqs.map((faq) => ({
    question: faq.question,
    answer: faq.answer,
  }))

  const productListSchemaData = {
    itemListOrder: "Unordered" as const,
    numberOfItems: 2,
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        url: "https://jmurrietapcp.com/rifles/rifle-murrieta-j1",
        name: "Murrieta MOD. J1",
        image: "https://jmurrietapcp.com/images/rifle-j1-real-2.jpeg",
        description:
          "Diseño tradicional con cañón estriado CZ para máxima precisión a distancia. Fabricación de alta calidad con mecanizado CNC.",
      },
      {
        "@type": "ListItem",
        position: 2,
        url: "https://jmurrietapcp.com/rifles/rifle-murrieta-bullpup",
        name: "Murrieta MOD. BULLPUP",
        image: "https://jmurrietapcp.com/images/rifle-bullpup-real-2.jpeg",
        description:
          "Diseño compacto con cañón estriado CZ para potencia y precisión excepcionales. Fabricación premium con mecanizado CNC.",
      },
    ],
  }

  return (
    <>
      {/* Schema.org para SEO */}
      <SchemaOrg
        type="Organization"
        title="J. Murrieta | Rifles PCP de Precisión"
        description="Descubre la excelencia en rifles de aire comprimido PCP, donde la innovación tecnológica se une con la tradición artesanal argentina."
        imageUrl="https://jmurrietapcp.com/images/logo-murrieta.png"
      />
      <SchemaOrg type="FAQPage" faqData={faqSchemaData} />
      <SchemaOrg type="ItemList" itemListData={productListSchemaData} />

      <HeaderAnnouncement />
      <HeaderMenu />
      <CartDrawer />

      <main>
        {/* 1. Hero Section - Primera impresión */}
        <HeroSection
          title="PRECISIÓN"
          subtitle="LEGENDARIA"
          yearText="DESDE 2021"
          description="Descubre la excelencia en rifles de aire comprimido PCP, donde la innovación tecnológica se une con la tradición artesanal argentina."
          primaryButtonText="DESCUBRIR COLECCIÓN"
          primaryButtonLink="/rifles"
          secondaryButtonText="NUESTRA HISTORIA"
          secondaryButtonLink="/historia"
          desktopImage="/images/hero-banner-new.jpeg"
          mobileImage="/images/auto1.jpg"
          emblemImage="/images/emblem.png"
        />

        {/* 2. Purchase Info Section - Información de compra */}
        <BlockPurchaseInfo />

        {/* 3. Featured Products Section - Rifles (productos principales) */}
        <section className="py-16 bg-black" aria-labelledby="rifles-heading">
          <div className="container mx-auto px-4">
            <h2 id="rifles-heading" className="text-4xl font-bold text-center text-white mb-4">
              Nuestros <span className="text-gold">Rifles</span>
            </h2>
            <div className="w-24 h-0.5 bg-gold mx-auto mb-12"></div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              {/* Rifle J1 */}
              <div className="bg-zinc-900/50 border border-gold/10 hover:border-gold/30 transition-all duration-300 overflow-hidden">
                <div className="relative aspect-square md:aspect-[4/3]">
                  <Image
                    src="/images/rifle-j1-real-2.jpeg"
                    alt="Rifle Murrieta J1"
                    fill
                    className="object-cover transition-transform duration-500 hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 50vw"
                    priority
                  />
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-white mb-2">
                    J. MURRIETA MOD. <span className="text-gold">J1</span>
                  </h3>
                  <p className="text-white/70 mb-4">
                    Diseño tradicional con cañón estriado CZ para máxima precisión a distancia. Fabricación de alta
                    calidad con mecanizado CNC.
                  </p>
                  <div className="mb-6">
                    <p className="text-2xl font-bold text-gold">{formatPrice(j1FinalPrices["5.5"])}</p>
                    <p className="text-sm text-white/60 line-through">{formatPrice(j1InflatedPrice)}</p>
                    <p className="text-sm text-green-500 font-medium">10% de descuento</p>
                  </div>
                  <Button asChild className="w-full bg-gold hover:bg-gold/90 text-black font-cinzel py-6 rounded-none">
                    <Link href="/rifles/rifle-murrieta-j1" className="flex items-center justify-center gap-2">
                      VER DETALLES <ArrowRight className="h-4 w-4" aria-hidden="true" />
                    </Link>
                  </Button>
                </div>
              </div>

              {/* Rifle BULLPUP */}
              <div className="bg-zinc-900/50 border border-gold/10 hover:border-gold/30 transition-all duration-300 overflow-hidden">
                <div className="relative aspect-square md:aspect-[4/3]">
                  <Image
                    src="/images/rifle-bullpup-real-2.jpeg"
                    alt="Rifle Murrieta BULLPUP"
                    fill
                    className="object-cover transition-transform duration-500 hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 50vw"
                    priority
                  />
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-white mb-2">
                    J. MURRIETA MOD. <span className="text-gold">BULLPUP</span>
                  </h3>
                  <p className="text-white/70 mb-4">
                    Diseño compacto con cañón estriado CZ para potencia y precisión excepcionales. Fabricación premium
                    con mecanizado CNC.
                  </p>
                  <div className="mb-6">
                    <p className="text-2xl font-bold text-gold">{formatPrice(bullpupFinalPrices["5.5"])}</p>
                    <p className="text-sm text-white/60 line-through">{formatPrice(bullpupInflatedPrice)}</p>
                    <p className="text-sm text-green-500 font-medium">10% de descuento</p>
                  </div>
                  <Button asChild className="w-full bg-gold hover:bg-gold/90 text-black font-cinzel py-6 rounded-none">
                    <Link href="/rifles/rifle-murrieta-bullpup" className="flex items-center justify-center gap-2">
                      VER DETALLES <ArrowRight className="h-4 w-4" aria-hidden="true" />
                    </Link>
                  </Button>
                </div>
              </div>
            </div>

            <div className="text-center">
              <Button
                asChild
                variant="outline"
                size="lg"
                className="font-cinzel text-gold border-gold hover:bg-gold/10 hover:text-gold py-6 px-8 rounded-none bg-transparent"
              >
                <Link href="/rifles">VER TODOS LOS RIFLES</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* 4. Ofertas Banner - Incentivo de compra */}
        <section className="py-12 bg-zinc-900 border-b border-gold/20" aria-labelledby="ofertas-heading">
          <div className="container mx-auto px-4">
            <div className="relative overflow-hidden rounded-lg border border-gold/30">
              <div className="bg-black">
                <div className="relative h-[300px] sm:h-[400px]">
                  <Image
                    src="/images/promobanner.jpg"
                    alt="Rifle J. Murrieta PCP en oferta"
                    fill
                    className="object-cover object-center opacity-80"
                    priority
                  />
                  <div className="absolute inset-0 flex items-center">
                    <div className="container mx-auto px-4 md:px-8">
                      <div className="max-w-xl">
                        <Badge variant="premium" className="mb-4">
                          Oferta Especial
                        </Badge>
                        <h2 id="ofertas-heading" className="text-3xl md:text-4xl font-bold text-white mb-4">
                          10% OFF en todos los <span className="text-gold">Rifles PCP</span>
                        </h2>
                        <p className="text-white/80 mb-6">
                          Por tiempo limitado, aprovecha esta oportunidad única para adquirir nuestros rifles de alta
                          precisión con un descuento exclusivo.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4">
                          <Button asChild className="bg-gold hover:bg-gold/90 text-black">
                            <Link href="/rifles">VER RIFLES</Link>
                          </Button>
                          <div className="flex items-center text-white/80 gap-2">
                            <Clock className="h-5 w-5 text-gold" aria-hidden="true" />
                            <span>Válido hasta el 30 de Mayo, 2025</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 5. Featured Products Section - Accesorios (productos complementarios) */}
        <section className="py-16 bg-black" aria-labelledby="accesorios-heading">
          <div className="container mx-auto px-4">
            <h2 id="accesorios-heading" className="text-4xl font-bold text-center text-white mb-4">
              Accesorios <span className="text-gold">Destacados</span>
            </h2>
            <div className="w-24 h-0.5 bg-gold mx-auto mb-12"></div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              {/* Mira Telescópica */}
              <div className="bg-zinc-900/50 border border-gold/10 hover:border-gold/30 transition-all duration-300 overflow-hidden">
                <div className="relative aspect-square md:aspect-[4/3]">
                  <Image
                    src="/images/accesorios/mira-telescopica.jpeg"
                    alt="Mira Telescópica"
                    fill
                    className="object-cover transition-transform duration-500 hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 50vw"
                    priority
                  />
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-white mb-2">
                    Mira <span className="text-gold">Telescópica</span>
                  </h3>
                  <p className="text-white/70 mb-4">
                    Mira telescópica 3-9 X 40 de alta precisión para mejorar la puntería a larga distancia
                  </p>
                  <p className="text-2xl font-bold text-gold mb-6">$85.000</p>
                  <Button asChild className="w-full bg-gold hover:bg-gold/90 text-black font-cinzel py-6 rounded-none">
                    <Link href="/accesorios/mira-telescopica" className="flex items-center justify-center gap-2">
                      VER DETALLES <ArrowRight className="h-4 w-4" aria-hidden="true" />
                    </Link>
                  </Button>
                </div>
              </div>

              {/* Funda de Cuero */}
              <div className="bg-zinc-900/50 border border-gold/10 hover:border-gold/30 transition-all duration-300 overflow-hidden">
                <div className="relative aspect-square md:aspect-[4/3]">
                  <Image
                    src="/images/accesorios/funda-cuero.jpeg"
                    alt="Funda de Cuero Engrasado"
                    fill
                    className="object-cover transition-transform duration-500 hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 50vw"
                    priority
                  />
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-white mb-2">
                    Funda de <span className="text-gold">Cuero</span>
                  </h3>
                  <p className="text-white/70 mb-4">Funda premium de cuero engrasado con logo J. Murrieta</p>
                  <p className="text-2xl font-bold text-gold mb-6">$220.000</p>
                  <Button asChild className="w-full bg-gold hover:bg-gold/90 text-black font-cinzel py-6 rounded-none">
                    <Link href="/accesorios/funda-cuero" className="flex items-center justify-center gap-2">
                      VER DETALLES <ArrowRight className="h-4 w-4" aria-hidden="true" />
                    </Link>
                  </Button>
                </div>
              </div>
            </div>

            <div className="text-center">
              <Button
                asChild
                variant="outline"
                size="lg"
                className="font-cinzel text-gold border-gold hover:bg-gold/10 hover:text-gold py-6 px-8 rounded-none bg-transparent"
              >
                <Link href="/accesorios">VER TODOS LOS ACCESORIOS</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* 6. About Section - Información sobre la marca */}
        <AboutSection />

        {/* 7. Featured Blog Posts - Contenido de valor */}
        <section className="py-16 bg-black" aria-labelledby="blog-heading">
          <div className="container mx-auto px-4">
            <h2 id="blog-heading" className="text-4xl font-bold text-center text-white mb-4">
              Últimos <span className="text-gold">Artículos</span>
            </h2>
            <div className="w-24 h-0.5 bg-gold mx-auto mb-12"></div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              {featuredBlogs.map((blog) => (
                <article
                  key={blog.id}
                  className="bg-zinc-900/50 border border-gold/10 hover:border-gold/30 transition-all duration-300 overflow-hidden"
                >
                  <Link href={`/blog/${blog.slug}`} className="block relative aspect-[16/9] overflow-hidden">
                    <Image
                      src={blog.image || "/placeholder.svg?height=600&width=800"}
                      alt={blog.title}
                      fill
                      className="object-cover transition-transform duration-500 hover:scale-105"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      priority
                    />
                  </Link>
                  <div className="p-6">
                    <time dateTime={blog.date} className="text-sm text-white/60 mb-2 block">
                      {blog.date}
                    </time>
                    <h3 className="text-xl font-bold text-white mb-3 line-clamp-2">
                      <Link href={`/blog/${blog.slug}`} className="hover:text-gold transition-colors">
                        {blog.title}
                      </Link>
                    </h3>
                    <p className="text-white/70 mb-4 line-clamp-3">{blog.excerpt}</p>
                    <Button
                      asChild
                      variant="outline"
                      className="w-full border-gold/30 text-gold hover:bg-gold/10 hover:text-gold bg-transparent"
                    >
                      <Link href={`/blog/${blog.slug}`} className="flex items-center justify-center gap-2">
                        LEER MÁS <ArrowRight className="h-4 w-4" aria-hidden="true" />
                      </Link>
                    </Button>
                  </div>
                </article>
              ))}
            </div>

            <div className="text-center">
              <Button
                asChild
                variant="outline"
                size="lg"
                className="font-cinzel text-gold border-gold hover:bg-gold/10 hover:text-gold py-6 px-8 rounded-none bg-transparent"
              >
                <Link href="/blog">VER TODOS LOS ARTÍCULOS</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* 8. Reviews Section - Testimonios para generar confianza */}
        <ReviewsSection reviews={reviews} />

        {/* 9. FAQ Section - Resolver dudas */}
        <section className="py-16 bg-zinc-900" aria-labelledby="faq-heading">
          <div className="container mx-auto px-4">
            <h2 id="faq-heading" className="text-4xl font-bold text-center text-white mb-4">
              Preguntas <span className="text-gold">Frecuentes</span>
            </h2>
            <div className="w-24 h-0.5 bg-gold mx-auto mb-12"></div>

            <div className="max-w-3xl mx-auto bg-black border border-gold/20 rounded-lg p-6 md:p-8 mb-12">
              <Accordion type="single" collapsible className="w-full">
                {featuredFaqs.map((faq, index) => (
                  <AccordionItem key={index} value={`faq-${index}`} className="border-gold/20">
                    <AccordionTrigger className="text-white hover:text-gold">{faq.question}</AccordionTrigger>
                    <AccordionContent className="text-white/70">{faq.answer}</AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>

            <div className="text-center">
              <Button
                asChild
                variant="outline"
                size="lg"
                className="font-cinzel text-gold border-gold hover:bg-gold/10 hover:text-gold py-6 px-8 rounded-none bg-transparent"
              >
                <Link href="/faq">VER TODAS LAS PREGUNTAS</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* 10. CTA Section - Llamada a la acción final */}
        <section
          className="py-16 bg-gradient-to-r from-black to-zinc-900 border-y border-gold/20"
          aria-labelledby="cta-heading"
        >
          <div className="container mx-auto px-4">
            <h2 id="cta-heading" className="text-3xl font-bold text-center text-white mb-4">
              ¿Listo para experimentar la <span className="text-gold">precisión legendaria</span>?
            </h2>
            <div className="w-24 h-0.5 bg-gold mx-auto mb-8"></div>
            <p className="text-white/80 max-w-3xl mx-auto mb-8 text-center">
              Contáctanos hoy mismo para obtener más información sobre nuestros productos o para realizar tu pedido.
            </p>
            <div className="flex justify-center">
              <Button
                asChild
                size="lg"
                className="bg-gold hover:bg-gold/90 text-black font-cinzel py-6 px-8 rounded-none"
              >
                <Link href="/contacto">CONTACTAR AHORA</Link>
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
