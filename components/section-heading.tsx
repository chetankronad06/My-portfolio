import { cn } from "@/lib/utils"

interface SectionHeadingProps {
  title: string
  description?: string
  className?: string
}

export function SectionHeading({ title, description, className }: SectionHeadingProps) {
  return (
    <div className={cn("mb-8", className)}>
      <h2 className="text-xl md:text-2xl font-semibold tracking-tight text-foreground">
        {title}
      </h2>
      {description && (
        <p className="mt-2 text-sm md:text-base text-muted-foreground max-w-2xl">
          {description}
        </p>
      )}
    </div>
  )
}
