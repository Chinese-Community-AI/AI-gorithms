import ArticleContent from "@/components/article/ArticleContent";

export default function CodeExamplesPage() {
  const content = `
    <h2>Code Examples</h2>
    <p>Browse through well-documented code examples.</p>
    
    <h2>Examples by Topic</h2>
    <p>Code examples will be organized by topic here.</p>
  `;

  return (
    <ArticleContent title="Code Examples" content={content} readingTime={2} />
  );
}
