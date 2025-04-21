import { Star } from "lucide-react"

interface ProductReviewsProps {
  rating: number
  count: number
}

export function ProductReviews({ rating, count }: ProductReviewsProps) {
  // Generate an array of 5 stars
  const stars = Array.from({ length: 5 }, (_, i) => {
    // Full star if rating >= i+1
    // Half star if rating >= i+0.5 but < i+1
    // Empty star if rating < i+0.5
    if (rating >= i + 1) return "full"
    if (rating >= i + 0.5) return "half"
    return "empty"
  })

  return (
    <div className="flex items-center gap-2">
      <div className="flex">
        {stars.map((type, index) => (
          <Star
            key={index}
            className={`h-4 w-4 ${
              type === "full"
                ? "text-yellow-400 fill-yellow-400"
                : type === "half"
                  ? "text-yellow-400 fill-gradient"
                  : "text-muted-foreground"
            }`}
          />
        ))}
      </div>
      <span className="text-sm text-muted-foreground">
        {rating.toFixed(1)} ({count} reseñas)
      </span>
    </div>
  )
}
