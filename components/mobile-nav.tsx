"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X, Home, User, Code, Briefcase, Award, BookOpen, FileText, Mail } from "lucide-react"

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

export function MobileNav() {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()

  return (
    <>
      {/* Mobile Header */}
      <div className="flex items-center justify-between p-4 bg-white border-b border-google-gray-200">
        <div className="flex items-center space-x-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-google-blue-500 text-white font-bold">
            C
          </div>
          <div>
            <span className="text-lg font-semibold text-google-gray-900 font-inter">Chetan</span>
            <p className="text-xs text-google-gray-600 font-roboto">Developer</p>
          </div>
        </div>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex h-10 w-10 items-center justify-center rounded-lg text-google-gray-600 hover:bg-google-gray-100 transition-colors duration-200"
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Sidebar */}
      {isOpen && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-50" onClick={() => setIsOpen(false)}>
          <div className="fixed inset-y-0 right-0 w-72 bg-white">
            <div className="flex h-full flex-col">
              <div className="flex items-center justify-between p-6 border-b border-google-gray-200">
                <span className="text-lg font-medium text-google-gray-900">Navigation</span>
                <button
                  onClick={() => setIsOpen(false)}
                  className="flex h-8 w-8 items-center justify-center rounded-lg text-google-gray-600 hover:bg-google-gray-100 transition-colors duration-200"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              <nav className="flex-1 p-4 space-y-2">
                {navigation.map((item) => {
                  const isActive = pathname === item.href
                  return (
                    <Link
                      key={item.name}
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                      className={`flex items-center space-x-4 px-4 py-3 rounded-xl transition-all duration-200 ${
                        isActive
                          ? "bg-google-blue-50 text-google-blue-600"
                          : "text-google-gray-700 hover:bg-google-gray-100"
                      }`}
                    >
                      <item.icon className="h-5 w-5" />
                      <span className="font-medium">{item.name}</span>
                    </Link>
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
