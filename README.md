# Next.js View Transitions Demo

This project demonstrates the use of the View Transitions API in Next.js to create smooth, animated transitions between pages in a blog application.

## Features

- Smooth page transitions using the experimental View Transitions API
- Blog article listing with card components
- Article detail pages with animated transitions
- Author pages with related articles
- Responsive design using Tailwind CSS
- Built with shadcn/ui components

## Demo

https://github.com/user-attachments/assets/8659d63c-f0c3-47ec-af9c-6ff9370de18e

## Technologies Used

- Next.js 15
- React 19
- Tailwind CSS 4
- shadcn/ui components
- View Transitions API

## Getting Started

1. Clone the repository
2. Install dependencies:

```bash
npm install
# or
yarn install
# or
pnpm install
# or
bun install
```

3. Run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the application

## How It Works

The project uses the experimental View Transitions API to create smooth transitions between pages. Key elements like article titles, images, and author information are wrapped in `ViewTransition` components with matching names across different pages, allowing the browser to animate between these elements during navigation.

## Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [View Transitions API](https://developer.mozilla.org/en-US/docs/Web/API/View_Transitions_API)
- [shadcn/ui](https://ui.shadcn.com/)
