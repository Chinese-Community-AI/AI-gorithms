import fs from "fs";
import path from "path";

const contentDirectory = path.join(process.cwd(), "content/articles");

export interface ContentMetadata {
  title?: string;
  readingTime?: number;
  [key: string]: any;
}

/**
 * Converts a route path to a content file path
 * Routes under /basics map directly to files in content/articles/basics
 * Routes like /algorithm-patterns map to content/articles/algorithm-patterns
 */
function routeToContentPath(route: string): string | null {
  // Remove leading /basics and normalize
  if (route.startsWith("/basics")) {
    const relativePath = route.replace(/^\/basics/, "").replace(/^\//, "");
    if (relativePath) {
      return `basics/${relativePath}`;
    }
  }
  // Handle /algorithm-patterns route
  if (route.startsWith("/algorithm-patterns")) {
    const relativePath = route
      .replace(/^\/algorithm-patterns/, "")
      .replace(/^\//, "");
    if (relativePath) {
      return `algorithm-patterns/${relativePath}`;
    }
    return "algorithm-patterns";
  }
  return null;
}

/**
 * Get content file path for a given route
 */
export function getContentPath(route: string): string | null {
  return routeToContentPath(route);
}

/**
 * Read MDX/MD file content
 * Handles files with or without extensions
 */
export function getContentByPath(filePath: string): string | null {
  try {
    let fullPath = path.join(contentDirectory, filePath);

    // Check if path exists as-is
    if (fs.existsSync(fullPath)) {
      const stat = fs.statSync(fullPath);
      // If it's a directory, return null (we want files, not directories)
      if (stat.isDirectory()) {
        return null;
      }
      // If it's a file, read it
      if (stat.isFile()) {
        const fileContents = fs.readFileSync(fullPath, "utf8");
        return fileContents;
      }
    }

    // If file doesn't exist and has no extension, try common extensions
    if (!path.extname(filePath)) {
      const extensions = [".md", ".mdx"];
      for (const ext of extensions) {
        const pathWithExt = filePath + ext;
        fullPath = path.join(contentDirectory, pathWithExt);
        if (fs.existsSync(fullPath)) {
          const stat = fs.statSync(fullPath);
          if (stat.isFile()) {
            const fileContents = fs.readFileSync(fullPath, "utf8");
            return fileContents;
          }
        }
      }
    }

    return null;
  } catch (error) {
    console.error(`Error reading content file ${filePath}:`, error);
    return null;
  }
}

/**
 * Get content for a route
 */
export function getContentForRoute(route: string): string | null {
  const contentPath = getContentPath(route);
  if (!contentPath) {
    return null;
  }

  return getContentByPath(contentPath);
}
