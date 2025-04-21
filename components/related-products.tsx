import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { formatPrice } from "@/lib/utils"

interface RelatedProduct {
  id: string
  name: string
  slug: string
  price: number
  image: string
  category: string
}

interface RelatedProductsProps {
  products: RelatedProduct[]
  title?: string
}

export function RelatedProducts({ products, title = "Productos relacionados" }: RelatedProductsProps) {
  if (products.length === 0) return null

  return (
    <section className="py-12">
      <div className="container">
        <h2 className="text-2xl font-bold mb-8">{title}</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <div key={product.id} className="group">
              <div className="relative aspect-square">
                <Image
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
              </div>
              <h3 className="font-medium line-clamp-2 mb-1">
                <Link href={`/${product.category}/${product.slug}`} className="hover:text-primary transition-colors">
                  {product.name}
                </Link>
              </h3>
              <p className="font-bold text-lg mb-3">{formatPrice(product.price)}</p>
              <Button asChild variant="outline" className="w-full">
                <Link href={`/${product.category}/${product.slug}`}>Ver detalles</Link>
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
