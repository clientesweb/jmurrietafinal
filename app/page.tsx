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
import { Button } from "@/components/ui/button"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import SchemaOrg from "@/components/schema-org"
import { BlockProductsFeed } from "@/components/block-products-feed"
import { BlockCarousel } from "@/components/block-carousel"

// Mejorar los metadatos específicos para la página de inicio
export const metadata = {
  title: "J. Murrieta | Rifles PCP de Precisión",
  description:
    "Descubre la excelencia en rifles de aire comprimido PCP, donde la innovación tecnológica se une con la tradición artesanal argentina. Rifles de alta precisión fabricados con los más altos estándares de calidad.",
  alternates: {
    canonical: "https://jmurrietapcp.com",
  },
}

export default function HomePage() {
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

  // Datos para Schema.org
  const faqSchemaData = featuredFaqs.map((faq) => ({
    question: faq.question,
    answer: faq.answer,
  }))

  const featuredProducts = [
    {
      id: "rifle-murrieta-j1",
      name: "Rifle Murrieta J1",
      description: "Rifle PCP de alta precisión con tecnología avanzada",
      price: 632500,
      originalPrice: 695750,
      image: "/images/rifle-j1-main.jpeg",
      slug: "rifle-murrieta-j1",
      category: "rifles",
      badge: "Más Vendido",
    },
    {
      id: "rifle-murrieta-bullpup",
      name: "Rifle Murrieta Bullpup",
      description: "Diseño compacto bullpup para máxima maniobrabilidad",
      price: 709500,
      originalPrice: 780450,
      image: "/images/rifle-bullpup-main.jpeg",
      slug: "rifle-murrieta-bullpup",
      category: "rifles",
      badge: "Nuevo",
    },
  ]

  const carouselImages = [
    {
      src: "/images/carousel-1.jpeg",
      alt: "Rifle J. Murrieta en acción",
      title: "Precisión Excepcional",
      description: "Rifles PCP diseñados para el tiro deportivo y la caza",
    },
    {
      src: "/images/carousel-2.jpeg",
      alt: "Detalles de construcción",
      title: "Calidad Artesanal",
      description: "Cada rifle es fabricado con los más altos estándares",
    },
    {
      src: "/images/carousel-3.jpeg",
      alt: "Accesorios disponibles",
      title: "Accesorios Premium",
      description: "Complementa tu rifle con nuestra línea de accesorios",
    },
  ]

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

      <HeaderAnnouncement />
      <HeaderMenu />
      <CartDrawer />

      <main>
        {/* 1. Hero Section - Primera impresión */}
        <HeroSection />

        {/* 2. About Section - Información sobre la marca */}
        <AboutSection />

        {/* 3. Featured Products Section - Rifles (productos principales) */}
        <BlockProductsFeed products={featuredProducts} />

        {/* 4. Carousel Section - Imágenes destacadas */}
        <BlockCarousel images={carouselImages} />

        {/* 5. Purchase Info Section - Información de compra */}
        <BlockPurchaseInfo />

        {/* 6. Reviews Section - Testimonios para generar confianza */}
        <ReviewsSection reviews={reviews} />

        {/* 7. FAQ Section - Resolver dudas */}
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
      </main>

      <Footer />
      <ChatBubbles />
    </>
  )
}
