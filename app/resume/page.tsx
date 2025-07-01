"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Download, Mail, Phone, MapPin, Globe, Github, Linkedin } from "lucide-react"
import { PageWrapper } from "@/components/page-wrapper"
import { useEffect, useState } from "react"

export default function ResumePage() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  return (
    <PageWrapper>
      <div className="min-h-screen mb-16">
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
                Professional Resume
              </h1>

              {/* Subtitle */}
              <p
                className={`text-lg text-blue-500 leading-relaxed max-w-2xl mx-auto transition-all duration-1000 delay-400 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}
              >
                Download my resume or view it online
              </p>
            </div>
          </div>
        </div>

        <div className="relative -mt-32 px-4 lg:px-8 ">
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
                  <p className="text-xl text-blue-600 mb-4">Full Stack Developer</p>
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
                      my-portfolio-nu-six-70.vercel.app/
                    </div>
                  </div>
                  <div className="flex justify-center gap-4 mt-4">
                    <div className="flex items-center gap-1 text-sm text-gray-600">
                      <Github className="h-4 w-4" />
                      chetankronad06
                    </div>
                    <div className="flex items-center gap-1 text-sm text-gray-600">
                      <Linkedin className="h-4 w-4" />
                      inchetan-ronad-827113300
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
                    Passionate Full Stack Developer skilled in building responsive and scalable web applications using React, Node.js, and modern backend frameworks. Currently expanding my expertise in AI/ML by working on hands-on projects and real-world applications. I have experience with real-time systems using WebSockets and have explored blockchain-based solutions. Strong problem-solving abilities with a focus on clean architecture, user experience, and impactful project development through hackathons and personal initiatives.
                  </p>
                </section>

                {/* Education */}
                <section
                  className={`transition-all duration-1000 delay-1700 space-y-3 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}
                >
                  <h2 className="text-xl font-bold text-gray-900 mb-3 border-b-2 border-blue-500 pb-1">EDUCATION</h2>
                  <div>
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <h3 className="font-semibold text-gray-900">Bachelor of Technology in Computer Science</h3>
                        <p className="text-indigo-500">Dayananda Sagar University</p>
                      </div>
                      <div className="text-right text-sm text-gray-600">
                        <p>2023 - 2027</p>
                        <p>CGPA: 8.92/10</p>
                      </div>
                    </div>
                    <p className="text-sm text-gray-700 ml-4">
                      Currently pursuing a degree in Computer Science, with a strong focus on software engineering, data structures, and algorithms. Have completed several impactful projects in web development.
                    </p>
                  </div>
                  <div>
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <h3 className="font-semibold text-gray-900"> Pre-University College</h3>
                        <p className="text-indigo-500">KLE Societies Jagadguru Tontadarya P.U. College, Gadag</p>
                      </div>
                      <div className="text-right text-sm text-gray-600">
                        <p>2021-2023</p>
                        <p>92.33 %</p>
                      </div>
                    </div>
                    <p className="text-sm text-gray-700 ml-4">
                      I pursued my pre-university education with a strong focus on science and mathematics, which helped me develop analytical thinking and problem-solving skills. This phase laid a solid groundwork for my transition into engineering and sparked my interest in building innovative solutions through technology.
                    </p>
                  </div>
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
                          {["JavaScript", "TypeScript", "Python", "C", "Java"].map((skill) => (
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
                          {["React.js", "Next.js", "Tailwind CSS", "HTML5/CSS3", "Bootstrap", "Shadcn UI", "Framer motion"].map((skill) => (
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
                          {["Node.js", "Express.js", "MongoDB", "Supabase", "Mysql", "Prisma ORM", "Tanstack Query", "REST APIs", "websockets"].map((skill) => (
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
                          {["Git/GitHub", "AWS", "Vercel", "VS Code", "Figma", "Postman", "Clerk", "Socket.io", " ChatGPT"].map((skill) => (
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


                {/* Projects */}
                <section
                  className={`transition-all duration-1000 delay-1800 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}
                >
                  <h2 className="text-xl font-bold text-gray-900 mb-3 border-b-2 border-blue-500 pb-1">KEY PROJECTS</h2>
                  <div className="space-y-3">
                    <div>
                      <h3 className="font-semibold text-gray-900">E-Commerce Platform</h3>
                      <p className="text-sm text-gray-700">

                        E-Commerce Platform
                        A full-stack e-commerce platform with user authentication, payment integration, and admin dashboard. Built with modern technologies for optimal performance
                        <span className="text-indigo-500 ml-2">Nextjs
                          clerk,
                          Sanity,
                          Stripe,
                          Tailwind CSS,
                          zustand,
                          shadcnui</span>
                      </p>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">ChatAt-DSU</h3>
                      <p className="text-sm text-gray-700">

                        A real-time campus social platform where DSU users can log in, connect with fellow students by sending friend requests, and chat seamlessly. Built with WebSockets, it enables instant messaging and active presence updates.
                        <span className="text-indigo-500 ml-2">Nextjs,
                          Websocket,
                          Tanstack Query,
                          clerk,
                          supabase,
                          shadcnui</span>
                      </p>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">
                        Portfolio Website
                      </h3>
                      <p className="text-sm text-gray-700">
                        A responsive portfolio website showcasing projects and skills with modern design and smooth animations.
                        <span className="text-indigo-500 ml-2">Next.js,
                          Tailwind CSS,
                          Framer Motion,
                          TypeScript</span>
                      </p>
                    </div>
                  </div>
                </section>

                {/* Experience */}
                <section
                  className={`transition-all duration-1000 delay-1600 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}
                >
                  <h2 className="text-xl font-bold text-gray-900 mb-3 border-b-2 border-blue-500 pb-1">EXPERIENCE</h2>
                  <p className="text-gray-700 leading-relaxed text-left ">
                    <span className="font-medium text-indigo-600">
                      Available for Internships &amp; Entry-Level Positions
                    </span><br />
                    While I&apos;m at the beginning of my professional journey, I&apos;ve been building a strong foundation through academic excellence, hands-on projects, and competitive programming.
                    <br />
                    I&apos;m actively seeking opportunities to contribute to innovative teams and real-world challenges where I can apply my technical skills and passion for problem-solving.
                  </p>
                </section>

                {/* Achievements */}
                <section
                  className={`transition-all duration-1000 delay-1900 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}
                >
                  <h2 className="text-xl font-bold text-gray-900 mb-3 border-b-2 border-blue-500 pb-1">
                  ACHIEVEMENTS & CERTIFICATIONS
                  </h2>
                  <div className="space-y-4 text-sm text-gray-700">
                  <div>
                    <p className="font-semibold text-indigo-500">Finalist – Hack-in-bad 2025</p>
                    <p>
                    Selected as a finalist in Hack-in-bad, a prestigious hackathon conducted by Techflix at Dayananda Sagar University, for developing an innovative tech solution.
                    </p>
                  </div>
                  <div>
                    <p className="font-semibold text-indigo-500">Bronze Medal – DevHack 2025</p>
                    <p>
                    Secured a Bronze Medal as a finalist in DevHack 2025, part of Parsec 5.0 at IIT Dharwad, for creating a standout solution among top-tier student teams.
                    </p>
                  </div>
                  <div>
                    <p className="font-semibold text-indigo-500">Participation – NASA Space Apps Challenge 2024</p>
                    <p>
                    Participated in the globally recognized NASA Space Apps Challenge 2024, gaining valuable experience in collaborative problem-solving and space-related innovation.
                    </p>
                  </div>
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
