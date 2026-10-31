// portfolioData.js — single source of truth for ALL portfolio content

// TAP Academy credit (used in Footer)
export const academy = {
  name: "TAP Academy",
  url: "https://thetapacademy.com/",
}

// Personal info
export const personal = {
  name: "Ediga Raghuveerendra",
  title: "Java Full Stack Developer",
  email: "edigaraghuveerendra@gmail.com",
  github: "https://github.com/edigaraghuveerendra-gif",
  linkedin: "https://www.linkedin.com/in/ediga-raghuveerendra/",
}

export const personalInfo = {
  name: "Ediga Raghuveerendra",
  firstName: "Ediga Raghuveerendra",
  brandName: "Ediga Raghuveerendra",
  title: "Java Full Stack Developer",
  location: "Bengaluru, India",
  phone: "6305595501",
  emails: {
    primary: "edigaraghuveerendra@gmail.com",
    secondary: "",
  },
  summary: "Software Engineer with a strong foundation in Java, Object-Oriented Programming, SQL, and backend development, experienced in building database-driven web applications and implementing backend functionalities.",
  resumeUrl: "/Ediga_Raghuveerendra.pdf",
}

// Social links
export const socialLinks = {
  github: "https://github.com/edigaraghuveerendra-gif",
  linkedin: "https://www.linkedin.com/in/ediga-raghuveerendra/",
  instagram: "https://instagram.com",
}

// Footer content
export const footerContent = {
  taglines: [
    "Java Full Stack Developer",
    "Java · Spring Boot · React · MySQL",
    "Building robust database-driven applications",
  ],
  credential: "B.Tech in Data Science — RGMCET",
  copyright: `© ${new Date().getFullYear()} Ediga Raghuveerendra | Built with React`,
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

// Contact section
export const contact = {
  heading:    "Get In Touch",
  subheading: "Have a project in mind? Let's talk.",
  description:
    "I'm currently open to freelance work and full-time opportunities. Whether you have a question, a project idea, or just want to say hi — my inbox is always open!",
  email:    "edigaraghuveerendra@gmail.com",
  location: "Hyderabad, India",
  socials: [
    {
      label: "GitHub",
      url:   "https://github.com/edigaraghuveerendra",
      icon:  "github",
    },
    {
      label: "LinkedIn",
      url:   "https://linkedin.com/in/edigaraghuveerendra",
      icon:  "linkedin",
    },
    {
      label: "Email",
      url:   "mailto:edigaraghuveerendra@gmail.com",
      icon:  "email",
    },
  ],
  // ⚠️ Replace these three values with your own from https://emailjs.com
  emailjs: {
    serviceId:  "YOUR_SERVICE_ID",
    templateId: "YOUR_TEMPLATE_ID",
    publicKey:  "YOUR_PUBLIC_KEY",
  },
}

// Projects section
export const projects = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description:
      "Full-stack shopping app with product listings, cart, authentication and payment integration. Built with React, Node.js and MongoDB.",
    image: null, // replace with: import img from '../assets/projects/ecommerce.png'
    tags: ["React", "Node.js", "MongoDB", "Express"],
    category: "Full-Stack",
    github: "https://github.com/edigaraghuveerendra",
    live: "#",
    featured: true,
  },
  {
    id: 2,
    title: "Developer Portfolio",
    description:
      "This very portfolio — a React 19 + Vite + Tailwind CSS 4 SPA with Framer Motion animations, AOS scroll effects and EmailJS contact form.",
    image: null,
    tags: ["React", "Tailwind CSS", "Framer Motion", "Vite"],
    category: "Frontend",
    github: "https://github.com/edigaraghuveerendra",
    live: "#",
    featured: true,
  },
  {
    id: 3,
    title: "Task Manager App",
    description:
      "A Kanban-style task manager with drag-and-drop boards, deadlines and user authentication. Data persisted in MongoDB.",
    image: null,
    tags: ["React", "Node.js", "MongoDB", "REST API"],
    category: "Full-Stack",
    github: "https://github.com/edigaraghuveerendra",
    live: "#",
    featured: false,
  },
  {
    id: 4,
    title: "Weather Dashboard",
    description:
      "Real-time weather app consuming the OpenWeatherMap API. Shows 5-day forecast, humidity, wind speed with animated icons.",
    image: null,
    tags: ["React", "REST API", "CSS3"],
    category: "Frontend",
    github: "https://github.com/edigaraghuveerendra",
    live: "#",
    featured: false,
  },
  {
    id: 5,
    title: "AR Product Viewer",
    description:
      "Augmented-reality web experience that lets users place 3D product models in their real environment using WebXR and Three.js.",
    image: null,
    tags: ["Three.js", "WebXR", "JavaScript", "AR"],
    category: "AR / AI",
    github: "https://github.com/edigaraghuveerendra",
    live: "#",
    featured: true,
  },
  {
    id: 6,
    title: "Blog REST API",
    description:
      "RESTful API for a blogging platform: JWT auth, CRUD for posts and comments, image uploads via Cloudinary, rate limiting.",
    image: null,
    tags: ["Node.js", "Express", "MongoDB", "JWT"],
    category: "Backend",
    github: "https://github.com/edigaraghuveerendra",
    live: "#",
    featured: false,
  },
]

