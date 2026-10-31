// About.jsx — two-column section: profile image left, bio + stats right
import { about, academy } from "../data/portfolioData"
import profileImg from "../assets/about/profile.png"

export default function About() {
  return (
    <section
      id="about"
      className="relative bg-white text-black py-28 px-6 overflow-hidden"
    >
      {/* ── Decorative red corner accent ── */}
      <div className="absolute top-0 right-0 w-72 h-72 bg-[#ff2a2a]/5 rounded-full -translate-y-1/2 translate-x-1/2 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-48 h-48 bg-[#ff2a2a]/5 rounded-full translate-y-1/2 -translate-x-1/2 pointer-events-none" />

      <div className="max-w-6xl mx-auto">

        {/* ── Section heading ── */}
        <div className="text-center mb-16" data-aos="fade-up">
          <p className="text-[#ff2a2a] text-sm font-bold tracking-widest uppercase mb-2">
            Get To Know Me
          </p>
          <h2 className="text-4xl sm:text-5xl font-black text-black">
            {about.heading}
          </h2>
          {/* Red underline accent */}
          <div className="w-16 h-1 bg-[#ff2a2a] mx-auto mt-4 rounded-full" />
        </div>

        {/* ── Two-column grid ── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* ── LEFT: Profile image ── */}
          <div
            className="flex justify-center"
            data-aos="fade-right"
            data-aos-delay="100"
          >
            <div className="relative">
              {/* Floating red square behind the image */}
              <div className="absolute -top-4 -left-4 w-full h-full border-4 border-[#ff2a2a] rounded-2xl" />

              {/* Profile picture */}
              <div className="relative w-72 h-72 sm:w-80 sm:h-80 rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src={profileImg}
                  alt="Profile photo of Ediga Raghuveerendra"
                  className="w-full h-full object-cover animate-[float_6s_ease-in-out_infinite]"
                  onError={(e) => {
                    // Fallback if image is missing — show initials
                    e.target.style.display = "none"
                    e.target.parentElement.classList.add(
                      "bg-black", "flex", "items-center", "justify-center"
                    )
                    e.target.parentElement.innerHTML =
                      `<span class="text-7xl font-black text-white">ER</span>`
                  }}
                />
              </div>

              {/* Badge: trained at TAP Academy */}
              <div className="absolute -bottom-5 -right-5 bg-[#ff2a2a] text-white text-xs font-bold px-4 py-2 rounded-full shadow-lg whitespace-nowrap">
                🎓 Trained at {academy.name}
              </div>
            </div>
          </div>

          {/* ── RIGHT: Bio + stats + tags ── */}
          <div
            className="flex flex-col gap-6"
            data-aos="fade-left"
            data-aos-delay="200"
          >
            <p className="text-[#ff2a2a] font-semibold text-lg italic">
              {about.tagline}
            </p>

            {/* Bio paragraphs */}
            <div className="flex flex-col gap-4">
              {about.bio.map((para, i) => (
                <p key={i} className="text-gray-600 leading-relaxed">
                  {para}
                </p>
              ))}
            </div>

            {/* ── Stats row ── */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 py-6 border-t border-b border-gray-200">
              {about.stats.map((stat) => (
                <div key={stat.label} className="text-center">
                  <p className="text-3xl font-black text-[#ff2a2a]">{stat.value}</p>
                  <p className="text-xs text-gray-500 mt-1 font-medium">{stat.label}</p>
                </div>
              ))}
            </div>

            {/* ── Tech tags ── */}
            <div className="flex flex-wrap gap-2">
              {about.techTags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 text-xs font-semibold rounded-full border border-gray-300 text-gray-700 hover:border-[#ff2a2a] hover:text-[#ff2a2a] transition-colors duration-200 cursor-default"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* ── Download CV button ── */}
            <div>
              <a
                href={about.resumeUrl}
                className="inline-flex items-center gap-2 px-7 py-3 rounded-full bg-black text-white font-bold text-sm hover:bg-[#ff2a2a] transition-all duration-300 shadow-md hover:scale-105 hover:shadow-[#ff2a2a]/30 hover:shadow-lg"
              >
                {/* Download icon */}
                <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a2 2 0 002 2h12a2 2 0 002-2v-1M12 12v6m0 0l-3-3m3 3l3-3M12 3v9" />
                </svg>
                Download CV
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
