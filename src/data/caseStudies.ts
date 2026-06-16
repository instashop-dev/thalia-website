export interface CaseStudyResult {
  metric: string;
  label: string;
  accent?: boolean;
}

export interface CaseStudySolutionBullet {
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
  timeWithApp: string;
  primaryUse: string;
  featuredBy: string;
  headline: string;
  summary: string;
  challenge: {
    body: string;
    bullets: string[];
  };
  solution: {
    body: string;
    bullets: CaseStudySolutionBullet[];
  };
  results: CaseStudyResult[];
  resultBody: string;
  quote: string;
  quoteName: string;
  quoteRole: string;
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
    timeWithApp: "1–3 months",
    primaryUse: "Promotional pricing — holiday, seasonal & flash sales",
    featuredBy: "Sirajudheen, Founder — firstvibe.in",
    headline: "Firstvibe replaces hours of manual price edits with one-click promo launches",
    summary:
      "Firstvibe is a growing Shopify fashion and apparel store running an active catalogue of a few hundred products. Like many lean apparel brands, its pricing lives and dies by promotions — holiday drops, seasonal clear-outs and time-boxed flash sales. Founder Sirajudheen turned to Pro Bulk Price Editor to take the manual grind out of every one of those campaigns.",
    challenge: {
      body: "Before Pro Bulk Price Editor, every promotion meant editing prices by hand. The team toggled between the Shopify admin and CSV imports, working product-by-product to apply discounts and then reverse them once a sale ended. Each pricing round consumed one to three hours of focused, error-prone work — time a founder-led store can rarely spare during a busy sales calendar.",
      bullets: [
        "Manual, line-by-line price edits across the catalogue.",
        "Juggling the Shopify admin and CSV imports for a single campaign.",
        "1–3 hours of effort for every pricing update, then more time to roll prices back.",
      ],
    },
    solution: {
      body: "Firstvibe adopted Pro Bulk Price Editor to run its promotional pricing from a single workflow. Bulk price updates and percentage-based changes let the team discount whole collections in a few clicks, while one-click price rollback removes the dread of unwinding a sale. Collection-based updates and fixed-amount adjustments give precise control over exactly which products move and by how much.",
      bullets: [
        { title: "Bulk Price Updates", desc: "Change many products at once instead of one at a time." },
        { title: "Percentage & Fixed-Amount Adjustments", desc: "Flexible discounting for any campaign." },
        { title: "Collection-Based Updates", desc: "Target specific ranges without touching the rest of the catalogue." },
        { title: "Price Rollback", desc: "Restore original prices instantly when a sale ends." },
      ],
    },
    results: [
      { metric: "3", label: "Sales events powered in months 1–3" },
      { metric: "<30 min", label: "Per pricing update (down from 1–3 hrs)", accent: true },
      { metric: "5 / 5", label: "Likelihood to recommend" },
    ],
    resultBody:
      "In its first few months, Firstvibe leaned on the app across three back-to-back sales events — a holiday sale, a seasonal sale and a flash sale — updating between 100 and 1,000 products through the app. Pricing rounds that once took one to three hours now wrap up in well under half an hour, and the founder rates the experience highly enough to recommend it without reservation.",
    quote: "It was a good experience.",
    quoteName: "Sirajudheen",
    quoteRole: "Founder, Firstvibe",
  },
  {
    slug: "coffee-brand-eofy",
    app: "Pro Bulk Price Editor",
    appSlug: "bulk-price-editor-pro",
    category: "Price Management",
    industry: "Food & Beverage",
    merchant: "Australian Specialty Coffee Retailer",
    location: "Australia",
    catalogueSize: "Under 100 products",
    timeWithApp: "1–3 months",
    primaryUse: "Promotional pricing, including EOFY sale",
    featuredBy: "Store owner — shared anonymously",
    headline: "An Australian coffee brand cuts EOFY pricing from hours to minutes",
    summary:
      "This Australian specialty coffee retailer runs a focused Shopify catalogue of fewer than 100 products and brings out promotions at key moments in the year. When the End of Financial Year (EOFY) sale season approached — one of the biggest retail moments on the Australian calendar — the owner needed a faster, safer way to manage promotional pricing than editing it by hand.",
    challenge: {
      body: "Promotions were handled manually through the Shopify admin and CSV imports. For a small team, that meant setting aside one to three hours every time prices needed to change — first to apply a promotion, then again to undo it — with all the risk of mistakes that hand-editing brings during a high-stakes sale window.",
      bullets: [
        "Manual price changes through the Shopify admin and CSV imports.",
        "1–3 hours of work per pricing update.",
        "Pressure to get pricing right ahead of a major EOFY sale.",
      ],
    },
    solution: {
      body: "Pro Bulk Price Editor let the owner prepare and run EOFY pricing from one place. Scheduled pricing meant promotions could be set up in advance to go live and expire automatically, while bulk and percentage-based updates applied discounts across the catalogue in minutes. When the sale ended, price rollback returned everything to normal instantly — no manual reversal required.",
      bullets: [
        { title: "Scheduled Pricing", desc: "Set promotions to start and stop automatically around EOFY." },
        { title: "Bulk Price Updates & Percentage Changes", desc: "Discount the catalogue in minutes." },
        { title: "Collection-Based Updates", desc: "Apply pricing to the right products only." },
        { title: "Price Rollback", desc: "Restore original prices the moment the sale wraps up." },
      ],
    },
    results: [
      { metric: "1–3 hrs", label: "Saved per pricing update", accent: true },
      { metric: "50–75%", label: "Less pricing-management effort", accent: true },
      { metric: "EOFY", label: "Major sale event powered" },
    ],
    resultBody:
      "The app reshaped how the store handles promotions. Pricing updates that previously took one to three hours were cut down dramatically, and the owner estimates the app removed the majority of the manual effort involved in managing prices. The payoff showed up where it mattered most — faster sale launches and a smoother experience for customers during EOFY.",
    quote: "Pro Bulk Price Editor helps us save time and launch promotions faster.",
    quoteName: "Store Owner",
    quoteRole: "Australian specialty coffee retailer",
  },
];
