import MDXArticleContent from "@/components/article/MDXArticleContent";
import { getContentForRoute } from "@/lib/utils/content";
import { parseFrontmatter } from "@/lib/utils/mdx";
import { mdxComponents } from "@/components/mdx/MDXComponents";
import { MDXRemote } from "next-mdx-remote/rsc";

export default async function AlgorithmPatternsPage() {
  const route = "/algorithm-patterns";
  const rawContent = getContentForRoute(route);

  // If no content found, show default
  if (!rawContent) {
    return (
      <MDXArticleContent title="Part 2: Algorithm Patterns">
        <div>
          <h2>Part 2: Algorithm Patterns</h2>
          <p>Content coming soon...</p>
        </div>
      </MDXArticleContent>
    );
  }

  // Parse frontmatter and body
  const { frontmatter, body } = parseFrontmatter(rawContent);

  // Extract title from frontmatter or use default
  const title = frontmatter.title || "Part 2: Algorithm Patterns";

  return (
    <MDXArticleContent title={title}>
      <MDXRemote source={body} components={mdxComponents} />
    </MDXArticleContent>
  );
}
