"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { PageWrapper } from "@/components/page-wrapper"
import type { ReactNode, SVGProps } from "react"

interface WrapperProps {
  children: ReactNode
}

function Wrapper({ children }: WrapperProps) {
  return (
    <div className="mx-auto container gap-4 p-10 grid grid-cols-1 mt-10">
      <motion.div
        className="flex justify-center items-center flex-col mb-5"
        initial={{
          opacity: 0,
          x: -200,
        }}
        whileInView={{
          opacity: 1,
          x: 0,
        }}
        transition={{
          delay: 0.5,
          type: "spring",
        }}
      >
        {children}
      </motion.div>
    </div>
  )
}

function Stack() {
  return (
    <motion.div
      className="flex justify-center items-center flex-col mb-5"
      initial={{
        opacity: 0,
        x: -200,
      }}
      whileInView={{
        opacity: 1,
        x: 0,
      }}
      transition={{
        delay: 0.5,
        type: "spring",
      }}
    >
      <h2 className="text-2xl md:text-xl font-normal mb-3 md:tracking-[.3rem] lg:tracking-[.5rem] uppercase text-google-blue-500 font-inter">
        Language & Framework
      </h2>
      <p className="text-google-gray-500 text-center tracking-widest md:px-5 font-roboto">
        <span className="text-google-gray-900 font-bold">HTML</span> |{" "}
        <span className="text-google-gray-900 font-bold">CSS</span> |{" "}
        <span className="text-google-gray-900 font-bold">Javascript</span> |{" "}
        <span className="text-google-gray-900 font-bold">Typescript</span> |{" "}
        <span className="text-google-gray-900 font-bold">React</span> |{" "}
        <span className="text-google-gray-900 font-bold">NextJS</span> |{" "}
        <span className="text-google-gray-900 font-bold">TailwindCSS</span> |{" "}
        <span className="text-google-gray-900 font-bold">Bootstrap</span> |{" "}
        <span className="text-google-gray-700 font-medium">NodeJS</span> |{" "}
        <span className="text-google-gray-700 font-medium">ExpressJS</span> |{" "}
        <span className="text-google-gray-900 font-bold">MySQL</span> |{" "}
        <span className="text-google-gray-900 font-bold">PostgreSQL</span> |{" "}
        <span className="text-google-gray-700 font-medium">MongoDB</span> |{" "}
        <span className="text-google-gray-700 font-medium">Python</span>
      </p>
    </motion.div>
  )
}

function Tools() {
  return (
    <motion.div
      className="flex justify-start items-center flex-col mb-5"
      initial={{
        opacity: 0,
        x: 200,
      }}
      whileInView={{
        opacity: 1,
        x: 0,
      }}
      transition={{
        delay: 0.6,
        type: "spring",
      }}
    >
      <h2 className="text-2xl md:text-xl font-normal mb-3 md:tracking-[.3rem] lg:tracking-[.5rem] uppercase text-google-blue-500 font-inter">
        Tools
      </h2>
      <p className="text-google-gray-500 text-center tracking-wider md:px-5 font-roboto">
        <span className="text-google-gray-900 font-bold">Visual Studio Code</span> |{" "}
        <span className="text-google-gray-900 font-bold">Git</span> |{" "}
        <span className="text-google-gray-900 font-bold">Github</span> |{" "}
        <span className="text-google-gray-700 font-medium">Adobe Premiere</span>
      </p>
    </motion.div>
  )
}

export default function Skills() {
  return (
    <PageWrapper>
      <div className="min-h-screen p-4 lg:p-8">
        <div className="max-w-6xl mx-auto space-y-8">
          {/* Header */}
          <div className="text-center space-y-4">
            <h1 className="text-4xl lg:text-5xl font-normal text-google-gray-900 font-inter">Skills & Technologies</h1>
            <p className="text-lg text-google-gray-600 font-roboto">
              Explore the technologies and tools I use to deliver high-quality solutions
            </p>
          </div>

          {/* Skills Content */}
          <Card className="bg-white rounded-xl">
            <CardContent className="p-8">
              <Wrapper>
                <section className="grid gap-8 md:gap-12">
                  <div className="text-center space-y-2">
                    <h2 className="text-3xl font-bold mt-3 text-google-blue-600  font-inter">Skills and Expertise</h2>
                    <p className="text-google-gray-600 max-w-[800px] mx-auto font-roboto">
                      Explore some skills I&apos;m proficient in to deliver high-quality solutions.
                    </p>
                  </div>
                  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8">
                    <div className="flex flex-col items-center gap-2">
                      <CodepenIcon className="w-12 h-12 text-google-gray-700" />
                      <div className="font-medium text-google-gray-900 font-roboto">Web Development</div>
                    </div>
                    <div className="flex flex-col items-center gap-2">
                      <WebhookIcon className="w-12 h-12 text-google-gray-700" />
                      <div className="font-medium text-google-gray-900 font-roboto">REST API</div>
                    </div>
                    <div className="flex flex-col items-center gap-2">
                      <ActivityIcon className="w-12 h-12 text-google-gray-700" />
                      <div className="font-medium text-google-gray-900 font-roboto">Machine Learning</div>
                    </div>
                    <div className="flex flex-col items-center gap-2">
                      <BlockchainIcon className="w-12 h-12 text-google-gray-700" />
                      <div className="font-medium text-google-gray-900 font-roboto">Blockchain</div>
                    </div>
                  </div>
                </section>
              </Wrapper>

              <div className="mx-auto container gap-4 p-10 grid grid-cols-1 md:grid-cols-2 mt-10 mb-24">
                <Stack />
                <Tools />
              </div>
            </CardContent>
          </Card>
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
