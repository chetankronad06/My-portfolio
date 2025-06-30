"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Download, Eye, Mail, Phone, MapPin, Globe, Github, Linkedin } from "lucide-react"
import { PageWrapper } from "@/components/page-wrapper"
import { useEffect, useState } from "react"
import Link from "next/link"

export default function ResumePage() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  return (
    <PageWrapper>
      <div className="min-h-screen bg-gray-50">
        {/* Header Section - Google Material Theme */}
        <div
          className={`relative h-64 bg-gradient-to-r from-blue-50 to-indigo-50 overflow-hidden transition-all duration-1000 m-6 rounded-3xl ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-10"}`}
        >
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

          {/* Header Content */}
          <div className="relative z-10 flex items-center justify-center h-full">
            <div className="text-center space-y-4">
              <h1
                className={`text-4xl lg:text-5xl font-medium text-gray-900 transition-all duration-1000 delay-200 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
              >
                Resume
              </h1>
              <p
                className={`text-lg text-blue-500 transition-all duration-1000 delay-400 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
              >
                Download my resume or view it online
              </p>
            </div>
          </div>
        </div>

        <div className="relative -mt-32 px-4 lg:px-8">
          <div className="max-w-4xl mx-auto space-y-8 pt-32">
            {/* Resume Preview */}
            <Card
              className={`bg-white shadow-sm border border-gray-200 rounded-3xl transition-all duration-1000 delay-800 ${isLoaded ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-10 scale-95"}`}
            >
              <CardContent className="p-8 space-y-8">
                {/* Header Section */}
                <div
                  className={`text-center border-b border-gray-200 pb-6 transition-all duration-1000 delay-900 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}
                >
                  <h1 className="text-3xl font-bold text-gray-900 mb-2">CHETAN KALAKAPPA RONAD</h1>
                  <p className="text-xl text-gray-600 mb-4">Full Stack Developer</p>
                  <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-600">
                    <div className="flex items-center gap-1">
                      <Mail className="h-4 w-4" />
                      chetankronad06@gmail.com
                    </div>
                    <div className="flex items-center gap-1">
                      <Phone className="h-4 w-4" />
                      +91 6363073987
                    </div>
                    <div className="flex items-center gap-1">
                      <MapPin className="h-4 w-4" />
                      Bangalore, India
                    </div>
                    <div className="flex items-center gap-1">
                      <Globe className="h-4 w-4" />
                      https://my-portfolio-cr071nvka-chetan-k-ronads-projects.vercel.app/
                    </div>
                  </div>
                  <div className="flex justify-center gap-4 mt-4">
                    <div className="flex items-center gap-1 text-sm text-gray-600">
                      <Github className="h-4 w-4" />
                      github.com/chetankronad06
                    </div>
                    <div className="flex items-center gap-1 text-sm text-gray-600">
                      <Linkedin className="h-4 w-4" />
                      linkedin.com/in/chetan-ronad-827113300
                    </div>
                  </div>
                </div>

                {/* Professional Summary */}
                <section
                  className={`transition-all duration-1000 delay-1000 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}
                >
                  <h2 className="text-xl font-bold text-gray-900 mb-3 border-b-2 border-blue-500 pb-1">

                    PROFESSIONAL SUMMARY
                  </h2>
                  <p className="text-gray-700 leading-relaxed">
                    Passionate Full Stack Developer with expertise in modern web technologies including React, Node.js,
                    and Python. Experienced in building scalable applications, implementing AI/ML solutions, and working
                    with blockchain technologies. Strong problem-solving skills with a focus on creating user-centric
                    solutions and contributing to open-source projects.
                  </p>
                </section>

                {/* Technical Skills - Simple Professional Design */}
                <section
                  className={`transition-all duration-1000 delay-1100 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}
                >
                  <h2 className="text-xl font-bold text-gray-900 mb-6 border-b-2 border-blue-500 pb-1">
                    TECHNICAL SKILLS
                  </h2>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-6">
                      <div
                        className={`bg-blue-50 rounded-2xl p-6 border border-blue-100 transition-all duration-1000 delay-1200 hover:shadow-md ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}
                      >
                        <div className="flex items-center space-x-3 mb-4">
                          <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                          <h3 className="font-bold text-gray-900">Programming Languages</h3>
                        </div>
                        <div className="flex flex-wrap gap-2">
                          {["JavaScript", "TypeScript", "Python", "C++", "Java"].map((skill) => (
                            <Badge
                              key={skill}
                              variant="outline"
                              className="text-xs bg-white text-gray-700 border-gray-300 hover:bg-gray-50"
                            >
                              {skill}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      <div
                        className={`bg-blue-50 rounded-2xl p-6 border border-blue-100 transition-all duration-1000 delay-1300 hover:shadow-md ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}
                      >
                        <div className="flex items-center space-x-3 mb-4">
                          <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                          <h3 className="font-bold text-gray-900">Frontend Development</h3>
                        </div>
                        <div className="flex flex-wrap gap-2">
                          {["React.js", "Next.js", "Vue.js", "Tailwind CSS", "HTML5/CSS3"].map((skill) => (
                            <Badge
                              key={skill}
                              variant="outline"
                              className="text-xs bg-white text-gray-700 border-gray-300 hover:bg-gray-50"
                            >
                              {skill}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className="space-y-6">
                      <div
                        className={`bg-blue-50 rounded-2xl p-6 border border-blue-100 transition-all duration-1000 delay-1400 hover:shadow-md ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}
                      >
                        <div className="flex items-center space-x-3 mb-4">
                          <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                          <h3 className="font-bold text-gray-900">Backend Development</h3>
                        </div>
                        <div className="flex flex-wrap gap-2">
                          {["Node.js", "Express.js", "MongoDB", "PostgreSQL", "REST APIs"].map((skill) => (
                            <Badge
                              key={skill}
                              variant="outline"
                              className="text-xs bg-white text-gray-700 border-gray-300 hover:bg-gray-50"
                            >
                              {skill}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      <div
                        className={`bg-blue-50 rounded-2xl p-6 border border-blue-100 transition-all duration-1000 delay-1500 hover:shadow-md ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}
                      >
                        <div className="flex items-center space-x-3 mb-4">
                          <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                          <h3 className="font-bold text-gray-900">Tools & Technologies</h3>
                        </div>
                        <div className="flex flex-wrap gap-2">
                          {["Git/GitHub", "Docker", "AWS", "Vercel", "VS Code"].map((skill) => (
                            <Badge
                              key={skill}
                              variant="outline"
                              className="text-xs bg-white text-gray-700 border-gray-300 hover:bg-gray-50"
                            >
                              {skill}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </section>

                {/* Experience */}
                <section
                  className={`transition-all duration-1000 delay-1600 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}
                >
                  <h2 className="text-xl font-bold text-gray-900 mb-3 border-b-2 border-blue-500 pb-1">EXPERIENCE</h2>
                  <div className="space-y-4">
                    <div>
                      <div className="flex justify-between items-start mb-2">
                        <div>
                          <h3 className="font-semibold text-gray-900">Full Stack Developer Intern</h3>
                          <p className="text-indigo-500">TechCorp Solutions</p>
                        </div>
                        <div className="text-right text-sm text-gray-600">
                          <p>Jun 2024 - Present</p>
                          <p>Remote</p>
                        </div>
                      </div>
                      <ul className="text-sm text-gray-700 space-y-1 ml-4">
                        <li>• Developed scalable web applications using React and Node.js</li>
                        <li>• Improved application performance by 30% through optimization</li>
                        <li>• Collaborated with senior developers on 5+ major feature releases</li>
                      </ul>
                    </div>
                    <div>
                      <div className="flex justify-between items-start mb-2">
                        <div>
                          <h3 className="font-semibold text-gray-900">Frontend Developer</h3>
                          <p className="text-indigo-500">StartupXYZ (Freelance)</p>
                        </div>
                        <div className="text-right text-sm text-gray-600">
                          <p>Jan 2024 - May 2024</p>
                          <p>Bangalore, India</p>
                        </div>
                      </div>
                      <ul className="text-sm text-gray-700 space-y-1 ml-4">
                        <li>• Built responsive UI components for fintech dashboard</li>
                        <li>• Reduced page load time by 40% through optimization</li>
                        <li>• Implemented accessibility standards and best practices</li>
                      </ul>
                    </div>
                  </div>
                </section>

                {/* Education */}
                <section
                  className={`transition-all duration-1000 delay-1700 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}
                >
                  <h2 className="text-xl font-bold text-gray-900 mb-3 border-b-2 border-blue-500 pb-1">EDUCATION</h2>
                  <div>
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <h3 className="font-semibold text-gray-900">Bachelor of Technology in Computer Science</h3>
                        <p className="text-indigo-500">XYZ University</p>
                      </div>
                      <div className="text-right text-sm text-gray-600">
                        <p>2021 - 2025</p>
                        <p>CGPA: 8.5/10</p>
                      </div>
                    </div>
                    <p className="text-sm text-gray-700 ml-4">
                      Relevant Coursework: Data Structures, Algorithms, Database Management, Software Engineering,
                      Machine Learning
                    </p>
                  </div>
                </section>

                {/* Projects */}
                <section
                  className={`transition-all duration-1000 delay-1800 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}
                >
                  <h2 className="text-xl font-bold text-gray-900 mb-3 border-b-2 border-blue-500 pb-1">KEY PROJECTS</h2>
                  <div className="space-y-3">
                    <div>
                      <h3 className="font-semibold text-gray-900">E-Commerce Platform</h3>
                      <p className="text-sm text-gray-700">
                        Full-stack e-commerce application with user authentication, payment integration, and admin
                        dashboard.
                        <span className="text-indigo-500 ml-2">React, Node.js, MongoDB, Stripe</span>
                      </p>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">AI Image Recognition App</h3>
                      <p className="text-sm text-gray-700">
                        Real-time object detection application using YOLOv8 with web interface for easy interaction.
                        <span className="text-indigo-500 ml-2">Python, YOLOv8, Flask, OpenCV</span>
                      </p>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">Blockchain Voting System</h3>
                      <p className="text-sm text-gray-700">
                        Decentralized voting application ensuring transparency and security using smart contracts.
                        <span className="text-indigo-500 ml-2">Solidity, Web3.js, React, Ethereum</span>
                      </p>
                    </div>
                  </div>
                </section>

                {/* Achievements */}
                <section
                  className={`transition-all duration-1000 delay-1900 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}
                >
                  <h2 className="text-xl font-bold text-gray-900 mb-3 border-b-2 border-blue-500 pb-1">
                    ACHIEVEMENTS & CERTIFICATIONS
                  </h2>
                  <div className="space-y-2 text-sm text-gray-700">
                    <p>• Winner - Smart India Hackathon 2024 (AI-powered traffic management solution)</p>
                    <p>• AWS Certified Developer Associate (Dec 2024)</p>
                    <p>• 3-star rating on CodeChef with consistent top 10% rankings</p>
                    <p>• Contributed to 15+ open source projects with 100+ commits</p>
                    <p>• Tech Lead - College Programming Club (2023-2024)</p>
                  </div>
                </section>
              </CardContent>
            </Card>
            {/* Download Section */}
            <Card
              className={`bg-white shadow-sm border border-gray-200 rounded-3xl transition-all duration-1000 delay-2000 ${isLoaded ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-10 scale-95"}`}
            >
              <CardContent className="p-6 text-center">
                <h2 className="text-xl font-medium text-gray-900 mb-4">Ready to work together?</h2>
                <p className="text-gray-600 mb-6">Download my resume or get in touch to discuss opportunities.</p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button
                    size="lg"
                    className="bg-blue-600 hover:bg-blue-700 text-white rounded-2xl transition-all duration-200 hover:scale-105"
                    asChild
                    >
                    <a href="/application-form.pdf" download>
                      <Download className="mr-2 h-5 w-5" />
                      Download Resume (PDF)
                    </a>
                    </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    asChild
                    className="border-gray-300 text-gray-700 hover:bg-gray-50 rounded-2xl transition-all duration-200 hover:scale-105 bg-transparent"
                  >
                    <a href="/contact">
                      <Mail className="mr-2 h-5 w-5" />
                      Contact Me
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </PageWrapper>
  )
}
