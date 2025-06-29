import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"

const skillCategories = [
  {
    title: "Languages",
    skills: [
      { name: "JavaScript", level: 90, color: "bg-yellow-500" },
      { name: "TypeScript", level: 85, color: "bg-blue-500" },
      { name: "Python", level: 80, color: "bg-green-500" },
      { name: "C++", level: 75, color: "bg-purple-500" },
      { name: "Java", level: 70, color: "bg-red-500" },
    ],
  },
  {
    title: "Frontend",
    skills: [
      { name: "React", level: 90, color: "bg-cyan-500" },
      { name: "Next.js", level: 85, color: "bg-gray-800" },
      { name: "Tailwind CSS", level: 90, color: "bg-teal-500" },
      { name: "HTML/CSS", level: 95, color: "bg-orange-500" },
      { name: "Vue.js", level: 70, color: "bg-green-600" },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Node.js", level: 85, color: "bg-green-600" },
      { name: "Express.js", level: 80, color: "bg-gray-600" },
      { name: "MongoDB", level: 75, color: "bg-green-500" },
      { name: "PostgreSQL", level: 70, color: "bg-blue-600" },
      { name: "REST APIs", level: 85, color: "bg-indigo-500" },
    ],
  },
  {
    title: "AI/ML",
    skills: [
      { name: "Python", level: 80, color: "bg-yellow-600" },
      { name: "Pandas", level: 75, color: "bg-purple-600" },
      { name: "scikit-learn", level: 70, color: "bg-orange-600" },
      { name: "YOLOv8", level: 65, color: "bg-red-600" },
      { name: "TensorFlow", level: 60, color: "bg-orange-500" },
    ],
  },
  {
    title: "Tools & Others",
    skills: [
      { name: "Git/GitHub", level: 90, color: "bg-gray-800" },
      { name: "VS Code", level: 95, color: "bg-blue-600" },
      { name: "Vercel", level: 85, color: "bg-black" },
      { name: "Docker", level: 70, color: "bg-blue-500" },
      { name: "AWS", level: 65, color: "bg-orange-400" },
    ],
  },
]

export default function SkillsPage() {
  return (
    <div className="min-h-screen p-4 lg:p-8 bg-white">
      <div className="max-w-6xl mx-auto space-y-8">
        {/* Header */}
        <div className="text-center space-y-4">
          <h1 className="text-4xl lg:text-5xl font-normal text-google-gray-900 font-inter">Skills & Technologies</h1>
          <p className="text-lg text-google-gray-600 font-roboto">Here are the technologies and tools I work with</p>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <Card key={index} className="h-fit bg-white border border-google-gray-200 rounded-xl">
              <CardHeader>
                <CardTitle className="text-xl text-google-gray-900 font-inter">{category.title}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium text-google-gray-800 font-roboto">{skill.name}</span>
                      <span className="text-xs text-google-gray-600 font-roboto">{skill.level}%</span>
                    </div>
                    <Progress value={skill.level} className="h-2" />
                  </div>
                ))}
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Skills */}
        <Card className="bg-white border border-google-gray-200 rounded-xl">
          <CardHeader>
            <CardTitle className="text-2xl text-google-gray-900 font-inter">Additional Skills & Interests</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div>
                <h3 className="font-medium text-google-gray-900 mb-3 font-inter">Design</h3>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline" className="border-google-gray-300 text-google-gray-700 font-roboto">
                    Figma
                  </Badge>
                  <Badge variant="outline" className="border-google-gray-300 text-google-gray-700 font-roboto">
                    Adobe XD
                  </Badge>
                  <Badge variant="outline" className="border-google-gray-300 text-google-gray-700 font-roboto">
                    UI/UX Design
                  </Badge>
                  <Badge variant="outline" className="border-google-gray-300 text-google-gray-700 font-roboto">
                    Responsive Design
                  </Badge>
                </div>
              </div>

              <div>
                <h3 className="font-medium text-google-gray-900 mb-3 font-inter">Blockchain</h3>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline" className="border-google-gray-300 text-google-gray-700 font-roboto">
                    Solidity
                  </Badge>
                  <Badge variant="outline" className="border-google-gray-300 text-google-gray-700 font-roboto">
                    Web3.js
                  </Badge>
                  <Badge variant="outline" className="border-google-gray-300 text-google-gray-700 font-roboto">
                    Smart Contracts
                  </Badge>
                  <Badge variant="outline" className="border-google-gray-300 text-google-gray-700 font-roboto">
                    DeFi
                  </Badge>
                </div>
              </div>

              <div>
                <h3 className="font-medium text-google-gray-900 mb-3 font-inter">Soft Skills</h3>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline" className="border-google-gray-300 text-google-gray-700 font-roboto">
                    Problem Solving
                  </Badge>
                  <Badge variant="outline" className="border-google-gray-300 text-google-gray-700 font-roboto">
                    Team Collaboration
                  </Badge>
                  <Badge variant="outline" className="border-google-gray-300 text-google-gray-700 font-roboto">
                    Communication
                  </Badge>
                  <Badge variant="outline" className="border-google-gray-300 text-google-gray-700 font-roboto">
                    Leadership
                  </Badge>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
