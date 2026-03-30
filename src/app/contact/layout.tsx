import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact Us | Hypecia Connect Services',
  description: 'Get in touch with Hypecia Connect for enterprise solutions in telecom, green energy, surveillance, and IT infrastructure.',
  alternates: { canonical: 'https://hypeciaconnect.com/contact' },
}

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
