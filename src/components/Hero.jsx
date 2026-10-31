// Hero.jsx — professional split-layout hero: article on the left, perfectly-sized video on the right
import { useEffect, useState, useRef } from "react"
import { motion } from "framer-motion"
import { hero } from "../data/portfolioData"

// Framer Motion variants for staggered entrance
const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.14 } },
}

const itemVariants = {
  hidden:  { opacity: 0, y: 25 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: "easeOut" } },
}

export default function Hero() {
  const videoRef = useRef(null)
  const [isMuted, setIsMuted] = useState(true)

  // Typewriter effect state
  const [titleIndex, setTitleIndex] = useState(0)
  const [displayText, setDisplayText] = useState("")
  const [isDeleting, setIsDeleting] = useState(false)

  // Cycle through titles
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
    }, isDeleting ? 45 : 85)

    return () => clearTimeout(timeout)
  }, [displayText, isDeleting, titleIndex])

  // Handle Autoplay & Audio Unmute
  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    // Attempt to start unmuted
    video.muted = false
    video.play()
      .then(() => {
        setIsMuted(false)
      })
      .catch(() => {
        // Browser policy requires initial muted autoplay
        video.muted = true
        setIsMuted(true)
        video.play().catch(() => {})
      })

    // Automatically unmute upon first user interaction anywhere
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
      className="relative min-h-screen flex items-center bg-black overflow-hidden pt-24 pb-16 lg:py-0"
    >
      {/* ── Ambient Background Lighting ── */}
      <div className="absolute top-1/4 -left-20 w-[500px] h-[500px] bg-[#ff2a2a]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 -right-20 w-[600px] h-[600px] bg-[#ff2a2a]/15 rounded-full blur-3xl pointer-events-none" />

      {/* Subtle tech grid background */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(#ff2a2a 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-10 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center min-h-[calc(100vh-100px)]">

          {/* ══════════════════════════════════════════════════════════
              LEFT SIDE: Article / Text Content (7 cols on desktop)
             ══════════════════════════════════════════════════════════ */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="lg:col-span-7 flex flex-col justify-center text-left"
          >
            {/* Greeting Badge */}
            <motion.div
              variants={itemVariants}
              className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 w-fit mb-6"
            >
              <span className="w-2 h-2 rounded-full bg-[#ff2a2a] animate-ping" />
              <span className="text-[#ff2a2a] text-xs font-bold tracking-widest uppercase">
                {hero.greeting}
              </span>
            </motion.div>

            {/* Name */}
            <motion.h1
              variants={itemVariants}
              className="text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-black text-white leading-[1.1] mb-5 tracking-tight"
            >
              {hero.name}
            </motion.h1>

            {/* Animated Role Title */}
            <motion.div
              variants={itemVariants}
              className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-200 mb-6 h-12 flex items-center gap-1.5"
            >
              <span className="text-[#ff2a2a]">&lt;</span>
              <span className="text-white">{displayText}</span>
              <span className="animate-pulse text-[#ff2a2a] font-light">|</span>
              <span className="text-[#ff2a2a]">/&gt;</span>
            </motion.div>

            {/* Bio Description */}
            <motion.p
              variants={itemVariants}
              className="text-gray-400 text-base sm:text-lg max-w-xl mb-9 leading-relaxed"
            >
              {hero.description}
            </motion.p>

            {/* Action Buttons */}
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
                className="px-8 py-3.5 rounded-full border border-white/20 text-white font-bold text-sm tracking-wide hover:border-[#ff2a2a] hover:text-[#ff2a2a] hover:scale-105 transition-all duration-300"
              >
                {hero.cta.secondary.label}
              </a>
            </motion.div>

            {/* Quick Feature Badges */}
            <motion.div
              variants={itemVariants}
              className="flex flex-wrap gap-6 items-center mt-10 pt-8 border-t border-white/10 text-xs text-gray-400"
            >
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-green-500" />
                <span>Available for Projects</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-[#ff2a2a]">★</span>
                <span>TAP Academy Trained</span>
              </div>
            </motion.div>
          </motion.div>

          {/* ══════════════════════════════════════════════════════════
              RIGHT SIDE: Video Showcase Card (5 cols on desktop)
             ══════════════════════════════════════════════════════════ */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="lg:col-span-5 flex justify-center lg:justify-end"
          >
            <div className="relative w-full max-w-lg lg:max-w-none group">

              {/* Glowing Red Aura behind the video card */}
              <div className="absolute -inset-1.5 bg-gradient-to-tr from-[#ff2a2a]/40 via-[#ff2a2a]/20 to-transparent rounded-3xl blur-2xl opacity-60 group-hover:opacity-90 transition duration-700 pointer-events-none" />

              {/* The Video Container with Perfect Aspect Ratio and Border */}
              <div className="relative rounded-3xl overflow-hidden border border-white/15 bg-neutral-950 shadow-2xl shadow-black ring-1 ring-white/10 aspect-video sm:aspect-[4/3] lg:aspect-[16/11]">

                <video
                  ref={videoRef}
                  autoPlay
                  loop
                  playsInline
                  muted={isMuted}
                  className="w-full h-full object-cover object-center"
                >
                  <source src="/src/assets/hero/hero.mp4" type="video/mp4" />
                </video>

                {/* Subtle vignette on the video corners */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/20 pointer-events-none" />

                {/* Top Live Reel Indicator */}
                <div className="absolute top-4 left-4 z-20 flex items-center gap-2 px-3 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/15 text-[11px] font-semibold text-white pointer-events-none">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#ff2a2a] opacity-75" />
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-[#ff2a2a]" />
                  </span>
                  <span>Introduction Reel</span>
                </div>

                {/* Sound Control Button (Bottom-Right of the Video Card) */}
                <button
                  type="button"
                  onClick={toggleSound}
                  className="absolute bottom-4 right-4 z-20 flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-black/80 backdrop-blur-md border border-white/25 text-white text-xs font-semibold hover:border-[#ff2a2a] hover:text-[#ff2a2a] hover:scale-105 transition-all duration-200 shadow-xl cursor-pointer"
                  title={isMuted ? "Click to unmute" : "Click to mute"}
                  aria-label={isMuted ? "Unmute audio" : "Mute audio"}
                >
                  {isMuted ? (
                    <>
                      <svg className="w-3.5 h-3.5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2" />
                      </svg>
                      <span>Unmute</span>
                    </>
                  ) : (
                    <>
                      <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#ff2a2a] opacity-75" />
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-[#ff2a2a]" />
                      </span>
                      <svg className="w-3.5 h-3.5 text-[#ff2a2a]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.536 8.464a5 5 0 010 7.072M18.364 5.636a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
                      </svg>
                      <span className="text-[#ff2a2a]">Sound On</span>
                    </>
                  )}
                </button>
              </div>

            </div>
          </motion.div>

        </div>
      </div>

      {/* ── Subtle Scroll Down Arrow ── */}
      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8, duration: 0.8 }}
        className="absolute bottom-5 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-1.5 text-gray-500 hover:text-[#ff2a2a] transition-colors duration-300 group"
      >
        <span className="text-[10px] tracking-widest uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.4, ease: "easeInOut" }}
        >
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
          </svg>
        </motion.div>
      </motion.a>
    </section>
  )
}
