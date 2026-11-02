/* Burkleigh House Bakery: main.js
   One file for the whole site. Each section only runs on the page
   that has the matching element, so it is safe to load everywhere. */

/* =========================================================
   1. MOBILE MENU
   ========================================================= */
const menuBtn = document.getElementById('menu-btn');
const mainNav = document.getElementById('main-nav');

if (menuBtn && mainNav) {
  menuBtn.addEventListener('click', () => {
    const isOpen = mainNav.classList.toggle('open');
    menuBtn.setAttribute('aria-expanded', isOpen);
  });
}

/* =========================================================
   2. ACCORDION (enquiry page FAQ)
   ========================================================= */
document.querySelectorAll('.acc-btn').forEach(button => {
  button.addEventListener('click', () => {
    const panel = button.nextElementSibling;
    const wasOpen = button.getAttribute('aria-expanded') === 'true';
    button.setAttribute('aria-expanded', !wasOpen);
    panel.hidden = wasOpen;
  });
});

/* =========================================================
   3. PRODUCTS: dynamic listing with search, filter and sort
   ========================================================= */
const IMG_BISCUITS = 'https://seafoodroom.hk/wp-content/uploads/2025/01/scones-recipe-1736149249.jpg';
const IMG_RUSKS = 'https://supremeflour.co.za/wp-content/uploads/2016/06/OLD-FASHIONED-BUTTERMILK-RUSKS5221.jpg';
const IMG_PIES = 'https://tse4.mm.bing.net/th/id/OIP.vuEKl1x1I59t7wE35_NNLgHaHa?r=0&rs=1&pid=ImgDetMain&o=7&rm=3';
const IMG_HONEY = 'https://rawhoneyguide.com/images/blog/sections/seasonal-honey-varieties.webp';

// Product names and prices are placeholders for the assignment storyline
const products = [
  { name: 'Shortbread biscuits', category: 'biscuits', price: 45, image: IMG_BISCUITS, alt: 'Handmade biscuits', description: 'Buttery shortbread, baked fresh daily.' },
  { name: 'Chocolate chip biscuits', category: 'biscuits', price: 50, image: IMG_BISCUITS, alt: 'Handmade biscuits', description: 'Crunchy on the outside and soft in the middle.' },
  { name: 'Buttermilk rusks', category: 'rusks', price: 60, image: IMG_RUSKS, alt: 'Freshly baked rusks', description: 'Traditional South African rusks made with buttermilk.' },
  { name: 'Muesli rusks', category: 'rusks', price: 65, image: IMG_RUSKS, alt: 'Freshly baked rusks', description: 'Rusks packed with oats, seeds and dried fruit.' },
  { name: 'Chicken and mushroom cocktail pies', category: 'pies', price: 80, image: IMG_PIES, alt: 'Homemade cocktail pies', description: 'Puff pastry made from scratch, perfect for any occasion.' },
  { name: 'Beef cocktail pies', category: 'pies', price: 85, image: IMG_PIES, alt: 'Homemade cocktail pies', description: 'Bite-sized beef pies in golden puff pastry.' },
  { name: 'Wildflower honey', category: 'honey', price: 90, image: IMG_HONEY, alt: 'Jars of seasonal honey', description: 'Homegrown, organic honey available while stocks last.' },
  { name: 'Spring blossom honey', category: 'honey', price: 95, image: IMG_HONEY, alt: 'Jars of seasonal honey', description: 'A lighter seasonal honey from our spring harvest.' }
];

const productList = document.getElementById('product-list');

if (productList) {
  const searchBox = document.getElementById('search');
  const categorySelect = document.getElementById('category');
  const sortSelect = document.getElementById('sort');
  const resultCount = document.getElementById('result-count');

  function showProducts() {
    const searchText = searchBox.value.trim().toLowerCase();
    const category = categorySelect.value;

    // 1. Filter by search text and category
    const results = products.filter(product => {
      const text = (product.name + ' ' + product.description).toLowerCase();
      const matchesSearch = text.includes(searchText);
      const matchesCategory = category === 'all' || product.category === category;
      return matchesSearch && matchesCategory;
    });

    // 2. Sort
    if (sortSelect.value === 'name') {
      results.sort((a, b) => a.name.localeCompare(b.name));
    } else if (sortSelect.value === 'price-low') {
      results.sort((a, b) => a.price - b.price);
    } else if (sortSelect.value === 'price-high') {
      results.sort((a, b) => b.price - a.price);
    }

    // 3. Build the cards (textContent keeps everything as plain text)
    productList.textContent = '';
    results.forEach(product => {
      const card = document.createElement('article');
      card.className = 'card';

      const image = document.createElement('img');
      image.src = product.image;
      image.alt = product.alt;
      image.width = 600;
      image.height = 400;
      image.loading = 'lazy';

      const title = document.createElement('h3');
      title.textContent = product.name;

      const description = document.createElement('p');
      description.textContent = product.description;

      const price = document.createElement('p');
      price.className = 'price';
      price.textContent = 'From R' + product.price + ' per pack';

      card.append(image, title, description, price);
      productList.append(card);
    });

    if (results.length === 0) {
      resultCount.textContent = 'No products match your search. Try a different word or choose All products.';
    } else {
      resultCount.textContent = results.length + ' product(s) found';
    }
  }

  [searchBox, categorySelect, sortSelect].forEach(control => {
    control.addEventListener('input', showProducts);
    control.addEventListener('change', showProducts);
  });

  showProducts();
}

