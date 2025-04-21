import { HeaderAnnouncement } from "@/components/header-announcement"
import { HeaderMenu } from "@/components/header-menu"
import { Footer } from "@/components/footer"
import { ChatBubbles } from "@/components/chat-bubbles"
import { PageBanner } from "@/components/page-banner"

export const metadata = {
  title: "Política de Devoluciones | J. Murrieta PCP",
  description: "Conoce nuestra política de devoluciones y garantía para productos J. Murrieta PCP.",
}

export default function PoliticaDevolucionesPage() {
  return (
    <>
      <HeaderAnnouncement />
      <HeaderMenu />

      <main>
        <PageBanner
          title="Política de Devoluciones"
          description="Información sobre devoluciones y garantía"
          imageSrc="/images/banner-rifle-workshop.jpeg"
          imageAlt="Rifle J. Murrieta - Política de Devoluciones"
        />

        <section className="py-12 bg-zinc-900">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto bg-black border border-gold/20 rounded-lg p-8">
              <div className="prose prose-invert max-w-none">
                <h2 className="text-2xl font-bold text-gold mb-6">Política de Devoluciones y Garantía</h2>

                <h3 className="text-xl font-semibold text-white mt-8 mb-4">1. Garantía de Productos</h3>
                <p className="text-white/80 mb-4">
                  Todos los rifles J. Murrieta PCP cuentan con una garantía de 2 años contra defectos de fabricación.
                  Los accesorios tienen una garantía de 6 meses. Esta garantía cubre defectos en materiales y mano de
                  obra bajo uso normal y adecuado del producto.
                </p>

                <h3 className="text-xl font-semibold text-white mt-8 mb-4">2. ¿Qué cubre la garantía?</h3>
                <p className="text-white/80 mb-4">La garantía cubre:</p>
                <ul className="list-disc pl-6 text-white/80 mb-6 space-y-2">
                  <li>Defectos de fabricación</li>
                  <li>Fallas en componentes internos</li>
                  <li>Problemas de funcionamiento no causados por mal uso</li>
                </ul>

                <h3 className="text-xl font-semibold text-white mt-8 mb-4">3. ¿Qué no cubre la garantía?</h3>
                <p className="text-white/80 mb-4">La garantía no cubre:</p>
                <ul className="list-disc pl-6 text-white/80 mb-6 space-y-2">
                  <li>Daños causados por mal uso o abuso del producto</li>
                  <li>Desgaste normal de piezas (sellos, o-rings, etc.)</li>
                  <li>Modificaciones o reparaciones realizadas por personal no autorizado</li>
                  <li>Daños causados por accidentes o caídas</li>
                  <li>Uso de munición inadecuada</li>
                </ul>

                <h3 className="text-xl font-semibold text-white mt-8 mb-4">4. Proceso de Devolución</h3>
                <p className="text-white/80 mb-4">Si deseas realizar una devolución, debes seguir estos pasos:</p>
                <ol className="list-decimal pl-6 text-white/80 mb-6 space-y-2">
                  <li>
                    Contacta con nuestro servicio de atención al cliente dentro de los 14 días posteriores a la
                    recepción del producto.
                  </li>
                  <li>Describe detalladamente el motivo de la devolución.</li>
                  <li>Nuestro equipo te proporcionará un número de autorización de devolución (RMA).</li>
                  <li>Envía el producto en su embalaje original con todos los accesorios incluidos.</li>
                  <li>Adjunta el número RMA visible en el exterior del paquete.</li>
                </ol>

                <h3 className="text-xl font-semibold text-white mt-8 mb-4">5. Reembolsos</h3>
                <p className="text-white/80 mb-4">
                  Una vez recibido y verificado el producto devuelto, procesaremos el reembolso de la siguiente manera:
                </p>
                <ul className="list-disc pl-6 text-white/80 mb-6 space-y-2">
                  <li>Si el producto presenta defectos: reembolso completo incluyendo gastos de envío.</li>
                  <li>
                    Si la devolución es por cambio de opinión: reembolso del valor del producto, excluyendo gastos de
                    envío.
                  </li>
                  <li>El reembolso se realizará utilizando el mismo método de pago utilizado en la compra original.</li>
                  <li>El proceso de reembolso puede demorar entre 7 y 14 días hábiles.</li>
                </ul>

                <h3 className="text-xl font-semibold text-white mt-8 mb-4">6. Reparaciones</h3>
                <p className="text-white/80 mb-4">Para solicitar una reparación en garantía, debes:</p>
                <ol className="list-decimal pl-6 text-white/80 mb-6 space-y-2">
                  <li>Contactar con nuestro servicio técnico.</li>
                  <li>Describir detalladamente el problema.</li>
                  <li>Enviar el producto según las instrucciones que te proporcionemos.</li>
                  <li>
                    Las reparaciones en garantía no tienen costo. Para reparaciones fuera de garantía, se proporcionará
                    un presupuesto previo.
                  </li>
                </ol>

                <h3 className="text-xl font-semibold text-white mt-8 mb-4">7. Contacto</h3>
                <p className="text-white/80 mb-4">
                  Para cualquier consulta relacionada con devoluciones o garantía, contáctanos a través de nuestro
                  correo electrónico{" "}
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
