"use client"

import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import Link from 'next/link'
import HypeciaLoader from '@/components/logo_animation'
import {useState } from 'react'
import Image from 'next/image'
import { ArrowRight, MapPin, Calendar, TrendingUp, Shield, Zap, Network } from 'lucide-react'

export default function CaseStudiesPage() {
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
              Project <span className="text-blue-600">Showcase</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto">
              Real infrastructure. Proven performance. Transformative technology solutions.
            </p>
          </div>
        </section>

        {/* Featured Case Study - Airtel */}
        <section className="section-padding">
          <div className="container-custom">
            <div className="bg-gradient-to-br from-red-600 to-red-800 rounded-3xl overflow-hidden text-white mb-16">
              <div className="grid lg:grid-cols-2 gap-12 p-12 lg:p-16">
                <div>
                  <div className="inline-block bg-white/20 px-4 py-2 rounded-full text-sm font-semibold mb-6">
                    Featured Project · Enterprise Security
                  </div>
                  <h2 className="text-5xl md:text-6xl font-bold mb-6">Airtel CCTV Infrastructure Deployment</h2>
                  <p className="text-xl mb-8 opacity-90">
                    Transforming India's largest telecom network with AI-enabled surveillance across 157 critical sites—delivering 40% security improvement and 95% uptime.
                  </p>
                  <div className="grid grid-cols-2 gap-6 mb-8">
                    <div>
                      <p className="text-sm opacity-75 mb-1">Total Sites</p>
                      <p className="text-3xl font-bold">157</p>
                      <p className="text-xs opacity-75">16 MSCs + 141 TNGs</p>
                    </div>
                    <div>
                      <p className="text-sm opacity-75 mb-1">Cameras Deployed</p>
                      <p className="text-3xl font-bold">2,400+</p>
                      <p className="text-xs opacity-75">AI-enabled systems</p>
                    </div>
                    <div>
                      <p className="text-sm opacity-75 mb-1">Coverage Area</p>
                      <p className="text-3xl font-bold">UP & Bihar</p>
                      <p className="text-xs opacity-75">Urban & rural sites</p>
                    </div>
                    <div>
                      <p className="text-sm opacity-75 mb-1">Timeline</p>
                      <p className="text-3xl font-bold">4-6 Months</p>
                      <p className="text-xs opacity-75">Phased rollout</p>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col justify-between">
                  <div className="space-y-6">
                    <div>
                      <h3 className="font-bold text-xl mb-3 flex items-center gap-2">
                        <Shield className="w-5 h-5" /> The Challenge
                      </h3>
                      <p className="opacity-90">Airtel needed comprehensive security for Mobile Switching Centers (MSCs) and Transport Network Gateways (TNGs) to prevent unauthorized access, mitigate cyber-physical threats, and ensure TRAI compliance across critical telecom infrastructure.</p>
                    </div>
                    <div>
                      <h3 className="font-bold text-xl mb-3 flex items-center gap-2">
                        <Zap className="w-5 h-5" /> Our Solution
                      </h3>
                      <p className="opacity-90">Deployed state-of-the-art AI-enabled CCTV systems with centralized video analytics, motion detection, facial recognition, and cloud storage. Comprehensive site surveys, professional installation across 157 sites, and seamless integration with Airtel's central command center.</p>
                    </div>
                    <div>
                      <h3 className="font-bold text-xl mb-3 flex items-center gap-2">
                        <TrendingUp className="w-5 h-5" /> Measurable Results
                      </h3>
                      <ul className="space-y-2 opacity-90">
                        <li>• <strong>40% reduction</strong> in site vulnerabilities</li>
                        <li>• <strong>25% cost savings</strong> on manual patrols</li>
                        <li>• <strong>95% uptime</strong> across all installations</li>
                        <li>• <strong>100% TRAI compliance</strong> achieved</li>
                        <li>• Real-time threat detection & response</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Technical Highlights */}
              <div className="border-t border-white/20 p-12 lg:p-16">
                <h3 className="text-2xl font-bold mb-6">Technical Excellence</h3>
                <div className="grid md:grid-cols-4 gap-6">
                  <div>
                    <h4 className="font-semibold mb-2">Site Coverage</h4>
                    <p className="text-sm opacity-90">MSC sites: 30-60 cameras | TNG sites: 4-5 cameras with optimized perimeter coverage</p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">AI Analytics</h4>
                    <p className="text-sm opacity-90">Motion detection, facial recognition, anomaly detection, automated alerts</p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Infrastructure</h4>
                    <p className="text-sm opacity-90">Professional cabling, NVR setup, solar PoE for remote sites, bandwidth optimization</p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Support</h4>
                    <p className="text-sm opacity-90">24/7 monitoring, 1-year service support, preventive maintenance</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="section-padding bg-black text-white">
          <div className="container-custom">
            <h2 className="text-5xl md:text-6xl font-bold mb-16 text-center">Proven Performance</h2>
            <div className="grid md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-5xl md:text-6xl font-black mb-2">157</div>
                <p className="text-gray-400">Sites Secured</p>
                <p className="text-sm text-gray-500 mt-1">MSCs + TNGs</p>
              </div>
              <div className="text-center">
                <div className="text-5xl md:text-6xl font-black mb-2">2,400+</div>
                <p className="text-gray-400">Cameras Deployed</p>
                <p className="text-sm text-gray-500 mt-1">AI-enabled systems</p>
              </div>
              <div className="text-center">
                <div className="text-5xl md:text-6xl font-black mb-2">95%</div>
                <p className="text-gray-400">Uptime Achievement</p>
                <p className="text-sm text-gray-500 mt-1">Operational reliability</p>
              </div>
              <div className="text-center">
                <div className="text-5xl md:text-6xl font-black mb-2">2022</div>
                <p className="text-gray-400">Established</p>
                <p className="text-sm text-gray-500 mt-1">Rapid growth</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="section-padding">
          <div className="container-custom text-center">
            <h2 className="text-5xl md:text-6xl font-bold mb-6">
              Ready to secure your infrastructure?
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Let's discuss how our proven technology solutions can transform your operations.
            </p>
            <Link href="/contact" className="bg-black book-call-btn text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-blue-600 transition-all inline-flex items-center gap-2">
              Schedule a Consultation <ArrowRight size={20} />
            </Link>
          </div>
        </section>

        <Footer />
      </div>
    </>
  )
}