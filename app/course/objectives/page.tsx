import ArticleContent from "@/components/article/ArticleContent";

export default function CourseObjectivesPage() {
  const content = `
    <h2>Learning Objectives</h2>
    <p>By the end of this course, you will be able to:</p>
    
    <ul>
      <li>Understand fundamental data structures</li>
      <li>Implement common algorithms</li>
      <li>Analyze time and space complexity</li>
      <li>Solve algorithmic problems efficiently</li>
    </ul>
  `;

  return (
    <ArticleContent
      title="Learning Objectives"
      content={content}
      readingTime={2}
    />
  );
}
