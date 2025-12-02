import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, email, company, phone, service, message } = body

    // Validate required fields
    if (!name || !email || !service || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    // Create transporter with Gmail SMTP
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'subhampal342@gmail.com',
        pass: 'yzwkfezlhlcalwem',
      },
    })

    // Email content
    const mailOptions = {
      from: 'subhampal342@gmail.com',
      to: 'subhampal342@gmail.com',
      subject: `New Contact Form Submission - ${service}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #2563eb; border-bottom: 2px solid #2563eb; padding-bottom: 10px;">
            New Contact Form Submission
          </h2>
          
          <div style="margin: 20px 0;">
            <h3 style="color: #333; margin-bottom: 10px;">Contact Details:</h3>
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 8px; background-color: #f3f4f6; font-weight: bold; width: 30%;">Name:</td>
                <td style="padding: 8px; background-color: #f9fafb;">${name}</td>
              </tr>
              <tr>
                <td style="padding: 8px; background-color: #f3f4f6; font-weight: bold;">Email:</td>
                <td style="padding: 8px; background-color: #f9fafb;">
                  <a href="mailto:${email}" style="color: #2563eb; text-decoration: none;">${email}</a>
                </td>
              </tr>
              ${company ? `
              <tr>
                <td style="padding: 8px; background-color: #f3f4f6; font-weight: bold;">Company:</td>
                <td style="padding: 8px; background-color: #f9fafb;">${company}</td>
              </tr>
              ` : ''}
              ${phone ? `
              <tr>
                <td style="padding: 8px; background-color: #f3f4f6; font-weight: bold;">Phone:</td>
                <td style="padding: 8px; background-color: #f9fafb;">
                  <a href="tel:${phone}" style="color: #2563eb; text-decoration: none;">${phone}</a>
                </td>
              </tr>
              ` : ''}
              <tr>
                <td style="padding: 8px; background-color: #f3f4f6; font-weight: bold;">Service Interest:</td>
                <td style="padding: 8px; background-color: #f9fafb;">${service}</td>
              </tr>
            </table>
          </div>

          <div style="margin: 20px 0;">
            <h3 style="color: #333; margin-bottom: 10px;">Message:</h3>
            <div style="padding: 15px; background-color: #f9fafb; border-left: 4px solid #2563eb; white-space: pre-wrap;">
${message}
            </div>
          </div>

          <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #e5e7eb; color: #6b7280; font-size: 12px;">
            <p>This email was sent from the Hypecia Connect Services contact form.</p>
            <p>Submitted on: ${new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })}</p>
          </div>
        </div>
      `,
      replyTo: email,
    }

    // Send email
    await transporter.sendMail(mailOptions)

    return NextResponse.json(
      { message: 'Email sent successfully' },
      { status: 200 }
    )
  } catch (error) {
    console.error('Error sending email:', error)
    return NextResponse.json(
      { error: 'Failed to send email. Please try again later.' },
      { status: 500 }
    )
  }
}
