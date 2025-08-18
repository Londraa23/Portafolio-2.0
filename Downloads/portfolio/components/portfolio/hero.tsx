"use client"
import type { Translations } from "@/lib/translations" // Import Translations type

interface HeroProps {
  t: Translations["es"]["hero"] // Type for hero translations
}

export default function Hero({ t }: HeroProps) {
  return (
    <section
      id="hero"
      className="relative z-10 flex flex-col items-center justify-center min-h-screen text-center px-4 py-12 md:py-24 lg:py-32"
    >
      <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight mb-4 text-white">
        {t.greeting} <span className="text-cyan-400">{t.name}</span>
      </h1>
      <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl">{t.tagline}</p>
      {/* Eliminamos los botones de navegación */}
    </section>
  )
}
