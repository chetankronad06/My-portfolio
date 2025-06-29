import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { MapPin, Calendar, Heart, Code, Lightbulb, Users, Palette, Zap, Globe } from "lucide-react"
import Image from "next/image"
import { PageWrapper } from "@/components/page-wrapper"

export default function AboutPage() {
  return (
    <PageWrapper>
      <div className="min-h-screen bg-white">
        <div className="p-4 lg:p-8">
          <div className="max-w-4xl mx-auto space-y-8">
            {/* Header */}
            <div className="text-center space-y-4">
              <h1 className="text-4xl lg:text-5xl font-normal text-google-gray-900 font-inter">About Me</h1>
              <p className="text-lg text-google-gray-600 font-roboto">
                Get to know more about who I am and what drives me
              </p>
            </div>

            {/* Profile Image */}
            <div className="flex justify-center">
              <div className="relative">
                <div className="w-40 h-40 lg:w-48 lg:h-48 rounded-full bg-gradient-to-br from-google-gray-100 to-google-gray-200 overflow-hidden shadow-lg ring-4 ring-white">
                  <Image
                    src="/profile.jpg"
                    alt="Chetan Kalakappa Ronad"
                    width={192}
                    height={192}
                    className="w-full h-full object-cover"
                  />
                </div>
                {/* Decorative elements */}
                <div className="absolute -top-2 -right-2 w-6 h-6 bg-google-blue-500 rounded-full animate-pulse"></div>
                <div className="absolute -bottom-4 -left-4 w-8 h-8 bg-google-green-500 rounded-full opacity-80"></div>
                <div className="absolute top-1/2 -right-6 w-4 h-4 bg-purple-500 rounded-full opacity-60"></div>
              </div>
            </div>

            {/* Main Content */}
            <div className="grid lg:grid-cols-3 gap-8">
              {/* Personal Info */}
              <div className="lg:col-span-2 space-y-6">
                <Card className="bg-white border border-google-gray-200 rounded-xl">
                  <CardContent className="p-6">
                    <h2 className="text-2xl font-medium mb-4 text-google-gray-900 font-inter">Who I Am</h2>
                    <div className="space-y-4 text-google-gray-700 font-roboto leading-relaxed">
                      <p>
                        Hello! I&#39;m Chetan Kalakappa Ronad, a passionate full-stack developer with a keen interest in
                        creating innovative web solutions. I specialize in modern web technologies and have a strong
                        foundation in both frontend and backend development.
                      </p>
                      <p>
                        My journey in tech started with curiosity about how websites work, which led me to dive deep
                        into programming. I love the challenge of turning complex problems into simple, beautiful, and
                        intuitive solutions.
                      </p>
                      <p>
                        When I&#39;m not coding, you&#39;ll find me exploring new technologies, contributing to open-source
                        projects, or learning about the latest trends in AI and blockchain technology.
                      </p>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-white border border-google-gray-200 rounded-xl">
                  <CardContent className="p-6">
                    <h2 className="text-2xl font-medium mb-4 text-google-gray-900 font-inter">
                      What I&#39;m Currently Working On
                    </h2>
                    <div className="space-y-4">
                      <div className="flex items-start space-x-3">
                        <Code className="h-5 w-5 text-google-blue-500 mt-1" />
                        <div>
                          <h3 className="font-medium text-google-gray-900 font-inter">Full-Stack Web Applications</h3>
                          <p className="text-sm text-google-gray-600 font-roboto">
                            Building scalable web applications using React, Node.js, and modern databases
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3">
                        <Lightbulb className="h-5 w-5 text-google-green-500 mt-1" />
                        <div>
                          <h3 className="font-medium text-google-gray-900 font-inter">AI/ML Projects</h3>
                          <p className="text-sm text-google-gray-600 font-roboto">
                            Exploring machine learning with Python, focusing on computer vision and NLP
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3">
                        <Users className="h-5 w-5 text-purple-500 mt-1" />
                        <div>
                          <h3 className="font-medium text-google-gray-900 font-inter">Open Source Contributions</h3>
                          <p className="text-sm text-google-gray-600 font-roboto">
                            Contributing to various open-source projects and maintaining my own repositories
                          </p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Additional Skills & Interests Section */}
                <Card className="bg-white border border-google-gray-200 rounded-xl">
                  <CardContent className="p-6">
                    <h2 className="text-2xl font-medium mb-6 text-google-gray-900 font-inter">
                      Additional Skills & Interests
                    </h2>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-4">
                        <div className="border-l-4 border-google-blue-500 pl-4">
                          <div className="flex items-center space-x-2 mb-3">
                            <Palette className="h-5 w-5 text-google-blue-500" />
                            <h3 className="font-medium text-google-gray-900 font-inter">Design</h3>
                          </div>
                          <div className="space-y-2">
                            <div className="flex flex-wrap gap-2">
                              <Badge
                                variant="outline"
                                className="border-google-gray-300 text-google-gray-700 font-roboto text-xs"
                              >
                                Figma
                              </Badge>
                              <Badge
                                variant="outline"
                                className="border-google-gray-300 text-google-gray-700 font-roboto text-xs"
                              >
                                Adobe XD
                              </Badge>
                            </div>
                            <div className="flex flex-wrap gap-2">
                              <Badge
                                variant="outline"
                                className="border-google-gray-300 text-google-gray-700 font-roboto text-xs"
                              >
                                UI/UX Design
                              </Badge>
                              <Badge
                                variant="outline"
                                className="border-google-gray-300 text-google-gray-700 font-roboto text-xs"
                              >
                                Responsive Design
                              </Badge>
                            </div>
                          </div>
                        </div>

                        <div className="border-l-4 border-purple-500 pl-4">
                          <div className="flex items-center space-x-2 mb-3">
                            <Zap className="h-5 w-5 text-purple-500" />
                            <h3 className="font-medium text-google-gray-900 font-inter">Blockchain</h3>
                          </div>
                          <div className="space-y-2">
                            <div className="flex flex-wrap gap-2">
                              <Badge
                                variant="outline"
                                className="border-google-gray-300 text-google-gray-700 font-roboto text-xs"
                              >
                                Solidity
                              </Badge>
                              <Badge
                                variant="outline"
                                className="border-google-gray-300 text-google-gray-700 font-roboto text-xs"
                              >
                                Web3.js
                              </Badge>
                            </div>
                            <div className="flex flex-wrap gap-2">
                              <Badge
                                variant="outline"
                                className="border-google-gray-300 text-google-gray-700 font-roboto text-xs"
                              >
                                Smart Contracts
                              </Badge>
                              <Badge
                                variant="outline"
                                className="border-google-gray-300 text-google-gray-700 font-roboto text-xs"
                              >
                                DeFi
                              </Badge>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="space-y-4">
                        <div className="border-l-4 border-google-green-500 pl-4">
                          <div className="flex items-center space-x-2 mb-3">
                            <Globe className="h-5 w-5 text-google-green-500" />
                            <h3 className="font-medium text-google-gray-900 font-inter">Soft Skills</h3>
                          </div>
                          <div className="space-y-2">
                            <div className="flex flex-wrap gap-2">
                              <Badge
                                variant="outline"
                                className="border-google-gray-300 text-google-gray-700 font-roboto text-xs"
                              >
                                Problem Solving
                              </Badge>
                              <Badge
                                variant="outline"
                                className="border-google-gray-300 text-google-gray-700 font-roboto text-xs"
                              >
                                Team Collaboration
                              </Badge>
                            </div>
                            <div className="flex flex-wrap gap-2">
                              <Badge
                                variant="outline"
                                className="border-google-gray-300 text-google-gray-700 font-roboto text-xs"
                              >
                                Communication
                              </Badge>
                              <Badge
                                variant="outline"
                                className="border-google-gray-300 text-google-gray-700 font-roboto text-xs"
                              >
                                Leadership
                              </Badge>
                            </div>
                          </div>
                        </div>

                        <div className="bg-google-gray-50 rounded-lg p-4">
                          <h4 className="font-medium text-google-gray-900 font-inter mb-2 text-sm">Learning Focus</h4>
                          <ul className="text-xs text-google-gray-600 font-roboto space-y-1">
                            <li>• Advanced React Patterns</li>
                            <li>• Cloud Architecture (AWS/GCP)</li>
                            <li>• DevOps & CI/CD</li>
                            <li>• System Design</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Sidebar */}
              <div className="space-y-6">
                <Card className="bg-white border border-google-gray-200 rounded-xl">
                  <CardContent className="p-6">
                    <h3 className="text-lg font-medium mb-4 text-google-gray-900 font-inter">Quick Facts</h3>
                    <div className="space-y-3">
                      <div className="flex items-center space-x-2">
                        <MapPin className="h-4 w-4 text-google-gray-600" />
                        <span className="text-sm text-google-gray-700 font-roboto">Based in India</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Calendar className="h-4 w-4 text-google-gray-600" />
                        <span className="text-sm text-google-gray-700 font-roboto">Available for opportunities</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Heart className="h-4 w-4 text-red-500" />
                        <span className="text-sm text-google-gray-700 font-roboto">Loves problem solving</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-white border border-google-gray-200 rounded-xl">
                  <CardContent className="p-6">
                    <h3 className="text-lg font-medium mb-4 text-google-gray-900 font-inter">Interests</h3>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="secondary" className="bg-google-gray-100 text-google-gray-800 font-roboto">
                        Web Development
                      </Badge>
                      <Badge variant="secondary" className="bg-google-gray-100 text-google-gray-800 font-roboto">
                        AI/ML
                      </Badge>
                      <Badge variant="secondary" className="bg-google-gray-100 text-google-gray-800 font-roboto">
                        Blockchain
                      </Badge>
                      <Badge variant="secondary" className="bg-google-gray-100 text-google-gray-800 font-roboto">
                        UX/UI Design
                      </Badge>
                      <Badge variant="secondary" className="bg-google-gray-100 text-google-gray-800 font-roboto">
                        Open Source
                      </Badge>
                      <Badge variant="secondary" className="bg-google-gray-100 text-google-gray-800 font-roboto">
                        Cloud Computing
                      </Badge>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-white border border-google-gray-200 rounded-xl">
                  <CardContent className="p-6">
                    <h3 className="text-lg font-medium mb-4 text-google-gray-900 font-inter">Goals</h3>
                    <ul className="space-y-2 text-sm text-google-gray-700 font-roboto">
                      <li>• Master advanced React patterns</li>
                      <li>• Contribute to major open-source projects</li>
                      <li>• Build impactful AI-powered applications</li>
                      <li>• Mentor aspiring developers</li>
                    </ul>
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
