// src/components/Projects.jsx — Showcase of key projects with gradient flagship borders and interactive links
import { projects, socialLinks } from "../data/portfolioData"

// Small GitHub inline SVG icon
export function GitHubIcon({ className = "w-4 h-4" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
    </svg>
  )
}

// Small External Link inline SVG icon
export function ExternalLinkIcon({ className = "w-4 h-4" }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
    </svg>
  )
}

// Card component with gradient border for flagship projects
export function ProjectCard({ project, aosDelay }) {
  return (
    <div
      data-aos="fade-up"
      data-aos-delay={aosDelay}
      className={`p-[1px] rounded-2xl ${
        project.isFlagship
          ? "bg-gradient-to-r from-red-500/50 via-white/10 to-red-500/30 hover:from-red-500/70 hover:via-white/20 hover:to-red-500/50"
          : "bg-white/10 hover:bg-white/20"
      } transition-all duration-300`}
    >
      <div className="rounded-2xl p-6 md:p-8 backdrop-blur-md bg-[#0f0f0f]/90 flex flex-col justify-between h-full">

        <div>
          {/* Optional Badge Pill */}
          {project.badge && (
            <span className="inline-block px-3 py-1 rounded-full bg-red-500/10 border border-red-500/20 text-[#ff2a2a] text-xs font-bold uppercase tracking-widest mb-4">
              {project.badge}
            </span>
          )}

          {/* Title and Big Faint Serif-Italic Number */}
          <div className="flex items-baseline justify-between gap-4 mb-3">
            <h3 className="text-2xl md:text-3xl font-black text-white tracking-tight">
              {project.title}
            </h3>
            <span className="text-4xl md:text-5xl font-black italic font-serif text-white/10 select-none shrink-0">
              {project.number}
            </span>
          </div>

          {/* Description */}
          <p className="text-white/60 text-sm md:text-base leading-relaxed mb-6">
            {project.description}
          </p>

          {/* Tech Tag Pills */}
          <div className="flex flex-wrap gap-2 mb-8">
            {project.techTags?.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-white/80 text-xs font-bold hover:border-[#ff2a2a] hover:text-[#ff2a2a] transition-colors select-none"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Action Buttons Row */}
        <div className="flex flex-wrap gap-3 items-center pt-2">
          {/* GitHub Button */}
          {project.links?.github && (
            <a
              href={project.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/10 border border-white/20 text-white font-semibold text-xs md:text-sm hover:bg-white hover:text-black transition-all duration-200"
            >
              <GitHubIcon className="w-4 h-4" />
              GitHub
            </a>
          )}

          {/* Live Demo or Demo Coming Soon */}
          {project.links?.demo && project.links.demo.trim() !== "" ? (
            <a
              href={project.links.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#ff2a2a] text-white font-semibold text-xs md:text-sm hover:bg-[#cc0000] hover:scale-105 transition-all duration-200 shadow-lg shadow-[#ff2a2a]/20"
            >
              <ExternalLinkIcon className="w-4 h-4" />
              Live Demo
            </a>
          ) : (
            <a
              href="#"
              onClick={(e) => e.preventDefault()}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/5 border border-white/10 text-white/40 font-semibold text-xs md:text-sm cursor-not-allowed select-none"
            >
              <ExternalLinkIcon className="w-4 h-4 text-white/30" />
              Demo Coming Soon
            </a>
          )}
        </div>

      </div>
    </div>
  )
}

export default function Projects() {
  return (
    <section
      id="projects"
      className="bg-[#0a0a0a] bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:80px_80px] pt-24 pb-32 px-6 md:px-12 relative"
    >
      <div className="max-w-7xl mx-auto">

        {/* ── Section Header ── */}
        <div data-aos="fade-up" className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-red-600/10 border border-red-500/20 text-[#ff2a2a] text-xs font-bold uppercase tracking-widest mb-3">
            Featured Projects
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white tracking-tight mb-4">
            Work that speaks for itself
          </h2>
          <p className="text-white/50 text-sm md:text-base leading-relaxed">
            A curated selection of software solutions, database architectures, and web platforms I have built.
          </p>
        </div>

        {/* ── Cards in flex-col gap-6 md:gap-8 ── */}
        <div className="flex flex-col gap-6 md:gap-8 max-w-5xl mx-auto">
          {projects?.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              aosDelay={(index + 1) * 100}
            />
          ))}
        </div>

        {/* ── Centred "Explore All My Repositories" Pill Button ── */}
        <div data-aos="fade-up" className="text-center mt-16">
          <a
            href={socialLinks?.github || "https://github.com/edigaraghuveerendra-gif"}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-3.5 rounded-full bg-white/10 border border-white/20 text-white font-bold text-sm hover:bg-white hover:text-black hover:scale-105 transition-all duration-300 shadow-xl"
          >
            <GitHubIcon className="w-5 h-5" />
            Explore All My Repositories
            <svg className="w-4 h-4 ml-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
        </div>

      </div>
    </section>
  )
}
