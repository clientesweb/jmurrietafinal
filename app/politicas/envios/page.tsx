import { HeaderAnnouncement } from "@/components/header-announcement"
import { HeaderMenu } from "@/components/header-menu"
import { Footer } from "@/components/footer"
import { ChatBubbles } from "@/components/chat-bubbles"
import { PageBanner } from "@/components/page-banner"

export const metadata = {
  title: "Política de Envíos | J. Murrieta PCP",
  description: "Conoce nuestra política de envíos para la compra de rifles y accesorios PCP.",
}

export default function PoliticaEnviosPage() {
  return (
    <>
      <HeaderAnnouncement />
      <HeaderMenu />

      <main>
        <PageBanner
          title="Política de Envíos"
          description="Información sobre nuestros envíos y entregas"
          imageSrc="/images/banner-rifle-case.jpeg"
          imageAlt="Rifle J. Murrieta - Política de Envíos"
        />

        <section className="py-12 bg-zinc-900">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto bg-black border border-gold/20 rounded-lg p-8">
              <div className="prose prose-invert max-w-none">
                <h2 className="text-2xl font-bold text-gold mb-6">Política de Envíos</h2>

                <h3 className="text-xl font-semibold text-white mt-8 mb-4">1. Cobertura de Envíos</h3>
                <p className="text-white/80 mb-4">
                  En J. Murrieta PCP realizamos envíos a todo el territorio argentino. Trabajamos con empresas de
                  logística confiables para garantizar que tu producto llegue en perfectas condiciones.
                </p>

                <h3 className="text-xl font-semibold text-white mt-8 mb-4">2. Empresas de Transporte</h3>
                <p className="text-white/80 mb-4">Actualmente trabajamos con las siguientes empresas de transporte:</p>
                <ul className="list-disc pl-6 text-white/80 mb-6 space-y-2">
                  <li>Andreani</li>
                  <li>Correo Argentino</li>
                </ul>

                <h3 className="text-xl font-semibold text-white mt-8 mb-4">3. Tiempos de Entrega</h3>
                <p className="text-white/80 mb-4">Los tiempos de entrega varían según la ubicación geográfica:</p>
                <ul className="list-disc pl-6 text-white/80 mb-6 space-y-2">
                  <li>Zona Centro (Córdoba, Santa Fe, Buenos Aires): 2-3 días hábiles</li>
                  <li>Resto del país: 3-7 días hábiles</li>
                </ul>

                <h3 className="text-xl font-semibold text-white mt-8 mb-4">4. Costos de Envío</h3>
                <p className="text-white/80 mb-4">
                  El costo de envío se calcula automáticamente en función del destino y el peso del paquete. Este valor
                  se mostrará durante el proceso de compra antes de finalizar el pedido.
                </p>

                <h3 className="text-xl font-semibold text-white mt-8 mb-4">5. Seguimiento de Pedidos</h3>
                <p className="text-white/80 mb-4">
                  Una vez que tu pedido sea despachado, recibirás por correo electrónico un número de seguimiento que te
                  permitirá rastrear tu paquete en tiempo real a través del sitio web de la empresa de transporte
                  correspondiente.
                </p>

                <h3 className="text-xl font-semibold text-white mt-8 mb-4">6. Recepción del Pedido</h3>
                <p className="text-white/80 mb-4">
                  Al recibir tu pedido, te recomendamos verificar que el embalaje esté en buenas condiciones. En caso de
                  observar daños externos evidentes, te sugerimos hacer la observación correspondiente al transportista
                  y comunicarte inmediatamente con nuestro servicio de atención al cliente.
                </p>

                <h3 className="text-xl font-semibold text-white mt-8 mb-4">7. Retiro en Tienda</h3>
                <p className="text-white/80 mb-4">
                  También ofrecemos la opción de retiro en nuestra tienda ubicada en La Sierrita 191, Villa del Dique,
                  Córdoba. Esta opción no tiene costo adicional y estará disponible para seleccionar durante el proceso
                  de compra.
                </p>

                <h3 className="text-xl font-semibold text-white mt-8 mb-4">8. Contacto</h3>
                <p className="text-white/80 mb-4">
                  Para cualquier consulta relacionada con el envío de tu pedido, no dudes en contactarnos a través de
                  nuestro correo electrónico{" "}
                  <a href="mailto:Jmurrietapcp@gmail.com" className="text-gold hover:underline">
                    Jmurrietapcp@gmail.com
                  </a>{" "}
                  o por teléfono al{" "}
                  <a href="tel:+5493515371671" className="text-gold hover:underline">
                    +54 9 351 537 1671
                  </a>
                  .
                </p>

                <p className="text-white/60 mt-8 text-sm">Última actualización: Abril 2025</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <ChatBubbles />
    </>
  )
}
