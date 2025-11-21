"use client"

import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import { useEffect } from 'react'
import { gsap } from 'gsap'

export default function TermsPage() {
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
              Terms & <span className="text-blue-600">Conditions</span>
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
                  Welcome to Hypecia Connect Services Pvt Ltd. These Terms and Conditions ("Terms") govern your use of our services and website. By engaging with our services, you agree to be bound by these Terms.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  Hypecia Connect Services Pvt Ltd, incorporated in March 2022, provides specialized solutions in green energy, industrial automation, and telecom/IT infrastructure sectors.
                </p>
              </div>

              <div className="mb-12">
                <h2 className="text-3xl font-bold mb-4">2. Services</h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Hypecia offers the following services:
                </p>
                <ul className="space-y-2 text-gray-600 ml-6">
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 font-bold">•</span>
                    <span>Green Energy Solutions including solar integration and energy monitoring</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 font-bold">•</span>
                    <span>Industrial Automation systems and operational optimization</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 font-bold">•</span>
                    <span>Telecom & IT Infrastructure deployment and maintenance</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 font-bold">•</span>
                    <span>Security & Surveillance systems with AI-enabled analytics</span>
                  </li>
                </ul>
              </div>

              <div className="mb-12">
                <h2 className="text-3xl font-bold mb-4">3. Project Engagement</h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  All projects begin with a formal agreement outlining scope, timeline, deliverables, and pricing. Project specifications may be adjusted through mutual written consent.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  Clients are responsible for providing timely access to sites, technical specifications, and necessary approvals as outlined in the project agreement.
                </p>
              </div>

              <div className="mb-12">
                <h2 className="text-3xl font-bold mb-4">4. Payment Terms</h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Payment schedules are defined in individual project agreements. Standard terms include:
                </p>
                <ul className="space-y-2 text-gray-600 ml-6">
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 font-bold">•</span>
                    <span>Initial deposit upon project commencement</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 font-bold">•</span>
                    <span>Milestone-based payments as defined in scope of work</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 font-bold">•</span>
                    <span>Final payment upon successful project completion and handover</span>
                  </li>
                </ul>
              </div>

              <div className="mb-12">
                <h2 className="text-3xl font-bold mb-4">5. Warranties and Guarantees</h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  We provide warranties on our installations and services as specified in individual project agreements. Standard warranty periods typically include:
                </p>
                <ul className="space-y-2 text-gray-600 ml-6">
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 font-bold">•</span>
                    <span>One-year service support on completed installations</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 font-bold">•</span>
                    <span>Manufacturer warranties on supplied equipment</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 font-bold">•</span>
                    <span>Performance guarantees as outlined in project specifications</span>
                  </li>
                </ul>
              </div>

              <div className="mb-12">
                <h2 className="text-3xl font-bold mb-4">6. Intellectual Property</h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  All designs, technical documentation, and proprietary methodologies developed by Hypecia remain our intellectual property unless explicitly transferred through written agreement.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  Upon full payment, clients receive rights to use installed systems and associated documentation for their intended operational purposes.
                </p>
              </div>

              <div className="mb-12">
                <h2 className="text-3xl font-bold mb-4">7. Limitation of Liability</h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Hypecia's liability is limited to the value of services provided under the specific project agreement. We are not liable for indirect, consequential, or incidental damages.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  Force majeure events, including natural disasters, regulatory changes, or circumstances beyond our reasonable control, may affect project timelines without liability.
                </p>
              </div>

              <div className="mb-12">
                <h2 className="text-3xl font-bold mb-4">8. Confidentiality</h2>
                <p className="text-gray-600 leading-relaxed">
                  We maintain strict confidentiality regarding client projects, technical specifications, and business information. Both parties agree not to disclose confidential information to third parties without prior written consent.
                </p>
              </div>

              <div className="mb-12">
                <h2 className="text-3xl font-bold mb-4">9. Termination</h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Either party may terminate agreements with written notice as specified in project contracts. Termination terms include:
                </p>
                <ul className="space-y-2 text-gray-600 ml-6">
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 font-bold">•</span>
                    <span>Payment for work completed to date of termination</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 font-bold">•</span>
                    <span>Return of client materials and equipment</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 font-bold">•</span>
                    <span>Obligations for confidentiality continue post-termination</span>
                  </li>
                </ul>
              </div>

              <div className="mb-12">
                <h2 className="text-3xl font-bold mb-4">10. Governing Law</h2>
                <p className="text-gray-600 leading-relaxed">
                  These Terms are governed by the laws of India. Any disputes shall be resolved through arbitration in accordance with Indian arbitration laws, with proceedings conducted in English.
                </p>
              </div>

              <div className="mb-12">
                <h2 className="text-3xl font-bold mb-4">11. Contact Information</h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  For questions regarding these Terms and Conditions, please contact:
                </p>
                <div className="bg-light-gray p-6 rounded-2xl">
                  <p className="font-bold mb-2">Hypecia Connect Services Pvt Ltd</p>
                  <p className="text-gray-600">Email: Hypeciaconnectservices@gmail.com</p>
                  <p className="text-gray-600">Phone: +91-9836012349</p>
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
