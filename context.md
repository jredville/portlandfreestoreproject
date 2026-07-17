# Portland Free Store Project — Session Context

A redesign mockup of portlandfreestoreproject.org, built as a static HTML/CSS/JS preview site for the team to review before any platform work begins. Jim Deville is the author and point of contact.

---

## What This Repo Is

A plain HTML/CSS/JS mockup — no build tools, no frameworks — intentionally simple so any volunteer can open a file and understand it. Six pages mirroring the real site's structure, with real content, real photos, and a design system that aligns with the org's logo colors.

The preview is live at: **https://jredville.github.io/portlandfreestoreproject/**

The final site will NOT live here. This is a design reference only.

---

## File Structure

```
portlandfreestore/
├── index.html            Home — carousel, welcome + address + hours, How It Works, social
├── about.html            About — mission, values, team (Jess/Rachel/Amarie)
├── faq.html              FAQ — 11 accordion items
├── store-policies.html   Code of Conduct + what we accept
├── donate.html           Thermometer, Venmo, merch, sponsors
├── contact.html          Form (Formspree), map, address/hours side-by-side
├── PROPOSAL.md           Non-technical write-up for the team (see below)
├── css/style.css         All styles — design system tokens at the top
├── js/main.js            Mobile nav, carousel, FAQ accordion, thermometer, donation picker
└── images/               All downloaded from the live Squarespace site
```

---

## Design System

Colors are defined as CSS custom properties in `css/style.css` `:root`. They were chosen to match the logo: gold/amber outer ring, teal handshake icon.

```css
--color-bg:      #f5f0e8   /* warm off-white */
--color-surface: #ede5d0   /* tan card background */
--color-primary: #8b5c38   /* warm brown — nav, buttons */
--color-accent:  #c07b2c   /* golden amber — logo ring */
--color-text:    #2d2016   /* dark brown body */
--color-muted:   #6b5744   /* secondary text */
--color-sage:    #4e8882   /* teal — logo handshake */
--color-sage-light: #7db5b0
--color-border:  #d4c9b5
```

Mobile-first, breakpoint at 768px. No external fonts — system stack.

---

## Real Content Notes

All content was sourced from the live site at portlandfreestoreproject.org.

**Contact info (confirmed correct):**
- Address: 5419 NE 42nd Ave, Portland, OR 97218
- Email: portlandfreestore@gmail.com
- Venmo: @ThePortlandFreeStoreProject
- Instagram: @theportlandfreestoreproject
- TikTok: @theportlandfreestoreproject
- EIN: 33-1296139

**July 2026 hours (confirmed from the sign — accurate):**
- Tue July 1, 10am–2pm
- Tue July 14, 10am–2pm
- Tue July 21, 10am–2pm
- Sat July 25, 10am–2pm
- Tue July 28, 10am–2pm

Hours change monthly. The site note says to follow Instagram/TikTok for updates.

**Donate page thermometer:**
- Goal: $1,100/mo (derived from cost breakdown sign: rent $1,000 + insurance $30 + taxes $6 + website $36 + electric TBD)
- Current: $400 (placeholder — update `data-current` in `donate.html`)
- To update: change `data-goal` and `data-current` on `.thermometer-widget` in donate.html

**Merch:**
- Artist: Evie Butler (@evievart on Instagram)
- Suggested donation: $20
- Order by emailing portlandfreestore@gmail.com

**Sponsors/supporters:** Thy Vu (tattoo), Vanessa (tarot), Radical Abundance, The Ivy School

**Team:**
- Jess — President (images/team-jess.jpg)
- Rachel — Director/Treasurer (images/team-rachel.jpg)
- Amarie — Secretary (images/team-amarie.jpg)

**About page:** Has a "Mission Statement" placeholder blockquote (styled, styled with amber left border) — the team needs to fill this in.

---

## Images

All downloaded from the Squarespace CDN during the session:

