import { MDXRemote } from "next-mdx-remote/rsc";
import MDXArticleContent from "@/components/article/MDXArticleContent";
import { getContentForRoute } from "@/lib/utils/content";

export default function VisualizationsPage() {
  const content = getContentForRoute("/resources/visualizations");

  // Fallback to default content if MDX file not found
  if (!content) {
    return (
      <MDXArticleContent title="Visualizations" >
        <div>
          <h2>Visualizations</h2>
          <p>Interactive visualizations to help you understand algorithms.</p>

          <h2>Available Visualizations</h2>
          <p>Algorithm visualizations will be available here.</p>
        </div>
      </MDXArticleContent>
    );
  }

  return (
    <MDXArticleContent title="Visualizations" >
      <MDXRemote source={content} />
    </MDXArticleContent>
  );
}
