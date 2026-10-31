// Contact.jsx — white section with contact info on left and EmailJS form on right
import { useState, useRef } from "react"
import { motion } from "framer-motion"
import emailjs from "@emailjs/browser"
import { contact, academy } from "../data/portfolioData"

/* ── Social icons ─────────────────────────────────────────────────────────── */
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
  // email icon
  return (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    </svg>
  )
}

/* ── Info card (email / location) ─────────────────────────────────────────── */
function InfoCard({ icon, label, value, href }) {
  const inner = (
    <div className="flex items-center gap-4 p-5 rounded-xl border border-gray-200 hover:border-[#ff2a2a] transition-colors duration-300 group">
      <div className="w-11 h-11 rounded-full bg-[#ff2a2a]/10 flex items-center justify-center text-[#ff2a2a] group-hover:bg-[#ff2a2a] group-hover:text-white transition-colors duration-300 shrink-0">
        {icon}
      </div>
      <div>
        <p className="text-xs text-gray-400 font-medium">{label}</p>
        <p className="text-sm font-semibold text-black">{value}</p>
      </div>
    </div>
  )
  return href ? <a href={href}>{inner}</a> : <div>{inner}</div>
}

/* ── Reusable input / textarea wrapper ────────────────────────────────────── */
function Field({ label, error, children }) {
  return (
    <div className="flex flex-col gap-1">
      <label className="text-xs font-bold text-gray-500 uppercase tracking-widest">
        {label}
      </label>
      {children}
      {error && <p className="text-xs text-red-500 mt-0.5">{error}</p>}
    </div>
  )
}

const inputClass =
  "w-full px-4 py-3 rounded-xl border border-gray-300 bg-white text-black text-sm outline-none focus:border-[#ff2a2a] focus:ring-2 focus:ring-[#ff2a2a]/20 transition-all duration-200 placeholder:text-gray-300"

