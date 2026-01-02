import { MDXRemote } from "next-mdx-remote/rsc";
import MDXArticleContent from "@/components/article/MDXArticleContent";
import { getContentForRoute } from "@/lib/utils/content";

export default function CourseObjectivesPage() {
  const content = getContentForRoute("/course/objectives");

  // Fallback to default content if MDX file not found
  if (!content) {
    return (
      <MDXArticleContent title="Learning Objectives" >
        <div>
          <h2>Learning Objectives</h2>
          <p>By the end of this course, you will be able to:</p>

          <ul>
            <li>Understand fundamental data structures</li>
            <li>Implement common algorithms</li>
            <li>Analyze time and space complexity</li>
            <li>Solve algorithmic problems efficiently</li>
          </ul>
        </div>
      </MDXArticleContent>
    );
  }

  return (
    <MDXArticleContent title="Learning Objectives" >
      <MDXRemote source={content} />
    </MDXArticleContent>
  );
}
