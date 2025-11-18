import ArticleContent from "@/components/article/ArticleContent";

export default function ReferencePage() {
  const content = `
    <h2>Reference Materials</h2>
    <p>Quick reference guides and cheat sheets.</p>
    
    <h2>Reference Documents</h2>
    <p>Reference materials will be available here.</p>
  `;

  return (
    <ArticleContent
      title="Reference Materials"
      content={content}
      readingTime={2}
    />
  );
}
