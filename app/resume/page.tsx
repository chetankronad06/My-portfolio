import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Download, Eye, Mail, Phone, MapPin, Globe, Github, Linkedin } from "lucide-react"
import { PageWrapper } from "@/components/page-wrapper"

export default function ResumePage() {
  return (
    <PageWrapper>
      <div className="min-h-screen p-4 lg:p-8">
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Header */}
          <div className="text-center space-y-4">
            <h1 className="text-4xl lg:text-5xl font-normal text-google-gray-900 font-inter">Resume</h1>
            <p className="text-lg text-google-gray-600 font-roboto">Download my resume or view it online</p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-google-blue-500 hover:bg-google-blue-600">
                <Download className="mr-2 h-5 w-5" />
                Download PDF
              </Button>
              <Button size="lg" variant="outline">
                <Eye className="mr-2 h-5 w-5" />
                View Online
              </Button>
            </div>
          </div>

          {/* Resume Preview */}
          <Card className="bg-white border border-google-gray-200 rounded-xl">
            <CardContent className="p-8 space-y-8">
              {/* Header Section */}
              <div className="text-center border-b border-google-gray-200 pb-6">
                <h1 className="text-3xl font-bold text-google-gray-900 font-inter mb-2">CHETAN KALAKAPPA RONAD</h1>
                <p className="text-xl text-google-gray-600 font-roboto mb-4">Full Stack Developer</p>

                <div className="flex flex-wrap justify-center gap-4 text-sm text-google-gray-600 font-roboto">
                  <div className="flex items-center gap-1">
                    <Mail className="h-4 w-4" />
                    chetan@example.com
                  </div>
                  <div className="flex items-center gap-1">
                    <Phone className="h-4 w-4" />
                    +91 9876543210
                  </div>
                  <div className="flex items-center gap-1">
                    <MapPin className="h-4 w-4" />
                    Bangalore, India
                  </div>
                  <div className="flex items-center gap-1">
                    <Globe className="h-4 w-4" />
                    portfolio.dev
                  </div>
                </div>

                <div className="flex justify-center gap-4 mt-4">
                  <div className="flex items-center gap-1 text-sm text-google-gray-600 font-roboto">
                    <Github className="h-4 w-4" />
                    github.com/chetan
                  </div>
                  <div className="flex items-center gap-1 text-sm text-google-gray-600 font-roboto">
                    <Linkedin className="h-4 w-4" />
                    linkedin.com/in/chetan
                  </div>
                </div>
              </div>

              {/* Professional Summary */}
              <section>
                <h2 className="text-xl font-bold text-google-gray-900 font-inter mb-3 border-b-2 border-google-blue-500 pb-1">
                  PROFESSIONAL SUMMARY
                </h2>
                <p className="text-google-gray-700 font-roboto leading-relaxed">
                  Passionate Full Stack Developer with expertise in modern web technologies including React, Node.js,
                  and Python. Experienced in building scalable applications, implementing AI/ML solutions, and working
                  with blockchain technologies. Strong problem-solving skills with a focus on creating user-centric
                  solutions and contributing to open-source projects.
                </p>
              </section>

              {/* Technical Skills */}
              <section>
                <h2 className="text-xl font-bold text-google-gray-900 font-inter mb-4 border-b-2 border-google-blue-500 pb-1">
                  TECHNICAL SKILLS
                </h2>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div className="bg-google-gray-50 rounded-lg p-4">
                      <div className="flex items-center space-x-2 mb-3">
                        <div className="w-3 h-3 bg-google-blue-500 rounded-full"></div>
                        <h3 className="font-semibold text-google-gray-900 font-inter">Languages</h3>
                      </div>
                      <div className="grid grid-cols-2 gap-2">
                        {["JavaScript", "TypeScript", "Python", "C++", "Java"].map((skill) => (
                          <div key={skill} className="flex items-center space-x-2">
                            <div className="w-2 h-2 bg-google-blue-400 rounded-full"></div>
                            <Badge variant="outline" className="text-xs border-google-gray-300 text-google-gray-700">
                              {skill}
                            </Badge>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="bg-google-gray-50 rounded-lg p-4">
                      <div className="flex items-center space-x-2 mb-3">
                        <div className="w-3 h-3 bg-google-green-500 rounded-full"></div>
                        <h3 className="font-semibold text-google-gray-900 font-inter">Frontend</h3>
                      </div>
                      <div className="grid grid-cols-2 gap-2">
                        {["React", "Next.js", "Vue.js", "Tailwind CSS", "HTML/CSS"].map((skill) => (
                          <div key={skill} className="flex items-center space-x-2">
                            <div className="w-2 h-2 bg-google-green-400 rounded-full"></div>
                            <Badge variant="outline" className="text-xs border-google-gray-300 text-google-gray-700">
                              {skill}
                            </Badge>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="bg-google-gray-50 rounded-lg p-4">
                      <div className="flex items-center space-x-2 mb-3">
                        <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                        <h3 className="font-semibold text-google-gray-900 font-inter">Backend</h3>
                      </div>
                      <div className="grid grid-cols-2 gap-2">
                        {["Node.js", "Express.js", "MongoDB", "PostgreSQL", "REST APIs"].map((skill) => (
                          <div key={skill} className="flex items-center space-x-2">
                            <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                            <Badge variant="outline" className="text-xs border-google-gray-300 text-google-gray-700">
                              {skill}
                            </Badge>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="bg-google-gray-50 rounded-lg p-4">
                      <div className="flex items-center space-x-2 mb-3">
                        <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
                        <h3 className="font-semibold text-google-gray-900 font-inter">Tools & Others</h3>
                      </div>
                      <div className="grid grid-cols-2 gap-2">
                        {["Git", "Docker", "AWS", "Vercel", "VS Code"].map((skill) => (
                          <div key={skill} className="flex items-center space-x-2">
                            <div className="w-2 h-2 bg-orange-400 rounded-full"></div>
                            <Badge variant="outline" className="text-xs border-google-gray-300 text-google-gray-700">
                              {skill}
                            </Badge>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* Experience */}
              <section>
                <h2 className="text-xl font-bold text-google-gray-900 font-inter mb-3 border-b-2 border-google-blue-500 pb-1">
                  EXPERIENCE
                </h2>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <h3 className="font-semibold text-google-gray-900 font-inter">Full Stack Developer Intern</h3>
                        <p className="text-google-blue-600 font-roboto">TechCorp Solutions</p>
                      </div>
                      <div className="text-right text-sm text-google-gray-600 font-roboto">
                        <p>Jun 2024 - Present</p>
                        <p>Remote</p>
                      </div>
                    </div>
                    <ul className="text-sm text-google-gray-700 font-roboto space-y-1 ml-4">
                      <li>• Developed scalable web applications using React and Node.js</li>
                      <li>• Improved application performance by 30% through optimization</li>
                      <li>• Collaborated with senior developers on 5+ major feature releases</li>
                    </ul>
                  </div>

                  <div>
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <h3 className="font-semibold text-google-gray-900 font-inter">Frontend Developer</h3>
                        <p className="text-google-blue-600 font-roboto">StartupXYZ (Freelance)</p>
                      </div>
                      <div className="text-right text-sm text-google-gray-600 font-roboto">
                        <p>Jan 2024 - May 2024</p>
                        <p>Bangalore, India</p>
                      </div>
                    </div>
                    <ul className="text-sm text-google-gray-700 font-roboto space-y-1 ml-4">
                      <li>• Built responsive UI components for fintech dashboard</li>
                      <li>• Reduced page load time by 40% through optimization</li>
                      <li>• Implemented accessibility standards and best practices</li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* Education */}
              <section>
                <h2 className="text-xl font-bold text-google-gray-900 font-inter mb-3 border-b-2 border-google-blue-500 pb-1">
                  EDUCATION
                </h2>
                <div>
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h3 className="font-semibold text-google-gray-900 font-inter">
                        Bachelor of Technology in Computer Science
                      </h3>
                      <p className="text-google-blue-600 font-roboto">XYZ University</p>
                    </div>
                    <div className="text-right text-sm text-google-gray-600 font-roboto">
                      <p>2021 - 2025</p>
                      <p>CGPA: 8.5/10</p>
                    </div>
                  </div>
                  <p className="text-sm text-google-gray-700 font-roboto ml-4">
                    Relevant Coursework: Data Structures, Algorithms, Database Management, Software Engineering, Machine
                    Learning
                  </p>
                </div>
              </section>

              {/* Projects */}
              <section>
                <h2 className="text-xl font-bold text-google-gray-900 font-inter mb-3 border-b-2 border-google-blue-500 pb-1">
                  KEY PROJECTS
                </h2>
                <div className="space-y-3">
                  <div>
                    <h3 className="font-semibold text-google-gray-900 font-inter">E-Commerce Platform</h3>
                    <p className="text-sm text-google-gray-700 font-roboto">
                      Full-stack e-commerce application with user authentication, payment integration, and admin
                      dashboard.
                      <span className="text-google-blue-600 ml-2">React, Node.js, MongoDB, Stripe</span>
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-google-gray-900 font-inter">AI Image Recognition App</h3>
                    <p className="text-sm text-google-gray-700 font-roboto">
                      Real-time object detection application using YOLOv8 with web interface for easy interaction.
                      <span className="text-google-blue-600 ml-2">Python, YOLOv8, Flask, OpenCV</span>
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-google-gray-900 font-inter">Blockchain Voting System</h3>
                    <p className="text-sm text-google-gray-700 font-roboto">
                      Decentralized voting application ensuring transparency and security using smart contracts.
                      <span className="text-google-blue-600 ml-2">Solidity, Web3.js, React, Ethereum</span>
                    </p>
                  </div>
                </div>
              </section>

              {/* Achievements */}
              <section>
                <h2 className="text-xl font-bold text-google-gray-900 font-inter mb-3 border-b-2 border-google-blue-500 pb-1">
                  ACHIEVEMENTS & CERTIFICATIONS
                </h2>
                <div className="space-y-2 text-sm text-google-gray-700 font-roboto">
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
          <Card className="bg-white border border-google-gray-200 rounded-xl">
            <CardContent className="p-6 text-center">
              <h2 className="text-xl font-medium text-google-gray-900 font-inter mb-4">Ready to work together?</h2>
              <p className="text-google-gray-600 font-roboto mb-6">
                Download my resume or get in touch to discuss opportunities.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-google-blue-500 hover:bg-google-blue-600">
                  <Download className="mr-2 h-5 w-5" />
                  Download Resume (PDF)
                </Button>
                <Button size="lg" variant="outline" asChild>
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
    </PageWrapper>
  )
}
