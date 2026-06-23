import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { MessageSquare, ArrowRight, HelpCircle, ExternalLink } from "lucide-react";
import Layout from "@/components/Layout";
import Seo from "@/components/Seo";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import type { ReactNode } from "react";

const inView = (delay = 0) => ({
  initial: { opacity: 0, y: 22 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-60px" },
  transition: { duration: 0.55, delay, ease: [0.25, 0.46, 0.45, 0.94] as const },
});

const utm = (base: string, content: string) =>
  `${base}${base.includes("?") ? "&" : "?"}utm_source=thaliatechnologies.com&utm_medium=faq_page&utm_campaign=organic_faq&utm_content=${content}`;

type FAQItem = {
  q: string;
  a: ReactNode;
  schemaA: string;
};

type FAQCategory = {
  id: string;
  label: string;
  emoji: string;
  items: FAQItem[];
};

const A = ({
  href,
  children,
  content,
}: {
  href: string;
  children: ReactNode;
  content: string;
}) => (
  <a
    href={utm(href, content)}
    target="_blank"
    rel="noopener noreferrer"
    className="text-primary underline underline-offset-2 inline-flex items-center gap-0.5 hover:opacity-80 transition-opacity"
  >
    {children}
    <ExternalLink className="h-3 w-3 opacity-60 flex-shrink-0" aria-hidden />
  </a>
);

const IL = ({ to, children }: { to: string; children: ReactNode }) => (
  <Link
    to={`${to}${to.includes("?") ? "&" : "?"}utm_source=faq_page&utm_medium=internal&utm_campaign=organic_faq`}
    className="text-primary underline underline-offset-2 hover:opacity-80 transition-opacity"
  >
    {children}
  </Link>
);

const faqData: FAQCategory[] = [
  /* ─── 1. ABOUT THALIA ─────────────────────────────────────────────────── */
  {
    id: "about",
    label: "About Thalia",
    emoji: "🏢",
    items: [
      {
        q: "What is Thalia Technologies?",
        schemaA:
          "Thalia Technologies is a Mumbai-based software company that builds ecommerce tools for Shopify merchants, Amazon sellers, and online businesses globally. We specialise in Shopify apps that help merchants grow sales, automate repetitive tasks, and streamline operations — all without needing a developer.",
        a: (
          <>
            Thalia Technologies is a Mumbai-based software company that builds ecommerce tools for
            Shopify merchants, Amazon sellers, and online businesses globally. We specialise in{" "}
            <IL to="/apps">Shopify apps</IL> that help merchants grow sales, automate repetitive
            tasks, and streamline operations — all without needing a developer.
          </>
        ),
      },
      {
        q: "Where is Thalia Technologies headquartered?",
        schemaA:
          "Thalia Technologies Private Limited is headquartered in Mumbai, Maharashtra, India — specifically at Naman Midtown, Senapati Bapat Marg, Dadar West, Prabhadevi, Mumbai 400013.",
        a: "Thalia Technologies Private Limited is headquartered in Mumbai, Maharashtra, India — specifically at Naman Midtown, Senapati Bapat Marg, Dadar West, Prabhadevi, Mumbai 400013.",
      },
      {
        q: "How many merchants use Thalia Technologies apps?",
        schemaA:
          "Over 100,000 merchants across 100+ countries actively use Thalia apps to power their Shopify stores and Amazon businesses.",
        a: "Over 100,000 merchants across 100+ countries actively use Thalia apps to power their Shopify stores and Amazon businesses.",
      },
      {
        q: "How many Shopify apps does Thalia Technologies offer?",
        schemaA:
          "Thalia Technologies currently offers 17 apps across the Shopify App Store, covering categories like price management, product importing, affiliate product links, inventory alerts, and more.",
        a: (
          <>
            Thalia Technologies currently offers 17 apps across the Shopify App Store, covering
            categories like price management, product importing, affiliate product links, inventory
            alerts, and more. Browse the full list on our <IL to="/apps">Apps page</IL>.
          </>
        ),
      },
      {
        q: "Is Thalia Technologies a Shopify Partner?",
        schemaA:
          "Yes, Thalia Technologies is a registered Shopify Partner. Our apps are listed on the official Shopify App Store and adhere to Shopify's Partner Program requirements, including security reviews and data-handling standards.",
        a: "Yes, Thalia Technologies is a registered Shopify Partner. Our apps are listed on the official Shopify App Store and adhere to Shopify's Partner Program requirements, including security reviews and data-handling standards.",
      },
      {
        q: "What is Thalia Technologies' mission?",
        schemaA:
          "Our mission is to build software that makes a difference — empowering independent merchants and growing ecommerce brands with tools that are powerful yet simple to use.",
        a: (
          <>
            Our mission is to build{" "}
            <span className="font-semibold">software that makes a difference</span> — empowering
            independent merchants and growing ecommerce brands with tools that are powerful yet
            simple to use. We believe great software should work so seamlessly that you forget it's
            there.
          </>
        ),
      },
      {
        q: "Has Thalia Technologies won any awards or recognition?",
        schemaA:
          "Several Thalia apps have been featured in Shopify's App Store editorial picks and have earned high ratings from thousands of verified merchant reviews. Spreadr and Pro Bulk Price Editor consistently rank among the top apps in their categories.",
        a: (
          <>
            Several Thalia apps have been featured in Shopify's App Store editorial picks and have
            earned high ratings from thousands of verified merchant reviews.{" "}
            <IL to="/apps/spreadr">Spreadr</IL> and{" "}
            <IL to="/apps/probulkpriceeditor">Pro Bulk Price Editor</IL> consistently rank among
            the top apps in their categories.
          </>
        ),
      },
    ],
  },

  /* ─── 2. APPS OVERVIEW ────────────────────────────────────────────────── */
  {
    id: "apps-overview",
    label: "Apps Overview",
    emoji: "🛒",
    items: [
      {
        q: "What types of Shopify apps does Thalia offer?",
        schemaA:
          "Thalia's app portfolio spans six categories: Product Importing (Spreadr, Robo Product Importer), Price Management (Pro Bulk Price Editor, Bolt Bulk Editor), Inventory & Alerts (Watchlyst), Product Display (Prime Badges, Clever Variant Images, T2 Icons, Clean Tables, Dual Price Display), Affiliate & External Links (Outlink), and Amazon & FBA (Connectr, Shipr).",
        a: (
          <>
            Thalia's app portfolio spans six categories:{" "}
            <strong>Product Importing</strong> (Spreadr, Robo Product Importer),{" "}
            <strong>Price Management</strong> (Pro Bulk Price Editor, Bolt Bulk Editor),{" "}
            <strong>Inventory &amp; Alerts</strong> (Watchlyst),{" "}
            <strong>Product Display</strong> (Prime Badges, Clever Variant Images, T2 Icons, Clean
            Tables, Dual Price Display), <strong>Affiliate &amp; External Links</strong> (Outlink),
            and <strong>Amazon &amp; FBA</strong> (Connectr, Shipr). View all on our{" "}
            <IL to="/apps">Products page</IL>.
          </>
        ),
      },
      {
        q: "How do I install a Thalia app on my Shopify store?",
        schemaA:
          "All Thalia apps are installed directly through the Shopify App Store. Simply search for the app name, click Add App, and grant the required permissions. No coding is needed — most apps are fully set up in under five minutes.",
        a: (
          <>
            All Thalia apps are installed directly through the{" "}
            <A href="https://apps.shopify.com/partners/thalia" content="install_shopify_store">
              Shopify App Store
            </A>
            . Simply search for the app name, click <em>Add App</em>, and grant the required
            permissions. No coding is needed — most apps are fully set up in under five minutes.
          </>
        ),
      },
      {
        q: "Do Thalia apps work with all Shopify themes?",
        schemaA:
          "Yes. All Thalia apps are designed to work with any published Shopify theme, including free and paid themes. Apps that inject front-end elements also support Online Store 2.0 themes and use Shopify Theme App Extensions where appropriate.",
        a: "Yes. All Thalia apps are designed to work with any published Shopify theme, including free and paid themes. Apps that inject front-end elements (like product badges or variant images) also support Online Store 2.0 themes and use Shopify Theme App Extensions where appropriate, ensuring no theme code is permanently modified.",
      },
      {
        q: "Can I use multiple Thalia apps on the same store?",
        schemaA:
          "Absolutely. Many merchants run three or more Thalia apps simultaneously. Our apps are built to be lightweight and non-conflicting.",
        a: "Absolutely. Many merchants run three or more Thalia apps simultaneously. Our apps are built to be lightweight and non-conflicting, so using Spreadr alongside Pro Bulk Price Editor and Watchlyst, for example, will not cause conflicts.",
      },
      {
        q: "Are Thalia apps compatible with Shopify 2.0 themes?",
        schemaA:
          "Yes. Thalia apps that modify the storefront are built to support Shopify Online Store 2.0 and use Theme App Extensions (TAE) where available, meaning customisation is done through the Shopify theme editor rather than direct theme code injection.",
        a: "Yes. Thalia apps that modify the storefront are built to support Shopify Online Store 2.0 and use Theme App Extensions (TAE) where available, which means customisation is done through the Shopify theme editor rather than direct theme code injection.",
      },
      {
        q: "Do Thalia apps slow down my Shopify store?",
        schemaA:
          "Thalia apps are engineered to be performant. Front-end scripts are minified, deferred where possible, and only loaded on pages where they are needed. We regularly audit app performance against Shopify's built-in speed score.",
        a: "Thalia apps are engineered to be performant. Front-end scripts are minified, deferred where possible, and only loaded on pages where they are needed. We regularly audit app performance against Shopify's built-in speed score to minimise any impact on your store loading times.",
      },
      {
        q: "Are Thalia apps safe to install?",
        schemaA:
          "Yes. All Thalia apps go through Shopify's app review process before being listed. We only request permissions strictly necessary for each app's functionality and do not sell or share your data with third parties.",
        a: (
          <>
            Yes. All Thalia apps go through Shopify's app review process before being listed. We
            only request permissions strictly necessary for each app's functionality, and we do not
            sell or share your data with third parties. See our{" "}
            <A
              href="https://thaliaapps.freshdesk.com/support/solutions/articles/29000038536-privacy-policy"
              content="safety_privacy"
            >
              Privacy Policy
            </A>{" "}
            for full details.
          </>
        ),
      },
      {
        q: "Can I request a custom feature or integration for a Thalia app?",
        schemaA:
          "Yes — we love hearing from merchants! You can submit a feature request via our Freshdesk support portal or use our Contact page. We actively review requests and frequently ship features suggested by the merchant community.",
        a: (
          <>
            We love hearing from merchants! Submit a feature request via our{" "}
            <A
              href="https://thaliaapps.freshdesk.com/support/tickets/new"
              content="feature_request"
            >
              support portal
            </A>{" "}
            or use our <IL to="/contact">Contact page</IL>. We actively review requests and
            frequently ship features suggested by the merchant community.
          </>
        ),
      },
      {
        q: "Do Thalia apps support headless Shopify or custom storefronts?",
        schemaA:
          "Some Thalia apps expose APIs or webhooks that can integrate with headless Shopify setups. Contact our support team to discuss specific headless compatibility requirements for the app you need.",
        a: (
          <>
            Some Thalia apps expose APIs or webhooks that can integrate with headless Shopify
            setups. Contact our{" "}
            <IL to="/contact">support team</IL> to discuss specific headless compatibility
            requirements for the app you need.
          </>
        ),
      },
    ],
  },

  /* ─── 3. PRICING & BILLING ────────────────────────────────────────────── */
  {
    id: "pricing",
    label: "Pricing & Billing",
    emoji: "💰",
    items: [
      {
        q: "Do Thalia apps have a free plan?",
        schemaA:
          "Most Thalia apps offer a free plan or free tier, allowing you to get started with no upfront cost. Paid plans unlock higher usage limits, premium features, and priority support.",
        a: "Most Thalia apps offer a free plan or free tier, allowing you to get started with no upfront cost. Paid plans unlock higher usage limits, premium features, and priority support. Check individual app pages for exact plan details.",
      },
      {
        q: "Is there a free trial for paid plans?",
        schemaA:
          "Yes. Several Thalia apps offer a 7-day or 14-day free trial on paid plans so you can evaluate the full feature set before committing. Trial availability varies by app.",
        a: "Yes. Several Thalia apps offer a 7-day or 14-day free trial on paid plans so you can evaluate the full feature set before committing. Trial availability varies by app — look for the trial badge on each app's Shopify listing.",
      },
      {
        q: "How am I billed for Thalia apps?",
        schemaA:
          "Thalia apps use Shopify's native billing system. Charges appear on your Shopify invoice and are processed monthly by Shopify — you never enter payment details directly with us. Cancellations are instant and refund disputes go through your existing Shopify account.",
        a: "Thalia apps use Shopify's native billing system. Charges appear on your Shopify invoice and are processed monthly by Shopify — you never enter payment details directly with us. This means cancellations are instant and refund disputes go through your existing Shopify account.",
      },
      {
        q: "Can I cancel my subscription at any time?",
        schemaA:
          "Yes. You can uninstall or downgrade any Thalia app at any time from your Shopify admin. Cancellations take effect at the end of the current billing cycle. There are no lock-in contracts or cancellation fees.",
        a: "Yes. You can uninstall or downgrade any Thalia app at any time from your Shopify admin. Cancellations take effect at the end of the current billing cycle. There are no lock-in contracts or cancellation fees.",
      },
      {
        q: "Do you offer discounts for multiple apps or annual billing?",
        schemaA:
          "We occasionally run promotions and bundle offers. For enterprise or high-volume merchants interested in multiple apps, please reach out via our contact form to discuss custom pricing.",
        a: (
          <>
            We occasionally run promotions and bundle offers. For enterprise or high-volume
            merchants interested in multiple apps, please reach out via our{" "}
            <IL to="/contact">contact form</IL> to discuss custom pricing.
          </>
        ),
      },
      {
        q: "Are there any setup or onboarding fees?",
        schemaA:
          "No. There are no hidden setup fees, onboarding fees, or activation charges. You only pay the monthly subscription fee listed on the app's pricing page.",
        a: "No. There are no hidden setup fees, onboarding fees, or activation charges. You only pay the monthly subscription fee listed on the app's pricing page.",
      },
      {
        q: "What happens to my data if I cancel a subscription?",
        schemaA:
          "If you uninstall a Thalia app, your store data remains intact in Shopify. App-specific data (e.g. saved price schedules, alert subscriber lists) may be retained briefly per our data retention policy and then deleted. You can request immediate data deletion by contacting our support team.",
        a: (
          <>
            If you uninstall a Thalia app, your store data (products, prices, etc.) remains intact
            in Shopify. App-specific data (e.g. saved price schedules, alert subscriber lists) may
            be retained for a short period per our data retention policy and then deleted. You can
            request immediate data deletion by contacting our{" "}
            <A
              href="https://thaliaapps.freshdesk.com/support/tickets/new"
              content="data_deletion"
            >
              support team
            </A>
            .
          </>
        ),
      },
    ],
  },

  /* ─── 4. GETTING STARTED ──────────────────────────────────────────────── */
  {
    id: "getting-started",
    label: "Getting Started",
    emoji: "🚀",
    items: [
      {
        q: "How do I get started with Thalia apps?",
        schemaA:
          "Visit our Apps page to browse all available tools, then click through to the Shopify App Store listing for the app you want. Click Add App, follow the install prompts in your Shopify admin, and you're ready to go — most apps include a guided onboarding wizard.",
        a: (
          <>
            Visit our <IL to="/apps">Apps page</IL> to browse all available tools, then click
            through to the Shopify App Store listing for the app you want. Click <em>Add App</em>,
            follow the install prompts in your Shopify admin, and you're ready to go — most apps
            include a guided onboarding wizard.
          </>
        ),
      },
      {
        q: "Do I need technical skills to use Thalia apps?",
        schemaA:
          "No coding knowledge is required for any Thalia app. Our apps are designed for merchants, not developers. All configuration is done through simple dashboards inside your Shopify admin, and our documentation covers every setting in plain English.",
        a: "No coding knowledge is required for any Thalia app. Our apps are designed for merchants, not developers. All configuration is done through simple dashboards inside your Shopify admin, and our documentation covers every setting in plain English.",
      },
      {
        q: "How long does it take to set up a Thalia app?",
        schemaA:
          "Most Thalia apps can be installed and fully configured in under 10 minutes. More advanced configurations may take a bit longer, but our in-app guides walk you through every step.",
        a: "Most Thalia apps can be installed and fully configured in under 10 minutes. More advanced configurations — like setting up custom price schedules or importing a large product catalogue from Amazon — may take a bit longer, but our in-app guides walk you through every step.",
      },
      {
        q: "What Shopify plan do I need to use Thalia apps?",
        schemaA:
          "Thalia apps work with all Shopify plans — Basic, Shopify, Advanced, and Plus. Some advanced features (such as Shopify Markets integration) may require an appropriate Shopify plan on Shopify's end.",
        a: "Thalia apps work with all Shopify plans — Basic, Shopify, Advanced, and Plus. Some advanced features (such as Shopify Markets integration) may require an appropriate Shopify plan on Shopify's end, but the apps themselves don't restrict access by plan tier unless explicitly stated.",
      },
      {
        q: "Is onboarding support available?",
        schemaA:
          "Yes. If you need help getting started, you can raise a support ticket through our Freshdesk portal. Our team typically responds within 24 hours on business days and can guide you through the initial setup.",
        a: (
          <>
            Yes. If you need help getting started, you can raise a support ticket through our{" "}
            <A
              href="https://thaliaapps.freshdesk.com/support/tickets/new"
              content="onboarding_support"
            >
              Freshdesk portal
            </A>
            . Our team typically responds within 24 hours on business days and can guide you through
            the initial setup.
          </>
        ),
      },
      {
        q: "Where can I find documentation and help guides?",
        schemaA:
          "Detailed documentation for all Thalia apps is available in our Freshdesk knowledge base at thaliaapps.freshdesk.com. Each article covers step-by-step instructions with screenshots.",
        a: (
          <>
            Detailed documentation for all Thalia apps is available in our{" "}
            <A
              href="https://thaliaapps.freshdesk.com/support/solutions"
              content="docs_help_guides"
            >
              Freshdesk knowledge base
            </A>
            . Each article covers step-by-step instructions with screenshots to help you get the
            most out of every feature.
          </>
        ),
      },
      {
        q: "How do I update an app to its latest version?",
        schemaA:
          "Thalia apps hosted on the Shopify App Store are updated automatically. When a major update requires new Shopify permissions, Shopify will notify you via email and ask you to approve the updated scopes before the new version activates.",
        a: "Thalia apps hosted on the Shopify App Store are updated automatically — you don't need to do anything. When we release a major update that requires new Shopify permissions, Shopify will notify you via email and ask you to approve the updated scopes before the new version activates.",
      },
    ],
  },

  /* ─── 5. SPREADR ─────────────────────────────────────────────────────── */
  {
    id: "spreadr",
    label: "Spreadr",
    emoji: "📦",
    items: [
      {
        q: "What is Spreadr and what does it do?",
        schemaA:
          "Spreadr is a Shopify app that lets you import Amazon products into your Shopify store in seconds. You can add Amazon product listings — complete with images, descriptions, and pricing — and earn Amazon affiliate commissions every time a customer clicks through and buys on Amazon.",
        a: (
          <>
            <A href="https://apps.shopify.com/amazon-to-shopify" content="spreadr_what">
              Spreadr
            </A>{" "}
            is a Shopify app that lets you import Amazon products into your Shopify store in
            seconds. Add Amazon product listings — complete with images, descriptions, and pricing
            — and earn Amazon affiliate commissions every time a customer clicks through and buys on
            Amazon. It's the fastest way to run an Amazon affiliate store on Shopify.
          </>
        ),
      },
      {
        q: "How does Spreadr import Amazon products to Shopify?",
        schemaA:
          "Simply paste an Amazon product URL or ASIN into Spreadr, and the app fetches the product title, description, images, and price automatically. The imported product is added to your Shopify catalogue. When a shopper clicks Buy Now, they are redirected to Amazon where you earn the affiliate commission.",
        a: (
          <>
            Simply paste an Amazon product URL or ASIN into{" "}
            <A href="https://apps.shopify.com/amazon-to-shopify" content="spreadr_import">
              Spreadr
            </A>
            , and the app fetches the product title, description, images, and price automatically.
            The imported product is added to your Shopify catalogue. When a shopper clicks{" "}
            <em>Buy Now</em>, they are redirected to Amazon where you earn the affiliate commission.
          </>
        ),
      },
      {
        q: "Can I earn Amazon affiliate commissions with Spreadr?",
        schemaA:
          "Yes — that's the core use case. You link your Amazon Associates account to Spreadr, and every click-through from your Shopify store to Amazon is tagged with your affiliate ID. Amazon's standard commission rates (1–10% depending on category) apply.",
        a: (
          <>
            Yes — that's the core use case. You link your Amazon Associates (affiliate) account to{" "}
            <A href="https://apps.shopify.com/amazon-to-shopify" content="spreadr_affiliate">
              Spreadr
            </A>
            , and every click-through from your Shopify store to Amazon is tagged with your
            affiliate ID. Amazon's standard commission rates (1–10% depending on category) apply.
          </>
        ),
      },
      {
        q: "Does Spreadr sync inventory and prices automatically?",
        schemaA:
          "Spreadr can sync prices and product details from Amazon on a scheduled basis (plan-dependent). This means if an Amazon product goes out of stock or its price changes, Spreadr can update your Shopify listing accordingly.",
        a: (
          <>
            <A href="https://apps.shopify.com/amazon-to-shopify" content="spreadr_sync">
              Spreadr
            </A>{" "}
            can sync prices and product details from Amazon on a scheduled basis (plan-dependent).
            This means if an Amazon product goes out of stock or its price changes, Spreadr can
            update your Shopify listing accordingly. Check the Spreadr listing for specific sync
            frequency per plan.
          </>
        ),
      },
      {
        q: "How many products can I import with Spreadr?",
        schemaA:
          "The number of importable products depends on your chosen plan. Free plan allows importing a limited number of products, while paid plans offer unlimited or high-volume imports.",
        a: (
          <>
            The number of importable products depends on your chosen plan. The free plan allows a
            limited import count, while paid plans offer unlimited or high-volume imports. See the
            full plan breakdown on the{" "}
            <A href="https://apps.shopify.com/amazon-to-shopify" content="spreadr_plans">
              Spreadr listing
            </A>
            .
          </>
        ),
      },
      {
        q: "Does Spreadr support Amazon FBA products?",
        schemaA:
          "Yes. Spreadr works with all Amazon product types including FBA listings. For FBA-specific shipping and fulfilment integrations, also check out the Shipr app, which connects your Shopify orders to Amazon FBA fulfillment.",
        a: (
          <>
            Yes. Spreadr works with all Amazon product types including FBA (Fulfilled by Amazon)
            listings. For FBA-specific shipping and fulfilment integrations, also check out our
            dedicated{" "}
            <A href="https://apps.shopify.com/amazon-fba-shipr" content="spreadr_fba_shipr">
              Shipr app
            </A>
            , which connects your Shopify orders directly to Amazon FBA fulfillment.
          </>
        ),
      },
      {
        q: "Which Amazon marketplaces does Spreadr support?",
        schemaA:
          "Spreadr supports Amazon Associates programs from major markets including the US, UK, Canada, India, Germany, France, Japan, and more, allowing merchants worldwide to monetise Amazon products through their Shopify stores.",
        a: (
          <>
            <A href="https://apps.shopify.com/amazon-to-shopify" content="spreadr_markets">
              Spreadr
            </A>{" "}
            supports Amazon Associates programs from major markets including the US, UK, Canada,
            India, Germany, France, Japan, and more. This allows merchants worldwide to monetise
            Amazon products through their Shopify stores.
          </>
        ),
      },
    ],
  },

  /* ─── 6. BULK PRICE EDITOR ────────────────────────────────────────────── */
  {
    id: "bulk-price-editor",
    label: "Bulk Price Editor",
    emoji: "💲",
    items: [
      {
        q: "What is Pro Bulk Price Editor?",
        schemaA:
          "Pro Bulk Price Editor is a Shopify app that lets you update prices for thousands of products simultaneously — using percentage increases, fixed amounts, or custom rules. It's ideal for sale campaigns, margin adjustments, seasonal pricing, or syncing prices with supplier rate cards.",
        a: (
          <>
            <A href="https://apps.shopify.com/pro-bulk-price-editor" content="bpe_what">
              Pro Bulk Price Editor
            </A>{" "}
            is a Shopify app that lets you update prices for thousands of products simultaneously —
            using percentage increases, fixed amounts, or custom rules. It's ideal for sale
            campaigns, margin adjustments, seasonal pricing, or syncing prices with supplier rate
            cards.
          </>
        ),
      },
      {
        q: "Can I schedule price changes in advance?",
        schemaA:
          "Yes. Pro Bulk Price Editor includes scheduled pricing, so you can set a sale to start on Black Friday and automatically revert on Cyber Monday — without being at your computer.",
        a: (
          <>
            Yes.{" "}
            <A href="https://apps.shopify.com/pro-bulk-price-editor" content="bpe_schedule">
              Pro Bulk Price Editor
            </A>{" "}
            includes scheduled pricing, so you can set a sale to start on Black Friday and
            automatically revert on Cyber Monday — without being at your computer. This is one of
            the most popular features for seasonal merchants.
          </>
        ),
      },
      {
        q: "Does Bulk Price Editor support compare-at prices?",
        schemaA:
          "Yes. You can bulk update both the selling price and the compare-at price (strike-through price) simultaneously, which is perfect for running visible discount campaigns.",
        a: "Yes. You can bulk update both the selling price and the compare-at price (strike-through price) simultaneously, which is perfect for running visible discount campaigns that show customers exactly how much they're saving.",
      },
      {
        q: "How many products can I update at once?",
        schemaA:
          "Pro Bulk Price Editor can process tens of thousands of product variants in a single job on paid plans. Jobs run in the background, so you don't need to leave the page open.",
        a: (
          <>
            <A href="https://apps.shopify.com/pro-bulk-price-editor" content="bpe_limits">
              Pro Bulk Price Editor
            </A>{" "}
            can process tens of thousands of product variants in a single job on paid plans. Jobs
            run in the background, so you don't need to leave the page open. Free plan limits are
            lower; check the app listing for current tier limits.
          </>
        ),
      },
      {
        q: "Can I undo price changes made with Bulk Price Editor?",
        schemaA:
          "Yes. Pro Bulk Price Editor keeps a history of every price job, and you can revert any job to restore the original prices. This safety net makes it risk-free to experiment with pricing strategies.",
        a: "Yes. Pro Bulk Price Editor keeps a history of every price job, and you can revert any job to restore the original prices. This safety net makes it risk-free to experiment with pricing strategies.",
      },
      {
        q: "Can I filter which products get updated in a bulk price job?",
        schemaA:
          "Yes. You can filter by product type, vendor, collection, tag, price range, and more before running a price update. This gives precise control so you never accidentally reprice the wrong products.",
        a: (
          <>
            Yes. You can filter by product type, vendor, collection, tag, price range, and more
            before running a price update. This gives precise control so you never accidentally
            reprice the wrong products. Learn more on the{" "}
            <A href="https://apps.shopify.com/pro-bulk-price-editor" content="bpe_filters">
              Pro Bulk Price Editor page
            </A>
            .
          </>
        ),
      },
    ],
  },

  /* ─── 7. WATCHLYST ────────────────────────────────────────────────────── */
  {
    id: "watchlyst",
    label: "Watchlyst",
    emoji: "🔔",
    items: [
      {
        q: "What is Watchlyst?",
        schemaA:
          "Watchlyst is a back-in-stock notification app for Shopify. When a product is out of stock, customers can click a Notify Me button to subscribe for alerts. When inventory is restocked, Watchlyst automatically sends email notifications to all subscribers, driving recovered revenue without any manual work.",
        a: (
          <>
            <A href="https://apps.shopify.com/the-watchlyst" content="watchlyst_what">
              Watchlyst
            </A>{" "}
            is a back-in-stock notification app for Shopify. When a product is out of stock,
            customers can click a <em>Notify Me</em> button to subscribe for alerts. When inventory
            is restocked, Watchlyst automatically sends email notifications to all subscribers,
            driving recovered revenue without any manual work.
          </>
        ),
      },
      {
        q: "How does Watchlyst send back-in-stock notifications?",
        schemaA:
          "When you restock a product, Watchlyst detects the inventory change automatically and sends email notifications to all subscribers for that product or variant. Notifications are sent in batches and can be customised to match your store's branding.",
        a: (
          <>
            When you restock a product,{" "}
            <A href="https://apps.shopify.com/the-watchlyst" content="watchlyst_how">
              Watchlyst
            </A>{" "}
            detects the inventory change automatically and sends email notifications to all
            subscribers for that product or variant. Notifications are sent in batches and can be
            customised to match your store's branding.
          </>
        ),
      },
      {
        q: "Can I customise the back-in-stock email template?",
        schemaA:
          "Yes. Watchlyst allows you to customise the notification email — including subject line, body text, button colours, and store logo — so every alert looks on-brand. Advanced plans may offer HTML email editing for full control.",
        a: "Yes. Watchlyst allows you to customise the notification email — including subject line, body text, button colours, and store logo — so every alert looks on-brand. Advanced plans may offer HTML email editing for full control.",
      },
      {
        q: "Does Watchlyst integrate with Klaviyo or other email platforms?",
        schemaA:
          "Watchlyst can work alongside email marketing platforms. For deeper Klaviyo flows triggered by back-in-stock events, you can use Shopify Flow or contact our team for integration guidance.",
        a: (
          <>
            Watchlyst can work alongside email marketing platforms. For deeper Klaviyo flows
            triggered by back-in-stock events, you can use Shopify Flow or contact our team for
            integration guidance. Visit our{" "}
            <A
              href="https://thaliaapps.freshdesk.com/support/solutions"
              content="watchlyst_klaviyo"
            >
              knowledge base
            </A>{" "}
            for the latest integration documentation.
          </>
        ),
      },
      {
        q: "Does Watchlyst work with product variants?",
        schemaA:
          "Yes. Watchlyst supports variant-level subscriptions. If a customer is waiting for a specific size or colour, they subscribe to that exact variant. Only they receive the alert when that specific variant is restocked.",
        a: (
          <>
            Yes.{" "}
            <A href="https://apps.shopify.com/the-watchlyst" content="watchlyst_variants">
              Watchlyst
            </A>{" "}
            supports variant-level subscriptions. If a customer is waiting for a specific size or
            colour, they subscribe to that exact variant and only receive the alert when that
            specific variant is restocked.
          </>
        ),
      },
    ],
  },

  /* ─── 8. PRODUCT BADGES ───────────────────────────────────────────────── */
  {
    id: "product-badges",
    label: "Product Badges",
    emoji: "🏷️",
    items: [
      {
        q: "What is Prime Product Badges and what does it do?",
        schemaA:
          "Prime Product Badges lets you add eye-catching labels and badges to product images and cards on your Shopify store — such as 'New Arrival', 'Best Seller', 'Sale', or custom text. Badges highlight key products and drive shoppers' attention to the items you want to promote.",
        a: (
          <>
            <A href="https://apps.shopify.com/prime-product-badges" content="prime_what">
              Prime Product Badges
            </A>{" "}
            lets you add eye-catching labels and badges to product images and cards on your Shopify
            store — such as "New Arrival", "Best Seller", "Sale", or custom text. Badges highlight
            key products and drive shoppers' attention to the items you want to promote.
          </>
        ),
      },
      {
        q: "Can I set rules to apply badges automatically?",
        schemaA:
          "Yes. Prime Product Badges supports rule-based badge assignment — for example, automatically badge all products tagged 'new' or all products with a compare-at price. This saves hours of manual work and keeps your badges current as your catalogue changes.",
        a: (
          <>
            Yes.{" "}
            <A href="https://apps.shopify.com/prime-product-badges" content="prime_rules">
              Prime Product Badges
            </A>{" "}
            supports rule-based badge assignment — for example, automatically badge all products
            tagged "new" or all products with a compare-at price. This saves hours of manual work
            and keeps your badges current as your catalogue changes.
          </>
        ),
      },
      {
        q: "Do product badges affect my store's page speed?",
        schemaA:
          "Thalia's badge apps are optimised for performance. Badge images are served via CDN, and the app's scripts are loaded asynchronously to minimise any effect on your Shopify speed score.",
        a: "Thalia's badge apps are optimised for performance. Badge images are served via CDN, and the app's scripts are loaded asynchronously to minimise any effect on your Shopify speed score.",
      },
      {
        q: "Are there pre-designed badge templates available?",
        schemaA:
          "Yes. Prime Product Badges ships with dozens of ready-to-use badge designs that you can customise with your own text, colours, and positioning — no design skills required.",
        a: (
          <>
            Yes.{" "}
            <A href="https://apps.shopify.com/prime-product-badges" content="prime_templates">
              Prime Product Badges
            </A>{" "}
            ships with dozens of ready-to-use badge designs that you can customise with your own
            text, colours, and positioning — no design skills required.
          </>
        ),
      },
    ],
  },

  /* ─── 9. OUTLINK ─────────────────────────────────────────────────────── */
  {
    id: "outlink",
    label: "Outlink",
    emoji: "🔗",
    items: [
      {
        q: "What is Outlink and what does it do?",
        schemaA:
          "Outlink replaces the Add to Cart button on selected products with a custom external link button — ideal for affiliate products, dropshipping partners, or any item sold on an external platform. Customers are redirected to the destination URL you set, while you earn your affiliate commission.",
        a: (
          <>
            <A
              href="https://apps.shopify.com/external-affiliate-product-links"
              content="outlink_what"
            >
              Outlink
            </A>{" "}
            replaces the <em>Add to Cart</em> button on selected products with a custom external
            link button — ideal for affiliate products, dropshipping partners, or any item sold on
            an external platform. Customers are redirected to the destination URL you set, while you
            earn your affiliate commission.
          </>
        ),
      },
      {
        q: "Can I use Outlink with Amazon affiliate links?",
        schemaA:
          "Absolutely. Outlink is one of the most popular ways to run an Amazon affiliate product page on Shopify. Add your Amazon affiliate URL as the product's external link, and Outlink will replace the checkout button with a redirect to Amazon.",
        a: (
          <>
            Absolutely.{" "}
            <A
              href="https://apps.shopify.com/external-affiliate-product-links"
              content="outlink_amazon"
            >
              Outlink
            </A>{" "}
            is one of the most popular ways to run an Amazon affiliate product page on Shopify. Add
            your Amazon affiliate URL as the product's external link, and Outlink replaces the
            checkout button with a redirect to Amazon, keeping your affiliate cookie active.
          </>
        ),
      },
      {
        q: "Does Outlink work on both product pages and collection pages?",
        schemaA:
          "Yes. Outlink can display external link buttons on both individual product detail pages and collection listing pages, ensuring customers can click through to the affiliate destination from anywhere in your store.",
        a: "Yes. Outlink can display external link buttons on both individual product detail pages and collection listing pages, ensuring customers can click through to the affiliate destination from anywhere in your store.",
      },
      {
        q: "Can I customise the text on the Outlink button?",
        schemaA:
          "Yes. Outlink allows you to set custom button text per product — for example 'Buy on Amazon', 'View on Etsy', or any label that matches the destination. This makes the shopping experience clear and on-brand.",
        a: (
          <>
            Yes.{" "}
            <A
              href="https://apps.shopify.com/external-affiliate-product-links"
              content="outlink_button"
            >
              Outlink
            </A>{" "}
            allows you to set custom button text per product — for example "Buy on Amazon", "View
            on Etsy", or any label that matches the destination. This makes the shopping experience
            clear and on-brand.
          </>
        ),
      },
    ],
  },

  /* ─── 10. SUPPORT ────────────────────────────────────────────────────── */
  {
    id: "support",
    label: "Support",
    emoji: "🛠️",
    items: [
      {
        q: "How do I contact Thalia Technologies support?",
        schemaA:
          "The fastest way to get help is to raise a ticket through our Freshdesk support portal at thaliaapps.freshdesk.com. You can also email supportteam@thaliatechnologies.com or use our Contact page.",
        a: (
          <>
            The fastest way to get help is to raise a ticket through our{" "}
            <A
              href="https://thaliaapps.freshdesk.com/support/tickets/new"
              content="support_ticket"
            >
              Freshdesk support portal
            </A>
            . You can also reach us via email at{" "}
            <a
              href="mailto:supportteam@thaliatechnologies.com"
              className="text-primary underline underline-offset-2 hover:opacity-80 transition-opacity"
            >
              supportteam@thaliatechnologies.com
            </a>{" "}
            or through our <IL to="/contact">Contact page</IL>.
          </>
        ),
      },
      {
        q: "What are Thalia's support hours?",
        schemaA:
          "Our support team operates Monday to Friday, 9 AM – 6 PM IST. We aim to respond to all tickets within 24 business hours. Critical issues are prioritised and addressed as quickly as possible.",
        a: "Our support team operates Monday to Friday, 9 AM – 6 PM IST (Indian Standard Time). We aim to respond to all tickets within 24 business hours. Critical issues are prioritised and addressed as quickly as possible.",
      },
      {
        q: "Do you offer live chat support?",
        schemaA:
          "Live chat is available inside select Thalia apps directly from your Shopify admin. For general inquiries and detailed technical questions, ticket-based support ensures your issue is logged, tracked, and handled by the right team member.",
        a: (
          <>
            Live chat is available inside select Thalia apps directly from your Shopify admin. For
            general inquiries and detailed technical questions, our{" "}
            <A
              href="https://thaliaapps.freshdesk.com/support/tickets/new"
              content="support_livechat"
            >
              ticket-based support
            </A>{" "}
            ensures your issue is logged, tracked, and handled by the right team member.
          </>
        ),
      },
      {
        q: "Where can I find the knowledge base and help articles?",
        schemaA:
          "Visit thaliaapps.freshdesk.com for our full library of help articles, setup guides, and troubleshooting tips covering all Thalia apps.",
        a: (
          <>
            Visit our{" "}
            <A href="https://thaliaapps.freshdesk.com/support/solutions" content="support_kb">
              Freshdesk knowledge base
            </A>{" "}
            for our full library of help articles, setup guides, video walkthroughs, and
            troubleshooting tips covering all Thalia apps.
          </>
        ),
      },
      {
        q: "How do I report a bug in a Thalia app?",
        schemaA:
          "Please raise a bug report via our support portal with your store URL, a description of the issue, steps to reproduce it, and any screenshots. Our engineering team reviews all reported bugs and ships fixes in our regular update cycle.",
        a: (
          <>
            Please raise a bug report via our{" "}
            <A href="https://thaliaapps.freshdesk.com/support/tickets/new" content="bug_report">
              support portal
            </A>{" "}
            with your store URL, a description of the issue, steps to reproduce it, and any
            screenshots. Our engineering team reviews all reported bugs and ships fixes in our
            regular update cycle.
          </>
        ),
      },
      {
        q: "Can I leave a review for a Thalia app?",
        schemaA:
          "Yes — and we'd love it if you did! You can leave a review directly on the app's Shopify App Store listing. Reviews help other merchants discover our apps and give us valuable feedback.",
        a: (
          <>
            Yes — and we'd love it if you did! You can leave a review directly on the app's{" "}
            <A href="https://apps.shopify.com/partners/thalia" content="leave_review">
              Shopify App Store listing
            </A>
            . Reviews help other merchants discover our apps and give us valuable feedback to keep
            improving.
          </>
        ),
      },
    ],
  },

  /* ─── 11. INTEGRATIONS ────────────────────────────────────────────────── */
  {
    id: "integrations",
    label: "Integrations",
    emoji: "🔌",
    items: [
      {
        q: "Do Thalia apps integrate with Klaviyo?",
        schemaA:
          "Thalia apps are designed to work within the Shopify ecosystem. Watchlyst back-in-stock events can be used alongside email platforms via Shopify customer data. For deeper Klaviyo flows, see our knowledge base for the latest integration guides.",
        a: (
          <>
            Thalia apps are designed to work within the Shopify ecosystem. Watchlyst back-in-stock
            events can be used alongside email platforms via Shopify customer data. For deeper
            Klaviyo flows, see our{" "}
            <A
              href="https://thaliaapps.freshdesk.com/support/solutions"
              content="integration_klaviyo"
            >
              knowledge base
            </A>{" "}
            for the latest integration guides.
          </>
        ),
      },
      {
        q: "Are Thalia apps compatible with PageFly or GemPages page builders?",
        schemaA:
          "Most Thalia apps that modify the storefront are compatible with popular page builders like PageFly and GemPages. If you encounter any display issues, our support team can help with custom CSS or placement adjustments.",
        a: "Most Thalia apps that modify the storefront (badges, variant images, price displays) are compatible with popular page builders like PageFly and GemPages. If you encounter any display issues, our support team can help with custom CSS or placement adjustments.",
      },
      {
        q: "Do Thalia apps support Shopify Markets and multi-currency?",
        schemaA:
          "Yes. Our price management apps are Shopify Markets-aware, and our front-end display apps respect Shopify's currency conversion. Specific Markets support varies by app — check individual app documentation or contact support for details.",
        a: "Yes. Our price management apps (Pro Bulk Price Editor) are Shopify Markets-aware, and our front-end display apps respect Shopify's currency conversion. Specific Markets support varies by app — check individual app documentation or contact support for details.",
      },
      {
        q: "Are Thalia apps compatible with Shopify Plus?",
        schemaA:
          "Yes. All Thalia apps work with Shopify Plus stores. Shopify Plus merchants also benefit from higher API rate limits, which allows our apps to process large catalogues faster.",
        a: "Yes. All Thalia apps work with Shopify Plus stores. Shopify Plus merchants also benefit from higher API rate limits, which allows our apps (particularly bulk operation apps) to process large catalogues faster.",
      },
      {
        q: "Does Thalia integrate with Google Analytics or GA4?",
        schemaA:
          "Thalia apps respect and do not interfere with your store's existing Google Analytics 4 or Google Tag Manager setup. The Thalia Technologies website itself uses GA4 for analytics, but individual app tracking is handled through Shopify's native analytics.",
        a: "Thalia apps respect and do not interfere with your store's existing Google Analytics 4 or Google Tag Manager setup. Our apps pass through Shopify's standard data layer so GA4 events (like add-to-cart) continue to fire correctly.",
      },
      {
        q: "Can I use Thalia apps with Shopify Flow for automation?",
        schemaA:
          "Several Thalia apps emit Shopify custom events that can trigger Shopify Flow workflows. This enables powerful automations — for example, tagging a customer who subscribed for a back-in-stock alert via Watchlyst. Check individual app documentation for Flow compatibility details.",
        a: (
          <>
            Several Thalia apps emit Shopify custom events that can trigger{" "}
            <A
              href="https://apps.shopify.com/flow"
              content="shopify_flow"
            >
              Shopify Flow
            </A>{" "}
            workflows. This enables powerful automations — for example, tagging a customer who
            subscribed via Watchlyst. Check individual app documentation for Flow compatibility
            details.
          </>
        ),
      },
    ],
  },

  /* ─── 12. PRIVACY & SECURITY ─────────────────────────────────────────── */
  {
    id: "privacy",
    label: "Privacy & Security",
    emoji: "🔒",
    items: [
      {
        q: "Is my store data safe with Thalia apps?",
        schemaA:
          "Yes. Thalia Technologies follows industry-standard security practices — data is transmitted over HTTPS, app access tokens are stored securely, and we only access the Shopify API scopes strictly required for each app's functionality.",
        a: (
          <>
            Yes. Thalia Technologies follows industry-standard security practices — data is
            transmitted over HTTPS, app access tokens are stored securely, and we only access the
            Shopify API scopes strictly required for each app's functionality. Full details are in
            our{" "}
            <A
              href="https://thaliaapps.freshdesk.com/support/solutions/articles/29000038536-privacy-policy"
              content="privacy_safe"
            >
              Privacy Policy
            </A>
            .
          </>
        ),
      },
      {
        q: "Does Thalia Technologies comply with GDPR?",
        schemaA:
          "Yes. We are committed to GDPR compliance for all merchants and customers in the European Union. This includes providing data access and deletion rights, minimising data collection, and maintaining clear data processing records.",
        a: (
          <>
            Yes. We are committed to GDPR compliance for all merchants and customers in the
            European Union. This includes providing data access and deletion rights, minimising
            data collection, and maintaining clear data processing records. For GDPR-specific
            requests, contact us at{" "}
            <a
              href="mailto:info@thaliatechnologies.com"
              className="text-primary underline underline-offset-2 hover:opacity-80 transition-opacity"
            >
              info@thaliatechnologies.com
            </a>
            .
          </>
        ),
      },
      {
        q: "What data do Thalia apps access from my Shopify store?",
        schemaA:
          "Each Thalia app only requests the Shopify permissions it needs to function. For example, a price editor app requests write access to product pricing, while a badge app requests read access to products. We never request unnecessary permissions.",
        a: "Each Thalia app only requests the Shopify permissions it needs to function. For example, a price editor app requests write access to product pricing, while a badge app requests read access to products. We never request unnecessary permissions, and the full list of permissions is shown at install time in your Shopify admin.",
      },
      {
        q: "Does Thalia sell my data to third parties?",
        schemaA:
          "No. Thalia Technologies does not sell, rent, or share your store data or your customers' personal data with third parties. Data collected by our apps is used solely to provide and improve the app's functionality.",
        a: (
          <>
            No. Thalia Technologies does not sell, rent, or share your store data or your
            customers' personal data with third parties. Data collected by our apps is used solely
            to provide and improve the app's functionality. Read our full{" "}
            <A
              href="https://thaliaapps.freshdesk.com/support/solutions/articles/29000038536-privacy-policy"
              content="privacy_sell"
            >
              Privacy Policy
            </A>{" "}
            for complete information.
          </>
        ),
      },
      {
        q: "How do I request deletion of my data?",
        schemaA:
          "To request deletion of your store or customer data held by Thalia apps, please contact us at info@thaliatechnologies.com or raise a ticket via our Freshdesk support portal. We process data deletion requests within 30 days.",
        a: (
          <>
            To request deletion of your store or customer data held by Thalia apps, please contact
            us at{" "}
            <a
              href="mailto:info@thaliatechnologies.com"
              className="text-primary underline underline-offset-2 hover:opacity-80 transition-opacity"
            >
              info@thaliatechnologies.com
            </a>{" "}
            or raise a ticket via our{" "}
            <A
              href="https://thaliaapps.freshdesk.com/support/tickets/new"
              content="data_deletion_request"
            >
              Freshdesk support portal
            </A>
            . We process data deletion requests within 30 days in compliance with GDPR and
            applicable data protection laws.
          </>
        ),
      },
    ],
  },
];

const totalQuestions = faqData.reduce((acc, cat) => acc + cat.items.length, 0);

/* ── Schema.org FAQPage structured data ─────────────────────────────────── */
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqData.flatMap((cat) =>
    cat.items.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.schemaA,
      },
    }))
  ),
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: "https://www.thaliatechnologies.com/",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "FAQ",
      item: "https://www.thaliatechnologies.com/faq",
    },
  ],
};

