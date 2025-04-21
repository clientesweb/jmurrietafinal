import { Check } from "lucide-react"

interface ProductFeaturesProps {
  features: string[]
}

export function ProductFeatures({ features }: ProductFeaturesProps) {
  return (
    <div className="space-y-4">
      <h3 className="text-xl font-bold">
        Características <span className="text-gold-gradient">Destacadas</span>
      </h3>
      <ul className="space-y-2">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start gap-2">
            <Check className="h-5 w-5 text-gold flex-shrink-0 mt-0.5" />
            <span>{feature}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}
