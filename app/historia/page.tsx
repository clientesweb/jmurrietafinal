import { HeaderAnnouncement } from "@/components/header-announcement"
import { HeaderMenu } from "@/components/header-menu"
import { Footer } from "@/components/footer"
import { ChatBubbles } from "@/components/chat-bubbles"
import { PageBanner } from "@/components/page-banner"
import Image from "next/image"

// Añadir metadatos específicos para la página de historia
export const metadata = {
  title: "Historia | J. Murrieta PCP",
  description:
    "Conoce la historia de J. Murrieta, fabricante argentino de rifles PCP de precisión. Tradición, innovación y excelencia desde nuestros inicios.",
  openGraph: {
    title: "Historia | J. Murrieta PCP",
    description:
      "Conoce la historia de J. Murrieta, fabricante argentino de rifles PCP de precisión. Tradición, innovación y excelencia desde nuestros inicios.",
  },
}

export default function HistoriaPage() {
  return (
    <>
      <HeaderAnnouncement />
      <HeaderMenu />

      <main>
        <PageBanner
          title="Nuestra"
          subtitle="Historia"
          description="Descubre la tradición y pasión detrás de J. Murrieta, donde cada rifle cuenta una historia de excelencia y artesanía."
          imageSrc="/images/banner-rifle-workshop.jpeg"
          imageAlt="Taller J. Murrieta"
        />

        <section className="py-16 bg-gradient-to-b from-black to-zinc-900">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-white mb-6">
                  Desde <span className="text-gold">2021</span>
                </h2>
                <p className="text-white/80 mb-4">
                  J. Murrieta nació en el año 2021 con el objetivo de revolucionar el diseño y rendimiento de los rifles
                  de aire comprimido. A lo largo de su trayectoria, ha demostrado que la calidad y la robustez pueden
                  coexistir con la estética y la funcionalidad.
                </p>
                <p className="text-white/80">
                  Su filosofía se centra en ofrecer productos que no solo sean herramientas de precisión, sino también
                  piezas únicas que reflejen dedicación y perfección. Cada rifle que fabricamos es el resultado de horas
                  de meticuloso trabajo, atención al detalle y un compromiso inquebrantable con la excelencia.
                </p>
              </div>
              <div className="relative h-[400px] rounded-lg overflow-hidden">
                <Image
                  src="/images/banner-rifle-testing.jpeg"
                  alt="Historia de J. Murrieta"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Nueva sección de Mecanizados Propios */}
        <section className="py-16 bg-black">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center text-white mb-4">
              Mecanizados <span className="text-gold">Propios</span>
            </h2>
            <p className="text-white/80 text-center max-w-3xl mx-auto mb-12">
              En J. Murrieta, nos enorgullecemos de realizar todos nuestros mecanizados de forma interna. Esto nos
              permite mantener un control total sobre la calidad y precisión de cada componente que forma parte de
              nuestros rifles.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              <div className="bg-zinc-900 rounded-lg overflow-hidden border border-gold/20 hover:border-gold transition-all duration-300">
                <div className="relative h-64">
                  <Image src="/images/mecanizados1.jpeg" alt="Manómetros J. Murrieta" fill className="object-cover" />
                </div>
                <div className="p-4">
                  <h3 className="text-xl font-bold text-gold mb-2">Manómetros de Precisión</h3>
                  <p className="text-white/80">
                    Fabricamos nuestros propios manómetros con la marca J. Murrieta, garantizando lecturas precisas de
                    presión para un rendimiento óptimo.
                  </p>
                </div>
              </div>

              <div className="bg-zinc-900 rounded-lg overflow-hidden border border-gold/20 hover:border-gold transition-all duration-300">
                <div className="relative h-64">
                  <Image
                    src="/images/mecanizados2.jpeg"
                    alt="Válvulas y reguladores J. Murrieta"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-xl font-bold text-gold mb-2">Válvulas y Reguladores</h3>
                  <p className="text-white/80">
                    Cada válvula y regulador es mecanizado con precisión milimétrica para asegurar un flujo de aire
                    constante y controlado.
                  </p>
                </div>
              </div>

              <div className="bg-zinc-900 rounded-lg overflow-hidden border border-gold/20 hover:border-gold transition-all duration-300">
                <div className="relative h-64">
                  <Image
                    src="/images/mecanizados3.jpeg"
                    alt="Cañones mecanizados J. Murrieta"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-xl font-bold text-gold mb-2">Cañones de Alta Precisión</h3>
                  <p className="text-white/80">
                    Nuestros cañones son mecanizados con tecnología de punta para garantizar trayectorias perfectas y
                    agrupaciones excepcionales.
                  </p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-zinc-900 rounded-lg overflow-hidden border border-gold/20 hover:border-gold transition-all duration-300">
                <div className="relative h-64">
                  <Image
                    src="/images/mecanizados4.jpeg"
                    alt="Materia prima J. Murrieta"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-xl font-bold text-gold mb-2">Selección de Materiales</h3>
                  <p className="text-white/80">
                    Utilizamos solo los mejores materiales, seleccionados cuidadosamente para asegurar durabilidad y
                    resistencia en cada componente.
                  </p>
                </div>
              </div>

              <div className="bg-zinc-900 rounded-lg overflow-hidden border border-gold/20 hover:border-gold transition-all duration-300">
                <div className="relative h-64">
                  <Image
                    src="/images/mecanizados5.jpeg"
                    alt="Maquinaria de precisión J. Murrieta"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-xl font-bold text-gold mb-2">Tecnología de Vanguardia</h3>
                  <p className="text-white/80">
                    Contamos con maquinaria especializada que nos permite realizar mecanizados de alta precisión para
                    cada componente de nuestros rifles.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-12 text-center">
              <p className="text-white/80 max-w-3xl mx-auto">
                Nuestro proceso de fabricación interno nos permite mantener estándares de calidad excepcionales y
                ofrecer productos que superan las expectativas de los tiradores más exigentes.
              </p>
            </div>
          </div>
        </section>

        <section className="py-16 bg-zinc-900">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center text-white mb-12">
              Nuestros <span className="text-gold">Diferenciadores</span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-black/50 p-8 border border-gold/20 hover:border-gold transition-colors duration-300">
                <h3 className="text-xl font-bold text-gold mb-4">Materiales de Alta Calidad y Robustez</h3>
                <p className="text-white/80">
                  Cada rifle de J.Murrieta es fabricado con materiales meticulosamente seleccionados, lo que garantiza
                  una durabilidad superior. Su diseño robusto ofrece resistencia en diversas condiciones de uso,
                  destacando entre los productos de la competencia.
                </p>
              </div>

              <div className="bg-black/50 p-8 border border-gold/20 hover:border-gold transition-colors duration-300">
                <h3 className="text-xl font-bold text-gold mb-4">Rendimiento y Precisión en el Tiro</h3>
                <p className="text-white/80">
                  Los rifles están diseñados para maximizar la precisión, la autonomía y la potencia de disparo. Esto
                  los convierte en una herramienta ideal tanto para tiradores recreativos como para profesionales,
                  superando estándares habituales.
                </p>
              </div>

              <div className="bg-black/50 p-8 border border-gold/20 hover:border-gold transition-colors duration-300">
                <h3 className="text-xl font-bold text-gold mb-4">Estética y Diseño Artesanal</h3>
                <p className="text-white/80">
                  Además de su funcionalidad técnica, los productos J. Murrieta cuentan con diseños cuidados y un toque
                  artesanal. Este enfoque único en la estética hace que cada rifle tenga una personalidad distintiva,
                  reflejando un balance entre innovación y tradición.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-black">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-white mb-6">
              Nuestro <span className="text-gold">Compromiso</span>
            </h2>
            <p className="text-white/80 max-w-3xl mx-auto mb-8">
              En J. Murrieta, nos comprometemos a ofrecer productos de la más alta calidad que superen las expectativas
              de nuestros clientes. Cada rifle que fabricamos es sometido a rigurosas pruebas para garantizar su
              rendimiento y durabilidad.
            </p>
            <div className="w-24 h-0.5 bg-gold mx-auto"></div>
          </div>
        </section>
      </main>

      <Footer />
      <ChatBubbles />
    </>
  )
}
