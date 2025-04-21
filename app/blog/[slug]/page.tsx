import { HeaderAnnouncement } from "@/components/header-announcement"
import { HeaderSearch } from "@/components/header-search"
import { HeaderMenu } from "@/components/header-menu"
import { Footer } from "@/components/footer"
import { ChatBubbles } from "@/components/chat-bubbles"
import { Breadcrumb } from "@/components/breadcrumb"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, Calendar, User, Tag, Clock, Facebook, Twitter, Instagram, Share2 } from "lucide-react"
import { notFound } from "next/navigation"

// Importar el componente SchemaOrg
import SchemaOrg from "@/components/schema-org"

// Datos de ejemplo para los artículos del blog
const blogPosts = {
  "guia-mantenimiento-rifle-pcp": {
    id: 1,
    title: "Guía completa para el mantenimiento de tu rifle PCP",
    excerpt:
      "Descubre los mejores consejos y técnicas para mantener tu rifle PCP en óptimas condiciones y prolongar su vida útil.",
    content: `
      <p>El mantenimiento adecuado de tu rifle PCP es fundamental para garantizar su rendimiento óptimo y prolongar su vida útil. En este artículo, te ofrecemos una guía completa con los mejores consejos y técnicas para mantener tu rifle en perfectas condiciones.</p>
      
      <div class="my-6">
        <img src="/images/blog/j1-cargando.jpeg" alt="Mantenimiento de rifle PCP J. Murrieta" class="w-full rounded-lg shadow-md" />
        <p class="text-sm text-center mt-2 text-white/60">Un rifle J. Murrieta durante su proceso de mantenimiento</p>
      </div>
      
      <h2>Limpieza regular del cañón</h2>
      
      <p>La limpieza del cañón es una de las tareas más importantes en el mantenimiento de tu rifle PCP. Un cañón sucio puede afectar significativamente la precisión de tus disparos. Te recomendamos limpiar el cañón después de cada sesión de tiro o, como mínimo, cada 500 disparos.</p>
      
      <p>Para limpiar el cañón correctamente, necesitarás:</p>
      
      <ul>
        <li>Baqueta de limpieza del calibre adecuado</li>
        <li>Parches de limpieza</li>
        <li>Cepillo de bronce</li>
        <li>Solvente específico para armas</li>
        <li>Aceite protector</li>
      </ul>
      
      <div class="my-6">
        <img src="/images/blog/rifles-produccion.jpeg" alt="Rifles J. Murrieta en producción" class="w-full rounded-lg shadow-md" />
        <p class="text-sm text-center mt-2 text-white/60">Rifles J. Murrieta durante el proceso de producción</p>
      </div>
      
      <h2>Revisión de juntas y sellos</h2>
      
      <p>Los sellos y juntas son componentes críticos en un rifle PCP, ya que son responsables de mantener el aire comprimido en el sistema. Con el tiempo, estos elementos pueden desgastarse o dañarse, lo que provocaría fugas de aire y una disminución en el rendimiento del rifle.</p>
      
      <p>Te recomendamos revisar periódicamente el estado de las juntas y sellos, prestando especial atención a signos de desgaste, grietas o deformaciones. En caso de detectar algún problema, es aconsejable reemplazar estos componentes lo antes posible.</p>
      
      <h2>Lubricación adecuada</h2>
      
      <p>La lubricación correcta es esencial para el buen funcionamiento de tu rifle PCP. Sin embargo, es importante utilizar los lubricantes adecuados y aplicarlos en las cantidades justas. Un exceso de lubricante puede atraer suciedad y polvo, mientras que una lubricación insuficiente puede provocar un desgaste prematuro de las piezas.</p>
      
      <p>Para la lubricación de tu rifle PCP, te recomendamos:</p>
      
      <ul>
        <li>Utilizar lubricantes específicos para armas de aire comprimido</li>
        <li>Aplicar una cantidad mínima de lubricante</li>
        <li>Prestar especial atención a las partes móviles</li>
        <li>Evitar lubricar el interior del cañón</li>
      </ul>
      
      <div class="my-6">
        <img src="/images/blog/rifle-scope-detail.jpeg" alt="Detalle de rifle J. Murrieta con mira telescópica" class="w-full rounded-lg shadow-md" />
        <p class="text-sm text-center mt-2 text-white/60">Detalle de un rifle J. Murrieta equipado con mira telescópica</p>
      </div>
      
      <h2>Almacenamiento correcto</h2>
      
      <p>El almacenamiento adecuado de tu rifle PCP es fundamental para su conservación. Te recomendamos guardarlo en un lugar seco, a temperatura constante y alejado de la luz solar directa. Además, es aconsejable almacenarlo con una carga mínima de aire (aproximadamente 50 bar) para mantener los sellos en buen estado.</p>
      
      <h2>Revisiones periódicas</h2>
      
      <p>Además del mantenimiento regular que puedes realizar tú mismo, es recomendable llevar tu rifle a un técnico especializado al menos una vez al año para una revisión completa. Un profesional podrá detectar problemas que podrían pasar desapercibidos y realizar ajustes precisos para mantener tu rifle en óptimas condiciones.</p>
      
      <h2>Conclusión</h2>
      
      <p>El mantenimiento adecuado de tu rifle PCP no solo mejorará su rendimiento y precisión, sino que también prolongará significativamente su vida útil. Siguiendo estos consejos y técnicas, podrás disfrutar de tu rifle en perfectas condiciones durante muchos años.</p>
      
      <p>Recuerda que en J. Murrieta contamos con un servicio técnico especializado para el mantenimiento y reparación de rifles PCP. No dudes en contactarnos si necesitas asesoramiento o servicios profesionales para el cuidado de tu equipo.</p>
    `,
    date: "15 de Abril, 2025",
    author: "Juan Murrieta",
    category: "Mantenimiento",
    readTime: "8 min",
    image: "/images/blog/rifles-poligono.jpeg",
    relatedPosts: [2, 3, 5],
  },
  "como-elegir-calibre-adecuado": {
    id: 2,
    title: "Cómo elegir el calibre adecuado para tu rifle",
    excerpt:
      "Analizamos las ventajas y desventajas de cada calibre para ayudarte a tomar la mejor decisión según tus necesidades.",
    content: `
      <p>La elección del calibre adecuado para tu rifle PCP es una decisión importante que afectará directamente a tu experiencia de tiro. En este artículo, analizamos las ventajas y desventajas de cada calibre para ayudarte a tomar la mejor decisión según tus necesidades específicas.</p>
      
      <div class="my-6">
        <img src="/images/blog/j1-presentacion.jpeg" alt="Rifle J. Murrieta J1" class="w-full rounded-lg shadow-md" />
        <p class="text-sm text-center mt-2 text-white/60">Rifle J. Murrieta modelo J1 con culata de madera oscura</p>
      </div>
      
      <h2>Calibre 4.5mm (.177)</h2>
      
      <p>El calibre 4.5mm es el más pequeño y común en rifles de aire comprimido. Es ideal para tiro deportivo y competición debido a su trayectoria más plana y mayor velocidad.</p>
      
      <p><strong>Ventajas:</strong></p>
      <ul>
        <li>Mayor velocidad y trayectoria más plana</li>
        <li>Menor consumo de aire por disparo</li>
        <li>Munición más económica y fácil de encontrar</li>
        <li>Ideal para tiro de precisión a distancias medias</li>
      </ul>
      
      <p><strong>Desventajas:</strong></p>
      <ul>
        <li>Menor energía de impacto</li>
        <li>Más afectado por el viento</li>
        <li>Menor capacidad de penetración</li>
      </ul>
      
      <h2>Calibre 5.5mm (.22)</h2>
      
      <p>El calibre 5.5mm ofrece un buen equilibrio entre velocidad y potencia, siendo muy versátil para diferentes tipos de uso.</p>
      
      <p><strong>Ventajas:</strong></p>
      <ul>
        <li>Buen equilibrio entre velocidad y potencia</li>
        <li>Menos afectado por el viento que el 4.5mm</li>
        <li>Buena precisión a distancias medias</li>
        <li>Versatilidad para diferentes usos</li>
      </ul>
      
      <p><strong>Desventajas:</strong></p>
      <ul>
        <li>Mayor consumo de aire que el 4.5mm</li>
        <li>Trayectoria menos plana</li>
      </ul>
      
      <div class="my-6">
        <img src="/images/blog/rifles-argentina.jpeg" alt="Rifles J. Murrieta con bandera argentina" class="w-full rounded-lg shadow-md" />
        <p class="text-sm text-center mt-2 text-white/60">Rifles J. Murrieta en diferentes acabados: madera natural y negro</p>
      </div>
      
      <h2>Calibre 6.35mm (.25)</h2>
      
      <p>El calibre 6.35mm ofrece mayor potencia y energía de impacto, siendo ideal para distancias más largas.</p>
      
      <p><strong>Ventajas:</strong></p>
      <ul>
        <li>Mayor potencia y energía de impacto</li>
        <li>Menos afectado por el viento</li>
        <li>Mayor capacidad de penetración</li>
      </ul>
      
      <p><strong>Desventajas:</strong></p>
      <ul>
        <li>Mayor consumo de aire</li>
        <li>Trayectoria más curva</li>
        <li>Munición más costosa</li>
        <li>Menor cantidad de disparos por carga</li>
      </ul>
      
      <h2>Calibre 7.62mm (.30)</h2>
      
      <p>El calibre 7.62mm es el más potente, ofreciendo la mayor energía de impacto pero con un consumo de aire significativamente mayor.</p>
      
      <p><strong>Ventajas:</strong></p>
      <ul>
        <li>Máxima potencia y energía de impacto</li>
        <li>Excelente estabilidad frente al viento</li>
        <li>Máxima capacidad de penetración</li>
      </ul>
      
      <p><strong>Desventajas:</strong></p>
      <ul>
        <li>Consumo de aire muy elevado</li>
        <li>Número reducido de disparos por carga</li>
        <li>Munición más costosa y menos disponible</li>
        <li>Trayectoria más pronunciada</li>
      </ul>
      
      <div class="my-6">
        <img src="/images/blog/rifles-poligono.jpeg" alt="Colección de rifles J. Murrieta en polígono" class="w-full rounded-lg shadow-md" />
        <p class="text-sm text-center mt-2 text-white/60">Variedad de rifles J. Murrieta con diferentes tonalidades de culata</p>
      </div>
      
      <h2>¿Cómo elegir el calibre adecuado?</h2>
      
      <p>Para elegir el calibre más adecuado para ti, debes considerar varios factores:</p>
      
      <ul>
        <li><strong>Uso principal:</strong> Para tiro deportivo y competición, el 4.5mm suele ser la mejor opción. Para uso general, el 5.5mm ofrece un buen equilibrio.</li>
        <li><strong>Distancia de tiro:</strong> Para distancias cortas y medias, los calibres más pequeños son adecuados. Para distancias más largas, considera los calibres mayores.</li>
        <li><strong>Autonomía:</strong> Si prefieres mayor cantidad de disparos por carga, los calibres menores son más eficientes.</li>
        <li><strong>Presupuesto:</strong> Considera no solo el costo inicial, sino también el precio y disponibilidad de la munición.</li>
      </ul>
      
      <h2>Conclusión</h2>
      
      <p>La elección del calibre adecuado dependerá principalmente de tus necesidades específicas y preferencias personales. No existe un calibre "perfecto" para todos los usos, por lo que es importante analizar tus prioridades y elegir el que mejor se adapte a ellas.</p>
      
      <p>En J. Murrieta ofrecemos nuestros rifles en diferentes calibres para satisfacer las necesidades de todos nuestros clientes. No dudes en contactarnos si necesitas asesoramiento personalizado para elegir el calibre que mejor se adapte a tus necesidades.</p>
    `,
    date: "28 de Marzo, 2025",
    author: "Carlos Rodríguez",
    category: "Consejos",
    readTime: "10 min",
    image: "/images/blog/j1-presentacion.jpeg",
    relatedPosts: [1, 3, 6],
  },
  "proceso-fabricacion-rifles-pcp": {
    id: 3,
    title: "El proceso de fabricación de nuestros rifles PCP",
    excerpt:
      "Conoce el meticuloso proceso artesanal detrás de cada rifle J. Murrieta y los estándares de calidad que aplicamos.",
    content: `
      <p>En J. Murrieta, la fabricación de cada rifle es un proceso meticuloso que combina técnicas artesanales con tecnología de precisión. En este artículo, te invitamos a conocer el proceso completo de fabricación de nuestros rifles PCP, desde la selección de materiales hasta las pruebas finales.</p>
      
      <div class="my-6">
        <img src="/images/blog/rifles-produccion.jpeg" alt="Rifles J. Murrieta en producción" class="w-full rounded-lg shadow-md" />
        <p class="text-sm text-center mt-2 text-white/60">Rifles J. Murrieta durante el proceso de producción</p>
      </div>
      
      <h2>Selección de materiales</h2>
      
      <p>El proceso comienza con la cuidadosa selección de materiales de la más alta calidad. Para los componentes metálicos, utilizamos aleaciones de aluminio aeronáutico y acero inoxidable que garantizan resistencia y durabilidad sin añadir peso excesivo.</p>
      
      <p>Para las culatas, seleccionamos maderas nobles como nogal, haya y arce, que son tratadas y estabilizadas para resistir las condiciones ambientales más exigentes. También ofrecemos opciones en materiales sintéticos de alta resistencia para quienes prefieren un acabado más moderno.</p>
      
      <h2>Diseño y planificación</h2>
      
      <p>Cada modelo de rifle J. Murrieta comienza con un diseño detallado que combina ergonomía, funcionalidad y estética. Utilizamos software de diseño asistido por computadora (CAD) para crear modelos precisos de cada componente, lo que nos permite optimizar el rendimiento antes de comenzar la fabricación.</p>
      
      <div class="my-6">
        <img src="/images/blog/j1-presentacion.jpeg" alt="Rifle J. Murrieta J1" class="w-full rounded-lg shadow-md" />
        <p class="text-sm text-center mt-2 text-white/60">El diseño elegante del rifle J. Murrieta modelo J1</p>
      </div>
      
      <h2>Fabricación de componentes</h2>
      
      <p>La fabricación de los componentes metálicos se realiza mediante procesos de mecanizado CNC de alta precisión. Esto nos permite mantener tolerancias extremadamente ajustadas, esenciales para el correcto funcionamiento de un rifle PCP.</p>
      
      <p>El cañón, uno de los componentes más críticos, se fabrica con un proceso especial que incluye el estriado interior con 6-12 microestrías, dependiendo del calibre. Este proceso es fundamental para garantizar la precisión del disparo.</p>
      
      <h2>Trabajo en madera</h2>
      
      <p>Las culatas de madera se trabajan de forma artesanal. Partiendo de bloques de madera seleccionados por su veta y densidad, nuestros artesanos tallan, lijan y dan forma a cada culata siguiendo plantillas precisas pero adaptándose a las características únicas de cada pieza de madera.</p>
      
      <p>El acabado incluye múltiples capas de aceites y barnices especiales que realzan la belleza natural de la madera mientras proporcionan protección contra la humedad y el desgaste.</p>
      
      <div class="my-6">
        <img src="/images/blog/rifles-poligono.jpeg" alt="Variedad de rifles J. Murrieta" class="w-full rounded-lg shadow-md" />
        <p class="text-sm text-center mt-2 text-white/60">La variedad de tonalidades disponibles en nuestras culatas de madera</p>
      </div>
      
      <h2>Ensamblaje</h2>
      
      <p>El ensamblaje de cada rifle se realiza manualmente por técnicos especializados. Cada componente se inspecciona antes de ser incorporado al conjunto, y se realizan ajustes precisos para garantizar un funcionamiento óptimo.</p>
      
      <p>Durante esta fase, se presta especial atención a elementos críticos como el sistema de válvulas, el regulador de presión y el mecanismo del gatillo, que son fundamentales para el rendimiento del rifle.</p>
      
      <h2>Control de calidad y pruebas</h2>
      
      <p>Cada rifle J. Murrieta se somete a rigurosas pruebas antes de ser aprobado para su entrega. Estas incluyen:</p>
      
      <ul>
        <li>Pruebas de presión para verificar la ausencia de fugas</li>
        <li>Pruebas de disparo para comprobar la precisión y consistencia</li>
        <li>Verificación de la velocidad y potencia con cronógrafo</li>
        <li>Inspección visual detallada de todos los acabados</li>
      </ul>
      
      <div class="my-6">
        <img src="/images/blog/rifle-scope-detail.jpeg" alt="Detalle de rifle J. Murrieta con mira" class="w-full rounded-lg shadow-md" />
        <p class="text-sm text-center mt-2 text-white/60">Detalle de un rifle J. Murrieta durante las pruebas de precisión</p>
      </div>
      
      <h2>Personalización final</h2>
      
      <p>Antes de la entrega, cada rifle puede recibir toques finales de personalización según las preferencias del cliente, como ajustes específicos en el gatillo, la incorporación de accesorios especiales o grabados personalizados.</p>
      
      <h2>Conclusión</h2>
      
      <p>El proceso de fabricación de un rifle J. Murrieta es un testimonio de nuestro compromiso con la excelencia y la artesanía. Cada rifle que sale de nuestro taller representa horas de trabajo especializado y una atención meticulosa a los detalles.</p>
      
      <p>Este enfoque artesanal, combinado con tecnologías modernas de precisión, es lo que hace que nuestros rifles sean reconocidos por su calidad, rendimiento y belleza. Cuando adquieres un rifle J. Murrieta, no solo obtienes una herramienta de precisión, sino también una pieza única creada con pasión y dedicación.</p>
    `,
    date: "10 de Febrero, 2025",
    author: "Juan Murrieta",
    category: "Fabricación",
    readTime: "12 min",
    image: "/images/blog/rifles-produccion.jpeg",
    relatedPosts: [1, 2, 4],
  },
  "comparativa-modelos-j1-bullpup": {
    id: 4,
    title: "Comparativa: Modelo J1 vs Bullpup - ¿Cuál elegir?",
    excerpt:
      "Analizamos las diferencias, ventajas y características específicas de nuestros dos modelos principales para ayudarte a elegir.",
    content: `
      <p>En J. Murrieta ofrecemos dos modelos principales de rifles PCP: el tradicional J1 y el compacto Bullpup. Ambos comparten nuestra filosofía de calidad y precisión, pero presentan características diferentes que los hacen adecuados para distintos tipos de usuarios y situaciones. En este artículo, analizamos en detalle las diferencias entre ambos modelos para ayudarte a elegir el que mejor se adapte a tus necesidades.</p>
      
      <div class="my-6">
        <img src="/images/blog/rifles-argentina.jpeg" alt="Modelos J1 y Bullpup de J. Murrieta" class="w-full rounded-lg shadow-md" />
        <p class="text-sm text-center mt-2 text-white/60">Comparativa visual: modelo J1 (arriba) y modelo Bullpup (abajo)</p>
      </div>
      
      <h2>Diseño y ergonomía</h2>
      
      <p><strong>Modelo J1:</strong> Presenta un diseño tradicional de carabina, con una longitud total mayor y una distribución de peso más extendida. La culata tradicional ofrece un apoyo completo en el hombro y una posición de tiro clásica que muchos tiradores experimentados prefieren.</p>
      
      <p><strong>Modelo Bullpup:</strong> Se caracteriza por su diseño compacto, con el mecanismo de disparo ubicado detrás del gatillo, lo que reduce significativamente la longitud total sin sacrificar la longitud del cañón. Esto resulta en un rifle más corto y manejable, ideal para espacios reducidos o situaciones que requieren mayor movilidad.</p>
      
      <h2>Balance y manejo</h2>
      
      <p><strong>Modelo J1:</strong> El balance de peso está distribuido a lo largo del rifle, lo que proporciona una estabilidad natural al apuntar. La mayor distancia entre los puntos de apoyo (mano delantera y culata) ofrece mayor control en tiros de precisión a larga distancia.</p>
      
      <p><strong>Modelo Bullpup:</strong> El centro de gravedad está más cerca del cuerpo del tirador, lo que facilita el manejo prolongado y reduce la fatiga. Su diseño compacto permite una mayor agilidad en entornos dinámicos o cuando se requieren cambios rápidos de posición.</p>
      
      <div class="my-6">
        <img src="/images/blog/j1-presentacion.jpeg" alt="Rifle J. Murrieta modelo J1" class="w-full rounded-lg shadow-md" />
        <p class="text-sm text-center mt-2 text-white/60">El modelo J1 con su diseño tradicional de carabina</p>
      </div>
      
      <h2>Precisión y rendimiento</h2>
      
      <p>Ambos modelos comparten las mismas características técnicas en cuanto a sistema de disparo, calidad del cañón y mecanismos internos, por lo que ofrecen un rendimiento similar en términos de precisión y potencia. Sin embargo, existen algunas diferencias sutiles:</p>
      
      <p><strong>Modelo J1:</strong> La mayor distancia entre miras o entre el ojo y la mira telescópica puede proporcionar una ligera ventaja en precisión a largas distancias para tiradores experimentados.</p>
      
      <p><strong>Modelo Bullpup:</strong> La posición del centro de gravedad más cerca del cuerpo puede reducir el movimiento durante el disparo, especialmente en posiciones de tiro no apoyadas.</p>
      
      <h2>Personalización y accesorios</h2>
      
      <p>Ambos modelos aceptan los mismos accesorios básicos como miras telescópicas, moderadores de sonido y sistemas de carga. Sin embargo:</p>
      
      <p><strong>Modelo J1:</strong> Ofrece más espacio para accesorios adicionales en el guardamano y mayor flexibilidad para diferentes tipos de culatas y empuñaduras.</p>
      
      <p><strong>Modelo Bullpup:</strong> Su diseño compacto puede limitar algunas opciones de personalización, pero está optimizado para accesorios que complementen su naturaleza táctica y compacta.</p>
      
      <div class="my-6">
        <img src="/images/blog/j1-cargando.jpeg" alt="Detalle de carga de un rifle J. Murrieta" class="w-full rounded-lg shadow-md" />
        <p class="text-sm text-center mt-2 text-white/60">Detalle del proceso de carga en un rifle J. Murrieta</p>
      </div>
      
      <h2>¿Cuál elegir?</h2>
      
      <p>La elección entre el modelo J1 y el Bullpup dependerá principalmente de tus preferencias personales y el uso que pretendas darle al rifle:</p>
      
      <p><strong>El modelo J1 es ideal para ti si:</strong></p>
      <ul>
        <li>Prefieres un diseño tradicional con controles familiares</li>
        <li>Te dedicas principalmente al tiro de precisión a larga distancia</li>
        <li>Valoras la estabilidad y el balance tradicional</li>
        <li>Buscas máxima flexibilidad en personalización</li>
      </ul>
      
      <p><strong>El modelo Bullpup es tu mejor opción si:</strong></p>
      <ul>
        <li>Necesitas un rifle compacto y manejable</li>
        <li>Valoras la portabilidad y facilidad de transporte</li>
        <li>Te desenvuelves en espacios reducidos o entornos dinámicos</li>
        <li>Buscas un diseño más moderno y táctico</li>
      </ul>
      
      <h2>Conclusión</h2>
      
      <p>Tanto el modelo J1 como el Bullpup representan la excelencia en diseño y fabricación que caracteriza a J. Murrieta. Ambos ofrecen un rendimiento excepcional y están construidos con los mismos estándares de calidad.</p>
      
      <p>La decisión final dependerá de tus preferencias personales, estilo de tiro y necesidades específicas. Te invitamos a visitar nuestro showroom para probar ambos modelos y experimentar por ti mismo las diferencias sutiles que podrían inclinar la balanza hacia uno u otro.</p>
      
      <p>En J. Murrieta estamos comprometidos con la satisfacción de nuestros clientes, por lo que nuestro equipo estará encantado de asesorarte personalmente para que encuentres el rifle que mejor se adapte a ti.</p>
    `,
    date: "5 de Marzo, 2025",
    author: "Carlos Rodríguez",
    category: "Comparativas",
    readTime: "9 min",
    image: "/images/blog/rifles-argentina.jpeg",
    relatedPosts: [1, 2, 3],
  },
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = blogPosts[params.slug as keyof typeof blogPosts]

  if (!post) {
    notFound()
  }

  // Obtener posts relacionados
  const relatedPostsData = post.relatedPosts
    ? post.relatedPosts.map((id) => {
        const relatedPost = Object.values(blogPosts).find((p) => p.id === id)
        return relatedPost
          ? {
              id: relatedPost.id,
              title: relatedPost.title,
              excerpt: relatedPost.excerpt,
              date: relatedPost.date,
              author: relatedPost.author,
              category: relatedPost.category,
              image: relatedPost.image,
              slug: Object.keys(blogPosts).find((key) => blogPosts[key as keyof typeof blogPosts].id === id),
            }
          : null
      })
    : []

  // Obtener la fecha actual formateada
  const currentDate = new Date().toISOString().split("T")[0]

  return (
    <>
      <SchemaOrg
        type="Article"
        title={post.title}
        description={post.excerpt}
        imageUrl={post.image}
        articleData={{
          datePublished: currentDate,
          dateModified: currentDate,
          author: "J. Murrieta",
        }}
      />
      <HeaderAnnouncement />
      <HeaderSearch />
      <HeaderMenu />

      <main className="bg-zinc-900">
        <div className="relative w-full h-[300px] md:h-[400px]">
          <Image
            src={post.image || "/images/banner-rifle-loading.jpeg"}
            alt={post.title}
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-black/70"></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <div className="flex items-center gap-2 text-xs md:text-sm text-white/60 mb-4">
                  <span className="bg-gold text-black px-2 py-1 font-bold">{post.category}</span>
                  <span>•</span>
                  <span>{post.date}</span>
                  <span>•</span>
                  <span>{post.author}</span>
                </div>
                <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white">{post.title}</h1>
              </div>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 py-6 md:py-8">
          <Breadcrumb
            items={[
              { label: "Inicio", href: "/" },
              { label: "Blog", href: "/blog" },
              { label: post.title, href: `/blog/${params.slug}` },
            ]}
          />

          <article className="max-w-4xl mx-auto">
            {/* Encabezado del artículo */}
            <div className="mb-6 md:mb-8">
              <Button
                asChild
                variant="outline"
                className="mb-4 md:mb-6 text-gold border-gold/30 hover:border-gold hover:bg-gold/10 hover:text-gold rounded-none text-xs md:text-sm"
              >
                <Link href="/blog" className="flex items-center gap-2">
                  <ArrowLeft className="h-3 w-3 md:h-4 md:w-4" /> VOLVER AL BLOG
                </Link>
              </Button>

              <div className="flex flex-wrap items-center gap-3 md:gap-4 text-xs md:text-sm text-white/60 mb-4 md:mb-6">
                <div className="flex items-center gap-1">
                  <Calendar className="h-3 w-3 md:h-4 md:w-4 text-gold" />
                  <span>{post.date}</span>
                </div>
                <div className="flex items-center gap-1">
                  <User className="h-3 w-3 md:h-4 md:w-4 text-gold" />
                  <span>{post.author}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Tag className="h-3 w-3 md:h-4 md:w-4 text-gold" />
                  <span>{post.category}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Clock className="h-3 w-3 md:h-4 md:w-4 text-gold" />
                  <span>{post.readTime} de lectura</span>
                </div>
              </div>
            </div>

            {/* Contenido del artículo */}
            <div
              className="prose prose-sm md:prose-base lg:prose-lg max-w-none text-white/80 prose-headings:text-white prose-headings:font-cinzel prose-strong:text-gold prose-a:text-gold prose-a:no-underline hover:prose-a:underline mb-8 md:mb-12"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />

            {/* Compartir en redes sociales */}
            <div className="border-t border-b border-gold/20 py-4 md:py-6 mb-8 md:mb-12">
              <div className="flex flex-wrap items-center justify-between gap-4">
                <span className="text-white font-cinzel text-sm md:text-base">Compartir este artículo</span>
                <div className="flex gap-2 md:gap-3">
                  <Button
                    variant="outline"
                    size="icon"
                    className="rounded-full w-8 h-8 md:w-10 md:h-10 text-gold border-gold/30 hover:border-gold hover:bg-gold/10"
                  >
                    <Facebook className="h-4 w-4 md:h-5 md:w-5" />
                    <span className="sr-only">Compartir en Facebook</span>
                  </Button>
                  <Button
                    variant="outline"
                    size="icon"
                    className="rounded-full w-8 h-8 md:w-10 md:h-10 text-gold border-gold/30 hover:border-gold hover:bg-gold/10"
                  >
                    <Twitter className="h-4 w-4 md:h-5 md:w-5" />
                    <span className="sr-only">Compartir en Twitter</span>
                  </Button>
                  <Button
                    variant="outline"
                    size="icon"
                    className="rounded-full w-8 h-8 md:w-10 md:h-10 text-gold border-gold/30 hover:border-gold hover:bg-gold/10"
                  >
                    <Instagram className="h-4 w-4 md:h-5 md:w-5" />
                    <span className="sr-only">Compartir en Instagram</span>
                  </Button>
                  <Button
                    variant="outline"
                    size="icon"
                    className="rounded-full w-8 h-8 md:w-10 md:h-10 text-gold border-gold/30 hover:border-gold hover:bg-gold/10"
                  >
                    <Share2 className="h-4 w-4 md:h-5 md:w-5" />
                    <span className="sr-only">Compartir enlace</span>
                  </Button>
                </div>
              </div>
            </div>

            {/* Artículos relacionados */}
            {relatedPostsData.length > 0 && (
              <div className="mb-8 md:mb-12">
                <h2 className="text-xl md:text-2xl font-bold text-white mb-4 md:mb-6">Artículos relacionados</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
                  {relatedPostsData.map(
                    (relatedPost) =>
                      relatedPost && (
                        <div
                          key={relatedPost.id}
                          className="bg-black border border-gold/10 hover:border-gold/30 transition-all duration-300"
                        >
                          <Link
                            href={`/blog/${relatedPost.slug}`}
                            className="block relative aspect-[16/9] overflow-hidden"
                          >
                            <Image
                              src={relatedPost.image || "/placeholder.svg?height=600&width=1200"}
                              alt={relatedPost.title}
                              fill
                              className="object-cover transition-transform duration-500 hover:scale-105"
                              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 300px"
                            />
                            <div className="absolute top-2 left-2 bg-gold px-2 py-1 text-black text-xs font-bold">
                              {relatedPost.category}
                            </div>
                          </Link>
                          <div className="p-3 md:p-4">
                            <h3 className="text-base md:text-lg font-bold text-white mb-2 line-clamp-2">
                              <Link href={`/blog/${relatedPost.slug}`} className="hover:text-gold transition-colors">
                                {relatedPost.title}
                              </Link>
                            </h3>
                            <div className="flex items-center gap-2 text-xs text-white/60">
                              <span>{relatedPost.date}</span>
                            </div>
                          </div>
                        </div>
                      ),
                  )}
                </div>
              </div>
            )}
          </article>
        </div>
      </main>

      <Footer />
      <ChatBubbles />
    </>
  )
}
