import { MDXRemote } from "next-mdx-remote/rsc";
import MDXArticleContent from "@/components/article/MDXArticleContent";
import { getContentForRoute } from "@/lib/utils/content";

export default function MediumProblemsPage() {
  const content = getContentForRoute("/practice/medium");

  // Fallback to default content if MDX file not found
  if (!content) {
    return (
      <MDXArticleContent title="Medium Problems" readingTime={2}>
        <div>
          <h2>Medium Problems</h2>
          <p>Challenge yourself with intermediate-level problems.</p>

          <h2>Problem List</h2>
          <p>Problems will be listed here as you add content.</p>
        </div>
      </MDXArticleContent>
    );
  }

  return (
    <MDXArticleContent title="Medium Problems" readingTime={2}>
      <MDXRemote source={content} />
    </MDXArticleContent>
  );
}
