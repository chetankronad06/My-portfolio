"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { SectionWrapper } from "@/components/section-wrapper"
import { projects } from "@/lib/data"
import { ArrowUpRight } from "lucide-react"

export function Projects() {
  return (
    <SectionWrapper id="projects" className="px-6 py-28 md:px-10 md:py-36">
      <div className="mx-auto max-w-6xl">
        <p className="section-label mb-4">Selected Work</p>
        <h2 className="font-display text-4xl font-light text-luxury-fg md:text-5xl">
          Projects
        </h2>

        <div className="mt-16 flex flex-col gap-10">
          {projects.map((project, i) => {
            const imageOnRight = i % 2 === 1

            return (
              <motion.article
                key={project.title}
                className="project-card group grid min-h-[420px] grid-cols-1 md:min-h-[480px] md:grid-cols-2"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ delay: i * 0.1, duration: 0.7 }}
              >
                <div
                  className={`flex items-center justify-center p-6 sm:p-8 md:p-10 lg:p-12 bg-[#0d0d0d]/90 relative min-h-[300px] md:min-h-full ${
                    imageOnRight ? "md:order-2" : "md:order-1"
                  }`}
                >
                  <div className="relative w-full aspect-[16/10] overflow-hidden rounded-xl border border-[#f5f0eb12] bg-[#0a0a0a] shadow-2xl flex flex-col">
                    <div className="flex items-center h-6 px-3 bg-[#121212] border-b border-[#f5f0eb08] gap-1.5 shrink-0 select-none">
                      <div className="h-1.5 w-1.5 rounded-full bg-red-500/50" />
                      <div className="h-1.5 w-1.5 rounded-full bg-yellow-500/50" />
                      <div className="h-1.5 w-1.5 rounded-full bg-green-500/50" />
                    </div>
                    <div className="relative flex-1 w-full overflow-hidden">
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover object-top transition-transform duration-700 group-hover:scale-[1.04]"
                        sizes="(max-width: 768px) 100vw, 50vw"
                      />
                    </div>
                  </div>
                </div>

                <div
                  className={`flex flex-col p-8 md:p-12 lg:p-14 ${
                    imageOnRight ? "md:order-1" : "md:order-2"
                  }`}
                >
                  <div className="flex flex-wrap gap-x-4 gap-y-2">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="font-mono-label text-[10px] uppercase tracking-wider text-luxury-accent"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  <h3 className="mt-6 font-display text-3xl font-light text-luxury-fg md:text-4xl lg:text-5xl">
                    {project.title}
                  </h3>

                  <p className="mt-5 max-w-lg font-body text-base leading-relaxed text-luxury-muted md:text-lg font-medium">
                    {project.description}
                  </p>

                  {project.points && (
                    <ul className="mt-6 space-y-3 font-body text-[14px] leading-relaxed text-luxury-muted">
                      {project.points.map((point, index) => (
                        <li key={index} className="flex gap-2 items-start">
                          <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-luxury-accent/60" />
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  )}

                  <div className="mt-auto flex gap-8 pt-10">
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="social-link inline-flex items-center gap-1"
                    >
                      Live <ArrowUpRight className="h-3.5 w-3.5" />
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="social-link inline-flex items-center gap-1"
                    >
                      GitHub <ArrowUpRight className="h-3.5 w-3.5" />
                    </a>
                  </div>
                </div>
              </motion.article>
            )
          })}
        </div>
      </div>
    </SectionWrapper>
  )
}
