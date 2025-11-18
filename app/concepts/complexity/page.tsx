import ArticleContent from "@/components/article/ArticleContent";

export default function ComplexityPage() {
  const content = `
    <h2>Complexity Analysis</h2>
    <p>Learn how to analyze the efficiency of algorithms.</p>
    
    <h2>Time Complexity</h2>
    <p>Measures how long an algorithm takes to run.</p>
    
    <h2>Space Complexity</h2>
    <p>Measures how much memory an algorithm uses.</p>
  `;

  return (
    <ArticleContent
      title="Complexity Analysis"
      content={content}
      readingTime={4}
    />
  );
}
