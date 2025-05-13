import RifleBullpupPageClient from "./rifle-bullpup-page-client"

// Añadir metadatos específicos para la página del rifle Bullpup
export const metadata = {
  title: "J. MURRIETA MOD. BULLPUP | Compacto y Potente",
  description:
    "El J. MURRIETA MOD. BULLPUP, diseño compacto con potencia y precisión excepcionales. Cañón estriado de 550mm con paso de estría 1/20 una en veinte pulgadas. Disponible en diferentes calibres y opciones de culata. Fabricado artesanalmente en Argentina para tiro deportivo de alto nivel.",
  openGraph: {
    title: "J. MURRIETA MOD. BULLPUP | Compacto y Potente",
    description:
      "El J. MURRIETA MOD. BULLPUP, diseño compacto con potencia y precisión excepcionales. Cañón estriado de 550mm con paso de estría 1/20 una en veinte pulgadas. Disponible en diferentes calibres y opciones de culata. Fabricado artesanalmente en Argentina para tiro deportivo de alto nivel.",
    images: [
      {
        url: "https://jmurrietapcp.com/images/rifle-bullpup-real-1.jpeg",
        width: 1200,
        height: 630,
        alt: "J. MURRIETA MOD. BULLPUP",
      },
    ],
  },
}

export default function ProductPage() {
  // Datos del producto
  const product = {
    id: "bullpup",
    name: "J. MURRIETA MOD. BULLPUP",
    fullName: "J. MURRIETA MOD. BULLPUP",
    description:
      "El J. MURRIETA MOD. BULLPUP está diseñado para aquellos que buscan un rifle más compacto y manejable. Su tamaño reducido lo hace ideal para situaciones que requieren mayor movilidad, sin comprometer la potencia ni la precisión del disparo. La combinación de materiales avanzados y tecnología de punta garantiza una precisión excepcional tiro tras tiro, incluso en las condiciones más exigentes.",
    shortDescription:
      "Diseño compacto con cañón estriado CZ para potencia y precisión excepcionales. Fabricación premium con mecanizado CNC.",
    stock: 12,
    features: [
      "Diseño compacto tipo bullpup",
      "Cañón estriado de 550mm con paso de estría 1/20 una en veinte pulgadas de fabricación propia",
      "Mecanismo de carga Side Lever (palanca lateral para carga a repetición)",
      "Doble Click para monotiro",
      "Regulador de potencia de martillo",
      "Gatillo con seguro y regulador",
      "Depósito de 260cc con manómetro",
    ],
    calibers: [
      {
        name: "Calibre 5.5mm",
        price: 645000, // Precio final
        inflatedPrice: 709500, // Precio inflado (10% más)
        specs: {
          velocity: "950-1050 fps (200 bar)",
          autonomy: "35-40 disparos óptimos (200 bar)",
        },
      },
      {
        name: "Calibre 6.35mm",
        price: 699000, // Precio final
        inflatedPrice: 768900, // Precio inflado (10% más)
        specs: {
          velocity: "950-1050 fps (200 bar)",
          autonomy: "25-30 disparos óptimos (200 bar)",
        },
      },
      {
        name: "Calibre 7.62mm",
        price: 799000, // Precio final
        inflatedPrice: 878900, // Precio inflado (10% más)
        specs: {
          velocity: "950-1050 fps (200 bar)",
          autonomy: "10-15 disparos óptimos (200 bar)",
        },
      },
    ],
    images: [
      "/images/rifle-bullpup-real-2.jpeg",
      "/images/rifle-bullpup-real-1.jpeg",
      "/images/rifle-bullpup-real-3.jpeg",
    ],
    category: "rifles",
  }

  // Productos relacionados
  const relatedProducts = [
    {
      id: "j1",
      name: "J. MURRIETA MOD. J1",
      slug: "rifle-murrieta-j1",
      price: 575000,
      image: "/images/rifle-j1-real-2.jpeg",
      category: "rifles",
    },
    {
      id: "mira",
      name: "Mira Telescópica",
      slug: "mira-telescopica",
      price: 45000,
      image: "/images/accesorios/mira-telescopica.jpeg",
      category: "accesorios",
    },
    {
      id: "funda",
      name: "Funda de Cuero",
      slug: "funda-cuero",
      price: 35000,
      image: "/images/accesorios/funda-cuero.jpeg",
      category: "accesorios",
    },
  ]

  return <RifleBullpupPageClient product={product} relatedProducts={relatedProducts} />
}
