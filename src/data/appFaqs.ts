export type AppFaq = {
  q: string;
  a: string;
};

export const appFaqs: Record<string, AppFaq[]> = {
  spreadr: [
    {
      q: "What is Spreadr and how does it work?",
      a: "Spreadr connects your Shopify store to Amazon, letting you import any Amazon product in seconds. Paste a product URL or ASIN, and Spreadr pulls in the title, images, description, and price. When a customer clicks Buy, they're sent to Amazon — and you earn an affiliate commission.",
    },
    {
      q: "Do I need an Amazon Associates account to use Spreadr?",
      a: "An Amazon Associates (affiliate) account is required if you want to earn commissions. If you're using Spreadr purely for dropshipping, you can operate without an affiliate account. You can sign up for Amazon Associates for free at affiliate-program.amazon.com.",
    },
    {
      q: "Does Spreadr keep prices and stock in sync with Amazon automatically?",
      a: "Yes. Paid plans include automated price and availability sync. Spreadr periodically checks Amazon for changes and updates your Shopify listings accordingly, so you won't be selling out-of-stock products or quoting incorrect prices.",
    },
    {
      q: "Which Amazon marketplaces does Spreadr support?",
      a: "Spreadr supports all major Amazon regions, including US, UK, Canada, India, Germany, France, Italy, Spain, Japan, Australia, and more. You can set a default region and also geo-localise links so customers are directed to their nearest Amazon storefront.",
    },
    {
      q: "Can I customise imported product listings?",
      a: "Absolutely. After importing, you can edit the product title, description, images, price markup, tags, and any Shopify field as you would a regular product. Spreadr also lets you set global markup rules so all imported products reflect your desired margin automatically.",
    },
    {
      q: "How many products can I import on the free plan?",
      a: "Spreadr's Basic paid plan starts at $5/month and includes unlimited imports. There is no permanent free plan — however, Shopify Partner and development stores can use Spreadr for free for testing purposes.",
    },
  ],

  probulkpriceeditor: [
    {
      q: "What types of price changes can Pro Bulk Price Editor make?",
      a: "You can increase or decrease prices by a fixed amount, by percentage, or set a specific price. The same rules apply to compare-at prices (strike-through prices). You can also round prices to a specific format (e.g. .99) after applying the change.",
    },
    {
      q: "Can I target only specific products or collections?",
      a: "Yes. Before running a job, you can filter by product title, collection, product type, vendor, tag, price range, or SKU. This lets you reprice just one collection — for example, a sale on winter clothing — without touching the rest of your catalogue.",
    },
    {
      q: "How does the scheduling feature work?",
      a: "You create a price job, set a start date and time, and optionally an end date. At the scheduled time, prices update automatically. When the end date arrives, the app can auto-revert to original prices, making it perfect for Black Friday or flash sales without manual intervention.",
    },
    {
      q: "What is the rollback feature and how do I use it?",
      a: "Every price job is saved in a history log with the before and after values. If you make a mistake or want to end a sale early, click Rollback on any job and all affected products revert to their original prices instantly — no manual work required.",
    },
    {
      q: "Is there a limit on how many products I can update at once?",
      a: "Paid plans support unlimited products and variants per job. Jobs are queued and processed in the background using Shopify's bulk operations API, so even a 100,000-variant catalogue can be updated without timeout issues.",
    },
    {
      q: "Does Pro Bulk Price Editor work with Shopify Plus?",
      a: "Yes. The app is fully compatible with Shopify Plus and takes advantage of Plus's higher API rate limits, meaning large catalogues are processed significantly faster than on standard Shopify plans.",
    },
  ],

  watchlyst: [
    {
      q: "What exactly does Watchlyst do?",
      a: "Watchlyst adds a 'Notify Me When Price Drops' button to your product pages. Customers who aren't ready to buy at the current price can subscribe. When you lower the price, Watchlyst automatically sends them a personalised email — bringing them back at a moment of peak purchase intent.",
    },
    {
      q: "Does Watchlyst also handle back-in-stock notifications?",
      a: "Yes. Watchlyst covers both price drop alerts and back-in-stock notifications. When a product is out of stock, the button switches to 'Notify Me When Back in Stock'. Customers receive an automatic alert the moment you restock, recovering sales you would otherwise lose permanently.",
    },
    {
      q: "Can I customise the subscription button and email templates?",
      a: "Yes. You can customise the button text, colour, size, and placement to match your store's brand. The email notification template is also fully editable — add your logo, adjust the copy, change colours, and control which product details are included.",
    },
    {
      q: "How does Watchlyst detect price changes?",
      a: "Watchlyst listens for Shopify product update webhooks in real time. The moment you lower a price — whether manually, via a bulk edit, or through a scheduled sale — the webhook fires and Watchlyst immediately queues notification emails to all subscribers of that product.",
    },
    {
      q: "Does Watchlyst work with product variants?",
      a: "Yes. Subscribers can sign up at the variant level, so a customer waiting for a red T-shirt in size M only gets notified when that specific variant's price drops or comes back in stock. This prevents irrelevant alerts and keeps engagement high.",
    },
    {
      q: "How much revenue can I expect to recover?",
      a: "Results vary by store and pricing strategy, but Watchlyst customers typically see email click-through rates of 20–40% and conversion rates 3–5x higher than standard marketing emails — because the subscriber is already interested in that exact product.",
    },
  ],

  connectr: [
    {
      q: "What does Connectr do?",
      a: "Connectr creates a real-time, bidirectional sync between your Amazon Seller account and your Shopify store. Inventory levels, product details, pricing, and orders stay in perfect sync across both platforms automatically — eliminating overselling and manual updates.",
    },
    {
      q: "Does Connectr sync inventory in real time?",
      a: "Yes. When a product sells on Amazon, your Shopify inventory is updated within seconds, and vice versa. This real-time sync prevents you from selling items that are already out of stock on the other platform.",
    },
    {
      q: "Which platform is the source of truth for product data?",
      a: "You choose. During setup you decide whether Shopify or Amazon is the primary source of truth for product titles, descriptions, and images. You can also configure per-field rules — for example, prices managed in Shopify but descriptions pulled from Amazon.",
    },
    {
      q: "Does Connectr support multiple Amazon marketplaces?",
      a: "Yes. Connectr works with all Amazon Selling Partner API-supported regions, including North America (US, CA, MX), Europe (UK, DE, FR, IT, ES), and Asia Pacific (JP, AU, IN). You can sync a single Shopify store against multiple Amazon marketplaces simultaneously.",
    },
    {
      q: "What happens if a sync error occurs?",
      a: "Connectr's error monitoring system sends you instant in-app and email alerts for any failed sync. Each error includes a clear description and suggested fix. A detailed sync log lets you review the full history of all operations across all products.",
    },
  ],

  "bolt-bulk-editor": [
    {
      q: "What is Bolt Bulk Editor and how is it different from Pro Bulk Price Editor?",
      a: "Bolt Bulk Editor is a fast, flexible spreadsheet-style editor for bulk-editing any Shopify product field — title, description, price, compare-at price, tags, vendor, weight, and more — all in one place. Pro Bulk Price Editor focuses exclusively on price changes with advanced scheduling. Bolt is the go-to tool when you need to edit any field across your catalogue at once.",
    },
    {
      q: "What product fields can I edit in bulk with Bolt?",
      a: "Bolt lets you bulk edit virtually every Shopify product field: title, body HTML, vendor, product type, tags, price, compare-at price, cost, weight, barcode, SKU, inventory quantity, images, metafields, and variant-level fields. Changes apply across all selected products simultaneously.",
    },
    {
      q: "Can I filter products before running a bulk edit?",
      a: "Yes. You can filter by collection, product type, vendor, tag, price range, publication status, and more before selecting products for a bulk edit. This ensures only the intended products are modified.",
    },
    {
      q: "Is there an undo option if I make a mistake?",
      a: "Yes. Bolt keeps a job history with before-and-after snapshots. You can revert any completed job to restore the previous field values — providing a safety net for large-scale edits.",
    },
    {
      q: "How fast does Bolt process large catalogues?",
      a: "Bolt uses Shopify's Bulk Operations API, which processes mutations in bulk on Shopify's servers rather than making individual API calls. This means tens of thousands of products can be updated in minutes rather than hours.",
    },
  ],

  "dual-price-display": [
    {
      q: "What is Dual Price Display and who is it for?",
      a: "Dual Price Display shows two prices on your product pages simultaneously — typically an ex-VAT (net) price and an inc-VAT (gross) price. It's designed for Shopify stores selling to both B2B (business) and B2C (consumer) customers in VAT/GST jurisdictions such as the EU, UK, Australia, India, and more.",
    },
    {
      q: "How does the app calculate the second price?",
      a: "You configure a tax rate percentage in the app settings. Dual Price Display then calculates and displays the second price in real time based on your Shopify product prices. You choose whether to display ex-tax or inc-tax as the primary price and the other as the secondary.",
    },
    {
      q: "Does Dual Price Display work on collection pages and cart?",
      a: "Yes. The dual price display can be shown on product detail pages, collection listing pages, and search results. Cart and checkout prices are managed by Shopify's native tax settings and are not modified by this app.",
    },
    {
      q: "Can I customise the label text next to each price?",
      a: "Yes. You can customise the label that appears next to each price — for example, 'Excl. VAT' and 'Incl. VAT', or 'Ex GST' and 'Inc GST', or any custom text that suits your store and jurisdiction.",
    },
    {
      q: "Does it work with Shopify's automatic tax settings?",
      a: "Dual Price Display works as a front-end display layer and reads your product prices from Shopify. It's designed to complement — not replace — Shopify's built-in tax system. Your actual checkout tax calculations remain handled by Shopify.",
    },
  ],

  outlink: [
    {
      q: "What does Outlink do?",
      a: "Outlink replaces the 'Add to Cart' button on selected products with a custom 'Buy Now' or external link button. When customers click it, they are redirected to any URL you specify — typically an affiliate link, a dropshipping supplier, or an external product page — instead of going through Shopify checkout.",
    },
    {
      q: "Can I use different external links for different products?",
      a: "Yes. Each product can have its own unique external URL set via a Shopify product metafield. This means Product A can link to Amazon, Product B to your own separate website, and Product C to a partner store — all handled independently.",
    },
    {
      q: "Does Outlink work with Amazon affiliate links?",
      a: "Absolutely. This is the most common use case. Set your Amazon Associates affiliate URL as the product's external link. Outlink redirects customers directly to that Amazon listing with your affiliate tag, ensuring your commission is tracked correctly on every click.",
    },
    {
      q: "Can I customise the button text and styling?",
      a: "Yes. Outlink lets you set custom button text per product (e.g. 'Buy on Amazon', 'Shop on Etsy') and configure the button colour, size, and style to match your store's design.",
    },
    {
      q: "Does Outlink open the external link in a new tab?",
      a: "Yes. By default, Outlink opens external links in a new browser tab so customers don't lose their place on your store. This setting is configurable in the app dashboard.",
    },
    {
      q: "Will Outlink work with my Shopify 2.0 theme?",
      a: "Yes. Outlink is compatible with Online Store 2.0 themes and uses Shopify Theme App Extensions, meaning the button is added without modifying your theme's code directly.",
    },
  ],

  "robo-product-importer": [
    {
      q: "What is Robo Product Importer?",
      a: "Robo Product Importer lets you import products from any website into your Shopify store by simply providing a product URL. Robo scrapes the product title, description, images, and pricing and creates a Shopify product draft — saving hours of manual data entry.",
    },
    {
      q: "Which websites can I import products from?",
      a: "Robo works with a wide range of ecommerce sites and supplier catalogues. Compatibility varies by site structure. It works best with standard ecommerce pages that have clearly structured product data. Amazon imports are handled more specifically by Spreadr.",
    },
    {
      q: "Does Robo import product images automatically?",
      a: "Yes. Robo extracts product images from the source page and uploads them directly to your Shopify product. You can review and remove unwanted images before publishing the product.",
    },
    {
      q: "Can I edit imported products before publishing?",
      a: "Yes. All imports create a draft product in Shopify that you can review and edit before publishing. You can modify the title, description, pricing, images, tags, and any other field to match your store's standards.",
    },
    {
      q: "Is there a bulk import option?",
      a: "Yes. You can submit multiple product URLs in one batch and Robo will process them sequentially, creating draft products for each. This is ideal for onboarding a new supplier's catalogue quickly.",
    },
  ],

  "t2-product-icons": [
    {
      q: "What are T2 Product Description Icons?",
      a: "T2 lets you add small, visually appealing icons to your product description sections — icons for materials, care instructions, features, certifications, and more. These replace walls of text with scannable visual highlights that shoppers can understand at a glance.",
    },
    {
      q: "Do I need design skills to create icons with T2?",
      a: "No. T2 includes a library of pre-designed icons covering common product attributes across many categories. Simply select the icons relevant to your products and assign them to product descriptions — no graphic design or coding needed.",
    },
    {
      q: "Can I assign different icon sets to different products?",
      a: "Yes. You can create multiple icon sets and apply them per product, by collection, or by product type. This means a clothing product can show fabric and care icons while a tech product shows warranty and compatibility icons.",
    },
    {
      q: "Does T2 work with all Shopify themes?",
      a: "T2 integrates with Shopify's product description field, which is rendered by all themes. It's compatible with both legacy and Online Store 2.0 themes. The icon layout is responsive and adapts to mobile and desktop displays.",
    },
    {
      q: "Can I upload my own custom icons?",
      a: "Yes. In addition to the pre-built icon library, T2 allows you to upload your own SVG or image icons for a fully branded experience that matches your store's visual identity.",
    },
  ],

  shipr: [
    {
      q: "What is Shipr?",
      a: "Shipr connects your Shopify store directly to Amazon FBA (Fulfilled by Amazon). When a customer places an order on your Shopify store, Shipr automatically routes the fulfillment request to Amazon FBA, which picks, packs, and ships the order from its warehouses on your behalf.",
    },
    {
      q: "Do I need to store inventory with Amazon FBA to use Shipr?",
      a: "Yes. Shipr is specifically designed for merchants who already have inventory stored in Amazon FBA warehouses. You use Amazon FBA as your fulfillment provider for Shopify orders, giving your customers the fast, reliable shipping Amazon FBA is known for.",
    },
    {
      q: "Which regions does Shipr support for FBA fulfillment?",
      a: "Shipr works with Amazon FBA in all major regions including the US, UK, EU (Germany, France, Italy, Spain), Canada, Australia, Japan, and India. Multi-region FBA setups are also supported.",
    },
    {
      q: "What happens if an FBA shipment is delayed or lost?",
      a: "Shipr provides real-time fulfillment status updates from Amazon FBA back to your Shopify order management system. If Amazon marks an order as delayed or lost, Shipr reflects that status in Shopify so you can take action promptly.",
    },
    {
      q: "Can Shipr route only some Shopify orders to FBA?",
      a: "Yes. You can configure routing rules so only specific products, SKUs, or product tags are fulfilled through Amazon FBA. Other orders continue through your default fulfillment method.",
    },
  ],

  "duplicate-sku-sync": [
    {
      q: "What problem does Duplicate SKU Sync solve?",
      a: "Shopify allows multiple products to share the same SKU, which can cause inventory tracking confusion, incorrect stock counts, and fulfillment errors. Duplicate SKU Sync detects these conflicts and optionally syncs inventory across all variants sharing a SKU, ensuring stock levels stay consistent.",
    },
    {
      q: "How does the app detect duplicate SKUs?",
      a: "The app scans your entire product catalogue and identifies any SKU values that appear on more than one variant. It presents a clear list of all duplicates with links to the affected products so you can investigate and act.",
    },
    {
      q: "Can the app automatically sync inventory between duplicate SKUs?",
      a: "Yes. You can configure the app to automatically keep inventory quantities in sync across all variants that share a SKU. When inventory is adjusted on one variant, the change propagates to all others sharing that SKU.",
    },
    {
      q: "Will this app modify my existing product data?",
      a: "The app only modifies inventory quantities when you explicitly enable sync. It does not rename, merge, or delete products or variants. You remain in full control of your catalogue structure.",
    },
    {
      q: "Is this app useful even if I don't want auto-sync?",
      a: "Yes. Even without enabling auto-sync, the duplicate detection and reporting features alone are valuable for catalogue auditing — particularly for large stores or after migrating from another platform where SKU conventions may differ.",
    },
  ],

  "sleek-gst-invoicing": [
    {
      q: "What is Sleek GST Invoicing?",
      a: "Sleek GST Invoicing is a Shopify app designed specifically for Indian merchants. It automatically generates GST-compliant tax invoices for every Shopify order, including all required fields: GSTIN, HSN/SAC codes, IGST/CGST/SGST breakdowns, and buyer details.",
    },
    {
      q: "Does Sleek generate invoices automatically for every order?",
      a: "Yes. Once configured, Sleek generates a GST invoice automatically for every new Shopify order. Invoices can be emailed to customers automatically and are also available for download from your Shopify order dashboard.",
    },
    {
      q: "Can I add my business GSTIN and logo to invoices?",
      a: "Yes. During setup you enter your business details — including GSTIN, business name, address, and logo. All generated invoices include this information in the header, making them compliant and professional.",
    },
    {
      q: "Does the app handle B2B invoices with the buyer's GSTIN?",
      a: "Yes. For B2B orders, you can collect the buyer's GSTIN at checkout (using a custom field) and Sleek will include it on the invoice, enabling your business customers to claim input tax credits.",
    },
    {
      q: "Can I export invoices for GST filing?",
      a: "Yes. Sleek provides bulk export options so you can download all invoices for a period as PDFs or structured data, making your monthly or quarterly GST return filing straightforward.",
    },
  ],

  "clever-variant-images": [
    {
      q: "What does Clever Variant Images do?",
      a: "Clever Variant Images lets you assign specific images to each product variant. When a customer selects a colour, size, or material option, only the images relevant to that variant are shown — eliminating confusion and giving shoppers a clearer view of exactly what they're buying.",
    },
    {
      q: "Does Shopify not support variant-specific images natively?",
      a: "Shopify does allow you to assign one image per variant in the admin, but Clever Variant Images goes further — supporting multiple images per variant and ensuring the gallery updates instantly when a variant is selected, creating a much more polished shopping experience.",
    },
    {
      q: "Do I need to re-upload images after installing Clever Variant Images?",
      a: "No. Clever Variant Images works with the images already uploaded to your Shopify products. You simply assign existing images to the appropriate variants through the app interface — no re-uploading required.",
    },
    {
      q: "Does the variant image switch work on mobile?",
      a: "Yes. Clever Variant Images is fully responsive. The image gallery switches instantly on both desktop and mobile when a customer selects a variant option.",
    },
    {
      q: "Is the app compatible with Online Store 2.0 themes?",
      a: "Yes. Clever Variant Images supports Online Store 2.0 themes via Shopify Theme App Extensions and also works with legacy themes that use standard product image gallery structures.",
    },
  ],

  "super-product-badges": [
    {
      q: "What is Super Product Badges and which platform is it for?",
      a: "Super Product Badges is a product labelling app for BigCommerce stores. It adds customisable badges and stickers to product images and listing cards — such as 'Sale', 'New', 'Best Seller', or any custom label — to draw attention to key products and drive click-throughs.",
    },
    {
      q: "Can I create custom badge text and designs?",
      a: "Yes. Super Product Badges includes a library of pre-designed badge templates and a customiser where you can set your own text, font, colour, size, shape, and position. No design tools or coding skills are needed.",
    },
    {
      q: "Can badges be applied automatically based on product rules?",
      a: "Yes. Rule-based badging lets you automatically apply badges to products that match conditions you define — for example, any product on sale, any product tagged 'featured', or any product with fewer than 5 units in stock.",
    },
    {
      q: "Will badges slow down my BigCommerce storefront?",
      a: "No. Badge images are served via a CDN and the app's script is loaded asynchronously, so it does not block your storefront from rendering and has minimal impact on page load times.",
    },
  ],

  "clean-info-tables": [
    {
      q: "What is Clean Info Tables?",
      a: "Clean Info Tables lets you add beautifully formatted specification tables, comparison charts, and feature grids to your Shopify product pages — without touching code. These replace plain-text bullet points with scannable, structured layouts that help customers make faster buying decisions.",
    },
    {
      q: "Do I need to know HTML or CSS to use Clean Info Tables?",
      a: "No. Clean Info Tables has a no-code visual editor where you build tables by filling in rows and columns. The app handles all the HTML and styling, and the tables automatically adapt to your store's design.",
    },
    {
      q: "Can I create different table templates for different product types?",
      a: "Yes. You can save table templates and apply them across multiple products or whole collections. For example, a 'Technical Specifications' template for electronics and a 'Sizing Guide' template for apparel.",
    },
    {
      q: "Does Clean Info Tables work on mobile devices?",
      a: "Yes. All tables and charts generated by Clean Info Tables are fully responsive. On smaller screens they adapt to horizontal scrolling or single-column layouts to remain readable and functional.",
    },
    {
      q: "Can I embed images or icons in the tables?",
      a: "Yes. Table cells can contain text, images, or a combination, allowing you to create rich product specification sheets with icons for features, images for size comparisons, and formatted text for technical values.",
    },
  ],

  "prime-product-badges": [
    {
      q: "What is Prime Product Badges?",
      a: "Prime Product Badges is a Shopify app that adds eye-catching badge overlays to your product images and collection cards. Use it to highlight promotions ('20% Off'), product status ('New Arrival', 'Best Seller', 'Low Stock'), or any custom message that drives shopper attention.",
    },
    {
      q: "Can badges be automatically applied based on product conditions?",
      a: "Yes. You can create rules that automatically badge products based on tags, collections, compare-at price (to detect sale items), inventory level, publish date, or other attributes. Badges update dynamically as products change.",
    },
    {
      q: "Does Prime Product Badges modify my theme files?",
      a: "No. Prime Product Badges uses Shopify Theme App Extensions and injects badges without altering your theme's code. This means the app can be uninstalled cleanly without leaving any code behind.",
    },
    {
      q: "Can I set a badge to only display for a limited time?",
      a: "Yes. You can schedule badges with a start and end date — for example, display a 'Flash Sale' badge during a 48-hour promotion and have it automatically disappear when the sale ends.",
    },
    {
      q: "How many badge designs are available?",
      a: "Prime Product Badges ships with dozens of pre-designed badge styles in various shapes (ribbons, circles, diamonds, corner folds) and colour schemes. You can also create fully custom badges with your own text, colours, and uploaded images.",
    },
  ],

  fetchr: [
    {
      q: "What is Fetchr?",
      a: "Fetchr is a Thalia Technologies app currently in development. It is designed to help Shopify merchants fetch and sync product data from external sources — stay tuned for the official launch and sign up to be notified when it becomes available.",
    },
    {
      q: "When will Fetchr be available?",
      a: "Fetchr is coming soon. You can enter your email on the Fetchr app page to receive a notification the moment it launches. Early access may be available to merchants on our notify list.",
    },
    {
      q: "Will there be a free trial for Fetchr?",
      a: "Yes, like most Thalia apps, Fetchr is planned to include a free trial period so you can evaluate it fully before committing to a paid plan. Exact trial length and pricing will be announced at launch.",
    },
  ],

  csvbox: [
    {
      q: "What is CSVBox?",
      a: "CSVBox is a developer-friendly CSV and spreadsheet import infrastructure tool. It provides a fully customisable import widget that you embed in your app or dashboard, allowing your end users to upload CSV files that are validated, mapped, and imported cleanly — without you having to build all that from scratch.",
    },
    {
      q: "Who is CSVBox designed for?",
      a: "CSVBox is designed for SaaS developers and product teams who need to add CSV import functionality to their applications. Instead of spending weeks building import parsers, column mappers, and validation logic, you integrate CSVBox and get all of that out of the box.",
    },
    {
      q: "What validation features does CSVBox provide?",
      a: "CSVBox supports column-level validation rules including required fields, data types (string, number, date, email), regex patterns, min/max values, and custom validation via webhooks. Rows that fail validation are flagged for the user to correct before import.",
    },
    {
      q: "How does CSVBox deliver imported data to my application?",
      a: "CSVBox can deliver validated, clean import data via webhooks to your backend, or you can use the CSVBox API to pull the data. Integrations with popular platforms like Shopify, Airtable, and databases are also available.",
    },
    {
      q: "Does CSVBox support Excel (.xlsx) files as well as CSV?",
      a: "Yes. CSVBox accepts CSV, TSV, XLS, and XLSX files. The import widget automatically detects the file type and parses it correctly, so your users can upload whichever spreadsheet format they prefer.",
    },
  ],

  fylebox: [
    {
      q: "What is Fylebox?",
      a: "Fylebox is a digital product delivery and file management platform. It allows merchants and creators to sell and deliver digital files — PDFs, videos, music, software, eBooks, design assets, and more — directly to customers after purchase, with secure download links and access control.",
    },
    {
      q: "How does Fylebox deliver files to customers?",
      a: "After a purchase, Fylebox automatically generates a secure, time-limited download link and sends it to the customer via email. Files are hosted on Fylebox's secure CDN, so downloads are fast and reliable worldwide.",
    },
    {
      q: "Can I limit how many times a customer can download a file?",
      a: "Yes. You can configure per-product download limits — for example, allow 3 downloads per purchase. Once the limit is reached, the download link expires. You can manually reset limits for individual customers from your dashboard.",
    },
    {
      q: "Does Fylebox protect my files from unauthorised sharing?",
      a: "Yes. Download links are unique per order and can be set to expire after a number of hours or a set number of downloads. You can also watermark PDF files with the buyer's email address as an additional deterrent to unauthorised redistribution.",
    },
    {
      q: "What file types and sizes does Fylebox support?",
      a: "Fylebox supports virtually any file type, including PDF, MP4, MP3, ZIP, PSD, AI, ePub, and more. Maximum file size per upload depends on your plan. Large files are chunked for reliable uploads even on slow connections.",
    },
  ],

  "product-data-exporter": [
    {
      q: "What is Product Data Exporter Pro?",
      a: "Product Data Exporter Pro lets you export your entire Shopify product catalogue — including all variants, metafields, images, inventory, pricing, and tags — into clean, structured CSV or Excel files. It goes far beyond Shopify's native export by including fields that the standard export omits.",
    },
    {
      q: "Which fields can I export that Shopify's native export doesn't include?",
      a: "Product Data Exporter Pro includes metafields, product media (images and video URLs), inventory by location, all variant-level fields, review data (from supported apps), and custom metafield values — none of which are available in Shopify's default product CSV export.",
    },
    {
      q: "Can I schedule automatic exports?",
      a: "Yes. You can schedule recurring exports — daily, weekly, or monthly — and have the file automatically emailed to you or sent to a Google Sheets spreadsheet. This is useful for regular inventory reporting or syncing product data to an ERP or third-party system.",
    },
    {
      q: "Can I filter which products to export?",
      a: "Yes. Before exporting, filter products by collection, vendor, product type, tag, status (active/draft/archived), price range, inventory level, or any combination. Export only the subset of your catalogue you need.",
    },
    {
      q: "What file formats does the app export to?",
      a: "Product Data Exporter Pro exports to CSV, Excel (.xlsx), and Google Sheets. You can also configure the column order and rename column headers to match the format expected by your target system.",
    },
    {
      q: "Can I use this app to migrate products to another Shopify store?",
      a: "Yes. Many merchants use Product Data Exporter Pro to generate a correctly formatted product CSV for importing into a new Shopify store or a third-party platform. The exported file can be used directly with Shopify's product import tool.",
    },
  ],
};
