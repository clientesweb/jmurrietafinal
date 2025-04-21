/// <reference lib="webworker" />

// Versión del cache
const CACHE_VERSION = "v1"
const CACHE_NAME = `jmurrieta-cache-${CACHE_VERSION}`

// Recursos a cachear inicialmente
const INITIAL_CACHED_RESOURCES = [
  "/",
  "/index.html",
  "/site.webmanifest",
  "/favicon.ico",
  "/images/logo.png",
  "/images/logo-murrieta.png",
  "/images/hero-banner.jpg",
]

// Tipos de archivos a cachear
const CACHEABLE_FILE_TYPES = ["html", "css", "js", "json", "png", "jpg", "jpeg", "svg", "webp", "woff", "woff2", "ttf"]

// Instalación del Service Worker
self.addEventListener("install", (event: ExtendableEvent) => {
  event.waitUntil(
    caches
      .open(CACHE_NAME)
      .then((cache) => {
        return cache.addAll(INITIAL_CACHED_RESOURCES)
      })
      .then(() => {
        return (self as any).skipWaiting()
      }),
  )
})

// Activación del Service Worker
self.addEventListener("activate", (event: ExtendableEvent) => {
  event.waitUntil(
    caches
      .keys()
      .then((cacheNames) => {
        return Promise.all(
          cacheNames
            .filter((cacheName) => {
              return cacheName.startsWith("jmurrieta-cache-") && cacheName !== CACHE_NAME
            })
            .map((cacheName) => {
              return caches.delete(cacheName)
            }),
        )
      })
      .then(() => {
        return (self as any).clients.claim()
      }),
  )
})

// Estrategia de caché: Network first, fallback to cache
self.addEventListener("fetch", (event: FetchEvent) => {
  // No interceptar peticiones a la API o analytics
  if (
    event.request.url.includes("/api/") ||
    event.request.url.includes("analytics") ||
    event.request.url.includes("google-analytics")
  ) {
    return
  }

  // Verificar si el tipo de archivo es cacheable
  const url = new URL(event.request.url)
  const extension = url.pathname.split(".").pop() || ""
  const isCacheableFileType = CACHEABLE_FILE_TYPES.includes(extension)

  // Estrategia para archivos cacheables
  if (isCacheableFileType) {
    event.respondWith(
      fetch(event.request)
        .then((response) => {
          // Clonar la respuesta para guardarla en caché
          const responseToCache = response.clone()

          caches.open(CACHE_NAME).then((cache) => {
            cache.put(event.request, responseToCache)
          })

          return response
        })
        .catch(() => {
          // Si falla la red, intentar desde caché
          return caches.match(event.request)
        }),
    )
  } else {
    // Para otros recursos, intentar desde la red primero
    event.respondWith(
      fetch(event.request).catch(() => {
        return caches.match(event.request)
      }),
    )
  }
})

// Sincronización en segundo plano
self.addEventListener("sync", (event: SyncEvent) => {
  if (event.tag === "sync-cart") {
    event.waitUntil(syncCart())
  }
})

// Función para sincronizar el carrito
async function syncCart() {
  // Aquí iría la lógica para sincronizar el carrito cuando vuelve la conexión
  console.log("Sincronizando carrito...")
}

export {}
