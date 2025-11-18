import ArticleContent from "@/components/article/ArticleContent";

export default function HardProblemsPage() {
  const content = `
    <h2>Hard Problems</h2>
    <p>Master advanced algorithms with challenging problems.</p>
    
    <h2>Problem List</h2>
    <p>Problems will be listed here as you add content.</p>
  `;

  return (
    <ArticleContent title="Hard Problems" content={content} readingTime={2} />
  );
}
