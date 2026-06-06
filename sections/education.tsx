"use client"

import { motion } from "framer-motion"
import { SectionWrapper } from "@/components/section-wrapper"
import { education } from "@/lib/data"

export function Education() {
  return (
    <SectionWrapper id="education" className="px-6 py-28 md:px-10 md:py-36">
      <div className="mx-auto max-w-6xl">
        <p className="section-label mb-4">Education</p>
        <h2 className="font-display text-4xl font-light text-luxury-fg md:text-5xl">
          Academic foundation
        </h2>

        <div className="mt-16 grid gap-6 md:grid-cols-2">
          {education.map((item, i) => (
            <motion.article
              key={item.degree}
              className="edu-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12, duration: 0.6 }}
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="font-display text-2xl text-luxury-fg">{item.degree}</h3>
                  <p className="mt-1 font-body text-sm text-luxury-muted">{item.institution}</p>
                </div>
                <span className="font-mono-label shrink-0 text-xs text-luxury-accent">
                  {item.grade}
                </span>
              </div>
              <p className="mt-4 font-mono-label text-[11px] uppercase tracking-wider text-luxury-muted">
                {item.duration}
              </p>
              <ul className="mt-6 space-y-2">
                {item.highlights.map((h) => (
                  <li
                    key={h}
                    className="font-body text-sm text-luxury-muted before:mr-2 before:text-luxury-accent before:content-['—']"
                  >
                    {h}
                  </li>
                ))}
              </ul>
            </motion.article>
          ))}
        </div>
      </div>
    </SectionWrapper>
  )
}
