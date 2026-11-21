// ─────────────────────────────────────────────────────────────
//  SITE SETTINGS. Edit this file for anything that is not one
//  specific product. Products live in ./products.js.
//  Anything in [BRACKETS] is a placeholder to replace.
// ─────────────────────────────────────────────────────────────

export const site = {
  name: 'Boldkin',
  supportEmail: 'supportatBoldkin@gmail.com',

  // Fallback Amazon link, used when a product has no amazonUrl of its own.
  amazonUrl: 'https://www.amazon.com/',

  // The product shown on the home page. Use a slug from products.js.
  featuredSlug: 'led-light-therapy-cap',

  announcement: 'Now available on Amazon',

  // Shown at the bottom of the shop grid. Set to '' to hide.
  comingSoon: 'New Boldkin products will appear here.',

  // Shown above the Amazon trademark note in the footer. Set to '' to hide.
  disclaimer:
    '',

  footerBlurb: 'LED light therapy for your at-home scalp-care routine. Sold on Amazon.',

  nav: [
    { label: 'Home', to: '/' },
    { label: 'Shop', to: '/shop' },
    // { label: 'Product', to: '/product' }, // opens the featured product
    { label: 'About', to: '/about' },
    { label: 'Support', to: '/support' },
  ],

  steps: {
    title: 'Three taps. Done.',
    items: [
      { title: 'Tap Buy on Amazon', text: 'Any button on this page takes you straight to the Boldkin listing.' },
      { title: 'Check out as usual', text: 'Use your Amazon account, saved address and payment method.' },
      { title: 'Get it delivered', text: 'Amazon shows your delivery date at checkout and tracks it to your door.' },
    ],
  },

  about: {
  headline: ['Go Bold', 'Be Kind'],
  story: [
    'Boldkin started with a simple idea: personal care should fit into your day, not take it over. We build products that are easy to use at home and that you can feel confident about using every day.',
    'Our first product is the LED Light Therapy Cap, a hands-free, cordless cap with 70 LED beads in 630nm red and 470nm blue light. You put it on, choose a mode, and get on with your day.',
    'Boldkin is about doing things with confidence. We make products that are easy to use, honest about what they do, and bold enough to make part of your everyday routine.',
  ],
  values: [
    { title: 'Easy to use', text: 'Lightweight at 180g, cordless and USB rechargeable, so a routine at home stays simple.' },
    { title: 'Clear about what it is', text: 'We describe our products by what they are and what they do, with the specs on the page so you can decide for yourself.' },
    { title: 'Easy to buy', text: 'Boldkin is sold on Amazon, so checkout, delivery tracking and returns happen in an app you already know.' },
  ],
},

  // Questions that apply to every product. Product-specific ones live in products.js.
  commonFaqs: [
    { q: 'Where can I buy Boldkin?', a: 'Right now, Boldkin is sold on Amazon. Tap any Buy on Amazon button and you will land on our product listing.' },
    { q: 'How long does delivery take?', a: 'Delivery is handled by Amazon, so you will see an estimated date for your address at checkout.' },
    { q: 'Can I return it?', a: 'Returns follow the return policy shown on our Amazon listing. Check the listing for the details that apply to your order.' },
    { q: 'I need help with my order.', a: 'For anything about delivery or payment, contact Amazon customer service from your orders page. For questions about the product, email [YOUR EMAIL].' },
  ],

  support: {
    cards: [
      { title: 'Ordering and delivery', text: 'Orders, delivery dates, tracking and returns are handled by Amazon. Find them under Your Orders in your Amazon account.' },
      { title: 'Getting started', list: ['Charge the unit with the USB cable.', 'Put the cap on and attach the main LED unit.', 'Choose a mode: red, blue or red + blue.'], note: '' },
      { title: 'Contact us', text: 'Questions about the product? Email us and we will get back to you.', email: true },
    ],
  },
};

export const getBuyUrl = (product) => product?.amazonUrl || site.amazonUrl;
