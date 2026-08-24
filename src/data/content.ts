/* ============================================================================
   Site content: product categories, services, showroom gallery.
   Copy here is plain text — edit freely, no HTML knowledge needed.
   ============================================================================ */
import type { ImageMetadata } from 'astro';

/* ----------------------------------------------------------------------------
   BRAND SOURCES — read before editing `brands`

   Hardwood, laminate and luxury vinyl brand lines are taken from the catalogue
   of Boyles' distributor (ADCO Wholesale, Burbank), whose flooring categories
   map onto ours as: Engineered + Solid wood -> Hardwood, Laminate -> Laminate,
   SPC Vinyl -> Luxury Vinyl.

   `onFloor: true` marks the lines actually visible in Boyles' own showroom
   photos and videos — Pacific Direct Industries, Republic Flooring, COREtec,
   Stanton and Dreamweaver. Everything else is available to order through the
   distributor rather than confirmed as stocked, which is why the page says
   "available through our suppliers" rather than claiming they are all in store.

   Carpet is not a distributor line. Shaw, Stanton Carpet, Anderson Tuftex and
   Dreamweaver were given directly by the business (Stanton and Dreamweaver are
   also visible on displays in the showroom photos). Tile and doors have no
   confirmed brand list yet.
   ---------------------------------------------------------------------------- */

/* Astro optimises every image it can see at build time. Globbing the folder
   means dropping a new photo into src/assets/gallery/ is all it takes. */
const files = import.meta.glob<{ default: ImageMetadata }>(
  '../assets/gallery/*.{jpg,jpeg,png}',
  { eager: true }
);

const img = (name: string): ImageMetadata => {
  const hit = Object.entries(files).find(([path]) => path.includes(`/${name}.`));
  if (!hit) throw new Error(`Gallery image "${name}" not found in src/assets/gallery/`);
  return hit[1].default;
};

export type Brand = {
  name: string;
  /** Seen on the showroom floor in Boyles' own photos or videos. */
  onFloor?: boolean;
};

export type Category = {
  slug: string;
  name: string;
  blurb: string;
  body: string;
  bullets: string[];
  image: ImageMetadata;
  /** Brand lines available in this category. See BRAND SOURCES note below. */
  brands: Brand[];
};

export const categories: Category[] = [
  {
    slug: 'hardwood',
    name: 'Hardwood',
    blurb: 'Solid and engineered wood with real grain and real longevity.',
    body: 'Nothing else ages quite like wood. We carry solid and engineered hardwood across a full range of species, widths and finishes — from pale white oak to deep walnut. Engineered constructions stay stable over concrete slabs and in wider planks, so you can get the look you want in rooms where solid wood would not be the right call.',
    bullets: ['Solid & engineered', 'Wide-plank options', 'Matte to satin finishes', 'Refinishable surfaces'],
    image: img('g09'),
    brands: [
      { name: 'ARK' },
      { name: 'Boen' },
      { name: 'Celeste' },
      { name: 'Country Wood Flooring' },
      { name: 'Hermitage' },
      { name: 'Johnson' },
      { name: 'Monarch Plank' },
      { name: 'Oasis' },
      { name: 'Opus Hardwood' },
      { name: 'Pacific Direct Industries', onFloor: true },
      { name: 'Republic Flooring', onFloor: true },
      { name: 'Reward' },
      { name: 'SK' },
      { name: 'SLCC' },
      { name: 'Somerset' },
      { name: 'Tecsun' },
      { name: 'Tri-West' },
      { name: 'Urban' },
    ],
  },
  {
    slug: 'laminate',
    name: 'Laminate',
    blurb: 'Hard-wearing, budget-friendly, and remarkably convincing.',
    body: 'Modern laminate has come a long way. High-definition printing and embossed textures track the grain you see, and the wear layers shrug off pets, kids and busy hallways. It is the practical choice when you want the look of wood across a lot of square footage without the hardwood budget.',
    bullets: ['High scratch resistance', 'Great value per sq ft', 'Realistic wood texture', 'Fast installation'],
    /* A finished room rather than a sample rack — the showroom photos show
       racks, which sell the shop but not the floor. CC0, see CONTENT.md. */
    image: img('laminate-room'),
    brands: [
      { name: 'Alana' },
      { name: 'Bellissima' },
      { name: 'Country Wood Flooring' },
      { name: 'Eternity' },
      { name: 'Johnson' },
      { name: 'Linco' },
      { name: 'Lions Floor' },
      { name: 'LUX Flooring' },
      { name: 'Oasis' },
      { name: 'Pacific Direct Industries', onFloor: true },
      { name: 'Republic Flooring', onFloor: true },
      { name: 'SK' },
      { name: 'SLCC' },
      { name: 'Staymor' },
      { name: 'Tecsun' },
      { name: 'Urban' },
    ],
  },
  {
    slug: 'luxury-vinyl',
    name: 'Luxury Vinyl',
    blurb: 'Fully waterproof planks and tile — kitchens, baths, everywhere.',
    body: 'Luxury vinyl plank and tile is the fastest-growing floor we sell, and for good reason: it is 100% waterproof, comfortable underfoot, and tough enough for the busiest house. That makes it the go-to for kitchens, bathrooms, laundry rooms and basements — or for running one continuous floor through the whole home.',
    bullets: ['100% waterproof', 'Kid- and pet-proof wear layers', 'Rigid core stability', 'Warm and quiet underfoot'],
    image: img('g04'),
    brands: [
      { name: 'COREtec', onFloor: true },
      { name: 'Country Wood Flooring' },
      { name: 'Essen' },
      { name: 'Eternity' },
      { name: 'Johnson' },
      { name: 'Linco' },
      { name: 'Lions Floor' },
      { name: 'LUX Flooring' },
      { name: 'Oasis' },
      { name: 'Pacific Direct Industries', onFloor: true },
      { name: 'Republic Flooring', onFloor: true },
      { name: 'SK' },
      { name: 'SLCC' },
      { name: 'Tecsun' },
      { name: 'Urban' },
    ],
  },
  {
    slug: 'carpet',
    name: 'Carpet',
    blurb: 'Soft underfoot, with stain and pet performance built in.',
    body: 'Bedrooms, stairs and family rooms still call for carpet. We stock plush, textured, loop and patterned styles, along with performance fibres engineered to resist staining and release pet accidents. Bring your room dimensions and we will walk you through the trade-offs between feel, durability and cleanability.',
    bullets: ['Plush, textured & patterned', 'Pet-friendly performance fibres', 'Stair runners & bindings', 'Quality pad options'],
    image: img('g03'),
    brands: [
      { name: 'Shaw', onFloor: true },
      { name: 'Stanton Carpet', onFloor: true },
      { name: 'Anderson Tuftex', onFloor: true },
      { name: 'Dreamweaver', onFloor: true },
    ],
  },
  {
    slug: 'tile-stone',
    name: 'Tile & Stone',
    blurb: 'Porcelain, ceramic and stone looks for wet rooms and feature walls.',
    body: 'Porcelain and ceramic give you near-limitless format and finish options — wood-look planks, large-format concrete, marble veining, classic subway. Ideal anywhere water and heat are part of daily life, and equally at home on a backsplash or shower surround as underfoot.',
    bullets: ['Porcelain & ceramic', 'Wood-look and stone-look', 'Large-format options', 'Backsplash & surrounds'],
    image: img('g02'),
    brands: [],
  },
  {
    slug: 'doors',
    name: 'Doors & Hardware',
    blurb: 'Interior, entry, shower and closet doors — plus the hardware.',
    body: 'We carry doors alongside the floors, which means the finishes actually coordinate — and you are dealing with one supplier instead of three. Interior and entry doors, prehung units ready to install, plus shower doors, closet doors and door hardware, measured and fitted by the same team that handles your floor.',
    bullets: ['Interior & entry doors', 'Prehung units', 'Shower & closet doors', 'Door hardware'],
    image: img('door-interior-modern'),
    brands: [
      { name: 'JELD-WEN' },
      { name: 'Simpson' },
      { name: 'Millennium Collection' },
      { name: 'Talon Hardware' },
    ],
  },
];

