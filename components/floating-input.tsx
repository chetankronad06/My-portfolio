"use client"

import { useState } from "react"
import { cn } from "@/lib/utils"

interface FloatingInputProps {
  id: string
  name: string
  label: string
  type?: string
  required?: boolean
  value: string
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void
  textarea?: boolean
  rows?: number
}

export function FloatingInput({
  id,
  name,
  label,
  type = "text",
  required,
  value,
  onChange,
  textarea,
  rows = 4,
}: FloatingInputProps) {
  const [focused, setFocused] = useState(false)
  const active = focused || value.length > 0

  const shared = {
    id,
    name,
    required,
    value,
    onChange,
    onFocus: () => setFocused(true),
    onBlur: () => setFocused(false),
    className: "input-field peer",
  }

  return (
    <div className="relative pt-4">
      {textarea ? (
        <textarea {...shared} rows={rows} />
      ) : (
        <input {...shared} type={type} />
      )}
      <label
        htmlFor={id}
        className={cn(
          "pointer-events-none absolute left-0 font-mono-label text-xs uppercase tracking-wider text-luxury-muted transition-all duration-300",
          active ? "top-0 text-[10px] text-luxury-accent" : "top-7"
        )}
      >
        {label}
      </label>
    </div>
  )
}
