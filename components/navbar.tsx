"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X, ShoppingCart } from "lucide-react"
import { Button } from "@/components/ui/button"
// ModeToggle eliminado
import { useCart } from "@/context/cart-context"

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const { totalItems, setIsCartOpen } = useCart()

  return (
    <header
      className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60"
      role="banner"
    >
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center gap-2" aria-label="J. Murrieta - Página de inicio">
          <Image src="/images/logo.png" alt="J. Murrieta" width={120} height={40} className="h-auto w-auto" />
        </Link>

        <nav className="hidden md:flex gap-6 items-center" aria-label="Navegación principal">
          <Link href="/" className="text-sm font-medium transition-colors hover:text-primary focus-visible">
            Inicio
          </Link>
          <Link href="/rifles" className="text-sm font-medium transition-colors hover:text-primary focus-visible">
            Rifles
          </Link>
          <Link href="/accesorios" className="text-sm font-medium transition-colors hover:text-primary focus-visible">
            Accesorios
          </Link>
          <Link href="/contacto" className="text-sm font-medium transition-colors hover:text-primary focus-visible">
            Contacto
          </Link>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsCartOpen(true)}
            aria-label={`Carrito de compras, ${totalItems} productos`}
            className="relative"
          >
            <ShoppingCart className="h-5 w-5" />
            {totalItems > 0 && (
              <span
                className="absolute -top-1 -right-1 bg-gold text-black text-xs rounded-full h-5 w-5 flex items-center justify-center"
                aria-hidden="true"
              >
                {totalItems}
              </span>
            )}
          </Button>
        </nav>

        <div className="flex md:hidden items-center gap-4">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsCartOpen(true)}
            aria-label={`Carrito de compras, ${totalItems} productos`}
            className="relative"
          >
            <ShoppingCart className="h-5 w-5" />
            {totalItems > 0 && (
              <span
                className="absolute -top-1 -right-1 bg-gold text-black text-xs rounded-full h-5 w-5 flex items-center justify-center"
                aria-hidden="true"
              >
                {totalItems}
              </span>
            )}
          </Button>
          {/* ModeToggle eliminado */}
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsOpen(!isOpen)}
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
            aria-label="Menú móvil"
          >
            <Menu className="h-5 w-5" />
            <span className="sr-only">Menú</span>
          </Button>
        </div>
      </div>

      {isOpen && (
        <div className="fixed inset-0 z-50 bg-background md:hidden" id="mobile-menu" role="dialog" aria-modal="true">
          <div className="container flex h-16 items-center justify-between">
            <Link href="/" className="flex items-center gap-2" aria-label="J. Murrieta - Página de inicio">
              <Image src="/images/logo.png" alt="J. Murrieta" width={120} height={40} className="h-auto w-auto" />
            </Link>
            <Button variant="ghost" size="icon" onClick={() => setIsOpen(false)} aria-label="Cerrar menú">
              <X className="h-5 w-5" />
              <span className="sr-only">Cerrar</span>
            </Button>
          </div>
          <nav className="container grid gap-6 py-6" aria-label="Menú móvil">
            <Link
              href="/"
              className="text-lg font-medium transition-colors hover:text-primary focus-visible"
              onClick={() => setIsOpen(false)}
            >
              Inicio
            </Link>
            <Link
              href="/rifles"
              className="text-lg font-medium transition-colors hover:text-primary focus-visible"
              onClick={() => setIsOpen(false)}
            >
              Rifles
            </Link>
            <Link
              href="/accesorios"
              className="text-lg font-medium transition-colors hover:text-primary focus-visible"
              onClick={() => setIsOpen(false)}
            >
              Accesorios
            </Link>
            <Link
              href="/contacto"
              className="text-lg font-medium transition-colors hover:text-primary focus-visible"
              onClick={() => setIsOpen(false)}
            >
              Contacto
            </Link>
          </nav>
        </div>
      )}
    </header>
  )
}
