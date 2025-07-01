import type React from "react"
import type { Metadata } from "next"
import { Inter, Roboto } from "next/font/google"
import "./globals.css"
import { Sidebar } from "@/components/sidebar"
import { MobileNav } from "@/components/mobile-nav"
import { Loading } from "@/components/loading"
import { Toaster } from "sonner"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
})

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
  variable: "--font-roboto",
})

export const metadata: Metadata = {
  title: "Chetan Kalakappa Ronad - Full Stack Developer",
  description: "A junior fullstack developer focused on Web Development, UX/UI Design, Blockchain and AI/ML",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${roboto.variable}`}>
      <body>
        <Toaster richColors closeButton expand/>
        <Loading />
        <div className="min-h-screen bg-white">
          {/* Desktop Sidebar */}
          <div className="hidden lg:block">
            <Sidebar />
          </div>

          {/* Mobile Navigation */}
            <div className="lg:hidden sticky top-0 z-50 bg-white">
            <MobileNav />
            </div>

          {/* Main Content */}
          <main className="lg:ml-64 min-h-screen">{children}</main>
        </div>
      </body>
    </html>
  )
}
