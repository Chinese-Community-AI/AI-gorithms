import { MDXRemote } from "next-mdx-remote/rsc";
import MDXArticleContent from "@/components/article/MDXArticleContent";
import { getContentForRoute } from "@/lib/utils/content";
import { parseFrontmatter } from "@/lib/utils/mdx";
import { notFound } from "next/navigation";
import { mdxComponents } from "@/components/mdx/MDXComponents";

interface BasicsPageProps {
  params: Promise<{
    slug?: string[];
  }>;
}

export default async function BasicsPage({ params }: BasicsPageProps) {
  // Await params (Next.js 15+ requires this)
  const resolvedParams = await params;
  // Build the route path from slug
  const slug = resolvedParams.slug || [];

  // Handle the index page (/basics)
  if (slug.length === 0) {
    return (
      <MDXArticleContent title="Part 1: Data Structures Basics">
        <div>
          <h2>Part 1: Data Structures Basics</h2>
          <p>
            Welcome to the Basics section. Select a topic from the navigation to
            get started.
          </p>

          <h2>Available Topics</h2>
          <ul>
            <li>1 Minute Introduction</li>
            <li>Arrays</li>
            <li>Linked Lists</li>
            <li>10 Sorting Algorithms</li>
            <li>Binary Tree Structure and Traversal</li>
            <li>Binary Tree Variations</li>
            <li>Graph Structure Algorithm Overview</li>
            <li>Hash Table Variations</li>
            <li>Implement Hashmap</li>
          </ul>
        </div>
      </MDXArticleContent>
    );
  }

  const route = `/basics/${slug.join("/")}`;
  const rawContent = getContentForRoute(route);

  // If no content found, show 404
  if (!rawContent) {
    notFound();
  }

  // Parse frontmatter and body
  const { frontmatter, body } = parseFrontmatter(rawContent);

  // Extract title from the last part of the slug if not in frontmatter
  const title =
    frontmatter.title ||
    slug[slug.length - 1]
      .split(/[-_]/)
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");

  return (
    <MDXArticleContent title={title}>
      <MDXRemote source={body} components={mdxComponents} />
    </MDXArticleContent>
  );
}
