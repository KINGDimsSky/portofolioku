"use client"

import { motion } from "framer-motion"
import { Monitor, Cpu, Database, Settings } from "lucide-react"

export function TechStackSection() {
  const categories = [
    {
      title: "Frontend Architecture",
      icon: Monitor,
      eyebrow: "[LAYER // FRONT_END]",
      techs: [
        { name: "React", grade: "Production", specialty: "Component UI architecture" },
        { name: "Next.js", grade: "Production", specialty: "SSR, SSR optimization, routing" },
        { name: "TypeScript", grade: "Production", specialty: "Static typing & compiler safety" },
        { name: "VanillaJS", grade: "Production", specialty: "Native Javascript" },
         { name: "Tailwind CSS", grade: "Production", specialty: "Design tokens & fluid layout" },
      ],
    },
    {
      title: "Systems & Backend",
      icon: Cpu,
      eyebrow: "[LAYER // BACK_END]",
      techs: [
        { name: "Node.js", grade: "Production", specialty: "Event-driven server runtime" },
        { name: "Express.js", grade: "Active Use", specialty: "Middleware REST routing" },
        { name: "NestJS", grade: "Active Dev", specialty: "Enterprise DI & controller systems" },
        { name: "GO", grade: "Learning", specialty: "High Microservices Back-end" },
      ],
    },
    {
      title: "Database & Services",
      icon: Database,
      eyebrow: "[SYSTEM // DATA_STORE]",
      techs: [
        { name: "PostgreSQL", grade: "Active Use", specialty: "Relational schema modeling" },
        { name: "MongoDB", grade: "Active Use", specialty: "Document NoSQL collections" },
        { name: "Prisma ORM", grade: "Active Use", specialty: "Type-safe database abstraction" },
        { name: "Supabase", grade: "Active Use", specialty: "Cloud services integration" },
        { name: "Firebase", grade: "Active Use", specialty: "NoSQL database integration" },
      ],
    },
    {
      title: "Toolchain & Platforms",
      icon: Settings,
      eyebrow: "[INFRA // DEPLOY_FLOW]",
      techs: [
        { name: "Git & GitHub", grade: "Production", specialty: "Collaboration branch flow" },
        { name: "Postman", grade: "Active Use", specialty: "Endpoint verification testing" },
        { name: "Vercel", grade: "Active Use", specialty: "Hosting & serverless deploy" },
        { name: "Docker", grade: "Learning", specialty: "Containerized environments" },
      ],
    },
  ]

  return (
    <section
      id="tech"
      className="py-24 bg-canvas text-white border-t border-hairline-soft relative overflow-hidden">
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
            [03 // CORE TECHNOLOGIES]
          </span>
          <h2 className="font-sans text-4xl sm:text-5xl font-normal leading-[1.1] tracking-[-0.03em] text-white">
            Standardized systems & toolchains.
          </h2>
          <p className="font-sans text-base text-ash leading-relaxed max-w-[620px]">
            A breakdown of my technical stack grouped by operational layer, application specialty, 
            and current competency grade.
          </p>
        </motion.div>

        {/* Visual Dashboard Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
          {categories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-canvas-soft border border-hairline-soft rounded-[12px] p-8 flex flex-col gap-6 text-left"
            >
              {/* Category Header */}
              <div className="flex items-center justify-between border-b border-hairline-soft pb-4">
                <div className="flex flex-col gap-1">
                  <span className="font-mono text-[10px] text-link-blue-soft tracking-widest uppercase">
                    {category.eyebrow}
                  </span>
                  <h3 className="font-sans text-[18px] font-medium text-white tracking-tight">
                    {category.title}
                  </h3>
                </div>
                <div className="w-8 h-8 rounded-[4px] bg-canvas flex items-center justify-center border border-hairline-soft">
                  <category.icon className="w-4 h-4 text-ash" />
                </div>
              </div>

              {/* Technologies List */}
              <div className="flex flex-col gap-4">
                {category.techs.map((tech) => (
                  <div key={tech.name} className="flex flex-col gap-1">
                    <div className="flex items-center justify-between">
                      <span className="font-sans text-[15px] font-medium text-white">
                        {tech.name}
                      </span>
                      <span className={`px-2 py-0.5 rounded-[3px] font-mono text-[9px] uppercase tracking-wider border ${
                        tech.grade === "Production"
                          ? "bg-success/5 text-success border-success/20"
                          : tech.grade === "Active Use" || tech.grade === "Active Dev"
                          ? "bg-link-blue-soft/5 text-link-blue-soft border-link-blue-soft/20"
                          : "bg-mute/5 text-ash border-mute/20"
                      }`}>
                        {tech.grade}
                      </span>
                    </div>
                    <span className="font-sans text-xs text-mute">
                      {tech.specialty}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
