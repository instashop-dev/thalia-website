import { load } from "js-yaml";

export function parseFrontmatter<T>(raw: string): T {
  const match = raw.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n?/);
  if (!match) {
    throw new Error("Missing YAML frontmatter block (content must start with ---)");
  }
  return (load(match[1]) ?? {}) as T;
}
