"use client";

import { Article, Author } from "@/lib/constants";
import Link from "next/link";
import { Avatar } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ChevronLeft } from "lucide-react";
import { unstable_ViewTransition as ViewTransition } from "react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";

export default function AuthorPageClient({
  author,
  authorArticles,
}: {
  author: Author;
  authorArticles: Article[];
}) {
  return (
    <div className="container mx-auto py-10">
      <Link href="/">
        <Button variant="ghost" className="mb-6 flex items-center gap-1">
          <ChevronLeft className="h-4 w-4" />
          Back to articles
        </Button>
      </Link>

      <div className="mx-auto max-w-4xl">
        <div className="mb-10 flex flex-col items-center text-center">
          <ViewTransition
            name={`article-${authorArticles[0].slug}-author-avatar`}
          >
            <Avatar className="h-24 w-24 mb-4">
              <img src={authorArticles[0].author.avatar} />
            </Avatar>
          </ViewTransition>

          <ViewTransition
            name={`article-${authorArticles[0].slug}-author-name`}
          >
            <h1 className="text-3xl font-bold">{author.name}</h1>
          </ViewTransition>
          <p className="mt-2 text-muted-foreground max-w-md">
            Author of {authorArticles.length} article
            {authorArticles.length !== 1 ? "s" : ""}
          </p>
        </div>

        <h2 className="text-2xl font-semibold mb-6">
          Articles by {author.name}
        </h2>

        <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2">
          {authorArticles.map((article) => (
            <Card
              key={article.slug}
              className="overflow-hidden transition-all hover:shadow-lg pt-0"
            >
              <ViewTransition name={`article-${article.slug}-cover-image`}>
              <div className="aspect-video w-full overflow-hidden">
                <img
                  src={article.coverImage || "/placeholder.svg"}
                  alt={article.title}
                  className="h-full w-full object-cover transition-transform rounded-t-md hover:scale-105"
                />
                </div>
              </ViewTransition>
              <CardHeader className="p-4 pb-0">
                <div className="flex items-center gap-2">
                  <Badge variant="outline">{article.category}</Badge>
                  <span className="text-xs text-muted-foreground">
                    {article.readingTime} min read
                  </span>
                </div>
                <ViewTransition name={`article-${article.slug}-title`}>
                  <h2 className="mt-2 line-clamp-2 text-xl font-bold">
                    {article.title}
                  </h2>
                </ViewTransition>
              </CardHeader>
              <CardContent className="p-4 pt-2">
                <p className="line-clamp-3 text-muted-foreground">
                  {article.excerpt}
                </p>
              </CardContent>
              <CardFooter className="px-4 py-0 flex flex-col gap-2 items-start">
                  <span className="text-xs text-muted-foreground">
                    Published on {article.publishedAt}
                  </span>
                  <Button asChild>
                    <Link href={`/article/${article.slug}`}>Read More</Link>
                  </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
