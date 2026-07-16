import type { Metadata } from "next";
import "./globals.css";
import ErrorReporter from "@/components/ErrorReporter";
import Script from "next/script";

export const metadata: Metadata = {
  metadataBase: new URL('https://hypeciaconnect.com'),
  title: {
    default: "Hypecia Connect — Infrastructure, Security & IT Hardware Supply",
    template: "%s | Hypecia Connect"
  },
  description: "Hypecia Connect delivers carrier-grade networks, AI security systems, and enterprise IT hardware. Trusted by Airtel across 157+ sites and a premier supplier for NVIDIA, Intel, and DDR5 memory.",
  keywords: [
    'telecom infrastructure India',
    'AI security surveillance',
    'CCTV installation Airtel',
    'enterprise IT hardware',
    'NVIDIA GPU supplier',
    'Intel CPU distributor',
    'DDR5 server memory',
    'Nivetti hardware partner',
    'Hypecia Connect',
    'infrastructure solutions company India',
  ],
  alternates: {
    canonical: 'https://hypeciaconnect.com',
  },
  openGraph: {
    title: 'Hypecia Connect — Infrastructure, Security & IT Hardware Supply',
    description: 'Delivering carrier-grade networks, AI security, and enterprise IT hardware. Trusted by Airtel across 157+ sites and inventory partner for top-tier components.',
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
    title: 'Hypecia Connect — Infrastructure, Security & IT Hardware Supply',
    description: 'Carrier-grade telecom, AI surveillance, and IT hardware supply. Trusted by Airtel, supplying NVIDIA, Intel, and enterprise components.',
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