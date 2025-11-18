"use client";

import { useMemo } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import TableOfContents from "./TableOfContents";
import ReadingProgress from "./ReadingProgress";
import Breadcrumbs from "./Breadcrumbs";
import { extractHeadings, addIdsToHeadings } from "@/lib/utils/extractHeadings";
import { getBreadcrumbs, getNavigationNeighbors } from "@/lib/utils/navigation";

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
  const processedContent = useMemo(() => addIdsToHeadings(content), [content]);
  const headings = useMemo(
    () => extractHeadings(processedContent),
    [processedContent]
  );

  const breadcrumbs = useMemo(() => getBreadcrumbs(pathname), [pathname]);
  const { previous, next } = useMemo(
    () => getNavigationNeighbors(pathname),
    [pathname]
  );

  return (
    <div className="flex gap-8">
      <ReadingProgress />
      <article className="flex-1 max-w-4xl">
        <Breadcrumbs items={breadcrumbs} />
        <header className="mb-8 mt-6 scroll-mt-32">
          <h1 className="text-4xl font-bold mb-4 text-gray-900 dark:text-gray-100">
            {title}
          </h1>
          <div className="flex items-center gap-4 text-sm text-gray-500 dark:text-gray-400">
            <span>{readingTime} min read</span>
            <span>•</span>
            <span>Last updated: {new Date().toLocaleDateString()}</span>
          </div>
        </header>

        <div className="prose prose-gray dark:prose-invert dark:prose-pre:bg-gray-900 max-w-none prose-headings:text-gray-900 dark:prose-headings:text-gray-100 prose-p:text-gray-700 dark:prose-p:text-gray-300 prose-a:text-blue-600 dark:prose-a:text-blue-400 prose-strong:text-gray-900 dark:prose-strong:text-gray-100 prose-code:text-gray-900 dark:prose-code:text-gray-100 prose-li:text-gray-700 dark:prose-li:text-gray-300">
          <div
            className="article-content"
            dangerouslySetInnerHTML={{ __html: processedContent }}
          />
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

      {showTOC && headings.length > 0 && (
        <aside className="hidden lg:block w-64 flex-shrink-0">
          <TableOfContents headings={headings} />
        </aside>
      )}
    </div>
  );
}
