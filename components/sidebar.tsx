"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Home, User, Code, Briefcase, Award, BookOpen, FileText, Mail } from "lucide-react"

const navigation = [
  { name: "Home", href: "/", icon: Home },
  { name: "About", href: "/about", icon: User },
  { name: "Skills", href: "/skills", icon: Code },
  { name: "Projects", href: "/projects", icon: Briefcase },
  { name: "Experience", href: "/experience", icon: Award },
  { name: "Blog", href: "/blog", icon: BookOpen },
  { name: "Resume", href: "/resume", icon: FileText },
  { name: "Contact", href: "/contact", icon: Mail },
]

export function Sidebar() {
  const pathname = usePathname()

  return (
    <div className="fixed inset-y-0 left-0 z-50 w-64 bg-white border-r border-google-gray-200 shadow-sm">
      <div className="flex h-full flex-col">
        {/* Logo Section */}
        <div className="flex items-center justify-center py-6 border-b border-google-gray-200">
          <div className="flex items-center space-x-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-google-blue-500 text-white font-bold text-lg">
              C
            </div>
            <div className="text-left">
              <h2 className="text-lg font-semibold text-google-gray-900 font-inter">Chetan</h2>
              <p className="text-sm text-google-gray-600 font-roboto">Developer</p>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex-1 px-4 py-6 space-y-2">
          {navigation.map((item) => {
            const isActive = pathname === item.href
            return (
              <Link
                key={item.name}
                href={item.href}
                className={`flex items-center space-x-3 px-4 py-3 rounded-xl transition-all duration-200 ${
                  isActive
                    ? "bg-google-blue-50 text-google-blue-600 border-l-4 border-google-blue-500"
                    : "text-google-gray-700 hover:bg-google-gray-50 hover:text-google-gray-900"
                }`}
                title={item.name}
              >
                <item.icon className="h-5 w-5 flex-shrink-0" />
                <span className="font-medium font-roboto">{item.name}</span>
              </Link>
            )
          })}
        </nav>

        {/* Footer */}
        <div className="p-4 border-t border-google-gray-200">
          <div className="text-center">
            <p className="text-xs text-google-gray-500 font-roboto">© 2024 Chetan Ronad</p>
          </div>
        </div>
      </div>
    </div>
  )
}
