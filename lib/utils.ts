import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export const formatPrice = (amount: number) => {
  return (amount / 100).toFixed(2)
}

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
