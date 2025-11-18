/**
 * MDX Utility Functions
 *
 * This file contains helper functions for working with MDX content.
 *
 * Why do we need this?
 * - MDX files can have frontmatter (metadata at the top)
 * - We need to extract that metadata
 * - We need to handle importing MDX files properly
 */

import { MDXRemote } from "next-mdx-remote/rsc";
import { serialize } from "next-mdx-remote/serialize";
import remarkGfm from "remark-gfm";

/**
 * Frontmatter interface
 *
 * Frontmatter is metadata at the top of MDX files, like:
 * ---
 * title: "My Article"
 * readingTime: 5
 * ---
 */
export interface MDXFrontmatter {
  title?: string;
  readingTime?: number;
  description?: string;
  author?: string;
  date?: string;
  tags?: string[];
  [key: string]: any; // Allow additional custom fields
}

/**
 * MDX Content with frontmatter
 */
export interface MDXContent {
  frontmatter: MDXFrontmatter;
  content: string;
}

/**
 * Parse frontmatter from MDX content
 *
 * Frontmatter is the YAML-like metadata at the top of MDX files.
 * This function extracts it.
 *
 * Example:
 * ---
 * title: "My Article"
 * ---
 *
 * # Content here
 */
export function parseFrontmatter(content: string): {
  frontmatter: MDXFrontmatter;
  body: string;
} {
  const frontmatterRegex = /^---\s*\n([\s\S]*?)\n---\s*\n([\s\S]*)$/;
  const match = content.match(frontmatterRegex);

  if (!match) {
    // No frontmatter, return empty frontmatter and full content as body
    return {
      frontmatter: {},
      body: content,
    };
  }

  const frontmatterString = match[1];
  const body = match[2];

  // Parse YAML-like frontmatter (simple key-value pairs)
  const frontmatter: MDXFrontmatter = {};
  const lines = frontmatterString.split("\n");

  for (const line of lines) {
    const colonIndex = line.indexOf(":");
    if (colonIndex > 0) {
      const key = line.substring(0, colonIndex).trim();
      let value = line.substring(colonIndex + 1).trim();

      // Remove quotes if present
      if (
        (value.startsWith('"') && value.endsWith('"')) ||
        (value.startsWith("'") && value.endsWith("'"))
      ) {
        value = value.slice(1, -1);
      }

      // Try to parse as number
      if (!isNaN(Number(value))) {
        frontmatter[key] = Number(value);
      } else if (value === "true" || value === "false") {
        frontmatter[key] = value === "true";
      } else {
        frontmatter[key] = value;
      }
    }
  }

  return {
    frontmatter,
    body,
  };
}

/**
 * Note: For a production app, you might want to use a proper YAML parser
 * like 'gray-matter' or 'front-matter' for more robust frontmatter parsing.
 *
 * For now, this simple parser works for basic use cases.
 */
