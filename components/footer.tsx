"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Github, Linkedin, Mail, Twitter } from "lucide-react"

export function Footer() {
  const socialLinks = [
    { icon: Github, href: "#", label: "GitHub" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Mail, href: "#", label: "Email" },
  ]

  return (
    <footer className="bg-muted/30 border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center space-y-8"
        >
          <div>
            <h3 className="font-heading text-2xl font-bold mb-4">Let's Create Something Amazing Together</h3>
            <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              I'm always open to discussing new opportunities and interesting projects.
            </p>
          </div>

          <div className="flex items-center justify-center space-x-4">
            {socialLinks.map((link, index) => (
              <motion.div
                key={link.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Button
                  variant="ghost"
                  size="icon"
                  className="hover:text-blue-600 hover:bg-blue-50 dark:hover:bg-blue-900/20"
                  asChild
                >
                  <a href={link.href} aria-label={link.label}>
                    <link.icon className="h-5 w-5" />
                  </a>
                </Button>
              </motion.div>
            ))}
          </div>

          <div className="border-t border-border pt-8">
            <p className="text-muted-foreground text-sm">
              © 2024 DimsSky Portfolio. Built with Next.js and Framer Motion. Deployed on Vercel.
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}
