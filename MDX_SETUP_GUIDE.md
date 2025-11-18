# MDX Setup Guide - Step by Step Explanation

## What is MDX?

**MDX = Markdown + JSX**

MDX lets you write Markdown (easy-to-read text format) but also embed React components directly in your content. This gives you:

1. **Easy content writing** - Write in Markdown (simple syntax)
2. **Interactive components** - Embed React components for code blocks, visualizations, etc.
3. **Type safety** - Full TypeScript support
4. **Component reusability** - Use your existing React components

## Example of MDX:

```mdx
# My Article Title

This is regular **markdown** text.

<CodeBlock code="console.log('Hello')" language="javascript" />

You can also use custom components!
```

---

## Step 1: Package Installation ✅

We installed these packages:

- **@next/mdx**: Next.js plugin that integrates MDX
- **@mdx-js/loader**: Webpack loader that processes MDX files
- **@mdx-js/react**: React components needed to render MDX
- **remark-gfm**: Adds GitHub Flavored Markdown support (tables, strikethrough, task lists)

---

## Step 2: Next.js Configuration

We need to tell Next.js to:

1. Recognize `.mdx` files
2. Process them with MDX
3. Allow importing them as React components

This is done in `next.config.mjs`.

---

## Step 3: MDX Components

When you write MDX, you can use HTML tags like `<h1>`, `<p>`, etc. But you can also customize how they render by providing your own components.

For example, you can make all `<h2>` tags have a special style, or replace `<code>` with your custom `CodeBlock` component.

---

## Step 4: Using MDX Files

There are two ways to use MDX in Next.js:

1. **As pages** - Create `page.mdx` files that become routes
2. **As content** - Import MDX files and render them in components

We'll use both approaches!

---

## Next Steps

1. Configure `next.config.mjs`
2. Create MDX components file
3. Create example MDX content
4. Update ArticleContent to support MDX
