import ArticleContent from "@/components/article/ArticleContent";

export default function EasyProblemsPage() {
  const content = `
    <h2>Easy Problems</h2>
    <p>Start here with beginner-friendly problems to build your confidence.</p>
    
    <h2>Problem List</h2>
    <p>Problems will be listed here as you add content.</p>
  `;

  return (
    <ArticleContent title="Easy Problems" content={content} readingTime={2} />
  );
}
