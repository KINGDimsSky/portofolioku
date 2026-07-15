"use client"

import { motion } from "framer-motion"
import { Calendar, Briefcase, Users, GraduationCap } from "lucide-react"

export function ExperienceSection() {
  const experiences = [
    {
      type: "work",
      icon: Briefcase,
      role: "Freelance Fullstack Developer",
      company: "CV IndolineSentosa",
      location: "Surabaya, Jawa Timur",
      period: "Nov 2024 - May 2026",
      points: [
        "Developed and maintained a production company profile website using Next.js, Prisma, Tailwind CSS, and modern web technologies.",
        "Refactored application architecture, improved UI/UX, SEO, performance, and maintainability for long-term scalability.",
        "Optimized data fetching, database operations, and file management workflows to improve efficiency and reduce operational costs.",
        "Collaborated directly with stakeholders to gather requirements, deliver features, and support production deployment."
      ],
      tech: ["Next.js", "Prisma", "PostgreSQL", "Tailwind CSS"],
      link: "https://www.indolinesentosa.com/"
    },
    {
      type: "work",
      icon: Briefcase,
      role: "Freelance Front End Developer",
      company: "Toyotaserpong",
      location: "Gading Serpong, Tangerang",
      period: "Mar 2025",
      points: [
        "Developed a responsive vehicle catalog website using Next.js, Tailwind CSS, and Supabase.",
        "Implemented mobile-first and performance-focused user interfaces to improve accessibility across devices.",
        "Integrated dynamic vehicle data and image management through Supabase Storage.",
        "Collaborated directly with the client to deliver a production-ready catalog platform aligned with business requirements."
      ],
      tech: ["Next.js", "Tailwind CSS", "Supabase", "Supabase Storage"],
      link: "https://www.toyotabsdserpong.com/"
    },
    {
      type: "org",
      icon: Users,
      role: "Committee",
      company: "Google DevFest Cloud Surabaya 2024",
      location: "Surabaya",
      period: "2024 - Present",
      points: [
        "Coordinated event operations and logistics for a regional technology conference organized by Google Developer Groups (GDG).",
        "Collaborated with cross-functional teams to support successful event execution and attendee engagement."
      ],
      tech: ["Logistics", "Event Operations", "GDG Community"]
    },
    {
      type: "org",
      icon: GraduationCap,
      role: "Frontend Development Mentor",
      company: "IFSector Community",
      location: "Universitas Wijaya Kusuma Surabaya",
      period: "2024 - Present",
      points: [
        "Mentored junior students in HTML, CSS, and JavaScript fundamentals through practical coding assignments.",
        "Guided students through real web development project building and debug sessions."
      ],
      tech: ["Mentorship", "HTML & CSS", "JavaScript Basics"]
    }
  ]

  return (
    <section
      id="experience"
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
          <span className="font-mono text-xs tracking-widest text-[#f36458] font-medium uppercase">
            [02 // HISTORY OF BUILDS & SERVICES]
          </span>
          <h2 className="font-sans text-4xl sm:text-5xl font-normal leading-[1.1] tracking-[-0.03em] text-ink">
            Production track record.
          </h2>
          <p className="font-sans text-base text-ink-soft leading-relaxed max-w-[620px]">
            Operational history spanning commercial system development, open technology organization committees, 
            and technical programming instruction.
          </p>
        </motion.div>

        {/* Experience Timeline Layout */}
        <div className="flex flex-col border-t border-hairline divide-y divide-hairline">
          {experiences.map((exp, index) => (
            <motion.div
              key={`${exp.company}-${exp.role}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="py-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start hover:bg-canvas-paper/20 transition-colors duration-200"
            >
              {/* Left Column: Dates & Icon */}
              <div className="lg:col-span-4 flex flex-col items-start gap-2 text-left">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-[4px] bg-canvas-paper flex items-center justify-center">
                    <exp.icon className="w-4 h-4 text-ink" />
                  </div>
                  <span className="font-mono text-xs text-mute tracking-wider uppercase">
                    {exp.period}
                  </span>
                </div>
                <h3 className="font-sans text-lg font-medium text-ink mt-2 tracking-tight">
                  {exp.role}
                </h3>
                <span className="font-mono text-xs text-link-blue">
                  {exp.company}
                </span>
                <span className="font-sans text-xs text-mute">
                  {exp.location}
                </span>
              </div>

              {/* Right Column: Work Description Bullets & Badges */}
              <div className="lg:col-span-8 flex flex-col items-start gap-6 text-left">
                <ul className="space-y-3 max-w-[760px]">
                  {exp.points.map((pt, i) => (
                    <li key={i} className="font-sans text-sm text-ink-soft leading-relaxed flex items-start gap-3">
                      <span className="text-brand select-none mt-1.5">•</span>
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>

                {/* Tech tags used */}
                <div className="flex flex-wrap gap-2">
                  {exp.tech.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-0.5 rounded-[4px] font-mono text-[10px] bg-canvas-paper text-ink-soft border border-hairline"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Optional site link */}
                {exp.link && (
                  <a
                    href={exp.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-sans text-xs font-semibold text-link-blue hover:underline flex items-center gap-1.5"
                  >
                    Visit operational site →
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
