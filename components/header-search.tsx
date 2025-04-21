"use client"

import type React from "react"

import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Search } from "lucide-react"

export function HeaderSearch() {
  const [searchQuery, setSearchQuery] = useState("")

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value)
  }

  const handleSearchSubmit = (event: React.FormEvent) => {
    event.preventDefault()
    // Implement search logic here, e.g., redirect to a search results page
    console.log("Searching for:", searchQuery)
  }

  return (
    <div className="bg-zinc-900 py-3 border-b border-gold/20">
      <div className="container mx-auto px-4">
        <form onSubmit={handleSearchSubmit} className="flex items-center">
          <Input
            type="search"
            placeholder="Buscar productos..."
            value={searchQuery}
            onChange={handleSearchChange}
            className="bg-zinc-800 border-gold/20 text-white rounded-none focus-visible:ring-0 focus-visible:ring-offset-0"
          />
          <button
            type="submit"
            className="ml-2 p-2 bg-gold hover:bg-gold/90 text-black rounded-none transition-colors"
            aria-label="Buscar"
          >
            <Search className="h-5 w-5" />
          </button>
        </form>
      </div>
    </div>
  )
}
