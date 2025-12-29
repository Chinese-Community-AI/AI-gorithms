import ArticleContent from "@/components/article/ArticleContent";

export default function Home() {
  const content = `
    <div style="max-width: 900px; margin: 0 auto; padding: 3rem 2rem;">
      <p style="font-size: 1.125rem; line-height: 1.7; color: rgb(55, 53, 47); margin-bottom: 1.5rem;">Welcome to <strong>AI-gorithms</strong> — a modern platform that combines structured curricula, interactive visualizations, and AI tutoring to help you master data structures and algorithms faster.</p>
      
      <p style="color: rgb(55, 53, 47); margin-bottom: 0.75rem;">This is the place to:</p>
      
      <ul style="margin-bottom: 2rem; padding-left: 1.5rem; color: rgb(55, 53, 47); line-height: 1.6;">
        <li style="margin-bottom: 0.5rem;">Follow guided learning paths tailored to your goals</li>
        <li style="margin-bottom: 0.5rem;">Watch algorithms animate step by step</li>
        <li style="margin-bottom: 0.5rem;">Practice with curated problem sets</li>
        <li>Ask questions and get AI-powered explanations instantly</li>
      </ul>
      
      <h2 style="font-size: 1.5rem; font-weight: 600; margin-top: 2.5rem; margin-bottom: 1.5rem; color: rgb(55, 53, 47);">Choose Your Learning Path</h2>
      
      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 1.5rem; margin-bottom: 2.5rem;">
        <div style="border: 1px solid rgba(55, 53, 47, 0.09); padding: 1.5rem; border-radius: 3px; background: rgba(55, 53, 47, 0.02);">
          <h3 style="font-size: 1.25rem; font-weight: 600; margin-top: 0; margin-bottom: 1rem; color: rgb(55, 53, 47);">1. Fast Track: 1-3 Months Interview Ready Path</h3>
          <ul style="margin: 0; padding-left: 1.5rem; color: rgb(55, 53, 47); line-height: 1.6;">
            <li style="margin-bottom: 0.5rem;"><strong>Goal:</strong> Become confident for technical interviews quickly</li>
            <li style="margin-bottom: 0.5rem;"><strong>Focus:</strong> High-yield topics (arrays, strings, trees, graphs, DP)</li>
            <li style="margin-bottom: 0.5rem;"><strong>Format:</strong> Daily lessons, cheat sheets, timed practice, mock interviews</li>
            <li><strong>AI Support:</strong> Instant hints, solution walk-throughs, mock interviewer</li>
          </ul>
        </div>
        
        <div style="border: 1px solid rgba(55, 53, 47, 0.09); padding: 1.5rem; border-radius: 3px; background: rgba(55, 53, 47, 0.02);">
          <h3 style="font-size: 1.25rem; font-weight: 600; margin-top: 0; margin-bottom: 1rem; color: rgb(55, 53, 47);">2. Mastery Track (Working in Progress)</h3>
          <ul style="margin: 0; padding-left: 1.5rem; color: rgb(55, 53, 47); line-height: 1.6;">
            <li style="margin-bottom: 0.5rem;"><strong>Goal:</strong> Build deep intuition and long-term fluency</li>
            <li style="margin-bottom: 0.5rem;"><strong>Focus:</strong> Fundamentals plus advanced topics (geometry, network flows, distributed algorithms)</li>
            <li style="margin-bottom: 0.5rem;"><strong>Format:</strong> Multi-stage roadmap with projects, reflections, and spaced repetition</li>
            <li><strong>AI Support:</strong> Personalized feedback, adaptive practice, code reviews</li>
          </ul>
        </div>
      </div>
      
      <h2 style="font-size: 1.5rem; font-weight: 600; margin-top: 2.5rem; margin-bottom: 1.5rem; color: rgb(55, 53, 47);">How the Platform Helps You Learn</h2>
      
      <ol style="margin-bottom: 2.5rem; padding-left: 1.5rem; color: rgb(55, 53, 47); line-height: 1.6;">
        <li style="margin-bottom: 0.75rem;"><strong>Learn</strong> – Read MDX lessons designed for clarity and incremental progression</li>
        <li style="margin-bottom: 0.75rem;"><strong>Visualize</strong> – Explore interactive diagrams and algorithm animations</li>
        <li style="margin-bottom: 0.75rem;"><strong>Practice</strong> – Solve guided problems with auto-graded solutions</li>
        <li><strong>Reflect</strong> – Use AI to review your code, explain concepts, or generate new drills</li>
      </ol>
      
      <h2 style="font-size: 1.5rem; font-weight: 600; margin-top: 2.5rem; margin-bottom: 1.5rem; color: rgb(55, 53, 47);">AI-Powered Assistance</h2>
      
      <div style="background: rgba(46, 170, 220, 0.08); border-left: 3px solid rgba(46, 170, 220, 0.3); padding: 1rem 1.25rem; margin-bottom: 2.5rem; border-radius: 3px;">
        <ul style="margin: 0; padding-left: 1.5rem; color: rgb(55, 53, 47); line-height: 1.6;">
          <li style="margin-bottom: 0.5rem;"><strong>Ask Anything:</strong> Highlight text or click "Ask AI" to clarify concepts</li>
          <li style="margin-bottom: 0.5rem;"><strong>Explain Code:</strong> Let AI break down any snippet line by line</li>
          <li style="margin-bottom: 0.5rem;"><strong>Generate Problems:</strong> Get personalized drills at your level</li>
          <li><strong>Review Solutions:</strong> Receive feedback on complexity, readability, and edge cases</li>
        </ul>
      </div>
      
      <h2 style="font-size: 1.5rem; font-weight: 600; margin-top: 2.5rem; margin-bottom: 1.5rem; color: rgb(55, 53, 47);">What's Included</h2>
      
      <ul style="margin-bottom: 2.5rem; padding-left: 1.5rem; color: rgb(55, 53, 47); line-height: 1.6;">
        <li style="margin-bottom: 0.5rem;">Structured learning paths (beginner → advanced)</li>
        <li style="margin-bottom: 0.5rem;">Interactive visualizations for key algorithms</li>
        <li style="margin-bottom: 0.5rem;">Embedded code playgrounds with instant feedback</li>
        <li style="margin-bottom: 0.5rem;">Reading progress, bookmarks, and spaced repetition reminders</li>
        <li>Strategy guides, interview playbooks, and note templates</li>
      </ul>
      
      <h2 style="font-size: 1.5rem; font-weight: 600; margin-top: 2.5rem; margin-bottom: 1.5rem; color: rgb(55, 53, 47);">Ready to Start?</h2>
      
      <ol style="margin-bottom: 2rem; padding-left: 1.5rem; color: rgb(55, 53, 47); line-height: 1.6;">
        <li style="margin-bottom: 0.75rem;">Pick the learning path that fits your timeline</li>
        <li style="margin-bottom: 0.75rem;">Follow the roadmap and track your progress</li>
        <li style="margin-bottom: 0.75rem;">Use the AI tutor whenever you're stuck or curious</li>
        <li>Iterate, revisit, and keep sharpening your skills</li>
      </ol>
      
      <div style="background: rgba(251, 243, 219, 0.6); border-left: 3px solid rgba(233, 196, 106, 0.4); padding: 1rem 1.25rem; margin-top: 2rem; border-radius: 3px;">
        <p style="margin: 0; color: rgb(55, 53, 47); line-height: 1.6;"><em>Keep learning, keep shipping, and let AI accelerate your algorithm journey.</em></p>
      </div>
    </div>
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
