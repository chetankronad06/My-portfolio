"use client"

import { motion } from "framer-motion"
import { SectionWrapper } from "@/components/section-wrapper"
import { education } from "@/lib/data"

export function Education() {
  return (
    <SectionWrapper id="education" className="px-6 py-28 md:px-10 md:py-36">
      <div className="mx-auto max-w-4xl">
        <p className="section-label mb-4">Education</p>
        <h2 className="font-display text-4xl font-light text-luxury-fg md:text-5xl mb-16">
          Academic Foundation
        </h2>

        {/* Timeline Container */}
        <div className="relative pl-8 md:pl-12 ml-4 md:ml-8 space-y-12">
          {/* Vertical Track Line */}
          <div className="absolute left-0 top-2 bottom-2 w-[1px] bg-gradient-to-b from-luxury-accent/50 via-luxury-border/30 to-transparent" />

          {education.map((item, i) => (
            <motion.article
              key={item.degree}
              className="relative group"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ delay: i * 0.15, duration: 0.7, ease: "easeOut" }}
            >
              {/* Glowing Timeline Node */}
              <div className="absolute -left-[42px] md:-left-[58px] top-1.5 flex h-5 w-5 items-center justify-center select-none">
                {/* Outer pulsing ring */}
                <div className="absolute h-5 w-5 rounded-full bg-luxury-accent/15 border border-luxury-accent/20 animate-ping opacity-75" />
                {/* Center glowing dot */}
                <div className="relative h-2.5 w-2.5 rounded-full bg-luxury-accent shadow-[0_0_10px_#f5a623] transition-transform duration-300 group-hover:scale-125" />
              </div>

              {/* Card Content */}
              <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 border-b border-[#f5f0eb08] pb-8 group-hover:border-b-luxury-accent/10 transition-colors duration-500">
                <div className="max-w-2xl">
                  <span className="font-mono-label text-[11px] uppercase tracking-[0.2em] text-luxury-accent font-medium">
                    {item.duration}
                  </span>
                  <h3 className="mt-2 font-display text-2xl md:text-3xl font-light text-luxury-fg leading-tight">
                    {item.degree}
                  </h3>
                  <p className="mt-2 font-body text-sm text-luxury-muted flex flex-wrap items-center gap-x-2 gap-y-1">
                    <span className="font-semibold text-luxury-fg">{item.institution}</span>
                    <span className="text-luxury-muted/30">•</span>
                    <span>{item.location}</span>
                  </p>
                </div>

                <div className="shrink-0 mt-2 md:mt-0">
                  <span className="inline-flex px-3.5 py-1 font-mono-label text-xs tracking-wider text-luxury-accent border border-luxury-accent/15 rounded-full bg-luxury-accent/5 shadow-[0_2px_12px_rgba(245,166,35,0.02)] font-medium">
                    {item.grade}
                  </span>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </SectionWrapper>
  )
}
