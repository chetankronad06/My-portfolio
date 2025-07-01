"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github } from "lucide-react"
import Image from "next/image"
import { useEffect, useState } from "react"

const projects = [
  {
    title: "E-Commerce Platform",
    description:
      "A full-stack e-commerce platform with user authentication, payment integration, and admin dashboard. Built with modern technologies for optimal performance.",
    image: "/projects/ecommerce.png?height=200&width=400",
    tech: ["Nextjs", "clerk", "Sanity", "Stripe", "Tailwind CSS","zustand","shadcnui"],
    features: ["User Authentication", "Payment Gateway", "Admin Dashboard", "Responsive Design"],
    liveUrl: "https://e-commerce-nu-eight-15.vercel.app/",
    githubUrl: "https://github.com/chetankronad06/E-commerce",
  },
  {
    title: "ChatAt-Dsu",
    description:
      "A real-time campus social platform where DSU users can log in, connect with fellow students by sending friend requests, and chat seamlessly. Built with WebSockets, it enables instant messaging and active presence updates.",
    image: "/projects/chatatdsu.png?height=200&width=400",
    tech: ["Nextjs", "Websocket", "Tanstack Query", "clerk", "supabase", "shadcnui"],
    features: ["Real-time Detection", "Multiple Object Classes", "Confidence Scoring", "Image Upload"],
    liveUrl: "https://chat-at-dsu.vercel.app/",
    githubUrl: "https://github.com/Yeshwanth-King/ChatAtDSU",
  },
  // {
  //   title: "Task Management Dashboard",
  //   description:
  //     "A comprehensive task management system with team collaboration features, real-time updates, and analytics dashboard.",
  //   image: "/placeholder.svg?height=200&width=400",
  //   tech: ["Next.js", "TypeScript", "Prisma", "PostgreSQL", "Socket.io"],
  //   features: ["Real-time Updates", "Team Collaboration", "Analytics", "File Attachments"],
  //   liveUrl: "#",
  //   githubUrl: "#",
  //   category: "Web App",
  // },
  // {
  //   title: "Blockchain Voting System",
  //   description:
  //     "A decentralized voting application built on Ethereum blockchain ensuring transparency and security in the voting process.",
  //   image: "/placeholder.svg?height=200&width=400",
  //   tech: ["Solidity", "Web3.js", "React", "Ethereum", "MetaMask"],
  //   features: ["Decentralized", "Transparent", "Secure", "Smart Contracts"],
  //   liveUrl: "#",
  //   githubUrl: "#",
  //   category: "Blockchain",
  // },
  // {
  //   title: "Weather Forecast App",
  //   description:
  //     "A beautiful weather application with location-based forecasts, interactive maps, and detailed weather analytics.",
  //   image: "/placeholder.svg?height=200&width=400",
  //   tech: ["React Native", "TypeScript", "Weather API", "Maps API"],
  //   features: ["Location-based", "Interactive Maps", "Push Notifications", "Offline Support"],
  //   liveUrl: "#",
  //   githubUrl: "#",
  //   category: "Mobile",
  // },
  {
    title: "Portfolio Website",
    description:
      "A responsive portfolio website showcasing projects and skills with modern design and smooth animations.",
    image: "/projects/portfolio.png?height=200&width=400",
    tech: ["Next.js", "Tailwind CSS", "Framer Motion", "TypeScript"],
    features: ["Responsive Design", "Dark Mode", "Animations", "SEO Optimized"],
    liveUrl: "https://my-portfolio-nu-six-70.vercel.app/",
    githubUrl: "https://github.com/chetankronad06/My-portfolio",
  },
]

