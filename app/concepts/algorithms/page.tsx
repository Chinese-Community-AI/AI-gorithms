import { MDXRemote } from "next-mdx-remote/rsc";
import MDXArticleContent from "@/components/article/MDXArticleContent";
import { getContentForRoute } from "@/lib/utils/content";

export default function AlgorithmsPage() {
  const content = getContentForRoute("/concepts/algorithms");

  // Fallback to default content if MDX file not found
  if (!content) {
    return (
      <MDXArticleContent title="Algorithm Fundamentals" readingTime={3}>
        <div>
          <h2>Algorithm Fundamentals</h2>
          <p>Understanding algorithms is key to writing efficient code.</p>

          <h2>What are Algorithms?</h2>
          <p>Algorithms are step-by-step procedures for solving problems.</p>
        </div>
      </MDXArticleContent>
    );
  }

  return (
    <MDXArticleContent title="Algorithm Fundamentals" readingTime={3}>
      <MDXRemote source={content} />
    </MDXArticleContent>
  );
}
