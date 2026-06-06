"use client"

import { motion } from "framer-motion"
import { SectionWrapper } from "@/components/section-wrapper"
import { Marquee } from "@/components/marquee"
import { aboutBio, techStack } from "@/lib/data"

export function About() {
  return (
    <>
      <SectionWrapper id="about" className="px-6 py-28 md:px-10 md:py-36">
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
                {para.text}
                <strong className="font-medium text-luxury-fg">{para.bold}</strong>
                {para.rest}
                <strong className="font-medium text-luxury-fg">{para.bold2}</strong>
                {para.end}
              </motion.p>
            ))}
          </div>

          <motion.div
            className="mt-12 flex flex-wrap justify-center gap-3"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            {techStack.map((tech) => (
              <span key={tech} className="chip">
                {tech}
              </span>
            ))}
          </motion.div>
        </div>
      </SectionWrapper>

      <Marquee />
    </>
  )
}
