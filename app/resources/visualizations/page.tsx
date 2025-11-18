import ArticleContent from "@/components/article/ArticleContent";

export default function VisualizationsPage() {
  const content = `
    <h2>Visualizations</h2>
    <p>Interactive visualizations to help you understand algorithms.</p>
    
    <h2>Available Visualizations</h2>
    <p>Algorithm visualizations will be available here.</p>
  `;

  return (
    <ArticleContent title="Visualizations" content={content} readingTime={2} />
  );
}
