import { HeaderAnnouncement } from "@/components/header-announcement"
import { HeaderMenu } from "@/components/header-menu"
import { Footer } from "@/components/footer"
import { ChatBubbles } from "@/components/chat-bubbles"
import { PageBanner } from "@/components/page-banner"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { MapPin, Phone, Mail, Clock } from "lucide-react"

// Añadir metadatos específicos para la página de contacto
export const metadata = {
  title: "Contacto | J. Murrieta PCP",
  description:
    "Ponte en contacto con nosotros para consultas, pedidos o soporte técnico. Estamos aquí para ayudarte con todo lo relacionado con rifles PCP.",
  openGraph: {
    title: "Contacto | J. Murrieta PCP",
    description:
      "Ponte en contacto con nosotros para consultas, pedidos o soporte técnico. Estamos aquí para ayudarte con todo lo relacionado con rifles PCP.",
  },
}

export default function ContactoPage() {
  return (
    <>
      <HeaderAnnouncement />
      <HeaderMenu />

      <main>
        <PageBanner
          title="Contacto"
          description="Estamos aquí para responder a tus preguntas y ayudarte con tu compra."
          imageSrc="/images/banner-rifle-loading.jpeg"
          imageAlt="Rifle J. Murrieta - Contacto"
        />

        <section className="py-12 bg-zinc-900">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <Card className="bg-black border-gold/20">
                <CardHeader>
                  <CardTitle className="text-white">Envíanos un mensaje</CardTitle>
                  <CardDescription className="text-white/60">
                    Completa el formulario y te responderemos a la brevedad.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label htmlFor="nombre" className="text-sm font-medium text-white">
                          Nombre
                        </label>
                        <Input id="nombre" placeholder="Tu nombre" className="bg-zinc-800 border-gold/20 text-white" />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="apellido" className="text-sm font-medium text-white">
                          Apellido
                        </label>
                        <Input
                          id="apellido"
                          placeholder="Tu apellido"
                          className="bg-zinc-800 border-gold/20 text-white"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium text-white">
                        Email
                      </label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="tu@email.com"
                        className="bg-zinc-800 border-gold/20 text-white"
                      />
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="telefono" className="text-sm font-medium text-white">
                        Teléfono
                      </label>
                      <Input
                        id="telefono"
                        placeholder="+54 9 XXX XXX XXXX"
                        className="bg-zinc-800 border-gold/20 text-white"
                      />
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="mensaje" className="text-sm font-medium text-white">
                        Mensaje
                      </label>
                      <Textarea
                        id="mensaje"
                        placeholder="¿En qué podemos ayudarte?"
                        rows={5}
                        className="bg-zinc-800 border-gold/20 text-white"
                      />
                    </div>

                    <Button type="submit" className="w-full bg-gold hover:bg-gold/90 text-black">
                      Enviar Mensaje
                    </Button>
                  </form>
                </CardContent>
              </Card>

              {/* Contact Info */}
              <div className="space-y-8">
                <Card className="bg-black border-gold/20">
                  <CardHeader>
                    <CardTitle className="text-white">Información de Contacto</CardTitle>
                    <CardDescription className="text-white/60">
                      Puedes contactarnos directamente a través de los siguientes medios.
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="flex items-start gap-4">
                      <Phone className="h-5 w-5 text-gold mt-0.5" />
                      <div>
                        <h3 className="font-medium text-white">Teléfonos</h3>
                        <p className="text-sm text-white/60">+54 9 351 537 1671</p>
                        <p className="text-sm text-white/60">+54 9 3516870117</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <Mail className="h-5 w-5 text-gold mt-0.5" />
                      <div>
                        <h3 className="font-medium text-white">Email</h3>
                        <p className="text-sm text-white/60">Jmurrietapcp@gmail.com</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <MapPin className="h-5 w-5 text-gold mt-0.5" />
                      <div>
                        <h3 className="font-medium text-white">Dirección</h3>
                        <p className="text-sm text-white/60">La Sierrita 191, Villa del Dique</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <Clock className="h-5 w-5 text-gold mt-0.5" />
                      <div>
                        <h3 className="font-medium text-white">Horario de Atención</h3>
                        <p className="text-sm text-white/60">7:00 am a 20:00 pm</p>
                        <p className="text-sm text-white/60">De Lunes a Viernes</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-black border-gold/20">
                  <CardHeader>
                    <CardTitle className="text-white">Ubicación</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="aspect-video w-full">
                      <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3386.0307456593636!2d-64.4633083!3d-31.9795833!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95d2b1a5a7e9a5a7%3A0x8a0a0a0a0a0a0a0a!2sLa%20Sierrita%20191%2C%20Villa%20del%20Dique%2C%20C%C3%B3rdoba!5e0!3m2!1ses!2sar!4v1650000000000!5m2!1ses!2sar"
                        width="100%"
                        height="300"
                        style={{ border: 0 }}
                        allowFullScreen={true}
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        title="Ubicación de J. Murrieta PCP"
                        className="rounded-md"
                      ></iframe>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        <section className="py-12 bg-black">
          <div className="container mx-auto px-4">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold text-gold">Dónde encontrar nuestros rifles</h2>
              <p className="text-white/60 mt-2">Armerías autorizadas en todo el país</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* CÓRDOBA */}
              <Card className="bg-zinc-900 border-gold/20">
                <CardHeader>
                  <CardTitle className="text-gold">CÓRDOBA</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3 text-white/80">
                  <p>Armería buen pique (Capital) – 351-4264546</p>
                  <p>Armería Rivadavia (Capital) – 351-4255190</p>
                  <p>Raúl Canuto (Río Tercero) – 3571-537373</p>
                  <p>El Tirador (Las Varillas) – 3541-571346</p>
                  <p>Jonny Busso (La Para) – 3563-494483</p>
                  <p>Diego Bustos (Santa Rosa Calamuchita) – 3546-475732</p>
                  <p>Cobas weekend (Bell Ville) – 3537-609231</p>
                  <p>J y C Camping (Marcos Juárez) – 3472-508845</p>
                  <p>FG Deportes (Pilar) – 3572-446520</p>
                  <p>Varolli (Villa de Soto) – 3548-591695</p>
                  <p>Lozano hnas (Cruz del Eje) – 3549-504672</p>
                </CardContent>
              </Card>

              {/* SANTIAGO DEL ESTERO */}
              <Card className="bg-zinc-900 border-gold/20">
                <CardHeader>
                  <CardTitle className="text-gold">SANTIAGO DEL ESTERO</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3 text-white/80">
                  <p>Casa Mubarqui (Frías) – 3854-438961</p>
                  <p>Nato outdoor (Frías) – 3854-470000</p>
                </CardContent>
              </Card>

              {/* TUCUMÁN */}
              <Card className="bg-zinc-900 border-gold/20">
                <CardHeader>
                  <CardTitle className="text-gold">TUCUMÁN</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3 text-white/80">
                  <p>Armar (Capital) – 381-6353269</p>
                  <p>Escorpio (Capital) – 381-2502020</p>
                  <p>Full pesca (Capital) – 381-5315983</p>
                  <p>Pillon pesca (Concepción) – 386-5441250</p>
                </CardContent>
              </Card>

              {/* SALTA */}
              <Card className="bg-zinc-900 border-gold/20">
                <CardHeader>
                  <CardTitle className="text-gold">SALTA</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3 text-white/80">
                  <p>Todo Pesca (Rosario de la Frontera) – 3876-556561</p>
                  <p>Casa Mickey (Metán) – 387-6527193</p>
                  <p>Tompy pesca (Capital) – 387-5891036</p>
                  <p>La casa del Pescador (Capital) – 387-4846556</p>
                </CardContent>
              </Card>

              {/* CHACO */}
              <Card className="bg-zinc-900 border-gold/20">
                <CardHeader>
                  <CardTitle className="text-gold">CHACO</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3 text-white/80">
                  <p>Pesca Paraná (Resistencia) – 379-4888709</p>
                  <p>Armería Yiyo (Resistencia) – 362-4010970</p>
                  <p>Marrodan (Roque Sáenz Peña) – 3641078-463</p>
                  <p>Airgun JMH (Charata) – 373-1449833</p>
                </CardContent>
              </Card>

              {/* ENTRE RÍOS */}
              <Card className="bg-zinc-900 border-gold/20">
                <CardHeader>
                  <CardTitle className="text-gold">ENTRE RÍOS</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3 text-white/80">
                  <p>Duro impacto (Villaguay) – 345-5418931</p>
                  <p>El cazador (Concordia) – 345-5292195</p>
                </CardContent>
              </Card>

              {/* SANTA FE */}
              <Card className="bg-zinc-900 border-gold/20">
                <CardHeader>
                  <CardTitle className="text-gold">SANTA FE</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3 text-white/80">
                  <p>Armería Rafaela (Rafaela) – 349-2661458</p>
                  <p>Pesca Top (Recreo) – 342-4089679</p>
                  <p>Las cuatro bocas (San Lorenzo) – 341-5967868</p>
                </CardContent>
              </Card>

              {/* BUENOS AIRES */}
              <Card className="bg-zinc-900 border-gold/20">
                <CardHeader>
                  <CardTitle className="text-gold">BUENOS AIRES</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3 text-white/80">
                  <p>Airguns Juance (Morón) – 11-63912894</p>
                </CardContent>
              </Card>

              {/* CHUBUT */}
              <Card className="bg-zinc-900 border-gold/20">
                <CardHeader>
                  <CardTitle className="text-gold">CHUBUT</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3 text-white/80">
                  <p>Casa Garrone (Villa Regina) – 298-4229172</p>
                </CardContent>
              </Card>

              {/* RÍO NEGRO */}
              <Card className="bg-zinc-900 border-gold/20">
                <CardHeader>
                  <CardTitle className="text-gold">RÍO NEGRO</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3 text-white/80">
                  <p>Andrés (Comodoro Rivadavia) – 297-5283383</p>
                  <p>La casa del Pescador (Comodoro Rivadavia) – 297-4200359</p>
                </CardContent>
              </Card>

              {/* CORRIENTES */}
              <Card className="bg-zinc-900 border-gold/20">
                <CardHeader>
                  <CardTitle className="text-gold">CORRIENTES</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3 text-white/80">
                  <p>El Jabali (Goya) – 377-7525226</p>
                  <p>Pesca Cuca (Ituzaingó) – 378-6619453</p>
                  <p>Galeon (Esquina) – 377-7307288</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <ChatBubbles />
    </>
  )
}
