import { MDXRemote } from "next-mdx-remote/rsc";
import MDXArticleContent from "@/components/article/MDXArticleContent";
import { getContentForRoute } from "@/lib/utils/content";

export default function EasyProblemsPage() {
  const content = getContentForRoute("/practice/easy");

  // Fallback to default content if MDX file not found
  if (!content) {
    return (
      <MDXArticleContent title="Easy Problems" readingTime={2}>
        <div>
          <h2>Easy Problems</h2>
          <p>
            Start here with beginner-friendly problems to build your confidence.
          </p>

          <h2>Problem List</h2>
          <p>Problems will be listed here as you add content.</p>
        </div>
      </MDXArticleContent>
    );
  }

  return (
    <MDXArticleContent title="Easy Problems" readingTime={2}>
      <MDXRemote source={content} />
    </MDXArticleContent>
  );
}
