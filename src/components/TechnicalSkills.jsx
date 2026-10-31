// src/components/TechnicalSkills.jsx — Technical Stack showcase with category cards and interactive skill pills
import { technicalSkills } from "../data/portfolioData"

// Small reusable badge pill for individual skills
export function SkillBadge({ name }) {
  return (
    <span className="inline-flex items-center px-4 py-2 rounded-full bg-white/5 border border-white/10 text-white text-sm font-medium hover:bg-red-600/20 hover:border-red-500/40 transition-colors duration-200 select-none">
      {name}
    </span>
  )
}

// Category card with backdrop blur, hover scaling, and red glow shadow
export function SkillCard({ category, index }) {
  return (
    <div
      data-aos="fade-up"
      data-aos-delay={index * 100}
      className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 hover:scale-[1.02] hover:border-red-500/30 hover:shadow-[0_0_25px_rgba(239,68,68,0.18)] transition-all duration-300 flex flex-col"
    >
      <h3 className="text-base sm:text-lg font-black uppercase text-white pb-3 border-b border-white/10 tracking-wider">
        {category.title}
      </h3>
      <div className="flex flex-wrap gap-3 mt-5">
        {category.skills.map((skill) => (
          <SkillBadge key={skill.name} name={skill.name} />
        ))}
      </div>
    </div>
  )
}

export default function TechnicalSkills() {
  return (
    <section id="skills" className="bg-[#0a0a0a] pt-24 pb-28 px-6 md:px-12 relative overflow-hidden">

      {/* ── Background Blurred Red Circles ── */}
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-red-600/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-red-600/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">

        {/* ── Header ── */}
        <div data-aos="fade-up" className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-red-600/10 border border-red-500/20 text-[#ff2a2a] text-xs font-bold uppercase tracking-widest mb-3">
            Technical Stack
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-white uppercase tracking-tight mb-4">
            My Skillset
          </h2>
          <p className="text-white/50 text-sm md:text-base leading-relaxed">
            A comprehensive collection of technologies and developer tools I use to build scalable software.
          </p>
        </div>

        {/* ── Categories Grid ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {technicalSkills?.categories?.map((cat, index) => (
            <SkillCard key={cat.title} category={cat} index={index} />
          ))}
        </div>

      </div>

    </section>
  )
}
