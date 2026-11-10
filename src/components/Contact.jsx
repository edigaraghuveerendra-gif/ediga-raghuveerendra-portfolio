// Contact.jsx — interactive contact section with parallax background & EmailJS integration
import { useRef, useState } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { emailjsConfig, personalInfo, socialLinks } from "../data/portfolioData"

export default function Contact() {
  const ref = useRef(null)
  const formRef = useRef(null)
  const [status, setStatus] = useState("idle") // 'idle' | 'sending' | 'success' | 'error'

  // Parallax scroll effect on giant background word
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  })
  const y = useTransform(scrollYProgress, [0, 1], ["-20%", "30%"])

  async function handleSubmit(e) {
    e.preventDefault()
    if (status === "sending") return
    setStatus("sending")

    const formEl = formRef.current
    const firstName = (formEl?.elements?.["firstName"]?.value || formEl?.elements?.["first_name"]?.value || "").trim()
    const lastName = (formEl?.elements?.["lastName"]?.value || formEl?.elements?.["last_name"]?.value || "").trim()
    const email = (formEl?.elements?.["email"]?.value || formEl?.elements?.["user_email"]?.value || "").trim()
    const message = (formEl?.elements?.["message"]?.value || "").trim()

    // Required fields validation
    if (!firstName || !email || !message) {
      setStatus("error")
      setTimeout(() => setStatus("idle"), 3000)
      return
    }

    const { serviceId, templateId, publicKey } = emailjsConfig || {}
    const isConfigured = Boolean(
      serviceId &&
      templateId &&
      publicKey &&
      serviceId !== "YOUR_EMAILJS_SERVICE_ID" &&
      templateId !== "YOUR_EMAILJS_TEMPLATE_ID" &&
      publicKey !== "YOUR_EMAILJS_PUBLIC_KEY"
    )

    if (!isConfigured) {
      // Fallback: mailto link
      const subject = `Portfolio Contact from ${firstName} ${lastName}`.trim()
      const body = `From: ${firstName} ${lastName}\nEmail: ${email}\n\n${message}`
      window.open(
        `mailto:${personalInfo.emails.primary}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`,
        "_blank"
      )
      setStatus("success")
      formEl?.reset()
      setTimeout(() => setStatus("idle"), 3000)
      return
    }

    try {
      const emailjs = await import("@emailjs/browser")
      const sendForm = emailjs.sendForm || emailjs.default?.sendForm
      if (typeof sendForm === "function") {
        await sendForm(serviceId, templateId, formEl, publicKey)
      } else {
        throw new Error("sendForm method not found in @emailjs/browser")
      }
      setStatus("success")
      formEl?.reset()
    } catch (err) {
      console.error("EmailJS submission error:", err)
      setStatus("error")
    } finally {
      setTimeout(() => setStatus("idle"), 4000)
    }
  }

  return (
    <section
      ref={ref}
      id="contact"
      className="bg-[#0a0a0a] w-full min-h-screen relative overflow-hidden flex items-end pt-32 border-t border-gray-900"
    >
      {/* Parallax Giant Background Text */}
      <motion.div
        style={{ y }}
        className="absolute top-12 left-0 w-full overflow-hidden pointer-events-none select-none z-0 flex justify-center"
      >
        <div
          className="text-[25vw] leading-[0.75] font-black uppercase tracking-tighter text-white/[0.04] select-none scale-y-[1.6] origin-top text-center"
          style={{ fontFamily: "'Impact', 'Arial Black', sans-serif" }}
        >
          Contact
        </div>
      </motion.div>

      {/* Foreground Container with Right-Aligned Red Card */}
      <div className="w-full relative z-10 flex justify-end px-4 sm:px-6 md:px-12 pb-16">
        <div
          className="bg-[#ff2a2a] w-full md:w-[85%] lg:w-[75%] p-8 md:p-14 lg:p-16 rounded-3xl shadow-2xl relative"
          data-aos="fade-up"
        >
          {/* Header Row */}
          <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-white/20">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-white/90">
              Reach Me
            </span>
            {socialLinks?.instagram && (
              <a
                href={socialLinks.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-black/20 hover:bg-black/30 text-white text-xs font-bold tracking-wide transition-colors"
              >
                <span>DM on Instagram</span>
                <svg
                  className="w-3.5 h-3.5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2.5}
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </a>
            )}
          </div>

          {/* Headline */}
          <div className="my-8">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white uppercase tracking-tight leading-[1.1]">
              Let&apos;s build something
              <br />
              great together.
            </h2>
          </div>

          {/* Form */}
          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="flex flex-col gap-10 md:gap-12"
          >
            {/* Input Grid: Two Columns on md+ */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
              {/* Left Column: Underline-Only Inputs */}
              <div className="flex flex-col gap-8 justify-between">
                <div>
                  <input
                    id="firstName"
                    name="first_name"
                    type="text"
                    placeholder="First Name *"
                    required
                    className="w-full bg-transparent border-b border-white/40 pb-3 text-lg text-white placeholder-white focus:border-white focus:outline-none transition-colors"
                  />
                </div>
                <div>
                  <input
                    id="lastName"
                    name="last_name"
                    type="text"
                    placeholder="Last Name"
                    className="w-full bg-transparent border-b border-white/40 pb-3 text-lg text-white placeholder-white focus:border-white focus:outline-none transition-colors"
                  />
                </div>
                <div>
                  <input
                    id="email"
                    name="user_email"
                    type="email"
                    placeholder="Email Address *"
                    required
                    className="w-full bg-transparent border-b border-white/40 pb-3 text-lg text-white placeholder-white focus:border-white focus:outline-none transition-colors"
                  />
                </div>
              </div>

              {/* Right Column: Message Textarea */}
              <div className="flex flex-col justify-between">
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  placeholder="Your Message *"
                  required
                  className="w-full flex-1 min-h-[120px] bg-transparent border-b border-white/40 pb-3 text-lg text-white placeholder-white focus:border-white focus:outline-none transition-colors resize-none"
                />
              </div>
            </div>

            {/* Bottom Row: Consent + Notes + Action Button */}
            <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 pt-6 border-t border-white/20">
              <div className="space-y-2 max-w-lg">
                <label className="flex items-start gap-2.5 cursor-pointer text-xs md:text-sm text-white/90 select-none">
                  <input
                    type="checkbox"
                    required
                    defaultChecked
                    className="mt-0.5 accent-black h-4 w-4 rounded cursor-pointer"
                  />
                  <span>
                    I consent to having this form securely forward my message.
                  </span>
                </label>
                <p className="text-xs text-white/75 leading-relaxed">
                  Your message will be sent directly to my inbox. I typically respond within 24-48 hours.
                </p>
                {personalInfo?.emails?.primary && (
                  <p className="text-xs text-white/90">
                    Urgent inquiries?{" "}
                    <a
                      href={`mailto:${personalInfo.emails.primary}`}
                      className="underline font-bold text-white hover:text-black transition-colors"
                    >
                      {personalInfo.emails.primary}
                    </a>
                  </p>
                )}
              </div>

              {/* Submit Button States */}
              <div className="shrink-0">
                {status === "sending" && (
                  <button
                    type="button"
                    disabled
                    className="inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-full border border-white/40 bg-white/10 text-white/70 font-bold text-sm cursor-not-allowed transition-all"
                  >
                    <svg
                      className="w-4 h-4 animate-spin text-white"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      />
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8v8H4z"
                      />
                    </svg>
                    <span>Sending...</span>
                  </button>
                )}

                {status === "success" && (
                  <button
                    type="button"
                    disabled
                    className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full border border-emerald-400 bg-emerald-600 text-white font-bold text-sm shadow-lg transition-all"
                  >
                    <span>Sent Successfully ✓</span>
                  </button>
                )}

                {status === "error" && (
                  <button
                    type="button"
                    onClick={() => setStatus("idle")}
                    className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full border border-red-800 bg-red-950 text-white font-bold text-sm shadow-lg hover:bg-red-900 transition-all cursor-pointer"
                  >
                    <span>Failed — Try Again</span>
                  </button>
                )}

                {status === "idle" && (
                  <button
                    type="submit"
                    className="group inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-full border-2 border-white text-white font-bold text-sm hover:bg-white hover:text-[#ff2a2a] transition-all duration-300 cursor-pointer shadow-md"
                  >
                    <span>Send Message</span>
                    <svg
                      className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2.5}
                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                      />
                    </svg>
                  </button>
                )}
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}
