import { PageHeader } from "@/components/PageHeader";
import BlogCard from "@/components/BlogCard";
import { blogPosts } from "@/lib/blog";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Blog",
  description:
    "Read sample posts on brand strategy, content systems, and performance marketing from Influence Axis.",
  path: "/blog"
});

export default function BlogPage() {
  return (
    <section className="section-space pt-32 md:pt-36">
      <div className="shell">
        <PageHeader
          eyebrow="Blog"
          title="Ideas for modern teams building sharper brands and better growth engines."
          description="Sample editorial content gives your company profile site a polished thought leadership layer with clean URLs, dynamic metadata, and article pages ready to scale."
        />

        <div className="mt-16 grid gap-6 lg:grid-cols-3">
          {blogPosts.map((post, index) => (
            <BlogCard key={post.slug} post={post} delay={Math.min(index * 0.08, 0.24)} />
          ))}
        </div>
      </div>
    </section>
  );
}
