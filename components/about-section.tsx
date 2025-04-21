import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function AboutSection() {
  return (
    <section className="py-16 bg-zinc-900">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <h2 className="text-4xl font-bold text-white mb-4">
              Sobre <span className="text-gold">J. Murrieta</span>
            </h2>
            <div className="w-24 h-0.5 bg-gold mb-8"></div>

            <p className="text-white/80 mb-6 text-lg">
              En J. Murrieta, cada rifle es sometido a rigurosos procesos de fabricación, utilizando maquinaria CNC en
              sus mecanizados y CZ para la creación de los Cañones Estriados, garantizando una precisión y rendimiento
              excepcionales.
            </p>

            <p className="text-white/80 mb-8 text-lg">
              Nuestro compromiso con la calidad se refleja en cada componente, desde la selección de materiales premium
              hasta el acabado final, asegurando que cada rifle no solo sea una herramienta de precisión, sino también
              una obra de arte.
            </p>

            <Button
              asChild
              variant="outline"
              size="lg"
              className="font-cinzel text-gold border-gold hover:bg-gold/10 hover:text-gold py-6 px-8 rounded-none"
            >
              <Link href="/historia" className="flex items-center gap-2">
                CONOCER MÁS <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>

          <div className="order-1 lg:order-2 relative">
            <div className="relative aspect-[4/3] overflow-hidden border border-gold/20">
              <Image
                src="/images/murrieta002.jpg"
                alt="Rifle J. Murrieta en acción"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <div className="absolute -bottom-4 -left-4 w-24 h-24 border-l-2 border-b-2 border-gold"></div>
            <div className="absolute -top-4 -right-4 w-24 h-24 border-t-2 border-r-2 border-gold"></div>
          </div>
        </div>
      </div>
    </section>
  )
}
