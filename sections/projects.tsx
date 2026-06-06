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
                  className={`relative min-h-[260px] md:min-h-full ${
                    imageOnRight ? "md:order-2" : "md:order-1"
                  }`}
                >
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
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

                  <p className="mt-5 max-w-lg font-body text-base leading-relaxed text-luxury-muted md:text-lg">
                    {project.description}
                  </p>

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
