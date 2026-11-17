# Shannon’s Cleaning Service — Independent Website Concept (Calgary, AB)

> **Concept Disclaimer:** Independent website concept created by **Alira Digital** for demonstration purposes only. This is not the official website of Shannon’s Cleaning Service and is not affiliated with or endorsed by the business.

## Stack Choice

- **Vite + React 19 + TypeScript** — Fast local development, strict type safety, and modular reusable components ready to scale into multi-page routes later.
- **Tailwind CSS v4** — Utility-first responsive styling with custom design tokens matching the eco-friendly brand palette (`#174D3B`, `#55A879`, `#EAF5EE`, `#FFFFFF`, `#F8FAF7`, `#25332D`, `#E9EFEB`).
- **Lucide React** — Crisp, lightweight iconography.
- **Semantic HTML & Calgary Local SEO** — Single `<h1>`, logical heading hierarchy, Open Graph tags, `LocalBusiness` JSON-LD using verified public listing details only, `public/robots.txt`, and `public/sitemap.xml`.

## Running Locally

```bash
npm install
npm run dev
```

To create a production build:

```bash
npm run build
npm run preview
```

## Connecting Real Estimate Form Submissions

The estimate request form currently operates transparently in **Demo Mode** (it validates all inputs locally, does not transmit or store personal information, and provides a summary copy option plus click-to-call `403-619-0729`).

To enable live email enquiries upon official launch:
1. Connect `handleSubmit` in `src/components/ContactSection.tsx` to a form backend or serverless email endpoint (e.g., **Netlify Forms**, **Formspree**, **Resend**, or a custom API route).
2. Add spam protection (honeypot field or Turnstile/reCAPTCHA if needed) and replace the demo-mode banner with a live confirmation response.
3. Update `public/sitemap.xml` and `public/robots.txt` with the live production domain.

