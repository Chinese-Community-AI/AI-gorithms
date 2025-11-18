import ArticleContent from "@/components/article/ArticleContent";
import CodeBlock from "@/components/article/CodeBlock";

export default function CourseStructurePage() {
  const sampleContent = `
    <h2>Course Structure Overview</h2>
    <p>This course is designed to take you from beginner to advanced in data structures and algorithms.</p>
    
    <h3>What You'll Learn</h3>
    <ul>
      <li>Fundamental data structures</li>
      <li>Common algorithm patterns</li>
      <li>Problem-solving strategies</li>
      <li>Complexity analysis</li>
    </ul>
    
    <h3>Course Modules</h3>
    <p>The course is divided into several modules, each building on the previous one.</p>
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
