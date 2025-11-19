"use client"

import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import { Mail, Linkedin } from 'lucide-react'

export default function TeamPage() {

  return (
    <>
      <div className={`min-h-screen`}>
        <Navigation />
        
        {/* Hero Section */}
        <section className="min-h-[70vh] flex items-center justify-center relative overflow-hidden pt-20">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-green-50 opacity-60" />
          <div className="container-custom relative z-10 text-center">
            <h1 className="text-huge mb-6">
              Meet Our <span className="text-blue-600">Team</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto">
              Expert professionals driving sustainable transformation across industries.
            </p>
          </div>
        </section>

        {/* Leadership Team */}
        <section className="section-padding">
          <div className="container-custom">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Leadership Team</h2>
            <p className="text-xl text-gray-600 mb-16 max-w-2xl">
              Certified professionals with deep industry expertise in telecom security, green energy, and industrial automation—delivering 157+ successful deployments.
            </p>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Team Member 2 */}
              <div className="group">
                <div className="aspect-square bg-gradient-to-br from-green-400 to-green-600 rounded-3xl mb-6 overflow-hidden">
                  <div className="w-full h-full flex items-center justify-center text-white text-6xl font-black">
                    RS
                  </div>
                </div>
                <h3 className="text-2xl font-bold mb-1">Rajeev Sharma</h3>
                <p className="text-green-600 font-semibold mb-2">Technical Director</p>
                <p className="text-gray-600 mb-4">Leading technical innovation in green energy solutions and industrial automation. 10+ years driving sustainable infrastructure transformation with expertise in solar integration and smart grid systems.</p>
                <div className="flex gap-3">
                  <a href="mailto:Hypeciaconnectservices@gmail.com" className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center hover:bg-green-600 hover:text-white transition-all">
                    <Mail size={18} />
                  </a>
                  <a href="#" className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center hover:bg-green-600 hover:text-white transition-all">
                    <Linkedin size={18} />
                  </a>
                </div>
              </div>

              {/* Team Member 3 */}
              <div className="group">
                <div className="aspect-square bg-gradient-to-br from-purple-400 to-purple-600 rounded-3xl mb-6 overflow-hidden">
                  <div className="w-full h-full flex items-center justify-center text-white text-6xl font-black">
                    HC
                  </div>
                </div>
                <h3 className="text-2xl font-bold mb-1">Operations Head</h3>
                <p className="text-purple-600 font-semibold mb-2">Chief Operations Officer</p>
                <p className="text-gray-600 mb-4">Ensuring flawless execution and delivery across multiple sites with precision timeline management. Overseeing 24/7 operations, quality control, and client satisfaction across all deployments.</p>
                <div className="flex gap-3">
                  <a href="mailto:Hypeciaconnectservices@gmail.com" className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center hover:bg-purple-600 hover:text-white transition-all">
                    <Mail size={18} />
                  </a>
                  <a href="#" className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center hover:bg-purple-600 hover:text-white transition-all">
                    <Linkedin size={18} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Company Stats */}
        <section className="section-padding bg-black text-white">
          <div className="container-custom">
            <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center">Our Track Record</h2>
            <div className="grid md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-6xl font-black mb-2">157+</div>
                <p className="text-gray-400">Sites Deployed</p>
              </div>
              <div className="text-center">
                <div className="text-6xl font-black mb-2">95%</div>
                <p className="text-gray-400">Uptime Achievement</p>
              </div>
              <div className="text-center">
                <div className="text-6xl font-black mb-2">2022</div>
                <p className="text-gray-400">Established</p>
              </div>
              <div className="text-center">
                <div className="text-6xl font-black mb-2">10/10</div>
                <p className="text-gray-400">Client Satisfaction</p>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="section-padding bg-light-gray">
          <div className="container-custom">
            <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center">Our Core Values</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-6xl font-black text-gray-200 mb-4">01</div>
                <h3 className="text-2xl font-bold mb-3">Technical Excellence</h3>
                <p className="text-gray-600">Industry-certified professionals delivering cutting-edge solutions with unmatched precision and quality standards.</p>
              </div>
              <div className="text-center">
                <div className="text-6xl font-black text-gray-200 mb-4">02</div>
                <h3 className="text-2xl font-bold mb-3">Proven Execution</h3>
                <p className="text-gray-600">Consistent on-time delivery across 157+ sites with 95% uptime—results that speak louder than promises.</p>
              </div>
              <div className="text-center">
                <div className="text-6xl font-black text-gray-200 mb-4">03</div>
                <h3 className="text-2xl font-bold mb-3">Client Partnership</h3>
                <p className="text-gray-600">Building long-term relationships with industry leaders through transparency, reliability, and exceptional service.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Join Team Section */}
        <section className="section-padding">
          <div className="container-custom">
            <div className="bg-black text-white rounded-3xl p-12 md:p-16 text-center">
              <h2 className="text-5xl md:text-6xl font-bold mb-6">Join Our Team</h2>
              <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
                We're always looking for talented individuals passionate about sustainable transformation.
              </p>
              <a href="mailto:Hypeciaconnectservices@gmail.com" className="bg-white contact-btn text-black px-8 py-4 rounded-full text-lg font-semibold hover:bg-blue-600 hover:text-white transition-all inline-block">
                View Open Positions
              </a>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  )
}
