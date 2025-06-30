"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, MapPin, ExternalLink } from "lucide-react"
import { useEffect, useState } from "react"

const experiences = [
  {
    title: "Full Stack Developer Intern",
    company: "TechCorp Solutions",
    location: "Remote",
    duration: "Jun 2024 - Present",
    type: "Internship",
    description:
      "Working on developing scalable web applications using React and Node.js. Collaborated with senior developers to implement new features and optimize existing codebase.",
    achievements: [
      "Improved application performance by 30%",
      "Implemented responsive design for mobile users",
      "Contributed to 5+ major feature releases",
    ],
    tech: ["React", "Node.js", "MongoDB", "AWS"],
  },
  {
    title: "Frontend Developer",
    company: "StartupXYZ",
    location: "Bangalore, India",
    duration: "Jan 2024 - May 2024",
    type: "Freelance",
    description:
      "Developed user interfaces for a fintech startup, focusing on creating intuitive and accessible designs for financial dashboards.",
    achievements: [
      "Built 10+ responsive components",
      "Reduced load time by 40%",
      "Implemented accessibility standards",
    ],
    tech: ["Vue.js", "TypeScript", "Tailwind CSS", "Chart.js"],
  },
]

const certifications = [
  {
    title: "AWS Certified Developer Associate",
    issuer: "Amazon Web Services",
    date: "Dec 2024",
    credentialId: "AWS-CDA-2024-001",
    link: "#",
  },
  {
    title: "Full Stack Web Development",
    issuer: "freeCodeCamp",
    date: "Nov 2024",
    credentialId: "FCC-FSWD-2024",
    link: "#",
  },
  {
    title: "Machine Learning Specialization",
    issuer: "Coursera (Stanford)",
    date: "Oct 2024",
    credentialId: "COURSERA-ML-2024",
    link: "#",
  },
  {
    title: "React Developer Certification",
    issuer: "Meta",
    date: "Sep 2024",
    credentialId: "META-REACT-2024",
    link: "#",
  },
]

