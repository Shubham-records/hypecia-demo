import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Terms of Service | Hypecia Connect',
  description: 'Read the Terms of Service for Hypecia Connect. Learn about the rules and guidelines for using our website and services.',
  alternates: { canonical: 'https://hypeciaconnect.com/terms' },
}

export default function TermsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
