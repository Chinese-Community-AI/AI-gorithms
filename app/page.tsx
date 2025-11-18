import HomeArticle from "@/content/articles/home.mdx";
import MDXArticleContent from "@/components/article/MDXArticleContent";

export default function Home() {
  return (
    <MDXArticleContent
      title="AI Native Algorithm Learning"
      readingTime={6}
      showTOC={false}
    >
      <HomeArticle />
    </MDXArticleContent>
  );
}
