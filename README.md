# Astrexia Creatives: Website

**Think Creative. Grow Digital.**

A five-page, responsive agency website built with **React 18, Vite 5, React Router 6 and Framer Motion**.

Pages: **Home · About · Services · Portfolio · Contact**

> **Note:** this source was written without being able to run `npm install` / `npm run build` in the authoring environment, so it has not been test-built. Step 3 below runs the build for the first time. If anything errors, send me the message and I'll fix it.

---

## 1. Project structure

```
astrexia-creatives/
├── index.html              # HTML shell, SEO meta tags, fonts
├── package.json
├── vite.config.js
├── vercel.json             # SPA routing + caching for Vercel
├── .env.example            # copy to .env (form endpoint, contact details)
├── .gitignore
├── public/
│   ├── favicon.svg
│   ├── robots.txt
│   └── sitemap.xml         # replace your-domain.com after deploying
└── src/
    ├── main.jsx            # entry point
    ├── App.jsx             # routes, page transitions, reduced-motion config
    ├── config.js           # YOUR contact details + form endpoint
    ├── data.js             # all text content (services, projects, process…)
    ├── hooks.js            # per-page title/description (SEO)
    ├── styles.css          # design system + responsive styles
    ├── components/         # Navbar, Footer, Button, Mockup, ContactForm…
    └── pages/              # Home, About, Services, Portfolio, Contact
```

---

## 2. Add your real details (important)

You did not give me real contact details or images, so nothing is invented. Until you fill them in, the site shows clearly-marked placeholders and **never** creates fake or broken links.

1. Copy `.env.example` to `.env` and fill in what you have:

   ```
   VITE_FORM_ENDPOINT=      # where the enquiry form posts (see section 5)
   VITE_CONTACT_EMAIL=      # e.g. hello@yourdomain.com
   VITE_WHATSAPP_NUMBER=    # digits with country code, e.g. 919876543210
   VITE_INSTAGRAM_URL=      # e.g. https://instagram.com/yourhandle
   VITE_LOCATION=           # e.g. Pune, India
   VITE_SITE_URL=           # e.g. https://www.yourdomain.com
   ```

2. Restart the dev server. Footer icons, the WhatsApp button and the contact card switch from placeholders to real links automatically.
3. The same variables must also be added in Vercel (section 7).

**Your own images / logo:** put files in `public/` (e.g. `public/images/logo.png`) and reference them as `/images/logo.png`. The current logo mark and all portfolio visuals are drawn in code with your brand colours.

**Editing content:** all text (services, process, about copy, portfolio projects) is in `src/data.js`.

---

## 3. Run locally

Requires **Node.js 18 or newer** (https://nodejs.org).

```bash
cd astrexia-creatives
npm install
npm run dev
```

Open the address shown (usually http://localhost:5173).

Check the production build before deploying:

```bash
npm run build      # creates the dist/ folder
npm run preview    # serves the built site locally
```

---

## 4. Portfolio: concept projects

All twelve portfolio items are **fictional demonstration pieces**, each labelled **CONCEPT PROJECT**. There are no client names, testimonials or invented results. When you have real, approved case studies, replace entries in the `projects` array in `src/data.js`.

---

## 5. Make the contact form work

The form validates in the browser, then posts JSON to `VITE_FORM_ENDPOINT`.

- **If no endpoint is set**, the form tells the visitor that it is **not connected** and nothing was sent (it offers an email draft if an email is configured). It never shows a fake success message.
- **When an endpoint is set**, a success message appears only after the server answers with a success status.

Easiest option, **Formspree** (free tier available):

1. Create an account at https://formspree.io and make a new form.
2. Copy its endpoint URL (looks like `https://formspree.io/f/xxxxxxx`).
3. Put it in `.env` as `VITE_FORM_ENDPOINT=...` and add it in Vercel too.

Fields sent: `name`, `email`, `phone`, `company`, `service`, `details`, `source`. Any backend or serverless function that accepts JSON works equally well. A hidden honeypot field blocks simple spam bots.

---

## 6. Push to GitHub

1. Create an empty repository at https://github.com/new (do not add a README).
2. In the project folder:

   ```bash
   git init
   git add .
   git commit -m "Initial commit: Astrexia Creatives website"
   git branch -M main
   git remote add origin https://github.com/YOUR-USERNAME/astrexia-creatives.git
   git push -u origin main
   ```

`.env` is git-ignored, so your private settings are not uploaded.

*(No Git? On the GitHub repo page choose **Add file → Upload files** and drag in the contents of the project folder, excluding `node_modules`.)*

---

## 7. Deploy on Vercel

1. Sign in at https://vercel.com with GitHub.
2. Click **Add New → Project** and import your `astrexia-creatives` repository.
3. Vercel detects **Vite** automatically. Keep: Build Command `npm run build`, Output Directory `dist`.
4. Open **Environment Variables** and add the `VITE_…` values from your `.env`.
5. Click **Deploy**. After a minute you get a live URL.
6. Every `git push` to `main` redeploys automatically.

**Custom domain:** Project → Settings → Domains → add your domain and follow the DNS instructions.

`vercel.json` already makes direct links like `/about` or `/portfolio` work on refresh.

**After you have a domain:** replace `your-domain.com` in `public/sitemap.xml` and `public/robots.txt`, and set `VITE_SITE_URL`.

---

## 8. What's included

- Sticky, animated navbar with mobile menu (Escape closes it, scroll is locked while open)
- Hero with staggered headline reveal and floating abstract elements (Cherry Noir)
- Home: Introduction, 6 service cards, Why Choose Astrexia, 4-step process timeline, selected work, CTA (Cherry Bloom), contact section, footer
- About: Story, Vision, Mission, Approach, Why Astrexia
- Services: all 8 services, each with description, offer list, benefits, visual and CTA
- Portfolio: animated category filters (All, Branding, Graphic Design, Social Media, Website Development, Marketing)
- Contact: validated form, service dropdown, WhatsApp CTA, email / Instagram / location cards
- Framer Motion: page transitions, scroll reveal, hover effects, floating elements, button interaction
- **Accessibility:** reduced-motion respected (`MotionConfig reducedMotion="user"` + CSS), skip link, keyboard focus styles, labelled form fields with error messages
- **SEO:** per-page titles and descriptions, Open Graph tags, structured data, sitemap, robots.txt
- **Performance:** code-split vendor chunks, no image dependencies, long-cache headers for built assets

## Brand colours

Cherry Noir `#171014 → #351B29 → #8D294E` · Cherry Bloom `#351B29 → #8D294E → #D76A91` · Blush Glow `#F9EAF0 → #EFC9D7 → #D76A91` · plus `#23151D`, `#FFF9FB`, `#FFFFFF`, `#241720`, `#D76A91`, `#B9AAB2`. No other colours are used. They are defined as variables at the top of `src/styles.css`.
