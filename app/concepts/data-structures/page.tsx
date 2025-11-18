import ArticleContent from "@/components/article/ArticleContent";

export default function DataStructuresPage() {
  const content = `
    <h2>Data Structures Basics</h2>
    <p>Learn the fundamental data structures used in computer science.</p>
    
    <h2>What are Data Structures?</h2>
    <p>Data structures are ways of organizing and storing data in a computer.</p>
  `;

  return (
    <ArticleContent
      title="Data Structures Basics"
      content={content}
      readingTime={3}
    />
  );
}
