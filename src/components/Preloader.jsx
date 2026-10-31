// src/components/Preloader.jsx — Fullscreen red shutter preloader with water-fill brand typography
import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { personalInfo } from "../data/portfolioData"

export default function Preloader() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 2200)

    return () => clearTimeout(timer)
  }, [])

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          key="preloader"
          initial={{ y: 0 }}
          exit={{ y: "-100%" }}
          transition={{ duration: 1.2, ease: [0.76, 0, 0.24, 1] }}
          className="fixed inset-0 w-full h-screen bg-[#ff2a2a] z-[100000] flex items-center justify-center overflow-hidden"
        >
          {/* Inner brand name container with exit animation */}
          <motion.div
            exit={{ opacity: 0, scale: 0.95, y: -20 }}
            transition={{ duration: 0.4 }}
            className="relative text-5xl md:text-7xl font-black tracking-tighter px-6 text-center"
          >
            {/* Background copy of brand name */}
            <span className="text-red-900/30 select-none">
              {personalInfo.brandName}.
            </span>

            {/* Foreground water-fill animated copy */}
            <motion.span
              initial={{ clipPath: "inset(100% 0 0 0)" }}
              animate={{ clipPath: "inset(0% 0 0 0)" }}
              transition={{ duration: 1.6, ease: "easeInOut", delay: 0.2 }}
              className="absolute inset-0 text-white select-none pointer-events-none px-6 text-center"
            >
              {personalInfo.brandName}
              <span className="text-black">.</span>
            </motion.span>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