| File | Content |
|---|---|
| logo.png | Circular teal/gold logo (210KB) |
| store.jpg | "FREE STORE 10-2" sidewalk sign (582KB) |
| july-hours.jpg | Framed July 2026 hours sign (109KB) |
| merch-1.jpg | Bird-print shirt closeup (275KB) |
| merch-2.jpg | Full merch table (173KB) |
| merch-3.jpg | Flannel-backed logo shirt (340KB) |
| cost-breakdown.jpg | Monthly cost breakdown sign (81KB) |
| team-jess.jpg | Jess headshot |
| team-rachel.jpg | Rachel headshot |
| team-amarie.jpg | Amarie headshot |

Carousel slides use CSS `::after` dark overlay (`rgba(30,18,8,0.48)`) so text is readable over photos.

---

## Donation UI

The amount picker buttons (`$10/$25/$50/Custom`) use `.btn-primary` for selected and `.btn-outline` for unselected. This was intentional: it previews what Squarespace's native donation block will actually render (which inherits global button styles). The JS in `js/main.js` swaps `btn-primary`/`btn-outline` on click.

The frequency toggle (One-time/Monthly) uses a segmented control with `--color-primary` border and fill.

---

## Contact Form

Uses Formspree. The form action is `https://formspree.io/f/PLACEHOLDER`. To activate: create a free Formspree account, get an endpoint ID, replace PLACEHOLDER in `contact.html`, and remove the notice box above the form.

---

## PROPOSAL.md

Written for a non-technical nonprofit audience. Key sections:

1. **Current site audit** — what's working, what's missing
2. **Redesign summary** — what changed and why
3. **Primary recommendation: Stay on Squarespace** with a TechSoup nonprofit discount
4. **Alternative option: Wix via TechSoup** — $49/year admin fee for the Business plan (70% off annual price); much cheaper than Squarespace, still a visual editor, no technical knowledge needed for updates
5. **Alternative option: Fly.io** — under $5/month, but requires HTML/tech help for updates; Jim is happy to continue handling this
6. **Next steps table** — hours are already confirmed and live; outstanding items are fundraising goal, team photos, and TechSoup application

---

## Platform Research (what we learned this session)

### Squarespace
- Nonprofit discount available via TechSoup — but the specific discount percentage was not confirmed from a primary source during this session; verify at techsoup.org before publishing the proposal
- Business plan recommended for custom code blocks, TikTok embeds, donation widget, email campaigns
- Everything on this mockup can be replicated in Squarespace's editor
- Donation amount picker will be replaced by Squarespace's native donation block (which is why we styled our buttons to match its output)

### Wix via TechSoup
- TechSoup charges a $49 admin fee for the Wix Premium Business Plan
- TechSoup provides a 70% coupon code to use at Wix checkout
- Wix Business plan (annual, USD) is in the $17–29/mo range; at 70% off that's ~$60–75/year, making the $49 admin fee effectively the full annual cost
- URL found: https://www.techsoup.org/products/wix-premium-business-plan-g-60110-
- To purchase: pay TechSoup $49 → get coupon code → go to wix.com/upgrade/website → select Business plan, annual billing → apply code at checkout
- Wix's pricing page geolocates by IP and shows local currency; check from a US browser for USD prices

### Fly.io
- On-demand hosting for the static site
- Estimated cost: $0–2/mo (free tier covers low-traffic sites); well under $5/mo
- No visual editor — requires HTML knowledge for any content changes
- Jim is offering to handle updates if the team goes this route

---

## Outstanding Items (as of end of session)

| Item | Status |
|---|---|
| Store hours | ✅ Confirmed and live |
| Real photos | ✅ All downloaded and in use |
| Real team bios | ✅ Live on about.html |
| EIN | ✅ 33-1296139 confirmed |
| Email | ✅ portlandfreestore@gmail.com confirmed |
| Mission statement | ⬜ Placeholder in about.html — team needs to write it |
| Fundraising goal/current amount | ⬜ Thermometer uses placeholder ($400 of $1,100) — team to confirm |
| Team photos | ⬜ Using photos from live site; team may want updated ones |
| Formspree setup | ⬜ PLACEHOLDER in contact.html — needs a real endpoint |
| TechSoup application | ⬜ Team needs to submit (needs EIN + IRS determination letter) |
| Platform decision | ⬜ Squarespace vs Wix vs Fly.io — pending team review |
