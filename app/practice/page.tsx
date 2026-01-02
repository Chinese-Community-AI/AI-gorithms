import ArticleContent from "@/components/article/ArticleContent";

export default function PracticePage() {
  const content = `
    <h2>Practice Problems</h2>
    <p>Practice makes perfect! Work through problems of varying difficulty levels.</p>
    
    <h2>Problem Categories</h2>
    <ul>
      <li><strong>Easy Problems:</strong> Perfect for beginners to build confidence</li>
      <li><strong>Medium Problems:</strong> Challenge yourself with intermediate concepts</li>
      <li><strong>Hard Problems:</strong> Master advanced algorithms and techniques</li>
    </ul>
    
    <h2>How to Practice</h2>
    <p>Start with easy problems and gradually work your way up. Each problem includes detailed explanations and solutions.</p>
  `;

  return (
    <ArticleContent
      title="Practice Problems"
      content={content}
      
    />
  );
}
