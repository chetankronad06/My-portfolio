import { Navbar } from "@/components/navbar"
import { Hero } from "@/sections/hero"
import { About } from "@/sections/about"
import { Projects } from "@/sections/projects"
import { Education } from "@/sections/education"
import { Achievements } from "@/sections/achievements"
import { Contact } from "@/sections/contact"
import { Footer } from "@/sections/footer"

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />
        <Education />
        <Achievements />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
