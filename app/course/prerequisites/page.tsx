import ArticleContent from "@/components/article/ArticleContent";

export default function CoursePrerequisitesPage() {
  const content = `
    <h2>Prerequisites</h2>
    <p>Before starting this course, you should have:</p>
    
    <ul>
      <li>Basic programming knowledge in at least one language</li>
      <li>Understanding of basic programming concepts</li>
      <li>Familiarity with variables, functions, and control structures</li>
    </ul>
  `;

  return (
    <ArticleContent title="Prerequisites" content={content} readingTime={2} />
  );
}
