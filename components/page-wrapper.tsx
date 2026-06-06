"use client"

import type React from "react"

interface PageWrapperProps {
  children: React.ReactNode
}

export function PageWrapper({ children }: PageWrapperProps) {
  return <div className="animate-fade-up">{children}</div>
}
