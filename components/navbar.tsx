"use client"

import { useEffect, useState } from "react"
import { navLinks, site } from "@/lib/data"
import { cn } from "@/lib/utils"

const sections = navLinks.map((l) => l.href.replace("#", ""))

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [active, setActive] = useState("")

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 48)
    window.addEventListener("scroll", onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  useEffect(() => {
    const observers: IntersectionObserver[] = []

    sections.forEach((id) => {
      const el = document.getElementById(id)
      if (!el) return

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActive(id)
        },
        { rootMargin: "-40% 0px -50% 0px", threshold: 0 }
      )

      observer.observe(el)
      observers.push(observer)
    })

    return () => observers.forEach((o) => o.disconnect())
  }, [])

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        scrolled ? "nav-glass" : "bg-transparent"
      )}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5 md:px-10">
        <a
          href="#"
          className="font-display text-xl tracking-tight text-luxury-fg md:text-2xl"
        >
          {site.firstName}
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => {
            const id = link.href.replace("#", "")
            const isActive = active === id
            return (
              <a
                key={link.href}
                href={link.href}
                className={cn(
                  "font-mono-label text-[11px] uppercase tracking-[0.2em] transition-colors duration-300",
                  isActive ? "text-luxury-accent" : "text-luxury-muted hover:text-luxury-fg"
                )}
              >
                {link.label}
              </a>
            )
          })}
        </nav>

        <a href="#contact" className="btn-outline hidden px-5 py-2.5 text-[10px] md:inline-flex">
          Hire Me
        </a>
      </div>
    </header>
  )
}
