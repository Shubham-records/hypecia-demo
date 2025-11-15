
"use client"

import HypeciaLoader from '@/components/logo_animation'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import Link from 'next/link'
import { ArrowRight, Zap, Cpu, Network, Shield, TrendingUp, CheckCircle, Clock, Users, HardHat, Wrench } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'
import { SplitText } from 'gsap/SplitText'

gsap.registerPlugin(SplitText)

function AnimatedCounter({ target, duration = 2000 }: { target: number; duration?: number }) {
  const [count, setCount] = useState(0)
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.5 }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (!isVisible) return

    const startTime = Date.now()
    const endTime = startTime + duration

    const timer = setInterval(() => {
      const now = Date.now()
      const remaining = Math.max(0, endTime - now)
      const progress = 1 - remaining / duration
      
      if (progress >= 1) {
        setCount(target)
        clearInterval(timer)
      } else {
        const easeOutQuad = 1 - Math.pow(1 - progress, 3)
        setCount(Math.floor(target * easeOutQuad))
      }
    }, 16)

    return () => clearInterval(timer)
  }, [isVisible, target, duration])

  return <div ref={ref}>{count}</div>
}

export default function Home() {
  const [showLoader, setShowLoader] = useState(true)
  const [startFadeIn, setStartFadeIn] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)
  const heroBoxRef = useRef<HTMLDivElement>(null)
  const heroTitleRef = useRef<HTMLHeadingElement>(null)
  const heroDescRef = useRef<HTMLParagraphElement>(null)
  
  const handleLoaderComplete = () => {
    setStartFadeIn(true)
    setTimeout(() => {
      setShowLoader(false)
    }, 100)
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      if (videoRef.current) {
        videoRef.current.play()
      }
    }, 3300)
    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    if (!startFadeIn) return

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ delay: 0.5 })

      tl.fromTo(
        heroBoxRef.current,
        { scale: 0.95, opacity: 0 },
        { scale: 1, opacity: 1, duration: 0.8, ease: 'power2.out' }
      )

      if (heroTitleRef.current) {
        const titleSplit = new SplitText(heroTitleRef.current, { type: 'words' })
        gsap.set(heroTitleRef.current, { opacity: 1 })
        
        tl.fromTo(
          titleSplit.words,
          { y: 80, opacity: 0, rotationX: -90 },
          { 
            y: 0, 
            opacity: 1,
            rotationX: 0,
            duration: 1, 
            ease: 'back.out(1.7)', 
            stagger: {
              each: 0.05,
              ease: 'sine.inOut'
            }
          },
          '+=0.2'
        )
      }

      if (heroDescRef.current) {
        const descSplit = new SplitText(heroDescRef.current, { type: 'words' })
        gsap.set(heroDescRef.current, { opacity: 1 })
        
        tl.fromTo(
          descSplit.words,
          { y: 50, opacity: 0, scale: 0.8 },
          { 
            y: 0, 
            opacity: 1,
            scale: 1,
            duration: 0.8, 
            ease: 'elastic.out(1, 0.6)',
            stagger: {
              each: 0.05,
              ease: 'sine.inOut'
            }
          },
          '-=0.5'
        )
      }
    })

    return () => ctx.revert()
  }, [startFadeIn])

  return (
    <>
      {showLoader && (
        <HypeciaLoader onComplete={handleLoaderComplete} />
      )}
      <div className={`min-h-screen transition-opacity duration-700 ${startFadeIn ? 'opacity-100' : 'opacity-0'}`}>
        <Navigation />
        
        {/* VIDEO HERO SECTION */}
        <section className="pt-4 pb-12 bg-light-gray">
          <div className="mx-auto px-4 md:px-4 lg:px-4">
            <div 
              ref={heroBoxRef}
              className="relative w-full aspect-video rounded-3xl overflow-hidden shadow-2xl" 
              style={{ height: '42.5rem', opacity: 0 }}
            >
              <video
                ref={videoRef}
                loop
                muted
                playsInline
                className="w-full h-full object-cover"
              >
                <source src="/promo_video.mp4" type="video/mp4" />
              </video>
              <div className="absolute inset-0 bg-white/15 mix-blend-overlay pointer-events-none" />

              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12 text-white">
                <h2 
                  ref={heroTitleRef}
                  className="mb-6 leading-[0.9]"
                  style={{ opacity: 0 }}
                >
                  THE INFRASTRUCTURE YOU CAN TRUST<br />
                  <span>THE RESULTS YOU DEMAND</span>
                </h2>
                <p 
                  ref={heroDescRef}
                  className="text-lg md:text-xl text-white/90 max-w-3xl"
                  style={{ opacity: 0 }}
                >
                  Carrier-grade networks. AI-powered security. Industrial automation.<br />
                  Trusted by tier-1 operators for mission-critical deployments.
                </p>
              </div>
            </div>
          </div>
        </section>

          {/* STATS SECTION */}
          <section className="section-padding py-12 bg-light-gray">
            <div className="container-custom">
              <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12 text-center">
                <div className="flex items-center gap-3">
                  <span className="text-4xl md:text-5xl font-bold text-black flex items-baseline gap-1">
                    <AnimatedCounter target={157} />
                    <span>+</span>
                  </span>
                  <span className="text-lg md:text-xl text-gray-600">Sites Secured</span>
                </div>
                
                <div className="hidden md:block w-px h-12 bg-gray-300" />
                
                <div className="flex items-center gap-3">
                  <span className="text-4xl md:text-5xl font-bold text-black flex items-baseline gap-1">
                    <AnimatedCounter target={2400} />
                    <span>+</span>
                  </span>
                  <span className="text-lg md:text-xl text-gray-600">CCTV Systems</span>
                </div>
                
                <div className="hidden md:block w-px h-12 bg-gray-300" />
                
                <div className="flex items-center gap-3">
                  <span className="text-4xl md:text-5xl font-bold text-black flex items-baseline gap-1">
                    <AnimatedCounter target={95} />
                    <span>%</span>
                  </span>
                  <span className="text-lg md:text-xl text-gray-600">Uptime Delivered</span>
                </div>
                
                <div className="hidden md:block w-px h-12 bg-gray-300" />
                
                <div className="flex items-center gap-3">
                  <span className="text-lg md:text-xl text-gray-600">Trusted by</span>
                  <span className="text-4xl md:text-5xl font-bold text-black">Airtel</span>
                </div>
              </div>
            </div>
          </section>

          {/* SECTION 3: ABOUT US */}
          <section className="section-padding bg-light-gray">
            <div className="container-custom">
              <div className="grid lg:grid-cols-[3fr_2fr] gap-16 items-center">
                <div>
                  <h4 className="headline-display text-balance text-gradient" style={{ fontSize: '4.2rem' }}>
                    Your trusted partner for mission-critical infrastructure. Delivering carrier-grade 
                    networks, AI-powered <br />
                    <span className="text-gradient opacity-40">security, and industrial automation. 
                    Proven at scale. Executed with precision.</span>
                  </h4>
                </div>
                
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <CheckCircle className="text-green-500 flex-shrink-0 mt-1" size={22} />
                    <div>
                      <h3 className="font-bold text-xl mb-2">157+ Sites. Zero Compromise</h3>
                      <p className="text-gray-600">Successfully deployed across Airtel's MSC and TNG infrastructure</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <CheckCircle className="text-green-500 flex-shrink-0 mt-1" size={22} />
                    <div>
                      <h3 className="font-bold text-xl mb-2">AI-Powered Security Solutions</h3>
                      <p className="text-gray-600">2,400+ cameras with intelligent analytics, facial recognition, and real-time threat detection</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <CheckCircle className="text-green-500 flex-shrink-0 mt-1" size={22} />
                    <div>
                      <h3 className="font-bold text-xl mb-2">40% Security Enhancement</h3>
                      <p className="text-gray-600">Proven reduction in site vulnerabilities with 95% uptime across all installations</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <CheckCircle className="text-green-500 flex-shrink-0 mt-1" size={22} />
                    <div>
                      <h3 className="font-bold text-xl mb-2">End-to-End Lifecycle Support</h3>
                      <p className="text-gray-600">From design to deployment to 24/7 maintenance—we're with you every step</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* SECTION 4: SERVICES */}
          <section className="section-padding bg-light-gray relative overflow-hidden">
            <div className="container-custom">
              <div className="relative flex flex-col w-full items-center items-stretch mb-[-5%]" style={{ mask: 'linear-gradient(black, transparent)' }}>
                <svg
                  width="100%"
                  height="100%"
                  viewBox="0 0 1163 325"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="relative mb-[-5%]"
                >
                  <defs>
                    <clipPath id="services-clip">
                    <text
                      x="50%"
                      y="70%"
                      textAnchor="middle"
                      fontFamily="Manrope, sans-serif"
                      fontWeight="800"
                      fontSize="14.8rem"
                      letterSpacing="-0.03em"
                    >SERVICES</text>
                    </clipPath>
                    <linearGradient id="services-gradient" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#D8D8D8" />
                      <stop offset="100%" stopColor="#F5F5F5" />
                    </linearGradient>
                  </defs>
                  <rect
                    x="0"
                    y="0"
                    width="100%"
                    height="100%"
                    clipPath="url(#services-clip)"
                    fill="url(#services-gradient)"
                  />
                </svg>
              </div>
              <div className="container-custom relative z-10">
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                  <div className="bg-white p-8 rounded-2xl border border-gray-200 hover:shadow-xl transition-all">
                    <div className="w-14 h-14 bg-green-100 rounded-full flex items-center justify-center mb-6">
                      <Zap className="text-green-600" size={28} />
                    </div>
                    <h3 className="text-2xl font-bold mb-4">Green Energy Solutions</h3>
                    <p className="text-gray-600">
                      Solar integration, energy monitoring, and sustainable design practices
                    </p>
                  </div>
                  <div className="bg-white p-8 rounded-2xl border border-gray-200 hover:shadow-xl transition-all">
                    <div className="w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                      <Cpu className="text-blue-600" size={28} />
                    </div>
                    <h3 className="text-2xl font-bold mb-4">Industrial Automation</h3>
                    <p className="text-gray-600">
                      Scalable automation systems for operational optimization
                    </p>
                  </div>
                  <div className="bg-white p-8 rounded-2xl border border-gray-200 hover:shadow-xl transition-all">
                    <div className="w-14 h-14 bg-purple-100 rounded-full flex items-center justify-center mb-6">
                      <Network className="text-purple-600" size={28} />
                    </div>
                    <h3 className="text-2xl font-bold mb-4">Telecom & IT Infrastructure</h3>
                    <p className="text-gray-600">
                      Robust, scalable, future-ready digital infrastructure
                    </p>
                  </div>
                  <div className="bg-white p-8 rounded-2xl border border-gray-200 hover:shadow-xl transition-all">
                    <div className="w-14 h-14 bg-red-100 rounded-full flex items-center justify-center mb-6">
                      <Shield className="text-red-600" size={28} />
                    </div>
                    <h3 className="text-2xl font-bold mb-4">Security & Surveillance</h3>
                    <p className="text-gray-600">
                      AI-enabled CCTV systems with real-time monitoring
                    </p>
                  </div>
                  <div className="bg-white p-8 rounded-2xl border border-gray-200 hover:shadow-xl transition-all">
                    <div className="w-14 h-14 bg-orange-100 rounded-full flex items-center justify-center mb-6">
                      <Wrench className="text-orange-600" size={28} />
                    </div>
                    <h3 className="text-2xl font-bold mb-4">MEP Engineering</h3>
                    <p className="text-gray-600">
                      Electrical, DG upgradation, HT/LT work, transformer solutions, data center MEP
                    </p>
                  </div>
                  <div className="bg-white p-8 rounded-2xl border border-gray-200 hover:shadow-xl transition-all">
                    <div className="w-14 h-14 bg-gray-100 rounded-full flex items-center justify-center mb-6">
                      <HardHat className="text-gray-600" size={28} />
                    </div>
                    <h3 className="text-2xl font-bold mb-4">Civil & Earthing Works</h3>
                    <p className="text-gray-600">
                      Complete civil engineering and advanced earthing solutions for industrial safety
                    </p>
                  </div>
                  <div className="bg-white p-8 rounded-2xl border border-gray-200 hover:shadow-xl transition-all">
                    <div className="w-14 h-14 bg-yellow-100 rounded-full flex items-center justify-center mb-6">
                      <Users className="text-yellow-600" size={28} />
                    </div>
                    <h3 className="text-2xl font-bold mb-4">Manpower Services</h3>
                    <p className="text-gray-600">
                      Security, maintenance, housekeeping comprehensive facility management
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* CLIENT TRUST SECTION */}
          <section className="section-padding bg-light-gray">
            <div className="container-custom">
              <div className="max-w-4xl mx-auto text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold mb-2 text-black">
                  Trusted by Industry Leaders
                </h2>
              </div>
              
              <div className="flex flex-wrap items-center justify-center gap-x-16 gap-y-12 max-w-5xl mx-auto">
                {/* Airtel */}
                <div className="flex flex-col items-center gap-3">
                  <div className="text-5xl md:text-6xl font-black bg-gradient-to-br from-red-500 to-red-700 bg-clip-text text-transparent">
                    AIRTEL
                  </div>
                  <p className="text-sm text-gray-500">157+ Sites Deployed</p>
                </div>

                {/* Vertical divider */}
                <div className="hidden md:block w-px h-16 bg-gray-300" />

                {/* EPACK PREFAB */}
                <div className="flex flex-col items-center gap-3">
                  <div className="text-4xl md:text-5xl font-black text-gray-900">
                    EPACK PREFAB
                  </div>
                  <p className="text-sm text-gray-500">Premium Infrastructure Partner</p>
                </div>
              </div>
            </div>
          </section>

          {/* SECTION 5: CONVERSATIONAL TESTIMONIAL */}
          <section className="section-padding bg-light-gray">
            <div className="container-custom">
              <div className="max-w-4xl mx-auto text-center">
                <p className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-8">
                  "Hypecia delivers reliable, innovative solutions with technical excellence.{' '}
                  <span className="text-green-600">Their expertise transformed our infrastructure.</span>"
                </p>
                <div className="flex items-center justify-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center text-white text-lg font-black">RK</div>
                  <div className="text-left">
                    <p className="font-bold">Ranjeet Kunwar</p>
                    <p className="text-gray-600 text-sm">Project Director, Hypecia Connect Services</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* SECTION 6: PROJECT SHOWCASE */}
          <section className="section-padding bg-light-gray relative overflow-hidden">
            <div className="container-custom">
              {/* Background large text “PROJECTS” */}
              <div
                className="relative flex flex-col w-full items-center mb-[-5%]"
                style={{ mask: "linear-gradient(black, transparent)" }}
              >
                <svg
                  width="100%"
                  height="100%"
                  viewBox="0 0 1163 325"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="relative mb-[-5%]"
                >
                  <defs>
                    <clipPath id="projects-clip">
                      <text
                        x="50%"
                        y="70%"
                        textAnchor="middle"
                        fontFamily="Manrope, sans-serif"
                        fontWeight="800"
                        fontSize="14rem"
                        letterSpacing="-0.03em"
                      >
                        PROJECTS
                      </text>
                    </clipPath>
                    <linearGradient id="projects-gradient" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#D8D8D8" />
                      <stop offset="100%" stopColor="#F5F5F5" />
                    </linearGradient>
                  </defs>
                  <rect
                    x="0"
                    y="0"
                    width="100%"
                    height="100%"
                    clipPath="url(#projects-clip)"
                    fill="url(#projects-gradient)"
                  />
                </svg>
              </div>

              {/* Project Cards */}
              <div className="container-custom relative z-10">
                <div className="grid md:grid-cols-2 gap-8">
                  {/* Airtel Project */}
                  <Link
                    href="/case-studies"
                    className="group relative block aspect-[4/3] rounded-3xl overflow-hidden"
                  >
                    {/* Background image */}
                    <img
                      src="/airtel.jpg"
                      alt="Airtel CCTV Infrastructure"
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.77,0,0.18,1)] group-hover:scale-105"
                    />

                    {/* Default text (fades out on hover) */}
                    <div
                      className="absolute inset-0 z-20 bg-black/20 flex flex-col justify-end p-8 text-white
                                transition-opacity duration-300 ease-[cubic-bezier(0.65,0.05,0.36,1)]"
                    >
                      <div className="transition-opacity duration-300 ease-[cubic-bezier(0.65,0.05,0.36,1)] group-hover:opacity-0">
                        <h3 className="text-3xl font-bold mb-2">
                          Airtel CCTV Infrastructure
                        </h3>
                        <p className="text-lg opacity-90 max-w-[28ch]">
                          157 sites secured across UP & Bihar with AI-enabled surveillance
                        </p>
                      </div>
                    </div>

                    {/* Hover overlay background (slides up from bottom) */}
                    <div
                      className="absolute inset-0 z-10 backdrop-blur-[8px]
                                top-full bottom-0
                                transition-[top,bottom] duration-[600ms] ease-[cubic-bezier(0.77,0,0.18,1)]
                                group-hover:top-0 group-hover:bottom-0"
                      style={{
                        background: 'rgba(255, 255, 255, 0.20)',
                        boxShadow: '0 0 1em .25em rgba(255, 255, 255, 0.15) inset, 0 .125em .25em -.125em rgba(0, 0, 0, 0.3)'
                      }}
                    ></div>

                    {/* Hover text container */}
                    <div
                      className="absolute inset-0 z-30 flex flex-col justify-between text-white p-8
                                opacity-0 transition-opacity duration-[400ms] ease-[cubic-bezier(0.65,0.05,0.36,1)]
                                group-hover:opacity-100"
                    >
                      {/* Title with slide up + staggered delay */}
                      <div className="flex flex-col gap-4">
                        <span 
                          className="text-2xl font-semibold max-w-[28ch]
                                    opacity-0 translate-y-3
                                    transition-all duration-[600ms] ease-[cubic-bezier(0.65,0.05,0.36,1)]
                                    group-hover:opacity-100 group-hover:translate-y-0
                                    group-hover:delay-100"
                        >
                          AI-enabled surveillance transforming Airtel's telecom infrastructure into a safer, smarter network.
                        </span>
                      </div>

                      {/* Bottom section with longer delay */}
                      <div 
                        className="flex items-center justify-between
                                  opacity-0 translate-y-3
                                  transition-all duration-[600ms] ease-[cubic-bezier(0.65,0.05,0.36,1)]
                                  group-hover:opacity-100 group-hover:translate-y-0
                                  group-hover:delay-[250ms]"
                      >
                        <div className="flex items-center gap-2">
                          <span className="font-medium">View Case Study</span>
                          <svg
                            width="16"
                            height="16"
                            viewBox="0 0 16 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M9.33333 4L13.5 8L9.33333 12M13 8H2.5"
                              stroke="currentColor"
                              strokeWidth="1.125"
                              strokeLinecap="square"
                            />
                          </svg>
                        </div>
                        <span className="opacity-60 text-sm">CCTV Infrastructure</span>
                      </div>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </section>

          {/* SECTION 7: PROCESS/HOW WE WORK */}
          <section className="section-padding bg-light-gray">
            <div className="container-custom">
              <div className='mb-28'>
                <h1 className="headline-display text-balance text-gradient-v2 ">
                  We keep the process flexible<br />
                  <span className="text-gradient opacity-40">and the results extraordinary.</span>
                </h1>
              </div>
              
              <div className="grid md:grid-cols-3 gap-12  mx-auto">
                {/* Column 1: Expert Engineering */}
                <div>
                  <h3 className="text-2xl font-semibold mb-6">Expert Engineering Team</h3>
                  <p className="text-gray-500 mb-8 font-semibold leading-relaxed">
                    Certified professionals with deep industry expertise in energy systems, automation, and infrastructure deployment ensuring technical excellence.
                  </p>
                  <div className="space-y-4">
                    <div className="flex items-baseline gap-2">
                      <div className="text-6xl md:text-7xl text-gradient-v2 font-semibold">10/10</div>
                    </div>
                    <p className="text-sm text-gradient-v2 uppercase tracking-wide font-semibold">
                      Client Satisfaction
                    </p>
                  </div>
                </div>

                {/* Column 2: Fast Delivery */}
                <div>
                  <h3 className="text-2xl font-semibold  mb-6">Lightning Fast Delivery</h3>
                  <p className="text-gray-500 mb-8 font-semibold leading-relaxed">
                    From site survey to commissioning—we handle every phase with precision, meeting project timelines consistently across all deployments.
                  </p>
                  <div className="space-y-4">
                    <div className="flex items-baseline gap-3">
                      <div className="text-6xl md:text-7xl text-gradient-v2 font-semibold">4-6</div>
                      <div className="text-3xl  text-gray-400">Months</div>
                    </div>
                    <p className="text-sm text-gradient-v2 uppercase tracking-wide font-semibold">
                      Project Timeline
                    </p>
                  </div>
                </div>

                {/* Column 3: Proven Track Record */}
                <div>
                  <h3 className="text-2xl font-semibold mb-6">Unmatched Track Record</h3>
                  <p className="text-gray-500 mb-8 font-semibold leading-relaxed">
                  Successfully secured critical infrastructure across 157+ sites with 95% uptime, 24/7 monitoring, and complete TRAI compliance certification.
                  </p>
                  <div className="space-y-4">
                    <div className="flex items-baseline gap-3">
                      <div className="text-6xl md:text-7xl text-gradient-v2 font-semibold">157+</div>
                    </div>
                    <p className="text-sm text-gradient-v2 uppercase tracking-wide font-semibold">
                      Sites Deployed
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* SECTION 8: AVAILABILITY/CTA */}
          <section className="section-padding bg-black text-white dark-bg">
            <div className="container-custom">
              <div className="max-w-3xl mx-auto text-center">
                <div className="inline-flex items-center gap-2 bg-green-600 text-white px-4 py-2 rounded-full text-sm font-semibold mb-8">
                  <span className="w-2 h-2 bg-white rounded-full animate-pulse" />
                  Available for new projects
                </div>
                <h2 className="text-5xl md:text-7xl font-bold mb-6">
                  Ready to transform your infrastructure?
                </h2>
                <p className="text-xl text-gray-400 mb-8">
                  Let's discuss how Hypecia can deliver sustainable, scalable technology solutions for your business.
                </p>
                <Link href="/contact" className="bg-white contact-btn text-black px-8 py-4 rounded-full text-lg font-semibold hover:bg-blue-600 hover:text-white transition-all inline-flex items-center gap-2">
                  Schedule a Consultation <ArrowRight size={20} />
                </Link>
              </div>
            </div>
          </section>

          {/* SECTION 9: FOOTER */}
          <Footer />
        </div>
    </>
  )
}