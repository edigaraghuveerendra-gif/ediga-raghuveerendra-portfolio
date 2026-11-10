// src/components/Leadership.jsx — Timeline of activities, competitive coding, and leadership engagement
import { leadershipList } from "../data/portfolioData"

export function LeadershipItem({ item, index }) {
  const isEven = index % 2 === 0

  return (
    <div className="relative flex flex-col md:flex-row items-center justify-between w-full mb-12 last:mb-0">

      {/* ── CARD (Left on even, Right on odd on md+) ── */}
      <div className={`w-full md:w-[45%] pl-12 md:pl-0 ${isEven ? "md:order-1 md:text-right" : "md:order-3 md:text-left"}`}>
        <div
          data-aos={isEven ? "fade-right" : "fade-left"}
          className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 hover:border-red-500/30 transition-all duration-300 group"
        >
          {/* Badge Pill */}
          {item.badge && (
            <span className="inline-block px-3 py-1 rounded-full bg-red-600/10 border border-red-500/20 text-[#ff2a2a] text-[10px] font-bold uppercase tracking-widest mb-3">
              {item.badge}
            </span>
          )}

          {/* Title */}
          <h3 className="text-lg md:text-xl font-bold text-white group-hover:text-[#ff2a2a] transition-colors mb-1">
            {item.title}
          </h3>

          {/* Role */}
          <p className="font-mono text-xs uppercase tracking-wider text-red-400 font-semibold mb-3">
            {item.role}
          </p>

          {/* Description */}
          <p className="text-white/60 text-sm leading-relaxed">
            {item.description}
          </p>
        </div>
      </div>

      {/* ── CENTRE / TIMELINE DOT ── */}
      <div className="absolute left-4 md:left-1/2 -translate-x-1/2 flex items-center justify-center z-20 pointer-events-none">
        <div className="w-4 h-4 rounded-full bg-[#ff2a2a] ring-4 ring-black shadow-[0_0_15px_#ff2a2a]" />
      </div>

      {/* ── SPACER (other side on md+) ── */}
      <div className={`hidden md:block md:w-[45%] ${isEven ? "md:order-3" : "md:order-1"}`} />

    </div>
  )
}

export default function Leadership() {
  if (!leadershipList || leadershipList.length === 0) {
    return null
  }

  return (
    <section
      id="leadership"
      className="bg-[#0a0a0a] bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:80px_80px] pt-28 pb-36 md:pb-44 px-6 md:px-12 relative overflow-hidden"
    >

      <div className="max-w-6xl mx-auto relative z-10">

        {/* ── Header ── */}
        <div data-aos="fade-up" className="text-center max-w-2xl mx-auto mb-20">
          <span className="inline-block px-4 py-1.5 rounded-full bg-red-600/10 border border-red-500/20 text-[#ff2a2a] text-xs font-bold uppercase tracking-widest mb-3">
            Activities
          </span>
          <h2 className="text-4xl md:text-5xl font-black uppercase text-white tracking-tight mb-4">
            Leadership & Engagement
          </h2>
          <p className="text-white/50 text-sm md:text-base leading-relaxed">
            Continuous technical growth, competitive coding challenges, and collaborative initiatives.
          </p>
        </div>

        {/* ── Vertical Timeline Container ── */}
        <div className="relative w-full">
          {/* Vertical Timeline Gradient Line */}
          <div className="absolute top-0 bottom-0 left-4 md:left-1/2 -translate-x-1/2 w-0.5 bg-gradient-to-b from-[#ff2a2a] via-red-500/50 to-white/10" />

          {/* Timeline Items */}
          <div className="flex flex-col w-full">
            {leadershipList.map((item, index) => (
              <LeadershipItem key={item.title + index} item={item} index={index} />
            ))}
          </div>
        </div>

      </div>

      {/* ── Curved Bottom Wave Divider → into SoftSkills (white bg) ── */}
      <div className="absolute bottom-0 left-0 right-0 w-full overflow-hidden leading-none z-10 pointer-events-none translate-y-[1px]">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-full h-12 md:h-20 fill-white">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C59.71,118.08,130.83,119.62,189.5,99.8,242.79,81.82,282.88,63.6,321.39,56.44Z" />
        </svg>
      </div>
    </section>
  )
}
