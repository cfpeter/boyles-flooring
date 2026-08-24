# Content review checklist

The site is live with real business details, but some copy was **written for
this build** and needs a factual check before you promote the site. Nothing
below is a bug — it is a list of claims only Boyles can confirm.

## ✅ Taken verbatim from the existing site

| Item | Value |
| --- | --- |
| Phone | (661) 284-1200 |
| Email | sales@boyles-flooring.com |
| Address | 21515 Soledad Canyon Road, Suite #113, Santa Clarita, CA 91350 |
| Hours | Mon–Fri 8:30 am – 6 pm · Sat 9 am – 5 pm |
| Instagram | @boylesflooringscv |
| TikTok | @boyles.flooring |
| "Who we are" paragraph | Reused word-for-word on the home page |
| Hardwood / laminate / luxury vinyl / interior & entry doors | Named on the old homepage |

## ⚠️ Needs your confirmation

| # | Claim | Where | Why it needs checking |
| --- | --- | --- | --- |
| ~~1~~ | ~~**Carpet** is a category you sell~~ | — | **RESOLVED.** The Instagram bio reads "Carpet & Flooring Store … expertise in Floors, Doors, Carpet …" and several posts show completed carpet installs. Confirmed. |
| 2 | **Tile & Stone** is a category you sell | Home, Products, nav ticker | **Still unconfirmed, and now looks doubtful.** Inferred from one sample stand in a showroom photo. The Instagram bio lists Floors, Doors, Carpet, Shower Doors, Closet Doors and Door Hardware — no tile. Remove this category unless you do sell it. |
| 3 | "**Take samples home**" | Home → How it works | Assumed to be standard practice. Remove if you don't lend samples. |
| 4 | "**In-home measurement**" | Home → How it works | Old site says "measurement"; it does not say in-home. |
| 5 | **Service-area towns** | Contact page | A plausible Santa Clarita Valley list — edit to match where you actually go. |
| 6 | **Sunday: Closed** | Footer, Contact | Old site listed only Mon–Sat, so Sunday is an assumption. |
| 7 | Category descriptions | Products page | Accurate general flooring copy, but not specific to your brands or stock. |
| 8 | "Hundreds of samples" | Products page headline | Directional. Change the number if it overstates the showroom. |

Edit 1–6 in `src/data/site.ts` and `src/data/content.ts`; 7–8 in `src/data/content.ts`.

## ✅ Confirmed from the Instagram profile (@boylesflooringscv)

Read from the live profile on 2026-08-23:

> Carpet & Flooring Store · Boyle's Flooring SCV
> Professional expertise in **Floors, Doors, Carpet, Shower Doors, Closet Doors,
> and Door Hardware**. Upgrade your space with us!

Acted on already: carpet is confirmed, and the doors category has been widened
to **Doors & Hardware** to include prehung units, shower doors, closet doors and
door hardware — all of which the website was previously missing.

Two further things worth your decision:

| Item | Detail |
| --- | --- |
| **Name styling** | Instagram uses "Boyle's Flooring SCV" (with an apostrophe); the website uses "Boyles Flooring". Pick one and I will make it consistent. |
| **Alternate logo & tagline** | Posts use a second lockup — "Boyles Flooring **& Doors** — Style. Strength. Value." If that is the current brand, the site should use it. Send the artwork and it goes in. |


## 🏷️ Brand lists — where they came from

Each category page lists the brand lines for that surface. Sources differ, and
that matters for how confidently the site can claim them:

| Category | Brands | Source |
| --- | --- | --- |
| Hardwood | 18 | ADCO Wholesale's Engineered + Solid wood catalogue |
| Laminate | 16 | ADCO Wholesale's Laminate catalogue |
| Luxury Vinyl | 15 | ADCO Wholesale's SPC Vinyl catalogue, plus COREtec |
| Carpet | 4 | Given directly by the business |
| Tile & Stone | — | none confirmed |
| Doors & Hardware | — | none confirmed |

ADCO Wholesale (Burbank) appears to be the distributor: their brand list
includes Pacific Direct Industries and Republic Flooring, both visible on the
sample racks in Boyles' own showroom photos.

**The distinction the page makes.** Lines confirmed on the showroom floor —
Pacific Direct Industries, Republic Flooring, COREtec, plus all four carpet
brands — carry an "In store" badge. The rest are presented as available to
order through suppliers, not as stocked. That wording is deliberate: a
distributor listing a brand does not mean Boyles stocks it.

**What to confirm:**

1. Which of the distributor brands Boyles actually stocks, so more can carry
   the "In store" badge — set `onFloor: true` in `src/data/content.ts`.
2. Any brand in the list they do **not** work with, so it can be removed.
3. Brands for **Tile & Stone** and **Doors & Hardware**. Both categories
   currently show a "call us" panel instead of a brand list, which is honest
   but weaker than the others.

Deliberately not shown: the distributor's per-brand product counts (e.g.
"Eternity (88)"). Those describe the distributor's inventory, not Boyles'.

## ❌ Deliberately left out

- **Customer testimonials / reviews** — there were none to source, and inventing
  them would be fabricating social proof. If you have real Google or Yelp
  reviews, send them over and they can be added with attribution.
- **Years in business, install counts, warranty claims** — no verifiable source.
- **Prices and specific product SKUs** — nothing to base them on.
- **The shopping cart** from the old Squarespace site — it held no products.

## 📷 About the photographs

All 16 images came from the existing site and show the **showroom** — sample
racks, displays and the storefront. There are no photos of finished
installations in customers' homes.

That shaped the design: the site sells the *showroom experience* rather than
pretending to a portfolio it doesn't have. **The single highest-impact upgrade
is a set of finished-install photos** — a few well-lit rooms with completed
floors. Send them over and they can go straight into the gallery and the
category sections.

## 🔧 One setup step remaining

The contact form needs a free Web3Forms access key before it can send.
See the *Contact form* section in `README.md`. Until then the form shows a
notice and stays disabled, so no messages are lost silently.
