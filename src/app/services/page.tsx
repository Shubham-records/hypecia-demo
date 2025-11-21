"use client"

import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import Link from 'next/link'
import Image from "next/image"
import { Zap, Cpu, Network, Shield, Wrench, HardHat, Users, ArrowRight, CheckCircle } from 'lucide-react'
import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { SplitText } from 'gsap/SplitText'

gsap.registerPlugin(ScrollTrigger, SplitText)

export default function ServicesPage() {
  // Hero refs
  const heroTitleRef = useRef<HTMLHeadingElement>(null)
  const heroDescRef = useRef<HTMLParagraphElement>(null)
  
  // Service section refs
  const service1Ref = useRef<HTMLDivElement>(null)
  const service2Ref = useRef<HTMLDivElement>(null)
  const service3Ref = useRef<HTMLDivElement>(null)
  const service4Ref = useRef<HTMLDivElement>(null)
  const service5Ref = useRef<HTMLDivElement>(null)
  const service6Ref = useRef<HTMLDivElement>(null)
  const service7Ref = useRef<HTMLDivElement>(null)
  
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

        // ===== SERVICE 1: GREEN ENERGY (Image Right, Text Left) =====
        if (service1Ref.current) {
          const image = service1Ref.current.querySelector('.service-image')
          const textContent = service1Ref.current.querySelector('.service-text')
          const title = textContent?.querySelector('h2')
          const description = textContent?.querySelector('.service-description')
          const listItems = textContent?.querySelectorAll('li')
          const button = textContent?.querySelector('a')

          // Image: fade from bottom-right
          gsap.from(image, {
            opacity: 0,
            x: 100,
            y: 100,
            duration: 1.2,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: service1Ref.current,
              start: 'top 70%',
              toggleActions: 'play none none reverse'
            }
          })

          // Text: fade from bottom-left
          gsap.from(textContent, {
            opacity: 0,
            x: -100,
            y: 100,
            duration: 1.2,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: service1Ref.current,
              start: 'top 70%',
              toggleActions: 'play none none reverse'
            }
          })

          // Title wavy animation
          if (title) {
            const titleSplit = new SplitText(title, { type: 'chars' })
            gsap.from(titleSplit.chars, {
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

          // Description wavy animation
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

          // List items stagger
          if (listItems && listItems.length > 0) {
            gsap.from(listItems, {
              opacity: 0,
              y: 30,
              stagger: 0.1,
              duration: 0.6,
              ease: 'power2.out',
              scrollTrigger: {
                trigger: listItems,
                start: 'top 85%',
                toggleActions: 'play none none reverse'
              }
            })}

          if (button) {
          gsap.from(button, {
            opacity: 0,
            y: 30,
            duration: 0.6,
            ease: 'back.out(1.7)',
            scrollTrigger: {
              trigger: button,
              start: 'top 90%',
              toggleActions: 'play none none reverse'
            }
          })}
        }

        // ===== SERVICE 2: INDUSTRIAL AUTOMATION (Image Left, Text Right) =====
        if (service2Ref.current) {
          const image = service2Ref.current.querySelector('.service-image')
          const textContent = service2Ref.current.querySelector('.service-text')
          const title = textContent?.querySelector('h2')
          const description = textContent?.querySelector('.service-description')
          const listItems = textContent?.querySelectorAll('li')
          const button = textContent?.querySelector('a')

          // Image: fade from bottom-left
          gsap.from(image, {
            opacity: 0,
            x: -100,
            y: 100,
            duration: 1.2,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: service2Ref.current,
              start: 'top 70%',
              toggleActions: 'play none none reverse'
            }
          })

          // Text: fade from bottom-right
          gsap.from(textContent, {
            opacity: 0,
            x: 100,
            y: 100,
            duration: 1.2,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: service2Ref.current,
              start: 'top 70%',
              toggleActions: 'play none none reverse'
            }
          })

          if (title) {
            const titleSplit = new SplitText(title, { type: 'chars' })
            gsap.from(titleSplit.chars, {
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

          if (listItems && listItems.length > 0) {
          gsap.from(listItems, {
            opacity: 0,
            y: 30,
            stagger: 0.1,
            duration: 0.6,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: listItems,
              start: 'top 85%',
              toggleActions: 'play none none reverse'
            }
          })}
          if (button) {
          gsap.from(button, {
            opacity: 0,
            y: 30,
            duration: 0.6,
            ease: 'back.out(1.7)',
            scrollTrigger: {
              trigger: button,
              start: 'top 90%',
              toggleActions: 'play none none reverse'
            }
          })}
        }

        // ===== SERVICE 3: TELECOM & IT (Image Right, Text Left) =====
        if (service3Ref.current) {
          const image = service3Ref.current.querySelector('.service-image')
          const textContent = service3Ref.current.querySelector('.service-text')
          const title = textContent?.querySelector('h2')
          const description = textContent?.querySelector('.service-description')
          const listItems = textContent?.querySelectorAll('li')
          const button = textContent?.querySelector('a')

          gsap.from(image, {
            opacity: 0,
            x: 100,
            y: 100,
            duration: 1.2,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: service3Ref.current,
              start: 'top 70%',
              toggleActions: 'play none none reverse'
            }
          })

          gsap.from(textContent, {
            opacity: 0,
            x: -100,
            y: 100,
            duration: 1.2,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: service3Ref.current,
              start: 'top 70%',
              toggleActions: 'play none none reverse'
            }
          })

          if (title) {
            const titleSplit = new SplitText(title, { type: 'chars' })
            gsap.from(titleSplit.chars, {
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
          if (listItems && listItems.length > 0) {
          gsap.from(listItems, {
            opacity: 0,
            y: 30,
            stagger: 0.1,
            duration: 0.6,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: listItems,
              start: 'top 85%',
              toggleActions: 'play none none reverse'
            }
          })}
          if (button) {
          gsap.from(button, {
            opacity: 0,
            y: 30,
            duration: 0.6,
            ease: 'back.out(1.7)',
            scrollTrigger: {
              trigger: button,
              start: 'top 90%',
              toggleActions: 'play none none reverse'
            }
          })}
        }

        // ===== SERVICE 4: SECURITY (Image Left, Text Right) =====
        if (service4Ref.current) {
          const image = service4Ref.current.querySelector('.service-image')
          const textContent = service4Ref.current.querySelector('.service-text')
          const title = textContent?.querySelector('h2')
          const description = textContent?.querySelector('.service-description')
          const listItems = textContent?.querySelectorAll('li')
          const button = textContent?.querySelector('a')

          gsap.from(image, {
            opacity: 0,
            x: -100,
            y: 100,
            duration: 1.2,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: service4Ref.current,
              start: 'top 70%',
              toggleActions: 'play none none reverse'
            }
          })

          gsap.from(textContent, {
            opacity: 0,
            x: 100,
            y: 100,
            duration: 1.2,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: service4Ref.current,
              start: 'top 70%',
              toggleActions: 'play none none reverse'
            }
          })

          if (title) {
            const titleSplit = new SplitText(title, { type: 'chars' })
            gsap.from(titleSplit.chars, {
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
          if (listItems && listItems.length > 0) {
          gsap.from(listItems, {
            opacity: 0,
            y: 30,
            stagger: 0.1,
            duration: 0.6,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: listItems,
              start: 'top 85%',
              toggleActions: 'play none none reverse'
            }
          })}
          if (button) {
          gsap.from(button, {
            opacity: 0,
            y: 30,
            duration: 0.6,
            ease: 'back.out(1.7)',
            scrollTrigger: {
              trigger: button,
              start: 'top 90%',
              toggleActions: 'play none none reverse'
            }
          })}
        }

        // ===== SERVICE 5: MEP (Image Right, Text Left) =====
        if (service5Ref.current) {
          const image = service5Ref.current.querySelector('.service-image')
          const textContent = service5Ref.current.querySelector('.service-text')
          const title = textContent?.querySelector('h2')
          const description = textContent?.querySelector('.service-description')
          const listItems = textContent?.querySelectorAll('li')
          const button = textContent?.querySelector('a')

          gsap.from(image, {
            opacity: 0,
            x: 100,
            y: 100,
            duration: 1.2,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: service5Ref.current,
              start: 'top 70%',
              toggleActions: 'play none none reverse'
            }
          })

          gsap.from(textContent, {
            opacity: 0,
            x: -100,
            y: 100,
            duration: 1.2,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: service5Ref.current,
              start: 'top 70%',
              toggleActions: 'play none none reverse'
            }
          })

          if (title) {
            const titleSplit = new SplitText(title, { type: 'chars' })
            gsap.from(titleSplit.chars, {
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
          if (listItems && listItems.length > 0) {
          gsap.from(listItems, {
            opacity: 0,
            y: 30,
            stagger: 0.1,
            duration: 0.6,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: listItems,
              start: 'top 85%',
              toggleActions: 'play none none reverse'
            }
          })}
          if (button) {
          gsap.from(button, {
            opacity: 0,
            y: 30,
            duration: 0.6,
            ease: 'back.out(1.7)',
            scrollTrigger: {
              trigger: button,
              start: 'top 90%',
              toggleActions: 'play none none reverse'
            }
          })}
        }

        // ===== SERVICE 6: CIVIL (Image Left, Text Right) =====
        if (service6Ref.current) {
          const image = service6Ref.current.querySelector('.service-image')
          const textContent = service6Ref.current.querySelector('.service-text')
          const title = textContent?.querySelector('h2')
          const description = textContent?.querySelector('.service-description')
          const listItems = textContent?.querySelectorAll('li')
          const button = textContent?.querySelector('a')

          gsap.from(image, {
            opacity: 0,
            x: -100,
            y: 100,
            duration: 1.2,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: service6Ref.current,
              start: 'top 70%',
              toggleActions: 'play none none reverse'
            }
          })

          gsap.from(textContent, {
            opacity: 0,
            x: 100,
            y: 100,
            duration: 1.2,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: service6Ref.current,
              start: 'top 70%',
              toggleActions: 'play none none reverse'
            }
          })

          if (title) {
            const titleSplit = new SplitText(title, { type: 'chars' })
            gsap.from(titleSplit.chars, {
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
          if (listItems && listItems.length > 0) {
          gsap.from(listItems, {
            opacity: 0,
            y: 30,
            stagger: 0.1,
            duration: 0.6,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: listItems,
              start: 'top 85%',
              toggleActions: 'play none none reverse'
            }
          })}
          if (button) {
          gsap.from(button, {
            opacity: 0,
            y: 30,
            duration: 0.6,
            ease: 'back.out(1.7)',
            scrollTrigger: {
              trigger: button,
              start: 'top 90%',
              toggleActions: 'play none none reverse'
            }
          })}
        }

        // ===== SERVICE 7: MANPOWER (Image Right, Text Left) =====
        if (service7Ref.current) {
          const image = service7Ref.current.querySelector('.service-image')
          const textContent = service7Ref.current.querySelector('.service-text')
          const title = textContent?.querySelector('h2')
          const description = textContent?.querySelector('.service-description')
          const listItems = textContent?.querySelectorAll('li')
          const button = textContent?.querySelector('a')

          gsap.from(image, {
            opacity: 0,
            x: 100,
            y: 100,
            duration: 1.2,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: service7Ref.current,
              start: 'top 70%',
              toggleActions: 'play none none reverse'
            }
          })

          gsap.from(textContent, {
            opacity: 0,
            x: -100,
            y: 100,
            duration: 1.2,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: service7Ref.current,
              start: 'top 70%',
              toggleActions: 'play none none reverse'
            }
          })

          if (title) {
            const titleSplit = new SplitText(title, { type: 'chars' })
            gsap.from(titleSplit.chars, {
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
          if (listItems && listItems.length > 0) {
          gsap.from(listItems, {
            opacity: 0,
            y: 30,
            stagger: 0.1,
            duration: 0.6,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: listItems,
              start: 'top 85%',
              toggleActions: 'play none none reverse'
            }
          })}
          if (button) {
          gsap.from(button, {
            opacity: 0,
            y: 30,
            duration: 0.6,
            ease: 'back.out(1.7)',
            scrollTrigger: {
              trigger: button,
              start: 'top 90%',
              toggleActions: 'play none none reverse'
            }
          })}
        }

        // ===== CTA SECTION ANIMATION =====
        if (ctaSectionRef.current) {
          const ctaTitle = ctaSectionRef.current.querySelector('h2')
          const ctaDesc = ctaSectionRef.current.querySelector('p')
          const ctaButton = ctaSectionRef.current.querySelector('a')

          gsap.from([ctaTitle, ctaDesc, ctaButton], {
            opacity: 0,
            y: 60,
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
              id: "services-footer"
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
        <Navigation isHomepage={true}/>
        
        {/* Hero Section */}
        <section className="min-h-[70vh] flex items-center justify-center relative overflow-hidden pt-20">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-green-50 opacity-60" />
          <div className="container-custom relative z-10 text-center">
            <h1 ref={heroTitleRef} className="text-huge mb-6" style={{ opacity: 0 }}>
              Our <span className="text-blue-600">Services</span>
            </h1>
            <p ref={heroDescRef} className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto" style={{ opacity: 0 }}>
              End-to-end solutions for energy, automation, and digital infrastructure
            </p>
          </div>
        </section>
  
        {/* Services Detail */}
        <section className="section-padding">
          <div className="container-custom space-y-32">
            
            {/* Green Energy Solutions */}
            <div ref={service1Ref} className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="service-text">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6">
                  <Zap className="text-green-600" size={32} />
                </div>
                <h2 className="text-display_v2 mb-6">Green Energy Solutions</h2>
                <p className="service-description text-xl text-gray-600 mb-8">
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
              <div className="service-image aspect-square bg-gradient-to-br from-green-400 to-green-600 rounded-3xl overflow-hidden relative">
                <Image
                  src="/Green Energy Solutions.jpg"
                  alt="Green Energy Icon"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
  
            {/* Industrial Automation */}
            <div ref={service2Ref} className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="service-image order-2 lg:order-1 aspect-square bg-gradient-to-br from-blue-400 to-blue-600 rounded-3xl overflow-hidden relative">
                <Image
                  src="/Industrial Automation.jpg"
                  alt="Industrial Automation"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="service-text order-1 lg:order-2">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                  <Cpu className="text-blue-600" size={32} />
                </div>
                <h2 className="text-display_v2 mb-6">Industrial Automation</h2>
                <p className="service-description text-xl text-gray-600 mb-8">
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
            <div ref={service3Ref} className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="service-text">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mb-6">
                  <Network className="text-purple-600" size={32} />
                </div>
                <h2 className="text-display_v2 mb-6">Telecom & IT <br/> Infrastructure</h2>
                <p className="service-description text-xl text-gray-600 mb-8">
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
              <div className="service-image aspect-square bg-gradient-to-br from-purple-400 to-purple-600 rounded-3xl overflow-hidden relative">
                <Image
                  src="/Telecom_IT_Infrastructure.png"
                  alt="Telecom & IT Infrastructure"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
  
            {/* Security & Surveillance */}
            <div ref={service4Ref} className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="service-image order-2 lg:order-1 aspect-square bg-gradient-to-br from-red-400 to-red-600 rounded-3xl overflow-hidden relative">
                <Image
                  src="/Security_Surveillance.png"
                  alt="Security & Surveillance"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="service-text order-1 lg:order-2">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mb-6">
                  <Shield className="text-red-600" size={32} />
                </div>
                <h2 className="text-display_v2 mb-6">Security & Surveillance</h2>
                <p className="service-description text-xl text-gray-600 mb-8">
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
  
            {/* MEP Engineering */}
            <div ref={service5Ref} className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="service-text">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mb-6">
                  <Wrench className="text-orange-600" size={32} />
                </div>
                <h2 className="text-display_v2 mb-6">MEP Engineering</h2>
                <p className="service-description text-xl text-gray-600 mb-8">
                  Complete mechanical, electrical, and plumbing solutions for mission-critical facilities—from data centers to industrial complexes.
                </p>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="text-orange-500 flex-shrink-0 mt-1" size={20} />
                    <span className="text-gray-700">Electrical Systems & Infrastructure</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="text-orange-500 flex-shrink-0 mt-1" size={20} />
                    <span className="text-gray-700">DG Upgradation & Power Solutions</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="text-orange-500 flex-shrink-0 mt-1" size={20} />
                    <span className="text-gray-700">Data Center MEP Work</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="text-orange-500 flex-shrink-0 mt-1" size={20} />
                    <span className="text-gray-700">Transformer & HT/LT Work</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="text-orange-500 flex-shrink-0 mt-1" size={20} />
                    <span className="text-gray-700">Complete Electrical Engineering</span>
                  </li>
                </ul>
                <Link href="/contact" className="bg-orange-600 book-call-btn text-white px-6 py-3 rounded-full font-semibold hover:bg-orange-700 transition-all inline-flex items-center gap-2">
                  Get Started <ArrowRight size={18} />
                </Link>
              </div>
              <div className="service-image aspect-square bg-gradient-to-br from-orange-400 to-orange-600 rounded-3xl overflow-hidden flex items-center justify-center">
                <Wrench className="text-white" size={180} />
              </div>
            </div>
  
            {/* Civil & Earthing Works */}
            <div ref={service6Ref} className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="service-image order-2 lg:order-1 aspect-square bg-gradient-to-br from-gray-400 to-gray-600 rounded-3xl overflow-hidden relative">
                <Image
                  src="/Earthing Solutions.png"
                  alt="Civil & Earthing Works"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="service-text order-1 lg:order-2">
                <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mb-6">
                  <HardHat className="text-gray-600" size={32} />
                </div>
                <h2 className="text-display_v2 mb-6">Civil & Earthing Works</h2>
                <p className="service-description text-xl text-gray-600 mb-8">
                  Comprehensive civil engineering and advanced earthing solutions ensuring structural integrity and electrical safety.
                </p>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="text-gray-500 flex-shrink-0 mt-1" size={20} />
                    <span className="text-gray-700">Complete Civil Engineering Services</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="text-gray-500 flex-shrink-0 mt-1" size={20} />
                    <span className="text-gray-700">Industrial Plant Earthing Systems</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="text-gray-500 flex-shrink-0 mt-1" size={20} />
                    <span className="text-gray-700">Smart Grid Grounding Solutions</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="text-gray-500 flex-shrink-0 mt-1" size={20} />
                    <span className="text-gray-700">Safety Compliance & Protection</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="text-gray-500 flex-shrink-0 mt-1" size={20} />
                    <span className="text-gray-700">Infrastructure Development</span>
                  </li>
                </ul>
                <Link href="/contact" className="bg-gray-600 book-call-btn text-white px-6 py-3 rounded-full font-semibold hover:bg-gray-700 transition-all inline-flex items-center gap-2">
                  Get Started <ArrowRight size={18} />
                </Link>
              </div>
            </div>
  
            {/* Manpower Services */}
            <div ref={service7Ref} className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="service-text">
                <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mb-6">
                  <Users className="text-yellow-600" size={32} />
                </div>
                <h2 className="text-display_v2 mb-6">Manpower Services</h2>
                <p className="service-description text-xl text-gray-600 mb-8">
                  Comprehensive facility management with trained professionals ensuring 24/7 operational excellence and security.
                </p>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="text-yellow-500 flex-shrink-0 mt-1" size={20} />
                    <span className="text-gray-700">Professional Security Services</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="text-yellow-500 flex-shrink-0 mt-1" size={20} />
                    <span className="text-gray-700">Technical Maintenance Services</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="text-yellow-500 flex-shrink-0 mt-1" size={20} />
                    <span className="text-gray-700">Housekeeping & Facility Management</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="text-yellow-500 flex-shrink-0 mt-1" size={20} />
                    <span className="text-gray-700">Manpower Development Programs</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="text-yellow-500 flex-shrink-0 mt-1" size={20} />
                    <span className="text-gray-700">24/7 Operational Support</span>
                  </li>
                </ul>
                <Link href="/contact" className="bg-yellow-600 book-call-btn text-white px-6 py-3 rounded-full font-semibold hover:bg-yellow-700 transition-all inline-flex items-center gap-2">
                  Get Started <ArrowRight size={18} />
                </Link>
              </div>
              <div className="service-image aspect-square bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-3xl overflow-hidden flex items-center justify-center">
                <Users className="text-white" size={180} />
              </div>
            </div>
  
          </div>
        </section>
  
        {/* CTA Section */}
        <section ref={ctaSectionRef} className="section-padding bg-black text-white h-[90vh] flex items-center justify-center">
          <div className="container-custom text-center">
            <h2 className="text-5xl md:text-6xl font-bold mb-6">
              Ready to get started?
            </h2>
            <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
              Let's discuss how our solutions can transform your business operations.
            </p>
            <a href="/contact" className="bg-white contact-btn cta-section text-black px-8 py-4 rounded-full text-lg font-semibold hover:bg-blue-600 hover:text-white transition-all inline-flex items-center gap-2">
              Contact Us <ArrowRight size={20} />
            </a>
          </div>
        </section>
  
        <Footer />
      </div>
    </>
  )
}