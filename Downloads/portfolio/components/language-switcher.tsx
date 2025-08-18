"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import type { Language } from "@/lib/translations"
import { useState } from "react"

interface LanguageSwitcherProps {
  language: Language
  setLanguage: (lang: Language) => void
}

export default function LanguageSwitcher({ language, setLanguage }: LanguageSwitcherProps) {
  const [hoveredFlag, setHoveredFlag] = useState<Language | null>(null)

  const getGrayscaleClass = (flag: Language) => {
    if (hoveredFlag === null) {
      return flag !== language ? "grayscale" : ""
    } else {
      return flag !== hoveredFlag ? "grayscale" : ""
    }
  }

  return (
    <div className="absolute top-4 right-4 z-20 flex items-center gap-2 select-none">
      <Button
        variant="ghost"
        size="icon"
        onClick={() => setLanguage("es")}
        onMouseEnter={() => setHoveredFlag("es")}
        onMouseLeave={() => setHoveredFlag(null)}
        className="p-0.5 hover:scale-110 transition-transform duration-300 focus-visible:ring-0 focus-visible:ring-offset-0 hover:bg-transparent focus-visible:bg-transparent"
      >
        <Image
          src="/flags/es.png"
          alt="Bandera de España"
          width={32}
          height={32}
          className={`rounded-full transition-all duration-300 ${getGrayscaleClass("es")}`}
          draggable={false}
        />
      </Button>
      <Button
        variant="ghost"
        size="icon"
        onClick={() => setLanguage("en")}
        onMouseEnter={() => setHoveredFlag("en")}
        onMouseLeave={() => setHoveredFlag(null)}
        className="p-0.5 hover:scale-110 transition-transform duration-300 focus-visible:ring-0 focus-visible:ring-offset-0 hover:bg-transparent focus-visible:bg-transparent"
      >
        <Image
          src="/flags/us.png"
          alt="Bandera de Estados Unidos"
          width={32}
          height={32}
          className={`rounded-full transition-all duration-300 ${getGrayscaleClass("en")}`}
          draggable={false}
        />
      </Button>
    </div>
  )
}
