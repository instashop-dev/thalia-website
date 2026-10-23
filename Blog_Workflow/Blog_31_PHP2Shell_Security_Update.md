---
blog_number: 31
pillar: Authority / Security Operations
featured_app: Thalia Technologies Shopify app portfolio
app_url: https://apps.shopify.com/partners/thalia-apps
primary_keyword: php2shell php vulnerabilities
secondary_keywords:
  - CVE-2026-109618
  - CVE-2026-109619
  - PHP 8.3.36 security update
  - Shopify app security
  - merchant data protection
target_reader: Shopify merchant, ecommerce operator, and SaaS engineering team
trend_hook: The October 2026 PHP security release made runtime patching and evidence-based merchant communication an urgent operational topic.
serp_competitors:
  - https://www.php.net/releases/8_3_36.php
  - https://support.plesk.com/hc/en-us/articles/44397729587351-Vulnerability-CVE-2026-109618-and-CVE-2026-109619-PHP2Shell-Remote-code-execution-in-PHP-shipped-with-Plesk
  - https://blog.cloudflare.com/php-vulnerabilities-waf-protection
word_target: 1900
publish_date: 2026-10-23
cta_url: https://apps.shopify.com/partners/thalia-apps?utm_source=blog&utm_medium=organic&utm_campaign=thalia-app-portfolio&utm_content=php2shell-php-security-update
meta_title: PHP2Shell Explained: PHP Security Update | Thalia
meta_description: Learn what PHP2Shell means, why PHP 8.3.36 matters, and how Thalia verified its security update across Shopify apps and products.
slug: php2shell-php-security-update
schema:
  - FAQPage
  - Article
target_kpis:
  organic_sessions_30d: 800
  app_installs_30d: 8
  linkedin_impressions_7d: 15000
---

# PHP2Shell Explained: How We Resolved the PHP Security Update

> **Hook:** The October 2026 PHP security release turned a low-level runtime issue into an immediate operations question for every team running web-facing PHP: which environments are affected, has the fixed version reached live traffic, and what can you honestly tell customers? Here is how Thalia handled the upgrade from PHP 8.3.22 to PHP 8.3.36 across its Shopify apps and products.

## TL;DR

