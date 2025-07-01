"use client"

import { useEffect, useState } from "react"

export function Loading() {
  const [isLoading, setIsLoading] = useState(true)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    // Simulate loading progress
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressInterval)
          return 100
        }
        return prev + 3
      })
    }, 40)

    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 1500)

    return () => {
      clearTimeout(timer)
      clearInterval(progressInterval)
    }
  }, [])

  if (!isLoading) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      {/* Background Pattern - Mobile Responsive */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 md:top-20 md:left-20 w-20 h-20 md:w-40 md:h-40 border border-blue-200 rounded-full animate-pulse"></div>
        <div className="absolute top-20 right-20 md:top-32 md:right-32 w-16 h-16 md:w-32 md:h-32 border border-indigo-200 rounded-full animate-pulse delay-300"></div>
        <div className="absolute bottom-10 left-1/4 md:bottom-20 w-12 h-12 md:w-24 md:h-24 border border-purple-200 rounded-full animate-pulse delay-700"></div>
        <div className="absolute bottom-20 right-1/4 md:bottom-32 w-8 h-8 md:w-16 md:h-16 border border-blue-300 rounded-full animate-pulse delay-1000"></div>
      </div>

      <div className="relative text-center space-y-6 md:space-y-8 px-4">
        {/* CHETAN Logo Animation */}
        <div className="flex justify-center">
          <div className="relative">
            {/* Inner CHETAN text */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-blue-100/50 to-indigo-100/50 rounded-3xl blur-xl animate-pulse"></div>
                <h1 className="relative text-2xl md:text-3xl font-bold bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700 bg-clip-text text-transparent animate-pulse">
                  CHETAN
                </h1>
              </div>
            </div>
          </div>
        </div>

        {/* Loading text */}
        <div className="space-y-2 md:space-y-3">
          <p className="text-gray-600 text-sm md:text-base animate-pulse">Loading portfolio...</p>
        </div>

        {/* Progress bar */}
        <div className="w-48 md:w-64 mx-auto space-y-2">
          <div className="w-full h-1.5 md:h-2 bg-gray-200 rounded-full overflow-hidden shadow-inner">
            <div
              className="h-full bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full transition-all duration-300 ease-out"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  )
}
