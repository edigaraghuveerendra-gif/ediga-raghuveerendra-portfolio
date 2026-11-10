// src/components/SoftSkills.jsx — Core soft skills and professional competencies in high-contrast light theme
import { softSkillsList } from "../data/portfolioData"

export function SoftSkillCard({ skill, index }) {
  return (
    <div
      data-aos="fade-up"
      data-aos-delay={index * 100}
      className="group bg-[#f8f8f8] border border-gray-200 rounded-3xl p-6 min-h-[220px] text-center flex flex-col items-center justify-center hover:scale-[1.03] hover:shadow-[0_10px_30px_rgba(255,42,42,0.12)] hover:border-red-200 transition-all duration-300"
    >
      {/* Emoji icon in a rounded square that tints red and scales on group-hover */}
      <div className="w-14 h-14 rounded-2xl bg-white border border-gray-200 flex items-center justify-center text-2xl mb-4 group-hover:bg-[#ff2a2a]/10 group-hover:scale-110 group-hover:border-red-300 transition-all duration-300 shadow-sm">
        {skill.icon}
      </div>

      {/* Uppercase name */}
      <h3 className="text-base font-black uppercase text-gray-900 tracking-wider mb-2 group-hover:text-[#ff2a2a] transition-colors">
        {skill.name}
      </h3>

      {/* Description */}
      <p className="text-gray-500 text-xs sm:text-sm leading-relaxed">
        {skill.desc}
      </p>
    </div>
  )
}

export default function SoftSkills() {
  if (!softSkillsList || softSkillsList.length === 0) {
    return null
  }

  return (
    <section
      id="soft-skills"
      className="bg-white pt-28 pb-32 px-6 md:px-12 relative overflow-hidden bg-[linear-gradient(to_right,#80808006_1px,transparent_1px),linear-gradient(to_bottom,#80808006_1px,transparent_1px)] bg-[size:60px_60px]"
    >
      {/* ── Curved Top Wave (dark Leadership → white SoftSkills) ── */}
      <div className="absolute top-0 left-0 right-0 w-full overflow-hidden leading-none z-10 pointer-events-none">
        <svg viewBox="0 0 1200 80" preserveAspectRatio="none" className="relative block w-full h-10 md:h-14 fill-white">
          <path d="M0,40 C150,80 350,0 600,40 C850,80 1050,0 1200,40 L1200,80 L0,80 Z" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">

        {/* ── Header ── */}
        <div data-aos="fade-up" className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-red-50 border border-red-200 text-[#ff2a2a] text-xs font-bold uppercase tracking-widest mb-3">
            Core Competencies
          </span>
          <h2 className="text-4xl md:text-5xl font-black uppercase text-gray-900 tracking-tight mb-4">
            Professional Soft Skills
          </h2>
          <p className="text-gray-500 text-sm md:text-base leading-relaxed">
            Essential interpersonal and problem-solving abilities that drive effective software engineering and team success.
          </p>
        </div>

        {/* ── Grid ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {softSkillsList.map((skill, index) => (
            <SoftSkillCard key={skill.name} skill={skill} index={index} />
          ))}
        </div>

      </div>
    </section>
  )
}
