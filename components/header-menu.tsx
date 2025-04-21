"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X, ShoppingCart } from "lucide-react"
import { useCart } from "@/context/cart-context"

export function HeaderMenu() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const { totalItems, setIsCartOpen } = useCart()

  return (
    <>
      <div className="header-menu h-16">
        <div className="container mx-auto px-4 h-full">
          {/* Desktop Menu */}
          <nav className="hidden md:flex items-center justify-between h-full">
            <ul className="flex items-center">
              <li className="desktop-list__item">
                <Link href="/" className="desktop-list__link font-cinzel">
                  Inicio
                </Link>
              </li>
              <li className="desktop-list__item">
                <Link href="/productos" className="desktop-list__link font-cinzel">
                  Productos <i className="fas fa-chevron-down ml-1 text-xs"></i>
                </Link>
                <ul className="nav first">
                  <li className="desktop-list__subitem">
                    <Link href="/rifles" className="desktop-list__link font-cinzel">
                      Rifles
                    </Link>
                  </li>
                  <li className="desktop-list__subitem">
                    <Link href="/accesorios" className="desktop-list__link font-cinzel">
                      Accesorios
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="desktop-list__item">
                <Link href="/historia" className="desktop-list__link font-cinzel">
                  Historia
                </Link>
              </li>
            </ul>

            <div className="flex items-center justify-center">
              <Link href="/" className="block">
                <Image src="/images/logo.png" alt="J. Murrieta" width={120} height={40} className="h-auto" />
              </Link>
            </div>

            <ul className="flex items-center">
              <li className="desktop-list__item">
                <Link href="/contacto" className="desktop-list__link font-cinzel">
                  Contacto
                </Link>
              </li>
              <li className="desktop-list__item">
                <Link href="/faq" className="desktop-list__link font-cinzel">
                  Faqs
                </Link>
              </li>
              <li className="desktop-list__item">
                <Link href="/blog" className="desktop-list__link font-cinzel">
                  Blog
                </Link>
              </li>
              <li className="desktop-list__item">
                <button className="desktop-list__link relative" onClick={() => setIsCartOpen(true)}>
                  <ShoppingCart className="h-5 w-5" />
                  {totalItems > 0 && (
                    <span className="absolute -top-1 -right-1 bg-gold text-black text-xs rounded-full h-5 w-5 flex items-center justify-center">
                      {totalItems}
                    </span>
                  )}
                </button>
              </li>
            </ul>
          </nav>

          {/* Mobile Menu */}
          <div className="md:hidden flex items-center justify-between h-full">
            <button onClick={() => setMobileMenuOpen(true)} aria-label="Abrir menú">
              <Menu className="h-6 w-6" />
            </button>

            <Link href="/" className="block">
              <Image src="/images/logo.png" alt="J. Murrieta" width={100} height={30} className="h-auto" />
            </Link>

            <div className="flex items-center gap-3">
              <button className="relative" aria-label="Carrito" onClick={() => setIsCartOpen(true)}>
                <ShoppingCart className="h-5 w-5" />
                {totalItems > 0 && (
                  <span className="absolute -top-1 -right-1 bg-gold text-black text-xs rounded-full h-5 w-5 flex items-center justify-center">
                    {totalItems}
                  </span>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu Sidebar */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 bg-background z-50 md:hidden">
          <div className="container mx-auto px-4 py-4 flex justify-between items-center">
            <Link href="/" className="block">
              <Image src="/images/logo.png" alt="J. Murrieta" width={100} height={30} className="h-auto" />
            </Link>
            <button onClick={() => setMobileMenuOpen(false)} aria-label="Cerrar menú">
              <X className="h-6 w-6" />
            </button>
          </div>
          <nav className="container mx-auto px-4 py-6">
            <ul className="space-y-4">
              <li className="mobile-menu-sidenav__list-item">
                <Link
                  href="/"
                  className="mobile-menu-sidenav__item-link font-cinzel"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Inicio
                </Link>
              </li>
              <li className="mobile-menu-sidenav__list-item">
                <Link
                  href="/productos"
                  className="mobile-menu-sidenav__item-link font-cinzel"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Productos
                </Link>
              </li>
              <li className="mobile-menu-sidenav__list-item pl-4">
                <Link
                  href="/rifles"
                  className="mobile-menu-sidenav__item-link font-cinzel"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Rifles
                </Link>
              </li>
              <li className="mobile-menu-sidenav__list-item pl-4">
                <Link
                  href="/accesorios"
                  className="mobile-menu-sidenav__item-link font-cinzel"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Accesorios
                </Link>
              </li>
              <li className="mobile-menu-sidenav__list-item">
                <Link
                  href="/historia"
                  className="mobile-menu-sidenav__item-link font-cinzel"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Historia
                </Link>
              </li>
              <li className="mobile-menu-sidenav__list-item">
                <Link
                  href="/contacto"
                  className="mobile-menu-sidenav__item-link font-cinzel"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Contacto
                </Link>
              </li>
              <li className="mobile-menu-sidenav__list-item">
                <Link
                  href="/faq"
                  className="mobile-menu-sidenav__item-link font-cinzel"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Faqs
                </Link>
              </li>
              <li className="mobile-menu-sidenav__list-item">
                <Link
                  href="/blog"
                  className="mobile-menu-sidenav__item-link font-cinzel"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Blog
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      )}
    </>
  )
}
