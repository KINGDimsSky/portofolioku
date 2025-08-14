"use client"

import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Github, Linkedin, Mail, MapPin, GraduationCap, Sparkles } from "lucide-react"
import Image from "next/image"
import { useEffect, useState } from "react"

export function HeroSection() {
  const { scrollY } = useScroll()
  const y1 = useTransform(scrollY, [0, 300], [0, -50])
  const y2 = useTransform(scrollY, [0, 300], [0, -100])
  const opacity = useTransform(scrollY, [0, 300], [1, 0])

  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isHovered, setIsHovered] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  const fixedParticlePositions = [
    { left: 10, top: 20 },
    { left: 85, top: 15 },
    { left: 25, top: 80 },
    { left: 70, top: 60 },
    { left: 5, top: 45 },
    { left: 90, top: 35 },
    { left: 40, top: 10 },
    { left: 60, top: 90 },
    { left: 15, top: 65 },
    { left: 80, top: 25 },
    { left: 35, top: 50 },
    { left: 95, top: 70 },
    { left: 20, top: 30 },
    { left: 75, top: 85 },
    { left: 45, top: 5 },
    { left: 65, top: 40 },
    { left: 30, top: 75 },
    { left: 85, top: 55 },
    { left: 50, top: 95 },
    { left: 12, top: 38 },
  ]

  const particleVariants = {
    animate: {
      y: [0, -100, 0],
      opacity: [0, 1, 0],
      scale: [0, 1, 0],
      transition: {
        duration: 3,
        repeat: Number.POSITIVE_INFINITY,
        repeatDelay: 1,
      },
    },
  }

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-sky-50 dark:from-gray-900 dark:via-blue-950 dark:to-gray-900" />

      {mounted && (
        <motion.div
          className="absolute inset-0 opacity-30"
          style={{
            background: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(59, 130, 246, 0.15) 0%, transparent 50%)`,
          }}
        />
      )}

      {mounted &&
        fixedParticlePositions.map((position, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-blue-400/30 rounded-full"
            style={{
              left: `${position.left}%`,
              top: `${position.top}%`,
            }}
            variants={particleVariants}
            animate="animate"
            transition={{ delay: i * 0.2 }}
          />
        ))}

      <motion.div
        className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-r from-blue-500/20 to-sky-400/20 rounded-full blur-3xl"
        style={{ y: y1 }}
        animate={{
          scale: [1, 1.2, 1],
          rotate: [0, 180, 360],
        }}
        transition={{
          duration: 10,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-32 right-16 w-40 h-40 bg-gradient-to-r from-purple-500/20 to-pink-400/20 rounded-full blur-3xl"
        style={{ y: y2 }}
        animate={{
          scale: [1.2, 1, 1.2],
          rotate: [360, 180, 0],
        }}
        transition={{
          duration: 12,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      />

      <motion.div style={{ opacity }} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -100, rotateY: -30 }}
            animate={{ opacity: 1, x: 0, rotateY: 0 }}
            transition={{ duration: 1.2, ease: "easeOut", type: "spring" }}
            className="flex justify-center lg:justify-start order-2 lg:order-1"
          >
            <div className="relative perspective-1000">
              {[...Array(4)].map((_, i) => (
                <motion.div
                  key={i}
                  className={`absolute inset-0 rounded-full border border-blue-500/${20 + i * 10}`}
                  animate={{ rotate: 360 * (i % 2 === 0 ? 1 : -1) }}
                  transition={{
                    duration: 20 + i * 5,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "linear",
                  }}
                  style={{
                    width: `${120 + i * 20}%`,
                    height: `${120 + i * 20}%`,
                    left: `${-10 - i * 10}%`,
                    top: `${-10 - i * 10}%`,
                  }}
                />
              ))}

              <motion.div
                className="relative w-80 h-80 rounded-full overflow-hidden border-4 border-white/20 shadow-2xl backdrop-blur-sm"
                whileHover={{
                  scale: 1.1,
                  rotateY: 10,
                  boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
                }}
                onHoverStart={() => setIsHovered(true)}
                onHoverEnd={() => setIsHovered(false)}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <motion.div
                  initial={{ scale: 1.3, rotate: -10 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{ duration: 1.5, ease: "easeOut" }}
                >
                  <Image
                    src="/DimsSky.JPG"
                    alt="Profile Photo"
                    fill
                    className="w-full h-full object-cover"
                  />
                </motion.div>

                <motion.div
                  className="absolute inset-0 bg-gradient-to-t from-blue-900/30 via-transparent to-sky-400/10"
                  animate={{
                    background: isHovered
                      ? "linear-gradient(to top, rgba(30, 58, 138, 0.4), transparent, rgba(56, 189, 248, 0.2))"
                      : "linear-gradient(to top, rgba(30, 58, 138, 0.3), transparent, rgba(56, 189, 248, 0.1))",
                  }}
                />

                <AnimatePresence>
                  {isHovered && mounted && (
                    <>
                      {[
                        { left: 20, top: 15 },
                        { left: 80, top: 25 },
                        { left: 15, top: 70 },
                        { left: 85, top: 60 },
                        { left: 50, top: 10 },
                        { left: 30, top: 80 },
                        { left: 70, top: 40 },
                        { left: 40, top: 90 },
                      ].map((pos, i) => (
                        <motion.div
                          key={i}
                          className="absolute"
                          style={{
                            left: `${pos.left}%`,
                            top: `${pos.top}%`,
                          }}
                          initial={{ scale: 0, rotate: 0 }}
                          animate={{
                            scale: [0, 1, 0],
                            rotate: 360,
                            y: [-20, -40, -60],
                          }}
                          exit={{ scale: 0 }}
                          transition={{ duration: 1.5, delay: i * 0.1 }}
                        >
                          <Sparkles className="w-4 h-4 text-yellow-400" />
                        </motion.div>
                      ))}
                    </>
                  )}
                </AnimatePresence>
              </motion.div>

              <motion.div
                className="absolute bottom-8 right-8 bg-green-500 w-8 h-8 rounded-full border-4 border-white shadow-xl flex items-center justify-center"
                animate={{
                  scale: [1, 1.3, 1],
                  boxShadow: [
                    "0 0 0 0 rgba(34, 197, 94, 0.7)",
                    "0 0 0 10px rgba(34, 197, 94, 0)",
                    "0 0 0 0 rgba(34, 197, 94, 0)",
                  ],
                }}
                transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
              >
                <motion.div
                  className="w-3 h-3 bg-white rounded-full"
                  animate={{ scale: [1, 0.8, 1] }}
                  transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                />
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2, ease: "easeOut", delay: 0.3 }}
            className="space-y-8 text-center lg:text-left order-1 lg:order-2"
          >
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="space-y-4"
            >
              <motion.p
                className="text-blue-600 font-medium text-lg flex items-center justify-center lg:justify-start gap-2"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.7 }}
              >
                <motion.span
                  animate={{ rotate: [0, 14, -8, 14, -4, 10, 0] }}
                  transition={{ duration: 2.5, repeat: Number.POSITIVE_INFINITY, repeatDelay: 3 }}
                >
                  👋
                </motion.span>
                Hello, I'm
              </motion.p>

              <motion.h1
                className="text-4xl sm:text-5xl lg:text-7xl font-heading font-bold"
                initial={{ opacity: 0, y: 50, scale: 0.8 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 1, delay: 0.9, type: "spring", stiffness: 100 }}
              >
                <motion.span
                  className="bg-gradient-to-r from-blue-600 via-purple-600 to-sky-500 bg-clip-text text-transparent bg-300% animate-gradient"
                  animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
                  transition={{ duration: 5, repeat: Number.POSITIVE_INFINITY }}
                >
                  Dimas Zulkarnain Putra Sukamto
                </motion.span>
              </motion.h1>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.1 }}
              className="relative"
            >
              <motion.h2
                className="text-2xl sm:text-3xl lg:text-4xl font-heading font-semibold text-foreground"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                Full Stack Web Developer
              </motion.h2>
              <motion.div
                className="h-2 bg-gradient-to-r from-blue-600 via-purple-500 to-sky-500 rounded-full mt-3"
                initial={{ width: 0, opacity: 0 }}
                animate={{ width: "100%", opacity: 1 }}
                transition={{ duration: 1.5, delay: 1.3 }}
              />

              <motion.div
                className="absolute -top-4 -right-8 text-blue-500/30 text-2xl"
                animate={{
                  y: [0, -10, 0],
                  rotate: [0, 5, -5, 0],
                }}
                transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY }}
              >
                {"</>"}
              </motion.div>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.5 }}
              className="text-lg text-muted-foreground leading-relaxed max-w-2xl"
            >
              <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8, delay: 1.7 }}>
                Passionate about creating innovative digital solutions and seamless user experiences.
              </motion.span>
              <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8, delay: 1.9 }}>
                I specialize in modern web technologies and love turning complex problems into elegant, simple designs.
              </motion.span>
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 2.1 }}
              className="space-y-4"
            >
              {[
                { icon: GraduationCap, text: "Currently studying at", highlight: "Universitas Wijaya Kusuma Surabaya" },
                { icon: MapPin, text: "Graduated from", highlight: "SMA Muhammadiyah 4 Surabaya" },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  className="flex items-center justify-center lg:justify-start gap-3 text-muted-foreground group cursor-pointer"
                  whileHover={{ x: 10, scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  <motion.div
                    className="p-2 rounded-full bg-blue-100 dark:bg-blue-900/30 group-hover:bg-blue-200 dark:group-hover:bg-blue-800/50 transition-colors"
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.5 }}
                  >
                    <item.icon className="h-5 w-5 text-blue-600" />
                  </motion.div>
                  <span>
                    {item.text} <strong className="text-foreground">{item.highlight}</strong>
                  </span>
                </motion.div>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 2.3 }}
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4"
            >
              <motion.div
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 shadow-xl hover:shadow-2xl transition-all duration-300 relative overflow-hidden group"
                >
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent"
                    initial={{ x: "-100%" }}
                    whileHover={{ x: "100%" }}
                    transition={{ duration: 0.5 }}
                  />
                  <span className="relative z-10">View My Work</span>
                </Button>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                <Button
                  variant="outline"
                  size="lg"
                  className="px-8 py-4 bg-transparent border-2 border-blue-200 hover:bg-blue-50 dark:hover:bg-blue-950 hover:border-blue-300 transition-all duration-300 group"
                >
                  <motion.span className="group-hover:text-blue-600 transition-colors" whileHover={{ scale: 1.1 }}>
                    Download CV
                  </motion.span>
                </Button>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 2.5 }}
              className="flex items-center justify-center lg:justify-start space-x-6 pt-4"
            >
              {[
                {
                  icon: Github,
                  href: "#",
                  color: "hover:text-gray-900 dark:hover:text-white",
                  bg: "hover:bg-gray-100 dark:hover:bg-gray-800",
                },
                {
                  icon: Linkedin,
                  href: "#",
                  color: "hover:text-blue-600",
                  bg: "hover:bg-blue-50 dark:hover:bg-blue-950",
                },
                { icon: Mail, href: "#", color: "hover:text-red-500", bg: "hover:bg-red-50 dark:hover:bg-red-950" },
              ].map((social, index) => (
                <motion.div
                  key={index}
                  whileHover={{
                    scale: 1.3,
                    y: -5,
                    rotate: [0, -10, 10, 0],
                  }}
                  whileTap={{ scale: 0.9 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <Button
                    variant="ghost"
                    size="icon"
                    className={`w-12 h-12 rounded-full ${social.bg} ${social.color} transition-all duration-300 shadow-lg hover:shadow-xl`}
                  >
                    <social.icon className="h-6 w-6" />
                  </Button>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 3 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 15, 0] }}
            transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
            className="flex flex-col items-center gap-3 cursor-pointer group"
          >
            <span className="text-sm text-muted-foreground group-hover:text-blue-600 transition-colors">
              Scroll to explore
            </span>
            <motion.div
              className="w-6 h-10 border-2 border-muted-foreground/30 rounded-full flex justify-center group-hover:border-blue-600 transition-colors"
              whileHover={{ scale: 1.1 }}
            >
              <motion.div
                className="w-1 h-3 bg-muted-foreground/50 rounded-full mt-2 group-hover:bg-blue-600"
                animate={{ y: [0, 12, 0] }}
                transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
              />
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  )
}
