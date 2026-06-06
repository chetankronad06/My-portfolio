import { cn } from "@/lib/utils"

interface StatusBadgeProps {
  label: string
  detail?: string
  className?: string
}

export function StatusBadge({ label, detail, className }: StatusBadgeProps) {
  return (
    <div
      className={cn(
        "inline-flex items-center gap-3 rounded-full border border-border bg-card/50 px-4 py-2",
        className
      )}
    >
      <span className="relative flex h-2 w-2">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
        <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
      </span>
      <div className="text-left">
        <p className="text-sm font-medium text-foreground">{label}</p>
        {detail && <p className="text-xs text-muted-foreground">{detail}</p>}
      </div>
    </div>
  )
}
