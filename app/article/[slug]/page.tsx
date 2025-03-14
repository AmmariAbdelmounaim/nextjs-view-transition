import Link from "next/link"
import { notFound } from "next/navigation"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { articles } from "@/lib/data"
import { ChevronLeft } from "lucide-react"

export default function ArticlePage({ params }: { params: { slug: string } }) {
  const article = articles.find((article) => article.slug === params.slug)

  if (!article) {
    notFound()
  }

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
          <img
            src={article.coverImage || "/placeholder.svg"}
            alt={article.title}
            className="h-[400px] w-full object-cover"
          />
        </div>

        <div className="mb-6 flex items-center gap-2">
          <Badge variant="outline">{article.category}</Badge>
          <span className="text-sm text-muted-foreground">{article.readingTime} min read</span>
        </div>

        <h1 className="mb-6 text-4xl font-bold tracking-tight">{article.title}</h1>

        <div className="mb-10 flex items-center gap-4">
          <Avatar className="h-12 w-12">
            <AvatarImage src={article.author.avatar} alt={article.author.name} />
            <AvatarFallback>{article.author.name.charAt(0)}</AvatarFallback>
          </Avatar>
          <div>
            <div className="font-medium">{article.author.name}</div>
            <div className="text-sm text-muted-foreground">Published on {article.publishedAt}</div>
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
  )
}

