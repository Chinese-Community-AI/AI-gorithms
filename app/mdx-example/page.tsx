/**
 * MDX Example Page
 *
 * This page demonstrates how to use MDX content in Next.js.
 *
 * There are two ways to use MDX:
 * 1. Direct import (what we'll show here)
 * 2. Dynamic loading (for content from a CMS or file system)
 *
 * This example uses direct import, which is simpler and works great
 * for content that's part of your codebase.
 */

import ArticleContent from "@/components/article/ArticleContent";
import ExampleArticle from "@/content/articles/example-article.mdx";

/**
 * Method 1: Direct Import
 *
 * You can import MDX files directly as React components!
 * Next.js will automatically compile them.
 *
 * The MDX file becomes a React component you can render.
 */
export default function MDXExamplePage() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">MDX Example</h1>

      {/* 
        Method 1: Direct import
        Just render the imported MDX component
      */}
      <div className="prose prose-lg dark:prose-invert max-w-none">
        <ExampleArticle />
      </div>
    </div>
  );
}

/**
 * Method 2: Using with ArticleContent (Better for your use case)
 *
 * If you want to use MDX with your existing ArticleContent component,
 * you'll need to extract the content and frontmatter.
 *
 * We'll create a helper for this next!
 */
