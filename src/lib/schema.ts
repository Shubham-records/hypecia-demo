export const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Hypecia Connect Services Pvt Ltd',
  url: 'https://hypeciaconnect.com',
  logo: 'https://hypeciaconnect.com/logo.svg',
  description:
    'Carrier-grade telecom infrastructure, AI-powered security systems, green energy solutions, and industrial automation. Trusted by tier-1 operators worldwide.',
  foundingDate: '2022',
  contactPoint: [
    {
      '@type': 'ContactPoint',
      telephone: '+91-9836012349',
      contactType: 'customer service',
    },
    {
      '@type': 'ContactPoint',
      telephone: '+91-9870297922',
      contactType: 'sales',
    },
  ],
  sameAs: [],
}

export const servicesPageSchema = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: 'Hypecia Connect Services',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Green Energy Solutions', url: 'https://hypeciaconnect.com/services' },
    { '@type': 'ListItem', position: 2, name: 'Industrial Automation', url: 'https://hypeciaconnect.com/services' },
    { '@type': 'ListItem', position: 3, name: 'Telecom & IT Infrastructure', url: 'https://hypeciaconnect.com/services' },
    { '@type': 'ListItem', position: 4, name: 'Security & Surveillance', url: 'https://hypeciaconnect.com/services' },
    { '@type': 'ListItem', position: 5, name: 'MEP Engineering', url: 'https://hypeciaconnect.com/services' },
    { '@type': 'ListItem', position: 6, name: 'Civil & Earthing Works', url: 'https://hypeciaconnect.com/services' },
    { '@type': 'ListItem', position: 7, name: 'Manpower & Facility Services', url: 'https://hypeciaconnect.com/services' },
    { '@type': 'ListItem', position: 8, name: 'ELV Systems', url: 'https://hypeciaconnect.com/services' },
    { '@type': 'ListItem', position: 9, name: 'Access Control Systems', url: 'https://hypeciaconnect.com/services' },
  ],
}

export const caseStudySchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Airtel CCTV Infrastructure Deployment — 157 Sites Secured',
  description:
    'Hypecia Connect deployed 2,400+ AI-enabled cameras across 157 Airtel MSC and TNG sites in UP & Bihar, achieving 40% security improvement and 95% uptime.',
  author: {
    '@type': 'Organization',
    name: 'Hypecia Connect Services Pvt Ltd',
  },
  publisher: {
    '@type': 'Organization',
    name: 'Hypecia Connect Services Pvt Ltd',
    logo: { '@type': 'ImageObject', url: 'https://hypeciaconnect.com/logo.svg' },
  },
  datePublished: '2024-01-01',
  url: 'https://hypeciaconnect.com/case-studies',
}

export function getBreadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  }
}
