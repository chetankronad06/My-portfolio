import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github } from "lucide-react"
import Image from "next/image"

const projects = [
  {
    title: "E-Commerce Platform",
    description:
      "A full-stack e-commerce platform with user authentication, payment integration, and admin dashboard. Built with modern technologies for optimal performance.",
    image: "/placeholder.svg?height=200&width=400",
    tech: ["React", "Node.js", "MongoDB", "Stripe", "Tailwind CSS"],
    features: ["User Authentication", "Payment Gateway", "Admin Dashboard", "Responsive Design"],
    liveUrl: "#",
    githubUrl: "#",
    category: "Full Stack",
  },
  {
    title: "AI Image Recognition App",
    description:
      "An AI-powered application that uses YOLOv8 for real-time object detection and classification. Includes a web interface for easy interaction.",
    image: "/placeholder.svg?height=200&width=400",
    tech: ["Python", "YOLOv8", "Flask", "OpenCV", "React"],
    features: ["Real-time Detection", "Multiple Object Classes", "Confidence Scoring", "Image Upload"],
    liveUrl: "#",
    githubUrl: "#",
    category: "AI/ML",
  },
  {
    title: "Task Management Dashboard",
    description:
      "A comprehensive task management system with team collaboration features, real-time updates, and analytics dashboard.",
    image: "/placeholder.svg?height=200&width=400",
    tech: ["Next.js", "TypeScript", "Prisma", "PostgreSQL", "Socket.io"],
    features: ["Real-time Updates", "Team Collaboration", "Analytics", "File Attachments"],
    liveUrl: "#",
    githubUrl: "#",
    category: "Web App",
  },
  {
    title: "Blockchain Voting System",
    description:
      "A decentralized voting application built on Ethereum blockchain ensuring transparency and security in the voting process.",
    image: "/placeholder.svg?height=200&width=400",
    tech: ["Solidity", "Web3.js", "React", "Ethereum", "MetaMask"],
    features: ["Decentralized", "Transparent", "Secure", "Smart Contracts"],
    liveUrl: "#",
    githubUrl: "#",
    category: "Blockchain",
  },
  {
    title: "Weather Forecast App",
    description:
      "A beautiful weather application with location-based forecasts, interactive maps, and detailed weather analytics.",
    image: "/placeholder.svg?height=200&width=400",
    tech: ["React Native", "TypeScript", "Weather API", "Maps API"],
    features: ["Location-based", "Interactive Maps", "Push Notifications", "Offline Support"],
    liveUrl: "#",
    githubUrl: "#",
    category: "Mobile",
  },
  {
    title: "Portfolio Website",
    description:
      "A responsive portfolio website showcasing projects and skills with modern design and smooth animations.",
    image: "/placeholder.svg?height=200&width=400",
    tech: ["Next.js", "Tailwind CSS", "Framer Motion", "TypeScript"],
    features: ["Responsive Design", "Dark Mode", "Animations", "SEO Optimized"],
    liveUrl: "#",
    githubUrl: "#",
    category: "Web Design",
  },
]

export default function ProjectsPage() {
  return (
    <div className="min-h-screen p-4 lg:p-8">
      <div className="max-w-7xl mx-auto space-y-8">
        {/* Header */}
        <div className="text-center space-y-4">
          <h1 className="text-4xl lg:text-5xl font-normal text-google-gray-900 font-inter">My Projects</h1>
          <p className="text-lg text-google-gray-600 font-roboto">
            Here are some of the projects I&apos;ve worked on recently
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="group hover:shadow-lg transition-shadow duration-300 bg-white border border-google-gray-200 rounded-xl"
            >
              <div className="relative overflow-hidden rounded-t-lg">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  width={400}
                  height={200}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 right-4">
                  <Badge variant="secondary" className="bg-white/90 text-gray-800">
                    {project.category}
                  </Badge>
                </div>
              </div>

              <CardHeader>
                <CardTitle className="text-xl text-google-gray-900 font-inter">{project.title}</CardTitle>
              </CardHeader>

              <CardContent className="space-y-4">
                <p className="text-google-gray-600 font-roboto text-sm">{project.description}</p>

                <div>
                  <h4 className="font-semibold text-google-gray-900 font-inter mb-2">Tech Stack:</h4>
                  <div className="flex flex-wrap gap-1">
                    {project.tech.map((tech, techIndex) => (
                      <Badge key={techIndex} variant="outline" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold text-google-gray-900 font-inter mb-2">Key Features:</h4>
                  <ul className="text-google-gray-600 font-roboto space-y-1 text-sm">
                    {project.features.slice(0, 3).map((feature, featureIndex) => (
                      <li key={featureIndex}>• {feature}</li>
                    ))}
                  </ul>
                </div>

                <div className="flex gap-2 pt-2">
                  <Button size="sm" asChild>
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="w-4 h-4 mr-1" />
                      Live Demo
                    </a>
                  </Button>
                  <Button size="sm" variant="outline" asChild>
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                      <Github className="w-4 h-4 mr-1" />
                      Code
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}
