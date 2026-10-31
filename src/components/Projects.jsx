// Projects.jsx — dark section with filterable project cards
import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { projects, projectFilters } from "../data/portfolioData"

// GitHub icon SVG
function IconGithub() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
    </svg>
  )
}

// External link icon SVG
function IconExternal() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
    </svg>
  )
}

// Placeholder image when project has no screenshot yet
function PlaceholderImage({ title, tags }) {
  // Pick a gradient based on the first tag
  const gradients = {
    React:     "from-cyan-900 to-black",
    "Node.js": "from-green-900 to-black",
    "Three.js":"from-purple-900 to-black",
    MongoDB:   "from-green-800 to-black",
    default:   "from-gray-800 to-black",
  }
  const key = tags.find((t) => gradients[t]) || "default"
  const gradient = gradients[key] || gradients.default

  return (
    <div className={`w-full h-full bg-gradient-to-br ${gradient} flex flex-col items-center justify-center gap-3`}>
      <span className="text-5xl">💻</span>
      <span className="text-white/60 text-sm font-medium text-center px-4">{title}</span>
    </div>
  )
}

// Single project card
function ProjectCard({ project, index }) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.85 }}
      transition={{ duration: 0.4, delay: index * 0.07 }}
      className="group relative bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:border-[#ff2a2a]/60 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-[#ff2a2a]/10 flex flex-col"
    >
      {/* ── Image / preview area ── */}
      <div className="relative h-48 overflow-hidden">
        {project.image ? (
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          />
        ) : (
          <PlaceholderImage title={project.title} tags={project.tags} />
        )}

        {/* Featured badge */}
        {project.featured && (
          <span className="absolute top-3 left-3 px-2.5 py-1 bg-[#ff2a2a] text-white text-[10px] font-bold rounded-full uppercase tracking-widest">
            Featured
          </span>
        )}

        {/* Hover overlay with links */}
        <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
          <a
            href={project.github}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 px-4 py-2 rounded-full bg-white text-black text-xs font-bold hover:bg-[#ff2a2a] hover:text-white transition-colors duration-200"
          >
            <IconGithub /> Code
          </a>
          <a
            href={project.live}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 px-4 py-2 rounded-full bg-[#ff2a2a] text-white text-xs font-bold hover:bg-white hover:text-black transition-colors duration-200"
          >
            <IconExternal /> Live
          </a>
        </div>
      </div>

      {/* ── Card body ── */}
      <div className="p-6 flex flex-col flex-1">
        {/* Category label */}
        <p className="text-[#ff2a2a] text-xs font-bold uppercase tracking-widest mb-1">
          {project.category}
        </p>

        {/* Title */}
        <h3 className="text-white text-lg font-bold mb-2 group-hover:text-[#ff2a2a] transition-colors duration-300">
          {project.title}
        </h3>

        {/* Description */}
        <p className="text-gray-400 text-sm leading-relaxed flex-1">
          {project.description}
        </p>

        {/* Tech tags */}
        <div className="flex flex-wrap gap-2 mt-4">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="px-2.5 py-1 text-[10px] font-semibold bg-white/10 text-gray-300 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Bottom links row */}
        <div className="flex items-center gap-4 mt-5 pt-4 border-t border-white/10">
          <a
            href={project.github}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-1.5 text-gray-400 hover:text-white text-xs font-medium transition-colors duration-200"
          >
            <IconGithub /> GitHub
          </a>
          <a
            href={project.live}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-1.5 text-gray-400 hover:text-[#ff2a2a] text-xs font-medium transition-colors duration-200"
          >
            <IconExternal /> Live Demo
          </a>
        </div>
      </div>
    </motion.div>
  )
}

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState("All")

  // Filter projects based on active tab
  const filtered =
    activeFilter === "All"
      ? projects
      : projects.filter((p) => p.category === activeFilter)

  return (
    <section
      id="projects"
      className="relative bg-[#0a0a0a] py-28 px-6 overflow-hidden"
    >
      {/* ── Background pattern ── */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(#ff2a2a 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto">

        {/* ── Section heading ── */}
        <div className="text-center mb-12" data-aos="fade-up">
          <p className="text-[#ff2a2a] text-sm font-bold tracking-widest uppercase mb-2">
            What I&apos;ve Built
          </p>
          <h2 className="text-4xl sm:text-5xl font-black text-white">
            My Projects
          </h2>
          <div className="w-16 h-1 bg-[#ff2a2a] mx-auto mt-4 rounded-full" />
          <p className="text-gray-400 mt-5 max-w-xl mx-auto">
            A selection of projects I&apos;ve built — from full-stack apps to AR experiences.
          </p>
        </div>

        {/* ── Filter tabs ── */}
        <div
          className="flex flex-wrap justify-center gap-3 mb-12"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          {projectFilters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-5 py-2 rounded-full text-sm font-semibold border transition-all duration-300 ${
                activeFilter === filter
                  ? "bg-[#ff2a2a] border-[#ff2a2a] text-white shadow-lg shadow-[#ff2a2a]/30"
                  : "border-white/20 text-gray-400 hover:border-[#ff2a2a] hover:text-white"
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* ── Project grid with AnimatePresence for filter transitions ── */}
        <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filtered.map((project, i) => (
              <ProjectCard key={project.id} project={project} index={i} />
            ))}
          </AnimatePresence>
        </motion.div>

        {/* ── View all on GitHub ── */}
        <div className="text-center mt-14" data-aos="fade-up">
          <a
            href="https://github.com/edigaraghuveerendra"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full border-2 border-white/20 text-white font-bold text-sm hover:border-[#ff2a2a] hover:text-[#ff2a2a] hover:scale-105 transition-all duration-300"
          >
            <IconGithub />
            View All on GitHub
          </a>
        </div>

      </div>
    </section>
  )
}
