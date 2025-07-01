"use client"

import { Download, Mail } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { PageWrapper } from "@/components/page-wrapper"
import { useEffect, useState } from "react"

export default function HomePage() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  return (
    <PageWrapper>
      <div className="min-h-screen bg-gray-50">
        {/* Header Section - Mobile Responsive */}
        <div
          className={`relative min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 overflow-hidden transition-all duration-1000 ${isLoaded ? "opacity-100" : "opacity-0"}`}
        >
          {/* Enhanced geometric patterns - Mobile Responsive */}
          <div className="absolute inset-0 opacity-10">
            <div
              className={`absolute top-10 left-10 md:top-20 md:left-20 w-20 h-20 md:w-40 md:h-40 border border-blue-200 rounded-full transition-all duration-1500 delay-300 ${isLoaded ? "opacity-10 scale-100 rotate-0" : "opacity-0 scale-75 -rotate-45"}`}
            ></div>
            <div
              className={`absolute top-16 right-16 md:top-32 md:right-32 w-16 h-16 md:w-32 md:h-32 border border-indigo-200 rounded-full transition-all duration-1500 delay-500 ${isLoaded ? "opacity-10 scale-100 rotate-0" : "opacity-0 scale-75 rotate-45"}`}
            ></div>
            <div
              className={`absolute bottom-20 left-1/4 w-12 h-12 md:w-24 md:h-24 border border-purple-200 rounded-full transition-all duration-1500 delay-700 ${isLoaded ? "opacity-10 scale-100 rotate-0" : "opacity-0 scale-75 -rotate-90"}`}
            ></div>
            <div
              className={`absolute bottom-32 right-1/4 w-8 h-8 md:w-16 md:h-16 border border-blue-300 rounded-full transition-all duration-1500 delay-900 ${isLoaded ? "opacity-10 scale-100 rotate-0" : "opacity-0 scale-75 rotate-90"}`}
            ></div>
          </div>

          {/* Main Content - Mobile Responsive */}
          <div className="relative z-10 flex items-center justify-center min-h-screen p-4 md:p-6 lg:p-8">
            <div className="max-w-7xl w-full">
              <div className="grid lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">
                {/* Left Content - Mobile First */}
                <div className="space-y-6 md:space-y-8 text-center lg:text-left order-2 lg:order-1">
                  <div
                    className={`space-y-4 md:space-y-6 transition-all duration-1000 delay-200 ${isLoaded ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"}`}
                  >
                    <p
                      className={`text-xs md:text-sm tracking-widest uppercase text-blue-600 font-medium transition-all duration-1000 delay-400 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}
                    >
                      CHETAN KALAKAPPA RONAD
                    </p>

                    <h1
                      className={`text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-medium leading-tight text-gray-900 transition-all duration-1000 delay-600 ${isLoaded ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"}`}
                    >
                      Full Stack <br />
                      <span className="text-blue-600">Developer</span>
                    </h1>

                    <p
                      className={`text-base md:text-lg text-gray-700 leading-relaxed max-w-lg mx-auto lg:mx-0 transition-all duration-1000 delay-800 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}
                    >
                      A passionate fullstack developer focused on Web Development. I&apos;m also interested in UX/UI Design,
                      Blockchain, and AI/Machine Learning. I love to learn new things and am always open to new
                      opportunities.
                    </p>
                  </div>

                  <div
                    className={`flex flex-col sm:flex-row gap-3 md:gap-4 justify-center lg:justify-start transition-all duration-1000 delay-1000 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
                  >
                    <a
                      href="/application-form.pdf"
                      download
                      className="inline-flex items-center justify-center px-6 md:px-8 py-3 md:py-4 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-2xl transition-all duration-200 hover:scale-105 shadow-lg hover:shadow-xl text-sm md:text-base"
                    >
                      <Download className="mr-2 h-4 w-4 md:h-5 md:w-5" />
                      Download CV
                    </a>
                    <Link
                      href="/contact"
                      className="inline-flex items-center justify-center px-6 md:px-8 py-3 md:py-4 bg-transparent border-2 border-gray-300 text-gray-700 font-medium rounded-2xl hover:bg-gray-50 hover:border-gray-400 transition-all duration-200 hover:scale-105 text-sm md:text-base"
                    >
                      <Mail className="mr-2 h-4 w-4 md:h-5 md:w-5" />
                      Contact Me
                    </Link>
                  </div>
                </div>

                {/* Right Content - Profile Image - Mobile Responsive */}
                <div
                  className={`flex justify-center order-1 lg:order-2 transition-all duration-1000 delay-1200 ${isLoaded ? "opacity-100 translate-x-0 scale-100" : "opacity-0 translate-x-10 scale-95"}`}
                >
                  <div className="relative flex items-center justify-center">
                    {/* Profile image - Mobile Responsive */}
                    <div className="overflow-hidden rounded-full w-[250px] h-[280px] md:w-[300px] md:h-[340px] lg:w-[350px] lg:h-[400px] flex items-center justify-center shadow-xl">
                      <Image
                        src="/profile.jpg?height=400&width=350"
                        alt="Chetan Kalakappa Ronad"
                        width={350}
                        height={400}
                        className="object-cover w-full h-full"
                        priority
                      />
                    </div>

                    {/* Enhanced decorative elements - Mobile Responsive */}
                    <div
                      className={`absolute -top-3 -right-3 md:-top-6 md:-right-6 w-6 h-6 md:w-8 md:h-8 bg-blue-500 rounded-full shadow-lg transition-all duration-1000 delay-1600 ${isLoaded ? "opacity-100 scale-100 translate-x-0 translate-y-0" : "opacity-0 scale-0 -translate-x-4 -translate-y-4"}`}
                    ></div>
                    <div
                      className={`absolute -bottom-4 -left-4 md:-bottom-8 md:-left-8 w-8 h-8 md:w-10 md:h-10 bg-blue-600 rounded-full shadow-lg transition-all duration-1000 delay-1800 ${isLoaded ? "opacity-100 scale-100 translate-x-0 translate-y-0" : "opacity-0 scale-0 translate-x-4 translate-y-4"}`}
                    ></div>
                    <div
                      className={`absolute top-1/4 -left-2 md:-left-4 w-4 h-4 md:w-6 md:h-6 bg-indigo-400 rounded-full shadow-md transition-all duration-1000 delay-2000 ${isLoaded ? "opacity-100 scale-100 translate-x-0" : "opacity-0 scale-0 translate-x-4"}`}
                    ></div>
                    <div
                      className={`absolute bottom-1/4 -right-1 md:-right-2 w-3 h-3 md:w-4 md:h-4 bg-purple-400 rounded-full shadow-md transition-all duration-1000 delay-2200 ${isLoaded ? "opacity-100 scale-100 translate-x-0" : "opacity-0 scale-0 -translate-x-4"}`}
                    ></div>

                    {/* Floating elements - Mobile Responsive */}
                    <div
                      className={`absolute top-8 left-8 md:top-10 md:left-10 w-2 h-2 md:w-3 md:h-3 bg-blue-300 rounded-full transition-all duration-2000 delay-2400 ${isLoaded ? "opacity-60 animate-pulse" : "opacity-0"}`}
                    ></div>
                    <div
                      className={`absolute bottom-12 right-10 md:bottom-16 md:right-12 w-1.5 h-1.5 md:w-2 md:h-2 bg-indigo-300 rounded-full transition-all duration-2000 delay-2600 ${isLoaded ? "opacity-60 animate-pulse" : "opacity-0"}`}
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageWrapper>
  )
}
