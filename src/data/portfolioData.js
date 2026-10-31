// portfolioData.js — single source of truth for ALL portfolio content

// TAP Academy credit (used in Footer)
export const academy = {
  name: "TAP Academy",
  url: "https://thetapacademy.com/",
}

// Personal info
export const personal = {
  name: "Ediga Raghuveerendra",
  title: "Full-Stack Developer",
  email: "edigaraghuveerendra@gmail.com",
  github: "https://github.com/edigaraghuveerendra",
  linkedin: "https://linkedin.com/in/edigaraghuveerendra",
}

// Hero section content
export const hero = {
  greeting:    "Hello, I'm",
  name:        "Ediga Raghuveerendra",
  titles:      ["Full-Stack Developer", "React Developer", "UI/UX Enthusiast", "AR Explorer"],
  description: "I build fast, beautiful web experiences using React, Node.js and modern tooling. Trained at TAP Academy in full-stack development, AI and augmented reality.",
  cta: {
    primary:   { label: "View My Work",  href: "#projects" },
    secondary: { label: "Contact Me",    href: "#contact"  },
  },
}

// Navigation links (href matches section IDs)
export const navLinks = [
  { label: "Home",     href: "#home"     },
  { label: "About",    href: "#about"    },
  { label: "Skills",   href: "#skills"   },
  { label: "Process",  href: "#process"  },
  { label: "Projects", href: "#projects" },
  { label: "Contact",  href: "#contact"  },
]
