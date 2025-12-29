import ArticleContent from "@/components/article/ArticleContent";

export default function FastTrackPage() {
  const content = `
    <div style="max-width: 4xl; margin: 0 auto; padding: 2rem 1rem;">
      <div style="background: #e0f2fe; border-left: 4px solid #0284c7; padding: 1rem; margin-bottom: 2rem; border-radius: 4px;">
        <h3 style="margin-top: 0; color: #0369a1;">Overview</h3>
        <p style="margin-bottom: 0.5rem;"><strong>Goal:</strong> Master core algorithm patterns and solve medium-level problems independently in the shortest time possible.</p>
        <p style="margin-bottom: 0;"><strong>Total estimated time:</strong> 4-6 weeks (1-2 hours/day)</p>
      </div>

      <h2>Who is this for?</h2>
      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 1rem; margin-bottom: 2rem;">
        <div style="border: 1px solid #e5e7eb; padding: 1.5rem; border-radius: 8px; background: #f9fafb;">
          <div style="font-size: 2rem; margin-bottom: 0.5rem;">⏰</div>
          <strong>Limited Time</strong>
          <p style="margin-top: 0.5rem; color: #6b7280; font-size: 0.9rem;">Need to prep for interviews quickly</p>
        </div>
        <div style="border: 1px solid #e5e7eb; padding: 1.5rem; border-radius: 8px; background: #f9fafb;">
          <div style="font-size: 2rem; margin-bottom: 0.5rem;">🎯</div>
          <strong>High-Impact Focus</strong>
          <p style="margin-top: 0.5rem; color: #6b7280; font-size: 0.9rem;">Want to learn most important topics first</p>
        </div>
        <div style="border: 1px solid #e5e7eb; padding: 1.5rem; border-radius: 8px; background: #f9fafb;">
          <div style="font-size: 2rem; margin-bottom: 0.5rem;">📚</div>
          <strong>Structured Learning</strong>
          <p style="margin-top: 0.5rem; color: #6b7280; font-size: 0.9rem;">Prefer template-based approach</p>
        </div>
      </div>

      <h2>Learning Principles</h2>
      <div style="background: #dcfce7; border-left: 4px solid #16a34a; padding: 1rem; margin-bottom: 1rem; border-radius: 4px;">
        <h3 style="margin-top: 0; color: #15803d;">Three Core Principles</h3>
        <ol style="margin-bottom: 0;">
          <li><strong>Template-First Approach</strong> — Learn unified frameworks, not isolated problems</li>
          <li><strong>Progressive Difficulty</strong> — Build foundations before advanced topics</li>
          <li><strong>Practice After Learning</strong> — Understand concepts first, then solve problems</li>
        </ol>
      </div>
      <div style="background: #fef3c7; border-left: 4px solid #f59e0b; padding: 1rem; margin-bottom: 2rem; border-radius: 4px;">
        <p style="margin: 0;"><strong>Important:</strong> Don't skip framework articles to jump straight to problems. Solid foundations save time in the long run.</p>
      </div>

      <h2>Part 1: Data Structures Fundamentals</h2>
      <p><em>Week 1-2</em></p>

      <h3>Arrays & Linked Lists</h3>
      <p><span style="background: #dbeafe; color: #1e40af; padding: 0.25rem 0.5rem; border-radius: 4px; font-size: 0.875rem; font-weight: 600;">Beginner</span> <em>2 days</em></p>
      <ul>
        <li>Array basics and circular array technique</li>
        <li>Linked list principles</li>
        <li>Two-pointer technique</li>
        <li>Sequential vs linked storage</li>
        <li>O(1) insertion/deletion with circular arrays</li>
      </ul>

      <h3>Hash Tables</h3>
      <p><span style="background: #dbeafe; color: #1e40af; padding: 0.25rem 0.5rem; border-radius: 4px; font-size: 0.875rem; font-weight: 600;">Beginner</span> <em>1-2 days</em></p>
      <p><strong>Core Concepts:</strong></p>
      <ul>
        <li>Hash table principles</li>
        <li>LinkedHashMap and ArrayHashMap patterns</li>
      </ul>
      <p><em>Skip: Detailed collision resolution implementations</em></p>

      <h3>Binary Trees ⭐</h3>
      <p><span style="background: #fee2e2; color: #991b1b; padding: 0.25rem 0.5rem; border-radius: 4px; font-size: 0.875rem; font-weight: 600;">Critical Foundation</span> <em>2-3 days</em></p>
      <div style="background: #fef3c7; border-left: 4px solid #f59e0b; padding: 1rem; margin: 1rem 0; border-radius: 4px;">
        <p style="margin: 0;"><strong>Why This Is Critical:</strong> All recursive algorithms are essentially tree traversal. Master this and you'll understand DFS/Backtracking, Dynamic Programming, and Divide & Conquer.</p>
      </div>
      <p><strong>Core Concepts:</strong></p>
      <ul>
        <li>Tree traversal (recursive & level-order)</li>
        <li>N-ary trees</li>
        <li>DFS vs BFS decision framework</li>
      </ul>

      <h3>Binary Search Trees</h3>
      <p><span style="background: #dbeafe; color: #1e40af; padding: 0.25rem 0.5rem; border-radius: 4px; font-size: 0.875rem; font-weight: 600;">Beginner</span> <em>1 day</em></p>
      <p><strong>Core Concepts:</strong></p>
      <ul>
        <li>"Left smaller, right larger" property</li>
        <li>Basic operations and construction</li>
      </ul>

      <h3>Binary Heap</h3>
      <p><span style="background: #dbeafe; color: #1e40af; padding: 0.25rem 0.5rem; border-radius: 4px; font-size: 0.875rem; font-weight: 600;">Beginner</span> <em>0.5 days</em></p>
      <p><strong>Core Concepts:</strong></p>
      <ul>
        <li>Priority queues (auto-sorting with O(log N))</li>
        <li>Heap structure and swim/sink operations</li>
      </ul>
      <p><em>Skip: Implementation details</em></p>

      <h3>Graphs</h3>
      <p><span style="background: #dbeafe; color: #1e40af; padding: 0.25rem 0.5rem; border-radius: 4px; font-size: 0.875rem; font-weight: 600;">Beginner</span> <em>1 day</em></p>
      <p><strong>Core Concepts:</strong></p>
      <ul>
        <li>Graph representation</li>
        <li>DFS/BFS traversal templates</li>
      </ul>

      <h2>Part 2: Algorithm Patterns</h2>
      <p><em>Week 2-5</em></p>

      <h3>🎯 Start Here: Core Framework</h3>
      <p><span style="background: #fee2e2; color: #991b1b; padding: 0.25rem 0.5rem; border-radius: 4px; font-size: 0.875rem; font-weight: 600;">Must Read</span> <em>0.5 days</em></p>
      <div style="background: #dcfce7; border-left: 4px solid #16a34a; padding: 1rem; margin: 1rem 0; border-radius: 4px;">
        <p style="margin: 0;"><strong>Framework Thinking for Learning Data Structures and Algorithms</strong></p>
        <p style="margin: 0.5rem 0 0 0;">This article summarizes all data structures, reveals the essence of all algorithms, and should be revisited as you progress.</p>
      </div>

      <h3>Linked Lists</h3>
      <p><span style="background: #fef3c7; color: #92400e; padding: 0.25rem 0.5rem; border-radius: 4px; font-size: 0.875rem; font-weight: 600;">Intermediate</span> <em>2 days</em></p>
      <ul>
        <li>Two-pointer technique framework (1 day)</li>
        <li>Classic problems practice (1 day)</li>
        <li>Optional: Recursive operations (1 day)</li>
      </ul>

      <h3>Arrays</h3>
      <p><span style="background: #fef3c7; color: #92400e; padding: 0.25rem 0.5rem; border-radius: 4px; font-size: 0.875rem; font-weight: 600;">Intermediate</span> <em>3-5 days</em></p>
      <p><strong>Key Techniques:</strong></p>
      <ul>
        <li>Two-pointer variants (fast/slow, left/right)</li>
        <li>Binary search</li>
        <li>Sliding window</li>
      </ul>
      <p><strong>Topics:</strong></p>
      <ul>
        <li>Two-pointer fundamentals (0.5 days)</li>
        <li>2D array traversal techniques (1-2 days)</li>
        <li>Sliding window template (2 days)</li>
        <li>Binary search templates (1-2 days)</li>
        <li>Prefix sum & difference arrays (1-2 days)</li>
      </ul>

      <h3>Stack & Queue</h3>
      <p><span style="background: #fef3c7; color: #92400e; padding: 0.25rem 0.5rem; border-radius: 4px; font-size: 0.875rem; font-weight: 600;">Intermediate</span> <em>2-4 days</em></p>
      <ul>
        <li>Basic implementations (0.5 days)</li>
        <li>Classic problems (1-2 days)</li>
        <li>Monotonic stack/queue (2-3 days)</li>
      </ul>

      <h3>Binary Trees Deep Dive ⭐⭐</h3>
      <p><span style="background: #fee2e2; color: #991b1b; padding: 0.25rem 0.5rem; border-radius: 4px; font-size: 0.875rem; font-weight: 600;">Critical Section</span> <em>5-7 days</em></p>
      <div style="background: #fee2e2; border-left: 4px solid #dc2626; padding: 1rem; margin: 1rem 0; border-radius: 4px;">
        <p style="margin: 0;"><strong>Most Important For Interview Success</strong> — This is the most crucial section. Spend extra time here if needed.</p>
      </div>
      <p><strong>Core Framework (3-4 days):</strong></p>
      <ul>
        <li>Recursive thinking: "traversal" vs "decomposition" (0.5 days)</li>
        <li>Pre/in/post-order positions in real problems (1 day)</li>
        <li>Binary tree insights: thinking, construction, serialization (2-3 days)</li>
      </ul>
      <p><strong>Practice (2 days):</strong></p>
      <ul>
        <li>"Traversal" thinking problems</li>
        <li>"Decomposition" thinking problems</li>
        <li>Level-order traversal problems</li>
      </ul>
      <p><em>Optional Extensions:</em> Lowest common ancestor series, Complete binary tree node counting</p>

      <h3>BST Operations</h3>
      <p><span style="background: #fef3c7; color: #92400e; padding: 0.25rem 0.5rem; border-radius: 4px; font-size: 0.875rem; font-weight: 600;">Intermediate</span> <em>2-3 days</em></p>
      <ul>
        <li>BST properties and operations (1-2 days)</li>
        <li>BST construction (1 day)</li>
      </ul>

      <h3>Data Structure Design</h3>
      <p><span style="background: #fef3c7; color: #92400e; padding: 0.25rem 0.5rem; border-radius: 4px; font-size: 0.875rem; font-weight: 600;">Intermediate</span> <em>2-3 days</em></p>
      <p><strong>Must Know:</strong> LRU Cache (1 day)</p>
      <p><strong>Optional:</strong> LFU Cache, Calculator implementation (1 day), Additional design problems (1 day)</p>

      <h3>Graph Algorithms</h3>
      <p><span style="background: #fef3c7; color: #92400e; padding: 0.25rem 0.5rem; border-radius: 4px; font-size: 0.875rem; font-weight: 600;">Intermediate</span> <em>3-4 days</em></p>
      <p><strong>Essential Topics:</strong></p>
      <ul>
        <li>Cycle detection & topological sort (1-2 days)</li>
        <li>Bipartite graph check</li>
        <li>Union-Find algorithm (1 day)</li>
        <li>Minimum spanning tree — Kruskal (1 day)</li>
        <li>Dijkstra's shortest path (1 day)</li>
      </ul>
      <p><em>Pro Tip: Save templates for quick reuse in coding contests</em></p>

      <h3>DFS/Backtracking ⭐</h3>
      <p><span style="background: #fce7f3; color: #9f1239; padding: 0.25rem 0.5rem; border-radius: 4px; font-size: 0.875rem; font-weight: 600;">Advanced</span> <em>5-7 days</em></p>
      <div style="background: #e0f2fe; border-left: 4px solid #0284c7; padding: 1rem; margin: 1rem 0; border-radius: 4px;">
        <p style="margin: 0;"><strong>Why Important:</strong> Brute-force fallback when optimal solution is unclear. Can help you score partial points in contests.</p>
      </div>
      <p><strong>Core Patterns (3-4 days):</strong></p>
      <ul>
        <li>Backtracking framework (1-2 days)</li>
        <li>Sudoku & N-Queens</li>
        <li>Permutations/combinations/subsets (1-2 days)</li>
        <li>Island problems & DFS differences (1 day)</li>
      </ul>

      <h3>BFS Algorithm</h3>
      <p><span style="background: #fef3c7; color: #92400e; padding: 0.25rem 0.5rem; border-radius: 4px; font-size: 0.875rem; font-weight: 600;">Intermediate</span> <em>3 days</em></p>
      <div style="background: #e0f2fe; border-left: 4px solid #0284c7; padding: 1rem; margin: 1rem 0; border-radius: 4px;">
        <p style="margin: 0;"><strong>Key Insight:</strong> Similar to tree level-order traversal; excellent for shortest path problems</p>
      </div>
      <p><strong>Framework (1 day):</strong> BFS problem-solving template</p>
      <p><strong>Practice (2 days):</strong> Priority problems include Complete Binary Tree Inserter, Keys and Rooms, Minimum Genetic Mutation, Shortest Path in Binary Matrix, Rotting Oranges, Word Ladder, and more.</p>

      <h3>Dynamic Programming ⭐</h3>
      <p><span style="background: #fce7f3; color: #9f1239; padding: 0.25rem 0.5rem; border-radius: 4px; font-size: 0.875rem; font-weight: 600;">Advanced</span> <em>6-8 days</em></p>
      <div style="background: #e0f2fe; border-left: 4px solid #0284c7; padding: 1rem; margin: 1rem 0; border-radius: 4px;">
        <p style="margin: 0;"><strong>Key Insight:</strong> Optimized brute-force with memoization for overlapping subproblems</p>
      </div>
      <p><strong>Core Framework (2-3 days):</strong></p>
      <ul>
        <li>DP problem-solving framework (1-2 days)</li>
        <li>Longest increasing subsequence</li>
        <li>Base case & memo initialization (1-2 days)</li>
        <li>Optimal substructure & traversal direction</li>
      </ul>
      <p><strong>Practice (4-5 days):</strong></p>
      <ul>
        <li>Edit distance (1-2 days)</li>
        <li>Maximum subarray</li>
        <li>Longest common subsequence</li>
        <li>Knapsack problems: 0-1, subset, complete (1-2 days)</li>
      </ul>

      <h3>Greedy Algorithm</h3>
      <p><span style="background: #fef3c7; color: #92400e; padding: 0.25rem 0.5rem; border-radius: 4px; font-size: 0.875rem; font-weight: 600;">Intermediate</span> <em>1 day</em></p>
      <div style="background: #fef3c7; border-left: 4px solid #f59e0b; padding: 1rem; margin: 1rem 0; border-radius: 4px;">
        <p style="margin: 0;"><strong>Key Insight:</strong> Use problem properties to avoid brute-force. <em>Note: No fixed template; requires problem-specific observation</em></p>
      </div>

      <h3>Divide & Conquer</h3>
      <p><span style="background: #fef3c7; color: #92400e; padding: 0.25rem 0.5rem; border-radius: 4px; font-size: 0.875rem; font-weight: 600;">Intermediate</span> <em>1 day</em></p>
      <p><strong>Pattern:</strong> Break down → solve subproblems → combine results</p>

      <h3>Math & Tricks</h3>
      <p><span style="background: #fef3c7; color: #92400e; padding: 0.25rem 0.5rem; border-radius: 4px; font-size: 0.875rem; font-weight: 600;">Intermediate</span> <em>2-3 days</em></p>
      <ul>
        <li>One-line solutions & randomization (1-2 days)</li>
        <li>Prime numbers & math techniques (1 day)</li>
      </ul>

      <h3>Classic Problems</h3>
      <p><span style="background: #fce7f3; color: #9f1239; padding: 0.25rem 0.5rem; border-radius: 4px; font-size: 0.875rem; font-weight: 600;">Advanced</span> <em>2-4 days</em></p>
      <p><strong>High-Value Problems:</strong></p>
      <ul>
        <li>Meeting rooms (scanline technique) (1-2 days)</li>
        <li>Trapping rain water</li>
        <li>Ugly number series</li>
        <li>Weighted random selection (1-2 days)</li>
        <li>nSum problems & template</li>
      </ul>

      <h3>Sorting Algorithms</h3>
      <p><span style="background: #dbeafe; color: #1e40af; padding: 0.25rem 0.5rem; border-radius: 4px; font-size: 0.875rem; font-weight: 600;">Beginner</span> <em>1 day</em></p>
      <div style="background: #f3f4f6; border-left: 4px solid #6b7280; padding: 1rem; margin: 1rem 0; border-radius: 4px;">
        <p style="margin: 0;"><strong>Interview Focus:</strong> Principles, complexity, use cases (not implementation)</p>
        <p style="margin: 0.5rem 0 0 0;"><em>Recommendation: Watch video overview of 10 classic sorting algorithms</em></p>
      </div>

      <h2>Study Tips</h2>
      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 1rem; margin-bottom: 2rem;">
        <div style="border: 1px solid #e5e7eb; padding: 1.5rem; border-radius: 8px; background: #f9fafb;">
          <div style="font-size: 2rem; margin-bottom: 0.5rem;">⏱️</div>
          <strong>Time Management</strong>
          <ul style="margin-top: 0.5rem; padding-left: 1.5rem; font-size: 0.9rem; color: #6b7280;">
            <li>Estimates assume 1-2 hours/day</li>
            <li>Longer study sessions = faster progress</li>
            <li>Don't get stuck on single problems — move forward and review later</li>
          </ul>
        </div>
        <div style="border: 1px solid #e5e7eb; padding: 1.5rem; border-radius: 8px; background: #f9fafb;">
          <div style="font-size: 2rem; margin-bottom: 0.5rem;">📋</div>
          <strong>Problem Lists</strong>
          <p style="margin-top: 0.5rem; font-size: 0.9rem; color: #6b7280;"><strong>Use Them For:</strong></p>
          <ul style="margin-top: 0.5rem; padding-left: 1.5rem; font-size: 0.9rem; color: #6b7280;">
            <li>Understanding company-specific patterns</li>
            <li>Review after mastering templates</li>
          </ul>
          <p style="margin-top: 0.5rem; font-size: 0.9rem; color: #6b7280;"><strong>Don't:</strong> Skip templates to only practice company lists</p>
        </div>
        <div style="border: 1px solid #e5e7eb; padding: 1.5rem; border-radius: 8px; background: #f9fafb;">
          <div style="font-size: 2rem; margin-bottom: 0.5rem;">🤔</div>
          <strong>When Stuck</strong>
          <ol style="margin-top: 0.5rem; padding-left: 1.5rem; font-size: 0.9rem; color: #6b7280;">
            <li>Read framework articles first</li>
            <li>Understand the template</li>
            <li>Apply to problems</li>
            <li>Review and strengthen understanding</li>
          </ol>
        </div>
        <div style="border: 1px solid #e5e7eb; padding: 1.5rem; border-radius: 8px; background: #f9fafb;">
          <div style="font-size: 2rem; margin-bottom: 0.5rem;">📊</div>
          <strong>Progress Tracking</strong>
          <p style="margin-top: 0.5rem; font-size: 0.9rem; color: #6b7280;">Use the visual roadmap to:</p>
          <ul style="margin-top: 0.5rem; padding-left: 1.5rem; font-size: 0.9rem; color: #6b7280;">
            <li>Track completed topics</li>
            <li>Navigate between concepts</li>
            <li>Plan your study path</li>
          </ul>
        </div>
      </div>

      <h2>Success Metrics</h2>
      <div style="background: #dcfce7; border-left: 4px solid #16a34a; padding: 1rem; margin-bottom: 2rem; border-radius: 4px;">
        <h3 style="margin-top: 0; color: #15803d;">After Completing This Plan</h3>
        <ul style="margin-bottom: 0;">
          <li>✓ Recognize which algorithm pattern applies to new problems</li>
          <li>✓ Solve medium-level LeetCode problems independently</li>
          <li>✓ Apply templates to variations of learned patterns</li>
          <li>✓ Write clean, structured solutions consistently</li>
        </ul>
        <p style="margin-top: 1rem; margin-bottom: 0;"><strong>Next Steps:</strong> Return to advanced topics or company-specific problem lists as needed.</p>
      </div>

      <div style="background: #fef3c7; border-left: 4px solid #f59e0b; padding: 1rem; margin-top: 2rem; border-radius: 4px;">
        <p style="margin: 0;"><strong>Remember:</strong> <em>Quality over quantity.</em> Deep understanding of templates > memorizing many problems.</p>
      </div>
    </div>
  `;

  return (
    <ArticleContent
      title="Quick Mastery Learning Plan: Data Structures & Algorithms"
      content={content}
      readingTime={15}
    />
  );
}
