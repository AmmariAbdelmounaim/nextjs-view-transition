"use client";

import { Article } from "@/lib/constants";
import Link from "next/link";
import { Avatar } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ChevronLeft } from "lucide-react";
import { unstable_ViewTransition as ViewTransition } from "react";

export default function ArticlePageClient({ article }: { article: Article }) {
  return (
    <div className="container mx-auto py-10">
      <Link href="/">
        <Button variant="ghost" className="mb-6 flex items-center gap-1">
          <ChevronLeft className="h-4 w-4" />
          Back to articles
        </Button>
      </Link>

      <article className="mx-auto max-w-3xl">
        <div className="mb-8 rounded-lg overflow-hidden">
          <ViewTransition name={`article-${article.slug}-cover-image`}>
            <div className="relative z-[100]">
              <img
                src={article.coverImage }
                alt={article.title}
                className="h-[400px] w-full object-cover rounded-t-lg"
              />
            </div>
          </ViewTransition>
        </div>

        <div className="mb-6 flex items-center gap-2">
          <Badge variant="outline">{article.category}</Badge>
          <span className="text-sm text-muted-foreground">
            {article.readingTime} min read
          </span>
        </div>
        <ViewTransition name={`article-${article.slug}-title`}>
          <h1 className="mb-6 text-4xl inline-block font-bold tracking-tight">
            {article.title}
          </h1>
        </ViewTransition>

        <div className="mb-10 flex items-center gap-4">
          <Link
            href={`/author/${article.author.name
              .toLowerCase()
              .replace(/\s+/g, "-")}`}
            className="hover:opacity-80 transition-opacity"
          >
            <ViewTransition name={`article-${article.slug}-author-avatar`}>
              <Avatar className="h-12 w-12 inline-block">
                <img src={article.author.avatar} />
              </Avatar>
            </ViewTransition>
          </Link>

          <div>
            <ViewTransition name={`article-${article.slug}-author-name`}>
              <span className="font-medium inline-block">
                {article.author.name}
              </span>
            </ViewTransition>
            <ViewTransition name={`article-${article.slug}-published-at`}>
              <div className="text-sm text-muted-foreground">
                Published on {article.publishedAt}
              </div>
            </ViewTransition>
          </div>
        </div>

        <div className="prose prose-lg max-w-none dark:prose-invert">
          {article.content.map((paragraph, index) => (
            <p key={index} className="mb-4">
              {paragraph}
            </p>
          ))}
        </div>
      </article>
    </div>
  );
}
