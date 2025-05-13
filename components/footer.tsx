import Link from "next/link"
import {
  Facebook,
  Instagram,
  MapPin,
  Phone,
  Mail,
  Clock,
  Heart,
  ChevronRight,
  Youtube,
  PhoneIcon as WhatsApp,
} from "lucide-react"
import { ImageWithFallback } from "@/components/ui/image-with-fallback"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer bg-black text-white" role="contentinfo" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">
        Pie de página
      </h2>

      <div className="footer__top bg-zinc-900/50 py-8 md:py-12 border-t border-gold/20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            {/* Columna 1: Logo y descripción */}
            <div className="md:col-span-1">
              <div className="flex flex-col items-center md:items-start">
                <Link href="/" className="mb-4 inline-block" aria-label="J. Murrieta - Página de inicio">
                  <ImageWithFallback
                    src="/images/logo.png"
                    alt="J. Murrieta"
                    width={150}
                    height={50}
                    className="h-auto"
                  />
                </Link>
                <p className="text-white/70 text-sm mb-6 text-center md:text-left">
                  En J. Murrieta nos dedicamos a la fabricación de rifles PCP de alta precisión, combinando la tradición
                  artesanal argentina con la más avanzada tecnología para ofrecer productos de calidad excepcional.
                </p>
              </div>
            </div>

            {/* Columna 2: Medios de pago y envío */}
            <div className="md:col-span-1">
              <div className="mb-8">
                <h3 className="text-xl font-bold text-white mb-4">Medios de pago</h3>
                <div className="flex flex-wrap gap-3">
                  <div className="bg-white rounded-md p-2 h-10 flex items-center">
                    <ImageWithFallback
                      src="/images/payment/visa.png"
                      alt="Visa"
                      width={50}
                      height={32}
                      className="h-6 w-auto"
                    />
                  </div>
                  <div className="bg-white rounded-md p-2 h-10 flex items-center">
                    <ImageWithFallback
                      src="/images/payment/mastercard.png"
                      alt="Mastercard"
                      width={50}
                      height={32}
                      className="h-6 w-auto"
                    />
                  </div>
                  <div className="bg-white rounded-md p-2 h-10 flex items-center">
                    <ImageWithFallback
                      src="/images/payment/naranja.png"
                      alt="Naranja"
                      width={50}
                      height={32}
                      className="h-6 w-auto"
                    />
                  </div>
                  <div className="bg-white rounded-md p-2 h-10 flex items-center">
                    <ImageWithFallback
                      src="/images/payment/rapipago.png"
                      alt="Rapipago"
                      width={50}
                      height={32}
                      className="h-6 w-auto"
                    />
                  </div>
                  <div className="bg-white rounded-md p-2 h-10 flex items-center">
                    <ImageWithFallback
                      src="/images/payment/pagofacil.png"
                      alt="Pago Fácil"
                      width={50}
                      height={32}
                      className="h-6 w-auto"
                    />
                  </div>
                  <div className="bg-white rounded-md p-2 h-10 flex items-center">
                    <ImageWithFallback
                      src="/images/payment/efectivo.png"
                      alt="Efectivo"
                      width={50}
                      height={32}
                      className="h-6 w-auto"
                    />
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-4">Medios de envío</h3>
                <div className="flex flex-wrap gap-3">
                  <div className="bg-white rounded-md p-2 h-10 flex items-center">
                    <ImageWithFallback
                      src="/images/payment/andreani.png"
                      alt="Andreani"
                      width={50}
                      height={32}
                      className="h-6 w-auto"
                    />
                  </div>
                  <div className="bg-white rounded-md p-2 h-10 flex items-center">
                    <ImageWithFallback
                      src="/images/payment/correo-argentino.png"
                      alt="Correo Argentino"
                      width={50}
                      height={32}
                      className="h-6 w-auto"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Columna 3: Enlaces rápidos y políticas */}
            <div className="md:col-span-1">
              <h3 className="text-xl font-bold text-white mb-4">Enlaces rápidos</h3>
              <nav aria-label="Enlaces rápidos">
                <ul className="space-y-2">
                  <li>
                    <Link href="/rifles" className="text-white/70 hover:text-gold transition-colors flex items-center">
                      <ChevronRight className="h-4 w-4 text-gold mr-2" aria-hidden="true" /> Rifles
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/accesorios"
                      className="text-white/70 hover:text-gold transition-colors flex items-center"
                    >
                      <ChevronRight className="h-4 w-4 text-gold mr-2" aria-hidden="true" /> Accesorios
                    </Link>
                  </li>
                  <li>
                    <Link href="/blog" className="text-white/70 hover:text-gold transition-colors flex items-center">
                      <ChevronRight className="h-4 w-4 text-gold mr-2" aria-hidden="true" /> Blog
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/contacto"
                      className="text-white/70 hover:text-gold transition-colors flex items-center"
                    >
                      <ChevronRight className="h-4 w-4 text-gold mr-2" aria-hidden="true" /> Contacto
                    </Link>
                  </li>
                </ul>
              </nav>

              <h3 className="text-xl font-bold text-white mt-6 mb-4">Políticas</h3>
              <nav aria-label="Políticas">
                <ul className="space-y-2">
                  <li>
                    <Link
                      href="/politicas/envios"
                      className="text-white/70 hover:text-gold transition-colors flex items-center"
                    >
                      <ChevronRight className="h-4 w-4 text-gold mr-2" aria-hidden="true" /> Política de Envíos
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/politicas/devoluciones"
                      className="text-white/70 hover:text-gold transition-colors flex items-center"
                    >
                      <ChevronRight className="h-4 w-4 text-gold mr-2" aria-hidden="true" /> Política de Devoluciones
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/politicas/privacidad"
                      className="text-white/70 hover:text-gold transition-colors flex items-center"
                    >
                      <ChevronRight className="h-4 w-4 text-gold mr-2" aria-hidden="true" /> Política de Privacidad
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/politicas/terminos"
                      className="text-white/70 hover:text-gold transition-colors flex items-center"
                    >
                      <ChevronRight className="h-4 w-4 text-gold mr-2" aria-hidden="true" /> Términos y Condiciones
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>

            {/* Columna 4: Contacto y redes sociales */}
            <div className="md:col-span-1">
              <h3 className="text-xl font-bold text-white mb-4">Contacto</h3>
              <ul className="space-y-3">
                <li className="flex items-center gap-3">
                  <div
                    className="w-8 h-8 rounded-full bg-black flex items-center justify-center border border-gold/30"
                    aria-hidden="true"
                  >
                    <Mail className="h-4 w-4 text-gold" strokeWidth={1.5} />
                  </div>
                  <Link
                    href="mailto:Jmurrietapcp@gmail.com"
                    className="text-white hover:text-gold transition-colors"
                    aria-label="Enviar correo electrónico a Jmurrietapcp@gmail.com"
                  >
                    Jmurrietapcp@gmail.com
                  </Link>
                </li>
                <li className="flex items-center gap-3">
                  <div
                    className="w-8 h-8 rounded-full bg-black flex items-center justify-center border border-gold/30"
                    aria-hidden="true"
                  >
                    <WhatsApp className="h-4 w-4 text-gold" strokeWidth={1.5} />
                  </div>
                  <Link
                    href="https://wa.me/5493515371671"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:text-gold transition-colors"
                    aria-label="Contactar por WhatsApp al +54 9 351 537 1671"
                  >
                    +54 9 351 537 1671
                  </Link>
                </li>
                <li className="flex items-center gap-3">
                  <div
                    className="w-8 h-8 rounded-full bg-black flex items-center justify-center border border-gold/30"
                    aria-hidden="true"
                  >
                    <Phone className="h-4 w-4 text-gold" strokeWidth={1.5} />
                  </div>
                  <Link
                    href="tel:+5493516870117"
                    className="text-white hover:text-gold transition-colors"
                    aria-label="Llamar al teléfono +54 9 351 687 0117"
                  >
                    +54 9 351 687 0117
                  </Link>
                </li>
                <li className="flex items-center gap-3">
                  <div
                    className="w-8 h-8 rounded-full bg-black flex items-center justify-center border border-gold/30"
                    aria-hidden="true"
                  >
                    <MapPin className="h-4 w-4 text-gold" strokeWidth={1.5} />
                  </div>
                  <span className="text-white/80">La Sierrita 191, Villa del Dique</span>
                </li>
                <li className="flex items-center gap-3">
                  <div
                    className="w-8 h-8 rounded-full bg-black flex items-center justify-center border border-gold/30"
                    aria-hidden="true"
                  >
                    <Clock className="h-4 w-4 text-gold" strokeWidth={1.5} />
                  </div>
                  <span className="text-white/80">7:00 am a 20:00 pm, Lunes a Viernes</span>
                </li>
              </ul>

              <h3 className="text-xl font-bold text-white mt-6 mb-4">Síguenos</h3>
              <ul className="flex gap-4">
                <li className="w-12 h-12 rounded-full bg-black flex items-center justify-center border border-gold/30 hover:border-gold transition-all duration-300">
                  <Link
                    href="https://facebook.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gold"
                    aria-label="Visitar Facebook"
                  >
                    <Facebook className="h-5 w-5" strokeWidth={1.5} />
                  </Link>
                </li>
                <li className="w-12 h-12 rounded-full bg-black flex items-center justify-center border border-gold/30 hover:border-gold transition-all duration-300">
                  <Link
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gold"
                    aria-label="Visitar Instagram"
                  >
                    <Instagram className="h-5 w-5" strokeWidth={1.5} />
                  </Link>
                </li>
                <li className="w-12 h-12 rounded-full bg-black flex items-center justify-center border border-gold/30 hover:border-gold transition-all duration-300">
                  <Link
                    href="https://youtube.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gold"
                    aria-label="Visitar YouTube"
                  >
                    <Youtube className="h-5 w-5" strokeWidth={1.5} />
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="footer__bottom py-6 border-t border-gold/10">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-center md:text-left">
              &copy; {currentYear} J. Murrieta. Todos los derechos reservados.
            </p>
            <div className="mt-4 md:mt-0 flex items-center gap-2 text-sm text-white/60">
              <div className="flex items-center gap-2 text-sm text-white/60">
                <span>Desarrollado con</span>
                <Heart className="h-3 w-3 text-gold fill-gold" aria-hidden="true" />
                <span>por</span>
                <a
                  href="https://dualitydomain.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gold hover:underline"
                >
                  Duality Domain
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
