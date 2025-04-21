import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Home } from "lucide-react"

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4 py-16 text-center bg-gray-50 dark:bg-gray-900">
      <div className="max-w-md mx-auto">
        <h1 className="mb-4 text-6xl font-bold text-gray-900 dark:text-white">404</h1>
        <h2 className="mb-8 text-2xl font-medium text-gray-600 dark:text-gray-300">Página no encontrada</h2>
        <p className="mb-8 text-gray-500 dark:text-gray-400">
          Lo sentimos, la página que estás buscando no existe o ha sido movida.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Button asChild variant="outline" className="flex items-center gap-2">
            <Link href="/">
              <Home className="w-4 h-4" />
              Ir al inicio
            </Link>
          </Button>
          <Button asChild className="flex items-center gap-2">
            <Link href="/rifles">
              <ArrowLeft className="w-4 h-4" />
              Ver rifles
            </Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
