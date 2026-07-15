"use client"

import { motion } from "framer-motion"
import { Code, Server, Smartphone, Compass } from "lucide-react"

export function AboutSection() {
  const skills = [
    {
      icon: Code,
      title: "Frontend Architecture",
      description: "Developing responsive and structured client interfaces using Next.js, React, Tailwind CSS, and TypeScript.",
    },
    {
      icon: Server,
      title: "Systems & Backend",
      description: "Designing RESTful APIs and backend microservices with Node.js, Express, NestJS, PostgreSQL, and MongoDB.",
    },
    {
      icon: Compass,
      title: "Workflow & Tooling",
      description: "Adhering to strict Git version control, containerized Docker environments, Postman verification, and Figma workflows.",
    },
    {
      icon: Smartphone,
      title: "Pawn Development",
      description: "Scripting and optimizing multiplayer gameplay systems and server architectures utilizing the Pawn language.",
    },
  ]

  const stats = [
    { number: "3.52", label: "UWKS GPA" },
    { number: "4+", label: "BUILDS DEPLOYED" },
    { number: "1.5+", label: "YEARS WORK EXP" },
    { number: "2024", label: "DEVCLOUD SYNC" },
  ]

  return (
    <section
      id="about"
      className="py-24 bg-canvas-paper text-ink relative overflow-hidden border-t border-hairline"
    >
      <div className="max-w-[1640px] mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Heading & Executive Summary */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 flex flex-col items-start gap-4"
          >
            <span className="font-mono text-xs tracking-widest text-brand font-medium uppercase">
              [01 // EXECUTIVE SUMMARY]
            </span>
            <h2 className="font-sans text-4xl sm:text-5xl font-normal leading-[1.1] tracking-[-0.03em] text-ink">
              Designing for performance, built for scale.
            </h2>
            <p className="font-sans text-base text-ink-soft leading-relaxed mt-4 max-w-[500px]">
              I am a developer who views software engineering through the lens of clean, decoupled systems. 
              Currently pursuing a Bachelor of Informatics Engineering at Universitas Wijaya Kusuma Surabaya (GPA: 3.52/4.00), my approach is heavily 
              anchored in SOLID design principles, secure data architectures, and automated testing. 
              Alongside my studies, I serve as a Frontend Mentor at the IFSector Community, guiding junior developers in frontend workflows and JavaScript core systems.
            </p>

            {/* Flat Stats Grid */}
            <div className="grid grid-cols-2 gap-x-8 gap-y-6 mt-8 w-full border-t border-hairline pt-8">
              {stats.map((stat) => (
                <div key={stat.label} className="flex flex-col">
                  <span className="font-sans text-3xl font-normal text-ink tracking-tight">
                    {stat.number}
                  </span>
                  <span className="font-mono text-[11px] text-mute tracking-wider mt-1 uppercase">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right Column: Clean Competency Grid */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-canvas-light p-8 rounded-[12px] border border-hairline hover:border-ink/20 hover:shadow-sm transition-all duration-300 flex flex-col items-start text-left"
              >
                <div className="w-10 h-10 rounded-full bg-canvas-paper flex items-center justify-center mb-6">
                  <skill.icon className="w-5 h-5 text-ink" />
                </div>
                <h3 className="font-sans text-[19px] font-medium text-ink mb-3 tracking-tight">
                  {skill.title}
                </h3>
                <p className="font-sans text-sm text-ink-soft leading-relaxed">
                  {skill.description}
                </p>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}
