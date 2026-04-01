import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

import { AnimatedInView } from "@/components/AnimatedInView";
import { JsonLd } from "@/components/JsonLd";
import { OpenQuoteButton } from "@/components/OpenQuoteButton";
import { blogPosts, getPostBySlug } from "@/lib/blog";
import { buildMetadata, createArticleSchema } from "@/lib/seo";

type BlogPostPageProps = {
  params: {
    slug: string;
  };
};

function formatDate(value: string) {
  return new Intl.DateTimeFormat("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric"
  }).format(new Date(value));
}

export function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug
  }));
}

export function generateMetadata({ params }: BlogPostPageProps): Metadata {
  const post = getPostBySlug(params.slug);

  if (!post) {
    return buildMetadata({
      title: "Article Not Found",
      description: "The requested article could not be found.",
      path: "/blog"
    });
  }

  return buildMetadata({
    title: post.title,
    description: post.description,
    path: `/blog/${post.slug}`
  });
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const post = getPostBySlug(params.slug);

  if (!post) {
    notFound();
  }

  return (
    <>
      <JsonLd data={createArticleSchema(post)} />

      <article className="section-space pt-32 md:pt-36">
        <div className="shell">
          <AnimatedInView className="mx-auto max-w-4xl">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-sm font-medium text-slate transition hover:text-ink"
            >
              Back to blog
            </Link>
            <div className="mt-8 flex flex-wrap items-center gap-3 text-sm font-semibold uppercase tracking-[0.18em] text-slate">
              <span>{post.category}</span>
              <span className="h-1 w-1 rounded-full bg-slate/40" />
              <span>{formatDate(post.publishedAt)}</span>
              <span className="h-1 w-1 rounded-full bg-slate/40" />
              <span>{post.readTime}</span>
            </div>
            <h1 className="mt-5 text-4xl font-semibold tracking-tight md:text-6xl">
              {post.title}
            </h1>
            <p className="mt-6 max-w-3xl text-xl leading-8 text-slate">
              {post.description}
            </p>
          </AnimatedInView>

          <AnimatedInView className="mx-auto mt-12 max-w-5xl overflow-hidden rounded-[32px] border border-white/70 bg-white/70 shadow-card">
            <div className="relative aspect-[16/8]">
              <Image
                src={post.coverImage}
                alt={post.title}
                fill
                priority
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 960px"
              />
            </div>
          </AnimatedInView>

          <div className="mx-auto mt-14 grid max-w-5xl gap-10 lg:grid-cols-[0.78fr_0.22fr]">
            <div className="space-y-10">
              {post.sections.map((section, index) => (
                <AnimatedInView
                  key={section.heading}
                  delay={index * 0.05}
                  className="panel p-8 md:p-10"
                >
                  <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
                    {section.heading}
                  </h2>
                  <div className="mt-5 space-y-5">
                    {section.paragraphs.map((paragraph) => (
                      <p key={paragraph} className="text-lg leading-8 text-slate">
                        {paragraph}
                      </p>
                    ))}
                  </div>
                </AnimatedInView>
              ))}
            </div>

            <AnimatedInView className="panel h-fit p-6 lg:sticky lg:top-28">
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-slate">
                Next step
              </p>
              <h2 className="mt-4 text-2xl font-semibold tracking-tight">
                Want this level of clarity in your brand and marketing?
              </h2>
              <p className="mt-3 text-base leading-7 text-slate">
                We help teams turn ideas into polished systems across positioning,
                websites, content, and performance.
              </p>
              <div className="mt-6 flex flex-col gap-3">
                <OpenQuoteButton>Get Quote</OpenQuoteButton>
                <Link href="/services" className="button-secondary text-center">
                  View services
                </Link>
              </div>
            </AnimatedInView>
          </div>
        </div>
      </article>
    </>
  );
}
