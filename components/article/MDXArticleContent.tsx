/**
 * MDX Article Content Component
 *
 * This component is similar to ArticleContent, but designed to work with MDX.
 *
 * Key differences:
 * - Accepts an MDX component instead of HTML string
 * - Can extract frontmatter metadata
 * - Renders MDX with proper styling
 */

"use client";

import { ReactNode, useMemo } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import TableOfContents from "./TableOfContents";
import ReadingProgress from "./ReadingProgress";
import { getNavigationNeighbors } from "@/lib/utils/navigation";
import { useFocusMode } from "@/contexts/FocusModeContext";

interface MDXArticleContentProps {
  /**
   * MDX content to render (typically <YourArticle />)
   */
  children: ReactNode;

  /**
   * Optional title (if not provided in frontmatter)
   */
  title?: string;

  /**
   * Optional reading time (if not provided in frontmatter)
   */
  readingTime?: number;

  /**
   * Whether to show the table of contents
   */
  showTOC?: boolean;
}

export default function MDXArticleContent({
  children,
  title = "Article",
  readingTime = 5,
  showTOC = true,
}: MDXArticleContentProps) {
  const pathname = usePathname();
  const { isFocusMode } = useFocusMode();

  const { previous, next } = useMemo(
    () => getNavigationNeighbors(pathname),
    [pathname]
  );

  return (
    <div className="flex gap-8 relative">
      <ReadingProgress />
      <div className="flex-1 min-w-0">
        <article className="max-w-4xl">
          <header className="mb-8 mt-12 scroll-mt-32">
            <h1 className="text-4xl font-bold mb-4 text-gray-900 dark:text-gray-100">
              {title}
            </h1>
          </header>

          {/* 
            Render the MDX content
            The MDX component will automatically use our custom components from MDXComponents.tsx
            (configured in next.config.mjs)
          */}
          <div className="prose prose-lg prose-gray dark:prose-invert dark:prose-pre:bg-gray-900 max-w-none prose-headings:text-gray-900 dark:prose-headings:text-gray-100 prose-p:text-gray-700 dark:prose-p:text-gray-300 prose-a:text-blue-600 dark:prose-a:text-blue-400 prose-strong:text-gray-900 dark:prose-strong:text-gray-100 prose-code:text-gray-900 dark:prose-code:text-gray-100 prose-li:text-gray-700 dark:prose-li:text-gray-300">
            {children}
          </div>

          <footer className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-800">
            <div className="flex items-center justify-between flex-wrap gap-4">
              <div className="flex gap-2">
                {previous ? (
                  <Link
                    href={previous.href}
                    className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 dark:bg-blue-600 dark:hover:bg-blue-700 transition-colors"
                  >
                    ← Previous: {previous.title}
                  </Link>
                ) : (
                  <button
                    disabled
                    className="px-4 py-2 bg-gray-300 dark:bg-gray-700 text-gray-500 dark:text-gray-500 rounded cursor-not-allowed"
                  >
                    ← Previous
                  </button>
                )}
                {next ? (
                  <Link
                    href={next.href}
                    className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 dark:bg-blue-600 dark:hover:bg-blue-700 transition-colors"
                  >
                    Next: {next.title} →
                  </Link>
                ) : (
                  <button
                    disabled
                    className="px-4 py-2 bg-gray-300 dark:bg-gray-700 text-gray-500 dark:text-gray-500 rounded cursor-not-allowed"
                  >
                    Next →
                  </button>
                )}
              </div>
              <button className="px-4 py-2 border border-gray-300 dark:border-gray-700 rounded hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-300 transition-colors">
                Share
              </button>
            </div>
          </footer>
        </article>
      </div>

      {showTOC && (
        <aside className="hidden lg:block w-64 flex-shrink-0">
          {/* TOC would need to be extracted from MDX - we'll handle this later */}
        </aside>
      )}
    </div>
  );
}
