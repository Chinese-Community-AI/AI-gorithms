export interface NavItem {
  title: string;
  href: string;
  children?: NavItem[];
}

export const navigation: NavItem[] = [
  {
    title: "Welcome",
    href: "/welcome",
  },
  {
    title: "Course Overview",
    href: "/course",
    children: [
      {
        title: "Course Structure",
        href: "/course/structure",
      },
      {
        title: "Learning Objectives",
        href: "/course/objectives",
      },
      {
        title: "Prerequisites",
        href: "/course/prerequisites",
      },
    ],
  },
  {
    title: "Core Concepts",
    href: "/concepts",
    children: [
      {
        title: "Data Structures Basics",
        href: "/concepts/data-structures",
      },
      {
        title: "Algorithm Fundamentals",
        href: "/concepts/algorithms",
      },
      {
        title: "Complexity Analysis",
        href: "/concepts/complexity",
      },
    ],
  },
  {
    title: "Practice Problems",
    href: "/practice",
    children: [
      {
        title: "Easy Problems",
        href: "/practice/easy",
      },
      {
        title: "Medium Problems",
        href: "/practice/medium",
      },
      {
        title: "Hard Problems",
        href: "/practice/hard",
      },
    ],
  },
  {
    title: "Resources",
    href: "/resources",
    children: [
      {
        title: "Code Examples",
        href: "/resources/examples",
      },
      {
        title: "Visualizations",
        href: "/resources/visualizations",
      },
      {
        title: "Reference Materials",
        href: "/resources/reference",
      },
    ],
  },
];
