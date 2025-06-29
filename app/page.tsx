import { Download, Mail } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { PageWrapper } from "@/components/page-wrapper"

// Wrap the entire return content with PageWrapper
export default function HomePage() {
  return (
    <PageWrapper>
      <div className="min-h-screen flex items-center justify-center p-6 lg:p-8">
        <div className="max-w-7xl w-full">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left Content */}
            <div className="space-y-8 animate-fade-in">
              <div className="space-y-6">
                <p className="text-sm tracking-widest uppercase text-google-blue-600 font-medium">
                  CHETAN KALAKAPPA RONAD
                </p>

                <h1 className="text-4xl md:text-5xl lg:text-6xl font-normal leading-tight text-google-gray-900">
                  Full Stack
                  <br />
                  <span className="text-google-blue-600">Developer</span>
                </h1>

                <p className="text-base text-google-gray-700 leading-relaxed max-w-lg">
                  A junior fullstack developer who currently focused on Web Development. Other than that, I also
                  interested in UX/UI Design, Blockchain and AI and Machine learning. I love to learn new things and
                  always open to new opportunities.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/resume" className="btn-google-primary">
                  <Download className="mr-2 h-5 w-5" />
                  Download CV
                </Link>

                <Link href="/contact" className="btn-google-secondary">
                  <Mail className="mr-2 h-5 w-5" />
                  Contact Me
                </Link>
              </div>
            </div>

            {/* Right Content - Profile Image */}
            <div className="flex justify-center lg:justify-end animate-scale-in">
              <div className="relative">
                <div className="w-80 h-80 lg:w-96 lg:h-96 rounded-full bg-gradient-to-br from-google-gray-100 to-google-gray-200 overflow-hidden">
                  <Image
                    src="/profile.jpg"
                    alt="Chetan Kalakappa Ronad"
                    width={400}
                    height={400}
                    className="w-full h-full object-cover"
                    priority
                  />
                </div>
                {/* Decorative elements */}
                <div className="absolute -top-4 -right-4 w-6 h-6 bg-google-blue-500 rounded-full"></div>
                <div className="absolute -bottom-6 -left-6 w-8 h-8 bg-google-blue-600 rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageWrapper>
  )
}
