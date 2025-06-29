"use client"

import { Download, Mail } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { PageWrapper } from "@/components/page-wrapper"
import { motion } from "framer-motion"

export default function HomePage() {
  return (
    <PageWrapper>
      <div className="min-h-screen flex items-center justify-center p-6 lg:p-8">
        <div className="max-w-7xl w-full">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left Content */}
            <motion.div
              className="space-y-8"
              initial={{ x: -100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ type: "spring", stiffness: 80, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <motion.div
                className="space-y-6"
                initial={{ x: -80, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.2, type: "spring" }}
                viewport={{ once: true }}
              >
                <p className="text-sm tracking-widest uppercase text-google-blue-600 font-medium">
                  CHETAN KALAKAPPA RONAD
                </p>

                <motion.h1
                  className="text-4xl md:text-5xl lg:text-6xl font-normal leading-tight text-google-gray-900"
                  initial={{ x: -100, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.3, type: "spring" }}
                >
                  Full Stack <br />
                  <span className="text-google-blue-600">Developer</span>
                </motion.h1>

                <motion.p
                  className="text-base text-google-gray-700 leading-relaxed max-w-lg"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4, duration: 0.6 }}
                >
                  A junior fullstack developer who currently focused on Web Development. Other than that, I also
                  interested in UX/UI Design, Blockchain and AI and Machine learning. I love to learn new things and
                  always open to new opportunities.
                </motion.p>
              </motion.div>

              <motion.div
                className="flex flex-col sm:flex-row gap-4"
                initial={{ y: 40, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5, type: "spring" }}
              >
                <Link href="/resume" className="btn-google-primary">
                  <Download className="mr-2 h-5 w-5" />
                  Download CV
                </Link>

                <Link href="/contact" className="btn-google-secondary">
                  <Mail className="mr-2 h-5 w-5" />
                  Contact Me
                </Link>
              </motion.div>
            </motion.div>

            {/* Right Content - Profile Image */}
            <motion.div
              className="flex justify-center lg:justify-end"
              initial={{ x: 100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.6, type: "spring" }}
              viewport={{ once: true }}
            >
              <div className="relative flex items-center justify-center">
                {/* Outer oval background */}
                <div className="bg-[#ededed] rounded-full w-[400px] h-[450px] flex items-center justify-center">
                  {/* Profile image */}
                  <div className="overflow-hidden rounded-full w-[350px] h-[400px] flex items-center justify-center">
                    <Image
                      src="/profile.jpg"
                      alt="Chetan Kalakappa Ronad"
                      width={350}
                      height={400}
                      className="object-cover w-full h-full"
                      priority
                    />
                  </div>
                </div>
                {/* Decorative circles */}
                <div className="absolute -top-4 -right-4 w-6 h-6 bg-google-blue-500 rounded-full"></div>
                <div className="absolute -bottom-6 -left-6 w-8 h-8 bg-google-blue-600 rounded-full"></div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </PageWrapper>
  )
}
