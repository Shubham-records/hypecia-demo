import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Services',
  description: "Explore our full range of enterprise services across telecom networks, AI surveillance, solar green energy, MEP engineering, and industrial automation.",
  alternates: { canonical: 'https://hypeciaconnect.com/services' },
}

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
