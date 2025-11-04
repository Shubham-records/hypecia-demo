"use client"

import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import { Mail, Linkedin } from 'lucide-react'

export default function TeamPage() {
  return (
    <div className="min-h-screen">
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
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Leadership</h2>
          <p className="text-xl text-gray-600 mb-16 max-w-2xl">
            Seasoned experts with over a decade of experience in energy, automation, and telecom sectors.
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Team Member 1 */}
            <div className="group">
              <div className="aspect-square bg-gradient-to-br from-blue-400 to-blue-600 rounded-3xl mb-6 overflow-hidden">
                <div className="w-full h-full flex items-center justify-center text-white text-6xl font-black">
                  RK
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-1">Ranjeet Kunwar</h3>
              <p className="text-blue-600 font-semibold mb-2">Project Director</p>
              <p className="text-gray-600 mb-4">Leading major infrastructure deployments with focus on telecom security and surveillance systems.</p>
              <div className="flex gap-3">
                <a href="mailto:Hypeciaconnectservices@gmail.com" className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center hover:bg-blue-600 hover:text-white transition-all">
                  <Mail size={18} />
                </a>
                <a href="#" className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center hover:bg-blue-600 hover:text-white transition-all">
                  <Linkedin size={18} />
                </a>
              </div>
            </div>

            {/* Team Member 2 */}
            <div className="group">
              <div className="aspect-square bg-gradient-to-br from-green-400 to-green-600 rounded-3xl mb-6 overflow-hidden">
                <div className="w-full h-full flex items-center justify-center text-white text-6xl font-black">
                  RS
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-1">Rajeev Sharma</h3>
              <p className="text-green-600 font-semibold mb-2">Technical Director</p>
              <p className="text-gray-600 mb-4">Expert in green energy solutions and industrial automation with 10+ years of experience.</p>
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
              <p className="text-purple-600 font-semibold mb-2">Operations Manager</p>
              <p className="text-gray-600 mb-4">Overseeing project execution and delivery across multiple sites with precision and efficiency.</p>
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

      {/* Values Section */}
      <section className="section-padding bg-light-gray">
        <div className="container-custom">
          <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center">Our Values</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-6xl font-black text-gray-200 mb-4">01</div>
              <h3 className="text-2xl font-bold mb-3">Innovation First</h3>
              <p className="text-gray-600">Constantly pushing boundaries to deliver cutting-edge solutions that drive real transformation.</p>
            </div>
            <div className="text-center">
              <div className="text-6xl font-black text-gray-200 mb-4">02</div>
              <h3 className="text-2xl font-bold mb-3">Sustainable Impact</h3>
              <p className="text-gray-600">Every project designed with environmental responsibility and long-term sustainability in mind.</p>
            </div>
            <div className="text-center">
              <div className="text-6xl font-black text-gray-200 mb-4">03</div>
              <h3 className="text-2xl font-bold mb-3">Excellence in Execution</h3>
              <p className="text-gray-600">Delivering projects on time, within budget, and exceeding quality expectations every single time.</p>
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
  )
}
