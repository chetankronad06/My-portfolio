export const site = {
  name: "Chetan Kalakappa Ronad",
  firstName: "Chetan",
  email: "chetankronad06@gmail.com",
  location: "Bangalore, India",
  github: "https://github.com/chetankronad06",
  linkedin: "https://www.linkedin.com/in/chetan-ronad-827113300",
  twitter: "https://x.com/c_h_e_t_a_n__06",
  resumeUrl: "/application-form.pdf",
  description:
    "Computer Science student and full stack developer building polished web products with clean architecture and thoughtful UX.",
  ogImage: "/og-image.png",
}

export const roles = [
  "Computer Science Student",
  "Full Stack Developer",
  "UI/UX Enthusiast",
  "Open Source Contributor",
  "AI/ML Explorer",
]

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Work", href: "#projects" },
  { label: "Education", href: "#education" },
  { label: "Achievements", href: "#achievements" },
  { label: "Contact", href: "#contact" },
]

export const aboutBio = [
  {
    text: "I'm a ",
    bold: "full stack developer",
    rest: " who cares about shipping products that feel intentional — not just functional. I work across React, Next.js, and modern backends, with a bias toward ",
    bold2: "clean code and fast iteration",
    end: ".",
  },
  {
    text: "Currently pursuing ",
    bold: "B.Tech in Computer Science",
    rest: " at Dayananda Sagar University. I learn by building — hackathons, side projects, and ",
    bold2: "real deployments",
    end: " over theory-only study.",
  },
  {
    text: "Open to ",
    bold: "internships and entry-level roles",
    rest: " where I can contribute from day one. Based in Bangalore, always curious about ",
    bold2: "AI, system design, and product craft",
    end: ".",
  },
]

export const techStack = [
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "PostgreSQL",
  "Prisma",
  "Tailwind CSS",
  "Framer Motion",
  "Supabase",
  "Clerk",
  "Git",
  "Figma",
]

export const marqueeSkills = [
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Tailwind CSS",
  "PostgreSQL",
  "MongoDB",
  "Prisma",
  "Supabase",
  "Stripe",
  "WebSockets",
  "REST APIs",
  "Framer Motion",
  "Figma",
  "Vercel",
  "Git",
  "Python",
]

export const projects = [
  {
    title: "ShopWithChetan",
    description:
      "Full-stack e-commerce platform with authentication, Stripe payments, Sanity CMS, and an admin dashboard — built to handle real transactions and content workflows.",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1200&q=80",
    tech: ["Next.js", "Clerk", "Stripe", "Sanity"],
    liveUrl: "https://shopwithchetan.vercel.app/",
    githubUrl: "https://github.com/chetankronad06/E-commerce",
  },
  {
    title: "Trekker",
    description:
      "Group trip expense tracker that parses UPI screenshots via OCR, logs shared expenses in real time, and calculates final settlements across travelers.",
    image: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=1200&q=80",
    tech: ["Next.js", "Supabase", "Prisma", "Tesseract.js"],
    liveUrl: "https://trekkerhub.vercel.app/",
    githubUrl: "https://github.com/chetankronad06/trekker",
  },
  {
    title: "Portfolio",
    description:
      "Editorial portfolio with motion design, dark luxury aesthetics, and a performance-first Next.js architecture — designed to feel bespoke, not templated.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&q=80",
    tech: ["Next.js", "Framer Motion", "Tailwind CSS"],
    liveUrl: "https://my-portfolio-nu-six-70.vercel.app/",
    githubUrl: "https://github.com/chetankronad06/My-portfolio",
  },
]

export const education = [
  {
    degree: "B.Tech, Computer Science & Engineering",
    institution: "Dayananda Sagar University",
    duration: "2023 — 2027",
    grade: "CGPA 8.92 / 10",
    highlights: [
      "Data Structures & Algorithms",
      "Software Engineering & System Design",
      "Full-stack web development capstone projects",
    ],
  },
  {
    degree: "Pre-University College (Science)",
    institution: "KLE Jagadguru Tontadarya P.U. College, Gadag",
    duration: "2021 — 2023",
    grade: "92.33%",
    highlights: [
      "Advanced mathematics & physics",
      "Analytical problem-solving foundations",
      "Transition into engineering & technology",
    ],
  },
]

export const achievements = [
  {
    title: "Hack-in-bad Finalist",
    description: "Top-tier finalist at Techflix's flagship university hackathon.",
    tag: "Hackathon",
    wide: true,
  },
  {
    title: "DevHack Bronze Medal",
    description: "Parsec 5.0 at IIT Dharwad — standout solution among elite teams.",
    tag: "Hackathon",
    wide: false,
  },
  {
    title: "NASA Space Apps",
    description: "Global challenge participant — collaborative space-tech innovation.",
    tag: "Competition",
    wide: false,
  },
  {
    title: "Academic Excellence",
    description: "8.92 CGPA in B.Tech CSE with consistent performance in core CS subjects.",
    tag: "Academic",
    wide: false,
  },
  {
    title: "75+ GitHub Contributions",
    description: "Active open-source contributor building in public across multiple repos.",
    tag: "Open Source",
    wide: true,
  },
]
