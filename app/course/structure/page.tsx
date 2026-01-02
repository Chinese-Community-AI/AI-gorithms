import { MDXRemote } from "next-mdx-remote/rsc";
import MDXArticleContent from "@/components/article/MDXArticleContent";
import { getContentForRoute } from "@/lib/utils/content";

export default function CourseStructurePage() {
  const content = getContentForRoute("/course/structure");

  // Fallback to default content if MDX file not found
  if (!content) {
    return (
      <MDXArticleContent title="Course Structure" >
        <div>
          <h2>Course Structure Overview</h2>
          <p>
            This course is designed to take you from beginner to advanced in
            data structures and algorithms.
          </p>

          <h2>What You'll Learn</h2>
          <ul>
            <li>Fundamental data structures</li>
            <li>Common algorithm patterns</li>
            <li>Problem-solving strategies</li>
            <li>Complexity analysis</li>
          </ul>

          <h2>Course Modules</h2>
          <p>
            The course is divided into several modules, each building on the
            previous one.
          </p>

          <h3>Module 1: Foundations</h3>
          <p>Start with the basics of data structures and algorithms.</p>

          <h3>Module 2: Intermediate Topics</h3>
          <p>Build on your foundation with more complex concepts.</p>

          <h2>Getting Started</h2>
          <p>Follow the learning path that best suits your experience level.</p>
        </div>
      </MDXArticleContent>
    );
  }

  return (
    <MDXArticleContent title="Course Structure" >
      <MDXRemote source={content} />
    </MDXArticleContent>
  );
}
