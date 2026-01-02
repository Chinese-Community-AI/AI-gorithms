import { MDXRemote } from "next-mdx-remote/rsc";
import MDXArticleContent from "@/components/article/MDXArticleContent";
import { getContentForRoute } from "@/lib/utils/content";

export default function ComplexityPage() {
  const content = getContentForRoute("/concepts/complexity");

  // Fallback to default content if MDX file not found
  if (!content) {
    return (
      <MDXArticleContent title="Complexity Analysis" >
        <div>
          <h2>Complexity Analysis</h2>
          <p>Learn how to analyze the efficiency of algorithms.</p>

          <h2>Time Complexity</h2>
          <p>Measures how long an algorithm takes to run.</p>

          <h2>Space Complexity</h2>
          <p>Measures how much memory an algorithm uses.</p>
        </div>
      </MDXArticleContent>
    );
  }

  return (
    <MDXArticleContent title="Complexity Analysis" >
      <MDXRemote source={content} />
    </MDXArticleContent>
  );
}