export default function ExperiencePage() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  return (
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
              Experience & Certifications
            </h1>
            <p
              className={`text-lg text-blue-500 transition-all duration-1000 delay-400 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
            >
              My professional journey and accomplishments
            </p>
          </div>
        </div>
      </div>

      <div className="relative -mt-24 px-4 lg:px-8">
        <div className="max-w-6xl mx-auto space-y-12 pt-32">
          {/* Work Experience */}
          <section className="space-y-8">
            <h2
              className={`text-3xl font-bold text-gray-900 flex items-center gap-3 transition-all duration-1000 delay-600 ${isLoaded ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-5"}`}
            >
              <div
                className={`w-2 h-8 bg-blue-500 rounded-full transition-all duration-1000 delay-700 ${isLoaded ? "opacity-100 scale-100" : "opacity-0 scale-0"}`}
              ></div>
              Work Experience
            </h2>
            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <Card
                  key={index}
                  className={`bg-white shadow-sm border border-gray-200 rounded-3xl hover:shadow-lg hover:scale-105 transition-all duration-200 ${isLoaded ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-10 scale-95"}`}
                  style={{
                    transitionDelay: isLoaded ? "0ms" : `${800 + index * 200}ms`,
                  }}
                >
                  <CardHeader className="pb-4">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                      <div>
                        <CardTitle
                          className={`text-xl text-gray-900 font-medium transition-all duration-1000 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}
                          style={{
                            transitionDelay: `${900 + index * 200}ms`,
                          }}
                        >
                          {exp.title}
                        </CardTitle>
                        <p
                          className={`text-lg font-medium text-indigo-600 transition-all duration-1000 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}
                          style={{
                            transitionDelay: `${1000 + index * 200}ms`,
                          }}
                        >
                          {exp.company}
                        </p>
                      </div>
                      <div className="flex flex-col md:items-end gap-2">
                        <Badge
                          className={`${
                            exp.type === "Internship"
                              ? "bg-blue-50 text-green-700 border border-green-200"
                              : "bg-green-50 text-green-700 border border-green-200"
                          } transition-all duration-1000 ${isLoaded ? "opacity-100 scale-100" : "opacity-0 scale-75"}`}
                          style={{
                            transitionDelay: `${1100 + index * 200}ms`,
                          }}
                        >
                          {exp.type}
                        </Badge>
                        <div
                          className={`flex items-center gap-4 text-sm text-gray-600 transition-all duration-1000 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}
                          style={{
                            transitionDelay: `${1200 + index * 200}ms`,
                          }}
                        >
                          <div className="flex items-center gap-1">
                            <Calendar className="h-4 w-4" />
                            {exp.duration}
                          </div>
                          <div className="flex items-center gap-1">
                            <MapPin className="h-4 w-4" />
                            {exp.location}
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardHeader>

                  <CardContent className="space-y-6">
                    <p
                      className={`text-gray-700 leading-relaxed transition-all duration-1000 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}
                      style={{
                        transitionDelay: `${1300 + index * 200}ms`,
                      }}
                    >
                      {exp.description}
                    </p>

                    <div
                      className={`transition-all duration-1000 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}
                      style={{
                        transitionDelay: `${1400 + index * 200}ms`,
                      }}
                    >
                      <h4 className="font-medium text-gray-900 mb-3 flex items-center gap-2">
                        <div className="w-1 h-4 bg-blue-500 rounded-full"></div>
                        Key Achievements
                      </h4>
                      <div className="bg-blue-50 rounded-2xl p-4 border border-blue-100">
                        <ul className="space-y-2">
                          {exp.achievements.map((achievement, achIndex) => (
                            <li key={achIndex} className="text-gray-700 text-sm flex items-center gap-2">
                              <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
                              {achievement}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <div
                      className={`transition-all duration-1000 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}
                      style={{
                        transitionDelay: `${1500 + index * 200}ms`,
                      }}
                    >
                      <h4 className="font-medium text-gray-900 mb-3 flex items-center gap-2">
                        <div className="w-1 h-4 bg-blue-500 rounded-full"></div>
                        Technologies Used
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {exp.tech.map((tech, techIndex) => (
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
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Certifications */}
          <section className="space-y-8">
            <h2
              className={`text-3xl font-bold text-gray-900 flex items-center gap-3 transition-all duration-1000 delay-1000 ${isLoaded ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-5"}`}
            >
              <div
                className={`w-2 h-8 bg-blue-500 rounded-full transition-all duration-1000 delay-1100 ${isLoaded ? "opacity-100 scale-100" : "opacity-0 scale-0"}`}
              ></div>
              Certifications
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {certifications.map((cert, index) => (
                <Card
                  key={index}
                  className={`bg-white shadow-sm border border-gray-200 rounded-3xl hover:shadow-lg hover:scale-105 transition-all duration-200 group ${isLoaded ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-10 scale-95"}`}
                  style={{
                    transitionDelay: isLoaded ? "0ms" : `${1200 + index * 150}ms`,
                  }}
                >
                  <CardContent className="p-6">
                    <div className="space-y-4">
                      <h3
                        className={`font-medium text-gray-900 text-lg transition-all duration-1000 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}
                        style={{
                          transitionDelay: `${1300 + index * 150}ms`,
                        }}
                      >
                        {cert.title}
                      </h3>

                      <p
                        className={`text-indigo-600 font-medium transition-all duration-1000 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}
                        style={{
                          transitionDelay: `${1400 + index * 150}ms`,
                        }}
                      >
                        {cert.issuer}
                      </p>

                      <div
                        className={`bg-blue-50 rounded-2xl p-4 border border-blue-100 transition-all duration-1000 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}
                        style={{
                          transitionDelay: `${1500 + index * 150}ms`,
                        }}
                      >
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-sm text-gray-600">Issued: {cert.date}</span>
                          <Badge className="text-xs bg-green-50 text-green-700 border border-green-200">Verified</Badge>
                        </div>
                        <p className="text-xs text-gray-500">Credential ID: {cert.credentialId}</p>
                      </div>

                      <div
                        className={`flex items-center justify-between pt-2 transition-all duration-1000 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}
                        style={{
                          transitionDelay: `${1600 + index * 150}ms`,
                        }}
                      >
                        <a
                          href={cert.link}
                          className="text-indigo-600 hover:text-indigo-700 text-sm font-medium flex items-center gap-1 transition-colors duration-200 group-hover:scale-105"
                        >
                          <ExternalLink className="w-4 h-4" />
                          View Certificate
                        </a>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Bottom Section */}
          <div
            className={`text-center py-16 transition-all duration-1000 delay-2000 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
            <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-200 max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Ready to collaborate?</h3>
              <p className="text-gray-600 mb-6">
                I'm always open to discussing new opportunities and exciting projects. Let's connect and build something
                amazing together.
              </p>
              <div className="flex gap-4 justify-center">
                <Badge className="bg-blue-50 text-indigo-700 border border-blue-200 px-4 py-2">
                  Available for opportunities
                </Badge>
                <Badge className="bg-green-50 text-green-700 border border-green-200 px-4 py-2">
                  Open to freelance
                </Badge>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
