// src/components/About.jsx — Red background section with interactive 3D flip ID badge/visiting card, torn-paper divider, and decorative stars
import { useState } from "react"
import { motion } from "framer-motion"
import QRCode from "react-qr-code"
import stackImage from "../assets/about/profile.png"
import { aboutContent, personalInfo, socialLinks } from "../data/portfolioData"

export default function About() {
  const [flipped, setFlipped] = useState(false)

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

      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-12 lg:gap-16 items-start relative z-10">

        {/* ── Left: ID Badge on a Lanyard (Framer Motion Spring Drop with 3D Flip) ── */}
        <div className="md:w-[360px] lg:w-[380px] shrink-0 w-full flex flex-col items-center md:items-start pt-12">
          <motion.div
            initial={{ y: -300, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ type: "spring", stiffness: 110, damping: 9, mass: 1.1 }}
            className="relative flex flex-col items-center w-full"
          >
            {/* Black lanyard strap extending upwards */}
            <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-3 h-40 bg-black rounded-b-sm pointer-events-none shadow-md" />

            {/* Metallic clip rectangle with highlight */}
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-9 h-4.5 bg-gradient-to-b from-gray-300 via-gray-400 to-gray-500 rounded-sm border border-gray-600 shadow-md z-30 pointer-events-none" />

            {/* Interactive Flip Card Button */}
            <button
              type="button"
              aria-label="Flip ID card"
              onClick={() => setFlipped((prev) => !prev)}
              className="relative w-full max-w-[295px] sm:max-w-[310px] -rotate-3 hover:rotate-0 transition-transform duration-500 [perspective:1200px] focus:outline-none cursor-pointer"
            >
              <div
                className="relative w-full aspect-[3/4.3] transition-transform duration-700 [transform-style:preserve-3d]"
                style={{ transform: flipped ? "rotateY(180deg)" : "rotateY(0deg)" }}
              >
                {/* ── FRONT FACE: Premium Developer ID Badge ── */}
                <div className="absolute inset-0 [backface-visibility:hidden] bg-[#101010] rounded-3xl p-3.5 sm:p-4 shadow-2xl shadow-black/80 flex flex-col justify-between border border-white/10">
                  {/* Cutout slot at the top */}
                  <div className="w-14 h-2 bg-black/90 rounded-full mx-auto mb-2.5 shrink-0 border border-white/10 shadow-inner" />

                  {/* Large Portrait Photo */}
                  <div className="w-full flex-1 rounded-2xl overflow-hidden bg-black/40 relative shadow-inner">
                    <img
                      src={stackImage}
                      alt="Raghuveerendra Ediga — Java Full Stack Developer"
                      className="w-full h-full object-cover object-top"
                    />
                  </div>

                  {/* Badge Bottom Credential Bar */}
                  <div className="pt-3 px-1 flex items-center justify-between shrink-0">
                    <div>
                      <h3 className="text-base sm:text-lg font-black text-white tracking-tight uppercase leading-none">
                        Raghuveerendra Ediga
                      </h3>
                      <p className="text-[11px] uppercase tracking-wider text-[#ff2a2a] font-bold mt-1">
                        Java Full Stack Developer
                      </p>
                    </div>
                    <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-white/10 border border-white/10 shrink-0">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                      <span className="text-[9px] font-mono uppercase tracking-wider text-white/70">ID 2026</span>
                    </div>
                  </div>
                </div>

                {/* ── BACK FACE: Professional Digital Identity Card ── */}
                <div className="absolute inset-0 [backface-visibility:hidden] [transform:rotateY(180deg)] rounded-3xl overflow-hidden shadow-2xl shadow-black/80 bg-gradient-to-b from-[#181818] via-[#111111] to-[#0a0a0a] text-white flex flex-col justify-between border border-white/10">
                  {/* Red top bar */}
                  <div className="h-1.5 w-full bg-[#ff2a2a] shrink-0" />

                  <div className="p-5 sm:p-6 flex flex-col justify-between flex-1">
                    {/* Header Row */}
                    <div>
                      <div className="flex items-center justify-between pb-3 border-b border-white/10">
                        <div className="flex items-center gap-2">
                          <span className="w-2 h-2 rounded-full bg-[#ff2a2a]" />
                          <span className="text-[10px] font-mono uppercase tracking-widest text-white/60">
                            Digital Identity
                          </span>
                        </div>
                        <span className="text-[10px] font-mono text-white/40 uppercase">
                          RGMCET · B.Tech
                        </span>
                      </div>

                      {/* Name & Role */}
                      <div className="mt-3 text-center">
                        <h3 className="text-xl sm:text-2xl font-black text-white tracking-tight uppercase">
                          Raghuveerendra Ediga
                        </h3>
                        <p className="text-xs uppercase tracking-wider text-[#ff2a2a] font-bold mt-0.5">
                          Java Full Stack Developer
                        </p>
                      </div>
                    </div>

                    {/* Prominent High-Contrast Centered QR Code */}
                    <div className="my-auto py-2 flex flex-col items-center justify-center">
                      <div className="bg-white p-3 rounded-2xl shadow-[0_0_25px_rgba(255,42,42,0.18)] border-2 border-white">
                        <QRCode
                          value={socialLinks.linkedin || ("mailto:" + personalInfo.emails.primary)}
                          size={102}
                        />
                      </div>
                      <p className="text-[10px] font-mono uppercase tracking-widest text-white/50 mt-2 flex items-center gap-1.5">
                        <svg className="w-3 h-3 text-[#ff2a2a]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v1m6 11h2m-6 0h-2v4m0-11v3m0 0h.01M12 12h4.01M16 20h4M4 12h4m12 0h.01M5 8h2a1 1 0 001-1V5a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1zm12 0h2a1 1 0 001-1V5a1 1 0 00-1-1h-2a1 1 0 00-1 1v2a1 1 0 001 1zM5 20h2a1 1 0 001-1v-2a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1z" />
                        </svg>
                        Scan to connect on LinkedIn
                      </p>
                    </div>

                    {/* Contact & Social Info */}
                    <div className="pt-3 border-t border-white/10 space-y-2 text-xs">
                      {personalInfo?.emails?.primary && (
                        <div className="flex items-center gap-2 text-white/80">
                          <svg className="w-3.5 h-3.5 text-red-400 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                          </svg>
                          <a
                            href={`mailto:${personalInfo.emails.primary}`}
                            onClick={(e) => e.stopPropagation()}
                            className="hover:text-white hover:underline truncate"
                          >
                            {personalInfo.emails.primary}
                          </a>
                        </div>
                      )}

                      {personalInfo?.phone && (
                        <div className="flex items-center gap-2 text-white/80">
                          <svg className="w-3.5 h-3.5 text-red-400 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                          </svg>
                          <a
                            href={`tel:${personalInfo.phone}`}
                            onClick={(e) => e.stopPropagation()}
                            className="hover:text-white hover:underline"
                          >
                            {personalInfo.phone}
                          </a>
                        </div>
                      )}

                      <div className="flex items-center justify-between pt-1">
                        {personalInfo?.location && (
                          <div className="flex items-center gap-1.5 text-[11px] text-white/60">
                            <svg className="w-3.5 h-3.5 text-red-400 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                              <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                              <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                            </svg>
                            <span>{personalInfo.location}</span>
                          </div>
                        )}

                        <div className="flex items-center gap-3">
                          {socialLinks?.linkedin && (
                            <a
                              href={socialLinks.linkedin}
                              target="_blank"
                              rel="noopener noreferrer"
                              onClick={(e) => e.stopPropagation()}
                              className="text-white/60 hover:text-white transition-colors"
                              aria-label="LinkedIn Profile"
                            >
                              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                              </svg>
                            </a>
                          )}
                          {socialLinks?.github && (
                            <a
                              href={socialLinks.github}
                              target="_blank"
                              rel="noopener noreferrer"
                              onClick={(e) => e.stopPropagation()}
                              className="text-white/60 hover:text-white transition-colors"
                              aria-label="GitHub Profile"
                            >
                              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                              </svg>
                            </a>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </button>

            {/* Hint below card */}
            <p className="text-xs font-bold text-black/60 mt-4 text-center select-none">
              Tap the card to flip ↻
            </p>
          </motion.div>
        </div>

        {/* ── Right: About Content ── */}
        <div className="flex-1 w-full">
          <div data-aos="fade-up">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-black uppercase tracking-tight mb-6">
              {aboutContent.heading}
            </h2>
            <div
              className="text-white text-base sm:text-lg md:text-xl font-bold leading-relaxed mb-8"
              dangerouslySetInnerHTML={{ __html: aboutContent.bio }}
            />
          </div>

          {/* Quick Tech Highlights */}
          {aboutContent?.techStack && (
            <div data-aos="fade-up" data-aos-delay="200" className="flex flex-wrap gap-2.5">
              {aboutContent.techStack.map((tech) => (
                <span
                  key={tech}
                  className="px-4 py-2 rounded-full bg-black/20 text-white font-bold text-xs sm:text-sm tracking-wide backdrop-blur-sm border border-white/20 hover:bg-black hover:scale-105 transition-all duration-200"
                >
                  {tech}
                </span>
              ))}
            </div>
          )}
        </div>

      </div>

      {/* ── Torn-Paper Bottom Divider (Transition from red to dark) ── */}
      <div className="absolute bottom-0 left-0 right-0 w-full overflow-hidden leading-none z-10 pointer-events-none translate-y-[1px]">
        <svg
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="relative block w-full h-12 md:h-20 fill-[#0a0a0a]"
        >
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C59.71,118.08,130.83,119.62,189.5,99.8,242.79,81.82,282.88,63.6,321.39,56.44Z" />
        </svg>
      </div>

    </section>
  )
}
