# Complete MDX Guide - Step by Step

## What We've Built

We've set up a complete MDX system for your learning platform. Here's what each part does:

---

## 1. Configuration (`next.config.mjs`)

**What it does:**

- Tells Next.js to recognize `.mdx` files as pages
- Configures MDX plugins (GitHub Flavored Markdown)
- Links to our custom components

**Key parts:**

```javascript
pageExtensions: ["js", "jsx", "md", "mdx", "ts", "tsx"];
```

This tells Next.js: "Treat .mdx files like .tsx files (as React components)"

---

## 2. MDX Components (`components/mdx/MDXComponents.tsx`)

**What it does:**

- Defines how HTML elements in MDX are rendered
- Customizes styling for headings, paragraphs, links, code, etc.
- Maps HTML tags to your custom React components

**Example:**
When you write `<h1>Title</h1>` in MDX, it uses your custom styled h1 component instead of the default.

**Key concept:**

```typescript
export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h1: ({ children }) => <h1 className="custom-style">{children}</h1>,
    code: ({ children, className }) => {
      // Custom logic for code blocks vs inline code
    },
    // ... more components
  };
}
```

---

## 3. TypeScript Declarations (`mdx-components.d.ts`)

**What it does:**

- Tells TypeScript that `.mdx` files can be imported as React components
- Without this, TypeScript would give errors when importing MDX files

**Example:**

```typescript
import MyArticle from "./content/article.mdx";
// TypeScript now knows MyArticle is a React component
```

---

## 4. Content Structure (`content/`)

**What it does:**

- Organizes your MDX content files
- Keeps content separate from code

**Structure:**

```
content/
  articles/        # Main articles
  examples/       # Code examples
```

---

## 5. MDX Article Component (`components/article/MDXArticleContent.tsx`)

**What it does:**

- Wraps MDX content with your article layout
- Adds header, footer, navigation
- Applies consistent styling

**Usage:**

```tsx
import MyArticle from "@/content/articles/my-article.mdx";
import MDXArticleContent from "@/components/article/MDXArticleContent";

export default function Page() {
  return <MDXArticleContent MDXContent={MyArticle} title="My Article" />;
}
```

---

## How to Use MDX

### Method 1: Direct Import (Simplest)

```tsx
// app/my-page/page.tsx
import MyContent from "@/content/articles/my-article.mdx";

export default function Page() {
  return (
    <div className="prose">
      <MyContent />
    </div>
  );
}
```

### Method 2: With ArticleContent Component

```tsx
// app/my-page/page.tsx
import MyContent from "@/content/articles/my-article.mdx";
import MDXArticleContent from "@/components/article/MDXArticleContent";

export default function Page() {
  return (
    <MDXArticleContent
      MDXContent={MyContent}
      title="My Article"
      readingTime={5}
    />
  );
}
```

### Method 3: As a Page (Automatic Routing)

Create `app/my-page/page.mdx`:

```mdx
# My Page Title

This becomes a route at `/my-page` automatically!
```

---

## Writing MDX Content

### Basic Markdown

```mdx
# Heading 1

## Heading 2

**Bold** and _italic_ text.

- List item 1
- List item 2

[Link text](https://example.com)
```

### Code Blocks

````mdx
```javascript
function hello() {
  console.log("Hello!");
}
```
````

This automatically uses your `CodeBlock` component!

### Using React Components

```mdx
# My Article

<CodeBlock code="console.log('Hello')" language="javascript" title="Example" />
```

You can use any React component from your codebase!

### Frontmatter (Metadata)

```mdx
---
title: "My Article"
readingTime: 5
author: "John Doe"
---

# My Article

Content here...
```

**Note:** Frontmatter parsing requires additional setup. For now, pass metadata as props.

---

## Key Concepts Explained

### 1. What is MDX?

MDX = Markdown + JSX

- Write content in Markdown (easy)
- Embed React components (powerful)
- Get the best of both worlds

### 2. How Does It Work?

1. You write `.mdx` file with Markdown + JSX
2. Next.js compiles it to a React component
3. You import and render it like any component
4. MDX uses your custom components for styling

### 3. Why Use MDX?

- **Easy content writing** - Markdown is simple
- **Interactive content** - Use React components
- **Type safe** - Full TypeScript support
- **Reusable** - Components work everywhere

---

## Next Steps

1. **Create your first article:**

   ```bash
   # Create content/articles/my-first-article.mdx
   ```

2. **Use it in a page:**

   ```tsx
   import MyArticle from "@/content/articles/my-first-article.mdx";
   ```

3. **Add more components:**

   - Custom callout boxes
   - Interactive visualizations
   - Code editors
   - Quizzes

4. **Extract frontmatter:**
   - Use a library like `gray-matter` for better frontmatter parsing
   - Auto-generate reading time
   - Add tags and categories

---

## Common Patterns

### Pattern 1: Article with Metadata

```tsx
// page.tsx
import Article from "@/content/articles/article.mdx";

export default function Page() {
  return (
    <MDXArticleContent
      MDXContent={Article}
      title="Article Title"
      readingTime={5}
    />
  );
}
```

### Pattern 2: Simple Content Page

```tsx
// page.tsx
import Content from "@/content/help.mdx";

export default function Page() {
  return (
    <div className="prose max-w-4xl mx-auto">
      <Content />
    </div>
  );
}
```

### Pattern 3: Multiple Articles

```tsx
// page.tsx
import Article1 from "@/content/articles/article1.mdx";
import Article2 from "@/content/articles/article2.mdx";

export default function Page() {
  return (
    <div>
      <Article1 />
      <Article2 />
    </div>
  );
}
```

---

## Troubleshooting

### MDX file not found?

- Make sure the path is correct
- Check that the file has `.mdx` extension
- Restart the dev server after creating new MDX files

### Components not working?

- Check `MDXComponents.tsx` has the component mapped
- Make sure the component is exported correctly
- Verify imports in the MDX file

### Styling issues?

- Check Tailwind classes are correct
- Verify dark mode classes are applied
- Check `prose` classes from `@tailwindcss/typography`

---

## Summary

You now have:
✅ MDX configured in Next.js
✅ Custom components for styling
✅ TypeScript support
✅ Content structure
✅ Example components

**Start creating content!** 🎉
