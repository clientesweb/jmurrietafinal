import { HeaderAnnouncement } from "@/components/header-announcement"
import { HeaderSearch } from "@/components/header-search"
import { HeaderMenu } from "@/components/header-menu"
import { Footer } from "@/components/footer"
import { Breadcrumb } from "@/components/breadcrumb"

export default function AccesorioLoading() {
  return (
    <>
      <HeaderAnnouncement />
      <HeaderSearch />
      <HeaderMenu />

      <main className="bg-zinc-900 pb-16">
        <div className="container mx-auto px-4 py-8">
          <Breadcrumb
            items={[
              { label: "Inicio", href: "/" },
              { label: "Accesorios", href: "/accesorios" },
              { label: "Cargando...", href: "#" },
            ]}
          />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-8">
            <div className="aspect-square bg-zinc-800 animate-pulse rounded-lg"></div>
            <div>
              <div className="h-10 bg-zinc-800 animate-pulse rounded-md mb-4 w-3/4"></div>
              <div className="h-8 bg-zinc-800 animate-pulse rounded-md mb-6 w-1/4"></div>

              <div className="h-24 bg-zinc-800 animate-pulse rounded-md mb-8"></div>

              <div className="mt-8">
                <div className="h-6 bg-zinc-800 animate-pulse rounded-md mb-4 w-1/2"></div>
                <div className="space-y-2">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <div key={i} className="h-4 bg-zinc-800 animate-pulse rounded-md w-full"></div>
                  ))}
                </div>
              </div>

              <div className="mt-8">
                <div className="h-12 bg-zinc-800 animate-pulse rounded-md mb-4"></div>
                <div className="h-12 bg-zinc-800 animate-pulse rounded-md"></div>
              </div>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 py-12">
          <div className="h-8 bg-zinc-800 animate-pulse rounded-md mb-8 w-1/3"></div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="bg-zinc-800 animate-pulse rounded-lg aspect-square"></div>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </>
  )
}
