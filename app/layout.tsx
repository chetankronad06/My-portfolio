import type React from "react"
import type { Metadata } from "next"
import { Cormorant_Garamond, DM_Mono, Sora } from "next/font/google"
import { Providers } from "@/components/providers"
import { site } from "@/lib/data"
import "./globals.css"

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-cormorant",
  weight: ["300", "400", "500", "600"],
})

const dmMono = DM_Mono({
  subsets: ["latin"],
  variable: "--font-dm-mono",
  weight: ["400", "500"],
})

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
  weight: ["300", "400", "500", "600"],
})

export const metadata: Metadata = {
  metadataBase: new URL("https://chetankronad.vercel.app"),
  title: `${site.name} — Full Stack Developer`,
  description: site.description,
  openGraph: {
    title: `${site.name} — Full Stack Developer`,
    description: site.description,
    type: "website",
    locale: "en_US",
    images: [{ url: site.ogImage, width: 1200, height: 630, alt: site.name }],
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} — Full Stack Developer`,
    description: site.description,
    images: [site.ogImage],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${dmMono.variable} ${sora.variable} dark`}
    >
      <body className="bg-luxury-bg text-luxury-fg antialiased">
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
