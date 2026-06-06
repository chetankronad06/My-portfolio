"use client"

import type React from "react"
import { Toaster } from "sonner"

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <>
      {children}
      <Toaster
        position="top-right"
        richColors
        closeButton
        toastOptions={{
          style: {
            background: "#111111",
            border: "1px solid #f5f0eb22",
            color: "#f5f0eb",
          },
        }}
      />
    </>
  )
}
