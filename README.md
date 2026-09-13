# GreenB Marketing Hub

GreenB's public website for smart waste management, circular-economy solutions, connected Smart Bins and GREENB EcoRewards.

## Technology

- Vite
- React 18
- TypeScript
- Tailwind CSS
- React Router
- shadcn/ui

## Local development

```bash
npm install
npm run dev
```

## Validation

```bash
npm run lint
npm run build
```

The production build is generated in `dist/`. The public sitemap and crawler rules are available at `/sitemap.xml` and `/robots.txt` after deployment.

## Public routes

The site includes the homepage, About, Solutions, Smart Waste Management, Smart Bin, EcoRewards, Recycling, Impact, Partners, Projects, FAQ, Contact, Privacy Policy and Terms & Conditions pages.

## Content and security notes

The contact form validates required fields, uses a honeypot field for basic spam protection and opens a prepared email in the visitor's email client. No API keys or database credentials are stored in the frontend repository. Production deployments should still enforce HTTPS, configure server-side security headers and connect the form to an authenticated, rate-limited backend when server-side lead storage is required.

## Deployment

Deploy the Vite `dist/` output to the approved GreenB hosting provider and configure the production domain to match the canonical URL in `src/components/Seo.tsx` and `public/sitemap.xml`.
