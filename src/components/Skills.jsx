// Skills.jsx — dark section with animated skill bars grouped by category
import { useEffect, useRef, useState } from "react"
import { motion } from "framer-motion"
import { skillCategories } from "../data/portfolioData"

// A single animated progress bar — counts up when it enters the viewport
function SkillBar({ name, level, color, delay }) {
  const [width, setWidth] = useState(0)
  const ref = useRef(null)

  useEffect(() => {
    // Use IntersectionObserver to trigger fill only when visible
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setWidth(level), delay)
          observer.disconnect()
        }
      },
      { threshold: 0.3 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [level, delay])

  return (
    <div ref={ref} className="mb-5">
      {/* Label row */}
      <div className="flex justify-between items-center mb-1.5">
        <span className="text-sm font-semibold text-gray-200">{name}</span>
        <span className="text-xs font-bold" style={{ color }}>{level}%</span>
      </div>
      {/* Track */}
      <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">
        {/* Fill */}
        <div
          className="h-full rounded-full transition-all duration-1000 ease-out"
          style={{ width: `${width}%`, backgroundColor: color }}
        />
      </div>
    </div>
  )
}

// Category card containing multiple skill bars
function CategoryCard({ category, icon, skills, cardDelay }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, delay: cardDelay, ease: "easeOut" }}
      className="bg-white/5 border border-white/10 rounded-2xl p-7 hover:border-[#ff2a2a]/50 transition-colors duration-300 group"
    >
      {/* Card header */}
      <div className="flex items-center gap-3 mb-6">
        <span className="text-3xl">{icon}</span>
        <h3 className="text-xl font-bold text-white group-hover:text-[#ff2a2a] transition-colors duration-300">
          {category}
        </h3>
        {/* Small red accent line */}
        <div className="flex-1 h-px bg-white/10" />
      </div>

      {/* Skill bars */}
      {skills.map((skill, i) => (
        <SkillBar
          key={skill.name}
          name={skill.name}
          level={skill.level}
          color={skill.color}
          delay={i * 120} // stagger each bar
        />
      ))}
    </motion.div>
  )
}

export default function Skills() {
  return (
    <section
      id="skills"
      className="relative bg-[#0a0a0a] py-28 px-6 overflow-hidden"
    >
      {/* ── Background grid pattern ── */}
      <div
        className="absolute inset-0 opacity-5 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(#ff2a2a 1px, transparent 1px), linear-gradient(90deg, #ff2a2a 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* ── Glow blob ── */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#ff2a2a]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto">

        {/* ── Section heading ── */}
        <div className="text-center mb-16" data-aos="fade-up">
          <p className="text-[#ff2a2a] text-sm font-bold tracking-widest uppercase mb-2">
            What I Know
          </p>
          <h2 className="text-4xl sm:text-5xl font-black text-white">
            My Skills
          </h2>
          <div className="w-16 h-1 bg-[#ff2a2a] mx-auto mt-4 rounded-full" />
          <p className="text-gray-400 mt-5 max-w-xl mx-auto">
            A snapshot of the technologies I work with — from pixel-perfect frontends to solid backends and beyond.
          </p>
        </div>

        {/* ── Three category cards ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((cat, i) => (
            <CategoryCard
              key={cat.category}
              category={cat.category}
              icon={cat.icon}
              skills={cat.skills}
              cardDelay={i * 0.15}
            />
          ))}
        </div>

        {/* ── Bottom badge row ── */}
        <div
          className="mt-16 flex flex-wrap justify-center gap-3"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          {skillCategories.flatMap((cat) => cat.skills).map((skill) => (
            <span
              key={skill.name}
              className="px-4 py-1.5 text-xs font-bold rounded-full border text-gray-300 hover:text-white transition-all duration-300 hover:scale-105 cursor-default"
              style={{ borderColor: `${skill.color}55`, backgroundColor: `${skill.color}11` }}
            >
              {skill.name}
            </span>
          ))}
        </div>

      </div>
    </section>
  )
}
