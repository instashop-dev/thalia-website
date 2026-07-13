import { parseFrontmatter } from "@/lib/frontmatter";

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  contentHtml: string;
  date: string;
  author: string;
  authorRole: string;
  tags: string[];
  coverImage?: string;
  readTime: string;
  seoTitle?: string;
  seoDescription?: string;
}

type BlogMeta = Omit<BlogPost, "slug" | "contentHtml">;

// Every blog post lives in its own folder under src/content/blog/<slug>/,
// with a meta.md (YAML frontmatter) and a content.html (article body).
// Adding a new folder here makes the post appear automatically — no
// registration step needed.
const metaFiles = import.meta.glob("/src/content/blog/*/meta.md", {
  eager: true,
  query: "?raw",
  import: "default",
}) as Record<string, string>;

const htmlFiles = import.meta.glob("/src/content/blog/*/content.html", {
  eager: true,
  query: "?raw",
  import: "default",
}) as Record<string, string>;

const slugFromPath = (path: string): string => path.split("/").slice(-2, -1)[0];

export const blogPosts: BlogPost[] = Object.entries(metaFiles)
  .map(([path, raw]) => {
    const slug = slugFromPath(path);
    const meta = parseFrontmatter<BlogMeta>(raw);
    const htmlPath = path.replace(/meta\.md$/, "content.html");
    const contentHtml = htmlFiles[htmlPath] ?? "";
    return { slug, ...meta, contentHtml };
  })
  .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

export const getBlogPostBySlug = (slug: string): BlogPost | undefined =>
  blogPosts.find((post) => post.slug === slug);

export const getRelatedPosts = (slug: string, count = 3): BlogPost[] => {
  const current = getBlogPostBySlug(slug);
  if (!current) return [];
  return blogPosts
    .filter(
      (p) =>
        p.slug !== slug && p.tags.some((tag) => current.tags.includes(tag))
    )
    .slice(0, count);
};

export const getAllTags = (): string[] => {
  const tagSet = new Set<string>();
  blogPosts.forEach((post) => post.tags.forEach((tag) => tagSet.add(tag)));
  return Array.from(tagSet).sort();
};
