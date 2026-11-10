// src/components/Hero.jsx — full-screen blended video hero with custom play reel control and floating social bar
import { useRef, useEffect, useState } from "react"
import AOS from "aos"
import "aos/dist/aos.css"
import heroVideo from "../assets/hero/hero-new.mp4"
import heroPoster from "../assets/about/profile.png"
import { heroContent, socialLinks } from "../data/portfolioData"

export default function Hero() {
  const videoRef = useRef(null)
  const [isPlaying, setIsPlaying] = useState(false)

  // Initialize AOS once with load event refresh for accurate layout measurements
  useEffect(() => {
    AOS.init({ duration: 1000, once: true, easing: "ease-out" })
    const handleLoad = () => AOS.refresh()
    window.addEventListener("load", handleLoad)
    return () => window.removeEventListener("load", handleLoad)
  }, [])

  // Toggle video playback and state
  const toggleVideo = (e) => {
    if (e) e.stopPropagation()
    if (!videoRef.current) return
    if (isPlaying) {
      videoRef.current.pause()
      setIsPlaying(false)
    } else {
      videoRef.current.play()
      setIsPlaying(true)
    }
  }

  return (
    <section id="home" className="relative w-full h-screen overflow-hidden bg-[#ff2a2a]">
      {/* ── Background Video with FIT (object-contain) ── */}
      <video
        ref={videoRef}
        playsInline
        poster={heroPoster}
        onEnded={() => setIsPlaying(false)}
        className="absolute inset-0 w-full h-full object-contain object-top md:object-right z-0"
      >
        <source src={heroVideo} type="video/mp4" />
      </video>

      {/* ── Readability Overlay ── */}
      <div className="absolute inset-0 z-10 pointer-events-none bg-gradient-to-r from-black/45 via-black/10 to-transparent" />

      {/* ── Left Floating Social Bar (Desktop) ── */}
      <aside className="hidden lg:flex flex-col gap-6 fixed left-6 top-1/2 -translate-y-1/2 z-50 mix-blend-difference">
        {socialLinks?.github && (
          <a
            href={socialLinks.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub Profile"
            className="w-5 h-5 text-white/60 hover:text-white hover:scale-125 transition-all duration-300"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
            </svg>
          </a>
        )}
        {socialLinks?.linkedin && (
          <a
            href={socialLinks.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn Profile"
            className="w-5 h-5 text-white/60 hover:text-white hover:scale-125 transition-all duration-300"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
          </a>
        )}
        {socialLinks?.instagram && (
          <a
            href={socialLinks.instagram}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram Profile"
            className="w-5 h-5 text-white/60 hover:text-white hover:scale-125 transition-all duration-300"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
            </svg>
          </a>
        )}
      </aside>

      {/* ── Content Container ── */}
      <div className="absolute inset-0 z-20 max-w-7xl mx-auto px-6 md:px-12 pb-20 md:pb-[8%] flex flex-col md:flex-row justify-end md:justify-between items-start md:items-end">

        {/* ── Left Block ── */}
        <div className="max-w-2xl">
          {/* Mobile Social Bar (Inline above title) */}
          <div
            data-aos="fade-up"
            data-aos-delay="100"
            className="flex lg:hidden items-center gap-5 mb-4 text-white/80"
          >
            {socialLinks?.github && (
              <a
                href={socialLinks.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub Profile"
                className="hover:text-white hover:scale-110 transition-transform"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                </svg>
              </a>
            )}
            {socialLinks?.linkedin && (
              <a
                href={socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn Profile"
                className="hover:text-white hover:scale-110 transition-transform"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
            )}
            {socialLinks?.instagram && (
              <a
                href={socialLinks.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram Profile"
                className="hover:text-white hover:scale-110 transition-transform"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
            )}
          </div>

          {/* Heading */}
          <h1
            data-aos="fade-up"
            className="text-white text-3xl md:text-5xl font-bold leading-tight mb-4"
          >
            {heroContent.greeting}, <br />
            <span className="text-black font-extrabold">{heroContent.titleHighlight}</span>
          </h1>

          {/* Subtitle */}
          <p
            data-aos="fade-up"
            data-aos-delay="200"
            className="text-white text-sm md:text-lg font-semibold max-w-md mb-8 leading-relaxed"
          >
            {heroContent.subtitle}
          </p>

          {/* Buttons Row */}
          <div
            data-aos="fade-up"
            data-aos-delay="400"
            className="flex flex-wrap gap-3 sm:gap-4 items-center"
          >
            {heroContent?.ctaPrimary && (
              <a
                href={heroContent.ctaPrimary.href}
                className="px-6 py-3 rounded-full bg-white text-black font-semibold text-sm hover:scale-105 transition-transform duration-200 shadow-lg"
              >
                {heroContent.ctaPrimary.text}
              </a>
            )}

            {heroContent?.ctaSecondary && (
              <a
                href={heroContent.ctaSecondary.href}
                className="px-6 py-3 rounded-full bg-black/40 border border-white text-white font-semibold text-sm backdrop-blur-md hover:bg-black/60 transition-colors duration-200 shadow-lg"
              >
                {heroContent.ctaSecondary.text}
              </a>
            )}

            {heroContent?.ctaResume?.href && (
              <a
                href={heroContent.ctaResume.href}
                download
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-transparent border border-white/50 text-white font-semibold text-sm hover:border-white transition-colors duration-200"
              >
                <svg
                  className="w-4 h-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  />
                </svg>
                {heroContent.ctaResume.text}
              </a>
            )}
          </div>
        </div>

        {/* ── Right Block: Play Reel Control ── */}
        <div
          data-aos="zoom-in"
          data-aos-delay="600"
          className="flex flex-col items-center justify-center mt-8 md:mt-0 cursor-pointer group"
          onClick={toggleVideo}
        >
          <button
            type="button"
            aria-label={isPlaying ? "Pause video" : "Play video"}
            className="w-12 h-12 md:w-20 md:h-20 rounded-full border border-white/30 bg-black/20 backdrop-blur-md hover:scale-110 hover:bg-[#ff2a2a] hover:shadow-[0_0_30px_#ff2a2a] transition-all duration-300 flex items-center justify-center cursor-pointer"
          >
            {isPlaying ? (
              <svg className="w-5 h-5 md:w-8 md:h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z" />
              </svg>
            ) : (
              <svg className="w-5 h-5 md:w-8 md:h-8 text-white translate-x-0.5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z" />
              </svg>
            )}
          </button>
          <span className="text-[10px] md:text-xs font-bold uppercase tracking-widest text-white mt-2 select-none group-hover:text-black transition-colors">
            {isPlaying ? "Pause" : "Play Reel"}
          </span>
        </div>

      </div>

      {/* ── Bottom-Centre Bouncing Down-Arrow Scroll Indicator ── */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 hidden md:block animate-bounce pointer-events-none text-white">
        <svg
          className="w-6 h-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  )
}
