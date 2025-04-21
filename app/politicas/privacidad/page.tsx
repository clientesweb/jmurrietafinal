import { HeaderAnnouncement } from "@/components/header-announcement"
import { HeaderMenu } from "@/components/header-menu"
import { Footer } from "@/components/footer"
import { ChatBubbles } from "@/components/chat-bubbles"
import { PageBanner } from "@/components/page-banner"

export const metadata = {
  title: "Política de Privacidad | J. Murrieta PCP",
  description: "Conoce cómo protegemos y tratamos tus datos personales en J. Murrieta PCP.",
}

export default function PoliticaPrivacidadPage() {
  return (
    <>
      <HeaderAnnouncement />
      <HeaderMenu />

      <main>
        <PageBanner
          title="Política de Privacidad"
          description="Cómo protegemos tus datos personales"
          imageSrc="/images/banner-rifle-testing.jpeg"
          imageAlt="Rifle J. Murrieta - Política de Privacidad"
        />

        <section className="py-12 bg-zinc-900">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto bg-black border border-gold/20 rounded-lg p-8">
              <div className="prose prose-invert max-w-none">
                <h2 className="text-2xl font-bold text-gold mb-6">Política de Privacidad</h2>

                <p className="text-white/80 mb-6">
                  En J. Murrieta PCP nos comprometemos a proteger tu privacidad. Esta política explica cómo recopilamos,
                  utilizamos y protegemos la información personal que nos proporcionas.
                </p>

                <h3 className="text-xl font-semibold text-white mt-8 mb-4">1. Información que Recopilamos</h3>
                <p className="text-white/80 mb-4">Podemos recopilar los siguientes tipos de información:</p>
                <ul className="list-disc pl-6 text-white/80 mb-6 space-y-2">
                  <li>Información de contacto: nombre, dirección, correo electrónico, número de teléfono.</li>
                  <li>
                    Información de pago: datos de tarjetas de crédito, información bancaria (procesados de forma segura
                    a través de nuestros proveedores de pago).
                  </li>
                  <li>Información de la cuenta: nombre de usuario, contraseña, historial de compras.</li>
                  <li>
                    Información técnica: dirección IP, tipo de navegador, dispositivo utilizado para acceder a nuestro
                    sitio.
                  </li>
                </ul>

                <h3 className="text-xl font-semibold text-white mt-8 mb-4">2. Cómo Utilizamos tu Información</h3>
                <p className="text-white/80 mb-4">Utilizamos tu información para:</p>
                <ul className="list-disc pl-6 text-white/80 mb-6 space-y-2">
                  <li>Procesar tus pedidos y envíos.</li>
                  <li>Comunicarnos contigo sobre tu pedido o consulta.</li>
                  <li>Mejorar nuestros productos y servicios.</li>
                  <li>Enviar información sobre promociones o nuevos productos (solo si has dado tu consentimiento).</li>
                  <li>Cumplir con obligaciones legales y fiscales.</li>
                </ul>

                <h3 className="text-xl font-semibold text-white mt-8 mb-4">3. Protección de Datos</h3>
                <p className="text-white/80 mb-4">
                  Implementamos medidas de seguridad técnicas y organizativas para proteger tus datos personales contra
                  acceso no autorizado, pérdida o alteración. Estas medidas incluyen:
                </p>
                <ul className="list-disc pl-6 text-white/80 mb-6 space-y-2">
                  <li>Encriptación de datos sensibles.</li>
                  <li>Acceso restringido a la información personal.</li>
                  <li>Monitoreo regular de nuestros sistemas para detectar posibles vulnerabilidades.</li>
                  <li>Formación de nuestro personal en materia de protección de datos.</li>
                </ul>

                <h3 className="text-xl font-semibold text-white mt-8 mb-4">4. Compartir Información</h3>
                <p className="text-white/80 mb-4">
                  No vendemos ni alquilamos tu información personal a terceros. Podemos compartir tu información con:
                </p>
                <ul className="list-disc pl-6 text-white/80 mb-6 space-y-2">
                  <li>
                    Proveedores de servicios que nos ayudan a operar nuestro negocio (procesadores de pago, empresas de
                    envío).
                  </li>
                  <li>Autoridades cuando sea requerido por ley.</li>
                </ul>

                <h3 className="text-xl font-semibold text-white mt-8 mb-4">5. Tus Derechos</h3>
                <p className="text-white/80 mb-4">Tienes derecho a:</p>
                <ul className="list-disc pl-6 text-white/80 mb-6 space-y-2">
                  <li>Acceder a tus datos personales.</li>
                  <li>Rectificar datos inexactos.</li>
                  <li>Solicitar la eliminación de tus datos.</li>
                  <li>Oponerte al procesamiento de tus datos.</li>
                  <li>Retirar tu consentimiento en cualquier momento.</li>
                </ul>

                <h3 className="text-xl font-semibold text-white mt-8 mb-4">6. Cookies</h3>
                <p className="text-white/80 mb-4">
                  Utilizamos cookies para mejorar tu experiencia en nuestro sitio web. Puedes configurar tu navegador
                  para rechazar todas las cookies o para que te avise cuando se envía una cookie.
                </p>

                <h3 className="text-xl font-semibold text-white mt-8 mb-4">7. Cambios en la Política de Privacidad</h3>
                <p className="text-white/80 mb-4">
                  Podemos actualizar esta política periódicamente. Te notificaremos cualquier cambio significativo a
                  través de nuestro sitio web o por correo electrónico.
                </p>

                <h3 className="text-xl font-semibold text-white mt-8 mb-4">8. Contacto</h3>
                <p className="text-white/80 mb-4">
                  Si tienes preguntas sobre nuestra política de privacidad, contáctanos a través de nuestro correo
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
