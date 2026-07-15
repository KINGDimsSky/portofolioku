"use client"

import { Github, Linkedin, Mail } from "lucide-react"

export function Footer() {
  const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#tech", label: "Tech Stack" },
    { href: "#projects", label: "Projects" },
    { href: "#contact", label: "Contact" },
  ]

  const socialLinks = [
    { icon: Github, href: "https://github.com/DimsSky", label: "GitHub" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/dimas-zulkarnain-putra-sukamto-265147313", label: "LinkedIn" },
    { icon: Mail, href: "mailto:dimaszps2004@gmail.com", label: "Email" },
  ]

  return (
    <footer className="bg-canvas border-t border-hairline-soft py-16 text-left">
      <div className="max-w-[1640px] mx-auto px-6">
        {/* Top Grid Area */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 mb-16">
          {/* Column 1: Intro */}
          <div className="md:col-span-6 space-y-4">
            <span className="font-sans font-semibold text-lg text-white tracking-tight flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-brand" />
              DimsSky
            </span>
            <p className="font-sans text-sm text-ash max-w-[380px] leading-relaxed">
              Full Stack Web Developer crafting high-performance systems with Next.js, 
              TypeScript, and clean SOLID architecture patterns.
            </p>
          </div>

          {/* Column 2: Navigation Links */}
          <div className="md:col-span-3 flex flex-col gap-4">
            <span className="font-mono text-[10px] text-mute uppercase tracking-widest font-semibold">
              [NAV // LOCATION]
            </span>
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="font-sans text-sm text-ash hover:text-white transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Column 3: Communication Lines */}
          <div className="md:col-span-3 flex flex-col gap-4">
            <span className="font-mono text-[10px] text-mute uppercase tracking-widest font-semibold">
              [SYSTEMS // CONNECT]
            </span>
            <div className="flex flex-col gap-2">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-sans text-sm text-ash hover:text-white transition-colors flex items-center gap-2"
                >
                  <social.icon className="w-3.5 h-3.5" />
                  <span>{social.label}</span>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom copyright strip */}
        <div className="border-t border-hairline-soft pt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 font-mono text-[11px] text-mute">
          <span>© {new Date().getFullYear()} DIMAS ZULKARNAIN PUTRA SUKAMTO. ALL RIGHTS RESERVED.</span>
          <span className="flex items-center gap-2 uppercase">
            SEMOGA SUKSES AAMIIN!
          </span>
        </div>
      </div>
    </footer>
  )
}
