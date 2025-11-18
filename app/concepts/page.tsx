import ArticleContent from "@/components/article/ArticleContent";

export default function ConceptsPage() {
  const content = `
    <h2>Core Concepts</h2>
    <p>Understanding the fundamental concepts is crucial for mastering algorithms and data structures.</p>
    
    <h2>Data Structures Basics</h2>
    <p>Learn about arrays, linked lists, stacks, queues, trees, and graphs.</p>
    
    <h2>Algorithm Fundamentals</h2>
    <p>Explore sorting, searching, recursion, and dynamic programming techniques.</p>
    
    <h2>Complexity Analysis</h2>
    <p>Understand time and space complexity to write efficient code.</p>
  `;

  return (
    <ArticleContent title="Core Concepts" content={content} readingTime={4} />
  );
}
