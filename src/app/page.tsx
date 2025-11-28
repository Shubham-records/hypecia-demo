"use client"

import HypeciaLoader from '@/components/logo_animation'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import { ArrowRight, CheckCircle } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'
import { SplitText } from 'gsap/SplitText'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Draggable } from 'gsap/Draggable'

gsap.registerPlugin(SplitText, ScrollTrigger, Draggable)

export default function Home() {
  const [showLoader, setShowLoader] = useState(true)
  const [startFadeIn, setStartFadeIn] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)
  const heroBoxRef = useRef<HTMLDivElement>(null)
  const heroTitleRef = useRef<HTMLHeadingElement>(null)
  const heroDescRef = useRef<HTMLParagraphElement>(null)
  const statsRef = useRef<HTMLDivElement>(null)
  const aboutLeftRef = useRef<HTMLDivElement>(null)
  const aboutRightRef = useRef<HTMLDivElement>(null)
  const aboutContainerRef = useRef<HTMLDivElement>(null)
  const servicesContainerRef = useRef<HTMLDivElement>(null)
  const servicesCardsRef = useRef<HTMLDivElement>(null)

  // Client trust refs
  const clientTrustRef = useRef<HTMLDivElement>(null)
  const circleRevealRef = useRef<HTMLDivElement>(null)
  const clientContentRef = useRef<HTMLDivElement>(null)

  // Testimonial refs
  const testimonialSectionRef = useRef<HTMLDivElement>(null)
  const testimonialTrackRef = useRef<HTMLDivElement>(null)
  const testimonialInterval = useRef<NodeJS.Timeout | null>(null)

  // Project refs
  const projectSectionRef = useRef<HTMLDivElement>(null)
  const projectTitleRef = useRef<HTMLDivElement>(null)
  const projectCardsRef = useRef<HTMLDivElement>(null)

  // Process refs
  const processSectionRef = useRef<HTMLDivElement>(null)
  const processTitleRef = useRef<HTMLDivElement>(null)
  const processCardsRef = useRef<HTMLDivElement>(null)

  // Counter refs
  const counter1Ref = useRef<HTMLSpanElement>(null)
  const counter2Ref = useRef<HTMLSpanElement>(null)
  const counter3Ref = useRef<HTMLSpanElement>(null)

  // Services state
  const [services] = useState([
    {
      title: "Green Energy Solutions",
      description: "Solar integration, energy monitoring, and sustainable design practices",
      icon: "⚡",
      color: "from-green-400 to-green-600",
    },
    {
      title: "Industrial Automation",
      description: "Scalable automation systems for operational optimization",
      icon: "🤖",
      color: "from-blue-400 to-blue-600",
    },
    {
      title: "Telecom & IT Infrastructure",
      description: "Robust, scalable, future-ready digital infrastructure",
      icon: "🌐",
      color: "from-purple-400 to-purple-600",
    },
    {
      title: "Security & Surveillance",
      description: "AI-enabled CCTV systems with real-time monitoring",
      icon: "🛡️",
      color: "from-red-400 to-red-600",
    },
    {
      title: "MEP Engineering",
      description: "Electrical, DG upgradation, HT/LT work, transformer solutions",
      icon: "🔧",
      color: "from-orange-400 to-orange-600",
    },
    {
      title: "Civil & Earthing Works",
      description: "Complete civil engineering and advanced earthing solutions",
      icon: "⚒️",
      color: "from-gray-400 to-gray-600",
    },
    {
      title: "Manpower & Facility Services",
      description: "Comprehensive facility management, security, and technical staffing with 24/7 operational support.",
      icon: "👨🏻‍🔧",
      color: "from-yellow-400 to-yellow-600",
    },
  ])

  // Testimonials data
  const testimonials = [
    {
      quote: "Hypecia delivers reliable, innovative solutions with technical excellence. Their expertise transformed our infrastructure.",
      author: "Rajeev Sharma",
      role: "Technical Director, Hypecia Connect Services",
      initials: "RS"
    },
    {
      quote: "Outstanding execution on our CCTV infrastructure project. 157 sites deployed flawlessly with zero downtime.",
      author: "Vikram Singh",
      role: "Operations Head, Airtel",
      initials: "VS"
    },
    {
      quote: "Their industrial automation solutions increased our efficiency by 40%. Truly a game-changer for our manufacturing unit.",
      author: "Priya Sharma",
      role: "Plant Manager, EPACK PREFAB",
      initials: "PS"
    },
    {
      quote: "Professional, punctual, and precise. Hypecia's team handled our complete MEP requirements with exceptional quality.",
      author: "Amit Patel",
      role: "",
      initials: "AP"
    },
    {
      quote: "Best-in-class security solutions with AI integration. Their 24/7 monitoring system gives us complete peace of mind.",
      author: "Neha Gupta",
      role: "",
      initials: "NG"
    },
    {
      quote: "From planning to execution, Hypecia exceeded expectations. Their green energy solutions reduced our costs by 35%.",
      author: "Rajesh Kumar",
      role: "",
      initials: "RK"
    }
  ]

  const goToSlide = (index: number) => {
    if (!testimonialTrackRef.current) return;

    const cards = gsap.utils.toArray<HTMLElement>(".testimonial-card");
    const cardWidth = cards[0].offsetWidth;

    gsap.to(testimonialTrackRef.current, {
      x: -(index * cardWidth),
      duration: 0.5,
      ease: "power3.inOut"
    });
  };

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


  // UNIFIED GSAP ANIMATION
  useEffect(() => {
    if (!startFadeIn) return

    const ctx = gsap.context(() => {
      // ===== HERO ANIMATION =====
      const heroTl = gsap.timeline({ delay: 0.5 })

      heroTl.fromTo(
        heroBoxRef.current,
        { scale: 0.95, opacity: 0 },
        { scale: 1, opacity: 1, duration: 0.8, ease: 'power2.out' }
      )

      if (heroTitleRef.current) {
        const titleSplit = new SplitText(heroTitleRef.current, { type: 'words' })
        gsap.set(heroTitleRef.current, { opacity: 1 })

        heroTl.fromTo(
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

        heroTl.fromTo(
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

      // ===== STATS SECTION ANIMATION =====
      if (statsRef.current) {
        const statItems = statsRef.current.querySelectorAll('.stat-item')

        // Set initial state for stat items
        gsap.set(statItems, { opacity: 0, y: 30 })

        // Animate stat items
        gsap.to(statItems, {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: 'power3.out',
          stagger: {
            each: 0.2,
            from: 'start'
          },
          scrollTrigger: {
            trigger: statsRef.current,
            start: 'top 60%',
            end: 'top 40%',
            toggleActions: 'play reverse play reverse',
            scrub: 1
          }
        })

        // Counter animations with proper reset handling
        let counter1Tween: gsap.core.Tween | null = null
        let counter2Tween: gsap.core.Tween | null = null
        let counter3Tween: gsap.core.Tween | null = null

        ScrollTrigger.create({
          trigger: statsRef.current,
          start: 'top 60%',
          end: 'bottom 60%',
          onEnter: () => {
            // Kill any existing tweens
            if (counter1Tween) counter1Tween.kill()
            if (counter2Tween) counter2Tween.kill()
            if (counter3Tween) counter3Tween.kill()

            // Counter 1: 157+
            const counterObj1 = { value: 0 }
            counter1Tween = gsap.to(counterObj1, {
              value: 157,
              duration: 1,
              ease: 'power2.out',
              onUpdate: () => {
                if (counter1Ref.current) {
                  counter1Ref.current.textContent = Math.floor(counterObj1.value).toString()
                }
              }
            })

            // Counter 2: 2400+
            const counterObj2 = { value: 0 }
            counter2Tween = gsap.to(counterObj2, {
              value: 2400,
              duration: 1,
              ease: 'power2.out',
              onUpdate: () => {
                if (counter2Ref.current) {
                  counter2Ref.current.textContent = Math.floor(counterObj2.value).toString()
                }
              }
            })

            // Counter 3: 95%
            const counterObj3 = { value: 0 }
            counter3Tween = gsap.to(counterObj3, {
              value: 95,
              duration: 1,
              ease: 'power2.out',
              onUpdate: () => {
                if (counter3Ref.current) {
                  counter3Ref.current.textContent = Math.floor(counterObj3.value).toString()
                }
              }
            })
          },
          onLeaveBack: () => {
            // Kill any existing tweens
            if (counter1Tween) counter1Tween.kill()
            if (counter2Tween) counter2Tween.kill()
            if (counter3Tween) counter3Tween.kill()

            // Reset all counters immediately when scrolling back up
            if (counter1Ref.current) counter1Ref.current.textContent = '0'
            if (counter2Ref.current) counter2Ref.current.textContent = '0'
            if (counter3Ref.current) counter3Ref.current.textContent = '0'
          },
          onEnterBack: () => {
            // Kill any existing tweens
            if (counter1Tween) counter1Tween.kill()
            if (counter2Tween) counter2Tween.kill()
            if (counter3Tween) counter3Tween.kill()

            // Reanimate when scrolling back down
            const counterObj1 = { value: 0 }
            counter1Tween = gsap.to(counterObj1, {
              value: 157,
              duration: 1,
              ease: 'power2.out',
              onUpdate: () => {
                if (counter1Ref.current) {
                  counter1Ref.current.textContent = Math.floor(counterObj1.value).toString()
                }
              }
            })

            const counterObj2 = { value: 0 }
            counter2Tween = gsap.to(counterObj2, {
              value: 2400,
              duration: 1,
              ease: 'power2.out',
              onUpdate: () => {
                if (counter2Ref.current) {
                  counter2Ref.current.textContent = Math.floor(counterObj2.value).toString()
                }
              }
            })

            const counterObj3 = { value: 0 }
            counter3Tween = gsap.to(counterObj3, {
              value: 95,
              duration: 1,
              ease: 'power2.out',
              onUpdate: () => {
                if (counter3Ref.current) {
                  counter3Ref.current.textContent = Math.floor(counterObj3.value).toString()
                }
              }
            })
          },
          onLeave: () => {
            // Keep the final values when scrolling down past the section
            if (counter1Ref.current) counter1Ref.current.textContent = '157'
            if (counter2Ref.current) counter2Ref.current.textContent = '2400'
            if (counter3Ref.current) counter3Ref.current.textContent = '95'
          }
        })
      }

      // ===== ABOUT US SECTION ANIMATION =====
      if (aboutContainerRef.current && aboutLeftRef.current && aboutRightRef.current) {
        const leftText = aboutLeftRef.current.querySelector(".about-text")
        const rightItems = aboutRightRef.current.querySelectorAll(".about-item")

        const leftSplit = new SplitText(leftText, {
          type: "words",
          wordsClass: "split-word"
        })

        leftSplit.words.forEach(w => w.classList.add("text-gradient"))

        const aboutTl = gsap.timeline({
          scrollTrigger: {
            trigger: aboutContainerRef.current,
            start: "top 20%",
            end: "+=280%",
            scrub: 1,
            pin: true,
            pinSpacing: true,
            anticipatePin: 1,
          }
        })

        aboutTl.from(leftSplit.words, {
          opacity: 0,
          x: -30,
          y: 80,
          stagger: 0.04,
          ease: "power3.out",
          duration: 1,
        })

        aboutTl.from(rightItems, {
          opacity: 0,
          x: 30,
          y: 80,
          stagger: 0.15,
          ease: "power3.out",
          duration: 1,
        }, "<")

        aboutTl.to({}, { duration: 0.5 })

        aboutTl.to(leftSplit.words, {
          opacity: 0,
          x: -80,
          y: -80,
          stagger: 0.04,
          ease: "power3.in",
          duration: 1,
        })

        aboutTl.to(rightItems, {
          opacity: 0,
          x: 80,
          y: -80,
          stagger: 0.15,
          ease: "power3.in",
          duration: 1,
        }, "<")
      }

      // ===== SERVICES SECTION ANIMATION =====
      if (servicesContainerRef.current && servicesCardsRef.current) {
        const cards = servicesCardsRef.current.querySelectorAll('.service-card')

        const containerWidth = servicesCardsRef.current.offsetWidth
        const cardWidth = 320

        cards.forEach((card, index) => {
          const baseX = index * (cardWidth + 32)
          const centerX = containerWidth / 2
          const distanceFromCenter = baseX + cardWidth / 2 - centerX
          const maxDistance = containerWidth / 2
          const normalizedDistance = distanceFromCenter / maxDistance

          const bendAmount = 80
          const y = Math.abs(normalizedDistance) * bendAmount
          const rotation = normalizedDistance * 8
          const scale = 1 - Math.abs(normalizedDistance) * 0.2
          const opacity = 1 - Math.abs(normalizedDistance) * 0.5

          gsap.set(card, {
            x: baseX,
            y: y,
            rotationY: rotation,
            scale: Math.max(scale, 0.7),
            opacity: Math.max(opacity, 0.3),
            zIndex: Math.round((1 - Math.abs(normalizedDistance)) * 100)
          })
        })

        ScrollTrigger.create({
          trigger: servicesContainerRef.current,
          start: "top -10%",
          end: () => `+=${services.length * 1200}`,
          pin: true,
          pinSpacing: true,
          scrub: 1,
          onUpdate: (self) => {
            const progress = self.progress
            const containerWidth = servicesCardsRef.current?.offsetWidth || 1000
            const cardWidth = 320
            const totalScroll = services.length * 352
            const currentScroll = progress * totalScroll

            cards.forEach((card, index) => {
              const baseX = index * (cardWidth + 32)
              let x = baseX - currentScroll

              const totalWidth = (cardWidth + 32) * services.length
              while (x < -cardWidth) x += totalWidth
              while (x > containerWidth + cardWidth) x -= totalWidth

              const centerX = containerWidth / 2
              const distanceFromCenter = x + cardWidth / 2 - centerX
              const maxDistance = containerWidth / 2
              const normalizedDistance = distanceFromCenter / maxDistance

              const bendAmount = 80
              const y = Math.abs(normalizedDistance) * bendAmount
              const rotation = normalizedDistance * 8
              const scale = 1 - Math.abs(normalizedDistance) * 0.2
              const opacity = 1 - Math.abs(normalizedDistance) * 0.5

              gsap.set(card, {
                x: x,
                y: y,
                rotationY: rotation,
                scale: Math.max(scale, 0.7),
                opacity: Math.max(opacity, 0.3),
                zIndex: Math.round((1 - Math.abs(normalizedDistance)) * 100)
              })
            })
          }
        })
      }

      // ===== CLIENT TRUST SECTION - CIRCLE REVEAL (BLACK BG) =====
      if (clientTrustRef.current && circleRevealRef.current && clientContentRef.current) {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: clientTrustRef.current,
            start: "top top",
            end: "+=120%",
            scrub: 1,
            pin: true,
            pinSpacing: false,
          }
        })

        gsap.set(circleRevealRef.current, {
          clipPath: 'circle(0% at 50% 50%)'
        })

        tl.to(circleRevealRef.current, {
          clipPath: 'circle(100% at 50% 50%)',
          duration: 1,
          ease: 'power2.out'
        })

        const clientItems = clientContentRef.current.querySelectorAll('.client-item')

        tl.from(clientItems, {
          y: 100,
          opacity: 0,
          stagger: {
            each: 0.1,
            from: 'start',
            ease: 'sine.inOut'
          },
          duration: 0.8,
          ease: 'back.out(1.7)'
        }, '-=0.3')

        tl.to({}, { duration: 0.5 })
      }

      // ===== TESTIMONIALS AUTO-SLIDE + DRAGGABLE (EVERY 2 SEC) =====
      if (testimonialSectionRef.current && testimonialTrackRef.current) {
        const track = testimonialTrackRef.current;
        const cards = gsap.utils.toArray<HTMLElement>(".testimonial-card");

        if (cards.length > 0) {
          const cardWidth = cards[0].offsetWidth;
          const total = cards.length;

          // DUPLICATE cards for seamless loop
          if (!track.hasAttribute("data-cloned")) {
            track.innerHTML += track.innerHTML;
            track.setAttribute("data-cloned", "true");
          }

          let currentIndex = 0;
          let isDragging = false;

          // Function to slide to next testimonial
          const slideToNext = () => {
            if (isDragging) return; // Don't auto-slide while dragging

            currentIndex++;

            gsap.to(track, {
              x: -(currentIndex * cardWidth),
              duration: 0.5,
              ease: "power3.inOut",
              onComplete: () => {
                // Reset to beginning when reaching the end of original set
                if (currentIndex >= total) {
                  currentIndex = 0;
                  gsap.set(track, { x: 0 });
                }
              }
            });
          };

          // Initialize Draggable
          const draggableInstance = Draggable.create(track, {
            type: "x",
            inertia: true,
            throwProps: true,
            onDragStart: () => {
              isDragging = true;
              // Pause auto-slide while dragging
              if (testimonialInterval.current) {
                clearInterval(testimonialInterval.current);
                testimonialInterval.current = null;
              }
            },
            onDragEnd: function () {
              const currentX = gsap.getProperty(track, "x") as number;

              // Calculate which card we're closest to
              const snapIndex = Math.round(Math.abs(currentX) / cardWidth);
              const snapPosition = -(snapIndex * cardWidth);

              // Animate to snapped position
              gsap.to(track, {
                x: snapPosition,
                duration: 0.4,
                ease: "power2.out",
                onComplete: () => {
                  isDragging = false;
                  currentIndex = snapIndex;

                  // Handle infinite loop wrapping
                  if (currentIndex >= total) {
                    currentIndex = 0;
                    gsap.set(track, { x: 0 });
                  } else if (currentIndex < 0) {
                    currentIndex = total - 1;
                    gsap.set(track, { x: -(currentIndex * cardWidth) });
                  }

                  // Resume auto-slide after 3 seconds of inactivity
                  setTimeout(() => {
                    if (!isDragging && !testimonialInterval.current) {
                      testimonialInterval.current = setInterval(slideToNext, 2000);
                    }
                  }, 3000);
                }
              });
            }
          })[0];

          // Start the interval - slide every 2 seconds
          const intervalId = setInterval(slideToNext, 2000);
          testimonialInterval.current = intervalId;

          // Pause on hover
          track.addEventListener('mouseenter', () => {
            if (testimonialInterval.current && !isDragging) {
              clearInterval(testimonialInterval.current);
              testimonialInterval.current = null;
            }
          });

          track.addEventListener('mouseleave', () => {
            if (!testimonialInterval.current && !isDragging) {
              testimonialInterval.current = setInterval(slideToNext, 2000);
            }
          });
        }
      }

      // ===== PROJECT SECTION - PIN → TITLE ANIMATE → CARDS ANIMATE → UNPIN =====
      if (projectSectionRef.current && projectTitleRef.current && projectCardsRef.current) {
        const projectCards = projectCardsRef.current.querySelectorAll('.project-card')

        // Single timeline with one ScrollTrigger that pins the whole section
        const projectTl = gsap.timeline({
          scrollTrigger: {
            trigger: projectSectionRef.current,
            start: "top top",
            end: "+=150%",
            scrub: 1,
            pin: true,
            pinSpacing: true
          }
        })

        // Step 1: Animate title from bottom
        projectTl.from(projectTitleRef.current, {
          opacity: 0,
          y: 80,
          duration: 0.5,
          ease: 'power3.out'
        })

        // Step 2: Hold for a moment
        projectTl.to({}, { duration: 0.3 })

        // Step 3: Animate cards from bottom with stagger
        projectTl.fromTo(projectCards,
          {
            y: 100,
            opacity: 0
          },
          {
            y: 0,
            opacity: 1,
            stagger: 0.15,
            duration: 0.6,
            ease: 'power3.out'
          }
        )

        // Step 4: Hold at the end before unpin
        projectTl.to({}, { duration: 0.4 })
      }

      // ===== PROCESS SECTION - TITLE AND CARDS ANIMATION =====
      if (processSectionRef.current && processTitleRef.current && processCardsRef.current) {

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: processSectionRef.current,
            start: "top top",
            end: "+=60%",
            scrub: 1,
            pin: true,
            pinSpacing: true
          }
        });

        // TITLE FIRST
        const titleText = processTitleRef.current.querySelector('.process-title-text');

        if (titleText) {
          const titleSplit = new SplitText(titleText, { type: 'words' });
          titleSplit.words.forEach(w => w.classList.add("text-gradient-v2"));

          tl.from(titleSplit.words, {
            opacity: 0,
            x: -80,
            y: 80,
            stagger: 0.05,
            duration: 1.2,
            ease: "power3.out"
          });
        }

        // THEN 3 COLUMNS
        const processCards = processCardsRef.current.querySelectorAll('.process-card');

        tl.from(processCards, {
          opacity: 0,
          y: 120,
          stagger: 0.3,
          duration: 1.2,
          ease: "power3.out"
        }, "+=0.3");
      }

      // ===== CTA SECTION - SIMPLE FADE IN (NO PIN) =====
      const ctaSection = document.querySelector(".cta-section")
      if (ctaSection) {
        const ctaTitle = ctaSection.querySelector("h2")
        const ctaPara = ctaSection.querySelector("p")
        const ctaBtn = ctaSection.querySelector("a")

        // Set initial state explicitly
        gsap.set([ctaTitle, ctaPara, ctaBtn], {
          opacity: 0,
          y: 60
        })

        gsap.to([ctaTitle, ctaPara, ctaBtn], {
          opacity: 1,
          y: 0,
          stagger: 0.15,
          duration: 0.9,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ctaSection,
            start: "top 80%",
            end: "top 20%",
            toggleActions: "play none none reverse",
          },
        })
      }

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
            start: "top 65%",
            end: "top 40%",
            toggleActions: "play none none reverse",
          },
        })
      }

    })

    return () => ctx.revert()
  }, [startFadeIn, services.length])


  return (
    <>
      {showLoader && (
        <HypeciaLoader onComplete={handleLoaderComplete} />
      )}
      <div className={`min-h-screen transition-opacity duration-700 ${startFadeIn ? 'opacity-100' : 'opacity-0'}`}>
        <Navigation animate={true} isHomepage={true} />

        {/* VIDEO HERO SECTION */}
        <section className="pt-4 pb-12 relative overflow-hidden ">
          <div className="mx-auto px-4 md:px-4 lg:px-4">
            <div
              ref={heroBoxRef}
              className="relative w-full aspect-video rounded-3xl overflow-hidden shadow-2xl md:h-[42.5rem] h-[40rem]"
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
                  className="mb-6 text-3xl md:text-5xl font-bold leading-tight"
                  style={{ opacity: 0 }}
                >
                  The Infrastructure You Can Trust<br />
                  <span>The Results You Demand</span>
                </h2>
                <p
                  ref={heroDescRef}
                  className="text-base md:text-xl text-white/90 max-w-3xl"
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
        <section ref={statsRef} className="section-padding py-12 bg-light-gray relative overflow-hidden" style={{ minHeight: '40vh', alignContent: 'center' }}>
          <div className="container-custom">
            <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12 text-center">
              <div className="stat-item flex items-center gap-3">
                <span className="text-4xl md:text-5xl font-bold text-black flex items-baseline gap-1">
                  <span ref={counter1Ref}>0</span>
                  <span>+</span>
                </span>
                <span className="text-lg md:text-xl text-gray-600">Sites Secured</span>
              </div>

              <div className="hidden md:block w-px h-12 bg-gray-300" />

              <div className="stat-item flex items-center gap-3">
                <span className="text-4xl md:text-5xl font-bold text-black flex items-baseline gap-1">
                  <span ref={counter2Ref}>0</span>
                  <span>+</span>
                </span>
                <span className="text-lg md:text-xl text-gray-600">CCTV Systems</span>
              </div>

              <div className="hidden md:block w-px h-12 bg-gray-300" />

              <div className="stat-item flex items-center gap-3">
                <span className="text-4xl md:text-5xl font-bold text-black flex items-baseline gap-1">
                  <span ref={counter3Ref}>0</span>
                  <span>%</span>
                </span>
                <span className="text-lg md:text-xl text-gray-600">Uptime Delivered</span>
              </div>

              <div className="hidden md:block w-px h-12 bg-gray-300" />

              <div className="stat-item flex items-center gap-3">
                <span className="text-lg md:text-xl text-gray-600">Trusted by</span>
                <span className="text-4xl md:text-5xl font-bold text-black">Airtel</span>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 3: ABOUT US */}
        <section className="section-padding bg-light-gray md:min-h-[220vh] min-h-[auto]">
          <div ref={aboutContainerRef} className="container-custom">
            <div className="grid lg:grid-cols-[3fr_2fr] gap-16 items-center">
              <div ref={aboutLeftRef}>
                <h4 className="about-text headline-display text-balance text-gradient">
                  Your trusted partner for mission-critical infrastructure. Delivering carrier-grade
                  networks, <br />
                  <span className="text-gradient opacity-40">AI-powered security, and industrial automation.
                    Proven at scale. Executed with precision.</span>
                </h4>
              </div>

              <div ref={aboutRightRef} className="space-y-6">
                <div className="about-item flex items-start gap-4">
                  <CheckCircle className="text-green-500 flex-shrink-0 mt-1" size={22} />
                  <div>
                    <h3 className="font-bold text-xl mb-2">157+ Sites. Zero Compromise</h3>
                    <p className="text-gray-600">Successfully deployed across Airtel's MSC and TNG infrastructure</p>
                  </div>
                </div>
                <div className="about-item flex items-start gap-4">
                  <CheckCircle className="text-green-500 flex-shrink-0 mt-1" size={22} />
                  <div>
                    <h3 className="font-bold text-xl mb-2">AI-Powered Security Solutions</h3>
                    <p className="text-gray-600">2,400+ cameras with intelligent analytics, facial recognition, and real-time threat detection</p>
                  </div>
                </div>
                <div className="about-item flex items-start gap-4">
                  <CheckCircle className="text-green-500 flex-shrink-0 mt-1" size={22} />
                  <div>
                    <h3 className="font-bold text-xl mb-2">40% Security Enhancement</h3>
                    <p className="text-gray-600">Proven reduction in site vulnerabilities with 95% uptime across all installations</p>
                  </div>
                </div>
                <div className="about-item flex items-start gap-4">
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
        <section ref={servicesContainerRef} className="section-padding bg-light-gray relative overflow-hidden" style={{ minHeight: '120vh' }}>
          <div className="container-custom">
            <div className="relative">
              <div className="relative flex flex-col w-full items-center items-stretch mb-[-5%]" style={{ mask: 'linear-gradient(black, transparent)' }}>
                <svg
                  width="100%"
                  height="auto"
                  viewBox="0 0 1093 325"
                  preserveAspectRatio="xMidYMid meet"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="relative mb-[-7%]"
                >
                  <defs>
                    <clipPath id="services-clip">
                      <text x="50%" y="70%" textAnchor="middle" fontFamily="Manrope, sans-serif" fontWeight="800" fontSize="14.4rem" letterSpacing="-0.03em">SERVICES</text>
                    </clipPath>
                    <linearGradient id="services-gradient" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#D8D8D8" />
                      <stop offset="100%" stopColor="#F5F5F5" />
                    </linearGradient>
                  </defs>
                  <rect x="0" y="0" width="100%" height="100%" clipPath="url(#services-clip)" fill="url(#services-gradient)" />
                </svg>
              </div>

              <div
                ref={servicesCardsRef}
                className="relative z-10 w-full h-[500px] overflow-hidden"
                style={{
                  perspective: "1000px",
                  maskImage: 'linear-gradient(to right, transparent, white 10%, white 98%, transparent)',
                  WebkitMaskImage: 'linear-gradient(to right, transparent, white 10%, white 98%, transparent)',
                }}
              >
                {services.map((service, index) => (
                  <div
                    key={index}
                    className="service-card absolute left-0 bg-white rounded-2xl border border-gray-200 shadow-xl transition-shadow hover:shadow-2xl"
                    style={{
                      width: "320px",
                      height: "350px",
                      transformStyle: "preserve-3d",
                      willChange: "transform, opacity",
                    }}
                  >
                    <div className="p-8 h-full flex flex-col">
                      <div
                        className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-2xl flex items-center justify-center mb-6 p-4 text-3xl`}
                      >
                        {service.icon}
                      </div>
                      <h3 className="text-2xl font-bold mb-4 text-gray-900">{service.title}</h3>
                      <p className="text-gray-600 leading-relaxed">{service.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CLIENT TRUST SECTION - BLACK BG */}
        <section ref={clientTrustRef} className="section-padding bg-light-gray relative overflow-hidden" style={{ minHeight: '120vh', alignContent: 'center' }}>
          <div
            ref={circleRevealRef}
            className="absolute inset-0 bg-black"
            style={{ clipPath: 'circle(0% at 50% 50%)' }}
          >
            <div ref={clientContentRef} className="h-full flex items-center justify-center">
              <div className="container-custom text-center">
                <div className="max-w-4xl mx-auto mb-16 mt-[-15%]">
                  <h2 className="text-4xl md:text-5xl font-bold mb-2 text-white">
                    Trusted by Industry Leaders
                  </h2>
                </div>

                <div className="flex flex-wrap items-center justify-center gap-x-16 gap-y-12 max-w-5xl mx-auto">
                  {/* Airtel */}
                  <div className="client-item flex flex-col items-center gap-3">
                    <div className="text-5xl md:text-6xl font-black bg-gradient-to-br from-red-500 to-red-700 bg-clip-text text-transparent">
                      AIRTEL
                    </div>
                    <p className="text-sm text-gray-400">157+ Sites Deployed</p>
                  </div>

                  {/* Vertical divider */}
                  <div className="client-item hidden md:block w-px h-16 bg-gray-600" />

                  {/* EPACK PREFAB */}
                  <div className="client-item flex flex-col items-center gap-3">
                    <div className="text-4xl md:text-5xl font-black text-white">
                      EPACK PREFAB
                    </div>
                    <p className="text-sm text-gray-400">Premium Infrastructure Partner</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SPACER SECTION - Gray background before testimonial reveal */}
        <section className="bg-light-gray" style={{ minHeight: '100vh' }}>
          <div className="container-custom h-full flex items-center justify-center">
            {/* Empty spacer - just gray background */}
          </div>
        </section>

        {/* SECTION 5: CONVERSATIONAL TESTIMONIAL - Circle Reveal */}
        <section ref={testimonialSectionRef} className="bg-light-gray relative overflow-hidden" style={{ minHeight: '100vh' }}>
          <div
            className="sticky top-0 h-screen flex items-center justify-center"
            ref={(el) => {
              if (el) {
                el.dataset.testimonialReveal = 'true'
              }
            }}
          >
            <div
              className="absolute inset-0 bg-light-gray flex items-center justify-center"
              style={{ clipPath: 'none' }}
            >
              <div className="container-custom w-full">
                <div className="relative overflow-hidden">
                  <div
                    ref={testimonialTrackRef}
                    className="flex"
                    style={{ width: `${testimonials.length * 100}vw` }}
                  >
                    {testimonials.map((testimonial, index) => (
                      <div
                        key={index}
                        className="testimonial-card flex-shrink-0 px-4"
                        style={{ width: '100vw' }}
                      >
                        <div className="max-w-4xl mx-auto text-center">
                          <p className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-8">
                            "{testimonial.quote.split('.')[0]}.{' '}
                            <span className="text-green-600">{testimonial.quote.split('.')[1] ? testimonial.quote.split('.')[1] + '."' : '"'}</span>
                          </p>
                          <div className="flex items-center justify-center gap-4">
                            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center text-white text-lg font-black">
                              {testimonial.initials}
                            </div>
                            <div className="text-left">
                              <p className="font-bold">{testimonial.author}</p>
                              <p className="text-gray-600 text-sm">{testimonial.role}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 6: PROJECT SHOWCASE */}
        <section ref={projectSectionRef} className="section-padding bg-light-gray relative overflow-hidden" style={{ minHeight: '120vh' }}>
          <div className="container-custom">
            {/* Background large text "PROJECTS" */}
            <div
              ref={projectTitleRef}
              className="relative flex flex-col w-full items-center mb-[-5%]"
              style={{ mask: "linear-gradient(black, transparent)" }}
            >
              <svg
                width="100%"
                height="auto"
                viewBox="0 0 1400 400"
                preserveAspectRatio="xMidYMid meet"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="relative mb-[-5%]"
              >
                <defs>
                  <clipPath id="projects-clip">
                    <text
                      x="50%"
                      y="65%"
                      textAnchor="middle"
                      fontFamily="Manrope, sans-serif"
                      fontWeight="800"
                      fontSize="17.8rem"
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
            <div ref={projectCardsRef} className="container-custom relative z-10">
              <div className="grid md:grid-cols-2 gap-8">
                {/* Airtel Project */}
                <a
                  href="/case-studies"
                  className="project-card group relative block aspect-[4/3] rounded-3xl overflow-hidden"
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
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 7: PROCESS/HOW WE WORK */}
        <section ref={processSectionRef} className="section-padding bg-light-gray relative overflow-hidden" style={{ minHeight: '150vh' }}>
          <div className="container-custom">
            <div className='mb-28'>
              <h1 ref={processTitleRef} className="headline-display text-balance">
                <span className="process-title-text">
                  We keep the process flexible<br />
                  <span className="opacity-40">and the results extraordinary.</span>
                </span>
              </h1>
            </div>

            <div ref={processCardsRef} className="grid md:grid-cols-3 gap-12 mx-auto">
              {/* Column 1: Expert Engineering */}
              <div className="process-card">
                <h3 className="text-2xl font-semibold mb-6">Expert Engineering Team</h3>
                <p className="text-gray-500 mb-8 font-semibold leading-relaxed">
                  Certified professionals with deep industry expertise in energy systems, automation, and infrastructure deployment ensuring technical excellence.
                </p>
                <div className="process-stats space-y-4">
                  <div className="flex items-baseline gap-2">
                    <div className="text-6xl md:text-7xl text-gradient-v2 font-semibold">10/10</div>
                  </div>
                  <p className="text-sm text-gradient-v2 uppercase tracking-wide font-semibold">
                    Client Satisfaction
                  </p>
                </div>
              </div>

              {/* Column 2: Fast Delivery */}
              <div className="process-card">
                <h3 className="text-2xl font-semibold mb-6">Lightning Fast Delivery</h3>
                <p className="text-gray-500 mb-8 font-semibold leading-relaxed">
                  From site survey to commissioning—we handle every phase with precision, meeting project timelines consistently across all deployments.
                </p>
                <div className="process-stats space-y-4">
                  <div className="flex items-baseline gap-3">
                    <div className="text-6xl md:text-7xl text-gradient-v2 font-semibold">4-6</div>
                    <div className="text-3xl text-gray-400">Months</div>
                  </div>
                  <p className="text-sm text-gradient-v2 uppercase tracking-wide font-semibold">
                    Project Timeline
                  </p>
                </div>
              </div>

              {/* Column 3: Proven Track Record */}
              <div className="process-card">
                <h3 className="text-2xl font-semibold mb-6">Unmatched Track Record</h3>
                <p className="text-gray-500 mb-8 font-semibold leading-relaxed">
                  Successfully secured critical infrastructure across 157+ sites with 95% uptime, 24/7 monitoring, and complete TRAI compliance certification.
                </p>
                <div className="process-stats space-y-4">
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
        <section className="section-padding bg-black cta-section text-white dark-bg relative overflow-hidden" style={{ minHeight: '100vh' }}>
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
              <a href="/contact" className="bg-white text-black px-8 py-4 rounded-full text-lg font-semibold hover:bg-blue-600 hover:text-white transition-all inline-flex items-center gap-2 contact-btn">
                Schedule a Consultation <ArrowRight size={20} />
              </a>
            </div>
          </div>
        </section>

        {/* SECTION 9: FOOTER */}
        <Footer />
      </div>
    </>
  )
}