# Sacred Synergy Zambia — Website

A premium, static marketing website for Sacred Synergy Zambia, founded by JankiShree Om.
Built as plain HTML/CSS/JS — **no build step, no framework, no backend** — so it deploys to
Netlify's free tier in seconds and stays cheap to maintain forever.

- **Live site:** https://sacred-synergy-zambia.netlify.app
- **Repo:** https://github.com/charanbassvabb-sudo/sacred-synergy-zambia

## Structure

```
index.html                    Home (hero, about, why-us, services overview, founder, blog
                               preview, social, contact form)
services.html                 Full catalogue of every service, grouped into 7 disciplines
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

Already deployed — pushing to `main` on GitHub does **not** currently auto-deploy, since this
site was linked and deployed straight from the CLI (`netlify deploy --prod`) rather than through
Netlify's GitHub App. To get auto-deploys on every push instead:

1. In the [Netlify dashboard](https://app.netlify.com/projects/sacred-synergy-zambia) →
   **Site configuration → Build & deploy → Link repository**, connect it to
   `charanbassvabb-sudo/sacred-synergy-zambia`.
2. Build command: *(leave blank)*. Publish directory: `.` (already set in `netlify.toml`).
3. Netlify will automatically detect the contact form on the homepage (`#contact-form`) —
   no extra setup needed. Submissions appear under **Site → Forms** in the Netlify dashboard.
   Add a notification (Site settings → Forms → Form notifications) to get an email whenever
   someone submits an enquiry.

Until then, redeploy manually after changes with `netlify deploy --prod --dir=.` from this folder.

## Things to update before/after launch

- **Custom domain**: the site currently lives at `sacred-synergy-zambia.netlify.app`. To use
  your own domain, add it under Site configuration → Domain management in Netlify, then update
  the canonical/OG URLs in every HTML file plus `robots.txt` and `sitemap.xml`
  (find-and-replace `sacred-synergy-zambia.netlify.app` with the new domain).
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
