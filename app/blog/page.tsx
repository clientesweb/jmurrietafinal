import { HeaderAnnouncement } from "@/components/header-announcement"
import { HeaderMenu } from "@/components/header-menu"
import { Footer } from "@/components/footer"
import { ChatBubbles } from "@/components/chat-bubbles"
import { PageBanner } from "@/components/page-banner"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

// Añadir metadatos específicos para la página de blog
export const metadata = {
  title: "Blog | Artículos sobre Rifles PCP",
  description:
    "Artículos, guías y noticias sobre rifles PCP, técnicas de tiro, mantenimiento y novedades del sector. Aprende de expertos en armas de aire comprimido.",
  openGraph: {
    title: "Blog | Artículos sobre Rifles PCP",
    description:
      "Artículos, guías y noticias sobre rifles PCP, técnicas de tiro, mantenimiento y novedades del sector. Aprende de expertos en armas de aire comprimido.",
  },
}

// Datos de ejemplo para los artículos del blog
const blogPosts = [
  {
    id: 1,
    title: "Guía completa para el mantenimiento de tu rifle PCP",
    excerpt:
      "Descubre los mejores consejos y técnicas para mantener tu rifle PCP en óptimas condiciones y prolongar su vida útil.",
    date: "15 de Abril, 2025",
    author: "Juan Murrieta",
    category: "Mantenimiento",
    image: "/images/blog/j1-cargando.jpeg",
    slug: "guia-mantenimiento-rifle-pcp",
  },
  {
    id: 2,
    title: "Cómo elegir el calibre adecuado para tu rifle",
    excerpt:
      "Analizamos las ventajas y desventajas de cada calibre para ayudarte a tomar la mejor decisión según tus necesidades.",
    date: "28 de Marzo, 2025",
    author: "Carlos Rodríguez",
    category: "Consejos",
    image: "/images/blog/j1-presentacion.jpeg",
    slug: "como-elegir-calibre-adecuado",
  },
  {
    id: 3,
    title: "El proceso de fabricación de nuestros rifles PCP",
    excerpt:
      "Conoce el meticuloso proceso artesanal detrás de cada rifle J. Murrieta y los estándares de calidad que aplicamos.",
    date: "10 de Febrero, 2025",
    author: "Juan Murrieta",
    category: "Fabricación",
    image: "/images/blog/rifles-produccion.jpeg",
    slug: "proceso-fabricacion-rifles-pcp",
  },
  {
    id: 4,
    title: "Comparativa: Modelo J1 vs Bullpup - ¿Cuál elegir?",
    excerpt:
      "Analizamos las diferencias, ventajas y características específicas de nuestros dos modelos principales para ayudarte a elegir.",
    date: "5 de Marzo, 2025",
    author: "Carlos Rodríguez",
    category: "Comparativas",
    image: "/images/blog/rifles-argentina.jpeg",
    slug: "comparativa-modelos-j1-bullpup",
  },
  {
    id: 5,
    title: "Técnicas avanzadas de tiro para mejorar tu puntería",
    excerpt:
      "Aprende técnicas profesionales de respiración, postura y concentración para llevar tu puntería al siguiente nivel.",
    date: "5 de Febrero, 2023",
    author: "Carlos Rodríguez",
    category: "Técnicas",
    image: "/images/blog/rifles-poligono.jpeg",
    slug: "tecnicas-avanzadas-tiro",
  },
  {
    id: 6,
    title: "Los mejores accesorios para mejorar la precisión",
    excerpt:
      "Conoce los accesorios indispensables que todo tirador debe tener para mejorar significativamente la precisión de sus disparos.",
    date: "10 de Marzo, 2025",
    author: "Juan Murrieta",
    category: "Accesorios",
    image: "/images/blog/rifle-scope-detail.jpeg",
    slug: "mejores-accesorios-precision",
  },
]

// Categorías para filtrar
const categories = [
  "Todas",
  "Mantenimiento",
  "Consejos",
  "Accesorios",
  "Historia",
  "Técnicas",
  "Comparativas",
  "Fabricación",
]

export default function BlogPage() {
  return (
    <>
      <HeaderAnnouncement />
      <HeaderMenu />

      <main>
        <PageBanner
          title="Blog"
          subtitle="J. Murrieta"
          description="Descubre artículos, consejos y novedades sobre rifles PCP, técnicas de tiro y mantenimiento de equipos."
          imageSrc="/images/banner-rifle-loading.jpeg"
          imageAlt="Rifle J. Murrieta - Blog"
        />

        <section className="py-8 md:py-12 bg-zinc-900">
          <div className="container mx-auto px-4">
            {/* Categorías */}
            <div className="flex flex-wrap justify-center gap-2 mb-8 md:mb-12 overflow-x-auto pb-2 md:pb-0">
              {categories.map((category, index) => (
                <Button
                  key={index}
                  variant={index === 0 ? "default" : "outline"}
                  className={
                    index === 0
                      ? "bg-gold hover:bg-gold/90 text-black font-cinzel rounded-none text-xs md:text-sm whitespace-nowrap"
                      : "text-gold border-gold/30 hover:border-gold hover:bg-gold/10 hover:text-gold rounded-none text-xs md:text-sm whitespace-nowrap"
                  }
                >
                  {category}
                </Button>
              ))}
            </div>

            {/* Artículos del blog */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
              {blogPosts.map((post) => (
                <article
                  key={post.id}
                  className="bg-black border border-gold/10 hover:border-gold/30 transition-all duration-300"
                >
                  <Link href={`/blog/${post.slug}`} className="block relative aspect-[16/9] overflow-hidden">
                    <Image
                      src={post.image || "/placeholder.svg"}
                      alt={post.title}
                      fill
                      className="object-cover transition-transform duration-500 hover:scale-105"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                    <div className="absolute top-3 left-3 bg-gold px-2 py-1 text-black text-xs font-bold">
                      {post.category}
                    </div>
                  </Link>
                  <div className="p-4 md:p-6">
                    <div className="flex items-center gap-2 text-xs text-white/60 mb-2">
                      <span>{post.date}</span>
                      <span>•</span>
                      <span>{post.author}</span>
                    </div>
                    <h2 className="text-lg md:text-xl font-bold text-white mb-2 line-clamp-2">
                      <Link href={`/blog/${post.slug}`} className="hover:text-gold transition-colors">
                        {post.title}
                      </Link>
                    </h2>
                    <p className="text-white/70 mb-4 text-sm md:text-base line-clamp-3">{post.excerpt}</p>
                    <Button
                      asChild
                      variant="outline"
                      className="text-gold border-gold/30 hover:border-gold hover:bg-gold/10 hover:text-gold rounded-none w-full text-xs md:text-sm"
                    >
                      <Link href={`/blog/${post.slug}`} className="flex items-center justify-center gap-2">
                        LEER MÁS <ArrowRight className="h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </article>
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
