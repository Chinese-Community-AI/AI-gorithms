import ArticleContent from "@/components/article/ArticleContent";

export default function ResourcesPage() {
  const content = `
    <h2>Resources</h2>
    <p>Additional resources to help you on your learning journey.</p>
    
    <h2>Code Examples</h2>
    <p>Browse through our collection of well-documented code examples covering various algorithms and data structures.</p>
    
    <h2>Visualizations</h2>
    <p>Interactive visualizations help you understand how algorithms work step by step.</p>
    
    <h2>Reference Materials</h2>
    <p>Quick reference guides, cheat sheets, and documentation for quick lookups.</p>
  `;

  return <ArticleContent title="Resources" content={content}  />;
}
