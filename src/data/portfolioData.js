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

// About section content
export const about = {
  heading:  "About Me",
  tagline:  "Passionate developer. Lifelong learner.",
  bio: [
    "I'm Ediga Raghuveerendra, a full-stack developer trained at TAP Academy in Hyderabad. I specialise in building clean, performant web applications using React on the front-end and Node.js on the back-end.",
    "My training covered full-stack web development, artificial intelligence and augmented reality — giving me a unique blend of skills that bridges creative design and cutting-edge technology.",
    "When I'm not coding, I'm exploring new frameworks, contributing to open-source, and levelling up my AR skills.",
  ],
  stats: [
    { value: "10+",  label: "Projects Built"    },
    { value: "5+",   label: "Technologies"      },
    { value: "1+",   label: "Years Learning"    },
    { value: "100%", label: "Passion"           },
  ],
  // Highlighted tech tags shown under the bio
  techTags: ["React", "JavaScript", "Node.js", "Tailwind CSS", "MongoDB", "Git", "Augmented Reality", "AI/ML"],
  resumeUrl: "#", // replace with your actual CV link
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
