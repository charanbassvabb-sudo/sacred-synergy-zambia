# Sacred Synergy Zambia — Website

A premium, static marketing website for Sacred Synergy Zambia, founded by JankiShree Om.
Built as plain HTML/CSS/JS — **no build step, no framework, no backend** — so it deploys to
Netlify's free tier in seconds and stays cheap to maintain forever.

## Structure

```
index.html                    Home (hero, about, why-us, services overview, founder, blog
                               preview, social, contact form)
services.html                 Full catalogue of every service, grouped into 5 disciplines
blog.html                     Blog / journal listing
blog/
  energy-healing-signs.html
  akashic-records-101.html
  sacred-ritual-oils.html
  tarot-vs-akashic-reading.html
css/style.css                 Entire design system (tokens, layout, components)
js/main.js                    Nav toggle, scroll-reveal animation, active-link highlighting,
                               Netlify Forms AJAX submission
assets/icons.svg              Shared SVG icon sprite (referenced via <use>)
assets/img/                   Founder photography (from the supplied WhatsApp images)
favicon.svg                   Browser tab icon (lotus mark)
netlify.toml                  Netlify config: headers, caching, redirects
robots.txt / sitemap.xml      SEO
```

## Deploying to Netlify

1. Push this folder to a GitHub/GitLab repo, **or** drag-and-drop the whole folder onto
   [app.netlify.com/drop](https://app.netlify.com/drop).
2. Build command: *(leave blank)*. Publish directory: `.` (already set in `netlify.toml`).
3. Netlify will automatically detect the contact form on the homepage (`#contact-form`) —
   no extra setup needed. Submissions appear under **Site → Forms** in the Netlify dashboard.
   Add a notification (Site settings → Forms → Form notifications) to get an email whenever
   someone submits an enquiry.

## Things to update before/after launch

- **Domain**: `sacredsynergyzambia.com` is used as a placeholder in `<link rel="canonical">`,
  Open Graph tags, `robots.txt` and `sitemap.xml`. Replace it with your real Netlify subdomain
  or custom domain once you have one (find-and-replace across the project).
- **Direct contact details**: no phone number or email address was supplied, so the Contact
  section currently points people to Instagram DM, Facebook and the contact form. Add a
  phone/WhatsApp number or email in `index.html` (`#contact` section) if you'd like one listed.
- **Blog images**: article covers currently use custom SVG illustrations in the brand's
  colour palette. Swap in real photos any time by replacing the `<svg>` block inside
  `.article-cover` / `.blog-thumb` with an `<img>` tag.
- **New services**: add another `<div class="offering">` inside the relevant section of
  `services.html`, following the existing `<b>Name</b><span>Description</span>` pattern.

## Design system

- **Colors**: deep mystic plum/ink background, antique gold accent, warm cream body sections
  — all defined as CSS custom properties at the top of `css/style.css`.
- **Type**: Playfair Display (headings) + Inter (body), loaded from Google Fonts with
  `display=swap`.
- **Performance**: no JS frameworks, no build tooling, minimal dependencies (only Google
  Fonts). Images are lazy-loaded below the fold. Animations respect
  `prefers-reduced-motion`.
