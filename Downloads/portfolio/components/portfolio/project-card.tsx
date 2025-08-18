import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Image from "next/image"
import Link from "next/link"
import { ExternalLink } from "lucide-react"
import type { Translations } from "@/lib/translations" // Import Translations type

interface ProjectCardProps {
  name: string
  description: string
  objective: string
  technologies: string[]
  link: string
  learned: string
  imageSrc: string
  t: Translations["es"]["projects"] // Type for projects translations
}

export default function ProjectCard({
  name,
  description,
  objective,
  technologies,
  link,
  learned,
  imageSrc,
  t,
}: ProjectCardProps) {
  return (
    <Card className="bg-gray-900/70 border border-gray-800/50 rounded-xl shadow-lg backdrop-blur-sm flex flex-col h-full">
      <CardHeader>
        <CardTitle className="text-2xl font-bold text-cyan-400">{name}</CardTitle>
      </CardHeader>
      <CardContent className="flex-grow p-6 pt-0 space-y-4 text-gray-200 flex flex-col">
        {" "}
        {/* Added flex flex-col */}
        <div className="relative w-full h-48 bg-gray-800 rounded-md overflow-hidden mb-4">
          <Image
            src={imageSrc || "/placeholder.svg"}
            alt={`Captura de pantalla de ${name}`}
            layout="fill"
            objectFit="cover"
            className="transition-transform duration-300 hover:scale-105"
          />
        </div>
        <p>
          <span className="font-semibold text-blue-300">{t.descriptionLabel}</span> {description}
        </p>
        <p>
          <span className="font-semibold text-blue-300">{t.objectiveLabel}</span> {objective}
        </p>
        <p>
          <span className="font-semibold text-blue-300">{t.technologiesLabel}</span>{" "}
          <span className="text-gray-300">{technologies.join(", ")}</span>
        </p>
        <p className="flex-grow">
          {" "}
          {/* Added flex-grow to push the link down */}
          <span className="font-semibold text-blue-300">{t.learnedLabel}</span> {learned}
        </p>
        <Link
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center text-cyan-400 hover:text-cyan-300 transition-colors font-medium mt-auto" /* Added mt-auto */
        >
          {t.viewProject} <ExternalLink className="w-4 h-4 ml-2" />
        </Link>
      </CardContent>
    </Card>
  )
}
