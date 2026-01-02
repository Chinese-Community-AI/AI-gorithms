/**
 * MDX Example Page
 *
 * This page demonstrates how to use MDX content in Next.js.
 *
 * NOTE: Currently using regular HTML instead of MDX imports
 * to avoid Next.js 16/Turbopack compatibility issues.
 * MDX files are kept in content/articles/ for future integration.
 */

import ArticleContent from "@/components/article/ArticleContent";

export default function MDXExamplePage() {
  // Converted from example-article.mdx to HTML - keeping MDX files for later MDX integration
  const content = `
    <h1>Example MDX Article</h1>
    
    <p>This is an example of how to write content using MDX. MDX combines the simplicity of Markdown with the power of React components.</p>
    
    <h2>What You'll Learn</h2>
    
    <ul>
      <li>How to write Markdown content</li>
      <li>How to use React components in your content</li>
      <li>How to create interactive learning materials</li>
    </ul>
    
    <h2>Markdown Basics</h2>
    
    <p>You can use all standard Markdown features:</p>
    
    <ul>
      <li><strong>Bold text</strong></li>
      <li><em>Italic text</em></li>
      <li><s>Strikethrough</s> (from GitHub Flavored Markdown)</li>
      <li><a href="https://example.com">Links</a></li>
    </ul>
    
    <h3>Lists</h3>
    
    <p>Unordered list:</p>
    
    <ul>
      <li>Item 1</li>
      <li>Item 2</li>
      <li>Item 3</li>
    </ul>
    
    <p>Ordered list:</p>
    
    <ol>
      <li>First item</li>
      <li>Second item</li>
      <li>Third item</li>
    </ol>
    
    <h2>Code Examples</h2>
    
    <p>Inline code: <code>const x = 5;</code></p>
    
    <p>Code block:</p>
    <pre><code>function greet(name) {
  return \`Hello, \${name}!\`;
}</code></pre>
    
    <h2>Future: MDX Integration</h2>
    
    <p>When MDX is properly configured, this page will use the MDX file directly from <code>content/articles/example-article.mdx</code>.</p>
  `;

  return (
    <ArticleContent
      title="MDX Example"
      content={content}
      
      showTOC={true}
    />
  );
}
