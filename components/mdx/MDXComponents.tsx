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
        className="text-4xl font-extrabold mb-4 mt-10 text-[var(--foreground)] tracking-tight leading-tight"
        {...props}
      >
        {children}
      </h1>
    ),
    h2: ({ children, ...props }) => (
      <h2
        className="text-2xl font-bold mb-3 mt-8 text-[var(--foreground)] tracking-tight border-b border-[rgba(55,53,47,0.09)] pb-2"
        {...props}
      >
        {children}
      </h2>
    ),
    h3: ({ children, ...props }) => (
      <h3
        className="text-xl font-bold mb-2 mt-6 text-[var(--foreground)] tracking-tight"
        {...props}
      >
        {children}
      </h3>
    ),

    // Customize paragraph styles
    p: ({ children, ...props }) => (
      <p
        className="mb-4 text-[15.5px] leading-relaxed text-[var(--foreground)] opacity-90"
        {...props}
      >
        {children}
      </p>
    ),

    // Customize links to use Next.js Link component
    a: ({ href, children, ...props }) => {
      const className =
        "text-[#d9730d] font-semibold underline decoration-[#d9730d]/30 hover:decoration-[#d9730d] transition-all";

      if (href?.startsWith("http")) {
        return (
          <a
            href={href}
            className={className}
            target="_blank"
            rel="noopener noreferrer"
            {...props}
          >
            {children}
          </a>
        );
      }
      return (
        <Link href={href || "#"} className={className} {...props}>
          {children}
        </Link>
      );
    },

    // Customize code blocks
    code: ({ children, className, ...props }) => {
      const isInline = !className;

      if (isInline) {
        return (
          <code
            className="px-1.5 py-0.5 bg-[var(--sidebar-bg)] text-[#d9730d] dark:text-[#d9730d] rounded-[4px] text-[0.9em] font-mono font-medium border border-[rgba(55,53,47,0.06)]"
            {...props}
          >
            {children}
          </code>
        );
      }

      const language = className?.replace("language-", "") || "text";
      const codeString = String(children).replace(/\n$/, "");

      return <CodeBlock code={codeString} language={language} />;
    },

    // Customize blockquotes
    blockquote: ({ children, ...props }) => (
      <blockquote
        className="border-l-4 border-[#d9730d] pl-5 py-1 my-6 italic text-[var(--foreground)] opacity-80 bg-[#faebdd]/20 dark:bg-orange-900/5 rounded-r-lg"
        {...props}
      >
        {children}
      </blockquote>
    ),

    // Customize lists
    ul: ({ children, ...props }) => (
      <ul
        className="list-disc list-outside mb-6 space-y-2 text-[var(--foreground)] opacity-90 ml-5"
        {...props}
      >
        {children}
      </ul>
    ),
    ol: ({ children, ...props }) => (
      <ol
        className="list-decimal list-outside mb-6 space-y-2 text-[var(--foreground)] opacity-90 ml-5"
        {...props}
      >
        {children}
      </ol>
    ),
    li: ({ children, ...props }) => (
      <li className="pl-1 mb-1" {...props}>
        {children}
      </li>
    ),

    // Customize tables
    table: ({ children, ...props }) => (
      <div className="overflow-x-auto my-8 border border-[rgba(55,53,47,0.09)] rounded-xl shadow-sm">
        <table className="min-w-full border-collapse" {...props}>
          {children}
        </table>
      </div>
    ),
    th: ({ children, ...props }) => (
      <th
        className="border-b border-[rgba(55,53,47,0.09)] px-4 py-3 bg-[var(--sidebar-bg)] font-bold text-left text-sm uppercase tracking-wider opacity-60"
        {...props}
      >
        {children}
      </th>
    ),
    td: ({ children, ...props }) => (
      <td
        className="border-b border-[rgba(55,53,47,0.06)] px-4 py-3 text-sm text-[var(--foreground)] opacity-90"
        {...props}
      >
        {children}
      </td>
    ),

    hr: ({ ...props }) => (
      <hr className="my-10 border-[rgba(55,53,47,0.09)]" {...props} />
    ),

    img: ({ src, alt, ...props }) => (
      <img
        src={src}
        alt={alt}
        className="rounded-xl my-8 max-w-full h-auto shadow-md border border-[rgba(55,53,47,0.06)]"
        {...props}
      />
    ),

    ...components,
  };
}
