"use client"

import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import { Mail, Phone, MapPin, Send } from 'lucide-react'
import { useState } from 'react'
import HypeciaLoader from '@/components/logo_animation'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    service: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [showLoader, setShowLoader] = useState(true)
  const [startFadeIn, setStartFadeIn] = useState(false)
  const handleLoaderComplete = () => {
    setStartFadeIn(true)
    setTimeout(() => {
      setShowLoader(false)
    }, 100)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500))
    setIsSubmitting(false)
    setSubmitted(true)
    setFormData({ name: '', email: '', company: '', phone: '', service: '', message: '' })
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  return (
    <>
      {showLoader && (
        <HypeciaLoader onComplete={handleLoaderComplete} />
      )}
      <div className={`min-h-screen transition-opacity duration-700 ${startFadeIn ? 'opacity-100' : 'opacity-0'}`}>
        <Navigation />
        
        {/* Hero Section */}
        <section className="min-h-[70vh] flex items-center justify-center relative overflow-hidden pt-20">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-green-50 opacity-60" />
          <div className="container-custom relative z-10 text-center">
            <h1 className="text-huge mb-6">
              Let's <span className="text-blue-600">Talk</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto">
              Ready to transform your infrastructure? Get in touch with our team today.
            </p>
          </div>
        </section>

        {/* Contact Section */}
        <section className="section-padding">
          <div className="container-custom">
            <div className="grid lg:grid-cols-2 gap-16">
              
              {/* Contact Info */}
              <div>
                <h2 className="text-4xl md:text-5xl font-bold mb-6">Get in Touch</h2>
                <p className="text-xl text-gray-600 mb-12">
                  We'd love to hear from you. Fill out the form or reach out directly using the contact information below.
                </p>

                <div className="space-y-8">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <Mail className="text-blue-600" size={20} />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg mb-1">Email Us</h3>
                      <a href="mailto:Hypeciaconnectservices@gmail.com" className="text-gray-600 hover:text-blue-600 transition-colors">
                        Hypeciaconnectservices@gmail.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <Phone className="text-green-600" size={20} />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg mb-1">Call Us</h3>
                      <a href="tel:+919836012349" className="text-gray-600 hover:text-green-600 transition-colors">
                        +91-9836012349
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <MapPin className="text-purple-600" size={20} />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg mb-1">Visit Us</h3>
                      <p className="text-gray-600">
                        Hypecia Connect Services Pvt Ltd<br />
                        India
                      </p>
                    </div>
                  </div>
                </div>

                {/* Business Hours */}
                <div className="mt-12 p-6 bg-light-gray rounded-2xl">
                  <h3 className="font-bold text-lg mb-4">Business Hours</h3>
                  <div className="space-y-2 text-gray-600">
                    <p><span className="font-semibold">Monday - Friday:</span> 9:00 AM - 6:00 PM</p>
                    <p><span className="font-semibold">Saturday:</span> 10:00 AM - 4:00 PM</p>
                    <p><span className="font-semibold">Sunday:</span> Closed</p>
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <div className="bg-white border-2 border-gray-200 rounded-3xl p-8 md:p-12">
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
                    <div>
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
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-blue-600 focus:outline-none transition-colors"
                        placeholder="John Doe"
                      />
                    </div>

                    <div>
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
                      <div>
                        <label htmlFor="company" className="block text-sm font-semibold mb-2">
                          Company
                        </label>
                        <input
                          type="text"
                          id="company"
                          name="company"
                          value={formData.company}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-blue-600 focus:outline-none transition-colors"
                          placeholder="Company Name"
                        />
                      </div>

                      <div>
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

                    <div>
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

                    <div>
                      <label htmlFor="message" className="block text-sm font-semibold mb-2">
                        Message *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={5}
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-blue-600 focus:outline-none transition-colors resize-none"
                        placeholder="Tell us about your project..."
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-black book-call-btn text-white px-6 py-4 rounded-full text-lg font-semibold hover:bg-blue-600 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                    >
                      {isSubmitting ? 'Sending...' : 'Send Message'}
                      <Send size={20} />
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section-padding bg-black text-white">
          <div className="container-custom text-center">
            <h2 className="text-5xl md:text-6xl font-bold mb-6">
              Prefer a Quick Call?
            </h2>
            <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
              Schedule a 30-minute consultation to discuss your project requirements.
            </p>
            <a href="tel:+919836012349" className="bg-white contact-btn text-black px-8 py-4 rounded-full text-lg font-semibold hover:bg-green-600 hover:text-white transition-all inline-block">
              Call Now: +91-9836012349
            </a>
          </div>
        </section>

        <Footer />
      </div>
    </>
  )
}
