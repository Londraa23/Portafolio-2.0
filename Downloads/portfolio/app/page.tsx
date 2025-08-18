"use client"

import { useState } from "react"
import StarBackground from "@/components/star-background"
import LanguageSwitcher from "@/components/language-switcher" // Import the new LanguageSwitcher component
import Hero from "@/components/portfolio/hero"
import AboutMe from "@/components/portfolio/about-me"
import Projects from "@/components/portfolio/projects"
import Contact from "@/components/portfolio/contact"
import { translations, type Language } from "@/lib/translations"

export default function Home() {
  const [language, setLanguage] = useState<Language>("es")

  const t = translations[language]

  return (
    <div className="relative min-h-screen bg-[#0A041A] text-white">
      <StarBackground />
      <LanguageSwitcher language={language} setLanguage={setLanguage} /> {/* Use LanguageSwitcher here */}
      <div className="relative z-10">
        <Hero t={t.hero} />
        <AboutMe t={t.aboutMe} />
        <Projects t={t.projects} />
        <Contact t={t.contact} />
      </div>
    </div>
  )
}
