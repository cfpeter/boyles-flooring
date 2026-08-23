/* ============================================================================
   Site content: product categories, services, showroom gallery.
   Copy here is plain text — edit freely, no HTML knowledge needed.
   ============================================================================ */
import type { ImageMetadata } from 'astro';

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

export type Category = {
  slug: string;
  name: string;
  blurb: string;
  body: string;
  bullets: string[];
  image: ImageMetadata;
};

export const categories: Category[] = [
  {
    slug: 'hardwood',
    name: 'Hardwood',
    blurb: 'Solid and engineered wood with real grain and real longevity.',
    body: 'Nothing else ages quite like wood. We carry solid and engineered hardwood across a full range of species, widths and finishes — from pale white oak to deep walnut. Engineered constructions stay stable over concrete slabs and in wider planks, so you can get the look you want in rooms where solid wood would not be the right call.',
    bullets: ['Solid & engineered', 'Wide-plank options', 'Matte to satin finishes', 'Refinishable surfaces'],
    image: img('g09'),
  },
  {
    slug: 'laminate',
    name: 'Laminate',
    blurb: 'Hard-wearing, budget-friendly, and remarkably convincing.',
    body: 'Modern laminate has come a long way. High-definition printing and embossed textures track the grain you see, and the wear layers shrug off pets, kids and busy hallways. It is the practical choice when you want the look of wood across a lot of square footage without the hardwood budget.',
    bullets: ['High scratch resistance', 'Great value per sq ft', 'Realistic wood texture', 'Fast installation'],
    image: img('g01'),
  },
  {
    slug: 'luxury-vinyl',
    name: 'Luxury Vinyl',
    blurb: 'Fully waterproof planks and tile — kitchens, baths, everywhere.',
    body: 'Luxury vinyl plank and tile is the fastest-growing floor we sell, and for good reason: it is 100% waterproof, comfortable underfoot, and tough enough for the busiest house. That makes it the go-to for kitchens, bathrooms, laundry rooms and basements — or for running one continuous floor through the whole home.',
    bullets: ['100% waterproof', 'Kid- and pet-proof wear layers', 'Rigid core stability', 'Warm and quiet underfoot'],
    image: img('g04'),
  },
  {
    slug: 'carpet',
    name: 'Carpet',
    blurb: 'Soft underfoot, with stain and pet performance built in.',
    body: 'Bedrooms, stairs and family rooms still call for carpet. We stock plush, textured, loop and patterned styles, along with performance fibres engineered to resist staining and release pet accidents. Bring your room dimensions and we will walk you through the trade-offs between feel, durability and cleanability.',
    bullets: ['Plush, textured & patterned', 'Pet-friendly performance fibres', 'Stair runners & bindings', 'Quality pad options'],
    image: img('g03'),
  },
  {
    slug: 'tile-stone',
    name: 'Tile & Stone',
    blurb: 'Porcelain, ceramic and stone looks for wet rooms and feature walls.',
    body: 'Porcelain and ceramic give you near-limitless format and finish options — wood-look planks, large-format concrete, marble veining, classic subway. Ideal anywhere water and heat are part of daily life, and equally at home on a backsplash or shower surround as underfoot.',
    bullets: ['Porcelain & ceramic', 'Wood-look and stone-look', 'Large-format options', 'Backsplash & surrounds'],
    image: img('g02'),
  },
  {
    slug: 'doors',
    name: 'Interior & Entry Doors',
    blurb: 'The finishing detail most flooring stores leave out.',
    body: 'We carry interior and entry doors alongside the floors, which means the finishes actually coordinate — and you are dealing with one supplier instead of three. Panel doors, flush slabs, barn-door hardware and entry units, measured and fitted by the same team that handles your floor.',
    bullets: ['Interior panel & flush doors', 'Entry doors', 'Barn-door hardware', 'Coordinated finishes'],
    image: img('g12'),
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
export const productsHeroImage = img('g07');
export const contactHeroImage = img('g11');
