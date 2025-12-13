"use client"

import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import { Mail, Phone, MapPin, Send, AlertCircle } from 'lucide-react'
import { useState, useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { SplitText } from 'gsap/SplitText'

gsap.registerPlugin(ScrollTrigger, SplitText)

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    service: '',
    message: '',
    website: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState('')
  const [validationErrors, setValidationErrors] = useState<string[]>([])

  // Hero refs
  const heroTitleRef = useRef<HTMLHeadingElement>(null)
  const heroDescRef = useRef<HTMLParagraphElement>(null)

  // Contact section refs
  const contactSectionRef = useRef<HTMLDivElement>(null)

  // CTA refs
  const ctaSectionRef = useRef<HTMLDivElement>(null)

  // Client-side validation function
  const validateForm = () => {
    const errors: string[] = []
    
    // Name validation
    if (formData.name.trim().length < 2 || formData.name.trim().length > 100) {
      errors.push('Name must be between 2 and 100 characters')
    }
    if (!/^[a-zA-Z\s\-']+$/.test(formData.name.trim())) {
      errors.push('Name can only contain letters, spaces, hyphens, and apostrophes')
    }
    
    // Email validation
    if (!/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(formData.email.trim())) {
      errors.push('Please enter a valid email address')
    }
    
    // Phone validation (if provided)
    if (formData.phone && !/^[\d\s\+\-\(\)]{10,20}$/.test(formData.phone.trim())) {
      errors.push('Please enter a valid phone number')
    }
    
    // Service validation
    if (!formData.service) {
      errors.push('Please select a service')
    }
    
    // Message validation
    if (formData.message.trim().length < 10) {
      errors.push('Message must be at least 10 characters')
    }
    if (formData.message.trim().length > 2000) {
      errors.push('Message must not exceed 2000 characters')
    }
    
    // Check for suspicious patterns
    const suspiciousPatterns = [
      /<script/i,
      /javascript:/i,
      /on\w+\s*=/i,
      /<iframe/i,
      /\bselect\b.*\bfrom\b/i,
      /\bunion\b.*\bselect\b/i,
      /\bdrop\b.*\btable\b/i,
    ]
    
    const allText = `${formData.name} ${formData.email} ${formData.message}`
    for (const pattern of suspiciousPatterns) {
      if (pattern.test(allText)) {
        errors.push('Invalid characters detected in your input')
        break
      }
    }
    
    return errors
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    // Check honeypot - if filled, it's a bot
    if (formData.website) {
      console.log('Bot detected')
      // Show success to bot but don't actually submit
      setSubmitted(true)
      return
    }
    
    // Clear previous errors
    setError('')
    setValidationErrors([])
    
    // Client-side validation
    const errors = validateForm()
    if (errors.length > 0) {
      setValidationErrors(errors)
      return
    }
    
    // Check rate limiting on client side (basic protection)
    if (typeof window !== 'undefined') {
      const lastSubmit = localStorage.getItem('lastContactSubmit')
      if (lastSubmit) {
        const timeSinceLastSubmit = Date.now() - parseInt(lastSubmit)
        if (timeSinceLastSubmit < 60000) { // 1 minute cooldown
          setError('Please wait a moment before submitting again')
          return
        }
      }
    }
    
    setIsSubmitting(true)

    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name.trim(),
          email: formData.email.trim().toLowerCase(),
          company: formData.company.trim(),
          phone: formData.phone.trim(),
          service: formData.service,
          message: formData.message.trim(),
        }),
      })

      const data = await response.json()

      if (!response.ok) {
        if (response.status === 429) {
          throw new Error('Too many requests. Please try again in 15 minutes.')
        }
        throw new Error(data.error || 'Failed to send email')
      }

      // Store submission timestamp
      if (typeof window !== 'undefined') {
        localStorage.setItem('lastContactSubmit', Date.now().toString())
      }
      
      setSubmitted(true)
      setFormData({ 
        name: '', 
        email: '', 
        company: '', 
        phone: '', 
        service: '', 
        message: '',
        website: ''
      })
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Something went wrong. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    
    // Clear validation errors when user starts typing
    if (validationErrors.length > 0) {
      setValidationErrors([])
    }
    
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      const ctx = gsap.context(() => {

        // ===== HERO SECTION ANIMATION =====
        if (heroTitleRef.current) {
          const titleSplit = new SplitText(heroTitleRef.current, { type: 'words,chars' })
          gsap.set(heroTitleRef.current, { opacity: 1 })

          gsap.from(titleSplit.chars, {
            opacity: 0,
            y: 100,
            rotateX: -90,
            stagger: 0.02,
            duration: 1,
            ease: 'back.out(1.7)',
            scrollTrigger: {
              trigger: heroTitleRef.current,
              start: 'top 80%',
              toggleActions: 'play none none reverse'
            }
          })
        }

        if (heroDescRef.current) {
          const descSplit = new SplitText(heroDescRef.current, { type: 'words' })
          gsap.set(heroDescRef.current, { opacity: 1 })

          gsap.from(descSplit.words, {
            opacity: 0,
            y: 50,
            stagger: 0.03,
            duration: 0.8,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: heroDescRef.current,
              start: 'top 80%',
              toggleActions: 'play none none reverse'
            }
          })
        }

        // ===== CONTACT SECTION ANIMATION =====
        if (contactSectionRef.current) {
          const leftColumn = contactSectionRef.current.querySelector('.contact-info')
          const rightColumn = contactSectionRef.current.querySelector('.contact-form')

          // Left column elements
          if (leftColumn) {
            const title = leftColumn.querySelector('.contact-title')
            const description = leftColumn.querySelector('.contact-description')
            const contactItems = leftColumn.querySelectorAll('.contact-item')
            const businessHours = leftColumn.querySelector('.business-hours')

            // Title animation
            if (title) {
              const titleSplit = new SplitText(title, { type: 'words' })
              gsap.from(titleSplit.words, {
                opacity: 0,
                y: 50,
                stagger: 0.03,
                duration: 0.8,
                ease: 'back.out(1.7)',
                scrollTrigger: {
                  trigger: title,
                  start: 'top 80%',
                  toggleActions: 'play none none reverse'
                }
              })
            }

            // Description animation
            if (description) {
              const descSplit = new SplitText(description, { type: 'words' })
              gsap.from(descSplit.words, {
                opacity: 0,
                y: 30,
                stagger: 0.02,
                duration: 0.6,
                ease: 'power2.out',
                scrollTrigger: {
                  trigger: description,
                  start: 'top 80%',
                  toggleActions: 'play none none reverse'
                }
              })
            }

            // Contact items animation
            if (contactItems && contactItems.length > 0) {
              contactItems.forEach((item) => {
                const icon = item.querySelector('.contact-icon')
                const content = item.querySelector('.contact-content')

                if (icon) {
                  gsap.from(icon, {
                    opacity: 0,
                    scale: 0,
                    rotation: -180,
                    duration: 0.6,
                    ease: 'back.out(1.7)',
                    scrollTrigger: {
                      trigger: item,
                      start: 'top 85%',
                      toggleActions: 'play none none reverse'
                    }
                  })
                }

                if (content) {
                  gsap.from(content, {
                    opacity: 0,
                    x: -30,
                    duration: 0.6,
                    delay: 0.2,
                    ease: 'power3.out',
                    scrollTrigger: {
                      trigger: item,
                      start: 'top 85%',
                      toggleActions: 'play none none reverse'
                    }
                  })
                }
              })
            }

            // Business hours animation
            if (businessHours) {
              gsap.from(businessHours, {
                opacity: 0,
                y: 40,
                duration: 0.8,
                ease: 'power3.out',
                scrollTrigger: {
                  trigger: businessHours,
                  start: 'top 85%',
                  toggleActions: 'play none none reverse'
                }
              })
            }
          }

          // Right column (form) animation
          if (rightColumn) {
            gsap.from(rightColumn, {
              opacity: 0,
              x: 50,
              y: 50,
              duration: 1,
              ease: 'power3.out',
              scrollTrigger: {
                trigger: rightColumn,
                start: 'top 75%',
                toggleActions: 'play none none reverse'
              }
            })

            // Form fields animation
            const formFields = rightColumn.querySelectorAll('.form-field')
            if (formFields && formFields.length > 0) {
              gsap.from(formFields, {
                opacity: 0,
                y: 30,
                stagger: 0.08,
                duration: 0.6,
                delay: 0.3,
                ease: 'power2.out',
                scrollTrigger: {
                  trigger: rightColumn,
                  start: 'top 75%',
                  toggleActions: 'play none none reverse'
                }
              })
            }

            // Submit button animation
            const submitButton = rightColumn.querySelector('.submit-button')
            if (submitButton) {
              gsap.from(submitButton, {
                opacity: 0,
                y: 30,
                scale: 0.9,
                duration: 0.6,
                delay: 0.6,
                ease: 'back.out(1.7)',
                scrollTrigger: {
                  trigger: rightColumn,
                  start: 'top 75%',
                  toggleActions: 'play none none reverse'
                }
              })
            }
          }
        }

        // ===== CTA SECTION ANIMATION =====
        if (ctaSectionRef.current) {
          const ctaTitle = ctaSectionRef.current.querySelector('h2')
          const ctaDesc = ctaSectionRef.current.querySelector('p')
          const ctaButton = ctaSectionRef.current.querySelector('a')

          gsap.set([ctaTitle, ctaDesc, ctaButton], { opacity: 0, y: 60 })

          gsap.to([ctaTitle, ctaDesc, ctaButton], {
            opacity: 1,
            y: 0,
            stagger: 0.2,
            duration: 0.8,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: ctaSectionRef.current,
              start: 'top 70%',
              toggleActions: 'play none none reverse'
            }
          })
        }

        // ===== FOOTER SECTION ANIMATION =====
        const footerSection = document.querySelector(".footer-section")
        if (footerSection) {
          const footerItems = footerSection.querySelectorAll('.footer-animate')

          gsap.set(footerItems, {
            opacity: 0,
            y: 60
          })

          gsap.to(footerItems, {
            opacity: 1,
            y: 0,
            stagger: 0.15,
            duration: 0.9,
            ease: "power3.out",
            scrollTrigger: {
              trigger: footerSection,
              start: "top 80%",
              end: "top 50%",
              toggleActions: "play none none reverse",
              markers: false,
              id: "contact-footer"
            },
          })
        }

      })

      return () => ctx.revert()
    }, 100)

    return () => clearTimeout(timer)
  }, [])

  return (
    <>
      <div className="min-h-screen">
        <Navigation />

        {/* Hero Section */}
        <section className="min-h-[70vh] flex items-center justify-center relative overflow-hidden pt-20">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-green-50 opacity-60" />
          <div className="container-custom relative z-10 text-center">
            <h1 ref={heroTitleRef} className="text-huge mb-6" style={{ opacity: 0 }}>
              Let's <span className="text-blue-600">Talk</span>
            </h1>
            <p ref={heroDescRef} className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto" style={{ opacity: 0 }}>
              Ready to transform your infrastructure? Get in touch with our team today.
            </p>
          </div>
        </section>

        {/* Contact Section */}
        <section ref={contactSectionRef} className="section-padding">
          <div className="container-custom">
            <div className="grid lg:grid-cols-2 gap-16">

              {/* Contact Info */}
              <div className="contact-info">
                <h2 className="contact-title text-4xl md:text-5xl font-bold mb-6">Get in Touch</h2>
                <p className="contact-description text-xl text-gray-600 mb-12">
                  We'd love to hear from you. Fill out the form or reach out directly using the contact information below.
                </p>

                <div className="space-y-8">
                  <div className="contact-item flex items-start gap-4">
                    <div className="contact-icon w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <Mail className="text-blue-600" size={20} />
                    </div>
                    <div className="contact-content">
                      <h3 className="font-bold text-lg mb-1">Email Us</h3>
                      <a href="mailto:info@hypeciaconnect.com" className="text-gray-600 hover:text-blue-600 transition-colors">
                        info@hypeciaconnect.com
                      </a>
                    </div>
                  </div>

                  <div className="contact-item flex items-start gap-4">
                    <div className="contact-icon w-12 h-12 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <Phone className="text-green-600" size={20} />
                    </div>
                    <div className="contact-content">
                      <h3 className="font-bold text-lg mb-1">Call Us</h3>
                      <a href="tel:+919836012349" className="text-gray-600 hover:text-green-600 transition-colors">
                        +91-9836012349
                      </a>
                      <br />
                      <a href="tel:+919870297922" className="text-gray-600 hover:text-green-600 transition-colors">
                        +91-9870297922
                      </a>
                    </div>
                  </div>

                  <div className="contact-item flex items-start gap-4">
                    <div className="contact-icon w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <MapPin className="text-purple-600" size={20} />
                    </div>
                    <div className="contact-content">
                      <h3 className="font-bold text-lg mb-1">Visit Us</h3>
                      <p className="text-gray-600">
                        Hypecia Connect Services Pvt Ltd<br />
                        India
                      </p>
                    </div>
                  </div>
                </div>

                {/* Business Hours */}
                <div className="business-hours mt-12 p-6 bg-light-gray rounded-2xl">
                  <h3 className="font-bold text-lg mb-4">Business Hours</h3>
                  <div className="space-y-2 text-gray-600">
                    <p><span className="font-semibold">Monday - Friday:</span> 9:00 AM - 6:00 PM</p>
                    <p><span className="font-semibold">Saturday:</span> 10:00 AM - 4:00 PM</p>
                    <p><span className="font-semibold">Sunday:</span> Closed</p>
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <div className="contact-form bg-white border-2 border-gray-200 rounded-3xl p-8 md:p-12">
                {submitted ? (
                  <div className="text-center py-12">
                    <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                      <Send className="text-green-600" size={32} />
                    </div>
                    <h3 className="text-3xl font-bold mb-4">Thank You!</h3>
                    <p className="text-gray-600 mb-8">
                      We've received your message and will get back to you within 24 hours.
                    </p>
                    <button
                      onClick={() => setSubmitted(false)}
                      className="bg-black text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-600 transition-all"
                    >
                      Send Another Message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Honeypot field - hidden from humans, visible to bots */}
                    <div style={{ position: 'absolute', left: '-9999px' }} aria-hidden="true" tabIndex={-1}>
                      <label htmlFor="website">Website (leave blank)</label>
                      <input
                        type="text"
                        id="website"
                        name="website"
                        tabIndex={-1}
                        autoComplete="off"
                        value={formData.website}
                        onChange={handleChange}
                      />
                    </div>

                    {/* Error Messages */}
                    {error && (
                      <div className="bg-red-50 border-2 border-red-200 text-red-700 px-4 py-3 rounded-xl flex items-start gap-3">
                        <AlertCircle className="flex-shrink-0 mt-0.5" size={20} />
                        <div>
                          <p className="font-semibold">Error</p>
                          <p className="text-sm">{error}</p>
                        </div>
                      </div>
                    )}

                    {/* Validation Errors */}
                    {validationErrors.length > 0 && (
                      <div className="bg-amber-50 border-2 border-amber-200 text-amber-700 px-4 py-3 rounded-xl">
                        <p className="font-semibold mb-2 flex items-center gap-2">
                          <AlertCircle size={18} />
                          Please fix the following errors:
                        </p>
                        <ul className="text-sm space-y-1 ml-6 list-disc">
                          {validationErrors.map((err, idx) => (
                            <li key={idx}>{err}</li>
                          ))}
                        </ul>
                      </div>
                    )}

                    <div className="form-field">
                      <label htmlFor="name" className="block text-sm font-semibold mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        maxLength={100}
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-blue-600 focus:outline-none transition-colors"
                        placeholder="John Doe"
                      />
                    </div>

                    <div className="form-field">
                      <label htmlFor="email" className="block text-sm font-semibold mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-blue-600 focus:outline-none transition-colors"
                        placeholder="john@company.com"
                      />
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="form-field">
                        <label htmlFor="company" className="block text-sm font-semibold mb-2">
                          Company
                        </label>
                        <input
                          type="text"
                          id="company"
                          name="company"
                          value={formData.company}
                          onChange={handleChange}
                          maxLength={100}
                          className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-blue-600 focus:outline-none transition-colors"
                          placeholder="Company Name"
                        />
                      </div>

                      <div className="form-field">
                        <label htmlFor="phone" className="block text-sm font-semibold mb-2">
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-blue-600 focus:outline-none transition-colors"
                          placeholder="+91 9876543210"
                        />
                      </div>
                    </div>

                    <div className="form-field">
                      <label htmlFor="service" className="block text-sm font-semibold mb-2">
                        Service Interest *
                      </label>
                      <select
                        id="service"
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-blue-600 focus:outline-none transition-colors"
                      >
                        <option value="">Select a service</option>
                        <option value="green-energy">Green Energy Solutions</option>
                        <option value="industrial-automation">Industrial Automation</option>
                        <option value="telecom-it">Telecom & IT Infrastructure</option>
                        <option value="security-surveillance">Security & Surveillance</option>
                        <option value="other">Other</option>
                      </select>
                    </div>

                    <div className="form-field">
                      <div className="flex justify-between items-center mb-2">
                        <label htmlFor="message" className="text-sm font-semibold">
                          Message *
                        </label>
                        <span className={`text-xs ${formData.message.length > 1900 ? 'text-red-600 font-semibold' : 'text-gray-500'}`}>
                          {formData.message.length}/2000
                        </span>
                      </div>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        maxLength={2000}
                        rows={5}
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-blue-600 focus:outline-none transition-colors resize-none"
                        placeholder="Tell us about your project..."
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="submit-button w-full bg-black book-call-btn text-white px-6 py-4 rounded-full text-lg font-semibold hover:bg-blue-600 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                    >
                      {isSubmitting ? (
                        <>
                          <span className="animate-spin">⏳</span>
                          Sending...
                        </>
                      ) : (
                        <>
                          Send Message
                          <Send size={20} />
                        </>
                      )}
                    </button>

                    {/* Security Notice */}
                    <p className="text-xs text-gray-500 text-center mt-4">
                      🔒 Your information is secure and will never be shared with third parties.
                    </p>
                  </form>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section ref={ctaSectionRef} className="section-padding bg-black text-white h-[80vh] flex items-center">
          <div className="container-custom text-center">
            <h2 className="text-5xl md:text-6xl font-bold mb-6">
              Prefer a Quick Call?
            </h2>
            <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
              Schedule a 30-minute consultation to discuss your project requirements.
            </p>
            <a href="tel:+919870297922" className="bg-white contact-btn text-black px-8 py-4 rounded-full text-lg font-semibold hover:bg-green-600 hover:text-white transition-all inline-block">
              Call Now: +91-9870297922
            </a>
          </div>
        </section>

        <Footer />
      </div>
    </>
  )
}