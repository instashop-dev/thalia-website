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
];
