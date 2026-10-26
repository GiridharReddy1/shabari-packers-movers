# Shabari Packers and Movers - Official Website

A modern, minimal, luxurious, and SEO-optimized website built with **Next.js (App Router)**, **TypeScript**, and **Tailwind CSS** for **Shabari Packers and Movers**, headquartered in **Hyderabad, Telangana**, serving customers across **Telangana**, **Andhra Pradesh**, and **Karnataka**.

---

## 🌟 Key Highlights & Brand Identity

- **Brand Name**: Shabari Packers and Movers
- **Tagline**: *"Your Belongings, Our Priority"*
- **Authentic Contact**: Direct Telephone & WhatsApp at **`+91 98481 61321`** (integrated from actual company uniform and fleet photographs).
- **Aesthetic**: Warm ivory background (`#FAF8F5`), deep charcoal typography (`#14171C`), champagne gold accents (`#B88E2F`), and rich navy accents (`#0F2C59`) matching the official circular logo emblem.
- **Genuine Operations**: Showcases real on-site moving photos (uniformed crew, packed cartons, disciplined truck loading). Zero fabricated reviews, fake awards, or misleading statistics.
- **Full Coverage**: 80 canonical published routes covering:
  - 10 Dedicated Services with packing tips and FAQs.
  - 3 Dedicated State Landing Pages (Telangana, Andhra Pradesh, Karnataka).
  - 1 Primary Hyderabad Hub Landing Page + 17 Dedicated Locality Sub-Pages (Gachibowli, Kondapur, Madhapur, HITEC City, Kukatpally, Miyapur, Manikonda, Kokapet, Banjara Hills, Jubilee Hills, Uppal, LB Nagar, Ameerpet, Nizampet, Serilingampally, Mehdipatnam, Secunderabad).
  - 28+ District & City Pages across Telangana, AP, and Karnataka.
  - 12 Active Inter-City & Inter-State Moving Corridors (e.g. Hyderabad to Bengaluru, Hyderabad to Vijayawada, Hyderabad to Visakhapatnam, Hyderabad to Tirupati).
  - Full automated dynamic `sitemap.xml` and `robots.txt`.

---

## 🚀 Quick Start & Commands

### 1. Prerequisites
- Node.js `v18.17+` or `v20+` (tested on Node `v24.13.0`)
- npm `8.0+`

### 2. Installation
```bash
npm install
```

### 3. Local Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### 4. Production Build & Static Generation
```bash
npm run build
```
This compiles TypeScript, checks types, and statically prerenders all 90 canonical pages and routes.

### 5. Run Production Server Locally
```bash
npm run start
```

### 6. Run Link & Route Audit
```bash
npx tsx scripts/verify-links.mjs
```

---

## 📂 Project Architecture

