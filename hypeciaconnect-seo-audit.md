# SEO Audit Report — hypeciaconnect.com
**Date:** March 30, 2026  
**Site:** https://hypeciaconnect.com  
**Business Type:** B2B Infrastructure & Engineering Services (Telecom, Security, Green Energy)  
**Stack:** Next.js + GSAP  
**SEO Health Score: 42 / 100**

---

## Table of Contents
1. [Indexation Status](#1-indexation-status)
2. [Sitemap Issues](#2-sitemap-issues)
3. [Technical SEO](#3-technical-seo)
4. [On-Page SEO](#4-on-page-seo)
5. [Schema / Structured Data](#5-schema--structured-data)
6. [Content & E-E-A-T](#6-content--e-e-a-t)
7. [Performance & Core Web Vitals](#7-performance--core-web-vitals)
8. [AI Search Readiness (GEO)](#8-ai-search-readiness-geo)
9. [Images](#9-images)
10. [GSAP Counter Fix (Next.js)](#10-gsap-counter-fix-nextjs)
11. [Code Fixes — Ready to Use](#11-code-fixes--ready-to-use)
12. [Priority Action Plan](#12-priority-action-plan)

---

## 1. Indexation Status

**Status:** Partially indexed — homepage only  
**Priority:** Critical

A `site:hypeciaconnect.com` search confirms only the homepage is showing in Google. The remaining 6 URLs in the sitemap (`/services`, `/case-studies`, `/team`, `/contact`, `/privacy`, `/terms`) are not yet indexed.

**Actions:**
- Verify Google Search Console (GSC) ownership if not done already
- In GSC → Sitemaps → Submit `https://hypeciaconnect.com/sitemap.xml`
- Use "URL Inspection" tool in GSC and request indexing for each of the 6 unindexed pages manually
- Check GSC → Coverage report for any crawl errors or "Excluded" URLs

---

## 2. Sitemap Issues

**Status:** Sitemap exists but has a canonical mismatch  
**Priority:** Critical

Your sitemap at `/sitemap.xml` lists URLs under `https://www.hypeciaconnect.com/` (with `www`) while the live site resolves at `https://hypeciaconnect.com/` (without `www`). This is a canonical mismatch — Google may treat these as different URLs.

**Current sitemap URLs (wrong):**
```
https://www.hypeciaconnect.com/
https://www.hypeciaconnect.com/services
https://www.hypeciaconnect.com/case-studies
https://www.hypeciaconnect.com/contact
https://www.hypeciaconnect.com/team
https://www.hypeciaconnect.com/privacy
https://www.hypeciaconnect.com/terms
```

**Correct sitemap URLs (fix to):**
```
https://hypeciaconnect.com/
https://hypeciaconnect.com/services
https://hypeciaconnect.com/case-studies
https://hypeciaconnect.com/contact
https://hypeciaconnect.com/team
https://hypeciaconnect.com/privacy
https://hypeciaconnect.com/terms
```

**Fix in Next.js — `next-sitemap.config.js` or wherever sitemap is generated:**
```js
module.exports = {
  siteUrl: 'https://hypeciaconnect.com', // no www
  generateRobotsTxt: true,
}
```

**Also add a www → non-www permanent redirect in `next.config.js`:**
```js
async redirects() {
  return [
    {
      source: '/:path*',
      has: [{ type: 'host', value: 'www.hypeciaconnect.com' }],
      destination: 'https://hypeciaconnect.com/:path*',
      permanent: true,
    },
  ];
},
```

---

## 3. Technical SEO

### 3a. robots.txt
**Priority:** Critical

`/robots.txt` was inaccessible during audit. If it doesn't exist, create it. A missing robots.txt means crawlers have no guidance.

**Minimal `robots.txt` to create at `/public/robots.txt`:**
```
User-agent: *
Allow: /

Sitemap: https://hypeciaconnect.com/sitemap.xml
```

If you want to explicitly allow AI crawlers for citation purposes:
```
User-agent: GPTBot
Allow: /

User-agent: ClaudeBot
Allow: /

User-agent: PerplexityBot
Allow: /

User-agent: *
Allow: /

Sitemap: https://hypeciaconnect.com/sitemap.xml
```

### 3b. Canonical Tags
**Priority:** High

Ensure every page has a self-referencing canonical tag pointing to the non-www version. In Next.js with the App Router:

```jsx
// app/layout.tsx or per-page
import { Metadata } from 'next'

export const metadata: Metadata = {
  alternates: {
    canonical: 'https://hypeciaconnect.com',
  },
}
```

For Pages Router, use `next/head`:
```jsx
import Head from 'next/head'
<Head>
  <link rel="canonical" href="https://hypeciaconnect.com/services" />
</Head>
```

### 3c. HTTPS & Security
**Status:** HTTPS is active — good.

---

## 4. On-Page SEO

### 4a. Title Tags
**Priority:** High  

Every page currently shares the same title tag:  
> `Hypecia Connect Services - Sustainable Energy & Infrastructure Solutions`

Each page needs a unique, descriptive title. Recommended titles (global positioning, not India-specific):

| Page | Recommended Title Tag |
|------|----------------------|
| Homepage | `Hypecia Connect — Carrier-Grade Infrastructure & AI Security Solutions` |
| /services | `Our Services — Telecom, Green Energy & Industrial Automation \| Hypecia Connect` |
| /case-studies | `Case Studies — 157+ Mission-Critical Deployments \| Hypecia Connect` |
| /team | `Our Team — Expert Engineers in Infrastructure & Automation \| Hypecia Connect` |
| /contact | `Contact Hypecia Connect — Schedule a Consultation` |
| /privacy | `Privacy Policy \| Hypecia Connect` |
| /terms | `Terms & Conditions \| Hypecia Connect` |

**Title tag rules:**
- 50–60 characters max
- Primary keyword first, brand name last
- Never duplicate across pages

### 4b. Meta Descriptions
**Priority:** High  

No meta descriptions found on any page. These appear in Google search snippets and directly impact click-through rate.

Recommended meta descriptions:

| Page | Meta Description |
|------|-----------------|
| Homepage | `Hypecia Connect delivers carrier-grade telecom networks, AI-powered security systems, and green energy solutions. Trusted by Airtel across 157+ mission-critical sites.` |
| /services | `Explore Hypecia Connect's full service range — solar energy, industrial automation, CCTV surveillance, MEP engineering, ELV systems, and telecom infrastructure.` |
| /case-studies | `See how Hypecia deployed 2,400+ AI-enabled cameras across 157 Airtel sites, achieving 40% security improvement and 95% uptime. Real results, proven execution.` |
| /team | `Meet the certified engineers and operations leaders behind Hypecia Connect's 157+ successful infrastructure deployments worldwide.` |
| /contact | `Get in touch with Hypecia Connect to discuss your infrastructure, security, or energy project. Schedule a free consultation with our expert team.` |

**In Next.js (App Router):**
```tsx
export const metadata: Metadata = {
  title: 'Hypecia Connect — Carrier-Grade Infrastructure & AI Security Solutions',
  description: 'Hypecia Connect delivers carrier-grade telecom networks, AI-powered security systems, and green energy solutions. Trusted by Airtel across 157+ mission-critical sites.',
}
```

### 4c. H1 Tags
**Priority:** Medium  

**Current homepage H1:**  
> "The Infrastructure You Can Trust The Results You Demand"

This is brand copy, not a keyword. Recommended approach — keep the visual hero text as-is for design, but add an SEO-optimised H1 that can be visually hidden or positioned differently:

```html
<h1 class="sr-only">
  Carrier-Grade Telecom, Security & Green Energy Infrastructure Solutions
</h1>
```

Or rework the hero subheading (which is currently a `<p>` or `<h4>`) to be the H1 with keywords included.

### 4d. Open Graph / Social Meta Tags
**Priority:** High (especially for LinkedIn B2B sharing)

No OG tags found. Add to every page:

```tsx
// next.js metadata
export const metadata: Metadata = {
  openGraph: {
    title: 'Hypecia Connect — Carrier-Grade Infrastructure & AI Security Solutions',
    description: 'Trusted by Airtel. 157+ sites. AI-powered security, green energy, and telecom infrastructure.',
    url: 'https://hypeciaconnect.com',
    siteName: 'Hypecia Connect',
    images: [
      {
        url: 'https://hypeciaconnect.com/og-image.jpg', // create a 1200x630 image
        width: 1200,
        height: 630,
        alt: 'Hypecia Connect Infrastructure Solutions',
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Hypecia Connect — Infrastructure Solutions',
    description: 'Carrier-grade networks. AI-powered security. 157+ sites secured.',
    images: ['https://hypeciaconnect.com/og-image.jpg'],
  },
}
```

**Create an OG image:** A 1200×630px image with your logo, tagline, and "Trusted by Airtel" badge. Place it at `/public/og-image.jpg`.

---

## 5. Schema / Structured Data

**Priority:** Critical — zero schema found on any page

Schema markup is the single highest-ROI SEO action for B2B sites and AI search citation. Add the following JSON-LD blocks.

### 5a. Organization Schema (add to homepage `<head>`)

```json
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Hypecia Connect Services Pvt Ltd",
  "url": "https://hypeciaconnect.com",
  "logo": "https://hypeciaconnect.com/logo.svg",
  "description": "Carrier-grade telecom infrastructure, AI-powered security systems, green energy solutions, and industrial automation. Trusted by tier-1 operators.",
  "foundingDate": "2022",
  "contactPoint": [
    {
      "@type": "ContactPoint",
      "telephone": "+91-9836012349",
      "contactType": "customer service"
    },
    {
      "@type": "ContactPoint",
      "telephone": "+91-9870297922",
      "contactType": "sales"
    }
  ],
  "sameAs": []
}
```

### 5b. Service Schema (add to /services page)

Add one block per service. Example for CCTV:

```json
{
  "@context": "https://schema.org",
  "@type": "Service",
  "serviceType": "AI-Powered Security & CCTV Surveillance",
  "name": "Security & Surveillance",
  "description": "AI-enabled CCTV systems with real-time monitoring, facial recognition, motion detection, and threat detection. 2,400+ cameras deployed across 157 sites.",
  "provider": {
    "@type": "Organization",
    "name": "Hypecia Connect Services Pvt Ltd",
    "url": "https://hypeciaconnect.com"
  }
}
```

Repeat for: Green Energy, Industrial Automation, Telecom & IT Infrastructure, MEP Engineering, Civil & Earthing Works, Manpower Services, ELV Systems, Access Control.

### 5c. BreadcrumbList Schema (all pages except homepage)

```json
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Home",
      "item": "https://hypeciaconnect.com"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "Services",
      "item": "https://hypeciaconnect.com/services"
    }
  ]
}
```

### 5d. CaseStudy / Article Schema (/case-studies page)

```json
{
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Airtel CCTV Infrastructure Deployment — 157 Sites Secured",
  "description": "Hypecia Connect deployed 2,400+ AI-enabled cameras across 157 Airtel MSC and TNG sites in UP & Bihar, achieving 40% security improvement and 95% uptime.",
  "author": {
    "@type": "Organization",
    "name": "Hypecia Connect Services Pvt Ltd"
  },
  "publisher": {
    "@type": "Organization",
    "name": "Hypecia Connect Services Pvt Ltd",
    "logo": {
      "@type": "ImageObject",
      "url": "https://hypeciaconnect.com/logo.svg"
    }
  },
  "datePublished": "2024-01-01",
  "url": "https://hypeciaconnect.com/case-studies"
}
```

### 5e. How to add JSON-LD in Next.js

```tsx
// components/JsonLd.tsx
export function JsonLd({ data }: { data: object }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  )
}

// In your page:
import { JsonLd } from '@/components/JsonLd'
import { organizationSchema } from '@/lib/schema'

export default function HomePage() {
  return (
    <>
      <JsonLd data={organizationSchema} />
      {/* rest of page */}
    </>
  )
}
```

---

## 6. Content & E-E-A-T

### 6a. Team Page
**Priority:** High

The team page lists "Operations Head" with initials "HC" and no real name. Google's E-E-A-T (Experience, Expertise, Authoritativeness, Trustworthiness) guidelines specifically reward identifiable expert authors.

**Recommended fixes:**
- Add real full names for all team members
- Add professional headshots (even small circular thumbnails)
- Add 1–2 line bios with credentials/certifications
- Link to LinkedIn profiles if available

### 6b. Testimonials
**Priority:** Medium

Testimonials are attributed to generic names without photos or verifiable profiles (e.g. "Vikram Singh, Operations Head, Airtel").

**Recommended fixes:**
- Add LinkedIn profile links where possible
- Add a headshot or company logo beside each testimonial
- The Airtel testimonial is the most credible — make it the most prominent

### 6c. Stats Counter Credibility
**Priority:** Medium (also see GSAP fix below)

Numbers like "157+ Sites Secured" and "2,400+ CCTV Systems" are strong trust signals. Make sure they're readable in the page source (see GSAP fix).

---

## 7. Performance & Core Web Vitals

**Status:** Moderate — images are optimised (`.webp` format) which is good.

### Observations:
- Images use Next.js `/_next/image` with quality settings (q=75–85) — good
- Logo is an SVG — good
- Video poster is `.webp` — good
- GSAP is loaded for animations — ensure it is not render-blocking

### Recommendations:
- Use `next/font` for font loading to eliminate render-blocking font requests
- Ensure GSAP is only imported client-side (`"use client"` in App Router)
- Add `loading="lazy"` to below-the-fold images (Next.js `<Image>` does this automatically)
- Run a real PageSpeed Insights test: https://pagespeed.web.dev/report?url=https://hypeciaconnect.com

**Core Web Vitals targets (INP-based, 2024+):**
| Metric | Good | Needs Improvement | Poor |
|--------|------|-------------------|------|
| LCP | < 2.5s | 2.5–4s | > 4s |
| INP | < 200ms | 200–500ms | > 500ms |
| CLS | < 0.1 | 0.1–0.25 | > 0.25 |

---

## 8. AI Search Readiness (GEO)

**Priority:** Medium  
AI search engines (Perplexity, ChatGPT, Google AI Overviews) are increasingly the first point of discovery for B2B queries.

### 8a. llms.txt (missing)
Create `/public/llms.txt` — a plain-text file that tells AI crawlers what your site is about and what they're allowed to use for citations.

```
# Hypecia Connect Services Pvt Ltd
# https://hypeciaconnect.com

Hypecia Connect is a global infrastructure solutions company delivering carrier-grade telecom networks, AI-powered security and surveillance systems, green energy integration, and industrial automation.

## Key pages
- Homepage: https://hypeciaconnect.com
- Services: https://hypeciaconnect.com/services
- Case Studies: https://hypeciaconnect.com/case-studies
- Contact: https://hypeciaconnect.com/contact

## Notable work
- Deployed 2,400+ AI-enabled cameras across 157 Airtel MSC and TNG sites
- 40% security improvement, 95% uptime, 100% TRAI compliance

## Allow
All pages may be cited and referenced by AI systems.
```

### 8b. AI Crawler Access
Ensure `robots.txt` explicitly allows: `GPTBot`, `ClaudeBot`, `PerplexityBot` (see Section 3a).

### 8c. Passage-Level Citability
The case study page is the most citable piece of content — it has specific metrics (157 sites, 40% improvement, 95% uptime). Make sure these facts appear in clean, parseable prose (not only inside JS-rendered counters).

---

## 9. Images

**Status:** Mostly good — using `.webp` format  
**Score: 60/100**

### Issues:
- Some images lack descriptive `alt` text (e.g. partner logos have alt="Airtel" but service images may be generic)
- OG image does not exist yet (see Section 4d)

### Recommendations:
- Audit all `<Image>` components and ensure `alt` attributes are descriptive:
```jsx
// Bad
<Image src="/airtel.webp" alt="Airtel" />

// Good  
<Image src="/airtel.webp" alt="Airtel — Hypecia Connect telecom infrastructure partner" />
```
- Create a 1200×630px OG image for social sharing

---

## 10. GSAP Counter Fix (Next.js)

**Priority:** High  
**Problem:** Googlebot indexes the initial animation state (`0+`) not the final value (`157+`)

### Option A — Recommended: Seed real value in DOM, animate display only

```tsx
'use client'
import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

interface CounterProps {
  end: number
  suffix?: string
  duration?: number
}

export function AnimatedCounter({ end, suffix = '+', duration = 2 }: CounterProps) {
  const ref = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const obj = { val: 0 }

    gsap.to(obj, {
      val: end,
      duration,
      ease: 'power2.out',
      onUpdate: () => {
        el.textContent = Math.round(obj.val) + suffix
      },
      scrollTrigger: {
        trigger: el,
        start: 'top 85%',
        once: true,
      },
    })

    return () => ScrollTrigger.getAll().forEach(t => t.kill())
  }, [end, suffix, duration])

  // KEY: real value rendered server-side — Googlebot reads this
  return (
    <span ref={ref} data-value={end}>
      {end}{suffix}
    </span>
  )
}
```

**Usage:**
```tsx
<AnimatedCounter end={157} suffix="+" />
<AnimatedCounter end={2400} suffix="+" />
<AnimatedCounter end={95} suffix="%" />
```

### Option B — next/dynamic with SSR fallback

```tsx
// components/AnimatedCounter.tsx — client only
'use client'
// ... your existing GSAP animation code

// components/CounterWrapper.tsx — SSR safe
import dynamic from 'next/dynamic'

const AnimatedCounter = dynamic(
  () => import('./AnimatedCounter'),
  {
    ssr: false,
    loading: ({ error }) => <span>157+</span>, // Googlebot reads this
  }
)

export default AnimatedCounter
```

**Option A is cleaner** as it avoids the dynamic import overhead and the real value is baked into the HTML from the start.

---

## 11. Code Fixes — Ready to Use

### 11a. `next.config.js` — www redirect + headers

```js
/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: '/:path*',
        has: [{ type: 'host', value: 'www.hypeciaconnect.com' }],
        destination: 'https://hypeciaconnect.com/:path*',
        permanent: true,
      },
    ]
  },
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'X-Frame-Options', value: 'DENY' },
          { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
        ],
      },
    ]
  },
}

module.exports = nextConfig
```

### 11b. `public/robots.txt`

```
User-agent: GPTBot
Allow: /

User-agent: ClaudeBot
Allow: /

User-agent: PerplexityBot
Allow: /

User-agent: *
Allow: /

Sitemap: https://hypeciaconnect.com/sitemap.xml
```

### 11c. `lib/schema.ts` — all JSON-LD schemas

```ts
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
```

### 11d. Metadata per page (App Router)

```tsx
// app/page.tsx
export const metadata: Metadata = {
  title: 'Hypecia Connect — Carrier-Grade Infrastructure & AI Security Solutions',
  description: 'Hypecia Connect delivers carrier-grade telecom networks, AI-powered security systems, and green energy solutions. Trusted by Airtel across 157+ mission-critical sites.',
  alternates: { canonical: 'https://hypeciaconnect.com' },
  openGraph: {
    title: 'Hypecia Connect — Carrier-Grade Infrastructure & AI Security Solutions',
    description: 'Trusted by Airtel. 157+ sites. AI-powered security, green energy, and telecom infrastructure.',
    url: 'https://hypeciaconnect.com',
    siteName: 'Hypecia Connect',
    images: [{ url: 'https://hypeciaconnect.com/og-image.jpg', width: 1200, height: 630 }],
    type: 'website',
  },
}

// app/services/page.tsx
export const metadata: Metadata = {
  title: 'Our Services — Telecom, Green Energy & Industrial Automation | Hypecia Connect',
  description: 'Explore Hypecia Connect\'s full service range — solar energy, industrial automation, CCTV surveillance, MEP engineering, ELV systems, and telecom infrastructure.',
  alternates: { canonical: 'https://hypeciaconnect.com/services' },
}

// app/case-studies/page.tsx
export const metadata: Metadata = {
  title: 'Case Studies — 157+ Mission-Critical Deployments | Hypecia Connect',
  description: 'See how Hypecia deployed 2,400+ AI-enabled cameras across 157 Airtel sites, achieving 40% security improvement and 95% uptime.',
  alternates: { canonical: 'https://hypeciaconnect.com/case-studies' },
}

// app/team/page.tsx
export const metadata: Metadata = {
  title: 'Our Team — Expert Engineers in Infrastructure & Automation | Hypecia Connect',
  description: 'Meet the certified engineers and operations leaders behind Hypecia Connect\'s 157+ successful infrastructure deployments worldwide.',
  alternates: { canonical: 'https://hypeciaconnect.com/team' },
}

// app/contact/page.tsx
export const metadata: Metadata = {
  title: 'Contact Hypecia Connect — Schedule a Consultation',
  description: 'Get in touch with Hypecia Connect to discuss your infrastructure, security, or energy project. Schedule a free consultation with our expert team.',
  alternates: { canonical: 'https://hypeciaconnect.com/contact' },
}
```

---

## 12. Priority Action Plan

### Critical — Do immediately

| # | Task | Effort | Impact |
|---|------|--------|--------|
| 1 | Fix sitemap www → non-www URLs | 5 min | High |
| 2 | Add `next.config.js` www redirect | 5 min | High |
| 3 | Create `public/robots.txt` | 5 min | High |
| 4 | Submit sitemap in Google Search Console + request indexing for all 6 pages | 10 min | High |
| 5 | Fix GSAP counters (Option A) | 15 min | Medium |

### High — This week

| # | Task | Effort | Impact |
|---|------|--------|--------|
| 6 | Add unique title tags per page | 30 min | High |
| 7 | Add meta descriptions per page | 30 min | High |
| 8 | Add Open Graph tags + create OG image | 1 hr | High |
| 9 | Add Organization JSON-LD schema to homepage | 20 min | High |
| 10 | Add `public/llms.txt` for AI citation | 10 min | Medium |

### Medium — This month

| # | Task | Effort | Impact |
|---|------|--------|--------|
| 11 | Add Service + BreadcrumbList schema to /services | 30 min | Medium |
| 12 | Add Article schema to /case-studies | 20 min | Medium |
| 13 | Fix team page — add real names, credentials | varies | Medium |
| 14 | Improve testimonial attribution (photos / LinkedIn) | 1 hr | Medium |
| 15 | Audit all image `alt` attributes | 30 min | Low |
| 16 | Run PageSpeed Insights and address CWV issues | varies | Medium |
| 17 | Add canonical tags to all pages | 30 min | Medium |

---

## Appendix: Useful Tools

| Tool | URL | Purpose |
|------|-----|---------|
| Google Search Console | https://search.google.com/search-console | Indexation, coverage, sitemap submission |
| PageSpeed Insights | https://pagespeed.web.dev | Core Web Vitals measurement |
| Rich Results Test | https://search.google.com/test/rich-results | Validate JSON-LD schema |
| Schema Validator | https://validator.schema.org | Check schema markup |
| Open Graph Debugger | https://developers.facebook.com/tools/debug/ | Preview social sharing cards |
| LinkedIn Post Inspector | https://www.linkedin.com/post-inspector/ | Preview LinkedIn sharing cards |

---

*Report generated March 30, 2026 · hypeciaconnect.com SEO Audit v1.0*
