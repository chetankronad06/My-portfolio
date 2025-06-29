"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Phone, MapPin, Github, Linkedin, Twitter, Send } from "lucide-react"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log("Form submitted:", formData)
    // Reset form
    setFormData({ name: "", email: "", subject: "", message: "" })
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <div className="min-h-screen p-4 lg:p-8">
      <div className="max-w-6xl mx-auto space-y-8">
        {/* Header */}
        <div className="text-center space-y-4">
          <h1 className="text-4xl lg:text-5xl font-normal text-google-gray-900 font-inter">Get In Touch</h1>
          <p className="text-lg text-google-gray-600 font-roboto">Let's discuss your project or just say hello!</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Contact Information */}
          <div className="space-y-6">
            <Card className="bg-white border border-google-gray-200 rounded-xl">
              <CardHeader>
                <CardTitle className="text-xl text-google-gray-900 font-inter">Contact Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Mail className="h-5 w-5 text-google-blue-500" />
                  <div>
                    <p className="font-medium text-google-gray-900 font-inter">Email</p>
                    <p className="text-google-gray-600 font-roboto">chetan@example.com</p>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <Phone className="h-5 w-5 text-google-green-500" />
                  <div>
                    <p className="font-medium text-google-gray-900 font-inter">Phone</p>
                    <p className="text-google-gray-600 font-roboto">+91 9876543210</p>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <MapPin className="h-5 w-5 text-red-500" />
                  <div>
                    <p className="font-medium text-google-gray-900 font-inter">Location</p>
                    <p className="text-google-gray-600 font-roboto">Bangalore, India</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white border border-google-gray-200 rounded-xl">
              <CardHeader>
                <CardTitle className="text-xl text-google-gray-900 font-inter">Follow Me</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <a
                  href="#"
                  className="flex items-center space-x-3 p-3 rounded-xl hover:bg-google-gray-100 transition-colors duration-200"
                >
                  <Github className="h-5 w-5 text-google-gray-700" />
                  <span className="text-google-gray-700 font-medium font-roboto">GitHub</span>
                </a>

                <a
                  href="#"
                  className="flex items-center space-x-3 p-3 rounded-xl hover:bg-google-gray-100 transition-colors duration-200"
                >
                  <Linkedin className="h-5 w-5 text-google-blue-600" />
                  <span className="text-google-gray-700 font-medium font-roboto">LinkedIn</span>
                </a>

                <a
                  href="#"
                  className="flex items-center space-x-3 p-3 rounded-xl hover:bg-google-gray-100 transition-colors duration-200"
                >
                  <Twitter className="h-5 w-5 text-blue-400" />
                  <span className="text-google-gray-700 font-medium font-roboto">Twitter</span>
                </a>
              </CardContent>
            </Card>

            <Card className="bg-white border border-google-gray-200 rounded-xl">
              <CardContent className="p-6">
                <h3 className="font-medium text-google-gray-900 font-inter mb-2">Available for Work</h3>
                <p className="text-sm text-google-gray-600 font-roboto mb-4">
                  I'm currently open to new opportunities and interesting projects. Let's create something amazing
                  together!
                </p>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-sm text-green-600 font-medium font-roboto">Available Now</span>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="bg-white border border-google-gray-200 rounded-xl">
              <CardHeader>
                <CardTitle className="text-2xl text-google-gray-900 font-inter">Send Me a Message</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-google-gray-700 font-roboto mb-2">
                        Name *
                      </label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Your full name"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-google-gray-700 font-roboto mb-2"
                      >
                        Email *
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="your.email@example.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="subject"
                      className="block text-sm font-medium text-google-gray-700 font-roboto mb-2"
                    >
                      Subject *
                    </label>
                    <Input
                      id="subject"
                      name="subject"
                      type="text"
                      required
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="What's this about?"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-google-gray-700 font-roboto mb-2"
                    >
                      Message *
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      required
                      rows={6}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell me about your project or just say hello..."
                    />
                  </div>

                  <Button type="submit" size="lg" className="w-full bg-google-blue-500 hover:bg-google-blue-600">
                    <Send className="mr-2 h-5 w-5" />
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* FAQ Section */}
        <Card className="bg-white border border-google-gray-200 rounded-xl">
          <CardHeader>
            <CardTitle className="text-2xl text-google-gray-900 font-inter">Frequently Asked Questions</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-medium text-google-gray-900 font-inter mb-2">What's your typical response time?</h3>
                <p className="text-google-gray-600 font-roboto text-sm">
                  I usually respond to emails within 24 hours during weekdays. For urgent matters, feel free to mention
                  it in the subject line.
                </p>
              </div>

              <div>
                <h3 className="font-medium text-google-gray-900 font-inter mb-2">Do you work on freelance projects?</h3>
                <p className="text-google-gray-600 font-roboto text-sm">
                  Yes! I'm open to freelance opportunities, especially for web development, AI/ML projects, and
                  blockchain applications.
                </p>
              </div>

              <div>
                <h3 className="font-medium text-google-gray-900 font-inter mb-2">
                  Are you available for full-time positions?
                </h3>
                <p className="text-google-gray-600 font-roboto text-sm">
                  I'm currently open to both full-time opportunities and interesting contract work. Let's discuss what
                  you have in mind!
                </p>
              </div>

              <div>
                <h3 className="font-medium text-google-gray-900 font-inter mb-2">
                  Can you help with technical consulting?
                </h3>
                <p className="text-google-gray-600 font-roboto text-sm">
                  I offer technical consulting for web development, architecture decisions, and technology stack
                  selection.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
