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
      </main>

      <Footer />
      <ChatBubbles />
    </>
  )
}
