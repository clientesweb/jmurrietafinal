"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Minus, Plus } from "lucide-react"

interface ProductQuantitySelectorProps {
  max?: number
  min?: number
  onQuantityChange: (quantity: number) => void
}

export function ProductQuantitySelector({ max = 99, min = 1, onQuantityChange }: ProductQuantitySelectorProps) {
  const [quantity, setQuantity] = useState(1)

  const increment = () => {
    if (quantity < max) {
      const newQuantity = quantity + 1
      setQuantity(newQuantity)
      onQuantityChange(newQuantity)
    }
  }

  const decrement = () => {
    if (quantity > min) {
      const newQuantity = quantity - 1
      setQuantity(newQuantity)
      onQuantityChange(newQuantity)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Number.parseInt(e.target.value)
    if (!isNaN(value)) {
      const newQuantity = Math.max(min, Math.min(max, value))
      setQuantity(newQuantity)
      onQuantityChange(newQuantity)
    }
  }

  return (
    <div className="space-y-2">
      <h3 className="text-lg font-medium">Cantidad</h3>
      <div className="flex items-center">
        <Button variant="outline" size="icon" onClick={decrement} disabled={quantity <= min} className="rounded-r-none">
          <Minus className="h-4 w-4" />
          <span className="sr-only">Reducir cantidad</span>
        </Button>
        <Input
          type="number"
          min={min}
          max={max}
          value={quantity}
          onChange={handleChange}
          className="w-16 text-center rounded-none border-x-0"
        />
        <Button variant="outline" size="icon" onClick={increment} disabled={quantity >= max} className="rounded-l-none">
          <Plus className="h-4 w-4" />
          <span className="sr-only">Aumentar cantidad</span>
        </Button>
      </div>
    </div>
  )
}
