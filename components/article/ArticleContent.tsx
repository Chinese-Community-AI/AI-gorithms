"use client";

import { useMemo } from "react";
import TableOfContents from "./TableOfContents";
import ReadingProgress from "./ReadingProgress";
import { extractHeadings, addIdsToHeadings } from "@/lib/utils/extractHeadings";

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
  const processedContent = useMemo(() => addIdsToHeadings(content), [content]);
  const headings = useMemo(
    () => extractHeadings(processedContent),
    [processedContent]
  );

  return (
    <div className="flex gap-8">
      <ReadingProgress />
      <article className="flex-1 max-w-4xl">
        <header className="mb-8">
          <h1 className="text-4xl font-bold mb-4">{title}</h1>
          <div className="flex items-center gap-4 text-sm text-gray-500 dark:text-gray-400">
            <span>{readingTime} min read</span>
            <span>•</span>
            <span>Last updated: {new Date().toLocaleDateString()}</span>
          </div>
        </header>

        <div className="prose dark:prose-invert max-w-none">
          <div
            className="article-content"
            dangerouslySetInnerHTML={{ __html: processedContent }}
          />
        </div>

        <footer className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-800">
          <div className="flex items-center justify-between">
            <div className="flex gap-2">
              <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
                Previous
              </button>
              <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
                Next
              </button>
            </div>
            <button className="px-4 py-2 border border-gray-300 dark:border-gray-700 rounded hover:bg-gray-100 dark:hover:bg-gray-800">
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
