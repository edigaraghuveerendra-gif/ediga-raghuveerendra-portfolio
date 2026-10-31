// Footer.jsx — site footer with nav links, socials, TAP Academy credit and back-to-top
import { motion } from "framer-motion"
import { personal, navLinks, contact, academy } from "../data/portfolioData"

/* ── Social icon SVGs (reused from Contact) ─────────────────────────────── */
function SocialIcon({ type }) {
  if (type === "github")
    return (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
      </svg>
    )
  if (type === "linkedin")
    return (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    )
  return (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    </svg>
  )
}

/* ── Back-to-top button ─────────────────────────────────────────────────── */
function BackToTop() {
  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      aria-label="Back to top"
      className="group w-11 h-11 rounded-full border border-white/20 flex items-center justify-center text-gray-400 hover:border-[#ff2a2a] hover:text-[#ff2a2a] hover:bg-[#ff2a2a]/10 transition-all duration-300 hover:scale-110"
    >
      <svg className="w-5 h-5 group-hover:-translate-y-0.5 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" />
      </svg>
    </button>
  )
}

// Compute year once at module level (avoids the "impure function in render" lint warning)
const YEAR = new Date().getFullYear()

/* ── Main Footer ─────────────────────────────────────────────────────────── */
export default function Footer() {

  return (
    <footer className="relative bg-black border-t border-white/10 overflow-hidden">

      {/* ── Subtle red glow top-centre ── */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-px bg-gradient-to-r from-transparent via-[#ff2a2a]/60 to-transparent" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-20 bg-[#ff2a2a]/10 blur-2xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6">

        {/* ── Top row ── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="py-14 grid grid-cols-1 md:grid-cols-3 gap-10 items-start"
        >

          {/* Column 1 — Branding */}
          <div className="flex flex-col gap-4">
            <a
              href="#home"
              className="text-2xl font-black text-white hover:text-[#ff2a2a] transition-colors duration-200 w-fit"
            >
              <span className="text-[#ff2a2a]">{personal.name.charAt(0)}</span>
              {personal.name.slice(1)}
            </a>
            <p className="text-sm text-gray-500 leading-relaxed max-w-xs">
              Full-stack developer passionate about building fast, beautiful and accessible web experiences.
            </p>
            {/* Social icons */}
            <div className="flex gap-3 mt-1">
              {contact.socials.map((s) => (
                <a
                  key={s.label}
                  href={s.url}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={s.label}
                  className="w-9 h-9 rounded-full border border-white/15 flex items-center justify-center text-gray-500 hover:border-[#ff2a2a] hover:text-[#ff2a2a] transition-all duration-300 hover:scale-110"
                >
                  <SocialIcon type={s.icon} />
                </a>
              ))}
            </div>
          </div>

          {/* Column 2 — Navigation */}
          <div className="flex flex-col gap-3">
            <p className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-1">
              Navigation
            </p>
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-gray-400 hover:text-[#ff2a2a] transition-colors duration-200 w-fit"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Column 3 — Contact snapshot */}
          <div className="flex flex-col gap-3">
            <p className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-1">
              Contact
            </p>
            <a
              href={`mailto:${contact.email}`}
              className="text-sm text-gray-400 hover:text-[#ff2a2a] transition-colors duration-200 break-all w-fit"
            >
              {contact.email}
            </a>
            <p className="text-sm text-gray-400">{contact.location}</p>

            {/* Hire me button */}
            <a
              href="#contact"
              className="mt-2 inline-block w-fit px-5 py-2.5 rounded-full bg-[#ff2a2a] text-white text-xs font-bold hover:bg-[#cc0000] hover:scale-105 transition-all duration-300 shadow-lg shadow-[#ff2a2a]/20"
            >
              Hire Me →
            </a>
          </div>
        </motion.div>

        {/* ── Divider ── */}
        <div className="border-t border-white/10" />

        {/* ── Bottom row ── */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="py-6 flex flex-col sm:flex-row items-center justify-between gap-4"
        >
          {/* Copyright */}
          <p className="text-xs text-gray-600 text-center sm:text-left">
            © {YEAR}{" "}
            <span className="text-gray-400 font-medium">{personal.name}</span>
            . All rights reserved.
          </p>

          {/* TAP Academy credit — required by project rules */}
          <p className="text-xs text-gray-600 text-center">
            Trained at{" "}
            <a
              href={academy.url}
              target="_blank"
              rel="noreferrer"
              className="text-[#ff2a2a] font-semibold hover:underline"
            >
              {academy.name}
            </a>
          </p>

          {/* Back to top */}
          <BackToTop />
        </motion.div>
      </div>
    </footer>
  )
}
