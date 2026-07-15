"use client"

import { motion } from "framer-motion"
import { ExternalLink, Github } from "lucide-react"
import Image from "next/image"

export function ProjectsSection() {
  const projects = [
    {
      id: "ecommerce",
      title: "E-Commerce CVIndolineSentosa",
      description: "A production-grade, full-stack e-commerce solution with modern client UI, administrative backend, and real-time inventory synchronization.",
      image: "/indoline.png",
      technologies: ["Next.js", "TypeScript", "MongoDB", "Tailwind CSS"],
      liveUrl: "https://www.indolinesentosa.com/",
      githubUrl: "https://github.com/KINGDimsSky?tab=repositories",
      featured: true,
      domain: "indolinesentosa.com",
    },
    {
      id: "taskmanager",
      title: "Toyota BSD Serpong",
      description: "A high-performance promotional and sales platform for Toyota dealerships, optimized for client conversion and dynamic cataloging.",
      image: "/toyotabsd.png",
      technologies: ["Next.js", "TypeScript", "Supabase", "Tailwind CSS"],
      liveUrl: "https://www.toyotabsdserpong.com/",
      githubUrl: "https://github.com/DimsSky",
      featured: true,
      domain: "toyotabsdserpong.com",
    },
    {
      id: "weather",
      title: "AgriNext Platform",
      description: "An agricultural intelligence dashboard incorporating weather forecasting, spatial map visualization, and localized analytics.",
      image: "/AgriNext.png",
      technologies: ["Next.js", "TypeScript", "OpenWeather API", "OpenAI API", "Tailwind CSS"],
      liveUrl: "https://agrinext.vercel.app/",
      githubUrl: "https://github.com/KINGDimsSky/AgriNext",
      featured: true,
      domain: "agrinext.vercel.app",
    },
    {
      id: "belanjaorek",
      title: "BelanjaoRek Marketplace",
      description: "A high-capacity regional multi-tenant marketplace platform featuring secure transactional infrastructure (Currently in development).",
      image: "/Belanjaorek.png",
      technologies: ["Next.js", "Prisma", "PostgreSQL", "NestJS", "Tailwind CSS"],
      liveUrl: "#",
      githubUrl: "https://github.com/KINGDimsSky/belanjaorek",
      featured: false,
      domain: "belanjaorek.dev",
    },
  ]

  return (
    <section
      id="projects"
      className="py-24 bg-canvas-light text-ink border-t border-hairline relative overflow-hidden"
    >
      <div className="max-w-[1640px] mx-auto px-6">
        {/* Header Block */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-start gap-4 mb-16 text-left"
        >
          <span className="font-mono text-xs tracking-widest text-brand font-medium uppercase">
            [04 // COMPLETED BUILDS]
          </span>
          <h2 className="font-sans text-4xl sm:text-5xl font-normal leading-[1.1] tracking-[-0.03em] text-ink">
            Production applications.
          </h2>
          <p className="font-sans text-base text-ink-soft leading-relaxed max-w-[620px]">
            Selected technical solutions engineered for active business operations, focusing on robust data structures 
            and modern UX.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => {
            const isDark = project.featured; // Polarity flip for featured cards

            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`flex flex-col rounded-[12px] overflow-hidden border transition-all duration-300 ${
                  isDark
                    ? "bg-canvas text-white border-hairline-soft"
                    : "bg-white text-ink border-hairline"
                }`}
              >
                {/* macOS-style Studio Window Preview */}
                <div className={`border-b ${isDark ? "bg-canvas border-hairline-soft" : "bg-[#f7f7f7] border-hairline"}`}>
                  {/* Chrome header */}
                  <div className="h-10 px-4 flex items-center justify-between gap-4">
                    {/* macOS Window Buttons */}
                    <div className="flex items-center gap-1.5 shrink-0">
                      <div className="w-2 h-2 rounded-full bg-[#ff5f56]" />
                      <div className="w-2 h-2 rounded-full bg-[#ffbd2e]" />
                      <div className="w-2 h-2 rounded-full bg-[#27c93f]" />
                    </div>
                    {/* Address Bar Pill */}
                    <div className={`h-6 flex-1 max-w-[280px] mx-auto rounded-[4px] border flex items-center justify-center px-4 font-mono text-[9px] select-none ${
                      isDark 
                        ? "bg-canvas-soft/40 border-hairline-soft/30 text-mute" 
                        : "bg-white/80 border-hairline/60 text-ink-soft"
                    }`}>
                      <span className="truncate">{project.domain}</span>
                    </div>
                    {/* Empty placeholder */}
                    <div className="w-12 shrink-0" />
                  </div>

                  {/* Screenshot Viewport */}
                  <div className={`relative h-44 sm:h-52 w-full overflow-hidden ${isDark ? "bg-[#161616]" : "bg-canvas-paper"}`}>
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      sizes="(max-w-768px) 100vw, 800px"
                      className="object-cover object-top hover:scale-[1.03] transition-transform duration-700"
                    />
                    <div className="absolute inset-0 border border-black/5 pointer-events-none" />
                  </div>
                </div>

                {/* Card Info Content */}
                <div className="p-6 flex flex-col flex-1 gap-4 items-start text-left">
                  {/* Eyebrow Label */}
                  <span className={`font-mono text-[11px] tracking-wider uppercase ${isDark ? "text-brand" : "text-link-blue"}`}>
                    {project.featured ? "Featured System" : "Core System"}
                  </span>

                  {/* Title & Desc */}
                  <div className="space-y-2">
                    <h3 className="font-sans text-xl font-medium tracking-tight">
                      {project.title}
                    </h3>
                    <p className={`font-sans text-xs md:text-sm leading-relaxed ${isDark ? "text-ash" : "text-ink-soft"}`}>
                      {project.description}
                    </p>
                  </div>

                  {/* Technology badging */}
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className={`px-2 py-0.5 rounded-[4px] font-mono text-[10px] ${
                          isDark
                            ? "bg-canvas-soft text-[#55beff] border border-hairline-soft"
                            : "bg-canvas-paper text-[#0052ef] border border-hairline"
                        }`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* CTAs */}
                  <div className="flex items-center gap-4 mt-auto pt-4 w-full">
                    {project.liveUrl !== "#" ? (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`h-9 px-5 rounded-full font-sans text-xs font-semibold flex items-center gap-2 transition-colors duration-200 ${
                          isDark
                            ? "bg-white text-ink hover:bg-brand hover:text-ink"
                            : "bg-ink text-white hover:bg-brand hover:text-ink"
                        }`}
                      >
                        <ExternalLink className="w-3.5 h-3.5" />
                        <span>Live Demo</span>
                      </a>
                    ) : (
                      <span className="h-9 px-4 rounded-[4px] font-mono text-xs text-mute flex items-center border border-hairline-soft bg-canvas-soft">
                        Private Build
                      </span>
                    )}

                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`h-9 px-4 rounded-[5px] font-sans text-xs font-medium flex items-center gap-2 transition-colors border ${
                        isDark
                          ? "bg-canvas-soft text-ash border-hairline-soft hover:text-white hover:border-ash"
                          : "bg-canvas-light text-ink-soft border-hairline hover:text-ink hover:border-ink/30"
                      }`}
                    >
                      <Github className="w-3.5 h-3.5" />
                      <span>Code Repository</span>
                    </a>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
