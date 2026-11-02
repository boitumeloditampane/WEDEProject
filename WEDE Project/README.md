# Burkleigh House Bakery Website

Website for **Burkleigh House Bakery**, a family-run bakery in Ferndale, Randburg, Johannesburg. It supplies handmade biscuits, rusks, cocktail pies and seasonal honey to retail stores. Built for the Web Development (Introduction) module, WEDES020, Parts 1 to 3.


## Student Information

- **Student Name:** Boitumelo Ditampane
- **Student Number:** ST10482828
- **Subject:** Web Development (introduction)

## Pages

| Page | Purpose |
|------|---------|
| `index.html` | Home page with hero section and links to the rest of the site |
| `about.html` | The bakery's story, mission and location |
| `products.html` | Product listing with search, category filter and sorting, plus a gallery with a lightbox |
| `enquiry.html` | Wholesale and custom order enquiry form that replies with pricing and availability, plus an FAQ accordion |
| `contact.html` | Contact details, interactive map and a general message form that builds an email |

## Part 3 Features

**Interactive elements**
- Mobile menu button that opens and closes the navigation on small screens.
- Accordion of wholesale questions on the enquiry page.
- CSS transitions (card hover, button colour) and a fade-in animation (accordion, lightbox, response panels).

**Dynamic content**
- The product cards on `products.html` are created with JavaScript from a list of products in `js/main.js`.
- Search by word, filter by category and sort by name or price.

**Gallery lightbox**
- Clicking a gallery picture opens it larger. It closes with the X button, by clicking the dark background, or with the Escape key.

**Interactive map**
- Leaflet with OpenStreetMap on the contact page, with a marker and popup for the bakery.

**Forms and validation**
- `enquiry.html`: text, email, phone, dropdown, checkboxes, radio buttons and a text area. After validation, the page uses `fetch()` (AJAX) to load `data/pricing.json` and shows a reply about cost, minimum order and availability based on the enquiry type.
- `contact.html`: name, email, phone, type of message and message. After validation, the page builds an email (subject and body) addressed to `info@bhbakery.co.za`, and the visitor sends it with the "Open Email to Send" button.
- JavaScript validation checks required fields, email format, South African phone format and minimum message length. Clear error messages appear under each field, and the first error receives focus.
- Both forms have an `action` attribute and use `novalidate` so the custom messages are shown.

## SEO

- A unique `<title>` and meta description on every page.
- One `<h1>` per page, with `<h2>` and `<h3>` headings under it.
- Descriptive alt text on all images.
- Clean, lowercase page names and internal links between pages.
- Mobile-friendly: viewport meta tag and responsive CSS.
- Local SEO: `Bakery` structured data (schema.org) with the Randburg address, phone number and trading hours on the contact page.
- Open Graph tags on the home page.
- `robots.txt` and `sitemap.xml` in the root folder.
- Off-page: social media links in the footer. Backlinks would come from listing the bakery in local business directories and from the retail partners' websites.

## Page Speed and Security

- Scripts use `defer` and below-the-fold images use `loading="lazy"`.
- Images have `width` and `height` set so the page does not jump while loading.
- External links use `rel="noopener noreferrer"`.
- JavaScript uses `textContent` (not `innerHTML`) for anything a visitor types.
- GitHub Pages serves the site over HTTPS.

## Responsive Testing

Tested with the browser developer tools (device mode) at three sizes.

| Device | Width | Screenshot |
|--------|-------|-----------|
| Desktop | 1280px | [add screenshot] |
| Tablet | 768px | [add screenshot] |
| Mobile | 375px | [add screenshot] |

## Notes

- The product names, prices and the figures in `data/pricing.json` are made up for this assignment.
- The forms have no server. The enquiry reply comes from a local file and the contact form uses the visitor's own email app, so no message is sent automatically.

## Changelog

### Part 3: changes made from Part 2 feedback

- **Navigation markup:** replaced the invalid `<u1>` element with `<ul>` on all five pages (opening and closing tags), so the navigation styles now apply.
- **Viewport meta tag:** corrected `viewpoint` to `viewport` on the home and products pages, and fixed `intitial-scale` (home) and `initial-scale1.0` (enquiry, missing `=`). Every page now uses the same meta tag, so the responsive design works on mobile.
- **Navigation label:** changed "Above us" to "About Us" on all pages.
- **404 page:** removed the 404 page and all links to it.

### Part 3: other fixes I found myself

- Changed `About.html` and `Products.html` links to lowercase so they match the file names (links are case-sensitive on GitHub Pages).
- Replaced the home page call-to-action selector `a[href="enquiry.html"]` with a `.btn` class, because it was also changing the Enquiry link in the navigation.
- Removed a duplicate `color` property in the button CSS and gave buttons a background colour.
- Fixed the fonts: "Playing Display" is now "Playfair Display", "Ariel" is now "Arial", and both fonts are now loaded from Google Fonts.
- Fixed spelling: "Misson", "Johannusburg", "falvours", "Where we're Based".
- Changed the site name in the header from an `<h1>` to a paragraph so each page has a single `<h1>`.
- Added `aria-current="page"` and a highlight on the current page link.
- Added `:focus-visible` outlines, and a rule that stops animations for people who turn them off.

### Part 3: new features

- Added `js/main.js` with the mobile menu, accordion, product search/filter/sort, lightbox, form validation, AJAX enquiry reply, contact email builder and Leaflet map.
- Added `data/pricing.json` for the enquiry reply.
- Rebuilt the enquiry form with checkboxes, radio buttons, a dropdown with placeholder, labels, fieldsets and error messages.
- Rebuilt the contact form with a "type of message" dropdown and an email builder.
- Replaced the map placeholder with an interactive Leaflet map.
- Added the gallery and lightbox, the FAQ accordion and the product listing to the products and enquiry pages.
- Added meta descriptions, Open Graph tags, structured data, `robots.txt` and `sitemap.xml`.
- Added telephone and email links and social media links to the footer.
- Updated this README with Part 3 information, the changelog and references.

## References

Fonts and code libraries:

- Agafonkin, V. (2023) *Leaflet: an open-source JavaScript library for interactive maps*. Available at: https://leafletjs.com (Accessed: [add date]).
- Google (2026) *Google Fonts: Open Sans and Playfair Display*. Available at: https://fonts.google.com (Accessed: [add date]).
- HTML5 Boilerplate (2020) *HTML5 Boilerplate v9.0.1*. Available at: https://html5boilerplate.com (Accessed: [add date]).
- OpenStreetMap contributors (2026) *OpenStreetMap*. Available at: https://www.openstreetmap.org/copyright (Accessed: [add date]).
- Schema.org (2026) *Bakery*. Available at: https://schema.org/Bakery (Accessed: [add date]).

- Seafood Room (n.d.) *Scones recipe* [Image]. Available at: https://seafoodroom.hk/wp-content/uploads/2025/01/scones-recipe-1736149249.jpg (Accessed: [add date]).
- Supreme Flour (2016) *Old-fashioned buttermilk rusks* [Image]. Available at: https://supremeflour.co.za/wp-content/uploads/2016/06/OLD-FASHIONED-BUTTERMILK-RUSKS5221.jpg (Accessed: [add date]).
- Raw Honey Guide (n.d.) *Seasonal honey varieties* [Image]. Available at: https://rawhoneyguide.com/images/blog/sections/seasonal-honey-varieties.webp (Accessed: [add date]).
- [Add the original source of the cocktail pies image and the Wix hero image, then the date accessed.]
