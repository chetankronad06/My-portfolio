"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Home, User, Code, Briefcase, Award, FileText, Mail, ChevronRight } from "lucide-react"
import { useEffect, useState } from "react"

const navigation = [
  { name: "Home", href: "/", icon: Home, color: "from-blue-500 to-blue-600" },
  { name: "About", href: "/about", icon: User, color: "from-blue-500 to-indigo-600" },
  { name: "Skills", href: "/skills", icon: Code, color: "from-indigo-500 to-blue-600" },
  { name: "Projects", href: "/projects", icon: Briefcase, color: "from-blue-600 to-indigo-500" },
  { name: "Experience", href: "/experience", icon: Award, color: "from-indigo-600 to-blue-500" },
  { name: "Resume", href: "/resume", icon: FileText, color: "from-blue-500 to-indigo-600" },
  { name: "Contact", href: "/contact", icon: Mail, color: "from-indigo-500 to-blue-600" },
]

export function Sidebar() {
  const pathname = usePathname()
  const [isLoaded, setIsLoaded] = useState(false)
  const [hoveredItem, setHoveredItem] = useState<string | null>(null)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  return (
    <div className="fixed inset-y-0 left-0 z-50 w-64 bg-gradient-to-b from-gray-50 via-blue-50 to-indigo-50 shadow-2xl border-r border-gray-200">
      <div className="flex h-full flex-col relative overflow-hidden">
        {/* Animated Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div
            className={`absolute top-10 -left-10 w-40 h-40 bg-blue-200 rounded-full blur-3xl transition-all duration-3000 ${isLoaded ? "animate-pulse" : ""}`}
          ></div>
          <div
            className={`absolute bottom-20 -right-10 w-32 h-32 bg-indigo-200 rounded-full blur-3xl transition-all duration-3000 delay-1000 ${isLoaded ? "animate-pulse" : ""}`}
          ></div>
        </div>

        {/* Logo Section - Light Theme */}
        <div
          className={`relative py-8 px-6 transition-all duration-1000 delay-200 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-10"}`}
        >
          <div className="text-center">
            {/* Main Logo */}
            <Link href="/" className="relative inline-block" tabIndex={-1}>
              <div
              className={`absolute -inset-4 bg-gradient-to-r from-blue-100/50 to-indigo-100/50 rounded-3xl blur-xl transition-all duration-1000 delay-400 ${isLoaded ? "opacity-100 scale-100" : "opacity-0 scale-75"}`}
              ></div>
              <h1
              className={`relative text-4xl font-bold bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700 bg-clip-text text-transparent transition-all duration-1000 delay-600 ${isLoaded ? "opacity-100 scale-100" : "opacity-0 scale-90"}`}
              >
              CHETAN
              </h1>
            </Link>

            {/* Subtitle */}
            <p
              className={`text-gray-600 text-sm mt-2 font-medium transition-all duration-1000 delay-800 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"}`}
            >
              Full Stack Developer
            </p>

            {/* Decorative Line */}
            <div
              className={`w-16 h-0.5 bg-gradient-to-r from-blue-500 to-indigo-500 mx-auto mt-4 rounded-full transition-all duration-1000 delay-1000 ${isLoaded ? "opacity-100 scale-x-100" : "opacity-0 scale-x-0"}`}
            ></div>
          </div>
        </div>

        {/* Navigation - Light Glass Cards */}
        <nav className="flex-1 px-4 py-2 space-y-1">
          {navigation.map((item, index) => {
            const isActive = pathname === item.href
            const isHovered = hoveredItem === item.name

            return (
              <div
                key={item.name}
                className={`transition-all duration-1000 ${isLoaded ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"}`}
                style={{ transitionDelay: `${1200 + index * 150}ms` }}
              >
                <Link
                  href={item.href}
                  onMouseEnter={() => setHoveredItem(item.name)}
                  onMouseLeave={() => setHoveredItem(null)}
                  className={`group relative flex items-center space-x-4 px-4 py-4 rounded-2xl transition-all duration-300 overflow-hidden ${
                    isActive
                      ? "bg-white/80 backdrop-blur-sm border border-blue-200 shadow-lg"
                      : "hover:bg-white/60 hover:backdrop-blur-sm hover:border hover:border-gray-200"
                  }`}
                >
                  {/* Background Gradient on Hover */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-r ${item.color} opacity-0 transition-all duration-300 ${
                      isHovered || isActive ? "opacity-5" : ""
                    }`}
                  ></div>

                  {/* Icon Container */}
                  <div
                    className={`relative p-2.5 rounded-xl transition-all duration-300 ${
                      isActive
                        ? `bg-gradient-to-r ${item.color} shadow-lg`
                        : isHovered
                          ? `bg-gradient-to-r ${item.color} shadow-md`
                          : "bg-blue-50 border border-blue-100"
                    }`}
                  >
                    <item.icon
                      className={`h-5 w-5 transition-all duration-300 ${
                        isActive || isHovered ? "text-white" : "text-blue-600"
                      }`}
                    />
                  </div>

                  {/* Text */}
                  <div className="flex-1">
                    <span
                      className={`font-medium transition-all duration-300 ${
                        isActive ? "text-gray-900" : isHovered ? "text-gray-900" : "text-gray-700"
                      }`}
                    >
                      {item.name}
                    </span>
                  </div>

                  {/* Arrow Indicator */}
                  <ChevronRight
                    className={`h-4 w-4 transition-all duration-300 ${
                      isActive
                        ? "text-blue-600 opacity-100 translate-x-0"
                        : isHovered
                          ? "text-blue-600 opacity-100 translate-x-1"
                          : "text-gray-400 opacity-0 -translate-x-2"
                    }`}
                  />

                  {/* Active Indicator Line */}
                  {isActive && (
                    <div
                      className={`absolute left-0 top-1/2 -translate-y-1/2 w-1 h-8 bg-gradient-to-b ${item.color} rounded-r-full transition-all duration-500 delay-200 ${isLoaded ? "opacity-100 scale-y-100" : "opacity-0 scale-y-0"}`}
                    ></div>
                  )}
                </Link>
              </div>
            )
          })}
        </nav>

        {/* Footer - Light Theme */}
        <div
          className={`relative p-6 transition-all duration-1000 delay-2000 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          {/* Status Card */}
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-4 border border-blue-100 shadow-sm">
            <div className="flex items-center space-x-3">
              <div className="relative">
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <div className="absolute inset-0 w-3 h-3 bg-green-400 rounded-full animate-ping"></div>
              </div>
              <div>
                <p className="text-gray-900 text-sm font-medium">Available for work</p>
                <p className="text-gray-600 text-xs">Open to opportunities</p>
              </div>
            </div>
          </div>

          {/* Copyright */}
          <div className="text-center mt-4">
            <p className="text-gray-500 text-xs">© 2024 Chetan Ronad</p>
          </div>

          {/* Decorative Elements */}
          <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-12 h-0.5 bg-gradient-to-r from-transparent via-blue-300/50 to-transparent"></div>
        </div>
      </div>
    </div>
  )
}
