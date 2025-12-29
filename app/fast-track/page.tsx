import ArticleContent from "@/components/article/ArticleContent";

export default function FastTrackPage() {
  const content = `
    <div style="max-width: 900px; margin: 0 auto; padding: 3rem 2rem;">
      <div style="background: rgba(46, 170, 220, 0.08); border-left: 3px solid rgba(46, 170, 220, 0.3); padding: 1.25rem; margin-bottom: 2.5rem; border-radius: 3px;">
        <h3 style="margin-top: 0; margin-bottom: 0.75rem; font-size: 1.1rem; font-weight: 600; color: rgb(55, 53, 47);">Overview</h3>
        <p style="margin-bottom: 0.5rem; color: rgb(55, 53, 47); line-height: 1.6;"><strong>Goal:</strong> Master core algorithm patterns and solve medium-level problems independently in the shortest time possible.</p>
        <p style="margin-bottom: 0; color: rgb(55, 53, 47); line-height: 1.6;"><strong>Total estimated time:</strong> 4-6 weeks (1-2 hours/day)</p>
      </div>

      <h2 style="font-size: 1.5rem; font-weight: 600; margin-top: 2.5rem; margin-bottom: 1.5rem; color: rgb(55, 53, 47);">Who is this for?</h2>
      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); gap: 1rem; margin-bottom: 2.5rem;">
        <div style="border: 1px solid rgba(55, 53, 47, 0.09); padding: 1.25rem; border-radius: 6px; background: white; box-shadow: rgba(15, 15, 15, 0.03) 0px 0px 0px 1px;">
          <div style="font-size: 1.75rem; margin-bottom: 0.5rem;">⏰</div>
          <strong style="color: rgb(55, 53, 47); font-weight: 600;">Limited Time</strong>
          <p style="margin-top: 0.5rem; margin-bottom: 0; color: rgba(55, 53, 47, 0.65); font-size: 0.875rem; line-height: 1.5;">Need to prep for interviews quickly</p>
        </div>
        <div style="border: 1px solid rgba(55, 53, 47, 0.09); padding: 1.25rem; border-radius: 6px; background: white; box-shadow: rgba(15, 15, 15, 0.03) 0px 0px 0px 1px;">
          <div style="font-size: 1.75rem; margin-bottom: 0.5rem;">🎯</div>
          <strong style="color: rgb(55, 53, 47); font-weight: 600;">High-Impact Focus</strong>
          <p style="margin-top: 0.5rem; margin-bottom: 0; color: rgba(55, 53, 47, 0.65); font-size: 0.875rem; line-height: 1.5;">Want to learn most important topics first</p>
        </div>
        <div style="border: 1px solid rgba(55, 53, 47, 0.09); padding: 1.25rem; border-radius: 6px; background: white; box-shadow: rgba(15, 15, 15, 0.03) 0px 0px 0px 1px;">
          <div style="font-size: 1.75rem; margin-bottom: 0.5rem;">📚</div>
          <strong style="color: rgb(55, 53, 47); font-weight: 600;">Structured Learning</strong>
          <p style="margin-top: 0.5rem; margin-bottom: 0; color: rgba(55, 53, 47, 0.65); font-size: 0.875rem; line-height: 1.5;">Prefer template-based approach</p>
        </div>
      </div>

      <h2 style="font-size: 1.5rem; font-weight: 600; margin-top: 2.5rem; margin-bottom: 1.5rem; color: rgb(55, 53, 47);">Learning Principles</h2>
      <div style="background: rgba(46, 170, 220, 0.08); border-left: 3px solid rgba(46, 170, 220, 0.3); padding: 1.25rem; margin-bottom: 1rem; border-radius: 3px;">
        <h3 style="margin-top: 0; margin-bottom: 0.75rem; font-size: 1rem; font-weight: 600; color: rgb(55, 53, 47);">Three Core Principles</h3>
        <ol style="margin-bottom: 0; padding-left: 1.5rem; color: rgb(55, 53, 47); line-height: 1.6;">
          <li style="margin-bottom: 0.5rem;"><strong>Template-First Approach</strong> — Learn unified frameworks, not isolated problems</li>
          <li style="margin-bottom: 0.5rem;"><strong>Progressive Difficulty</strong> — Build foundations before advanced topics</li>
          <li><strong>Practice After Learning</strong> — Understand concepts first, then solve problems</li>
        </ol>
      </div>
      <div style="background: rgba(251, 243, 219, 0.6); border-left: 3px solid rgba(233, 196, 106, 0.4); padding: 1.25rem; margin-bottom: 2.5rem; border-radius: 3px;">
        <p style="margin: 0; color: rgb(55, 53, 47); line-height: 1.6;"><strong>Important:</strong> Don't skip framework articles to jump straight to problems. Solid foundations save time in the long run.</p>
      </div>

      <h2 style="font-size: 1.5rem; font-weight: 600; margin-top: 2.5rem; margin-bottom: 1rem; color: rgb(55, 53, 47);">Part 1: Data Structures Fundamentals</h2>
      <p style="color: rgba(55, 53, 47, 0.65); margin-bottom: 2rem; font-style: italic;"><em>Week 1-2</em></p>

      <div style="border: 1px solid rgba(55, 53, 47, 0.09); border-radius: 6px; padding: 1.25rem; margin-bottom: 1.5rem; background: white; box-shadow: rgba(15, 15, 15, 0.03) 0px 0px 0px 1px;">
        <div style="display: flex; align-items: center; gap: 0.75rem; margin-bottom: 0.75rem;">
          <h3 style="font-size: 1.125rem; font-weight: 600; margin: 0; color: rgb(55, 53, 47);">Arrays & Linked Lists</h3>
          <span style="background: rgba(55, 53, 47, 0.08); color: rgb(55, 53, 47); padding: 0.2rem 0.5rem; border-radius: 3px; font-size: 0.75rem; font-weight: 500; border: 1px solid rgba(55, 53, 47, 0.1);">Beginner</span>
          <span style="font-size: 0.875rem; color: rgba(55, 53, 47, 0.65); font-style: italic;">2 days</span>
        </div>
        <ul style="margin: 0; padding-left: 1.5rem; color: rgb(55, 53, 47); line-height: 1.6;">
          <li style="margin-bottom: 0.25rem;">Array basics and circular array technique</li>
          <li style="margin-bottom: 0.25rem;">Linked list principles</li>
          <li style="margin-bottom: 0.25rem;">Two-pointer technique</li>
          <li style="margin-bottom: 0.25rem;">Sequential vs linked storage</li>
          <li>O(1) insertion/deletion with circular arrays</li>
        </ul>
      </div>

      <div style="border: 1px solid rgba(55, 53, 47, 0.09); border-radius: 6px; padding: 1.25rem; margin-bottom: 1.5rem; background: white; box-shadow: rgba(15, 15, 15, 0.03) 0px 0px 0px 1px;">
        <div style="display: flex; align-items: center; gap: 0.75rem; margin-bottom: 0.75rem;">
          <h3 style="font-size: 1.125rem; font-weight: 600; margin: 0; color: rgb(55, 53, 47);">Hash Tables</h3>
          <span style="background: rgba(55, 53, 47, 0.08); color: rgb(55, 53, 47); padding: 0.2rem 0.5rem; border-radius: 3px; font-size: 0.75rem; font-weight: 500; border: 1px solid rgba(55, 53, 47, 0.1);">Beginner</span>
          <span style="font-size: 0.875rem; color: rgba(55, 53, 47, 0.65); font-style: italic;">1-2 days</span>
        </div>
        <p style="margin-bottom: 0.5rem; color: rgb(55, 53, 47); line-height: 1.6;"><strong>Core Concepts:</strong></p>
        <ul style="margin: 0 0 0.5rem 0; padding-left: 1.5rem; color: rgb(55, 53, 47); line-height: 1.6;">
          <li style="margin-bottom: 0.25rem;">Hash table principles</li>
          <li>LinkedHashMap and ArrayHashMap patterns</li>
        </ul>
        <p style="margin: 0; color: rgba(55, 53, 47, 0.65); font-style: italic; font-size: 0.875rem;"><em>Skip: Detailed collision resolution implementations</em></p>
      </div>

      <div style="border: 1px solid rgba(235, 87, 87, 0.2); border-radius: 6px; padding: 1.25rem; margin-bottom: 1.5rem; background: white; box-shadow: rgba(15, 15, 15, 0.03) 0px 0px 0px 1px;">
        <div style="display: flex; align-items: center; gap: 0.75rem; margin-bottom: 0.75rem;">
          <h3 style="font-size: 1.125rem; font-weight: 600; margin: 0; color: rgb(55, 53, 47);">Binary Trees ⭐</h3>
          <span style="background: rgba(235, 87, 87, 0.1); color: rgb(235, 87, 87); padding: 0.2rem 0.5rem; border-radius: 3px; font-size: 0.75rem; font-weight: 500; border: 1px solid rgba(235, 87, 87, 0.2);">Critical Foundation</span>
          <span style="font-size: 0.875rem; color: rgba(55, 53, 47, 0.65); font-style: italic;">2-3 days</span>
        </div>
        <div style="background: rgba(251, 243, 219, 0.6); border-left: 3px solid rgba(233, 196, 106, 0.4); padding: 0.875rem 1rem; margin-bottom: 0.75rem; border-radius: 3px;">
          <p style="margin: 0; color: rgb(55, 53, 47); line-height: 1.6; font-size: 0.875rem;"><strong>Why This Is Critical:</strong> All recursive algorithms are essentially tree traversal. Master this and you'll understand DFS/Backtracking, Dynamic Programming, and Divide & Conquer.</p>
        </div>
        <p style="margin-bottom: 0.5rem; color: rgb(55, 53, 47); line-height: 1.6; font-size: 0.875rem;"><strong>Core Concepts:</strong></p>
        <ul style="margin: 0; padding-left: 1.5rem; color: rgb(55, 53, 47); line-height: 1.6;">
          <li style="margin-bottom: 0.25rem;">Tree traversal (recursive & level-order)</li>
          <li style="margin-bottom: 0.25rem;">N-ary trees</li>
          <li>DFS vs BFS decision framework</li>
        </ul>
      </div>

      <div style="border: 1px solid rgba(55, 53, 47, 0.09); border-radius: 6px; padding: 1.25rem; margin-bottom: 1.5rem; background: white; box-shadow: rgba(15, 15, 15, 0.03) 0px 0px 0px 1px;">
        <div style="display: flex; align-items: center; gap: 0.75rem; margin-bottom: 0.75rem;">
          <h3 style="font-size: 1.125rem; font-weight: 600; margin: 0; color: rgb(55, 53, 47);">Binary Search Trees</h3>
          <span style="background: rgba(55, 53, 47, 0.08); color: rgb(55, 53, 47); padding: 0.2rem 0.5rem; border-radius: 3px; font-size: 0.75rem; font-weight: 500; border: 1px solid rgba(55, 53, 47, 0.1);">Beginner</span>
          <span style="font-size: 0.875rem; color: rgba(55, 53, 47, 0.65); font-style: italic;">1 day</span>
        </div>
        <p style="margin-bottom: 0.5rem; color: rgb(55, 53, 47); line-height: 1.6; font-size: 0.875rem;"><strong>Core Concepts:</strong></p>
        <ul style="margin: 0; padding-left: 1.5rem; color: rgb(55, 53, 47); line-height: 1.6;">
          <li style="margin-bottom: 0.25rem;">"Left smaller, right larger" property</li>
          <li>Basic operations and construction</li>
        </ul>
      </div>

      <div style="border: 1px solid rgba(55, 53, 47, 0.09); border-radius: 6px; padding: 1.25rem; margin-bottom: 1.5rem; background: white; box-shadow: rgba(15, 15, 15, 0.03) 0px 0px 0px 1px;">
        <div style="display: flex; align-items: center; gap: 0.75rem; margin-bottom: 0.75rem;">
          <h3 style="font-size: 1.125rem; font-weight: 600; margin: 0; color: rgb(55, 53, 47);">Binary Heap</h3>
          <span style="background: rgba(55, 53, 47, 0.08); color: rgb(55, 53, 47); padding: 0.2rem 0.5rem; border-radius: 3px; font-size: 0.75rem; font-weight: 500; border: 1px solid rgba(55, 53, 47, 0.1);">Beginner</span>
          <span style="font-size: 0.875rem; color: rgba(55, 53, 47, 0.65); font-style: italic;">0.5 days</span>
        </div>
        <p style="margin-bottom: 0.5rem; color: rgb(55, 53, 47); line-height: 1.6; font-size: 0.875rem;"><strong>Core Concepts:</strong></p>
        <ul style="margin: 0 0 0.5rem 0; padding-left: 1.5rem; color: rgb(55, 53, 47); line-height: 1.6;">
          <li style="margin-bottom: 0.25rem;">Priority queues (auto-sorting with O(log N))</li>
          <li>Heap structure and swim/sink operations</li>
        </ul>
        <p style="margin: 0; color: rgba(55, 53, 47, 0.65); font-style: italic; font-size: 0.875rem;"><em>Skip: Implementation details</em></p>
      </div>

      <div style="border: 1px solid rgba(55, 53, 47, 0.09); border-radius: 6px; padding: 1.25rem; margin-bottom: 1.5rem; background: white; box-shadow: rgba(15, 15, 15, 0.03) 0px 0px 0px 1px;">
        <div style="display: flex; align-items: center; gap: 0.75rem; margin-bottom: 0.75rem;">
          <h3 style="font-size: 1.125rem; font-weight: 600; margin: 0; color: rgb(55, 53, 47);">Graphs</h3>
          <span style="background: rgba(55, 53, 47, 0.08); color: rgb(55, 53, 47); padding: 0.2rem 0.5rem; border-radius: 3px; font-size: 0.75rem; font-weight: 500; border: 1px solid rgba(55, 53, 47, 0.1);">Beginner</span>
          <span style="font-size: 0.875rem; color: rgba(55, 53, 47, 0.65); font-style: italic;">1 day</span>
        </div>
        <p style="margin-bottom: 0.5rem; color: rgb(55, 53, 47); line-height: 1.6; font-size: 0.875rem;"><strong>Core Concepts:</strong></p>
        <ul style="margin: 0; padding-left: 1.5rem; color: rgb(55, 53, 47); line-height: 1.6;">
          <li style="margin-bottom: 0.25rem;">Graph representation</li>
          <li>DFS/BFS traversal templates</li>
        </ul>
      </div>

      <h2 style="font-size: 1.5rem; font-weight: 600; margin-top: 2.5rem; margin-bottom: 1rem; color: rgb(55, 53, 47);">Part 2: Algorithm Patterns</h2>
      <p style="color: rgba(55, 53, 47, 0.65); margin-bottom: 2rem; font-style: italic;"><em>Week 2-5</em></p>

      <div style="border: 1px solid rgba(235, 87, 87, 0.2); border-radius: 6px; padding: 1.25rem; margin-bottom: 1.5rem; background: white; box-shadow: rgba(15, 15, 15, 0.03) 0px 0px 0px 1px;">
        <div style="display: flex; align-items: center; gap: 0.75rem; margin-bottom: 0.75rem;">
          <h3 style="font-size: 1.125rem; font-weight: 600; margin: 0; color: rgb(55, 53, 47);">🎯 Start Here: Core Framework</h3>
          <span style="background: rgba(235, 87, 87, 0.1); color: rgb(235, 87, 87); padding: 0.2rem 0.5rem; border-radius: 3px; font-size: 0.75rem; font-weight: 500; border: 1px solid rgba(235, 87, 87, 0.2);">Must Read</span>
          <span style="font-size: 0.875rem; color: rgba(55, 53, 47, 0.65); font-style: italic;">0.5 days</span>
        </div>
        <div style="background: rgba(46, 170, 220, 0.08); border-left: 3px solid rgba(46, 170, 220, 0.3); padding: 0.875rem 1rem; margin-bottom: 0.75rem; border-radius: 3px;">
          <p style="margin: 0 0 0.5rem 0; color: rgb(55, 53, 47); line-height: 1.6; font-size: 0.875rem;"><strong>Framework Thinking for Learning Data Structures and Algorithms</strong></p>
          <p style="margin: 0; color: rgb(55, 53, 47); line-height: 1.6; font-size: 0.875rem;">This article summarizes all data structures, reveals the essence of all algorithms, and should be revisited as you progress.</p>
        </div>
      </div>

      <div style="border: 1px solid rgba(55, 53, 47, 0.09); border-radius: 6px; padding: 1.25rem; margin-bottom: 1.5rem; background: white; box-shadow: rgba(15, 15, 15, 0.03) 0px 0px 0px 1px;">
        <div style="display: flex; align-items: center; gap: 0.75rem; margin-bottom: 0.75rem;">
          <h3 style="font-size: 1.125rem; font-weight: 600; margin: 0; color: rgb(55, 53, 47);">Linked Lists</h3>
          <span style="background: rgba(46, 170, 220, 0.1); color: rgb(46, 170, 220); padding: 0.2rem 0.5rem; border-radius: 3px; font-size: 0.75rem; font-weight: 500; border: 1px solid rgba(46, 170, 220, 0.2);">Intermediate</span>
          <span style="font-size: 0.875rem; color: rgba(55, 53, 47, 0.65); font-style: italic;">2 days</span>
        </div>
        <ul style="margin: 0; padding-left: 1.5rem; color: rgb(55, 53, 47); line-height: 1.6;">
          <li style="margin-bottom: 0.25rem;">Two-pointer technique framework (1 day)</li>
          <li style="margin-bottom: 0.25rem;">Classic problems practice (1 day)</li>
          <li>Optional: Recursive operations (1 day)</li>
        </ul>
      </div>

      <div style="border: 1px solid rgba(55, 53, 47, 0.09); border-radius: 6px; padding: 1.25rem; margin-bottom: 1.5rem; background: white; box-shadow: rgba(15, 15, 15, 0.03) 0px 0px 0px 1px;">
        <div style="display: flex; align-items: center; gap: 0.75rem; margin-bottom: 0.75rem;">
          <h3 style="font-size: 1.125rem; font-weight: 600; margin: 0; color: rgb(55, 53, 47);">Arrays</h3>
          <span style="background: rgba(46, 170, 220, 0.1); color: rgb(46, 170, 220); padding: 0.2rem 0.5rem; border-radius: 3px; font-size: 0.75rem; font-weight: 500; border: 1px solid rgba(46, 170, 220, 0.2);">Intermediate</span>
          <span style="font-size: 0.875rem; color: rgba(55, 53, 47, 0.65); font-style: italic;">3-5 days</span>
        </div>
        <p style="margin-bottom: 0.5rem; color: rgb(55, 53, 47); line-height: 1.6; font-size: 0.875rem;"><strong>Key Techniques:</strong></p>
        <ul style="margin: 0 0 0.75rem 0; padding-left: 1.5rem; color: rgb(55, 53, 47); line-height: 1.6;">
          <li style="margin-bottom: 0.25rem;">Two-pointer variants (fast/slow, left/right)</li>
          <li style="margin-bottom: 0.25rem;">Binary search</li>
          <li>Sliding window</li>
        </ul>
        <p style="margin-bottom: 0.5rem; color: rgb(55, 53, 47); line-height: 1.6; font-size: 0.875rem;"><strong>Topics:</strong></p>
        <ul style="margin: 0; padding-left: 1.5rem; color: rgb(55, 53, 47); line-height: 1.6;">
          <li style="margin-bottom: 0.25rem;">Two-pointer fundamentals (0.5 days)</li>
          <li style="margin-bottom: 0.25rem;">2D array traversal techniques (1-2 days)</li>
          <li style="margin-bottom: 0.25rem;">Sliding window template (2 days)</li>
          <li style="margin-bottom: 0.25rem;">Binary search templates (1-2 days)</li>
          <li>Prefix sum & difference arrays (1-2 days)</li>
        </ul>
      </div>

      <div style="border: 1px solid rgba(55, 53, 47, 0.09); border-radius: 6px; padding: 1.25rem; margin-bottom: 1.5rem; background: white; box-shadow: rgba(15, 15, 15, 0.03) 0px 0px 0px 1px;">
        <div style="display: flex; align-items: center; gap: 0.75rem; margin-bottom: 0.75rem;">
          <h3 style="font-size: 1.125rem; font-weight: 600; margin: 0; color: rgb(55, 53, 47);">Stack & Queue</h3>
          <span style="background: rgba(46, 170, 220, 0.1); color: rgb(46, 170, 220); padding: 0.2rem 0.5rem; border-radius: 3px; font-size: 0.75rem; font-weight: 500; border: 1px solid rgba(46, 170, 220, 0.2);">Intermediate</span>
          <span style="font-size: 0.875rem; color: rgba(55, 53, 47, 0.65); font-style: italic;">2-4 days</span>
        </div>
        <ul style="margin: 0; padding-left: 1.5rem; color: rgb(55, 53, 47); line-height: 1.6;">
          <li style="margin-bottom: 0.25rem;">Basic implementations (0.5 days)</li>
          <li style="margin-bottom: 0.25rem;">Classic problems (1-2 days)</li>
          <li>Monotonic stack/queue (2-3 days)</li>
        </ul>
      </div>

      <div style="border: 1px solid rgba(235, 87, 87, 0.2); border-radius: 6px; padding: 1.25rem; margin-bottom: 1.5rem; background: white; box-shadow: rgba(15, 15, 15, 0.03) 0px 0px 0px 1px;">
        <div style="display: flex; align-items: center; gap: 0.75rem; margin-bottom: 0.75rem;">
          <h3 style="font-size: 1.125rem; font-weight: 600; margin: 0; color: rgb(55, 53, 47);">Binary Trees Deep Dive ⭐⭐</h3>
          <span style="background: rgba(235, 87, 87, 0.1); color: rgb(235, 87, 87); padding: 0.2rem 0.5rem; border-radius: 3px; font-size: 0.75rem; font-weight: 500; border: 1px solid rgba(235, 87, 87, 0.2);">Critical Section</span>
          <span style="font-size: 0.875rem; color: rgba(55, 53, 47, 0.65); font-style: italic;">5-7 days</span>
        </div>
        <div style="background: rgba(235, 87, 87, 0.08); border-left: 3px solid rgba(235, 87, 87, 0.3); padding: 0.875rem 1rem; margin-bottom: 0.75rem; border-radius: 3px;">
          <p style="margin: 0; color: rgb(55, 53, 47); line-height: 1.6; font-size: 0.875rem;"><strong>Most Important For Interview Success</strong> — This is the most crucial section. Spend extra time here if needed.</p>
        </div>
        <p style="margin-bottom: 0.5rem; color: rgb(55, 53, 47); line-height: 1.6; font-size: 0.875rem;"><strong>Core Framework (3-4 days):</strong></p>
        <ul style="margin: 0 0 0.75rem 0; padding-left: 1.5rem; color: rgb(55, 53, 47); line-height: 1.6;">
          <li style="margin-bottom: 0.25rem;">Recursive thinking: "traversal" vs "decomposition" (0.5 days)</li>
          <li style="margin-bottom: 0.25rem;">Pre/in/post-order positions in real problems (1 day)</li>
          <li>Binary tree insights: thinking, construction, serialization (2-3 days)</li>
        </ul>
        <p style="margin-bottom: 0.5rem; color: rgb(55, 53, 47); line-height: 1.6; font-size: 0.875rem;"><strong>Practice (2 days):</strong></p>
        <ul style="margin: 0 0 0.5rem 0; padding-left: 1.5rem; color: rgb(55, 53, 47); line-height: 1.6;">
          <li style="margin-bottom: 0.25rem;">"Traversal" thinking problems</li>
          <li style="margin-bottom: 0.25rem;">"Decomposition" thinking problems</li>
          <li>Level-order traversal problems</li>
        </ul>
        <p style="margin: 0; color: rgba(55, 53, 47, 0.65); font-style: italic; font-size: 0.875rem;"><em>Optional Extensions:</em> Lowest common ancestor series, Complete binary tree node counting</p>
      </div>

      <div style="border: 1px solid rgba(55, 53, 47, 0.09); border-radius: 6px; padding: 1.25rem; margin-bottom: 1.5rem; background: white; box-shadow: rgba(15, 15, 15, 0.03) 0px 0px 0px 1px;">
        <div style="display: flex; align-items: center; gap: 0.75rem; margin-bottom: 0.75rem;">
          <h3 style="font-size: 1.125rem; font-weight: 600; margin: 0; color: rgb(55, 53, 47);">BST Operations</h3>
          <span style="background: rgba(46, 170, 220, 0.1); color: rgb(46, 170, 220); padding: 0.2rem 0.5rem; border-radius: 3px; font-size: 0.75rem; font-weight: 500; border: 1px solid rgba(46, 170, 220, 0.2);">Intermediate</span>
          <span style="font-size: 0.875rem; color: rgba(55, 53, 47, 0.65); font-style: italic;">2-3 days</span>
        </div>
        <ul style="margin: 0; padding-left: 1.5rem; color: rgb(55, 53, 47); line-height: 1.6;">
          <li style="margin-bottom: 0.25rem;">BST properties and operations (1-2 days)</li>
          <li>BST construction (1 day)</li>
        </ul>
      </div>

      <div style="border: 1px solid rgba(55, 53, 47, 0.09); border-radius: 6px; padding: 1.25rem; margin-bottom: 1.5rem; background: white; box-shadow: rgba(15, 15, 15, 0.03) 0px 0px 0px 1px;">
        <div style="display: flex; align-items: center; gap: 0.75rem; margin-bottom: 0.75rem;">
          <h3 style="font-size: 1.125rem; font-weight: 600; margin: 0; color: rgb(55, 53, 47);">Data Structure Design</h3>
          <span style="background: rgba(46, 170, 220, 0.1); color: rgb(46, 170, 220); padding: 0.2rem 0.5rem; border-radius: 3px; font-size: 0.75rem; font-weight: 500; border: 1px solid rgba(46, 170, 220, 0.2);">Intermediate</span>
          <span style="font-size: 0.875rem; color: rgba(55, 53, 47, 0.65); font-style: italic;">2-3 days</span>
        </div>
        <p style="margin-bottom: 0.5rem; color: rgb(55, 53, 47); line-height: 1.6; font-size: 0.875rem;"><strong>Must Know:</strong> LRU Cache (1 day)</p>
        <p style="margin: 0; color: rgb(55, 53, 47); line-height: 1.6; font-size: 0.875rem;"><strong>Optional:</strong> LFU Cache, Calculator implementation (1 day), Additional design problems (1 day)</p>
      </div>

      <div style="border: 1px solid rgba(55, 53, 47, 0.09); border-radius: 6px; padding: 1.25rem; margin-bottom: 1.5rem; background: white; box-shadow: rgba(15, 15, 15, 0.03) 0px 0px 0px 1px;">
        <div style="display: flex; align-items: center; gap: 0.75rem; margin-bottom: 0.75rem;">
          <h3 style="font-size: 1.125rem; font-weight: 600; margin: 0; color: rgb(55, 53, 47);">Graph Algorithms</h3>
          <span style="background: rgba(46, 170, 220, 0.1); color: rgb(46, 170, 220); padding: 0.2rem 0.5rem; border-radius: 3px; font-size: 0.75rem; font-weight: 500; border: 1px solid rgba(46, 170, 220, 0.2);">Intermediate</span>
          <span style="font-size: 0.875rem; color: rgba(55, 53, 47, 0.65); font-style: italic;">3-4 days</span>
        </div>
        <p style="margin-bottom: 0.5rem; color: rgb(55, 53, 47); line-height: 1.6; font-size: 0.875rem;"><strong>Essential Topics:</strong></p>
        <ul style="margin: 0 0 0.5rem 0; padding-left: 1.5rem; color: rgb(55, 53, 47); line-height: 1.6;">
          <li style="margin-bottom: 0.25rem;">Cycle detection & topological sort (1-2 days)</li>
          <li style="margin-bottom: 0.25rem;">Bipartite graph check</li>
          <li style="margin-bottom: 0.25rem;">Union-Find algorithm (1 day)</li>
          <li style="margin-bottom: 0.25rem;">Minimum spanning tree — Kruskal (1 day)</li>
          <li>Dijkstra's shortest path (1 day)</li>
        </ul>
        <p style="margin: 0; color: rgba(55, 53, 47, 0.65); font-style: italic; font-size: 0.875rem;"><em>Pro Tip: Save templates for quick reuse in coding contests</em></p>
      </div>

      <div style="border: 1px solid rgba(147, 51, 234, 0.2); border-radius: 6px; padding: 1.25rem; margin-bottom: 1.5rem; background: white; box-shadow: rgba(15, 15, 15, 0.03) 0px 0px 0px 1px;">
        <div style="display: flex; align-items: center; gap: 0.75rem; margin-bottom: 0.75rem;">
          <h3 style="font-size: 1.125rem; font-weight: 600; margin: 0; color: rgb(55, 53, 47);">DFS/Backtracking ⭐</h3>
          <span style="background: rgba(147, 51, 234, 0.1); color: rgb(147, 51, 234); padding: 0.2rem 0.5rem; border-radius: 3px; font-size: 0.75rem; font-weight: 500; border: 1px solid rgba(147, 51, 234, 0.2);">Advanced</span>
          <span style="font-size: 0.875rem; color: rgba(55, 53, 47, 0.65); font-style: italic;">5-7 days</span>
        </div>
        <div style="background: rgba(46, 170, 220, 0.08); border-left: 3px solid rgba(46, 170, 220, 0.3); padding: 0.875rem 1rem; margin-bottom: 0.75rem; border-radius: 3px;">
          <p style="margin: 0; color: rgb(55, 53, 47); line-height: 1.6; font-size: 0.875rem;"><strong>Why Important:</strong> Brute-force fallback when optimal solution is unclear. Can help you score partial points in contests.</p>
        </div>
        <p style="margin-bottom: 0.5rem; color: rgb(55, 53, 47); line-height: 1.6; font-size: 0.875rem;"><strong>Core Patterns (3-4 days):</strong></p>
        <ul style="margin: 0; padding-left: 1.5rem; color: rgb(55, 53, 47); line-height: 1.6;">
          <li style="margin-bottom: 0.25rem;">Backtracking framework (1-2 days)</li>
          <li style="margin-bottom: 0.25rem;">Sudoku & N-Queens</li>
          <li style="margin-bottom: 0.25rem;">Permutations/combinations/subsets (1-2 days)</li>
          <li>Island problems & DFS differences (1 day)</li>
        </ul>
      </div>

      <div style="border: 1px solid rgba(55, 53, 47, 0.09); border-radius: 6px; padding: 1.25rem; margin-bottom: 1.5rem; background: white; box-shadow: rgba(15, 15, 15, 0.03) 0px 0px 0px 1px;">
        <div style="display: flex; align-items: center; gap: 0.75rem; margin-bottom: 0.75rem;">
          <h3 style="font-size: 1.125rem; font-weight: 600; margin: 0; color: rgb(55, 53, 47);">BFS Algorithm</h3>
          <span style="background: rgba(46, 170, 220, 0.1); color: rgb(46, 170, 220); padding: 0.2rem 0.5rem; border-radius: 3px; font-size: 0.75rem; font-weight: 500; border: 1px solid rgba(46, 170, 220, 0.2);">Intermediate</span>
          <span style="font-size: 0.875rem; color: rgba(55, 53, 47, 0.65); font-style: italic;">3 days</span>
        </div>
        <div style="background: rgba(46, 170, 220, 0.08); border-left: 3px solid rgba(46, 170, 220, 0.3); padding: 0.875rem 1rem; margin-bottom: 0.75rem; border-radius: 3px;">
          <p style="margin: 0; color: rgb(55, 53, 47); line-height: 1.6; font-size: 0.875rem;"><strong>Key Insight:</strong> Similar to tree level-order traversal; excellent for shortest path problems</p>
        </div>
        <p style="margin-bottom: 0.5rem; color: rgb(55, 53, 47); line-height: 1.6; font-size: 0.875rem;"><strong>Framework (1 day):</strong> BFS problem-solving template</p>
        <p style="margin: 0; color: rgb(55, 53, 47); line-height: 1.6; font-size: 0.875rem;"><strong>Practice (2 days):</strong> Priority problems include Complete Binary Tree Inserter, Keys and Rooms, Minimum Genetic Mutation, Shortest Path in Binary Matrix, Rotting Oranges, Word Ladder, and more.</p>
      </div>

      <div style="border: 1px solid rgba(147, 51, 234, 0.2); border-radius: 6px; padding: 1.25rem; margin-bottom: 1.5rem; background: white; box-shadow: rgba(15, 15, 15, 0.03) 0px 0px 0px 1px;">
        <div style="display: flex; align-items: center; gap: 0.75rem; margin-bottom: 0.75rem;">
          <h3 style="font-size: 1.125rem; font-weight: 600; margin: 0; color: rgb(55, 53, 47);">Dynamic Programming ⭐</h3>
          <span style="background: rgba(147, 51, 234, 0.1); color: rgb(147, 51, 234); padding: 0.2rem 0.5rem; border-radius: 3px; font-size: 0.75rem; font-weight: 500; border: 1px solid rgba(147, 51, 234, 0.2);">Advanced</span>
          <span style="font-size: 0.875rem; color: rgba(55, 53, 47, 0.65); font-style: italic;">6-8 days</span>
        </div>
        <div style="background: rgba(46, 170, 220, 0.08); border-left: 3px solid rgba(46, 170, 220, 0.3); padding: 0.875rem 1rem; margin-bottom: 0.75rem; border-radius: 3px;">
          <p style="margin: 0; color: rgb(55, 53, 47); line-height: 1.6; font-size: 0.875rem;"><strong>Key Insight:</strong> Optimized brute-force with memoization for overlapping subproblems</p>
        </div>
        <p style="margin-bottom: 0.5rem; color: rgb(55, 53, 47); line-height: 1.6; font-size: 0.875rem;"><strong>Core Framework (2-3 days):</strong></p>
        <ul style="margin: 0 0 0.75rem 0; padding-left: 1.5rem; color: rgb(55, 53, 47); line-height: 1.6;">
          <li style="margin-bottom: 0.25rem;">DP problem-solving framework (1-2 days)</li>
          <li style="margin-bottom: 0.25rem;">Longest increasing subsequence</li>
          <li style="margin-bottom: 0.25rem;">Base case & memo initialization (1-2 days)</li>
          <li>Optimal substructure & traversal direction</li>
        </ul>
        <p style="margin-bottom: 0.5rem; color: rgb(55, 53, 47); line-height: 1.6; font-size: 0.875rem;"><strong>Practice (4-5 days):</strong></p>
        <ul style="margin: 0; padding-left: 1.5rem; color: rgb(55, 53, 47); line-height: 1.6;">
          <li style="margin-bottom: 0.25rem;">Edit distance (1-2 days)</li>
          <li style="margin-bottom: 0.25rem;">Maximum subarray</li>
          <li style="margin-bottom: 0.25rem;">Longest common subsequence</li>
          <li>Knapsack problems: 0-1, subset, complete (1-2 days)</li>
        </ul>
      </div>

      <div style="border: 1px solid rgba(55, 53, 47, 0.09); border-radius: 6px; padding: 1.25rem; margin-bottom: 1.5rem; background: white; box-shadow: rgba(15, 15, 15, 0.03) 0px 0px 0px 1px;">
        <div style="display: flex; align-items: center; gap: 0.75rem; margin-bottom: 0.75rem;">
          <h3 style="font-size: 1.125rem; font-weight: 600; margin: 0; color: rgb(55, 53, 47);">Greedy Algorithm</h3>
          <span style="background: rgba(46, 170, 220, 0.1); color: rgb(46, 170, 220); padding: 0.2rem 0.5rem; border-radius: 3px; font-size: 0.75rem; font-weight: 500; border: 1px solid rgba(46, 170, 220, 0.2);">Intermediate</span>
          <span style="font-size: 0.875rem; color: rgba(55, 53, 47, 0.65); font-style: italic;">1 day</span>
        </div>
        <div style="background: rgba(251, 243, 219, 0.6); border-left: 3px solid rgba(233, 196, 106, 0.4); padding: 0.875rem 1rem; margin-bottom: 0; border-radius: 3px;">
          <p style="margin: 0; color: rgb(55, 53, 47); line-height: 1.6; font-size: 0.875rem;"><strong>Key Insight:</strong> Use problem properties to avoid brute-force. <em>Note: No fixed template; requires problem-specific observation</em></p>
        </div>
      </div>

      <div style="border: 1px solid rgba(55, 53, 47, 0.09); border-radius: 6px; padding: 1.25rem; margin-bottom: 1.5rem; background: white; box-shadow: rgba(15, 15, 15, 0.03) 0px 0px 0px 1px;">
        <div style="display: flex; align-items: center; gap: 0.75rem; margin-bottom: 0.75rem;">
          <h3 style="font-size: 1.125rem; font-weight: 600; margin: 0; color: rgb(55, 53, 47);">Divide & Conquer</h3>
          <span style="background: rgba(46, 170, 220, 0.1); color: rgb(46, 170, 220); padding: 0.2rem 0.5rem; border-radius: 3px; font-size: 0.75rem; font-weight: 500; border: 1px solid rgba(46, 170, 220, 0.2);">Intermediate</span>
          <span style="font-size: 0.875rem; color: rgba(55, 53, 47, 0.65); font-style: italic;">1 day</span>
        </div>
        <p style="margin: 0; color: rgb(55, 53, 47); line-height: 1.6; font-size: 0.875rem;"><strong>Pattern:</strong> Break down → solve subproblems → combine results</p>
      </div>

      <div style="border: 1px solid rgba(55, 53, 47, 0.09); border-radius: 6px; padding: 1.25rem; margin-bottom: 1.5rem; background: white; box-shadow: rgba(15, 15, 15, 0.03) 0px 0px 0px 1px;">
        <div style="display: flex; align-items: center; gap: 0.75rem; margin-bottom: 0.75rem;">
          <h3 style="font-size: 1.125rem; font-weight: 600; margin: 0; color: rgb(55, 53, 47);">Math & Tricks</h3>
          <span style="background: rgba(46, 170, 220, 0.1); color: rgb(46, 170, 220); padding: 0.2rem 0.5rem; border-radius: 3px; font-size: 0.75rem; font-weight: 500; border: 1px solid rgba(46, 170, 220, 0.2);">Intermediate</span>
          <span style="font-size: 0.875rem; color: rgba(55, 53, 47, 0.65); font-style: italic;">2-3 days</span>
        </div>
        <ul style="margin: 0; padding-left: 1.5rem; color: rgb(55, 53, 47); line-height: 1.6;">
          <li style="margin-bottom: 0.25rem;">One-line solutions & randomization (1-2 days)</li>
          <li>Prime numbers & math techniques (1 day)</li>
        </ul>
      </div>

      <div style="border: 1px solid rgba(147, 51, 234, 0.2); border-radius: 6px; padding: 1.25rem; margin-bottom: 1.5rem; background: white; box-shadow: rgba(15, 15, 15, 0.03) 0px 0px 0px 1px;">
        <div style="display: flex; align-items: center; gap: 0.75rem; margin-bottom: 0.75rem;">
          <h3 style="font-size: 1.125rem; font-weight: 600; margin: 0; color: rgb(55, 53, 47);">Classic Problems</h3>
          <span style="background: rgba(147, 51, 234, 0.1); color: rgb(147, 51, 234); padding: 0.2rem 0.5rem; border-radius: 3px; font-size: 0.75rem; font-weight: 500; border: 1px solid rgba(147, 51, 234, 0.2);">Advanced</span>
          <span style="font-size: 0.875rem; color: rgba(55, 53, 47, 0.65); font-style: italic;">2-4 days</span>
        </div>
        <p style="margin-bottom: 0.5rem; color: rgb(55, 53, 47); line-height: 1.6; font-size: 0.875rem;"><strong>High-Value Problems:</strong></p>
        <ul style="margin: 0; padding-left: 1.5rem; color: rgb(55, 53, 47); line-height: 1.6;">
          <li style="margin-bottom: 0.25rem;">Meeting rooms (scanline technique) (1-2 days)</li>
          <li style="margin-bottom: 0.25rem;">Trapping rain water</li>
          <li style="margin-bottom: 0.25rem;">Ugly number series</li>
          <li style="margin-bottom: 0.25rem;">Weighted random selection (1-2 days)</li>
          <li>nSum problems & template</li>
        </ul>
      </div>

      <div style="border: 1px solid rgba(55, 53, 47, 0.09); border-radius: 6px; padding: 1.25rem; margin-bottom: 1.5rem; background: white; box-shadow: rgba(15, 15, 15, 0.03) 0px 0px 0px 1px;">
        <div style="display: flex; align-items: center; gap: 0.75rem; margin-bottom: 0.75rem;">
          <h3 style="font-size: 1.125rem; font-weight: 600; margin: 0; color: rgb(55, 53, 47);">Sorting Algorithms</h3>
          <span style="background: rgba(55, 53, 47, 0.08); color: rgb(55, 53, 47); padding: 0.2rem 0.5rem; border-radius: 3px; font-size: 0.75rem; font-weight: 500; border: 1px solid rgba(55, 53, 47, 0.1);">Beginner</span>
          <span style="font-size: 0.875rem; color: rgba(55, 53, 47, 0.65); font-style: italic;">1 day</span>
        </div>
        <div style="background: rgba(55, 53, 47, 0.03); border-left: 3px solid rgba(55, 53, 47, 0.16); padding: 0.875rem 1rem; margin: 0; border-radius: 3px;">
          <p style="margin: 0 0 0.5rem 0; color: rgb(55, 53, 47); line-height: 1.6; font-size: 0.875rem;"><strong>Interview Focus:</strong> Principles, complexity, use cases (not implementation)</p>
          <p style="margin: 0; color: rgb(55, 53, 47); line-height: 1.6; font-size: 0.875rem;"><em>Recommendation: Watch video overview of 10 classic sorting algorithms</em></p>
        </div>
      </div>

      <h2 style="font-size: 1.5rem; font-weight: 600; margin-top: 2.5rem; margin-bottom: 1.5rem; color: rgb(55, 53, 47);">Study Tips</h2>
      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); gap: 1rem; margin-bottom: 2.5rem;">
        <div style="border: 1px solid rgba(55, 53, 47, 0.09); padding: 1.25rem; border-radius: 6px; background: white; box-shadow: rgba(15, 15, 15, 0.03) 0px 0px 0px 1px;">
          <div style="font-size: 1.75rem; margin-bottom: 0.5rem;">⏱️</div>
          <strong style="color: rgb(55, 53, 47); font-weight: 600;">Time Management</strong>
          <ul style="margin-top: 0.5rem; margin-bottom: 0; padding-left: 1.5rem; font-size: 0.875rem; color: rgba(55, 53, 47, 0.65); line-height: 1.6;">
            <li style="margin-bottom: 0.25rem;">Estimates assume 1-2 hours/day</li>
            <li style="margin-bottom: 0.25rem;">Longer study sessions = faster progress</li>
            <li>Don't get stuck on single problems — move forward and review later</li>
          </ul>
        </div>
        <div style="border: 1px solid rgba(55, 53, 47, 0.09); padding: 1.25rem; border-radius: 6px; background: white; box-shadow: rgba(15, 15, 15, 0.03) 0px 0px 0px 1px;">
          <div style="font-size: 1.75rem; margin-bottom: 0.5rem;">📋</div>
          <strong style="color: rgb(55, 53, 47); font-weight: 600;">Problem Lists</strong>
          <p style="margin-top: 0.5rem; margin-bottom: 0.25rem; font-size: 0.875rem; color: rgba(55, 53, 47, 0.65);"><strong>Use Them For:</strong></p>
          <ul style="margin-top: 0.5rem; margin-bottom: 0.5rem; padding-left: 1.5rem; font-size: 0.875rem; color: rgba(55, 53, 47, 0.65); line-height: 1.6;">
            <li style="margin-bottom: 0.25rem;">Understanding company-specific patterns</li>
            <li>Review after mastering templates</li>
          </ul>
          <p style="margin: 0; font-size: 0.875rem; color: rgba(55, 53, 47, 0.65);"><strong>Don't:</strong> Skip templates to only practice company lists</p>
        </div>
        <div style="border: 1px solid rgba(55, 53, 47, 0.09); padding: 1.25rem; border-radius: 6px; background: white; box-shadow: rgba(15, 15, 15, 0.03) 0px 0px 0px 1px;">
          <div style="font-size: 1.75rem; margin-bottom: 0.5rem;">🤔</div>
          <strong style="color: rgb(55, 53, 47); font-weight: 600;">When Stuck</strong>
          <ol style="margin-top: 0.5rem; margin-bottom: 0; padding-left: 1.5rem; font-size: 0.875rem; color: rgba(55, 53, 47, 0.65); line-height: 1.6;">
            <li style="margin-bottom: 0.25rem;">Read framework articles first</li>
            <li style="margin-bottom: 0.25rem;">Understand the template</li>
            <li style="margin-bottom: 0.25rem;">Apply to problems</li>
            <li>Review and strengthen understanding</li>
          </ol>
        </div>
        <div style="border: 1px solid rgba(55, 53, 47, 0.09); padding: 1.25rem; border-radius: 6px; background: white; box-shadow: rgba(15, 15, 15, 0.03) 0px 0px 0px 1px;">
          <div style="font-size: 1.75rem; margin-bottom: 0.5rem;">📊</div>
          <strong style="color: rgb(55, 53, 47); font-weight: 600;">Progress Tracking</strong>
          <p style="margin-top: 0.5rem; margin-bottom: 0.5rem; font-size: 0.875rem; color: rgba(55, 53, 47, 0.65);">Use the visual roadmap to:</p>
          <ul style="margin: 0; padding-left: 1.5rem; font-size: 0.875rem; color: rgba(55, 53, 47, 0.65); line-height: 1.6;">
            <li style="margin-bottom: 0.25rem;">Track completed topics</li>
            <li style="margin-bottom: 0.25rem;">Navigate between concepts</li>
            <li>Plan your study path</li>
          </ul>
        </div>
      </div>

      <h2 style="font-size: 1.5rem; font-weight: 600; margin-top: 2.5rem; margin-bottom: 1.5rem; color: rgb(55, 53, 47);">Success Metrics</h2>
      <div style="background: rgba(46, 170, 220, 0.08); border-left: 3px solid rgba(46, 170, 220, 0.3); padding: 1.25rem; margin-bottom: 2.5rem; border-radius: 3px;">
        <h3 style="margin-top: 0; margin-bottom: 0.75rem; font-size: 1rem; font-weight: 600; color: rgb(55, 53, 47);">After Completing This Plan</h3>
        <ul style="margin-bottom: 0; padding-left: 1.5rem; color: rgb(55, 53, 47); line-height: 1.6;">
          <li style="margin-bottom: 0.5rem;">✓ Recognize which algorithm pattern applies to new problems</li>
          <li style="margin-bottom: 0.5rem;">✓ Solve medium-level LeetCode problems independently</li>
          <li style="margin-bottom: 0.5rem;">✓ Apply templates to variations of learned patterns</li>
          <li>✓ Write clean, structured solutions consistently</li>
        </ul>
        <p style="margin-top: 1rem; margin-bottom: 0; color: rgb(55, 53, 47); line-height: 1.6;"><strong>Next Steps:</strong> Return to advanced topics or company-specific problem lists as needed.</p>
      </div>

      <div style="background: rgba(251, 243, 219, 0.6); border-left: 3px solid rgba(233, 196, 106, 0.4); padding: 1.25rem; margin-top: 2.5rem; border-radius: 3px;">
        <p style="margin: 0; color: rgb(55, 53, 47); line-height: 1.6;"><strong>Remember:</strong> <em>Quality over quantity.</em> Deep understanding of templates > memorizing many problems.</p>
      </div>
    </div>
  `;

  return (
    <ArticleContent
      title="1 Month Interview Oriented Fast Track"
      content={content}
      readingTime={15}
    />
  );
}


