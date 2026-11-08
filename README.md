# Astrexia Creatives — Website

Five-page React + Vite site: Home, About, Services, Portfolio, Contact.
Stack: React 18, React Router 6, Framer Motion, Lucide React, plain modern CSS.

## Run it

```bash
npm install
npm run dev       # local development
npm run build     # production build in /dist
npm run preview   # preview the production build
```

## Where to edit things

| What | File |
| --- | --- |
| Email, WhatsApp, Instagram, location, social links, form endpoint | `src/config/site.js` |
| Services (titles, descriptions, offers, benefits) | `src/data/services.js` |
| Portfolio projects and filter categories | `src/data/portfolio.js` |
| Navigation, process steps, About copy, "Why" features | `src/data/content.js` |
| Colours, gradients, typography, layout | `src/styles/global.css` (CSS variables at the top) |
| Your own images | `src/assets/images/` |

Anything in square brackets, such as `[EMAIL PLACEHOLDER ...]`, is a placeholder. It is shown on the site in a dashed style and never becomes a clickable link until you replace it with a real value.

## Contact form

The form validates required fields and email format in the browser. Until you set `formEndpoint` in `src/config/site.js`, **nothing is sent** and the form says so honestly. It never shows a fake success message.

To go live, create a form on a service such as Formspree or Web3Forms (or your own API), paste its URL into `formEndpoint`, and the form will POST the enquiry as JSON. The success message appears only after the endpoint returns a 2xx response.

## Portfolio

Every project is a fictional **CONCEPT PROJECT** with a generated mockup. To use real work, import your image in `src/data/portfolio.js`, set `image`, and set `concept: false` for that project only.

## Hosting note

The site uses client-side routing. On a static host, add a rewrite so all paths serve `index.html` (Netlify `_redirects`: `/* /index.html 200`; Vercel does this automatically for Vite).
