import { MDXRemote } from "next-mdx-remote/rsc";
import MDXArticleContent from "@/components/article/MDXArticleContent";
import { getContentForRoute } from "@/lib/utils/content";

export default function CoursePrerequisitesPage() {
  const content = getContentForRoute("/course/prerequisites");

  // Fallback to default content if MDX file not found
  if (!content) {
    return (
      <MDXArticleContent title="Prerequisites" readingTime={2}>
        <div>
          <h2>Prerequisites</h2>
          <p>Before starting this course, you should have:</p>

          <ul>
            <li>Basic programming knowledge in at least one language</li>
            <li>Understanding of basic programming concepts</li>
            <li>
              Familiarity with variables, functions, and control structures
            </li>
          </ul>
        </div>
      </MDXArticleContent>
    );
  }

  return (
    <MDXArticleContent title="Prerequisites" readingTime={2}>
      <MDXRemote source={content} />
    </MDXArticleContent>
  );
}
