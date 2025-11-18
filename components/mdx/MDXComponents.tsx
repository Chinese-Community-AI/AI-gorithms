/**
 * MDX Components
 *
 * This file defines how HTML elements in MDX files are rendered.
 * When you write MDX, you can use HTML tags like <h1>, <p>, <code>, etc.
 * This file lets you customize how those tags render.
 *
 * For example:
 * - All <h2> tags can have a special style
 * - <code> tags can automatically use your CodeBlock component
 * - <a> tags can have custom styling
 */

import type { MDXComponents } from "mdx/types";
import CodeBlock from "@/components/article/CodeBlock";
import Link from "next/link";

/**
 * Custom MDX Components
 *
 * This object maps HTML element names to React components.
 * When MDX encounters an HTML tag, it will use the component
 * specified here instead of the default HTML element.
 */
export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    // Customize heading styles
    h1: ({ children, ...props }) => (
      <h1
        className="text-4xl font-bold mb-4 mt-8 text-gray-900 dark:text-gray-100"
        {...props}
      >
        {children}
      </h1>
    ),
    h2: ({ children, ...props }) => (
      <h2
        className="text-3xl font-bold mb-3 mt-6 text-gray-900 dark:text-gray-100"
        {...props}
      >
        {children}
      </h2>
    ),
    h3: ({ children, ...props }) => (
      <h3
        className="text-2xl font-semibold mb-2 mt-4 text-gray-900 dark:text-gray-100"
        {...props}
      >
        {children}
      </h3>
    ),

    // Customize paragraph styles
    p: ({ children, ...props }) => (
      <p
        className="mb-4 text-gray-700 dark:text-gray-300 leading-relaxed"
        {...props}
      >
        {children}
      </p>
    ),

    // Customize links to use Next.js Link component
    // This enables client-side navigation (faster page loads)
    a: ({ href, children, ...props }) => {
      // If it's an external link (starts with http), use regular <a>
      if (href?.startsWith("http")) {
        return (
          <a
            href={href}
            className="text-blue-600 dark:text-blue-400 hover:underline"
            target="_blank"
            rel="noopener noreferrer"
            {...props}
          >
            {children}
          </a>
        );
      }
      // Internal links use Next.js Link for client-side navigation
      return (
        <Link
          href={href || "#"}
          className="text-blue-600 dark:text-blue-400 hover:underline"
          {...props}
        >
          {children}
        </Link>
      );
    },

    // Customize code blocks
    // Inline code (single backticks) uses <code>
    code: ({ children, className, ...props }) => {
      // Check if it's a code block (has className) or inline code
      const isInline = !className;

      if (isInline) {
        // Inline code styling
        return (
          <code
            className="px-1.5 py-0.5 bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 rounded text-sm font-mono"
            {...props}
          >
            {children}
          </code>
        );
      }

      // Code block - extract language from className
      // className format: "language-javascript"
      const language = className?.replace("language-", "") || "text";
      const codeString = String(children).replace(/\n$/, "");

      return <CodeBlock code={codeString} language={language} />;
    },

    // Customize blockquotes
    blockquote: ({ children, ...props }) => (
      <blockquote
        className="border-l-4 border-blue-500 pl-4 py-2 my-4 italic text-gray-600 dark:text-gray-400 bg-gray-50 dark:bg-gray-900 rounded-r"
        {...props}
      >
        {children}
      </blockquote>
    ),

    // Customize lists
    ul: ({ children, ...props }) => (
      <ul
        className="list-disc list-inside mb-4 space-y-2 text-gray-700 dark:text-gray-300"
        {...props}
      >
        {children}
      </ul>
    ),
    ol: ({ children, ...props }) => (
      <ol
        className="list-decimal list-inside mb-4 space-y-2 text-gray-700 dark:text-gray-300"
        {...props}
      >
        {children}
      </ol>
    ),
    li: ({ children, ...props }) => (
      <li className="ml-4" {...props}>
        {children}
      </li>
    ),

    // Customize tables (from remark-gfm)
    table: ({ children, ...props }) => (
      <div className="overflow-x-auto my-6">
        <table
          className="min-w-full border-collapse border border-gray-300 dark:border-gray-700"
          {...props}
        >
          {children}
        </table>
      </div>
    ),
    th: ({ children, ...props }) => (
      <th
        className="border border-gray-300 dark:border-gray-700 px-4 py-2 bg-gray-100 dark:bg-gray-800 font-semibold text-left"
        {...props}
      >
        {children}
      </th>
    ),
    td: ({ children, ...props }) => (
      <td
        className="border border-gray-300 dark:border-gray-700 px-4 py-2"
        {...props}
      >
        {children}
      </td>
    ),

    // Customize horizontal rule
    hr: ({ ...props }) => (
      <hr className="my-8 border-gray-300 dark:border-gray-700" {...props} />
    ),

    // Customize images
    img: ({ src, alt, ...props }) => (
      <img
        src={src}
        alt={alt}
        className="rounded-lg my-6 max-w-full h-auto"
        {...props}
      />
    ),

    // Spread any other components passed in
    ...components,
  };
}
