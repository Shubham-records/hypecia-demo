import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy | Hypecia Connect',
  description: 'Read the Privacy Policy for Hypecia Connect. Learn how we collect, use, and protect your data.',
  alternates: { canonical: 'https://hypeciaconnect.com/privacy' },
}

export default function PrivacyLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
