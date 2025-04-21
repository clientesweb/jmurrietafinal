import { HeaderAnnouncement } from "@/components/header-announcement"
import { HeaderMenu } from "@/components/header-menu"
import { Footer } from "@/components/footer"
import { ChatBubbles } from "@/components/chat-bubbles"
import { PageBanner } from "@/components/page-banner"

export const metadata = {
  title: "Términos y Condiciones | J. Murrieta PCP",
  description:
    "Conoce los términos y condiciones que rigen el uso de nuestro sitio web y la compra de productos J. Murrieta PCP.",
}

export default function TerminosCondicionesPage() {
  return (
    <>
      <HeaderAnnouncement />
      <HeaderMenu />

      <main>
        <PageBanner
          title="Términos y Condiciones"
          description="Condiciones generales de uso y compra"
          imageSrc="/images/banner-rifle-loading.jpeg"
          imageAlt="Rifle J. Murrieta - Términos y Condiciones"
        />

        <section className="py-12 bg-zinc-900">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto bg-black border border-gold/20 rounded-lg p-8">
              <div className="prose prose-invert max-w-none">
                <h2 className="text-2xl font-bold text-gold mb-6">Términos y Condiciones</h2>

                <p className="text-white/80 mb-6">
                  Bienvenido a J. Murrieta PCP. Al acceder y utilizar nuestro sitio web, así como al realizar compras de
                  nuestros productos, aceptas los siguientes términos y condiciones.
                </p>

                <h3 className="text-xl font-semibold text-white mt-8 mb-4">1. Uso del Sitio Web</h3>
                <p className="text-white/80 mb-4">Al utilizar nuestro sitio web, te comprometes a:</p>
                <ul className="list-disc pl-6 text-white/80 mb-6 space-y-2">
                  <li>No utilizar el sitio para fines ilegales o no autorizados.</li>
                  <li>No interferir con la seguridad o funcionamiento del sitio.</li>
                  <li>No recopilar información de otros usuarios sin su consentimiento.</li>
                  <li>No utilizar el contenido del sitio sin autorización previa.</li>
                </ul>

                <h3 className="text-xl font-semibold text-white mt-8 mb-4">2. Productos y Precios</h3>
                <p className="text-white/80 mb-4">
                  Nos esforzamos por proporcionar información precisa sobre nuestros productos y precios, sin embargo:
                </p>
                <ul className="list-disc pl-6 text-white/80 mb-6 space-y-2">
                  <li>Nos reservamos el derecho de modificar los precios sin previo aviso.</li>
                  <li>Las imágenes de los productos son ilustrativas y pueden variar ligeramente del producto real.</li>
                  <li>La disponibilidad de los productos está sujeta a cambios.</li>
                </ul>

                <h3 className="text-xl font-semibold text-white mt-8 mb-4">3. Proceso de Compra</h3>
                <p className="text-white/80 mb-4">Al realizar una compra en nuestro sitio:</p>
                <ul className="list-disc pl-6 text-white/80 mb-6 space-y-2">
                  <li>Debes proporcionar información precisa y completa.</li>
                  <li>Recibirás una confirmación de pedido por correo electrónico.</li>
                  <li>Nos reservamos el derecho de rechazar o cancelar cualquier pedido por motivos justificados.</li>
                  <li>
                    El contrato de compraventa se considera formalizado una vez que recibas la confirmación de pedido.
                  </li>
                </ul>

                <h3 className="text-xl font-semibold text-white mt-8 mb-4">4. Pagos</h3>
                <p className="text-white/80 mb-4">Aceptamos los siguientes métodos de pago:</p>
                <ul className="list-disc pl-6 text-white/80 mb-6 space-y-2">
                  <li>Transferencia bancaria</li>
                  <li>Tarjetas de crédito y débito</li>
                  <li>Efectivo (solo para retiro en tienda)</li>
                </ul>
                <p className="text-white/80 mb-4">
                  Todos los pagos se procesan de forma segura. No almacenamos información completa de tarjetas de
                  crédito en nuestros servidores.
                </p>

                <h3 className="text-xl font-semibold text-white mt-8 mb-4">5. Envíos y Entregas</h3>
                <p className="text-white/80 mb-4">
                  Para información detallada sobre envíos y entregas, consulta nuestra{" "}
                  <a href="/politicas/envios" className="text-gold hover:underline">
                    Política de Envíos
                  </a>
                  .
                </p>

                <h3 className="text-xl font-semibold text-white mt-8 mb-4">6. Devoluciones y Garantía</h3>
                <p className="text-white/80 mb-4">
                  Para información sobre devoluciones y garantía, consulta nuestra{" "}
                  <a href="/politicas/devoluciones" className="text-gold hover:underline">
                    Política de Devoluciones
                  </a>
                  .
                </p>

                <h3 className="text-xl font-semibold text-white mt-8 mb-4">7. Propiedad Intelectual</h3>
                <p className="text-white/80 mb-4">
                  Todo el contenido del sitio web (textos, imágenes, logotipos, diseños, etc.) es propiedad de J.
                  Murrieta PCP o de sus proveedores de contenido y está protegido por leyes de propiedad intelectual. No
                  está permitida la reproducción, distribución o modificación sin autorización previa.
                </p>

                <h3 className="text-xl font-semibold text-white mt-8 mb-4">8. Limitación de Responsabilidad</h3>
                <p className="text-white/80 mb-4">J. Murrieta PCP no será responsable por:</p>
                <ul className="list-disc pl-6 text-white/80 mb-6 space-y-2">
                  <li>
                    Daños indirectos, incidentales o consecuentes derivados del uso del sitio o de nuestros productos.
                  </li>
                  <li>Interrupciones o errores en el funcionamiento del sitio web.</li>
                  <li>Contenido de sitios web de terceros enlazados desde nuestro sitio.</li>
                </ul>

                <h3 className="text-xl font-semibold text-white mt-8 mb-4">9. Legislación Aplicable</h3>
                <p className="text-white/80 mb-4">
                  Estos términos y condiciones se rigen por las leyes de la República Argentina. Cualquier disputa
                  relacionada con estos términos será sometida a la jurisdicción de los tribunales de Córdoba,
                  Argentina.
                </p>

                <h3 className="text-xl font-semibold text-white mt-8 mb-4">10. Modificaciones</h3>
                <p className="text-white/80 mb-4">
                  Nos reservamos el derecho de modificar estos términos y condiciones en cualquier momento. Los cambios
                  entrarán en vigor inmediatamente después de su publicación en el sitio web.
                </p>

                <h3 className="text-xl font-semibold text-white mt-8 mb-4">11. Contacto</h3>
                <p className="text-white/80 mb-4">
                  Si tienes preguntas sobre estos términos y condiciones, contáctanos a través de nuestro correo
                  electrónico{" "}
                  <a href="mailto:Jmurrietapcp@gmail.com" className="text-gold hover:underline">
                    Jmurrietapcp@gmail.com
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
