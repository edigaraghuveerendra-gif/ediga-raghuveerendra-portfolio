// Navbar.jsx — sticky top navigation with mobile hamburger menu
import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { navLinks, personal } from "../data/portfolioData"

export default function Navbar() {
  // Track whether the user has scrolled down (to add background blur)
  const [scrolled, setScrolled] = useState(false)
  // Track whether the mobile menu is open
  const [menuOpen, setMenuOpen] = useState(false)

  // Listen to scroll position
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Close mobile menu when a link is clicked
  const handleNavClick = () => setMenuOpen(false)

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-black/90 backdrop-blur-md shadow-lg shadow-black/40"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* ── Logo / Name ── */}
        <a
          href="#home"
          className="text-xl font-bold tracking-tight text-white hover:text-[#ff2a2a] transition-colors duration-200"
        >
          {/* First letter styled in accent red */}
          <span className="text-[#ff2a2a]">
            {personal.name.charAt(0)}
          </span>
          {personal.name.slice(1)}
        </a>

        {/* ── Desktop links ── */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="relative text-sm font-medium text-gray-300 hover:text-white transition-colors duration-200 group"
              >
                {link.label}
                {/* Animated underline on hover */}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#ff2a2a] group-hover:w-full transition-all duration-300" />
              </a>
            </li>
          ))}

          {/* CTA button */}
          <li>
            <a
              href="#contact"
              className="px-5 py-2 rounded-full border border-[#ff2a2a] text-[#ff2a2a] text-sm font-semibold hover:bg-[#ff2a2a] hover:text-white transition-all duration-300"
            >
              Hire Me
            </a>
          </li>
        </ul>

        {/* ── Mobile hamburger button ── */}
        <button
          onClick={() => setMenuOpen((prev) => !prev)}
          className="md:hidden flex flex-col justify-center items-center gap-1.5 w-8 h-8 focus:outline-none"
          aria-label="Toggle menu"
        >
          {/* Three bars that animate into an X */}
          <motion.span
            animate={menuOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
            transition={{ duration: 0.3 }}
            className="block w-6 h-0.5 bg-white origin-center"
          />
          <motion.span
            animate={menuOpen ? { opacity: 0, scaleX: 0 } : { opacity: 1, scaleX: 1 }}
            transition={{ duration: 0.2 }}
            className="block w-6 h-0.5 bg-white"
          />
          <motion.span
            animate={menuOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
            transition={{ duration: 0.3 }}
            className="block w-6 h-0.5 bg-white origin-center"
          />
        </button>
      </nav>

      {/* ── Mobile dropdown menu ── */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.35, ease: "easeInOut" }}
            className="md:hidden bg-black/95 backdrop-blur-md overflow-hidden"
          >
            <ul className="flex flex-col items-center gap-6 py-8">
              {navLinks.map((link, i) => (
                <motion.li
                  key={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.07 }}
                >
                  <a
                    href={link.href}
                    onClick={handleNavClick}
                    className="text-lg font-medium text-gray-200 hover:text-[#ff2a2a] transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                </motion.li>
              ))}
              {/* Mobile CTA */}
              <motion.li
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: navLinks.length * 0.07 }}
              >
                <a
                  href="#contact"
                  onClick={handleNavClick}
                  className="px-6 py-2.5 rounded-full border border-[#ff2a2a] text-[#ff2a2a] font-semibold hover:bg-[#ff2a2a] hover:text-white transition-all duration-300"
                >
                  Hire Me
                </a>
              </motion.li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
