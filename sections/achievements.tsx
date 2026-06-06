"use client"

import { motion } from "framer-motion"
import { SectionWrapper } from "@/components/section-wrapper"
import { achievements } from "@/lib/data"

export function Achievements() {
  return (
    <SectionWrapper id="achievements" className="px-6 py-28 md:px-10 md:py-36">
      <div className="mx-auto max-w-6xl">
        <p className="section-label mb-4">Recognition</p>
        <h2 className="font-display text-4xl font-light text-luxury-fg md:text-5xl">
          Achievements
        </h2>

        <div className="mt-16 grid grid-cols-1 gap-4 md:grid-cols-4">
          {achievements.map((item, i) => (
            <motion.article
              key={item.title}
              className={`achievement-card ${item.wide ? "md:col-span-2" : "md:col-span-1"}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.6 }}
            >
              <span className="font-mono-label text-[10px] uppercase tracking-[0.2em] text-luxury-accent">
                {item.tag}
              </span>
              <h3 className="mt-3 font-display text-xl text-luxury-fg md:text-2xl">
                {item.title}
              </h3>
              <p className="mt-2 font-body text-sm text-luxury-muted">{item.description}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </SectionWrapper>
  )
}
