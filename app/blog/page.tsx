import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Calendar, Clock, ExternalLink } from "lucide-react"
import Image from "next/image"

const blogPosts = [
  {
    title: "Building Scalable React Applications with TypeScript",
    excerpt:
      "Learn how to structure large React applications using TypeScript, best practices for component architecture, and state management patterns.",
    date: "2024-12-15",
    readTime: "8 min read",
    category: "React",
    image: "/placeholder.svg?height=200&width=400",
    url: "#",
    platform: "Dev.to",
  },
  {
    title: "Getting Started with Machine Learning in Python",
    excerpt:
      "A comprehensive guide to machine learning fundamentals using Python, covering data preprocessing, model selection, and evaluation metrics.",
    date: "2024-12-10",
    readTime: "12 min read",
    category: "AI/ML",
    image: "/placeholder.svg?height=200&width=400",
    url: "#",
    platform: "Medium",
  },
  {
    title: "Modern CSS Techniques for Better Web Design",
    excerpt:
      "Explore advanced CSS features like Grid, Flexbox, and custom properties to create responsive and maintainable stylesheets.",
    date: "2024-12-05",
    readTime: "6 min read",
    category: "CSS",
    image: "/placeholder.svg?height=200&width=400",
    url: "#",
    platform: "Dev.to",
  },
  {
    title: "Understanding Blockchain Technology and Smart Contracts",
    excerpt:
      "Dive deep into blockchain fundamentals, smart contract development with Solidity, and decentralized application architecture.",
    date: "2024-11-28",
    readTime: "15 min read",
    category: "Blockchain",
    image: "/placeholder.svg?height=200&width=400",
    url: "#",
    platform: "Medium",
  },
  {
    title: "Optimizing Node.js Applications for Production",
    excerpt:
      "Best practices for deploying Node.js applications, including performance optimization, security considerations, and monitoring.",
    date: "2024-11-20",
    readTime: "10 min read",
    category: "Node.js",
    image: "/placeholder.svg?height=200&width=400",
    url: "#",
    platform: "Dev.to",
  },
  {
    title: "The Future of Web Development: Trends to Watch",
    excerpt:
      "Exploring emerging technologies and trends that will shape the future of web development, from WebAssembly to AI integration.",
    date: "2024-11-15",
    readTime: "7 min read",
    category: "Web Dev",
    image: "/placeholder.svg?height=200&width=400",
    url: "#",
    platform: "Medium",
  },
]

const categories = ["All", "React", "AI/ML", "CSS", "Blockchain", "Node.js", "Web Dev"]

export default function BlogPage() {
  return (
    <div className="min-h-screen p-4 lg:p-8">
      <div className="max-w-7xl mx-auto space-y-8">
        {/* Header */}
        <div className="text-center space-y-4">
          <h1 className="text-4xl lg:text-5xl font-normal text-google-gray-900 font-inter">Blog & Articles</h1>
          <p className="text-lg text-google-gray-600 font-roboto">
            Sharing knowledge and insights about web development, AI, and technology
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 py-4">
          {categories.map((category) => (
            <Badge
              key={category}
              variant={category === "All" ? "default" : "outline"}
              className={`cursor-pointer px-4 py-2 text-sm font-medium transition-all duration-200 ${
                category === "All"
                  ? "bg-google-blue-500 text-white hover:bg-google-blue-600"
                  : "border-google-gray-300 text-google-gray-700 hover:bg-google-gray-100 hover:border-google-gray-400"
              }`}
            >
              {category}
            </Badge>
          ))}
        </div>

        {/* Blog Posts Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogPosts.map((post, index) => (
            <Card
              key={index}
              className="group hover:shadow-lg transition-shadow duration-300 bg-white border border-google-gray-200 rounded-xl"
            >
              <div className="relative overflow-hidden rounded-t-lg">
                <Image
                  src={post.image || "/placeholder.svg"}
                  alt={post.title}
                  width={400}
                  height={200}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <Badge variant="secondary" className="bg-white/90 text-gray-800">
                    {post.category}
                  </Badge>
                </div>
                <div className="absolute top-4 right-4">
                  <Badge variant="outline" className="bg-white/90 text-gray-800 border-gray-300">
                    {post.platform}
                  </Badge>
                </div>
              </div>

              <CardHeader>
                <CardTitle className="text-xl text-google-gray-900 font-inter line-clamp-2">{post.title}</CardTitle>
              </CardHeader>

              <CardContent className="space-y-4">
                <p className="text-google-gray-600 font-roboto text-sm line-clamp-3">{post.excerpt}</p>

                <div className="flex items-center justify-between text-xs text-google-gray-500 font-roboto">
                  <div className="flex items-center gap-1">
                    <Calendar className="h-3 w-3" />
                    {new Date(post.date).toLocaleDateString("en-US", {
                      month: "short",
                      day: "numeric",
                      year: "numeric",
                    })}
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="h-3 w-3" />
                    {post.readTime}
                  </div>
                </div>

                <Button size="sm" className="w-full" asChild>
                  <a href={post.url} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="w-4 h-4 mr-1" />
                    Read Article
                  </a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <Card className="bg-white border border-google-gray-200 rounded-xl">
          <CardContent className="p-8 text-center">
            <h2 className="text-2xl font-medium text-google-gray-900 font-inter mb-4">Want to stay updated?</h2>
            <p className="text-google-gray-600 font-roboto mb-6">
              Follow me on my writing platforms to get notified about new articles and tutorials.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild>
                <a href="#" target="_blank" rel="noopener noreferrer">
                  Follow on Dev.to
                </a>
              </Button>
              <Button variant="outline" asChild>
                <a href="#" target="_blank" rel="noopener noreferrer">
                  Follow on Medium
                </a>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
