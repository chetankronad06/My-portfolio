"use client"

import { Card, CardContent } from "@/components/ui/card"
import { GraduationCap, Award, Users, Star } from "lucide-react"
import Image from "next/image"
import { PageWrapper } from "./components/page-wrapper"
import { useEffect, useState } from "react"

export default function AboutPage() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  return (
    <PageWrapper>
      <div className="min-h-screen ">
        {/* Header Section - Google Material Theme */}
        <div
          className={`relative h-64 bg-gradient-to-r from-blue-50 to-indigo-50 overflow-hidden transition-all duration-1000 rounded-3xl ml-6 mr-6 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-10"}`}
        >
          {/* Optional Background Image - Commented Out */}
          {/* 
          <div className="absolute inset-0">
            <Image
              src="/cover-bg.jpg"
              alt="Cover Background"
              fill
              className="object-cover opacity-20"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-blue-50/80 to-indigo-50/80"></div>
          </div>
          */}

          {/* Subtle geometric patterns */}
          <div className="absolute inset-0 opacity-10">
            <div
              className={`absolute top-10 left-10 w-32 h-32 border border-blue-200 rounded-full transition-all duration-1000 delay-300 ${isLoaded ? "opacity-10 scale-100" : "opacity-0 scale-75"}`}
            ></div>
            <div
              className={`absolute top-20 right-20 w-24 h-24 border border-indigo-200 rounded-full transition-all duration-1000 delay-500 ${isLoaded ? "opacity-10 scale-100" : "opacity-0 scale-75"}`}
            ></div>
            <div
              className={`absolute bottom-10 left-1/3 w-16 h-16 border border-blue-300 rounded-full transition-all duration-1000 delay-700 ${isLoaded ? "opacity-10 scale-100" : "opacity-0 scale-75"}`}
            ></div>
          </div>
        </div>

        <div className="relative -mt-32 px-4 lg:px-8">
          <div className="max-w-7xl mx-auto">
            {/* Profile Header Card */}
            <Card
              className={`bg-white shadow-sm border border-gray-200 rounded-3xl overflow-hidden mb-8 mx-auto max-w-3xl transition-all duration-1000 delay-200 ${isLoaded ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-10 scale-95"}`}
            >
              <CardContent className="p-0">
              {/* Desktop/Tablet View */}
              <div className="hidden sm:block">
                <div className="p-6 lg:p-8">
                <div className="flex flex-col lg:flex-row items-start lg:items-center gap-6">
                  {/* Profile Image */}
                  <div className="relative flex-shrink-0">
                  <div
                    className={`w-32 h-32 lg:w-40 lg:h-40 rounded-full bg-gradient-to-br from-gray-100 to-gray-200 overflow-hidden shadow-sm ring-1 ring-gray-200 transition-all duration-1000 delay-400 ${isLoaded ? "opacity-100 scale-100 rotate-0" : "opacity-0 scale-75 -rotate-12"}`}
                  >
                    <Image
                    src="/profile.jpg?height=160&width=160"
                    alt="Chetan Kalakappa Ronad"
                    width={160}
                    height={160}
                    className="w-full h-full object-cover"
                    />
                  </div>
                  </div>
                  {/* Profile Info */}
                  <div className="flex-1 space-y-4">
                  <div>
                    <h1
                    className={`text-3xl lg:text-4xl font-medium text-gray-900 mb-2 transition-all duration-1000 delay-500 ${isLoaded ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"}`}
                    >
                    Chetan Kalakappa Ronad
                    </h1>
                    <p
                    className={`text-xl text-blue-600 font-normal mb-4 transition-all duration-1000 delay-600 ${isLoaded ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"}`}
                    >
                    Full-Stack Developer & AI Enthusiast
                    </p>
                  </div>
                  <div
                    className={`inline-flex items-center gap-3 px-5 py-3 rounded-2xl bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-100 shadow-sm transition-all duration-1000 delay-700 ${isLoaded ? "opacity-100 scale-100" : "opacity-0 scale-90"}`}
                  >
                    <div className="relative flex items-center">
                      <span className="relative flex h-3 w-3">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-3 w-3 bg-blue-500"></span>
                      </span>
                    </div>
                    <div className="flex flex-col">
                      <span className="text-gray-900 font-semibold text-sm">Open to Opportunities</span>
                      <span className="text-blue-600 text-xs">Let’s build something amazing together</span>
                    </div>
                  </div>
                  </div>
                </div>
                </div>
              </div>
              {/* Mobile View */}
              <div className="block sm:hidden">
                <div className="p-4 flex flex-col items-center gap-4">
                <div
                  className={`w-24 h-24 rounded-full bg-gradient-to-br from-gray-100 to-gray-200 overflow-hidden shadow-sm ring-1 ring-gray-200 transition-all duration-1000 delay-400 ${isLoaded ? "opacity-100 scale-100 rotate-0" : "opacity-0 scale-75 -rotate-12"}`}
                >
                  <Image
                  src="/profile.jpg?height=96&width=96"
                  alt="Chetan Kalakappa Ronad"
                  width={96}
                  height={96}
                  className="w-full h-full object-cover"
                  />
                </div>
                <div className="text-center space-y-2">
                  <h1
                  className={`text-2xl font-medium text-gray-900 transition-all duration-1000 delay-500 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-3"}`}
                  >
                  Chetan Kalakappa Ronad
                  </h1>
                  <p
                  className={`text-base text-blue-600 font-normal transition-all duration-1000 delay-600 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-3"}`}
                  >
                  Full-Stack Developer & AI Enthusiast
                  </p>
                  <div
                  className={`inline-flex items-center gap-2 px-3 py-2 rounded-xl bg-gradient-to-r from-green-50 to-emerald-50 border border-green-100 shadow-sm transition-all duration-1000 delay-700 ${isLoaded ? "opacity-100 scale-100" : "opacity-0 scale-90"}`}
                  >
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                  </span>
                  <span className="text-gray-800 font-semibold text-xs">Open to Opportunities</span>
                  </div>
                </div>
                </div>
              </div>
              </CardContent>
            </Card>

            {/* Dynamic Grid Layout */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 ">
              {/* About Me Section - Spans 8 columns */}
              <div className="lg:col-span-8">
                <Card
                  className={`bg-white shadow-sm border border-gray-200 rounded-3xl h-full transition-all duration-1000 delay-700 ${isLoaded ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-10 scale-95"}`}
                >
                  <CardContent className="p-6 lg:p-8">
                    <h2
                      className={`text-2xl font-bold mb-6 text-gray-900 flex items-center gap-3 transition-all duration-1000 delay-800 ${isLoaded ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-5"}`}
                    >
                      <div
                        className={`w-2 h-8 bg-blue-500 rounded-full transition-all duration-1000 delay-900 ${isLoaded ? "opacity-100 scale-100" : "opacity-0 scale-0"}`}
                      ></div>
                      About Me
                    </h2>
                    <div
                      className={`space-y-4 text-gray-700 leading-relaxed p-6 bg-blue-50 rounded-2xl border border-blue-100 transition-all duration-1000 delay-1000 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}
                    >
                      <p
                        className={`transition-all duration-1000 delay-1100 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"}`}
                      >
                        Hello! I&#39;m Chetan Kalakappa Ronad, a full-stack developer passionate about building clean,
                        functional, and user-focused web solutions. I enjoy turning ideas into reality through code and
                        creating intuitive digital experiences.
                      </p>
                      <p
                        className={`transition-all duration-1000 delay-1200 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"}`}
                      >
                        My journey into development began with curiosity about how websites work. That interest quickly
                        evolved into a love for building, learning, and solving real-world problems through design and
                        development.
                      </p>
                      <p
                        className={`transition-all duration-1000 delay-1300 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"}`}
                      >
                        Beyond development, I&#39;m interested in areas like AI, blockchain, and system design. I&#39;m actively
                        working toward high-impact roles and enjoy taking part in hackathons that challenge creativity
                        and problem-solving.
                      </p>
                      <p
                        className={`transition-all duration-1000 delay-1400 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"}`}
                      >
                        When I&#39;m not coding, I spend time exploring new technologies, contributing to open-source
                        projects, and staying updated with the latest trends in tech and product innovation.
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Quick Stats - Spans 4 columns */}
              <div className="lg:col-span-4">
                <Card
                  className={`bg-white shadow-sm border border-gray-200 rounded-3xl h-full transition-all duration-1000 delay-800 ${isLoaded ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-10 scale-95"}`}
                >
                  <CardContent className="p-6">
                    <h2
                      className={`text-2xl font-bold mb-6 text-gray-900 flex items-center gap-3 transition-all duration-1000 delay-900 ${isLoaded ? "opacity-100 translate-x-0" : "opacity-0 translate-x-5"}`}
                    >
                      <div
                        className={`w-2 h-8 bg-blue-500 rounded-full transition-all duration-1000 delay-1000 ${isLoaded ? "opacity-100 scale-100" : "opacity-0 scale-0"}`}
                      ></div>
                      Quick stats
                    </h2>
                    <div className="space-y-6">
                      <div
                        className={`text-center p-4 bg-blue-50 rounded-2xl border border-blue-100 transition-all duration-1000 delay-1100 hover:scale-105 ${isLoaded ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-5 scale-95"}`}
                      >
                        <div className="text-3xl font-bold text-blue-600 mb-1">15+</div>
                        <div className="text-sm text-gray-600">Projects Completed</div>
                      </div>

                      <div
                        className={`text-center p-4 bg-green-50 rounded-2xl border border-green-100 transition-all duration-1000 delay-1200 hover:scale-105 ${isLoaded ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-5 scale-95"}`}
                      >
                        <div className="text-3xl font-bold text-green-600 mb-1">2+</div>
                        <div className="text-sm text-gray-600">Years Experience </div>
                      </div>

                      <div
                        className={`text-center p-4 bg-purple-50 rounded-2xl border border-purple-100 transition-all duration-1000 delay-1300 hover:scale-105 ${isLoaded ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-5 scale-95"}`}
                      >
                        <div className="text-3xl font-bold text-purple-600 mb-1">15+</div>
                        <div className="text-sm text-gray-600">Technologies</div>
                      </div>

                      <div
                        className={`text-center p-4 bg-orange-50 rounded-2xl border border-orange-100 transition-all duration-1000 delay-1400 hover:scale-105 ${isLoaded ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-5 scale-95"}`}
                      >
                        <div className="text-3xl font-bold text-orange-600 mb-1">75+</div>
                        <div className="text-sm text-gray-600">GitHub Contributions</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Education Section - Spans 7 columns */}
              <div className="lg:col-span-7">
                <Card
                  className={`bg-white shadow-sm border border-gray-200 rounded-3xl transition-all duration-1000 delay-1000 ${isLoaded ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-10 scale-95"}`}
                >
                  <CardContent className="p-6 lg:p-8">
                    <h2
                      className={`text-2xl font-bold mb-6 text-gray-900 flex items-center gap-3 transition-all duration-1000 delay-1100 ${isLoaded ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-5"}`}
                    >
                      <div
                        className={`w-2 h-8 bg-blue-500 rounded-full transition-all duration-1000 delay-1200 ${isLoaded ? "opacity-100 scale-100" : "opacity-0 scale-0"}`}
                      ></div>
                      Education
                    </h2>
                    <div className="space-y-6">
                        <div
                        className={`flex items-start space-x-4 p-6 bg-blue-50 rounded-2xl border border-blue-100 transition-all duration-1000 delay-1300 hover:scale-105 hover:shadow-md hover:transition-all hover:duration-200 ${isLoaded ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"}`}
                        >
                        <div
                          className={`p-3 bg-blue-500 rounded-2xl transition-all duration-1000 delay-1400 ${isLoaded ? "opacity-100 scale-100 rotate-0" : "opacity-0 scale-75 rotate-180"}`}
                        >
                          <GraduationCap className="h-6 w-6 text-white" />
                        </div>
                        <div className="flex-1">
                          <h3
                          className={`font-medium text-indigo-600 mb-1 transition-all duration-1000 delay-1500 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"}`}
                          >
                          Bachelor of Technology in Computer Science
                          </h3>
                          <p
                          className={`text-gray-900 font-bold mb-2 transition-all duration-1000 delay-1600 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"}`}
                          >
                          Dayananda Sagar University
                          </p>
                          <p
                          className={`text-sm text-gray-600 mb-2 transition-all duration-1000 delay-1700 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"}`}
                          >
                          2023 - 2027
                          </p>
                          <p
                          className={`text-sm text-gray-600 mb-2 transition-all duration-1000 delay-1700 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"}`}
                          >
                          CGPA: 8.92 / 10
                          </p>
                          <p
                          className={`text-sm text-gray-700 transition-all duration-1000 delay-1800 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"}`}
                          >
                          Currently pursuing a degree in Computer Science, with a strong focus on software engineering, data structures, and algorithms. Have completed several impactful projects in web development.
                          </p>
                        </div>
                        </div>

                      <div
                        className={`flex items-start space-x-4 p-6 bg-blue-50 rounded-2xl border border-blue-100 transition-all duration-1000 delay-1400 hover:scale-105 hover:shadow-md hover:transition-all hover:duration-200 ${isLoaded ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"}`}
                      >
                        <div
                          className={`p-3 bg-blue-500 rounded-2xl transition-all duration-1000 delay-1500 ${isLoaded ? "opacity-100 scale-100 rotate-0" : "opacity-0 scale-75 rotate-180"}`}
                        >
                          <GraduationCap className="h-6 w-6 text-white" />
                        </div>
                        <div className="flex-1">
                          <h3
                            className={`font-medium text-indigo-600 mb-1 transition-all duration-1000 delay-1600 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"}`}
                          >
                            Pre-University College
                          </h3>
                          <p
                            className={`text-gray-900 font-bold mb-2 transition-all duration-1000 delay-1700 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"}`}
                          >
                           KLE Societies Jagadguru Tontadarya P.U. College, Gadag
                          </p>
                          <p
                            className={`text-sm text-gray-600 mb-2 transition-all duration-1000 delay-1800 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"}`}
                          >
                            2021-2023
                          </p>
                          <p
                          className={`text-sm text-gray-600 mb-2 transition-all duration-1000 delay-1700 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"}`}
                          >
                          92.33 %
                          </p>
                          <p
                            className={`text-sm text-gray-700 transition-all duration-1000 delay-1900 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"}`}
                          >
                            I pursued my pre-university education with a strong focus on science and mathematics, which helped me develop analytical thinking and problem-solving skills. This phase laid a solid groundwork for my transition into engineering and sparked my interest in building innovative solutions through technology.
                          </p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Achievements Section - Spans 5 columns */}
              <div className="lg:col-span-5">
                <Card
                  className={`bg-white shadow-sm border border-gray-200 rounded-3xl transition-all duration-1000 delay-1100 ${isLoaded ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-10 scale-95"}`}
                >
                  <CardContent className="p-6 lg:p-8">
                    <h2
                      className={`text-2xl font-bold mb-6 text-gray-900 flex items-center gap-3 transition-all duration-1000 delay-1200 ${isLoaded ? "opacity-100 translate-x-0" : "opacity-0 translate-x-5"}`}
                    >
                      <div
                        className={`w-2 h-8 bg-blue-500 rounded-full transition-all duration-1000 delay-1300 ${isLoaded ? "opacity-100 scale-100" : "opacity-0 scale-0"}`}
                      ></div>
                      Achievements
                    </h2>
                    <div className="space-y-6">
                      <div
                        className={`flex items-start space-x-4 p-6 bg-blue-50 rounded-2xl border border-blue-100 transition-all duration-1000 delay-1400 hover:scale-105 hover:shadow-md hover:transition-all hover:duration-200 ${isLoaded ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"}`}
                      >
                        <div
                          className={`p-3 bg-blue-500 rounded-2xl transition-all duration-1000 delay-1500 ${isLoaded ? "opacity-100 scale-100 rotate-0" : "opacity-0 scale-75 -rotate-180"}`}
                        >
                          <Award className="h-6 w-6 text-white" />
                        </div>
                        <div className="flex-1">
                          <h3
                            className={`font-medium text-indigo-600 mb-1 transition-all duration-1000 delay-1600 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"}`}
                          >
                            Finalist
                          </h3>
                          <p
                            className={`text-gray-900 font-bold mb-2 transition-all duration-1000 delay-1700 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"}`}
                          >
                           Hack-in-bad 2025
                          </p>
                          <p
                            className={`text-sm text-gray-700 transition-all duration-1000 delay-1800 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"}`}
                          >
                            Selected as a finalist in Hack-in-bad, a prestigious hackathon conducted by Techflix at Dayananda Sagar University, for developing an innovative tech solution.
                          </p>
                        </div>
                      </div>

                      <div
                        className={`flex items-start space-x-4 p-6 bg-blue-50 rounded-2xl border border-blue-100 transition-all duration-1000 delay-1500 hover:scale-105 hover:shadow-md hover:transition-all hover:duration-200 ${isLoaded ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"}`}
                      >
                        <div
                          className={`p-3 bg-blue-500 rounded-2xl transition-all duration-1000 delay-1600 ${isLoaded ? "opacity-100 scale-100 rotate-0" : "opacity-0 scale-75 -rotate-180"}`}
                        >
                          <Star className="h-6 w-6 text-white" />
                        </div>
                        <div className="flex-1">
                          <h3
                            className={`font-medium text-indigo-600 mb-1 transition-all duration-1000 delay-1700 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"}`}
                          >
                            Bronze Medal
                          </h3>
                          <p
                            className={`text-gray-900 font-bold mb-2 transition-all duration-1000 delay-1800 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"}`}
                          >
                             Devhack 2025
                          </p>
                          <p
                            className={`text-sm text-gray-700 transition-all duration-1000 delay-1900 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"}`}
                          >
                            Secured a Bronze Medal as a finalist in DevHack 2025, part of Parsec 5.0 at IIT Dharwad, for creating a standout solution among top-tier student teams.
                          </p>
                        </div>
                      </div>

                      <div
                        className={`flex items-start space-x-4 p-6 bg-blue-50 rounded-2xl border border-blue-100 transition-all duration-1000 delay-1600 hover:scale-105 hover:shadow-md hover:transition-all hover:duration-200 ${isLoaded ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"}`}
                      >
                        <div
                          className={`p-3 bg-blue-500 rounded-2xl transition-all duration-1000 delay-1700 ${isLoaded ? "opacity-100 scale-100 rotate-0" : "opacity-0 scale-75 -rotate-180"}`}
                        >
                          <Users className="h-6 w-6 text-white" />
                        </div>
                        <div className="flex-1">
                          <h3
                            className={`font-medium text-indigo-600 mb-1 transition-all duration-1000 delay-1800 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"}`}
                          >
                            Participation
                          </h3>
                          <p
                            className={`text-gray-900 font-bold mb-2 transition-all duration-1000 delay-1900 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"}`}
                          >
                            Nasa&#39;s Space Apps challenge 2024
                          </p>
                          <p
                            className={`text-sm text-gray-700 transition-all duration-1000 delay-2000 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"}`}
                          >
                            Participated in the globally recognized NASA Space Apps Challenge 2024, gaining valuable experience in collaborative problem-solving and space-related innovation.
                          </p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageWrapper>
  )
}
