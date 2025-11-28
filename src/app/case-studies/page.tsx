"use client"

import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import Link from 'next/link'
import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { SplitText } from 'gsap/SplitText'
import Image from 'next/image'
import { ArrowRight, MapPin, Calendar, TrendingUp, Shield, Zap, Network } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger, SplitText)

export default function CaseStudiesPage() {
  // Hero refs
  const heroTitleRef = useRef<HTMLHeadingElement>(null)
  const heroDescRef = useRef<HTMLParagraphElement>(null)

  // Featured case study refs
  const featuredCaseRef = useRef<HTMLDivElement>(null)

  // Stats section refs
  const statsSectionRef = useRef<HTMLDivElement>(null)

  // CTA refs
  const ctaSectionRef = useRef<HTMLDivElement>(null)

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

        // ===== FEATURED CASE STUDY ANIMATION =====
        if (featuredCaseRef.current) {
          const badge = featuredCaseRef.current.querySelector('.featured-badge')
          const title = featuredCaseRef.current.querySelector('.featured-title')
          const description = featuredCaseRef.current.querySelector('.featured-description')
          const stats = featuredCaseRef.current.querySelectorAll('.stat-item')
          const challenges = featuredCaseRef.current.querySelectorAll('.challenge-section')
          const techHighlights = featuredCaseRef.current.querySelectorAll('.tech-highlight')

          // Badge animation
          if (badge) {
            gsap.from(badge, {
              opacity: 0,
              scale: 0.8,
              duration: 0.6,
              ease: 'back.out(1.7)',
              scrollTrigger: {
                trigger: featuredCaseRef.current,
                start: 'top 70%',
                toggleActions: 'play none none reverse'
              }
            })
          }

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
                start: 'top 75%',
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

          // Stats animation
          if (stats && stats.length > 0) {
            gsap.from(stats, {
              opacity: 0,
              y: 40,
              scale: 0.9,
              stagger: 0.1,
              duration: 0.7,
              ease: 'back.out(1.7)',
              scrollTrigger: {
                trigger: stats[0],
                start: 'top 85%',
                toggleActions: 'play none none reverse'
              }
            })
          }

          // Challenge sections animation
          if (challenges && challenges.length > 0) {
            gsap.from(challenges, {
              opacity: 0,
              x: -50,
              y: 30,
              stagger: 0.15,
              duration: 0.8,
              ease: 'power3.out',
              scrollTrigger: {
                trigger: challenges[0],
                start: 'top 80%',
                toggleActions: 'play none none reverse'
              }
            })
          }

          // Tech highlights animation
          if (techHighlights && techHighlights.length > 0) {
            gsap.from(techHighlights, {
              opacity: 0,
              y: 40,
              stagger: 0.1,
              duration: 0.7,
              ease: 'power3.out',
              scrollTrigger: {
                trigger: techHighlights[0],
                start: 'top 85%',
                toggleActions: 'play none none reverse'
              }
            })
          }
        }

        // ===== STATS SECTION ANIMATION =====
        if (statsSectionRef.current) {
          const statsTitle = statsSectionRef.current.querySelector('h2')
          const statItems = statsSectionRef.current.querySelectorAll('.stat-number-item')

          if (statsTitle) {
            const titleSplit = new SplitText(statsTitle, { type: 'chars' })
            gsap.from(titleSplit.chars, {
              opacity: 0,
              y: 50,
              stagger: 0.02,
              duration: 0.8,
              ease: 'back.out(1.7)',
              scrollTrigger: {
                trigger: statsTitle,
                start: 'top 75%',
                toggleActions: 'play none none reverse'
              }
            })
          }

          if (statItems && statItems.length > 0) {
            gsap.from(statItems, {
              opacity: 0,
              y: 60,
              scale: 0.8,
              stagger: 0.15,
              duration: 0.9,
              ease: 'back.out(1.7)',
              scrollTrigger: {
                trigger: statItems[0],
                start: 'top 80%',
                toggleActions: 'play none none reverse'
              }
            })
          }
        }

        // ===== CTA SECTION ANIMATION =====
        if (ctaSectionRef.current) {
          const ctaTitle = ctaSectionRef.current.querySelector('h2')
          const ctaDesc = ctaSectionRef.current.querySelector('p')
          const ctaButton = ctaSectionRef.current.querySelector('a')

          // Set initial state
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
              id: "case-studies-footer"
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
        <Navigation isHomepage={true} />

        {/* Hero Section */}
        <section className="min-h-[70vh] flex items-center justify-center relative overflow-hidden pt-20">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-green-50 opacity-60" />
          <div className="container-custom relative z-10 text-center">
            <h1 ref={heroTitleRef} className="text-huge mb-6" style={{ opacity: 0 }}>
              Project <span className="text-blue-600">Showcase</span>
            </h1>
            <p ref={heroDescRef} className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto" style={{ opacity: 0 }}>
              Real infrastructure. Proven performance. Transformative technology solutions.
            </p>
          </div>
        </section>

        {/* Featured Case Study - Airtel */}
        <section className="section-padding">
          <div className="container-custom">
            <div ref={featuredCaseRef} className="bg-gradient-to-br from-red-600 to-red-800 rounded-3xl overflow-hidden text-white mb-16">
              <div className="grid lg:grid-cols-2 gap-8 md:gap-12 p-6 md:p-12 lg:p-16">
                <div>
                  <div className="featured-badge inline-block bg-white/20 px-4 py-2 rounded-full text-sm font-semibold mb-6">
                    Featured Project · Enterprise Security
                  </div>
                  <h2 className="featured-title text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6">Airtel CCTV Infrastructure Deployment</h2>
                  <p className="featured-description text-base md:text-lg lg:text-xl mb-6 md:mb-8 opacity-90">
                    Transforming India's largest telecom network with AI-enabled surveillance across 157 critical sites—delivering 40% security improvement and 95% uptime.
                  </p>
                  <div className="grid grid-cols-2 gap-4 md:gap-6 mb-6 md:mb-8">
                    <div className="stat-item">
                      <p className="text-xs md:text-sm opacity-75 mb-1">Total Sites</p>
                      <p className="text-2xl md:text-3xl font-bold">157</p>
                      <p className="text-xs opacity-75">16 MSCs + 141 TNGs</p>
                    </div>
                    <div className="stat-item">
                      <p className="text-xs md:text-sm opacity-75 mb-1">Cameras Deployed</p>
                      <p className="text-2xl md:text-3xl font-bold">2,400+</p>
                      <p className="text-xs opacity-75">AI-enabled systems</p>
                    </div>
                    <div className="stat-item">
                      <p className="text-xs md:text-sm opacity-75 mb-1">Coverage Area</p>
                      <p className="text-2xl md:text-3xl font-bold">UP & Bihar</p>
                      <p className="text-xs opacity-75">Urban & rural sites</p>
                    </div>
                    <div className="stat-item">
                      <p className="text-xs md:text-sm opacity-75 mb-1">Timeline</p>
                      <p className="text-2xl md:text-3xl font-bold">4-6 Months</p>
                      <p className="text-xs opacity-75">Phased rollout</p>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col justify-between">
                  <div className="space-y-4 md:space-y-6">
                    <div className="challenge-section">
                      <h3 className="font-bold text-lg md:text-xl mb-2 md:mb-3 flex items-center gap-2">
                        <Shield className="w-4 h-4 md:w-5 md:h-5" /> The Challenge
                      </h3>
                      <p className="opacity-90 text-sm md:text-base">Airtel needed comprehensive security for Mobile Switching Centers (MSCs) and Transport Network Gateways (TNGs) to prevent unauthorized access, mitigate cyber-physical threats, and ensure TRAI compliance across critical telecom infrastructure.</p>
                    </div>
                    <div className="challenge-section">
                      <h3 className="font-bold text-lg md:text-xl mb-2 md:mb-3 flex items-center gap-2">
                        <Zap className="w-4 h-4 md:w-5 md:h-5" /> Our Solution
                      </h3>
                      <p className="opacity-90 text-sm md:text-base">Deployed state-of-the-art AI-enabled CCTV systems with centralized video analytics, motion detection, facial recognition, and cloud storage. Comprehensive site surveys, professional installation across 157 sites, and seamless integration with Airtel's central command center.</p>
                    </div>
                    <div className="challenge-section">
                      <h3 className="font-bold text-lg md:text-xl mb-2 md:mb-3 flex items-center gap-2">
                        <TrendingUp className="w-4 h-4 md:w-5 md:h-5" /> Measurable Results
                      </h3>
                      <ul className="space-y-2 opacity-90 text-sm md:text-base">
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
              <div className="border-t border-white/20 p-6 md:p-12 lg:p-16">
                <h3 className="text-xl md:text-2xl font-bold mb-4 md:mb-6">Technical Excellence</h3>
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
                  <div className="tech-highlight">
                    <h4 className="font-semibold mb-2 text-sm md:text-base">Site Coverage</h4>
                    <p className="text-xs md:text-sm opacity-90">MSC sites: 30-60 cameras | TNG sites: 4-5 cameras with optimized perimeter coverage</p>
                  </div>
                  <div className="tech-highlight">
                    <h4 className="font-semibold mb-2 text-sm md:text-base">AI Analytics</h4>
                    <p className="text-xs md:text-sm opacity-90">Motion detection, facial recognition, anomaly detection, automated alerts</p>
                  </div>
                  <div className="tech-highlight">
                    <h4 className="font-semibold mb-2 text-sm md:text-base">Infrastructure</h4>
                    <p className="text-xs md:text-sm opacity-90">Professional cabling, NVR setup, solar PoE for remote sites, bandwidth optimization</p>
                  </div>
                  <div className="tech-highlight">
                    <h4 className="font-semibold mb-2 text-sm md:text-base">Support</h4>
                    <p className="text-xs md:text-sm opacity-90">24/7 monitoring, 1-year service support, preventive maintenance</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section ref={statsSectionRef} className="section-padding py-14 bg-black text-white">
          <div className="container-custom">
            <h2 className="text-5xl md:text-6xl font-bold mb-16 text-center">Proven Performance</h2>
            <div className="grid md:grid-cols-4 gap-8">
              <div className="stat-number-item text-center">
                <div className="text-5xl md:text-6xl font-black mb-2">157</div>
                <p className="text-gray-400">Sites Secured</p>
                <p className="text-sm text-gray-500 mt-1">MSCs + TNGs</p>
              </div>
              <div className="stat-number-item text-center">
                <div className="text-5xl md:text-6xl font-black mb-2">2,400+</div>
                <p className="text-gray-400">Cameras Deployed</p>
                <p className="text-sm text-gray-500 mt-1">AI-enabled systems</p>
              </div>
              <div className="stat-number-item text-center">
                <div className="text-5xl md:text-6xl font-black mb-2">95%</div>
                <p className="text-gray-400">Uptime Achievement</p>
                <p className="text-sm text-gray-500 mt-1">Operational reliability</p>
              </div>
              <div className="stat-number-item text-center">
                <div className="text-5xl md:text-6xl font-black mb-2">2022</div>
                <p className="text-gray-400">Established</p>
                <p className="text-sm text-gray-500 mt-1">Rapid growth</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section ref={ctaSectionRef} className="section-padding h-[90vh] flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-green-50">
          <div className="container-custom text-center">
            <h2 className="text-5xl md:text-6xl font-bold mb-6">
              Ready to secure your infrastructure?
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Let's discuss how our proven technology solutions can transform your operations.
            </p>
            <Link href="/contact" className="bg-black book-call-btn cta-section text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-blue-600 transition-all inline-flex items-center gap-2">
              Schedule a Consultation <ArrowRight size={20} />
            </Link>
          </div>
        </section>

        <Footer />
      </div>
    </>
  )
}