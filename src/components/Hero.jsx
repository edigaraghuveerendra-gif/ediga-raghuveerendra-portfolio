// Hero.jsx — fullscreen opening section with video background, left-aligned text, and audio controls
import { useEffect, useState, useRef } from "react"
import { motion } from "framer-motion"
import { hero } from "../data/portfolioData"

// Framer Motion variants for staggered text entrance
const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
}

const itemVariants = {
  hidden:  { opacity: 0, x: -30 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: "easeOut" } },
}

export default function Hero() {
  const videoRef = useRef(null)
  const [isMuted, setIsMuted] = useState(true)

  // Cycle through the titles array
  const [titleIndex, setTitleIndex] = useState(0)
  const [displayText, setDisplayText] = useState("")
  const [isDeleting, setIsDeleting] = useState(false)

  // Typewriter effect
  useEffect(() => {
    const current = hero.titles[titleIndex]

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        setDisplayText(current.slice(0, displayText.length + 1))
        if (displayText.length + 1 === current.length) {
          setTimeout(() => setIsDeleting(true), 1600)
        }
      } else {
        setDisplayText(current.slice(0, displayText.length - 1))
        if (displayText.length - 1 === 0) {
          setIsDeleting(false)
          setTitleIndex((prev) => (prev + 1) % hero.titles.length)
        }
      }
    }, isDeleting ? 50 : 90)

    return () => clearTimeout(timeout)
  }, [displayText, isDeleting, titleIndex])

  // Handle Video Autoplay & Audio Unmute
  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    // Attempt to play unmuted first
    video.muted = false
    video.play()
      .then(() => {
        setIsMuted(false)
      })
      .catch(() => {
        // Browser autoplay blocked unmuted video -> fall back to muted autoplay
        video.muted = true
        setIsMuted(true)
        video.play().catch(() => {})
      })

    // Once user clicks or interacts anywhere on the page, unmute automatically
    const unmuteOnInteraction = () => {
      if (video && video.muted) {
        video.muted = false
        setIsMuted(false)
      }
      window.removeEventListener("click", unmuteOnInteraction)
      window.removeEventListener("touchstart", unmuteOnInteraction)
    }

    window.addEventListener("click", unmuteOnInteraction)
    window.addEventListener("touchstart", unmuteOnInteraction)

    return () => {
      window.removeEventListener("click", unmuteOnInteraction)
      window.removeEventListener("touchstart", unmuteOnInteraction)
    }
  }, [])

  // Manual Sound Toggle
  const toggleSound = () => {
    if (!videoRef.current) return
    const nextMuted = !videoRef.current.muted
    videoRef.current.muted = nextMuted
    setIsMuted(nextMuted)
    if (!nextMuted) {
      videoRef.current.play().catch(() => {})
    }
  }

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* ── Background Video ── */}
      <video
        ref={videoRef}
        autoPlay
        loop
        playsInline
        muted={isMuted}
        className="absolute inset-0 w-full h-full object-cover object-center"
      >
        <source src="/src/assets/hero/hero.mp4" type="video/mp4" />
      </video>

      {/* ── Dark gradient overlays — heavier on left so text is crisp, lighter on right so subject is visible ── */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/75 to-black/20 lg:to-transparent pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/70 pointer-events-none" />

      {/* ── Red accent glow on left ── */}
      <div className="absolute top-1/3 -left-20 w-80 h-80 bg-[#ff2a2a]/20 rounded-full blur-3xl pointer-events-none" />

      {/* ── Main Content: Aligned to the Left ── */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-12 lg:px-16 pt-24 pb-20 flex items-center justify-start min-h-screen">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-left max-w-2xl"
        >
          {/* Greeting */}
          <motion.div
            variants={itemVariants}
            className="flex items-center gap-3 mb-4"
          >
            <span className="w-10 h-0.5 bg-[#ff2a2a] inline-block" />
            <span className="text-[#ff2a2a] text-sm sm:text-base font-bold tracking-widest uppercase">
              {hero.greeting}
            </span>
          </motion.div>

          {/* Full Name */}
          <motion.h1
            variants={itemVariants}
            className="text-4xl sm:text-6xl md:text-7xl font-black text-white leading-tight mb-4 tracking-tight"
          >
            {hero.name}
          </motion.h1>

          {/* Typewriter Title */}
          <motion.div
            variants={itemVariants}
            className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-200 mb-6 h-12 flex items-center gap-1.5"
          >
            <span className="text-[#ff2a2a]">&lt;</span>
            <span className="text-white">{displayText}</span>
            <span className="animate-pulse text-[#ff2a2a] font-light">|</span>
            <span className="text-[#ff2a2a]">/&gt;</span>
          </motion.div>

          {/* Description */}
          <motion.p
            variants={itemVariants}
            className="text-gray-300 text-base sm:text-lg max-w-xl mb-10 leading-relaxed"
          >
            {hero.description}
          </motion.p>

          {/* Action Buttons (Left-Aligned) */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap gap-4 items-center"
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
      </div>

      {/* ── Audio Sound Toggle Button (Bottom-Right) ── */}
      <motion.button
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
        onClick={toggleSound}
        className="absolute bottom-8 right-8 z-30 flex items-center gap-2.5 px-4 py-2.5 rounded-full bg-black/70 backdrop-blur-md border border-white/20 text-white text-xs font-semibold hover:border-[#ff2a2a] hover:text-[#ff2a2a] hover:scale-105 transition-all duration-300 shadow-xl cursor-pointer group"
        title={isMuted ? "Click to unmute video audio" : "Click to mute video audio"}
        aria-label={isMuted ? "Unmute audio" : "Mute audio"}
      >
        {isMuted ? (
          <>
            <svg className="w-4 h-4 text-gray-400 group-hover:text-[#ff2a2a]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2" />
            </svg>
            <span className="text-gray-300 group-hover:text-[#ff2a2a]">Sound Off (Click to unmute)</span>
          </>
        ) : (
          <>
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#ff2a2a] opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#ff2a2a]" />
            </span>
            <svg className="w-4 h-4 text-[#ff2a2a]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.536 8.464a5 5 0 010 7.072M18.364 5.636a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
            </svg>
            <span className="text-[#ff2a2a] font-bold">Sound Playing</span>
          </>
        )}
      </motion.button>

      {/* ── Scroll-down indicator ── */}
      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2 text-gray-400 hover:text-[#ff2a2a] transition-colors duration-300 group"
      >
        <span className="text-[10px] tracking-widest uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.4, ease: "easeInOut" }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-4 h-4"
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
