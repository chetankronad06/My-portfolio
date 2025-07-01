"use client"

import { Card, CardContent } from "@/components/ui/card"
import { PageWrapper } from "@/components/page-wrapper"
import { useEffect, useState } from "react"
import type { ReactNode, SVGProps } from "react"

interface WrapperProps {
  children: ReactNode
}

function Wrapper({ children }: WrapperProps) {
  return (
    <div className="mx-auto container gap-4 p-10 grid grid-cols-1 mt-10">
      <div className="flex justify-center items-center flex-col mb-5">{children}</div>
    </div>
  )
}

export default function Skills() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  return (
    <PageWrapper>
      <div className="min-h-screen">
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
                Skills & Technologies
              </h1>
              <p
                className={`text-lg text-blue-500 transition-all duration-1000 delay-400 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
              >
                Explore the technologies and tools I use to deliver high-quality solutions
              </p>
            </div>
          </div>
        </div>

        <div className="relative -mt-32 px-4 lg:px-8">
          <div className="max-w-6xl mx-auto space-y-8 pt-32 mb-16">
            {/* Skills Content */}
            <Card
              className={`bg-white shadow-sm border border-gray-200 rounded-3xl transition-all duration-1000 delay-600 ${isLoaded ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-10 scale-95"}`}
            >
              <CardContent className="p-8">
                <Wrapper>
                  <section className="grid gap-8 md:gap-12">
                    <div
                      className={`text-center space-y-2 transition-all duration-1000 delay-800 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}
                    >
                      <h2 className="text-3xl font-bold  text-gray-900 flex items-center justify-center gap-3">
                        <div
                          className={`w-2 h-8 bg-blue-500 rounded-full transition-all duration-1000 delay-900 ${isLoaded ? "opacity-100 scale-100" : "opacity-0 scale-0"}`}
                        ></div>
                        Skills and Expertise
                      </h2>
                      <p className="text-gray-600 max-w-[800px] mx-auto">
                        Explore some skills I&apos;m proficient in to deliver high-quality solutions.
                      </p>
                    </div>

                    <div
                      className={`grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8 transition-all duration-1000 delay-1000 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}
                    >
                      <div
                        className={`flex flex-col items-center gap-2 p-6 bg-blue-50 rounded-2xl border border-blue-100 hover:shadow-md hover:scale-105 transition-all duration-200 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}
                        style={{ transitionDelay: isLoaded ? "0ms" : "1100ms" }}
                      >
                        <div className="p-3 bg-blue-500 rounded-2xl">
                          <CodepenIcon className="w-8 h-8 text-white" />
                        </div>
                        <div className="font-medium text-gray-900 text-center">Web Development</div>
                      </div>

                      <div
                        className={`flex flex-col items-center gap-2 p-6 bg-blue-50 rounded-2xl border border-blue-100 hover:shadow-md hover:scale-105 transition-all duration-200 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}
                        style={{ transitionDelay: isLoaded ? "0ms" : "1200ms" }}
                      >
                        <div className="p-3 bg-blue-500 rounded-2xl">
                          <WebhookIcon className="w-8 h-8 text-white" />
                        </div>
                        <div className="font-medium text-gray-900 text-center">REST API</div>
                      </div>

                      <div
                        className={`flex flex-col items-center gap-2 p-6 bg-blue-50 rounded-2xl border border-blue-100 hover:shadow-md hover:scale-105 transition-all duration-200 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}
                        style={{ transitionDelay: isLoaded ? "0ms" : "1300ms" }}
                      >
                        <div className="p-3 bg-blue-500 rounded-2xl">
                          <ActivityIcon className="w-8 h-8 text-white" />
                        </div>
                        <div className="font-medium text-gray-900 text-center">Machine Learning</div>
                      </div>

                      <div
                        className={`flex flex-col items-center gap-2 p-6 bg-blue-50 rounded-2xl border border-blue-100 hover:shadow-md hover:scale-105 transition-all duration-200 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}
                        style={{ transitionDelay: isLoaded ? "0ms" : "1400ms" }}
                      >
                        <div className="p-3 bg-blue-500 rounded-2xl">
                          <BlockchainIcon className="w-8 h-8 text-white" />
                        </div>
                        <div className="font-medium text-gray-900 text-center">Blockchain</div>
                      </div>
                    </div>
                  </section>
                </Wrapper>

                <div className="mx-auto container gap-4 p-10 grid grid-cols-1 md:grid-cols-2 mt-10 mb-24">
                  {/* Languages & Frameworks */}
                  <div
                    className={`flex justify-center items-center flex-col mb-5 transition-all duration-1000 delay-1500 ${isLoaded ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"}`}
                  >
                    <h2 className="text-2xl md:text-xl font-bold mb-6 text-gray-900 flex items-center gap-3">
                      <div
                        className={`w-2 h-6 bg-blue-500 rounded-full transition-all duration-1000 delay-1600 ${isLoaded ? "opacity-100 scale-100" : "opacity-0 scale-0"}`}
                      ></div>
                      <span className="block md:hidden">Lang & Framework</span>
                      <span className="hidden md:block">Language & Framework</span>
                    </h2>
                    <div className="bg-blue-50 rounded-2xl p-6 border border-blue-100 hover:shadow-md hover:scale-105 hover:transition-all hover:duration-200 transition-all duration-300">
                      <p className="text-gray-700 text-center leading-relaxed">
                        <span className="text-gray-900 font-medium">HTML</span> |{" "}
                        <span className="text-gray-900 font-medium">CSS</span> |{" "}
                        <span className="text-gray-700 font-medium">Python</span> |{" "}
                        <span className="text-gray-900 font-bold">Java</span> |{" "}
                        <span className="text-gray-700 font-medium">C Language</span> |{" "}
                        <span className="text-gray-900 font-bold">Javascript</span> |{" "}
                        <span className="text-gray-900 font-bold">Typescript</span> |{" "}
                        <span className="text-gray-900 font-bold">ReactJs</span> |{" "}
                        <span className="text-gray-900 font-bold">NextJS</span> |{" "}
                        <span className="text-gray-900 font-bold">TailwindCSS</span> |{" "}
                        <span className="text-gray-700 font-medium">Bootstrap</span> |{" "}
                        <span className="text-gray-900 font-bold">Shadcn UI</span> |{" "}
                        <span className="text-gray-700 font-medium">NodeJS</span> |{" "}
                        <span className="text-gray-700 font-medium">ExpressJS</span> |{" "}
                        <span className="text-gray-700 font-medium">Radix UI</span> |{" "}
                        <span className="text-gray-700 font-medium">Framer Motion</span> |{" "}
                        <span className="text-gray-900 font-bold">MySQL</span> |{" "}
                        <span className="text-gray-900 font-bold">Supabase</span> |{" "}
                        <span className="text-gray-700 font-medium">MongoDB</span> |{" "}
                        <span className="text-gray-900 font-bold">Prisma ORM</span> |{" "}
                        <span className="text-gray-900 font-bold">Clerk Auth</span> |{" "}
                        <span className="text-gray-700 font-medium">Websockets</span> |{" "}
                        <span className="text-gray-700 font-medium">RESTful APIs</span> |{" "}
                        <span className="text-gray-700 font-medium">Vercel</span> 
                      </p>
                    </div>
                  </div>

                  {/* Tools */}
                  <div
                    className={`flex justify-start items-center flex-col mb-5 transition-all duration-1000 delay-1700 ${isLoaded ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"}`}
                  >
                    <h2 className="text-2xl md:text-xl font-bold mb-6 text-gray-900 flex items-center gap-3">
                      <div
                        className={`w-2 h-6 bg-blue-500 rounded-full transition-all duration-1000 delay-1800 ${isLoaded ? "opacity-100 scale-100" : "opacity-0 scale-0"}`}
                      ></div>
                      Tools
                    </h2>
                    <div className="bg-blue-50 rounded-2xl p-6 border border-blue-100 hover:shadow-md hover:scale-105 hover:transition-all hover:duration-200 transition-all duration-300">
                      <p className="text-gray-700 text-center leading-relaxed">
                        <span className="text-gray-900 font-medium">Visual Studio Code</span> |{" "}
                        <span className="text-gray-900 font-bold">Git</span> |{" "}
                        <span className="text-gray-900 font-bold">Github</span> |{" "}
                        <span className="text-gray-900 font-bold">Figma</span> |{" "}
                        <span className="text-gray-900 font-bold">Postman</span> |{" "}
                        <span className="text-gray-900 font-bold">Clerk</span> |{" "}
                        <span className="text-gray-900 font-bold">Socket.io</span> |{" "}
                        <span className="text-gray-700 font-medium">ChatGPT</span> |{" "}
                        <span className="text-gray-700 font-medium">keil</span> |{" "}
                        <span className="text-gray-700 font-medium">LT Spice</span> |{" "}
                        <span className="text-gray-700 font-medium">Autocad</span> |{" "}
                        <span className="text-gray-700 font-medium">Canva</span>
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </PageWrapper>
  )
}

function ActivityIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2" />
    </svg>
  )
}

function CodepenIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polygon points="12 2 22 8.5 22 15.5 12 22 2 15.5 2 8.5 12 2" />
      <line x1="12" x2="12" y1="22" y2="15.5" />
      <polyline points="22 8.5 12 15.5 2 8.5" />
      <polyline points="2 15.5 12 8.5 22 15.5" />
      <line x1="12" x2="12" y1="2" y2="8.5" />
    </svg>
  )
}

function WebhookIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 16.98h-5.99c-1.1 0-1.95.94-2.48 1.9A4 4 0 0 1 2 17c.01-.7.2-1.4.57-2" />
      <path d="m6 17 3.13-5.78c.53-.97.1-2.18-.5-3.1a4 4 0 1 1 6.89-4.06" />
      <path d="m12 6 3.13 5.73C15.66 12.7 16.9 13 18 13a4 4 0 0 1 0 8" />
    </svg>
  )
}

function BlockchainIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="3" y="3" width="6" height="6" rx="1" />
      <rect x="15" y="3" width="6" height="6" rx="1" />
      <rect x="3" y="15" width="6" height="6" rx="1" />
      <rect x="15" y="15" width="6" height="6" rx="1" />
      <path d="M9 6h6" />
      <path d="M6 9v6" />
      <path d="M18 9v6" />
      <path d="M9 18h6" />
    </svg>
  )
}
