export interface NavItem {
  title: string;
  href: string;
  children?: NavItem[];
}

// Navigation structure - Basics children will be generated server-side
// For now, using a static structure that matches the basics directory
export const navigation: NavItem[] = [
  {
    title: "Fast Track",
    href: "/fast-track",
  },
  {
    title: "Part 1: Data Structures Basics",
    href: "/basics",
    children: [
      {
        title: "Arrays & Linked Lists",
        href: "/basics/01-arrays",
        children: [
          {
            title: "1 Minute Introduction",
            href: "/basics/01-arrays/1-minute-introduction",
          },
          {
            title: "Static Array",
            href: "/basics/01-arrays/static-array",
          },
          {
            title: "Linked Lists",
            href: "/basics/01-arrays/linked-lists",
          },
          {
            title: "Circular Array Technique and Implementation",
            href: "/basics/01-arrays/circular-array",
          },
        ],
      },
      {
        title: "Hash Tables",
        href: "/basics/03-hash-tables",
        children: [
          {
            title: "1 Minute Introduction",
            href: "/basics/03-hash-tables/1-minute-introduction",
          },
          {
            title: "HashMap Basics",
            href: "/basics/03-hash-tables/hashmap-basics",
          },
          {
            title: "Linked Hash Map",
            href: "/basics/03-hash-tables/linked-hash-map",
          },
          {
            title: "Array Hash Map",
            href: "/basics/03-hash-tables/array-hash-map",
          },
        ],
      },
      {
        title: "Binary Tree",
        href: "/basics/04-binary-tree",
        children: [
          {
            title: "Binary Tree Basics",
            href: "/basics/04-binary-tree/basics",
          },
          {
            title: "Recursive/Level Order Traversal",
            href: "/basics/04-binary-tree/traversal",
          },
          {
            title: "N-ary Tree",
            href: "/basics/04-binary-tree/n-ary-tree",
          },
          {
            title: "Shortest Path vs All Paths",
            href: "/basics/04-binary-tree/shortest-path-vs-all-paths",
          },
          {
            title: "Binary Search Tree",
            href: "/basics/04-binary-tree/binary-search-tree",
          },
        ],
      },
      {
        title: "Binary Heap",
        href: "/basics/05-binary-heap",
        children: [
          {
            title: "Binary Heap Basics",
            href: "/basics/05-binary-heap/basics",
          },
        ],
      },
      {
        title: "Graphs",
        href: "/basics/06-graphs",
      },
    ],
  },
  {
    title: "Part 2: Algorithm Patterns",
    href: "/algorithm-patterns",
  },
];
