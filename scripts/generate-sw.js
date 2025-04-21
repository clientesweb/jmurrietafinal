const fs = require("fs")
const path = require("path")

// Contenido del Service Worker
const swContent = fs.readFileSync(path.join(process.cwd(), "app/sw.ts"), "utf8")

// Directorio de salida
const outputDir = path.join(process.cwd(), ".next/static")

// Asegurarse de que el directorio existe
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true })
}

// Escribir el archivo
fs.writeFileSync(path.join(outputDir, "sw.js"), swContent)

console.log("Service Worker generado correctamente")
