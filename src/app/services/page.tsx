"use client"

import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import Link from 'next/link'
import Image from "next/image"
import { Zap, Cpu, Network, Shield, TrendingUp, ArrowRight, CheckCircle } from 'lucide-react'
import HypeciaLoader from '@/components/logo_animation'
import {useState } from 'react'

export default function ServicesPage() {
  const [showLoader, setShowLoader] = useState(true)
  const [startFadeIn, setStartFadeIn] = useState(false)
  const handleLoaderComplete = () => {
    setStartFadeIn(true)
    setTimeout(() => {
      setShowLoader(false)
    }, 100)
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
              Our <span className="text-blue-600">Services</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto">
              End-to-end solutions for energy, automation, and digital infrastructure
            </p>
          </div>
        </section>

        {/* Services Detail */}
        <section className="section-padding">
          <div className="container-custom space-y-32">
            
            {/* Green Energy Solutions */}
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6">
                  <Zap className="text-green-600" size={32} />
                </div>
                <h2 className="text-display mb-6">Green Energy Solutions</h2>
                <p className="text-xl text-gray-600 mb-8">
                  Empowering sustainable transformation through intelligent renewable energy systems designed for the future.
                </p>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="text-green-500 flex-shrink-0 mt-1" size={20} />
                    <span className="text-gray-700">Solar Energy Integration & Deployment</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="text-green-500 flex-shrink-0 mt-1" size={20} />
                    <span className="text-gray-700">Advanced Energy Monitoring Systems</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="text-green-500 flex-shrink-0 mt-1" size={20} />
                    <span className="text-gray-700">Sustainable Design Practices</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="text-green-500 flex-shrink-0 mt-1" size={20} />
                    <span className="text-gray-700">Smart Grid Solutions</span>
                  </li>
                </ul>
                <Link href="/contact" className="bg-green-600 book-call-btn text-white px-6 py-3 rounded-full font-semibold hover:bg-green-700 transition-all inline-flex items-center gap-2">
                  Get Started <ArrowRight size={18} />
                </Link>
              </div>
              <div className="aspect-square bg-gradient-to-br from-green-400 to-green-600 rounded-3xl overflow-hidden relative">
                <Image
                  src="/Green Energy Solutions.jpg"
                  alt="Green Energy Icon"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            {/* Industrial Automation */}
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="order-2 lg:order-1 aspect-square bg-gradient-to-br from-blue-400 to-blue-600 rounded-3xl overflow-hidden relative">
                <Image
                    src="/Industrial Automation.jpg"
                    alt="Industrial Automation"
                    fill
                    className="object-cover"
                  />
              </div>
              <div className="order-1 lg:order-2">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                  <Cpu className="text-blue-600" size={32} />
                </div>
                <h2 className="text-display mb-6">Industrial Automation</h2>
                <p className="text-xl text-gray-600 mb-8">
                  Transform your operations with scalable automation systems that boost productivity and reduce downtime.
                </p>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="text-blue-500 flex-shrink-0 mt-1" size={20} />
                    <span className="text-gray-700">Customizable Automation Solutions</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="text-blue-500 flex-shrink-0 mt-1" size={20} />
                    <span className="text-gray-700">Operational Optimization</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="text-blue-500 flex-shrink-0 mt-1" size={20} />
                    <span className="text-gray-700">Industry 4.0 Integration</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="text-blue-500 flex-shrink-0 mt-1" size={20} />
                    <span className="text-gray-700">Performance Analytics</span>
                  </li>
                </ul>
                <Link href="/contact" className="bg-blue-600 book-call-btn text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-700 transition-all inline-flex items-center gap-2">
                  Get Started <ArrowRight size={18} />
                </Link>
              </div>
            </div>

            {/* Telecom & IT Infrastructure */}
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mb-6">
                  <Network className="text-purple-600" size={32} />
                </div>
                <h2 className="text-display mb-6">Telecom & IT Infrastructure</h2>
                <p className="text-xl text-gray-600 mb-8">
                  Build robust, scalable, and future-ready digital infrastructure with comprehensive lifecycle support.
                </p>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="text-purple-500 flex-shrink-0 mt-1" size={20} />
                    <span className="text-gray-700">Network Design & Implementation</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="text-purple-500 flex-shrink-0 mt-1" size={20} />
                    <span className="text-gray-700">Deployment Services</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="text-purple-500 flex-shrink-0 mt-1" size={20} />
                    <span className="text-gray-700">Maintenance & Support</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="text-purple-500 flex-shrink-0 mt-1" size={20} />
                    <span className="text-gray-700">Operational Reliability</span>
                  </li>
                </ul>
                <Link href="/contact" className="bg-purple-600 book-call-btn text-white px-6 py-3 rounded-full font-semibold hover:bg-purple-700 transition-all inline-flex items-center gap-2">
                  Get Started <ArrowRight size={18} />
                </Link>
              </div>
              <div className="aspect-square bg-gradient-to-br from-purple-400 to-purple-600 rounded-3xl overflow-hidden relative">
                <Image
                    src="/Telecom_IT_Infrastructure.png"
                    alt="Telecom & IT Infrastructure"
                    fill
                    className="object-cover"
                  />
              </div>
            </div>

            {/* Security & Surveillance */}
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="order-2 lg:order-1 aspect-square bg-gradient-to-br from-red-400 to-red-600 rounded-3xl overflow-hidden relative">
              <Image
                    src="/Security_Surveillance.png"
                    alt="Security & Surveillance"
                    fill
                    className="object-cover"
                  />
              </div>
              <div className="order-1 lg:order-2">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mb-6">
                  <Shield className="text-red-600" size={32} />
                </div>
                <h2 className="text-display mb-6">Security & Surveillance</h2>
                <p className="text-xl text-gray-600 mb-8">
                  Protect your assets with AI-enabled CCTV systems and real-time monitoring capabilities.
                </p>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="text-red-500 flex-shrink-0 mt-1" size={20} />
                    <span className="text-gray-700">AI-Enabled Analytics</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="text-red-500 flex-shrink-0 mt-1" size={20} />
                    <span className="text-gray-700">Real-Time Monitoring</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="text-red-500 flex-shrink-0 mt-1" size={20} />
                    <span className="text-gray-700">Threat Detection</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="text-red-500 flex-shrink-0 mt-1" size={20} />
                    <span className="text-gray-700">Network Integration</span>
                  </li>
                </ul>
                <Link href="/contact" className="bg-red-600 book-call-btn text-white px-6 py-3 rounded-full font-semibold hover:bg-red-700 transition-all inline-flex items-center gap-2">
                  Get Started <ArrowRight size={18} />
                </Link>
              </div>
            </div>

          </div>
        </section>

        {/* CTA Section */}
        <section className="section-padding bg-black text-white">
          <div className="container-custom text-center">
            <h2 className="text-5xl md:text-6xl font-bold mb-6">
              Ready to get started?
            </h2>
            <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
              Let's discuss how our solutions can transform your business operations.
            </p>
            <Link href="/contact" className="bg-white contact-btn text-black px-8 py-4 rounded-full text-lg font-semibold hover:bg-blue-600 hover:text-white transition-all inline-flex items-center gap-2">
              Contact Us <ArrowRight size={20} />
            </Link>
          </div>
        </section>

        <Footer />
      </div>
    </>
  )
}
