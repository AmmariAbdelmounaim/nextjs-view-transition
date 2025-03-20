import { articles } from "@/lib/constants";
import AuthorPageClient from "./page-client";

export default async function AuthorPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const authorNameFromSlug = slug
    .split("-")
    .map((word: string) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

  const authorArticles = articles.filter(
    (article) =>
      article.author.name.toLowerCase() === authorNameFromSlug.toLowerCase()
  );

  const author = authorArticles[0].author;
  return <AuthorPageClient author={author} authorArticles={authorArticles} />;
}

export async function generateStaticParams() {
  return articles.map((article) => ({
    slug: article.author.name.toLowerCase().replace(/\s+/g, "-"),
  }));
}

export const dynamic = "force-static";
