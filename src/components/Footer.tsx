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
    <footer className="bg-black text-white section-padding footer-section">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <div className="footer-animate">
            <Image
              src="/logo.svg"
              alt="HYPECIA Logo"
              width={124}
              height={48}
              priority
              className="h-10 w-auto invert mb-2"
            />
            <p className="text-gray-400 text-sm leading-relaxed">
              Driving sustainable transformation through intelligent energy and technology solutions.
            </p>
          </div>

          {/* Quick Links */}
          <div className="footer-animate">
            <h4 className="text-sm font-bold mb-4 uppercase tracking-wider">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link href="/" className="text-gray-400 hover:text-white transition-colors text-sm">Home</Link></li>
              <li><Link href="/services" className="text-gray-400 hover:text-white transition-colors text-sm">Services</Link></li>
              <li><Link href="/case-studies" className="text-gray-400 hover:text-white transition-colors text-sm">Case Studies</Link></li>
              <li><Link href="/team" className="text-gray-400 hover:text-white transition-colors text-sm">Team</Link></li>
              <li><Link href="/contact" className="text-gray-400 hover:text-white transition-colors text-sm">Contact</Link></li>
            </ul>
          </div>

          {/* Legal */}
          <div className="footer-animate">
            <h4 className="text-sm font-bold mb-4 uppercase tracking-wider">Legal</h4>
            <ul className="space-y-2">
              <li><Link href="/privacy" className="text-gray-400 hover:text-white transition-colors text-sm">Privacy Policy</Link></li>
              <li><Link href="/terms" className="text-gray-400 hover:text-white transition-colors text-sm">Terms & Conditions</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="footer-animate">
            <h4 className="text-sm font-bold mb-4 uppercase tracking-wider">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-gray-400 text-sm">
                <Mail size={16} />
                <a href="mailto:info@hypeciaconnect.com" className="hover:text-white transition-colors">
                  info@hypeciaconnect.com
                </a>
              </li>
              <li className="flex items-center gap-2 text-gray-400 text-sm">
                <Phone size={16} />
                <a href="tel:+919836012349" className="hover:text-white transition-colors">
                  +91-9836012349
                </a>
                <br />
                <a href="tel:+919870297922" className="hover:text-white transition-colors">
                  +91-9870297922
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-800 footer-animate">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              © {currentYear} Hypecia Connect Services Pvt Ltd. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}