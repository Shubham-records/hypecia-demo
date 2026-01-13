"use client"
import Image from "next/image"
import Link from 'next/link'
import { Mail, Phone } from 'lucide-react'

interface FooterProps {
  animate?: boolean;
}

export default function Footer({ animate = false }: FooterProps) {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-black text-white section-padding py-8 overflow-hidden footer-section">
      <div className="container-custom">
        {/* Top Section: Company Info & Vision */}
        <div className="flex flex-col items-center text-center mb-16 footer-animate">
          <Image
            src="/logo.svg"
            alt="HYPECIA Logo"
            width={180}
            height={60}
            loading="lazy"
            quality={100}
            className="h-14 w-auto invert mb-6"
          />
          <p className="text-gray-400 text-lg md:text-xl max-w-2xl leading-relaxed">
            Driving sustainable transformation through intelligent energy and technology solutions.
          </p>
        </div>

        <div className="w-full h-px bg-gray-800 mb-16 footer-animate" />

        {/* Bottom Section: Links, Legal, Contact */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16 text-center md:text-left">
          {/* Quick Links */}
          <div className="footer-animate flex flex-col items-center md:items-start">
            <h4 className="text-sm font-bold mb-6 uppercase tracking-wider text-white">Quick Links</h4>
            <ul className="space-y-4">
              <li><Link href="/" className="text-gray-400 hover:text-white transition-colors text-base">Home</Link></li>
              <li><Link href="/services" className="text-gray-400 hover:text-white transition-colors text-base">Services</Link></li>
              <li><Link href="/case-studies" className="text-gray-400 hover:text-white transition-colors text-base">Case Studies</Link></li>
              <li><Link href="/team" className="text-gray-400 hover:text-white transition-colors text-base">Team</Link></li>
              <li><Link href="/contact" className="text-gray-400 hover:text-white transition-colors text-base">Contact</Link></li>
            </ul>
          </div>

          {/* Legal */}
          <div className="footer-animate flex flex-col items-center md:items-start">
            <h4 className="text-sm font-bold mb-6 uppercase tracking-wider text-white">Legal</h4>
            <ul className="space-y-4">
              <li><Link href="/privacy" className="text-gray-400 hover:text-white transition-colors text-base">Privacy Policy</Link></li>
              <li><Link href="/terms" className="text-gray-400 hover:text-white transition-colors text-base">Terms & Conditions</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="footer-animate flex flex-col items-center md:items-start">
            <h4 className="text-sm font-bold mb-6 uppercase tracking-wider text-white">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-center gap-3 text-gray-400 text-base justify-center md:justify-start">
                <Mail size={18} />
                <a href="mailto:info@hypeciaconnect.com" className="hover:text-white transition-colors">
                  info@hypeciaconnect.com
                </a>
              </li>
              <li className="flex flex-col gap-2 text-gray-400 text-base">
                <div className="flex items-center gap-3 justify-center md:justify-start">
                  <Phone size={18} />
                  <a href="tel:+919836012349" className="hover:text-white transition-colors">
                    +91-9836012349
                  </a>
                </div>
                <div className="flex items-center gap-3 justify-center md:justify-start pl-8 md:pl-[2.1rem]">
                  <a href="tel:+919870297922" className="hover:text-white transition-colors">
                    +91-9870297922
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-800 footer-animate text-center md:text-left">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-500 text-sm">
              © {currentYear} Hypecia Connect Services Pvt Ltd. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}