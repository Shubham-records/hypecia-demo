import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Case Studies',
  description: 'Discover how Hypecia Connect delivers major green energy, smart grid, and telecom infrastructure projects across India and Dubai.',
  alternates: { canonical: 'https://hypeciaconnect.com/case-studies' },
}

export default function CaseStudiesLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
