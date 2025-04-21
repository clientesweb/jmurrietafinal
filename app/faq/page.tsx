import { HeaderAnnouncement } from "@/components/header-announcement"
import { HeaderMenu } from "@/components/header-menu"
import { Footer } from "@/components/footer"
import { ChatBubbles } from "@/components/chat-bubbles"
import { CartDrawer } from "@/components/cart/cart-drawer"
import { PageBanner } from "@/components/page-banner"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { MessageCircle } from "lucide-react"

// Añadir metadatos específicos para la página de FAQ
export const metadata = {
  title: "Preguntas Frecuentes | J. Murrieta PCP",
  description:
    "Respuestas a las preguntas más comunes sobre nuestros rifles PCP, compras, envíos y garantía. Encuentra la información que necesitas.",
  openGraph: {
    title: "Preguntas Frecuentes | J. Murrieta PCP",
    description:
      "Respuestas a las preguntas más comunes sobre nuestros rifles PCP, compras, envíos y garantía. Encuentra la información que necesitas.",
  },
}

export default function FAQPage() {
  // Datos para las preguntas frecuentes organizadas por categorías
  const faqData = {
    productos: [
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
        question: "¿Cuál es la autonomía de los rifles?",
        answer:
          "La autonomía varía según el modelo y el calibre. En general, con una carga completa de 200 bar, el calibre 5.5mm ofrece entre 30-35 disparos óptimos, el calibre 6.35mm entre 25-30 disparos, y el calibre 7.62mm entre 10-15 disparos.",
      },
      {
        question: "¿Los rifles incluyen accesorios?",
        answer:
          "Los rifles se venden en su configuración básica, que incluye el rifle y el manual de usuario. Los accesorios como miras telescópicas, silenciadores, fundas de transporte, etc., se venden por separado en nuestra sección de accesorios.",
      },
      {
        question: "¿Qué garantía tienen los productos?",
        answer:
          "Todos nuestros rifles tienen una garantía de 1 año contra defectos de fabricación. Los accesorios tienen una garantía de 3 meses. La garantía no cubre daños por mal uso, modificaciones no autorizadas o desgaste normal.",
      },
    ],
    compras: [
      {
        question: "¿Cómo puedo realizar una compra?",
        answer:
          "Para realizar una compra, simplemente navega por nuestra tienda, selecciona los productos que deseas, agrégalos al carrito y procede al checkout. Allí podrás ingresar tus datos de contacto y envío, y finalizar la compra mediante transferencia bancaria.",
      },
      {
        question: "¿Qué métodos de pago aceptan?",
        answer:
          "Actualmente aceptamos transferencias bancarias y depósitos. Una vez que realices tu pedido, te proporcionaremos los datos bancarios para que puedas realizar el pago. Estamos trabajando para implementar más métodos de pago en el futuro.",
      },
      {
        question: "¿Puedo cancelar o modificar mi pedido?",
        answer:
          "Puedes cancelar o modificar tu pedido antes de que sea procesado. Para hacerlo, contáctanos lo antes posible a través de WhatsApp o correo electrónico con tu número de pedido y los cambios que deseas realizar.",
      },
      {
        question: "¿Ofrecen descuentos por compras al por mayor?",
        answer:
          "Sí, ofrecemos descuentos especiales para compras al por mayor. Si estás interesado en adquirir varios productos, contáctanos directamente para discutir las opciones disponibles y los descuentos aplicables.",
      },
      {
        question: "¿Cómo puedo utilizar un cupón de descuento?",
        answer:
          "Para utilizar un cupón de descuento, ingresa el código del cupón en el campo correspondiente durante el proceso de checkout, antes de finalizar tu compra. El descuento se aplicará automáticamente si el cupón es válido y cumple con las condiciones.",
      },
    ],
    envios: [
      {
        question: "¿Realizan envíos a todo el país?",
        answer:
          "Sí, realizamos envíos a todo el territorio argentino a través de Correo Argentino y Andreani. Los tiempos de entrega varían según la ubicación, pero generalmente oscilan entre 3-7 días hábiles.",
      },
      {
        question: "¿Cuál es el costo de envío?",
        answer:
          "El costo de envío se calcula automáticamente durante el proceso de checkout, basado en tu ubicación y el peso total de los productos. Ofrecemos envío gratuito en compras superiores a $80.000.",
      },
      {
        question: "¿Cómo puedo hacer seguimiento de mi pedido?",
        answer:
          "Una vez que tu pedido sea despachado, recibirás un correo electrónico con el número de seguimiento y las instrucciones para rastrear tu envío a través del sitio web de la empresa de transporte.",
      },
      {
        question: "¿Qué hago si mi pedido no llega en el tiempo estimado?",
        answer:
          "Si tu pedido no llega dentro del tiempo estimado, por favor contáctanos con tu número de pedido y número de seguimiento. Investigaremos la situación con la empresa de transporte y te mantendremos informado.",
      },
      {
        question: "¿Realizan envíos internacionales?",
        answer:
          "Actualmente no realizamos envíos internacionales. Nuestros servicios están limitados al territorio argentino. Si tienes alguna consulta específica sobre este tema, no dudes en contactarnos.",
      },
    ],
    legales: [
      {
        question: "¿Qué documentación necesito para comprar un rifle PCP?",
        answer:
          "Para adquirir un rifle PCP, necesitas ser mayor de edad y cumplir con los requisitos legales establecidos por la normativa argentina. No se requiere licencia especial para rifles de aire comprimido PCP, pero recomendamos verificar las regulaciones locales específicas de tu provincia o municipio.",
      },
      {
        question: "¿Los rifles PCP requieren algún permiso especial?",
        answer:
          "En Argentina, los rifles de aire comprimido PCP generalmente no requieren permisos especiales como los que se necesitan para armas de fuego. Sin embargo, es importante verificar las regulaciones locales, ya que pueden variar según la provincia o municipio.",
      },
      {
        question: "¿Cuál es la política de devoluciones?",
        answer:
          "Aceptamos devoluciones dentro de los 10 días posteriores a la recepción del producto, siempre que esté en su estado original, sin usar y con todos los accesorios y embalajes. Los gastos de envío para la devolución corren por cuenta del cliente, excepto en casos de productos defectuosos.",
      },
      {
        question: "¿Qué hago si recibo un producto defectuoso?",
        answer:
          "Si recibes un producto defectuoso, contáctanos dentro de las 48 horas posteriores a la recepción con fotos o videos que muestren el defecto. Evaluaremos el caso y procederemos con la reparación, reemplazo o reembolso según corresponda.",
      },
      {
        question: "¿Cómo se manejan los datos personales?",
        answer:
          "Protegemos tus datos personales de acuerdo con la Ley de Protección de Datos Personales. La información que nos proporcionas se utiliza únicamente para procesar tu pedido y mejorar tu experiencia de compra. No compartimos tus datos con terceros sin tu consentimiento.",
      },
    ],
  }

  return (
    <>
      <HeaderAnnouncement />
      <HeaderMenu />
      <CartDrawer />

      <main>
        <PageBanner
          title="Preguntas"
          subtitle="Frecuentes"
          description="Encuentra respuestas a las dudas más comunes sobre nuestros productos, compras, envíos y más."
          imageSrc="/images/banner-rifle-case.jpeg"
          imageAlt="Preguntas Frecuentes J. Murrieta"
        />

        <section className="py-16 bg-zinc-900">
          <div className="container mx-auto px-4">
            <Tabs defaultValue="productos" className="w-full">
              <div className="flex justify-center mb-8">
                <TabsList className="bg-black border border-gold/20">
                  <TabsTrigger value="productos" className="data-[state=active]:bg-gold data-[state=active]:text-black">
                    Productos
                  </TabsTrigger>
                  <TabsTrigger value="compras" className="data-[state=active]:bg-gold data-[state=active]:text-black">
                    Compras
                  </TabsTrigger>
                  <TabsTrigger value="envios" className="data-[state=active]:bg-gold data-[state=active]:text-black">
                    Envíos
                  </TabsTrigger>
                  <TabsTrigger value="legales" className="data-[state=active]:bg-gold data-[state=active]:text-black">
                    Legales
                  </TabsTrigger>
                </TabsList>
              </div>

              <TabsContent value="productos" className="mt-0">
                <div className="bg-black border border-gold/20 rounded-lg p-6 md:p-8">
                  <h2 className="text-2xl font-bold text-white mb-6">Preguntas sobre Productos</h2>
                  <Accordion type="single" collapsible className="w-full">
                    {faqData.productos.map((item, index) => (
                      <AccordionItem key={index} value={`productos-${index}`} className="border-gold/20">
                        <AccordionTrigger className="text-white hover:text-gold">{item.question}</AccordionTrigger>
                        <AccordionContent className="text-white/70">{item.answer}</AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </div>
              </TabsContent>

              <TabsContent value="compras" className="mt-0">
                <div className="bg-black border border-gold/20 rounded-lg p-6 md:p-8">
                  <h2 className="text-2xl font-bold text-white mb-6">Preguntas sobre Compras</h2>
                  <Accordion type="single" collapsible className="w-full">
                    {faqData.compras.map((item, index) => (
                      <AccordionItem key={index} value={`compras-${index}`} className="border-gold/20">
                        <AccordionTrigger className="text-white hover:text-gold">{item.question}</AccordionTrigger>
                        <AccordionContent className="text-white/70">{item.answer}</AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </div>
              </TabsContent>

              <TabsContent value="envios" className="mt-0">
                <div className="bg-black border border-gold/20 rounded-lg p-6 md:p-8">
                  <h2 className="text-2xl font-bold text-white mb-6">Preguntas sobre Envíos</h2>
                  <Accordion type="single" collapsible className="w-full">
                    {faqData.envios.map((item, index) => (
                      <AccordionItem key={index} value={`envios-${index}`} className="border-gold/20">
                        <AccordionTrigger className="text-white hover:text-gold">{item.question}</AccordionTrigger>
                        <AccordionContent className="text-white/70">{item.answer}</AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </div>
              </TabsContent>

              <TabsContent value="legales" className="mt-0">
                <div className="bg-black border border-gold/20 rounded-lg p-6 md:p-8">
                  <h2 className="text-2xl font-bold text-white mb-6">Preguntas Legales</h2>
                  <Accordion type="single" collapsible className="w-full">
                    {faqData.legales.map((item, index) => (
                      <AccordionItem key={index} value={`legales-${index}`} className="border-gold/20">
                        <AccordionTrigger className="text-white hover:text-gold">{item.question}</AccordionTrigger>
                        <AccordionContent className="text-white/70">{item.answer}</AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </div>
              </TabsContent>
            </Tabs>

            {/* Sección de contacto */}
            <div className="mt-12 bg-black border border-gold/20 rounded-lg p-6 md:p-8 text-center">
              <h3 className="text-xl font-bold text-white mb-4">¿No encontraste la respuesta que buscabas?</h3>
              <p className="text-white/70 mb-6 max-w-2xl mx-auto">
                Si tienes alguna pregunta adicional o necesitas más información, no dudes en contactarnos. Estamos aquí
                para ayudarte.
              </p>
              <Button asChild className="bg-gold hover:bg-gold/90 text-black">
                <Link href="/contacto" className="flex items-center gap-2">
                  <MessageCircle className="h-5 w-5" /> Contactar Ahora
                </Link>
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