/* =========================================================
   4. GALLERY LIGHTBOX
   ========================================================= */
const lightbox = document.getElementById('lightbox');

if (lightbox) {
  const lightboxImg = document.getElementById('lightbox-img');
  const lightboxCaption = document.getElementById('lightbox-caption');
  const lightboxClose = document.getElementById('lightbox-close');

  function openLightbox(picture) {
    lightboxImg.src = picture.src;
    lightboxImg.alt = picture.alt;
    lightboxCaption.textContent = picture.alt;
    lightbox.hidden = false;
    lightboxClose.focus();
  }

  function closeLightbox() {
    lightbox.hidden = true;
  }

  document.querySelectorAll('.gallery img').forEach(picture => {
    picture.tabIndex = 0;   // let's keyboard users reach the pictures
    picture.addEventListener('click', () => openLightbox(picture));
    picture.addEventListener('keydown', event => {
      if (event.key === 'Enter') openLightbox(picture);
    });
  });

  lightboxClose.addEventListener('click', closeLightbox);

  // Clicking the dark background closes it too
  lightbox.addEventListener('click', event => {
    if (event.target === lightbox) closeLightbox();
  });

  document.addEventListener('keydown', event => {
    if (event.key === 'Escape') closeLightbox();
  });
}

/* =========================================================
   5. FORM VALIDATION (shared by the enquiry and contact forms)
   Every field to check has the data-validate attribute.
   ========================================================= */
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const PHONE_PATTERN = /^(\+27|0)\d{9}$/;   // e.g. 0118868983 or +27118868983

function getError(field) {
  // A group of checkboxes or radio buttons: at least one must be chosen
  if (field.tagName === 'FIELDSET') {
    return field.querySelector('input:checked') ? '' : field.dataset.message;
  }

  const value = field.value.trim();

  if (value === '') {
    return field.required ? field.dataset.message : '';
  }
  if (field.type === 'email' && !EMAIL_PATTERN.test(value)) {
    return 'Please enter a valid email address, for example name@example.co.za.';
  }
  if (field.type === 'tel' && !PHONE_PATTERN.test(value.replace(/[\s-]/g, ''))) {
    return 'Please enter a valid South African number, for example 011 886 8983 or +27 11 886 8983.';
  }
  if (field.minLength > 0 && value.length < field.minLength) {
    return 'Please enter at least ' + field.minLength + ' characters (you have ' + value.length + ').';
  }
  return '';
}

function checkField(field) {
  const message = getError(field);
  const errorBox = document.getElementById(field.id + '-error');

  if (errorBox) errorBox.textContent = message;
  field.classList.toggle('invalid', message !== '');
  if (field.tagName !== 'FIELDSET') {
    field.setAttribute('aria-invalid', message !== '');
  }
  return message === '';
}

// Checks every field, shows all the errors, and focuses the first bad one
function checkForm(form) {
  let firstBad = null;

  form.querySelectorAll('[data-validate]').forEach(field => {
    if (!checkField(field) && !firstBad) firstBad = field;
  });

  if (firstBad) {
    const target = firstBad.tagName === 'FIELDSET' ? firstBad.querySelector('input') : firstBad;
    target.focus();
    return false;
  }
  return true;
}

// Live feedback: check a field when the user leaves it
function setupLiveChecking(form) {
  form.querySelectorAll('[data-validate]').forEach(field => {
    if (field.tagName === 'FIELDSET') {
      field.addEventListener('change', () => checkField(field));
    } else {
      field.addEventListener('blur', () => checkField(field));
      field.addEventListener('change', () => checkField(field));
      field.addEventListener('input', () => {
        if (field.classList.contains('invalid')) checkField(field);
      });
    }
  });
}

