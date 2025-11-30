"use client"

import Link from "next/link"
import Image from "next/image"
import { useState, useEffect, useRef } from "react"
import { Menu, X } from "lucide-react"
import { gsap } from "gsap"

interface NavigationProps {
  animate?: boolean;
  isHomepage?: boolean;
}

export default function Navigation({ animate = false, isHomepage = false }: NavigationProps) {
  const [isScrolled, setIsScrolled] = useState(false)
  const [menuTheme, setMenuTheme] = useState<'light' | 'dark'>('light')
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [currentTheme, setCurrentTheme] = useState<'light' | 'dark'>('light')
  const [splitTheme, setSplitTheme] = useState<{ left: 'light' | 'dark', right: 'light' | 'dark', split: boolean }>({
    left: 'light',
    right: 'light',
    split: false
  })

  const headerCardRef = useRef<HTMLDivElement>(null)
  const logoRef = useRef<HTMLAnchorElement>(null)
  const navLinksRef = useRef<HTMLElement>(null)
  const ctaButtonRef = useRef<HTMLAnchorElement>(null)
  const mobileMenuRef = useRef<HTMLDivElement>(null)
  const mobileMenuContentRef = useRef<HTMLDivElement>(null)

  // Advanced theme detection with split support
  useEffect(() => {
    let rafId: number;

    const detectTheme = () => {
      if (!headerCardRef.current) return;

      const rect = headerCardRef.current.getBoundingClientRect();

      // Sample multiple points across the header
      const leftX = rect.left + rect.width * 0.25;
      const centerX = rect.left + rect.width / 2;
      const rightX = rect.left + rect.width * 0.75;
      const centerY = rect.top + rect.height / 2;

      const getThemeAtPoint = (x: number, y: number): 'light' | 'dark' => {
        const element = document.elementFromPoint(x, y);
        if (!element) return 'light';

        // Skip if we hit the header itself
        if (element === headerCardRef.current || headerCardRef.current?.contains(element)) {
          // Look at the element behind
          const elements = document.elementsFromPoint(x, y);
          for (const el of elements) {
            if (el !== headerCardRef.current && !headerCardRef.current?.contains(el)) {
              const bgColor = window.getComputedStyle(el).backgroundColor;
              if (bgColor && bgColor !== 'rgba(0, 0, 0, 0)' && bgColor !== 'transparent') {
                const rgb = bgColor.match(/\d+/g);
                if (rgb) {
                  const [r, g, b] = rgb.map(Number);
                  const brightness = (r * 299 + g * 587 + b * 114) / 1000;
                  return brightness < 128 ? 'dark' : 'light';
                }
              }
            }
          }
        }

        const bgColor = window.getComputedStyle(element).backgroundColor;
        const rgb = bgColor.match(/\d+/g);

        if (rgb) {
          const [r, g, b] = rgb.map(Number);
          const brightness = (r * 299 + g * 587 + b * 114) / 1000;
          return brightness < 128 ? 'dark' : 'light';
        }
        return 'light';
      };

      const leftTheme = getThemeAtPoint(leftX, centerY);
      const centerTheme = getThemeAtPoint(centerX, centerY);
      const rightTheme = getThemeAtPoint(rightX, centerY);

      // Check if we're at a split between light and dark
      const isSplit = leftTheme !== rightTheme;

      if (isSplit) {
        setSplitTheme({
          left: leftTheme,
          right: rightTheme,
          split: true
        });
        setCurrentTheme(centerTheme);
      } else {
        setSplitTheme({
          left: centerTheme,
          right: centerTheme,
          split: false
        });
        setCurrentTheme(centerTheme);
      }
    };

    // Detect on scroll
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    // Initial detection
    detectTheme();

    // Use requestAnimationFrame for smoother detection
    const smoothDetect = () => {
      detectTheme();
      rafId = requestAnimationFrame(smoothDetect);
    };
    smoothDetect();

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, []);

  // Mobile menu animation
  useEffect(() => {
    if (!mobileMenuRef.current || !mobileMenuContentRef.current) return;

    if (isMobileMenuOpen) {
      // Open animation
      document.body.style.overflow = 'hidden';

      const tl = gsap.timeline();

      // Slide in from right
      tl.fromTo(
        mobileMenuRef.current,
        { x: '100%' },
        { x: '0%', duration: 0.5, ease: 'power3.out' }
      );

      // Fade in content
      const menuItems = mobileMenuContentRef.current.querySelectorAll('.mobile-menu-item');
      tl.fromTo(
        menuItems,
        { opacity: 0, x: 30 },
        { opacity: 1, x: 0, duration: 0.4, stagger: 0.08, ease: 'power2.out' },
        '-=0.3'
      );
    } else {
      // Close animation
      document.body.style.overflow = '';

      if (mobileMenuRef.current) {
        gsap.to(mobileMenuRef.current, {
          x: '100%',
          duration: 0.4,
          ease: 'power3.in'
        });
      }
    }
  }, [isMobileMenuOpen]);

  const handleBookCallClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (isHomepage) {
      e.preventDefault();
      setIsMobileMenuOpen(false);
      const ctaSection = document.querySelector('.cta-section');
      if (ctaSection) {
        ctaSection.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    }
  };

  const handleMobileLinkClick = () => {
    setIsMobileMenuOpen(false);
  };

  // Get theme classes based on split or unified theme
  const getThemeClasses = (position: 'left' | 'center' | 'right') => {
    if (splitTheme.split) {
      if (position === 'left') {
        return splitTheme.left === 'dark' ? 'text-white' : 'text-black';
      } else if (position === 'right') {
        return splitTheme.right === 'dark' ? 'text-white' : 'text-black';
      } else {
        return currentTheme === 'dark' ? 'text-white' : 'text-black';
      }
    }
    return currentTheme === 'dark' ? 'text-white' : 'text-black';
  };

  const getLogoFilter = (position: 'left' | 'center' | 'right') => {
    if (splitTheme.split) {
      if (position === 'left') {
        return splitTheme.left === 'dark' ? 'invert' : '';
      }
    }
    return currentTheme === 'dark' ? 'invert' : '';
  };

  const getButtonClasses = (position: 'right') => {
    const theme = splitTheme.split ? splitTheme.right : currentTheme;

    if (theme === 'dark') {
      return 'bg-gradient-to-b from-white to-gray-200 text-black';
    }
    return 'bg-gradient-to-b from-[#232522] to-[#191B18] text-white';
  };

  useEffect(() => {
    if (!animate) {
      // If no animation, just show elements immediately
      if (headerCardRef.current) gsap.set(headerCardRef.current, { opacity: 1, scaleX: 1 });
      if (logoRef.current) gsap.set(logoRef.current, { opacity: 1, y: 0 });
      if (ctaButtonRef.current) gsap.set(ctaButtonRef.current, { opacity: 1, y: 0 });

      const navItems = navLinksRef.current?.querySelectorAll('a');
      if (navItems) gsap.set(navItems, { opacity: 1, y: 0 });

      return;
    }

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ delay: 3.8 })

      // Step 1: Header box appears narrow and slides down
      tl.fromTo(
        headerCardRef.current,
        {
          scaleX: 0.05,
          y: -50,
          opacity: 0
        },
        {
          scaleX: 0.3,
          y: 0,
          opacity: 1,
          duration: 0.7,
          ease: 'power2.out'
        }
      )

      // Step 2: Expand to full width
      tl.to(
        headerCardRef.current,
        {
          scaleX: 1,
          duration: 0.5,
          ease: 'back.out(1.2)'
        },
        '+=0.1'
      )

      // Step 3: Logo appears
      tl.fromTo(
        logoRef.current,
        { y: -10, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.4, ease: 'power3.out' },
        '+=0.2'
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
          '-=0.3'
        )
      }

      // Step 5: CTA button appears
      tl.fromTo(
        ctaButtonRef.current,
        { y: -10, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.4, ease: 'power3.out' },
        '-=0.25'
      )
    })

    return () => ctx.revert()
  }, [animate])

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/services", label: "Services" },
    { href: "/case-studies", label: "Case Studies" },
    { href: "/team", label: "Team" },
    { href: "/contact", label: "Contact" },
  ]

  return (
    <>
      <header
        className="z-50 fixed top-0 w-full mx-auto p-[clamp(2rem,2vh,2rem)] pointer-events-none flex items-center justify-center transition-colors duration-300"
      >
        <div
          ref={headerCardRef}
          className="header-card flex items-center justify-between relative w-full"
          style={{ 
            opacity: animate ? 0 : 1,
            gap: 'clamp(1rem, 3vw, 2rem)',
            padding: 'clamp(0.5rem, 1.5vh, 1rem) clamp(1rem, 2vw, 1.5rem)'
          }}
        >
          {/* Gradient overlay for split theme effect */}
          {splitTheme.split && (
            <div
              className="absolute inset-0 pointer-events-none rounded-[inherit]"
              style={{
                background: `linear-gradient(to right, 
                  ${splitTheme.left === 'dark' ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.05)'} 0%, 
                  transparent 50%, 
                  ${splitTheme.right === 'dark' ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.05)'} 100%)`,
                mixBlendMode: 'overlay'
              }}
            />
          )}

          {/* Logo */}
          <Link
            ref={logoRef}
            href="/"
            className={`header-logo flex items-center select-none relative z-10 transition-all duration-300 ${getThemeClasses('left')}`}
            style={{ 
              opacity: animate ? 0 : 1,
              gap: 'clamp(0.5rem, 1vw, 0.75rem)'
            }}
          >
            <Image
              src="/logo.svg"
              alt="HYPECIA Logo"
              width={124}
              height={48}
              priority
              className={`transition-all duration-300 ${getLogoFilter('left')}`}
              style={{
                height: 'clamp(2rem, 4vh, 2.5rem)',
                width: 'auto'
              }}
            />
          </Link>

          {/* Desktop Nav Links */}
          <nav
            ref={navLinksRef}
            className="hidden md:flex items-center relative z-10"
            style={{
              gap: 'clamp(1.5rem, 2.5vw, 2.5rem)'
            }}
          >
            {navLinks.map((link, index) => {
              const position = 'center';
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`font-medium transition-all duration-300 hover:opacity-70 ${getThemeClasses(position)}
                              relative
                              after:content-['']
                              after:absolute
                              after:bottom-[-6px]
                              after:h-[2px]
                              after:bg-current
                              after:w-0
                              after:left-1/2
                              after:-translate-x-1/2
                              after:transition-[width]
                              after:duration-300
                              hover:after:w-full
                          `}
                  style={{ 
                    opacity: animate ? 0 : 1,
                    fontSize: 'clamp(0.875rem, 1.25vw, 0.9375rem)'
                  }}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* Mobile Hamburger Menu */}
          <button
            onClick={() => {
              setMenuTheme(currentTheme)
              setIsMobileMenuOpen(true)
            }}
            className={`md:hidden relative z-10 pointer-events-auto transition-all duration-300 ${getThemeClasses('right')}`}
            style={{
              width: 'clamp(1.5rem, 5vw, 2rem)'
            }}
            aria-label="Open menu"
          >
            <div className="flex flex-col gap-[clamp(0.25rem,0.5vh,0.375rem)] w-full">
              <span className="w-full h-[2px] bg-current transition-all"></span>
              <span className="w-full h-[2px] bg-current transition-all"></span>
            </div>
          </button>

          {/* Desktop CTA Button */}
          <Link
            ref={ctaButtonRef}
            href="/contact"
            onClick={handleBookCallClick}
            className={`hidden md:inline-flex book-call-btn items-center justify-center rounded-full font-medium whitespace-nowrap transition-all duration-300 hover:opacity-90 relative z-10 ${getButtonClasses('right')}`}
            style={{ 
              opacity: animate ? 0 : 1,
              padding: 'clamp(0.75rem, 1.5vh, 1rem) clamp(1.25rem, 2vw, 1.75rem)',
              fontSize: 'clamp(0.875rem, 1.25vw, 0.9375rem)',
              gap: 'clamp(0.375rem, 0.75vw, 0.5rem)'
            }}
          >
            Book a Call
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              style={{
                width: 'clamp(0.875rem, 1.5vw, 1rem)',
                height: 'clamp(0.875rem, 1.5vw, 1rem)'
              }}
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

      {/* Mobile Menu Sidebar */}
      <div
        ref={mobileMenuRef}
        className="fixed inset-0 z-[100] md:hidden pointer-events-auto"
        style={{
          transform: 'translateX(100%)',
          display: isMobileMenuOpen ? 'block' : 'none'
        }}
      >
        {/* Backdrop with glassmorphism */}
        <div
          className="absolute inset-0 backdrop-blur-xl"
          style={{
            background: 'rgba(255, 255, 255, 0.20)',
            boxShadow: '0 0 1em .25em rgba(255, 255, 255, 0.15) inset, 0 .125em .25em -.125em rgba(0, 0, 0, 0.3)'
          }}
        />

        {/* Menu Content */}
        <div ref={mobileMenuContentRef} className="relative h-full flex flex-col p-[clamp(1.5rem,5vw,2rem)]">
          {/* Close Button */}
          <div className="mobile-menu-item flex justify-end mb-[clamp(2rem,8vh,3rem)]">
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              className={`flex items-center justify-center rounded-full transition-colors ${menuTheme === 'dark'
                ? 'bg-white/10 hover:bg-white/20'
                : 'bg-black/5 hover:bg-black/10'
                }`}
              style={{
                width: 'clamp(2.5rem, 8vw, 3rem)',
                height: 'clamp(2.5rem, 8vw, 3rem)'
              }}
              aria-label="Close menu"
            >
              <X size={24} className={menuTheme === 'dark' ? 'text-white' : 'text-black'} />
            </button>
          </div>

          {/* Menu Links */}
          <nav className="flex flex-col mb-[clamp(2rem,8vh,3rem)]" style={{ gap: 'clamp(1rem, 4vh, 1.5rem)' }}>
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={handleMobileLinkClick}
                className={`mobile-menu-item font-bold transition-colors ${menuTheme === 'dark'
                  ? 'text-white hover:text-blue-400'
                  : 'text-black hover:text-blue-600'
                  }`}
                style={{
                  fontSize: 'clamp(1.75rem, 6vw, 3rem)'
                }}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* CTA Button */}
          <Link
            href="/contact"
            onClick={handleBookCallClick}
            className="mobile-menu-item bg-gradient-to-b from-[#232522] to-[#191B18] text-white rounded-full font-semibold hover:opacity-90 transition-all inline-flex items-center justify-center book-call-btn"
            style={{
              padding: 'clamp(0.75rem, 2vh, 1rem) clamp(1.5rem, 4vw, 2rem)',
              fontSize: 'clamp(1rem, 2.5vw, 1.125rem)',
              gap: 'clamp(0.375rem, 1vw, 0.5rem)'
            }}
          >
            Book a Call
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
                strokeWidth="1.5"
                strokeLinecap="square"
              />
            </svg>
          </Link>
        </div>
      </div>
    </>
  )
}