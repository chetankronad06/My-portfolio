"use client"

import type React from "react"
import { useInView } from "@/hooks/use-in-view"
import { cn } from "@/lib/utils"

interface FadeInProps {
  children: React.ReactNode
  className?: string
  delay?: 0 | 1 | 2 | 3
}

export function FadeIn({ children, className, delay = 0 }: FadeInProps) {
  const { ref, visible } = useInView(0.12)

  return (
    <div
      ref={ref}
      className={cn(
        "fade-in-section",
        delay > 0 && `delay-${delay}`,
        visible && "visible",
        className
      )}
    >
      {children}
    </div>
  )
}
