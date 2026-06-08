import type { Metadata } from "next";
import "./globals.css";
import ErrorReporter from "@/components/ErrorReporter";
import Script from "next/script";

export const metadata: Metadata = {
  metadataBase: new URL('https://hypeciaconnect.com'),
  title: {
    default: "Hypecia Connect — Carrier-Grade Infrastructure & AI Security Solutions",
    template: "%s | Hypecia Connect"
  },
  description: "Hypecia Connect delivers carrier-grade telecom networks, AI-powered security systems, and green energy solutions. Trusted by Airtel across 157+ mission-critical sites.",
  keywords: [
    'telecom infrastructure India',
    'AI security surveillance',
    'CCTV installation Airtel',
    'green energy solutions',
    'industrial automation',
    'MEP engineering',
    'ELV systems',
    'Hypecia Connect',
    'infrastructure solutions company India',
  ],
  alternates: {
    canonical: 'https://hypeciaconnect.com',
  },
  openGraph: {
    title: 'Hypecia Connect — Carrier-Grade Infrastructure & AI Security Solutions',
    description: 'Delivering carrier-grade telecom networks, AI-powered security systems, and green energy solutions. Trusted by Airtel across 157+ mission-critical sites.',
    url: 'https://hypeciaconnect.com',
    siteName: 'Hypecia Connect',
    locale: 'en_IN',
    type: 'website',
    images: [
      {
        url: 'https://hypeciaconnect.com/logo.webp',
        width: 1200,
        height: 630,
        alt: 'Hypecia Connect Services — Infrastructure Solutions',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Hypecia Connect — Infrastructure & AI Security Solutions',
    description: 'Carrier-grade telecom, AI surveillance, green energy. Trusted by Airtel across 157+ sites.',
    images: ['https://hypeciaconnect.com/logo.webp'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://hypeciaconnect.com" />
      </head>
      <body className="antialiased">
        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-3FWDBGCV4X"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-3FWDBGCV4X');
          `}
        </Script>

        <ErrorReporter />

        <Script
          src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/scripts//route-messenger.js"
          strategy="afterInteractive"
          data-target-origin="*"
          data-message-type="ROUTE_CHANGE"
          data-include-search-params="true"
          data-only-in-iframe="true"
          data-debug="true"
          data-custom-data='{"appName": "YourApp", "version": "1.0.0", "greeting": "hi"}'
        />

        {children}
      </body>
    </html>
  );
}