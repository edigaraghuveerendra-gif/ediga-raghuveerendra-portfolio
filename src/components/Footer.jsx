// src/components/Footer.jsx — minimal brutalist footer with large brand headline, taglines, credentials, and social links
import { personalInfo, socialLinks, footerContent } from "../data/portfolioData"

// Constant evaluated once at module load to maintain purity
const CURRENT_YEAR = new Date().getFullYear()

export default function Footer() {
  return (
    <footer className="bg-[#111111] text-[#d4d4d4] py-16 px-6 md:px-12 font-mono text-[10px] md:text-xs tracking-widest flex flex-col justify-between min-h-[50vh]">

      {/* ── Top Row ── */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-start">
        {/* Column 1: Taglines */}
        <div className="flex flex-col space-y-2">
          {footerContent.taglines.map((tagline, i) => (
            <p key={i} className="uppercase">
              {tagline}
            </p>
          ))}
        </div>

        {/* Column 2: Credential & View Work */}
        <div className="flex flex-col md:items-center space-y-2 text-left md:text-center">
          <p className="uppercase">{footerContent.credential}</p>
          <a
            href="#projects"
            className="underline hover:text-white transition-colors w-fit"
          >
            View Work
          </a>
        </div>

        {/* Column 3: Availability & Year */}
        <div className="flex flex-col md:items-end space-y-2 text-left md:text-right">
          <p className="uppercase">Available for opportunities</p>
          <p>{CURRENT_YEAR}</p>
        </div>
      </div>

      {/* ── Middle: Huge Centred Brand Name ── */}
      <div className="py-20 md:py-24 overflow-hidden text-center w-full flex justify-center items-center px-4">
        <h2 className="text-[clamp(1.5rem,6.8vw,7rem)] leading-none font-sans font-bold tracking-tighter lowercase select-none text-[#f4f4f4] whitespace-nowrap">
          {personalInfo.brandName.toLowerCase()}
        </h2>
      </div>

      {/* ── Bottom Row ── */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-end">
        {/* Column 1: Contact link & Copyright */}
        <div className="flex flex-col space-y-2">
          <a
            href="#contact"
            className="underline hover:text-white transition-colors w-fit"
          >
            Contact
          </a>
          <p className="text-white/60 text-[9px] md:text-[10px]">
            {footerContent.copyright}
          </p>
        </div>

        {/* Column 2: Primary Email & Social Icons */}
        <div className="flex flex-col md:items-center space-y-3 text-left md:text-center">
          <a
            href={`mailto:${personalInfo.emails.primary}`}
            className="underline hover:text-white transition-colors break-all"
          >
            {personalInfo.emails.primary}
          </a>

          {/* Social Icons Row */}
          <div className="flex items-center space-x-5">
            {socialLinks.github && (
              <a
                href={socialLinks.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub Profile"
                className="text-white/80 hover:text-[#ff2a2a] transition-colors"
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                </svg>
              </a>
            )}

            {socialLinks.linkedin && (
              <a
                href={socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn Profile"
                className="text-white/80 hover:text-[#ff2a2a] transition-colors"
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
            )}

            {socialLinks.instagram && (
              <a
                href={socialLinks.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram Profile"
                className="text-white/80 hover:text-[#ff2a2a] transition-colors"
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
            )}
          </div>
        </div>

        {/* Column 3: Explore My GitHub link */}
        <div className="flex flex-col md:items-end text-left md:text-right">
          <a
            href={socialLinks.github}
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-white transition-colors"
          >
            Explore My GitHub
          </a>
        </div>
      </div>

    </footer>
  )
}
