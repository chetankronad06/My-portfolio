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

        <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-4">
          {achievements.map((item, i) => (
            <motion.article
              key={item.title}
              className={`achievement-card flex flex-col justify-between p-6 md:p-8 min-h-[220px] border border-[#f5f0eb08] bg-[#111111] hover:border-luxury-accent/30 transition-all duration-500 ${
                item.wide ? "md:col-span-2" : "md:col-span-1"
              }`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.7, ease: "easeOut" }}
            >
              <div>
                <div className="flex items-center justify-between">
                  <span className="font-mono-label text-[10px] uppercase tracking-[0.2em] text-luxury-accent font-semibold">
                    {item.tag}
                  </span>
                  {item.year && (
                    <span className="font-mono-label text-[10px] text-luxury-muted font-medium">
                      {item.year}
                    </span>
                  )}
                </div>
                <h3 className="mt-4 font-display text-2xl font-light text-luxury-fg leading-tight">
                  {item.title}
                </h3>
              </div>
              <p className="mt-5 font-body text-sm leading-relaxed text-luxury-muted">
                {item.description}
              </p>
            </motion.article>
          ))}
        </div>
      </div>
    </SectionWrapper>
  )
}