```
shabari/
├── public/
│   └── images/
│       ├── shabari-logo.jpg                # Official brand circular emblem
│       ├── shabari-team-truck.jpg          # Authentic crew in uniform with phone number
│       ├── shabari-packing-boxes.jpg       # Actual box packing and cartons
│       └── shabari-loading-operation.jpg   # On-ground loading operation
├── src/
│   ├── app/
│   │   ├── page.tsx                        # Homepage with hero, services, routes, directory
│   │   ├── layout.tsx                      # Root layout, Header, Footer, Schema, Floating WA
│   │   ├── globals.css                     # Warm ivory & champagne gold design system
│   │   ├── about/page.tsx                  # Company story, ethics & standards
│   │   ├── contact/page.tsx                # Phone, WhatsApp, email, registered base
│   │   ├── get-quote/page.tsx              # Interactive quote request engine
│   │   ├── privacy-policy/page.tsx         # Customer privacy policy
│   │   ├── terms/page.tsx                  # Service terms & conditions
│   │   ├── not-found.tsx                   # Custom luxury 404 page
│   │   ├── sitemap.ts                      # Dynamic XML sitemap generator
│   │   ├── robots.ts                       # Robots.txt configuration
│   │   ├── api/
│   │   │   └── quote/route.ts              # Server-side quote API with honeypot & rate limiting
│   │   ├── services/
│   │   │   ├── page.tsx                    # Services directory
│   │   │   └── [slug]/page.tsx             # 10 Dedicated service pages (household, office, etc.)
│   │   ├── moving-routes/
│   │   │   ├── page.tsx                    # Moving routes directory
│   │   │   └── [slug]/page.tsx             # 12 Dedicated route pages (Hyd-BLR, Hyd-VJA, etc.)
│   │   └── packers-and-movers/
│   │       ├── page.tsx                    # Service areas directory overview
│   │       ├── telangana/page.tsx          # Telangana state landing page
│   │       ├── andhra-pradesh/page.tsx     # Andhra Pradesh state landing page
│   │       ├── karnataka/page.tsx          # Karnataka state landing page
│   │       ├── hyderabad/
│   │       │   ├── page.tsx                # Hyderabad Primary Hub page
│   │       │   └── [locality]/page.tsx     # 17 Locality sub-pages (Gachibowli, Kukatpally, etc.)
│   │       └── [city]/page.tsx             # Dynamic city pages (Bengaluru, Vijayawada, etc.)
│   ├── components/
│   │   ├── Header.tsx                      # Sticky desktop header + mobile sliding drawer
│   │   ├── Footer.tsx                      # Comprehensive directory footer with address & links
│   │   ├── FloatingWhatsApp.tsx            # Sticky high-conversion WhatsApp & call CTAs
│   │   ├── QuoteForm.tsx                   # Interactive form with instant WhatsApp push
│   │   ├── ServiceCard.tsx                 # Service card with Lucide icons
│   │   ├── LocationDirectory.tsx           # 3-State directory tabs with real-time search
│   │   ├── RouteCard.tsx                   # Route presentation with highway badges
│   │   ├── Breadcrumbs.tsx                 # Accessible breadcrumbs
│   │   ├── FAQAccordion.tsx                # Animated accessible accordion
│   │   └── StructuredData.tsx              # JSON-LD injector
│   ├── data/
│   │   ├── siteConfig.ts                   # Central source of truth for contact details
│   │   ├── services.ts                     # 10 Services with features and FAQs
│   │   ├── locations.ts                    # States, cities, and 17 Hyderabad localities
│   │   └── routes.ts                       # 12 Moving routes with highway transit notes
│   ├── lib/
│   │   └── seo.ts                          # Metadata & JSON-LD schema builder
│   └── types/
│       └── index.ts                        # TypeScript interfaces
├── .env.example                            # Template for environment variables
└── README.md
```

---

## ⚙️ Environment Configuration

Create a `.env.local` file based on `.env.example`:

```bash
# Canonical Domain
NEXT_PUBLIC_SITE_URL=https://shabaripackers.com

# Optional: Instant quote notifications via Webhook (Slack / Discord / Zapier)
NOTIFICATION_WEBHOOK_URL=

# Optional: Transactional Email API (Resend)
RESEND_API_KEY=
CONTACT_RECEIVER_EMAIL=contact@shabaripackers.com
```

---

## 🌐 Deploying to Vercel

1. Push this project to your GitHub repository.
2. Sign in to [Vercel](https://vercel.com) and click **"Add New Project"**.
3. Import the repository `shabari`.
4. Framework Preset will automatically detect **Next.js**.
5. Set `NEXT_PUBLIC_SITE_URL` to your production domain (e.g. `https://shabaripackers.com`).
6. Click **Deploy**. Vercel will run `npm run build` and deploy all 90 prerendered pages.

---

## 🔍 Technical SEO & Google Search Console Guide

1. **Verify Domain in Google Search Console**:
   - Go to [Google Search Console](https://search.google.com/search-console).
   - Add property via **Domain verification** (add TXT record in your DNS provider, e.g. Cloudflare / GoDaddy).
2. **Submit Sitemap**:
   - In GSC, click **Sitemaps** from the left navigation.
   - Enter `sitemap.xml` and submit.
   - All 80 canonical pages will be submitted for immediate indexing.
3. **Structured Data Validation**:
   - Inspect the homepage or city pages on [Google Rich Results Test](https://search.google.com/test/rich-results).
   - The site contains valid `MovingCompany`, `Service`, `BreadcrumbList`, and `FAQPage` schema markup.

---

## 📋 Launch Checklist for the Business Owner

Before making the website publicly live under your custom domain, verify:
- [x] **Phone Number**: Confirmed as `+91 98481 61321` (matches uniforms).
- [x] **WhatsApp Link**: Pre-configured to `https://wa.me/919848161321`.
- [ ] **Email Inbox**: Verify that `contact@shabaripackers.com` is configured in your business Google Workspace or Zoho Mail.
- [ ] **Domain DNS**: Point A / CNAME records to Vercel (`cname.vercel-dns.com`).
- [ ] **Google Business Profile**: Set up your Google Business Profile for *"Shabari Packers and Movers"* with primary category **"Moving company"**, link to `https://shabaripackers.com`, and add service areas for Hyderabad, Telangana, Andhra Pradesh, and Karnataka.
