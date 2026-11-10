// src/components/Internships.jsx — Experience section with torn-paper top divider and internship cards
import { internshipsList } from "../data/portfolioData"

export function InternshipCard({ intern, index }) {
  return (
    <div
      data-aos="fade-up"
      data-aos-delay={index * 150}
      className="bg-black/20 backdrop-blur-md border border-white/10 rounded-3xl p-8 hover:scale-[1.02] transition-transform duration-300 flex flex-col justify-between"
    >
      <div>
        {/* Top row: Duration & Mini Badge */}
        <div className="flex items-center justify-between gap-4 mb-4">
          <span className="font-mono text-xs uppercase tracking-wider text-white/40">
            {intern.duration}
          </span>
          <span className="px-3 py-1 rounded-full bg-white/10 text-white text-[10px] font-bold uppercase tracking-widest">
            Internship
          </span>
        </div>

        {/* Role & Organization */}
        <h3 className="text-2xl font-black text-white leading-tight mb-1">
          {intern.role}
        </h3>
        <p className="text-xs uppercase font-bold tracking-widest text-red-200 mb-6">
          {intern.organization}
        </p>

        {/* Skills Gained List */}
        {intern.skills && intern.skills.length > 0 && (
          <div className="mb-6">
            <p className="text-xs font-bold uppercase tracking-wider text-white/80 mb-2">
              Skills Gained:
            </p>
            <ul className="space-y-1 text-sm text-red-50/90 list-disc list-inside">
              {intern.skills.map((skill, i) => (
                <li key={i}>{skill}</li>
              ))}
            </ul>
          </div>
        )}
      </div>

      {/* Technologies Row */}
      {intern.tech && intern.tech.length > 0 && (
        <div className="pt-4 border-t border-white/10">
          <p className="text-[10px] font-bold uppercase tracking-widest text-white/60 mb-2">
            Technologies:
          </p>
          <div className="flex flex-wrap gap-1.5 font-mono text-[11px]">
            {intern.tech.map((t, i) => (
              <span
                key={i}
                className="px-2.5 py-1 rounded-md bg-black/40 text-red-100 border border-white/10"
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

export default function Internships() {
  if (!internshipsList || internshipsList.length === 0) {
    return null
  }

  return (
    <section id="internships" className="bg-[#ff2a2a] pt-24 pb-32 px-6 md:px-12 relative overflow-hidden">

      {/* ── Decorative Pulsing Star ── */}
      <svg
        viewBox="0 0 24 24"
        className="absolute bottom-10 left-8 w-12 h-12 fill-black opacity-20 animate-pulse pointer-events-none"
      >
        <path d="M12 0l2.5 8.5L23 12l-8.5 2.5L12 23l-2.5-8.5L1 12l8.5-2.5z" />
      </svg>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div data-aos="fade-up" className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-black uppercase text-black tracking-tight mb-3">
            Work Experience
          </h2>
          <p className="text-red-100 text-sm md:text-base leading-relaxed">
            Professional roles, internships, and engineering contributions.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8">
          {internshipsList.map((intern, index) => (
            <InternshipCard key={intern.organization + index} intern={intern} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
