// Hero.jsx — fullscreen opening section with video background and animated text
import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { hero } from "../data/portfolioData"

// Framer Motion variants for staggered text entrance
const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.18 } },
}

const itemVariants = {
  hidden:  { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
}

export default function Hero() {
  // Cycle through the titles array every 2.5 s
  const [titleIndex, setTitleIndex] = useState(0)
  const [displayText, setDisplayText] = useState("")
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const current = hero.titles[titleIndex]

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        // Type one character
        setDisplayText(current.slice(0, displayText.length + 1))
        if (displayText.length + 1 === current.length) {
          // Finished typing — pause then start deleting
          setTimeout(() => setIsDeleting(true), 1600)
        }
      } else {
        // Delete one character
        setDisplayText(current.slice(0, displayText.length - 1))
        if (displayText.length - 1 === 0) {
          // Finished deleting — move to next title
          setIsDeleting(false)
          setTitleIndex((prev) => (prev + 1) % hero.titles.length)
        }
      }
    }, isDeleting ? 60 : 100)

    return () => clearTimeout(timeout)
  }, [displayText, isDeleting, titleIndex])

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* ── Video Background ── */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/src/assets/hero/hero.mp4" type="video/mp4" />
      </video>

      {/* ── Dark gradient overlay ── */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black" />

      {/* ── Red accent glow (top-left) ── */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-[#ff2a2a]/20 rounded-full blur-3xl pointer-events-none" />
      {/* ── Red accent glow (bottom-right) ── */}
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-[#ff2a2a]/10 rounded-full blur-3xl pointer-events-none" />

      {/* ── Main content ── */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 text-center px-6 max-w-4xl mx-auto"
      >
        {/* Greeting */}
        <motion.p
          variants={itemVariants}
          className="text-[#ff2a2a] text-lg font-semibold tracking-widest uppercase mb-3"
        >
          {hero.greeting}
        </motion.p>

        {/* Name */}
        <motion.h1
          variants={itemVariants}
          className="text-5xl sm:text-6xl md:text-7xl font-black text-white leading-tight mb-4"
        >
          {hero.name}
        </motion.h1>

        {/* Typewriter title */}
        <motion.div
          variants={itemVariants}
          className="text-2xl sm:text-3xl font-bold text-gray-300 mb-6 h-10"
        >
          <span className="text-[#ff2a2a]">&lt;</span>
          <span>{displayText}</span>
          {/* Blinking cursor */}
          <span className="animate-pulse text-[#ff2a2a] ml-0.5">|</span>
          <span className="text-[#ff2a2a]">/&gt;</span>
        </motion.div>

        {/* Description */}
        <motion.p
          variants={itemVariants}
          className="text-gray-400 text-base sm:text-lg max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          {hero.description}
        </motion.p>

        {/* CTA buttons */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a
            href={hero.cta.primary.href}
            className="px-8 py-3.5 rounded-full bg-[#ff2a2a] text-white font-bold text-sm tracking-wide hover:bg-[#cc0000] hover:scale-105 transition-all duration-300 shadow-lg shadow-[#ff2a2a]/30"
          >
            {hero.cta.primary.label}
          </a>
          <a
            href={hero.cta.secondary.href}
            className="px-8 py-3.5 rounded-full border-2 border-white/30 text-white font-bold text-sm tracking-wide hover:border-[#ff2a2a] hover:text-[#ff2a2a] hover:scale-105 transition-all duration-300"
          >
            {hero.cta.secondary.label}
          </a>
        </motion.div>
      </motion.div>

      {/* ── Scroll-down indicator ── */}
      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8, duration: 0.8 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gray-400 hover:text-[#ff2a2a] transition-colors duration-300 group"
      >
        <span className="text-xs tracking-widest uppercase">Scroll</span>
        {/* Animated chevron */}
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.4, ease: "easeInOut" }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-5 h-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
          </svg>
        </motion.div>
      </motion.a>
    </section>
  )
}
