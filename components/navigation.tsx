"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X } from "lucide-react"

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navItems = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#tech", label: "Tech Stack" },
    { href: "#projects", label: "Projects" },
    { href: "#contact", label: "Contact" },
  ]

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 h-16 transition-all duration-300 ${
        isScrolled
          ? "bg-canvas/90 backdrop-blur-md border-b border-canvas-soft"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-[1640px] mx-auto h-full px-6 flex items-center justify-between">
        {/* Left: Brand Lockup */}
        <a href="#home" className="flex items-center gap-2 group">
          <div className="w-3 h-3 rounded-full bg-brand" />
          <span className="font-sans font-semibold text-lg text-white tracking-tight">
            DimsSky
          </span>
        </a>

        {/* Center: Desktop Navigation Links */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="font-sans text-[15px] font-medium text-ash hover:text-white transition-colors duration-200"
            >
              {item.label}
            </a>
          ))}
        </div>

        {/* Right: Actions */}
        <div className="hidden md:flex items-center gap-4">
          <a
            href="#contact"
            className="h-10 px-5 rounded-full bg-white text-ink font-sans text-sm font-semibold hover:bg-ash transition-colors flex items-center justify-center"
          >
            Get in Touch
          </a>
        </div>

        {/* Mobile Hamburger Toggle */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-ash hover:text-white p-2"
            aria-label="Toggle Menu"
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Panel */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="absolute top-16 left-0 right-0 bg-canvas border-b border-canvas-soft py-6 px-6 md:hidden flex flex-col gap-6"
          >
            <div className="flex flex-col gap-4">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="font-sans text-lg font-medium text-ash hover:text-white py-2 border-b border-canvas-soft/50 transition-colors"
                >
                  {item.label}
                </a>
              ))}
            </div>
            <a
              href="#contact"
              onClick={() => setIsMobileMenuOpen(false)}
              className="h-12 w-full rounded-full bg-white text-ink font-sans text-base font-semibold hover:bg-ash transition-colors flex items-center justify-center mt-2"
            >
              Get in Touch
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}
