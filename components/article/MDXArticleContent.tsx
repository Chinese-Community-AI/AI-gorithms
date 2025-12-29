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
      <div className="flex-1 min-w-0">
        <article className={isFocusMode ? "max-w-4xl" : "w-full"}>
          <header className="mb-8 mt-8 scroll-mt-24">
            <h1 className="text-3xl lg:text-4xl font-extrabold mb-4 text-[var(--foreground)] tracking-tight">
              {title}
            </h1>
          </header>

          {/* 
            Render the MDX content
            The MDX component will automatically use our custom components from MDXComponents.tsx
            (configured in next.config.mjs)
          */}
          <div className="prose prose-lg prose-gray dark:prose-invert dark:prose-pre:bg-gray-900 max-w-none prose-headings:text-[var(--foreground)] prose-p:text-[var(--foreground)] prose-p:opacity-90 prose-strong:text-[var(--foreground)] prose-code:text-[#d9730d] prose-li:text-[var(--foreground)] prose-li:opacity-90">
            {children}
          </div>

          <footer className="mt-12 pt-8 border-t border-[rgba(55,53,47,0.09)] dark:border-gray-800">
            <div className="flex items-center justify-between flex-wrap gap-4">
              <div className="flex gap-2">
                {previous ? (
                  <Link
                    href={previous.href}
                    className="px-4 py-2 bg-[#faebdd] text-[#d9730d] dark:bg-[#2c221a] rounded hover:opacity-80 transition-colors text-sm font-bold border border-[#d9730d]/10"
                  >
                    ← Previous: {previous.title}
                  </Link>
                ) : (
                  <button
                    disabled
                    className="px-4 py-2 bg-[var(--sidebar-bg)] text-[var(--foreground)] opacity-30 rounded cursor-not-allowed border border-[rgba(55,53,47,0.09)] text-sm font-medium"
                  >
                    ← Previous
                  </button>
                )}
                {next ? (
                  <Link
                    href={next.href}
                    className="px-4 py-2 bg-[#faebdd] text-[#d9730d] dark:bg-[#2c221a] rounded hover:opacity-80 transition-colors text-sm font-bold border border-[#d9730d]/10"
                  >
                    Next: {next.title} →
                  </Link>
                ) : (
                  <button
                    disabled
                    className="px-4 py-2 bg-[var(--sidebar-bg)] text-[var(--foreground)] opacity-30 rounded cursor-not-allowed border border-[rgba(55,53,47,0.09)] text-sm font-medium"
                  >
                    Next →
                  </button>
                )}
              </div>
              <button className="px-4 py-2 border border-[rgba(55,53,47,0.15)] rounded hover:bg-[var(--sidebar-hover)] text-[var(--foreground)] opacity-70 transition-colors text-sm font-medium">
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
