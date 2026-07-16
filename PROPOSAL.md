# Portland Free Store Project — Website Proposal

**Prepared for:** Portland Free Store Project Team  
**Date:** July 2025  
**Author:** Jim Deville

---

## Summary

The current Squarespace site undersells the organization. The store is beloved, vibrant, and deeply community-rooted — but the website feels sparse and incomplete. This document covers what's working, what's missing, recommended changes, platform options, and how to claim a 50% Squarespace nonprofit discount before making any platform decisions.

**Recommendation in one sentence:** Get the nonprofit discount first, then preview this mockup with the team, then decide whether to rebuild on Squarespace or switch to GitHub Pages.

---

## Current Site Audit

### What's There

- Home page with the org name and a short welcome message
- Store hours (shown as an image — not readable by search engines or screen readers)
- Instagram/TikTok links in the footer
- A basic navigation menu
- A lavender/purple color palette

### What's Missing

- **A compelling hero section** — no photos, no carousel, no strong opening statement
- **Real text hours** — the current hours are embedded in an image, which means they don't show up in search results and can't be read by screen readers
- **An About page** with mission, story, and team
- **A FAQ page**
- **A Store Policies page** explaining what you accept and what you don't
- **A Donate page** with a fundraising goal, Venmo handle, and donor thank-you section
- **A Contact page** with a form, embedded map, and clear address
- **Social media section** with TikTok embed and Instagram link
- **Email signup** for updates and events
- **A cart icon** in the nav — this is confusing since nothing is for sale; it should be removed

### What's Confusing

- The cart icon in navigation implies e-commerce, which conflicts with the free store mission
- The lavender color palette doesn't reflect the warm, community-rooted nature of the organization
- There's no clear CTA (call to action) — visitors don't know whether to come in, donate, or volunteer

---

## Proposed Changes

### Design System

Replace the lavender palette with warm earth tones that reflect the store's welcoming, handmade, community feel:

| Variable | Value | Usage |
|---|---|---|
| Background | `#f5f0e8` | Warm off-white page background |
| Surface | `#ede5d0` | Card and section backgrounds |
| Primary | `#8b5e3c` | Buttons, links, headings |
| Accent | `#c4773b` | Hover states, highlights |
| Text | `#2d2016` | Body text |
| Muted | `#6b5744` | Secondary text |
| Sage | `#7a8c6e` | Subtle accents, success states |

### Navigation

- Remove the cart icon entirely
- Add: Home, About, FAQ, Store Policies, Donate, Contact
- Sticky nav that stays visible while scrolling
- Mobile hamburger menu

### Home Page

- **Hero carousel** with 3–4 slides, auto-advancing, keyboard accessible, pauses on hover
- **Welcome section** with mission sentence and two CTAs: "Visit Us" and "Support Us"
- **Store hours as real text** (not an image) — searchable, accessible, easy to update
- **How It Works** section (3-step visual)
- **Social media section** with TikTok embed and Instagram link
- **Email signup** section

### Inner Pages

| Page | What's New |
|---|---|
| About | Mission paragraph, values, team member cards (all visible at once, not a carousel) |
| FAQ | Accordion-style expandable questions, organized by category |
| Store Policies | Clear lists of what you accept, what you don't, conduct guidelines |
| Donate | Fundraiser thermometer, donation amount picker, Venmo handle above the fold, merch section, donor thank-you list |
| Contact | Contact form (via Formspree), embedded map, hours, email, Venmo |

---

## Platform Options

### Option A: Stay on Squarespace (with nonprofit discount)

**Pros:**
- No migration work
- Team is already familiar with the editor
- Built-in hosting, SSL, domain management
- With nonprofit discount: ~$15/mo instead of ~$30/mo

**Cons:**
- Monthly cost (even with discount)
- Limited customization without paying for business plan
- Squarespace's Instagram integration requires a connected account and can break when Instagram changes its API

**Best for:** Teams that want a visual editor and don't want to touch code.

### Option B: GitHub Pages (this mockup)

**Pros:**
- Free hosting, forever
- No platform lock-in
- Full design control
- Easy to version-control and collaborate on
- Any volunteer who can edit HTML can maintain it

**Cons:**
- No visual editor — changes require editing HTML files
- No built-in contact form backend (solved with Formspree — free tier)
- No built-in email signup backend (solved with Mailchimp or similar — free tier)
- TikTok/Instagram live feeds require third-party widgets

**Best for:** Teams with at least one volunteer comfortable with HTML, or who want a permanent free solution.

### Option C: Squarespace with Custom CSS

Apply the new design system (colors, typography, layout improvements) within Squarespace using their Custom CSS feature, without rebuilding from scratch.

**Best for:** Teams that want to keep Squarespace but want a significant visual upgrade.

---

## Squarespace Nonprofit Discount

Squarespace offers a **50% discount on annual plans** for verified 501(c)(3) organizations, through TechSoup.

### Steps

