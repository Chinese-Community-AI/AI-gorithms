import { MDXRemote } from "next-mdx-remote/rsc";
import MDXArticleContent from "@/components/article/MDXArticleContent";
import { getContentForRoute } from "@/lib/utils/content";

export default function HardProblemsPage() {
  const content = getContentForRoute("/practice/hard");

  // Fallback to default content if MDX file not found
  if (!content) {
    return (
      <MDXArticleContent title="Hard Problems" readingTime={2}>
        <div>
          <h2>Hard Problems</h2>
          <p>Master advanced algorithms with challenging problems.</p>

          <h2>Problem List</h2>
          <p>Problems will be listed here as you add content.</p>
        </div>
      </MDXArticleContent>
    );
  }

  return (
    <MDXArticleContent title="Hard Problems" readingTime={2}>
      <MDXRemote source={content} />
    </MDXArticleContent>
  );
}