export default function ProjectsPage() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  return (
    <div className="min-h-screen">
      {/* Header Section - Google Material Theme */}
      <div
        className={`relative h-64 bg-gradient-to-r from-blue-50 to-indigo-50 overflow-hidden transition-all duration-1000 rounded-3xl m-6 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-10"}`}
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
              Hands-on Work & Prototypes
            </h1>
            <p
              className={`text-lg text-blue-600 transition-all duration-1000 delay-400 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
            >
              Here are some of the projects I&apos;ve worked on recently
            </p>
          </div>
        </div>
      </div>

      <div className="relative -mt-20 px-4 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 pt-32">
            {projects.map((project, index) => (
              <Card
                key={index}
                className={`group bg-white shadow-sm border border-gray-200 rounded-3xl overflow-hidden hover:shadow-lg hover:scale-105 transition-all duration-200 ${isLoaded ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-10 scale-95"}`}
                style={{
                  transitionDelay: isLoaded ? "0ms" : `${600 + index * 150}ms`,
                }}
              >
                <div className="overflow-hidden">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    width={400}
                    height={200}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-200"
                  />
                  {/* Overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-200"></div>
                </div>

                <CardHeader className="pb-4">
                  <CardTitle
                    className={`text-xl text-gray-900 font-medium transition-all duration-1000 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}
                    style={{
                      transitionDelay: `${900 + index * 150}ms`,
                    }}
                  >
                    {project.title}
                  </CardTitle>
                </CardHeader>

                <CardContent className="space-y-6">
                  <p
                    className={`text-gray-600 text-sm leading-relaxed transition-all duration-1000 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}
                    style={{
                      transitionDelay: `${1000 + index * 150}ms`,
                    }}
                  >
                    {project.description}
                  </p>

                  <div
                    className={`transition-all duration-1000 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}
                    style={{
                      transitionDelay: `${1100 + index * 150}ms`,
                    }}
                  >
                    <h4 className="font-medium text-gray-900 mb-3 flex items-center gap-2">
                      <div className="w-1 h-4 bg-blue-500 rounded-full"></div>
                      Tech Stack
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech, techIndex) => (
                        <Badge
                          key={techIndex}
                          variant="outline"
                          className="text-xs bg-blue-50 text-gray-700 border-blue-200 hover:bg-blue-100 transition-colors duration-200"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div
                    className={`transition-all duration-1000 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}
                    style={{
                      transitionDelay: `${1200 + index * 150}ms`,
                    }}
                  >
                    <h4 className="font-medium text-gray-900 mb-3 flex items-center gap-2">
                      <div className="w-1 h-4 bg-blue-500 rounded-full"></div>
                      Key Features
                    </h4>
                    <div className="bg-blue-50 rounded-2xl p-4 border border-blue-100">
                      <ul className="text-gray-700 space-y-2 text-sm">
                        {project.features.slice(0, 3).map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-center gap-2">
                            <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div
                    className={`flex gap-3 pt-2 transition-all duration-1000 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}
                    style={{
                      transitionDelay: `${1300 + index * 150}ms`,
                    }}
                  >
                    <Button
                      size="sm"
                      asChild
                      className="bg-blue-500 hover:bg-blue-600 text-white rounded-2xl flex-1 transition-all duration-200 hover:scale-105"
                    >
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Live Demo
                      </a>
                    </Button>
                    <Button
                      size="sm"
                      variant="outline"
                      asChild
                      className="border-gray-300 text-gray-700 hover:bg-gray-50 rounded-2xl flex-1 transition-all duration-200 hover:scale-105 bg-transparent"
                    >
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                        <Github className="w-4 h-4 mr-2" />
                        Code
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Bottom Section */}
          <div
            className={`text-center py-16 transition-all duration-1000 delay-2000 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
            <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-200 max-w-2xl mx-auto">
              <h3 className="text-2xl  text-gray-900 font-bold mb-4">Want to see more?</h3>
              <p className="text-gray-600 mb-6">
                These are just a few highlights from my portfolio. I&apos;m always working on new projects and exploring
                different technologies.
              </p>
                <Button
                className="bg-blue-600 hover:bg-blue-700 text-white rounded-2xl px-8 transition-all duration-200 hover:scale-105"
                asChild
                >
                <a
                  href="https://github.com/chetankronad06?tab=repositories"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github className="w-4 h-4 mr-2" />
                  View All Projects on GitHub
                </a>
                </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
