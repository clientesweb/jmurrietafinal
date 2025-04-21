"use client"

import { useEffect } from "react"

export default function ServiceWorkerRegister() {
  useEffect(() => {
    if ("serviceWorker" in navigator && typeof window !== "undefined" && window.location.hostname !== "localhost") {
      window.addEventListener("load", () => {
        navigator.serviceWorker
          .register("/sw.js")
          .then((registration) => {
            console.log("Service Worker registrado con éxito:", registration.scope)
          })
          .catch((error) => {
            console.log("Error al registrar el Service Worker:", error)
          })
      })
    }
  }, [])

  return null
}
