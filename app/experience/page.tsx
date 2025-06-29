import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, MapPin, Trophy, Users } from "lucide-react"

const experiences = [
  {
    title: "Full Stack Developer Intern",
    company: "TechCorp Solutions",
    location: "Remote",
    duration: "Jun 2024 - Present",
    type: "Internship",
    description:
      "Working on developing scalable web applications using React and Node.js. Collaborated with senior developers to implement new features and optimize existing codebase.",
    achievements: [
      "Improved application performance by 30%",
      "Implemented responsive design for mobile users",
      "Contributed to 5+ major feature releases",
    ],
    tech: ["React", "Node.js", "MongoDB", "AWS"],
  },
  {
    title: "Frontend Developer",
    company: "StartupXYZ",
    location: "Bangalore, India",
    duration: "Jan 2024 - May 2024",
    type: "Freelance",
    description:
      "Developed user interfaces for a fintech startup, focusing on creating intuitive and accessible designs for financial dashboards.",
    achievements: [
      "Built 10+ responsive components",
      "Reduced load time by 40%",
      "Implemented accessibility standards",
    ],
    tech: ["Vue.js", "TypeScript", "Tailwind CSS", "Chart.js"],
  },
]

const achievements = [
  {
    title: "Smart India Hackathon 2024",
    description: "Winner - Built an AI-powered solution for traffic management",
    date: "March 2024",
    type: "Hackathon",
    icon: Trophy,
  },
  {
    title: "Open Source Contributor",
    description: "Contributed to 15+ open source projects with 100+ commits",
    date: "Ongoing",
    type: "Open Source",
    icon: Users,
  },
  {
    title: "CodeChef Contest",
    description: "3-star rating with consistent top 10% rankings",
    date: "2023-2024",
    type: "Competitive Programming",
    icon: Trophy,
  },
  {
    title: "Tech Lead - College Club",
    description: "Led a team of 20+ students in organizing tech events",
    date: "2023-2024",
    type: "Leadership",
    icon: Users,
  },
]

const certifications = [
  {
    title: "AWS Certified Developer Associate",
    issuer: "Amazon Web Services",
    date: "Dec 2024",
    credentialId: "AWS-CDA-2024-001",
    link: "#",
  },
  {
    title: "Full Stack Web Development",
    issuer: "freeCodeCamp",
    date: "Nov 2024",
    credentialId: "FCC-FSWD-2024",
    link: "#",
  },
  {
    title: "Machine Learning Specialization",
    issuer: "Coursera (Stanford)",
    date: "Oct 2024",
    credentialId: "COURSERA-ML-2024",
    link: "#",
  },
  {
    title: "React Developer Certification",
    issuer: "Meta",
    date: "Sep 2024",
    credentialId: "META-REACT-2024",
    link: "#",
  },
]

export default function ExperiencePage() {
  return (
    <div className="min-h-screen p-4 lg:p-8">
      <div className="max-w-6xl mx-auto space-y-12">
        {/* Header */}
        <div className="text-center space-y-4">
          <h1 className="text-4xl lg:text-5xl font-normal text-google-gray-900 font-inter">
            Experience & Achievements
          </h1>
          <p className="text-lg text-google-gray-600 font-roboto">My professional journey and accomplishments</p>
        </div>

        {/* Work Experience */}
        <section className="space-y-6">
          <h2 className="text-3xl font-medium text-google-gray-900 font-inter">Work Experience</h2>
          <div className="space-y-6">
            {experiences.map((exp, index) => (
              <Card
                key={index}
                className="bg-white border border-google-gray-200 rounded-xl hover:shadow-lg transition-shadow duration-300"
              >
                <CardHeader className="pb-4">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <div>
                      <CardTitle className="text-xl text-google-gray-900 font-inter">{exp.title}</CardTitle>
                      <p className="text-lg font-medium text-google-blue-600 font-roboto">{exp.company}</p>
                    </div>
                    <div className="flex flex-col md:items-end gap-2">
                      <Badge
                        variant={exp.type === "Internship" ? "default" : "secondary"}
                        className={
                          exp.type === "Internship"
                            ? "bg-google-blue-500 text-white"
                            : "bg-google-gray-100 text-google-gray-800"
                        }
                      >
                        {exp.type}
                      </Badge>
                      <div className="flex items-center gap-4 text-sm text-google-gray-600 font-roboto">
                        <div className="flex items-center gap-1">
                          <Calendar className="h-4 w-4" />
                          {exp.duration}
                        </div>
                        <div className="flex items-center gap-1">
                          <MapPin className="h-4 w-4" />
                          {exp.location}
                        </div>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-google-gray-700 font-roboto">{exp.description}</p>

                  <div>
                    <h4 className="font-medium text-google-gray-900 font-inter mb-2">Key Achievements:</h4>
                    <ul className="space-y-1">
                      {exp.achievements.map((achievement, achIndex) => (
                        <li key={achIndex} className="text-google-gray-700 font-roboto text-sm">
                          • {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-medium text-google-gray-900 font-inter mb-2">Technologies Used:</h4>
                    <div className="flex flex-wrap gap-2">
                      {exp.tech.map((tech, techIndex) => (
                        <Badge
                          key={techIndex}
                          variant="outline"
                          className="border-google-gray-300 text-google-gray-700"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Achievements */}
        <section className="space-y-6">
          <h2 className="text-3xl font-medium text-google-gray-900 font-inter">Achievements</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {achievements.map((achievement, index) => (
              <Card
                key={index}
                className="bg-white border border-google-gray-200 rounded-xl hover:shadow-lg transition-shadow duration-300"
              >
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <achievement.icon className="h-8 w-8 text-google-blue-500" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-medium text-google-gray-900 font-inter mb-1">{achievement.title}</h3>
                      <p className="text-google-gray-600 font-roboto text-sm mb-2">{achievement.description}</p>
                      <div className="flex items-center gap-2">
                        <Badge variant="outline" className="text-xs border-google-gray-300 text-google-gray-700">
                          {achievement.type}
                        </Badge>
                        <span className="text-xs text-google-gray-500 font-roboto">{achievement.date}</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Certifications */}
        <section className="space-y-6">
          <h2 className="text-3xl font-medium text-google-gray-900 font-inter">Certifications</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {certifications.map((cert, index) => (
              <Card
                key={index}
                className="bg-white border border-google-gray-200 rounded-xl hover:shadow-lg transition-shadow duration-300"
              >
                <CardContent className="p-6">
                  <div className="space-y-3">
                    <h3 className="font-medium text-google-gray-900 font-inter">{cert.title}</h3>
                    <p className="text-google-blue-600 font-medium font-roboto">{cert.issuer}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-google-gray-600 font-roboto">Issued: {cert.date}</span>
                      <Badge variant="outline" className="text-xs border-green-300 text-green-700 bg-green-50">
                        Verified
                      </Badge>
                    </div>
                    <p className="text-xs text-google-gray-500 font-roboto">Credential ID: {cert.credentialId}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </div>
    </div>
  )
}
