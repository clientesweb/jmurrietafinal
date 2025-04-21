"use client"

import type React from "react"

import { HeaderAnnouncement } from "@/components/header-announcement"
import { HeaderSearch } from "@/components/header-search"
import { HeaderMenu } from "@/components/header-menu"
import { Footer } from "@/components/footer"
import { ChatBubbles } from "@/components/chat-bubbles"
import { CartDrawer } from "@/components/cart/cart-drawer"
import { Breadcrumb } from "@/components/breadcrumb"
import { useCart } from "@/context/cart-context"
import { formatPrice } from "@/lib/utils"
import { useState } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { RadioGroup } from "@/components/ui/radio-group"
import { Separator } from "@/components/ui/separator"
import { CreditCard, Truck, ShoppingBag, User, MapPin, Phone, Mail, AlertCircle, Check } from "lucide-react"

// Modificar las opciones de envío para quitar los precios
const shippingOptions = [
  {
    id: "correo-argentino",
    name: "Correo Argentino",
    price: 0,
    estimatedDelivery: "3-5 días hábiles",
    description: "El costo se coordinará por WhatsApp",
  },
  {
    id: "andreani",
    name: "Andreani",
    price: 0,
    estimatedDelivery: "2-3 días hábiles",
    description: "El costo se coordinará por WhatsApp",
  },
  {
    id: "retiro-local",
    name: "Retiro en local",
    price: 0,
    estimatedDelivery: "Inmediato",
    description: "Sin costo adicional",
  },
]

// Añadir opciones de pago
const paymentOptions = [
  {
    id: "transferencia",
    name: "Transferencia Bancaria",
    description: "Pago completo mediante transferencia bancaria",
  },
  {
    id: "3-cuotas",
    name: "3 Cuotas",
    description: "Pago en 3 cuotas (consultar detalles por WhatsApp)",
  },
  {
    id: "6-cuotas",
    name: "6 Cuotas",
    description: "Pago en 6 cuotas (consultar detalles por WhatsApp)",
  },
  {
    id: "efectivo",
    name: "Efectivo",
    description: "Pago en efectivo (solo para retiro en local)",
  },
]

// Datos bancarios
const bankInfo = {
  account: "CA $ 425 0003749603",
  cbu: "0200425311000003749630",
  alias: "METAL.HERRAMIENTA",
  holder: "Aranda Alejo Damian",
  cuit: "20441942770",
}

