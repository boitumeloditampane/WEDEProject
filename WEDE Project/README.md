# Burkleigh House Bakery Website

A responsive 5-page website built for Burkleigh House Bakery, a family-owned
bakery in Ferndale, Randburg, Johannesburg, as part of a web development
Proof of Evidence (PoE) assignment.

## Student Information

- **Student Name:** Boitumelo Ditampane
- **Student Number:** ST10482828
- **Subject:** Web Development (introduction)

## Project Overview

This project builds a functional, responsive website for Burkleigh House
Bakery, a real small business with over 25 years of commercial baking
experience, supplying more than 70 retail stores across South Africa. The
site is being developed in three parts: HTML structure (Part 1), CSS styling
and responsive design (Part 2), and JavaScript functionality (Part 3, not
yet started).

## Website Goals and Objectives

- Give the bakery a stronger first impression for retail buyers evaluating
  it as a potential stockist.
- Make it easy for local customers and small businesses to enquire about
  bulk or custom orders (pies, rusks, biscuits, honey).
- Tell the 25-year, family-owned story that currently isn't visible
  anywhere online.

**Key performance indicators:** number of enquiry form submissions per
month, average time on the products page, and growth in wholesale
enquiries from businesses outside the current 70-store network.

## Key Features and Functionality

- Homepage with hero section and calls to action
- About page telling the bakery's 25-year history
- Products page showcasing biscuits, rusks, cocktail pies and seasonal honey
- Enquiry page with a wholesale/custom order form
- Contact page with address, trading hours, and a contact form
- Consistent navigation across all 5 pages
- External stylesheet with a warm, bakery-themed colour palette
- Responsive layout with breakpoints for desktop, tablet and mobile

## Sitemap

```
index.html      (Home)
about.html      (About Us)
products.html   (Products)
enquiry.html    (Enquiry)
contact.html    (Contact)
```

## Timeline and Milestones

- **Part 1** (HTML foundation): proposal approval, sitemap, file structure,
  static HTML for all 5 pages.
- **Part 2** (CSS styling): external stylesheet, typography, layout,
  responsive breakpoints.

---

## Part 1 Details

Built the semantic HTML structure for all 5 pages (`header`, `nav`, `main`,
`footer`), a consistent navigation menu linking all pages, and placeholder
content sourced from research into the real Burkleigh House Bakery. File
structure set up with `css/`, `js/`, and `images/` folders per the project
sitemap.

**Feedback from Part 1:** N/A — feedback not yet received at time of Part 2
submission.

## Part 2 Details

Added an external stylesheet (`css/style.css`) linked to all 5 HTML pages.

- **Base styles:** CSS reset, site-wide font family, font size, and colour
  scheme set via CSS custom properties (`:root` variables).
- **Typography:** heading and body font families, consistent heading
  sizes, readable line length and line height.
- **Layout:** Flexbox used for the header/navigation bar and form fields;
  CSS Grid used for the two-column highlights/product sections on desktop.
- **Visual styles:** box shadows and rounded corners on cards and forms;
  `:hover`, `:focus`, and `:active` pseudo-classes on links and buttons.
- **Responsive design:** two breakpoints implemented using media queries
  (768px for tablet, 480px for mobile). At each breakpoint, the multi-column
  layout collapses to a single column, the navigation stacks vertically,
  and heading font sizes reduce. Images use `max-width: 100%` so they scale
  within their containers at any screen size.

**Testing:** the site was tested using Chrome DevTools' device toolbar
across desktop, tablet, and mobile viewport sizes. Screenshot evidence
below.

### Screenshot Evidence

*(Insert desktop, tablet, and mobile screenshots here, taken from Chrome
DevTools' responsive mode.)*

- Desktop: `[insert screenshot]`
- Tablet: `[insert screenshot]`
- Mobile: `[insert screenshot]`

---

## Changelog

### Part 1
- Created initial file structure (`css/`, `js/`, `images/` folders).
- Built `index.html`, `about.html`, `products.html`, `enquiry.html`,
  `contact.html` with semantic HTML structure.
- Implemented consistent navigation across all 5 pages.
- Added enquiry and contact forms (non-functional, structure only).

### Part 2
- Created `css/style.css` and linked it to all 5 HTML pages.
- Implemented CSS reset and base site-wide styles.
- Added typography styling for headings and body text.
- Implemented Flexbox layout for header/navigation and forms.
- Implemented CSS Grid layout for homepage highlights and product cards.
- Added visual styling: box shadows, rounded corners, hover/focus/active
  states on links and buttons.
- Implemented responsive breakpoints at 768px and 480px for tablet and
  mobile layouts.
- Tested site across desktop, tablet, and mobile viewports using Chrome
  DevTools.

---

## References

BH Bakery (2026) *BH Bakery — Sweet. Simple. Satisfying.* Available at:
https://www.bhbakery.co.za (Accessed: 13 September 2026).

What's On In Joburg (2024) *Independent Bakeries to Spoil Yourself!*
Available at: https://whatsoninjoburg.com/independent-bakeries-spoil/
(Accessed: 13 September 2026).

Raw Honey Guide (n.d.) *Seasonal Honey Varieties.* Available at:
https://rawhoneyguide.com/images/blog/sections/seasonal-honey-varieties.webp
(Accessed: 18 September 2026).

Supreme Flour (2016) *Old-Fashioned Buttermilk Rusks.* Available at:
https://supremeflour.co.za/wp-content/uploads/2016/06/OLD-FASHIONED-BUTTERMILK-RUSKS5221.jpg
(Accessed: 18 September 2026).

Seafood Room (2025) *Scones Recipe.* Available at:
https://seafoodroom.hk/wp-content/uploads/2025/01/scones-recipe-1736149249.jpg
(Accessed: 18 September 2026).

Bing Images (2026) *Image search result: cocktail pies.* Available at:
https://tse4.mm.bing.net/th/id/OIP.vuEKl1x1I59t7wE35_NNLgHaHa
(Accessed: 18 September 2026).
