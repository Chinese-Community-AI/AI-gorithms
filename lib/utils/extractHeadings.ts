export interface Heading {
  id: string;
  text: string;
  level: number;
}

export function extractHeadings(html: string): Heading[] {
  const headingRegex = /<h([2-6])[^>]*>(.*?)<\/h[2-6]>/gi;
  const headings: Heading[] = [];
  let match;

  while ((match = headingRegex.exec(html)) !== null) {
    const level = parseInt(match[1]);
    const text = match[2].replace(/<[^>]*>/g, "").trim();
    const id = text
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-|-$/g, "");

    headings.push({ id, text, level });
  }

  return headings;
}

export function addIdsToHeadings(html: string): string {
  const headingRegex = /<h([2-6])([^>]*)>(.*?)<\/h[2-6]>/gi;

  return html.replace(headingRegex, (match, level, attrs, content) => {
    const text = content.replace(/<[^>]*>/g, "").trim();
    const id = text
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-|-$/g, "");

    // Check if id already exists in attributes
    if (attrs.includes("id=")) {
      return match;
    }

    return `<h${level}${attrs} id="${id}">${content}</h${level}>`;
  });
}
