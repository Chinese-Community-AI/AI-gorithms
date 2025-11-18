import ArticleContent from "@/components/article/ArticleContent";

export default function CoursePage() {
  const content = `
    <h2>Course Overview</h2>
    <p>This comprehensive course covers everything you need to master data structures and algorithms.</p>
    
    <h2>What's Included</h2>
    <ul>
      <li>Structured learning paths</li>
      <li>Interactive code examples</li>
      <li>Practice problems with solutions</li>
      <li>AI-powered explanations</li>
    </ul>
    
    <h2>How to Use This Course</h2>
    <p>Follow the navigation menu to explore different topics, or use the search function to find specific content.</p>
  `;

  return (
    <ArticleContent title="Course Overview" content={content} readingTime={3} />
  );
}
