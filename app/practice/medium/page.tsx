import ArticleContent from "@/components/article/ArticleContent";

export default function MediumProblemsPage() {
  const content = `
    <h2>Medium Problems</h2>
    <p>Challenge yourself with intermediate-level problems.</p>
    
    <h2>Problem List</h2>
    <p>Problems will be listed here as you add content.</p>
  `;

  return (
    <ArticleContent title="Medium Problems" content={content} readingTime={2} />
  );
}
