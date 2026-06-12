"use client"

import { motion } from "framer-motion"
import { SectionWrapper } from "@/components/section-wrapper"
import { Marquee } from "@/components/marquee"
import { aboutBio, techStackCategories } from "@/lib/data"

export function About() {
  return (
    <>
      <SectionWrapper id="about" className="px-6 py-28 md:px-10 md:py-36">
        <div className="mx-auto max-w-4xl">
          <div className="mx-auto max-w-3xl text-center">
            <p className="section-label mb-4">About</p>
            <h2 className="font-display text-4xl font-light text-luxury-fg md:text-5xl">
              Crafting digital experiences with intent
            </h2>

            <div className="mt-12 space-y-6 text-left font-body text-base leading-relaxed text-luxury-muted md:text-lg">
              {aboutBio.map((para, i) => (
                <motion.p
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.6 }}
                >
                  {para}
                </motion.p>
              ))}
            </div>
          </div>

          <div className="mt-20">
            <h3 className="font-display text-2xl font-light text-luxury-fg mb-8 text-center">
              Technical Expertise
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {techStackCategories.map((cat, i) => (
                <motion.div
                  key={cat.category}
                  className="p-6 border border-[#f5f0eb0d] bg-[#111111] rounded-xl border-l-[3px] border-l-luxury-accent/20 hover:border-l-luxury-accent transition-all duration-300"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                >
                  <h4 className="font-display text-lg font-light text-luxury-fg tracking-wide mb-4">
                    {cat.category}
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {cat.skills.map((skill) => (
                      <span key={skill} className="chip">
                        {skill}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </SectionWrapper>

      <Marquee />
    </>
  )
}
