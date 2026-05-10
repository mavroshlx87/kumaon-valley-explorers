import { blogPosts } from "@/content/data";
import Link from "next/link";

export const metadata = {
  title: "Stories & Wisdom",
  description: "Read travel tips, spiritual insights, and stories from the Himalayas.",
};

export default function BlogPage() {
  return (
    <div className="container mx-auto px-4 py-16 max-w-6xl">
      <div className="text-center mb-20">
        <h1 className="text-4xl md:text-5xl font-light mb-6 text-primary font-serif">Stories & Wisdom</h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
          Reflections, spiritual insights, and gentle guides to help you prepare for a peaceful journey to Kumaon.
        </p>
      </div>

      <div className="max-w-3xl mx-auto space-y-10">
        {blogPosts.map((post) => (
          <article key={post.id} className="bg-card border border-border rounded-3xl p-10 hover:shadow-xl transition-all duration-300">
            <div className="text-sm text-secondary font-medium tracking-widest uppercase mb-4">{post.date}</div>
            <h2 className="text-3xl font-medium text-foreground mb-4 font-serif leading-tight">
              <Link href={`/blog/${post.id}`} className="hover:text-primary transition-colors">
                {post.title}
              </Link>
            </h2>
            <p className="text-muted-foreground mb-8 text-lg leading-relaxed">{post.excerpt}</p>
            <Link href={`/blog/${post.id}`} className="text-primary font-medium hover:underline flex items-center gap-2 transition-colors">
              Read Full Story
              <span aria-hidden="true">&rarr;</span>
            </Link>
          </article>
        ))}
      </div>
    </div>
  );
}
