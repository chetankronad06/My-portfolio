"use client"

import { motion } from "framer-motion"
import { SectionWrapper } from "@/components/section-wrapper"
import { achievements } from "@/lib/data"
import { Trophy } from "lucide-react"

export function Achievements() {
  const featuredAchievement = achievements.find((item) => "featured" in item && item.featured)
  const otherAchievements = achievements.filter((item) => !("featured" in item && item.featured))

  return (
    <SectionWrapper id="achievements" className="px-6 py-28 md:px-10 md:py-36">
      <div className="mx-auto max-w-6xl">
        <p className="section-label mb-4">Recognition</p>
        <h2 className="font-display text-4xl font-light text-luxury-fg md:text-5xl">
          Achievements
        </h2>

        {/* Centered Glowing Victory Card */}
        {featuredAchievement && (
          <div className="mt-16 flex justify-center">
            <motion.article
              key={featuredAchievement.title}
              className="achievement-card flex flex-col justify-between p-8 md:p-10 min-h-[240px] max-w-2xl w-full border border-luxury-accent/30 bg-gradient-to-br from-[#1c140a] via-[#111111] to-[#0a0a0a] shadow-[0_0_40px_rgba(245,166,35,0.06)] hover:border-luxury-accent hover:shadow-[0_0_50px_rgba(245,166,35,0.15)] transition-all duration-700 relative overflow-hidden group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              {/* Top border glowing line */}
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-luxury-accent/50 to-transparent" />
              
              {/* Subtle ambient blur background layers */}
              <div className="pointer-events-none absolute -right-24 -top-24 h-48 w-48 rounded-full bg-luxury-accent/8 blur-3xl transition-transform duration-1000 group-hover:scale-110" />
              <div className="pointer-events-none absolute -left-24 -bottom-24 h-48 w-48 rounded-full bg-luxury-accent/4 blur-3xl" />

              <div>
                <div className="flex items-center justify-between">
                  <span className="font-mono-label text-xs uppercase tracking-[0.25em] text-luxury-accent font-semibold flex items-center gap-2">
                    <Trophy className="h-4 w-4 text-luxury-accent fill-luxury-accent/15 animate-pulse" />
                    {featuredAchievement.tag}
                  </span>
                  {featuredAchievement.year && (
                    <span className="font-mono-label text-xs text-luxury-muted font-medium">
                      {featuredAchievement.year}
                    </span>
                  )}
                </div>
                <h3 className="mt-6 font-display text-3xl font-light text-luxury-fg leading-tight">
                  {featuredAchievement.title}
                </h3>
              </div>
              <p className="mt-6 font-body text-base leading-relaxed text-luxury-muted">
                {featuredAchievement.description}
              </p>
            </motion.article>
          </div>
        )}

        {/* Other Achievements Grid */}
        {otherAchievements.length > 0 && (
          <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
            {otherAchievements.map((item, i) => (
              <motion.article
                key={item.title}
                className="achievement-card flex flex-col justify-between p-6 md:p-8 min-h-[220px] border border-[#f5f0eb08] bg-[#111111] hover:border-luxury-accent/30 transition-all duration-500"
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
        )}
      </div>
    </SectionWrapper>
  )
}
