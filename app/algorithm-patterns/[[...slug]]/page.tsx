import { MDXRemote } from "next-mdx-remote/rsc";
import MDXArticleContent from "@/components/article/MDXArticleContent";
import { getContentForRoute } from "@/lib/utils/content";
import { parseFrontmatter } from "@/lib/utils/mdx";
import { notFound } from "next/navigation";
import { mdxComponents } from "@/components/mdx/MDXComponents";

interface PageProps {
  params: Promise<{
    slug?: string[];
  }>;
}

export default async function AlgorithmPatternsPage({ params }: PageProps) {
  // Await params (Next.js 15+ requires this)
  const resolvedParams = await params;
  const slug = resolvedParams.slug || [];
  
  // Construct the route path from slug
  const route = `/algorithm-patterns${slug.length > 0 ? "/" + slug.join("/") : ""}`;
  
  const rawContent = getContentForRoute(route);

  // If no content found
  if (!rawContent) {
    if (slug.length === 0) {
      return (
        <MDXArticleContent title="Part 2: Algorithm Patterns">
          <div>
            <h2>Part 2: Algorithm Patterns</h2>
            <p>Welcome to the Algorithm Patterns section. Select a topic from the navigation to get started.</p>
          </div>
        </MDXArticleContent>
      );
    }
    notFound();
  }

  // Parse frontmatter and body
  const { frontmatter, body } = parseFrontmatter(rawContent);

  // Extract title from frontmatter or derive from route
  const title = frontmatter.title || 
    (slug.length > 0 ? slug[slug.length - 1] : "Algorithm Patterns")
    .split(/[-_]/)
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');

  return (
    <MDXArticleContent title={title}>
      <MDXRemote source={body} components={mdxComponents} />
    </MDXArticleContent>
  );
}
