import ProjectCard from "./project-card"
import type { Translations } from "@/lib/translations" // Import Translations type

interface ProjectsProps {
  t: Translations["es"]["projects"] // Type for projects translations
}

export default function Projects({ t }: ProjectsProps) {
  const projectsData = [
    {
      name: t.englishWorld.name,
      description: t.englishWorld.description,
      objective: t.englishWorld.objective,
      technologies: ["WordPress", "Elementor", "CSS Personalizado"],
      link: "https://academiaenglishworld.com",
      learned: t.englishWorld.learned,
      imageSrc: "/academia.png?height=300&width=500", // Placeholder image
    },
    {
      name: t.blueCore.name,
      description: t.blueCore.description,
      objective: t.blueCore.objective,
      technologies: ["HTML", "CSS", "JavaScript", "Figma"],
      link: "https://bluecore.es",
      learned: t.blueCore.learned,
      imageSrc: "/bluecore.png?height=300&width=500", // Placeholder image
    },
    {
      name: t.randomProjex.name,
      description: t.randomProjex.description,
      objective: t.randomProjex.objective,
      technologies: ["React", "Next.js", "Tailwind CSS", "Stripe (simulado)", "APIs de IA (simulado)"],
      link: "https://randomprojex.com",
      learned: t.randomProjex.learned,
      imageSrc: "/randomprojex.png?height=300&width=500", // Placeholder image
    },
  ]

  return (
    <section id="projects" className="relative z-10 py-16 md:py-24 px-4 max-w-6xl mx-auto">
      <h2 className="text-4xl font-bold text-center mb-12 text-white">{t.title}</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projectsData.map((project, index) => (
          <ProjectCard key={index} {...project} t={t} />
        ))}
      </div>
    </section>
  )
}