function getDisplayValue(field) {
  if (field.tagName === 'FIELDSET') {
    return Array.from(field.querySelectorAll('input:checked'))
      .map(input => input.labels[0].textContent.trim())
      .join(', ');
  }
  if (field.tagName === 'SELECT') {
    return field.options[field.selectedIndex].text;
  }
  return field.value.trim() || 'Not provided';
}

// Hides the form, fills in the response panel and shows it
function showResponse(form, panel) {
  const summary = panel.querySelector('.resp-summary');
  summary.textContent = '';

  form.querySelectorAll('[data-validate]').forEach(field => {
    const term = document.createElement('dt');
    const detail = document.createElement('dd');
    term.textContent = field.dataset.label;
    detail.textContent = getDisplayValue(field);
    summary.append(term, detail);
  });

  const firstName = document.getElementById('name').value.trim().split(' ')[0];
  panel.querySelector('.resp-name').textContent = ', ' + firstName;

  form.hidden = true;
  panel.hidden = false;
  panel.focus();

  panel.querySelector('.resp-reset').onclick = () => {
    form.reset();
    form.querySelectorAll('[data-validate]').forEach(field => {
      field.classList.remove('invalid');
      const errorBox = document.getElementById(field.id + '-error');
      if (errorBox) errorBox.textContent = '';
    });
    panel.hidden = true;
    form.hidden = false;
    document.getElementById('name').focus();
  };
}

/* =========================================================
   6. ENQUIRY FORM: AJAX (fetch) reply with cost and availability
   ========================================================= */
const enquiryForm = document.getElementById('enquiry-form');

if (enquiryForm) {
  setupLiveChecking(enquiryForm);

  enquiryForm.addEventListener('submit', async event => {
    event.preventDefault();
    if (!checkForm(enquiryForm)) return;

    const panel = document.getElementById('enquiry-response');
    const message = panel.querySelector('.resp-message');
    const enquiryType = document.getElementById('enquiry-type').value;

    try {
      // Load the pricing data in the background, without reloading the page
      const reply = await fetch('data/pricing.json');
      if (!reply.ok) throw new Error('Pricing file not found');
      const pricing = await reply.json();
      const info = pricing[enquiryType];
      message.textContent = info.price + ' ' + info.minimum + ' ' + info.availability;
    } catch (error) {
      message.textContent = 'Sorry, we could not load our pricing right now. Please call us on 011 886 8983 and we will help you.';
    }

    showResponse(enquiryForm, panel);
  });
}

/* =========================================================
   7. CONTACT FORM: builds an email the visitor can send
   ========================================================= */
const contactForm = document.getElementById('contact-form');

if (contactForm) {
  setupLiveChecking(contactForm);

  contactForm.addEventListener('submit', event => {
    event.preventDefault();
    if (!checkForm(contactForm)) return;

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const phone = document.getElementById('phone').value.trim() || 'Not provided';
    const typeSelect = document.getElementById('message-type');
    const messageType = typeSelect.options[typeSelect.selectedIndex].text;
    const message = document.getElementById('message').value.trim();

    const subject = messageType + ' from ' + name;
    const body = 'Name: ' + name + '\n' +
      'Email: ' + email + '\n' +
      'Phone: ' + phone + '\n' +
      'Type of message: ' + messageType + '\n\n' +
      message;

    // The recipient email address is set here
    const recipient = 'info@bhbakery.co.za';
    document.getElementById('email-link').href =
      'mailto:' + recipient + '?subject=' + encodeURIComponent(subject) + '&body=' + encodeURIComponent(body);

    showResponse(contactForm, document.getElementById('contact-response'));
  });
}

/* =========================================================
   8. INTERACTIVE MAP (Leaflet + OpenStreetMap)
   ========================================================= */
const mapBox = document.getElementById('map');

if (mapBox && typeof L !== 'undefined') {
  // CHANGE THESE to the exact spot: on openstreetmap.org right-click the
  // bakery, choose "Show address", and copy the numbers from the address bar.
  const bakery = [-26.0905, 28.0050];

  const map = L.map('map').setView(bakery, 15);

  L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  }).addTo(map);

  L.marker(bakery)
    .addTo(map)
    .bindPopup('<strong>Burkleigh House Bakery</strong><br>323 Pine Ave, Ferndale, Randburg')
    .openPopup();
}
