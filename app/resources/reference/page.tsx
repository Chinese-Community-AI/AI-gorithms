import { MDXRemote } from "next-mdx-remote/rsc";
import MDXArticleContent from "@/components/article/MDXArticleContent";
import { getContentForRoute } from "@/lib/utils/content";

export default function ReferencePage() {
  const content = getContentForRoute("/resources/reference");

  // Fallback to default content if MDX file not found
  if (!content) {
    return (
      <MDXArticleContent title="Reference Materials" >
        <div>
          <h2>Reference Materials</h2>
          <p>Quick reference guides and cheat sheets.</p>

          <h2>Reference Documents</h2>
          <p>Reference materials will be available here.</p>
        </div>
      </MDXArticleContent>
    );
  }

  return (
    <MDXArticleContent title="Reference Materials" >
      <MDXRemote source={content} />
    </MDXArticleContent>
  );
}
