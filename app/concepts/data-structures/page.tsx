import { MDXRemote } from "next-mdx-remote/rsc";
import MDXArticleContent from "@/components/article/MDXArticleContent";
import { getContentForRoute } from "@/lib/utils/content";

export default function DataStructuresPage() {
  const content = getContentForRoute("/concepts/data-structures");

  // Fallback to default content if MDX file not found
  if (!content) {
    return (
      <MDXArticleContent title="Part 1: Data Structures Basics" >
        <div>
          <h2>Part 1: Data Structures Basics</h2>
          <p>Learn the fundamental data structures used in computer science.</p>

          <h2>What are Data Structures?</h2>
          <p>
            Data structures are ways of organizing and storing data in a
            computer.
          </p>
        </div>
      </MDXArticleContent>
    );
  }

  return (
    <MDXArticleContent title="Part 1: Data Structures Basics" >
      <MDXRemote source={content} />
    </MDXArticleContent>
  );
}
