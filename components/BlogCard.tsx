import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { AnimatedInView } from "@/components/AnimatedInView";
import type { BlogPost } from "@/lib/blog";

type BlogCardProps = {
  post: BlogPost;
  delay?: number;
};

export default function BlogCard({ post, delay = 0 }: BlogCardProps) {
  const formattedDate = new Intl.DateTimeFormat("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric"
  }).format(new Date(post.publishedAt));

  return (
    <AnimatedInView delay={delay}>
      <Link
        href={`/blog/${post.slug}`}
        className="group block overflow-hidden rounded-[32px] border border-white/70 bg-[linear-gradient(180deg,rgba(255,255,255,0.98),rgba(241,247,252,0.92))] p-3 shadow-[0_20px_60px_rgba(7,17,31,0.08)] transition duration-300 hover:-translate-y-1.5 hover:shadow-[0_28px_80px_rgba(7,17,31,0.12)]"
      >
        <div className="relative h-64 overflow-hidden rounded-[26px]">
          <Image
            src={post.coverImage}
            alt={post.title}
            fill
            className="object-cover transition duration-500 group-hover:scale-[1.04]"
            sizes="(max-width: 768px) 100vw, 33vw"
          />
        </div>
        <div className="p-4 pb-5">
          <div className="flex flex-wrap items-center gap-3 text-xs font-semibold uppercase tracking-[0.18em] text-slate">
            <span>{post.category}</span>
            <span className="h-1 w-1 rounded-full bg-slate/40" />
            <span>{formattedDate}</span>
          </div>
          <h3 className="mt-4 text-2xl font-semibold tracking-tight text-ink">
            {post.title}
          </h3>
          <p className="mt-3 text-base leading-7 text-slate">{post.description}</p>
          <div className="mt-6 flex items-center justify-between border-t border-black/5 pt-5">
            <span className="text-sm font-semibold text-ink">Read article</span>
            <span className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-black/5 bg-white text-ink transition group-hover:bg-[#07111f] group-hover:text-white">
              <ArrowUpRight className="h-4 w-4" />
            </span>
          </div>
        </div>
      </Link>
    </AnimatedInView>
  );
}
