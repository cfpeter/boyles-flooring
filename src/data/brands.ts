/* ============================================================================
   Brand catalogues.

   Structure mirrors how the manufacturer organises its own range:
     brand -> line (e.g. WoodMax) -> collection (e.g. North Forest) -> colour.

   SOURCE & RIGHTS — read before adding another brand.
   Republic Flooring's catalogue below was imported from the manufacturer's own
   public storefront (republicfloor.com): collection names, descriptions, colour
   names and SKUs are theirs, and the swatch photographs are theirs too. They
   are reproduced on the basis that Boyles is a Republic dealer — Republic racks
   appear in the showroom photos. Confirm that dealer permission covers using
   this imagery before the site moves to the real domain, and swap in Boyles'
   own swatch photography if not. Images are self-hosted in
   public/brands/republic/ rather than hot-linked, so nothing breaks when the
   manufacturer reorganises its site.

   Specifications are deliberately absent: the manufacturer's storefront does
   not publish per-colour dimensions, and guessing them would be worse than
   omitting them. Add a `specs` block per collection once confirmed.
   ============================================================================ */

export type Colour = {
  name: string;
  /** Manufacturer's own SKU, useful when ordering. */
  sku: string;
  /** Filename in public/brands/<brand>/ — empty when no swatch is available. */
  image: string;
};

export type Collection = {
  slug: string;
  title: string;
  /** Which of the brand's own lines this belongs to. */
  line: string;
  /** Which category on this site the line maps to. */
  category: string;
  description: string;
  colours: Colour[];
};

export type BrandLine = { key: string; label: string; category: string };

export type Brand = {
  slug: string;
  name: string;
  site: string;
  blurb: string;
  /** Folder under public/brands/ holding the swatch images. */
  imageDir: string;
  lines: BrandLine[];
  collections: Collection[];
};

