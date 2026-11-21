// ─────────────────────────────────────────────────────────────
//  PRODUCT CATALOG. To add a product, copy the whole object below,
//  paste it after the last one and change the values. It gets its
//  own page at /product/<slug> and a card on /shop automatically.
//
//  Optional fields can be left out or set to [] / null:
//  options, modes, box, bestFor, specs, faqs, reviews, images.
// ─────────────────────────────────────────────────────────────

export const products = [
  {
    slug: 'led-light-therapy-cap',
    name: 'LED Light Therapy Cap',
    category: 'LED light therapy',
    tagline: '70 LEDs. Red and blue light. No cables.',
    heroText: 'Hands-free scalp care at home, ordered on Amazon in a few taps.',
    short: '70 LEDs. 630nm red and 470nm blue light. Hands-free, cordless and 180g.',
    description:
      'A wearable, hands-free LED cap for convenient at-home scalp-care routines. Dual-colour 630nm red and 470nm blue light from 70 LED beads, in a lightweight, cordless design for men and women.',

    price: '₹5998/-',
    amazonUrl: '', // your Amazon link for this product. Empty = site default
    rating: 4.0,
    ratingCount: 10,

    // Photos: add URLs or files from /public, in the order of `views`.
    // Leave empty to show an illustration placeholder.
    images: ["photos/hero.jpg", "photos/back.jpg", "photos/results.jpg", "photos/modes.jpg", "photos/all.jpg"],
    views: ['Front', 'Back', 'Detail', 'In use','all'],
    placeholder: 'cap', // 'cap' or 'pack'
    placeholderLabel: 'BOLDKIN',

    // Variants, if the product has any (size, colour, pack). Empty = hidden.
    options: [],

    // Bullet list next to the buy button.
    features: [
      '70 LED beads for light distribution across the scalp',
      '630nm red and 470nm blue dual-colour LED technology',
      '4 working modes, with constant and strobe lighting',
      'Lightweight 180g, cordless and USB rechargeable (1200mAh)',
      'Hands-free design for comfortable daily use',
    ],

    // Big tiles on the home page. tone: 'light' | 'dark' | 'accent'. wide: spans two columns.
    highlights: {
      title: 'Built to be noticed.',
      intro: 'Dual-colour LED light, spread across 70 beads, in a cap you can wear while you get on with your day. Made for men and women.',
      items: [
        { title: '70 LED beads', text: 'Light distribution across the scalp, from a compact cap-style design.', tone: 'light', wide: true },
        { title: 'Red + blue', text: '630nm red and 470nm blue light, on their own or together, in 4 working modes.', tone: 'dark' },
        { title: 'Hands-free', text: 'Lightweight 180g and cordless, so you can wear it comfortably every day.', tone: 'accent' },
        { title: 'Order in a tap', text: 'Boldkin is sold on Amazon, so checkout, delivery tracking and returns all happen in the app you already trust.', tone: 'light', wide: true },
      ],
    },

    // Working modes section. kind sets the colour swatch: red | blue | both | strobe
    modes: {
      title: ['Two lights.', 'Four modes.'],
      intro: '630nm red, 470nm blue, or both together. Choose constant or strobe lighting to suit your routine.',
      items: [
        { kind: 'red', name: 'Red light', tag: '630nm', text: 'Visible red light for your scalp-care sessions.' },
        { kind: 'blue', name: 'Blue light', tag: '470nm', text: 'An additional blue light option for customizable care.' },
        { kind: 'both', name: 'Red + blue', tag: '630nm + 470nm', text: 'Both colours together in one combined mode.' },
        { kind: 'strobe', name: 'Constant or strobe', tag: '', text: 'Pick steady light or strobe lighting, depending on how you like to use it.' },
      ],
    },

    box: ['Therapy Cap', 'Main LED Unit', 'USB Charging Cable', 'User Manual'],

    bestFor: [
      'At-home scalp-care routines',
      'Men and women interested in LED-based personal care',
      'Convenient hands-free light sessions',
    ],

    specs: [
      { label: 'LED beads', value: '70' },
      { label: 'Light colours', value: '630nm red · 470nm blue' },
      { label: 'Working modes', value: '4 (red, blue, red + blue)' },
      { label: 'Lighting', value: 'Constant and strobe' },
      { label: 'Battery', value: '1200mAh rechargeable' },
      { label: 'Charging', value: 'USB, cordless use' },
      { label: 'Weight', value: '180g' },
      { label: 'Dimensions', value: '24.5 × 21.5 × 6.2 cm' },
      { label: 'Suitable for', value: 'Men and women' },
    ],

    faqs: [
      { q: 'Who is the LED Light Therapy Cap for?', a: 'It is designed for men and women interested in LED-based personal care and convenient at-home scalp-care routines.' },
      { q: 'What is in the box?', a: 'The therapy cap, the main LED unit, a USB charging cable and a user manual.' },
      { q: 'What do the modes do?', a: 'There are 4 working modes: red light (630nm), blue light (470nm), and combined red and blue light, with constant and strobe lighting options.' },
      { q: 'How do I charge it?', a: 'It has a 1200mAh rechargeable battery and charges over USB. It works cordless once charged.' },
      { q: 'How do I use it?', a: 'Charge the unit with the USB cable, put the cap on and choose a mode.' },
    ],

    reviews: [
      { text: 'I started using this red light cap because my hair was falling out fast. Two months in, my shedding has slowed way down and my scalp feels much healthier.', name: 'Sarah, 35F', point:"Individual results may vary"},
      { text: 'Four months into the treatment, my noticeably thinning hair looks much thicker and fuller—and my confidence is back.', name: 'Adam, 45M', point:"Individual results may vary" },
      { text: 'Six months of consistent use filled in my alopecia bald spots and dramatically improved my overall hair density.', name: 'Rohan, 30M', point:"Individual results may vary" },
    ],
  },

  // ── Add your next product here ──────────────────────────────
  // { slug: 'next-product', name: 'Next product', ... },
];

export const getProduct = (slug) => products.find((p) => p.slug === slug);
