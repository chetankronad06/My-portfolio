import { NextResponse } from "next/server"
import nodemailer from "nodemailer"

function escapeHtml(text: string) {
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
}

export async function POST(req: Request) {
  const smtpEmail = process.env.SMTP_EMAIL
  const smtpPassword = process.env.SMTP_PASSWORD

  if (!smtpEmail || !smtpPassword) {
    console.error("Email send error: SMTP_EMAIL or SMTP_PASSWORD not configured")
    return NextResponse.json(
      { success: false, error: "Email service is not configured on the server." },
      { status: 503 }
    )
  }

  let body: { name?: string; email?: string; subject?: string; message?: string }
  try {
    body = await req.json()
  } catch {
    return NextResponse.json(
      { success: false, error: "Invalid request body." },
      { status: 400 }
    )
  }

  const { name, email, subject, message } = body

  if (!name?.trim() || !email?.trim() || !subject?.trim() || !message?.trim()) {
    return NextResponse.json(
      { success: false, error: "All fields are required." },
      { status: 400 }
    )
  }

  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: smtpEmail,
      pass: smtpPassword.replace(/\s/g, ""),
    },
  })

  const safeName = escapeHtml(name.trim())
  const safeEmail = escapeHtml(email.trim())
  const safeSubject = escapeHtml(subject.trim())
  const safeMessage = escapeHtml(message.trim()).replace(/\n/g, "<br>")

  const mailOptions = {
    from: `"Portfolio Contact" <${smtpEmail}>`,
    replyTo: email.trim(),
    to: smtpEmail,
    subject: `Portfolio: ${subject.trim()}`,
    html: `
      <p><strong>From:</strong> ${safeName} (${safeEmail})</p>
      <p><strong>Subject:</strong> ${safeSubject}</p>
      <p><strong>Message:</strong></p>
      <p>${safeMessage}</p>
    `,
    text: `From: ${name.trim()} (${email.trim()})\nSubject: ${subject.trim()}\n\n${message.trim()}`,
  }

  try {
    await transporter.sendMail(mailOptions)
    return NextResponse.json({ success: true }, { status: 200 })
  } catch (error) {
    console.error("Email send error:", error)
    return NextResponse.json(
      {
        success: false,
        error: "Failed to send message. Please try again or email directly.",
      },
      { status: 500 }
    )
  }
}
