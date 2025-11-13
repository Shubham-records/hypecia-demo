"use client"

import Link from "next/link"
import Image from "next/image"
import { useState, useEffect, useRef } from "react"
import { Menu, X } from "lucide-react"
import { gsap } from "gsap"

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const headerCardRef = useRef<HTMLDivElement>(null)
  const logoRef = useRef<HTMLAnchorElement>(null)
  const navLinksRef = useRef<HTMLElement>(null)
  const ctaButtonRef = useRef<HTMLAnchorElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ delay: 3.8 }) 

      // Step 1: Header box appears narrow and slides down
      tl.fromTo(
        headerCardRef.current,
        { 
          scaleX: 0.05,  // Start narrow (30% width)
          y: -50,       // Start above
          opacity: 0 
        },
        { 
          scaleX: 0.3,  // Stay narrow during slide
          y: 0,         // Slide down to position
          opacity: 1, 
          duration: 0.7, 
          ease: 'power2.out' 
        }
      )

      // Step 2: Expand to full width
      tl.to(
        headerCardRef.current,
        { 
          scaleX: 1,    // Expand to full width
          duration: 0.5, 
          ease: 'back.out(1.2)' // Smooth elastic expansion
        },
        '+=0.1' // Small pause before expanding
      )

      // Step 3: Logo appears
      tl.fromTo(
        logoRef.current,
        { y: -10, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.4, ease: 'power3.out' },
        '+=0.2' // Start slightly before expansion finishes
      )

      // Step 4: Nav links appear in wave
      const navItems = navLinksRef.current?.querySelectorAll('a')
      if (navItems) {
        tl.fromTo(
          navItems,
          { y: -10, opacity: 0 },
          { 
            y: 0, 
            opacity: 1, 
            duration: 0.4, 
            ease: 'power3.out',
            stagger: 0.06 
          },
          '-=0.3' // Overlap with logo
        )
      }

      // Step 5: CTA button appears
      tl.fromTo(
        ctaButtonRef.current,
        { y: -10, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.4, ease: 'power3.out' },
        '-=0.25' // Overlap with nav links
      )
    })

    return () => ctx.revert()
  }, [])

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/services", label: "Services" },
    { href: "/case-studies", label: "Case Studies" },
    { href: "/team", label: "Team" },
    { href: "/contact", label: "Contact" },
  ]

  return (
    <header
      className={`z-50 fixed top-0 w-full mx-auto p-6 lg:p-8 pointer-events-none flex items-center justify-center`}
    >
      <div 
        ref={headerCardRef}
        className="header-card flex items-center justify-between gap-8"
        style={{ opacity: 0 }}
      >
        {/* Logo */}
        <Link 
          ref={logoRef}
          href="/" 
          className="header-logo flex items-center gap-2 select-none"
          style={{ opacity: 0 }}
        >
          <Image
            src="/logo.svg"
            alt="HYPECIA Logo"
            width={124}
            height={48}
            priority
            className="h-10 w-auto"
          />
        </Link>

        {/* Nav Links */}
        <nav 
          ref={navLinksRef}
          className="hidden md:flex items-center gap-10"
        >
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-[15px] font-medium transition duration-300 hover:text-white"
              style={{ opacity: 0 }}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* CTA Button */}
        <Link
          ref={ctaButtonRef}
          href="/contact"
          className="book-call-btn inline-flex items-center justify-center px-6 py-3 md:px-7 md:py-4 rounded-full bg-gradient-to-b from-[#232522] to-[#191B18] text-white font-medium whitespace-nowrap transition-all hover:opacity-90"
          style={{ opacity: 0 }}
        >
          Book a Call
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="ml-2"
          >
            <path
              d="M9.33333 4L13.5 8L9.33333 12M13 8H2.5"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="square"
            />
          </svg>
        </Link>
      </div>
    </header>
  )  
}