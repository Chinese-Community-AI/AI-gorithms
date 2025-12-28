import { MDXRemote } from "next-mdx-remote/rsc";
import MDXArticleContent from "@/components/article/MDXArticleContent";
import { getContentForRoute } from "@/lib/utils/content";

export default function CodeExamplesPage() {
  const content = getContentForRoute("/resources/examples");

  // Fallback to default content if MDX file not found
  if (!content) {
    return (
      <MDXArticleContent title="Code Examples" readingTime={2}>
        <div>
          <h2>Code Examples</h2>
          <p>Browse through well-documented code examples.</p>

          <h2>Examples by Topic</h2>
          <p>Code examples will be organized by topic here.</p>
        </div>
      </MDXArticleContent>
    );
  }

  return (
    <MDXArticleContent title="Code Examples" readingTime={2}>
      <MDXRemote source={content} />
    </MDXArticleContent>
  );
}