export const services = [
  {
    title: 'Guided Selection',
    body: 'Walk the showroom with someone who knows the products. We narrow hundreds of options down to the few that suit your rooms, your traffic and your budget.',
  },
  {
    title: 'In-Home Measurement',
    body: 'Precise measurement of every room, transition and stair before a single box is ordered — so your quote reflects the actual job, not an estimate.',
  },
  {
    title: 'Professional Installation',
    body: 'Experienced installers handle subfloor prep, layout, trim and transitions, and leave the site clean. A flawless finish is the whole point.',
  },
  {
    title: 'Take Samples Home',
    body: 'Colour shifts dramatically under your own lighting. Take samples home, live with them for a few days, then decide with confidence.',
  },
];

/* The showroom gallery. `span` drives the layout accent — 'wide' items take
   two columns on larger screens, which keeps the grid from feeling uniform. */
export const gallery: { image: ImageMetadata; alt: string; span?: 'wide' }[] = [
  { image: img('g06'), alt: 'Wide view of the Boyles Flooring showroom floor with rows of plank sample racks', span: 'wide' },
  { image: img('g04'), alt: 'Waterproof luxury vinyl plank display with wood-look samples' },
  { image: img('g03'), alt: 'Carpet sample boards mounted on the showroom wall' },
  { image: img('g11'), alt: 'Hardwood sample racks beside the showroom window' },
  { image: img('g05'), alt: 'Stanton carpet and rug display in the showroom' },
  { image: img('g08'), alt: 'Rows of light-toned plank samples on the showroom floor', span: 'wide' },
  { image: img('g13'), alt: 'Sample display with a sliding barn door mounted behind it' },
  { image: img('g02'), alt: 'Tile and stone sample display stand' },
  { image: img('g16'), alt: 'Waterproof flooring sample boards with product information cards' },
  { image: img('g15'), alt: 'Showroom sample racks lit by natural light from the storefront windows' },
  { image: img('g12'), alt: 'Interior doors displayed alongside flooring sample racks' },
  { image: img('g07'), alt: 'Showroom aisle lined with flooring sample stands', span: 'wide' },
  { image: img('g10'), alt: 'Close view of a waterproof flooring display with colour range' },
  { image: img('g01'), alt: 'Long aisle of upright plank samples in the showroom' },
];

export const heroImage = img('g06');
export const storefrontImage = img('g14');
export const aboutImage = img('g15');
export const laminateDetail = img('laminate-detail');

/* Doors, so the home page shows the half of the business that is not flooring. */
export const doorShowcase = [
  { image: img('door-entry-wood'),      label: 'Entry doors',    note: 'Solid wood, glazed and craftsman styles' },
  { image: img('door-interior-modern'), label: 'Interior doors', note: 'Panel, flush and prehung units' },
  { image: img('door-wardrobe'),        label: 'Closet doors',   note: 'Mirrored and sliding wardrobe systems' },
  { image: img('door-hardware'),        label: 'Hardware',       note: 'Handles, hinges and closers' },
];
export const productsHeroImage = img('g07');
export const contactHeroImage = img('g11');
