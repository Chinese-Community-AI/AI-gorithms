import fs from "fs";
import path from "path";
import { NavItem } from "@/lib/navigation";

const basicsDirectory = path.join(process.cwd(), "content/articles/basics");

/**
 * Recursively scan the basics directory and generate navigation structure
 * This is a SERVER-ONLY function - cannot be used in client components
 */
export function generateBasicsNavigation(): NavItem[] {
  function scanDirectory(dir: string, basePath: string = "/basics"): NavItem[] {
    const entries = fs.readdirSync(dir, { withFileTypes: true });
    const result: NavItem[] = [];

    // Sort entries: directories first, then files
    const sortedEntries = entries.sort((a, b) => {
      if (a.isDirectory() && !b.isDirectory()) return -1;
      if (!a.isDirectory() && b.isDirectory()) return 1;
      return a.name.localeCompare(b.name);
    });

    for (const entry of sortedEntries) {
      const fullPath = path.join(dir, entry.name);
      const routePath = path.join(basePath, entry.name);

      if (entry.isDirectory()) {
        // It's a directory - create a parent item with children
        const children = scanDirectory(fullPath, routePath);
        const filesInDir = getFilesInDirectory(fullPath);

        // Create directory item if it has children or files
        if (children.length > 0 || filesInDir.length > 0) {
          const title = formatTitle(entry.name);
          const item: NavItem = {
            title,
            href: routePath.replace(/\\/g, "/"), // Normalize path separators
          };

          // Add children if they exist
          if (children.length > 0) {
            item.children = children;
          }

          result.push(item);
        }
      } else if (isContentFile(entry.name)) {
        // It's a content file - create a leaf item
        const title = formatTitle(removeExtension(entry.name));
        const href = routePath.replace(/\\/g, "/").replace(/\.[^.]+$/, ""); // Remove extension
        result.push({
          title,
          href,
        });
      }
    }

    return result;
  }

  function getFilesInDirectory(dir: string): string[] {
    try {
      const entries = fs.readdirSync(dir, { withFileTypes: true });
      return entries
        .filter((entry) => !entry.isDirectory() && isContentFile(entry.name))
        .map((entry) => entry.name);
    } catch {
      return [];
    }
  }

  function isContentFile(filename: string): boolean {
    const ext = path.extname(filename).toLowerCase();
    return ext === ".md" || ext === ".mdx" || ext === "";
  }

  function removeExtension(filename: string): string {
    return filename.replace(/\.[^.]+$/, "");
  }

  function formatTitle(name: string): string {
    // Convert kebab-case, snake_case, or file names to Title Case
    return name
      .replace(/[-_]/g, " ")
      .replace(/\.[^.]+$/, "") // Remove extension
      .split(" ")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
      .join(" ");
  }

  return scanDirectory(basicsDirectory);
}
