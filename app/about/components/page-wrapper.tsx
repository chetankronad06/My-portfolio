import type React from "react"

interface PageWrapperProps {
  children: React.ReactNode
}

export function PageWrapper({ children }: PageWrapperProps) {
  return <div className="container mx-auto py-8">{children}</div>
}
