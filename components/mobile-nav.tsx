"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X, Home, User, Code, Briefcase, Award, FileText, Mail, ChevronRight } from "lucide-react"
import { Button } from "./ui/button"

const navigation = [
  { name: "Home", href: "/", icon: Home, color: "from-blue-500 to-blue-600" },
  { name: "About", href: "/about", icon: User, color: "from-blue-500 to-indigo-600" },
  { name: "Skills", href: "/skills", icon: Code, color: "from-indigo-500 to-blue-600" },
  { name: "Projects", href: "/projects", icon: Briefcase, color: "from-blue-600 to-indigo-500" },
  { name: "Experience", href: "/experience", icon: Award, color: "from-indigo-600 to-blue-500" },
  { name: "Resume", href: "/resume", icon: FileText, color: "from-blue-500 to-indigo-600" },
  { name: "Contact", href: "/contact", icon: Mail, color: "from-indigo-500 to-blue-600" },
]

export function MobileNav() {
  const [isOpen, setIsOpen] = useState(false)
  const [isLoaded, setIsLoaded] = useState(false)
  const [hoveredItem, setHoveredItem] = useState<string | null>(null)
  const pathname = usePathname()

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  return (
    <>
      {/* Mobile Header */}
      <div className="flex items-center justify-between p-4  shadow-sm bg-gradient-to-b from-gray-50 via-blue-50 to-indigo-50 border-r border-gray-200">

        <div>
          <Link href="/">
            <span className="text-lg font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent cursor-pointer">
              CHETAN
            </span>
          </Link>
        </div>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex h-10 w-10 items-center justify-center rounded-2xl bg-white/80 backdrop-blur-sm text-gray-600 hover:bg-white hover:text-blue-600 transition-all duration-200 shadow-sm border border-blue-100"
        >
          {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile Sidebar Overlay */}
      {isOpen && (
        <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm" onClick={() => setIsOpen(false)}>
          <div
            className="fixed inset-y-0 right-0 w-80 bg-gradient-to-b from-gray-50 via-blue-50 to-indigo-50 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-5">
              <div className="absolute top-10 -left-10 w-40 h-40 bg-blue-200 rounded-full blur-3xl animate-pulse"></div>
              <div className="absolute bottom-20 -right-10 w-32 h-32 bg-indigo-200 rounded-full blur-3xl animate-pulse delay-1000"></div>
            </div>

            <div className="relative flex h-full flex-col">
              {/* Header */}
              <div className="flex items-center justify-between p-6 border-b border-blue-200">
                <div className="flex items-center space-x-3">
                  <Link href="/" onClick={() => setIsOpen(false)}>
                  <span className="text-lg font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent cursor-pointer">
                    CHETAN
                  </span>
                  </Link>
                </div>
                <Button
                  onClick={() => setIsOpen(false)}
                  className="flex h-8 w-8 items-center justify-center rounded-xl bg-white/80 backdrop-blur-sm text-gray-600 hover:bg-white hover:text-blue-600 transition-all duration-200 shadow-sm border border-blue-100"
                >
                  <X className="h-4 w-4" />
                </Button>
              </div>

              {/* Navigation */}
              <nav className="flex-1 p-4 space-y-2 overflow-y-auto">
                {navigation.map((item, index) => {
                  const isActive = pathname === item.href
                  const isHovered = hoveredItem === item.name

                  return (
                    <div
                      key={item.name}
                      className={`transition-all duration-300 ${isLoaded ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"}`}
                      style={{ transitionDelay: `${index * 100}ms` }}
                    >
                      <Link
                        href={item.href}
                        onClick={() => setIsOpen(false)}
                        onMouseEnter={() => setHoveredItem(item.name)}
                        onMouseLeave={() => setHoveredItem(null)}
                        className={`group relative flex items-center space-x-4 px-4 py-4 rounded-2xl transition-all duration-300 overflow-hidden ${isActive
                          ? "bg-white/80 backdrop-blur-sm border border-blue-200 shadow-lg"
                          : "hover:bg-white/60 hover:backdrop-blur-sm hover:border hover:border-gray-200"
                          }`}
                      >
                        {/* Background Gradient on Hover */}
                        <div
                          className={`absolute inset-0 bg-gradient-to-r ${item.color} opacity-0 transition-all duration-300 ${isHovered || isActive ? "opacity-5" : ""
                            }`}
                        ></div>

                        {/* Icon Container */}
                        <div
                          className={`relative p-2.5 rounded-xl transition-all duration-300 ${isActive
                            ? `bg-gradient-to-r ${item.color} shadow-lg`
                            : isHovered
                              ? `bg-gradient-to-r ${item.color} shadow-md`
                              : "bg-blue-50 border border-blue-100"
                            }`}
                        >
                          <item.icon
                            className={`h-5 w-5 transition-all duration-300 ${isActive || isHovered ? "text-white" : "text-blue-600"
                              }`}
                          />
                        </div>

                        {/* Text */}
                        <div className="flex-1">
                          <span
                            className={`font-medium transition-all duration-300 ${isActive ? "text-gray-900" : isHovered ? "text-gray-900" : "text-gray-700"
                              }`}
                          >
                            {item.name}
                          </span>
                        </div>

                        {/* Arrow Indicator */}
                        <ChevronRight
                          className={`h-4 w-4 transition-all duration-300 ${isActive
                            ? "text-blue-600 opacity-100 translate-x-0"
                            : isHovered
                              ? "text-blue-600 opacity-100 translate-x-1"
                              : "text-gray-400 opacity-0 -translate-x-2"
                            }`}
                        />

                        {/* Active Indicator Line */}
                        {isActive && (
                          <div
                            className={`absolute left-0 top-1/2 -translate-y-1/2 w-1 h-8 bg-gradient-to-b ${item.color} rounded-r-full transition-all duration-500`}
                          ></div>
                        )}
                      </Link>
                    </div>
                  )
                })}
              </nav>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
