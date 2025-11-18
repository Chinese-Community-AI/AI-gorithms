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

/**
 * Builds breadcrumb path from navigation structure
 */
export function getBreadcrumbs(
  currentPath: string
): Array<{ title: string; href: string }> {
  // If we're on the home page, just return home
  if (currentPath === "/") {
    return [{ title: "Home", href: "/" }];
  }

  const breadcrumbs: Array<{ title: string; href: string }> = [
    { title: "Home", href: "/" },
  ];

  function findPath(
    items: NavItem[],
    path: string,
    currentPath: NavItem[]
  ): NavItem[] | null {
    for (const item of items) {
      const newPath = [...currentPath, item];

      // If this item matches, return the path including this item
      if (item.href === path) {
        return newPath;
      }

      // If this item has children, search recursively
      if (item.children) {
        const found = findPath(item.children, path, newPath);
        if (found) return found;
      }
    }
    return null;
  }

  const path = findPath(navigation, currentPath, []);
  if (path && path.length > 0) {
    // Add all items in the path to breadcrumbs
    path.forEach((item) => {
      breadcrumbs.push({ title: item.title, href: item.href });
    });
  }

  return breadcrumbs;
}
