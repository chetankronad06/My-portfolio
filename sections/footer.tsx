import { site } from "@/lib/data"

export function Footer() {
  return (
    <footer className="grain relative border-t border-[#f5f0eb14] px-6 py-8 md:px-10">
      <div className="relative z-10 mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 sm:flex-row">
        <span className="font-display text-lg text-luxury-fg">{site.firstName}</span>
        <span className="font-mono-label text-[11px] uppercase tracking-wider text-luxury-muted">
          © {new Date().getFullYear()} All rights reserved
        </span>
      </div>
    </footer>
  )
}