// Project filter tabs (order matters)
export const projectFilters = ["All", "Frontend", "Full-Stack", "Backend", "AR / AI"]

// Process section — how I work
export const process = {
  heading:    "My Process",
  subheading: "How I turn ideas into real products",
  steps: [
    {
      number: "01",
      icon:   "🔍",
      title:  "Discover",
      description:
        "I start by listening. Understanding the goal, the users, and the constraints before writing a single line of code. Great software starts with great questions.",
    },
    {
      number: "02",
      icon:   "🎨",
      title:  "Design",
      description:
        "I sketch wireframes and plan the component architecture. Tailwind utility classes keep the design consistent and the code clean from day one.",
    },
    {
      number: "03",
      icon:   "💻",
      title:  "Develop",
      description:
        "I build feature by feature — React components, API integrations, animations — with clean, commented, beginner-friendly code and regular Git commits.",
    },
    {
      number: "04",
      icon:   "🧪",
      title:  "Test",
      description:
        "I test across browsers and screen sizes, fix lint warnings, and review performance. Quality is non-negotiable before shipping.",
    },
    {
      number: "05",
      icon:   "🚀",
      title:  "Deploy",
      description:
        "I push to production with a CI/CD pipeline, add the final polish, and hand off clean documentation so the project is easy to maintain and grow.",
    },
  ],
}

// Skills section content
export const skillCategories = [
  {
    category: "Frontend",
    icon: "🖥️",
    skills: [
      { name: "React",       level: 85, color: "#61DAFB" },
      { name: "JavaScript",  level: 90, color: "#F7DF1E" },
      { name: "HTML5",       level: 95, color: "#E34F26" },
      { name: "CSS3",        level: 88, color: "#1572B6" },
      { name: "Tailwind CSS",level: 82, color: "#06B6D4" },
    ],
  },
  {
    category: "Backend",
    icon: "⚙️",
    skills: [
      { name: "Node.js",     level: 78, color: "#339933" },
      { name: "Express.js",  level: 75, color: "#ffffff" },
      { name: "MongoDB",     level: 72, color: "#47A248" },
      { name: "REST APIs",   level: 80, color: "#ff2a2a" },
      { name: "SQL",         level: 65, color: "#4479A1" },
    ],
  },
  {
    category: "Tools & Others",
    icon: "🛠️",
    skills: [
      { name: "Git & GitHub",level: 85, color: "#F05032" },
      { name: "Vite",        level: 80, color: "#646CFF" },
      { name: "Figma",       level: 70, color: "#F24E1E" },
      { name: "AI / ML",     level: 60, color: "#ff2a2a" },
      { name: "Augmented Reality", level: 65, color: "#00C4CC" },
    ],
  },
]

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
