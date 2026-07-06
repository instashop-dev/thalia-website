export interface CaseStudyResult {
  metric: string;
  label: string;
  accent?: boolean;
}

export interface CaseStudySolutionFeature {
  title: string;
  desc: string;
}

export interface CaseStudy {
  slug: string;
  app: string;
  appSlug: string;
  category: string;
  industry: string;
  merchant: string;
  location: string;
  merchantUrl?: string;
  catalogueSize: string;
  productsUpdated: string;
  timeWithApp: string;
  usageFrequency: string;
  primaryUse: string;
  featuredBy: string;
  featured?: boolean;

  // About
  aboutMerchant: string;

  // Before
  previousMethods: string[];
  timeBeforeApp: string;
  challengeBody: string;
  challengeBullets: string[];

  // Solution
  solutionBody: string;
  topFeatures: CaseStudySolutionFeature[];

  // Results
  keyResults: CaseStudyResult[];
  resultBody: string;
  businessOutcomes: string[];
  salesEvents: string[];
  effortReduction: string;
  satisfactionScore: number;
  recommendScore: number;
  helpedWith: string[];

  // Testimonial
  quote?: string;
  quoteName?: string;
  quoteRole?: string;
}

export const caseStudies: CaseStudy[] = [
  {
    slug: "firstvibe-bulk-pricing",
    app: "Pro Bulk Price Editor",
    appSlug: "bulk-price-editor-pro",
    category: "Price Management",
    industry: "Fashion & Apparel",
    merchant: "Firstvibe",
    location: "India",
    merchantUrl: "firstvibe.in",
    catalogueSize: "100–500 products",
    productsUpdated: "100–1,000 products updated per campaign",
    timeWithApp: "1–3 months",
    usageFrequency: "During promotions only",
    primaryUse: "Promotional pricing — holiday, seasonal & flash sales",
    featuredBy: "Sirajudheen, Founder — firstvibe.in",
    featured: true,

    aboutMerchant:
      "Firstvibe is a growing Indian fashion and apparel brand selling on Shopify. The store runs an active catalogue of a few hundred styles — and like most lean apparel brands, its commercial calendar revolves around promotions: holiday drops, seasonal clear-outs, and time-boxed flash sales. Founder Sirajudheen manages much of the operation directly, which makes anything that eats hours a real cost to the business.",

    previousMethods: ["Shopify Admin", "CSV Imports"],
    timeBeforeApp: "1–3 hours per pricing update",
    challengeBody:
      "Every promotional campaign meant rolling up your sleeves and editing prices by hand. Sirajudheen would toggle between the Shopify admin panel and CSV import workflows, updating products one by one to apply discounts — and then repeating the whole process in reverse once a sale ended. For a single campaign, that meant committing one to three hours of focused effort each time, all while trying to avoid the costly mistakes that come with manual data entry under deadline pressure.",
    challengeBullets: [
      "Every price change required manual, product-by-product edits in Shopify Admin.",
      "Discount campaigns also required CSV imports, adding another layer of friction.",
      "Reversing prices after a sale ended demanded a second round of the same manual work.",
      "Each full pricing cycle — apply and revert — consumed 1–3 hours of the founder's time.",
      "Error risk was high: one wrong entry could send a discount live on the wrong product.",
    ],

    solutionBody:
      "Firstvibe adopted Pro Bulk Price Editor to consolidate its entire promotional pricing workflow into one place. Instead of editing products individually, the team now applies percentage-based discounts or fixed-amount changes across entire collections in a handful of clicks. When a sale wraps up, a single price rollback action restores every original price instantly — no second manual pass required.",
    topFeatures: [
      {
        title: "Bulk Price Updates",
        desc: "Update hundreds of products simultaneously instead of editing them one by one — the single biggest time-saver in Firstvibe's workflow.",
      },
      {
        title: "Percentage Price Changes",
        desc: "Apply a 20% off sale or any percentage discount across a collection with a single rule, not a spreadsheet.",
      },
      {
        title: "Fixed Amount Adjustments",
        desc: "Set precise price drops in dollar terms for specific products or ranges, ideal for clearance pricing.",
      },
      {
        title: "Collection-Based Updates",
        desc: "Target a specific collection — e.g. 'Summer Dresses' — without touching the rest of the catalogue.",
      },
      {
        title: "Price Rollback",
        desc: "Restore all original prices in one click the moment a sale ends. No re-importing, no manual reversals.",
      },
    ],

    keyResults: [
      { metric: "3",        label: "Sales events powered in first 1–3 months" },
      { metric: "<30 min",  label: "Per pricing update (down from 1–3 hours)", accent: true },
      { metric: "5 / 5",   label: "Likelihood to recommend", accent: true },
    ],
    resultBody:
      "In its first few months with the app, Firstvibe ran three back-to-back promotional campaigns — a holiday sale, a seasonal sale, and a flash sale — updating between 100 and 1,000 products each time. Pricing rounds that previously consumed one to three hours of focused work now wrap up in under 30 minutes. The founder gave the app a perfect 5 out of 5 for likelihood to recommend, and a 4 out of 5 satisfaction rating.",
    businessOutcomes: ["Reduced manual work", "Saved time", "Faster promotion launches"],
    salesEvents: ["Holiday Sale", "Seasonal Sale", "Flash Sale"],
    effortReduction: "Significant reduction in manual pricing effort",
    satisfactionScore: 4,
    recommendScore: 5,
    helpedWith: ["Save time", "Launch promotions faster"],

    quote: "It was a good experience.",
    quoteName: "Sirajudheen",
    quoteRole: "Founder, Firstvibe",
  },

  {
    slug: "sndy-coffee-eofy",
    app: "Pro Bulk Price Editor",
    appSlug: "bulk-price-editor-pro",
    category: "Price Management",
    industry: "Food & Beverage",
    merchant: "SNDY Coffee",
    location: "Australia",
    merchantUrl: "sndy.com.au",
    catalogueSize: "Under 100 products",
    productsUpdated: "Under 100 products per campaign",
    timeWithApp: "1–3 months",
    usageFrequency: "During promotions only",
    primaryUse: "EOFY promotional pricing",
    featuredBy: "Lynden, Store Owner — shared anonymously",

    aboutMerchant:
      "SNDY Coffee is an Australian specialty coffee brand running a tightly curated Shopify store with under 100 products. The business brings promotions to market at key retail moments throughout the year — most importantly the End of Financial Year (EOFY) sale, one of the biggest retail events on the Australian calendar. With a small team and no room for pricing mistakes ahead of a high-visibility sale, the owner needed a faster, more reliable approach to promotional pricing.",

    previousMethods: ["Shopify Admin", "CSV Imports"],
    timeBeforeApp: "1–3 hours per pricing update",
    challengeBody:
      "Before Pro Bulk Price Editor, promotional pricing at SNDY Coffee was entirely manual. Each sale cycle meant opening the Shopify Admin, going product by product, and adjusting prices individually — followed by the same process in reverse when the sale ended. CSV imports added an extra layer of fragility to the workflow. For a small operation gearing up for a major retail moment like EOFY, spending one to three hours on pricing changes every time was neither efficient nor scalable.",
    challengeBullets: [
      "All price updates handled manually through Shopify Admin, product by product.",
      "CSV imports added extra steps and room for error in every campaign.",
      "Each pricing cycle — setting and reverting — took 1–3 hours of focused time.",
      "Manual pricing during a high-stakes sale window created unnecessary risk.",
      "Difficulty timing promotions to go live and end precisely without oversight.",
    ],

    solutionBody:
      "Pro Bulk Price Editor gave SNDY Coffee's team a single, structured place to manage all promotional pricing. Scheduled pricing let them configure the EOFY sale to go live automatically at the right time and expire cleanly without manual intervention. Bulk and percentage-based updates applied discounts across the entire catalogue in minutes. When the sale ended, price rollback restored original prices instantly — cutting out the second manual pass entirely.",
    topFeatures: [
      {
        title: "Scheduled Pricing",
        desc: "Set the EOFY sale to start and end automatically — no need to be logged in at midnight to flip a switch.",
      },
      {
        title: "Bulk Price Updates",
        desc: "Apply sale pricing across the full catalogue in one action, replacing a process that previously took hours.",
      },
      {
        title: "Percentage Price Changes",
        desc: "Define a percentage discount rule once and apply it across every eligible product, eliminating per-product calculations.",
      },
      {
        title: "Collection-Based Updates",
        desc: "Scope a promotion to exactly the right products without risking changes to items outside the sale.",
      },
      {
        title: "Price Rollback",
        desc: "Return the entire catalogue to pre-sale pricing in one click the moment EOFY wraps up.",
      },
    ],

    keyResults: [
      { metric: "1–3 hrs",  label: "Saved per pricing update", accent: true },
      { metric: "50–75%",   label: "Reduction in pricing management effort", accent: true },
      { metric: "EOFY",     label: "Major sale event powered successfully" },
    ],
    resultBody:
      "The impact was felt immediately. Pricing updates that previously consumed one to three hours of manual work were handled in a fraction of the time. The owner estimates that Pro Bulk Price Editor reduced overall pricing management effort by 50–75%, freeing up meaningful time around a sale season where every hour counts. The EOFY event launched on schedule, ran cleanly, and ended without a manual reversal in sight — delivering a noticeably better experience for customers.",
    businessOutcomes: ["Faster sale launches", "Better customer experience", "Saved time", "Reduced manual work"],
    salesEvents: ["EOFY (End of Financial Year)"],
    effortReduction: "50–75%",
    satisfactionScore: 4,
    recommendScore: 4,
    helpedWith: ["Save time", "Launch promotions faster"],
  },

  // ─── Wayward ───────────────────────────────────────────────────────────
  {
    slug: "wayward-bulk-pricing",
    app: "Pro Bulk Price Editor",
    appSlug: "bulk-price-editor-pro",
    category: "Price Management",
    industry: "Fashion & Apparel",
    merchant: "Wayward",
    location: "Australia",
    merchantUrl: "wayward.biz",
    catalogueSize: "100–500 products",
    productsUpdated: "50,000+ products updated",
    timeWithApp: "1–3 months",
    usageFrequency: "Monthly",
    primaryUse: "Store-wide price management",
    featuredBy: "Michael, Store Owner — wayward.biz",
    featured: true,

    aboutMerchant:
      "Wayward is a fashion and apparel brand on Shopify managing a catalogue of 100–500 products. The store requires ongoing price management across its range, and before discovering Pro Bulk Price Editor, had no structured system for handling store-wide price adjustments. Store Owner Michael needed a way to take control of pricing at scale — without it consuming hours of operational time every month.",

    previousMethods: ["No formal pricing system"],
    timeBeforeApp: "1–3 hours per pricing update",
    challengeBody:
      "Wayward had no reliable, repeatable method for managing prices across their catalogue. Without Pro Bulk Price Editor, making any meaningful store-wide price adjustment meant going product by product with no safety net. For a store managing hundreds of products, this was effectively impossible at scale. Any time prices needed to move — for a sale, a margin correction, or a strategy shift — the team faced an enormous manual lift or simply couldn't do it efficiently.",
    challengeBullets: [
      "No structured system existed for bulk price changes across the catalogue.",
      "Store-wide adjustments were impossible to execute efficiently without automation.",
      "Manual pricing updates were time-consuming and prone to inconsistency.",
      "Scaling the store's pricing strategy was blocked by operational constraints.",
      "Each pricing change risked consuming 1–3 hours of focused work.",
    ],

    solutionBody:
      "Pro Bulk Price Editor gave Wayward the capability to execute store-wide pricing changes at scale for the first time. Bulk price updates, product filtering, and fixed amount adjustments became the core tools that unlocked what had previously been impossible — making pricing decisions and implementing them across the entire catalogue efficiently and in a fraction of the time.",
    topFeatures: [
      {
        title: "Bulk Price Updates",
        desc: "Update hundreds of products simultaneously — the capability that made store-wide pricing viable for Wayward for the first time.",
      },
      {
        title: "Product Filtering",
        desc: "Target specific product groups within the catalogue for precise pricing changes without touching unrelated items.",
      },
      {
        title: "Fixed Amount Adjustments",
        desc: "Set exact price changes in fixed amounts rather than percentage-only rules — critical for precise margin management.",
      },
    ],

    keyResults: [
      { metric: ">6 hrs", label: "Saved per pricing update", accent: true },
      { metric: ">90%",   label: "Reduction in pricing effort", accent: true },
      { metric: "5 / 5", label: "Likelihood to recommend" },
    ],
    resultBody:
      "The impact was definitive. Wayward now manages store-wide price adjustments that would have been impossible before — and saves more than 6 hours per pricing update compared to what manual processes would have required. The team estimates Pro Bulk Price Editor reduced their overall pricing management effort by over 90%. Michael gave the app a perfect 5 out of 5 for both satisfaction and likelihood to recommend.",
    businessOutcomes: ["Reduced manual work", "Saved time", "Improved pricing accuracy", "Store scaling enabled"],
    salesEvents: [],
    effortReduction: "Over 90%",
    satisfactionScore: 5,
    recommendScore: 5,
    helpedWith: ["Save time", "Manage thousands of products easily", "Improve pricing accuracy", "Scale our store"],

    quote: "Making store-wide price adjustments would be impossible without Pro Bulk Price Editor.",
    quoteName: "Michael",
    quoteRole: "Store Owner, Wayward",
  },

  // ─── SAAZ ──────────────────────────────────────────────────────────────
  {
    slug: "saaz-bulk-pricing",
    app: "Pro Bulk Price Editor",
    appSlug: "bulk-price-editor-pro",
    category: "Price Management",
    industry: "Footwear",
    merchant: "SAAZ",
    location: "Global",
    merchantUrl: "saazstore.com",
    catalogueSize: "Under 100 products",
    productsUpdated: "Under 100 products per campaign",
    timeWithApp: "3–6 months",
    usageFrequency: "During Promotions Only",
    primaryUse: "Flash sale pricing",
    featuredBy: "Aleena Mughal, Founder — saazstore.com",

    aboutMerchant:
      "SAAZ is a focused footwear brand on Shopify with a tightly curated catalogue of under 100 products. The store runs periodic flash promotions that require fast, accurate price changes across its range. The founding team manages the business directly and needed a better way to apply and reverse promotional pricing — without the hours of manual work that came with every campaign.",

    previousMethods: ["Shopify Admin", "CSV Imports"],
    timeBeforeApp: "3–6 hours per pricing update",
    challengeBody:
      "Before Pro Bulk Price Editor, SAAZ managed all promotional pricing through the Shopify Admin and CSV imports — a time-consuming and error-prone combination. Each flash sale required applying new prices manually, then going through the same process in reverse once the promotion ended. For a lean footwear operation running promotions regularly, spending 3–6 hours per pricing cycle on setup and reversal wasn't sustainable.",
    challengeBullets: [
      "All pricing changes required manual edits through the Shopify Admin.",
      "CSV imports added extra steps and fragility to every campaign.",
      "Each promotional cycle — applying and reverting prices — took 3–6 hours.",
      "Flash sales were bottlenecked by the speed of manual price updates.",
      "Reverting prices after a sale required a full second round of manual work.",
    ],

    solutionBody:
      "Pro Bulk Price Editor consolidated SAAZ's entire promotional pricing workflow. Bulk price updates replaced the product-by-product Shopify Admin approach, letting the team apply flash sale pricing across the catalogue in one action. The time cost of each campaign — setup and reversal — dropped by an estimated 50–75%.",
    topFeatures: [
      {
        title: "Bulk Price Updates",
        desc: "Apply promotional pricing across all products in one action — replacing hours of individual edits with a single operation.",
      },
      {
        title: "Price Rollback",
        desc: "Revert the entire catalogue to original prices instantly once a flash sale ends, eliminating the second round of manual work.",
      },
      {
        title: "Product Filtering",
        desc: "Target specific footwear product groups for promotional pricing without affecting products outside the sale scope.",
      },
    ],

    keyResults: [
      { metric: "3–6 hrs", label: "Saved per pricing update", accent: true },
      { metric: "50–75%",  label: "Reduction in pricing effort", accent: true },
      { metric: "5 / 5",  label: "Likelihood to recommend" },
    ],
    resultBody:
      "SAAZ now runs flash sales in a fraction of the time that manual pricing previously required. Each promotional cycle that once took 3–6 hours is handled more efficiently, with Pro Bulk Price Editor reducing overall pricing management effort by an estimated 50–75%. The team gave the app a perfect 5 out of 5 for both overall satisfaction and likelihood to recommend.",
    businessOutcomes: ["Reduced manual work", "Saved time", "Improved pricing accuracy"],
    salesEvents: ["Flash Sale"],
    effortReduction: "50–75%",
    satisfactionScore: 5,
    recommendScore: 5,
    helpedWith: ["Save time", "Improve pricing accuracy"],
  },

  // ─── The Herbalists (anonymous) ────────────────────────────────────────
  {
    slug: "herbalists-seasonal-pricing",
    app: "Pro Bulk Price Editor",
    appSlug: "bulk-price-editor-pro",
    category: "Price Management",
    industry: "Health & Wellness",
    merchant: "The Herbalists",
    location: "New Zealand",
    merchantUrl: "theherbalists.co.nz",
    catalogueSize: "Under 100 products",
    productsUpdated: "Under 100 products per campaign",
    timeWithApp: "1–3 months",
    usageFrequency: "During Promotions Only",
    primaryUse: "Scheduled seasonal sale pricing with per-product prices",
    featuredBy: "Operations Team — theherbalists.co.nz",

    aboutMerchant:
      "The Herbalists 2021 Limited is a New Zealand-based wellness brand selling herbalist and natural health products on Shopify. With a curated catalogue of under 100 products, the business runs seasonal promotions where precise, product-by-product pricing is critical — because their sales are not driven by blanket percentage discounts. Every product carries a different sale price, which requires individual attention at scale.",

    previousMethods: ["Manual Editing"],
    timeBeforeApp: "1–3 hours per pricing update",
    challengeBody:
      "The Herbalists' pricing challenge was unique: their promotions are not percentage-based — each product has a specific sale price that needs individual attention. Manual editing in Shopify meant working through the catalogue one item at a time, applying custom prices and then reversing each one after the sale ended. Seasonal promotions consumed 1–3 hours of operations time every cycle, with no ability to schedule changes in advance.",
    challengeBullets: [
      "Promotions required individual price edits for each product — no blanket percentage rules applied.",
      "Scheduling a sale start or end required manual action at exactly the right moment.",
      "Manual editing was the only method, processed product by product with no bulk capability.",
      "Each seasonal sale cycle — apply and revert — took 1–3 hours of operations time.",
      "No ability to pre-schedule seasonal promotions ahead of time.",
    ],

    solutionBody:
      "Pro Bulk Price Editor gave The Herbalists the ability to schedule seasonal sales in advance and set individual prices across their catalogue in a single bulk operation — without relying on percentage rules. The ability to configure each product's specific promotional price while still running the update as a scheduled bulk job was precisely what the operations team needed.",
    topFeatures: [
      {
        title: "Scheduled Pricing",
        desc: "Pre-schedule the seasonal sale to go live automatically — no need to manually trigger the price change at a specific time.",
      },
      {
        title: "Price Rollback",
        desc: "Restore all original prices instantly once the seasonal sale ends, eliminating a full round of manual reversals.",
      },
      {
        title: "Per-Product Bulk Pricing",
        desc: "Set a unique sale price for each product in a single bulk operation — critical for a store where every product has a different promotional price.",
      },
    ],

    keyResults: [
      { metric: "30–60 min", label: "Saved per pricing update", accent: true },
      { metric: "25–50%",    label: "Reduction in pricing effort", accent: true },
      { metric: "5 / 5",    label: "Likelihood to recommend" },
    ],
    resultBody:
      "The Herbalists now runs its seasonal promotions with scheduled pricing that goes live and ends automatically, saving 30 minutes to 1 hour per pricing update compared to manual editing. The operations team estimates Pro Bulk Price Editor reduced overall pricing management effort by 25–50%. The standout capability: setting an individual sale price for each product inside a scheduled bulk operation — rather than relying on percentage discounts — made the app the right fit for their business model.",
    businessOutcomes: ["Faster sale launches", "Reduced manual work", "Saved time"],
    salesEvents: ["Seasonal Sale"],
    effortReduction: "25–50%",
    satisfactionScore: 5,
    recommendScore: 5,
    helpedWith: ["Save time", "Launch promotions faster"],

    quote:
      "We liked how we could change each individual price for each bulk scheduled product as our sales aren't done by a % discount and each product is different.",
    quoteName: "Operations Team",
    quoteRole: "The Herbalists 2021 Limited, New Zealand",
  },

  // ─── Sokobox (anonymous) ───────────────────────────────────────────────
  {
    slug: "sokobox-flash-sale-pricing",
    app: "Pro Bulk Price Editor",
    appSlug: "bulk-price-editor-pro",
    category: "Price Management",
    industry: "Beauty & Cosmetics",
    merchant: "Sokobox",
    location: "Chile",
    merchantUrl: "sokobox.cl",
    catalogueSize: "1,000–5,000 products",
    productsUpdated: "100–1,000 products per campaign",
    timeWithApp: "1–3 months",
    usageFrequency: "During Promotions Only",
    primaryUse: "Black Friday & flash sale campaign pricing",
    featuredBy: "Ecommerce Team — sokobox.cl",

    aboutMerchant:
      "Sokobox is a Chilean beauty and cosmetics retailer on Shopify, managing a catalogue of 1,000–5,000 products. The business runs high-stakes promotional campaigns — including Black Friday/Cyber Monday and flash sales — that require precise, on-time pricing across large portions of their catalogue. With individual campaigns influencing $50,000–$100,000 in revenue, getting pricing right and on schedule is a critical operational requirement.",

    previousMethods: ["CSV Imports"],
    timeBeforeApp: "1–3 hours per pricing update",
    challengeBody:
      "Before Pro Bulk Price Editor, Sokobox managed all campaign pricing through CSV imports — a process that was both time-consuming and fragile when dealing with a large catalogue during high-pressure sales windows. Seasonal and flash sale campaigns required accurate, timely pricing changes, and reverting prices after a campaign ended was a significant manual lift. Human error was a real risk during peak moments like Black Friday, where a pricing mistake could affect revenue at scale.",
    challengeBullets: [
      "All promotional pricing relied on CSV imports — slow and error-prone at catalogue scale.",
      "Updating prices across 1,000–5,000 products took 1–3 hours per campaign.",
      "Reverting prices after a campaign ended required another full manual pass.",
      "Human errors in pricing were a high-stakes risk during Black Friday.",
      "Time-consuming updates made it difficult to launch campaigns on precise schedules.",
      "Difficulty reverting prices cleanly added post-campaign operational risk.",
    ],

    solutionBody:
      "Pro Bulk Price Editor replaced Sokobox's CSV import workflow with scheduled, collection-based pricing that could be configured ahead of time and triggered automatically. The ecommerce team sets up Black Friday pricing, flash sale campaigns, and brand-specific discounts in advance — then lets the app execute at exactly the right moment. Price reversals happen cleanly after each campaign without a second round of CSV work.",
    topFeatures: [
      {
        title: "Scheduled Pricing",
        desc: "Pre-configure Black Friday and flash sale pricing to go live at exactly the right time — no manual trigger required during busy sales windows.",
      },
      {
        title: "Collection-Based Updates",
        desc: "Apply themed campaign discounts across entire brand collections in one operation, replacing per-product CSV editing.",
      },
      {
        title: "Bulk Price Updates",
        desc: "Update hundreds of products simultaneously — transforming what was a 1–3 hour CSV process into a fast, reliable operation.",
      },
    ],

    keyResults: [
      { metric: "1–3 hrs",    label: "Saved per pricing update", accent: true },
      { metric: "$50K–$100K", label: "Revenue managed per campaign", accent: true },
      { metric: "4 / 5",     label: "Likelihood to recommend" },
    ],
    resultBody:
      "Sokobox now runs Black Friday and flash sale campaigns with scheduled, collection-based pricing that goes live automatically. Each pricing update saves 1–3 hours compared to the previous CSV workflow. Campaigns influencing $50,000–$100,000 in revenue are managed more reliably, with less risk of manual error during peak periods. The ecommerce team noted that after an initial learning curve with discount calculation and scheduling, they mastered the app completely — and it is now a core part of their campaign workflow.",
    businessOutcomes: ["Faster sale launches", "Reduced manual work", "Improved team productivity"],
    salesEvents: ["Black Friday / Cyber Monday", "Flash Sale"],
    effortReduction: "Under 25%",
    satisfactionScore: 4,
    recommendScore: 4,
    helpedWith: ["Launch promotions faster", "Increase operational efficiency"],

    quote:
      "Initially, it was a bit complex to understand how the app worked. However, after a couple of tests, I managed to master it completely. It now helps streamline the workflow for special campaigns like flash sales and themed campaigns with fixed discounts for an entire brand or product collection.",
    quoteName: "Ecommerce Team",
    quoteRole: "Sokobox, Chile",
  },

  // ─── Ultimatestorefront ────────────────────────────────────────────────
  {
    slug: "ultimatestorefront-supplier-pricing",
    app: "Pro Bulk Price Editor",
    appSlug: "bulk-price-editor-pro",
    category: "Price Management",
    industry: "Multi-Category Retail",
    merchant: "Ultimatestorefront",
    location: "Global",
    merchantUrl: "ultimatestorefront.com",
    catalogueSize: "10,000+ products",
    productsUpdated: "50,000+ products updated",
    timeWithApp: "1–3 months",
    usageFrequency: "Monthly",
    primaryUse: "Supplier cost-driven pricing updates across a large multi-category catalogue",
    featuredBy: "Dustin Titta, Store Owner — ultimatestorefront.com",

    aboutMerchant:
      "Ultimatestorefront operates one of the largest multi-category Shopify catalogues featured in this case study series — managing 10,000+ products spanning fashion, footwear, beauty, electronics, home, sports, jewelry, food, and automotive. The platform sources from suppliers whose prices change regularly, requiring frequent cost-driven pricing updates across the entire catalogue. With 50,000+ products updated through the app, scale was the defining challenge from day one.",

    previousMethods: ["Automated supplier-to-Shopify sync"],
    timeBeforeApp: "1–3 hours per pricing update",
    challengeBody:
      "Ultimatestorefront's pricing challenge came from the scale of its multi-category catalogue and the frequency of supplier cost changes. When supplier prices move, retail prices across thousands of affected products need to follow — and the existing supplier-to-Shopify automation didn't cover the pricing update step. Doing it manually left gaps, introduced inconsistencies, and consumed significant operational time across such a large and diverse catalogue.",
    challengeBullets: [
      "Supplier price changes needed to cascade across 10,000+ products quickly.",
      "Existing supplier-to-Shopify automation didn't cover the retail pricing update step.",
      "Each update cycle consumed 1–3 hours of manual attention across the catalogue.",
      "Multi-category range meant price changes could hit every vertical simultaneously.",
      "Manual verification at this scale was unreliable and time-consuming.",
    ],

    solutionBody:
      "Pro Bulk Price Editor gave Ultimatestorefront the ability to apply supplier-driven price changes across their massive catalogue using bulk percentage adjustments and product filtering. Monthly pricing updates that previously required hours of manual attention were streamlined into a reliable, repeatable process — fast enough to keep pace with supplier cost movements without interrupting other operations.",
    topFeatures: [
      {
        title: "Bulk Price Updates",
        desc: "Update tens of thousands of products simultaneously — the only viable approach for a 10,000+ product multi-category catalogue.",
      },
      {
        title: "Percentage Price Changes",
        desc: "Apply cost-driven percentage adjustments across the catalogue when supplier prices shift, maintaining consistent margins.",
      },
      {
        title: "Product Filtering",
        desc: "Target specific categories or product groups for price changes without affecting the rest of the catalogue.",
      },
    ],

    keyResults: [
      { metric: "50,000+", label: "Products managed through the app", accent: true },
      { metric: "25–50%",  label: "Reduction in pricing effort", accent: true },
      { metric: "5 / 5",  label: "Likelihood to recommend" },
    ],
    resultBody:
      "Ultimatestorefront has pushed more than 50,000 product updates through Pro Bulk Price Editor, managing supplier cost-driven pricing changes across one of the most diverse Shopify catalogues in this series. Monthly pricing updates that previously required hours of manual work are now handled efficiently, with the app reducing overall pricing management effort by an estimated 25–50%. The store owner gave the app a perfect 5 out of 5 for satisfaction and likelihood to recommend.",
    businessOutcomes: ["Reduced manual work", "Faster reaction to supplier costs", "Saved time"],
    salesEvents: [],
    effortReduction: "25–50%",
    satisfactionScore: 5,
    recommendScore: 5,
    helpedWith: ["Save time", "Launch promotions faster", "Manage thousands of products easily"],

    quote: "The app was fairly easy to use.",
    quoteName: "Dustin Titta",
    quoteRole: "Store Owner, Ultimatestorefront",
  },

  // ─── Synergywoman (Outlink) ────────────────────────────────────────────────
  {
    slug: "synergywoman-affiliate-links",
    app: "Outlink",
    appSlug: "external-affiliate-product-links",
    category: "Affiliate Linking",
    industry: "Health & Wellness",
    merchant: "Synergywoman",
    location: "Global",
    merchantUrl: "synergywoman.com",
    catalogueSize: "Under 100 products",
    productsUpdated: "Under 100 affiliate-linked products",
    timeWithApp: "Active user",
    usageFrequency: "Ongoing",
    primaryUse: "Adding affiliate product links to redirect customers to partner stores",
    featuredBy: "Luba Vitti, Health Practitioner & Store Owner — synergywoman.com",

    aboutMerchant:
      "Synergywoman is a health practitioner-run Shopify store focused on wellness products and partner recommendations. Store owner Luba Vitti wanted a simple, no-code way to connect her customers with affiliate products from partner retailers — without needing a developer or custom workaround.",

    previousMethods: ["No prior solution — affiliate linking to partner products was simply not possible"],
    timeBeforeApp: "Extremely difficult — rated 5 out of 5 with no working solution",
    challengeBody:
      "Luba needed a way to add affiliate links directly to products in her Shopify store, redirecting customers to partner retailers when they clicked to buy. Without a dedicated solution, she rated the challenge a full 5 out of 5 in difficulty — as no straightforward option existed for a non-developer to embed external affiliate links inside a Shopify product listing.",
    challengeBullets: [
      "No existing Shopify-native solution for attaching affiliate links to product pages.",
      "Embedding external redirect links required developer knowledge she didn't have.",
      "Affiliate product recommendations had no reliable click-through path to partner stores.",
      "Manual workarounds consumed time and delivered inconsistent results.",
    ],

    solutionBody:
      "Outlink gave Synergywoman exactly what was missing: a simple, no-code way to attach affiliate product links to any Shopify listing. Setup took under 10 minutes. Once live, every product with an affiliate link automatically redirected customers to the partner retailer — with Luba's affiliate tracking intact and no custom code required.",
    topFeatures: [
      {
        title: "Affiliate Product Links",
        desc: "Attach affiliate redirect URLs directly to Shopify product listings — no code, no workarounds, instant setup.",
      },
    ],

    keyResults: [
      { metric: "5 / 5",   label: "Satisfaction & likelihood to recommend", accent: true },
      { metric: "10–25%",  label: "Improvement in affiliate metrics", accent: true },
      { metric: "1–3 hrs", label: "Saved per week on manual link management" },
    ],
    resultBody:
      "After switching to Outlink, Synergywoman saw affiliated clicks increase measurably — with an estimated 10–25% improvement across affiliate metrics. The store owner saved 1–3 hours per week previously spent on workarounds, and gave Outlink a perfect 5 out of 5 for both satisfaction and likelihood to recommend. Setup was completed in under 10 minutes with zero technical knowledge required.",
    businessOutcomes: ["Increased affiliate commissions", "Improved customer journey", "Saved time", "Reduced manual work"],
    salesEvents: [],
    effortReduction: "10–25%",
    satisfactionScore: 5,
    recommendScore: 5,
    helpedWith: ["Monetise affiliate partnerships", "Remove manual link workarounds", "Increase product visibility"],

    quote:
      "Outlink makes it so easy for me to plug in my affiliate link to any products. It works perfect in my Shopify store.",
    quoteName: "Luba Vitti",
    quoteRole: "Health Practitioner & Store Owner, Synergywoman",
  },

  // ─── Online Dreams Retailers (Outlink) ────────────────────────────────────
  {
    slug: "online-dreams-retailers-affiliate-links",
    app: "Outlink",
    appSlug: "external-affiliate-product-links",
    category: "Affiliate Linking",
    industry: "Online Marketplace",
    merchant: "Online Dreams Retailers",
    location: "Global",
    catalogueSize: "Under 100 products",
    productsUpdated: "Under 100 affiliate-linked products",
    timeWithApp: "Active user",
    usageFrequency: "Ongoing",
    primaryUse: "Managing Amazon affiliate links to let customers source products independently or through the store",
    featuredBy: "Jeremy Iles, Store Owner — Online Dreams Retailers",

    aboutMerchant:
      "Online Dreams Retailers is a growing Shopify marketplace connecting customers with products across multiple sources. Owner Jeremy Iles manages a unique hybrid model — offering customers the choice to order directly through his store or source independently via affiliate links, earning commission either way.",

    previousMethods: ["Another Shopify app — which didn't fully meet his affiliate linking needs"],
    timeBeforeApp: "Moderate effort managing affiliate links without a dedicated tool",
    challengeBody:
      "Jeremy needed a reliable way to embed affiliate product links — particularly for Amazon — directly within his Shopify store. Previously relying on another Shopify app that didn't fully deliver, managing external links manually was slowing him down and limiting the affiliate revenue potential of his catalogue.",
    challengeBullets: [
      "Previous Shopify app didn't deliver the full affiliate link functionality needed.",
      "Managing affiliate links to Amazon and other retailers manually was time-consuming.",
      "No streamlined way for customers to choose between ordering through the store or self-sourcing.",
      "Affiliate commission potential was underutilised without a clean product-level link system.",
    ],

    solutionBody:
      "Outlink gave Jeremy a clean way to attach affiliate links directly to product listings, live on the same day he installed it. Customers browsing his store can now choose whether to order through Online Dreams Retailers or visit the affiliate destination themselves — with commission flowing to Jeremy either way. His 'SPECIAL ORDERS' product became a direct entry point to Amazon affiliate revenue.",
    topFeatures: [
      {
        title: "Affiliate Product Links",
        desc: "Attach external affiliate URLs to any Shopify product so customers can self-source with your commission tracking intact.",
      },
    ],

    keyResults: [
      { metric: "5 / 5", label: "Likelihood to recommend", accent: true },
      { metric: "4 / 5", label: "Overall satisfaction" },
      { metric: "< 1 hr", label: "Saved per week on manual link management" },
    ],
    resultBody:
      "Jeremy is still growing his store, but the impact of Outlink on his affiliate revenue potential is already clear. His 'SPECIAL ORDERS' product now drives direct Amazon affiliate traffic, and the hybrid model — where customers choose between store ordering and self-sourcing — is powered entirely by Outlink. He gave Outlink a 5 out of 5 for likelihood to recommend, citing 'the opportunities it brings.'",
    businessOutcomes: ["Reduced manual work", "Unlocked Amazon affiliate revenue channel"],
    salesEvents: [],
    effortReduction: "Under 25%",
    satisfactionScore: 4,
    recommendScore: 5,
    helpedWith: ["Monetise affiliate partnerships", "Remove manual link workarounds"],

    quote:
      "I'm still new and growing, but the potential Outlink gives me is very satisfying.",
    quoteName: "Jeremy Iles",
    quoteRole: "Store Owner, Online Dreams Retailers",
  },

  // ─── Echo & The Bunnymen Merchandise (Outlink) ────────────────────────────
  {
    slug: "echo-bunnymen-affiliate-links",
    app: "Outlink",
    appSlug: "external-affiliate-product-links",
    category: "Affiliate Linking",
    industry: "Music Merchandise",
    merchant: "Official Echo & The Bunnymen Merchandise",
    location: "United Kingdom",
    catalogueSize: "Under 100 products",
    productsUpdated: "Under 100 externally-linked products",
    timeWithApp: "Active user",
    usageFrequency: "Ongoing",
    primaryUse: "Linking merchandise products to external album sales pages to grow affiliate commissions",
    featuredBy: "Peter Allen, Merchandise Manager — Official Echo & The Bunnymen Merchandise",

    aboutMerchant:
      "Official Echo & The Bunnymen Merchandise runs the official Shopify storefront for the legendary British post-punk band Echo & The Bunnymen. The store sells physical band merchandise while also cross-promoting the band's music catalogue — linking fans to album purchases on third-party music platforms.",

    previousMethods: ["No prior solution — external product links were simply not possible in Shopify"],
    timeBeforeApp: "Some difficulty — no built-in Shopify solution for external linking existed",
    challengeBody:
      "The Bunnymen merchandise team wanted to link their Shopify product listings to album pages on external music platforms — allowing fans browsing merchandise to discover and purchase the band's music in the same session. Without Outlink, there was no native Shopify way to add external 'buy this album' buttons that redirected to an affiliate destination.",
    challengeBullets: [
      "No Shopify-native method for adding external buy buttons on product pages.",
      "Album cross-promotion required manual workarounds or developer customisation.",
      "Affiliate commission on music sales from external platforms couldn't be activated.",
      "Fans browsing merch had no in-store path to discovering and buying the band's music.",
    ],

    solutionBody:
      "Outlink unlocked external linking for the Bunnymen merchandise store within 30 minutes of setup. Product listings now include external buy buttons pointing to album pages on music retail platforms, generating affiliate commission revenue and increasing fan engagement across the band's catalogue — with custom button text to match the band's voice.",
    topFeatures: [
      {
        title: "External Buy Buttons",
        desc: "Add branded buy buttons on product pages that redirect customers to external purchase destinations.",
      },
      {
        title: "Affiliate Product Links",
        desc: "Attach affiliate tracking to external links so every click to a music platform generates trackable commission.",
      },
      {
        title: "Custom Button Text",
        desc: "Customise button labels to match the brand voice — 'Buy Album', 'Stream Now', or any other call to action.",
      },
    ],

    keyResults: [
      { metric: "15%",   label: "Revenue growth from affiliate-linked listings", accent: true },
      { metric: "25%",   label: "Increase in affiliate clicks", accent: true },
      { metric: "5 / 5", label: "Satisfaction & likelihood to recommend" },
    ],
    resultBody:
      "Since implementing Outlink, the Official Echo & The Bunnymen Merchandise store has recorded a 15% uplift in revenue from affiliate-linked product pages and a 25% increase in affiliate clicks. Setup took under 30 minutes — saving the team 1–3 hours per week compared to earlier manual workarounds. Peter Allen gave Outlink a perfect 5 out of 5 for both satisfaction and recommendation.",
    businessOutcomes: ["Increased revenue", "Increased affiliate commissions", "Improved fan engagement"],
    salesEvents: [],
    effortReduction: "10–25%",
    satisfactionScore: 5,
    recommendScore: 5,
    helpedWith: ["Monetise affiliate partnerships", "Cross-promote music catalogue", "Increase product visibility"],

    quote:
      "We sell merchandise for a band and it allows us to link to the band's albums on websites which sell them.",
    quoteName: "Peter Allen",
    quoteRole: "Merchandise Manager, Official Echo & The Bunnymen Merchandise",
  },

  // ─── The Gaima Label (Sleek) ───────────────────────────────────────────────
  {
    slug: "gaima-label-gst-invoicing",
    app: "Sleek GST Invoices India",
    appSlug: "gst-invoices-india",
    category: "GST Invoicing",
    industry: "Fashion & Apparel",
    merchant: "The Gaima Label",
    location: "India",
    merchantUrl: "thegaimalabel.com",
    catalogueSize: "Growing catalogue",
    productsUpdated: "N/A",
    timeWithApp: "Active user",
    usageFrequency: "Ongoing",
    primaryUse: "Automating GST invoice generation to eliminate manual accounting software and invoice printing delays",
    featuredBy: "Garima Batra, Store Owner — thegaimalabel.com",

    aboutMerchant:
      "The Gaima Label is an Indian fashion and apparel Shopify store run by Garima Batra. As a growing DTC brand shipping across India, GST-compliant invoicing is a mandatory part of every order's fulfilment process — and one that was causing delays and consuming team hours before Sleek.",

    previousMethods: ["Manual invoice generation using external accounting software"],
    timeBeforeApp: "3–5 hours per week managing invoices manually through external accounting software",
    challengeBody:
      "Before Sleek GST Invoices India, The Gaima Label was generating GST invoices manually using external accounting software — a process that introduced friction and delays at the despatch stage for every order. The team was spending 3–5 hours per week on invoice handling alone, and without automation, scaling would soon require additional headcount.",
    challengeBullets: [
      "Manual invoice printing was causing delays in order despatch.",
      "GST compliance required meticulous, time-consuming invoice generation for every order.",
      "External accounting software created an additional workflow step outside Shopify.",
      "Growing order volumes meant the manual approach would soon require extra staff.",
    ],

    solutionBody:
      "Sleek GST Invoices India brought automated, GST-compliant invoicing directly into The Gaima Label's Shopify workflow. Invoices are now generated automatically at fulfilment — no manual data entry, no switching between software platforms, no printing delays. The team saves approximately 5 hours every week and has seen a 30% improvement in product update speed.",
    topFeatures: [
      {
        title: "Automated GST Invoicing",
        desc: "Invoices are generated and attached automatically when orders are fulfilled — zero manual input required.",
      },
    ],

    keyResults: [
      { metric: "5 hrs",  label: "Saved per week on invoice generation", accent: true },
      { metric: "30%",    label: "Improvement in product update speed", accent: true },
      { metric: "~25%",   label: "Reduction in manual operational tasks" },
    ],
    resultBody:
      "The Gaima Label now saves approximately 5 hours every week — time previously spent on manual invoice generation and handling despatch delays caused by external accounting software. Product update speed has improved by an estimated 30%, and manual operational tasks have reduced by around 25%. Garima Batra rated Sleek 4 out of 5 for satisfaction and would recommend it to other Shopify merchants in India.",
    businessOutcomes: ["Saved time", "Better productivity", "Reduced manual work", "Fewer mistakes"],
    salesEvents: [],
    effortReduction: "~25%",
    satisfactionScore: 4,
    recommendScore: 5,
    helpedWith: ["Automate GST compliance", "Eliminate invoice printing delays", "Scale without extra headcount"],

    quote: "Must have for growing Shopify stores.",
    quoteName: "Garima Batra",
    quoteRole: "Store Owner, The Gaima Label",
  },

  // ─── Bruijn (Sleek) ────────────────────────────────────────────────────────
  {
    slug: "bruijn-gst-invoicing",
    app: "Sleek GST Invoices India",
    appSlug: "gst-invoices-india",
    category: "GST Invoicing",
    industry: "Food & Beverage",
    merchant: "Bruijn",
    location: "India",
    merchantUrl: "bruijn.in",
    catalogueSize: "Growing catalogue",
    productsUpdated: "N/A",
    timeWithApp: "Active user",
    usageFrequency: "Ongoing",
    primaryUse: "Automating GST invoicing for both B2B and D2C customers, freeing the accounts team from manual work",
    featuredBy: "Mandavi Kanchan, Store Owner — bruijn.in",

    aboutMerchant:
      "Bruijn is an Indian food and beverage Shopify store operating a mixed B2B and D2C model. Store owner Mandavi Kanchan manages a customer base with differing GST compliance requirements between business and consumer orders — creating complexity that manual invoicing could not efficiently handle at scale.",

    previousMethods: ["Manual GST invoice creation by the accounts team for every order"],
    timeBeforeApp: "Accounts team manually creating GST invoices across all B2B and D2C orders",
    challengeBody:
      "Bruijn's accounts team was manually creating GST invoices for every order — a process that consumed significant time and introduced complexity, particularly given the different compliance requirements for their B2B vs D2C customers. The manual approach was not sustainable as order volumes grew, and left the team exposed to errors and compliance gaps.",
    challengeBullets: [
      "Accounts team manually created GST invoices for every order — B2B and D2C alike.",
      "B2B compliance requirements differ from D2C, complicating manual invoice workflows.",
      "No automated system to generate and attach GST-compliant invoices within Shopify.",
      "Manual processes left the team exposed to errors and compliance gaps as volumes grew.",
    ],

    solutionBody:
      "Sleek GST Invoices India integrated directly into Bruijn's Shopify store, automating invoice generation for every order type. The migration was seamless — intuitive enough that even Bruijn's CA understood how to use it immediately. B2B and D2C invoicing is now handled automatically, with correct GST treatment applied to each customer type without any manual intervention.",
    topFeatures: [
      {
        title: "Automated GST Invoicing",
        desc: "Automatically generate GST-compliant invoices for every order, with correct handling for both B2B and D2C customers.",
      },
      {
        title: "B2B & D2C Support",
        desc: "Manage different compliance requirements for business and consumer customers without separate workflows.",
      },
    ],

    keyResults: [
      { metric: "5 / 5",   label: "Satisfaction score", accent: true },
      { metric: "~25%",    label: "Reduction in manual operational tasks", accent: true },
      { metric: "1–3 hrs", label: "Saved per week on invoicing" },
    ],
    resultBody:
      "Bruijn's accounts team no longer manually creates GST invoices — Sleek handles it automatically for every order, with correct handling for both B2B and D2C customers. Manual operational tasks have been reduced by approximately 25%, saving 1–3 hours per week. Mandavi Kanchan gave Sleek a perfect 5 out of 5 for satisfaction and has already recommended it to 3 other merchants. The migration was 'quite seamless' — simple enough that the store's CA understood the app immediately.",
    businessOutcomes: ["Reduced manual work", "Improved B2B compliance", "Saved time", "Reduced operational costs"],
    salesEvents: [],
    effortReduction: "~25%",
    satisfactionScore: 5,
    recommendScore: 5,
    helpedWith: ["Automate GST compliance", "Simplify B2B invoicing", "Free up accounts team"],

    quote:
      "I've recommended Sleek to 3 customers already. I'm really happy with the service and the fact that someone does not manually need to make GST invoices. Given that some of my business is B2B, the ease of use of managing B2B vs D2C customers makes using Sleek a no brainer.",
    quoteName: "Mandavi Kanchan",
    quoteRole: "Store Owner, Bruijn",
  },
];
