// src/components/About.jsx — Red background section with Framer-Motion ID badge on a lanyard and torn-paper divider
import { motion } from "framer-motion"
import stackImage from "../assets/about/profile.png"
import { aboutContent } from "../data/portfolioData"

export default function About() {
  return (
    <section id="about" className="bg-[#ff2a2a] pt-20 pb-40 px-6 md:px-12 relative overflow-hidden">

      {/* ── Decorative 4-point star (Top-Right) ── */}
      <svg
        viewBox="0 0 24 24"
        className="absolute top-10 right-10 w-8 h-8 md:w-12 md:h-12 fill-black opacity-30 animate-pulse pointer-events-none"
      >
        <path d="M12 0l2.5 8.5L23 12l-8.5 2.5L12 23l-2.5-8.5L1 12l8.5-2.5z" />
      </svg>

      {/* ── Decorative 4-point star (Bottom-Left) ── */}
      <svg
        viewBox="0 0 24 24"
        style={{ animationDelay: "1s" }}
        className="absolute bottom-36 left-8 w-10 h-10 md:w-14 md:h-14 fill-black opacity-30 animate-pulse pointer-events-none"
      >
        <path d="M12 0l2.5 8.5L23 12l-8.5 2.5L12 23l-2.5-8.5L1 12l8.5-2.5z" />
      </svg>

      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-16 items-start relative z-10">

        {/* ── Left: ID Badge on a Lanyard (Framer Motion Spring Drop) ── */}
        <div className="md:w-[350px] shrink-0 w-full flex justify-center md:justify-start pt-16">
          <motion.div
            initial={{ y: -300, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ type: "spring", stiffness: 110, damping: 9, mass: 1.1 }}
            className="relative"
          >
            {/* Black lanyard string extending upwards */}
            <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-3 h-40 bg-black rounded-b-sm" />

            {/* Grey clip rectangle */}
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-8 h-4 bg-gray-400 rounded-sm border border-gray-600 shadow-md z-20" />

            {/* Dark ID Card */}
            <div className="relative bg-gray-900 max-w-[280px] w-full rounded-2xl p-3 shadow-2xl shadow-black/80 -rotate-3 hover:rotate-0 transition-transform duration-500 z-10">
              {/* Cutout slot at the top */}
              <div className="w-12 h-2 bg-black/80 rounded-full mx-auto mb-3" />

              {/* Photo inside */}
              <img
                src={stackImage}
                alt="Ediga Raghuveerendra portrait"
                className="w-full aspect-[3/4] rounded-xl object-cover object-top shadow-inner"
              />
            </div>
          </motion.div>
        </div>

        {/* ── Right: Content Block ── */}
        <div data-aos="fade-left" className="flex-1 flex flex-col gap-6 pt-4">
          <h2 className="text-4xl md:text-5xl font-black text-black tracking-tight">
            {aboutContent.heading}
          </h2>
          <p
            className="text-lg font-bold leading-relaxed text-red-50"
            dangerouslySetInnerHTML={{ __html: aboutContent.bio }}
          />
        </div>

      </div>

      {/* ── White Torn-Paper SVG Divider Along Bottom ── */}
      <div className="absolute bottom-0 left-0 right-0 w-full overflow-hidden leading-none z-20 pointer-events-none">
        <svg
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="relative block w-full h-16 sm:h-24 md:h-28 fill-white"
        >
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C59.71,118.08,130.83,119.62,189.5,99.8,242.79,81.82,282.88,63.6,321.39,56.44Z" />
        </svg>
      </div>

    </section>
  )
}
