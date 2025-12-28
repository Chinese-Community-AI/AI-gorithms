import { generateBasicsNavigation } from "./utils/generateBasicsNavigation.server";
import { NavItem } from "./navigation";

/**
 * Server-side navigation generator
 * Use this in server components or API routes
 */
export function getServerNavigation(): NavItem[] {
  return [
    {
      title: "Fast Track",
      href: "/fast-track",
      children: [
        {
          title: "Basics",
          href: "/basics",
          children: generateBasicsNavigation(),
        },
      ],
    },
  ];
}
