"use client";

import { useMemo, useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import TableOfContents from "./TableOfContents";
import { extractHeadings, addIdsToHeadings } from "@/lib/utils/extractHeadings";
import { getNavigationNeighbors } from "@/lib/utils/navigation";
import { useFocusMode } from "@/contexts/FocusModeContext";

interface ArticleContentProps {
  title: string;
  content: string;
  readingTime?: number;
  showTOC?: boolean;
}

export default function ArticleContent({
  title,
  content,
  readingTime = 5,
  showTOC = true,
}: ArticleContentProps) {
  const pathname = usePathname();
  const { isFocusMode } = useFocusMode();
  const [isTOCOpen, setIsTOCOpen] = useState(true);
  const processedContent = useMemo(() => addIdsToHeadings(content), [content]);
  const headings = useMemo(
    () => extractHeadings(processedContent),
    [processedContent]
  );

  // Open TOC when exiting Focus Mode
  useEffect(() => {
    if (!isFocusMode) {
      setIsTOCOpen(true);
    }
  }, [isFocusMode]);

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

          <div className="prose prose-gray dark:prose-invert dark:prose-pre:bg-gray-900 max-w-none prose-headings:text-gray-900 dark:prose-headings:text-gray-100 prose-p:text-gray-700 dark:prose-p:text-gray-300 prose-a:text-blue-600 dark:prose-a:text-blue-400 prose-strong:text-gray-900 dark:prose-strong:text-gray-100 prose-code:text-gray-900 dark:prose-code:text-gray-100 prose-li:text-gray-700 dark:prose-li:text-gray-300">
            <div
              className="article-content"
              dangerouslySetInnerHTML={{ __html: processedContent }}
            />
          </div>

          <footer className="mt-12 pt-8 border-t border-[rgba(55,53,47,0.09)] dark:border-gray-800">
            <div className="flex items-center justify-between flex-wrap gap-4">
              <div className="flex gap-2">
                {previous ? (
                  <Link
                    href={previous.href}
                    className="px-4 py-2 bg-[#37352f] text-white rounded hover:bg-black dark:bg-gray-100 dark:text-[#191919] dark:hover:bg-white transition-colors text-sm font-medium"
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
                    className="px-4 py-2 bg-[#37352f] text-white rounded hover:bg-black dark:bg-gray-100 dark:text-[#191919] dark:hover:bg-white transition-colors text-sm font-medium"
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

      {showTOC && headings.length > 0 && !isFocusMode && (
        <aside
          className={`hidden lg:block flex-shrink-0 transition-all duration-300 ${
            isTOCOpen ? "w-64" : "w-auto"
          }`}
        >
          <TableOfContents
            headings={headings}
            isOpen={isTOCOpen}
            onToggle={() => setIsTOCOpen(!isTOCOpen)}
          />
        </aside>
      )}
    </div>
  );
}
