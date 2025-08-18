export const translations = {
  es: {
    hero: {
      greeting: "Hola, soy",
      name: "Pablo Estévez",
      tagline: "Desarrollador web apasionado por crear experiencias digitales impactantes.",
    },
    header: {
      aboutMe: "Sobre mí",
      projects: "Proyectos",
      contact: "Contacto",
    },
    aboutMe: {
      title: "Sobre mí",
      intro: "Hola, soy",
      age: "18 años",
      experience: "1 año y medio de experiencia",
      passion:
        "Me apasiona transformar ideas en soluciones digitales funcionales y atractivas. Mi enfoque es crear productos que no solo se vean bien, sino que también ofrezcan una experiencia de usuario excepcional.",
      skillsIntro: "Domino herramientas clave como",
      skills: "HTML, CSS, JavaScript, React y WordPress",
      skillsOutro:
        ", lo que me permite abordar una amplia gama de proyectos, desde sitios web estáticos hasta aplicaciones web dinámicas.",
      learning:
        "Siempre estoy buscando aprender nuevas tecnologías y mejorar mis habilidades para ofrecer las mejores soluciones a mis clientes.",
    },
    projects: {
      title: "Portfolio / Proyectos",
      descriptionLabel: "Descripción:",
      objectiveLabel: "Objetivo:",
      technologiesLabel: "Tecnologías:",
      learnedLabel: "Qué aprendí:",
      viewProject: "Ver Proyecto",
      englishWorld: {
        name: "English World",
        description: "Web moderna para academia de inglés.",
        objective:
          "Crear una plataforma atractiva y funcional para una academia de inglés, mejorando su presencia online y facilitando la inscripción de estudiantes.",
        learned: "Optimización de rendimiento en WordPress y diseño responsivo para diferentes dispositivos.",
      },
      blueCore: {
        name: "BlueCore",
        description: "Sitio para empresa ficticia de hosting con diseño técnico.",
        objective:
          "Diseñar un sitio web que transmita confianza y profesionalidad para una empresa de hosting, destacando sus servicios técnicos y seguridad.",
        learned: "Implementación de animaciones CSS complejas y gestión de proyectos de diseño web desde cero.",
      },
      randomProjex: {
        name: "Randomprojex",
        description: "Tienda online creada con IA para camisetas.",
        objective:
          "Desarrollar una tienda de comercio electrónico innovadora utilizando herramientas de IA para la generación de diseños y contenido, enfocada en la venta de camisetas personalizadas.",
        learned: "Integración de APIs externas y desarrollo de interfaces de usuario dinámicas con React y Next.js.",
      },
    },
    contact: {
      title: "Contacto",
      nameLabel: "Nombre",
      namePlaceholder: "Tu nombre",
      emailLabel: "Email",
      emailPlaceholder: "tu@email.com",
      messageLabel: "Mensaje",
      messagePlaceholder: "Escribe tu mensaje aquí...",
      sendButton: "Enviar Mensaje",
      sentMessage: "Mensaje enviado (simulado). ¡Gracias por contactar!",
      emailContact: "Email:",
      discordContact: "Discord:",
    },
  },
  en: {
    hero: {
      greeting: "Hi, I'm",
      name: "Pablo Estévez",
      tagline: "Web developer passionate about creating impactful digital experiences.",
    },
    header: {
      aboutMe: "About Me",
      projects: "Projects",
      contact: "Contact",
    },
    aboutMe: {
      title: "About Me",
      intro: "Hi, I'm",
      age: "18 years old",
      experience: "1.5 years of experience",
      passion:
        "I'm passionate about transforming ideas into functional and attractive digital solutions. My focus is on creating products that not only look good but also offer an exceptional user experience.",
      skillsIntro: "I master key tools such as",
      skills: "HTML, CSS, JavaScript, React, and WordPress",
      skillsOutro:
        ", which allows me to tackle a wide range of projects, from static websites to dynamic web applications.",
      learning:
        "I am always looking to learn new technologies and improve my skills to offer the best solutions to my clients.",
    },
    projects: {
      title: "Portfolio / Projects",
      descriptionLabel: "Description:",
      objectiveLabel: "Objective:",
      technologiesLabel: "Technologies:",
      learnedLabel: "What I learned:",
      viewProject: "View Project",
      englishWorld: {
        name: "English World",
        description: "Modern website for an English academy.",
        objective:
          "Create an attractive and functional platform for an English academy, improving its online presence and facilitating student enrollment.",
        learned: "WordPress performance optimization and responsive design for different devices.",
      },
      blueCore: {
        name: "BlueCore",
        description: "Website for a fictional hosting company with a technical design.",
        objective:
          "Design a website that conveys trust and professionalism for a hosting company, highlighting its technical services and security.",
        learned: "Implementation of complex CSS animations and managing web design projects from scratch.",
      },
      randomProjex: {
        name: "Randomprojex",
        description: "Online store created with AI for t-shirts.",
        objective:
          "Develop an innovative e-commerce store using AI tools for design and content generation, focused on selling custom t-shirts.",
        learned: "Integration of external APIs and development of dynamic user interfaces with React and Next.js.",
      },
    },
    contact: {
      title: "Contact",
      nameLabel: "Name",
      namePlaceholder: "Your name",
      emailLabel: "Email",
      emailPlaceholder: "your@email.com",
      messageLabel: "Message",
      messagePlaceholder: "Write your message here...",
      sendButton: "Send Message",
      sentMessage: "Message sent (simulated). Thanks for contacting!",
      emailContact: "Email:",
      discordContact: "Discord:",
    },
  },
}

export type Language = "es" | "en"
export type Translations = typeof translations