1. **Confirm your 501(c)(3) status** — you'll need your EIN and IRS determination letter.

2. **Register at TechSoup** — go to [techsoup.org](https://www.techsoup.org) and create a nonprofit account. TechSoup verifies nonprofit status and issues validation tokens to unlock software discounts.

3. **Request the Squarespace offer** — once verified on TechSoup (usually 1–5 business days), browse their offer catalog and request the Squarespace discount token.

4. **Redeem in Squarespace** — go to your Squarespace account → Billing → enter the TechSoup token to apply the 50% discount.

**Cost after discount:** ~$15/month (Business plan) or ~$8/month (Personal plan), billed annually.

**Recommendation:** Do this now regardless of which platform you ultimately choose. The discount pays for itself quickly, and the verification process is worth completing either way.

---

## GitHub Pages Deployment

Once the team has previewed and approved the mockup, here's how to publish it live.

### One-Time Setup

```bash
# If you haven't already:
git remote add origin https://github.com/jredville/portlandfreestoreproject.git
git push -u origin main
```

### Enable GitHub Pages

1. Go to the GitHub repository: `https://github.com/jredville/portlandfreestoreproject`
2. Click **Settings** → scroll to **Pages** in the left sidebar
3. Under **Source**, select **Deploy from a branch**
4. Branch: `main`, Folder: `/ (root)`
5. Click **Save**
6. Your site will be live at: `https://jredville.github.io/portlandfreestoreproject/`

A custom domain (e.g. `portlandfreestoreproject.org`) can be added for free in the same Pages settings panel — you'll need to update the DNS records with your domain registrar.

### Updating the Site

To update a page after the site is live:

1. Edit the HTML file on your computer (e.g., `index.html` to change hours)
2. Save the file
3. Run these three commands in Terminal:
   ```bash
   git add index.html
   git commit -m "Update store hours"
   git push
   ```
4. GitHub Pages rebuilds the site automatically, usually within 1–2 minutes.

---

## Activating Third-Party Integrations

### Contact Form (Formspree)

1. Go to [formspree.io](https://formspree.io) and create a free account
2. Click **New Form**, give it a name, and copy the endpoint ID (looks like `xabcdefg`)
3. In `contact.html`, find the form's `action` attribute and replace `PLACEHOLDER` with your endpoint ID:
   ```html
   <form action="https://formspree.io/f/xabcdefg" method="POST">
   ```
4. Remove the yellow notice box above the form
5. The free tier allows 50 submissions/month. Upgrade if needed.

### Email Signup

The email signup form on the homepage currently points to `action="#"` (does nothing). To activate:

1. Create a free [Mailchimp](https://mailchimp.com) or [Buttondown](https://buttondown.email) account
2. Create a signup form and copy the form action URL they provide
3. Replace `action="#"` in `index.html` with that URL

### TikTok Embed

To embed a specific TikTok video on the homepage:

1. Find the video on TikTok and click **Share → Embed**
2. Copy the embed code
3. In `index.html`, find the TikTok section and replace the placeholder `<blockquote>` with the embed code
4. Also remove the `data-video-id="REPLACE_WITH_VIDEO_ID"` placeholder attribute

---

## Editing Guide for Volunteers

### Update Store Hours

Open `index.html` (or `contact.html` for the hours on the Contact page). Find the `<table class="hours-table">` section and change the text inside the right-hand `<td>` cells:

```html
<tr><td>Tuesday</td><td>10:00 AM – 5:00 PM</td></tr>
```

Change the second `<td>` text to whatever the new hours are.

### Update Fundraiser Thermometer

Open `donate.html`. Find the line:

```html
<div class="thermometer-widget" data-goal="1000" data-current="400"
```

Change `data-goal` to your monthly fundraising goal and `data-current` to how much has been raised this month. No other changes needed — the thermometer calculates the percentage automatically.

### Update Carousel Slides

Open `index.html`. Each `<div class="carousel-slide">` block contains a heading (`<h1>`), a paragraph (`<p>`), and a button (`<a class="btn">`). Change the text directly — no CSS or JS changes needed.

---

## Next Steps

1. [ ] Team reviews this mockup and provides feedback
2. [ ] Apply for Squarespace nonprofit discount via TechSoup (takes 1–5 days)
3. [ ] Decide: stay on Squarespace (with new design) or migrate to GitHub Pages
4. [ ] Fill in real content: mission statement, team bios, real team photos
5. [ ] Set up Formspree for contact form
6. [ ] Set up email signup backend (Mailchimp or Buttondown)
7. [ ] Add real TikTok embed
8. [ ] Update EIN placeholder (`85-XXXXXXX`) with actual EIN
9. [ ] If GitHub Pages: push to GitHub and enable Pages in repo settings
10. [ ] If Squarespace: apply updated design using Custom CSS or rebuild with template

---

*This mockup was built with plain HTML, CSS, and JavaScript — no frameworks, no build tools. Any volunteer who can edit text in a file can maintain it.*
