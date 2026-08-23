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
| 1 | **Carpet** is a category you sell | Home, Products, nav ticker | Inferred from showroom photos (Stanton display, carpet sample boards). The old site never says it. |
| 2 | **Tile & Stone** is a category you sell | Home, Products, nav ticker | Inferred from a tile/stone sample stand in the photos. Not stated on the old site. |
| 3 | "**Take samples home**" | Home → How it works | Assumed to be standard practice. Remove if you don't lend samples. |
| 4 | "**In-home measurement**" | Home → How it works | Old site says "measurement"; it does not say in-home. |
| 5 | **Service-area towns** | Contact page | A plausible Santa Clarita Valley list — edit to match where you actually go. |
| 6 | **Sunday: Closed** | Footer, Contact | Old site listed only Mon–Sat, so Sunday is an assumption. |
| 7 | Category descriptions | Products page | Accurate general flooring copy, but not specific to your brands or stock. |
| 8 | "Hundreds of samples" | Products page headline | Directional. Change the number if it overstates the showroom. |

Edit 1–6 in `src/data/site.ts` and `src/data/content.ts`; 7–8 in `src/data/content.ts`.

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
