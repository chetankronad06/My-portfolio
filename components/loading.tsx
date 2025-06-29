"use client"

import { useEffect, useState } from "react"

export function Loading() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 1500)

    return () => clearTimeout(timer)
  }, [])

  if (!isLoading) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-white">
      <div className="text-center space-y-6">
        {/* Logo */}
        <div className="flex justify-center">
          <div className="w-16 h-16 bg-google-blue-500 rounded-full flex items-center justify-center text-white text-2xl font-bold animate-pulse">
            C
          </div>
        </div>

        {/* Loading text */}
        <div className="space-y-2">
          <h2 className="text-xl font-medium text-google-gray-900 font-inter">Chetan Ronad</h2>
          <p className="text-google-gray-600 font-roboto">Loading portfolio...</p>
        </div>

        {/* Loading bar */}
        <div className="w-48 h-1 bg-google-gray-200 rounded-full overflow-hidden">
          <div className="h-full bg-google-blue-500 rounded-full animate-pulse" style={{ width: "100%" }}></div>
        </div>
      </div>
    </div>
  )
}
