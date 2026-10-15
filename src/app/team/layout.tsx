import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Our Team',
  description: 'Meet the certified engineers, telecom specialists, and executive leadership behind Hypecia Connect Services.',
  alternates: { canonical: 'https://hypeciaconnect.com/team' },
}

export default function TeamLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
