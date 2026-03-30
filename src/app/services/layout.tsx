import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Our Services — Telecom, Green Energy & Industrial Automation',
  description: "Explore Hypecia Connect's full service range — solar energy, industrial automation, CCTV surveillance, MEP engineering, ELV systems, and telecom infrastructure.",
  alternates: { canonical: 'https://hypeciaconnect.com/services' },
}

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