/* ══════════════════════════════════════════════════════════════════════════
   FAQ PAGE COMPONENT
══════════════════════════════════════════════════════════════════════════ */
const FAQ = () => {
  const [activeCategory, setActiveCategory] = useState<string>("about");

  const scrollToCategory = (id: string) => {
    setActiveCategory(id);
    const el = document.getElementById(`faq-section-${id}`);
    if (el) {
      const offset = 88;
      const top = el.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  return (
    <Layout>
      <Seo
        title="FAQ — Thalia Technologies | Shopify Apps Help & Answers"
        description={`Find answers to ${totalQuestions}+ frequently asked questions about Thalia Technologies, our Shopify apps (Spreadr, Pro Bulk Price Editor, Watchlyst, Outlink, and more), pricing, support, and data privacy.`}
        keywords="Thalia Technologies FAQ, Shopify app help, Spreadr FAQ, bulk price editor help, Watchlyst support, Thalia apps pricing, Shopify affiliate app questions, ecommerce app FAQ"
        path="/faq"
        structuredData={[faqSchema, breadcrumbSchema]}
      />

      {/* ══════════════════════════════════════════════════════════════
          HERO — dark navy
      ══════════════════════════════════════════════════════════════ */}
      <section
        className="relative overflow-hidden hero-dot-grid"
        style={{ background: "hsl(var(--hero-bg))", paddingTop: 96, paddingBottom: 88 }}
      >
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 70% 55% at 50% -5%, rgba(0,192,255,0.13) 0%, transparent 65%)",
          }}
        />

        <div className="section-container relative">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6 text-xs font-semibold font-body select-none"
              style={{
                border: "1px solid rgba(0,192,255,0.28)",
                background: "rgba(0,192,255,0.08)",
                color: "#00c0ff",
              }}
            >
              <HelpCircle className="w-3.5 h-3.5" aria-hidden />
              HELP CENTER
            </motion.div>

            <h1 className="sr-only">
              Frequently Asked Questions — Thalia Technologies Shopify Apps
            </h1>

            <motion.h2
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.08 }}
              className="font-heading font-extrabold text-white mb-6"
              style={{
                fontSize: "clamp(38px, 5.5vw, 62px)",
                lineHeight: 1.08,
                letterSpacing: "-0.03em",
              }}
            >
              Frequently Asked{" "}
              <span className="gradient-text-cyan">Questions</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.18 }}
              className="text-lg leading-relaxed mb-10 font-body mx-auto max-w-2xl"
              style={{ color: "rgba(255,255,255,0.68)" }}
            >
              Everything you need to know about Thalia Technologies and our Shopify apps —
              answered clearly and in one place.
            </motion.p>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.26 }}
              className="flex flex-wrap justify-center gap-3"
            >
              {[
                { value: `${totalQuestions}+`, label: "Answers" },
                { value: "12", label: "Topics" },
                { value: "17", label: "Apps Covered" },
                { value: "100k+", label: "Merchants Served" },
              ].map((s) => (
                <div
                  key={s.label}
                  className="flex items-baseline gap-2 px-4 py-2 rounded-full font-body"
                  style={{
                    background: "rgba(255,255,255,0.04)",
                    border: "1px solid rgba(255,255,255,0.08)",
                    backdropFilter: "blur(12px)",
                  }}
                >
                  <span
                    className="gradient-text-cyan text-base font-heading font-bold"
                  >
                    {s.value}
                  </span>
                  <span
                    className="text-xs uppercase tracking-[0.12em]"
                    style={{ color: "rgba(255,255,255,0.55)" }}
                  >
                    {s.label}
                  </span>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════
          STICKY CATEGORY NAV
      ══════════════════════════════════════════════════════════════ */}
      <div
        className="sticky z-30 bg-white border-b border-border"
        style={{ top: 68 }}
      >
        <div className="section-container">
          <div className="flex gap-1 overflow-x-auto py-3 scrollbar-hide no-scrollbar">
            {faqData.map((cat) => (
              <button
                key={cat.id}
                onClick={() => scrollToCategory(cat.id)}
                className={`flex-shrink-0 px-3.5 py-1.5 rounded-full text-xs font-semibold font-body transition-all duration-150 whitespace-nowrap ${
                  activeCategory === cat.id
                    ? "bg-primary text-primary-foreground shadow-sm"
                    : "text-muted-foreground hover:text-foreground hover:bg-muted"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* ══════════════════════════════════════════════════════════════
          FAQ SECTIONS
      ══════════════════════════════════════════════════════════════ */}
      <div className="bg-white" style={{ paddingBottom: 96 }}>
        <div className="section-container">
          <div className="max-w-4xl mx-auto">
            {faqData.map((cat, catIdx) => (
              <motion.section
                key={cat.id}
                id={`faq-section-${cat.id}`}
                {...inView(catIdx === 0 ? 0 : 0.05)}
                style={{ paddingTop: 72 }}
              >
                {/* Category Header */}
                <div className="mb-6">
                  <h2
                    className="font-heading font-extrabold text-foreground"
                    style={{ fontSize: 22, letterSpacing: "-0.02em" }}
                  >
                    {cat.label}
                  </h2>
                  <p className="text-xs text-muted-foreground font-body mt-0.5">
                    {cat.items.length} question{cat.items.length !== 1 ? "s" : ""}
                  </p>
                </div>

                {/* Divider */}
                <div
                  className="mb-4"
                  style={{
                    height: 1,
                    background:
                      "linear-gradient(90deg, rgba(0,192,255,0.25) 0%, transparent 80%)",
                  }}
                />

                {/* Accordion */}
                <Accordion type="single" collapsible className="w-full">
                  {cat.items.map((item, itemIdx) => (
                    <AccordionItem
                      key={`${cat.id}-${itemIdx}`}
                      value={`${cat.id}-${itemIdx}`}
                      className="border-b border-border/60 last:border-b-0"
                    >
                      <AccordionTrigger
                        className="text-left font-heading font-semibold text-foreground hover:no-underline hover:text-primary transition-colors py-5 text-[15px] leading-snug"
                      >
                        {item.q}
                      </AccordionTrigger>
                      <AccordionContent className="text-[14.5px] leading-relaxed text-muted-foreground font-body pb-5">
                        {item.a}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </motion.section>
            ))}
          </div>
        </div>
      </div>

      {/* ══════════════════════════════════════════════════════════════
          DIDN'T FIND YOUR ANSWER CTA
      ══════════════════════════════════════════════════════════════ */}
      <section style={{ background: "hsl(var(--section-alt))", paddingTop: 80, paddingBottom: 96 }}>
        <div className="section-container">
          <motion.div
            {...inView(0)}
            className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto"
          >
            {/* Contact support */}
            <a
              href={utm(
                "https://thaliaapps.freshdesk.com/support/tickets/new",
                "faq_bottom_support_cta"
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="card-elevated p-8 block group"
              style={{ borderTop: "2px solid rgba(0,192,255,0.22)" }}
            >
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                style={{
                  background: "rgba(0,192,255,0.1)",
                  border: "1px solid rgba(0,192,255,0.18)",
                }}
              >
                <MessageSquare className="h-5 w-5 text-primary" aria-hidden />
              </div>
              <h3 className="font-heading font-bold text-foreground mb-2">
                Still have a question?
              </h3>
              <p className="text-sm text-muted-foreground font-body leading-relaxed mb-4">
                Our support team typically responds within 24 hours on business days. Raise a
                ticket and we'll get right back to you.
              </p>
              <span className="inline-flex items-center gap-1.5 text-sm font-medium text-primary font-body group-hover:underline">
                Open a Support Ticket
                <ArrowRight className="h-3.5 w-3.5" aria-hidden />
              </span>
            </a>

            {/* Browse apps */}
            <div
              className="relative overflow-hidden rounded-2xl p-8"
              style={{
                background: "linear-gradient(135deg, #00c0ff 0%, #7c3aed 100%)",
                boxShadow: "0 24px 60px rgba(0,192,255,0.2)",
              }}
            >
              <div
                className="absolute inset-0 pointer-events-none opacity-20"
                style={{
                  backgroundImage:
                    "radial-gradient(rgba(255,255,255,0.25) 1px, transparent 1px)",
                  backgroundSize: "20px 20px",
                }}
              />
              <div className="relative">
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                  style={{ background: "rgba(255,255,255,0.15)" }}
                >
                  <HelpCircle className="h-5 w-5 text-white" aria-hidden />
                </div>
                <h3 className="font-heading font-bold text-white mb-2">
                  Explore Our Apps
                </h3>
                <p className="text-sm text-white/80 font-body leading-relaxed mb-5">
                  Browse all 17 Thalia apps for Shopify — find the right tool to grow your store
                  faster.
                </p>
                <Link
                  to="/apps?utm_source=faq_page&utm_medium=internal&utm_campaign=organic_faq&utm_content=faq_bottom_apps_cta"
                  className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-full bg-white text-sm font-semibold font-body transition-transform hover:scale-[1.02]"
                  style={{ color: "hsl(220 44% 8%)" }}
                >
                  Browse All Apps
                  <ArrowRight className="h-3.5 w-3.5" aria-hidden />
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default FAQ;
