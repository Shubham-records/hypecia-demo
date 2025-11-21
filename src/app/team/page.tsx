"use client"
import { useEffect, useRef } from 'react'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import { Mail, Linkedin } from 'lucide-react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { SplitText } from 'gsap/SplitText'

gsap.registerPlugin(ScrollTrigger, SplitText)

export default function TeamPage() {
  // Hero refs
  const heroTitleRef = useRef<HTMLHeadingElement>(null)
  const heroDescRef = useRef<HTMLParagraphElement>(null)
  
  // Leadership section refs
  const leadershipSectionRef = useRef<HTMLDivElement>(null)
  
  // Stats section refs
  const statsSectionRef = useRef<HTMLDivElement>(null)
  
  // Values section refs
  const valuesSectionRef = useRef<HTMLDivElement>(null)

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

        // ===== LEADERSHIP SECTION ANIMATION =====
        if (leadershipSectionRef.current) {
          const sectionTitle = leadershipSectionRef.current.querySelector('.section-title')
          const sectionDesc = leadershipSectionRef.current.querySelector('.section-desc')
          const teamCards = leadershipSectionRef.current.querySelectorAll('.team-card')

          // Section title animation
          if (sectionTitle) {
            const titleSplit = new SplitText(sectionTitle, { type: 'words' })
            gsap.from(titleSplit.words, {
              opacity: 0,
              y: 50,
              stagger: 0.03,
              duration: 0.8,
              ease: 'back.out(1.7)',
              scrollTrigger: {
                trigger: sectionTitle,
                start: 'top 80%',
                toggleActions: 'play none none reverse'
              }
            })
          }

          // Section description animation
          if (sectionDesc) {
            const descSplit = new SplitText(sectionDesc, { type: 'words' })
            gsap.from(descSplit.words, {
              opacity: 0,
              y: 30,
              stagger: 0.02,
              duration: 0.6,
              ease: 'power2.out',
              scrollTrigger: {
                trigger: sectionDesc,
                start: 'top 80%',
                toggleActions: 'play none none reverse'
              }
            })
          }

          // Team cards animation
          if (teamCards && teamCards.length > 0) {
            teamCards.forEach((card, index) => {
              const avatar = card.querySelector('.team-avatar')
              const name = card.querySelector('.team-name')
              const role = card.querySelector('.team-role')
              const bio = card.querySelector('.team-bio')
              const socials = card.querySelector('.team-socials')

              // Avatar animation with rotation
              if (avatar) {
                gsap.from(avatar, {
                  opacity: 0,
                  scale: 0.8,
                  rotation: -10,
                  duration: 0.8,
                  ease: 'back.out(1.7)',
                  scrollTrigger: {
                    trigger: card,
                    start: 'top 80%',
                    toggleActions: 'play none none reverse'
                  }
                })
              }

              // Name animation
              if (name) {
                gsap.from(name, {
                  opacity: 0,
                  y: 30,
                  duration: 0.6,
                  delay: 0.2,
                  ease: 'power3.out',
                  scrollTrigger: {
                    trigger: card,
                    start: 'top 80%',
                    toggleActions: 'play none none reverse'
                  }
                })
              }

              // Role animation
              if (role) {
                gsap.from(role, {
                  opacity: 0,
                  y: 20,
                  duration: 0.5,
                  delay: 0.3,
                  ease: 'power2.out',
                  scrollTrigger: {
                    trigger: card,
                    start: 'top 80%',
                    toggleActions: 'play none none reverse'
                  }
                })
              }

              // Bio animation
              if (bio) {
                const bioSplit = new SplitText(bio, { type: 'words' })
                gsap.from(bioSplit.words, {
                  opacity: 0,
                  y: 20,
                  stagger: 0.02,
                  duration: 0.5,
                  delay: 0.4,
                  ease: 'power2.out',
                  scrollTrigger: {
                    trigger: card,
                    start: 'top 80%',
                    toggleActions: 'play none none reverse'
                  }
                })
              }

              // Socials animation
              if (socials) {
                const socialLinks = socials.querySelectorAll('a')
                gsap.from(socialLinks, {
                  opacity: 0,
                  scale: 0,
                  stagger: 0.1,
                  duration: 0.5,
                  delay: 0.6,
                  ease: 'back.out(1.7)',
                  scrollTrigger: {
                    trigger: card,
                    start: 'top 80%',
                    toggleActions: 'play none none reverse'
                  }
                })
              }
            })
          }
        }

        // ===== STATS SECTION ANIMATION =====
        if (statsSectionRef.current) {
          const statsTitle = statsSectionRef.current.querySelector('h2')
          const statItems = statsSectionRef.current.querySelectorAll('.stat-item')

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

        // ===== VALUES SECTION ANIMATION =====
        if (valuesSectionRef.current) {
          const valuesTitle = valuesSectionRef.current.querySelector('h2')
          const valueCards = valuesSectionRef.current.querySelectorAll('.value-card')

          if (valuesTitle) {
            const titleSplit = new SplitText(valuesTitle, { type: 'words' })
            gsap.from(titleSplit.words, {
              opacity: 0,
              y: 50,
              stagger: 0.03,
              duration: 0.8,
              ease: 'back.out(1.7)',
              scrollTrigger: {
                trigger: valuesTitle,
                start: 'top 80%',
                toggleActions: 'play none none reverse'
              }
            })
          }

          if (valueCards && valueCards.length > 0) {
            valueCards.forEach((card) => {
              const number = card.querySelector('.value-number')
              const title = card.querySelector('.value-title')
              const desc = card.querySelector('.value-desc')

              // Number animation
              if (number) {
                gsap.from(number, {
                  opacity: 0,
                  scale: 0.5,
                  rotation: -45,
                  duration: 0.8,
                  ease: 'back.out(1.7)',
                  scrollTrigger: {
                    trigger: card,
                    start: 'top 85%',
                    toggleActions: 'play none none reverse'
                  }
                })
              }

              // Title animation
              if (title) {
                gsap.from(title, {
                  opacity: 0,
                  y: 30,
                  duration: 0.6,
                  delay: 0.2,
                  ease: 'power3.out',
                  scrollTrigger: {
                    trigger: card,
                    start: 'top 85%',
                    toggleActions: 'play none none reverse'
                  }
                })
              }

              // Description animation
              if (desc) {
                const descSplit = new SplitText(desc, { type: 'words' })
                gsap.from(descSplit.words, {
                  opacity: 0,
                  y: 20,
                  stagger: 0.02,
                  duration: 0.5,
                  delay: 0.3,
                  ease: 'power2.out',
                  scrollTrigger: {
                    trigger: card,
                    start: 'top 85%',
                    toggleActions: 'play none none reverse'
                  }
                })
              }
            })
          }
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
              id: "team-footer"
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
              Meet Our <span className="text-blue-600">Team</span>
            </h1>
            <p ref={heroDescRef} className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto" style={{ opacity: 0 }}>
              Expert professionals driving sustainable transformation across industries.
            </p>
          </div>
        </section>

        {/* Leadership Team */}
        <section ref={leadershipSectionRef} className="section-padding">
          <div className="container-custom">
            <h2 className="section-title text-4xl md:text-5xl font-bold mb-4">Leadership Team</h2>
            <p className="section-desc text-xl text-gray-600 mb-16 max-w-2xl">
              Certified professionals with deep industry expertise in telecom security, green energy, and industrial automation—delivering 157+ successful deployments.
            </p>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Team Member 2 */}
              <div className="team-card group">
                <div className="team-avatar aspect-square bg-gradient-to-br from-green-400 to-green-600 rounded-3xl mb-6 overflow-hidden">
                  <div className="w-full h-full flex items-center justify-center text-white text-6xl font-black">
                    RS
                  </div>
                </div>
                <h3 className="team-name text-2xl font-bold mb-1">Rajeev Sharma</h3>
                <p className="team-role text-green-600 font-semibold mb-2">Technical Director</p>
                <p className="team-bio text-gray-600 mb-4">Leading technical innovation in green energy solutions and industrial automation. 10+ years driving sustainable infrastructure transformation with expertise in solar integration and smart grid systems.</p>
                <div className="team-socials flex gap-3">
                  <a href="mailto:Hypeciaconnectservices@gmail.com" className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center hover:bg-green-600 hover:text-white transition-all">
                    <Mail size={18} />
                  </a>
                  <a href="#" className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center hover:bg-green-600 hover:text-white transition-all">
                    <Linkedin size={18} />
                  </a>
                </div>
              </div>

              {/* Team Member 3 */}
              <div className="team-card group">
                <div className="team-avatar aspect-square bg-gradient-to-br from-purple-400 to-purple-600 rounded-3xl mb-6 overflow-hidden">
                  <div className="w-full h-full flex items-center justify-center text-white text-6xl font-black">
                    HC
                  </div>
                </div>
                <h3 className="team-name text-2xl font-bold mb-1">Operations Head</h3>
                <p className="team-role text-purple-600 font-semibold mb-2">Chief Operations Officer</p>
                <p className="team-bio text-gray-600 mb-4">Ensuring flawless execution and delivery across multiple sites with precision timeline management. Overseeing 24/7 operations, quality control, and client satisfaction across all deployments.</p>
                <div className="team-socials flex gap-3">
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
        <section ref={statsSectionRef} className="section-padding bg-black text-white">
          <div className="container-custom">
            <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center">Our Track Record</h2>
            <div className="grid md:grid-cols-4 gap-8">
              <div className="stat-item text-center">
                <div className="text-6xl font-black mb-2">157+</div>
                <p className="text-gray-400">Sites Deployed</p>
              </div>
              <div className="stat-item text-center">
                <div className="text-6xl font-black mb-2">95%</div>
                <p className="text-gray-400">Uptime Achievement</p>
              </div>
              <div className="stat-item text-center">
                <div className="text-6xl font-black mb-2">2022</div>
                <p className="text-gray-400">Established</p>
              </div>
              <div className="stat-item text-center">
                <div className="text-6xl font-black mb-2">10/10</div>
                <p className="text-gray-400">Client Satisfaction</p>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section ref={valuesSectionRef} className="section-padding bg-light-gray">
          <div className="container-custom">
            <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center">Our Core Values</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="value-card text-center">
                <div className="value-number text-6xl font-black text-gray-200 mb-4">01</div>
                <h3 className="value-title text-2xl font-bold mb-3">Technical Excellence</h3>
                <p className="value-desc text-gray-600">Industry-certified professionals delivering cutting-edge solutions with unmatched precision and quality standards.</p>
              </div>
              <div className="value-card text-center">
                <div className="value-number text-6xl font-black text-gray-200 mb-4">02</div>
                <h3 className="value-title text-2xl font-bold mb-3">Proven Execution</h3>
                <p className="value-desc text-gray-600">Consistent on-time delivery across 157+ sites with 95% uptime—results that speak louder than promises.</p>
              </div>
              <div className="value-card text-center">
                <div className="value-number text-6xl font-black text-gray-200 mb-4">03</div>
                <h3 className="value-title text-2xl font-bold mb-3">Client Partnership</h3>
                <p className="value-desc text-gray-600">Building long-term relationships with industry leaders through transparency, reliability, and exceptional service.</p>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  )
}