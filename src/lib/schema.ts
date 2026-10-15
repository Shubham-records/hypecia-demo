export const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Corporation',
  '@id': 'https://hypeciaconnect.com/#organization',
  name: 'Hypecia Connect Services Pvt Ltd',
  legalName: 'Hypecia Connect Services Pvt Ltd',
  alternateName: [
    'Hypecia Connect',
    'Hypecia',
    'Hypecia Connect Services India Private Limited', // Government MCA registration name on record
  ],
  url: 'https://hypeciaconnect.com',
  logo: {
    '@type': 'ImageObject',
    '@id': 'https://hypeciaconnect.com/#logo',
    url: 'https://hypeciaconnect.com/logo.svg',
    caption: 'Hypecia Connect Logo',
  },
  image: 'https://hypeciaconnect.com/logo.webp',
  description:
    'Carrier grade telecom infrastructure, AI powered security systems, enterprise IT hardware supply, and green energy solutions. Trusted by tier 1 operators worldwide.',
  contactPoint: [
    {
      '@type': 'ContactPoint',
      telephone: '+91-9836012349',
      contactType: 'customer service',
      areaServed: 'IN',
      availableLanguage: ['English', 'Hindi'],
    },
    {
      '@type': 'ContactPoint',
      telephone: '+91-9870297922',
      contactType: 'sales',
      areaServed: ['IN', 'AE', 'Global'],
      availableLanguage: ['English', 'Hindi'],
    },
  ],
}

export const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': 'https://hypeciaconnect.com/#website',
  url: 'https://hypeciaconnect.com',
  name: 'Hypecia Connect',
  alternateName: [
    'Hypecia',
    'Hypecia Connect Services',
    'Hypecia Connect Services India Private Limited',
  ],
  publisher: {
    '@id': 'https://hypeciaconnect.com/#organization',
  },
  inLanguage: 'en-IN',
}

export const siteNavigationSchema = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  '@id': 'https://hypeciaconnect.com/#sitenavigation',
  name: 'Primary Navigation',
  description: 'Main navigation menu and sitelinks for Hypecia Connect',
  itemListElement: [
    {
      '@type': 'SiteNavigationElement',
      position: 1,
      name: 'Services',
      description:
        'Comprehensive infrastructure services: Telecom & IT infrastructure, AI surveillance, solar green energy, MEP engineering, and industrial automation.',
      url: 'https://hypeciaconnect.com/services',
    },
    {
      '@type': 'SiteNavigationElement',
      position: 2,
      name: 'Case Studies',
      description:
        'Proven deployments across 157+ sites including Airtel MSC & TNG surveillance, solar installations, and enterprise facilities.',
      url: 'https://hypeciaconnect.com/case-studies',
    },
    {
      '@type': 'SiteNavigationElement',
      position: 3,
      name: 'Team & Leadership',
      description:
        'Meet the certified engineers, telecom specialists, and operations leaders driving Hypecia Connect.',
      url: 'https://hypeciaconnect.com/team',
    },
    {
      '@type': 'SiteNavigationElement',
      position: 4,
      name: 'Contact Us',
      description:
        'Get in touch with Hypecia Connect for project consultations, RFPs, infrastructure audits, and partnerships.',
      url: 'https://hypeciaconnect.com/contact',
    },
  ],
}

export const rootGraphSchema = {
  '@context': 'https://schema.org',
  '@graph': [
    organizationSchema,
    websiteSchema,
    siteNavigationSchema,
  ],
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
  headline: 'Airtel CCTV Infrastructure Deployment Across 157 Secured Sites',
  description:
    'Hypecia Connect deployed 2,400+ AI enabled cameras across 157 Airtel MSC and TNG sites in UP & Bihar, achieving 40% security improvement and 95% uptime.',
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

