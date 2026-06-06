"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import {
  Home,
  User,
  Code,
  Briefcase,
  Award,
  FileText,
  Mail,
  Github,
  Linkedin,
} from "lucide-react"
import { ThemeToggle } from "@/components/theme-toggle"
import { siteConfig } from "@/lib/site-data"
import { cn } from "@/lib/utils"

const navigation = [
  { name: "Home", href: "/", icon: Home },
  { name: "About", href: "/about", icon: User },
  { name: "Skills", href: "/skills", icon: Code },
  { name: "Projects", href: "/projects", icon: Briefcase },
  { name: "Experience", href: "/experience", icon: Award },
  { name: "Resume", href: "/resume", icon: FileText },
  { name: "Contact", href: "/contact", icon: Mail },
]

const socialLinks = [
  { name: "GitHub", href: siteConfig.github, icon: Github },
  { name: "LinkedIn", href: siteConfig.linkedin, icon: Linkedin },
]

export function Sidebar() {
  const pathname = usePathname()

  return (
    <aside className="fixed inset-y-0 left-0 z-50 flex w-64 flex-col border-r border-border bg-surface">
      <div className="flex flex-col h-full">
        <div className="px-6 pt-8 pb-6">
          <Link href="/" className="group block">
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
              Portfolio
            </p>
            <h1 className="mt-1 text-lg font-semibold tracking-tight text-foreground group-hover:text-muted-foreground transition-colors">
              {siteConfig.shortName}
            </h1>
            <p className="mt-0.5 text-sm text-muted-foreground">{siteConfig.title}</p>
          </Link>
        </div>

        <nav className="flex-1 space-y-0.5 px-4">
          {navigation.map((item) => {
            const isActive = pathname === item.href
            return (
              <Link
                key={item.name}
                href={item.href}
                className={cn("nav-link", isActive && "nav-link-active")}
              >
                <item.icon className="h-4 w-4 shrink-0" />
                <span>{item.name}</span>
              </Link>
            )
          })}
        </nav>

        <div className="border-t border-border px-4 py-5 space-y-4">
          <div className="flex items-center gap-2">
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded-lg border border-border text-muted-foreground transition-colors hover:bg-accent hover:text-foreground"
                aria-label={link.name}
              >
                <link.icon className="h-4 w-4" />
              </a>
            ))}
            <ThemeToggle />
          </div>
          <p className="text-xs text-muted-foreground leading-relaxed">
            {siteConfig.location}
          </p>
        </div>
      </div>
    </aside>
  )
}
