import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export const formatPrice = (price: number) => {
  return new Intl.NumberFormat("es-AR", {
    style: "currency",
    currency: "ARS",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(price)
}

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