export const brands: Brand[] = [
  {
    slug: 'republic-flooring',
    name: 'Republic Flooring',
    site: 'https://republicfloor.com',
    blurb:
      'Waterproof laminate and rigid-core vinyl built around a triple moisture barrier. One of the lines on the showroom floor, so you can walk on it before you decide.',
    imageDir: 'republic',
    lines: [
      { key: "woodmax", label: "WoodMax — Waterproof Laminate", category: "laminate" },
      { key: "pure-spc", label: "Pure SPC", category: "luxury-vinyl" },
      { key: "spc-max", label: "SPC Max", category: "luxury-vinyl" },
      { key: "designer-pro", label: "Designer Pro", category: "luxury-vinyl" },
    ],
    collections: [
    {
      slug: "malta-island-collection",
      title: "Malta Islands Collection",
      line: "woodmax",
      category: "laminate",
      description: "Republic Floor brings you closer to nature with our stunning Malta Islands Collection of laminate floors, embossed with real wood grain texture to bring the joy of nature into every room. We have scouted the world’s forests to create six realistic designs, without cutting down a single tree!\n\nRepublic laminate floors are made from the highest quality H.D.F core with a lower than standard swelling rate. They are protected with a super-durable, high quality balancing paper, and sealed completely with a third layer of high quality hot wax.\n\nOur advanced Triple Moisture Protection\n™\n technology and uncompromising manufacturing standards make Republic’s laminate floors more robust and water resistant than any other laminate floor in the world. They are practically impervious to water spills for up to 10 hours.",
      colours: [
          { name: "Colorado Gold", sku: "REMI7010", image: "remi7010.jpg" },
          { name: "Amazon Gold", sku: "REMI7030", image: "remi7030.jpg" },
          { name: "Opal Cream", sku: "REMI7040", image: "remi7040.jpg" },
          { name: "Coastal Ivory", sku: "REMI7060", image: "remi7060.jpg" },
          { name: "Ash Grey", sku: "REMI7070", image: "remi7070.jpg" },
          { name: "Cooper Dune", sku: "REMI7080", image: "remi7080.jpg" },
          { name: "Fusion Beige", sku: "REMI7090", image: "remi7090.jpg" }
      ],
    },
    {
      slug: "european-lite-collection",
      title: "European Collection",
      line: "woodmax",
      category: "laminate",
      description: "Republic brings to your home the classic look of Europe – venerable oaken floors, rich with history and tradition expressed by wood-like accented grain, dents and cracks that give off the allure and mystery of old-continent glory.\n\nThe stunning effects are achieved by medium to heavy embossing on laminate that make the strip plank look practically identical to the original wood floor – with durability and affordability no wood can match.\n\nThe Republic European Lite Collection carries a limited 25 years residential warranty.",
      colours: [
          { name: "Amsterdam", sku: "REAM41", image: "ream41.jpg" },
          { name: "Milano", sku: "REMI44", image: "remi44.jpg" },
          { name: "Rome", sku: "RERO47", image: "rero47.jpg" },
          { name: "Helsinki", sku: "REHE49", image: "rehe49.jpg" }
      ],
    },
    {
      slug: "platinum-collection",
      title: "Platinum Collection",
      line: "woodmax",
      category: "laminate",
      description: "Republic Floors takes ambience and class to new heights with its amazing Platinum Collection. Carrying a limited 30 years residential warranty, the Platinum Collection brings to your house a truly astonishing floor.\n\nThe unparalleled attention to detail and craftsmanship makes the Platinum Collection at first sight almost indistinguishable from real wood floors-even for experts!\n\nThe Platinum Collection features a number of species of wood, with the charm and unique signature of each recreated in laminated floor. The edges of the planks are rounded on both sides and ends, creating vibrant 'plank effect' that looks and feel just like real wood floor. The Platinum Collection varies from slightly-distressed look, with some chisel marks on the plank, to medium-distressed look.\n\nAll Platinum Collection floors are manufactured with Republic's proprietary Triple Moisture Protection™ technology for unparalleled durability.",
      colours: [
          { name: "Rustic Apple", sku: "RERA210", image: "rera210.jpg" },
          { name: "Golden Apple", sku: "REGA220", image: "rega220.jpg" },
          { name: "Natural Acacia", sku: "RENA280", image: "rena280.jpg" },
          { name: "Brazilian Tigerwood", sku: "REBT290", image: "rebt290.jpg" }
      ],
    },
    {
      slug: "bear-woods-collection",
      title: "Bear Woods Collection",
      line: "woodmax",
      category: "laminate",
      description: "Our unique combination of quality raw materials, advanced Triple Moisture Protection PLUS technology, and uncompromising manufacturing standards make REPUBLIC WoodMax floors more durable and water resistant than any other floor in the world. Up to 300 hours waterproof.\n\nEvery plank and panel of a Republic floor is constructed and sealed individually. They click together seamlessly, making them easy to install, so that large floor areas can be covered quickly and at minimal cost.\n\nThe natural look and embossed texture of our WoodMax flooring is so realistic that people can’t resist stroking the wood grain to check if it is actually wood. Visit our stores to feel it for yourself!",
      colours: [
          { name: "Alaska Tan", sku: "REBW9010", image: "rebw9010.jpg" },
          { name: "Prada Sunrise", sku: "REBW9020", image: "rebw9020.jpg" },
          { name: "Bianco Romano", sku: "REBW9030", image: "rebw9030.jpg" },
          { name: "Siena Beige", sku: "REBW9040", image: "rebw9040.jpg" },
          { name: "Himalayan Blue", sku: "REBW9050", image: "rebw9050.jpg" },
          { name: "Astoria Gold", sku: "REBW9060", image: "rebw9060.jpg" },
          { name: "Kashmir Beige", sku: "REBW9070", image: "rebw9070.jpg" },
          { name: "White Tiger", sku: "REBW9080", image: "rebw9080.jpg" },
          { name: "Blue Dunes", sku: "REBW9090", image: "rebw9090.jpg" },
          { name: "Crystal Yellow", sku: "REBW9100", image: "rebw9100.jpg" }
      ],
    },
    {
      slug: "sharc-north-forest",
      title: "North Forest Collection",
      line: "woodmax",
      category: "laminate",
      description: "Our unique combination of quality raw materials, advanced Triple Moisture Protection PLUS technology, and uncompromising manufacturing standards make REPUBLIC WoodMax floors more durable and water resistant than any other floor in the world. Up to 300 hours waterproof.\n\nEvery plank and panel of a Republic floor is constructed and sealed individually. They click together seamlessly, making them easy to install, so that large floor areas can be covered quickly and at minimal cost.\n\nThe natural look and embossed texture of our WoodMax flooring is so realistic that people can’t resist stroking the wood grain to check if it is actually wood. Visit our stores to feel it for yourself!",
      colours: [
          { name: "Nordic River", sku: "RENF8010", image: "renf8010.jpg" },
          { name: "Cascade Coral", sku: "RENF8020", image: "renf8020.jpg" },
          { name: "Emerald Pearl", sku: "RENF8030", image: "renf8030.jpg" },
          { name: "Norwegian Rose", sku: "RENF8040", image: "renf8040.jpg" },
          { name: "Granville", sku: "RENF8050", image: "renf8050.jpg" },
          { name: "Sand River", sku: "RENF8060", image: "renf8060.jpg" },
          { name: "Rock Cream", sku: "RENF8070", image: "renf8070.jpg" },
          { name: "Spanish Gold", sku: "RENF8080", image: "renf8080.jpg" },
          { name: "Creama Valencia", sku: "RENF8090", image: "renf8090.jpg" },
          { name: "Oman Beige", sku: "RENF8100", image: "renf8100.jpg" },
          { name: "Stantead Grey", sku: "RENF8110", image: "renf8110.jpg" },
          { name: "Charcoal Grey", sku: "RENF8120", image: "renf8120.jpg" },
          { name: "Desert Sunrise", sku: "RENF8130", image: "renf8130.jpg" },
          { name: "Verona Light", sku: "RENF8140", image: "renf8140.jpg" }
      ],
    },
    {
      slug: "pure-spc-countryside-collection",
      title: "Countryside Collection",
      line: "pure-spc",
      category: "luxury-vinyl",
      description: "The Countryside collection from Republic provides the soft, neutral colors of the backwoods while staying true to our very own technology that provides durability and is 100% waterproof.\n\nThe new Republic Pure SPC features Republic’s proprietary technology that makes the floors completely inert and waterproof and carries a limited 25 year residential warranty and a limited 10 year commercial warranty.\n\nRepublic’s Pure SPC floors are stronger and snap into place much easier than other floors. They also last longer and, true to the Republic way, are completely green.",
      colours: [
          { name: "Eastern Cottonwood", sku: "RECS2101", image: "recs2101.jpg" },
          { name: "American Hornbeam", sku: "RECS2102", image: "recs2102.jpg" },
          { name: "Aspen", sku: "RECS2105", image: "recs2105.jpg" }
      ],
    },
    {
      slug: "pure-spc-great-oregon-oak-collection",
      title: "Great Oregon Oak Collection",
      line: "pure-spc",
      category: "luxury-vinyl",
      description: "The mighty, native oaks of the Pacific Northwest are known for their enduring strength. The Republic Great Oregon Oak Collection provides you with the natural beauty and durability of these majestic trees. Republic's new Extra-Wide floor features wider and longer planks for a more authentic old-floor look and feel.\n\nThe new Republic Pure SPC features Republic’s proprietary technology that makes the floors completely inert and waterproof. It carries a limited 25 year residential warranty and a limited 10 year commercial warranty. In addition, our all-new anti-bacterial EVA underlayment padding comes attached to floorplanks. Not only does this make installation much easier and quicker - it also offers excellent noise insulation never available before.\n\nRepublic’s Pure SPC floors are stronger and snap into place much easier than other floors. They also last longer and true to the Republic way, are completely green.",
      colours: [
          { name: "Water Oak", sku: "REOR2301", image: "reor2301.jpg" },
          { name: "Oregon White Oak", sku: "REOR2304", image: "reor2304.jpg" },
          { name: "Sessile Oak", sku: "REOR2305", image: "reor2305.jpg" },
          { name: "Gray Oak", sku: "REOR2306", image: "reor2306.jpg" },
          { name: "Harvard Oak", sku: "REOR2307", image: "reor2307.jpg" }
      ],
    },
    {
      slug: "pure-spc-mountain-oak",
      title: "Mountain Oak Collection",
      line: "pure-spc",
      category: "luxury-vinyl",
      description: "For those who enjoy the view of the snow capped Denali, or the breezy, calm feel of the live oaks on the coast of Carmel, our Mountain Oak Collection is right for you.\n\nRepublic’s own technology has ensured that these floors remain completely durable and 100% waterproof, while giving the look and feel of real hardwood flooring. Republic's new Extra-Wide floor features wider and longer planks for a more authentic old-floor look and feel.\n\nThe new Republic Pure SPC features Republic’s proprietary technology that makes the floors completely inert and waterproof. It carries a limited 25 year residential warranty and a limited 10 year commercial warranty.\n\nIn addition, our all-new anti-bacterial EVA underlayment padding comes attached to the floor planks.\n\nNot only does this make installation much easier and quicker - it also offers excellent noise insulation never available before.\n\nRepublic’s Pure SPC floors are stronger and snap into place much easier than other floors. They also last longer and true to the Republic way, are completely green.",
      colours: [
          { name: "Denali", sku: "REMO2501", image: "remo2501.jpg" },
          { name: "Black Mountain", sku: "REMO2506", image: "remo2506.jpg" }
      ],
    },
    {
      slug: "westwood",
      title: "Westwood Collection",
      line: "pure-spc",
      category: "luxury-vinyl",
      description: "The Republic Westwood collection, with its beveled edges and realistic grains, looks practically identical to real wood flooring, but is far more durable and affordable than ever AND is 100% waterproof!\n\nRepublic's new Extra-Wide floor features wider and longer planks for a more authentic old-floor look and feel.\n\nThe new Republic Pure SPC features Republic’s proprietary technology that makes the floors completely inert and waterproof. It carries a limited 25 year residential warranty and a limited 10 year commercial warranty.\n\nIn addition, our all-new anti-bacterial EVA underlayment padding comes attached to the floor planks. Not only does this make installation much easier and quicker - it also offers excellent noise insulation never available before.\n\nRepublic’s Pure SPC floors are stronger and snap into place much easier than other floors. They also last longer and true to the Republic way, are completely green.",
      colours: [
          { name: "Platinum", sku: "RETWY3303", image: "retwy3303.jpg" },
          { name: "Greystone", sku: "RETWY3305", image: "retwy3305.jpg" },
          { name: "Beverly Glen", sku: "RETWY3304", image: "retwy3304.jpg" }
      ],
    },
    {
      slug: "angel-wood-collection",
      title: "Angel Woods",
      line: "spc-max",
      category: "luxury-vinyl",
      description: "As someone once said Republic Pure SPC MAX: “You can’t have a floor that looks more like real wood without cutting down a tree.”\n\nThe naturally harmonious surface virtually never wears out. The core of the floor is 40% denser SPC floor made anywhere providing you with strength, durability and stability that will last as long as you own the floor – and then some. \n\nRepublic Pure SPC MAX: MAXimum strength, MAXimum durability, MAXimum stability, MAXimum style.",
      colours: [
          { name: "Amarillo Pearl", sku: "REAW8401", image: "reaw8401.jpg" },
          { name: "Canadian Sage", sku: "REAW8403", image: "reaw8403.jpg" },
          { name: "Butterfly Beige", sku: "REAW8402", image: "reaw8402.jpg" },
          { name: "Camila Brown", sku: "REAW8404", image: "reaw8404.jpg" }
      ],
    },
    {
      slug: "pure-spc-max-silver-lake-flooring-collection",
      title: "Silver Lake Collection",
      line: "spc-max",
      category: "luxury-vinyl",
      description: "The quiet, classic look of wood floors comes to full life in the Silver Lake line. Blending in unobtrusively, this waterproof floor gives a neutral background to furnishings and decorations of any genre.\n\nAs someone once said Republic Pure SPC MAX: “You can’t have a floor that looks more like real wood without cutting down a tree.”\n\nThe naturally harmonious surface virtually never wears out. The core of the floor is 40% denser SPC floor made anywhere providing you with strength, durability and stability that will last as long as you own the floor – and then some.\n\nRepublic Pure SPC MAX: MAXimum strength, MAXimum durability, MAXimum stability, MAXimum style.",
      colours: [
          { name: "Dynamic Beige", sku: "RESVE5105", image: "resve5105.jpg" }
      ],
    },
    {
      slug: "green-mountain-collection",
      title: "Green mountain Collection",
      line: "spc-max",
      category: "luxury-vinyl",
      description: "As someone once said Republic Pure SPC MAX: “You can’t have a floor that looks more like real wood without cutting down a tree.”\n\nThe naturally harmonious surface virtually never wears out. The core of the floor is 40% denser SPC floor made anywhere providing you with strength, durability and stability that will last as long as you own the floor – and then some.\n\nRepublic Pure SPC MAX: MAXimum strength, MAXimum durability, MAXimum stability, MAXimum style.",
      colours: [
          { name: "California White", sku: "REGM8501", image: "regm8501.jpg" },
          { name: "Carmel Cream", sku: "REGM8502", image: "regm8502.jpg" },
          { name: "Capri Tan", sku: "REGM8504", image: "regm8504.jpg" },
          { name: "Cashmere Gold", sku: "REGM8503", image: "regm8503.jpg" },
          { name: "Crystal Beach", sku: "REGM8505", image: "regm8505.jpg" }
      ],
    },
    {
      slug: "white-river-collection",
      title: "White River Collection",
      line: "spc-max",
      category: "luxury-vinyl",
      description: "As someone once said Republic Pure SPC MAX: “You can’t have a floor that looks more like real wood without cutting down a tree.”\n\nThe naturally harmonious surface virtually never wears out. The core of the floor is 40% denser SPC floor made anywhere providing you with strength, durability and stability that will last as long as you own the floor – and then some.\n\nRepublic Pure SPC MAX: MAXimum strength, MAXimum durability, MAXimum stability, MAXimum style.",
      colours: [
          { name: "Coffee Pearl", sku: "REWR8604", image: "rewr8604.jpg" },
          { name: "Cream Violet", sku: "REWR8601", image: "rewr8601.jpg" },
          { name: "Coral Gold", sku: "REWR8602", image: "rewr8602.jpg" },
          { name: "Colonial Cream", sku: "REWR8603", image: "rewr8603.jpg" },
          { name: "Crema Canyon", sku: "REWR8605", image: "rewr8605.jpg" },
          { name: "Desert Sunrise", sku: "REWR8606", image: "rewr8606.jpg" },
          { name: "Georgia Gray", sku: "REWR8608", image: "rewr8608.jpg" }
      ],
    },
    {
      slug: "country-gem-collection",
      title: "Country Gem",
      line: "spc-max",
      category: "luxury-vinyl",
      description: "As someone once said Republic Pure SPC MAX: “You can’t have a floor that looks more like real wood without cutting down a tree.”\n\nThe naturally harmonious surface virtually never wears out. The core of the floor is 40% denser SPC floor made anywhere providing you with strength, durability and stability that will last as long as you own the floor – and then some.\n\nRepublic Pure SPC MAX: MAXimum strength, MAXimum durability, MAXimum stability, MAXimum style.",
      colours: [
          { name: "Austin", sku: "RECG3001", image: "recg3001.jpg" },
          { name: "Colton", sku: "RECG3002", image: "recg3002.jpg" },
          { name: "Bentley", sku: "RECG3003", image: "recg3003.jpg" },
          { name: "Hayes", sku: "RECG3004", image: "recg3004.jpg" },
          { name: "Jackson", sku: "RECG3005", image: "recg3005.jpg" }
      ],
    },
    {
      slug: "sierra-collection",
      title: "Sierra Collection",
      line: "spc-max",
      category: "luxury-vinyl",
      description: "As someone once said Republic Pure SPC MAX: “You can’t have a floor that looks more like real wood without cutting down a tree.”\n\nThe naturally harmonious surface virtually never wears out. The core of the floor is 40% denser SPC floor made anywhere providing you with strength, durability and stability that will last as long as you own the floor – and then some.\n\nRepublic Pure SPC MAX: MAXimum strength, MAXimum durability, MAXimum stability, MAXimum style.",
      colours: [
          { name: "Isabel", sku: "REED2001", image: "reed2001.jpg" },
          { name: "Boggs", sku: "REED2002", image: "reed2002.jpg" },
          { name: "Ellen", sku: "REED2003", image: "reed2003.jpg" },
          { name: "Clark", sku: "REED2004", image: "reed2004.jpg" }
      ],
    },
    {
      slug: "corsica-mountains",
      title: "Corsica Mountains Collection",
      line: "spc-max",
      category: "luxury-vinyl",
      description: "As someone once said Republic Pure SPC MAX: “You can’t have a floor that looks more like real wood without cutting down a tree.”\n\nThe naturally harmonious surface virtually never wears out. The core of the floor is 40% denser SPC floor made anywhere providing you with strength, durability and stability that will last as long as you own the floor – and then some.\n\nRepublic Pure SPC MAX: MAXimum strength, MAXimum durability, MAXimum stability, MAXimum style.",
      colours: [
          { name: "Bastia", sku: "REHR8702", image: "rehr8702.jpg" },
          { name: "Filitosa", sku: "REHR8704", image: "rehr8704.jpg" },
          { name: "Rocca", sku: "REHR8703", image: "rehr8703.jpg" },
          { name: "Montane", sku: "REHR8701", image: "rehr8701.jpg" }
      ],
    },
    {
      slug: "north-water-collection",
      title: "North Water",
      line: "spc-max",
      category: "luxury-vinyl",
      description: "As someone once said Republic Pure SPC MAX: “You can’t have a floor that looks more like real wood without cutting down a tree.”\n\nThe naturally harmonious surface virtually never wears out. The core of the floor is 40% denser SPC floor made anywhere providing you with strength, durability and stability that will last as long as you own the floor – and then some.\n\nRepublic Pure SPC MAX: MAXimum strength, MAXimum durability, MAXimum stability, MAXimum style.",
      colours: [
          { name: "Desert Taupe", sku: "RENW7001", image: "renw7001.jpg" },
          { name: "Costa Wyoming", sku: "RENW7002", image: "renw7002.jpg" },
          { name: "Rainforest Brown", sku: "RENW7003", image: "renw7003.jpg" },
          { name: "Clay Pebble", sku: "RENW7004", image: "renw7004.jpg" },
          { name: "New Caledonia", sku: "RENW7005", image: "renw7005.jpg" }
      ],
    },
    {
      slug: "south-rose",
      title: "South Rose Collection",
      line: "spc-max",
      category: "luxury-vinyl",
      description: "As someone once said Republic Pure SPC MAX: “You can’t have a floor that looks more like real wood without cutting down a tree.”\n\nThe naturally harmonious surface virtually never wears out. The core of the floor is 40% denser SPC floor made anywhere providing you with strength, durability and stability that will last as long as you own the floor – and then some.\n\nRepublic Pure SPC MAX: MAXimum strength, MAXimum durability, MAXimum stability, MAXimum style.",
      colours: [
          { name: "Sahara Pental", sku: "RESR8001", image: "resr8001.jpg" },
          { name: "Dynasty Camel", sku: "RESR8002", image: "resr8002.jpg" },
          { name: "Paradiso Bash", sku: "RESR8003", image: "resr8003.jpg" },
          { name: "Sequoia Pale", sku: "RESR8004", image: "resr8004.jpg" }
      ],
    },
    {
      slug: "deep-forest-collection",
      title: "Deep Forest Collection",
      line: "spc-max",
      category: "luxury-vinyl",
      description: "As someone once said Republic Pure SPC MAX: “You can’t have a floor that looks more like real wood without cutting down a tree.”\n\nThe naturally harmonious surface virtually never wears out. The core of the floor is 40% denser SPC floor made anywhere providing you with strength, durability and stability that will last as long as you own the floor – and then some.\n\nRepublic Pure SPC MAX: MAXimum strength, MAXimum durability, MAXimum stability, MAXimum style.",
      colours: [
          { name: "Light Thunder", sku: "REDF6001", image: "redf6001.jpg" },
          { name: "Ivory Buff", sku: "REDF6002", image: "redf6002.jpg" },
          { name: "Dakota Mahogany", sku: "REDF6003", image: "redf6003.jpg" },
          { name: "Hurricane Tawny", sku: "REDF6004", image: "redf6004.jpg" }
      ],
    },
    {
      slug: "misty-tree-collection",
      title: "Misty Tree",
      line: "spc-max",
      category: "luxury-vinyl",
      description: "As someone once said Republic Pure SPC MAX: “You can’t have a floor that looks more like real wood without cutting down a tree.”\n\nThe naturally harmonious surface virtually never wears out. The core of the floor is 40% denser SPC floor made anywhere providing you with strength, durability and stability that will last as long as you own the floor – and then some.\n\nRepublic Pure SPC MAX: MAXimum strength, MAXimum durability, MAXimum stability, MAXimum style.",
      colours: [
          { name: "Sunset Ivory", sku: "REMT75004", image: "remt75004.jpg" },
          { name: "Lavender Light", sku: "REMT75005", image: "remt75005.jpg" },
          { name: "Namib Mist", sku: "REMT75006", image: "remt75006.jpg" },
          { name: "Splendor Satin", sku: "REMT75003", image: "remt75003.jpg" },
          { name: "Creama Brazil", sku: "REMT75002", image: "remt75002.jpg" },
          { name: "Bianco Tulum", sku: "REMT75001", image: "remt75001.jpg" }
      ],
    },
    {
      slug: "pure-spc-max-blackwater-canyon-collection",
      title: "Blackwater Canyon Collection",
      line: "spc-max",
      category: "luxury-vinyl",
      description: "The quiet, classic look of wood floors comes to full life in the Blackwater Canyon line. Blending in unobtrusively, the floor gives a neutral background to furnishings and decorations of any genre.\n\nAs someone once said Republic Pure SPC MAX: “You can’t have a floor that looks more like real wood without cutting down a tree.”\n\nThe naturally harmonious surface virtually never wears out. The core of the floor is 40% denser SPC floor made anywhere providing you with strength, durability and stability that will last as long as you own the floor – and then some.\n\nRepublic Pure SPC MAX: MAXimum strength, MAXimum durability, MAXimum stability, MAXimum style.",
      colours: [
          { name: "Zurich Tan", sku: "REBW63101", image: "rebw63101.jpg" },
          { name: "Texas Brown", sku: "REBW63103", image: "rebw63103.jpg" },
          { name: "Swiss Light", sku: "REBW63102", image: "rebw63102.jpg" },
          { name: "Edmonton Beige", sku: "REBW63105", image: "rebw63105.jpg" },
          { name: "Courtyard Grey", sku: "REBW63106", image: "rebw63106.jpg" }
      ],
    },
    {
      slug: "pure-spc-max-the-woodland-oak",
      title: "The Woodland Oak",
      line: "spc-max",
      category: "luxury-vinyl",
      description: "The rustic, homey ambience of a country estate blooms to full life with every floor in the Republic Pure SPC MAX Wood Oak collection. But while it exudes Old-world cozy warmth, it’s 100% waterproof, giving you quality, strength and durability unlike any flooring ever made.\n\nThe beauty of its exotic wood surface hides a floor that virtually never wears out. Its core is 40% more dense than any SPC floor made anywhere, so it never shrinks or expands, giving you stability that will last as long as you own the floor – and then some.\n\nRepublic Pure SPC MAX: MAXimum strength, MAXimum durability, MAXimum stability, MAXimum style",
      colours: [
          { name: "Canyon Oak", sku: "REWO4102", image: "rewo4102.jpg" },
          { name: "Southern Oak", sku: "REWVE4103", image: "rewve4103.jpg" },
          { name: "Bear Oak", sku: "bear-oak", image: "bear-oak.jpg" },
          { name: "Valley Oak", sku: "REWO4101", image: "rewo4101.jpg" },
          { name: "Chestnut Oak", sku: "REWO4106", image: "rewo4106.jpg" },
          { name: "Arizona White Oak", sku: "REWO4105", image: "rewo4105.jpg" },
          { name: "Post Oak", sku: "REWO4107", image: "rewo4107.jpg" }
      ],
    },
    {
      slug: "walunt-hills-collection",
      title: "Walnut Hills Collection",
      line: "spc-max",
      category: "luxury-vinyl",
      description: "The quiet, classic look of wood floors comes to full life in the Walunt Hillsline. Blending in unobtrusively, the floor gives a neutral background to furnishings and decorations of any genre.\n\nAs someone once said Republic Pure SPC MAX: “You can’t have a floor that looks more like real woodwithout cutting down a tree.”\n\nThe naturally harmonious surface virtually never wears out. The core of the floor is 40% denser SPC floor made anywhere providing you with strength, durability and stability that will last as long as you own the floor – and then some.\n\nRepublic Pure SPC MAX: MAXimum strength, MAXimum durability, MAXimum stability, MAXimum style.",
      colours: [
          { name: "Granito Nero", sku: "REWH5501", image: "rewh5501.jpg" },
          { name: "Graphite Grey", sku: "REWH5502", image: "rewh5502.jpg" },
          { name: "Light Sand", sku: "REWH5503", image: "rewh5503.jpg" },
          { name: "Mountain Tan", sku: "REWH5504", image: "rewh5504.jpg" },
          { name: "Gray Mist", sku: "REWH5505", image: "rewh5505.jpg" }
      ],
    },
    {
      slug: "pure-spc-max-the-pacific-oak-collection",
      title: "The Pacific Oak Collection",
      line: "spc-max",
      category: "luxury-vinyl",
      description: "The Republic Pure SPC MAX Pacific Oak collection brings home the free-spirited ease of California. Its surface is textured just enough to give it a unique character, but not so much as to call attention to itself. But the “live and let live” aura conceals its super-tough 100% waterproof strength and durability that’s unlike any flooring ever made.\n\nAny The Republic Pure SPC MAX Pacific Oak floor you choose will grant you a wood surface that will never fade and virtually never wears out. Its core is 40% more dense than any SPC floor made anywhere, so it never shrinks or expands, giving you stability that will last as long as you own it – and then some.\n\nRepublic Pure SPC MAX: MAXimum strength, MAXimum durability, MAXimum stability, MAXimum style",
      colours: [
          { name: "Coffee Berry", sku: "REPO4002", image: "repo4002.jpg" },
          { name: "Coyote Brush", sku: "REPO4001", image: "repo4001.jpg" },
          { name: "California Buckeye", sku: "REPO4003", image: "repo4003.jpg" },
          { name: "Western Fir", sku: "REPO4004", image: "repo4004.jpg" },
          { name: "Monterey Cypress", sku: "REPO4005", image: "repo4005.jpg" }
      ],
    },
    {
      slug: "pure-spc-max-clover-creek-collection",
      title: "Clover Creek Collection",
      line: "spc-max",
      category: "luxury-vinyl",
      description: "Nothing in the world looks like a worn, lived-on wood floor – and the Clover Creek collection of Republic Pure SPC MAX lavishly replicates the look to perfection.\n\nAs someone once said “You can’t have a floor that looks more like real wood without cutting down a tree.” Indeed.\n\nScuffed, stressed and “worn” looking, the any Clover Creek surface hides a floor that’s unlike any other. Its core is 40% more dense than any SPC floor made anywhere, giving it strength, durability and stability that will last as long as you own the floor – and then some.\n\nRepublic Pure SPC MAX: MAXimum strength, MAXimum durability, MAXimum stability, MAXimum style.",
      colours: [
          { name: "Tropical Malaga", sku: "RECC5301", image: "recc5301.jpg" },
          { name: "Tiger Beige", sku: "RECC5302", image: "recc5302.jpg" },
          { name: "Toros Grey", sku: "RECC5303", image: "recc5303.jpg" }
      ],
    },
    {
      slug: "pure-spc-max-glacier-point-collection",
      title: "Glacier Point Collection",
      line: "spc-max",
      category: "luxury-vinyl",
      description: "The broad, generous planks of Glacier Point floors give the quiet, secure air of luxury and wealth. The natural, veined look gives any room or hall the aura of self-confident that is the result of ample resources and strength.\n\nThe expressive, rich surface virtually never wears out,The core of the floor is 40% more dense than any SPC floor made anywhere granting your floor strength, durability and stability that will last for as long as you own it – and then some.\n\nAnd as someone once said Republic Pure SPC MAX:“You can’t have a floor that looks more like real wood without cutting downa tree.”\n\nRepublic Pure SPC MAX: MAXimum strength, MAXimum durability, MAXimum stability, MAXimum style.",
      colours: [
          { name: "Sahara Beige", sku: "REGVE5201", image: "regve5201.jpg" },
          { name: "Silver Pearl", sku: "REGVE5203", image: "regve5203.jpg" },
          { name: "Sydney Cedar", sku: "REGVE5204", image: "regve5204.jpg" },
          { name: "Super Gray", sku: "REGVE5205", image: "regve5205.jpg" },
          { name: "Virginia Mist", sku: "REGVE5206", image: "regve5206.jpg" }
      ],
    },
    {
      slug: "bridge-river-collection",
      title: "Bridge River",
      line: "spc-max",
      category: "luxury-vinyl",
      description: "As someone once said Republic Pure SPC MAX: “You can’t have a floor that looks more like real wood without cutting down a tree.”\n\nThe naturally harmonious surface virtually never wears out. The core of the floor is 40% denser SPC floor made anywhere providing you with strength, durability and stability that will last as long as you own the floor – and then some.\n\nRepublic Pure SPC MAX: MAXimum strength, MAXimum durability, MAXimum stability, MAXimum style.",
      colours: [
          { name: "Imperial Coffee", sku: "REBR5001", image: "rebr5001.jpg" },
          { name: "Elegant Sand", sku: "REBR5002", image: "rebr5002.jpg" },
          { name: "Magma Bordeaux", sku: "REBR5003", image: "rebr5003.jpg" },
          { name: "Ginger Silk", sku: "REBR5004", image: "rebr5004.jpg" },
          { name: "Oasis Eggshell", sku: "REBR5005", image: "rebr5005.jpg" },
          { name: "Cabernet Brown", sku: "REBR5006", image: "rebr5006.jpg" },
          { name: "Florencia Toffee", sku: "REBR5007", image: "rebr5007.jpg" }
      ],
    },
    {
      slug: "summer-lake-collection",
      title: "Summer Lake Collection",
      line: "spc-max",
      category: "luxury-vinyl",
      description: "As someone once said Republic Pure SPC MAX: “You can’t have a floor that looks more like real wood without cutting down a tree.”\n\nThe naturally harmonious surface virtually never wears out. The core of the floor is 40% denser SPC floor made anywhere providing you with strength, durability and stability that will last as long as you own the floor – and then some.\n\nRepublic Pure SPC MAX: MAXimum strength, MAXimum durability, MAXimum stability, MAXimum style",
      colours: [
          { name: "Light Dune", sku: "RESL64001", image: "resl64001.jpg" },
          { name: "Paradiso Classic", sku: "RESL64002", image: "resl64002.jpg" },
          { name: "Atlantis Cream", sku: "RESL64003", image: "resl64003.jpg" },
          { name: "Imperial Red", sku: "RESL64004", image: "resl64004.jpg" },
          { name: "Ivory Fantasy", sku: "RESL64005", image: "resl64005.jpg" }
      ],
    },
    {
      slug: "designer-pro-clear-creek",
      title: "Clear Creek",
      line: "designer-pro",
      category: "luxury-vinyl",
      description: "Echoing the untainted streams of the backwoods, Republic’s Clear Creek collection offers relaxing shades of enduring natural beauty. Long planks of wood-look vinyl create a real sense of calm, with their rippling texture and solid footings. Like a creek than never stops flowing, your floor will give you decades of gratification.\n\nThis Designer Pro flooring series is based on our strongest and most stable Pure SPC Max flooring range, with a thicker sound-proof underlay and textured vinyl overlay. It comes with a limited 50 year residential warranty and a 10 year warranty for commercial premises, for maximum peace of mind. Enjoy the calming textures of Designer Pro wood-style flooring, reinforced with the latest manufacturing techniques.",
      colours: [
          { name: "European Ash", sku: "RECC9380", image: "recc9380.jpg" },
          { name: "Wyoming Brown", sku: "RECC9381", image: "recc9381.jpg" },
          { name: "Lincoln Oak", sku: "RECC9382", image: "recc9382.jpg" },
          { name: "Beaman Oak", sku: "RECC9383", image: "recc9383.jpg" }
      ],
    },
    {
      slug: "designer-pro-the-cliffs",
      title: "The Cliffs XL",
      line: "designer-pro",
      category: "luxury-vinyl",
      description: "The Republic The Cliffs flooring range brings home nature’s most dramatic landscapes and the awe-inspiring feeling of standing on a mountain and enjoying breathtaking views. With the world’s most beautiful designs at your feet, combining core strength and cushioned softness, you will feel like you are walking on air!\n\nThis Designer Pro flooring series is based on our strongest and most stable Pure SPC Max flooring range, with a thicker sound-proof underlay and textured vinyl overlay. It comes with a limited 50 year residential warranty and a 10 year warranty for commercial premises, for maximum peace of mind. Enjoy the dramatic landscapes of Designer Pro wood-style flooring, reinforced with the latest manufacturing techniques.",
      colours: [
          { name: "European Beech", sku: "RELC9350", image: "relc9350.jpg" },
          { name: "Bay Laurel", sku: "RELC9351", image: "relc9351.jpg" },
          { name: "English Oak", sku: "RELC9352", image: "relc9352.jpg" },
          { name: "Silver Birch", sku: "RELC9353", image: "relc9353.jpg" },
          { name: "Northern Oak", sku: "RELC9354", image: "relc9354.jpg" },
          { name: "Sweet Chestnut", sku: "RELC9355", image: "relc9355.jpg" },
          { name: "Mulberry Oak", sku: "RELC9356", image: "relc9356.jpg" },
          { name: "American Elm", sku: "RELC9357", image: "relc9357.jpg" }
      ],
    },
    {
      slug: "pure-spc-max-the-creek-collection",
      title: "The Creek Collection",
      line: "designer-pro",
      category: "luxury-vinyl",
      description: "Bold Statements in Scale and Style Transform any space with bold faux wood Pure SPC Max from our The Creek Collection. These extra-long and super-wide planks create our most dramatic flooring collection, with nine sensational wood designs. Ideal for commercial spaces, this collection enables you to enrich your environment with the grandeur of natural wood.\n\nThe robust surface of Pure SPC MAX virtually never wears out. Its core is 40% denser than any other WPC or SPC vinyl floor, providing you with strength, durability and stability that will last as long as you own the floor – and then some!\n\nRepublic Pure SPC MAX: MAXimum strength, MAXimum durability, MAXimum stability, MAXimum style.",
      colours: [
          { name: "African Desert", sku: "RELC8201", image: "relc8201.jpg" },
          { name: "Snow Drift", sku: "RELC8202", image: "relc8202.jpg" },
          { name: "Stormy Grey", sku: "RELC8203", image: "relc8203.jpg" },
          { name: "Ural Gray", sku: "RELC8204", image: "relc8204.jpg" },
          { name: "Jet Mist", sku: "RELC8205", image: "relc8205.jpg" },
          { name: "Baltic Brown", sku: "RELC8206", image: "relc8206.jpg" },
          { name: "Majestic Valley", sku: "RELC8207", image: "relc8207.jpg" },
          { name: "River Grey", sku: "RELC8208", image: "relc8208.jpg" }
      ],
    },
    {
      slug: "the-meadows",
      title: "The Meadows Collection",
      line: "designer-pro",
      category: "luxury-vinyl",
      description: "The long and extra-long SPC Max planks of our The Meadows Collection will make a dramatic statement in any large room.\n\nThese realistic wood floor planks celebrate the grandeur of tall trees without sacrificing a single trunk. Embrace the stalwarts of the natural world with a choice of three different grain patterns in nine authentic colors.\n\nRepublic Pure SPC MAX: MAXimum strength, MAXimum durability, MAXimum stability, MAXimum style",
      colours: [
          { name: "Desert Blend", sku: "RELM8101", image: "relm8101.jpg" },
          { name: "Iris Tan", sku: "RELM8102", image: "relm8102.jpg" },
          { name: "Princess Hazel", sku: "RELM8103", image: "relm8103.jpg" },
          { name: "White Reef", sku: "RELM8104", image: "relm8104.jpg" },
          { name: "Oasis Grey", sku: "RELM8105", image: "relm8105.jpg" },
          { name: "Harvest Cream", sku: "RELM8106", image: "relm8106.jpg" },
          { name: "Gray Stream", sku: "RELM8107", image: "relm8107.jpg" },
          { name: "Burberry Light", sku: "RELM8108", image: "relm8108.jpg" }
      ],
    },
    {
      slug: "designer-pro-the-rock",
      title: "The Rock",
      line: "designer-pro",
      category: "luxury-vinyl",
      description: "The Republic The Rock collection will become the bedrock of your home. Extra-wide planks with v-groove finishing combine to create a seamless floor of timeless beauty in classic neutral tones. Designed to blend with other interior features, these elegant designs set the foundations for any modern or traditional furnishing style.\n\nThis Designer Pro flooring series is based on our strongest and most stable Pure SPC Max flooring range, with a thicker sound-proof underlay and textured vinyl overlay. It comes with a limited 50 year residential warranty and a 10 year warranty for commercial premises, for maximum peace of mind. Enjoy the classic elegance of Designer Pro wood-style flooring, reinforced with the latest manufacturing techniques.",
      colours: [
          { name: "California Gold", sku: "california-gold", image: "california-gold.jpg" },
          { name: "Coastal Sand", sku: "coastal-sand", image: "coastal-sand.jpg" },
          { name: "Norway Oak", sku: "norway-oak", image: "norway-oak.jpg" },
          { name: "Southern Magnolia", sku: "southern-magnolia", image: "southern-magnolia.jpg" },
          { name: "Silver Elm", sku: "silver-elm", image: "silver-elm.jpg" },
          { name: "River Cypress", sku: "river-cypress", image: "river-cypress.jpg" }
      ],
    },
    {
      slug: "designer-pro-the-ridge",
      title: "The Ridge",
      line: "designer-pro",
      category: "luxury-vinyl",
      description: "The Republic The Ridge collection, with its expansive scale and soothing colors, brings a sense of tranquility to every space in your home. Its effortless beauty is reflected in its extra-long, extra-wide, super thick and highly durable planks, which stretch as far as your imagination and last longer than your fondest dreams.\n\nThis Designer Pro flooring series is based on our strongest and most stable Pure SPC Max flooring range, with a thicker sound-proof underlay and textured vinyl overlay. It comes with a limited 50 year residential warranty and a 10 year warranty for commercial premises, for maximum peace of mind. Enjoy the tranquil beauty of Designer Pro wood-style flooring, reinforced with the latest manufacturing techniques.",
      colours: [
          { name: "Sea Pearl", sku: "RELB9308", image: "relb9308.jpg" },
          { name: "Countryside Lake", sku: "RELB9307", image: "relb9307.jpg" },
          { name: "Desert Beach", sku: "RELB9301", image: "relb9301.jpg" }
      ],
    }
    ],
  },
];

export const brandBySlug = (slug: string) => brands.find((b) => b.slug === slug);

/** Collections a brand offers within one of this site's categories. */
export const collectionsFor = (brand: Brand, category: string) =>
  brand.collections.filter((c) => c.category === category);

/** Total colours a brand offers, optionally within one category. */
export const colourCount = (brand: Brand, category?: string) =>
  brand.collections
    .filter((c) => !category || c.category === category)
    .reduce((n, c) => n + c.colours.length, 0);
