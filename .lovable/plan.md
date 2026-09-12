# GreenB Public Website Upgrade

## Goal
Turn the current one-page site into a complete public website that presents GreenB as a technology-driven waste management and circular-economy company, with EcoRewards and Smart Waste Management as major solutions.

## What will be built

### 1. Clear, expanded homepage
- Replace the opening message with: **“Smart Waste Management. Circular Economy. Real Impact.”**
- Keep GreenB and its real products visible immediately.
- Add concise sections for the waste problem, GreenB’s solution, Smart Waste Management, Smart Bin, EcoRewards, how it works, who GreenB serves, environmental value, FAQ, and a final call to action.
- Send **Get Started** and **Join GreenB EcoRewards** to `https://greenbapp.com`.
- Send partnership and quotation actions to the GreenB contact page.

### 2. Full page structure
Add working, mobile-friendly pages and navigation for:
- About GreenB
- Solutions
- Smart Waste Management
- Smart Bin
- GreenB EcoRewards
- Recycling
- Impact
- Partners
- Projects / Case Studies
- FAQ
- Contact
- Privacy Policy
- Terms & Conditions

The Partners and Projects pages will explain GreenB’s partnership models and project approach without naming unverified organizations or inventing results.

### 3. EcoRewards experience
- Present EcoRewards as a core GreenB solution with the message **“Turn Your Waste Into Rewards.”**
- Explain: Collect → Request Collection → GreenB Collects → Get Rewarded → Recycled.
- Cover accepted recyclable categories, individual participation, businesses and organizations, government/community programs, and how rewards work.
- Add EcoRewards-specific FAQs and clear join/partner actions.
- This phase will not add user accounts, reward histories, or dashboards.

### 4. Product and solution detail
- Build detailed Smart Waste Management and Smart Bin pages using the existing verified product photos.
- Cover IoT sensors, fill-level monitoring, notifications, collection monitoring, analytics, product features, applications, and quotation requests.
- Keep the existing full-image product viewer and improve image loading where appropriate.

### 5. Trustworthy content
- Remove unsupported deployment counts, impact figures, partner claims, testimonials, and project claims.
- Keep the verified GreenB team and supplied company contact details.
- Use benefit statements without presenting invented outcomes as measured facts.
- Add standard draft Privacy Policy and Terms pages, visibly dated and suitable for later legal review.

### 6. Navigation and interactions
- Replace one-page-only links and placeholder `#` links with real page links or remove them where no verified destination exists.
- Make header and footer navigation work from every page.
- Keep the external GreenB app link opening safely in a new tab.
- Correct the location link/map to the supplied Kano address.
- Change the simulated contact form to an honest contact action that opens a prepared email, so it no longer claims to submit data that is not sent.

### 7. Search, sharing, and technical quality
- Add unique page titles, descriptions, canonical URLs, social metadata, and appropriate structured data.
- Correct the canonical domain to `https://greenb-smart-future.lovable.app`.
- Add `sitemap.xml` and reference it from `robots.txt`.
- Preserve one clear H1 per page, semantic heading order, descriptive image text, keyboard access, visible focus states, and reduced-motion support.
- Remove the remote CSS font import and load the font safely from the document head.
- Add lazy loading to non-critical images and optimize large assets where useful.
- Verify desktop and mobile navigation, page layouts, product image viewing, external links, email/phone actions, and legal pages in the browser.

## Visual direction
Keep GreenB’s existing clean, high-contrast eco-technology identity and primary green. Use the current real product and team photography, with restrained environmental graphics only where they add meaning. Avoid fabricated partner logos, testimonials, project photography, or statistics.

## Technical details
- Continue with React, React Router, Tailwind, and the existing component system.
- Add reusable page layout, page metadata, call-to-action, FAQ, and content-section components rather than duplicating markup.
- Use static sitewide metadata as the fallback and route-specific metadata for JavaScript-capable search engines.
- Accurate per-page social previews for non-JavaScript crawlers remain limited by the current static Vite architecture; this work will provide the strongest correct setup available without migrating the project.
- No database, authentication, user dashboard, rewards ledger, partner dashboard, live map, calculator, or AI recognition tool is included in this public-site phase.

## Validation
- Run the project’s checks after implementation.
- Test all routes and key interactions at desktop and mobile widths.
- Confirm there are no placeholder links, false form-success messages, missing page titles, broken images, or unsupported numerical claims.
