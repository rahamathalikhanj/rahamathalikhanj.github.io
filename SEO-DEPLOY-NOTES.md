# Portfolio SEO, Products & Analytics Deployment Notes

**Author:** Rahamath Alikhan J  
**Professional Role:** Senior Software Engineer & Freelance Mobile Application Developer  
**Location:** Madurai, Tamil Nadu, India (Serving Global Clients)  
**Live Canonical Domain:** https://rahamathalikhanj.github.io/  
**Last Updated:** November 2026  

---

## 1. Google Analytics 4 (`gtag.js`) Configuration

Google Analytics 4 has been embedded across all pages:
- `index.html` (Homepage)
- All 6 Product Pages (`products/*.html`)
- All 6 Case Study Pages (`projects/*.html`)

### How to Activate Your Measurement ID
1. In `index.html`, `products/*.html`, and `projects/*.html`, locate the placeholder:
   ```html
   <!-- Google tag (gtag.js) -->
   <script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
   <script>
     window.dataLayer = window.dataLayer || [];
     function gtag(){dataLayer.push(arguments);}
     gtag('js', new Date());
     gtag('config', 'G-XXXXXXXXXX', { 'send_page_view': true });
   </script>
   ```
2. Replace `G-XXXXXXXXXX` with your actual Google Analytics 4 Measurement ID (from **Google Analytics > Admin > Data Streams > Measurement ID**).
   You can replace across all files in one terminal command:
   ```bash
   # Replace G-XXXXXXXXXX with your actual GA4 ID (e.g. G-12345ABCDE)
   find . -type f -name "*.html" -exec sed -i '' 's/G-XXXXXXXXXX/YOUR_REAL_GA4_ID/g' {} +
   ```

### Custom Conversion Events Tracked via `script.js`
- `view_resume`: Triggered when clicking "Resume" buttons (navbar & hero).
- `generate_lead`: Triggered when clicking `mailto:` email or `tel:` phone links.
- `contact_click`: Triggered when clicking LinkedIn or GitHub profile links.
- `select_content`: Triggered when interacting with Case Studies or Products.

---

## 2. Separate Dedicated Product Pages (`products/`)

Six standalone, crawlable product landing pages were engineered for turn-key software solutions:

1. **`products/taxi-booking-ride-hailing-app.html`**:
   - *Title:* Smart Taxi & On-Demand Ride-Hailing Platform Solution
   - *Keywords:* taxi booking app, ride-hailing software, flutter taxi app, uber clone architecture
   - *Schema:* `SoftwareApplication` + `BreadcrumbList`
2. **`products/limousine-chauffeur-booking-software.html`**:
   - *Title:* Executive Limousine & Accessible Chauffeur Booking Software
   - *Keywords:* limousine booking software, chauffeur dispatch app, luxury transport app, wheelchair accessible transport
   - *Schema:* `SoftwareApplication` + `BreadcrumbList`
3. **`products/roadside-assistance-towing-dispatch-system.html`**:
   - *Title:* On-Demand Roadside Assistance & Tow Truck Dispatch System
   - *Keywords:* roadside assistance app, towing dispatch software, emergency rescue app, uber for tow trucks
   - *Schema:* `SoftwareApplication` + `BreadcrumbList`
4. **`products/enterprise-fleet-telematics-management-system.html`**:
   - *Title:* Enterprise Fleet Logistics & Telemetry Management System (FTS Pro)
   - *Keywords:* fleet management software, offline-first mobile app, isar database flutter, telemetry tracking app
   - *Schema:* `SoftwareApplication` + `BreadcrumbList`
5. **`products/gis-railway-infrastructure-survey-app.html`**:
   - *Title:* Railway & Infrastructure GIS Asset Survey Mobile Application
   - *Keywords:* gis mobile app, railway asset management software, telecom survey app, offline sqlite sync
   - *Schema:* `SoftwareApplication` + `BreadcrumbList`
6. **`products/ai-workflow-automation-backend-engine.html`**:
   - *Title:* AI-Powered Backend API & Workflow Automation Engine
   - *Keywords:* ai backend development, fastapi backend developer, n8n automation, dify ai workflows, rag architecture
   - *Schema:* `SoftwareApplication` + `BreadcrumbList`

---

## 3. Verified Project Case Studies (`projects/`)

- `projects/vimo-services.html`: Vimo Services (Singapore Limousine & Accessible Transport)
- `projects/ajman-taxi.html`: Ajman Taxi & Sixth Limo (Dubai Technologies, UAE - Flutter iOS & Android)
- `projects/roadaider.html`: Road Assistant (Roadaider On-Demand Platform)
- `projects/fts-fleet-transport.html`: Fleet Transport Service (FTS Pro & EHS Enterprise Mobility)
- `projects/woye-transport.html`: Public Booking (Woye Transport, Ethiopia)
- `projects/railway-telecom-digitization.html`: Signal & Telecom Asset Digitization (Southern Railway, India)

---

## 4. Technical SEO & Sitemap Verification

- **Sitemap (`sitemap.xml`):** Contains all **13 canonical URLs** (Homepage + 6 Product Pages + 6 Project Case Studies).
- **Robots (`robots.txt`):** Allows crawling across all sections and points to `https://rahamathalikhanj.github.io/sitemap.xml`.
- **HTML5 Landmarks & ARIA:** Validated across all 13 pages.
- **Heading Hierarchy:** Exactly one `<h1>` per page, followed by semantic `<h2>` and `<h3>` tags.
- **Image Optimization:** All images have explicit dimensions and descriptive keyword alt text.

---

## 5. Deployment Instructions

```bash
git add .
git commit -m "feat(seo): Add separate product pages, Google Analytics gtag tracking, and update sitemap"
git push -u origin main
```
