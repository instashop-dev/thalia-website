import { parseFrontmatter } from "@/lib/frontmatter";

export interface CaseStudyResult {
  metric: string;
  label: string;
  accent?: boolean;
}

export interface CaseStudySolutionFeature {
  title: string;
  desc: string;
}

export interface CaseStudySections {
  about: string;
  challenge: string;
  solution: string;
  results: string;
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
  headline: string;
  excerpt: string;

  // Before
  previousMethods: string[];
  timeBeforeApp: string;
  challengeBullets: string[];

  // Solution
  topFeatures: CaseStudySolutionFeature[];

  // Results
  keyResults: CaseStudyResult[];
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

  // Narrative body, sourced from content.html
  sections: CaseStudySections;
}

type CaseStudyMeta = Omit<CaseStudy, "slug" | "sections">;

// Every case study lives in its own folder under src/content/case-studies/<slug>/,
// with a meta.md (YAML frontmatter — all the structured fields) and a
// content.html (the About/Challenge/Solution/Results narrative, wrapped in
// <section data-section="..."> blocks). Adding a new folder here makes the
// case study appear automatically — no registration step needed.
const metaFiles = import.meta.glob("/src/content/case-studies/*/meta.md", {
  eager: true,
  query: "?raw",
  import: "default",
}) as Record<string, string>;

const htmlFiles = import.meta.glob("/src/content/case-studies/*/content.html", {
  eager: true,
  query: "?raw",
  import: "default",
}) as Record<string, string>;

const slugFromPath = (path: string): string => path.split("/").slice(-2, -1)[0];

const SECTION_KEYS: (keyof CaseStudySections)[] = ["about", "challenge", "solution", "results"];

const parseSections = (html: string): CaseStudySections => {
  const sections: CaseStudySections = { about: "", challenge: "", solution: "", results: "" };
  const regex = /<section\s+data-section="(\w+)">([\s\S]*?)<\/section>/g;
  let match: RegExpExecArray | null;
  while ((match = regex.exec(html)) !== null) {
    const [, key, inner] = match;
    if ((SECTION_KEYS as string[]).includes(key)) {
      sections[key as keyof CaseStudySections] = inner.trim();
    }
  }
  return sections;
};

export const caseStudies: CaseStudy[] = Object.entries(metaFiles).map(([path, raw]) => {
  const slug = slugFromPath(path);
  const meta = parseFrontmatter<CaseStudyMeta>(raw);
  const htmlPath = path.replace(/meta\.md$/, "content.html");
  const sections = parseSections(htmlFiles[htmlPath] ?? "");
  return { slug, ...meta, sections };
});
