import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Our Team & Leadership | Hypecia Connect',
  description: 'Meet the engineering and management experts behind Hypecia Connect, driving innovation in renewable energy and telecom infrastructure.',
  alternates: { canonical: 'https://hypeciaconnect.com/team' },
}

export default function TeamLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
