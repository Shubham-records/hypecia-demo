import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'
import { rateLimit } from '@/lib/rate-limit'
import DOMPurify from 'isomorphic-dompurify'
import { addToGoogleSheets } from '@/lib/google-sheets'

// Rate limiter: 5 requests per 15 minutes per IP
const limiter = rateLimit({
  interval: 15 * 60 * 1000, // 15 minutes
  uniqueTokenPerInterval: 500,
})

// Input validation and sanitization
function validateAndSanitize(data: any) {
  const errors: string[] = []

  // Name validation (2-100 chars, letters, spaces, hyphens only)
  const nameRegex = /^[a-zA-Z\s\-']{2,100}$/
  if (!data.name || !nameRegex.test(data.name.trim())) {
    errors.push('Invalid name format')
  }

  // Email validation (proper email format)
  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
  if (!data.email || !emailRegex.test(data.email.trim())) {
    errors.push('Invalid email format')
  }

  // Company validation (optional, 2-100 chars if provided)
  if (data.company && (data.company.trim().length < 2 || data.company.trim().length > 100)) {
    errors.push('Invalid company name')
  }

  // Phone validation (optional, but must be valid if provided)
  const phoneRegex = /^[\d\s\+\-\(\)]{10,20}$/
  if (data.phone && !phoneRegex.test(data.phone.trim())) {
    errors.push('Invalid phone format')
  }

  // Service validation (must be from allowed list)
  const allowedServices = ['green-energy', 'industrial-automation', 'telecom-it', 'security-surveillance', 'other']
  if (!data.service || !allowedServices.includes(data.service)) {
    errors.push('Invalid service selection')
  }

  // Message validation (10-2000 chars)
  if (!data.message || data.message.trim().length < 10 || data.message.trim().length > 2000) {
    errors.push('Message must be between 10 and 2000 characters')
  }

  // Check for suspicious patterns
  const suspiciousPatterns = [
    /<script/i,
    /javascript:/i,
    /on\w+\s*=/i, // event handlers like onclick=
    /<iframe/i,
    /\bexec\b/i,
    /\bselect\b.*\bfrom\b/i, // SQL injection patterns
    /\bunion\b.*\bselect\b/i,
    /\bdrop\b.*\btable\b/i,
    /\binsert\b.*\binto\b/i,
    /\bupdate\b.*\bset\b/i,
    /\bdelete\b.*\bfrom\b/i,
    /\-\-/,
    /;.*drop/i,
    /'\s*or\s*'1'\s*=\s*'1/i,
  ]

  const allText = `${data.name} ${data.email} ${data.company} ${data.phone} ${data.message}`
  for (const pattern of suspiciousPatterns) {
    if (pattern.test(allText)) {
      errors.push('Suspicious content detected')
      break
    }
  }

  return {
    isValid: errors.length === 0,
    errors,
    sanitized: {
      name: DOMPurify.sanitize(data.name?.trim() || ''),
      email: DOMPurify.sanitize(data.email?.trim().toLowerCase() || ''),
      company: DOMPurify.sanitize(data.company?.trim() || ''),
      phone: DOMPurify.sanitize(data.phone?.trim() || ''),
      service: data.service,
      message: DOMPurify.sanitize(data.message?.trim() || ''),
    }
  }
}

// Honeypot check (add hidden field in frontend)
function checkHoneypot(data: any): boolean {
  // If honeypot field is filled, it's likely a bot
  return !data.website && !data.url && !data.honeypot
}

export async function POST(request: NextRequest) {
  try {
    // Get IP for rate limiting
    const ip = request.headers.get('x-forwarded-for') || 
               request.headers.get('x-real-ip') || 
               'unknown'

    // Apply rate limiting
    try {
      await limiter.check(5, ip) // 5 requests per interval
    } catch {
      return NextResponse.json(
        { error: 'Too many requests. Please try again later.' },
        { status: 429 }
      )
    }

    // Parse body with size limit check
    const contentLength = request.headers.get('content-length')
    if (contentLength && parseInt(contentLength) > 50000) { // 50KB limit
      return NextResponse.json(
        { error: 'Request too large' },
        { status: 413 }
      )
    }

    const body = await request.json()

    // Honeypot check
    if (!checkHoneypot(body)) {
      console.warn('Honeypot triggered:', ip)
      // Return success to not alert the bot
      return NextResponse.json(
        { message: 'Email sent successfully' },
        { status: 200 }
      )
    }

    // Validate and sanitize input
    const validation = validateAndSanitize(body)
    if (!validation.isValid) {
      return NextResponse.json(
        { error: 'Invalid input', details: validation.errors },
        { status: 400 }
      )
    }

    const { name, email, company, phone, service, message } = validation.sanitized

    // Validate environment variables
    if (!process.env.SMTP_USER || !process.env.SMTP_PASS) {
      console.error('SMTP credentials not configured')
      return NextResponse.json(
        { error: 'Email service not configured' },
        { status: 500 }
      )
    }

    // Create transporter with secure settings
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || 'smtp.zoho.com',
      port: parseInt(process.env.SMTP_PORT || '587'),
      secure: process.env.SMTP_PORT === '465',
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
      tls: {
        rejectUnauthorized: true, // Verify SSL certificate
        minVersion: 'TLSv1.2', // Minimum TLS version
      },
    })

    // Service name mapping for display
    const serviceNames: Record<string, string> = {
      'green-energy': 'Green Energy Solutions',
      'industrial-automation': 'Industrial Automation',
      'telecom-it': 'Telecom & IT Infrastructure',
      'security-surveillance': 'Security & Surveillance',
      'other': 'Other'
    }

    // Email content with escaped HTML
    const mailOptions = {
      from: process.env.SMTP_FROM || process.env.SMTP_USER,
      to: process.env.SMTP_TO || process.env.SMTP_USER,
      subject: `New Contact Form - ${serviceNames[service] || service}`,
      text: `
New Contact Form Submission

Contact Details:
Name: ${name}
Email: ${email}
${company ? `Company: ${company}` : ''}
${phone ? `Phone: ${phone}` : ''}
Service Interest: ${serviceNames[service] || service}

Message:
${message}

Submitted on: ${new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })}
IP Address: ${ip}
      `,
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
                <td style="padding: 8px; background-color: #f3f4f6; font-weight: bold;">Service:</td>
                <td style="padding: 8px; background-color: #f9fafb;">${serviceNames[service] || service}</td>
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
            <p>IP Address: ${ip}</p>
          </div>
        </div>
      `,
      replyTo: email,
    }

    // Send email with timeout
    await Promise.race([
      transporter.sendMail(mailOptions),
      new Promise((_, reject) => 
        setTimeout(() => reject(new Error('Email timeout')), 30000)
      )
    ])

    await Promise.race([
      transporter.sendMail(mailOptions),
      new Promise((_, reject) => 
        setTimeout(() => reject(new Error('Email timeout')), 30000)
      )
    ])

    addToGoogleSheets({
      name,
      email,
      company,
      phone,
      service,
      message,
      ipAddress: ip,
    }).catch(err => {
      console.error('Google Sheets failed (non-critical):', err);
    });

    console.log(`Contact form submitted successfully from ${email} (${ip})`)

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