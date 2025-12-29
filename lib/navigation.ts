export interface NavItem {
  title: string;
  href: string;
  children?: NavItem[];
}

// Navigation structure - Basics children will be generated server-side
// For now, using a static structure that matches the basics directory
export const navigation: NavItem[] = [
  {
    title: "1 Month Fast Track",
    href: "/fast-track",
  },
  {
    title: "Basics",
    href: "/basics",
    children: [
      {
        title: "Quick Introduction",
        href: "/basics/quick-introduction",
      },
      {
        title: "10 Sorting Algorithms",
        href: "/basics/10-sorting-algorithms",
        children: [
          {
            title: "Explore Selection Sort",
            href: "/basics/10-sorting-algorithms/explore-selection-sort",
          },
          {
            title: "Intro",
            href: "/basics/10-sorting-algorithms/intro",
          },
          {
            title: "Metrics Of Sorting Algorithms",
            href: "/basics/10-sorting-algorithms/metrics-of-sorting-algorithms",
          },
        ],
      },
      {
        title: "Binary Tree Structure And Traversal",
        href: "/basics/binary-tree-structure-and-traversal",
        children: [
          {
            title: "Binary Tree Basic And Common Types",
            href: "/basics/binary-tree-structure-and-traversal/binary-tree-basic-and-common-types",
          },
          {
            title: "Binary Tree Recursive Level Traversal",
            href: "/basics/binary-tree-structure-and-traversal/binary-tree-recursive-level-traversal",
          },
          {
            title: "N Ary Tree Recursive Level Traversal",
            href: "/basics/binary-tree-structure-and-traversal/n-ary-tree-recursive-level-traversal",
          },
          {
            title: "Use Cases Of Dfs Bfs",
            href: "/basics/binary-tree-structure-and-traversal/use-cases-of-dfs-bfs",
          },
        ],
      },
      {
        title: "Binary Tree Variations",
        href: "/basics/binary-tree-variations",
        children: [
          {
            title: "Bianry Heap Priority Queue Implementation",
            href: "/basics/binary-tree-variations/bianry-heap-priority-queue-implementation",
          },
          {
            title: "Binary Heap Basic",
            href: "/basics/binary-tree-variations/binary-heap-basic",
          },
          {
            title: "Data Compression And Huffman Tree",
            href: "/basics/binary-tree-variations/data-compression-and-huffman-tree",
          },
          {
            title: "Red Black Trees Basics",
            href: "/basics/binary-tree-variations/red-black-trees-basics",
          },
          {
            title: "Segment Tree Basics",
            href: "/basics/binary-tree-variations/segment-tree-basics",
          },
          {
            title: "Treemap Structure Visualization",
            href: "/basics/binary-tree-variations/treemap-structure-visualization",
          },
          {
            title: "Trie Digital Tree Prefix Tree Basics",
            href: "/basics/binary-tree-variations/trie-digital-tree-prefix-tree-basics",
          },
        ],
      },
      {
        title: "Graph Structure Algorithm Overview",
        href: "/basics/graph-structure-algorithm-overview.md",
        children: [
          {
            title: "Basic Terminology In Graph Theory",
            href: "/basics/graph-structure-algorithm-overview.md/basic-terminology-in-graph-theory",
          },
          {
            title: "Eulerian Graph And One Stroke Game",
            href: "/basics/graph-structure-algorithm-overview.md/eulerian-graph-and-one-stroke-game",
          },
          {
            title: "Graph Shortest Path Algo Overview",
            href: "/basics/graph-structure-algorithm-overview.md/graph-shortest-path-algo-overview",
          },
          {
            title: "Graph Structure Code Implementation",
            href: "/basics/graph-structure-algorithm-overview.md/graph-structure-code-implementation",
          },
          {
            title: "Graph Sturecture Dfs Bfs Traversal",
            href: "/basics/graph-structure-algorithm-overview.md/graph-sturecture-DFS-BFS-traversal",
          },
          {
            title: "Minimm Spanning Tree Algo Overview",
            href: "/basics/graph-structure-algorithm-overview.md/minimm-spanning-tree-algo-overview",
          },
          {
            title: "Union Find Basics",
            href: "/basics/graph-structure-algorithm-overview.md/union-find-basics",
          },
        ],
      },
      {
        title: "Hash Table Variations",
        href: "/basics/hash-table-variations",
        children: [
          {
            title: "Bloom Filteder Implementation",
            href: "/basics/hash-table-variations/bloom-filteder-implementation",
          },
          {
            title: "Use Array To Enhance Hash Table Arrayhashmap",
            href: "/basics/hash-table-variations/use-array-to-enhance-hash-table-arrayhashmap",
          },
          {
            title: "Use Linked List To Enhance Hash Table Linkedhashmap",
            href: "/basics/hash-table-variations/use-linked-list-to-enhance-hash-table-linkedhashmap",
          },
        ],
      },
      {
        title: "Implement Hashmap",
        href: "/basics/implement-hashmap",
        children: [
          {
            title: "Hash Set Basic And Implementation",
            href: "/basics/implement-hashmap/hash-set-basic-and-implementation",
          },
          {
            title: "Key Points To Implement Linear Probing",
            href: "/basics/implement-hashmap/key-points-to-implement-linear-probing",
          },
          {
            title: "Separate Chaining",
            href: "/basics/implement-hashmap/separate-chaining",
          },
          {
            title: "Two Implementations Of Linear Probing",
            href: "/basics/implement-hashmap/two-implementations-of-linear-probing",
          },
        ],
      },
    ],
  },
];
