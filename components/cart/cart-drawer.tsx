"use client"

import { useCart } from "@/context/cart-context"
import { formatPrice } from "@/lib/utils"
import { X, ShoppingCart } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { useEffect } from "react"

export function CartDrawer() {
  const { items, removeItem, updateQuantity, isCartOpen, setIsCartOpen, totalItems, totalPrice } = useCart()

  // Cerrar el carrito cuando se presiona Escape
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsCartOpen(false)
      }
    }

    if (isCartOpen) {
      document.addEventListener("keydown", handleEscape)
      // Bloquear scroll del body cuando el carrito está abierto
      document.body.style.overflow = "hidden"
    }

    return () => {
      document.removeEventListener("keydown", handleEscape)
      // Restaurar scroll del body cuando el carrito se cierra
      document.body.style.overflow = ""
    }
  }, [isCartOpen, setIsCartOpen])

  return (
    <>
      {/* Overlay */}
      {isCartOpen && (
        <div className="fixed inset-0 bg-black/50 z-40" onClick={() => setIsCartOpen(false)} aria-hidden="true"></div>
      )}

      {/* Drawer */}
      <div
        className={`fixed top-0 right-0 z-50 h-full w-full max-w-md bg-background shadow-lg transform transition-transform duration-300 ${
          isCartOpen ? "translate-x-0" : "translate-x-full"
        }`}
        role="dialog"
        aria-modal="true"
        aria-labelledby="cart-title"
      >
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="p-4 border-b border-gold/20 flex items-center justify-between">
            <h2 id="cart-title" className="text-xl font-bold flex items-center">
              <ShoppingCart className="mr-2 h-5 w-5 text-gold" />
              Tu Carrito
              {totalItems > 0 && <span className="ml-2 text-sm text-gold">({totalItems})</span>}
            </h2>
            <Button variant="ghost" size="icon" onClick={() => setIsCartOpen(false)} aria-label="Cerrar carrito">
              <X className="h-5 w-5" />
              <span className="sr-only">Cerrar</span>
            </Button>
          </div>

          {/* Content */}
          <div className="flex-grow overflow-auto p-4">
            {items.length === 0 ? (
              <div className="flex flex-col items-center justify-center h-full text-center">
                <ShoppingCart className="h-16 w-16 text-muted-foreground mb-4" />
                <h3 className="text-lg font-medium mb-2">Tu carrito está vacío</h3>
                <p className="text-muted-foreground mb-6">Agrega productos para comenzar tu compra</p>
                <Button asChild className="bg-gold hover:bg-gold/90 text-black">
                  <Link href="/rifles" onClick={() => setIsCartOpen(false)}>
                    Ver Productos
                  </Link>
                </Button>
              </div>
            ) : (
              <div className="space-y-4">
                {items.map((item, index) => (
                  <div key={`${item.id}-${item.caliber}-${index}`} className="flex gap-4 pb-4 border-b border-gold/10">
                    <div className="relative w-20 h-20 bg-secondary/20 rounded-md overflow-hidden flex-shrink-0">
                      <Image
                        src={item.image || "/placeholder.svg"}
                        alt={item.name}
                        fill
                        className="object-cover"
                        sizes="80px"
                      />
                    </div>
                    <div className="flex-grow">
                      <div className="flex justify-between">
                        <Link
                          href={`/${item.category}/${item.slug}`}
                          className="font-medium hover:text-gold transition-colors"
                          onClick={() => setIsCartOpen(false)}
                        >
                          {item.name}
                        </Link>
                        <Button
                          variant="ghost"
                          size="icon"
                          className="h-6 w-6"
                          onClick={() => removeItem(item.id, item.caliber)}
                        >
                          <X className="h-4 w-4" />
                          <span className="sr-only">Eliminar</span>
                        </Button>
                      </div>
                      {item.caliber && <p className="text-sm text-muted-foreground">{item.caliber}</p>}
                      <div className="flex justify-between items-center mt-2">
                        <div className="flex items-center border border-gold/20 rounded-md">
                          <Button
                            variant="ghost"
                            size="icon"
                            className="h-8 w-8 rounded-none"
                            onClick={() => updateQuantity(item.id, item.quantity - 1, item.caliber)}
                          >
                            <span className="font-bold">-</span>
                            <span className="sr-only">Reducir cantidad</span>
                          </Button>
                          <span className="w-8 text-center">{item.quantity}</span>
                          <Button
                            variant="ghost"
                            size="icon"
                            className="h-8 w-8 rounded-none"
                            onClick={() => updateQuantity(item.id, item.quantity + 1, item.caliber)}
                          >
                            <span className="font-bold">+</span>
                            <span className="sr-only">Aumentar cantidad</span>
                          </Button>
                        </div>
                        <p className="font-bold text-gold">{formatPrice(item.price * item.quantity)}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Footer */}
          {items.length > 0 && (
            <div className="p-4 border-t border-gold/20">
              <div className="flex justify-between mb-4">
                <span className="font-medium">Subtotal</span>
                <span className="font-bold text-gold">{formatPrice(totalPrice)}</span>
              </div>
              <p className="text-sm text-muted-foreground mb-4">Los costos de envío se calcularán en el checkout</p>
              <div className="space-y-2">
                <Button asChild className="w-full bg-gold hover:bg-gold/90 text-black">
                  <Link href="/checkout" onClick={() => setIsCartOpen(false)}>
                    Proceder al Checkout
                  </Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  className="w-full border-gold/30 text-gold hover:bg-gold/10 hover:text-gold"
                >
                  <Link href="/rifles" onClick={() => setIsCartOpen(false)}>
                    Continuar Comprando
                  </Link>
                </Button>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  )
}