/* ── Main component ───────────────────────────────────────────────────────── */
export default function Contact() {
  const formRef = useRef(null)

  // Form field state
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" })
  // Validation errors
  const [errors, setErrors] = useState({})
  // Send state: idle | loading | success | error
  const [status, setStatus] = useState("idle")

  /* Basic validation */
  function validate() {
    const e = {}
    if (!form.name.trim())    e.name    = "Name is required"
    if (!form.email.trim())   e.email   = "Email is required"
    else if (!/\S+@\S+\.\S+/.test(form.email)) e.email = "Enter a valid email"
    if (!form.subject.trim()) e.subject = "Subject is required"
    if (!form.message.trim()) e.message = "Message is required"
    return e
  }

  function handleChange(e) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
    // Clear error on change
    if (errors[e.target.name])
      setErrors((prev) => ({ ...prev, [e.target.name]: "" }))
  }

  async function handleSubmit(e) {
    e.preventDefault()
    const validationErrors = validate()
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors)
      return
    }

    setStatus("loading")
    try {
      await emailjs.sendForm(
        contact.emailjs.serviceId,
        contact.emailjs.templateId,
        formRef.current,
        contact.emailjs.publicKey
      )
      setStatus("success")
      setForm({ name: "", email: "", subject: "", message: "" })
    } catch {
      setStatus("error")
    }
  }

  return (
    <section
      id="contact"
      className="relative bg-white text-black py-28 px-6 overflow-hidden"
    >
      {/* ── Decorative blobs ── */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-[#ff2a2a]/5 rounded-full -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-[#ff2a2a]/5 rounded-full translate-x-1/2 translate-y-1/2 pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto">

        {/* ── Section heading ── */}
        <div className="text-center mb-16" data-aos="fade-up">
          <p className="text-[#ff2a2a] text-sm font-bold tracking-widest uppercase mb-2">
            Say Hello
          </p>
          <h2 className="text-4xl sm:text-5xl font-black text-black">
            {contact.heading}
          </h2>
          <div className="w-16 h-1 bg-[#ff2a2a] mx-auto mt-4 rounded-full" />
          <p className="text-gray-500 mt-5 max-w-xl mx-auto">
            {contact.subheading}
          </p>
        </div>

        {/* ── Two-column grid ── */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-start">

          {/* ── LEFT: contact info ── */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2 flex flex-col gap-6"
          >
            <p className="text-gray-600 leading-relaxed">
              {contact.description}
            </p>

            {/* Info cards */}
            <div className="flex flex-col gap-3">
              <InfoCard
                label="Email"
                value={contact.email}
                href={`mailto:${contact.email}`}
                icon={
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                }
              />
              <InfoCard
                label="Location"
                value={contact.location}
                icon={
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                }
              />
            </div>

            {/* Social links */}
            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-3">
                Find Me On
              </p>
              <div className="flex gap-3">
                {contact.socials.map((s) => (
                  <a
                    key={s.label}
                    href={s.url}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={s.label}
                    className="w-11 h-11 rounded-full border border-gray-300 flex items-center justify-center text-gray-500 hover:border-[#ff2a2a] hover:text-[#ff2a2a] hover:bg-[#ff2a2a]/5 transition-all duration-300 hover:scale-110"
                  >
                    <SocialIcon type={s.icon} />
                  </a>
                ))}
              </div>
            </div>

            {/* Availability banner */}
            <div className="flex items-center gap-3 p-4 rounded-xl bg-black text-white">
              <span className="relative flex h-3 w-3 shrink-0">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500" />
              </span>
              <p className="text-sm font-medium">
                Currently available for new projects
              </p>
            </div>
          </motion.div>

          {/* ── RIGHT: contact form ── */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="lg:col-span-3"
          >
            <form
              ref={formRef}
              onSubmit={handleSubmit}
              noValidate
              className="bg-white border border-gray-200 rounded-2xl p-8 shadow-xl shadow-black/5 flex flex-col gap-5"
            >
              {/* Name + Email row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <Field label="Your Name" error={errors.name}>
                  <input
                    type="text"
                    name="name"
                    placeholder="Ediga Raghuveerendra"
                    value={form.name}
                    onChange={handleChange}
                    className={`${inputClass} ${errors.name ? "border-red-400" : ""}`}
                  />
                </Field>
                <Field label="Your Email" error={errors.email}>
                  <input
                    type="email"
                    name="email"
                    placeholder="you@example.com"
                    value={form.email}
                    onChange={handleChange}
                    className={`${inputClass} ${errors.email ? "border-red-400" : ""}`}
                  />
                </Field>
              </div>

              {/* Subject */}
              <Field label="Subject" error={errors.subject}>
                <input
                  type="text"
                  name="subject"
                  placeholder="Project enquiry / Say hi"
                  value={form.subject}
                  onChange={handleChange}
                  className={`${inputClass} ${errors.subject ? "border-red-400" : ""}`}
                />
              </Field>

              {/* Message */}
              <Field label="Message" error={errors.message}>
                <textarea
                  name="message"
                  rows={5}
                  placeholder="Tell me about your project or idea..."
                  value={form.message}
                  onChange={handleChange}
                  className={`${inputClass} resize-none ${errors.message ? "border-red-400" : ""}`}
                />
              </Field>

              {/* Submit button */}
              <button
                type="submit"
                disabled={status === "loading"}
                className="w-full py-3.5 rounded-xl bg-[#ff2a2a] text-white font-bold text-sm tracking-wide hover:bg-[#cc0000] disabled:opacity-60 disabled:cursor-not-allowed transition-all duration-300 hover:scale-[1.02] hover:shadow-lg hover:shadow-[#ff2a2a]/30 flex items-center justify-center gap-2"
              >
                {status === "loading" ? (
                  <>
                    {/* Spinner */}
                    <svg className="w-4 h-4 animate-spin" viewBox="0 0 24 24" fill="none">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z" />
                    </svg>
                    Sending…
                  </>
                ) : (
                  <>
                    Send Message
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                    </svg>
                  </>
                )}
              </button>

              {/* Success / Error feedback */}
              {status === "success" && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-center gap-3 p-4 rounded-xl bg-green-50 border border-green-200 text-green-700 text-sm font-medium"
                >
                  ✅ Message sent! I&apos;ll get back to you soon.
                </motion.div>
              )}
              {status === "error" && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-center gap-3 p-4 rounded-xl bg-red-50 border border-red-200 text-red-700 text-sm font-medium"
                >
                  ❌ Something went wrong. Please try emailing me directly at{" "}
                  <a href={`mailto:${contact.email}`} className="underline">
                    {contact.email}
                  </a>
                </motion.div>
              )}
            </form>

            {/* EmailJS setup reminder — only shown in dev */}
            {contact.emailjs.serviceId === "YOUR_SERVICE_ID" && (
              <p className="mt-3 text-xs text-center text-amber-600 bg-amber-50 rounded-lg p-2 border border-amber-200">
                ⚠️ EmailJS not configured yet. Update <code>contact.emailjs</code> in{" "}
                <code>portfolioData.js</code> with your real keys from{" "}
                <a href="https://emailjs.com" target="_blank" rel="noreferrer" className="underline">
                  emailjs.com
                </a>
              </p>
            )}
          </motion.div>
        </div>

        {/* ── TAP Academy credit ── */}
        <p className="text-center text-xs text-gray-400 mt-16">
          Trained at{" "}
          <a
            href={academy.url}
            target="_blank"
            rel="noreferrer"
            className="text-[#ff2a2a] font-semibold hover:underline"
          >
            {academy.name}
          </a>{" "}
          · Full-stack development, AI and augmented reality
        </p>
      </div>
    </section>
  )
}
