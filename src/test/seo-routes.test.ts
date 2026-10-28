import { describe, expect, it } from "vitest";
import { getLegacyRedirectTarget, isKnownRoute } from "../worker";

describe("SEO route handling", () => {
  it.each([
    ["/pro-bulk-price-editor", "/apps/probulkpriceeditor"],
    ["/amazon-to-shopify", "/apps/spreadr"],
    ["/external-affiliate-product-links", "/apps/outlink"],
    ["/robo-product-importer", "/apps/robo-product-importer"],
    ["/connectr-for-amazon-sellers", "/apps/connectr"],
    ["/gst-invoices-india", "/apps/sleek-gst-invoicing"],
    ["/the-watchlyst", "/apps/watchlyst"],
    ["/stories/guide-built-for-shopify", "/case-studies"],
    ["/become-a-partner", "/partnerships"],
  ])("redirects %s to %s", (source, target) => {
    expect(getLegacyRedirectTarget(source)).toBe(target);
  });

  it("recognizes canonical and dynamic routes", () => {
    expect(isKnownRoute("/")).toBe(true);
    expect(isKnownRoute("/apps/probulkpriceeditor")).toBe(true);
    expect(isKnownRoute("/blog/example-post")).toBe(true);
    expect(isKnownRoute("/case-studies/example")).toBe(true);
    expect(isKnownRoute("/partnerships")).toBe(true);
    expect(isKnownRoute("/partnerships/all-partners")).toBe(true);
    expect(isKnownRoute("/apps/shipr/amazon-mcf-migration")).toBe(true);
  });

  it("rejects unknown top-level and nested dynamic routes", () => {
    expect(isKnownRoute("/does-not-exist")).toBe(false);
    expect(isKnownRoute("/apps/outlink/more")).toBe(false);
  });
});