- PHP2Shell refers to CVE-2026-109618 and CVE-2026-109619, critical PHP vulnerabilities affecting vulnerable web-facing runtimes.
- Thalia upgraded the affected environment from PHP 8.3.22 to PHP 8.3.36 and applied the required security fixes.
- The applications were tested, available logs were reviewed, and no evidence of merchant-data access or leakage was found in connection with this issue.
- No merchant reinstall, migration, or settings change is required. [Explore Thalia apps](https://apps.shopify.com/partners/thalia-apps?utm_source=blog&utm_medium=organic&utm_campaign=thalia-app-portfolio&utm_content=php2shell-php-security-update).

## What is PHP2Shell?

PHP2Shell is a shorthand name for [CVE-2026-109618](https://www.php.net/releases/8_3_36.php) and CVE-2026-109619. The PHP project identifies PHP 8.3.36 as a security release. Public advisories describe the pair as critical vulnerabilities that can affect PHP installations serving web requests.

These flaws sit in the PHP runtime layer. A theme setting or ordinary application-code patch cannot replace updating the interpreter, package, container image, or managed runtime that actually serves requests. The operator responsible for the runtime must confirm that the patched version is the one handling live traffic.

## Why upgrading PHP was the right remediation

For the affected Thalia environment, the change was from PHP 8.3.22 to PHP 8.3.36. That version aligned with the fixed PHP 8.3 release. The [Plesk advisory](https://support.plesk.com/hc/en-us/articles/44397729587351-Vulnerability-CVE-2026-109618-and-CVE-2026-109619-PHP2Shell-Remote-code-execution-in-PHP-shipped-with-Plesk) also points administrators to fixed PHP branches or the patched package supplied by their distribution.

WAF rules can add defense in depth, but they are not a substitute for patching. [Cloudflare’s PHP2Shell guidance](https://blog.cloudflare.com/php-vulnerabilities-waf-protection) makes that distinction clear. The primary remediation is to update the vulnerable runtime, make sure the updated process serves live traffic, and verify security state and application health.

## How we handled the PHP security update

### Step 1: Identify the affected runtime and scope

We identified the application environment using PHP 8.3.22 and reviewed which products shared it. The scope included Thalia’s Shopify apps and other products connected to the affected application environment.

Updating one service does not automatically update a second container, scheduled worker, or separate environment. We treated PHP as an environment-level dependency and reviewed the products using it.

### Step 2: Apply the fixed release and patches

We upgraded PHP from 8.3.22 to 8.3.36 and installed the required security patches. The goal was to move the serving environment to the fixed release, not merely to add a temporary request filter.

For teams managing their own systems, the exact command depends on the operating system, package repository, container image, and process manager. The safe pattern is consistent: use a trusted fixed package or image, redeploy the process serving traffic, and verify the running version rather than relying only on a build file.

### Step 3: Verify application behavior

A security patch is not complete until the application still works. After the upgrade, we confirmed that the fixes were active, the application loaded successfully, and expected functionality remained available.

This check catches a separate risk: an urgent update can create outages, dependency errors, or broken integrations. The post-update review should cover both security state and merchant experience.

### Step 4: Review available evidence

We reviewed available server logs for attempted exploitation, suspicious activity, or unexpected access patterns related to the issue. No such signs were identified during our investigation.

That finding should be read precisely. The available logs showed no evidence of merchant-data access or leakage connected to this issue. It is not a universal guarantee for every PHP environment or organization.

### Step 5: Communicate merchant impact

The update did not change existing merchant data, login credentials, or application settings. Merchants do not need to reinstall the apps, migrate their stores, or change their configuration because of this runtime update.

## What this means for Shopify merchants

Most Shopify merchants do not administer the PHP runtime behind a hosted app. That responsibility belongs to the app operator or hosting provider. Merchants should still pay attention to security notices, especially when a provider asks them to update an app, rotate credentials, or review an integration.

For this Thalia update, no merchant action is required. Merchants can continue using the applications as usual. If something unexpected appears, contact support with the app name, store context, approximate time, and a description of the behavior.

| Question | Answer for this update |
|---|---|
| Was PHP upgraded? | Yes, from PHP 8.3.22 to PHP 8.3.36. |
| Were applications checked? | Yes, normal application operation was verified. |
| Were logs reviewed? | Yes, available logs were reviewed for suspicious activity. |
| Does a merchant need to act? | No reinstall, migration, or settings change is required. |

## Why “no evidence found” is the accurate security language

“No merchant data will be leaked” is an absolute future guarantee. A responsible statement describes the controls applied, the evidence reviewed, and the conclusion supported by that evidence.

For this issue, the accurate conclusion is that the affected runtime was patched, application functionality was verified, available logs were reviewed, and no evidence of merchant-data access or leakage was found in connection with the issue. Thalia will continue monitoring its infrastructure and applying necessary security updates.

## FAQ

**Q: What is PHP2Shell?**

PHP2Shell is the common name for CVE-2026-109618 and CVE-2026-109619, two critical PHP vulnerabilities. The PHP project released fixed versions, including PHP 8.3.36.

**Q: Does PHP 8.3.36 fix PHP2Shell?**

Yes. PHP identifies 8.3.36 as the fixed PHP 8.3 release. Operators should verify that the runtime serving web requests is the patched one.

**Q: Do Shopify merchants need to update their stores?**

Merchants generally do not manage the PHP runtime behind a hosted Shopify app. They should follow instructions from their app and hosting providers, while app operators patch the infrastructure they control.

**Q: Was merchant data leaked in the Thalia incident?**

Based on the available server logs reviewed by Thalia, no evidence was found that merchant data was accessed or leaked in connection with this issue. That is an investigation finding for the affected environment, not an absolute statement about every PHP installation.

## Conclusion

PHP2Shell was a runtime-level security issue that required a runtime-level fix. Thalia responded by upgrading PHP 8.3.22 to PHP 8.3.36, applying the required patches across the affected product environment, verifying normal application behavior, and reviewing available logs.

For merchants, no action is required, existing data and settings were not changed, and the applications can continue to be used normally. For engineering teams, the lasting lesson is to know where the runtime is running, patch the component actually exposed, verify the live process, and communicate findings with evidence-based language.

### Sources

- [PHP 8.3.36 release announcement](https://www.php.net/releases/8_3_36.php)
- [Plesk PHP2Shell advisory](https://support.plesk.com/hc/en-us/articles/44397729587351-Vulnerability-CVE-2026-109618-and-CVE-2026-109619-PHP2Shell-Remote-code-execution-in-PHP-shipped-with-Plesk)
- [Cloudflare PHP2Shell guidance](https://blog.cloudflare.com/php-vulnerabilities-waf-protection)
- [AWS Security Blog PHP2Shell guidance](https://aws.amazon.com/blogs/security/using-aws-waf-to-apply-mitigations-for-php2shell-rce-vulnerabilities-cve-2026-109618-and-cve-2026-109619/)

### Related reads from Thalia

- [Shopify inventory planning before your next sale](/blog/sync-inventory-across-channels)
- [Preparing Shopify product data for AI discovery](/blog/agentic-commerce-shopify-catalog)

### About the author

Written by the Thalia Technologies team — a Mumbai-based SaaS company building ecommerce software for Shopify merchants. [Browse Thalia apps on the Shopify App Store →](https://apps.shopify.com/partners/thalia-apps)

## LinkedIn Distribution Plan

### Day 3 · Hook Post

PHP2Shell was a runtime problem, not a theme setting.

The practical response was:

1. Identify every environment using the affected PHP version.
2. Upgrade the runtime to the fixed release.
3. Verify live application behavior and review available logs.

The customer communication matters too: say what the evidence supports, not what it cannot prove.

Full breakdown — link in comments 👇
(Link in 1st comment below)

### Day 5 · Carousel Outline

1. Cover: PHP2Shell: What Shopify app operators need to know
2. PHP2Shell refers to two critical PHP vulnerabilities.
3. The fixed PHP 8.3 release is PHP 8.3.36.
4. Patch the runtime that actually serves traffic.
5. Scope every app, container, worker, and environment.
6. Verify both the version and application behavior.
7. Review available logs for exploitation signals.
8. Communicate “no evidence found” precisely.
9. Merchant takeaway: no action required for this Thalia update.
10. CTA: Follow Thalia for practical ecommerce engineering updates.

### Day 7 · Quote Card

> **A security update is not complete until the live runtime is patched, the application is verified, and the evidence is reviewed.**
> — Thalia Technologies engineering team
