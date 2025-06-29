"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Phone, MapPin, Send } from "lucide-react"

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
          <p className="text-lg text-google-gray-600 font-roboto">Let&#39;s discuss your project or just say hello!</p>
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
                  <svg className="h-5 w-5 text-google-gray-700" role="img" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><title>GitHub</title><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.387.6.113.82-.258.82-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.084-.729.084-.729 1.205.084 1.84 1.236 1.84 1.236 1.07 1.834 2.809 1.304 3.495.997.108-.775.418-1.305.762-1.605-2.665-.3-5.466-1.334-5.466-5.93 0-1.31.469-2.381 1.236-3.221-.124-.303-.535-1.523.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.873.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.803 5.625-5.475 5.921.43.372.823 1.102.823 2.222v3.293c0 .322.218.694.825.576C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>
                  <span className="text-google-gray-700 font-medium font-roboto">GitHub</span>
                </a>

                <a
                  href="#"
                  className="flex items-center space-x-3 p-3 rounded-xl hover:bg-google-gray-100 transition-colors duration-200"
                >
                  <svg className="h-5 w-5 text-google-blue-600" role="img" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><title>LinkedIn</title><path d="M20.447 20.452h-3.554v-5.569c0-1.327-.027-3.037-1.849-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.354V9h3.414v1.561h.049c.476-.9 1.637-1.849 3.37-1.849 3.602 0 4.267 2.368 4.267 5.455v6.285zM5.337 7.433c-1.144 0-2.069-.926-2.069-2.068 0-1.143.925-2.069 2.069-2.069 1.143 0 2.068.926 2.068 2.069 0 1.142-.925 2.068-2.068 2.068zm1.777 13.019H3.56V9h3.554v11.452zM22.225 0H1.771C.792 0 0 .771 0 1.723v20.549C0 23.229.792 24 1.771 24h20.451C23.2 24 24 23.229 24 22.271V1.723C24 .771 23.2 0 22.222 0z"/></svg>
                  <span className="text-google-gray-700 font-medium font-roboto">LinkedIn</span>
                </a>

                <a
                  href="#"
                  className="flex items-center space-x-3 p-3 rounded-xl hover:bg-google-gray-100 transition-colors duration-200"
                >
                  <svg className="h-5 w-5 text-blue-400" role="img" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><title>Twitter</title><path d="M23.954 4.569c-.885.389-1.83.654-2.825.775 1.014-.611 1.794-1.574 2.163-2.724-.951.555-2.005.959-3.127 1.184-.897-.959-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-.422.722-.666 1.561-.666 2.475 0 1.708.87 3.213 2.188 4.096-.807-.026-1.566-.248-2.229-.616v.061c0 2.385 1.693 4.374 4.188 4.827-.693.188-1.452.232-2.224.084.627 1.956 2.444 3.377 4.6 3.417-2.07 1.623-4.678 2.348-7.29 2.034 2.179 1.397 4.768 2.212 7.557 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.689 1.797-1.56 2.457-2.549z"/></svg>
                  <span className="text-google-gray-700 font-medium font-roboto">Twitter</span>
                </a>
              </CardContent>
            </Card>

            <Card className="bg-white border border-google-gray-200 rounded-xl">
              <CardContent className="p-6">
                <h3 className="font-medium text-google-gray-900 font-inter mb-2">Available for Work</h3>
                <p className="text-sm text-google-gray-600 font-roboto mb-4">
                  I&#39;m currently open to new opportunities and interesting projects. Let&#39;s create something amazing
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
                <h3 className="font-medium text-google-gray-900 font-inter mb-2">What&#39;s your typical response time?</h3>
                <p className="text-google-gray-600 font-roboto text-sm">
                  I usually respond to emails within 24 hours during weekdays. For urgent matters, feel free to mention
                  it in the subject line.
                </p>
              </div>

              <div>
                <h3 className="font-medium text-google-gray-900 font-inter mb-2">Do you work on freelance projects?</h3>
                <p className="text-google-gray-600 font-roboto text-sm">
                  Yes! I&#39;m open to freelance opportunities, especially for web development, AI/ML projects, and
                  blockchain applications.
                </p>
              </div>

              <div>
                <h3 className="font-medium text-google-gray-900 font-inter mb-2">
                  Are you available for full-time positions?
                </h3>
                <p className="text-google-gray-600 font-roboto text-sm">
                  I&#39;m currently open to both full-time opportunities and interesting contract work. Let&#39;s discuss what
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
