"use client"

import { useState, type ChangeEvent, type FormEvent } from "react"
import { motion } from "framer-motion"
import { Check } from "lucide-react"
import { toast } from "sonner"
import { SectionWrapper } from "@/components/section-wrapper"
import { FloatingInput } from "@/components/floating-input"
import { site } from "@/lib/data"

export function Contact() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" })
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle")
  const [statusMessage, setStatusMessage] = useState("")

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    setStatus("sending")
    setStatusMessage("")

    try {
      const res = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      })

      const data = (await res.json().catch(() => ({}))) as {
        success?: boolean
        error?: string
      }

      if (res.ok && data.success) {
        setStatus("sent")
        setStatusMessage("Message sent successfully. I'll get back to you soon.")
        toast.success("Message sent!", {
          description: "Thanks for reaching out. I'll reply as soon as I can.",
        })
        setForm({ name: "", email: "", subject: "", message: "" })
        setTimeout(() => {
          setStatus("idle")
          setStatusMessage("")
        }, 5000)
        return
      }

      const errorText =
        data.error ||
        (res.status === 503
          ? "Email is not configured on the server yet. Please use the email link on the left."
          : "Something went wrong. Please try again or email me directly.")

      setStatus("error")
      setStatusMessage(errorText)
      toast.error("Could not send message", { description: errorText })
      setTimeout(() => {
        setStatus("idle")
        setStatusMessage("")
      }, 6000)
    } catch {
      const errorText = "Network error. Check your connection and try again."
      setStatus("error")
      setStatusMessage(errorText)
      toast.error("Could not send message", { description: errorText })
      setTimeout(() => {
        setStatus("idle")
        setStatusMessage("")
      }, 6000)
    }
  }

  return (
    <SectionWrapper id="contact" className="px-6 py-28 md:px-10 md:py-36">
      <div className="mx-auto grid max-w-6xl gap-16 lg:grid-cols-2 lg:gap-24">
        <div>
          <p className="section-label mb-4">Contact</p>
          <h2 className="font-display text-5xl font-light italic text-luxury-fg md:text-6xl">
            Say Hello
          </h2>
          <p className="mt-6 max-w-sm font-body text-luxury-muted">
            Have a project, role, or idea? I&apos;d love to hear from you.
          </p>

          <div className="mt-12 flex flex-col gap-4">
            <a href={site.github} target="_blank" rel="noopener noreferrer" className="social-link w-fit">
              GitHub
            </a>
            <a href={site.linkedin} target="_blank" rel="noopener noreferrer" className="social-link w-fit">
              LinkedIn
            </a>
            <a href={site.twitter} target="_blank" rel="noopener noreferrer" className="social-link w-fit">
              Twitter
            </a>
            <a href={`mailto:${site.email}`} className="social-link w-fit">
              {site.email}
            </a>
          </div>
        </div>

        <motion.form
          onSubmit={handleSubmit}
          className="space-y-8"
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <FloatingInput
            id="name"
            name="name"
            label="Name"
            required
            value={form.name}
            onChange={handleChange}
          />
          <FloatingInput
            id="email"
            name="email"
            label="Email"
            type="email"
            required
            value={form.email}
            onChange={handleChange}
          />
          <FloatingInput
            id="subject"
            name="subject"
            label="Subject"
            required
            value={form.subject}
            onChange={handleChange}
          />
          <FloatingInput
            id="message"
            name="message"
            label="Message"
            required
            textarea
            rows={4}
            value={form.message}
            onChange={handleChange}
          />

          {statusMessage && (
            <p
              role="status"
              className={`font-mono-label text-xs ${
                status === "sent" ? "text-emerald-400" : "text-red-400"
              }`}
            >
              {statusMessage}
            </p>
          )}

          <button
            type="submit"
            disabled={status === "sending" || status === "sent"}
            className={`btn-primary w-full transition-colors duration-500 ${
              status === "sent" ? "!bg-emerald-500 !text-white" : ""
            } ${status === "error" ? "!bg-red-600 !text-white" : ""}`}
          >
            {status === "sent" ? (
              <>
                <Check className="h-4 w-4" /> Sent
              </>
            ) : status === "sending" ? (
              "Sending..."
            ) : status === "error" ? (
              "Failed — Try Again"
            ) : (
              "Send Message"
            )}
          </button>
        </motion.form>
      </div>
    </SectionWrapper>
  )
}
