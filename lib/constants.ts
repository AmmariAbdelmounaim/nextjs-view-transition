export type Article = {
  slug: string;
  title: string;
  excerpt: string;
  content: string[];
  coverImage: string;
  publishedAt: string;
  readingTime: number;
  category: string;
  author: Author;
};

export type Author = {
  name: string;
  avatar: string;
  bio: string;
};

export const articles: Article[] = [
  {
    slug: "getting-started-with-nextjs",
    title: "Getting Started with Next.js: A Comprehensive Guide",
    excerpt:
      "Learn how to build modern web applications with Next.js, the React framework for production.",
    content: [
      "Next.js has emerged as one of the most popular frameworks for building React applications. It provides a seamless developer experience with features like server-side rendering, static site generation, and API routes.",
      "In this comprehensive guide, we'll explore the core concepts of Next.js and how to leverage its powerful features to build fast, SEO-friendly web applications.",
      "One of the key advantages of Next.js is its file-based routing system. Simply create a file in the pages directory, and it automatically becomes a route in your application. This intuitive approach simplifies the development process and makes your codebase more maintainable.",
      "Next.js also excels at optimizing performance. With automatic code splitting, your application only loads the JavaScript needed for the current page, resulting in faster load times and a better user experience.",
      "Another standout feature is Next.js's built-in image optimization. The Image component automatically optimizes images for different devices and viewport sizes, ensuring optimal performance without sacrificing quality.",
      "Whether you're building a personal blog, an e-commerce site, or a complex web application, Next.js provides the tools and flexibility you need to succeed. Its growing ecosystem and active community make it an excellent choice for modern web development.",
    ],
    coverImage: "https://picsum.photos/seed/nextjs/1200/600",
    publishedAt: "March 10, 2025",
    readingTime: 8,
    category: "Development",
    author: {
      name: "Alex Johnson",
      avatar: "https://i.pravatar.cc/100?img=1",
      bio: "Alex is a software engineer with a passion for building scalable and efficient web applications.",
    },
  }
];
