export const site = {
  name: "Chetan Kalakappa Ronad",
  firstName: "Chetan K Ronad",
  email: "chetankronad06@gmail.com",
  location: "Bangalore, India",
  github: "https://github.com/chetankronad06",
  linkedin: "https://www.linkedin.com/in/chetan-ronad-827113300",
  twitter: "https://x.com/c_h_e_t_a_n__06",
  resumeUrl: "/resume/chetankronad_resume.pdf",
  description:
    "Computer Science student and full stack developer building polished web products with clean architecture and thoughtful UX.",
  ogImage: "/og-image.png",
}

export const roles = [
  "Software Engineer",
  "Full-Stack Developer",
  "AI/ML Explorer",
  "Problem Solver",
  "Lifelong Learner",
]

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Work", href: "#projects" },
  { label: "Education", href: "#education" },
  { label: "Achievements", href: "#achievements" },
  { label: "Contact", href: "#contact" },
]

export const aboutBio = [
  "I'm a full-stack developer who builds scalable web applications and AI-powered products that solve real-world problems.",
  "I enjoy taking ideas from concept to production, working across the entire stack—from designing database schemas and APIs to building intuitive user interfaces and deploying reliable applications. Rather than focusing on individual technologies, I focus on creating systems that are practical, maintainable, and deliver a great user experience.",
  "My primary stack includes Next.js, TypeScript, Node.js, React, PostgreSQL, and modern cloud technologies. I believe in choosing tools based on the problem being solved rather than following trends, and I'm always exploring how AI can be integrated into products in meaningful ways.",
  "As an engineer, I value strong fundamentals, clean architecture, and continuous learning. I enjoy breaking down complex problems, understanding how systems work under the hood, and building solutions that balance speed, scalability, and maintainability.",
  "I'm currently open to full-stack and backend-focused opportunities where I can own features end-to-end, contribute to impactful products, and continue growing as a software engineer.",
  "Outside of coding, I'm fascinated by the intersection of technology, business, and human behavior, and I'm always exploring how small, consistent improvements can compound into extraordinary results over time.",
]

export const techStackCategories = [
  {
    category: "Languages & Frameworks",
    skills: ["JavaScript", "TypeScript", "Python", "Java", "C", "React.js", "Next.js", "Tailwind CSS", "Shadcn UI", "Node.js", "Express.js"],
  },
  {
    category: "Databases & Cloud",
    skills: ["Neon PostgreSQL", "MySQL", "MongoDB", "Supabase", "Prisma ORM", "AWS (Lambda, S3, API Gateway, Bedrock, Textract)", "tRPC", "REST APIs"],
  },
  {
    category: "Tools & Concepts",
    skills: ["Git", "GitHub", "VS Code", "Figma", "Postman", "Socket.io", "Clerk", "ChatGPT"],
  },
  {
    category: "Core Strength",
    skills: ["Quick Learner"],
  },
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
    title: "DevCollab",
    description: "Collaborative AI Code Review Platform",
    image: "/projects/devcollab.png",
    tech: ["Next.js 15", "TypeScript", "tRPC", "Drizzle", "Supabase", "Claude API", "Inngest", "SSE"],
    liveUrl: "https://dev-collab-dun.vercel.app/",
    githubUrl: "https://github.com/chetankronad06/DevCollab",
    points: [
      "Implemented an interactive git diff viewer supporting multi-threaded comment resolution, asynchronous video walk-through uploads via UploadThing, and line-level developer presence powered by Server-Sent Events (SSE).",
      "Engineered an AI-driven code review assistant using the Claude API to scan pull request diffs, stream token-by-token feedback on style/bugs/security, and generate one-click mergeable suggestion fixes.",
      "Architected a scalable backend utilizing Inngest background workers for webhook synchronization, tRPC for end-to-end typesafe API communication, and Upstash Redis for multi-tier API rate-limiting.",
    ],
    isFeatured: true,
    badgeText: "AI-Powered",
  },
  {
    title: "Trekker",
    description: "Trip Expense Tracker Web App",
    image: "/projects/trekker.png",
    tech: ["Next.js", "Tailwind CSS", "Clerk", "Supabase", "Prisma", "Tesseract.js", "WebSockets"],
    liveUrl: "https://trekkerhub.vercel.app/",
    githubUrl: "https://github.com/chetankronad06/trekker",
    points: [
      "Built a real-time group expense tracker with integrated OCR for extracting UPI payment data from screenshots.",
      "Implemented live group chat and a real-time expense feed using WebSockets for seamless collaboration.",
      "Led full-stack development including trip creation, user authentication, expense logging, AI-based parsing, chat integration, and final settlement computation.",
    ],
    isFeatured: true,
    badgeText: "Real-Time",
  },
  {
    title: "E-Commerce Platform",
    description: "Online Shopping Platform",
    image: "/projects/ecommerce.png",
    tech: ["Next.js", "Clerk", "Sanity", "Stripe", "Tailwind CSS", "Shadcn UI"],
    liveUrl: "https://shopwithchetan.vercel.app/",
    githubUrl: "https://github.com/chetankronad06/E-commerce",
    points: [
      "Developed a full-stack e-commerce platform with user authentication, payment integration, and an admin dashboard.",
      "Built the platform using modern technologies for performance, scalability, and a clean user experience.",
    ],
  },
]

export const education = [
  {
    degree: "B.Tech, Computer Science & Engineering",
    institution: "Dayananda Sagar University",
    location: "Bangalore, Karnataka",
    duration: "2023 — 2027",
    grade: "8.94 CGPA",
  },
  {
    degree: "Pre-University College (Science)",
    institution: "KLE's Jagadguru Tontadarya P.U. College",
    location: "Gadag, Karnataka",
    duration: "2021 — 2023",
    grade: "92.33%",
  },
  {
    degree: "SSLC",
    institution: "Royal English Medium High School",
    location: "Gadag, Karnataka",
    duration: "2021",
    grade: "98.40%",
  },
]

export const achievements = [
  {
    title: "InfrX 2026 – Hackathon Winner",
    description: "Won 3rd Place in the 10-hour hackathon hosted by Infrrd in collaboration with Dayananda Sagar University (DSU), exclusively for engineering students graduating in 2027 from selected colleges across Bangalore.",
    tag: "Winner",
    year: "2026",
    wide: true,
    featured: true,
  },
  {
    title: "Dev Hacks 6.0 – IIT Dharwad",
    description: "Selected as the 4th Runner-Up in the pitching round among participants nationwide.",
    tag: "Hackathon",
    year: "2025",
    wide: true,
  },
  {
    title: "TechFlix Hackathon – DSU",
    description: "Selected as one of the top 12 teams for pitching among nationwide participants.",
    tag: "Hackathon",
    year: "2025",
    wide: false,
  },
  {
    title: "FusionX Hackathon – Presidency University",
    description: "Selected as a finalist for the pitching round among nationwide participants.",
    tag: "Hackathon",
    year: "2026",
    wide: false,
  },
]
