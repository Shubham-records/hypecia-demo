"use client"

import Link from "next/link"
import Image from "next/image"
import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
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
      <div className="header-card flex items-center justify-between gap-8">
        {/* Logo */}
        <Link href="/" className="header-logo flex items-center gap-2 select-none">
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
        <nav className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-[15px] font-medium transition duration-300 hover:text-white"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* CTA Button */}
        <Link
          href="/contact"
          className="book-call-btn inline-flex items-center justify-center px-6 py-3 md:px-7 md:py-4 rounded-full bg-gradient-to-b from-[#232522] to-[#191B18] text-white font-medium whitespace-nowrap transition-all hover:opacity-90"
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
