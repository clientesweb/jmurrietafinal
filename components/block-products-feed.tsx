import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"

interface Product {
  id: number
  name: string
  price?: string
  image: string
  link: string
}

interface BlockProductsFeedProps {
  title: string
  products: Product[]
  showMoreLink?: string
}

export function BlockProductsFeed({ title, products, showMoreLink }: BlockProductsFeedProps) {
  return (
    <section className="py-12 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">{title}</h2>

        <div className="block-products-feed__products">
          {products.map((product) => (
            <div key={product.id} className="block-products-feed__product">
              <div className="block-products-feed__product-wrapper">
                <div className="block-products-feed__product-media">
                  <Link href={product.link} className="block">
                    <Image
                      src={product.image || "/placeholder.svg"}
                      alt={`Producto - ${product.name}`}
                      width={400}
                      height={400}
                      className="block-products-feed__product-image"
                    />
                  </Link>
                </div>
                <h3 className="block-products-feed__product-name">
                  <Link href={product.link}>{product.name}</Link>
                </h3>
                {product.price && <p className="block-products-feed__product-price">{product.price}</p>}
              </div>
            </div>
          ))}
        </div>

        {showMoreLink && (
          <div className="flex justify-center mt-8">
            <Button asChild variant="default" className="font-cinzel">
              <Link href={showMoreLink}>VER MÁS</Link>
            </Button>
          </div>
        )}
      </div>
    </section>
  )
}
