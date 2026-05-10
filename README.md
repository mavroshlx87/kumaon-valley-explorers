# Kumaon Valley Explorers

A modern, production-ready website built for Kumaon Valley Explorers using Next.js 15, TypeScript, and Tailwind CSS (v4). The project is built focusing on extreme performance, SEO, beautiful Himalayan-inspired aesthetics, and minimal third-party dependencies.

## Key Features

- **Next.js 15 App Router**: Leverage the latest performance features of Next.js.
- **Tailwind CSS v4**: Blazing fast styling using the new Tailwind PostCSS implementation.
- **Agentic Support Ready**: A Chat widget and API route stub are included for easy LLM integration.
- **Centralized Data & Config**: Easily customize the brand, navigation, and page content via `src/config/site.ts` and `src/content/data.ts`.
- **Zero UI Dependencies**: Fully customized and accessible UI components built cleanly with raw Tailwind to keep the bundle as compact as possible.
- **Fast Client-Side Forms**: Custom validation without heavy libraries.

## Project Structure

- `/src/app`: Next.js 15 App Router pages and global CSS.
- `/src/components`: Reusable UI components (Navbar, Footer, Contact Form, Chat Widget).
- `/src/config/site.ts`: Central configuration for brand name, colors, and links. Edit this to rebrand the entire site easily.
- `/src/content/data.ts`: Structured data for Destinations, Experiences, Team, and Blog.
- `/public/logo`: Scalable SVG logos (Icon and Full versions).

## Local Development

1. Install dependencies:
   ```bash
   npm install
   ```

2. Run the development server:
   ```bash
   npm run dev
   ```

3. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Customization Guide

1. **Brand Identity**: Update `src/config/site.ts`.
2. **Theme Colors**: Open `src/app/globals.css` and adjust the CSS variables under `:root` and `@media (prefers-color-scheme: dark)`.
3. **Content**: Open `src/content/data.ts` to add or remove trekking destinations, team members, or blog posts.

## Agentic AI Support Integration

The codebase has been prepared for future AI Customer Support:
- **UI Element**: `src/components/chat-widget.tsx` (Currently a placeholder).
- **Backend**: `src/app/api/chat/route.ts`. Add your OpenAI/Gemini SDK here to stream responses to the chat widget.

## Deployment & Hosting Recommendation

For the best cost-effective, scalable hosting solution, we strongly recommend **Vercel** (the creators of Next.js).

### Step-by-Step Vercel Deployment

1. Push your code to a GitHub repository.
2. Go to [Vercel.com](https://vercel.com/) and sign up / log in with GitHub.
3. Click **Add New Project** and select your repository.
4. Vercel will automatically detect that it's a Next.js project.
5. Add any necessary Environment Variables (e.g., `NEXT_PUBLIC_SITE_URL`).
6. Click **Deploy**. Your site will be live and globally distributed within minutes.

### Alternatives
- **Cloudflare Pages**: Excellent for edge rendering and very cheap bandwidth.
- **Netlify**: Great community and easy integrations.
