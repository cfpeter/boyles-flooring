/* ============================================================================
   EDIT THIS FILE to change business details anywhere on the site.
   Every page reads from here — nothing is hard-coded in the markup.
   ============================================================================ */

export const site = {
  name: 'Boyles Flooring',
  tagline: 'Flooring & Doors — Santa Clarita',
  description:
    'Premium hardwood, laminate, luxury vinyl, carpet, tile and doors in Santa Clarita, CA. Expert guidance from selection to measurement and professional installation.',

  phone: '(661) 284-1200',
  phoneHref: 'tel:+16612841200',

  email: 'sales@boyles-flooring.com',
  emailHref: 'mailto:sales@boyles-flooring.com',

  address: {
    street: '21515 Soledad Canyon Road, Suite #113',
    city: 'Santa Clarita',
    state: 'CA',
    zip: '91350',
    get full() {
      return `${this.street}, ${this.city}, ${this.state} ${this.zip}`;
    },
  },

  // Google Maps links — built from the address so they never fall out of sync.
  get mapsLink() {
    return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
      `${site.name}, ${site.address.full}`
    )}`;
  },
  get mapsEmbed() {
    return `https://maps.google.com/maps?q=${encodeURIComponent(
      site.address.full
    )}&t=&z=15&ie=UTF8&iwloc=&output=embed`;
  },

  hours: [
    { days: 'Monday – Friday', time: '8:30 am – 6:00 pm' },
    { days: 'Saturday', time: '9:00 am – 5:00 pm' },
    { days: 'Sunday', time: 'Closed' },
  ],

  serviceArea: [
    'Santa Clarita', 'Valencia', 'Saugus', 'Newhall', 'Canyon Country',
    'Stevenson Ranch', 'Castaic', 'Acton', 'Agua Dulce', 'San Fernando Valley',
  ],

  social: {
    instagram: { handle: '@boylesflooringscv', url: 'https://www.instagram.com/boylesflooringscv/' },
    tiktok: { handle: '@boyles.flooring', url: 'https://www.tiktok.com/@boyles.flooring' },
  },

  /* --------------------------------------------------------------------------
     CONTACT FORM — REQUIRED SETUP (2 minutes, free, no account needed):
       1. Go to https://web3forms.com
       2. Enter sales@boyles-flooring.com and press "Create Access Key"
       3. Check that inbox for the key, then paste it below.
     Until a real key is here, the form shows a friendly notice instead of
     silently dropping messages.
     -------------------------------------------------------------------------- */
  web3formsKey: 'YOUR_ACCESS_KEY_HERE',
} as const;

export const nav = [
  { label: 'Home', href: '/' },
  { label: 'Products', href: '/products' },
  { label: 'Contact', href: '/contact' },
] as const;
