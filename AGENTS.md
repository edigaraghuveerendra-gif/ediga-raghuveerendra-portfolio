# Project context
React 19 + Vite + Tailwind CSS 4 single-page developer portfolio. Plain JavaScript (JSX), no TypeScript, no router. Libraries: framer-motion, aos, @emailjs/browser. Style: Tailwind utility classes only (no extra CSS files except src/index.css). Colours: pure black / #0a0a0a dark sections, white sections for contrast, accent red #ff2a2a. Font: Inter.

# Architecture rules
- ALL content (text, links, lists) lives in src/data/portfolioData.js and is imported by components. Never hard-code personal content in components.
- One component per section in src/components/, composed in order in src/App.jsx.
- Navigation is anchor links (#home, #about, #skills, #process, #projects, #contact) with CSS smooth scrolling. No router.
- Assets: src/assets/about/profile.png (illustrated portrait), src/assets/hero/hero-new.mp4 (hero video). Public files in /public.
- Keep code clean and lightly commented in a beginner-friendly way. After every task run `npm run lint` and fix problems.
