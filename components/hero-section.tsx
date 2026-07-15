"use client"

import { motion } from "framer-motion"
import { Github, Linkedin, Mail } from "lucide-react"
import Image from "next/image"

export function HeroSection() {
  const socialLinks = [
    { icon: Github, href: "https://github.com/KINGDimsSky", label: "GitHub" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/dimas-zulkarnain-69b855301/", label: "LinkedIn" },
    { icon: Mail, href: "mailto:dimaszps2004@gmail.com", label: "Email" },
  ]

  return (
    <section
      id="home"
      className="min-h-screen pt-28 pb-16 flex items-center justify-center bg-canvas relative overflow-hidden"
    >
      <div className="max-w-[1640px] w-full mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="lg:col-span-7 flex flex-col items-start gap-6 text-left"
        >
          <span className="font-mono text-xs tracking-widest text-brand font-medium uppercase">
            [FULL STACK DEVELOPER // LONGLIFE LEARNER // AI - PRODUCTIVITY TOOLS SUPPORT]
          </span>

          {/* Huge Editorial Headline */}
          <h1 className="font-sans text-5xl sm:text-6xl md:text-7xl lg:text-[80px] xl:text-[88px] font-semibold leading-[1.0] text-white tracking-[-0.04em]">
            Dimas Zulkarnain Putra Sukamto
          </h1>

          {/* Subtitle & Professional Bio */}
          <div className="space-y-4 max-w-[620px]">
            <p className="font-sans text-base text-ash leading-relaxed">
              I am an Informatics Engineering student with hands-on experience building production web applications for real clients. 
              Specializing in full-stack JavaScript/TypeScript engineering (Next.js, NestJS) and relational/NoSQL database architectures. 
              I focus on designing clean REST APIs, optimizing data fetching, and leveraging modern development workflows to deliver high-legibility, decoupled systems.
            </p>
          </div>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center gap-4 mt-2">
            {/* Primary Coral-Red CTA */}
            <a
              href="#contact"
              className="h-11 px-8 rounded-full bg-brand text-ink font-sans text-sm font-semibold hover:bg-white hover:text-ink transition-all duration-300 flex items-center justify-center"
            >
              Get in Touch
            </a>
            {/* Secondary CTA */}
            <a
              href="https://wa.me/6282233681022"
              target="_blank"
              rel="noopener noreferrer"
              className="h-11 px-6 rounded-[5px] bg-canvas-soft text-ash font-sans text-sm font-medium border border-hairline-soft hover:text-white hover:border-ash transition-all duration-300 flex items-center justify-center gap-2"
            >
              <svg
                className="w-4 h-4 fill-current text-[#25d366]"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.457L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.42 9.864-9.858.002-2.634-1.02-5.11-2.881-6.974-1.86-1.864-4.332-2.887-6.969-2.889-5.44 0-9.865 4.42-9.869 9.86-.001 1.636.427 3.232 1.239 4.64l-.992 3.613 3.788-.983zm10.536-5.834c-.266-.134-1.579-.779-1.822-.867-.243-.088-.419-.133-.596.134-.176.265-.681.862-.835 1.039-.154.177-.308.199-.575.066-.267-.134-1.127-.415-2.148-1.327-.794-.709-1.33-1.585-1.487-1.85-.157-.266-.017-.41.117-.543.12-.12.267-.31.4-.464.133-.155.177-.265.266-.443.089-.177.044-.332-.022-.464-.067-.134-.596-1.439-.817-1.97-.215-.518-.452-.447-.622-.456-.16-.008-.344-.01-.528-.01-.184 0-.485.07-.74.354-.254.283-.972.951-.972 2.32 0 1.368.994 2.69 1.135 2.87.14.18 1.956 2.987 4.737 4.194.662.287 1.178.459 1.58.587.665.211 1.27.181 1.748.11.533-.08 1.579-.646 1.802-1.272.223-.627.223-1.164.156-1.272-.067-.109-.244-.177-.51-.311z" />
              </svg>
              <span>WhatsApp Chat</span>
            </a>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-6 mt-6">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-mute hover:text-white transition-colors duration-200"
                aria-label={social.label}
              >
                <social.icon className="w-5 h-5" />
              </a>
            ))}
          </div>
        </motion.div>

        {/* Right Side: macOS-style Profile Studio Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="lg:col-span-5 flex justify-center lg:justify-end"
        >
          <div className="w-full max-w-[420px] bg-canvas-soft border border-hairline-soft rounded-[6px] overflow-hidden shadow-2xl">
            {/* Studio Chrome Header */}
            <div className="h-9 px-4 border-b border-hairline-soft bg-canvas flex items-center justify-between">
              {/* macOS Window Buttons */}
              <div className="flex items-center gap-1.5">
                <div className="w-2.5 h-2.5 rounded-full bg-[#ff5f56]" />
                <div className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]" />
                <div className="w-2.5 h-2.5 rounded-full bg-[#27c93f]" />
              </div>
              {/* Tab/Path Title */}
              <span className="font-mono text-xs text-mute select-none">
                ~/dimassky/dimas.jpg
              </span>
              {/* Empty placeholder to keep title centered */}
              <div className="w-12" />
            </div>

            {/* Profile Image Viewport */}
            <div className="relative aspect-[4/5] bg-canvas overflow-hidden">
              <Image
                src="/dimas.jpg"
                alt="Dimas Zulkarnain"
                fill
                sizes="(max-w-768px) 100vw, 420px"
                className="object-cover object-center grayscale hover:grayscale-0 transition-all duration-700"
                priority
              />
            </div>

            {/* Technical Detail Footer */}
            <div className="p-4 bg-canvas border-t border-hairline-soft flex items-center justify-between font-mono text-[10px] text-mute">
              <span>IMG_SIZE: 57.0 KB</span>
              <span>RESOLVED: 200 OK</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
