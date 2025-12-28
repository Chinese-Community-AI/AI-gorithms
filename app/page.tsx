import ArticleContent from "@/components/article/ArticleContent";

export default function Home() {
  // Converted from home.mdx to HTML - keeping MDX files for later MDX integration
  const content = `
    <p>Welcome to <strong>AI-gorithms</strong> — a modern platform that combines structured curricula, interactive visualizations, and AI tutoring to help you master data structures and algorithms faster.</p>
    
    <p>This is the place to:</p>
    
    <ul>
      <li>Follow guided learning paths tailored to your goals</li>
      <li>Watch algorithms animate step by step</li>
      <li>Practice with curated problem sets</li>
      <li>Ask questions and get AI-powered explanations instantly</li>
    </ul>
    
    <hr>
    
    <h2>Choose Your Learning Path</h2>
    
    <h3>1. Fast Track:One-Month Interview Ready Path</h3>
    
    <ul>
      <li><strong>Goal:</strong> Become confident for technical interviews quickly</li>
      <li><strong>Focus:</strong> High-yield topics (arrays, strings, trees, graphs, DP)</li>
      <li><strong>Format:</strong> Daily lessons, cheat sheets, timed practice, mock interviews</li>
      <li><strong>AI Support:</strong> Instant hints, solution walk-throughs, mock interviewer</li>
    </ul>
    
    <h3>2. Mastery Track (Working in Progress)</h3>
    
    <ul>
      <li><strong>Goal:</strong> Build deep intuition and long-term fluency</li>
      <li><strong>Focus:</strong> Fundamentals plus advanced topics (geometry, network flows, distributed algorithms)</li>
      <li><strong>Format:</strong> Multi-stage roadmap with projects, reflections, and spaced repetition</li>
      <li><strong>AI Support:</strong> Personalized feedback, adaptive practice, code reviews</li>
    </ul>
    
    <hr>
    
    <h2>How the Platform Helps You Learn</h2>
    
    <ol>
      <li><strong>Learn</strong> – Read MDX lessons designed for clarity and incremental progression</li>
      <li><strong>Visualize</strong> – Explore interactive diagrams and algorithm animations</li>
      <li><strong>Practice</strong> – Solve guided problems with auto-graded solutions</li>
      <li><strong>Reflect</strong> – Use AI to review your code, explain concepts, or generate new drills</li>
    </ol>
    
    <hr>
    
    <h2>AI-Powered Assistance</h2>
    
    <ul>
      <li><strong>Ask Anything:</strong> Highlight text or click "Ask AI" to clarify concepts</li>
      <li><strong>Explain Code:</strong> Let AI break down any snippet line by line</li>
      <li><strong>Generate Problems:</strong> Get personalized drills at your level</li>
      <li><strong>Review Solutions:</strong> Receive feedback on complexity, readability, and edge cases</li>
    </ul>
    
    <hr>
    
    <h2>What's Included</h2>
    
    <ul>
      <li>Structured learning paths (beginner → advanced)</li>
      <li>Interactive visualizations for key algorithms</li>
      <li>Embedded code playgrounds with instant feedback</li>
      <li>Reading progress, bookmarks, and spaced repetition reminders</li>
      <li>Strategy guides, interview playbooks, and note templates</li>
    </ul>
    
    <hr>
    
    <h2>Ready to Start?</h2>
    
    <ol>
      <li>Pick the learning path that fits your timeline</li>
      <li>Follow the roadmap and track your progress</li>
      <li>Use the AI tutor whenever you're stuck or curious</li>
      <li>Iterate, revisit, and keep sharpening your skills</li>
    </ol>
    
    <p><em>Keep learning, keep shipping, and let AI accelerate your algorithm journey.</em></p>
  `;

  return (
    <ArticleContent
      title="AI Native Algorithm Learning"
      content={content}
      readingTime={6}
      showTOC={false}
    />
  );
}
