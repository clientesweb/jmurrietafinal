"use client"

import { createContext, useContext, useState, useEffect, type ReactNode } from "react"

export interface CartItem {
  id: string
  name: string
  price: number
  quantity: number
  image: string
  caliber?: string
  slug: string
  category: string
}

interface CartContextType {
  items: CartItem[]
  addItem: (item: CartItem) => void
  removeItem: (id: string, caliber?: string) => void
  updateQuantity: (id: string, quantity: number, caliber?: string) => void
  clearCart: () => void
  isCartOpen: boolean
  setIsCartOpen: (isOpen: boolean) => void
  totalItems: number
  totalPrice: number
}

const CartContext = createContext<CartContextType | undefined>(undefined)

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([])
  const [isCartOpen, setIsCartOpen] = useState(false)
  const [isInitialized, setIsInitialized] = useState(false)

  // Cargar carrito desde localStorage al iniciar
  useEffect(() => {
    const storedCart = localStorage.getItem("jmurrieta-cart")
    if (storedCart) {
      try {
        setItems(JSON.parse(storedCart))
      } catch (error) {
        console.error("Error parsing cart from localStorage:", error)
        setItems([])
      }
    }
    setIsInitialized(true)
  }, [])

  // Guardar carrito en localStorage cuando cambia
  useEffect(() => {
    if (isInitialized) {
      localStorage.setItem("jmurrieta-cart", JSON.stringify(items))
    }
  }, [items, isInitialized])

  // Calcular total de items
  const totalItems = items.reduce((total, item) => total + item.quantity, 0)

  // Calcular precio total
  const totalPrice = items.reduce((total, item) => total + item.price * item.quantity, 0)

  // Agregar item al carrito
  const addItem = (newItem: CartItem) => {
    setItems((prevItems) => {
      // Verificar si el item ya existe (mismo id y calibre)
      const existingItemIndex = prevItems.findIndex(
        (item) => item.id === newItem.id && item.caliber === newItem.caliber,
      )

      if (existingItemIndex !== -1) {
        // Si existe, actualizar la cantidad
        const updatedItems = [...prevItems]
        updatedItems[existingItemIndex].quantity += newItem.quantity
        return updatedItems
      } else {
        // Si no existe, agregar nuevo item
        return [...prevItems, newItem]
      }
    })
    // Abrir el carrito al agregar un item
    setIsCartOpen(true)
  }

  // Eliminar item del carrito
  const removeItem = (id: string, caliber?: string) => {
    setItems((prevItems) => prevItems.filter((item) => !(item.id === id && item.caliber === caliber)))
  }

  // Actualizar cantidad de un item
  const updateQuantity = (id: string, quantity: number, caliber?: string) => {
    if (quantity <= 0) {
      removeItem(id, caliber)
      return
    }

    setItems((prevItems) =>
      prevItems.map((item) => (item.id === id && item.caliber === caliber ? { ...item, quantity } : item)),
    )
  }

  // Limpiar carrito
  const clearCart = () => {
    setItems([])
  }

  return (
    <CartContext.Provider
      value={{
        items,
        addItem,
        removeItem,
        updateQuantity,
        clearCart,
        isCartOpen,
        setIsCartOpen,
        totalItems,
        totalPrice,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

export function useCart() {
  const context = useContext(CartContext)
  if (context === undefined) {
    throw new Error("useCart must be used within a CartProvider")
  }
  return context
}
