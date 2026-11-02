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

// EmailJS credentials (values loaded from git-ignored .env.local)
export const emailjsConfig = {
  serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID || "YOUR_EMAILJS_SERVICE_ID",
  templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID || "YOUR_EMAILJS_TEMPLATE_ID",
  publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY || "YOUR_EMAILJS_PUBLIC_KEY",
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

export const heroContent = {
  greeting: "Hi, I'm Ediga Raghuveerendra",
  titleHighlight: "Java Full Stack Developer",
  subtitle: "Software Engineer experienced in building robust, database-driven web applications with Java, Spring Boot, and modern frontends.",
  ctaPrimary: { text: "View My Work", href: "#projects" },
  ctaSecondary: {
    text: "Contact Me",
    href: "mailto:edigaraghuveerendra@gmail.com?subject=Hiring Inquiry – Portfolio&body=Hello,%0D%0A%0D%0AI came across your portfolio and would like to discuss an opportunity with you.%0D%0A%0D%0ABest Regards,",
  },
  ctaResume: { text: "Download Resume", href: "/Ediga_Raghuveerendra.pdf" },
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
  emailjs: emailjsConfig,
}

// Projects section
export const projects = [
  {
    id: "e-commerce-fashion-store",
    number: "01",
    badge: "🚀 Flagship Project",
    title: "E-Commerce Fashion Store",
    description:
      "Developed a Java-based e-commerce web application supporting product browsing, user accounts, shopping cart, and order management. Implemented backend business logic, authentication, and CRUD operations using Core Java, JSP, Servlets, and JDBC. Designed and managed relational database tables using MySQL and SQL.",
    techTags: ["Java", "JDBC", "MySQL", "JSP", "Servlets", "HTML", "CSS", "JavaScript", "Apache Tomcat"],
    links: {
      github: "https://github.com/edigaraghuveerendra-gif",
      demo: "",
    },
    isFlagship: true,
  },
  {
    id: "medicore-dashboard",
    number: "02",
    badge: "Healthcare System",
    title: "MediCore – Medical Dashboard Platform",
    description:
      "Developed a hospital appointment management system supporting patient, doctor, appointment, and review management. Integrated REST APIs for appointment booking and patient management. Implemented authentication, role-based access control for Admin and Patient modules, and database operations using SQL.",
    techTags: ["JavaScript", "REST APIs", "SQLite", "HTML5", "CSS3"],
    links: {
      github: "https://github.com/edigaraghuveerendra-gif",
      demo: "",
    },
    isFlagship: false,
  },
  {
    id: "developer-portfolio",
    number: "03",
    badge: null,
    title: "Interactive Developer Portfolio",
    description:
      "Modern, responsive portfolio website featuring a 3D flip visiting card, interactive video reel player, and optimized Tailwind CSS 4 styling.",
    techTags: ["React 19", "Vite", "Tailwind CSS", "Framer Motion", "AOS"],
    links: {
      github: "https://github.com/edigaraghuveerendra-gif",
      demo: "#",
    },
    isFlagship: false,
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

// Technical Skills structure
export const technicalSkills = {
  categories: [
    {
      title: "Programming Languages",
      skills: [{ name: "Java" }, { name: "SQL" }, { name: "Python" }],
    },
    {
      title: "Core Java",
      skills: [{ name: "OOP" }, { name: "Exception Handling" }, { name: "Collections Framework" }],
    },
    {
      title: "Backend Development",
      skills: [{ name: "Spring Boot" }, { name: "Microservices" }, { name: "REST APIs" }, { name: "JDBC" }],
    },
    {
      title: "Databases",
      skills: [{ name: "MySQL" }, { name: "Relational Database Design" }, { name: "Database Normalization" }],
    },
    {
      title: "Web Development",
      skills: [{ name: "HTML" }, { name: "CSS" }, { name: "JavaScript" }, { name: "Tailwind CSS" }],
    },
    {
      title: "Developer Tools",
      skills: [{ name: "Git" }, { name: "GitHub" }, { name: "VS Code" }, { name: "Eclipse IDE" }, { name: "MySQL Workbench" }],
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

export const aboutContent = {
  heading: "About Me",
  bio: `Hi, my name is <span class="text-black text-xl font-black mx-1 tracking-wide uppercase">Ediga Raghuveerendra</span>, a Java Full Stack Developer based in Bengaluru. I am a B.Tech Data Science graduate from RGMCET with hands-on experience building database-driven web applications using Java, JDBC, Servlets, and MySQL, while sharpening my skills through the placement training program at TAP Academy. I continuously strengthen my programming abilities through Data Structures and Algorithms practice and enjoy building scalable, robust software.`,
  techStack: ["Java", "Spring Boot", "MySQL", "JavaScript", "React"],
}

// Process & Workflow Content
export const skillsContent = {
  badge: "My Process",
  heading: "Here's how I turn ideas into real-world products",
  description: "A structured engineering approach from database architecture to production deployment.",
  cards: [
    {
      number: "01",
      title: "Research",
      text: "Understanding system requirements, user expectations, and outlining database schema constraints.",
    },
    {
      number: "02",
      title: "Design",
      text: "Designing relational database tables, REST API contracts, and user-centric component flows.",
    },
    {
      number: "03",
      title: "Develop",
      text: "Writing modular, object-oriented Java code with clean architecture, JDBC, and seamless API integrations.",
    },
    {
      number: "04",
      title: "Deploy",
      text: "Testing endpoints, validating CRUD operations, and deploying reliable web solutions.",
    },
  ],
  endText: "Ready to ship!",
}

// Activities / Leadership
export const leadershipList = [
  {
    title: "LeetCode & Competitive Programming",
    description: "Regularly practice Data Structures and Algorithms on LeetCode to strengthen problem-solving and algorithmic thinking.",
    role: "Problem Solver",
    badge: "DSA",
  },
  {
    title: "Coding Contests & Hackathons",
    description: "Participate in programming challenges on LeetCode and GeeksforGeeks, solving algorithmic problems under time constraints.",
    role: "Contestant",
    badge: "Competitive",
  },
  {
    title: "AI-Assisted Development Workflow",
    description: "Explore modern AI-assisted engineering tools and developer agents to improve productivity and code quality.",
    role: "Developer",
    badge: "Innovation",
  },
]

// Internships (empty if none provided)
export const internshipsList = []

// Soft Skills
export const softSkillsList = [
  {
    name: "Problem Solving",
    icon: "🧩",
    desc: "Strong aptitude for breaking down complex challenges into structured, maintainable code.",
  },
  {
    name: "Analytical Thinking",
    icon: "📈",
    desc: "Rigorous focus on data models, normalization, logic flow, and algorithm efficiency.",
  },
  {
    name: "Adaptability",
    icon: "🔄",
    desc: "Fast learner eager to adopt new technologies, backend frameworks, and engineering standards.",
  },
  {
    name: "Creativity",
    icon: "💡",
    desc: "Approaching system architecture and UI/UX with fresh perspectives and clean aesthetics.",
  },
]

// Navigation links (href matches section IDs)
export const navLinks = [
  { label: "Home",     href: "#home"     },
  { label: "About",    href: "#about"    },
  { label: "Skills",   href: "#skills"   },
  { label: "Process",  href: "#process"  },
  { label: "Projects", href: "#projects" },
  { label: "Contact",  href: "#contact"  },
]
