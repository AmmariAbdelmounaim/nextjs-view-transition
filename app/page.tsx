import Link from "next/link"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { articles } from "@/lib/data"

export default function Home() {
  return (
    <div className="container mx-auto py-10">
      <header className="mb-10 text-center">
        <h1 className="text-4xl font-bold tracking-tight">My Blog</h1>
        <p className="mt-2 text-muted-foreground">A collection of thoughts and ideas</p>
      </header>

      <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {articles.map((article) => (
          <Link key={article.slug} prefetch={true} href={`/article/${article.slug}`}>
            <Card className="h-full overflow-hidden transition-all pt-0 hover:shadow-lg">
              <div className="aspect-video w-full overflow-hidden">
                <img
                  src={article.coverImage || "/placeholder.svg"}
                  alt={article.title}
                  className="h-full w-full object-cover transition-transform hover:scale-105"
                />
              </div>
              <CardHeader className="p-4 pb-0">
                <div className="flex items-center gap-2">
                  <Badge variant="outline">{article.category}</Badge>
                  <span className="text-xs text-muted-foreground">{article.readingTime} min read</span>
                </div>
                <h2 className="mt-2 line-clamp-2 text-xl font-bold">{article.title}</h2>
              </CardHeader>
              <CardContent className="p-4 pt-2">
                <p className="line-clamp-3 text-muted-foreground">{article.excerpt}</p>
              </CardContent>
              <CardFooter className="flex items-center gap-3 p-4 pt-0">
                <Avatar className="h-8 w-8">
                  <AvatarImage src={article.author.avatar} alt={article.author.name} />
                  <AvatarFallback>{article.author.name.charAt(0)}</AvatarFallback>
                </Avatar>
                <div className="flex flex-col">
                  <span className="text-sm font-medium">{article.author.name}</span>
                  <span className="text-xs text-muted-foreground">{article.publishedAt}</span>
                </div>
              </CardFooter>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  )
}

