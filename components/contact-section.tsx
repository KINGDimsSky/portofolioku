"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Mail, MapPin, Phone } from "lucide-react"

export function ContactSection() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [statusMsg, setStatusMsg] = useState("")

  const contactInfo = [
    {
      icon: Mail,
      title: "EMAIL",
      value: "dimaszps2004@gmail.com",
      href: "mailto:dimaszps2004@gmail.com",
    },
    {
      icon: Phone,
      title: "PHONE",
      value: "+62 82233681022",
      href: "tel:+6282233681022",
    },
    {
      icon: MapPin,
      title: "LOCATION",
      value: "Surabaya, Indonesia",
      href: "#",
    },
  ]

  return (
    <section
      id="contact"
      className="py-24 bg-canvas text-white border-t border-hairline-soft relative overflow-hidden"
    >
      <div className="max-w-[1640px] mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Contact info */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 flex flex-col items-start gap-4 text-left"
          >
            <span className="font-mono text-xs tracking-widest text-brand font-medium uppercase">
              [05 // COMMUNICATIONS]
            </span>
            <h2 className="font-sans text-4xl sm:text-5xl font-normal leading-[1.1] tracking-[-0.03em] text-white">
              Initiate project request.
            </h2>
            <p className="font-sans text-base text-ash leading-relaxed mt-4 max-w-[500px]">
              Have a build or integration requirement? Get in touch using the technical communication lines 
              or file a request in the form tracker.
            </p>

            {/* Flat Contact Info List */}
            <div className="flex flex-col gap-6 mt-8 w-full border-t border-hairline-soft pt-8">
              {contactInfo.map((info) => (
                <div key={info.title} className="flex items-center gap-4 group">
                  <div className="w-10 h-10 rounded-[5px] bg-canvas-soft border border-hairline-soft flex items-center justify-center">
                    <info.icon className="w-4 h-4 text-ash" />
                  </div>
                  <div className="flex flex-col">
                    <span className="font-mono text-[10px] text-mute uppercase tracking-widest">
                      {info.title}
                    </span>
                    {info.href !== "#" ? (
                      <a
                        href={info.href}
                        className="font-mono text-sm text-link-blue-soft hover:text-white transition-colors mt-0.5"
                      >
                        {info.value}
                      </a>
                    ) : (
                      <span className="font-mono text-sm text-ash mt-0.5">
                        {info.value}
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right Column: Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-7 w-full bg-canvas-soft border border-hairline-soft p-8 rounded-[12px] text-left"
          >
            <span className="font-mono text-xs text-mute block mb-6 uppercase tracking-wider">
              [FORM // REQUESTS_ROUTER]
            </span>
            
            <form className="space-y-6" onSubmit={async (e) => {
              e.preventDefault()
              setIsSubmitting(true)
              setStatusMsg("")
              const target = e.currentTarget
              const name = (target.elements.namedItem("senderName") as HTMLInputElement).value
              const email = (target.elements.namedItem("senderEmail") as HTMLInputElement).value
              const subject = (target.elements.namedItem("subject") as HTMLInputElement).value
              const details = (target.elements.namedItem("details") as HTMLTextAreaElement).value

              try {
                const response = await fetch("https://formsubmit.co/ajax/dimaszps2004@gmail.com", {
                  method: "POST",
                  headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json"
                  },
                  body: JSON.stringify({
                    Name: name,
                    Email: email,
                    Subject: subject,
                    Message: details,
                    _subject: `New Portfolio Request: ${subject}`
                  })
                })

                if (response.ok) {
                  setStatusMsg("SUCCESS: Request sent! Check your inbox (or spam) to confirm if this is your first submission.")
                  target.reset()
                } else {
                  setStatusMsg("ERROR: Service failed to process submission. Please try again.")
                }
              } catch (err) {
                setStatusMsg("ERROR: Network connection failed. Please verify connection and try again.")
              } finally {
                setIsSubmitting(false)
              }
            }}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <label className="font-mono text-[11px] text-mute uppercase tracking-wider">
                    Sender Name
                  </label>
                  <input
                    type="text"
                    name="senderName"
                    required
                    disabled={isSubmitting}
                    placeholder="Enter name"
                    className="h-11 px-4 rounded-[3px] bg-canvas text-ash font-sans text-sm border border-hairline-soft focus:outline-none focus:ring-2 focus:ring-link-blue transition-all disabled:opacity-50"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="font-mono text-[11px] text-mute uppercase tracking-wider">
                    Sender Email
                  </label>
                  <input
                    type="email"
                    name="senderEmail"
                    required
                    disabled={isSubmitting}
                    placeholder="name@company.com"
                    className="h-11 px-4 rounded-[3px] bg-canvas text-ash font-sans text-sm border border-hairline-soft focus:outline-none focus:ring-2 focus:ring-link-blue transition-all disabled:opacity-50"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label className="font-mono text-[11px] text-mute uppercase tracking-wider">
                  Subject / Scope
                </label>
                <input
                  type="text"
                  name="subject"
                  required
                  disabled={isSubmitting}
                  placeholder="e.g. Next.js App development"
                  className="h-11 px-4 rounded-[3px] bg-canvas text-ash font-sans text-sm border border-hairline-soft focus:outline-none focus:ring-2 focus:ring-link-blue transition-all disabled:opacity-50"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label className="font-mono text-[11px] text-mute uppercase tracking-wider">
                  Request details
                </label>
                <textarea
                  name="details"
                  required
                  disabled={isSubmitting}
                  rows={4}
                  placeholder="Outline the specifications and system requirements..."
                  className="p-4 rounded-[3px] bg-canvas text-ash font-sans text-sm border border-hairline-soft focus:outline-none focus:ring-2 focus:ring-link-blue transition-all resize-none disabled:opacity-50"
                />
              </div>

              {statusMsg && (
                <div className={`font-mono text-xs p-3 rounded-[3px] border ${
                  statusMsg.startsWith("SUCCESS")
                    ? "bg-success/5 border-success/20 text-success"
                    : "bg-brand/5 border-brand/20 text-brand"
                }`}>
                  {statusMsg}
                </div>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className="h-11 w-full rounded-full bg-white text-ink font-sans text-sm font-semibold hover:bg-brand hover:text-ink transition-colors flex items-center justify-center mt-2 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? "Sending Request..." : "Send Request"}
              </button>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
