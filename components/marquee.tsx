import { marqueeSkills } from "@/lib/data"

export function Marquee() {
  const items = [...marqueeSkills, ...marqueeSkills]

  return (
    <div className="relative overflow-hidden border-y border-[#f5f0eb14] py-5">
      <div className="marquee-track gap-10">
        {items.map((skill, i) => (
          <span
            key={`${skill}-${i}`}
            className="font-mono-label shrink-0 text-sm uppercase tracking-[0.2em] text-luxury-muted"
          >
            {skill}
            <span className="mx-10 text-accent">·</span>
          </span>
        ))}
      </div>
    </div>
  )
}
