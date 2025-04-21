"use client"

import { useState } from "react"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { formatPrice } from "@/lib/utils"

export interface ProductVariant {
  id: string
  name: string
  price: number
  basePrice: number
  additionalPrice: number
  specs: {
    velocity: string
    autonomy: string
  }
  inStock: boolean
}

interface ProductVariantSelectorProps {
  variants: ProductVariant[]
  onVariantChange: (variant: ProductVariant) => void
}

export function ProductVariantSelector({ variants, onVariantChange }: ProductVariantSelectorProps) {
  const [selectedVariantId, setSelectedVariantId] = useState(variants[0]?.id || "")

  const handleVariantChange = (variantId: string) => {
    setSelectedVariantId(variantId)
    const selectedVariant = variants.find((v) => v.id === variantId)
    if (selectedVariant) {
      onVariantChange(selectedVariant)
    }
  }

  return (
    <div className="space-y-4">
      <h3 className="text-lg font-medium">
        Seleccionar <span className="text-gold">Calibre</span>
      </h3>
      <RadioGroup value={selectedVariantId} onValueChange={handleVariantChange} className="space-y-3">
        {variants.map((variant) => (
          <div
            key={variant.id}
            className={`relative flex items-start border rounded-lg p-4 transition-all ${
              selectedVariantId === variant.id
                ? "border-gold bg-gold/5 gold-shadow"
                : "border-border hover:border-gold/50"
            }`}
          >
            <RadioGroupItem
              value={variant.id}
              id={variant.id}
              className="absolute top-4 left-4"
              disabled={!variant.inStock}
            />
            <div className="ml-8 space-y-2 w-full">
              <div className="flex justify-between items-start">
                <Label
                  htmlFor={variant.id}
                  className={`font-medium ${!variant.inStock ? "text-muted-foreground" : ""}`}
                >
                  {variant.name}
                </Label>
                <div className="text-right">
                  <div className="font-semibold">
                    {formatPrice(variant.price)}
                    {variant.additionalPrice > 0 && (
                      <span className="text-sm text-muted-foreground ml-1">
                        (+{formatPrice(variant.additionalPrice)})
                      </span>
                    )}
                  </div>
                </div>
              </div>
              <div className="text-sm text-muted-foreground space-y-1">
                <p>
                  Velocidad: <span className="text-gold">{variant.specs.velocity}</span>
                </p>
                <p>
                  Autonomía: <span className="text-gold">{variant.specs.autonomy}</span>
                </p>
              </div>
              {!variant.inStock && <div className="text-sm font-medium text-destructive">Agotado</div>}
            </div>
          </div>
        ))}
      </RadioGroup>
    </div>
  )
}
