import ArticleContent from "@/components/article/ArticleContent";

export default function AlgorithmsPage() {
  const content = `
    <h2>Algorithm Fundamentals</h2>
    <p>Understanding algorithms is key to writing efficient code.</p>
    
    <h2>What are Algorithms?</h2>
    <p>Algorithms are step-by-step procedures for solving problems.</p>
  `;

  return (
    <ArticleContent
      title="Algorithm Fundamentals"
      content={content}
      readingTime={3}
    />
  );
}
