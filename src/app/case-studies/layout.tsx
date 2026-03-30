import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Case Studies — Telecom & Renewable Projects | Hypecia Connect',
  description: 'Discover how Hypecia Connect delivers multi-million dollar green energy, smart grid, and telecom infrastructure projects across India and Dubai.',
  alternates: { canonical: 'https://hypeciaconnect.com/case-studies' },
}

export default function CaseStudiesLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
