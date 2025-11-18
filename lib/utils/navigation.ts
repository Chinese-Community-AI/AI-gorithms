import { NavItem, navigation } from "@/lib/navigation";

/**
 * Flattens the navigation tree into a flat array
 */
export function flattenNavigation(items: NavItem[] = navigation): NavItem[] {
  const result: NavItem[] = [];

  for (const item of items) {
    result.push(item);
    if (item.children) {
      result.push(...flattenNavigation(item.children));
    }
  }

  return result;
}

/**
 * Finds the current item and its neighbors in the navigation
 */
export function getNavigationNeighbors(currentPath: string): {
  previous: NavItem | null;
  current: NavItem | null;
  next: NavItem | null;
} {
  const flatNav = flattenNavigation();
  const currentIndex = flatNav.findIndex((item) => item.href === currentPath);

  if (currentIndex === -1) {
    return {
      previous: null,
      current: null,
      next: null,
    };
  }

  return {
    previous: currentIndex > 0 ? flatNav[currentIndex - 1] : null,
    current: flatNav[currentIndex],
    next: currentIndex < flatNav.length - 1 ? flatNav[currentIndex + 1] : null,
  };
}
