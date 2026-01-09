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
    ],
  },
];
