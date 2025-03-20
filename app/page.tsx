import Link from "next/link";
import { Avatar } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { articles } from "@/lib/constants";
import { unstable_ViewTransition as ViewTransition } from "react";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <ViewTransition>
      <div className="container mx-auto py-10">
        <header className="mb-10 text-center">
          <h1 className="text-4xl font-bold tracking-tight">My Blog</h1>
          <p className="mt-2 text-muted-foreground">
            A collection of thoughts and ideas
          </p>
        </header>

        <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {articles.map((article) => (
            <Card
              key={article.slug}
              className="overflow-hidden transition-all hover:shadow-lg pt-0"
            >
              <div className="aspect-video w-full overflow-hidden">
                <ViewTransition name={`article-${article.slug}-cover-image`}>
                  <img
                    src={article.coverImage || "/placeholder.svg"}
                    alt={article.title}
                    className="h-full rounded-t-lg z-50 w-full object-cover transition-transform hover:scale-105"
                  />
                </ViewTransition>
              </div>

              <CardHeader className="p-4 pb-0">
                <div className="flex items-center gap-2">
                  <Badge variant="outline">{article.category}</Badge>
                  <span className="text-xs text-muted-foreground">
                    {article.readingTime} min read
                  </span>
                </div>
                <ViewTransition name={`article-${article.slug}-title`}>
                  <h2 className="mt-2 line-clamp-2 text-xl font-bold inline-block">
                    {article.title}
                  </h2>
                </ViewTransition>
              </CardHeader>
              <CardContent className="p-4 pt-2">
                <p className="line-clamp-3 text-muted-foreground">
                  {article.excerpt}
                </p>
              </CardContent>
              <CardFooter className="flex flex-col gap-4 px-4 py-0">
                <div className="flex items-center gap-3 w-full">
                  <ViewTransition
                    name={`article-${article.slug}-author-avatar`}
                  >
                    <Link
                      className="hover:opacity-80 transition-opacity"
                      href={`/author/${article.author.name
                        .toLowerCase()
                        .replace(/\s+/g, "-")}`}
                    >
                      <Avatar className="h-8 w-8 inline-block">
                        <img src={article.author.avatar} />
                      </Avatar>
                    </Link>
                  </ViewTransition>

                  <div className="flex flex-col">
                    <ViewTransition
                      name={`article-${article.slug}-author-name`}
                    >
                      <span className="text-sm font-medium inline-block">
                        {article.author.name}
                      </span>
                    </ViewTransition>
                    <ViewTransition
                      name={`article-${article.slug}-published-at`}
                    >
                      <span className="text-xs text-muted-foreground">
                        {article.publishedAt}
                      </span>
                    </ViewTransition>
                  </div>
                </div>
                <Link
                  href={`/article/${article.slug}`}
                  prefetch={true}
                  className="w-full"
                >
                  <Button>Read more</Button>
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </ViewTransition>
  );
}
