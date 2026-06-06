import type { NextConfig } from "next"

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
  redirects: async () => [
    { source: "/about", destination: "/#about", permanent: false },
    { source: "/projects", destination: "/#projects", permanent: false },
    { source: "/contact", destination: "/#contact", permanent: false },
  ],
}

export default nextConfig
