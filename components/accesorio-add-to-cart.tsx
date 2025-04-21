"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { ShoppingCart } from "lucide-react"
import { useCart } from "@/context/cart-context"
import { ProductQuantitySelector } from "@/components/product-quantity-selector"

interface Accesorio {
  id: string
  name: string
  price: number
  image: string
  slug: string
}

interface AccesorioAddToCartProps {
  accesorio: Accesorio
}

export function AccesorioAddToCart({ accesorio }: AccesorioAddToCartProps) {
  const [quantity, setQuantity] = useState(1)
  const { addItem } = useCart()

  const handleAddToCart = () => {
    addItem({
      id: accesorio.id,
      name: accesorio.name,
      price: accesorio.price,
      quantity: quantity,
      image: accesorio.image,
      slug: accesorio.slug,
      category: "accesorios",
    })
  }

  return (
    <>
      <ProductQuantitySelector max={10} min={1} onQuantityChange={(newQuantity) => setQuantity(newQuantity)} />
      <Button className="w-full mt-4 bg-gold hover:bg-gold/90 text-black" onClick={handleAddToCart}>
        <ShoppingCart className="mr-2 h-5 w-5" /> Agregar al carrito
      </Button>
    </>
  )
}
