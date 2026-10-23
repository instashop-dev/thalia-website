---
title: 'PHP2Shell Explained: How We Resolved the PHP Security Update'
excerpt: 'A practical explanation of PHP2Shell, the PHP 8.3.36 upgrade, and the checks Thalia Technologies completed across its Shopify apps and products.'
date: '2026-10-23'
author: 'Thalia Technologies'
authorRole: 'Shopify App Development Team'
tags:
  - 'Security'
  - 'Shopify'
  - 'PHP'
  - 'Engineering'
readTime: '9 min read'
seoTitle: 'PHP2Shell Explained: PHP Security Update | Thalia'
seoDescription: 'Learn what PHP2Shell means, why PHP 8.3.36 matters, and how Thalia verified its security update across Shopify apps and products.'
faqs:
  - question: 'What is PHP2Shell?'
    answer: 'PHP2Shell is the name commonly used for two critical PHP vulnerabilities, CVE-2026-109618 and CVE-2026-109619. The PHP project released fixed versions including PHP 8.3.36.'
  - question: 'Does PHP 8.3.36 fix PHP2Shell?'
    answer: 'Yes. PHP identifies PHP 8.3.36 as the fixed PHP 8.3 release for this security update. Teams should confirm the package or runtime serving web requests is the patched version.'
  - question: 'Do Shopify merchants need to update their stores because of PHP2Shell?'
    answer: 'Merchants generally do not manage the PHP runtime behind a hosted Shopify app. They should follow notices from their app and hosting providers, while app operators must patch the environment they control.'
  - question: 'Was merchant data leaked in the Thalia incident?'
    answer: 'Thalia found no evidence in the available server logs that merchant data was accessed or leaked in connection with this issue. This is an investigation finding, not an absolute claim that applies to every PHP environment.'
---
