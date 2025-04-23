import RifleMurrietaJ1Client from "./RifleMurrietaJ1Client"

// Añadir metadatos específicos para la página del rifle J1
export const metadata = {
  title: "Rifle Murrieta J1 | Precisión y Elegancia",
  description:
    "El Rifle Murrieta J1, fabricado artesanalmente en Argentina. Diseño tradicional tipo carabina con cañón estriado de 550mm con paso de estría 1/20 una en veinte pulgadas. Disponible en diferentes calibres y opciones de culata. Precisión excepcional, diseño elegante y acabados de primera calidad.",
  openGraph: {
    title: "Rifle Murrieta J1 | Precisión y Elegancia",
    description:
      "El Rifle Murrieta J1, fabricado artesanalmente en Argentina. Diseño tradicional tipo carabina con cañón estriado de 550mm con paso de estría 1/20 una en veinte pulgadas. Disponible en diferentes calibres y opciones de culata. Precisión excepcional, diseño elegante y acabados de primera calidad.",
    images: [
      {
        url: "https://jmurrietapcp.com/images/rifle-j1-real-1.jpeg",
        width: 1200,
        height: 630,
        alt: "Rifle Murrieta J1",
      },
    ],
  },
}

// Datos del producto
export const productData = {
  id: "j1",
  name: "Rifle Murrieta J1",
  fullName: "Rifle Murrieta J1",
  description:
    "El Rifle Murrieta J1 es el resultado de años de investigación y desarrollo, combinando la tradición artesanal con la más avanzada tecnología. Su diseño tradicional tipo carabina ofrece un equilibrio perfecto entre estabilidad y maniobrabilidad, ideal para tiro de precisión a distancia. Cada componente ha sido cuidadosamente seleccionado y ensamblado para garantizar un rendimiento excepcional tiro tras tiro.",
  shortDescription:
    "Diseño tradicional con cañón estriado CZ para máxima precisión a distancia. Fabricación de alta calidad con mecanizado CNC.",
  calibers: [
    {
      name: "Calibre 5.5mm",
      price: 575000, // Precio final
      inflatedPrice: 632500, // Precio inflado (10% más)
      specs: {
        velocity: "950-1050 fps (200 bar)",
        autonomy: "35-40 disparos óptimos (200 bar)",
      },
    },
    {
      name: "Calibre 6.35mm",
      price: 625000, // Precio final
      inflatedPrice: 687500, // Precio inflado (10% más)
      specs: {
        velocity: "950-1050 fps (200 bar)",
        autonomy: "25-30 disparos óptimos (200 bar)",
      },
    },
    {
      name: "Calibre 7.62mm",
      price: 725000, // Precio final
      inflatedPrice: 797500, // Precio inflado (10% más)
      specs: {
        velocity: "950-1050 fps (200 bar)",
        autonomy: "10-15 disparos óptimos (200 bar)",
      },
    },
  ],
  features: [
    "Diseño tradicional tipo carabina",
    "Cañón estriado de 550mm con paso de estría 1/20 una en veinte pulgadas de fabricación propia",
    "Mecanismo de carga Side Lever (palanca lateral para carga a repetición)",
    "Doble Click para monotiro",
    "Regulador de potencia de martillo",
    "Gatillo con seguro y regulador",
    "Depósito de 260cc con manómetro",
  ],
  images: ["/images/rifle-j1-real-1.jpeg", "/images/rifle-j1-real-2.jpeg", "/images/rifle-j1-real-3.jpeg"],
  category: "rifles",
}

export default function ProductPage() {
  return <RifleMurrietaJ1Client product={productData} />
}
