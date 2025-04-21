import type React from "react"
import type { Metadata, Viewport } from "next"
import { Cinzel_Decorative, Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { CartProvider } from "@/context/cart-context"
import ServiceWorkerRegister from "./sw-register"
import Analytics from "@/components/analytics"
import Script from "next/script"
import { Suspense } from "react"

// Optimizar la carga de fuentes
const cinzel = Cinzel_Decorative({
  subsets: ["latin"],
  weight: ["400", "700", "900"],
  variable: "--font-cinzel",
  display: "swap",
})

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
})

// Metadatos SEO mejorados
export const metadata: Metadata = {
  title: {
    default: "J. Murrieta - Rifles PCP de Precisión",
    template: "%s | J. Murrieta PCP",
  },
  description:
    "Rifles PCP de alta precisión fabricados en Argentina. Calidad y rendimiento superior para tiro deportivo y caza.",
  keywords: ["rifles pcp", "armas de aire comprimido", "tiro deportivo", "caza", "rifles de precisión", "J. Murrieta"],
  authors: [{ name: "J. Murrieta" }],
  creator: "J. Murrieta",
  publisher: "J. Murrieta",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://jmurrietapcp.com"),
  alternates: {
    canonical: "/",
    languages: {
      "es-AR": "/es-ar",
    },
  },
  openGraph: {
    title: "J. Murrieta - Rifles PCP de Precisión",
    description:
      "Rifles PCP de alta precisión fabricados en Argentina. Calidad y rendimiento superior para tiro deportivo y caza.",
    url: "https://jmurrietapcp.com",
    siteName: "J. Murrieta PCP",
    locale: "es_AR",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "J. Murrieta - Rifles PCP de Precisión",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "J. Murrieta - Rifles PCP de Precisión",
    description:
      "Rifles PCP de alta precisión fabricados en Argentina. Calidad y rendimiento superior para tiro deportivo y caza.",
    creator: "@jmurrietapcp",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  manifest: "/site.webmanifest",
  generator: "v0.dev",
}

// Configuración de viewport y theme-color
export const viewport: Viewport = {
  themeColor: "#1a1a1a", // Color oscuro que coincide con el tema de la web
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  colorScheme: "dark",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" suppressHydrationWarning className="scroll-smooth">
      <head>
        {/* Preconectar a dominios externos para mejorar el rendimiento */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />

        {/* Precargar recursos críticos */}
        <link rel="preload" as="image" href="/images/logo.png" />

        {/* Metadatos para PWA */}
        <meta name="application-name" content="J. Murrieta PCP" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="apple-mobile-web-app-title" content="J. Murrieta PCP" />
        <meta name="mobile-web-app-capable" content="yes" />
      </head>
      <body className={`${cinzel.variable} ${inter.variable} font-sans antialiased dark`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false} disableTransitionOnChange>
          <CartProvider>
            <Suspense>{children}</Suspense>
          </CartProvider>
        </ThemeProvider>

        {/* Script para mejorar el rendimiento */}
        <Script id="performance-optimization" strategy="afterInteractive">
          {`
            // Función para cargar recursos no críticos después de la carga inicial
            function loadNonCriticalResources() {
              // Cargar fuentes adicionales, scripts, etc.
              console.log('Cargando recursos no críticos...');
            }
            
            // Usar requestIdleCallback o setTimeout como fallback
            if ('requestIdleCallback' in window) {
              requestIdleCallback(loadNonCriticalResources);
            } else {
              setTimeout(loadNonCriticalResources, 2000);
            }
          `}
        </Script>

        <ServiceWorkerRegister />
        <Analytics />
      </body>
    </html>
  )
}
