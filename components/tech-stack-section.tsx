"use client"

import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { useRef, useState } from "react"

export function TechStackSection() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  })

  const [hoveredTech, setHoveredTech] = useState<string | null>(null)

  const y = useTransform(scrollYProgress, [0, 1], [50, -50])
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 360])

  const techCategories = [
    {
      category: "Frontend",
      color: "from-blue-500 to-cyan-500",
      bgColor: "bg-blue-500/10",
      technologies: [
        { name: "React", level: 95, icon: "⚛️", description: "Building dynamic UIs" },
        { name: "Next.js", level: 90, icon: "▲", description: "Full-stack React framework" },
        { name: "TypeScript", level: 85, icon: "📘", description: "Type-safe JavaScript" },
        { name: "Tailwind CSS", level: 90, icon: "🎨", description: "Utility-first CSS" },
      ],
    },
    {
      category: "Backend",
      color: "from-green-500 to-emerald-500",
      bgColor: "bg-green-500/10",
      technologies: [
        { name: "Node.js", level: 85, icon: "🟢", description: "Server-side JavaScript" },
        { name: "Express.js", level: 50, icon: "🚀", description: "Web application framework" },
        { name: "NestJS", level: 20, icon: "N", description: "A Powerfull Typescript Back-End Framework" },
        { name: "PostgreSQL", level: 60, icon: "🐘", description: "Relational database" },
        { name: "MongoDB", level: 75, icon: "🍃", description: "NoSQL database" },
      ],
    },
    {
      category: "Tools & Others",
      color: "from-purple-500 to-pink-500",
      bgColor: "bg-purple-500/10",
      technologies: [
        { name: "Git", level: 90, icon: "📚", description: "Version control" },
        { name: "Docker", level: 10, icon: "🐳", description: "Containerization" },
        { name: "Postman", level: 65, icon: "☁️", description: "API Testing Platform" },
        { name: "Vercel", level: 65, icon: "▲", description: "Deployment platform" },
        { name: "Figma", level: 50, icon: "🎨", description: "Design tool" },
      ],
    },
  ]

  return (
    <section ref={ref} id="tech" className="py-32 relative overflow-hidden">
      {/* Animated background */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-indigo-50 via-white to-cyan-50 dark:from-gray-900 dark:via-indigo-950 dark:to-gray-900"
        style={{ y }}
      />

      {/* Floating geometric shapes */}
      <motion.div
        className="absolute top-20 right-20 w-32 h-32 border-2 border-blue-200/50 rounded-lg"
        style={{ rotate }}
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY }}
      />
      <motion.div
        className="absolute bottom-32 left-16 w-24 h-24 border-2 border-purple-200/50 rounded-full"
        style={{ rotate: useTransform(scrollYProgress, [0, 1], [360, 0]) }}
        animate={{ scale: [1.1, 1, 1.1] }}
        transition={{ duration: 5, repeat: Number.POSITIVE_INFINITY }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, type: "spring", stiffness: 100 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            whileInView={{ scale: 1, rotate: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="inline-block mb-6"
          >
            <Badge className="px-6 py-2 bg-gradient-to-r from-indigo-500 to-purple-500 text-white text-sm font-medium">
              Tech Stack
            </Badge>
          </motion.div>

          <motion.h2
            className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold mb-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <motion.span
              className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent"
              animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
              transition={{ duration: 6, repeat: Number.POSITIVE_INFINITY }}
            >
              Technologies
            </motion.span>
            <br />
            <motion.span
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              viewport={{ once: true }}
            >
              I Master
            </motion.span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
            className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed"
          >
            Here are the cutting-edge technologies and tools I use to bring innovative ideas to life and create
            exceptional digital experiences.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {techCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 50, rotateX: -20 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              transition={{
                duration: 0.8,
                delay: categoryIndex * 0.2,
                type: "spring",
                stiffness: 100,
              }}
              viewport={{ once: true }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="group perspective-1000"
            >
              <Card className="h-full hover:shadow-2xl transition-all duration-500 border-0 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm relative overflow-hidden">
                {/* Animated background gradient */}
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
                  initial={{ scale: 0, rotate: 45 }}
                  whileHover={{ scale: 1.5, rotate: 0 }}
                  transition={{ duration: 0.6 }}
                />

                <CardContent className="p-8 relative z-10">
                  <motion.div
                    className="flex items-center justify-center mb-8"
                    whileHover={{ scale: 1.1, rotate: [0, -5, 5, 0] }}
                    transition={{ duration: 0.5 }}
                  >
                    <div className={`w-16 h-16 ${category.bgColor} rounded-2xl flex items-center justify-center`}>
                      <motion.h3
                        className={`font-heading font-bold text-lg bg-gradient-to-r ${category.color} bg-clip-text text-transparent`}
                        animate={{ scale: [1, 1.05, 1] }}
                        transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                      >
                        {category.category}
                      </motion.h3>
                    </div>
                  </motion.div>

                  <div className="space-y-6">
                    {category.technologies.map((tech, techIndex) => (
                      <motion.div
                        key={tech.name}
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{
                          duration: 0.6,
                          delay: categoryIndex * 0.2 + techIndex * 0.1,
                        }}
                        viewport={{ once: true }}
                        className="space-y-3 group/tech cursor-pointer"
                        onHoverStart={() => setHoveredTech(tech.name)}
                        onHoverEnd={() => setHoveredTech(null)}
                        whileHover={{ x: 5, scale: 1.02 }}
                      >
                        <div className="flex justify-between items-center">
                          <motion.div className="flex items-center gap-3" whileHover={{ scale: 1.05 }}>
                            <motion.span
                              className="text-2xl"
                              animate={{ rotate: hoveredTech === tech.name ? 360 : 0 }}
                              transition={{ duration: 0.5 }}
                            >
                              {tech.icon}
                            </motion.span>
                            <span
                              className="font-semibold text-foreground group-hover/tech:text-transparent group-hover/tech:bg-gradient-to-r group-hover/tech:bg-clip-text transition-all duration-300"
                              style={{
                                backgroundImage:
                                  hoveredTech === tech.name
                                    ? `linear-gradient(to right, ${category.color.split(" ")[1]}, ${category.color.split(" ")[3]})`
                                    : undefined,
                              }}
                            >
                              {tech.name}
                            </span>
                          </motion.div>
                          <motion.span
                            className="text-sm font-bold text-muted-foreground"
                            animate={{ scale: hoveredTech === tech.name ? 1.1 : 1 }}
                          >
                            {tech.level}%
                          </motion.span>
                        </div>

                        <div className="relative">
                          <div className="w-full bg-muted/50 rounded-full h-3 overflow-hidden">
                            <motion.div
                              initial={{ width: 0 }}
                              whileInView={{ width: `${tech.level}%` }}
                              transition={{
                                duration: 1.5,
                                delay: categoryIndex * 0.2 + techIndex * 0.1 + 0.3,
                                ease: "easeOut",
                              }}
                              viewport={{ once: true }}
                              className={`bg-gradient-to-r ${category.color} h-3 rounded-full relative overflow-hidden`}
                            >
                              {/* Animated shine effect */}
                              <motion.div
                                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                                animate={{ x: ["-100%", "100%"] }}
                                transition={{
                                  duration: 2,
                                  repeat: Number.POSITIVE_INFINITY,
                                  repeatDelay: 3,
                                  ease: "easeInOut",
                                }}
                              />
                            </motion.div>
                          </div>
                        </div>

                        {/* Tooltip */}
                        <AnimatePresence>
                          {hoveredTech === tech.name && (
                            <motion.div
                              initial={{ opacity: 0, y: 10, scale: 0.8 }}
                              animate={{ opacity: 1, y: 0, scale: 1 }}
                              exit={{ opacity: 0, y: 10, scale: 0.8 }}
                              className="text-xs text-muted-foreground italic"
                            >
                              {tech.description}
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Additional tech badges */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <motion.p className="text-lg text-muted-foreground mb-8" whileHover={{ scale: 1.02 }}>
            And many more technologies I'm constantly learning and exploring...
          </motion.p>

          <div className="flex flex-wrap justify-center gap-3">
            {["GraphQL", "Redis", "Kubernetes", "Firebase", "Supabase", "Prisma", "tRPC", "Zustand"].map(
              (tech, index) => (
                <motion.div
                  key={tech}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Badge
                    variant="outline"
                    className="px-4 py-2 text-sm hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 dark:hover:from-blue-950 dark:hover:to-purple-950 transition-all duration-300 cursor-pointer"
                  >
                    {tech}
                  </Badge>
                </motion.div>
              ),
            )}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
