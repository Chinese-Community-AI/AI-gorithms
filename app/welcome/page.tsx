import ArticleContent from "@/components/article/ArticleContent";

export default function WelcomePage() {
  const content = `
    <h2>Welcome to AI-gorithms</h2>
    <p>Your comprehensive platform for learning data structures and algorithms with AI-powered assistance.</p>
    
    <h2>What You'll Learn</h2>
    <p>Master the fundamentals and advanced concepts of computer science through interactive learning.</p>
    
    <h2>Getting Started</h2>
    <p>Choose a learning path that fits your experience level and start your journey today.</p>
  `;

  return <ArticleContent title="Welcome" content={content} readingTime={2} />;
}
