import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"
import type { Translations } from "@/lib/translations" // Import Translations type

interface AboutMeProps {
  t: Translations["es"]["aboutMe"] // Type for aboutMe translations
}

export default function AboutMe({ t }: AboutMeProps) {
  return (
    <section id="about-me" className="relative z-10 py-16 md:py-24 px-4 max-w-4xl mx-auto">
      <h2 className="text-4xl font-bold text-center mb-12 text-white">{t.title}</h2>
      <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
        <div className="w-48 h-48 md:w-64 md:h-64 flex-shrink-0 rounded-full overflow-hidden border-4 border-blue-500 shadow-lg bg-gray-800 flex items-center justify-center">
          {/* Placeholder para la foto de Pablo */}
          <Image
            src="/placeholder-user.jpg?height=256&width=256"
            alt="Foto de Pablo Estévez"
            width={256}
            height={256}
            className="object-cover w-full h-full"
          />
        </div>
        <Card className="bg-gray-900/70 border border-gray-800/50 p-6 md:p-8 rounded-xl shadow-lg backdrop-blur-sm flex-grow">
          <CardContent className="p-0 text-gray-200 space-y-4">
            <p>
              {t.intro} <span className="font-semibold text-cyan-400">Pablo Estévez</span>, un desarrollador web de{" "}
              <span className="font-semibold text-blue-300">{t.age}</span> con{" "}
              <span className="font-semibold text-blue-300">{t.experience}</span> en la programación y creación de
              sitios web.
            </p>
            <p>{t.passion}</p>
            <p>
              {t.skillsIntro} <span className="font-semibold text-cyan-400">{t.skills}</span>
              {t.skillsOutro}
            </p>
            <p>{t.learning}</p>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
