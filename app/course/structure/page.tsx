import ArticleContent from "@/components/article/ArticleContent";
import CodeBlock from "@/components/article/CodeBlock";

export default function CourseStructurePage() {
  const sampleContent = `
    <h2>Course Structure Overview</h2>
    <p>This course is designed to take you from beginner to advanced in data structures and algorithms.</p>
    
    <h2>What You'll Learn</h2>
    <ul>
      <li>Fundamental data structures</li>
      <li>Common algorithm patterns</li>
      <li>Problem-solving strategies</li>
      <li>Complexity analysis</li>
    </ul>
    
    <h2>Course Modules</h2>
    <p>The course is divided into several modules, each building on the previous one.</p>
    
    <h3>Module 1: Foundations</h3>
    <p>Start with the basics of data structures and algorithms.</p>
    
    <h3>Module 2: Intermediate Topics</h3>
    <p>Build on your foundation with more complex concepts.</p>
    
    <h2>Getting Started</h2>
    <p>Follow the learning path that best suits your experience level.</p>
  `;

  const sampleCode = `function example() {
  console.log("Hello, World!");
  return true;
}`;

  return (
    <div>
      <ArticleContent
        title="Course Structure"
        content={sampleContent}
        readingTime={3}
      />
      <div className="mt-8">
        <CodeBlock
          code={sampleCode}
          language="javascript"
          title="Example Code"
        />
      </div>
    </div>
  );
}
