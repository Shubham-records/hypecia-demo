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
import Hls from 'hls.js'
import { JsonLd } from '@/components/JsonLd'
import { organizationSchema } from '@/lib/schema'

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
    {
      title: "ELV Systems",
      description: "Extra low voltage solutions including structured cabling, fire alarms, PA systems, and BMS integration",
      icon: "🔌",
      color: "from-cyan-400 to-cyan-600",
    },
    {
      title: "Access Control Systems",
      description: "Biometric, RFID, and integrated access management for secure facility operations",
      icon: "🔐",
      color: "from-indigo-400 to-indigo-600",
    },
    {
      title: "IT Components & Enterprise Hardware",
      description: "Ready inventory of DDR5 memory, GPUs, CPUs, chipsets, and storage solutions (SSDs & HDDs) from leading brands",
      icon: "🖥️",
      color: "from-emerald-400 to-teal-600",
    }
  ])

  // Testimonials data - Expanded for marquee
  const testimonials = [
    { quote: "Hypecia Connect delivered reliable, innovative hardware solutions with technical excellence. Their expertise completely transformed our enterprise infrastructure.", author: "Michael Chen", role: "CTO, TechSolutions", initials: "MC" },
    { quote: "Outstanding execution on our CCTV infrastructure project. Over 150 sites deployed flawlessly with zero downtime and perfect synchronization.", author: "Sarah Jenkins", role: "Operations Director", initials: "SJ" },
    { quote: "Their industrial automation solutions increased our efficiency by 40%. Truly a game-changer for our main manufacturing unit.", author: "Elena Rodriguez", role: "Plant Manager", initials: "ER" },
    { quote: "Professional, punctual, and precise. The Hypecia team handled our complete MEP requirements with exceptional quality and attention to detail.", author: "David Thorne", role: "VP of Engineering", initials: "DT" },
    { quote: "Best-in-class security solutions with AI integration. Their 24/7 monitoring system gives our nationwide branches complete peace of mind.", author: "Aisha Rahman", role: "Security Head", initials: "AR" },
    { quote: "From planning to execution, Hypecia exceeded expectations. Their green energy solutions reduced our operational costs by nearly 35%.", author: "James Wilson", role: "Facility Director", initials: "JW" },
    { quote: "The level of detail and precision they bring to IT hardware procurement is unmatched. Their responsiveness is exactly what our enterprise needed.", author: "Olivia Brooks", role: "Procurement Lead", initials: "OB" },
    { quote: "Integrating their advanced network solutions helped us scale rapidly across multiple regions. Highly recommended for complex setups.", author: "Marcus Vance", role: "Head of Infrastructure", initials: "MV" },
    { quote: "We saw immediate ROI after they revamped our data center cooling. Their HVAC implementation team was absolutely phenomenal.", author: "Robert Hayes", role: "Data Center Manager", initials: "RH" },
    { quote: "Incredible support and flawless component supply chain. Our enterprise hardware upgrade was completed weeks ahead of schedule.", author: "Sophia Martinez", role: "IT Director", initials: "SM" },
    { quote: "Their end-to-end service covers everything from hardware supply to installation. We no longer have to manage a dozen different vendors.", author: "Thomas Wright", role: "Operations Manager", initials: "TW" },
    { quote: "Top-tier enterprise hardware supply. They managed our large-scale server and memory procurement seamlessly from start to finish.", author: "Kevin O'Connor", role: "Systems Architect", initials: "KO" }
  ];

  const getCardStyle = (index: number) => {
    if (index % 5 === 0) return { bg: "bg-[#F5F5F5]", text: "text-black", border: "border border-black/10", star: "text-black", circle: "bg-black/10" };
    if (index % 3 === 0) return { bg: "bg-[#111111]", text: "text-white", border: "", star: "text-[#EAE1D3]", circle: "bg-white/10" };
    return { bg: "bg-[#222222]", text: "text-white", border: "", star: "text-[#EAE1D3]", circle: "bg-white/10" };
  };

  const getCardWidth = (quote: string) => {
    const len = quote.length;
    if (len < 100) return 290;
    if (len < 140) return 340;
    return 400;
  };

  const handleLoaderComplete = () => {
    setStartFadeIn(true)
    setTimeout(() => {
      setShowLoader(false)
    }, 100)
  }

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    if (Hls.isSupported()) {
      const hls = new Hls({
        maxBufferLength: 60,
        maxMaxBufferLength: 90,
        startFragPrefetch: true,
        fragLoadingTimeOut: 20000,
        lowLatencyMode: false,
      });
      hls.loadSource('/promo_video_hls/playlist.m3u8');
      hls.attachMedia(video);

      hls.on(Hls.Events.MANIFEST_PARSED, () => {
        setTimeout(() => {
          video.play().catch(e => console.log('Autoplay failed:', e));
        }, 3300);
      });

      return () => hls.destroy();
    } else if (video.canPlayType('application/vnd.apple.mpegurl')) {
      video.src = '/promo_video_hls/playlist.m3u8';
      setTimeout(() => {
        video.play().catch(e => console.log('Autoplay failed:', e));
      }, 3300);
    }
  }, []);


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

        // Check if mobile (width < 1024px)
        const isMobile = window.innerWidth < 1024

        // Hide the h4 so ghost remnants (<br>, nested <span>) are invisible
        gsap.set(leftText, { visibility: 'hidden' })

        const leftSplit = new SplitText(leftText, {
          type: "words",
          wordsClass: "split-word"
        })

        // Make only the generated word spans visible — ghosts stay hidden
        leftSplit.words.forEach(w => {
          w.classList.add("text-gradient")
          w.style.visibility = 'visible'
        })

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

        // FADE IN (same for both mobile and desktop)
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

        // FADE OUT (only on desktop)
        if (!isMobile) {
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
      }

      // ===== SERVICES SECTION ANIMATION =====
      if (servicesContainerRef.current && servicesCardsRef.current) {
        const cards = servicesCardsRef.current.querySelectorAll('.service-card')

        const containerWidth = servicesCardsRef.current.offsetWidth
        const cardWidth = 320
        const cardGap = 32

        // Set initial positions with wrapping (to show cards on both sides)
        cards.forEach((card, index) => {
          const baseX = index * (cardWidth + cardGap)
          let x = (containerWidth / 2) - (cardWidth / 2) + baseX

          // Apply wrapping to initial position so cards appear on both sides
          const totalWidth = services.length * (cardWidth + cardGap)
          while (x < -(cardWidth * 2)) x += totalWidth
          while (x > containerWidth + cardWidth) x -= totalWidth

          const centerX = containerWidth / 2
          const cardCenter = x + cardWidth / 2
          const distanceFromCenter = Math.abs(cardCenter - centerX)
          const normalizedDistance = distanceFromCenter / (containerWidth / 2)

          const bendAmount = 60
          const y = normalizedDistance * bendAmount * 1.5
          const rotation = ((cardCenter - centerX) / (containerWidth / 2)) * 6
          const scale = 1 - (normalizedDistance * 0.15)
          const opacity = 1 - (normalizedDistance * 0.4)

          gsap.set(card, {
            x: x,
            y: y,
            rotationY: rotation,
            scale: Math.max(scale, 0.7),
            opacity: Math.max(opacity, 0.4),
            zIndex: Math.round((1 - normalizedDistance) * 100)
          })
        })

        ScrollTrigger.create({
          trigger: servicesContainerRef.current,
          start: window.innerWidth < 1024 ? "top 5%" : "top -10%",
          end: () => `+=${services.length * 1200}`,
          pin: true,
          pinSpacing: true,
          scrub: 1,
          onUpdate: (self) => {
            const progress = self.progress
            const containerWidth = servicesCardsRef.current?.offsetWidth || 1000
            const cardWidth = 320
            const cardGap = 32
            const totalScroll = services.length * (cardWidth + cardGap)
            const currentScroll = progress * totalScroll

            cards.forEach((card, index) => {
              // Calculate position relative to center
              const baseX = index * (cardWidth + cardGap)
              let x = (containerWidth / 2) - (cardWidth / 2) + baseX - currentScroll

              // Infinite loop wrapping
              const totalWidth = services.length * (cardWidth + cardGap)
              while (x < -(cardWidth * 2)) x += totalWidth
              while (x > containerWidth + cardWidth) x -= totalWidth

              // Calculate distance from center
              const centerX = containerWidth / 2
              const cardCenter = x + cardWidth / 2
              const distanceFromCenter = Math.abs(cardCenter - centerX)
              const normalizedDistance = distanceFromCenter / (containerWidth / 2)

              const bendAmount = 60
              const y = normalizedDistance * bendAmount * 1.5
              const rotation = ((cardCenter - centerX) / (containerWidth / 2)) * 6
              const scale = 1 - (normalizedDistance * 0.15)
              const opacity = 1 - (normalizedDistance * 0.4)

              gsap.set(card, {
                x: x,
                y: y,
                rotationY: rotation,
                scale: Math.max(scale, 0.7),
                opacity: Math.max(opacity, 0.4),
                zIndex: Math.round((1 - normalizedDistance) * 100)
              })
            })
          }
        })
      }

      // ===== CLIENT TRUST SECTION - CIRCLE REVEAL + BLUR TEXT + SCATTERED BUBBLES =====
      if (clientTrustRef.current && circleRevealRef.current && clientContentRef.current) {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: clientTrustRef.current,
            start: window.innerWidth < 1024 ? "top -15%" : "top top",
            end: "+=120%",
            scrub: 1,
            pin: true,
            pinSpacing: false,
          }
        })

        gsap.set(circleRevealRef.current, {
          clipPath: 'circle(0% at 50% 50%)'
        })

        // Step 1: Circle reveal
        tl.to(circleRevealRef.current, {
          clipPath: 'circle(100% at 50% 50%)',
          duration: 1,
          ease: 'power2.out'
        })

        // Step 2: Blur text animation for the heading (per-CHARACTER)
        const trustTitle = clientContentRef.current.querySelector('.trust-blur-title')
        if (trustTitle) {
          const trustSplit = new SplitText(trustTitle, { type: 'chars' })

          // Set initial state: each char is blurred + invisible + slightly offset
          gsap.set(trustSplit.chars, {
            opacity: 0,
            filter: 'blur(14px)',
            y: 20
          })

          // Animate each character sequentially: blur → clear
          tl.to(trustSplit.chars, {
            opacity: 1,
            filter: 'blur(0px)',
            y: 0,
            stagger: 0.025,
            duration: 0.5,
            ease: 'power2.out'
          }, '-=0.3')
        }

        // Step 3: Animate logo items — scale up from 0 with stagger from random directions
        const clientBubbles = clientContentRef.current.querySelectorAll('.client-bubble')

        gsap.set(clientBubbles, {
          scale: 0,
          opacity: 0
        })

        tl.to(clientBubbles, {
          scale: 1,
          opacity: 1,
          stagger: {
            each: 0.06,
            from: 'random'
          },
          duration: 0.7,
          ease: 'back.out(1.4)'
        }, '-=0.4')

        tl.to({}, { duration: 0.5 })

        // Step 4: Make each logo draggable — bounded to the section container
        Draggable.create(clientBubbles, {
          type: 'x,y',
          bounds: clientContentRef.current,
          cursor: 'grab',
          activeCursor: 'grabbing',
          zIndexBoost: true,
        })
      }

      // ===== TESTIMONIALS CONTINUOUS MARQUEE =====
      const marquee1 = document.querySelector('.marquee-track-1');
      const marquee2 = document.querySelector('.marquee-track-2');

      if (marquee1 && marquee2) {
        gsap.to(marquee1, {
          rotationY: 360,
          repeat: -1,
          duration: 80,
          ease: "none"
        });
        
        gsap.fromTo(marquee2, 
          { rotationY: 360 },
          {
            rotationY: 0,
            repeat: -1,
            duration: 90,
            ease: "none"
          }
        );
      }

      // Testimonial title blur animation
      if (testimonialSectionRef.current) {
        const splitTestimonial = new SplitText(".testimonial-blur-title", { type: "chars" });
        gsap.set(splitTestimonial.chars, { filter: "blur(14px)", opacity: 0, y: 20 });
        
        gsap.to(splitTestimonial.chars, {
          scrollTrigger: {
            trigger: testimonialSectionRef.current,
            start: "top 70%",
          },
          filter: "blur(0px)",
          opacity: 1,
          y: 0,
          stagger: 0.05,
          duration: 0.8,
          ease: "power2.out"
        });
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
            start: window.innerWidth < 1024 ? "top 10%" : "top top",
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
      <JsonLd data={organizationSchema} />
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
              className="relative w-full rounded-3xl overflow-hidden shadow-2xl h-[85vh] md:h-[95vh]"
            >
              <video
                ref={videoRef}
                muted
                loop
                playsInline
                preload="metadata"
                poster="/video_proster.webp"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-white/15 mix-blend-overlay pointer-events-none" />

              <div className="absolute inset-0 bg-black/40" />
              <div className="absolute inset-0 flex flex-col justify-center items-center text-center p-8 md:p-12 text-white">
                <h2
                  ref={heroTitleRef}
                  className="mb-6 text-5xl md:text-7xl font-bold leading-tight"
                  style={{ opacity: 0 }}
                >
                  Next-Gen Infrastructure<br />
                  <span>& Enterprise IT Supply</span>
                </h2>
                <p
                  ref={heroDescRef}
                  className="text-lg md:text-2xl text-white/90 max-w-4xl mx-auto leading-relaxed"
                  style={{ opacity: 0 }}
                >
                  From carrier-grade security networks to mission-critical hardware.<br />
                  Powering global enterprises with Tier-1 infrastructure and IT components.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* STATS SECTION */}
        <section ref={statsRef} className="section-padding py-12 bg-light-gray relative overflow-hidden" style={{ minHeight: '40vh', alignContent: 'center' }}>
          <div className="container-custom">
            <div className="flex flex-wrap items-center justify-center gap-6 md:gap-8 text-center">
              <div className="stat-item flex items-center gap-2">
                <span className="text-3xl md:text-4xl font-bold text-black flex items-baseline gap-1">
                  <span className="sr-only">150+</span>
                  <span ref={counter1Ref} aria-hidden="true">0</span>
                  <span aria-hidden="true">+</span>
                </span>
                <span className="text-base md:text-lg text-gray-600">Enterprise Sites</span>
              </div>

              <div className="hidden md:block w-px h-10 bg-gray-300" />

              <div className="stat-item flex items-center gap-2">
                <span className="text-3xl md:text-4xl font-bold text-black flex items-baseline gap-1">
                  <span className="sr-only">50k+</span>
                  <span ref={counter2Ref} aria-hidden="true">0</span>
                  <span aria-hidden="true">k+</span>
                </span>
                <span className="text-base md:text-lg text-gray-600">IT Components</span>
              </div>

              <div className="hidden md:block w-px h-10 bg-gray-300" />

              <div className="stat-item flex items-center gap-2">
                <span className="text-3xl md:text-4xl font-bold text-black flex items-baseline gap-1">
                  <span className="sr-only">99.9%</span>
                  <span ref={counter3Ref} aria-hidden="true">0</span>
                  <span aria-hidden="true">%</span>
                </span>
                <span className="text-base md:text-lg text-gray-600">Systems Uptime</span>
              </div>

              <div className="hidden md:block w-px h-10 bg-gray-300" />

              <div className="stat-item flex items-center gap-2">
                <span className="text-base md:text-lg text-gray-600">Trusted by</span>
                <span className="text-3xl md:text-4xl font-bold text-black flex items-baseline gap-1">
                  Tier-1 <span className="text-xl md:text-2xl">Brands</span>
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 3: ABOUT US */}
        <section className="section-padding bg-light-gray md:min-h-[220vh] min-h-[auto]">
          <div ref={aboutContainerRef} className="container-custom">
            <div className="grid lg:grid-cols-[3fr_2fr] gap-16 items-center">
              <div ref={aboutLeftRef}>
                <h4 className="about-text headline-display text-balance text-gradient !leading-[1.1]">
                  Powering digital transformation globally. Delivering robust carrier-grade
                  networks, <br />
                  <span className="text-gradient opacity-40">AI-driven security, and enterprise IT hardware.
                    Proven at scale. Executed with precision.</span>
                </h4>
              </div>

              <div ref={aboutRightRef} className="space-y-10">
                <div className="about-item flex items-start gap-4">
                  <CheckCircle className="text-green-500 flex-shrink-0 mt-2" size={28} />
                  <div>
                    <h3 className="font-bold text-2xl mb-2">Carrier-Grade Infrastructure</h3>
                    <p className="text-gray-600 text-lg">Successfully deployed comprehensive network and telecom solutions across Airtel, Tejas, and Nivetti environments.</p>
                  </div>
                </div>
                <div className="about-item flex items-start gap-4">
                  <CheckCircle className="text-green-500 flex-shrink-0 mt-2" size={28} />
                  <div>
                    <h3 className="font-bold text-2xl mb-2">Enterprise IT Hardware Supply</h3>
                    <p className="text-gray-600 text-lg">Ready inventory for global technology leaders including NVIDIA, Samsung, Micron, Intel, and Broadcom.</p>
                  </div>
                </div>
                <div className="about-item flex items-start gap-4">
                  <CheckCircle className="text-green-500 flex-shrink-0 mt-2" size={28} />
                  <div>
                    <h3 className="font-bold text-2xl mb-2">AI-Powered Security</h3>
                    <p className="text-gray-600 text-lg">Thousands of intelligent endpoints delivering real-time threat detection and zero-compromise operational continuity.</p>
                  </div>
                </div>
                <div className="about-item flex items-start gap-4">
                  <CheckCircle className="text-green-500 flex-shrink-0 mt-2" size={28} />
                  <div>
                    <h3 className="font-bold text-2xl mb-2">Core Processing & Storage</h3>
                    <p className="text-gray-600 text-lg">Supplying mission-critical DDR5 memory, advanced GPUs/CPUs, and high-capacity storage systems.</p>
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
              <div className="relative flex flex-col w-full items-center items-stretch mb-[-3%]" style={{ mask: 'linear-gradient(black, transparent)' }}>
                <svg
                  width="100%"
                  height="auto"
                  viewBox="0 0 1093 325"
                  preserveAspectRatio="xMidYMid meet"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="relative md:mb-[-7%] mb-[-5%]"
                >
                  <defs>
                    <clipPath id="services-clip">
                      <text x="50%" y="70%" textAnchor="middle" fontFamily="Manrope, sans-serif" fontWeight="800" fontSize="14.4rem" letterSpacing="-0.03em">SERVICES</text>
                    </clipPath>
                    <linearGradient id="services-gradient" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="30%" stopColor="#D8D8D8" />
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

        {/* CLIENT TRUST SECTION - BLACK BG, SCATTERED FLOATING LOGOS */}
        <section ref={clientTrustRef} className="bg-light-gray relative overflow-hidden" style={{ height: '120vh' }}>
          <div
            ref={circleRevealRef}
            className="absolute inset-0 bg-black"
            style={{ clipPath: 'circle(0% at 50% 50%)' }}
          >
            <div ref={clientContentRef} className="h-full w-full relative">
              {/* Full-viewport scattered layout — exactly 120vh */}
              <div className="relative w-full" style={{ height: '120vh' }}>

                {/* Center title — blur text animation */}
                <div className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none">
                  <div className="text-center px-4 max-w-4xl" style={{ paddingBottom: '6%'}}>
                    <h2 className="trust-blur-title text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
                      Trusted by Industry<br />Leaders
                    </h2>
                  </div>
                </div>

                {/* Scattered logos — no container, raw images */}
                {/* Top row */}
                <div className="client-bubble absolute flex flex-col items-center gap-1 z-50 pointer-events-auto" style={{ top: '20%', left: '10%', cursor: 'grab' }}>
                  <img src="/Airtel-Logo-PNG-High-Quality-Image.webp" alt="Airtel" style={{ height: 'clamp(36px, 5vh, 60px)', width: 'auto', objectFit: 'contain' }} />
                  <p className="text-[9px] text-gray-400 text-center select-none">157+ Sites</p>
                </div>

                <div className="client-bubble absolute flex flex-col items-center gap-1 z-50 pointer-events-auto" style={{ top: '16%', left: '32%', cursor: 'grab' }}>
                  <img src="/epack-logo.webp" alt="EPACK PREFAB" style={{ height: 'clamp(36px, 5vh, 60px)', width: 'auto', objectFit: 'contain' }} />
                  <p className="text-[9px] text-gray-400 text-center select-none">Infrastructure</p>
                </div>

                <div className="client-bubble absolute flex flex-col items-center gap-1 z-50 pointer-events-auto" style={{ top: '19%', right: '29%', cursor: 'grab' }}>
                  <img src="/voltas.webp" alt="Voltas" style={{ height: 'clamp(36px, 5vh, 60px)', width: 'auto', objectFit: 'contain' }} />
                  <p className="text-[9px] text-gray-400 text-center select-none">HVAC</p>
                </div>

                <div className="client-bubble absolute flex flex-col items-center gap-1 z-50 pointer-events-auto" style={{ top: '19%', right: '8%', cursor: 'grab' }}>
                  <img src="/vvdn-logo.png" alt="VVDN Technologies" style={{ height: 'clamp(36px, 5vh, 60px)', width: 'auto', objectFit: 'contain' }} />
                  <p className="text-[9px] text-gray-400 text-center select-none">Technology</p>
                </div>

                {/* Middle row — flanking the title */}
                <div className="client-bubble absolute flex flex-col items-center gap-1 z-50 pointer-events-auto" style={{ top: '36%', left: '7%', cursor: 'grab' }}>
                  <img src="/Nivetti.webp" alt="Nivetti" style={{ height: 'clamp(32px, 4.5vh, 52px)', width: 'auto', objectFit: 'contain' }} />
                  <p className="text-[9px] text-gray-400 text-center select-none">Networking</p>
                </div>

                <div className="client-bubble absolute flex flex-col items-center gap-1 z-50 pointer-events-auto" style={{ top: '39%', right: '8%', cursor: 'grab' }}>
                  <img src="/tejas-networks.webp" alt="Tejas Networks" style={{ height: 'clamp(36px, 5vh, 60px)', width: 'auto', objectFit: 'contain' }} />
                  <p className="text-[9px] text-gray-400 text-center select-none">Optical Network</p>
                </div>

                {/* Bottom row */}
                <div className="client-bubble absolute flex flex-col items-center gap-1 z-50 pointer-events-auto" style={{ top: '59%', left: '11%', cursor: 'grab' }}>
                  <img src="/nvidia.webp" alt="NVIDIA" style={{ height: 'clamp(36px, 5vh, 60px)', width: 'auto', objectFit: 'contain' }} />
                  <p className="text-[9px] text-gray-400 text-center select-none">GPU & AI</p>
                </div>

                <div className="client-bubble absolute flex flex-col items-center gap-1 z-50 pointer-events-auto" style={{ top: '63%', left: '29%', cursor: 'grab' }}>
                  <img src="/samsung.webp" alt="Samsung" style={{ height: 'clamp(36px, 5vh, 60px)', width: 'auto', objectFit: 'contain' }} />
                  <p className="text-[9px] text-gray-400 text-center select-none">Memory</p>
                </div>

                <div className="client-bubble absolute flex flex-col items-center gap-1 z-50 pointer-events-auto" style={{ top: '65%', right: '29%', cursor: 'grab' }}>
                  <img src="/intel.webp" alt="Intel" style={{ height: 'clamp(36px, 5vh, 60px)', width: 'auto', objectFit: 'contain' }} />
                  <p className="text-[9px] text-gray-400 text-center select-none">Processors</p>
                </div>

                <div className="client-bubble absolute flex flex-col items-center gap-1 z-50 pointer-events-auto" style={{ top: '59%', right: '11%', cursor: 'grab' }}>
                  <img src="/Micron.webp" alt="Micron" style={{ height: 'clamp(36px, 5vh, 60px)', width: 'auto', objectFit: 'contain' }} />
                  <p className="text-[9px] text-gray-400 text-center select-none">DDR5</p>
                </div>

                <div className="client-bubble absolute flex flex-col items-center gap-1 z-50 pointer-events-auto" style={{ top: '71%', left: '45%', cursor: 'grab' }}>
                  <img src="/Broadcom.webp" alt="Broadcom" style={{ height: 'clamp(36px, 5vh, 60px)', width: 'auto', objectFit: 'contain' }} />
                  <p className="text-[9px] text-gray-400 text-center select-none">Semiconductors</p>
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

        {/* SECTION 5: TESTIMONIALS - CONTINUOUS MARQUEE */}
        <section ref={testimonialSectionRef} className="bg-white pt-32 pb-20 relative overflow-hidden flex flex-col justify-center" style={{ minHeight: '80vh', top: '80%' }}>
          <div className="text-center px-4 relative z-10">
            <h2 className="testimonial-blur-title text-3xl md:text-5xl lg:text-6xl font-bold text-gray-900">
              What Our Clients Say
            </h2>
          </div>
          
          <div className="flex flex-col gap-8 relative z-10 w-full -mt-16" style={{ perspective: "1200px" }}>
            <div className="flex flex-col gap-12 w-full items-center justify-center" style={{ transformStyle: "preserve-3d", transform: "translateZ(300px)" }}>
              {/* Row 1 - Left to Right */}
              <div className="relative w-full" style={{ height: '350px', transformStyle: 'preserve-3d' }}>
                <div className="marquee-track-1 absolute inset-0" style={{ transformStyle: 'preserve-3d' }}>
                  {[...testimonials.slice(0, 6), ...testimonials.slice(0, 6)].map((testimonial, index) => {
                    const originalIndex = index % 6;
                    const style = getCardStyle(originalIndex);
                    return (
                      <div key={`row1-${index}`} className={`absolute top-0 left-1/2 -translate-x-1/2 flex flex-col justify-between p-8 rounded-3xl shrink-0 ${style.bg} ${style.text} ${style.border}`} 
                           style={{ 
                             height: '350px', 
                             width: '455px',
                             transform: `rotateY(${index * 30}deg) translateZ(-900px)`,
                             backfaceVisibility: 'hidden'
                           }}>
                        <div>
                          <div className={`flex ${style.star} mb-5 text-xl tracking-widest`}>★★★★★</div>
                          <p className="text-base md:text-lg font-medium leading-relaxed whitespace-normal">"{testimonial.quote}"</p>
                        </div>
                        <div className="flex items-center gap-4 mt-6 pt-4 border-t border-current/10">
                          <div className={`w-12 h-12 rounded-full ${style.circle} flex items-center justify-center font-bold text-lg`}>{testimonial.initials}</div>
                          <div>
                            <p className="font-bold text-sm md:text-base leading-tight">{testimonial.author}</p>
                            <p className="opacity-60 text-xs mt-1 uppercase tracking-wider font-semibold">{testimonial.role}</p>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Row 2 - Right to Left */}
              <div className="relative w-full" style={{ height: '350px', transformStyle: 'preserve-3d' }}>
                <div className="marquee-track-2 absolute inset-0" style={{ transformStyle: 'preserve-3d' }}>
                  {[...testimonials.slice(6), ...testimonials.slice(6)].map((testimonial, index) => {
                    const originalIndex = 6 + (index % 6);
                    const style = getCardStyle(originalIndex);
                    return (
                      <div key={`row2-${index}`} className={`absolute top-0 left-1/2 -translate-x-1/2 flex flex-col justify-between p-8 rounded-3xl shrink-0 ${style.bg} ${style.text} ${style.border}`} 
                           style={{ 
                             height: '350px', 
                             width: '455px',
                             transform: `rotateY(${index * 30}deg) translateZ(-900px)`,
                             backfaceVisibility: 'hidden'
                           }}>
                        <div>
                          <div className={`flex ${style.star} mb-5 text-xl tracking-widest`}>★★★★★</div>
                          <p className="text-base md:text-lg font-medium leading-relaxed whitespace-normal">"{testimonial.quote}"</p>
                        </div>
                        <div className="flex items-center gap-4 mt-6 pt-4 border-t border-current/10">
                          <div className={`w-12 h-12 rounded-full ${style.circle} flex items-center justify-center font-bold text-lg`}>{testimonial.initials}</div>
                          <div>
                            <p className="font-bold text-sm md:text-base leading-tight">{testimonial.author}</p>
                            <p className="opacity-60 text-xs mt-1 uppercase tracking-wider font-semibold">{testimonial.role}</p>
                          </div>
                        </div>
                      </div>
                    );
                  })}
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
              className="relative flex flex-col w-full items-center mt-[10%] mb-[-5%] sm:block sm:w-auto sm:mt-0 sm:mb-0"
              style={{ mask: "linear-gradient(black, transparent)" }}
            >
              <svg
                width="100%"
                height="auto"
                viewBox="0 0 1400 400"
                preserveAspectRatio="xMidYMid meet"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="relative mb-[-5%] md:mb-[-11%]"
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
                    <stop offset="30%" stopColor="#D8D8D8" />
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
                  className="project-card group relative block aspect-[5/6] md:aspect-[4/3] rounded-3xl overflow-hidden"
                >
                  {/* Background image */}
                  <img
                    src="/airtel.webp"
                    alt="Airtel CCTV Infrastructure"
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.77,0,0.18,1)] group-hover:scale-105"
                  />

                  {/* Default text (fades out on hover) */}
                  <div
                    className="absolute inset-0 z-20 bg-black/20 flex flex-col justify-end p-8 text-white
                                transition-opacity duration-300 ease-[cubic-bezier(0.65,0.05,0.36,1)]"
                  >
                    <div className="transition-opacity duration-300 ease-[cubic-bezier(0.65,0.05,0.36,1)] group-hover:opacity-0">
                      <h3 className="text-xl md:text-3xl font-bold mb-2">
                        Airtel CCTV Infrastructure
                      </h3>
                      <p className="text-sm md:text-lg opacity-90 max-w-[28ch]">
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
        <section ref={processSectionRef} className="section-padding bg-light-gray relative overflow-hidden min-h-[160vh] md:min-h-[140vh]">
          <div className="container-custom">
            <div className='mb-28'>
              <h1 ref={processTitleRef} className="headline-display text-balance">
                <span className="process-title-text text-6xl md:text-7xl lg:text-7xl xl:text-7xl mt-[15%]">
                  We keep the process flexible
                  <span className="opacity-40"> and the results <br />extraordinary.</span>
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
                  From site survey to commissioning. We handle every phase with precision, meeting project timelines consistently across all deployments.
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
              <div className="mb-20" />
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