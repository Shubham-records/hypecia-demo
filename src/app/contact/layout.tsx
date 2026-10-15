import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact Us',
  description: 'Get in touch with Hypecia Connect for enterprise infrastructure solutions, CCTV security, green energy, and IT supply consultations.',
  alternates: { canonical: 'https://hypeciaconnect.com/contact' },
}

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
