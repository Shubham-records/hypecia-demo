"use client"

import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import { useEffect } from 'react'
import { gsap } from 'gsap'


export default function PrivacyPage() {
  useEffect(() => {
        // Add a small delay to ensure DOM is fully mounted
        const timer = setTimeout(() => {
          const ctx = gsap.context(() => {
            // ===== FOOTER SECTION ANIMATION =====
            const footerSection = document.querySelector(".footer-section")
            if (footerSection) {
              const footerItems = footerSection.querySelectorAll('.footer-animate')
      
              // Set initial state explicitly
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
                  start: "top 80%", // Adjusted to trigger earlier
                  end: "top 50%",
                  toggleActions: "play none none reverse",
                  markers: false, // Set to true for debugging
                  id: "team-footer"
                },
              })
            }
          })
      
          return () => ctx.revert()
        }, 100) // 100ms delay
        
        return () => clearTimeout(timer)
      }, [])
  return (
    <>
      <div className={`min-h-screen`}>
        <Navigation />
        
        {/* Hero Section */}
        <section className="min-h-[50vh] flex items-center justify-center relative overflow-hidden pt-20">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-green-50 opacity-60" />
          <div className="container-custom relative z-10 text-center">
            <h1 className="text-huge mb-6">
              Privacy <span className="text-blue-600">Policy</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Last Updated: January 2025
            </p>
          </div>
        </section>

        {/* Content Section */}
        <section className="section-padding">
          <div className="container-custom max-w-4xl">
            <div className="prose prose-lg max-w-none">
              
              <div className="mb-12">
                <h2 className="text-3xl font-bold mb-4">1. Introduction</h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Hypecia Connect Services Pvt Ltd ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or engage our services.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  By using our services, you consent to the data practices described in this policy.
                </p>
              </div>

              <div className="mb-12">
                <h2 className="text-3xl font-bold mb-4">2. Information We Collect</h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  We collect information that you provide directly to us, including:
                </p>
                <ul className="space-y-2 text-gray-600 ml-6 mb-6">
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 font-bold">•</span>
                    <span><strong>Personal Information:</strong> Name, email address, phone number, company name</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 font-bold">•</span>
                    <span><strong>Project Information:</strong> Technical requirements, site details, project specifications</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 font-bold">•</span>
                    <span><strong>Communication Data:</strong> Emails, phone conversations, meeting notes</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 font-bold">•</span>
                    <span><strong>Business Information:</strong> Company size, industry, project budget</span>
                  </li>
                </ul>
                <p className="text-gray-600 leading-relaxed">
                  We also automatically collect certain information when you visit our website, including IP address, browser type, operating system, and browsing behavior.
                </p>
              </div>

              <div className="mb-12">
                <h2 className="text-3xl font-bold mb-4">3. How We Use Your Information</h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  We use the information we collect to:
                </p>
                <ul className="space-y-2 text-gray-600 ml-6">
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 font-bold">•</span>
                    <span>Provide, maintain, and improve our services</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 font-bold">•</span>
                    <span>Process and fulfill project requests</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 font-bold">•</span>
                    <span>Communicate with you about projects, updates, and service information</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 font-bold">•</span>
                    <span>Send marketing communications (with your consent)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 font-bold">•</span>
                    <span>Comply with legal obligations and resolve disputes</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 font-bold">•</span>
                    <span>Improve our website and user experience</span>
                  </li>
                </ul>
              </div>

              <div className="mb-12">
                <h2 className="text-3xl font-bold mb-4">4. Information Sharing and Disclosure</h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  We do not sell your personal information. We may share your information in the following circumstances:
                </p>
                <ul className="space-y-2 text-gray-600 ml-6">
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 font-bold">•</span>
                    <span><strong>Service Providers:</strong> Third-party vendors who perform services on our behalf</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 font-bold">•</span>
                    <span><strong>Business Partners:</strong> Subcontractors and partners involved in project execution</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 font-bold">•</span>
                    <span><strong>Legal Compliance:</strong> When required by law or to protect our rights</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 font-bold">•</span>
                    <span><strong>Business Transfers:</strong> In connection with mergers, acquisitions, or asset sales</span>
                  </li>
                </ul>
              </div>

              <div className="mb-12">
                <h2 className="text-3xl font-bold mb-4">5. Data Security</h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  We implement appropriate technical and organizational measures to protect your information against unauthorized access, alteration, disclosure, or destruction. These measures include:
                </p>
                <ul className="space-y-2 text-gray-600 ml-6 mb-4">
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 font-bold">•</span>
                    <span>Secure servers and encrypted data transmission</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 font-bold">•</span>
                    <span>Regular security assessments and updates</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 font-bold">•</span>
                    <span>Access controls and authentication procedures</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 font-bold">•</span>
                    <span>Employee training on data protection</span>
                  </li>
                </ul>
                <p className="text-gray-600 leading-relaxed">
                  However, no method of transmission over the internet is 100% secure, and we cannot guarantee absolute security.
                </p>
              </div>

              <div className="mb-12">
                <h2 className="text-3xl font-bold mb-4">6. Data Retention</h2>
                <p className="text-gray-600 leading-relaxed">
                  We retain your personal information for as long as necessary to fulfill the purposes outlined in this Privacy Policy, unless a longer retention period is required by law. Project-related data is typically retained for the duration of the project plus seven years for legal and warranty purposes.
                </p>
              </div>

              <div className="mb-12">
                <h2 className="text-3xl font-bold mb-4">7. Your Rights and Choices</h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  You have the following rights regarding your personal information:
                </p>
                <ul className="space-y-2 text-gray-600 ml-6">
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 font-bold">•</span>
                    <span><strong>Access:</strong> Request a copy of your personal information</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 font-bold">•</span>
                    <span><strong>Correction:</strong> Request correction of inaccurate information</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 font-bold">•</span>
                    <span><strong>Deletion:</strong> Request deletion of your information (subject to legal requirements)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 font-bold">•</span>
                    <span><strong>Opt-Out:</strong> Unsubscribe from marketing communications</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 font-bold">•</span>
                    <span><strong>Portability:</strong> Receive your data in a structured format</span>
                  </li>
                </ul>
              </div>

              <div className="mb-12">
                <h2 className="text-3xl font-bold mb-4">8. Cookies and Tracking Technologies</h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  We use cookies and similar tracking technologies to enhance your browsing experience. You can control cookie preferences through your browser settings. Types of cookies we use include:
                </p>
                <ul className="space-y-2 text-gray-600 ml-6">
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 font-bold">•</span>
                    <span><strong>Essential Cookies:</strong> Required for website functionality</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 font-bold">•</span>
                    <span><strong>Analytics Cookies:</strong> Help us understand website usage</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 font-bold">•</span>
                    <span><strong>Marketing Cookies:</strong> Used for targeted advertising (with consent)</span>
                  </li>
                </ul>
              </div>

              <div className="mb-12">
                <h2 className="text-3xl font-bold mb-4">9. Children's Privacy</h2>
                <p className="text-gray-600 leading-relaxed">
                  Our services are not directed to individuals under 18 years of age. We do not knowingly collect personal information from children. If we learn we have collected information from a child, we will delete it promptly.
                </p>
              </div>

              <div className="mb-12">
                <h2 className="text-3xl font-bold mb-4">10. International Data Transfers</h2>
                <p className="text-gray-600 leading-relaxed">
                  Your information may be transferred to and processed in countries other than your country of residence. We ensure appropriate safeguards are in place to protect your information in accordance with this Privacy Policy.
                </p>
              </div>

              <div className="mb-12">
                <h2 className="text-3xl font-bold mb-4">11. Changes to This Privacy Policy</h2>
                <p className="text-gray-600 leading-relaxed">
                  We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last Updated" date. Your continued use of our services constitutes acceptance of the updated policy.
                </p>
              </div>

              <div className="mb-12">
                <h2 className="text-3xl font-bold mb-4">12. Contact Us</h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  If you have questions about this Privacy Policy or wish to exercise your rights, please contact us:
                </p>
                <div className="bg-light-gray p-6 rounded-2xl">
                  <p className="font-bold mb-2">Hypecia Connect Services Pvt Ltd</p>
                  <p className="text-gray-600">Email: Hypeciaconnectservices@gmail.com</p>
                  <p className="text-gray-600">Phone: +91-9836012349</p>
                  <p className="text-gray-600 mt-4">
                    For data protection inquiries, please include "Privacy Request" in your email subject line.
                  </p>
                </div>
              </div>

            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  )
}
