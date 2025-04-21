import Link from "next/link"
import { ChevronRight, Home } from "lucide-react"

interface BreadcrumbItem {
  label: string
  href: string
}

interface BreadcrumbProps {
  items: BreadcrumbItem[]
}

export function Breadcrumb({ items }: BreadcrumbProps) {
  return (
    <nav aria-label="Breadcrumb" className="mb-4">
      <ol className="flex items-center flex-wrap gap-1 text-sm text-muted-foreground">
        <li className="flex items-center">
          <Link href="/" className="flex items-center hover:text-primary transition-colors">
            <Home className="h-4 w-4" />
            <span className="sr-only">Inicio</span>
          </Link>
        </li>
        <li>
          <ChevronRight className="h-4 w-4" />
        </li>
        {items.map((item, index) => (
          <li key={index} className="flex items-center">
            {index < items.length - 1 ? (
              <>
                <Link href={item.href} className="hover:text-primary transition-colors">
                  {item.label}
                </Link>
                <ChevronRight className="h-4 w-4 mx-1" />
              </>
            ) : (
              <span className="font-medium text-foreground">{item.label}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  )
}
