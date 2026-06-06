import { cn } from "@/lib/utils"

interface PageHeaderProps {
  label?: string
  title: string
  description?: string
  className?: string
}

export function PageHeader({ label, title, description, className }: PageHeaderProps) {
  return (
    <header className={cn("mb-12 md:mb-16", className)}>
      {label && (
        <p className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground mb-3">
          {label}
        </p>
      )}
      <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight text-foreground">
        {title}
      </h1>
      {description && (
        <p className="mt-4 max-w-2xl text-base md:text-lg text-muted-foreground leading-relaxed">
          {description}
        </p>
      )}
    </header>
  )
}
