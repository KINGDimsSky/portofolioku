"use client"

import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Github, Star, Eye, GitFork } from "lucide-react"
import { useRef, useState } from "react"
import Image from "next/image"

export function ProjectsSection() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  })

  const [hoveredProject, setHoveredProject] = useState<string | null>(null)

  const y = useTransform(scrollYProgress, [0, 1], [100, -100])

  const projects = [
    {
      id: "ecommerce",
      title: "E-Commerce CVIndolineSentosa",
      description:
        "A full-stack e-commerce solution with modern UI, admin dashboard, and real-time inventory management.",
      image: "/indoline.png",
      technologies: ["Next.js", "TypeScript", "MongoDB", "Tailwind"],
      liveUrl: "https://www.indolinesentosa.com/",
      githubUrl: "#",
      featured: true,
      stats: { stars: 1, forks: 2, views: "20" },
      color: "from-blue-500 to-cyan-500",
    },
    {
      id: "taskmanager",
      title: "ToyotaBSDSerpong",
      description:
        "A Advertisment Website to Selling his product Toyota Cars with Raymond Santosa Selling advistor",
      image: "/toyotabsd.png",
      technologies: ["NextJS", "Typescript", "Supabase", "Tailwind"],
      liveUrl: "https://www.toyotabsdserpong.com/",
      githubUrl: "#",
      featured: true,
      stats: { stars: 1, forks: 0, views: "Private" },
      color: "from-green-500 to-emerald-500",
    },
    {
      id: "weather",
      title: "AgriNext",
      description:
        "A beautiful weather application with location-based forecasts, interactive maps, and detailed analytics.",
      image: "/AgriNext.png",
      technologies: ["NextJS", "Typescript", "OpenWeather API", "TailwindCSS", "OpenAIAPI"],
      liveUrl: "#",
      githubUrl: "#",
      featured: true,
      stats: { stars: 2, forks: 2, views: "500" },
      color: "from-purple-500 to-pink-500",
    },
    {
      id: "portfolio",
      title: "BelanjaoRek On Progress",
      description:
        "A High Quality E-Commerce Marketplace Belanjaorek Still On Progress",
      image: "/Belanjaorek.png",
      technologies: ["Next.js", "Prisma", "Tailwind CSS", "PostgreSQL", "NestJS"],
      liveUrl: "#",
      githubUrl: "#",
      featured: false,
      stats: { stars: 1, forks: 1, views: "Private" },
      color: "from-orange-500 to-red-500",
    },
  ]

  return (
    <section
      ref={ref}
      id="projects"
      className="py-32 bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-50 dark:from-gray-900 dark:via-blue-950 dark:to-indigo-950 relative overflow-hidden"
    >
      {/* Animated background elements */}
      <motion.div
        className="absolute top-32 left-20 w-64 h-64 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-full blur-3xl"
        style={{ y }}
        animate={{ scale: [1, 1.3, 1], rotate: [0, 120, 240, 360] }}
        transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY }}
      />
      <motion.div
        className="absolute bottom-32 right-20 w-80 h-80 bg-gradient-to-r from-pink-400/20 to-orange-400/20 rounded-full blur-3xl"
        style={{ y: useTransform(scrollYProgress, [0, 1], [-50, 50]) }}
        animate={{ scale: [1.3, 1, 1.3], rotate: [360, 240, 120, 0] }}
        transition={{ duration: 25, repeat: Number.POSITIVE_INFINITY }}
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
            initial={{ scale: 0, rotate: 180 }}
            whileInView={{ scale: 1, rotate: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="inline-block mb-6"
          >
            <Badge className="px-6 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white text-sm font-medium">
              Featured Work
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
              className="bg-gradient-to-r from-purple-600 via-pink-600 to-orange-600 bg-clip-text text-transparent"
              animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
              transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY }}
            >
              Highlighted
            </motion.span>
            <br />
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              viewport={{ once: true }}
            >
              Projects
            </motion.span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
            className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed"
          >
            Here are some of my recent projects that showcase my skills, creativity, and passion for building
            exceptional digital experiences.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50, rotateX: -20 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              transition={{
                duration: 0.8,
                delay: index * 0.1,
                type: "spring",
                stiffness: 100,
              }}
              viewport={{ once: true }}
              whileHover={{ y: -15, scale: 1.02 }}
              onHoverStart={() => setHoveredProject(project.id)}
              onHoverEnd={() => setHoveredProject(null)}
              className="group perspective-1000"
            >
              <Card className="h-full hover:shadow-2xl transition-all duration-500 border-0 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm relative overflow-hidden">
                {/* Animated background gradient */}
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                  initial={{ scale: 0, rotate: 45 }}
                  whileHover={{ scale: 1.5, rotate: 0 }}
                  transition={{ duration: 0.6 }}
                />

                <CardHeader className="p-0 relative">
                  <div className="relative overflow-hidden rounded-t-lg h-64">
                    <motion.div className="absolute inset-0" whileHover={{ scale: 1.1 }} transition={{ duration: 0.6 }}>
                      <Image
                        src={project.image || "/placeholder.svg"}
                        alt={project.title}
                        fill
                        className="object-cover"
                      />
                    </motion.div>

                    {/* Overlay with project stats */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      initial={{ y: 20 }}
                      whileHover={{ y: 0 }}
                    >
                      <div className="absolute bottom-4 left-4 flex items-center gap-4 text-white text-sm">
                        <div className="flex items-center gap-1">
                          <Star className="h-4 w-4" />
                          <span>{project.stats.stars}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <GitFork className="h-4 w-4" />
                          <span>{project.stats.forks}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Eye className="h-4 w-4" />
                          <span>{project.stats.views}</span>
                        </div>
                      </div>
                    </motion.div>

                    {project.featured && (
                      <motion.div
                        initial={{ scale: 0, rotate: -45 }}
                        animate={{ scale: 1, rotate: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
                        className="absolute top-4 left-4"
                      >
                        <Badge className={`bg-gradient-to-r ${project.color} text-white shadow-lg`}>⭐ Featured</Badge>
                      </motion.div>
                    )}
                  </div>
                </CardHeader>

                <CardContent className="p-8 relative z-10">
                  <motion.h3
                    className="font-heading font-bold text-2xl mb-4 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text transition-all duration-300"
                    style={{
                      backgroundImage:
                        hoveredProject === project.id
                          ? `linear-gradient(to right, ${project.color.split(" ")[1]}, ${project.color.split(" ")[3]})`
                          : undefined,
                    }}
                  >
                    {project.title}
                  </motion.h3>

                  <motion.p
                    className="text-muted-foreground mb-6 leading-relaxed"
                    initial={{ opacity: 0.8 }}
                    whileHover={{ opacity: 1 }}
                  >
                    {project.description}
                  </motion.p>

                  <div className="flex flex-wrap gap-2 mb-8">
                    {project.technologies.map((tech, techIndex) => (
                      <motion.div
                        key={tech}
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.3, delay: techIndex * 0.05 }}
                        viewport={{ once: true }}
                        whileHover={{ scale: 1.1, y: -2 }}
                      >
                        <Badge
                          variant="secondary"
                          className="text-xs hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 dark:hover:from-blue-950 dark:hover:to-purple-950 transition-all duration-300"
                        >
                          {tech}
                        </Badge>
                      </motion.div>
                    ))}
                  </div>

                  <div className="flex gap-4">
                    <motion.div whileHover={{ scale: 1.05, y: -2 }} whileTap={{ scale: 0.95 }}>
                      <Button
                        size="sm"
                        className={`bg-gradient-to-r ${project.color} hover:shadow-lg transition-all duration-300 relative overflow-hidden group/btn`}
                      >
                        <motion.div
                          className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent"
                          initial={{ x: "-100%" }}
                          whileHover={{ x: "100%" }}
                          transition={{ duration: 0.5 }}
                        />
                        <ExternalLink className="h-4 w-4 mr-2 relative z-10" />
                        <span className="relative z-10">Live Demo</span>
                      </Button>
                    </motion.div>

                    <motion.div whileHover={{ scale: 1.05, y: -2 }} whileTap={{ scale: 0.95 }}>
                      <Button
                        variant="outline"
                        size="sm"
                        className="hover:bg-gray-50 dark:hover:bg-gray-800 transition-all duration-300 group/btn bg-transparent"
                      >
                        <Github className="h-4 w-4 mr-2 group-hover/btn:rotate-12 transition-transform" />
                        Code
                      </Button>
                    </motion.div>
                  </div>
                </CardContent>

                {/* Floating particles on hover */}
                <AnimatePresence>
                  {hoveredProject === project.id && (
                    <>
                      {[...Array(6)].map((_, i) => (
                        <motion.div
                          key={i}
                          className={`absolute w-2 h-2 bg-gradient-to-r ${project.color} rounded-full`}
                          style={{
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                          }}
                          initial={{ scale: 0, opacity: 0 }}
                          animate={{
                            scale: [0, 1, 0],
                            opacity: [0, 1, 0],
                            y: [0, -30, -60],
                            x: [0, Math.random() * 40 - 20, Math.random() * 80 - 40],
                          }}
                          exit={{ scale: 0, opacity: 0 }}
                          transition={{ duration: 2, delay: i * 0.1 }}
                        />
                      ))}
                    </>
                  )}
                </AnimatePresence>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <motion.p className="text-lg text-muted-foreground mb-8" whileHover={{ scale: 1.02 }}>
            Want to see more of my work? Check out my complete portfolio.
          </motion.p>

          <motion.div whileHover={{ scale: 1.05, y: -2 }} whileTap={{ scale: 0.95 }}>
            <Button
              variant="outline"
              size="lg"
              className="px-8 py-4 bg-transparent border-2 hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 dark:hover:from-blue-950 dark:hover:to-purple-950 transition-all duration-300 group"
            >
              <span className="group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 group-hover:bg-clip-text transition-all duration-300">
                View All Projects
              </span>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
