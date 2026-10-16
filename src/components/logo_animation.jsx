"use client"

import { useEffect, useRef } from 'react'

export default function HypeciaLoader({ onComplete }) {
  const loaderRef = useRef(null)
  const logoRef = useRef(null)
  const shineRef = useRef(null)

  useEffect(() => {
    const logo = logoRef.current
    const shine = shineRef.current
    const loader = loaderRef.current

    if (!logo || !shine || !loader) return

    logo.style.filter = 'invert(0.5) brightness(1.4) contrast(0.7)'
    logo.style.transform = 'scale(1)'

    setTimeout(() => {
      logo.style.transition = 'all 0.7s cubic-bezier(0.4, 0, 0.2, 1)'
      logo.style.filter = 'invert(0) brightness(1) contrast(1)'
      logo.style.transform = 'scale(1.15)'
    }, 0)

    setTimeout(() => {
      shine.style.transition = 'transform 1.2s cubic-bezier(0.4, 0, 0.2, 1)'
      shine.style.transform = 'translateX(100vw) skewX(-20deg)'
    }, 750)

    setTimeout(() => {
      loader.style.transition = 'opacity 1s cubic-bezier(0.4, 0, 0.2, 1)'
      loader.style.opacity = '0'
    }, 2500)

    setTimeout(() => {
      onComplete && onComplete()
    }, 3300)
  }, [onComplete])

  return (
    <div
      ref={loaderRef}
      className="fixed inset-0 z-50 bg-white flex items-center justify-center overflow-hidden"
    >
      {/* Logo Image */}
      <img
        ref={logoRef}
        src="/logo.svg"
        alt="Hypecia Connect Services"
        className="w-[40%] h-auto"
        style={{
          filter: 'invert(0.5) brightness(1.4) contrast(0.7)',
          transform: 'scale(1)',
        }}
      />

      {/* Shine Effect */}
      <div
        ref={shineRef}
        className="fixed top-0 left-0 w-40 h-full pointer-events-none z-10"
        style={{
          background:
            'linear-gradient(40deg, transparent, rgba(255,255,255,0.9), transparent)',
          transform: 'translateX(-100vw) skewX(-20deg)',
        }}
      />
    </div>
  )
}