export default function CheckoutPage() {
  const { items, totalItems, totalPrice, clearCart } = useCart()
  const router = useRouter()

  // Estados para el formulario
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    province: "",
    postalCode: "",
    notes: "",
  })

  // Estado para la opción de envío seleccionada
  const [selectedShipping, setSelectedShipping] = useState(shippingOptions[0].id)

  // Añadir estado para la opción de pago seleccionada
  const [selectedPayment, setSelectedPayment] = useState(paymentOptions[0].id)

  // Estado para el paso actual del checkout
  const [step, setStep] = useState(1)

  // Estado para el mensaje de error
  const [error, setError] = useState("")

  // Estado para indicar si el pedido se ha completado
  const [orderCompleted, setOrderCompleted] = useState(false)

  // Manejar cambios en el formulario
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  // Obtener la opción de envío seleccionada
  const getSelectedShippingOption = () => {
    return shippingOptions.find((option) => option.id === selectedShipping) || shippingOptions[0]
  }

  // Modificar la función totalWithShipping para que solo use el totalPrice
  const totalWithShipping = totalPrice

  // Validar el formulario
  const validateForm = () => {
    if (!formData.firstName || !formData.lastName || !formData.email || !formData.phone) {
      setError("Por favor complete todos los campos obligatorios")
      return false
    }

    if (
      selectedShipping !== "retiro-local" &&
      (!formData.address || !formData.city || !formData.province || !formData.postalCode)
    ) {
      setError("Por favor complete todos los datos de envío")
      return false
    }

    setError("")
    return true
  }

  // Avanzar al siguiente paso
  const handleNextStep = () => {
    if (validateForm()) {
      setStep(2)
      window.scrollTo(0, 0)
    }
  }

  // Volver al paso anterior
  const handlePreviousStep = () => {
    setStep(1)
    window.scrollTo(0, 0)
  }

  // Modificar la función generateWhatsAppMessage para incluir la opción de pago
  const generateWhatsAppMessage = () => {
    const shippingOption = getSelectedShippingOption()
    const paymentOption = paymentOptions.find((option) => option.id === selectedPayment) || paymentOptions[0]

    let message = `*NUEVO PEDIDO - J. MURRIETA*\n\n`
    message += `*Datos del Cliente:*\n`
    message += `Nombre: ${formData.firstName} ${formData.lastName}\n`
    message += `Email: ${formData.email}\n`
    message += `Teléfono: ${formData.phone}\n\n`

    if (selectedShipping !== "retiro-local") {
      message += `*Dirección de Envío:*\n`
      message += `${formData.address}\n`
      message += `${formData.city}, ${formData.province} (${formData.postalCode})\n\n`
    }

    message += `*Método de Envío:*\n`
    message += `${shippingOption.name} - ${shippingOption.description}\n\n`

    message += `*Método de Pago:*\n`
    message += `${paymentOption.name} - ${paymentOption.description}\n\n`

    message += `*Productos:*\n`
    items.forEach((item) => {
      message += `- ${item.name} ${item.caliber ? `(${item.caliber})` : ""} x ${item.quantity} = ${formatPrice(item.price * item.quantity)}\n`
    })

    message += `\n*Subtotal:* ${formatPrice(totalPrice)}\n`
    message += `*Total:* ${formatPrice(totalPrice)}\n\n`

    if (formData.notes) {
      message += `*Notas:*\n${formData.notes}\n\n`
    }

    return encodeURIComponent(message)
  }

  // Completar pedido
  const handleCompleteOrder = () => {
    // Generar el mensaje para WhatsApp
    const message = generateWhatsAppMessage()

    // Marcar el pedido como completado
    setOrderCompleted(true)

    // Limpiar el carrito
    clearCart()

    // Abrir WhatsApp en una nueva pestaña
    window.open(`https://wa.me/5493515371671?text=${message}`, "_blank")

    // Redirigir a la página de confirmación después de un breve retraso
    setTimeout(() => {
      router.push("/")
    }, 5000)
  }

  // Si no hay items en el carrito y no es un pedido completado, redirigir a la página de productos
  if (items.length === 0 && !orderCompleted) {
    return (
      <>
        <HeaderAnnouncement />
        <HeaderSearch />
        <HeaderMenu />
        <CartDrawer />

        <main className="py-12 bg-zinc-900">
          <div className="container mx-auto px-4">
            <div className="max-w-lg mx-auto text-center">
              <ShoppingBag className="h-16 w-16 text-gold mx-auto mb-4" />
              <h1 className="text-2xl font-bold text-white mb-4">Tu carrito está vacío</h1>
              <p className="text-white/70 mb-8">
                Agrega productos a tu carrito para continuar con el proceso de compra.
              </p>
              <Button asChild className="bg-gold hover:bg-gold/90 text-black">
                <Link href="/rifles">Ver Productos</Link>
              </Button>
            </div>
          </div>
        </main>

        <Footer />
        <ChatBubbles />
      </>
    )
  }

  // Si el pedido se ha completado, mostrar mensaje de confirmación
  if (orderCompleted) {
    return (
      <>
        <HeaderAnnouncement />
        <HeaderSearch />
        <HeaderMenu />
        <CartDrawer />

        <main className="py-12 bg-zinc-900">
          <div className="container mx-auto px-4">
            <div className="max-w-lg mx-auto text-center">
              <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Check className="h-8 w-8 text-white" />
              </div>
              <h1 className="text-2xl font-bold text-white mb-4">¡Pedido Enviado!</h1>
              <p className="text-white/70 mb-8">
                Tu pedido ha sido enviado correctamente. Te hemos redirigido a WhatsApp para finalizar la compra. Pronto
                nos pondremos en contacto contigo para coordinar el pago y el envío.
              </p>
              <Button asChild className="bg-gold hover:bg-gold/90 text-black">
                <Link href="/">Volver al Inicio</Link>
              </Button>
            </div>
          </div>
        </main>

        <Footer />
        <ChatBubbles />
      </>
    )
  }

  return (
    <>
      <HeaderAnnouncement />
      <HeaderSearch />
      <HeaderMenu />
      <CartDrawer />

      <main className="py-8 bg-zinc-900">
        <div className="container mx-auto px-4">
          <Breadcrumb
            items={[
              { label: "Inicio", href: "/" },
              { label: "Carrito", href: "#" },
              { label: "Checkout", href: "/checkout" },
            ]}
          />

          <h1 className="text-3xl font-bold text-white mb-8 mt-4">Checkout</h1>

          {/* Pasos del checkout */}
          <div className="flex justify-center mb-8">
            <div className="flex items-center">
              <div
                className={`w-10 h-10 rounded-full flex items-center justify-center ${step === 1 ? "bg-gold text-black" : "bg-gold text-black"}`}
              >
                <User className="h-5 w-5" />
              </div>
              <div className={`w-16 h-1 ${step >= 1 ? "bg-gold" : "bg-gray-600"}`}></div>
              <div
                className={`w-10 h-10 rounded-full flex items-center justify-center ${step === 2 ? "bg-gold text-black" : "bg-gray-600 text-white"}`}
              >
                <CreditCard className="h-5 w-5" />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Formulario de checkout */}
            <div className="lg:col-span-2">
              {step === 1 && (
                <div className="bg-black border border-gold/20 rounded-lg p-6">
                  <h2 className="text-xl font-bold text-white mb-6">Información de Contacto y Envío</h2>

                  {error && (
                    <div className="bg-red-500/20 border border-red-500 rounded-md p-4 mb-6 flex items-start gap-3">
                      <AlertCircle className="h-5 w-5 text-red-500 mt-0.5 flex-shrink-0" />
                      <p className="text-white">{error}</p>
                    </div>
                  )}

                  <div className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="firstName" className="text-white">
                          Nombre <span className="text-red-500">*</span>
                        </Label>
                        <Input
                          id="firstName"
                          name="firstName"
                          value={formData.firstName}
                          onChange={handleInputChange}
                          className="bg-zinc-800 border-gold/20 text-white"
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="lastName" className="text-white">
                          Apellido <span className="text-red-500">*</span>
                        </Label>
                        <Input
                          id="lastName"
                          name="lastName"
                          value={formData.lastName}
                          onChange={handleInputChange}
                          className="bg-zinc-800 border-gold/20 text-white"
                          required
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="email" className="text-white">
                          Email <span className="text-red-500">*</span>
                        </Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          className="bg-zinc-800 border-gold/20 text-white"
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="phone" className="text-white">
                          Teléfono <span className="text-red-500">*</span>
                        </Label>
                        <Input
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          className="bg-zinc-800 border-gold/20 text-white"
                          required
                        />
                      </div>
                    </div>

                    <div className="space-y-4">
                      <h3 className="text-lg font-medium text-white">Método de Envío</h3>
                      <RadioGroup value={selectedShipping} onValueChange={setSelectedShipping} className="space-y-3">
                        {shippingOptions.map((option) => (
                          <div
                            key={option.id}
                            className={`relative flex items-start border rounded-lg p-4 transition-all cursor-pointer ${
                              option.id === selectedShipping
                                ? "border-gold bg-gold/5"
                                : "border-white/20 hover:border-gold/50"
                            }`}
                            onClick={() => setSelectedShipping(option.id)}
                          >
                            <div className="ml-2 space-y-2 w-full">
                              <div className="flex justify-between items-start">
                                <label className="font-medium text-white flex items-center gap-2">
                                  <Truck className="h-4 w-4 text-gold" />
                                  {option.name}
                                </label>
                              </div>
                              <div className="text-sm text-white/60">
                                <p>Tiempo estimado: {option.estimatedDelivery}</p>
                                <p>{option.description}</p>
                              </div>
                            </div>
                          </div>
                        ))}
                      </RadioGroup>
                    </div>

                    <div className="space-y-4">
                      <h3 className="text-lg font-medium text-white">Método de Pago</h3>
                      <RadioGroup value={selectedPayment} onValueChange={setSelectedPayment} className="space-y-3">
                        {paymentOptions.map((option) => (
                          <div
                            key={option.id}
                            className={`relative flex items-start border rounded-lg p-4 transition-all cursor-pointer ${
                              option.id === selectedPayment
                                ? "border-gold bg-gold/5"
                                : "border-white/20 hover:border-gold/50"
                            }`}
                            onClick={() => setSelectedPayment(option.id)}
                          >
                            <div className="ml-2 space-y-2 w-full">
                              <div className="flex justify-between items-start">
                                <label className="font-medium text-white flex items-center gap-2">
                                  <CreditCard className="h-4 w-4 text-gold" />
                                  {option.name}
                                </label>
                              </div>
                              <div className="text-sm text-white/60">
                                <p>{option.description}</p>
                              </div>
                            </div>
                          </div>
                        ))}
                      </RadioGroup>
                    </div>

                    {selectedShipping !== "retiro-local" && (
                      <div className="space-y-4">
                        <h3 className="text-lg font-medium text-white">Dirección de Envío</h3>
                        <div className="space-y-2">
                          <Label htmlFor="address" className="text-white">
                            Dirección <span className="text-red-500">*</span>
                          </Label>
                          <Input
                            id="address"
                            name="address"
                            value={formData.address}
                            onChange={handleInputChange}
                            className="bg-zinc-800 border-gold/20 text-white"
                            required
                          />
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <Label htmlFor="city" className="text-white">
                              Ciudad <span className="text-red-500">*</span>
                            </Label>
                            <Input
                              id="city"
                              name="city"
                              value={formData.city}
                              onChange={handleInputChange}
                              className="bg-zinc-800 border-gold/20 text-white"
                              required
                            />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="province" className="text-white">
                              Provincia <span className="text-red-500">*</span>
                            </Label>
                            <Input
                              id="province"
                              name="province"
                              value={formData.province}
                              onChange={handleInputChange}
                              className="bg-zinc-800 border-gold/20 text-white"
                              required
                            />
                          </div>
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="postalCode" className="text-white">
                            Código Postal <span className="text-red-500">*</span>
                          </Label>
                          <Input
                            id="postalCode"
                            name="postalCode"
                            value={formData.postalCode}
                            onChange={handleInputChange}
                            className="bg-zinc-800 border-gold/20 text-white"
                            required
                          />
                        </div>
                      </div>
                    )}

                    <div className="space-y-2">
                      <Label htmlFor="notes" className="text-white">
                        Notas adicionales (opcional)
                      </Label>
                      <Textarea
                        id="notes"
                        name="notes"
                        value={formData.notes}
                        onChange={handleInputChange}
                        className="bg-zinc-800 border-gold/20 text-white"
                        rows={3}
                      />
                    </div>

                    <Button className="w-full bg-gold hover:bg-gold/90 text-black" onClick={handleNextStep}>
                      Continuar al Pago
                    </Button>
                  </div>
                </div>
              )}

              {step === 2 && (
                <div className="bg-black border border-gold/20 rounded-lg p-6">
                  <h2 className="text-xl font-bold text-white mb-6">Información de Pago</h2>

                  <div className="space-y-6">
                    <div className="bg-zinc-800/50 border border-gold/20 rounded-lg p-4">
                      <h3 className="text-lg font-medium text-white mb-4 flex items-center gap-2">
                        <CreditCard className="h-5 w-5 text-gold" />
                        Datos Bancarios para Transferencia
                      </h3>

                      <div className="space-y-3 text-white/80">
                        <p>
                          <span className="text-white font-medium">Cuenta:</span> {bankInfo.account}
                        </p>
                        <p>
                          <span className="text-white font-medium">CBU:</span> {bankInfo.cbu}
                        </p>
                        <p>
                          <span className="text-white font-medium">Alias:</span> {bankInfo.alias}
                        </p>
                        <p>
                          <span className="text-white font-medium">Titular:</span> {bankInfo.holder}
                        </p>
                        <p>
                          <span className="text-white font-medium">CUIT/CUIL:</span> {bankInfo.cuit}
                        </p>
                      </div>
                    </div>

                    <div className="bg-zinc-800/50 border border-gold/20 rounded-lg p-4">
                      <h3 className="text-lg font-medium text-white mb-4">Instrucciones</h3>
                      <ol className="space-y-2 text-white/80 list-decimal pl-5">
                        <li>Realiza la transferencia por el monto total de {formatPrice(totalWithShipping)}.</li>
                        <li>Una vez completada la transferencia, envíanos el comprobante por WhatsApp.</li>
                        <li>Procesaremos tu pedido y te notificaremos cuando sea enviado.</li>
                      </ol>
                    </div>

                    <div className="bg-zinc-800/50 border border-gold/20 rounded-lg p-4">
                      <h3 className="text-lg font-medium text-white mb-4">Resumen de Contacto</h3>
                      <div className="space-y-2 text-white/80">
                        <p className="flex items-center gap-2">
                          <User className="h-4 w-4 text-gold flex-shrink-0" />
                          {formData.firstName} {formData.lastName}
                        </p>
                        <p className="flex items-center gap-2">
                          <Mail className="h-4 w-4 text-gold flex-shrink-0" />
                          {formData.email}
                        </p>
                        <p className="flex items-center gap-2">
                          <Phone className="h-4 w-4 text-gold flex-shrink-0" />
                          {formData.phone}
                        </p>
                        {selectedShipping !== "retiro-local" && (
                          <p className="flex items-start gap-2">
                            <MapPin className="h-4 w-4 text-gold flex-shrink-0 mt-1" />
                            <span>
                              {formData.address}, {formData.city}, {formData.province} ({formData.postalCode})
                            </span>
                          </p>
                        )}
                        <p className="flex items-center gap-2">
                          <Truck className="h-4 w-4 text-gold flex-shrink-0" />
                          {getSelectedShippingOption().name}
                        </p>
                        <p className="flex items-center gap-2">
                          <CreditCard className="h-4 w-4 text-gold flex-shrink-0" />
                          {paymentOptions.find((option) => option.id === selectedPayment)?.name ||
                            "Transferencia Bancaria"}
                        </p>
                      </div>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4">
                      <Button
                        variant="outline"
                        className="flex-1 border-gold/30 text-gold hover:bg-gold/10"
                        onClick={handlePreviousStep}
                      >
                        Volver
                      </Button>
                      <Button className="flex-1 bg-gold hover:bg-gold/90 text-black" onClick={handleCompleteOrder}>
                        Finalizar Compra
                      </Button>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Resumen del pedido */}
            <div>
              <div className="bg-black border border-gold/20 rounded-lg p-6 sticky top-20">
                <h2 className="text-xl font-bold text-white mb-4">Resumen del Pedido</h2>

                <div className="space-y-4 mb-6">
                  {items.map((item, index) => (
                    <div key={`${item.id}-${item.caliber}-${index}`} className="flex gap-3">
                      <div className="relative w-16 h-16 bg-secondary/20 rounded-md overflow-hidden flex-shrink-0">
                        <Image
                          src={item.image || "/placeholder.svg"}
                          alt={item.name}
                          fill
                          className="object-cover"
                          sizes="64px"
                        />
                      </div>
                      <div className="flex-grow">
                        <h3 className="font-medium text-white text-sm">{item.name}</h3>
                        {item.caliber && <p className="text-xs text-muted-foreground">{item.caliber}</p>}
                        <div className="flex justify-between items-center mt-1">
                          <p className="text-xs text-muted-foreground">Cantidad: {item.quantity}</p>
                          <p className="font-bold text-gold text-sm">{formatPrice(item.price * item.quantity)}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <Separator className="my-4 bg-gold/20" />

                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-white/70">Subtotal</span>
                    <span className="text-white">{formatPrice(totalPrice)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-white/70">Envío</span>
                    <span className="text-white">A coordinar por WhatsApp</span>
                  </div>
                </div>

                <Separator className="my-4 bg-gold/20" />

                <div className="flex justify-between font-bold">
                  <span className="text-white">Total</span>
                  <span className="text-gold">{formatPrice(totalPrice)}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
      <ChatBubbles />
    </>
  )
}
