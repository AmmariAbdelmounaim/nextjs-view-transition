import { Article, articles } from "@/lib/constants";
import ArticlePageClient from "./page-client";

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = articles.find((article) => article.slug === slug) as Article;

  return <ArticlePageClient article={article} />;
}

export async function generateStaticParams() {
  return articles.map((article) => ({
    slug: article.slug,
  }));
}

export const dynamic = 'force-static'
