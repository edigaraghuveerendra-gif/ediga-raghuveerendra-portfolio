// Process.jsx — white section showing the 5-step workflow with a timeline
import { motion } from "framer-motion"
import { process } from "../data/portfolioData"

export default function Process() {
  return (
    <section
      id="process"
      className="relative bg-white text-black py-28 px-6 overflow-hidden"
    >
      {/* ── Decorative blobs ── */}
      <div className="absolute -top-20 -right-20 w-80 h-80 bg-[#ff2a2a]/5 rounded-full blur-2xl pointer-events-none" />
      <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-[#ff2a2a]/5 rounded-full blur-2xl pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto">

        {/* ── Section heading ── */}
        <div className="text-center mb-20" data-aos="fade-up">
          <p className="text-[#ff2a2a] text-sm font-bold tracking-widest uppercase mb-2">
            Behind The Build
          </p>
          <h2 className="text-4xl sm:text-5xl font-black text-black">
            {process.heading}
          </h2>
          <div className="w-16 h-1 bg-[#ff2a2a] mx-auto mt-4 rounded-full" />
          <p className="text-gray-500 mt-5 max-w-xl mx-auto">
            {process.subheading}
          </p>
        </div>

        {/* ── Desktop: horizontal timeline ── */}
        <div className="hidden lg:block">

          {/* Connecting line across the top of the step numbers */}
          <div className="relative flex items-start justify-between gap-4">

            {/* The horizontal rule sits at the centre of the number circles */}
            <div className="absolute top-9 left-[5%] right-[5%] h-0.5 bg-gradient-to-r from-transparent via-[#ff2a2a]/40 to-transparent" />

            {process.steps.map((step, i) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, delay: i * 0.15, ease: "easeOut" }}
                className="relative flex flex-col items-center text-center flex-1 px-4 group"
              >
                {/* Step number circle */}
                <div className="relative z-10 w-[72px] h-[72px] rounded-full bg-black flex items-center justify-center mb-5 ring-4 ring-white shadow-xl group-hover:bg-[#ff2a2a] transition-colors duration-300">
                  <span className="text-2xl font-black text-white leading-none">
                    {step.number}
                  </span>
                </div>

                {/* Icon */}
                <span className="text-3xl mb-3">{step.icon}</span>

                {/* Title */}
                <h3 className="text-lg font-bold text-black mb-2 group-hover:text-[#ff2a2a] transition-colors duration-300">
                  {step.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-gray-500 leading-relaxed">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* ── Mobile: vertical timeline ── */}
        <div className="lg:hidden relative">

          {/* Vertical line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#ff2a2a]/60 via-[#ff2a2a]/20 to-transparent" />

          <div className="flex flex-col gap-10">
            {process.steps.map((step, i) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.55, delay: i * 0.1, ease: "easeOut" }}
                className="relative flex items-start gap-6 pl-4 group"
              >
                {/* Step number circle (sits on the vertical line) */}
                <div className="relative z-10 shrink-0 w-[52px] h-[52px] rounded-full bg-black flex items-center justify-center ring-4 ring-white shadow-lg group-hover:bg-[#ff2a2a] transition-colors duration-300">
                  <span className="text-base font-black text-white">
                    {step.number}
                  </span>
                </div>

                {/* Content */}
                <div className="pt-2 pb-2">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-xl">{step.icon}</span>
                    <h3 className="text-lg font-bold text-black group-hover:text-[#ff2a2a] transition-colors duration-300">
                      {step.title}
                    </h3>
                  </div>
                  <p className="text-sm text-gray-500 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* ── Bottom CTA strip ── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-20 rounded-2xl bg-black text-white p-10 text-center relative overflow-hidden"
        >
          {/* Red glow behind the CTA */}
          <div className="absolute inset-0 bg-[#ff2a2a]/10 blur-2xl pointer-events-none" />
          <p className="relative text-2xl sm:text-3xl font-black mb-3">
            Ready to build something{" "}
            <span className="text-[#ff2a2a]">great together?</span>
          </p>
          <p className="relative text-gray-400 mb-7 text-sm sm:text-base">
            Let&apos;s go through this process for your next project.
          </p>
          <a
            href="#contact"
            className="relative inline-block px-8 py-3.5 rounded-full bg-[#ff2a2a] text-white font-bold text-sm hover:bg-[#cc0000] hover:scale-105 transition-all duration-300 shadow-lg shadow-[#ff2a2a]/30"
          >
            Start a Conversation →
          </a>
        </motion.div>

      </div>
    </section>
  )
}
