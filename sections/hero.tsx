"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { roles, site } from "@/lib/data"

export function Hero() {
  const [roleIndex, setRoleIndex] = useState(0)
  const [displayText, setDisplayText] = useState("")
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const current = roles[roleIndex]
    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          if (displayText.length < current.length) {
            setDisplayText(current.slice(0, displayText.length + 1))
          } else {
            setTimeout(() => setIsDeleting(true), 2000)
          }
        } else {
          if (displayText.length > 0) {
            setDisplayText(displayText.slice(0, -1))
          } else {
            setIsDeleting(false)
            setRoleIndex((prev) => (prev + 1) % roles.length)
          }
        }
      },
      isDeleting ? 40 : 80
    )
    return () => clearTimeout(timeout)
  }, [displayText, isDeleting, roleIndex])

  return (
    <section className="grain relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-6 pt-24 md:px-10">
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% 0%, #f5a62312 0%, transparent 60%), radial-gradient(ellipse 60% 50% at 80% 80%, #f5a62308 0%, transparent 50%)",
        }}
      />
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(#f5f0eb 1px, transparent 1px), linear-gradient(90deg, #f5f0eb 1px, transparent 1px)",
          backgroundSize: "64px 64px",
          maskImage: "radial-gradient(ellipse 70% 70% at 50% 50%, black 20%, transparent 70%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 70% 70% at 50% 50%, black 20%, transparent 70%)",
        }}
      />

      <div className="relative z-10 mx-auto flex w-full max-w-6xl flex-col items-center text-center">
        <motion.p
          className="section-label mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Portfolio — {new Date().getFullYear()}
        </motion.p>

        <motion.h1
          className="font-display text-[clamp(3.5rem,12vw,8rem)] font-light leading-[0.95] tracking-tight text-luxury-fg"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
        >
          {site.firstName}
        </motion.h1>

        <motion.p
          className="mt-6 font-mono-label text-lg text-luxury-muted md:text-xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          {displayText}
          <span className="ml-0.5 inline-block h-5 w-0.5 animate-pulse bg-luxury-accent align-middle" />
        </motion.p>

        <motion.div
          className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <a href="#projects" className="btn-primary">
            View Work
          </a>
          <a href={site.resumeUrl} download className="btn-outline">
            Download Resume
          </a>
        </motion.div>
      </div>

      <motion.div
        className="absolute bottom-10 left-1/2 flex -translate-x-1/2 flex-col items-center gap-3"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
      >
        <span className="font-mono-label text-[10px] uppercase tracking-[0.3em] text-luxury-muted">
          Scroll
        </span>
        <div className="relative h-12 w-px bg-[#f5f0eb22]">
          <motion.div
            className="absolute left-0 top-0 w-full bg-luxury-accent"
            animate={{ height: ["0%", "100%", "0%"], top: ["0%", "0%", "100%"] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>
      </motion.div>
    </section>
  )
}
